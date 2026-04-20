import styled from "styled-components";
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <Section id="hero">
      <Inner>
        <Badge>Frontend · Planning · UX Structure · Dashboard</Badge>

        <Title>
          디자인 경험을 바탕으로
          <br />
          기획, 화면 설계, 협업까지 연결하는
          <br />
          서비스 기획형 프론트엔드 개발자
        </Title>

        <Description>
          산업디자인 전공과 디자인 실무 경험을 바탕으로, React 기반 화면 구현과
          서비스 구조 설계, 문서화와 협업까지 연결해왔습니다. 관리자 기능, 생산
          대시보드, 제조 이력 추적 화면처럼 복잡한 요구사항을 이해하기 쉬운
          구조와 UI로 정리하는 데 강점이 있습니다.
        </Description>

        <ButtonGroup>
          <Button href="#projects">프로젝트 보기</Button>
          <Button href="#experience" variant="secondary">
            이력 요약 보기
          </Button>
        </ButtonGroup>
      </Inner>
    </Section>
  );
};

export default HeroSection;

const Section = styled.section`
  padding: 140px 24px 120px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 100px 20px 80px;
  }
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.width};
  margin: 0 auto;
`;

const Badge = styled.span`
  display: inline-block;
  margin-bottom: 28px;
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    font-size: 12px;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  line-height: 1.15;
  letter-spacing: -0.03em;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 52px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 38px;
  }

  @media (max-width: ${({ theme }) => theme.media.small}) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  max-width: 800px;
  margin-top: 24px;
  font-size: 20px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.subText};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 17px;
    margin-top: 20px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    margin-top: 32px;
  }
`;
