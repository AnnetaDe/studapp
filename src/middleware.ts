import { NextRequest, NextResponse } from 'next/server';
import { authService } from './services/auth.service';
// import { request } from 'http';
import Cookies from 'js-cookie';

export function middleware(request: NextRequest) {
    // retrieve the current response
    const res = NextResponse.next();

    // add the CORS headers to the response
    res.headers.append('Access-Control-Allow-Credentials', 'true');
    res.headers.append('Access-Control-Allow-Origin', '*'); // replace this your actual origin
    res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
    res.headers.append(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
}

//     // Extract tokens from cookies
//     const refreshToken = authService.refresh;
//     const accessToken = Cookies.get('access_token');
//     console.log('accessToken', accessToken);

//     if (!accessToken) {
//         // No access or refresh token available; redirect to login
//         return NextResponse.redirect(new URL('/login', request.url));
//     }

//     // Allow the request to proceed
//     return res;
// }

// // specify the path regex to apply the middleware to
// export const config = {
//     matcher: ['/api/:path*', '/dashboard/:path*', '/generate/:path*', '/desk/:path*'], // Protect these routes
// };

// // export async function middleware(request: NextRequest) {
// //   // Extract tokens from cookies
// const refreshToken = authService.refresh;
// const accessToken = Cookies.get('access_token');
// console.log('accessToken', accessToken);

//     ***************************************************************
// console.log('refreshToken', refreshToken);

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
