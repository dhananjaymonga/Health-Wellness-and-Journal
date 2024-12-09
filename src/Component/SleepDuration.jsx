import React from 'react'
import { useContext } from 'react';
import {dataProvider} from "./Store"

const SleepDuration = () => {
    let {store,setStore} =useContext(dataProvider)

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let mm = Math.floor(Math.log10(m)+1)
  return (
    <><div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2">
    <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">Calorie Intake</h2>
        <p className="text-gray-600 mb-4">Daily calorie consumption</p>
        <img src="/images/calorie_intake.png" alt="Line chart showing calorie intake for Mon, Wed, Fri, Sun" className='h-[240px] w-[400px]'/>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">Sleep Duration</h2>
        <p className="text-gray-600 mb-4">Hours of sleep per night </p>
        <img src="/images/sleep_tracking.png" alt="Line chart showing calorie intake for Mon, Wed, Fri, Sun" className='h-[240px] w-[400px]'/>
    </div>
    {/* <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">Sleep Duration</h2>
        <p className="text-gray-600 mb-4">Hours of sleep per night</p>
        <img src="/images/calorie_intake.png alt="Bar chart showing sleep duration for  />
    </div> */}
    <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2 text-blue-600">Recent Logs</h2>
        <p className="text-gray-600 mb-4">Your latest health entries</p>
        <div className="space-y-4">
        {store.map((entry, index) => (
                    <li key={index}>
                        Recent Login
                        {/* {console.log(entry.data)} */}
                       
                        - Time:{entry.hours}:{entry.minute}:{entry.second}:
                    </li>
                ))}
                {/* {
                    store.map((val,idx)=>{
                        return(
                            
                            <div key={idx} className="bg-gray-100 p-4 rounded-lg">
                               { console.log(val)}
                                {val}
                            {/* <h3 className="font-bold">Meal Log</h3> */}
                            {/* <p>{val.date}</p> */}
                            {/* <p>{val.hours}:{val.minute}:{val.second}</p>
                            <p>Breakfast: 400 calories</p> */}
                            </div>
                
              
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold">Activity Log</h3>
                <p>5/20/2023, 9:00:00 AM</p>
                <p>Running for 30 minutes (high intensity)</p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold">Sleep Log</h3>
                <p>5/20/2023, 7:00:00 AM</p>
                <p>7 hours of good quality sleep</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold">Mood Log</h3>
                <p>5/20/2023, 12:00:00 PM</p>
                <p>Feeling happy</p>
            </div>
        </div>
    {/* </div> */}
 
{/* </div> */}
</>
  )
}

export default SleepDuration