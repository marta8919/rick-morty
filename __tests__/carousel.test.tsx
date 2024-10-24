import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Carousel from "../app/components/carousel";
import userEvent from "@testing-library/user-event";

const images = [
  {
    src: "https://res.cloudinary.com/martacloud/image/upload/v1729767192/rick-morty-2_lypths.jpg",
    altText: "Rick and morty 1",
  },
  {
    src: "https://res.cloudinary.com/martacloud/image/upload/v1729767192/rick-morty-1_pdhsi7.jpg",
    altText: "Rick and morty 2",
  },
  {
    src: "https://res.cloudinary.com/martacloud/image/upload/v1729767191/rick-morty-3_yuyyrx.jpg",
    altText: "Rick and morty 3",
  },
];

describe("Carousel", () => {
  const user = userEvent.setup();

  it("initially only the second image is visible", () => {
    render(<Carousel />);

    const firstImage = screen.queryByRole("img", { name: images[0].altText });
    const secondImage = screen.getByRole("img", { name: images[1].altText });
    const thirdImage = screen.queryByRole("img", { name: images[2].altText });

    expect(firstImage).toBeNull();
    expect(secondImage).toBeInTheDocument();
    expect(thirdImage).toBeNull();
  });

  it("changes image when clicking on the buttons", async () => {
    render(<Carousel />);

    const thirdBtn = screen.getByRole("button", { name: "label-2" });

    await user.click(thirdBtn);

    const secondImage = screen.queryByRole("img", { name: images[1].altText });
    const thirdImage = await screen.findByRole("img", {
      name: images[2].altText,
    });

    expect(secondImage).toBeNull();
    expect(thirdImage).toBeInTheDocument();
  });
});
