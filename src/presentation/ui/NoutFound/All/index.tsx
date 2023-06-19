'use client';

import Image from 'next/image';
import { Text } from 'presentation/components/Typography/Text';
import { Title } from 'presentation/components/Typography/Title';

import { useTranslation } from 'app/i18n';
import * as Root from './styles';

export function NotFoundCatchAllUI() {
  const { t } = useTranslation('common');

  return (
    <Root.Container>
      <Title size="xl" as="h1">
        {t('notFound.inBuilding.title')}
      </Title>

      <div className="wrapper-image">
        <Image
          src="/assets/images/notfound.png"
          alt="Pagina não encontrada"
          fill
        />
      </div>

      <Text schema={600} as="p">
        {t('notFound.inBuilding.description')}
      </Text>
    </Root.Container>
  );
}
