import './App.css';
import {Header} from "./component/Header/Header";
import {Skills} from "./component/Skills/Skills";
import {Main} from "./component/Main/Main";
import {Projects} from "./component/Projects/Projects";
import {RemoveWork} from "./component/RemoveWork/RemoveWork";
import {Contacts} from "./component/Contacts/Contacts";
import {Footer} from "./component/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main />
            <Skills />
            <Projects/>
            <RemoveWork/>

            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
