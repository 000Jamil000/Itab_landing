import { motion } from 'framer-motion';

interface PartnershipCardProps {
  iconSrc: string;
  iconAlt: string;
  iconCrop: { left: string; top: string; width: string; height: string };
  title: React.ReactNode;
  description: React.ReactNode;
  delay: number;
}

const PartnershipCard = ({ iconSrc, iconAlt, iconCrop, title, description, delay }: PartnershipCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-[#F7F7F7] rounded-[24px] p-8 h-[314px] overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <div className="relative w-[100px] h-[100px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt={iconAlt}
              className="absolute max-w-none"
              src={iconSrc}
              style={iconCrop}
            />
          </div>
        </div>
        <h3 className="text-h4 text-secondary">{title}</h3>
      </div>
      <p className="text-body-16 text-tertiary mt-3 leading-[22px]">{description}</p>
    </motion.div>
  );
};

const PartnershipCard744 = ({ iconSrc, iconAlt, iconCrop, title, description, delay }: PartnershipCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{
        width: 229.333,
        height: 380,
        backgroundColor: '#F7F7F7',
        borderRadius: 24,
        padding: 24,
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ width: 72, height: 72, position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            <img alt={iconAlt} src={iconSrc} style={{ position: 'absolute', maxWidth: 'none', ...iconCrop }} />
          </div>
        </div>
        <div style={{ color: '#242424', fontSize: 20, lineHeight: '22px', fontWeight: 500 }}>{title}</div>
      </div>
      <div style={{ marginTop: 12, color: '#848484', fontSize: 16, lineHeight: '22px', letterSpacing: '-0.2px' }}>{description}</div>
    </motion.div>
  );
};

