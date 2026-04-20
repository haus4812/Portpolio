import styled from "styled-components";

const categoryLabelMap = {
  development: "개발",
  design: "디자인",
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <Card type="button" onClick={() => onClick(project)}>
      <ThumbnailWrap>
        <Thumbnail src={project.thumbnail} alt={project.title} />
        <Overlay />
        <CategoryBadge>{categoryLabelMap[project.category]}</CategoryBadge>
        <HoverText>View Project</HoverText>
      </ThumbnailWrap>

      <CardBody>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>

        <MetaRow>
          <MetaText>{project.period}</MetaText>
          <MetaDot />
          <MetaText>{project.role}</MetaText>
        </MetaRow>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;

const Card = styled.button`
  width: 100%;
  text-align: left;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.soft};
  transition:
    transform 0.24s ease,
    box-shadow 0.24s ease,
    border-color 0.24s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.borderStrong};
    box-shadow: ${({ theme }) => theme.shadow.medium};
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover div[data-overlay="true"] {
    opacity: 1;
  }

  &:hover p[data-hover="true"] {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ThumbnailWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
`;

const Overlay = styled.div.attrs({
  "data-overlay": "true",
})`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(15, 23, 42, 0.08) 0%,
    rgba(15, 23, 42, 0.48) 100%
  );
  opacity: 0;
  transition: opacity 0.25s ease;
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 12px;
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background: rgba(255, 255, 255, 0.92);
  color: ${({ theme }) => theme.colors.text};
`;

const HoverText = styled.p.attrs({
  "data-hover": "true",
})`
  position: absolute;
  right: 18px;
  bottom: 18px;
  z-index: 2;
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(255, 255, 255, 0.94);
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
`;

const CardBody = styled.div`
  padding: 22px 20px 24px;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.35;
`;

const ProjectSubtitle = styled.p`
  min-height: 52px;
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.subText};
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

const MetaText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.subText};
`;

const MetaDot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.borderStrong};
`;
