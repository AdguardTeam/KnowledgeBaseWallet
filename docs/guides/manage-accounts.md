---
title: How to manage accounts
sidebar_position: 12
---

In AdGuard Wallet, a **wallet** is created from a seed phrase, and each wallet can contain multiple **accounts**. Accounts let you organize your crypto within the same wallet — for example, you can use one account for everyday transactions and another for savings, all under the same seed phrase.

When you create a new wallet, your first account (Account 0) is created automatically. You can add more accounts at any time.

:::note

Wallets and accounts are different. One seed phrase gives you access to all accounts within that wallet. To use a completely separate set of accounts, create or import a different wallet.

:::

## Account discovery on import

When you import a wallet using a seed phrase, AdGuard Wallet scans the blockchain for all accounts associated with that seed phrase. If multiple accounts are found, you can choose which ones to add.

For detailed steps, see [How to import an existing wallet](/guides/import-wallet).

<!-- screenshot: Account discovery screen — list of found accounts with checkboxes to select -->

## Switching between accounts

If a wallet has more than one account, you can switch between them:

1. Look for the account name in the header bar.
1. Tap the account name or the switcher icon next to it.
1. Select the account you want to use.

If you only have one account, the switcher is not shown.

<!-- screenshot: Account switcher — account name with chevron in header and dropdown list -->

## Adding a new account

1. Go to the *Wallets* screen.
1. Select the wallet where you want to add an account.
1. Tap *Add account*. A new account will be created and added to your wallet.
<!-- screenshot: Add account -->

You can give the new account a custom name right after creating it.

## Renaming an account

1. Go to the wallet that contains the account.
1. Open the account settings.
1. Tap the account name and enter a new name.

Account names are only visible to you.

<!-- screenshot: Rename account screen — text input with current name -->

## Deleting an account

1. Go to the wallet that contains the account.
1. Open the account settings and tap *Delete account*.
1. Confirm the deletion.

:::warning

The first account (Account 0) cannot be deleted. Deleting an account is permanent — make sure you have a backup of your seed phrase before deleting any account.

:::

## Related articles

- [How to manage multiple wallets](/guides/manage-wallets)
- [How to import an existing wallet](/guides/import-wallet)
- [What is a seed phrase](/general/seed-phrase)
- [How to keep your wallet secure](/guides/wallet-security)
