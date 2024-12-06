import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import {dataProvider} from "./Store"


function Section() {
  const btn = <a href="#_" class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
  <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
  <span class="relative font-bold text-xl group-hover:text-white">Start Your Health Journey </span>
</a>
  let {store,setStore} =useContext(dataProvider)

  let date = new Date();
  console.log(date)
  let h = date.getHours();
  let m = date.getMinutes();
  let mm = Math.floor(Math.log10(m)+1)
  m = mm  == 1 ? '0'+m : m;

  function TIME(){
    // setStore((prevCount)=)
// setStore([...store,{date:date,hours:h,minute:m,second:mm}])
setStore(prevStore => [
    ...prevStore,
    { date: date, hours: h, minute: m, second: mm }
]);
console.log(store)
  }


  return (
    <div className="bg-purple-100 min-h-screen flex items-center justify-center p-4">
    <div className="text-center p-6 md:p-8 lg:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">Track Your Health Journey with Daily Logs</h1>
        <p className="text-base md:text-lg text-gray-700 mb-6">Our Health & Wellness Journal helps you monitor your daily habits, empowering you to make informed decisions about your well-being.</p>
      <Link to={"/dAilylogin"}>
      <button onClick={TIME}>{btn}</button>

      </Link>
    </div>
</div>
  )
}

export default Section