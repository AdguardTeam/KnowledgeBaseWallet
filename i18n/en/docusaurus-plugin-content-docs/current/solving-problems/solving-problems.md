---
title: Solving common problems
sidebar_position: 0
---

If you’ve run into an issue, check the list below. Each section starts with the error message you might see in the app.

## This doesn’t look like a wallet address

The address you entered doesn’t match the expected format. Double-check that you copied it correctly — addresses are case-sensitive on some networks.

If you’re trying to send to your own wallet, you’ll see a different warning: _The receiving address can’t be the same as the sending address._

## This address is on a different network

The address you entered belongs to another blockchain. Before sending, always confirm with the recipient which network they’re using.

:::warning

If you send funds to the wrong network, the assets may be lost permanently. There is no guarantee they can be recovered.

:::

## Not enough balance

Your balance is too low to cover both the amount you’re sending and the network fee.

To fix it:

- **Lower the amount** — sending less leaves more room for the fee.
- **Add more funds** — transfer crypto from another wallet to cover the fee.
- **Buy native tokens** — some networks require the native currency (ETH for Ethereum, SOL for Solana, TRX for Tron) to pay fees. You can buy it in the app.

If the fee itself seems too high, try selecting a slower speed.

## Failed to send crypto or transaction failed

A transaction can fail for several reasons:

- **Network congestion** — too many transactions are waiting to be processed. Try again later.
- **Fee too low** — if the fee is below the network’s minimum, the transaction may be rejected. Increase the fee speed.
- **Smart contract issue** — some operations, like swaps, involve contracts that can fail.
- **Temporary error** — a network or third-party service may be temporarily unavailable.

If a transaction fails, try again. Your balance is not deducted for failed transactions (though the network fee may still be charged).

## Transaction stuck pending

If your transaction stays pending for a long time, the fee may be too low or the network is congested.

What you can do depends on the network:

- **Ethereum and EVM networks** — you can sometimes speed up a pending transaction by resending it with a higher fee. If that doesn’t work, you may need to wait for it to expire.
- **Bitcoin and Solana** — pending transactions usually resolve on their own once the congestion clears. There is no built-in way to cancel them.

## Solana: Send {value} or more to this address (rent exemption)

Solana requires a minimum amount in each token account. If you send less than that minimum, the transaction will fail. The app shows the minimum amount you need to send.

## Solana: extra fee for new token accounts

Solana needs a separate account for each type of token. The first time you send a token to a new address, a one-time setup fee is charged. The fee is deducted from the amount you’re sending, and you’ll see it before confirming.

## Memo (tag) missing

Some services, especially exchanges, require a **memo** or tag to identify your transaction. If the recipient asks for one and you don’t include it, they may not receive the funds.

Always check with the recipient whether a memo is needed before sending.

<!-- screenshot: Memo input field on send screen -->

## Swap failed or returned less than expected

If a swap fails or you receive less than expected, one of these may be the reason:

- **Slippage exceeded** — the price moved while the swap was being processed. Try again, or use a higher slippage tolerance if available.
- **Insufficient liquidity** — the provider doesn’t have enough funds to complete the swap. Try again later or choose a different provider.
- **Price impact too high** — for large swaps, the trade itself can move the market price. Try swapping a smaller amount.
- **Approval not confirmed** — some tokens require an approval transaction before swapping. Make sure you’ve approved the token first.

If a swap fails, your funds are safe — they were never sent. Try again with different settings.

## Balance not updating

If your balance seems wrong or hasn’t changed after a transaction:

1. **Pull to refresh** — drag down on the main screen to reload balances.
2. **Wait** — some networks take time to confirm transactions.
3. **Restart the app** — this forces a fresh connection to the blockchain.

If the balance is still wrong, check your address on a block explorer to see the actual balance.

## Network unavailable or Failed to load data

If you see a connection error:

1. Check your internet connection.
2. If you’re using a VPN or firewall, try disabling it — some networks block blockchain RPC connections.
3. Wait a few minutes and try again — the issue may be temporary.
4. Restart the app.

If the problem persists, the blockchain node may be down. You can check your transactions on a block explorer in the meantime.

## App crashes or freezes

1. **Restart the app** — close it completely and open it again.
2. **Update the app** — make sure you’re using the latest version.
3. **Reinstall the app** — your wallets will not be lost if you have your seed phrase or cloud backup. Restore them after reinstalling.

If the problem continues, [contact support](mailto:support@adguard-wallet.com) with your device details and what you were doing when it happened.

## Tokens missing after import or restore

If some tokens are not showing after importing or restoring a wallet:

1. **Wait** — the app scans the blockchain for your tokens. This can take a moment.
2. **Refresh the balance** — pull down on the main screen to reload your token list.
3. **Check for multiple accounts** — when importing a seed phrase, the app can detect multiple accounts. Make sure you’ve added all the ones you need.

If a token still doesn’t appear, check your address on a block explorer to confirm it’s there. The token may not yet be indexed in the app.

For more details, see [How to manage multiple wallets](/guides/manage-wallets).
