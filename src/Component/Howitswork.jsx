import React from 'react'

const Howitswork = () => {
  return (
    <>
      <div className="container mx-auto py-12 px-4">
                    <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">How It Works</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  py-5">
                        <div className="border  p-6 rounded-lg shadow-md text-center">
                            <img src="images/image_dairy.png" alt="Icon representing logging meals" className="w-[300px] h-[230px] border   mb-4"/>
                            <h2 className="text-xl font-bold mb-2">Log Meals</h2>
                            <p className="text-gray-600">Record your meals and track your calorie intake to maintain a balanced diet.</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md text-center ">
                            <img src="images/track_activities.png" alt="Icon representing tracking activities" className="w-[300px] h-[230px] mb-4 border  "/>
                            <h2 className="text-xl font-bold ">Track Activities</h2>
                            <p className="text-gray-600">Monitor your physical activities and exercise routines to stay active and fit.</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md text-center">
                            <img src="/images/sleep_track.jpg" alt="Icon representing monitoring sleep" className="w-[300px] h-[230px] mb-4 border  "/>
                            <h2 className="text-xl font-bold mb-2">Monitor Sleep</h2>
                            <p className="text-gray-600">Keep track of your sleep patterns to ensure you're getting quality rest.</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md text-center">
                            <img src="/images/record_mood.png" alt="Icon representing recording mood" className="w-[300px] h-[230px] mb-4 border  "/>
                            <h2 className="text-xl font-bold mb-2">Record Mood</h2>
                            <p className="text-gray-600">Log your daily mood to understand emotional patterns and improve mental well-being.</p>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Howitswork