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
    // Делаем контейнер "плавным" для любых ширин:
    // - ≥1200px: центрируем max-w=1200 (на 1920/1440 получаем ровно те же отступы 360/120 автоматически)
    // - ≤1200px: добавляем боковые отступы 20px (чтобы на 8xx–11xx контент не лип к краям)
    // - ≤744px:  max-w=744 + px=20 => контент 704 (как в Figma)
    // - ≤375px:  max-w=375 + px=20 => контент 335 (как в Figma)
    <div
      className={`w-full mx-auto box-border max-w-[1200px] max-1200:px-[20px] max-744:max-w-[744px] max-744:px-[20px] max-375:max-w-[375px] max-375:px-[20px] ${className}`}
    >
      {children}
    </div>
  );
}


