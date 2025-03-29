import { createCoin, updateCoinURI } from "@zoralabs/coins-sdk";
import { publicClient, walletClient } from "./utils/config";

// Define update parameters
const updateParams = {
  coin: "0xB9221f2A7f392354bEBD74d6e145B92a60cbC480" as `0x${string}`, // Replace with the actual coin contract address
  newURI: "ipfs://bafkreihz5knnvvsvmaxlpw3kout23te6yboquyvvs72wzfulgrkwj7r7dm",
};

/**
 * createCoin メソッド
 */
const main = async () => {
  try {
    // updateCoinURI
    const result = await updateCoinURI(updateParams, walletClient, publicClient);
    console.log("Transaction hash:", result.hash);
    console.log("URI updated event:", result.uriUpdated);
  } catch (error) {
    console.error("Error creating coin:", error);
    throw error;
  }
};

main();