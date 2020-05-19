const movieLists = [
  {
    title: 'Holiday Inn',
    year: '1942',
    imdbID: 'tt0034862',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTUyODU0OTUwMF5BMl5BanBnXkFtZTgwMTE4NTQzMjE@._V1_SX300.jpg',
  },
  {
    title: 'Home for the Holidays',
    year: '1995',
    imdbID: 'tt0113321',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjVlYTQ4NjgtZWQxMS00ZmQ0LTg4M2QtOGE0ZmJiNDhkMzI4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
  },
  {
    title: 'Holiday in the Wild',
    year: '2019',
    imdbID: 'tt8510488',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMzc1MWI3MWMtYmNlYi00NjllLWIyNjctNWU2NWRjNjE2ZjhkXkEyXkFqcGdeQXVyNTU5MzI1OTM@._V1_SX300.jpg',
  },
  {
    title: 'Holidays',
    year: '2016',
    imdbID: 'tt4419364',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZTIyY2QwZTEtOGNlNC00ZjViLTk3YzAtZDc4MmRkZjY1YzFiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  },
  {
    title: 'Home Alone: The Holiday Heist',
    year: '2012',
    imdbID: 'tt2308733',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMzg2MDYyODMtMDhkYS00MWIyLWI2ZjItYmUwNmFjYjRhMWM3XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg',
  },
  {
    title: 'The Holiday Calendar',
    year: '2018',
    imdbID: 'tt8262802',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BY2ZhYWRlMWYtMDA2YS00ZDQ5LWFmMzctZjg2ZDAwOThmNmJjXkEyXkFqcGdeQXVyNjk2Mjc2OTI@._V1_SX300.jpg',
  },
  {
    title: "Pee-wee's Big Holiday",
    year: '2016',
    imdbID: 'tt0837156',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjIyODA1MzYyM15BMl5BanBnXkFtZTgwMjQxODYyODE@._V1_SX300.jpg',
  },
  {
    title: 'Holiday in Handcuffs',
    year: '2007',
    imdbID: 'tt0938666',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZGU3ZTIxMzUtYjE5ZS00YWJkLWI3NDEtNzQyZmVkNzRjYzNhXkEyXkFqcGdeQXVyMjczOTU2NTI@._V1_SX300.jpg',
  },
  {
    title: 'Kung Fu Panda Holiday',
    year: '2010',
    imdbID: 'tt1702433',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMDg4YTg2MDktYjBmMi00ZTE5LTliZTktNGZmN2JkYmM0YzEwXkEyXkFqcGdeQXVyODMxNzcyNDI@._V1_SX300.jpg',
  },
  {
    title: 'Holiday in the Sun',
    year: '2001',
    imdbID: 'tt0297169',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYjE5Yjk1ZjUtYTdiMC00NGJmLWE5MTItYzg4MzI2NTViMzRkXkEyXkFqcGdeQXVyNTE4MzAyNDk@._V1_SX300.jpg',
  },
];

const page2 = [
  {
    title: 'The Holiday',
    year: '2006',
    imdbID: 'tt0457939',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_SX300.jpg',
  },
  {
    title: 'Roman Holiday',
    year: '1953',
    imdbID: 'tt0046250',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTE2MDM4MTMtZmNkZC00Y2QyLWE0YjUtMTAxZGJmODMxMDM0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
  },
  {
    title: "Mr. Bean's Holiday",
    year: '2007',
    imdbID: 'tt0453451',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTM2NzQ1Mzc4M15BMl5BanBnXkFtZTcwNTk3NjA1MQ@@._V1_SX300.jpg',
  },
  {
    title: 'Last Holiday',
    year: '2006',
    imdbID: 'tt0408985',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMzY4ZjcxOTItNWQwOC00MmMxLTkzMjYtZmQwMTJiMGY5Y2JlXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_SX300.jpg',
  },
  {
    title: 'Holiday',
    year: '2014',
    imdbID: 'tt2556308',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTVkMzljMzUtZmIxMS00YWNlLTlkNDMtYmU0Nzc3MjU3OGUwXkEyXkFqcGdeQXVyODMyODMxNDY@._V1_SX300.jpg',
  },
  {
    title: 'What We Did on Our Holiday',
    year: '2014',
    imdbID: 'tt2725962',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTQzNzgxMjUwN15BMl5BanBnXkFtZTgwMjgwNDY3NTE@._V1_SX300.jpg',
  },
  {
    title: "Monsieur Hulot's Holiday",
    year: '1953',
    imdbID: 'tt0046487',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTk0OTc0Mjc1MV5BMl5BanBnXkFtZTgwMjI3ODYxMTE@._V1_SX300.jpg',
  },
  {
    title: 'The Best Man Holiday',
    year: '2013',
    imdbID: 'tt2083355',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjU0MTI1MDg5Ml5BMl5BanBnXkFtZTgwNzc2MTMzMDE@._V1_SX300.jpg',
  },
  {
    title: 'Holiday',
    year: '1938',
    imdbID: 'tt0030241',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTg4MDExMzIxOV5BMl5BanBnXkFtZTgwODg2MjcyMjE@._V1_SX300.jpg',
  },
  {
    title: 'The Star Wars Holiday Special',
    year: '1978',
    imdbID: 'tt0193524',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjJjMjEwMWEtZDcyNC00ODM3LThhZDctNTU0YzU1ZjQ1MmIyXkEyXkFqcGdeQXVyMjg5NDMwMQ@@._V1_SX300.jpg',
  },
];
export { page2 };
export default movieLists;
