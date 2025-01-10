'use client';
import { authService } from '@/services/auth.service';
import type { Metadata } from 'next';

export default function Page() {
  const mytateProfile = {
    mutationFn: () => authService.profile(),
  };

  const ShowProfile = () => {
    mytateProfile.mutationFn();
  };

  return <button onClick={ShowProfile}>profile</button>;
}
