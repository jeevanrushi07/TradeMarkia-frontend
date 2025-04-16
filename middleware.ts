import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname;

  // If the path is /search/trademarks, redirect to home with search params
  if (path === '/search/trademarks') {
    const searchParams = request.nextUrl.searchParams;
    const newUrl = new URL('/', request.url);
    
    // Copy all search params to the new URL
    searchParams.forEach((value, key) => {
      newUrl.searchParams.set(key, value);
    });

    // Redirect to home page with search params
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/search/trademarks',
}; 