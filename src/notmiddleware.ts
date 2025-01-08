// import { NextResponse } from 'next/server';
// import { NextRequest } from 'next/server';
// import { authService } from './services/auth.service';

// export async function middleware(request: NextRequest) {
//   // Extract tokens from cookies
//   const refreshToken = authService.refresh;
//   const accessToken = request.cookies.get('access_token')?.value;

//   if (!accessToken) {
//     // Attempt to fetch new tokens using the refresh token
//     // if (refreshToken) {
//     //   try {
//     //     const { access_token, refresh_token } = await getNewTokensByRefresh(refreshToken);

//     //     // Update cookies with new tokens
//     //     const response = NextResponse.next();
//     //     response.cookies.set('access_token', access_token, { httpOnly: true });
//     //     response.cookies.set('refresh_token', refresh_token, { httpOnly: true });

//     //     return response;
//     //   } catch (error) {
//     //     console.error('Failed to refresh tokens:', error);
//     //     return NextResponse.redirect(new URL('/login', request.url));
//     //   }
//     // }

//     // No access or refresh token available; redirect to login
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   // Allow the request to proceed
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/dashboard/:path*', '/generate/:path*', '/desk/:path'], // Protect these routes
// };
