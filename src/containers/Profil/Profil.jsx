import { useEffect, useState } from "react";
import { getOne } from "../../http-services";
import { ActivityChart } from "./ActivityChart/ActivityChart";
import { AverageSessions } from "./Average/AverageSessions";
import "./Profil.css";
import { UserData } from "./UserData/UserData";
// import user from "/src/assets/apiMock/user.json";

export const Profil = () => {
    const id = 12;
    const [user, setUser] = useState();
    const [activityType, setActivityType] = useState();

    // Get user
    useEffect(() => {
        getOne(id).then((res) => setUser(res.data));
    }, []);

    // Get activity type
    useEffect(() => {
        getOne(id, "performance").then((res) => setActivityType(res.data));
    }, []);
    console.log(activityType);

    return (
        <div className="profil">
            <h2>
                Bonjour <span>{user?.userInfos.firstName}</span>
            </h2>
            <div className="profil__stats">
                <section>
                    <ActivityChart id={id} />
                    <div>
                        <AverageSessions id={id} />
                    </div>
                </section>
                <UserData keyData={user?.keyData} />
            </div>
        </div>
    );
};
