<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p align="center">
<img width="200" height="200" alt="Amando Logo" src="https://github.com/user-attachments/assets/ac77adaf-3dc2-4d03-bfc8-a9713ad01871" />
</p>

<p align="center">
  <h1 align="center">Amando</h1>
</p>

<p align="center">
  <em><code>A decentralized Web3 Auto Market Maker Protocol for seamless token trading, liquidity provision, and yield farming.</code></em>
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/batukaraman/amando?logoColor=white&color=0080ff" alt="license">
  <img src="https://img.shields.io/github/last-commit/batukaraman/amando?logoColor=white&color=0080ff" alt="last-commit">
  <img src="https://img.shields.io/github/languages/top/batukaraman/amando?style=default&color=0080ff" alt="repo-top-language">
  <img src="https://img.shields.io/github/languages/count/batukaraman/amando?style=default&color=0080ff" alt="repo-language-count">
</p>

<p align="center">
  <a href="https://amando.vercel.app/"><img src="https://img.shields.io/badge/Demo-Vercel-0080ff?style=flat&logo=vercel" alt="Demo"></a>
  <a href="https://www.figma.com/community/file/1248337124644515489/amando-web3-auto-market-maker-protocol"><img src="https://img.shields.io/badge/Figma-Community-0080ff?style=flat&logo=figma" alt="Figma Community"></a>
</p>

<p align="center">
<img width="950" alt="Amando" src="https://github.com/user-attachments/assets/3513caa6-8e4b-48b3-a357-c0527811af2d" />
</p>

---

## Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Live Trading Deals](#-live-trading-deals)
- [Project Structure](#-project-structure)
  - [Project Index](#-project-index)
- [Getting Started](#-getting-started)
  - [Prerequisites](#-prerequisites)
  - [Installation](#-installation)
  - [Usage](#-usage)
  - [Testing](#-testing)
- [Project Roadmap](#-project-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## Overview

AMANDO is an open-source frontend application for a community-driven Web3 Auto Market Maker (AMM) Protocol. Built with Next.js and TypeScript, it provides a user-friendly interface for interacting with decentralized finance (DeFi) features such as wallet management, token swaps, liquidity provision, yield farming, and initial public offerings (IPOs) on blockchain networks like Ethereum and Binance Smart Chain.

Inspired by the Figma design titled "Amando Web3 Auto Market Maker Protocol (Community)" ([view on Figma](https://www.figma.com/community/file/1248337124644515489/amando-web3-auto-market-maker-protocol)), the app follows a structured user flow: starting from the Home page, users can connect or create wallets, import existing ones, view wallet details, buy tokens, perform swaps, add liquidity to pools, engage in farming, explore "Jungles" (a gamified yield opportunity), and participate in IPOs. The project emphasizes security, usability, and extensibility, integrating real blockchain interactions via libraries like Ethers.js, Web3.js, and BIP39 for mnemonic-based wallet generation.

This repository serves as a learning and development project to hone frontend skills in React ecosystems while implementing production-ready crypto wallet functionalities. Currently, it covers the core wallet onboarding flows with full backend simulation for cryptographic operations. Try the live demo at [amando.vercel.app](https://amando.vercel.app/).

---

## Features

- **Wallet Management**: Securely create new wallets using BIP39 mnemonics, import via private keys, seed phrases, or addresses. Supports hierarchical deterministic (HD) key derivation for multi-account setups.
- **Multi-Wallet Integration**: Connect to popular wallets like MetaMask, WalletConnect, Coinbase Wallet, Trust Wallet, and Binance Chain Wallet using Web3-React connectors.
- **Real-Time Blockchain Interactions**: Generate, sign, and broadcast transactions with Ethers.js. Fetch balances, derive addresses, and handle encryption/decryption with Crypto-JS and BcryptJS.
- **Responsive UI/UX**: Dark/light theme toggle with Next-Themes. Custom icons for coins (e.g., ETH, BTC, BNB) and social/wallet integrations. Components like modals, drawers, cards, and forms for intuitive navigation.
- **Form Validation & State Management**: Powered by React Hook Form with Zod resolvers and Redux Toolkit for global state (e.g., wallet slices for creation and toggles).
- **DeFi Primitives**: Placeholder setups for swaps (via Uniswap/SushiSwap icons), liquidity pools, staking/farming cards, and token buying interfaces.
- **Security Focus**: Client-side encryption for sensitive data (mnemonics, private keys). Copy-to-clipboard hooks with verification icons.
- **Performance Optimizations**: Turbopack for dev server, Tailwind CSS for styling, and ESLint/TypeScript for code quality.

The app is designed to be extensible, allowing easy integration with real AMM contracts (e.g., for automated market making) in future iterations.

---

## Live Trading Deals

AMANDO offers exciting opportunities for staking and yield farming with high APRs. Below are some of the current deals:

- **Balance**: 0.00 AM
- **Stake AM**:
  - Earn AM with **396.44% APR** (x2 opportunities).
  - Earn WBNB with **122.63% APR** (x3 opportunities).
- **Top Farms**:
  - AM-USDC Liquidity: **$3,611.823** with **425.85% APR** (x4 opportunities).

These deals are designed to maximize returns for users participating in the AMANDO ecosystem. Future updates will integrate real-time data feeds for live APRs and liquidity pools.

---

## Project Structure

The project follows a modular monorepo structure optimized for Next.js App Router. Key directories include:

- **Root**: Configuration files (e.g., `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`) and dependencies.
- **src/**: Core source code.
  - **app/**: Next.js pages and layouts (e.g., Home, Wallet routes with subpaths for create/import/backup).
  - **components/**: Reusable UI elements (e.g., `ConnectWalletModal`, `PrivateKeyForm`, `StakeCard`).
  - **config/**: App-wide settings (e.g., fonts).
  - **hooks/**: Custom React hooks (e.g., `useToggle`, `useCopyToClipboard`).
  - **icons/**: SVG React components for UI icons (coins, social, navigation).
  - **services/**: Blockchain services (e.g., `WalletServices.ts` for Ethers interactions).
  - **store/**: Redux slices (e.g., `walletSlice.ts` for state management).
  - **styles/**: Global CSS with Tailwind.
  - **utils/**: Helper functions (e.g., formatting utilities).

```sh
└── amando/
    ├── LICENSE
    ├── README.md
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── banner-bg.svg
    │   ├── favicon.ico
    │   ├── file.svg
    │   ├── globe.svg
    │   ├── next.svg
    │   ├── vercel.svg
    │   └── window.svg
    ├── src
    │   ├── app
    │   ├── components
    │   ├── config
    │   ├── data
    │   ├── hooks
    │   ├── icons
    │   ├── services
    │   ├── store
    │   ├── styles
    │   └── utils
    ├── tailwind.config.ts
    └── tsconfig.json
```

### Project Index

<details open>
    <summary><b><code>AMANDO/</code></b></summary>
    <details> <!-- __root__ Submodule -->
        <summary><b>__root__</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='https://github.com/batukaraman/amando/blob/master/package-lock.json'>package-lock.json</a></b></td>
                <td><code>NPM dependency lockfile for reproducible builds.</code></td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/batukaraman/amando/blob/master/next.config.ts'>next.config.ts</a></b></td>
                <td><code>Next.js configuration for transpilation, bundling, and optimizations.</code></td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/batukaraman/amando/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
                <td><code>TypeScript compiler options for strict typing and module resolution.</code></td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/batukaraman/amando/blob/master/eslint.config.mjs'>eslint.config.mjs</a></b></td>
                <td><code>ESLint configuration for code linting and Next.js integration.</code></td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/batukaraman/amando/blob/master/postcss.config.mjs'>postcss.config.mjs</a></b></td>
                <td><code>PostCSS setup for Tailwind CSS processing.</code></td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/batukaraman/amando/blob/master/package.json'>package.json</a></b></td>
                <td><code>Project metadata, scripts, and dependency declarations.</code></td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/batukaraman/amando/blob/master/tailwind.config.ts'>tailwind.config.ts</a></b></td>
                <td><code>Tailwind CSS theme customization (colors, fonts, plugins).</code></td>
            </tr>
            </table>
        </blockquote>
    </details>
    <details> <!-- src Submodule -->
        <summary><b>src</b></summary>
        <blockquote>
            <details>
                <summary><b>styles</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/styles/globals.css'>globals.css</a></b></td>
                        <td><code>Global styles with Tailwind directives and custom resets.</code></td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>config</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/config/fonts.ts'>fonts.ts</a></b></td>
                        <td><code>Font configurations for Next.js font optimization.</code></td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>components</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/ThemeSwich.tsx'>ThemeSwich.tsx</a></b></td>
                        <td><code>Toggle for dark/light themes using Next-Themes.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/Alert.tsx'>Alert.tsx</a></b></td>
                        <td><code>Reusable alert component for notifications.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/Breadcrumb.tsx'>Breadcrumb.tsx</a></b></td>
                        <td><code>Navigation breadcrumb for page hierarchy.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/TradeDeal.tsx'>TradeDeal.tsx</a></b></td>
                        <td><code>Card for displaying trade opportunities.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/Button.tsx'>Button.tsx</a></b></td>
                        <td><code>Customizable button with variants and loading states.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/SeedItem.tsx'>SeedItem.tsx</a></b></td>
                        <td><code>Item renderer for mnemonic seed phrases.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/FeedbackModal.tsx'>FeedbackModal.tsx</a></b></td>
                        <td><code>Modal for user feedback submission.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/Logo.tsx'>Logo.tsx</a></b></td>
                        <td><code>AMANDO logo component with responsive sizing.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/BalanceCard.tsx'>BalanceCard.tsx</a></b></td>
                        <td><code>Card displaying wallet balances with token icons.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/MenuItem.tsx'>MenuItem.tsx</a></b></td>
                        <td><code>Navigation menu items with icons.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/ConnectWalletModal.tsx'>ConnectWalletModal.tsx</a></b></td>
                        <td><code>Modal for wallet connection options.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/Checkbox.tsx'>Checkbox.tsx</a></b></td>
                        <td><code>Custom checkbox for forms.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/PhraseForm.tsx'>PhraseForm.tsx</a></b></td>
                        <td><code>Form for importing wallets via seed phrases.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/AddressForm.tsx'>AddressForm.tsx</a></b></td>
                        <td><code>Form for address input and validation.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/Header.tsx'>Header.tsx</a></b></td>
                        <td><code>App header with navigation and wallet status.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/PrivateKeyForm.tsx'>PrivateKeyForm.tsx</a></b></td>
                        <td><code>Secure form for private key imports.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/Social.tsx'>Social.tsx</a></b></td>
                        <td><code>Social media link icons.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/WalletConnectButton.tsx'>WalletConnectButton.tsx</a></b></td>
                        <td><code>Button to initiate WalletConnect.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/WalletSearch.tsx'>WalletSearch.tsx</a></b></td>
                        <td><code>Search component for wallet addresses.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/Tab.tsx'>Tab.tsx</a></b></td>
                        <td><code>Tabbed interface for multi-view content.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/StakeCard.tsx'>StakeCard.tsx</a></b></td>
                        <td><code>Card for staking positions.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/BannerCard.tsx'>BannerCard.tsx</a></b></td>
                        <td><code>Promotional banner with call-to-action.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/Modal.tsx'>Modal.tsx</a></b></td>
                        <td><code>Base modal component with overlays.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/FarmCard.tsx'>FarmCard.tsx</a></b></td>
                        <td><code>Card for yield farming opportunities.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/components/Drawer.tsx'>Drawer.tsx</a></b></td>
                        <td><code>Side drawer for mobile navigation.</code></td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>hooks</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/hooks/useToggle.ts'>useToggle.ts</a></b></td>
                        <td><code>Hook for boolean state toggling (e.g., modals).</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/hooks/useCopyToClipboard.ts'>useCopyToClipboard.ts</a></b></td>
                        <td><code>Hook for secure clipboard copying with feedback.</code></td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>store</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/store/walletCreateSlice.ts'>walletCreateSlice.ts</a></b></td>
                        <td><code>Redux slice for wallet creation state.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/store/walletSlice.ts'>walletSlice.ts</a></b></td>
                        <td><code>Core Redux slice for wallet data and actions.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/store/index.ts'>index.ts</a></b></td>
                        <td><code>Redux store configuration and provider setup.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/store/toggleSlice.ts'>toggleSlice.ts</a></b></td>
                        <td><code>Redux slice for UI toggles (e.g., theme).</code></td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>utils</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/utils/format.ts'>format.ts</a></b></td>
                        <td><code>Utility functions for formatting addresses, balances, and dates.</code></td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>services</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/services/WalletServices.ts'>WalletServices.ts</a></b></td>
                        <td><code>Service layer for Ethers.js wallet operations (generate, import, sign).</code></td>
                    </tr>
                    </table>
                </blockquote>
            </details>
            <details>
                <summary><b>app</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/app/layout.tsx'>layout.tsx</a></b></td>
                        <td><code>Root layout with providers (Redux, Theme).</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/app/page.tsx'>page.tsx</a></b></td>
                        <td><code>Home page with banner and quick actions.</code></td>
                    </tr>
                    </table>
                    <details>
                        <summary><b>wallet</b></summary>
                        <blockquote>
                            <table>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/app/wallet/page.tsx'>page.tsx</a></b></td>
                                <td><code>Wallet dashboard overview.</code></td>
                            </tr>
                            </table>
                            <details>
                                <summary><b>import</b></summary>
                                <blockquote>
                                    <table>
                                    <tr>
                                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/app/wallet/import/page.tsx'>page.tsx</a></b></td>
                                        <td><code>Wallet import page with form selectors.</code></td>
                                    </tr>
                                    </table>
                                </blockquote>
                            </details>
                            <details>
                                <summary><b>create</b></summary>
                                <blockquote>
                                    <table>
                                    <tr>
                                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/app/wallet/create/page.tsx'>page.tsx</a></b></td>
                                        <td><code>New wallet creation initiation.</code></td>
                                    </tr>
                                    </table>
                                    <details>
                                        <summary><b>backup</b></summary>
                                        <blockquote>
                                            <table>
                                            <tr>
                                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/app/wallet/create/backup/page.tsx'>page.tsx</a></b></td>
                                                <td><code>Seed phrase backup instructions.</code></td>
                                            </tr>
                                            </table>
                                            <details>
                                                <summary><b>confirm</b></summary>
                                                <blockquote>
                                                    <table>
                                                    <tr>
                                                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/app/wallet/create/backup/confirm/page.tsx'>page.tsx</a></b></td>
                                                        <td><code>Confirmation of backup understanding.</code></td>
                                                    </tr>
                                                    </table>
                                                    <details>
                                                        <summary><b>verify</b></summary>
                                                        <blockquote>
                                                            <table>
                                                            <tr>
                                                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/app/wallet/create/backup/confirm/verify/page.tsx'>page.tsx</a></b></td>
                                                                <td><code>Seed phrase verification quiz.</code></td>
                                                            </tr>
                                                            </table>
                                                        </blockquote>
                                                    </details>
                                                </blockquote>
                                            </details>
                                        </blockquote>
                                    </details>
                                </blockquote>
                            </details>
                        </blockquote>
                    </details>
                </blockquote>
            </details>
            <details>
                <summary><b>icons</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Bell.tsx'>Bell.tsx</a></b></td>
                        <td><code>Notification bell icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Jungle.tsx'>Jungle.tsx</a></b></td>
                        <td><code>Jungle feature icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Copy.tsx'>Copy.tsx</a></b></td>
                        <td><code>Copy action icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/IPO.tsx'>IPO.tsx</a></b></td>
                        <td><code>IPO launch icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Refresh.tsx'>Refresh.tsx</a></b></td>
                        <td><code>Refresh/reload icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Twitter.tsx'>Twitter.tsx</a></b></td>
                        <td><code>Twitter social icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Infornation.tsx'>Infornation.tsx</a></b></td>
                        <td><code>Information/info icon (note: typo in filename).</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Youtube.tsx'>Youtube.tsx</a></b></td>
                        <td><code>YouTube social icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Search.tsx'>Search.tsx</a></b></td>
                        <td><code>Search magnifying glass.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Error.tsx'>Error.tsx</a></b></td>
                        <td><code>Error/warning icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/DEX.tsx'>DEX.tsx</a></b></td>
                        <td><code>DEX exchange icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Scan.tsx'>Scan.tsx</a></b></td>
                        <td><code>QR code scan icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Reddit.tsx'>Reddit.tsx</a></b></td>
                        <td><code>Reddit social icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Sun.tsx'>Sun.tsx</a></b></td>
                        <td><code>Sun for light theme.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Avatar.tsx'>Avatar.tsx</a></b></td>
                        <td><code>User avatar placeholder.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/CopyCheck.tsx'>CopyCheck.tsx</a></b></td>
                        <td><code>Verified copy icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Wallet.tsx'>Wallet.tsx</a></b></td>
                        <td><code>Wallet icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Check.tsx'>Check.tsx</a></b></td>
                        <td><code>Checkmark for success.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Shield.tsx'>Shield.tsx</a></b></td>
                        <td><code>Security shield icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Warning.tsx'>Warning.tsx</a></b></td>
                        <td><code>Warning triangle.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Home.tsx'>Home.tsx</a></b></td>
                        <td><code>Home navigation icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Pool.tsx'>Pool.tsx</a></b></td>
                        <td><code>Liquidity pool icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/ArrowRight.tsx'>ArrowRight.tsx</a></b></td>
                        <td><code>Right arrow for navigation.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Telegram.tsx'>Telegram.tsx</a></b></td>
                        <td><code>Telegram social icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Moon.tsx'>Moon.tsx</a></b></td>
                        <td><code>Moon for dark theme.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Farm.tsx'>Farm.tsx</a></b></td>
                        <td><code>Farming/yield icon.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/type.ts'>type.ts</a></b></td>
                        <td><code>Icon component types.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/ArrowLeft.tsx'>ArrowLeft.tsx</a></b></td>
                        <td><code>Left arrow for back navigation.</code></td>
                    </tr>
                    <tr>
                        <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/Facebook.tsx'>Facebook.tsx</a></b></td>
                        <td><code>Facebook social icon.</code></td>
                    </tr>
                    </table>
                    <details>
                        <summary><b>coin</b></summary>
                        <blockquote>
                            <table>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/CAKE.tsx'>CAKE.tsx</a></b></td>
                                <td><code>PancakeSwap token icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/XRP.tsx'>XRP.tsx</a></b></td>
                                <td><code>XRP token icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/STELLA.tsx'>STELLA.tsx</a></b></td>
                                <td><code>Stella token icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/CURVE.tsx'>CURVE.tsx</a></b></td>
                                <td><code>Curve Finance icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/AM.tsx'>AM.tsx</a></b></td>
                                <td><code>AM token icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/ATOM.tsx'>ATOM.tsx</a></b></td>
                                <td><code>Cosmos ATOM icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/USDC.tsx'>USDC.tsx</a></b></td>
                                <td><code>USDC stablecoin icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/ARS.tsx'>ARS.tsx</a></b></td>
                                <td><code>ARS token icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/SAKESWAP.tsx'>SAKESWAP.tsx</a></b></td>
                                <td><code>SakeSwap DEX icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/UNISWAP.tsx'>UNISWAP.tsx</a></b></td>
                                <td><code>Uniswap DEX icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/ETH.tsx'>ETH.tsx</a></b></td>
                                <td><code>Ethereum ETH icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/VND.tsx'>VND.tsx</a></b></td>
                                <td><code>VND token icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/BAND.tsx'>BAND.tsx</a></b></td>
                                <td><code>Band Protocol icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/SUSHISWAP.tsx'>SUSHISWAP.tsx</a></b></td>
                                <td><code>SushiSwap DEX icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/AAVE.tsx'>AAVE.tsx</a></b></td>
                                <td><code>Aave lending icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/BTC.tsx'>BTC.tsx</a></b></td>
                                <td><code>Bitcoin BTC icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/BAT.tsx'>BAT.tsx</a></b></td>
                                <td><code>Basic Attention Token icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/BUSD.tsx'>BUSD.tsx</a></b></td>
                                <td><code>BUSD stablecoin icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/DTP.tsx'>DTP.tsx</a></b></td>
                                <td><code>DTP token icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/ADA.tsx'>ADA.tsx</a></b></td>
                                <td><code>Cardano ADA icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/USD.tsx'>USD.tsx</a></b></td>
                                <td><code>USD fiat icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/DEFIBOX.tsx'>DEFIBOX.tsx</a></b></td>
                                <td><code>DefiBox DEX icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/BNB.tsx'>BNB.tsx</a></b></td>
                                <td><code>BNB Chain icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/O3.tsx'>O3.tsx</a></b></td>
                                <td><code>O3 token icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/TEZOS.tsx'>TEZOS.tsx</a></b></td>
                                <td><code>Tezos XTZ icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/BCH.tsx'>BCH.tsx</a></b></td>
                                <td><code>Bitcoin Cash icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/EUR.tsx'>EUR.tsx</a></b></td>
                                <td><code>EUR fiat icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/USDT.tsx'>USDT.tsx</a></b></td>
                                <td><code>USDT stablecoin icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/FIL.tsx'>FIL.tsx</a></b></td>
                                <td><code>Filecoin FIL icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/BEEFY.tsx'>BEEFY.tsx</a></b></td>
                                <td><code>Beefy Finance icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/coin/ONEINCH.tsx'>ONEINCH.tsx</a></b></td>
                                <td><code>1inch aggregator icon.</code></td>
                            </tr>
                            </table>
                        </blockquote>
                    </details>
                    <details>
                        <summary><b>wallet</b></summary>
                        <blockquote>
                            <table>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/wallet/Binance.tsx'>Binance.tsx</a></b></td>
                                <td><code>Binance Wallet icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/wallet/Connect.tsx'>Connect.tsx</a></b></td>
                                <td><code>WalletConnect icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/wallet/Coinbase.tsx'>Coinbase.tsx</a></b></td>
                                <td><code>Coinbase Wallet icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/wallet/Metamask.tsx'>Metamask.tsx</a></b></td>
                                <td><code>MetaMask icon.</code></td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/batukaraman/amando/blob/master/src/icons/wallet/Trust.tsx'>Trust.tsx</a></b></td>
                                <td><code>Trust Wallet icon.</code></td>
                            </tr>
                            </table>
                        </blockquote>
                    </details>
                </blockquote>
            </details>
        </blockquote>
    </details>
</details>

---

## Getting Started

### Prerequisites

Before getting started with AMANDO, ensure your runtime environment meets the following requirements:

- **Node.js**: Version 18 or higher (for ES modules and modern JS features).
- **Programming Language**: TypeScript 5+ (strict mode enabled).
- **Package Manager**: npm 9+ (or yarn/pnpm as alternatives).
- **Browser**: Modern browsers with Web3 support (e.g., Chrome, Firefox) for testing wallet connections.
- **Git**: For cloning the repository.

### Installation

Install AMANDO using one of the following methods:

**Build from source:**

1. Clone the AMANDO repository:
   
   ```sh
   ❯ git clone https://github.com/batukaraman/amando
   ```

2. Navigate to the project directory:
   
   ```sh
   ❯ cd amando
   ```

3. Install the project dependencies:

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```

### Usage

Run AMANDO using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run dev
```

This starts the development server at `http://localhost:3000`. Open the URL in your browser to access the Home page and begin wallet interactions. For a live preview, visit [amando.vercel.app](https://amando.vercel.app/).

For production builds:
```sh
❯ npm run build
❯ npm start
```

### Testing

Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run lint
```

Note: Unit/integration tests are planned for future milestones using Jest or Vitest. Currently, focus on manual testing for wallet flows.

---

## Project Roadmap

The roadmap aligns with the Figma design flows, prioritizing wallet onboarding before DeFi features.

- [x] **`Task 1`**: Implement Home page with banner, quick actions, and navigation.
- [x] **`Task 2`**: Build Connect Wallet modal with multi-provider support (MetaMask, WalletConnect, etc.).
- [x] **`Task 3`**: Develop Create Wallet flow, including mnemonic generation, backup, confirmation, and verification.
- [x] **`Task 4`**: Add Import Wallet functionality (private key, seed phrase, address).
- [ ] **`Task 5`**: Create Wallet Details page with balance cards and transaction history.
- [ ] **`Task 6`**: Implement Buy Token interface with token search and purchase simulation.
- [ ] **`Task 7`**: Build Swap feature with DEX integrations (Uniswap/SushiSwap routers).
- [ ] **`Task 8`**: Add Liquidity provision UI for pools.
- [ ] **`Task 9`**: Develop Pool management dashboard.
- [ ] **`Task 10`**: Integrate Farm and Stake cards for yield farming.
- [ ] **`Task 11`**: Design Jungles gamified section.
- [ ] **`Task 12`**: Launch IPO participation flow.
- [ ] **`Task 13`**: Add end-to-end tests and CI/CD pipeline.
- [ ] **`Task 14`**: Deploy to Vercel/Netlify with real contract integrations.

Contributions to accelerate these tasks are welcome!

---

## Contributing

AMANDO is a community project, and contributions are encouraged to enhance its DeFi capabilities.

- **💬 [Join the Discussions](https://github.com/batukaraman/amando/discussions)**: Share your insights, provide feedback, or ask questions about the codebase or design.
- **🐛 [Report Issues](https://github.com/batukaraman/amando/issues)**: Submit bugs found (e.g., wallet import edge cases) or log feature requests for the AMANDO project.
- **💡 [Submit Pull Requests](https://github.com/batukaraman/amando/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs for new components or fixes.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.

2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   
   ```sh
   git clone https://github.com/batukaraman/amando
   ```

3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   
   ```sh
   git checkout -b feature/wallet-enhancements
   ```

4. **Make Your Changes**: Develop and test your changes locally. Ensure TypeScript compiles and ESLint passes.

5. **Commit Your Changes**: Commit with a clear message describing your updates.
   
   ```sh
   git commit -m 'feat: add transaction history to wallet details'
   ```

6. **Push to GitHub**: Push the changes to your forked repository.
   
   ```sh
   git push origin feature/wallet-enhancements
   ```

7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes, motivations, and any testing done.

8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
   
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com/batukaraman/amando/graphs/contributors">
      <img src="https://contrib.rocks/image?repo=batukaraman/amando">
   </a>
</p>
</details>

---

## License

This project is protected under the [MIT License](https://choosealicense.com/licenses/mit/). For more details, refer to the [LICENSE](LICENSE) file.

---

## Acknowledgments

- **Design Inspiration**: Figma prototype "Amando Web3 Auto Market Maker Protocol (Community)" ([view on Figma](https://www.figma.com/community/file/1248337124644515489/amando-web3-auto-market-maker-protocol)) for UI/UX flows.
- **Live Demo**: Explore the deployed app at [amando.vercel.app](https://amando.vercel.app/).
- **Libraries**: Gratitude to the maintainers of Next.js, Ethers.js, Redux Toolkit, Tailwind CSS, and Web3-React for powering the stack.
- **Icons**: Custom SVGs derived from React Icons and community contributions.
- **Community**: Early feedback from DeFi enthusiasts on wallet security and AMM mechanics.
- **Learning Resources**: Documentation from BIP39, HDKey, and Web3.js for cryptographic implementations.

---
