import { X } from '@phosphor-icons/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { Button } from 'presentation/components/Button';
import { Text } from 'presentation/components/Typography/Text';
import { Title } from 'presentation/components/Typography/Title';
import { CineCollectionCardProps } from 'types/presentation/cine';
import { Container, Content } from './styles';

export function CineCollectionCard({ id, title, image }: CineCollectionCardProps) {
  const { status } = useSession();
  return (
    <Container>
      <Content>
        <div className="image">
          <Image
            src={image}
            alt={`${title} banner`}
            fill
            sizes="(min-width: 7px) 80px"
          />
        </div>

        <div className="info">
          <Title as="h3" size="medium">
            {title}
          </Title>
        </div>
      </Content>

      {status === 'authenticated' && (
        <div className="actions">
          <Button schemaColor="red" onClick={() => console.log(id)}>
            <Text>
              <X weight="bold" size={24} />
            </Text>
          </Button>
        </div>
      )}
    </Container>
  );
}
