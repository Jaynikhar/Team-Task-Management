import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get("/dashboard");
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h2>Dashboard</h2>

        <div className="cards">
          <div className="card">
            <h3>Total Tasks</h3>
            <p>{data.total}</p>
          </div>

          <div className="card">
            <h3>Completed</h3>
            <p>{data.completed}</p>
          </div>

          <div className="card">
            <h3>Pending</h3>
            <p>{data.pending}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;