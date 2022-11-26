import styled from "styled-components";
import Button from "./Button";

const Info = ({ data }) => {
  return (
    <Container
      id={data.id}
      // lightbg={data.lightBg}
    >
      <InfoWrapper>
        <InfoRow imgstart={data.imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{data.topLine}</TopLine>

              <Heading
              // lighttext={data.lightText}
              >
                {data.headLine}
              </Heading>

              <SubTitle
              // darktext={data.darkText}
              >
                {data.description}
              </SubTitle>

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
                    // dark={data.dark ? 1 : 0}
                  >
                    {data.buttonLabel}
                  </Button>
                </BtnWrap>
              )}
            </TextWrapper>
          </Column1>

          <Column2>
            <ImgWrap>
              <Img src={data.img} alt={data.alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.div`
  color: #fff;
  font-family: "Cairo", "sans-serif";
  background-color: #f9f9f9;

  @media screen and (max-width: 768px) {
    /* padding: 100px 0; */
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
  align-items: center;
  grid-template-areas: ${({ imgstart }) =>
    imgstart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgstart }) =>
      imgstart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
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

const TopLine = styled.p`
  color: #e8591d;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 36px;
  line-height: 1.5;
  font-weight: 700;
  color: #010606;

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

const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export default Info;
