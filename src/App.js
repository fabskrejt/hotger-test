import './App.css';
import {SearchForm} from "./components/search-form/search-form";
import {Content} from "./components/content/content";
import {Favorites} from "./components/favorites/favorites";

function App() {
    return (
        <div className="App">
            <SearchForm/>
            <Content/>
            <Favorites/>
        </div>
    );
}

export default App;
