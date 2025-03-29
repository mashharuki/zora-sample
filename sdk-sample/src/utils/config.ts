
import { http, createPublicClient, createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";
import * as dotenv from "dotenv";

dotenv.config();

const {
  PRIVATE_KEY
} = process.env;
 
export const chain = baseSepolia;

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
