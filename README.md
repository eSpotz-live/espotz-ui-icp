# 📦 espotz-ui-icp

This project hosts a static frontend built for the Internet Computer (IC). It uses no build framework (e.g., React or Vite) and serves pure HTML/CSS/JS assets via the DFINITY dfx canister.

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



🔗 Useful Commands
Command	Purpose
dfx identity list	List all identities
dfx identity use <name>	Switch identity
dfx canister status frontend	Check frontend canister status
dfx canister call frontend get	Get frontend canister URL (local)