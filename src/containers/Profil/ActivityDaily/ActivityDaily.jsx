import { useEffect, useState } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { getOne } from "../../../http-services";
import "./ActivityDaily.css";

export const ActivityDaily = ({ id }) => {
    const [activity, setActivity] = useState();
    const barRadius = [5, 5, 0, 0];

    // Get activity
    useEffect(() => {
        getOne(id, "activity").then((res) => setActivity(res.data.sessions));
    }, []);

    const customTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <ul className="custom-tooltip">
                    {payload.map(({ dataKey, value }) => (
                        <li key={dataKey}>
                            {value}
                            {dataKey === "kilogram" ? "kg" : "kcal"}
                        </li>
                    ))}
                </ul>
            );
        }
    };

    const customLegend = ({ payload }) => (
        <div className="custom-legend">
            <h3>Activité quotidienne</h3>
            <ul>
                {payload.map(({ value, color, dataKey }) => (
                    <li key={dataKey}>
                        <div
                            className="custom-legend__dot"
                            style={{ backgroundColor: color }}
                        ></div>
                        <div className="custom-legend__value">{value}</div>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <ResponsiveContainer width="100%" className="activity-chart">
            <BarChart
                data={activity}
                barGap={8}
                margin={{ left: 32, right: 32, bottom: 32 }}
            >
                <CartesianGrid
                    vertical={false}
                    stroke="#ccc"
                    strokeDasharray="2"
                />
                <YAxis
                    orientation="right"
                    interval={1}
                    axisLine={false}
                    tickLine={false}
                    scale="linear"
                    padding={{ top: 20 }}
                    tickMargin={25}
                />
                <XAxis
                    padding="gap"
                    axisLine={{ stroke: "#DEDEDE" }}
                    tickLine={false}
                    tickSize={25}
                    tickFormatter={(option) => option + 1}
                />
                <Tooltip
                    cursor={{ fillOpacity: 0.5 }}
                    content={customTooltip}
                />

                <Legend verticalAlign="top" content={customLegend} />
                <Bar
                    dataKey="kilogram"
                    barSize={7}
                    fill="var(--color-first)"
                    name="Poids (kg)"
                    radius={barRadius}
                />
                <Bar
                    dataKey="calories"
                    barSize={7}
                    name="Calories brûlées (kCal)"
                    fill="var(--color-second)"
                    radius={barRadius}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};
