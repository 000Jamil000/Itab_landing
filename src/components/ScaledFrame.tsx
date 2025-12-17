import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

type ScaledFrameProps = {
  /** Design-time width in px (e.g. 744, 704, 375). Children are laid out in this coordinate space. */
  designWidth: number;
  /** Optional design-time height in px. When provided, the wrapper reserves scaled height to avoid overlap. */
  designHeight?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Scales a fixed-size "Figma-perfect" layout down to the available width.
 * - At widths >= designWidth: scale=1 (pixel-perfect)
 * - Below: scale proportionally to fit (prevents overflow between breakpoints, e.g. 702px on a 744 design)
 */
export default function ScaledFrame({ designWidth, designHeight, className = '', children }: ScaledFrameProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [hostWidth, setHostWidth] = useState<number>(designWidth);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width ?? designWidth;
      setHostWidth(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);

  const scale = useMemo(() => {
    if (!hostWidth || hostWidth <= 0) return 1;
    return Math.min(1, hostWidth / designWidth);
  }, [hostWidth, designWidth]);

  return (
    <div
      ref={hostRef}
      className={className}
      style={{
        width: '100%',
        height: designHeight ? `${designHeight * scale}px` : undefined,
      }}
    >
      <div
        style={{
          width: `${designWidth}px`,
          height: designHeight ? `${designHeight}px` : undefined,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          position: 'relative',
        }}
      >
        {children}
      </div>
    </div>
  );
}


