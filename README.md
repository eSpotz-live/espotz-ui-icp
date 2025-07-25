# 📦 espotz-ui-icp

The esports industry, valued at $263 billion and supported by over 3.3 billion gamers worldwide, faces significant challenges, with the majority of players underserved by delayed payouts and opaque systems.

**Currently, only 1% of Tier 1 players capture the majority of rewards from top brands. Espotz is dedicated to serving the next 99% of the market, focusing on over 600 million players globally who will shape the future of competitive gaming and global entertainment.**

We are developing an infrastructure layer that empowers players, community managers, operators, and event organizers to host competitions, validate results using AI, distribute prize pools, and monetize through betting and staking within a seamless and transparent ecosystem. By leveraging Internet Capital Markets (ICM) and prediction markets on Web3, we create unique engagement experiences between esports influencers and their fans. 

**Our mission is to unlock the full potential of the esports market, ensuring that all players have the opportunity to thrive.**


---


## 🧰 Prerequisites


| Tool        | Version                      | Description                                |
| ----------- | ---------------------------- | ------------------------------------------ |
| **Node.js** | >= 16.x                      | Required for npm and scripting support     |
| **DFX CLI** | >= 0.14.1 (tested on 0.28.0) | DFINITY SDK to deploy and interact with IC |

---

## 📁 Project Structure

```
espotz-ui-icp/
├── .dfx/                     # DFX local environment files (auto-generated)
├── frontend/                 # Static frontend assets
│   ├── index.html
│   ├── assets/
│   └── ...images and icons
├── dfx.json                  # DFX configuration
├── package.json              # Minimal npm script setup
├── tsconfig.json             # TypeScript config (optional)
└── README.md                 # You're reading this!
```
---

## 🚀 Local Development Steps

1. Start the local replica
```
 dfx start --background
```
2. Deploy the project locally
```
 dfx deploy
```
(*Note: We shall then get a url which looks similar to "http://127.0.0.1:4943/?canisterId=<your-canister-id>"*)

3. Navigate to link we found in the previous step


---

## 🌐 Deploying to the Internet Computer

1. Set up identity (one-time)
```
 dfx identity new <your-identity-name>
```

2. Get your principal and account ID
```
 dfx identity get-principal 
 dfx ledger account-id
```
(*NOTE: Use the account ID to send ≥ 0.1 ICP from your wallet or NNS.*)

3. Convert ICP to Cycles
```
 dfx cycles convert --amount 0.1 --network ic
```
4. Deploy to IC Mainnet
```
 dfx deploy --network ic
```

