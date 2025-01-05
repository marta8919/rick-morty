import Detail from "@/app/detail/[id]/page";
import { GET_CHARACTER } from "@/queries/queries";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useParams } from "next/navigation";

jest.mock("next/navigation", () => ({
  useParams: jest.fn(),
}));

const mocks = [
  {
    request: {
      query: GET_CHARACTER,
      variables: {
        id: "1",
      },
    },

    result: {
      data: {
        character: {
          name: "Rick",
          gender: "male",
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
      query: GET_CHARACTER,
      variables: {
        id: "1",
      },
    },
    result: {
      loading: true,
      data: {},
      error: false,
    },
  },
];

describe("detail page", () => {
  it("renders the header", async () => {
    jest.mocked(useParams).mockReturnValue({ id: "1" });

    render(
      <MockedProvider addTypename={false} mocks={mocks}>
        <Detail />
      </MockedProvider>
    );

    const header = await screen.findByText(/detail page/i);

    expect(header).toBeInTheDocument();
  });
  it("should render a spinner when it`s loading", () => {
    jest.mocked(useParams).mockReturnValue({ id: "1" });

    render(
      <MockedProvider addTypename={false} mocks={mocksLoading}>
        <Detail />
      </MockedProvider>
    );

    const loader = screen.queryByTestId("loader-testid");

    expect(loader).toBeInTheDocument();
  });

  it("render the correct information", async () => {
    jest.mocked(useParams).mockReturnValue({ id: "1" });

    render(
      <MockedProvider addTypename={false} mocks={mocks}>
        <Detail />
      </MockedProvider>
    );

    const name = await screen.findByText("Rick");

    expect(name).toBeInTheDocument();
  });
});
