const hre = require("hardhat");

async function main() {
  // Deploy the contract
  const ClickerGame = await hre.ethers.deployContract("ClickerGame");
  await ClickerGame.waitForDeployment();

  console.log(`ClickerGame deployed to: ${ClickerGame.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
