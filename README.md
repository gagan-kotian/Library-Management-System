


# Library Management System

This decentralized system allows students to request recommendations for library access or resources, with approvals managed through a smart contract on the Ethereum blockchain. The contract securely stores student details such as name, university, and program, and allows administrators to approve or reject recommendations. The system ensures transparency and immutability of the recommendation process, providing a trusted platform for managing library access.

## Appendix

Index
- [Features](#Features)
- [Installation](#installation)
- [Run Locally](##RunLocally)
- [Environment Variables](##Environmentalvariables)

# Features

## Decentralized Recommendation Requests
Students can request recommendations for library access or resources through a secure and transparent blockchain system.

## Immutable Student Records
The smart contract stores student information (name, university, and program) in an immutable way, ensuring the integrity of records.

## Approval Management
Library administrators can approve or reject student recommendations using the smart contract, with each action being securely recorded on the blockchain.

## Automated Student ID Generation
Each student recommendation request generates a unique student ID, allowing easy tracking and management of requests.

## Real-Time Approval Status
Students and administrators can view the status of a recommendation (approved or pending) in real-time using the smart contract's public mapping.

## Tamper-Proof Recommendations
Once a recommendation is approved, it cannot be modified or revoked, ensuring trust in the approval process.

## Scalability
The system can handle an increasing number of recommendation requests without compromising performance, thanks to the decentralized nature of the Ethereum blockchain.


## Installation

Install my-project with npm

```bash
  npm install
  cd client
  npm install


Metamask Installation
This project utilizes blockchain technology and smart contracts, requiring the installation of Metamask for Ethereum wallet functionality. Follow these steps to set up Metamask:

Install Metamask:
If you haven't already, install Metamask as a browser extension for your preferred browser (Chrome, Firefox, Brave, etc.). You can find Metamask and installation instructions at metamask.io.

Set up Metamask:

Create a new wallet or import an existing one.
Connect Metamask to the Ethereum Mainnet or any other network your project interacts with.
Configure your wallet:

Ensure your wallet is funded with the appropriate Ethereum (ETH) or tokens required for interacting with this application's smart contracts.
Connect Metamask to the application:

Once Metamask is installed and set up, connect it to the application to enable blockchain interactions.
For detailed instructions on using Metamask, refer to the Metamask User Guide.

```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


```bash
API_KEY=ADD_YOUR_API_KEY_HERE
GOERLI_URL=ADD_RPC_URL_HERE
PRIVATE_KEY=ADD_WALLET_PRIVATE_KEY_HERE

```



## Run Locally

Clone the project

```bash
  git clone https://github.com/gagan-kotian/Blockchain-based-Electoral-Bond-Web-App.git

```

Go to the project directory

```bash
  cd Blockchain-based-Electoral-Bond-Web-App
```

Install dependencies

```bash
  npm install
```

Deploy Smart Contract

```bash
  npx hardhat run --network goerli scripts/finaldeploy.js
```

Copy and paste the deployed contract address in App.js:

```bash
  const contractAddress = "0x0e32839B72AD8589F633F1Ce9ad94d13D1438630";
```
Frontend Installation
Go to the client directory

```bash
cd client
```

Install dependencies
```bash
npm install
```


Start the server
```bash
npm start
```


## Tech Stack

ReactJS,
Ethereum,
Sepolia,
Hardhat


