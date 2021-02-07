import {useState, useEffect} from "react";
import './App.css';
import {Page} from "./types/Page";
import {PageListItem} from "./components";
import mockPages from "./mock/mock";

const App = () => {
    // const [pages, setPages] = useState<Page[]>([])
    const [pages, setPages] = useState<Page[]>(mockPages) // mock fro dev
    useEffect(() => {
        chrome.tabs && chrome.tabs.query({currentWindow: true}, tabs => {
            setPages(tabs.map(tab => {return {title: tab.title, url: tab.url}}))
        });
    }, []);
    return (
        <div className="app">
            {pages.length > 0 && (
                pages.map((page) => (
                    <PageListItem page={page} />
                ))
            )}
        </div>
    );
}

export default App;
