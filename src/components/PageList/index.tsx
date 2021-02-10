import {Tab} from "../../types";
import {StyledDiv} from "./style"
import {PageListItem} from "../index";
import {Dispatch, SetStateAction} from "react";

type Props = {
    tabs: Tab[]
    setTabs: Dispatch<SetStateAction<Tab[]>>
}

const PageList = (props: Props) => {
    const {tabs, setTabs} = props
    return (
        <StyledDiv>
            {tabs.length > 0 && (
                tabs.map(tab => (
                    <PageListItem
                        key={tab.id}
                        tab={tab}
                        setTabs={setTabs}
                    />
                ))
            )}
        </StyledDiv>
    )
}

export default PageList
