import { useEffect, useState } from "react";
import { getOne } from "../../http-services";
import "./Profil.css";
// import user from "/src/assets/apiMock/user.json";

export const Profil = () => {
    const id = 12;
    const [user, setUser] = useState();
    const [activity, setActivity] = useState();
    const [avgSessions, setAvgSessions] = useState();
    const [activityType, setActivityType] = useState();

    // Get user
    useEffect(() => {
        getOne(id).then((res) => setUser(res.data));
    }, []);

    // Get activity
    useEffect(() => {
        getOne(id, "activity").then((res) => setActivity(res.data));
    }, []);

    // Get average-sessions
    useEffect(() => {
        getOne(id, "average-sessions").then((res) => setAvgSessions(res.data));
    }, []);

    // Get activity type
    useEffect(() => {
        getOne(id, "performance").then((res) => setActivityType(res.data));
    }, []);

    return (
        <div className="profil">
            <h2>
                Bonjour <span>{user?.userInfos.firstName}</span>
            </h2>
        </div>
    );
};
