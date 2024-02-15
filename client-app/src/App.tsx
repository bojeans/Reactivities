import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  city: string;
  venue: string;
}

const App = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Reactivities</h1>
      <ul>
        {activities.map((activity: Activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
