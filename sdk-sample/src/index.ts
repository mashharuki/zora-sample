import { createCoin } from "@zoralabs/coins-sdk";
import { publicClient, walletClient } from "./utils/config";
import type { PublicClient } from "viem";

// Token MetaData
const createCoinParams = {
  name: "MyCoin",
  symbol: "MYC",
  uri: "https://example.com/metadata",
  payoutRecipient: "0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072" as `0x${string}`,
};

/**
 * createCoin メソッド
 */
const main = async () => {
  // createCoin 
  const result = await createCoin(createCoinParams, walletClient, publicClient as PublicClient);
  console.log("result: ", result);
};

main();