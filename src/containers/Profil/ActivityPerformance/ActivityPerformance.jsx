import "./ActivityPerformance.css";
import { useEffect, useState } from "react";
import {
    PolarAngleAxis,
    PolarGrid,
    Radar,
    RadarChart,
    ResponsiveContainer,
} from "recharts";
import { getOne } from "../../../http-services";
import PropTypes from "prop-types";

/** ActivityPerformance, radar chart of the user data
 * @param {number} id - id of the user
 */
export const ActivityPerformance = ({ id }) => {
    const [data, setData] = useState();

    /** On component mount : fetch api for get user performance data */
    useEffect(() => {
        getOne(id, "performance").then((res) => setData(res.data));
    }, []);

    const category = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité",
    };

    return (
        <ResponsiveContainer className="activity-performance">
            <RadarChart outerRadius="58%" data={data?.data}>
                <PolarGrid gridType="polygon" radialLines={false} />
                <PolarAngleAxis
                    dataKey="kind"
                    tickFormatter={(option) => category[option]}
                    tick={{ fill: "white", fontSize: 12 }}
                />
                <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    );
};

ActivityPerformance.propTypes = {
    id: PropTypes.number,
};
