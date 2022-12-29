import { useState, useEffect } from 'react';

export default function useCalculator(startValue: number) {
  const [changer, setChanger] = useState<number>(1);
  const [num, setNum] = useState<number>(startValue);

  useEffect(() => {
    return () => {
      setNum(num * changer);
    };
  }, [changer]);

  return { num, setChanger };
}
