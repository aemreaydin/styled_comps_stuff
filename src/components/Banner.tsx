import React from "react";
import styled from "styled-components";

const BannerWrapper = styled.div`
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  color: white;
  text-align: center;
  text-transform: uppercase;
`;

type BannerProps = {
  title: string;
};
type BannerPropsWithChildren = React.PropsWithChildren<BannerProps>;
export default function Banner({ title, children }: BannerPropsWithChildren) {
  return (
    <BannerWrapper>
      <h1>{title}</h1>
      {children}
    </BannerWrapper>
  );
}
