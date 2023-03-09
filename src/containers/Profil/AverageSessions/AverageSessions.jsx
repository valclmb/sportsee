import "./AverageSessions.css";
import { useEffect, useState } from "react";
import {
    Legend,
    Line,
    LineChart,
    Rectangle,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { getOne } from "../../../http-services";
import PropTypes from "prop-types";

export const AverageSessions = ({ id }) => {
    const [data, setData] = useState();

    const days = ["", "L", "M", "M", "J", "V", "S", "D", ""];
    // Get average-sessions
    useEffect(() => {
        getOne(id, "average-sessions").then((res) =>
            setData([
                { day: 0, sessionLength: 0 },
                ...res.data.sessions,
                { day: 0, sessionLength: 60 },
            ])
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

    const CustomCursor = (props) => {
        console.log(props.points);
        return (
            <Rectangle
                fill="black"
                stroke="black"
                x={props.points[0].x}
                y={0}
                width={props.width}
                height={500}
                opacity={0.1}
            />
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
                    padding={{ left: -20, right: -20 }}
                />
                <YAxis hide={true} padding={{ bottom: 20 }} />
                <Legend verticalAlign="top" content={customLegend} />
                <Tooltip content={customTooltip} cursor={<CustomCursor />} />
            </LineChart>
        </ResponsiveContainer>
    );
};
AverageSessions.propTypes = {
    id: PropTypes.number,
};
