import type { NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      
      // Public paths ko define karein
      const isPublicPath = ['/login', '/', '/register'].includes(
        nextUrl.pathname
      );

      // Agar user logged in nahi hai aur protected route par jane ki koshish kar raha hai
      if (!isLoggedIn && !isPublicPath) {
        return false; // authentication fail
      }

      // Agar user logged in hai aur public path par jana chahta hai
      if (isLoggedIn && isPublicPath) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      return true;
    },
  },
  providers: [], 
};