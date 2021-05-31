import './App.css';
import {Header} from "./component/Header/Header";
import {Skills} from "./component/Skills/Skills";
import {Main} from "./component/Main/Main";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main />
            <Skills />
        </div>
    );
}

export default App;
