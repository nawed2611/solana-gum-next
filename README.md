# Solana Gum Next

- create a transaction of SOL to other wallet
- create a transaction of a SPL token (like $BONK) to other wallet
- submit the transaction to the blockchain
- confirm if the transaction was successful
- find Twitter handle associated with wallet address
- update with gum sdk

## Getting Started

1. Get an API key from [Helius](https://helius.xyz/). We'll need this to be able to fetch wallet details.
2. Run `npx create-next-app -e https://github.com/aeminium-labs/nextjs-solana-starter-kit` to get this template into your local environment (can also click on the "Use this template" button or just fork this repository)
3. Add a `.env.local` file with your Helius API key

```
HELIUS_API_KEY=<your key>
```

4. Run `npm run dev` to start dev server
5. Make changes and have fun!

## Deploying

1. Run `npm run build` locally to make sure everything is compiling correctly
2. Link your favourite server provider to your repository (using Vercel for the demo)
3. Any push to `main` branch should automatically deploy a new version