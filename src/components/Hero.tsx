import styled from "styled-components";

type HeroProps = {
  image: string;
  big?: boolean;
};
const Hero = styled.div`
  min-height: ${(props: HeroProps) => (props.big ? "100vh" : "50vh")};
  background-image: url(${(props: HeroProps) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Hero;
