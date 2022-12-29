import { useEffect, useState } from 'react';

export default function useHeight() {
  const [height, setHeight] = useState(window.scrollY);
  const resizer = () => setHeight(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', resizer);
    return () => {
      window.removeEventListener('scroll', resizer);
    };
  }, [height]);

  return [height];
}
