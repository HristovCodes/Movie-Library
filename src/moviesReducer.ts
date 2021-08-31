interface Movie {
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

type MoviesState = Movie[];

//eslint-disable-next-line
const initialState = new Array();

type Action = { type: "UPDATE_MOVIES"; payload: MoviesState };

export const moviesReducer = (
  state: MoviesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "UPDATE_MOVIES": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
