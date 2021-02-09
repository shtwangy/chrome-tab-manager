import {useState, useEffect} from "react";
import './App.css';
import {Page} from "./types/Page";
import {Header, PageList} from "./components";
import mockPages from "./mock/mock";

const App = () => {
    // const [pages, setPages] = useState<Page[]>([])
    const [pages, setPages] = useState<Page[]>(mockPages) // mock fro dev
    useEffect(() => {
        chrome.tabs && chrome.tabs.query({currentWindow: true}, tabs => {
            console.log(tabs)
            setPages(
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
                pages={pages}
                setPages={setPages}
            />
        </div>
    );
}

export default App;
