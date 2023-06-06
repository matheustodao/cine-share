import { CineCard } from 'presentation/components/CineCard';
import { RedirectComponent } from 'presentation/components/RedictComponent';
import { CollectionUIProps } from 'types/presentation/collection';
import { CollectionFooter } from './components/Footer';
import { CollectionHeader } from './components/Header';
import { Container, Content } from './styles';

export function CollectionUI({ collection }: CollectionUIProps) {
  if (!collection) {
    return (
      <RedirectComponent route="/" toastMessage="Coleção não encontrada" />
    );
  }
  return (
    <Container>
      <CollectionHeader
        userEmail={collection.user.email}
        name={collection.name}
        description={collection.description}
        userId={collection.user.id}
      />

      <Content>
        {collection.media.map((item) => (
          <CineCard
            key={item.id}
            id={item.tmdb_id}
            image={item.poster_path}
            type={item.type}
            original_language={item.original_language}
            title={item.title}
            userEmail={collection.user.email}
          />
        ))}
      </Content>

      <CollectionFooter
        userEmail={collection.user.email}
        collectionId={collection.id}
      />
    </Container>
  );
}
