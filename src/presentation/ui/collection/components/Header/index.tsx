'use client';

import { Pencil } from 'phosphor-react';
import { Text } from 'presentation/components/Typography/Text';
import { Title } from 'presentation/components/Typography/Title';

import { useSession } from 'next-auth/react';
import { CollectionUIHeaderProps } from 'types/presentation/collection';
import * as Root from './styles';

export function CollectionHeader({
  userEmail,
  name,
  description,
}: CollectionUIHeaderProps) {
  const { status, data } = useSession();

  return (
    <Root.Container>
      <div className="info">
        <div>
          <Title as="h1" size="xl" weight="semi">
            {name}
          </Title>
        </div>

        {/* TODO add feature to edit collection */}
        {(status === 'authenticated' && userEmail === data?.user?.email && false) && (
          <button type="button">
            <Pencil size={24} color="#fff" />
          </button>
        )}
      </div>

      {description && (
        <Text as="p" weight="xlight" schema={500}>
          {description}
        </Text>
      )}
    </Root.Container>
  );
}
