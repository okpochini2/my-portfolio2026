import { useEffect, useState } from "react";
import { fetchDashboardData } from "../services/api";
import "../styles/Dashboard.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { UNSAFE_WithHydrateFallbackProps } from "react-router-dom";

 ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
 );

 const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboardData().then((res) => {
      setData(res);
    });
  }, []);
 

 if (!data) return <p>Loading dashboard...</p>;

 const chartData = {
  labels: ["Users", "Posts", "Comments"],
  datasets: [
    {
      label: "Platform Data",
      data: [data.users, data.posts, data.comments],
      backgroundColor: [
        "rgba(75, 192, 192, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 99, 132, 0.6)"
      ]
    }
  ]
 };

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Dashboard Overview"
    }
  }
 };

 return (
  <div className="dashboard">
    <h1 id="dashboard">Dashboard</h1>

    <Bar data={chartData} options={options} />

    <div style={{marginTop: "30px", textAlign: "left"}}>
      <p>Users: {data.users}</p>
      <p>Posts: {data.posts}</p>
      <p>Comments: {data.comments}</p>
    </div>
  </div>
 )
 };

 export default Dashboard;