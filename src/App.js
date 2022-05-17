import './App.css';
import {SearchForm} from "./components/search-form/search-form";
import {Content} from "./components/content/content";
import {Favorites} from "./components/favorites/favorites";
import {useSelector} from "react-redux";
import {Modal} from "./common/components/modal/modal";

function App() {
    const fetchingError = useSelector(state => state.searchReducer.fetchingError)

    return (
        <div className="App">
            {fetchingError &&
            <Modal fetchingError={fetchingError}/>
            }
            <SearchForm/>
            <Content/>
            <Favorites/>
        </div>
    );
}

export default App;
