import styled from "styled-components";

export const StyledButton = styled.button`
    border: 0;
    cursor: pointer;
    margin: 0 2px;
    padding: 8px;
    outline: 0;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0);
    color: #fff;
    font-size: 1rem;
    :hover, :focus {
        background-color: rgba(255, 255, 255, 0.1);
        animation: wobble 1s infinite;
    }
    
    /* FIXME: ほんとはクリックしたときに適用したい */
    .wob {
      background-color: red;
      animation: wobble 1s infinite;
    }
    @keyframes wobble {
      25% {
        transform: rotate(15deg);
      }
      50% {
        transform: rotate(-30deg);
      }
      75% {
        transform: rotate(5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
`
