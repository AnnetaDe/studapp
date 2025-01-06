import { NextResponse } from 'next/server';
import { authService } from '@/services/auth.service';

export async function middleware() {
  const { refreshToken } = (await authService.refresh()).data;
  if (!refreshToken) {
    return NextResponse.redirect('/login');
  }
  return NextResponse.next();
}

export async function getNewTokensByRefresh(refreshToken: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `refresh-token=${refreshToken}`,
    },
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch new tokens');
  }

  const data = await response.json();
  return data;
}
