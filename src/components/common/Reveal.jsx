import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(target);
        }
      },
      {
        threshold: 0.14,
      },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper ref={ref} $visible={visible} $delay={delay}>
      {children}
    </Wrapper>
  );
};

export default Reveal;

const Wrapper = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(28px)"};
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
  transition-delay: ${({ $delay }) => `${$delay}s`};
`;
