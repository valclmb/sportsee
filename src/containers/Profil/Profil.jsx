import { useEffect, useState } from "react";
import { getOne } from "../../http-services";
import { ActivityChart } from "./ActivityChart/ActivityChart";
import { ActivityPerformance } from "./ActivityPerformance/ActivityPerformance";
import { ActivityScore } from "./ActivityScore/ActivityScore";
import { AverageSessions } from "./AverageSessions/AverageSessions";
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
                        <ActivityPerformance id={id} />
                        <ActivityScore
                            score={[
                                { score: user?.todayScore },
                                { score: 1 - user?.todayScore },
                            ]}
                        />
                    </div>
                </section>
                <UserData keyData={user?.keyData} />
            </div>
        </div>
    );
};
