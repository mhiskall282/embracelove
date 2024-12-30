import React, { useState, useEffect } from 'react';

interface CounterProps {
  end: number;
  label: string;
  duration?: number;
  suffix?: string;
}

export const ImpactCounter: React.FC<CounterProps> = ({ end, label, duration = 2000, suffix = "+" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const steps = 50;
    const increment = end / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-2 text-orange-500">
        {count}{suffix}
      </div>
      <div className="text-blue-100">{label}</div>
    </div>
  );
};
