import { motion } from 'framer-motion';
import ScaledFrame from '../components/ScaledFrame';
import { SUPPLIER_REGISTRATION_URL } from '../constants/links';

interface StepCardProps {
  number: string;
  title: string;
  description: React.ReactNode;
  time: string;
  delay: number;
}

const StepCard = ({ number, title, description, time, delay }: StepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      style={{
        backgroundColor: '#F7F7F7',
        borderRadius: '24px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '300px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '32px',
            backgroundColor: '#59AD3B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            padding: '12px',
          }}
        >
          <span style={{ color: '#FFFFFF', fontWeight: 400, fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.2px' }}>
            {number}
          </span>
        </div>

        <h3 className="text-h4" style={{ color: '#242424' }}>
          {title}
        </h3>

        <div style={{ color: '#848484', fontSize: '16px', lineHeight: '24px', letterSpacing: '-0.2px' }}>
          {description}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '24px' }}>
        <img src="/images/steps-clock.svg" alt="" style={{ width: '24px', height: '24px' }} />
        <span style={{ color: '#C1C1C1', fontSize: '16px', lineHeight: '22px', fontWeight: 500 }}>
          {time}
        </span>
      </div>
    </motion.div>
  );
};

const Steps = () => {
  const steps = [
    {
      number: '1',
      title: 'Зарегистрируйтесь',
      description: (
        <>
          Укажите контакты и реквизиты — <br />
          мы свяжемся с вами и пришлём условия сотрудничества.
        </>
      ),
      time: 'до 3х рабочих дней',
    },
    {
      number: '2',
      title: 'Загрузите товары',
      description: (
        <>
          Заполните форму, а наша медицинская комиссия проверит товары <br />
          на соответствие требованиям.
        </>
      ),
      time: '5–10 рабочих дня',
    },
    {
      number: '3',
      title: 'Пройдите модерацию',
      description: (
        <>
          В течении 7 дней мы проверим товары <br />
          на качество, и откроем полный доступ <br />
          к кабинету поставщика.
        </>
      ),
      time: 'до 7 рабочих дней',
    },
    {
      number: '4',
      title: 'Запланируйте поставку',
      description: <>Настройте первую поставку и начинайте работать на платформе.</>,
      time: '1 день',
    },
  ];

  return (
    <>
      {/* Desktop / 1440 */}
      <section id="steps" className="bg-white rounded-[32px] py-[80px] mb-[8px] max-1440:hidden">
        <div className="mx-auto w-[1200px]">
          <motion.h2
            className="text-h2"
            style={{ color: '#242424', marginBottom: '40px', textAlign: 'center' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Всего 4 шага, чтобы начать продавать
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
            <div
              className="grid gap-4"
              style={{
                width: '792px',
                gridTemplateColumns: '1fr 1fr',
              }}
            >
              <div style={{ width: '388px' }}>
                <StepCard {...steps[0]} delay={0} />
              </div>
              <div style={{ width: '388px' }}>
                <StepCard {...steps[1]} delay={0.1} />
              </div>
              <div style={{ width: '388px' }}>
                <StepCard {...steps[2]} delay={0.2} />
              </div>
              <div style={{ width: '388px' }}>
                <StepCard {...steps[3]} delay={0.3} />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                backgroundColor: '#59AD3B',
                borderRadius: '24px',
                border: '1px solid #B7DAAA',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden',
                width: '392px',
                height: '616px',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  right: '-163px',
                  bottom: '-113px',
                  width: '692px',
                  height: '404px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                }}
              >
                <div style={{ transform: 'rotate(90deg) scaleY(-1)', width: '404px', height: '692px' }}>
                  <img src="/images/steps-spot-green.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none' }} />
                </div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  left: '40px',
                  top: '8px',
                  width: '308.152px',
                  height: '630px',
                  pointerEvents: 'none',
                }}
              >
                <img src="/images/steps-phone.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  bottom: '-666.48px',
                  width: '1150.475px',
                  height: '1150.475px',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                }}
              >
                <div style={{ transform: 'rotate(225deg)', width: '813.509px', height: '813.509px' }}>
                  <img src="/images/steps-spot-light.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none' }} />
                </div>
              </div>

              <a
                href={SUPPLIER_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '196px',
                  height: '56px',
                  padding: '16px 20px',
                  backgroundColor: '#59AD3B',
                  color: '#FFFFFF',
                  borderRadius: '16px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  cursor: 'pointer',
                  position: 'relative',
                  zIndex: 2,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                }}
              >
                Зарегистрироваться
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tablet 744 (Figma 744 steps frame: 3 cards in horizontal row) */}
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-1440:block max-744:hidden" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="mx-auto w-full max-w-[744px] px-[20px]">
          <ScaledFrame designWidth={704} designHeight={398}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                width: 704,
                height: 40,
                margin: 0,
                textAlign: 'left',
                fontSize: 36,
                lineHeight: '40px',
                fontWeight: 500,
                letterSpacing: '-1px',
                color: '#242424',
              }}
            >
              Всего 4 шага, чтобы начать продавать
            </motion.h2>

            {/* Cards strip (x=20,y=136,w=704,h=326). Card: 259x326, gap 8, horizontal scroll */}
            <div
              className="no-scrollbar"
              style={{
                marginTop: 32,
                width: 704,
                height: 326,
                overflowX: 'auto',
                overflowY: 'hidden',
                display: 'flex',
                gap: 8,
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {steps.map((s, idx) => (
                <motion.div
                  key={s.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  style={{
                    width: 259,
                    height: 326,
                    flexShrink: 0,
                    scrollSnapAlign: 'start',
                    backgroundColor: '#F7F7F7',
                    borderRadius: 24,
                    padding: 32,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 32,
                        backgroundColor: '#59AD3B',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        padding: 12,
                        boxSizing: 'border-box',
                      }}
                    >
                      <span style={{ color: '#FFFFFF', fontWeight: 400, fontSize: 16, lineHeight: '22px', letterSpacing: '-0.2px' }}>{s.number}</span>
                    </div>

                    <div style={{ fontSize: 18, lineHeight: '22px', fontWeight: 500, letterSpacing: '-0.2px', color: '#242424' }}>{s.title}</div>

                    <div style={{ color: '#848484', fontSize: 14, lineHeight: '22px', letterSpacing: '-0.2px', whiteSpace: 'pre-wrap' }}>{s.description}</div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 24 }}>
                    <img src="/images/steps-clock.svg" alt="" style={{ width: 24, height: 24 }} />
                    <span style={{ color: '#C1C1C1', fontSize: 16, lineHeight: '22px', fontWeight: 500 }}>{s.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScaledFrame>
        </div>
      </section>

      {/* Mobile 375 (Figma: 8389:34621) */}
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-744:block" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        {/* На ширинах 375..744 масштабируем размеры пропорционально ширине контента (335 в Figma) */}
        <div
          className="mx-auto w-full max-w-[744px] px-[20px]"
          style={
            {
              ['--steps-content-w' as any]: 'min(704px, calc(100vw - 40px))',
            } as React.CSSProperties
          }
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              width: '100%',
              margin: 0,
              textAlign: 'left',
              fontSize: 24,
              lineHeight: '28px',
              fontWeight: 500,
              letterSpacing: '-1px',
              color: '#242424',
            }}
          >
            Всего 4 шага, чтобы начать продавать
          </motion.h2>

          {/* Cards strip: x=20,y=152,w=335,h=326. Card: 250x326, gap 8 */}
          <div
            style={{
              marginTop: 32,
              width: '100%',
              height: 'calc(var(--steps-content-w) * 326 / 335)',
              overflowX: 'auto',
              overflowY: 'hidden',
              display: 'flex',
              gap: 8,
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {steps.map((s, idx) => (
              <motion.div
                key={`s-375-${s.number}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                style={{
                  width: 'calc(var(--steps-content-w) * 250 / 335)',
                  height: 'calc(var(--steps-content-w) * 326 / 335)',
                  flexShrink: 0,
                  scrollSnapAlign: 'start',
                  backgroundColor: '#F7F7F7',
                  borderRadius: 24,
                  padding: 32,
                  boxSizing: 'border-box',
                  display: 'grid',
                  gridTemplateRows: 'auto 1fr auto',
                  rowGap: 20,
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 32,
                      backgroundColor: '#59AD3B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 12,
                      boxSizing: 'border-box',
                    }}
                  >
                    <span style={{ color: '#FFFFFF', fontWeight: 400, fontSize: 16, lineHeight: '22px', letterSpacing: '-0.2px' }}>{s.number}</span>
                  </div>

                  <div style={{ fontSize: 18, lineHeight: '22px', fontWeight: 500, color: '#242424', letterSpacing: '-0.2px' }}>{s.title}</div>

                  <div style={{ color: '#848484', fontSize: 14, lineHeight: '22px', letterSpacing: '-0.2px', whiteSpace: 'pre-wrap' }}>{s.description}</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 24 }}>
                  <img src="/images/steps-clock.svg" alt="" style={{ width: 24, height: 24 }} />
                  <span style={{ color: '#C1C1C1', fontSize: 16, lineHeight: '22px', fontWeight: 500 }}>{s.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
