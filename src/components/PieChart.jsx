import React from "react";

const PieChart = ({ title, data, colors }) => {
  const total = data.reduce((sum, value) => sum + value, 0);

  return (
    <div className="bg-white border border-gray-300 shadow rounded">
      <h3 className="text-lg font-semibold border-b-2 mb-4 p-2">{title}</h3>
      <div className="relative p-4 pt-1">
        <svg className="w-full  h-48" viewBox="0 0 32 32">
          {/* Generate pie chart slices */}
          {
            data.reduce(
              (prev, value, index) => {
                const [startAngle] = prev;
                const angle = (value / total) * 360;
                const endAngle = startAngle + angle;
                const largeArcFlag = angle > 180 ? 1 : 0;

                const x1 = 16 + 16 * Math.cos((startAngle * Math.PI) / 180);
                const y1 = 16 + 16 * Math.sin((startAngle * Math.PI) / 180);

                const x2 = 16 + 16 * Math.cos((endAngle * Math.PI) / 180);
                const y2 = 16 + 16 * Math.sin((endAngle * Math.PI) / 180);

                const pathData = `
              M 16 16
              L ${x1} ${y1}
              A 16 16 0 ${largeArcFlag} 1 ${x2} ${y2}
              Z
            `;

                return [
                  endAngle,
                  [
                    ...prev[1],
                    <path
                      key={index}
                      d={pathData}
                      fill={colors[index % colors.length]}
                    />,
                  ],
                ];
              },
              [0, []]
            )[1]
          }
        </svg>
      </div>
    </div>
  );
};

export default PieChart;
