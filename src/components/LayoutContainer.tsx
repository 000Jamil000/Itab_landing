import type { ReactNode } from 'react';

type LayoutContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Контейнер под макеты Figma:
 * - Desktop (1920/1440): 1200px
 * - Tablet (744): 704px (отступы по 20px)
 * - Mobile (375): 335px (отступы по 20px)
 */
export default function LayoutContainer({ children, className = '' }: LayoutContainerProps) {
  return (
    // Базовая логика: делаем контейнер "резиновым", но на точных ширинах он совпадает с Figma:
    // - 1920: padding 360 => контент 1200
    // - 1440: padding 120 => контент 1200
    // - 744:  padding 20  => контент 704
    // - 375:  padding 20  => контент 335
    <div className={`w-full box-border px-[360px] max-1440:px-[120px] max-744:px-[20px] ${className}`}>
      {children}
    </div>
  );
}


