import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

type GraphQuery = {
  query: any;
};

export const query = async (props: GraphQuery) => {
  try {
    await axios({
      url: endpoint,
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      data: {
        query: props.query,
      },
    });
  } catch (e: any) {
    throw new Error(e);
  }
};

const endpoint: string = 'https://lucodes-graphql.herokuapp.com/graphql';

export default function useQuery(props: GraphQuery): IQueryData {
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;

    const loadQuery = async () => {
      const queryResult: AxiosResponse = await axios({
        url: endpoint,
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        data: {
          query: props.query,
        },
      });
      if (mounted) {
        setData(queryResult.data.data);
      }
    };

    loadQuery();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    data,
  };
}
