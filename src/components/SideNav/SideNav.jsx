import "./SideNav.css";

/** Side nav of the website*/
export const Sidenav = () => {
    const navItems = ["Bike", "Yoga", "Swim", "Dumbell"];
    const iconSrc = (icon) => `/SideNav/${icon}.png`;
    return (
        <div className="side-nav">
            <nav>
                <ul>
                    {navItems.map((item, key) => (
                        <li key={key}>
                            <img src={iconSrc(item)} alt={item} />
                        </li>
                    ))}
                </ul>
                <p>Copyright, Sportsee 2022</p>
            </nav>
        </div>
    );
};
