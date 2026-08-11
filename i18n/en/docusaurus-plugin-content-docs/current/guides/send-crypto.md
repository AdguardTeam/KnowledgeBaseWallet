---
title: How to send crypto
sidebar_position: 5
---

Sending crypto from AdGuard Wallet is straightforward. Before you send, check the recipient address, network, and your balance.

To send crypto:

1. Open AdGuard Wallet and go to the _Send_ screen.

<!-- screenshot: Main screen with Send screen highlighted -->

2. Select the asset you want to send.

<!-- screenshot: Asset choice -->

3. Enter the recipient’s address. You can type it or paste it.
4. Enter the amount. Tap _Max_ to send your full balance (the network fee will be deducted).

<!-- screenshot: Entering recipient and amount -->

5. Review the network fee. The fee is charged separately from the amount you send.
6. Check the details and confirm the transaction with your password or biometrics.

<!-- screenshot: Transaction confirmation — biometric prompt for signing send tx -->

After the transaction is sent, you can track its status in the transaction history.

<!-- screenshot: Send success — transaction sent confirmation with View in Explorer link -->

:::tip

When sending your full balance with _Max_, the network fee is deducted automatically. The app will show the adjusted amount the recipient will receive.

:::

## Network fees

The network fee goes to the blockchain network, not to AdGuard Wallet. The fee varies based on network demand and transaction complexity. You’ll see the fee before confirming.

If you don’t have enough balance to cover the fee, the app will show a warning. Try lowering the amount or choose a different fee speed.

For more details, see [Understanding network fees](/general/network-fees).

## Network-specific notes

### Ethereum and EVM networks

Sending on Ethereum and EVM-compatible networks (such as BSC, Polygon, Arbitrum, Base) uses a gas fee model. The fee depends on network congestion and transaction complexity. You can choose between different fee speeds (slow, average, fast).

### Bitcoin

Bitcoin uses a UTXO (unspent transaction output) model. Fees are based on transaction size in bytes, not the amount being sent. AdGuard Wallet supports multiple Bitcoin address formats: Legacy, Nested SegWit, and Native SegWit.

<!-- screenshot: Bitcoin fee selector — sat/vB slider with slow/avg/fast options -->

### Solana

Solana requires a special account for each token type. The first time you send a token to a new address, a one-time setup fee applies. There is also a minimum amount you must send (rent exemption) — sending less will fail.

### TRX and TRC-20

Tron uses bandwidth and energy for transaction fees. If you have staked TRX, you get more bandwidth and energy that may cover the fee. Otherwise, a small amount of TRX is used to pay the network fee.

### Memo (tag)

Some networks require a **memo** or tag to identify your transaction. If the recipient asks for a memo, you can add it when sending.

<!-- screenshot: Memo input field on send screen — with description tooltip -->

:::warning

If a memo is required and you don’t include it, the recipient may not receive the funds.

:::

## What if something goes wrong

- **Invalid address** — check the address and try again
- **Not enough balance** — lower the amount or add more funds
- **Address is your own** — you can’t send to yourself (except on Bitcoin, where self-sends are possible)
- **Transaction failed** — something went wrong on the network level. Try again or contact support

## Related articles

- [Understanding network fees](/general/network-fees)
- [How to receive crypto](/guides/receive-crypto)
- [Failed to send crypto or transaction failed](../solving-problems/solving-problems.md#failed-to-send-crypto-or-transaction-failed)
- [Transaction stuck pending](../solving-problems/solving-problems.md#transaction-stuck-pending)
