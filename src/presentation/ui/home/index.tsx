'use client';

import { MediaSwiper } from 'presentation/components/MediaSwiper';
import { useHomeHandler } from 'presentation/handler/ui/Home';

export function Home() {
  const { queries } = useHomeHandler();

  return (
    <>
      {queries.movies.map((item) => (
        <section key={item.title}>
          <MediaSwiper
            title={item.title}
            media={item.data}
            loading={item.isLoading}
            link="/cine/movies"
          />
        </section>
      ))}

      {queries.tvShows.map((item) => (
        <section key={item.title}>
          <MediaSwiper
            title={item.title}
            media={item.data}
            loading={item.isLoading}
            link="/cine/tv"
          />
        </section>
      ))}
    </>
  );
}
