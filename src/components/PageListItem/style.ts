import styled from "styled-components";

export const StyledButton = styled.button`
    border: 0;
    cursor: pointer;
    margin: 0 2px;
    padding: 8px;
    outline: 0;
    border-radius: 50%;
    background-color: #424242;
    color: #fff;
    font-size: 1rem;
    :hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`

export const StyledListItemDiv = styled.div`
    cursor: pointer;
    padding: 8px 4px;
    position: relative;
    :hover {
        background-color: rgba(255, 255, 255, 0.08);
    }
    border-bottom: solid rgba(255, 255, 255, 0.12);
    border-width: 1px 0;
`

export const StyledTextDiv = styled.div`
    width: 310px;
`

export const StyledSecondaryActionDiv = styled.div`
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
`

export const StyledSpan = styled.span`
    width: 100%;
    font-weight: bold;
    word-wrap: break-word;
`

export const StyledP = styled.p`
    width: 100%;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`
