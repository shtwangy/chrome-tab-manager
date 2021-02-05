import {useState, useEffect} from "react";
import './App.css';

type Page = {
    title: string | undefined;
    url: string | undefined;
}

const App = () => {
    const [pages, setPages] = useState<Page[]>([])
    useEffect(() => {
        chrome.tabs && chrome.tabs.query({currentWindow: true}, tabs => {
            setPages(tabs.map(tab => {return {title: tab.title, url: tab.url}}))
        });
    }, []);
    return (
        <div className="app">
            {pages.length > 0 && (
                pages.map((page) => (
                    <div>
                        <h3>{page.title}</h3>
                        <p>{page.url}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default App;
