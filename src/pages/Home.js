import React, { useEffect, useState } from "react";

// components
import { WorkoutDetails } from "../components/WorkoutDetails";

export const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  async function getUser() {
	try {
	  const response = await fetch('https://randomuser.me/api/', {
		 method: 'GET',
		 headers: {
			accept: 'application/json',
		 },
	  });
 
	  if (!response.ok) {
		 throw new Error(`Error! status: ${response.status}`);
	  }
 
	  const result = await response.json();
	  return result;
	} catch (err) {
	  console.log(err);
	}
 }

 getUser();

  return (
    <div className="home">
      <div className="workouts">
        {/* {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))} */}
			 <p>Hello</p>
      </div>
    </div>
  );
};
