import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptoQuery } from '../services/CryptoAPI'
import CryptoCurrencies from './CryptoCurrencies'
import News from './News'
import Loader from './Loader'


function Homepage() {
  const { Title } = Typography
  const { data, isFetching } = useGetCryptoQuery(10)
  console.log(data)

  const globalStats = data?.data?.stats
  if (isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Statistics
      </Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats?.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges || 0)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify((globalStats?.totalMarketCap || 0) * 1000000000)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats?.total24hVolume || 0)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats?.totalMarkets || 0)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Trending Currencies</Title>
        <Title level={5} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <CryptoCurrencies simplified/>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Trending News</Title>
        <Title level={5} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified/>
    </>
  )
}

export default Homepage
