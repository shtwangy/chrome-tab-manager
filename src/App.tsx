import {useState, useEffect} from "react";
import './App.css';
import {Tab} from "./types/Tab";
import {Header, PageList} from "./components";
import mockPages from "./mock/mock";

const App = () => {
    // const [pages, setPages] = useState<Tab[]>([])
    const [tabs, setTabs] = useState<Tab[]>(mockPages) // mock fro dev
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
            <Header />
            <PageList
                tabs={tabs}
                setTabs={setTabs}
            />
        </div>
    );
}

export default App;
