import { useCallback, useLayoutEffect, useState } from 'react';
import type { RefObject } from 'react';
import type { RingMetrics } from './RingChain.type';

/** Fraction of a ring's width that each subsequent ring overlaps the previous one by. */
export const RING_OVERLAP = 0.55;
/** Ring border thickness as a fraction of the ring's own width. */
const RING_BORDER_RATIO = 0.3;
const EDGE_PADDING_PX = 24;

let measureCanvas: HTMLCanvasElement | null = null;

/** Measures the actual rendered "O" glyph of an element's font, so the rings can match the letters exactly. */
function measureOGlyph(el: HTMLElement): RingMetrics | null {
  measureCanvas ??= document.createElement('canvas');
  const ctx = measureCanvas.getContext('2d');
  if (!ctx) return null;

  const style = window.getComputedStyle(el);
  ctx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
  const m = ctx.measureText('O');
  const width = m.width / 1.1;
  const height = (m.actualBoundingBoxAscent ?? 0) + (m.actualBoundingBoxDescent ?? 0);
  if (!width || !height) return null;

  return { width, height, borderWidth: (width / 1.6) * RING_BORDER_RATIO };
}

/**
 * Measures how many overlapping rings fit between `beforeRef` and `afterRef` inside `containerRef`,
 * sized to match `beforeRef`'s rendered "O" glyph. Re-measures on font load and viewport resize.
 */
export function useRingMetrics(
  containerRef: RefObject<HTMLElement | null>,
  beforeRef: RefObject<HTMLElement | null>,
  afterRef: RefObject<HTMLElement | null>,
) {
  const [maxCount, setMaxCount] = useState(0);
  const [metrics, setMetrics] = useState<RingMetrics | null>(null);

  const measure = useCallback(() => {
    if (!beforeRef.current) return;
    const glyph = measureOGlyph(beforeRef.current);
    if (!glyph) return;

    const containerWidth = containerRef.current?.getBoundingClientRect().width ?? 0;
    const beforeWidth = beforeRef.current.getBoundingClientRect().width;
    const afterWidth = afterRef.current?.getBoundingClientRect().width ?? 0;
    const pitch = glyph.width * (1 - RING_OVERLAP);
    const available = containerWidth - beforeWidth - afterWidth - EDGE_PADDING_PX - glyph.width * RING_OVERLAP;

    setMetrics(glyph);
    setMaxCount(Math.max(2, Math.round(available / pitch)));
  }, [containerRef, beforeRef, afterRef]);

  useLayoutEffect(() => {
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  return { maxCount, metrics };
}
