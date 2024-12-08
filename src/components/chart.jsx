import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const GraphWithTable = () => {
  // Chart Data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // X-axis labels
    datasets: [
      {
        label: "Development Activity",
        data: [10, 20, 15, 30, 25, 40], // Y-axis data points
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill under the line
        tension: 0.4, // Smoothness of the line
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hides grid lines for X-axis
        },
      },
      y: {
        beginAtZero: true, // Starts Y-axis from 0
      },
    },
  };

  // Table Data
  const tableData = [
    {
      profilePic: "https://via.placeholder.com/40", // Placeholder image
      user: "Ronald Bradley",
      commit: "Initial commit",
      date: "May 6, 2018",
    },
    {
      profilePic: "https://via.placeholder.com/40",
      user: "Russell Gibson",
      commit: "Main structure",
      date: "April 22, 2018",
    },
    {
      profilePic: "https://via.placeholder.com/40",
      user: "Beverly Armstrong",
      commit: "Left sidebar adjustments",
      date: "April 15, 2018",
    },
  ];

  return (
    <div
      style={{ padding: "50", backgroundColor: "white", marginLeft: "47px",
        width: "47%", border: "1px solid lightgrey", fontFamily: "Arial, sans-serif" }}
    >
      <h1 style={{ fontsize: "24px", paddingTop: "10px" }}>Sales Data</h1>

      {/* Graph Section */}
      <div style={{ marginBottom: "40px" }}>
        <Line data={data} options={options} />
      </div>

      {/* Table Section */}
      <div>
        <h2>Development Activity</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={styles.th}>User</th>
              <th style={styles.th}>Commit</th>
              <th style={styles.th}>Date</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} style={styles.tr}>
                <td style={styles.td}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={row.profilePic}
                      alt="Profile"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    />
                    {row.user}
                  </div>
                </td>
                <td style={styles.td}>{row.commit}</td>
                <td style={styles.td}>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// CSS-in-JS styles for the table
const styles = {
  th: {
    textAlign: "left",
    padding: "10px",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  tr: {
    backgroundColor: "white",
  },
};

export default GraphWithTable;
