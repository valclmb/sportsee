import { Sidenav } from "../components/SideNav/SideNav";
import { TopNav } from "../components/TopNav/TopNav";
import "./App.css";
import { Profil } from "./Profil/Profil";

function App() {
    return (
        <div className="App">
            <TopNav />
            <div className="App-container">
                <Sidenav />
                <Profil />
            </div>
        </div>
    );
}

export default App;
