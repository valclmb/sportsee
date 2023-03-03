import { useEffect, useState } from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { getOne } from "../../../http-services";

export const AverageSessions = ({ id }) => {
    const [data, setData] = useState();

    const days = ["L", "M", "M", "J", "V", "S", "D"];
    // Get average-sessions
    useEffect(() => {
        getOne(id, "average-sessions").then((res) =>
            setData(res.data.sessions)
        );
    }, []);

    const customLegend = () => <h3>Durée moyenne des sessions</h3>;

    const customTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return <div>{payload[0].value}min</div>;
        }
    };

    return (
        <LineChart width={250} height={250} data={data}>
            <Line type="monotone" dataKey="sessionLength" />
            <XAxis
                tickFormatter={(option) => days[option]}
                axisLine={false}
                tickLine={false}
            />
            <YAxis padding={{ bottom: 20 }} hide={true} />
            <Legend verticalAlign="top" content={customLegend} />
            <Tooltip content={customTooltip} />
        </LineChart>
    );
};
