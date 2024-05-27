import abi from "./contract/June.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import RequestLetter from "./components/RequestLetter";
import ApproveLetter from "./components/ApproveLetter";
import GetDetails from "./components/GetDetails";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x9094B78f7280f48051efe60D24Eae4C01d730ba1";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );

          setState({ provider, signer, contract });
        } else {
          alert("Please install MetaMask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white font-serif">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-pink-400">
          Library Management System
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-pink-400">
                Request Library Card
              </h2>
              <RequestLetter state={state} />
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-pink-400">
                Approve Library Card
              </h2>
              <ApproveLetter state={state} />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-pink-400">
              Get Details
            </h2>
            <GetDetails state={state} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
