import "./ActivityScore.css";
import { Pie, PieChart, ResponsiveContainer, Sector } from "recharts";

export const ActivityScore = ({ score }) => {
    const inactiveShape = ({ cx, cy, startAngle, endAngle, outerRadius }) => (
        <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={0}
            outerRadius={outerRadius}
            fill="white"
        />
    );
    const activeShape = ({
        cx,
        cy,
        startAngle,
        endAngle,
        outerRadius,
        payload,
    }) => (
        <g>
            {/* <text
                className="active-shape__value"
                x={cx}
                y={cy}
                textAnchor="middle"
                fill="black"
            >
                {payload.score * 100}%
            </text>
            <text
                className="active-shape__descr"
                x={cx}
                y={cy}
                dy={25}
                textAnchor="middle"
                fill="#74798C"
            >
                de votre objectif
            </text> */}
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius}
                outerRadius={outerRadius + 10}
                fill="var(--color-second)"
                cornerRadius={5}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={0}
                outerRadius={outerRadius}
                fill="white"
            />
        </g>
    );
    return (
        <div className="activity-score">
            <ResponsiveContainer height={250} width={250}>
                <PieChart>
                    <Pie
                        activeIndex={0}
                        data={score}
                        dataKey="score"
                        inactiveShape={inactiveShape}
                        activeShape={activeShape}
                        startAngle={-280}
                    />
                </PieChart>
            </ResponsiveContainer>
            <div className="activity-score__descr">
                {score[0].score * 100}%<div>de votre objectif</div>
            </div>
        </div>
    );
};
