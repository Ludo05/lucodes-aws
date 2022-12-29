import { useEffect, useState } from 'react';
import { DATABASE_URL } from '../constants/config';

const GetBlogDataById = (id: string) => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
  }, [id]);
  return blogData;
};

export { GetBlogDataById };
