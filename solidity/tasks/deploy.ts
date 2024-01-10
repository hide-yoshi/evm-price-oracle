import { task } from "hardhat/config";
import {
  MockOracle__factory,
} from "../typechain";
import { Provider, Signer,  } from "ethers";
import {  isLocalNetwork, verifyContract } from "./common";

task("deploy", "Deploy the contracts", async (_, { ethers }) => {
  // Deployment
  console.log("Deploying contracts...");
  const networkName = (await (ethers.provider as Provider).getNetwork()).name;
  const deployer: Signer = (await ethers.getSigners())[0];
  const mockOracle = await new MockOracle__factory().connect(deployer).deploy();

  // Verification
  !isLocalNetwork(networkName) &&
    (await verifyContract([
      { address: await mockOracle.getAddress(), constructorArguments: [] }      
    ]));
});
