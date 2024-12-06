import React, { useState, useContext, createContext } from "react";

// Context for sharing data across components
const dataProvider = createContext();

const Meals = () => {
  const { data, setData } = useContext(dataProvider);
  const [allLogs, setAllLogs] = useState([]);
  const [activeTab, setActiveTab] = useState("Meal");

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // Handle form submissions
  const handleSubmit = (e, category) => {
    e.preventDefault();
    const newLog = { category, ...data };
    setAllLogs([newLog, ...allLogs]);
    setData({});
  };

  // Generate form content based on active tab
  const renderContent = () => {
    const formStyles = "mb-4";
    const labelStyles = "block text-gray-700 font-medium mb-2";
    const inputStyles =
      "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400";
    const textareaStyles =
      "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400";

    switch (activeTab) {
      case "Meal":
        return (
          <form
            onSubmit={(e) => handleSubmit(e, "Meal")}
            className="p-6 bg-gradient-to-r from-green-100 to-green-200 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-6">Log Meal</h2>
            <div className={formStyles}>
              <label className={labelStyles}>Day</label>
              <input
                type="text"
                name="day"
                value={data.day || ""}
                onChange={handleChange}
                className={inputStyles}
                placeholder="E.g., Monday"
              />
            </div>
            <div className={formStyles}>
              <label className={labelStyles}>Calories</label>
              <input
                type="number"
                name="calories"
                value={data.calories || ""}
                onChange={handleChange}
                className={inputStyles}
                placeholder="E.g., 500"
              />
            </div>
            <div className={formStyles}>
              <label className={labelStyles}>Breakfast</label>
              <input
                type="text"
                name="breakfast"
                value={data.breakfast || ""}
                onChange={handleChange}
                className={inputStyles}
                placeholder="E.g., Oatmeal"
              />
            </div>
            <div className={formStyles}>
              <label className={labelStyles}>Lunch</label>
              <input
                type="text"
                name="lunch"
                value={data.lunch || ""}
                onChange={handleChange}
                className={inputStyles}
                placeholder="E.g., Salad"
              />
            </div>
            <div className={formStyles}>
              <label className={labelStyles}>Notes</label>
              <textarea
                name="notes"
                value={data.notes || ""}
                onChange={handleChange}
                className={textareaStyles}
                placeholder="E.g., Feeling energetic"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
            >
              Log Meal
            </button>
          </form>
        );
      case "Sleep":
        return (
          <form
            onSubmit={(e) => handleSubmit(e, "Sleep")}
            className="p-6 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-6">Log Sleep</h2>
            <div className={formStyles}>
              <label className={labelStyles}>Hours Slept</label>
              <input
                type="number"
                name="hours"
                value={data.hours || ""}
                onChange={handleChange}
                className={inputStyles}
                placeholder="E.g., 8"
              />
            </div>
            <div className={formStyles}>
              <label className={labelStyles}>Quality</label>
              <select
                name="quality"
                value={data.quality || ""}
                onChange={handleChange}
                className={inputStyles}
              >
                <option value="">Select Quality</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
            <div className={formStyles}>
              <label className={labelStyles}>Notes</label>
              <textarea
                name="notes"
                value={data.notes || ""}
                onChange={handleChange}
                className={textareaStyles}
                placeholder="E.g., Woke up refreshed"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition"
            >
              Log Sleep
            </button>
          </form>
        );
      case "Activity":
        return (
          <form
            onSubmit={(e) => handleSubmit(e, "Activity")}
            className="p-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-6">Log Activity</h2>
            <div className={formStyles}>
              <label className={labelStyles}>Activity Type</label>
              <input
                type="text"
                name="activityType"
                value={data.activityType || ""}
                onChange={handleChange}
                className={inputStyles}
                placeholder="E.g., Running"
              />
            </div>
            <div className={formStyles}>
              <label className={labelStyles}>Duration (Minutes)</label>
              <input
                type="number"
                name="duration"
                value={data.duration || ""}
                onChange={handleChange}
                className={inputStyles}
                placeholder="E.g., 30"
              />
            </div>
            <div className={formStyles}>
              <label className={labelStyles}>Notes</label>
              <textarea
                name="notes"
                value={data.notes || ""}
                onChange={handleChange}
                className={textareaStyles}
                placeholder="E.g., Felt great"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Log Activity
            </button>
          </form>
        );
      case "Mood":
        return (
          <form
            onSubmit={(e) => handleSubmit(e, "Mood")}
            className="p-6 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-6">Log Mood</h2>
            <div className={formStyles}>
              <label className={labelStyles}>Mood</label>
              <select
                name="mood"
                value={data.mood || ""}
                onChange={handleChange}
                className={inputStyles}
              >
                <option value="">Select Mood</option>
                <option value="Happy">Happy</option>
                <option value="Neutral">Neutral</option>
                <option value="Sad">Sad</option>
              </select>
            </div>
            <div className={formStyles}>
              <label className={labelStyles}>Notes</label>
              <textarea
                name="notes"
                value={data.notes || ""}
                onChange={handleChange}
                className={textareaStyles}
                placeholder="E.g., Feeling relaxed"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              Log Mood
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  // Display recent logs dynamically
  const renderRecentLogs = () => {
    return allLogs.slice(0, 5).map((log, idx) => (
      <li
        key={idx}
        className={`p-4 rounded-lg shadow-md ${
          idx % 2 === 0 ? "bg-gray-100" : "bg-white"
        }`}
      >
        <h4 className="font-bold text-lg text-gray-700 border-b pb-2 mb-2">
          {log.category}
        </h4>
        {Object.entries(log)
          .filter(([key]) => key !== "category")
          .map(([key, value]) => (
            <p key={key} className="text-gray-600 mb-1">
              <strong className="capitalize text-gray-800">{key}:</strong>{" "}
              {value}
            </p>
          ))}
      </li>
    ));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Health and Wellness Journal
      </h1>
      <div className="flex justify-center mb-8">
        {["Meal", "Sleep", "Activity", "Mood"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-6 mx-2 rounded-lg ${
              activeTab === tab
                ? "bg-blue-500 text-white shadow-md"
                : "bg-gray-100 text-gray-800"
            } hover:bg-blue-400 hover:text-white transition`}
          >
            {tab}
          </button>
        ))}
      </div>
      {renderContent()}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Recent Logs</h2>
        <ul className="space-y-4">{renderRecentLogs()}</ul>
      </div>
    </div>
  );
};

const App = () => {
  const [data, setData] = useState({});
  return (
    <dataProvider.Provider value={{ data, setData }}>
      <Meals />
    </dataProvider.Provider>
  );
};

export default App;
