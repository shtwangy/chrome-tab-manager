import {useState, useEffect, createContext} from "react";
import './App.css';
import {Tab} from "./types/Tab";
import {Header, PageList} from "./components";
import mockPages from "./mock/mock";
import {localStorageContext, useLocalStorage} from "./contexts/useLocalStorage";

const App = () => {
    // const [pages, setPages] = useState<Tab[]>([])
    const [tabs, setTabs] = useState<Tab[]>(mockPages) // mock fro dev
    const ctx = useLocalStorage()

    useEffect(() => {
        chrome.tabs && chrome.tabs.query({currentWindow: true}, tabs => {
            console.log(tabs)
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
    }, []);

    return (
        <div className="app">
            <localStorageContext.Provider value={ctx}>
                <Header />
                <PageList
                    tabs={tabs}
                    setTabs={setTabs}
                />
            </localStorageContext.Provider>
        </div>
    );
}

export default App;
