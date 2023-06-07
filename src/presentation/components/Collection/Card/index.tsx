import { FilmSlate, Popcorn } from 'phosphor-react';
import { Text } from 'presentation/components/Typography/Text';
import { Title } from 'presentation/components/Typography/Title';
import { CollectionCardProps } from 'types/presentation/collection';
import { Container, Content, Icon } from './styles';

export function CollectionCard({ title, owner, countMedia }: CollectionCardProps) {
  return (
    <Container>
      <Icon>
        <Popcorn size={64} />
      </Icon>

      <Content>
        <div className="info">
          <Title as="strong" weight="semi">
            {title}
          </Title>
          <Text as="small" weight="xlight" size="xs">
            {owner}
          </Text>
        </div>

        <div className="footer">
          <Text as="span" weight="xlight">
            <FilmSlate size={24} />
            {countMedia}
          </Text>
        </div>
      </Content>
    </Container>
  );
}
