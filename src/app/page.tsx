import axios from 'axios';
import { Home } from 'presentation/ui/home';
import { Suspense } from 'react';

export default function HomePage() {
  axios.get('/api/media/movies');

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Home />
    </Suspense>
  );
}
