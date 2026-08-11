---
title: Token approvals
sidebar_position: 2
---

A **token approval** (also called an allowance) is a permission you give to an address to spend a specific amount of your tokens on your behalf. It’s a standard part of the ERC-20 standard and is required whenever you interact with a decentralized exchange (DEX) or other dApp that needs to move your tokens — for example, when swapping one token for another.

Think of it like a pre-authorized payment: you tell the contract “you can take up to X tokens from my wallet if needed.” The contract can’t take more than you allowed, and you can change or revoke this permission at any time.

<!-- screenshot: Approve transaction screen — showing token, spender address, and allowance amount -->

## When you need to approve

The most common scenario is **swapping tokens**. When you swap Token A for Token B on a DEX, the exchange needs to take Token A from your wallet and send it to the swap contract. The approve transaction gives it that permission.

You will encounter an approve transaction:

- The **first time** you swap a token you haven’t used before with a particular DEX
- When you **change the amount** — if your new swap requires a higher allowance than before
- When you **interact with a new dApp** that needs access to your tokens

:::note

Approve transactions have **zero value** — they don’t send any tokens. They only set a permission. This is why you might see a transaction that looks like it’s sending 0 ETH or 0 tokens.

:::

AdGuard Wallet supports approve and revoke across EVM-compatible networks (Ethereum, BSC, Polygon, Base, Arbitrum) and Tron.

## How to approve tokens in AdGuard Wallet

When you start a swap or other operation that requires approval, AdGuard Wallet will show you an approve transaction before the actual swap. You can:

1. **Review the details** — check which token is being approved, the spender (the contract), and the allowance amount.
2. **Set the allowance** — you can approve only the amount you need for this transaction, or a larger amount if you plan to swap again.
3. **Confirm with biometrics or password** — the approve transaction is signed and sent to the blockchain.

<!-- screenshot: Approve confirmation — biometric prompt for signing approve tx -->

:::tip

For better security, approve only the amount you need for the current transaction. You can always approve more later if needed.

:::

## How to revoke an approval

If you want to cancel a permission you gave earlier — for example, if you no longer use a particular DEX or you approved too many tokens — you can revoke it.

AdGuard Wallet checks the current allowance for each approve transaction. If the allowance is still active (greater than zero), you will see a _Revoke approval_ button on the transaction details screen. Tapping it sends a new approve transaction with an allowance of zero, effectively revoking the permission.

To revoke an approval:

1. Open the approve transaction in your transaction history.
2. Tap _Revoke approval_.
3. Confirm the transaction.

<!-- screenshot: Revoke approval button on transaction details screen -->

If the allowance has already been used or revoked, the button won’t appear — only _View in Explorer_ will be shown.

## Security risks and best practices

Token approvals are safe when used carefully, but there are important risks to understand.

### Unlimited approvals

Some DEXs ask for an “unlimited” approval (a very large number) so you don’t have to approve every time you swap. While convenient, this means that if the DEX contract is compromised, the attacker could take all your approved tokens.

**Best practice:** approve only the amount you need for the current transaction.

### Changing allowances

Some tokens, like **USDT (Tether)**, require you to set the allowance to zero before setting a new value. If you don’t, the transaction will fail.

### Race conditions

If you change a non-zero allowance directly to another non-zero value, there’s a brief moment where both the old and new allowances could be used (a race condition). A malicious contract could exploit this. The safest pattern is:

1. First, set allowance to zero (revoke).
   d1. Then, set the new allowance value.

:::warning

Giving an unlimited approval to a malicious or compromised contract can result in losing all your tokens. Only approve contracts you trust, and consider revoking unused approvals regularly.

:::

## Related articles

- [What is a seed phrase](/general/seed-phrase)
- [How to swap tokens](/guides/swap-tokens)
- [What is AdGuard Wallet](/)
- [How to keep your wallet secure](/guides/wallet-security)
