import './App.css';
import {Header} from "./features/header/Header";
import {Skills} from "./features/skills/Skills";
import {Main} from "./features/main/Main";
import {Projects} from "./features/projects/Projects";
import {RemoveWork} from "./features/remove-work/RemoveWork";
import {Contacts} from "./features/contacts/Contacts";
import {Footer} from "./features/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <RemoveWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
