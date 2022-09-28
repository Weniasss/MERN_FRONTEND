import React, { useEffect, useState } from "react";

// components
import { WorkoutDetails } from "../components/WorkoutDetails";

export const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
	fetch('https://mern-app.adaptable.app/api/workouts')
	.then( resp => resp.json())
	.then((data)=> {
		setWorkouts(data)
	})
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};
