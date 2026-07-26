export type RingMetrics = {
  width: number;
  height: number;
  borderWidth: number;
};

export interface RingChainProps {
  maxCount: number;
  metrics: RingMetrics | null;
  duration: number;
}
