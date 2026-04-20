import styled from "styled-components";

const ThemeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <ToggleButton type="button" onClick={onToggle} aria-label="테마 변경">
      <ToggleTrack $active={isDarkMode}>
        <ToggleThumb $active={isDarkMode}>
          {isDarkMode ? "🌙" : "☀️"}
        </ToggleThumb>
      </ToggleTrack>
    </ToggleButton>
  );
};

export default ThemeToggle;

const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const ToggleTrack = styled.div`
  position: relative;
  width: 64px;
  height: 36px;
  padding: 4px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.surfaceAlt : theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow.soft};
  transition:
    background 0.25s ease,
    border-color 0.25s ease;
`;

const ToggleThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  transform: ${({ $active }) =>
    $active ? "translateX(28px)" : "translateX(0)"};
  transition: transform 0.25s ease;
  font-size: 14px;
`;
