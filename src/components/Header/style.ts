import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #8b4513;
  color: #fff;
  position: relative;
  padding: 8px;
`

export const StyledH1 = styled.h1`
  margin: 0;
`

export const StyledSecondaryActionDiv = styled.div`
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
`

export const StyledButton = styled.button`
    border: 0;
    cursor: pointer;
    margin: 0 2px;
    padding: 8px;
    outline: 0;
    border-radius: 50%;
    background-color: #8b4513;
    color: #fff;
    font-size: 1rem;
    :hover, :focus {
        background-color: rgba(255, 255, 255, 0.1);
    }
`
