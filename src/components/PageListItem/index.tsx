import {Dispatch, SetStateAction, useRef} from "react";
import {Page} from "../../types/Page";
import {StyledButton, StyledTextDiv, StyledSecondaryActionDiv, StyledListItemDiv, StyledP, StyledSpan} from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt"
import { faShareAlt } from "@fortawesome/free-solid-svg-icons/faShareAlt";

type Props = {
    page: Page,
    setPages: Dispatch<SetStateAction<Page[]>>
}

const PageListItem = (props: Props) => {
    const {page, setPages} = props
    const id = page.id
    const shareUrl = ''
    const payload = {
        text: page.title + '\n' + page.url
    }
    const handleClickListItem = () => {
        id !== undefined && chrome.tabs.update(id, { 'active': true }, (tab) => {});
    }
    const handleDelete = () => {
        id !== undefined && chrome.tabs.remove(id, () => {
            setPages((prevPages: Page[]): Page[] => {
                return prevPages.filter(page => page.id !== id)
            })
        });
    }
    const handleShare = () => {
        fetch(shareUrl, {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(() => {
            alert('送信が完了しました！');
        })
    }
    const listItemDivRef = useRef<HTMLDivElement>(null)
    const handleTextDivOnFocus = () => {
        if (listItemDivRef.current) listItemDivRef.current.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'
    }
    const handleTextDivOnBlur = () => {
        if (listItemDivRef.current) listItemDivRef.current.style.backgroundColor = ''
    }
    return (
        <StyledListItemDiv ref={listItemDivRef}>
            <StyledTextDiv
                tabIndex={0}
                onClick={handleClickListItem}
                onFocus={handleTextDivOnFocus}
                onBlur={handleTextDivOnBlur}
                onKeyPress={handleClickListItem}
            >
                <StyledSpan>{page.title}</StyledSpan>
                <StyledP>{page.url}</StyledP>
            </StyledTextDiv>
            <StyledSecondaryActionDiv>
                <StyledButton onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrashAlt} fixedWidth />
                </StyledButton>
                <StyledButton onClick={handleShare}>
                    <FontAwesomeIcon icon={faShareAlt} fixedWidth />
                </StyledButton>
            </StyledSecondaryActionDiv>
        </StyledListItemDiv>
    )
}

export default PageListItem
