import { StyledWrapper, StyledContainer } from "./StyledContainer";

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
