import { motion } from 'framer-motion';
import LayoutContainer from '../components/LayoutContainer';

interface StatCardProps {
  iconSrc: string;
  number: string;
  label: React.ReactNode;
  delay: number;
}

const StatCard = ({ iconSrc, number, label, delay }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-[8px] pb-0 pt-[8px] px-0 w-[291.75px] shrink-0"
    >
      {/* Icon with glass effect */}
      <div className="relative w-[48px] h-[48px]">
        <div className="absolute left-[2.61px] top-[-13.39px] w-[58.788px] h-[58.788px] flex items-center justify-center pointer-events-none">
          <div className="rotate-[15deg] w-[48px] h-[48px] bg-primary rounded-[16px]" />
        </div>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-xs border border-white/60 rounded-[16px] flex items-center justify-center p-[12px]">
          <img src={iconSrc} alt="" className="w-[24px] h-[24px] block max-w-none" />
        </div>
      </div>
      
      {/* Text */}
      <div className="text-center leading-none w-full">
        <div className="text-[20px] leading-[24px] font-medium text-secondary">{number}</div>
        <div className="text-[14px] leading-[20px] font-normal text-tertiary">{label}</div>
      </div>
    </motion.div>
  );
};

const Numbers = () => {
  const stats = [
    {
      iconSrc: '/images/numbers-icon-1.svg',
      number: '300 000+',
      label: (
        <>
          потенциальных покупателей <br />в месяц
        </>
      ),
    },
    {
      iconSrc: '/images/numbers-icon-2.svg',
      number: '100 000+',
      label: (
        <>
          зарегистрированных <br />
          пользователей
        </>
      ),
    },
    {
      iconSrc: '/images/numbers-icon-3.svg',
      number: '5 000+',
      label: (
        <>
          экспертов будут рекомендовать <br />
          ваши продукты
        </>
      ),
    },
    {
      iconSrc: '/images/numbers-icon-4.svg',
      number: 'Более 160',
      label: (
        <>
          поставщиков <br />
          доверяют нам
        </>
      ),
    },
  ];
  // Tablet 744 (Figma: 8389:34746) — точные размеры/позиции из метаданных
  const stats744 = [
    {
      iconSrc: '/images/numbers-icon-1.svg',
      number: '300 000+',
      label: 'потенциальных покупателей в месяц',
      iconW: 48,
      iconH: 40,
      labelW: 211,
    },
    {
      iconSrc: '/images/numbers-icon-2.svg',
      number: '100 000+',
      label: 'зарегистрированных пользователей',
      iconW: 40,
      iconH: 40,
      labelW: 208,
    },
    {
      iconSrc: '/images/numbers-icon-3.svg',
      number: '5 000+',
      label: 'экспертов будут рекомендовать ваши продукты',
      iconW: 40,
      iconH: 40,
      labelW: 274,
    },
    {
      iconSrc: '/images/numbers-icon-4.svg',
      number: 'Более 160',
      label: 'поставщиков доверяют нам',
      iconW: 40,
      iconH: 40,
      labelW: 161,
    },
  ] as const;

  return (
    <>
      {/* Desktop / 1440 */}
      <section className="relative z-10 mt-[-32px] mb-[8px] max-744:hidden">
        {/* White block (separate container) */}
        <div className="w-full bg-white rounded-[32px] py-[20px]">
          <LayoutContainer className="h-[128px] flex items-center gap-[11px]">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                iconSrc={stat.iconSrc}
                number={stat.number}
                label={stat.label}
                delay={index * 0.1}
              />
            ))}
          </LayoutContainer>
        </div>
      </section>

      {/* Tablet 744 (Figma: 8389:34746) */}
      <section className="relative z-10 mt-[-32px] max-744:mt-[-30px] mb-[8px] hidden max-744:block">
        <div className="w-full bg-white rounded-[32px] py-[20px]">
          {/* Figma: Frame 2087327981 (x=0,y=20,w=744,h=208), inner content x=20,w=704 */}
          <div className="mx-auto w-full max-w-[744px] px-[20px] h-[208px]">
            <div className="relative w-[704px] h-[208px]">
              {stats744.map((s, idx) => {
                const col = idx % 2;
                const row = Math.floor(idx / 2);
                const left = col === 0 ? 0 : 357.5; // 346.5 + 11
                const top = row === 0 ? 0 : 114; // 94 + 20
                const iconLeft = (346.5 - s.iconW) / 2; // 149.25 or 153.25
                const labelLeft = (346.5 - s.labelW) / 2; // per Figma

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    style={{
                      position: 'absolute',
                      left: `${left}px`,
                      top: `${top}px`,
                      width: '346.5px',
                      height: '94px',
                    }}
                  >
                    {/* Featured icon */}
                    <div
                      style={{
                        position: 'absolute',
                        left: `${iconLeft}px`,
                        top: '8px',
                        width: `${s.iconW}px`,
                        height: `${s.iconH}px`,
                      }}
                    >
                      {/* Green rotated shape behind (must be behind glass) */}
                      <div
                        style={{
                          position: 'absolute',
                          left: '2.61px',
                          top: '-13.39px',
                          width: '58.788px',
                          height: '58.788px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          pointerEvents: 'none',
                          zIndex: 0,
                        }}
                      >
                        <div style={{ transform: 'rotate(15deg)', width: 48, height: 48, backgroundColor: '#59AD3B', borderRadius: 16 }} />
                      </div>
                      {/* Glass */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '16px',
                          backgroundColor: 'rgba(255,255,255,0.6)',
                          border: '1px solid rgba(255,255,255,0.6)',
                          backdropFilter: 'blur(16px)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 1,
                        }}
                      >
                        <img src={s.iconSrc} alt="" style={{ width: 24, height: 24 }} />
                      </div>
                    </div>

                    {/* Text block (y=56, h=38) */}
                    <div style={{ position: 'absolute', left: 0, top: 56, width: '346.5px', height: 38, textAlign: 'center' }}>
                      {/* number: h=22 */}
                      <div style={{ height: 22, fontSize: 18, lineHeight: '22px', fontWeight: 500, color: '#242424' }}>{s.number}</div>
                      {/* label: h=16, centered with exact width */}
                      <div style={{ position: 'relative', height: 16 }}>
                        <div
                          style={{
                            position: 'absolute',
                            left: `${labelLeft}px`,
                            top: 0,
                            width: `${s.labelW}px`,
                            height: 16,
                            fontSize: 12,
                            lineHeight: '16px',
                            fontWeight: 400,
                            color: '#848484',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {s.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Numbers;
