# sdk-sample

To install dependencies:

```bash
bun install
```

To run:

## コインを作成する。

```bash
bun run index.ts
```

```bash
Transaction hash: 0x2f63ddcd7da1d1953a349d4770cf301fda2bcb79717d81876a06e3eaf41d7998
Coin address: 0xB9221f2A7f392354bEBD74d6e145B92a60cbC480
Deployment details: {
  caller: "0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072",
  payoutRecipient: "0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072",
  platformReferrer: "0x5F14C23983c9e0840Dc60dA880349622f0785420",
  currency: "0x4200000000000000000000000000000000000006",
  uri: "ipfs://bafybeigoxzqzbnxsn35vq7lls3ljxdcwjafxvbvkivprsodzrptpiguysy",
  name: "My Awesome Coin",
  symbol: "MAC",
  coin: "0xB9221f2A7f392354bEBD74d6e145B92a60cbC480",
  pool: "0xB649aFC4a1d0D767bB8Bee0E8FE7Aa7618dc9285",
  version: "0.5.0",
}
```

サンプルのメタデータ

https://gateway.pinata.cloud/ipfs/bafybeigoxzqzbnxsn35vq7lls3ljxdcwjafxvbvkivprsodzrptpiguysy

画像

https://gateway.pinata.cloud/ipfs/bafybeiggupoa4t2krjf3cqukykikeul6enqnfxqg4lmasn374zmeyjv4by

アニメーション

https://gateway.pinata.cloud/ipfs/bafybeiatmngyt4wwu6mla27523qk33klxopycomegris3n25y6rcqs27c4

コンテンツ

https://gateway.pinata.cloud/ipfs/bafybeiatmngyt4wwu6mla27523qk33klxopycomegris3n25y6rcqs27c4

## コインを買う

```bash
bun buyCoin
```

以下のようになればOK!

```bash
Transaction hash: v
Trade details: {
  buyer: "0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072",
  recipient: "0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072",
  tradeReferrer: "0x0000000000000000000000000000000000000000",
  coinsPurchased: 4365806741071640813611091n,
  currency: "0x4200000000000000000000000000000000000006",
  amountFee: 100000000000000n,
  amountSold: 9900000000000000n,
}
```

## コインを売却する

```bash
bun sellCoin
```

以下のようになればOK

```bash

```

## コインのメタデータをupdateする

```bash
bun run update
```

以下のようになればOK!

```bash
Transaction hash: 0xadfa797313e7847380ed648fe2eb3eef5949e3eefd75b65fca9e0fae09c57c05
URI updated event: {
  eventName: "ContractURIUpdated",
  args: undefined,
  address: "0xb9221f2a7f392354bebd74d6e145b92a60cbc480",
  blockHash: "0xee4e5518787b2544e3df67d68b4adcf832a5e06f3bbad37e9d359708e523a9e2",
  blockNumber: 23745552n,
  data: "0x",
  logIndex: 276,
  removed: false,
  topics: [ "0xa5d4097edda6d87cb9329af83fb3712ef77eeb13738ffe43cc35a4ce305ad962" ],
  transactionHash: "0xadfa797313e7847380ed648fe2eb3eef5949e3eefd75b65fca9e0fae09c57c05",
  transactionIndex: 33,
}
```