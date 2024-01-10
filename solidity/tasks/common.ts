export const verificationRequired = (network: string) => {
  return !isLocalNetwork(network);
};

export const isLocalNetwork = (network: string) => {
  return network === "hardhat" || network === "localhost";
};

export const verifyContract = async (
  contracts: { address: string; constructorArguments: any[] }[]
) => {
  const hre = require("hardhat");
  for (const c of contracts) {
    await hre.run("verify:verify", {
      address: c.address,
      constructorArguments: c.constructorArguments,
    });
  }
};