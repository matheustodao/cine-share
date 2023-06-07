import { getCollectionById } from 'infra/services/collection/getCollectionById';

import { CollectionUI } from 'presentation/ui/collection';

export default async function CollectionPage({ params }: { params: { collectionId: string } }) {
  const response = await getCollectionById(params.collectionId);

  return (
    <CollectionUI collection={response?.data} />
  );
}
