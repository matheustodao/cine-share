'use client';

import { useInfiniteQuery } from 'react-query';
import { MagnifyingGlass } from '@phosphor-icons/react';

import { Input } from 'presentation/components/Form/Input';

import { getMultiSearch } from 'infra/services/media/getMultiSearch';
import {
  ChangeEvent, useMemo, useState,
} from 'react';
import { CineCard } from 'presentation/components/CineCard';
import { TMDBMultiSearch } from 'types/server/tmdb';
import { Loader } from 'presentation/components/Loader';
import { Text } from 'presentation/components/Typography/Text';
import { Button } from 'presentation/components/Button';
import { useTranslation } from 'app/i18n';
import * as Root from './styles';

export function SearchUI() {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation();
  const {
    data, isSuccess, refetch, isRefetching, isLoading, fetchNextPage, hasNextPage, isFetching,
  } = useInfiniteQuery('media_multi_search', ({ pageParam = 1 }) => getMultiSearch({ query: searchTerm, page: pageParam }), {
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;

      return lastPage.total_pages === nextPage ? lastPage.page : nextPage;
    },
    refetchOnWindowFocus: false,
  });

  const isResearch = (isLoading || isRefetching) && !!searchTerm;

  const mediaResponse = useMemo(() => {
    const parsePagesResults: TMDBMultiSearch[][] = [];

    data?.pages?.forEach((response) => {
      console.log(response);
      if (response?.results) {
        parsePagesResults.push(response.results);
      }
    });

    return parsePagesResults.flat();
  }, [data]);

  function handleChangeSearchTerm(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);

    setTimeout(() => {
      refetch();
    }, 500);
  }

  return (
    <Root.Container>
      <header>
        <Root.InputWrapper>
          <MagnifyingGlass />
          <Input
            type="search"
            placeholder={t('search.field.placeholder')}
            value={searchTerm}
            onChange={handleChangeSearchTerm}
          />
        </Root.InputWrapper>
      </header>

      {(isSuccess && mediaResponse && mediaResponse.length > 0) && (
        <>
          <Root.MediaList>
            {mediaResponse.map((result) => {
              if (result.media_type === 'person') {
                return result.known_for.map((media) => (
                  media.media_type === 'movie'
                    ? (
                      <CineCard
                        key={media.id}
                        id={media.id}
                        image={media.poster_path ?? media.backdrop_path}
                        title={media.title}
                        original_language={media.original_language}
                        type={media.media_type}
                      />
                    )
                    : media.media_type === 'tv' && (
                      <CineCard
                        key={media.id}
                        id={media.id}
                        image={media.poster_path ?? media.backdrop_path}
                        title={media.name}
                        original_language={media.original_language}
                        type={media.media_type}
                      />
                    )
                ));
              }

              return (
                <CineCard
                  key={result.id}
                  id={result.id}
                  image={result.poster_path ?? result.backdrop_path}
                  title={result.media_type === 'movie' ? result.title : result.name}
                  original_language={result.original_language}
                  type={result.media_type}
                />
              );
            })}
          </Root.MediaList>

          <Button
            className="btn-loader"
            outline
            loading={isFetching}
            disabled={!hasNextPage}
            onClick={() => fetchNextPage()}
          >
            {t('search.cta.loadMore')}
          </Button>
        </>
      )}

      {(isResearch && mediaResponse.length <= 0) && (
        <Loader />
      )}

      {!searchTerm && (
        <Text as="p" schema={600} weight="regular">
          {t('search.title')}
        </Text>
      )}
    </Root.Container>
  );
}
