import { Sidenav } from "../components/SideNav/SideNav";
import { TopNav } from "../components/TopNav/TopNav";
import "./App.css";

function App() {
    return (
        <div className="App">
            <TopNav />
            <div className="App-container">
                <Sidenav />
            </div>
        </div>
    );
}

export default App;
