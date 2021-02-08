import {Dispatch, SetStateAction} from "react";
import {Page} from "../../types/Page";
import {StyledButton, StyledTextDiv, StyledSecondaryActionDiv, StyledDiv, StyledP, StyledSpan} from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt"

type Props = {
    page: Page,
    setPages: Dispatch<SetStateAction<Page[]>>
}

const PageListItem = (props: Props) => {
    const {page, setPages} = props
    const id = page.id
    const clickListItemHandler = () => {
        id !== undefined && chrome.tabs.update(id, { 'active': true }, (tab) => {});
    }
    const deleteHandler = () => {
        id !== undefined && chrome.tabs.remove(id, () => {
            setPages((prevPages: Page[]): Page[] => {
                return prevPages.filter(page => page.id !== id)
            })
        });
    }
    return (
        <StyledDiv>
            <StyledTextDiv onClick={clickListItemHandler}>
                <StyledSpan>{page.title}</StyledSpan>
                <StyledP>{page.url}</StyledP>
            </StyledTextDiv>
            <StyledSecondaryActionDiv>
                <StyledButton onClick={deleteHandler}>
                    <FontAwesomeIcon icon={faTrashAlt} fixedWidth />
                </StyledButton>
            </StyledSecondaryActionDiv>
        </StyledDiv>
    )
}

export default PageListItem
