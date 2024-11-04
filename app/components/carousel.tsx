"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../page.module.css";

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

export default function Carousel(): JSX.Element {
  const [slideIndex, setSlideIndex] = useState<number>(1);

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const nextSlide = (): void => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.carouselWrapper}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      data-testid='carousel'
    >
      <Image
        src={images[slideIndex].src}
        alt={images[slideIndex].altText}
        width={760}
        height={400}
        aria-label={images[slideIndex].altText}
      />
      <span className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={
              slideIndex === index ? styles.indicator : styles.indicatorInactive
            }
            onClick={() => setSlideIndex(index)}
            aria-label={`label-${index}`}
          ></button>
        ))}
      </span>
    </div>
  );
}
