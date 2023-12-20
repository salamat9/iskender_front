import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsItem from './newsItem';

const News = () => {
  const news = useSelector((state) => state.news.data);
  const {
    news: { getNews },
  } = useDispatch();

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <div className='products-title'>
        <h2>Новости</h2>
        <div className='categories-title_right'>все</div>
      </div>
      <div className='news'>
        {news.map((n) => (
          <NewsItem key={n._id} news={n} />
        ))}
      </div>
    </div>
  );
};

export default News;
