import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Tab} from "../types";
import mockPages from "../mock/mock";

type UseTabsReturnType = {
    tabs: Tab[],
    setTabs: Dispatch<SetStateAction<Tab[]>>
}

export const useTabs = (): UseTabsReturnType => {
    const [tabs, setTabs] = useState<Tab[]>(mockPages)

    useEffect(() => {
        chrome.tabs && chrome.tabs.query({currentWindow: true}, tabs => {
            setTabs(
                tabs.map(tab => {
                    return {
                        id: tab.id,
                        index: tab.index,
                        title: tab.title,
                        url: tab.url
                    }
                })
            )
        });
    }, [])

    return {tabs, setTabs}
}
