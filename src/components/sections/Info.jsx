import styled from "styled-components";
import Button from "components/common/Button";
import Video from "components/common/Video";

const Info = ({ data }) => {
  return (
    <Container id={data.id}>
      <InfoWrapper>
        <InfoRow mediastart={data.mediaStart}>
          <Column1>
            <TextWrapper>
              <Heading>{data.headLine}</Heading>

              <SubTitle>{data.description}</SubTitle>

              {data.buttonLabel && (
                <BtnWrap>
                  <Button
                    to={data.buttonTo}
                    smooth="true"
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={data.primary ? 1 : 0}
                  >
                    {data.buttonLabel}
                  </Button>
                </BtnWrap>
              )}
            </TextWrapper>
          </Column1>

          <Column2>
            <MediaWrap>
              {data.mediaType === "image" ? (
                <Img src={data.source} alt={data.alt} />
              ) : (
                <Video src={data.source} autoPlay loop />
              )}
            </MediaWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.div`
  color: #fff;
  background-color: #f9f9f9;

  :first-of-type {
    margin-top: 40px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 40px;
  }
`;

const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  max-height: fit-content;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 100px 24px;
  justify-content: center;
  text-align: right;

  @media screen and (max-width: 768px) {
    padding: 30px 10px;
  }
`;

const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  /* align-items: center; */
  grid-template-areas: ${({ mediastart }) =>
    mediastart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ mediastart }) =>
      mediastart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
  }
`;

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

const Heading = styled.h1`
  color: #e8591d;
  margin-bottom: 24px;
  font-size: 36px;
  line-height: 1.5;
  font-weight: 700;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 1.6;
  font-weight: 600;
  color: #010606;
  margin-left: auto;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    font-size: 18px;
    font-weight: 600;
  }
`;

const MediaWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export default Info;
