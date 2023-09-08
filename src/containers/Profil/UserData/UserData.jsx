import { Apple, Drumstick, Flame, Pizza } from "lucide-react";
import "./UserData.css";
import PropTypes from "prop-types";

/** Display user data with cards
 * @param {object} keyData - user key infos
 */
export const UserData = ({ keyData }) => {
  /** Get the icon image url
   *  @param {string} icon - name of the icon fot find it in assets
   */
  const iconLink = (icon) => `/public/KeyData/${icon}.png`;

  const items = [
    {
      param: "calories",
      label: "Calories",
      icon: Flame,
      color: "red",
      value: keyData?.calorieCount,
      unity: "kCal",
    },
    {
      param: "protein",
      label: "Protéines",
      icon: Drumstick,
      color: "blue",

      value: keyData?.proteinCount,
      unity: "g",
    },
    {
      param: "glucid",
      label: "Glucide",
      icon: Apple,
      color: "orange",

      value: keyData?.carbohydrateCount,
      unity: "g",
    },
    {
      param: "lipid",
      label: "Lipides",
      icon: Pizza,
      color: "purple",

      value: keyData?.lipidCount,
      unity: "g",
    },
  ];
  return (
    <div className="user-data">
      {items.map((item) => (
        <div key={item.param} className="user-data__card">
          <div className={`user-data__card__icon ${item.param}`}>
            <item.icon color={item.color} />
          </div>
          <div>
            <p className="user-data__card__value">
              {item.value}
              {item.unity}
            </p>
            <p className="user-data__card__label">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

UserData.propTypes = {
  keyData: PropTypes.object,
};
