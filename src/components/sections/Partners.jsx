import styled from "styled-components";

const Partners = () => {
  return (
    <Container id="partners">
      <Title>آراء الشركاء</Title>

      <Wrapper>
        <Card>
          <Icon src="/assets/images/svg-2.svg" alt="" />
          <Subtitle>برمجة التطبيقات</Subtitle>
          <Description>
            نقدّم خدمات برمجة وتطوير تطبيقات الويب والموبايل على أعلى مستوى
            ولدينا خبراء ومختصّين في هذا المجال
          </Description>
        </Card>

        <Card>
          <Icon src="/assets/images/svg-3.svg" alt="" />
          <Subtitle>الأبحاث والكتب</Subtitle>
          <Description>
            نقّدم خدمات الأبحاث العلمية وترجمة الكتب والمقالات والفيديوهات وحل
            الواجبات الدراسية
          </Description>
        </Card>

        <Card>
          <Icon src="/assets/images/svg-4.svg" alt="" />
          <Subtitle>التصميم</Subtitle>
          <Description>
            نقدّم خدمات تصميم تطبيقات الويب والموبايل، تصميم غلاف، تصميم لوجو،
            والبروشورات
          </Description>
        </Card>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding: 100px 24px;
  padding-bottom: 150px;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 20px;
  /* padding: 0 50px; */

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20px;
  }
`;

const Card = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const Icon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 2.7rem;
  font-weight: 700;
  color: #e8591d;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export default Partners;
