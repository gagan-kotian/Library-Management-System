const hre = require("hardhat");

async function main() {
  const lib = await hre.ethers.getContractFactory("Library");
  const contract = await lib.deploy(); //instance of contract
  console.log(`Deployed: ${contract.target}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
