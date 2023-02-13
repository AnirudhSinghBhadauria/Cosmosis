import React, { memo, Fragment, useState } from "react";

const HeroPhotoSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const imageLoadHandeler = () => setIsLoading(false);

  const imageRowOne = [
    {
      key: "one",
      src: "https://firebasestorage.googleapis.com/v0/b/cosmosis-ff4d9.appspot.com/o/Hero%20Photo%20Section%2F1.webp?alt=media&token=a6aaca27-9890-4d8f-9f08-acf90e7ad93e",
      alt: "photo-section-image-1",
    },
    {
      key: "two",
      src: "https://firebasestorage.googleapis.com/v0/b/cosmosis-ff4d9.appspot.com/o/Hero%20Photo%20Section%2F2.webp?alt=media&token=da458601-e9af-494d-9387-1bc7c0158b3f",
      alt: "photo-section-image-2",
    },
    {
      key: "three",
      src: "https://firebasestorage.googleapis.com/v0/b/cosmosis-ff4d9.appspot.com/o/Hero%20Photo%20Section%2F3.webp?alt=media&token=d6529319-b01c-41e0-bd6f-62e4c55332f8",
      alt: "photo-section-image-3",
    },
  ];

  const imageRowTwo = [
    {
      key: "four",
      src: "https://firebasestorage.googleapis.com/v0/b/cosmosis-ff4d9.appspot.com/o/Hero%20Photo%20Section%2F4.webp?alt=media&token=76adc119-f947-4b6a-99ee-8ed73822da8a",
      alt: "photo-section-image-4",
    },
    {
      key: "five",
      src: "https://firebasestorage.googleapis.com/v0/b/cosmosis-ff4d9.appspot.com/o/Hero%20Photo%20Section%2F5.webp?alt=media&token=a711f722-0c8b-4c7b-bf68-e53bd8780d55",
      alt: "photo-section-image-5",
    },
    {
      key: "six",
      src: "https://firebasestorage.googleapis.com/v0/b/cosmosis-ff4d9.appspot.com/o/Hero%20Photo%20Section%2F6.webp?alt=media&token=592d693c-7e58-4668-879c-2e0c722c85f4",
      alt: "photo-section-image-6",
    },
  ];

  const imageRowThree = [
    {
      key: "seven",
      src: "https://firebasestorage.googleapis.com/v0/b/cosmosis-ff4d9.appspot.com/o/Hero%20Photo%20Section%2F7.webp?alt=media&token=c8ba2f77-5f94-4b4f-aa72-7dc37f1dd046",
      alt: "photo-section-image-7",
    },
    {
      key: "eight",
      src: "https://firebasestorage.googleapis.com/v0/b/cosmosis-ff4d9.appspot.com/o/Hero%20Photo%20Section%2F8.webp?alt=media&token=e8edc22e-bd11-4139-86a8-2c13761b7e74",
      alt: "photo-section-image-8",
    },
    {
      key: "nine",
      src: "https://firebasestorage.googleapis.com/v0/b/cosmosis-ff4d9.appspot.com/o/Hero%20Photo%20Section%2F9.webp?alt=media&token=35b68000-ebbb-4310-8328-287af9469f95",
      alt: "photo-section-image-9",
    },
  ];

  return (
    <Fragment>
      <div>
        {imageRowOne.map(({ src, alt, key }) => {
          return (
            <div key={key} className={isLoading ? "loading" : "notLoading"}>
              <img
                onLoad={imageLoadHandeler}
                decoding="async"
                key={key}
                src={src}
                alt={alt}
                fetchpriority="high"
                loading="eager"
              />
            </div>
          );
        })}
      </div>
      <div>
        {imageRowTwo.map(({ src, alt, key }) => {
          return (
            <div key={key} className={isLoading ? "loading" : "notLoading"}>
              <img
                onLoad={imageLoadHandeler}
                decoding="async"
                key={key}
                src={src}
                alt={alt}
                fetchpriority="high"
                loading="eager"
              />
            </div>
          );
        })}
      </div>
      <div>
        {imageRowThree.map(({ src, alt, key }) => {
          return (
            <div key={key} className={isLoading ? "loading" : "notLoading"}>
              <img
                onLoad={imageLoadHandeler}
                decoding="async"
                key={key}
                src={src}
                alt={alt}
                fetchpriority="high"
                loading="eager"
              />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default memo(HeroPhotoSection);
