import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../common/Reveal";
import ProjectCard from "../projects/ProjectCard";
import ProjectModal from "../projects/ProjectModal";
import { projects } from "../../data/projects";

const filterOptions = [
  { key: "all", label: "전체" },
  { key: "development", label: "개발" },
  { key: "design", label: "디자인" },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => document.body.classList.remove("modal-open");
  }, [selectedProject]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <Section id="projects">
      <Inner>
        <Reveal>
          <SectionTitle
            label="Projects"
            title="개발과 디자인 프로젝트를 같은 구조 안에서 분리해 보여줍니다"
            description="전체, 개발, 디자인 카테고리로 나누어 프로젝트를 관리하고, 카드를 클릭하면 상세 내용을 확인할 수 있도록 구성했습니다."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <FilterRow>
            <Segment>
              {filterOptions.map((option) => (
                <FilterButton
                  key={option.key}
                  type="button"
                  $active={activeFilter === option.key}
                  onClick={() => setActiveFilter(option.key)}
                >
                  {option.label}
                </FilterButton>
              ))}
            </Segment>
          </FilterRow>
        </Reveal>

        <Grid>
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 4) * 0.05}>
              <ProjectCard project={project} onClick={setSelectedProject} />
            </Reveal>
          ))}
        </Grid>
      </Inner>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
};

export default ProjectsSection;

const Section = styled.section`
  padding: ${({ theme }) => theme.layout.sectionY} 32px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: ${({ theme }) => theme.layout.sectionYMobile} 20px;
  }
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.width};
  margin: 0 auto;
`;

const FilterRow = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 32px;
`;

const Segment = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 8px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.soft};
`;

const FilterButton = styled.button`
  padding: 12px 18px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : "transparent"};
  color: ${({ theme, $active }) => ($active ? "#fff" : theme.colors.subText)};
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    color: ${({ theme, $active }) => ($active ? "#fff" : theme.colors.text)};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px;

  @media (max-width: ${({ theme }) => theme.media.desktop}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
