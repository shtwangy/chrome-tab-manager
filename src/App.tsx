import './assets/style.css'
import './App.css';
import {Header, TabList} from "./components";
import {localStorageContext, useLocalStorage} from "./contexts/useLocalStorage";

const App = () => {
    const localStorage = useLocalStorage()

    console.log('render App')
    return (
        <div className="app">
            <localStorageContext.Provider value={localStorage}>
                <Header />
                <TabList />
            </localStorageContext.Provider>
        </div>
    );
}

export default App;
