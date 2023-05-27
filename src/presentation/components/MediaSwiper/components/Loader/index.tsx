import { CineCardLoader } from 'presentation/components/CineCard/components/Loader';
import Skeleton from 'react-loading-skeleton';
import { ThemeConsumer } from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { MediaSwiperList } from '../MediaSwiperList';

export function MediaSwiperLoader() {
  return (
    <ThemeConsumer>
      {({ colors }) => (
        <div>
          <div>
            <Skeleton height={32} width={200} baseColor={colors.blackAlpha[50]} />
          </div>

          <MediaSwiperList>
            {Array.from({ length: 20 }).map(() => (
              <SwiperSlide>
                <CineCardLoader />
              </SwiperSlide>
            ))}
          </MediaSwiperList>
        </div>
      )}
    </ThemeConsumer>
  );
}
