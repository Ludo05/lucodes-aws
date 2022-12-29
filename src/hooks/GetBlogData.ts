import { useEffect, useState } from 'react';
import { DATABASE_URL } from '../constants/config';

const GetBlogData = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    return () => {
    };
  }, []);

  return blogData;
};

export { GetBlogData };
