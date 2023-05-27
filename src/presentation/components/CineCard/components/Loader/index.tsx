import Skeleton from 'react-loading-skeleton';
import { ThemeConsumer } from 'styled-components';
import { CineCardLoaderProps } from 'types/presentation/cine';

export function CineCardLoader({ count, wrapper }: CineCardLoaderProps) {
  return (
    <ThemeConsumer>
      {({ colors, rounded }) => (
        <Skeleton
          width={130}
          height={205}
          borderRadius={rounded.small}
          count={count}
          wrapper={wrapper}
          baseColor={colors.blackAlpha[50]}
        />
      )}
    </ThemeConsumer>
  );
}
