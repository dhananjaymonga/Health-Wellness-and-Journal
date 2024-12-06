import React from 'react'

const Mainpoint = () => {
  return (
    <div>
       
                 <div className="flex flex-col lg:flex-row justify-center items-center p-6 space-y-6 lg:space-y-0 lg:space-x-6">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/2">
                        <h2 className="text-2xl font-bold mb-2">Comprehensive Daily Logging</h2>
                        <p className="text-gray-600 mb-4">Track all aspects of your health in one place</p>
                        <div className="bg-gray-100 h-48 flex items-center justify-center rounded-lg mb-4">
                            <img src="images/daily_loging.png" alt="Placeholder image for daily logging" className=" h-[200px]  w-[700px] object-cover rounded-lg  border  "/>
                        </div>
                        <p className="text-gray-700">Our daily log feature allows you to record your meals, physical activities, sleep patterns, and mood all in one convenient location. By consistently logging your daily habits, you'll gain valuable insights into your overall health and wellness.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/2">
                        <h2 className="text-2xl font-bold mb-2">Personalized Health Insights</h2>
                        <p className="text-gray-600 mb-4">Understand your habits and make positive changes</p>
                        <div className="bg-gray-100 h-48 flex items-center justify-center rounded-lg mb-4">
                            <img src="images/insights.png  " alt="Placeholder image for health insights" className=" h-[200px] w-[200px] object-cover rounded-lg"/>
                        </div>
                        <p className="text-gray-700">As you log your daily activities, our app provides personalized insights and trends. Identify patterns in your sleep quality, discover how your diet affects your mood, and see how your exercise routine impacts your overall well-being.</p>
                    </div>
                </div>
    </div>
  )
}

export default Mainpoint