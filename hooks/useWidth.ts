import { useEffect, useState } from 'react';

export default function useWidth() {
  const [width, setWidth] = useState(0);
  const resizer = () => setWidth(0);

  useEffect(() => {
    window.addEventListener('resize', resizer);
    return () => {
      window.removeEventListener('resize', resizer);
    };
  }, [width]);

  return [width];
}
