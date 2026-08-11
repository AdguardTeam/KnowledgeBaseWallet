---
title: How to view transaction history
sidebar_position: 10
---

Open AdGuard Wallet and tap the *History* tab to see all your past transactions: sends, receives, swaps, and approvals. You can open any transaction for details or view it in a block explorer.

<!-- screenshot: History screen — transaction list with types (Send, Receive, Swap, Approve) -->

Your transactions are listed in chronological order, with the newest ones first. Pending transactions are updated automatically.

## Understanding the transaction list

Each transaction in the list shows the type and amount. Transactions are grouped by type:

* **Send** — crypto you sent to another address.
* **Receive** — crypto you received from another address.
* **Swap** — token swaps you made.
* **Approve** — token approval transactions.
* **Revoke** — revoked token approvals.
* **Self Transfer** — transfers between your own wallets.

New transaction types may be added with app updates.

## Viewing transaction details

Tap any transaction to see its full details. Depending on the transaction type, you may see:

<!-- screenshot: Transaction details screen — hash, status, network, amount, fee, date, sender/receiver, View in Explorer button -->

* **Transaction hash** — the unique identifier of the transaction on the blockchain.
* **Status** — whether the transaction is pending, confirmed, or failed.
* **Network** — which blockchain the transaction was made on.
* **Amount** — how much crypto was sent or received.
* **Network fee** — the fee paid to process the transaction.
* **Date and time** — when the transaction was made.
* **Sender and receiver addresses** — who sent and who received the funds.

## Opening a transaction in a block explorer

To see even more details about a transaction, tap *View in explorer*. This opens a block explorer website for the transaction.

Each blockchain has its own block explorer:

* **Ethereum and EVM networks** — [Etherscan](https://etherscan.io) or a network-specific explorer (such as [BscScan](https://bscscan.com) for BNB Chain or [Polygonscan](https://polygonscan.com) for Polygon).
* **Solana** — [Solscan](https://solscan.io).
* **Bitcoin** — [Mempool.space](https://mempool.space).
* **TRON** — [Tronscan](https://tronscan.org).

In the block explorer you can see the number of confirmations, the block the transaction was included in, and any additional details.

<!-- screenshot: Etherscan explorer page — transaction details with confirmations, block, and timestamp -->

## Verifying transactions

You can use the transaction history to check whether a transaction went through. Open the transaction, then tap *View in explorer* to see its final status on the blockchain. The explorer confirms whether the transaction was processed, how many confirmations it has, and when it happened.

If you need to share proof of a transaction with someone, you can send them the transaction hash or a link to the explorer page.

## Load limit

The app loads a limited number of recent transactions. If you need to see older transactions, a banner at the bottom of the list offers a link to the block explorer where all your transactions are available.

<!-- screenshot: History list with load limit banner — “View full history on explorer” at bottom -->

:::note

If a transaction does not appear in the list or fails to load its details, try refreshing the history or checking the block explorer directly.

:::

## Related articles

- [How to send crypto](/guides/send-crypto)
- [How to receive crypto](/guides/receive-crypto)
- [How to swap tokens](/guides/swap-tokens)
- [Token approvals](/general/token-approvals)
- [Transaction stuck pending](../solving-problems/solving-problems.md#transaction-stuck-pending)
- [Failed to send crypto or transaction failed](../solving-problems/solving-problems.md#failed-to-send-crypto-or-transaction-failed)
