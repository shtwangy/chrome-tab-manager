import {Dispatch, SetStateAction, useCallback, useContext, useRef, memo} from "react";
import {Tab} from "../../types/Tab";
import {StyledTextDiv, StyledListItemDiv, StyledP, StyledSpan} from "./style";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt"
import { faShareAlt } from "@fortawesome/free-solid-svg-icons/faShareAlt"
import {localStorageContext} from "../../contexts/useLocalStorage"
import {IconButton, SecondaryActionContainer} from "../UIKit";

type Props = {
    tab: Tab,
    setTabs: Dispatch<SetStateAction<Tab[]>>
}

const TabListItem = memo((props: Props) => {
    const {tab, setTabs} = props
    const id = tab.id

    const handleClickListItem = () => {
        id !== undefined && chrome.tabs.update(id, { 'active': true }, (tab) => {});
    }

    const handleDelete = useCallback(() => {
        id !== undefined && chrome.tabs.remove(id, () => {
            setTabs((prevPages: Tab[]): Tab[] => {
                return prevPages.filter(page => page.id !== id)
            })
        });
    }, [])

    const {webhookUrl} = useContext(localStorageContext)
    const payload = {
        text: tab.title + '\n' + tab.url
    }
    const handleShare = useCallback(() => {
        fetch(webhookUrl, {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(() => {
            alert('送信が完了しました！');
        }).catch(err => {
            alert(`送信に失敗しました... ${err}`);
        })
    },[])

    const listItemDivRef = useRef<HTMLDivElement>(null)
    const handleTextDivOnFocus = () => {
        if (listItemDivRef.current) listItemDivRef.current.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'
    }
    const handleTextDivOnBlur = () => {
        if (listItemDivRef.current) listItemDivRef.current.style.backgroundColor = ''
    }
    console.log('render Tab List Item')
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
            <SecondaryActionContainer>
                <IconButton icon={faTrashAlt} onClick={handleDelete} id={tab.title ? tab.title : ''}/>
                <IconButton icon={faShareAlt} onClick={handleShare} id={tab.title ? tab.title : ''}/>
            </SecondaryActionContainer>
        </StyledListItemDiv>
    )
});

export default TabListItem
