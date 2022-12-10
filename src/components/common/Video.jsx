import { useState, useRef } from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";

const Video = ({ src }) => {
  const ref = useRef();
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    if (!playing) {
      handlePlay();
    } else {
      handlePause();
    }
  };

  const handlePlay = () => {
    ref.current.play();
    ref.current.muted = false;
    setPlaying(true);
  };

  const handlePause = () => {
    ref.current.pause();
    ref.current.muted = true;
    setPlaying(false);
  };

  return (
    <Container>
      <Title>شاهد في ثواني</Title>

      <Wrapper>
        <Player
          ref={ref}
          src={src}
          muted
          onClick={handleClick}
          onEnded={handlePause}
        />
        {!playing ? <FaPlay size={34} /> : null}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  svg {
    position: absolute;
    z-index: 10;
    color: #e8591d;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Title = styled.h4`
  font-size: 24px;
  font-weight: 700;
  color: #e8591d;
  text-align: center;
  padding-bottom: 15px;
`;

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const Player = styled.video`
  width: 100%;
  max-width: 750px;
  object-fit: fill;
  -o-object-fit: fill;
`;

export default Video;
