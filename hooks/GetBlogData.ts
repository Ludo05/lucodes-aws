import { useEffect, useState } from 'react';
import axios from 'axios';
import { DATABASE_URL } from '../constants/config';

const GetBlogData = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    return () => {
      axios.get(DATABASE_URL + '/all').then((data) => setBlogData(data.data));
    };
  }, []);

  return blogData;
};

export { GetBlogData };
