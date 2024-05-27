import { useState, useEffect } from "react";

function RequestLetter({ state, theme }) {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [program, setProgram] = useState("");
  const [id, setId] = useState(22); // Initialize ID to 7
  const { contract } = state;

  useEffect(() => {
    // This effect will run only once, on component mount
    setId(22); // Initialize ID to 7
  }, []);

  const handleRequest = async () => {
    try {
      // Request recommendation from the contract
      await contract.requestRecommendation(name, university, program);

      // Increment the ID after a successful request
      setId((prevId) => prevId + 1);

      alert("Recommendation requested successfully!");
    } catch (error) {
      console.error(error);
      alert("Error requesting recommendation");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`mb-2 w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:bg-gray-800`}
      />
      <input
        type="text"
        placeholder="University"
        value={university}
        onChange={(e) => setUniversity(e.target.value)}
        className={`mb-2 w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:bg-gray-800`}
      />
      <input
        type="text"
        placeholder="Program"
        value={program}
        onChange={(e) => setProgram(e.target.value)}
        className={`mb-2 w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:bg-gray-800`}
      />

      <button
        onClick={handleRequest}
        className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded`}
      >
        Request Library ID
      </button>
      {id !== "" && <div className="mt-2 text-gray-300">Library ID: {id}</div>}
    </div>
  );
}

export default RequestLetter;
