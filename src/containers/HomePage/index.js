import React, { useEffect } from 'react';

// components
import SearchForm from '../../components/SearchForm';
import MovieCardDeck from '../../components/MovieCardDeck';

// styled components
import {
  HomePageContainer,
  HeroContainer,
  Heading,
  SubHeading,
  CardDeckContainer,
} from './styled';
import useMovieStore from '../../hooks/useMovieStore';

function HomePage() {
  const {
    state: { isFetching, isFetched, list, search, error },
    actions: { fetchMovies, onSubmit },
  } = useMovieStore();

  useEffect(() => {
    if (!isFetching && !isFetched) {
      fetchMovies(search, 1);
    }
  }, []);

  return (
    <>
      <HomePageContainer>
        <HeroContainer>
          <Heading>Let's Find Your Favorite Movie</Heading>
          <SubHeading>
            We have thousands and counting movie collections to find, powered by
            OMDB we could find that movie that you love.
          </SubHeading>
          <SearchForm
            onSubmit={onSubmit}
            keyword={search}
            isLoading={isFetching}
            error={error}
          />
        </HeroContainer>
      </HomePageContainer>
      <CardDeckContainer data-testid="deck-container">
        <MovieCardDeck movies={list} isLoading={isFetching} error={error} />
      </CardDeckContainer>
    </>
  );
}

export default HomePage;
