import React, { useEffect, useState } from "react";
import axios from 'axios';

// components
import { WorkoutDetails } from "../components/WorkoutDetails";

export const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
	axios.get("https://mern-backends.herokuapp.com/api/workouts")
	.then((response) => {
		setWorkouts(response.data)
	})
	.catch(() => {
		console.log("err");
	})
  }, []);

//   async function getUser() {
// 	try {
// 	  const response = await fetch('https://mern-backends.herokuapp.com/api/workouts', {
// 		 method: 'GET',
// 		 headers: {
// 			accept: 'application/json',
// 		 },
// 	  });
 
// 	  if (!response.ok) {
// 		 throw new Error(`Error! status: ${response.status}`);
// 	  }
 
// 	  const result = await response.json();
// 	  console.log('work');
// 	  return result;
// 	} catch (err) {
// 	  console.log(err);
// 	}
//  }

//  getUser();

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
