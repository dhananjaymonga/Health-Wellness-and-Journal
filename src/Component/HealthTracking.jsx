import React from 'react'

const HealthTracking = () => {
  return (
    <div className='w-full p-10  md:p-0' ><div className="bg-white w-12/12 p-8 rounded-lg shadow-md mt-2">
    <h1 className="text-2xl font-bold mb-4">Health Tracking Importance</h1>
    <div className="flex flex-col lg:flex-row">
        <div className="bg-gray-200 rounded-lg w-full lg:w-1/3 h-64 flex items-center justify-center mb-4 lg:mb-0 lg:mr-4">
            <img src="images/image_4.png" alt="Placeholder image for health tracking" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="w-full lg:w-2/3">
            <p className="mb-4">
                Tracking your health is a powerful tool for maintaining and improving your overall well-being. By consistently monitoring various aspects of your health, you gain valuable insights into your habits, patterns, and progress.
            </p>
            <p className="mb-4">
                Regular health tracking allows you to:
            </p>
            <ul className="list-disc list-inside">
                <li>Identify trends in your physical and mental health</li>
                <li>Set realistic and achievable health goals</li>
                <li>Make informed decisions about your lifestyle choices</li>
                <li>Communicate more effectively with healthcare providers</li>
            </ul>
        </div>
    </div>
</div></div>
  )
}

export default HealthTracking