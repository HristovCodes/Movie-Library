import React from "react";
import {
  act,
  getByPlaceholderText,
  screen,
  waitFor,
  getByText,
} from "@testing-library/react";
import { render, unmountComponentAtNode } from "react-dom";
import SearchForm from "./SearchForm";
import App from "../App";
import userEvent from "@testing-library/user-event";

let container = null;

beforeEach(() => {
  // setup
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // clean after each test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("component search form renders correctly", () => {
  act(() => {
    render(<SearchForm></SearchForm>, container);
  });

  expect(container).toBeInTheDocument();
});

it("correct search returns correct value", async () => {
  const fakeData = [
    {
      score: 0.86401975,
      show: {
        id: 52361,
        url: "https://www.tvmaze.com/shows/52361/cars",
        name: "Cars",
        type: "Animation",
        language: "English",
        genres: [],
        status: "In Development",
        runtime: null,
        averageRuntime: null,
        premiered: null,
        officialSite: null,
        schedule: {
          time: "",
          days: [],
        },
        rating: {
          average: null,
        },
        weight: 0,
        network: null,
        webChannel: {
          id: 287,
          name: "Disney+",
          country: null,
        },
        dvdCountry: null,
        externals: {
          tvrage: null,
          thetvdb: null,
          imdb: null,
        },
        image: null,
        summary:
          "<p>Pixar is speeding ahead with a new series following Lightning McQueen and Mater on a road trip across the country. Featuring new characters, old friends, and imaginative destinations. Coming to Disney+ in Fall 2022.</p>",
        updated: 1607679181,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/52361",
          },
        },
      },
    },
    {
      score: 0.697955,
      show: {
        id: 1715,
        url: "https://www.tvmaze.com/shows/1715/counting-cars",
        name: "Counting Cars",
        type: "Reality",
        language: "English",
        genres: [],
        status: "Running",
        runtime: 60,
        averageRuntime: 33,
        premiered: "2012-08-13",
        officialSite: "http://www.history.com/shows/counting-cars",
        schedule: {
          time: "21:00",
          days: ["Wednesday"],
        },
        rating: {
          average: 7.9,
        },
        weight: 94,
        network: {
          id: 53,
          name: "History",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: 32440,
          thetvdb: 261181,
          imdb: "tt2338096",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/323/807695.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/323/807695.jpg",
        },
        summary:
          '<p>Most people in Las Vegas bet with chips, but Danny "The Count" Koker bets with cars. Known from his numerous appearances on Pawn Stars, this Sin City legend walks, talks and breathes classic American muscle cars. When he sees a car he wants, he will do whatever it takes to get his hands on it—including making on-the-spot cash offers to unsuspecting owners. On the HISTORY series <b>Counting Cars</b>, Danny and his team restore, customize and sell cars in a hurry, scrambling to keep their Las Vegas shop in the black. From vintage Thunderbirds to classic Corvettes, toy cars to souped-up sidecar motorcycles, Danny and the crew of Count\'s Kustoms will stop at nothing to find and flip the greatest rides of all time.</p>',
        updated: 1629371941,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/1715",
          },
          previousepisode: {
            href: "https://api.tvmaze.com/episodes/1941241",
          },
        },
      },
    },
  ];

  jest.spyOn(global, "fetch").mockImplementation(() => {
    if (
      getByPlaceholderText(container, "Search by movie title...").value ===
      "cars"
    ) {
      return Promise.resolve({
        json: () => Promise.resolve(fakeData),
      });
    }

    return Promise.resolve({
      json: () => Promise.resolve({}),
    });
  });

  act(() => {
    render(<App></App>, container);
  });

  act(() => {
    userEvent.type(
      getByPlaceholderText(container, "Search by movie title..."),
      "cars"
    );
    userEvent.click(getByText(container, "Search"));
  });

  await waitFor(() => {
    expect(screen.getByText("Cars").innerHTML).toBe("Cars");
  });

  global.fetch.mockRestore();
});
