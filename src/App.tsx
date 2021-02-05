import {useState, useEffect} from "react";
import './App.css';

const App = () => {
    const [title, setTitle] = useState<string>('')
    const [url, setUrl] = useState<string>('')
    useEffect(() => {
        const queryInfo = {active: true, lastFocusedWindow: true};

        chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
            const title = tabs[0].title;
            setTitle(title ? title : '')
            const url = tabs[0].url;
            setUrl(url ? url : '');
        });
    }, []);
    return (
        <div className="app">
            <h1>{title}</h1>
            <p>{url}</p>
        </div>
    );
}

export default App;
