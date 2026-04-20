import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const categoryLabelMap = {
  development: "개발 프로젝트",
  design: "디자인 프로젝트",
};

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const gallery = project?.gallery || [];
  const currentImage = gallery[currentIndex];

  const handlePrev = useCallback(() => {
    if (gallery.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  }, [gallery.length]);

  const handleNext = useCallback(() => {
    if (gallery.length === 0) return;
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  }, [gallery.length]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, handleNext, handlePrev]);

  if (!project) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <CloseButton type="button" onClick={onClose}>
          ×
        </CloseButton>

        <Layout>
          <Left>
            <MainImageWrap>
              {gallery.length > 0 && (
                <>
                  <NavButton type="button" onClick={handlePrev} $left>
                    ‹
                  </NavButton>
                  <DetailImage src={currentImage} alt={project.title} />
                  <NavButton type="button" onClick={handleNext}>
                    ›
                  </NavButton>
                </>
              )}
            </MainImageWrap>

            <ThumbRow>
              {gallery.map((image, index) => (
                <ThumbButton
                  key={`${project.id}-${index}`}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  $active={currentIndex === index}
                >
                  <ThumbImage
                    src={image}
                    alt={`${project.title}-${index + 1}`}
                  />
                </ThumbButton>
              ))}
            </ThumbRow>
          </Left>

          <Right>
            <TopRow>
              <CategoryText>{categoryLabelMap[project.category]}</CategoryText>
              <MetaInfo>
                <span>{project.period}</span>
                <MetaDivider />
                <span>{project.role}</span>
              </MetaInfo>
            </TopRow>

            <Title>{project.title}</Title>
            <Subtitle>{project.subtitle}</Subtitle>

            <InfoGrid>
              <InfoCard>
                <InfoLabel>사용 기술</InfoLabel>
                <InfoList>
                  {(project.tech || []).map((item) => (
                    <InfoItem key={item}>{item}</InfoItem>
                  ))}
                </InfoList>
              </InfoCard>

              <InfoCard>
                <InfoLabel>작업 범위</InfoLabel>
                <InfoList>
                  {(project.scope || []).map((item) => (
                    <InfoItem key={item}>{item}</InfoItem>
                  ))}
                </InfoList>
              </InfoCard>

              <InfoCard>
                <InfoLabel>기여 포인트</InfoLabel>
                <InfoList>
                  {(project.points || []).map((item) => (
                    <InfoItem key={item}>{item}</InfoItem>
                  ))}
                </InfoList>
              </InfoCard>
            </InfoGrid>

            <SectionBlock>
              <SectionLabel>프로젝트 소개</SectionLabel>
              <SectionText>{project.summary}</SectionText>
            </SectionBlock>

            <SectionBlock>
              <SectionLabel>문제</SectionLabel>
              <SectionText>{project.problem}</SectionText>
            </SectionBlock>

            <SectionBlock>
              <SectionLabel>내 역할</SectionLabel>
              <SectionText>{project.contribution}</SectionText>
            </SectionBlock>

            <SectionBlock>
              <SectionLabel>결과</SectionLabel>
              <SectionText>{project.outcome}</SectionText>
            </SectionBlock>

            <TagList>
              {(project.tags || []).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagList>
          </Right>
        </Layout>
      </ModalCard>
    </Overlay>
  );
};

export default ProjectModal;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(10px);
  animation: fadeIn 0.22s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 12px;
    align-items: flex-end;
  }
`;

const ModalCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 1180px;
  max-height: 90vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.shadow.strong};
  animation: modalUp 0.25s ease;

  @keyframes modalUp {
    from {
      opacity: 0;
      transform: translateY(18px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    max-height: 92vh;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const CloseButton = styled.button`
  position: sticky;
  top: 14px;
  margin-left: auto;
  margin-right: 14px;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(25, 31, 40, 0.84);
  color: #fff;
  font-size: 28px;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 0;
  padding: 8px 20px 20px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 12px 16px;
  }
`;

const Left = styled.div`
  padding: 12px 12px 20px;
`;

const Right = styled.div`
  padding: 24px 24px 28px;
`;

const MainImageWrap = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const DetailImage = styled.img`
  width: 100%;
  min-height: 460px;
  max-height: 560px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    min-height: 220px;
    max-height: 280px;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ $left }) => ($left ? "left: 16px;" : "right: 16px;")}
  transform: translateY(-50%);
  z-index: 5;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(25, 31, 40, 0.72);
  color: #fff;
  font-size: 28px;
`;

const ThumbRow = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  margin-top: 14px;
  padding-bottom: 4px;
`;

const ThumbButton = styled.button`
  flex: 0 0 auto;
  width: 96px;
  height: 76px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 2px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.primary : theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

const ThumbImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TopRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const CategoryText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.fontSize.caption};
  color: ${({ theme }) => theme.colors.subText};
`;

const MetaDivider = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.borderStrong};
`;

const Title = styled.h3`
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
`;

const Subtitle = styled.p`
  margin-bottom: 28px;
  font-size: ${({ theme }) => theme.fontSize.body};
  color: ${({ theme }) => theme.colors.subText};
  line-height: 1.8;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 28px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  padding: 18px 16px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const InfoLabel = styled.p`
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoItem = styled.p`
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

const SectionBlock = styled.div`
  margin-bottom: 24px;
`;

const SectionLabel = styled.h4`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const SectionText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.text};
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
`;

const Tag = styled.span`
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  color: ${({ theme }) => theme.colors.subText};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
