import styled from "styled-components";
import SectionTitle from "../common/SectionTitle";
import { projects } from "../../data/projects";

const ProjectsSection = () => {
  return (
    <Section id="projects">
      <Inner>
        <SectionTitle
          label="Projects"
          title="대표 프로젝트를 구조와 문제 해결 중심으로 보여줍니다"
          description="단순 결과물 나열이 아니라, 어떤 문제를 어떻게 정리했고 어떤 구조로 해결했는지를 중심으로 설명합니다."
        />

        <ProjectList>
          {projects.map((project, index) => (
            <ProjectCard key={project.title}>
              <VisualArea>
                <MainImage src={project.thumbnail} alt={project.imageAlt} />
                <SubImage src={project.detailImage} alt={project.imageAlt} />
              </VisualArea>

              <ContentArea>
                <Top>
                  <ProjectIndex>
                    {String(index + 1).padStart(2, "0")}
                  </ProjectIndex>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectSummary>{project.summary}</ProjectSummary>
                </Top>

                <Body>
                  <InfoBlock>
                    <Label>문제</Label>
                    <Text>{project.problem}</Text>
                  </InfoBlock>

                  <InfoBlock>
                    <Label>역할</Label>
                    <Text>{project.role}</Text>
                  </InfoBlock>

                  <InfoBlock>
                    <Label>결과</Label>
                    <Text>{project.result}</Text>
                  </InfoBlock>
                </Body>

                <TagList>
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagList>
              </ContentArea>
            </ProjectCard>
          ))}
        </ProjectList>
      </Inner>
    </Section>
  );
};

export default ProjectsSection;

const Section = styled.section`
  padding: 120px 24px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 80px 20px;
  }
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.width};
  margin: 0 auto;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ProjectCard = styled.article`
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 28px;
  padding: 28px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.card};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 20px;
    gap: 20px;
  }
`;

const VisualArea = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.7fr;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-rows: auto auto;
  }
`;

const BaseImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

const MainImage = styled(BaseImage)`
  min-height: 320px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    min-height: 220px;
  }
`;

const SubImage = styled(BaseImage)`
  min-height: 180px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    min-height: 160px;
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.div`
  margin-bottom: 24px;
`;

const ProjectIndex = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
`;

const ProjectTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 32px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 24px;
  }
`;

const ProjectSummary = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.subText};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 16px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoBlock = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: ${({ theme }) => theme.radius.md};
`;

const Label = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const Text = styled.p`
  font-size: 15px;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.text};
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
`;

const Tag = styled.span`
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  color: ${({ theme }) => theme.colors.subText};
  font-size: 14px;
  font-weight: 500;
`;
