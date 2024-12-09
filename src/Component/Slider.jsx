// import React, { useState, useEffect } from 'react';


// const profiles = [
//     {
//         name: "Donna Yancey",
//         title: "Digital Marketer",
//         rating: 4.4,
//         location: "Paris, France",
//         image: "/images/mentor1.jpg",
//         alt: "Portrait of Donna Yancey"
//     },
//     {
//         name: "James Amen",
//         title: "UNIX, Calculus, Trigonometry",
//         rating: 5.0,
//         location: "Paris, France",
//         image: "/images/mentor2.jpg",
//         alt: "Portrait of James Amen"
//     },
//     {
//         name: "Marvin Downey",
//         title: "ASP.NET, Computer Gaming",
//         rating: 5.0,
//         location: "Newyork, USA",
//         image: "/images/mentor3.jpg",
//         alt: "Portrait of Marvin Downey"
//     },
//     {
//         name: "Betty Hairston",
//         title: "Computer Programming",
//         rating: 4.4,
//         location: "Paris, France",
//         image: "/images/mentor4.jpg",
//         alt: "Portrait of Betty Hairston"
//     },
//     {
//         name: "Aaron Pietrzak",
//         subjects: "UNIX,Calculus,Trigonometry",
//         rating: 4.4,
//         location: "Paris, France",
//         image: "/images/mentor6.jpg"
//     },
//     {
//         name: "Brian Martinez",
//         subjects: "ASP.NET,Computer Gaming",
//         rating: 4.4,
//         location: "Paris, France",
//         image: "/images/agesuser7.jpg"
//     },
//     {
//         name: "Misty Lundy",
//         subjects: "Computer Programming",
//         rating: 4.4,
//         location: "Paris, France",
//         image: "/images/user8.jpg"
//     },
//     {
//         name: "Vern Campbell",
//         subjects: "Digital Marketer",
//         rating: 4.4,
//         location: "Paris, France",
//         image: "/images/agesuser9.jpg"
//     },
//     {
//         name: "Evelyn Stafford",
//         title: "ASP.NET, Computer Gaming",
//         rating: 4.4,
//         location: "Paris, France",
//         image: "/images/user11.jpg"
//     },
//     {
//         name: "Christopher Carroll",
//         title: "Computer Programming",
//         rating: 4.4,
//         location: "Paris, France",
//         image: "/images/user13.jpg"
//     },
//     {
//         name: "Donna Yancey",
//         title: "Digital Marketer",
//         rating: 4.4,
//         location: "Paris, France",
//         image: "/images/user10.jpg"
//     },
//     {
//         name: "Jose Anderson",
//         title: "Digital Marketar",
//         rating: 4.4,
//         location: "Paris, France",
//         image: "/images/mentor1.jpg"
//     }
// ];

// function ProfileCard({ profile }) {

//     return (
//         <div className="bg-white rounded-lg shadow-md overflow-hidden m-4">
//             <img className="w-[250px] h-48 object-cover  animate-pulse" src={profile.image} alt={profile.alt} />
//             <div className="p-4">
//                 <h2 className="text-xl font-bold text-gray-800">{profile.name}</h2>
//                 <p className="text-gray-600">{profile.title}</p>
//                 <div className="flex items-center mt-2">
//                     <div className="flex text-yellow-500">
//                         {/* {[...Array(5)].map((star, index) => (
//                             <i key={index} className={fas fa-star ${index < Math.floor(profile.rating) ? '' : 'text-gray-300'}}></i>
//                         ))} */}
//                     </div>
//                     <span className="ml-2 text-gray-600">{profile.rating}</span>
//                 </div>
//                 <div className="flex items-center mt-2 text-gray-600">
//                     <i className="fas fa-map-marker-alt mr-2"></i>
//                     <span>{profile.location}</span>
//                 </div>
//             </div>  
//         </div>
//     );
// }

// function Slider() {
//     const [idx, setIdx] = useState(0);

//     let arr = [];
//     for(let i=idx; i <= idx+3; i++) {
//         arr.push(profiles[i])
//     }

//     console.log(idx)

//     useEffect(() => {
//         let id = setInterval(() => {
//             setIdx(prev => (prev+4)%profiles.length);
//         }, 2000)

//         return () => {
//             clearInterval(id)
//         }
//     }, [])
    
//     return (
//         <div className="flex flex-wrap justify-center">
//             {arr.map((profile, index) => (
//                 <ProfileCard key={index} profile={profile} />
//             ))}
//         </div>
//     );
// }

// export default Slider
