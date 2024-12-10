import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

const GraphWithTable = () => {
  return (
    <div className="bg-white shadow rounded p-6">
      <h3 className="text-lg font-semibold mb-4">Development Activity</h3>
      <div>
        {/* Replace this with a real chart (e.g., Chart.js or Recharts) */}
        <div className="h-48 bg-blue-100 rounded mb-4 flex items-center justify-center">
          <p>Graph Placeholder</p>
        </div>
      </div>

      <table className="table-auto w-full text-left">
        <thead>
          <tr className="text-gray-600">
            <th className="py-2 px-4">User</th>
            <th className="py-2 px-4">Commit</th>
            <th className="py-2 px-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              user: "Ronald Bradley",
              commit: "Initial commit",
              date: "May 6, 2018",
            },
            {
              user: "Russell Gibson",
              commit: "Main structure",
              date: "April 22, 2018",
            },
            {
              user: "Beverly Armstrong",
              commit: "Left sidebar adjustments",
              date: "April 15, 2018",
            },
          ].map((row, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4">{row.user}</td>
              <td className="py-2 px-4">{row.commit}</td>
              <td className="py-2 px-4">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GraphWithTable;
