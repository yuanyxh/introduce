import type { ReactNode, CSSProperties, TransitionEvent } from 'react';

export declare interface MProps {
  children?: ReactNode[];
  className?: string;
  style?: CSSProperties;
  onTransitionEnd?: (e: TransitionEvent<HTMLDivElement>) => void;
  toggleTurn?: (e: MouseEvent<HTMLElement>) => void;
}

export declare interface Props {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onTransitionEnd?: (e: TransitionEvent<HTMLDivElement>) => void;
  toggleTurn?: (e: MouseEvent<HTMLElement>) => void;
}

export * from './className';
export * from './Element';
