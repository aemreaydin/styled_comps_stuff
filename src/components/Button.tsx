import styled from "styled-components";

export const Button = styled("button")`
  text-transform: uppercase;
`;

type ButtonProps = {
  color: string;
};
export const GreenButton = styled(Button)`
  color: ${(props: ButtonProps) => props.color};
  background-color: red;
`;
