import styled from "styled-components";

export const StyledListItemDiv = styled.div`
    cursor: pointer;
    padding: 8px 4px;
    position: relative;
    :hover {
        background-color: rgba(255, 255, 255, 0.08);
    }
    border-bottom: solid rgba(255, 255, 255, 0.12);
    border-width: 1px 0;
    outline: 0;
`

export const StyledTextDiv = styled.div`
    width: 310px;
    outline: 0;
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
