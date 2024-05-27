import { useState } from "react";

function GetDetails({ state, theme }) {
  const [id, setId] = useState("");
  const [details, setDetails] = useState(null);

  const handleGetDetails = async () => {
    try {
      const result = await state.contract.getStudentDetails(id);
      setDetails(result);
    } catch (error) {
      console.error(error);
      alert("Error fetching student details");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Student ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className={`mb-2 w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:bg-gray-800`}
      />
      <button
        onClick={handleGetDetails}
        className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded`}
      >
        Get Student Details
      </button>
      <div className="mt-4">
        {details && (
          <div className={`text-${theme}-600`}>
            <p>Name: {details[0]}</p>
            <p>University: {details[1]}</p>
            <p>Program: {details[2]}</p>
            <p>Approved: {details[3] ? "Yes" : "No"}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GetDetails;
