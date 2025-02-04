```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the middleware is not configured correctly
  const user = JSON.parse(localStorage.getItem('user'));
  
  return (
    <div>
      <h1>About Page</h1>
      {user && <p>Welcome, {user.name}!</p>}
    </div>
  );
}
```