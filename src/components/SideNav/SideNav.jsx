import { Bike, Dumbbell, LineChart, Medal } from "lucide-react";
import "./SideNav.css";

/** Side nav of the website*/
export const Sidenav = () => {
  const navItems = [Bike, Dumbbell, Medal, LineChart];
  return (
    <div className="side-nav">
      <nav>
        <ul>
          {navItems.map((Icon, key) => (
            <li key={key}>
              <Icon color="#EA3324" />
            </li>
          ))}
        </ul>
        <p>Copyright, Sportsee 2022</p>
      </nav>
    </div>
  );
};
