import { useEffect } from "react";
import "./Profil.css";
import user from "/src/assets/apiMock/user.json";

export const Profil = () => {
    return (
        <div className="profil">
            <h2>
                Bonjour <span>{user.data.userInfos.firstName}</span>
            </h2>
        </div>
    );
};
