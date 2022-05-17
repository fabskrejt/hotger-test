import './App.css';
import {SearchForm} from "./components/search-form/search-form";
import {Content} from "./components/content/content";
import {Favorites} from "./components/favorites/favorites";
import {useSelector} from "react-redux";
import {Preloader} from "./common/components/preloader/preloader";

function App() {
    const dataIsFetching = useSelector(state => state.searchReducer.dataIsFetching)
    //  if(dataIsFetching) return <Preloader/>
    return (
        <div className="App">
   {/*         {dataIsFetching && <Preloader/>}*/}
            <SearchForm/>
            <Content/>
            <Favorites/>
        </div>
    );
}

export default App;
