import { useEffect, useState } from "react";
import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
} from "recharts";
import { getOne } from "../../../http-services";

export const ActivityPerformance = ({ id }) => {
    const [data, setData] = useState();
    // Get activity type
    useEffect(() => {
        getOne(id, "performance").then((res) => setData(res.data));
    }, []);

    return (
        <RadarChart
            height={250}
            width={250}
            outerRadius="80%"
            data={data?.data}
        >
            <PolarGrid />
            <PolarAngleAxis
                dataKey="kind"
                tickFormatter={(option) => data.kind[option]}
            />
            <Radar dataKey="value" fill="#FF0101" fillOpacity={0.5} />
        </RadarChart>
    );
};
