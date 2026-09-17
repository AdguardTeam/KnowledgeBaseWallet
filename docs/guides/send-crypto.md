---
title: How to send crypto
sidebar_position: 5
---

Sending crypto from AdGuard Wallet is straightforward. Before you send, check the recipient address, network, and your balance.

To send crypto:

1. Open AdGuard Wallet and go to the *Send* screen.
    ![Send *mobile](https://cdn.adtidy.org/content/kb/wallet/guides/send.png)
1. Select the asset you want to send.
    ![Select currency *mobile](https://cdn.adtidy.org/content/kb/wallet/guides/select_currency.png)
1. Enter the recipient’s address. You can type it or paste it.
1. Enter the amount. Tap *Max* to send your full balance (the network fee will be deducted).
    ![Enter details *mobile](https://cdn.adtidy.org/content/kb/wallet/guides/enter_details.png)
1. Check the details and review the network fee. The fee is charged separately from the amount you send.
    ![Check details *mobile](https://cdn.adtidy.org/content/kb/wallet/guides/check_your_details.png)
1. Confirm the transaction with your password or biometrics.
    ![Enter app password *mobile](https://cdn.adtidy.org/content/kb/wallet/guides/enter_app_password.png)

After the transaction is sent, you can track its status in the transaction history.
    ![Crypto sent *mobile](https://cdn.adtidy.org/content/kb/wallet/guides/crypto_sent.png)

:::tip

When sending your full balance with *Max*, the network fee is deducted automatically. The app will show the adjusted amount the recipient will receive.

:::

## Network fees

The network fee goes to the blockchain network, not to AdGuard Wallet. The fee varies based on network demand and transaction complexity. You’ll see the fee before confirming.
    ![Choose network fee *mobile](https://cdn.adtidy.org/content/kb/wallet/guides/choose_network_fee.png)

If you don’t have enough balance to cover the fee, the app will show a warning. Try lowering the amount or choose a different fee speed.

For more details, see [Understanding network fees](/general/network-fees).

## Network-specific notes

### Ethereum and EVM networks

Sending on Ethereum and EVM-compatible networks (such as BSC, Polygon, Arbitrum, Base) uses a gas fee model. The fee depends on network congestion and transaction complexity. You can choose between different fee speeds (slow, average, fast).

### Bitcoin

Bitcoin uses a UTXO (unspent transaction output) model. Fees are based on transaction size in bytes, not the amount being sent. AdGuard Wallet supports multiple Bitcoin address formats: Legacy, Nested SegWit, and Native SegWit.

### Solana

Solana requires a special account for each token type. The first time you send a token to a new address, a one-time setup fee applies. There is also a minimum amount you must send (rent exemption) — sending less will fail.

### TRX and TRC-20

Tron uses bandwidth and energy for transaction fees. If you have staked TRX, you get more bandwidth and energy that may cover the fee. Otherwise, a small amount of TRX is used to pay the network fee.

### Memo (tag)

Some networks require a **memo** or tag to identify your transaction. If the recipient asks for a memo, you can add it when sending.

![Memo *mobile](https://cdn.adtidy.org/content/kb/wallet/guides/memo.png)

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
