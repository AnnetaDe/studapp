'use client';
import { useUserContext } from '@/app/UserProvider';
import { authService } from '@/services/auth.service';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { testService } from '../../../services/test.service';
import Link from 'next/link';

export default function DashBoard() {
  const { user, loading } = useUserContext();
  if (!user) {
    return (
      <div className="m-4">
        <p>Please login to see your progress...</p>
        <Link href="/login">Login</Link>
      </div>
    );
  }
  console.log('user', user);
  const user_id = user.data.user._id;
  const { data, error, isLoading } = useQuery({
    queryKey: ['performance'],
    queryFn: () => testService.performance({ user_id }),
    enabled: !!user,
  });

  if (isLoading) return <div>Loading dashboard...</div>;
  if (error) return <div>Opps!... {error.message}</div>;

  return <div className="m-4">DashBoard</div>;
}
