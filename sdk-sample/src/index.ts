import { createCoin } from "@zoralabs/coins-sdk";
import { publicClient, walletClient } from "./utils/config";

// Token MetaData
const coinParams = {
  name: "My Awesome Coin",
  symbol: "MAC",
  uri: "ipfs://bafybeigoxzqzbnxsn35vq7lls3ljxdcwjafxvbvkivprsodzrptpiguysy",
  payoutRecipient: "0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072" as `0x${string}`, // Optional: Address to receive payouts
  initialPurchaseWei: 0n, // Optional: Initial amount to purchase in Wei
};


/**
 * createCoin メソッド
 */
const main = async () => {
  try {
    // createCoin 
    const result = await createCoin(coinParams, walletClient, publicClient);
    console.log("Transaction hash:", result.hash);
    console.log("Coin address:", result.address);
    console.log("Deployment details:", result.deployment);
  } catch (error) {
    console.error("Error creating coin:", error);
    throw error;
  }
};

main();