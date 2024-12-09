import React,{useEffect,useState} from 'react'

function Experience() {
  const [mentors, setMentors] = React.useState(0);
  const [clients, setClients] = React.useState(0);
  const [appointments, setAppointments] = React.useState(10);
  const [satisfaction, setSatisfaction] = React.useState(0);

  useEffect(() => {
    const interval = 50;
    const targetMentors = 1500;
    const targetClients = 600;
    const targetAppointments = 124;
    const targetSatisfaction = 100;

    const incrementMentors = targetMentors / (1000 / interval);
    const incrementClients = targetClients / (1000 / interval);
    const incrementAppointments = targetAppointments / (1000 / interval);
    const incrementSatisfaction = targetSatisfaction / (1000 / interval);

    const timer = setInterval(() => {
        setMentors(prev => Math.min(prev + incrementMentors, targetMentors));
        setClients(prev => Math.min(prev + incrementClients, targetClients));
        setAppointments(prev => Math.min(prev + incrementAppointments, targetAppointments));
        setSatisfaction(prev => Math.min(prev + incrementSatisfaction, targetSatisfaction));
    }, interval);

    return () => clearInterval(timer);
}, []);

  return (
      <div className="text-center py-16">
          <h2 className="text-blue-500 text-lg">OUR ACHIEVEMENTS</h2>
          <h1 className="text-4xl font-bold mt-2">Have 10 Years Of Experiences</h1>
          <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                  <i className="fas fa-user-tie text-5xl"></i>
                  <h3 className="text-3xl font-bold mt-4">{mentors}+</h3>
                  <p className="text-gray-400 mt-2">Qualified Mentors</p>
              </div>
              <div>
                  <i className="fas fa-user-graduate text-5xl"></i>
                  <h3 className="text-3xl font-bold mt-4">{clients}+</h3>
                  <p className="text-gray-400 mt-2">Happy Clients</p>
              </div>
              <div>
                  <i className="fas fa-calendar-alt text-5xl"></i>
                  <h3 className="text-3xl font-bold mt-4">{appointments}+</h3>
                  <p className="text-gray-400 mt-2">Appointments</p>
              </div>
              <div>
                  <i className="fas fa-thumbs-up text-5xl"></i>
                  <h3 className="text-3xl font-bold mt-4">{satisfaction}%</h3>
                  <p className="text-gray-400 mt-2">Job Satisfaction</p>
              </div>
          </div>
      </div>
  );
}
export default Experience
