import { simulateBuy, tradeCoin } from "@zoralabs/coins-sdk";
import { publicClient, walletClient } from "./utils/config";
import { parseEther } from "viem";

// buy coion params
const buyParams = {
  direction: "buy" as const,
  target: "0xB9221f2A7f392354bEBD74d6e145B92a60cbC480" as `0x${string}`,
  args: {
    recipient: "0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072" as `0x${string}`,
    orderSize: parseEther("0.01"), // Amount of ETH to spend
    minAmountOut: 0n, // Minimum amount of coins to receive (0 = no minimum)
  }
};

/**
 * createCoin メソッド
 */
const main = async () => {
  try {
    // simulate buy coin
    const simulation = await simulateBuy({
      target: "0xB9221f2A7f392354bEBD74d6e145B92a60cbC480" as `0x${string}`,
      requestedOrderSize: parseEther("0.01"),
      publicClient,
    });
    
    console.log("Order size", simulation.orderSize);
    console.log("Amount out", simulation.amountOut);

    // trade coin
    const result = await tradeCoin(buyParams, walletClient, publicClient);
  
    console.log("Transaction hash:", result.hash);
    console.log("Trade details:", result.trade);
  } catch (error) {
    console.error("Error creating coin:", error);
    throw error;
  }
};

main();