import { createCoin, tradeCoin } from "@zoralabs/coins-sdk";
import { publicClient, walletClient } from "./utils/config";
import { parseEther } from "viem";

// sell coin params
const sellParams = {
  direction: "sell" as const,
  target: "0xB9221f2A7f392354bEBD74d6e145B92a60cbC480" as `0x${string}`, 
  args: {
    recipient: "0x1295BDc0C102EB105dC0198fdC193588fe66A1e4" as `0x${string}`, // Address to receive the payout
    orderSize: parseEther("0.01"), // Amount of coins to sell
    minAmountOut: parseEther("0.0001"), // Minimum ETH to receive
  }
};


/**
 * selling coin メソッド
 */
const main = async () => {
  try {
    // sell coin
    const result = await tradeCoin(sellParams, walletClient, publicClient);

    console.log("Transaction hash:", result.hash);
    console.log("Trade details:", result.trade);
  } catch (error) {
    console.error("Error creating coin:", error);
    throw error;
  }
};

main();