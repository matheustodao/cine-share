import { Home } from 'presentation/ui/home';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Home />
    </Suspense>
  );
}
