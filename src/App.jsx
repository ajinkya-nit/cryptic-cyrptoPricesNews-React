import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Exchanges, Homepage, CryptoCurrencies, CryptoDetails, News } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{color: 'white', textAlign:'center'}}>
            Cryptic <br/>
            2026 @ All Rights Reserverd
          </Typography.Title>
          <Space>
            <Link to= '/'>Home</Link>
            <Link to= '/cryptocurrencies'>Crypto Currencies</Link>
            <Link to= '/exchanges'>Exchanges</Link>
            <Link to= '/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;