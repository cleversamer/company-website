import { useState, useRef } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

const videos = [];
for (let i = 1; i <= 2; i++) {
  videos.push(`/assets/media/vid-${i}.mp4`);
}

const VideoCarousel = () => {
  const playingVideo = useRef(null);
  const pausedVideo = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = (event) => {
    let nextIndex = currentIndex + 1 === videos.length ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    pausedVideo.current.muted = true;
    playingVideo.current.muted = false;
  };

  const handleVideoClick = (ref) => (event) => {
    ref.current.muted = !ref.current.muted;
  };

  return (
    <Container>
      <Arrow onClick={handleArrowClick}>&lt;</Arrow>

      <Carousel showThumbs={false} swipeable={false}>
        {videos.map((video, index) => {
          const selected = index === currentIndex;
          const ref = selected ? playingVideo : pausedVideo;
          return (
            <Video
              ref={ref}
              onClick={handleVideoClick(ref)}
              key={index}
              src={video}
              autoPlay
              muted
              loop
              selected={selected}
            />
          );
        })}
      </Carousel>

      <Arrow onClick={handleArrowClick}>&gt;</Arrow>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  max-width: 1100px;
  margin: 0 auto;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: relative;

  p,
  button {
    display: none;
  }

  @media screen and (max-width: 1100px) {
    padding: 0 3vw;
  }

  @media screen and (max-width: 768px) {
    height: 50vh;
    gap: 10px;
  }

  @media screen and (max-width: 480px) {
    height: 35vh;
  }
`;

const Video = styled.video`
  width: 100%;
  max-width: 750px;
  display: ${({ selected }) => (selected ? "block" : "none")};
  object-fit: fill;
  -o-object-fit: fill;
`;

const Arrow = styled.div`
  z-index: 99;
  font-size: 4.5rem;
  cursor: pointer;
  color: #e8591d;
  font-weight: 200;
  transition-duration: 176ms;
  flex: 0.1;

  &:active {
    transform: scale(0.95);
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export default VideoCarousel;
