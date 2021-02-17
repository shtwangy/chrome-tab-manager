import {StyledDiv} from "./style"
import {TabListItem} from "../index";
import {useTabs} from "../../hooks";

const TabList = () => {
    const {tabs, setTabs} = useTabs()
    console.log('render TabList')
    return (
        <StyledDiv>
            {tabs.length > 0 && (
                tabs.map(tab => (
                    <TabListItem
                        key={tab.id}
                        tab={tab}
                        setTabs={setTabs}
                    />
                ))
            )}
        </StyledDiv>
    )
}

export default TabList
