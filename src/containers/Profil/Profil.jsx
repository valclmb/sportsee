import { useEffect, useState } from "react";
import { getOne } from "../../http-services";
import { ActivityDaily } from "./ActivityDaily/ActivityDaily";
import { ActivityPerformance } from "./ActivityPerformance/ActivityPerformance";
import { ActivityScore } from "./ActivityScore/ActivityScore";
import { AverageSessions } from "./AverageSessions/AverageSessions";
import "./Profil.css";
import { UserData } from "./UserData/UserData";

/** Profil, container of all user informations */
export const Profil = () => {
    const id = 12;
    const [user, setUser] = useState();
    const [error, setError] = useState();

    // Access to score is different according to user id
    const score = id === 12 ? user?.todayScore : user?.score;

    /** On mount, fetch the api, get user*/
    useEffect(() => {
        getOne(id).then((res) => {
            if (res.error) setError(true);
            else {
                setError(false);
                setUser(res.data);
            }
        });
    }, []);

    if (error === undefined) {
        return <h2>Loading...</h2>;
    }

    if (error === true) {
        return <h2>404 not found</h2>;
    }

    return (
        <div className="profil">
            <h2>
                Bonjour <span>{user?.userInfos.firstName}</span>
            </h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className="profil__stats">
                {/* Top  */}
                <ActivityDaily id={id} />
                {/* Bottom  */}
                <AverageSessions id={id} />
                <ActivityPerformance id={id} />
                <ActivityScore
                    score={[{ score: score }, { score: 1 - score }]}
                />
                {/* Right */}
                <UserData keyData={user?.keyData} />
            </div>
        </div>
    );
};