const Partnerships = () => {
  const benefits = [
    {
      iconSrc: '/images/partnerships-icon-1.png',
      iconAlt: '',
      iconCrop: { left: '-13.93%', top: '-13.28%', width: '127.87%', height: '127.87%' },
      title: <>Прозрачные условия сотрудничества</>,
      description: (
        <>
          Никаких скрытых комиссий и внезапных платежей — вы всегда знаете, сколько <br />
          и за что платите
        </>
      ),
    },
    {
      iconSrc: '/images/partnerships-icon-2.png',
      iconAlt: '',
      iconCrop: { left: '-12.79%', top: '-13.44%', width: '126.14%', height: '126.14%' },
      title: (
        <>
          Персональные условия <br />и гибкие скидки&nbsp;
        </>
      ),
      description: (
        <>
          Мы подстраиваемся под ваш бизнес <br />
          и создаём выгодные условия для роста
        </>
      ),
    },
    {
      iconSrc: '/images/partnerships-icon-3.png',
      iconAlt: '',
      iconCrop: { left: '-17.66%', top: '-17.9%', width: '135.32%', height: '135.32%' },
      title: (
        <>
          Возвраты <br />
          без хлопот
        </>
      ),
      description: (
        <>
          Все этапы возврата мы берём на себя — <br />
          вы просто продолжаете продавать
        </>
      ),
    },
    {
      iconSrc: '/images/partnerships-icon-4.png',
      iconAlt: '',
      iconCrop: { left: '-2.56%', top: '-5.11%', width: '105.11%', height: '105.11%' },
      title: (
        <>
          Персональный <br />
          менеджер
        </>
      ),
      description: <>У поставщика есть менеджер, который знает ваш бизнес и всегда на связи, чтобы помочь и ответить на любые вопросы</>,
    },
    {
      iconSrc: '/images/partnerships-icon-5.png',
      iconAlt: '',
      iconCrop: { left: '-18.97%', top: '-18.87%', width: '137.17%', height: '137.17%' },
      title: <>Поддержка и развитие платформы</>,
      description: <>Оперативная техподдержка и регулярные обновления помогают работать без сбоев</>,
    },
    {
      iconSrc: '/images/partnerships-icon-6.png',
      iconAlt: '',
      iconCrop: { left: '-22.51%', top: '-21.87%', width: '144.05%', height: '144.05%' },
      title: (
        <>
          Эксклюзивные акции <br />
          и продвижение
        </>
      ),
      description: (
        <>
          Участие в маркетинговых кампаниях iTAB, увеличение продаж через наши медиа <br />
          и коллаборации
        </>
      ),
    },
  ];

  return (
    <>
      {/* Desktop / 1440 */}
      <section className="bg-white rounded-[32px] py-[80px] mb-[8px] max-1042:hidden">
        <div className="mx-auto w-[1200px]">
          <div className="flex flex-row gap-[40px] mb-[40px] items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h2 className="text-h2 text-secondary leading-tight">
                Мы строим долгосрочные партнёрства, где ваш рост — <br />
                наш главный приоритет
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1"
            >
              <p className="text-body-16 text-tertiary leading-relaxed">
                На iTAB вы не просто размещаете товары — вы развиваете бизнес вместе <br />
                с экспертной платформой, которая помогает продавать больше, выстраивать доверие и расти вместе с рынком интегративного здоровья.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-4" style={{ gridTemplateColumns: '389.333px 389.333px 389.333px' }}>
            {benefits.map((benefit, index) => (
              <PartnershipCard key={index} {...benefit} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Tablet 744 (Figma: 3x2 grid, cards 229.333x380, gap 8) */}
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-1042:block max-744:hidden" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="mx-auto w-full max-w-[744px] px-[20px]">
          <div style={{ width: 704 }}>
            {/* Heading (744): по макету — слева, без искусственных переносов */}
            <div style={{ width: 704 }}>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  margin: 0,
                  color: '#242424',
                  fontSize: 36,
                  lineHeight: '40px',
                  fontWeight: 500,
                  letterSpacing: '-1px',
                  textAlign: 'left',
                }}
              >
                Мы строим долгосрочные партнёрства, где ваш рост — наш главный приоритет
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                style={{
                  margin: 0,
                  marginTop: 16,
                  color: '#848484',
                  fontSize: 16,
                  lineHeight: '22px',
                  letterSpacing: '-0.2px',
                  textAlign: 'left',
                }}
              >
                На iTAB вы не просто размещаете товары — вы развиваете бизнес вместе с экспертной платформой, которая помогает продавать больше, выстраивать доверие
                и расти вместе с рынком интегративного здоровья.
              </motion.p>
            </div>

            <div style={{ marginTop: 40, width: 704, display: 'grid', gridTemplateColumns: '229.333px 229.333px 229.333px', columnGap: 8, rowGap: 8 }}>
              {benefits.map((benefit, index) => (
                <PartnershipCard744 key={index} {...benefit} delay={index * 0.05} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile 375 (Figma: 8389:34666) */}
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-744:block" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        {/* На ширинах 375..744 масштабируем размеры пропорционально ширине контента (335 в Figma) */}
        <div
          className="mx-auto w-full max-w-[744px] px-[20px]"
          style={
            {
              ['--p-content-w' as any]: 'min(704px, calc(100vw - 40px))',
            } as React.CSSProperties
          }
        >
          <div style={{ width: '100%' }}>
            {/* Heading block: gap 16 */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                margin: 0,
                width: '100%',
                fontSize: 24,
                lineHeight: '28px',
                fontWeight: 500,
                letterSpacing: '-1px',
                color: '#242424',
              }}
            >
              Мы строим долгосрочные партнёрства, где ваш рост — <br />
              наш главный приоритет
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              style={{
                margin: 0,
                marginTop: 16,
                width: '100%',
                fontSize: 14,
                lineHeight: '22px',
                fontWeight: 400,
                letterSpacing: '-0.2px',
                color: '#848484',
              }}
            >
              На iTAB вы не просто размещаете товары — <br />
              вы развиваете бизнес вместе с экспертной платформой, которая помогает продавать больше, выстраивать доверие и расти вместе с рынком интегративного здоровья.
            </motion.p>

            {/* Cards strip: Frame 2087328006 (w=335,h=280), card 250x280, gap 8 */}
            <div
              style={{
                marginTop: 32,
                width: '100%',
                height: 'calc(var(--p-content-w) * 280 / 335)',
                overflowX: 'auto',
                overflowY: 'hidden',
                display: 'flex',
                gap: 8,
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={`p-375-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  style={{
                    width: 'calc(var(--p-content-w) * 250 / 335)',
                    height: 'calc(var(--p-content-w) * 280 / 335)',
                    flexShrink: 0,
                    scrollSnapAlign: 'start',
                    backgroundColor: '#F7F7F7',
                    borderRadius: 24,
                    padding: 24,
                    overflow: 'hidden',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    gap: 12,
                  }}
                >
                  <div style={{ width: 72, height: 72, position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                      <img alt={benefit.iconAlt} src={benefit.iconSrc} style={{ position: 'absolute', maxWidth: 'none', ...benefit.iconCrop }} />
                    </div>
                  </div>
                  <div style={{ fontSize: 18, lineHeight: '22px', fontWeight: 500, letterSpacing: '-0.2px', color: '#242424' }}>{benefit.title}</div>
                  <div style={{ fontSize: 14, lineHeight: '22px', letterSpacing: '-0.2px', color: '#848484' }}>{benefit.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partnerships;
