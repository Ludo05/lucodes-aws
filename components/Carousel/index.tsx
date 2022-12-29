import React, { useMemo, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { MOBILE } from '../../theme';
import useQuery from '../../hooks/useQuery';
import { GET_CASES } from '../../constants/graphs';

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  margin: 6rem auto;
`;

const Slider = styled.div<ISlider>`
  transition: all ease-in-out 500ms;
  background-image: ${(props: ISlider) => {
    return `url(${props.url})`;
  }};
  border: ${({ border }: ISlider) => {
    return border ? 'white 0.1rem solid' : 'none';
  }};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-position: center;
  background-size: 100% 100%;
`;

const ImageSliderContainer = styled.div`
  width: 90vw;
  height: 680px;
  margin: 0 auto;
`;

const SliderContainer = styled.div`
  height: 100%;
  position: relative;
`;

const Dots = styled.div`
  display: flex;
  justify-content: start;

  @media (max-width: ${MOBILE}) {
    display: flex;
    justify-content: center;
  }
`;

const Arrows = styled.span<IArrows>`
  cursor: pointer;
  position: absolute;
  transition: all 500ms;
  font-size: 45px;
  color: #fff;
  transform: translate(0, -50%);
  top: 50%;
  ${(props: IArrows) => {
    switch (props.$direction) {
      case 'left':
        return css`
          left: 32px;
        `;
      case 'right':
        return css`
          right: 32px;
        `;
    }
  }}
  z-index: 1;

  &:hover {
    transform: scale(0.4);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotate} 1s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

function ImageSlider({ slides }: { slides: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <SliderContainer>
      <Arrows $direction={'left'} onClick={goPrev}>
        ❰
      </Arrows>
      <Arrows $direction={'right'} onClick={goNext}>
        ❱
      </Arrows>
      <Slider url={slides[currentIndex].url} />
      <Dots>
        {slides.map((slide: any, slideIndex: number) => {
          return (
            <div
              style={{ width: '150px', height: '100px', margin: '1rem 1rem 10rem 0' }}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              <Slider style={{ cursor: 'pointer' }} border={slideIndex === currentIndex} url={slides[slideIndex].url} />
            </div>
          );
        })}
      </Dots>
    </SliderContainer>
  );
}

const Carousels = () => {
  const { data }: IQueryData = useQuery({ query: GET_CASES });

  const cases = useMemo(
    () => ({
      data: data,
    }),
    [data]
  );

  if (cases.data === null) {
    return <Spinner>꩜</Spinner>;
  }
  const slides = cases.data.caseStudies;

  return (
    <CarouselContainer>
      <ImageSliderContainer>
        <ImageSlider {...{ slides }} />
      </ImageSliderContainer>
    </CarouselContainer>
  );
};

export default Carousels;
