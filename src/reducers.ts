export default interface Movie {
  score?: number;
  show?: {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    officialSite: string;
    schedule: {
      time: string;
      days: string[];
    };
    rating: {
      average: number;
    };
    weight: number;
    network: {
      id: number;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      };
    };
    webChannel: string;
    dvdCountry: string;
    externals: {
      tvrage: number;
      thetvdb: number;
      imdb: string;
    };
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    updated: number;
    _links: {
      self: {
        href: string;
      };
      previousepisode: {
        href: string;
      };
    };
  };
}

interface MoviesState {
  movies: Movie[];
  authUser: any;
}

//eslint-disable-next-line
const initialState = {
  movies: [],
  authUser: {},
};

type MoviesAction = { type: "UPDATE_MOVIES"; payload: Movie[] };
type AuthAction = { type: "UPDATE_USER"; payload: any };
type Action = MoviesAction | AuthAction;

export const moviesReducer = (
  state: MoviesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "UPDATE_MOVIES": {
      return { ...state, movies: action.payload };
    }
    case "UPDATE_USER": {
      return { ...state, authUser: action.payload };
    }
    default: {
      return state;
    }
  }
};
