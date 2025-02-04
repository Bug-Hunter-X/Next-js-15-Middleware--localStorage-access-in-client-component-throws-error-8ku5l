```javascript
// pages/about.js

export default function About() {
  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null; 

  return (
    <div>
      <h1>About Page</h1>
      {user ? <p>Welcome, {user.name}!</p> : <p>Please log in.</p>}
    </div>
  );
}
```
```javascript
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  //  Middleware logic here, e.g., authentication
  const url = req.nextUrl.clone();
  
  // For demonstration, setting a cookie (replace with your actual auth logic)
  url.setCookie('auth', 'true',{httpOnly:true});

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: '/about',
};
```