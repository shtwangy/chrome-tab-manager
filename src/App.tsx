import {useState, useEffect} from "react";
import './App.css';

const App = () => {
    const [title, setTitle] = useState<string>('')
    const [url, setUrl] = useState<string>('')
    useEffect(() => {
        chrome.tabs && chrome.tabs.query({currentWindow: true}, tabs => {
            const title = tabs[0].title;
            setTitle(title ? title : '')
            const url = tabs[0].url;
            setUrl(url ? url : '');
            console.log(tabs)
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
