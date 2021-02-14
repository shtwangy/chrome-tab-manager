import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #8b4513;
  color: #fff;
  position: relative;
  padding: 8px;
`

export const StyledH1 = styled.h1`
  margin: 0;
  cursor: default;
`

export const StyledSecondaryActionDiv = styled.div`
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
`

export const StyledSummary = styled.summary`
  list-style: none;
  ::-webkit-details-marker {
    display: none;
  }
`

export const StyledDetails = styled.details`
  [open] > summary:before {
    content: " ";
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
    background: transparent;
    background-color: black;
  }
`
