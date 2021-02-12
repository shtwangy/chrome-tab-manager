import {Dispatch, SetStateAction, useContext, useRef} from "react";
import {Tab} from "../../types/Tab";
import {StyledButton, StyledTextDiv, StyledSecondaryActionDiv, StyledListItemDiv, StyledP, StyledSpan} from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt"
import { faShareAlt } from "@fortawesome/free-solid-svg-icons/faShareAlt"
import {localStorageContext} from "../../contexts/useLocalStorage"

type Props = {
    tab: Tab,
    setTabs: Dispatch<SetStateAction<Tab[]>>
}

const PageListItem = (props: Props) => {
    const {tab, setTabs} = props
    const id = tab.id

    const handleClickListItem = () => {
        id !== undefined && chrome.tabs.update(id, { 'active': true }, (tab) => {});
    }

    const handleDelete = () => {
        id !== undefined && chrome.tabs.remove(id, () => {
            setTabs((prevPages: Tab[]): Tab[] => {
                return prevPages.filter(page => page.id !== id)
            })
        });
    }

    const {webhookUrl} = useContext(localStorageContext)
    const payload = {
        text: tab.title + '\n' + tab.url
    }
    const handleShare = () => {
        fetch(webhookUrl, {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(() => {
            alert('送信が完了しました！');
        }).catch(err => {
            alert(`送信に失敗しました... ${err}`);
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
                <StyledSpan>{tab.title}</StyledSpan>
                <StyledP>{tab.url}</StyledP>
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
