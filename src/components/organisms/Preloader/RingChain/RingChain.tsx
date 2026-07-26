'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { RING_OVERLAP } from './useRingMetrics';
import type { RingChainProps, RingMetrics } from './RingChain.type';

function Ring({ metrics }: { metrics: RingMetrics }) {
  return (
    <motion.span
      layout
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="border-content-secondary/55 shrink-0 rounded-full"
      style={{
        width: metrics.width,
        height: metrics.height,
        borderWidth: metrics.borderWidth,
        borderStyle: 'solid',
        marginLeft: -metrics.width * RING_OVERLAP,
      }}
    />
  );
}



export function RingChain({ maxCount, metrics, duration }: RingChainProps) {
  const [count, setCount] = useState(0);
  const lastCount = useRef(0);

  useEffect(() => {
    lastCount.current = 0;
    setCount(0);
    if (maxCount <= 0) return;

    const controls = animate(0, maxCount, {
      duration,
      ease: 'easeInOut',
      onUpdate: (v) => {
        const next = Math.round(v);
        if (next !== lastCount.current) {
          lastCount.current = next;
          setCount(next);
        }
      },
    });
    return () => controls.stop();
  }, [maxCount, duration]);

  if (!metrics) return null;

  return (
    <span className="inline-flex items-center" style={{ marginLeft: metrics.width * RING_OVERLAP }}>
      {Array.from({ length: count }).map((_, index) => (
        <Ring key={index} metrics={metrics} />
      ))}
    </span>
  );
}
