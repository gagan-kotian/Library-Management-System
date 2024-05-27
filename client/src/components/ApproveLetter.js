import { useState } from "react";

function ApproveLetter({ state, theme }) {
  const [id, setId] = useState("");

  const allowedAccount = "0x9065d0ED36Bd17CbB56467A9e87b0CEC44f82b86"; // Replace with the desired allowed account

  const handleApprove = async () => {
    try {
      const account = await state.signer.getAddress();
      console.log(account);
      if (account !== allowedAccount) {
        alert("You are not allowed to approve recommendations.");
        return;
      }

      await state.contract.approveRecommendation(id);
      alert("Recommendation approved successfully!");
    } catch (error) {
      console.error(error);
      alert("Error approving recommendation");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Recommendation ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className={`mb-2 w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:bg-gray-800`}
      />
      <button
        onClick={handleApprove}
        className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded`}
      >
        Approve Library ID
      </button>
    </div>
  );
}

export default ApproveLetter;
