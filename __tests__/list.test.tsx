import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import ListPage from "../app/list/page";
import { GET_ALL_CHARACTERS } from "@/queries/queries";

const mocks = [
  {
    request: {
      query: GET_ALL_CHARACTERS,
    },
    result: {
      data: {
        characters: {
          results: [
            {
              name: "Rick",
              id: 3,
              image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
            },
            {
              name: "Morty",
              id: 2,
              image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
            },
          ],
        },
      },
      loading: false,
      error: false,
    },
  },
];

const mocksLoading = [
  {
    request: {
      query: GET_ALL_CHARACTERS,
    },
    result: {
      loading: true,
      data: {},
      error: false,
    },
  },
];

it.skip("all characters are rendered after graphql call", async () => {
  render(
    <MockedProvider addTypename={false} mocks={mocks}>
      <ListPage />
    </MockedProvider>
  );

  const name1 = await screen.findByText("Rick");
  const name2 = await screen.findByText("Morty");

  expect(name1).toBeInTheDocument();
  expect(name2).toBeInTheDocument();
});

it("renders loading spinner while loading", () => {
  render(
    <MockedProvider addTypename={false} mocks={mocksLoading}>
      <ListPage />
    </MockedProvider>
  );

  const loader = screen.queryByTestId("loader-testid");

  expect(loader).toBeInTheDocument();
});
