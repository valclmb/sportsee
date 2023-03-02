import "./TopNav.css";
import logo from "./../../assets/logo.png";

export const TopNav = () => {
    const navItems = ["Accueil", "Profil", "Réglages", "Communauté"];
    return (
        <header className="top-nav">
            <img src={logo} alt="sportsee logo" />
            <nav>
                <ul>
                    {navItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
