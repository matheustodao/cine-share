'use client';

import { MediaSwiper } from 'presentation/components/MediaSwiper';

export function Home() {
  return (
    <section>
      <MediaSwiper title="Filmes em lançamentos" link="/cine/movies" media={[]} loading />
    </section>
  );
}
