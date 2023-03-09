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

/** Average sessions Line chart
 * @param {number} id - id of the user
 */
export const AverageSessions = ({ id }) => {
    const [data, setData] = useState();

    const days = ["", "L", "M", "M", "J", "V", "S", "D", ""];

    /** On component mount : fetch api for get average sessions data */
    useEffect(() => {
        getOne(id, "average-sessions").then((res) =>
            // Add generic data before and after the real data for borderless display
            setData([
                { day: 0, sessionLength: 0 },
                ...res.data.sessions,
                { day: 0, sessionLength: 60 },
            ])
        );
    }, []);

    /** Custom legend for the line chart */
    const customLegend = () => <h3>Durée moyenne des sessions</h3>;

    /** Custom tooltip for the line chart
     * @param {boolean} active - True when the user pass through the line chart
     * @param {array} payload - Data to display in the tooltip
     */
    const customTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip__value">
                    {payload[0].value}min
                </div>
            );
        }
    };

    /** Custom dot for the line chart
     * @param {number} cx - x coordinate infos
     * @param {number} cy - y coordinate infos
     */
    const customDot = ({ cx, cy }) => {
        return (
            <circle cx={cx} cy={cy} r={4} fill="white" className="custom-dot">
                test
            </circle>
        );
    };

    /** Custom cursor for the line chart
     * @param {array} points - coordinate of the line chart edge component
     * @param {number} width - the width of the line chart component
     */
    const CustomCursor = ({ points, width }) => {
        return (
            <Rectangle
                fill="black"
                stroke="black"
                x={points[0].x}
                y={0}
                width={width}
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
