import "./AverageSessions.css";
import { useEffect, useState } from "react";
import {
    Legend,
    Line,
    LineChart,
    ReferenceArea,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
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

    const customTooltip = ({ active, payload, coordinate: { x, y } }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip__value">
                    {payload[0].value}min
                </div>
            );
        }
    };

    const customDot = (props) => {
        const { cx, cy } = props;
        return (
            <circle cx={cx} cy={cy} r={4} fill="white" className="custom-dot">
                test
            </circle>
        );
    };

    return (
        <ResponsiveContainer height="100%" width="100%">
            <LineChart data={data} className="average-sessions">
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="white" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="white" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <Line
                    type="natural"
                    dataKey="sessionLength"
                    strokeWidth={2}
                    stroke="url(#colorUv)"
                    dot={false}
                    activeDot={customDot}
                />
                <XAxis
                    tickFormatter={(option) => days[option]}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "rgba(255 255 255 / .5" }}
                    padding={{ left: 10, right: 10 }}
                />
                <YAxis hide={true} padding={{ bottom: 20 }} />
                <Legend verticalAlign="top" content={customLegend} />
                <Tooltip content={customTooltip} />
            </LineChart>
        </ResponsiveContainer>
    );
};
