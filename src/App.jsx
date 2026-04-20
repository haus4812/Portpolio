import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/theme";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import StrengthSection from "./components/sections/StrengthSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved === "dark";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper>
        <Header
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((prev) => !prev)}
        />
        <Main>
          <HeroSection />
          <AboutSection />
          <StrengthSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </Main>
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

const AppWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition:
    background 0.25s ease,
    color 0.25s ease;
`;

const Main = styled.main`
  width: 100%;
`;
