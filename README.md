# Cryptic: Crypto Prices & News

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/ajinkya-nit/cryptic-cyrptoPricesNews-React)

## Overview

Cryptic is a dynamic and responsive web application built with React that provides real-time information about the cryptocurrency market. It allows users to track prices, view detailed statistics, analyze historical data through interactive charts, and stay updated with the latest crypto news. The application leverages the CoinRanking and NewsData.io APIs to fetch live data.

## Features

-   **Global Market Overview:** A dashboard displaying global crypto statistics, including total market cap, trading volume, and the number of active cryptocurrencies and exchanges.
-   **Top Cryptocurrencies:** A comprehensive, searchable list of cryptocurrencies, showing their rank, price, market cap, and daily change.
-   **Detailed Coin View:** In-depth pages for each cryptocurrency, featuring:
    -   Live price and ranking.
    -   Interactive price history charts with selectable time periods (e.g., 3h, 24h, 7d, 1y).
    -   Key value statistics (market cap, 24h volume, all-time high).
    -   Detailed descriptions and links to official websites, social media, and explorers.
-   **Latest News:** A dedicated section for crypto-related news articles, with the ability to filter news by a specific cryptocurrency.
-   **Responsive Design:** A clean, mobile-friendly interface built with Ant Design that ensures a seamless experience on all devices.

## Tech Stack

-   **Framework:** React (with Vite)
-   **State Management:** Redux Toolkit & RTK Query
-   **UI Library:** Ant Design
-   **Routing:** React Router
-   **Charting:** Chart.js, react-chartjs-2
-   **Data Formatting:** Millify, Moment.js, HTML React Parser
-   **APIs:**
    -   [CoinRanking API](https://rapidapi.com/Coinranking/api/coinranking1) for all cryptocurrency data.
    -   [NewsData.io API](https://newsdata.io/) for news articles.

## Local Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ajinkya-nit/cryptic-cyrptopricesnews-react.git
    cd cryptic-cyrptopricesnews-react
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add your API keys.

    ```env
    VITE_CRYPTO_API_KEY=your_coinranking_api_key
    VITE_CRYPTO_NEWS_API_KEY=your_newsdata_api_key
    ```
    -   You can obtain a CoinRanking API key from [RapidAPI](https://rapidapi.com/Coinranking/api/coinranking1).
    -   You can obtain a NewsData.io API key from their [official website](https://newsdata.io/).

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Available Scripts

In the project directory, you can run the following commands:

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run lint`: Lints the code using ESLint.
-   `npm run preview`: Serves the production build locally to preview your changes.