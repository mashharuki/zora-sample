import { getCoin } from "@zoralabs/coins-sdk";
 
/**
 * main function
 * @returns 
 */
async function main() {
  // fetch coin details
  const response = await getCoin({
    address: "0xB9221f2A7f392354bEBD74d6e145B92a60cbC480",
    chain: 84532, 
  });
  
  const coin = response.data?.zora20Token;
  
  if (coin) {
    console.log("Coin Details:");
    console.log("- Name:", coin.name);
    console.log("- Symbol:", coin.symbol);
    console.log("- Description:", coin.description);
    console.log("- Total Supply:", coin.totalSupply);
    console.log("- Market Cap:", coin.marketCap);
    console.log("- 24h Volume:", coin.volume24h);
    console.log("- Creator:", coin.creatorAddress);
    console.log("- Created At:", coin.createdAt);
    console.log("- Unique Holders:", coin.uniqueHolders);
    
    // Access media if available
    if (coin.media?.previewImage) {
      console.log("- Preview Image:", coin.media.previewImage);
    }
  }
  
  return response;
}

main();