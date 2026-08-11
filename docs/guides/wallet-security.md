---
title: How to keep your wallet secure
sidebar_position: 11
---

AdGuard Wallet gives you several security features to keep your funds safe. This article covers how to use them and what you can do to protect yourself.

## Password protection

When you create a wallet, you set an app password. This password protects your seed phrase on your device and is required — together with your password or biometrics — to confirm every transaction.

<!-- screenshot: Create password screen — password entry with confirmation fields -->

If you forget your password, AdGuard Wallet cannot recover it. The app does not store your password. You can reset the app, but this removes all wallets. After resetting, you can restore your wallets using your seed phrase or cloud backup.

<!-- screenshot: Forgot password dialog — explaining reset process -->

The app locks itself when not in use. To unlock it, enter your app password.

:::warning

If you forget your password, AdGuard Wallet cannot recover it — you will need to reset the app and restore your wallets.

:::

## Biometric authentication

For faster and more secure access, you can enable biometric authentication:

- **macOS** — Touch ID
- **Android** — Fingerprint
- **iOS** — Face ID or Touch ID

Biometrics can be used to unlock the app and confirm transactions.

<!-- screenshot: Enable biometrics dialog — prompt with face/fingerprint icon -->

## Seed phrase security

Your seed phrase is the master key to your wallet — anyone who has it can access your funds, so keeping it safe is essential.

Here’s how to protect it:

- **Write it down on paper** and store it in a safe place, such as a fireproof safe or a safety deposit box. Paper is not vulnerable to hackers.
- **Store a backup in iCloud or Google Drive** with a strong password (more on that below).
- **Don’t take screenshots of your seed phrase or password** — if a malicious app gains access to your photos, it could find them.
- **Never share your seed phrase with anyone** — AdGuard Wallet support will never ask for it. If someone asks, even if they claim to be support, they are trying to steal your funds.

<!-- screenshot: Seed phrase display — with warning and backup options -->

## Backing up your wallet

You can back up your seed phrase to iCloud or Google Drive. Each backup is protected by an additional password you set.

For extra security, use both methods: write it down on paper and store a cloud backup.

:::note

If you lose the password for your cloud backup, you will not be able to restore your wallet from that backup.

:::

## Avoiding scams

Scammers target cryptocurrency users in many ways. Here are the most important precautions:

- **Double-check the recipient address** before sending crypto. Scammers may try to trick you into sending to the wrong address.
- **Only get AdGuard Wallet from your platform’s app store.**

<!-- screenshot: Scam warning — “Never enter an unfamiliar seed phrase” alert -->

## What to do if your wallet is compromised

How you respond depends on what was compromised.

### If your seed phrase is compromised

Anyone who has your seed phrase has full access to every account in that wallet, so you need to act fast:

1. Create a new wallet in AdGuard Wallet — it generates a fresh seed phrase. Write it down and store it safely.
1. Move your funds from the compromised wallet to the new one. Keep in mind that whoever has your seed phrase may try to move them at the same time, so every minute counts.
1. Stop using the compromised wallet and its seed phrase entirely.

### If a third-party contract or app exploited your approvals

If you approved a token for a swap and later suspect that contract is malicious or compromised, simply moving your tokens out is not enough — the approval stays active and lets the contract spend your tokens again. You have to explicitly revoke it:

1. Open [Token approvals](/general/token-approvals) in AdGuard Wallet and revoke the allowances you no longer need.
1. Consider moving your funds to a new wallet with a fresh seed phrase.

### If your device is compromised

If your device is lost, infected with malware, or otherwise compromised, your seed phrase remains encrypted on the device as long as nobody has obtained it. To be safe:

1. On a **clean** device, import your wallet using your seed phrase or a cloud backup.
1. From there, move your funds to a new wallet with a fresh seed phrase.

:::warning

AdGuard Wallet cannot reverse transactions or recover funds that have been stolen. The blockchain is irreversible by design.

:::

## Related articles

- [What is a seed phrase](/general/seed-phrase)
- [Token approvals](/general/token-approvals)
- [Your privacy in AdGuard Wallet](/general/privacy)
- [How to import an existing wallet](/guides/import-wallet)
