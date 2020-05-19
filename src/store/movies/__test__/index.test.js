import movieReducer, { initialState } from '../index';

describe('Movie Reducer Test', () => {
  const unknownAction = {
    type: 'unkonwn',
  };

  it('Should return current state in default case', () => {
    expect(movieReducer(undefined, unknownAction)).toEqual(initialState);
  });
});
