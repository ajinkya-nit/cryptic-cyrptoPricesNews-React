import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoQuery } from '../services/CryptoAPI';
import { useGetCryptoNewsQuery } from '../services/CryptoNewsApi';
import Loader from './Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptoQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 10 });
  
  const cryptoOptions = data?.data?.coins?.map((currency) => ({
    value: currency.name,
    label: currency.name,
  }));

  // Updated check: NewsData.io returns data inside the 'results' array
  if (!cryptoNews?.results) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="label"
            onChange={(value) => setNewsCategory(value)}
            options={[
              { value: 'Cryptocurrency', label: 'Cryptocurrency' },
              ...(cryptoOptions || []),
            ]}
          />
        </Col>
      )}
      {/* Mapping over 'results' instead of 'value' */}
      {cryptoNews.results.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.link} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.title}</Title>
                {/* NewsData.io uses 'image_url' */}
                <img 
                  style={{ maxWidth: '200px', maxHeight: '100px' }} 
                  src={news.image_url || demoImage} 
                  alt="news" 
                />
              </div>
              <p>
                {news.description && news.description.length > 100 
                  ? `${news.description.substring(0, 100)}...` 
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  {/* NewsData.io uses 'source_icon' and 'source_name' */}
                  <Avatar src={news.source_icon || demoImage} alt="source" />
                  <Text className="provider-name">{news.source_name}</Text>
                </div>
                {/* NewsData.io uses 'pubDate' */}
                <Text>{moment(news.pubDate).fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;