import { useEffect, useState } from 'react';
import axios from 'axios';
import { DATABASE_URL } from '../constants/config';

const GetBlogDataById = (id: string) => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    axios.get(DATABASE_URL + `/item/${id}`).then((data) => setBlogData(data.data));
  }, [id]);
  return blogData;
};

export { GetBlogDataById };
