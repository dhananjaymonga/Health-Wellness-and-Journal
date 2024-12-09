
// import React,{useState,useEffect} from "react";
// function Achievements() {
//     const [mentors, setMentors] = React.useState(0);
//     const [clients, setClients] = React.useState(0);
//     const [appointments, setAppointments] = React.useState(0);
//     const [satisfaction, setSatisfaction] = React.useState(0);

//     React.useEffect(() => {
//         const interval = setInterval(() => {
//             setMentors(prev => (prev < 1500 ? prev + 1 : 1500));
//             setClients(prev => (prev < 600 ? prev + 1 : 600));
//             setAppointments(prev => (prev < 124 ? prev + 1 : 124));
//             setSatisfaction(prev => (prev < 100 ? prev + 1 : 100));
//         }, 10);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="text-center py-16">
//             <h2 className="text-blue-500 text-lg">OUR ACHIEVEMENTS</h2>
//             <h1 className="text-4xl font-bold mt-2">Have 10 Years Of Experiences</h1>
//             <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
//                 <div>
//                     <i className="fas fa-user-tie text-5xl"></i>
//                     <h3 className="text-3xl font-bold mt-4">{mentors}+</h3>
//                     <p className="text-gray-400 mt-2">Qualified Mentors</p>
//                 </div>
//                 <div>
//                     <i className="fas fa-user-graduate text-5xl"></i>
//                     <h3 className="text-3xl font-bold mt-4">{clients}+</h3>
//                     <p className="text-gray-400 mt-2">Happy Clients</p>
//                 </div>
//                 <div>
//                     <i className="fas fa-calendar-alt text-5xl"></i>
//                     <h3 className="text-3xl font-bold mt-4">{appointments}+</h3>
//                     <p className="text-gray-400 mt-2">Appointments</p>
//                 </div>
//                 <div>
//                     <i className="fas fa-thumbs-up text-5xl"></i>
//                     <h3 className="text-3xl font-bold mt-4">{satisfaction}%</h3>
//                     <p className="text-gray-400 mt-2">Job Satisfaction</p>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Achievements