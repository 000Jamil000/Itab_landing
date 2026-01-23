import { motion } from 'framer-motion';
import ScaledFrame from '../components/ScaledFrame';
import { FOOTER_OFFER_SPECIALISTS_URL } from '../constants/links';

const Conditions = () => {
  return (
    <>
      {/* Desktop / 1440+ */}
      <section id="conditions" className="bg-white rounded-[32px] mb-[8px] pt-[80px] pb-[80px] max-1024:hidden">
        <div className="mx-auto w-[1200px]">
          {/* Header with title, description and oferta link */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <motion.h2 
                className="text-h2"
                style={{ color: '#242424' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Условия сотрудничества
              </motion.h2>
              
              <motion.div 
                style={{ display: 'flex', gap: '24px', alignItems: 'center' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <a
                  href={FOOTER_OFFER_SPECIALISTS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#59AD3B',
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '22px',
                    textDecoration: 'none',
                  }}
                >
                  <img src="/images/conditions-file.svg" alt="" style={{ width: '16.667px', height: '16.667px' }} />
                  Оферта
                </a>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                width: '650px',
                color: '#242424',
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: 400,
              }}
            >
              iTAB — платформа с лояльной аудиторией и экспертным сообществом специалистов, с прозрачными условиями сотрудничества без скрытых платежей.
            </motion.p>
          </div>

          {/* Cards section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Green banner card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                width: '100%',
                backgroundColor: '#59AD3B',
                borderRadius: '24px',
                padding: '24px 32px',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {/* Background decoration - white love splash */}
              <div style={{ position: 'absolute', left: '781px', top: '-83px', width: '470.302px', height: '470.302px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: '384px', height: '384px' }}>
                  <img src="/images/conditions-banner-love.svg" alt="" style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
              
              {/* Text */}
              <p style={{
                color: '#FFFFFF',
                fontSize: '20px',
                lineHeight: '24px',
                fontWeight: 500,
                position: 'relative',
                zIndex: 1,
              }}>
                У нас самая низкая комиссия среди маркетплейсов в нише Health & Wellness — всего 10%
              </p>

              {/* Thumbs up icon glass */}
              <div style={{ 
                position: 'absolute', 
                left: '1024px', 
                top: '50%', 
                transform: 'translateY(-50%) rotate(15deg)',
                width: '84.66px',
                height: '84.66px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  width: '84.66px',
                  height: '84.66px',
                  borderRadius: '28.221px',
                  backgroundColor: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(14.111px)',
                  border: '1.764px solid rgba(255,255,255,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img src="/images/conditions-thumbs-up.svg" alt="" style={{ width: '42.332px', height: '42.332px' }} />
                </div>
              </div>
            </motion.div>

            {/* 4 cards row */}
            <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', columnGap: '16px' }}>
              {/* Card 1 - Комиссия (now gray) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  height: '390px',
                  backgroundColor: '#F7F7F7',
                  borderRadius: '24px',
                  padding: '32px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ color: '#848484', fontSize: '14px', lineHeight: '18px' }}>Комиссия</div>
                  <div style={{ marginTop: '8px', color: '#242424', fontSize: '20px', lineHeight: '24px', fontWeight: 500 }}>
                    Фиксированная комиссия 33% покрывает все расходы сразу: комиссию iTAB (10%), логистику, хранение и упаковку
                  </div>
                </div>
                <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
                  <div style={{ position: 'absolute', left: '-99px', bottom: '-267.3px', width: '470.302px', height: '470.302px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                    <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: '384px', height: '384px' }}>
                      <img src="/images/conditions-spot-card2.svg" alt="" style={{ width: '100%', height: '100%' }} />
                    </div>
                  </div>
                  <div style={{ position: 'absolute', left: '12px', bottom: '-81.21px', width: '241px', height: '241px', overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                    <img src="/images/conditions-card1-illustration.png" alt="" style={{ position: 'absolute', left: '11.87%', top: '16.01%', width: '88.14%', height: '77.46%', maxWidth: 'none' }} />
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Выплаты */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  height: '390px',
                  backgroundColor: '#F7F7F7',
                  borderRadius: '24px',
                  padding: '32px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ color: '#848484', fontSize: '14px', lineHeight: '18px' }}>Выплаты</div>
                  <div style={{ marginTop: '8px', color: '#242424', fontSize: '20px', lineHeight: '24px', fontWeight: 500 }}>
                    Выплаты в течение <br />3 рабочих дней после отчёта о продажах
                  </div>
                </div>
                <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
                  <div style={{ position: 'absolute', left: '-99px', bottom: '-267.3px', width: '470.302px', height: '470.302px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                    <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: '384px', height: '384px' }}>
                      <img src="/images/conditions-spot-card2.svg" alt="" style={{ width: '100%', height: '100%' }} />
                    </div>
                  </div>
                  <div style={{ position: 'absolute', left: '12px', bottom: '-81.21px', width: '241px', height: '241px', overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                    <img src="/images/conditions-card2-illustration.png" alt="" style={{ position: 'absolute', left: '7.65%', top: '7.79%', width: '92.18%', height: '92.18%', maxWidth: 'none' }} />
                  </div>
                  <div style={{ position: 'absolute', right: '-23.79px', bottom: '104.21px', width: '110.787px', height: '110.787px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 3 }}>
                    <div style={{ transform: 'rotate(15deg)', width: '90.457px', height: '90.457px', overflow: 'hidden' }}>
                      <img src="/images/conditions-card2-illustration.png" alt="" style={{ position: 'absolute', left: '3.06%', top: '11.42%', width: '100%', height: '100%', maxWidth: 'none' }} />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 - Продвижение */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  height: '390px',
                  backgroundColor: '#F7F7F7',
                  borderRadius: '24px',
                  padding: '32px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ color: '#848484', fontSize: '14px', lineHeight: '18px' }}>Продвижение</div>
                  <div style={{ marginTop: '8px', color: '#242424', fontSize: '20px', lineHeight: '24px', fontWeight: 500 }}>
                    Полное сопровождение <br />и продвижение
                  </div>
                </div>
                <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
                  <div style={{ position: 'absolute', left: '-99px', bottom: '-267.3px', width: '470.302px', height: '470.302px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                    <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: '384px', height: '384px' }}>
                      <img src="/images/conditions-spot-card3.svg" alt="" style={{ width: '100%', height: '100%' }} />
                    </div>
                  </div>
                  <div style={{ position: 'absolute', left: '12px', bottom: '-81.21px', width: '241px', height: '241px', overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                    <img src="/images/conditions-card3-illustration.png" alt="" style={{ position: 'absolute', left: '12.54%', top: '11.6%', width: '87.39%', height: '76.8%', maxWidth: 'none' }} />
                  </div>
                </div>
              </motion.div>

              {/* Card 4 - Логистика */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  height: '390px',
                  backgroundColor: '#F7F7F7',
                  borderRadius: '24px',
                  padding: '32px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ color: '#848484', fontSize: '14px', lineHeight: '18px' }}>Логистика</div>
                  <div style={{ marginTop: '8px', color: '#242424', fontSize: '20px', lineHeight: '24px', fontWeight: 500 }}>
                    Логистика под ключ — экономия времени <br />и ресурсов
                  </div>
                </div>
                <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
                  <div style={{ position: 'absolute', left: '-99px', bottom: '-267.3px', width: '470.302px', height: '470.302px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                    <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: '384px', height: '384px' }}>
                      <img src="/images/conditions-spot-card4.svg" alt="" style={{ width: '100%', height: '100%' }} />
                    </div>
                  </div>
                  <div style={{ position: 'absolute', left: '12px', bottom: '-81.21px', width: '241px', height: '241px', overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                    <img src="/images/conditions-card4-illustration.png" alt="" style={{ position: 'absolute', left: '-3.53%', top: '-1.75%', width: '107.06%', height: '107.06%', maxWidth: 'none' }} />
                  </div>
                  <div style={{ position: 'absolute', right: '-23.79px', bottom: '104.21px', width: '110.787px', height: '110.787px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 3 }}>
                    <div style={{ transform: 'rotate(15deg)', width: '90.457px', height: '90.457px', overflow: 'hidden' }}>
                      <img src="/images/conditions-card4-plane.png" alt="" style={{ position: 'absolute', left: '-6.06%', top: '-2.06%', width: '112.21%', height: '112.21%', maxWidth: 'none' }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tablet 744 */}
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-1024:block max-744:hidden" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="mx-auto w-full max-w-[744px] px-[20px]">
          <ScaledFrame designWidth={704} designHeight={920}>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ width: 704, display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 36, lineHeight: '40px', fontWeight: 500, letterSpacing: '-1px', color: '#242424' }}>
                  Условия сотрудничества
                </div>
                <a
                  href={FOOTER_OFFER_SPECIALISTS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    color: '#59AD3B',
                    fontSize: 16,
                    fontWeight: 500,
                    lineHeight: '22px',
                    textDecoration: 'none',
                  }}
                >
                  <img src="/images/conditions-file.svg" alt="" style={{ width: 16.667, height: 16.667 }} />
                  Оферта
                </a>
              </div>
              <p style={{ width: 650, color: '#242424', fontSize: 16, lineHeight: '24px', fontWeight: 400 }}>
                iTAB — платформа с лояльной аудиторией и экспертным сообществом специалистов, с прозрачными условиями сотрудничества без скрытых платежей.
              </p>
            </motion.div>

            {/* Cards */}
            <div style={{ marginTop: 40, width: 704, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {/* Green banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  width: 704,
                  backgroundColor: '#59AD3B',
                  borderRadius: 24,
                  padding: '24px 32px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <div style={{ position: 'absolute', left: 425, top: -83, width: 470.302, height: 470.302, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                  <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: 384, height: 384 }}>
                    <img src="/images/conditions-banner-love.svg" alt="" style={{ width: '100%', height: '100%' }} />
                  </div>
                </div>
                <p style={{ color: '#FFFFFF', fontSize: 20, lineHeight: '24px', fontWeight: 500, position: 'relative', zIndex: 1, width: 500 }}>
                  У нас самая низкая комиссия среди маркетплейсов в нише Health & Wellness — всего 10%
                </p>
                <div style={{ position: 'absolute', left: 565, top: '50%', transform: 'translateY(-50%) rotate(15deg)', width: 84.66, height: 84.66 }}>
                  <div style={{
                    width: 84.66,
                    height: 84.66,
                    borderRadius: 28.221,
                    backgroundColor: 'rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(14.111px)',
                    border: '1.764px solid rgba(255,255,255,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <img src="/images/conditions-thumbs-up.svg" alt="" style={{ width: 42.332, height: 42.332 }} />
                  </div>
                </div>
              </motion.div>

              {/* Cards grid 2x2 */}
              <div style={{ display: 'grid', gridTemplateColumns: '348px 348px', gap: 8 }}>
                {/* Card 1 - Комиссия */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: 348,
                    height: 360,
                    backgroundColor: '#F7F7F7',
                    borderRadius: 24,
                    padding: 24,
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ color: '#848484', fontSize: 14, lineHeight: '18px' }}>Комиссия</div>
                    <div style={{ marginTop: 8, color: '#242424', fontSize: 20, lineHeight: '24px', fontWeight: 500 }}>
                      Фиксированная комиссия 33% покрывает все расходы сразу: комиссию iTAB (10%), логистику, хранение и упаковку
                    </div>
                  </div>
                  <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
                    <div style={{ position: 'absolute', left: -99, bottom: -267.3, width: 470.302, height: 470.302, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                      <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: 384, height: 384 }}>
                        <img src="/images/conditions-spot-card2.svg" alt="" style={{ width: '100%', height: '100%' }} />
                      </div>
                    </div>
                    <div style={{ position: 'absolute', left: 12, bottom: -81.21, width: 241, height: 241, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                      <img src="/images/conditions-card1-illustration.png" alt="" style={{ position: 'absolute', left: '11.87%', top: '16.01%', width: '88.14%', height: '77.46%', maxWidth: 'none' }} />
                    </div>
                  </div>
                </motion.div>

                {/* Card 2 - Выплаты */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  style={{
                    width: 348,
                    height: 360,
                    backgroundColor: '#F7F7F7',
                    borderRadius: 24,
                    padding: 24,
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ color: '#848484', fontSize: 14, lineHeight: '18px' }}>Выплаты</div>
                    <div style={{ marginTop: 8, color: '#242424', fontSize: 20, lineHeight: '24px', fontWeight: 500 }}>
                      Выплаты в течение <br />3 рабочих дней после отчёта <br />о продажах
                    </div>
                  </div>
                  <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
                    <div style={{ position: 'absolute', left: -99, bottom: -267.3, width: 470.302, height: 470.302, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                      <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: 384, height: 384 }}>
                        <img src="/images/conditions-spot-card2.svg" alt="" style={{ width: '100%', height: '100%' }} />
                      </div>
                    </div>
                    <div style={{ position: 'absolute', left: 12, bottom: -81.21, width: 241, height: 241, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                      <img src="/images/conditions-card2-illustration.png" alt="" style={{ position: 'absolute', left: '7.65%', top: '7.79%', width: '92.18%', height: '92.18%', maxWidth: 'none' }} />
                    </div>
                    <div style={{ position: 'absolute', right: -23.79, bottom: 104.21, width: 110.787, height: 110.787, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 3 }}>
                      <div style={{ transform: 'rotate(15deg)', width: 90.457, height: 90.457, overflow: 'hidden' }}>
                        <img src="/images/conditions-card2-illustration.png" alt="" style={{ position: 'absolute', left: '3.06%', top: '11.42%', width: '100%', height: '100%', maxWidth: 'none' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 3 - Продвижение */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{
                    width: 348,
                    height: 360,
                    backgroundColor: '#F7F7F7',
                    borderRadius: 24,
                    padding: 24,
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ color: '#848484', fontSize: 14, lineHeight: '18px' }}>Продвижение</div>
                    <div style={{ marginTop: 8, color: '#242424', fontSize: 20, lineHeight: '24px', fontWeight: 500 }}>
                      Полное сопровождение <br />и продвижение
                    </div>
                  </div>
                  <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
                    <div style={{ position: 'absolute', left: -99, bottom: -267.3, width: 470.302, height: 470.302, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                      <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: 384, height: 384 }}>
                        <img src="/images/conditions-spot-card3.svg" alt="" style={{ width: '100%', height: '100%' }} />
                      </div>
                    </div>
                    <div style={{ position: 'absolute', left: 12, bottom: -81.21, width: 241, height: 241, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                      <img src="/images/conditions-card3-illustration.png" alt="" style={{ position: 'absolute', left: '12.54%', top: '11.6%', width: '87.39%', height: '76.8%', maxWidth: 'none' }} />
                    </div>
                  </div>
                </motion.div>

                {/* Card 4 - Логистика */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  style={{
                    width: 348,
                    height: 360,
                    backgroundColor: '#F7F7F7',
                    borderRadius: 24,
                    padding: 24,
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ color: '#848484', fontSize: 14, lineHeight: '18px' }}>Логистика</div>
                    <div style={{ marginTop: 8, color: '#242424', fontSize: 20, lineHeight: '24px', fontWeight: 500 }}>
                      Логистика под ключ — экономия времени <br />и ресурсов
                    </div>
                  </div>
                  <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
                    <div style={{ position: 'absolute', left: -99, bottom: -267.3, width: 470.302, height: 470.302, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                      <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: 384, height: 384 }}>
                        <img src="/images/conditions-spot-card4.svg" alt="" style={{ width: '100%', height: '100%' }} />
                      </div>
                    </div>
                    <div style={{ position: 'absolute', left: 12, bottom: -81.21, width: 241, height: 241, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                      <img src="/images/conditions-card4-illustration.png" alt="" style={{ position: 'absolute', left: '-3.53%', top: '-1.75%', width: '107.06%', height: '107.06%', maxWidth: 'none' }} />
                    </div>
                    <div style={{ position: 'absolute', right: -23.79, bottom: 104.21, width: 110.787, height: 110.787, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 3 }}>
                      <div style={{ transform: 'rotate(15deg)', width: 90.457, height: 90.457, overflow: 'hidden' }}>
                        <img src="/images/conditions-card4-plane.png" alt="" style={{ position: 'absolute', left: '-6.06%', top: '-2.06%', width: '112.21%', height: '112.21%', maxWidth: 'none' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScaledFrame>
        </div>
      </section>

      {/* Mobile 375 */}
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-744:block" style={{ paddingTop: '56px', paddingBottom: '56px' }}>
        <div className="mx-auto w-full px-[20px]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            <div style={{ fontSize: 24, lineHeight: '28px', fontWeight: 500, letterSpacing: '-1px', color: '#242424' }}>
              Условия сотрудничества
            </div>
            <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
              <a
                href={FOOTER_OFFER_SPECIALISTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#59AD3B',
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: '22px',
                  textDecoration: 'none',
                }}
              >
                <img src="/images/conditions-file.svg" alt="" style={{ width: 16.667, height: 16.667 }} />
                Оферта
              </a>
            </div>
            <p style={{ color: '#242424', fontSize: 16, lineHeight: '24px', fontWeight: 400 }}>
              iTAB — платформа с лояльной аудиторией и экспертным сообществом специалистов, с прозрачными условиями сотрудничества без скрытых платежей.
            </p>
          </motion.div>

          {/* Cards stack */}
          <div style={{ marginTop: 32, width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* Green banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                width: '100%',
                backgroundColor: '#59AD3B',
                borderRadius: 24,
                padding: 24,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div style={{ position: 'absolute', right: '-349.3px', top: '50%', transform: 'translateY(-50%)', width: 470.302, height: 470.302, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: 384, height: 384 }}>
                  <img src="/images/conditions-banner-love.svg" alt="" style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
              <p style={{ color: '#FFFFFF', fontSize: 20, lineHeight: '24px', fontWeight: 500, position: 'relative', zIndex: 1, width: 226 }}>
                У нас самая низкая комиссия среди маркетплейсов в нише Health & Wellness — всего 10%
              </p>
              <div style={{ position: 'absolute', right: '-21.69px', top: 'calc(50% - 21.52px)', transform: 'translateY(-50%) rotate(15deg)', width: 84.66, height: 84.66 }}>
                <div style={{
                  width: 84.66,
                  height: 84.66,
                  borderRadius: 28.221,
                  backgroundColor: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(14.111px)',
                  border: '1.764px solid rgba(255,255,255,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img src="/images/conditions-thumbs-up.svg" alt="" style={{ width: 42.332, height: 42.332 }} />
                </div>
              </div>
            </motion.div>

            {/* Card 1 - Комиссия */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                width: '100%',
                height: 290,
                backgroundColor: '#F7F7F7',
                borderRadius: 24,
                padding: 24,
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ color: '#848484', fontSize: 14, lineHeight: '18px' }}>Комиссия</div>
                <div style={{ marginTop: 8, color: '#242424', fontSize: 20, lineHeight: '24px', fontWeight: 500 }}>
                  Фиксированная комиссия 33% покрывает все расходы сразу: комиссию iTAB (10%), логистику, хранение и упаковку
                </div>
              </div>
              <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
                <div style={{ position: 'absolute', left: -99, bottom: -267.3, width: 470.302, height: 470.302, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                  <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: 384, height: 384 }}>
                    <img src="/images/conditions-spot-card2.svg" alt="" style={{ width: '100%', height: '100%' }} />
                  </div>
                </div>
                <div style={{ position: 'absolute', left: 12, bottom: -81.21, width: 241, height: 241, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                  <img src="/images/conditions-card1-illustration.png" alt="" style={{ position: 'absolute', left: '11.87%', top: '16.01%', width: '88.14%', height: '77.46%', maxWidth: 'none' }} />
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Выплаты */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              style={{
                width: '100%',
                height: 290,
                backgroundColor: '#F7F7F7',
                borderRadius: 24,
                padding: 24,
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ color: '#848484', fontSize: 14, lineHeight: '22px', letterSpacing: '-0.2px' }}>Выплаты</div>
                <div style={{ marginTop: 8, color: '#242424', fontSize: 18, lineHeight: '22px', fontWeight: 500, letterSpacing: '-0.2px' }}>
                  Выплаты в течение 3 рабочих дней после отчёта о продажах
                </div>
              </div>
              <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
                <div style={{ position: 'absolute', left: -99, bottom: -267.3, width: 470.302, height: 470.302, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                  <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: 384, height: 384 }}>
                    <img src="/images/conditions-spot-card2.svg" alt="" style={{ width: '100%', height: '100%' }} />
                  </div>
                </div>
                <div style={{ position: 'absolute', left: 12, bottom: -81.21, width: 241, height: 241, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                  <img src="/images/conditions-card2-illustration.png" alt="" style={{ position: 'absolute', left: '7.65%', top: '7.79%', width: '92.18%', height: '92.18%', maxWidth: 'none' }} />
                </div>
                <div style={{ position: 'absolute', right: 0.21, bottom: 65.58, width: 110.787, height: 110.787, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 3 }}>
                  <div style={{ transform: 'rotate(15deg)', width: 90.457, height: 90.457, overflow: 'hidden' }}>
                    <img src="/images/conditions-card2-illustration.png" alt="" style={{ position: 'absolute', left: '3.06%', top: '11.42%', width: '100%', height: '100%', maxWidth: 'none' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Продвижение */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                width: '100%',
                height: 290,
                backgroundColor: '#F7F7F7',
                borderRadius: 24,
                padding: 24,
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ color: '#848484', fontSize: 14, lineHeight: '22px', letterSpacing: '-0.2px' }}>Продвижение</div>
                <div style={{ marginTop: 8, color: '#242424', fontSize: 18, lineHeight: '22px', fontWeight: 500, letterSpacing: '-0.2px' }}>
                  Полное сопровождение <br />и продвижение
                </div>
              </div>
              <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
                <div style={{ position: 'absolute', left: -99, bottom: -267.3, width: 470.302, height: 470.302, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                  <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: 384, height: 384 }}>
                    <img src="/images/conditions-spot-card3.svg" alt="" style={{ width: '100%', height: '100%' }} />
                  </div>
                </div>
              </div>
              <div style={{ position: 'absolute', left: '50%', bottom: -48.64, width: 241, height: 241, transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 2, overflow: 'hidden' }}>
                <img src="/images/conditions-card3-illustration.png" alt="" style={{ position: 'absolute', left: '12.54%', top: '11.6%', width: '87.39%', height: '76.8%', maxWidth: 'none' }} />
              </div>
            </motion.div>

            {/* Card 4 - Логистика */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{
                width: '100%',
                height: 290,
                backgroundColor: '#F7F7F7',
                borderRadius: 24,
                padding: 24,
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ color: '#848484', fontSize: 14, lineHeight: '22px', letterSpacing: '-0.2px' }}>Логистика</div>
                <div style={{ marginTop: 8, color: '#242424', fontSize: 18, lineHeight: '22px', fontWeight: 500, letterSpacing: '-0.2px' }}>
                  Логистика под ключ — экономия времени и ресурсов
                </div>
              </div>
              <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
                <div style={{ position: 'absolute', left: -99, bottom: -267.3, width: 470.302, height: 470.302, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                  <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: 384, height: 384 }}>
                    <img src="/images/conditions-spot-card4.svg" alt="" style={{ width: '100%', height: '100%' }} />
                  </div>
                </div>
                <div style={{ position: 'absolute', left: 12, bottom: -81.21, width: 241, height: 241, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                  <img src="/images/conditions-card4-illustration.png" alt="" style={{ position: 'absolute', left: '-3.53%', top: '-1.75%', width: '107.06%', height: '107.06%', maxWidth: 'none' }} />
                </div>
                <div style={{ position: 'absolute', right: 0.21, bottom: 65.58, width: 110.787, height: 110.787, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 3 }}>
                  <div style={{ transform: 'rotate(15deg)', width: 90.457, height: 90.457, overflow: 'hidden' }}>
                    <img src="/images/conditions-card4-plane.png" alt="" style={{ position: 'absolute', left: '-6.06%', top: '-2.06%', width: '112.21%', height: '112.21%', maxWidth: 'none' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Conditions;
