import { Wallet as TWallet } from "../api/wallet/Wallet";

export const WALLET_TITLE_FIELD = "name";

export const WalletTitle = (record: TWallet): string => {
  return record.name?.toString() || String(record.id);
};
