import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

import { fetchDashboardData } from "../services/api";
import "../styles/Dashboard.css";

 ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
 );

 export default function Dashboard() {
  const [users, setUsers] = useState(0);
  const [posts, setPosts] = useState(0);
  const [comments, setComment] = useState(0);

  useEffect(() => {
    async function loadData() {
      const data = await fetchDashboardData();
      setUsers(data.users);
      setPosts(data.posts);
      setComment(data.comments);
    }

    loadData();
  }, []);

  const chartData = {
    labels: ["Users", "Posts", "Comments"],
    datasets: [
      {
        label: "API Overview",
        data: [users, posts, comments],
        backgroundColor: ["#4CAF50", "#2196F3", "#FF9800"]
      }
    ]
  };

  return (
    <div className="dashboard" id="dashboard">
      <h2>OKS-DEV API DASHBOARD</h2>
      <div className="stats">
        <p>Users: {users}</p>
        <p>Posts: {posts}</p>
        <p>Comments: {comments}</p>
      </div>

      <div className="chart-container">
        <Bar data={chartData} />
      </div>
    </div>
  )
 }