import styled from "styled-components";

type IInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  padding: string;
};
const BasicInput = styled.input.attrs(({ type, placeholder }: IInputProps) => ({
  type: type || "text",
  placeholder: placeholder || "Enter value",
}))`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;
  padding: ${(props: IInputProps) => props.padding};
`;

export default BasicInput;
