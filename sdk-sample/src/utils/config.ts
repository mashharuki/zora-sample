
import { http, createPublicClient, createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { zoraSepolia } from "viem/chains";
import * as dotenv from "dotenv";

dotenv.config();

const {
  PRIVATE_KEY
} = process.env;
 
export const chain = zoraSepolia;

// publicClient 
export const publicClient = createPublicClient({
  chain: chain,
  transport: http(),
});

// walletClient
export const walletClient = createWalletClient({
  chain: chain,
  transport: http(),
  account: privateKeyToAccount(PRIVATE_KEY as `0x${string}`),
});