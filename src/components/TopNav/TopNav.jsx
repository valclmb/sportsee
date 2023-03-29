import "./TopNav.css";
import logo from "/logo.png";

/** Top nav of the website */
export const TopNav = () => {
    const navItems = ["Accueil", "Profil", "Réglages", "Communauté"];
    return (
        <header className="top-nav">
            <h1>
                <img src={logo} alt="Sportsee" />
            </h1>
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
