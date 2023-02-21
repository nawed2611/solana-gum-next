/* src/hooks/useGumSDK.ts */
import { AnchorWallet, useAnchorWallet } from "@solana/wallet-adapter-react";
import { useGum } from "@gumhq/react-sdk";
import { Cluster, ConfirmOptions, Connection } from "@solana/web3.js";

export const useGumSDK = (
  connection: Connection,
  opts: ConfirmOptions,
  cluster: Cluster
) => {
  const anchorWallet = useAnchorWallet() as AnchorWallet;

  const sdk = useGum(anchorWallet, connection, opts, cluster);

  return sdk;
};
