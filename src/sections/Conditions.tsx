import { motion } from 'framer-motion';
import ScaledFrame from '../components/ScaledFrame';

const Conditions = () => {
  return (
    <>
      {/* Desktop / 1440 */}
      <section id="conditions" className="bg-white rounded-[32px] mb-[8px] pt-[63px] pb-[63px] max-1200:hidden">
        <div className="mx-auto w-[1200px]">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px', marginBottom: '40px' }}>
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
              style={{ display: 'flex', gap: '24px', alignItems: 'center', paddingBottom: '16px' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#59AD3B',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  textDecoration: 'underline',
                }}
              >
                <img src="/images/conditions-file.svg" alt="" style={{ width: '10.667px', height: '10.667px' }} />
                Оферта
              </a>
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#59AD3B',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  textDecoration: 'underline',
                }}
              >
                <img src="/images/conditions-file.svg" alt="" style={{ width: '10.667px', height: '10.667px' }} />
                Инструкция по регистрации
              </a>
            </motion.div>
          </div>

          <div className="grid" style={{ gridTemplateColumns: '288px 288px 288px 288px', columnGap: '16px', rowGap: '16px' }}>
            {/* Card 1 (green) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                width: '288px',
                height: '390px',
                backgroundColor: '#59AD3B',
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
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '20px' }}>Комиссия</div>
              <div style={{ marginTop: '8px', color: '#FFFFFF', fontSize: '20px', lineHeight: '24px', fontWeight: 500 }}>
                Фиксированная комиссия 31,5% <br />
                от цены товара, <br />
                в которую включены логистика, хранение <br />
                и упаковка
              </div>
            </div>
            {/* Art area: keep absolute positioning relative to the flexible remaining space (matches Figma layout) */}
            <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
              {/* Spot */}
              <div style={{ position: 'absolute', left: '-99px', bottom: '-267.3px', width: '470.302px', height: '470.302px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: '384px', height: '384px' }}>
                  <img src="/images/conditions-spot-card1.svg" alt="" style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
              {/* Illustration (241x241 rectangle with image fill crop) */}
              <div style={{ position: 'absolute', left: '12px', bottom: '-81.21px', width: '241px', height: '241px', overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                <img src="/images/conditions-card1-illustration.png" alt="" style={{ position: 'absolute', left: '11.87%', top: '16.01%', width: '88.14%', height: '77.46%', maxWidth: 'none' }} />
              </div>
            </div>
          </motion.div>

            {/* Card 2 */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              width: '288px',
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
              <div style={{ color: '#848484', fontSize: '14px', lineHeight: '20px' }}>Выплаты</div>
              <div style={{ marginTop: '8px', color: '#242424', fontSize: '20px', lineHeight: '24px', fontWeight: 500 }}>
                Выплаты&nbsp;в течение <br />
                3 рабочих дней&nbsp;после отчёта о продажах
              </div>
            </div>
            {/* Art area: keep absolute positioning relative to the flexible remaining space (matches Figma layout) */}
            <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
              {/* Spot */}
              <div style={{ position: 'absolute', left: '-99px', bottom: '-267.3px', width: '470.302px', height: '470.302px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: '384px', height: '384px' }}>
                  <img src="/images/conditions-spot-card2.svg" alt="" style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
              {/* Main illustration */}
              <div style={{ position: 'absolute', left: '12px', bottom: '-81.21px', width: '241px', height: '241px', overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                {/* Figma (8423:31331): left 7.65%, top 7.79%, size 92.18% */}
                <img src="/images/conditions-card2-illustration.png" alt="" style={{ position: 'absolute', left: '7.65%', top: '7.79%', width: '92.18%', height: '92.18%', maxWidth: 'none' }} />
              </div>
              {/* Small badge */}
              <div style={{ position: 'absolute', right: '-23.79px', bottom: '104.21px', width: '110.787px', height: '110.787px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 3 }}>
                <div style={{ transform: 'rotate(15deg)', width: '90.457px', height: '90.457px', overflow: 'hidden' }}>
                  {/* Figma (8423:31331): left 3.06%, top 11.42%, size 100% */}
                  <img src="/images/conditions-card2-illustration.png" alt="" style={{ position: 'absolute', left: '3.06%', top: '11.42%', width: '100%', height: '100%', maxWidth: 'none' }} />
                </div>
              </div>
            </div>
          </motion.div>

            {/* Card 3 */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              width: '288px',
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
              <div style={{ color: '#848484', fontSize: '14px', lineHeight: '20px' }}>Продвижение</div>
              <div style={{ marginTop: '8px', color: '#242424', fontSize: '20px', lineHeight: '24px', fontWeight: 500 }}>
                Полное сопровождение <br />
                и продвижение
              </div>
            </div>
            {/* Art area: keep absolute positioning relative to the flexible remaining space (matches Figma layout) */}
            <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
              {/* Spot */}
              <div style={{ position: 'absolute', left: '-99px', bottom: '-267.3px', width: '470.302px', height: '470.302px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: '384px', height: '384px' }}>
                  <img src="/images/conditions-spot-card3.svg" alt="" style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
              {/* Illustration */}
              <div style={{ position: 'absolute', left: '12px', bottom: '-81.21px', width: '241px', height: '241px', overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                <img src="/images/conditions-card3-illustration.png" alt="" style={{ position: 'absolute', left: '12.54%', top: '11.6%', width: '87.39%', height: '76.8%', maxWidth: 'none' }} />
              </div>
            </div>
          </motion.div>

            {/* Card 4 */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              width: '288px',
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
              <div style={{ color: '#848484', fontSize: '14px', lineHeight: '20px' }}>Логистика</div>
              <div style={{ marginTop: '8px', color: '#242424', fontSize: '20px', lineHeight: '24px', fontWeight: 500 }}>
                Логистика под ключ — экономия времени <br />
                и ресурсов
              </div>
            </div>
            {/* Art area: keep absolute positioning relative to the flexible remaining space (matches Figma layout) */}
            <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
              {/* Spot */}
              <div style={{ position: 'absolute', left: '-99px', bottom: '-267.3px', width: '470.302px', height: '470.302px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: '384px', height: '384px' }}>
                  <img src="/images/conditions-spot-card4.svg" alt="" style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
              {/* Main illustration */}
              <div style={{ position: 'absolute', left: '12px', bottom: '-81.21px', width: '241px', height: '241px', overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                <img src="/images/conditions-card4-illustration.png" alt="" style={{ position: 'absolute', left: '-3.53%', top: '-1.75%', width: '107.06%', height: '107.06%', maxWidth: 'none' }} />
              </div>
              {/* Plane */}
              <div style={{ position: 'absolute', right: '-23.79px', bottom: '104.21px', width: '110.787px', height: '110.787px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 3 }}>
                <div style={{ transform: 'rotate(15deg)', width: '90.457px', height: '90.457px', overflow: 'hidden' }}>
                  <img src="/images/conditions-card4-plane.png" alt="" style={{ position: 'absolute', left: '-6.06%', top: '-2.06%', width: '112.21%', height: '112.21%', maxWidth: 'none' }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Tablet 744 (Figma: 4 cards 2x2, 348x360) */}
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-1200:block max-375:hidden" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="mx-auto w-full max-w-[744px] px-[20px]">
          {/* Content: 704x852 (8389:34833) */}
          <ScaledFrame designWidth={704} designHeight={852}>
            {/* Heading 704x84: title + links below */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ width: 704, height: 84, position: 'relative' }}
            >
              <div style={{ width: 704, height: 40, fontSize: 36, lineHeight: '40px', fontWeight: 500, letterSpacing: '-1px', color: '#242424' }}>
                Условия сотрудничества
              </div>
              <div style={{ position: 'absolute', left: 0, top: 60, display: 'flex', gap: 24, height: 24, alignItems: 'center' }}>
                <a
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    color: '#59AD3B',
                    fontSize: 16,
                    fontWeight: 500,
                    lineHeight: '24px',
                    textDecoration: 'underline',
                  }}
                >
                  <img src="/images/conditions-file.svg" alt="" style={{ width: 10.667, height: 10.667 }} />
                  Оферта
                </a>
                <a
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    color: '#59AD3B',
                    fontSize: 16,
                    fontWeight: 500,
                    lineHeight: '24px',
                    textDecoration: 'underline',
                  }}
                >
                  <img src="/images/conditions-file.svg" alt="" style={{ width: 10.667, height: 10.667 }} />
                  Инструкция по регистрации
                </a>
              </div>
            </motion.div>

            {/* Cards grid 704x744, gap 8 */}
            <div style={{ marginTop: 40, width: 704, display: 'grid', gridTemplateColumns: '348px 348px', columnGap: 8, rowGap: 8 }}>
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  width: 348,
                  height: 360,
                  backgroundColor: '#59AD3B',
                  borderRadius: 24,
                  padding: 24,
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box',
                }}
              >
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: '20px' }}>Комиссия</div>
                  <div style={{ marginTop: 8, color: '#FFFFFF', fontSize: 20, lineHeight: '24px', fontWeight: 500 }}>
                    Фиксированная комиссия 31,5% <br />
                    от цены товара, <br />
                    в которую включены логистика, хранение <br />
                    и упаковка
                  </div>
                </div>
                <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
                  {/* Match Figma 744 (8389:34833): left=-99, bottom=-267.3 */}
                  <div style={{ position: 'absolute', left: -99, bottom: -267.3, width: 470.302, height: 470.302, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                    <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: 384, height: 384 }}>
                      <img src="/images/conditions-spot-card1.svg" alt="" style={{ width: '100%', height: '100%' }} />
                    </div>
                  </div>
                  {/* Match Figma 744: bottom=-81.21 */}
                  <div style={{ position: 'absolute', left: 12, bottom: -81.21, width: 241, height: 241, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                    <img src="/images/conditions-card1-illustration.png" alt="" style={{ position: 'absolute', left: '11.87%', top: '16.01%', width: '88.14%', height: '77.46%', maxWidth: 'none' }} />
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
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
                  boxSizing: 'border-box',
                }}
              >
                <div>
                  <div style={{ color: '#848484', fontSize: 14, lineHeight: '20px' }}>Выплаты</div>
                  <div style={{ marginTop: 8, color: '#242424', fontSize: 20, lineHeight: '24px', fontWeight: 500 }}>
                    Выплаты&nbsp;в течение <br />
                    3 рабочих дней&nbsp;после отчёта о продажах
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

              {/* Card 3 */}
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
                  boxSizing: 'border-box',
                }}
              >
                <div>
                  <div style={{ color: '#848484', fontSize: 14, lineHeight: '20px' }}>Продвижение</div>
                  <div style={{ marginTop: 8, color: '#242424', fontSize: 20, lineHeight: '24px', fontWeight: 500 }}>
                    Полное сопровождение <br />
                    и продвижение
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

              {/* Card 4 */}
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
                  boxSizing: 'border-box',
                }}
              >
                <div>
                  <div style={{ color: '#848484', fontSize: 14, lineHeight: '20px' }}>Логистика</div>
                  <div style={{ marginTop: 8, color: '#242424', fontSize: 20, lineHeight: '24px', fontWeight: 500 }}>
                    Логистика под ключ — экономия времени <br />
                    и ресурсов
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
          </ScaledFrame>
      </div>
    </section>

      {/* Mobile 375 (Figma: 8389:34626) */}
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-375:block" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="mx-auto w-full max-w-[375px] px-[20px]">
          {/* Heading: Frame 2087328001 (w=335,h=72) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ width: 335 }}
          >
            <div style={{ width: 335, fontSize: 24, lineHeight: '28px', fontWeight: 500, letterSpacing: '-1px', color: '#242424' }}>Условия сотрудничества</div>
            <div style={{ marginTop: 20, display: 'flex', gap: 20, alignItems: 'center' }}>
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#59AD3B',
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: '24px',
                  textDecoration: 'underline',
                }}
              >
                <img src="/images/conditions-file.svg" alt="" style={{ width: 10.667, height: 10.667 }} />
                Оферта
              </a>
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#59AD3B',
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: '24px',
                  textDecoration: 'underline',
                }}
              >
                <img src="/images/conditions-file.svg" alt="" style={{ width: 10.667, height: 10.667 }} />
                Инструкция по регистрации
              </a>
            </div>
          </motion.div>

          {/* Cards stack: Frame 2087328004 (w=335,h=1184), gap 8 */}
          <div style={{ marginTop: 32, width: 335, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* Card 1 (green): 335x290 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                width: 335,
                height: 290,
                backgroundColor: '#59AD3B',
                borderRadius: 24,
                padding: 24,
                overflow: 'hidden',
                position: 'relative',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: '22px', letterSpacing: '-0.2px' }}>Комиссия</div>
                <div style={{ marginTop: 8, color: '#FFFFFF', fontSize: 18, lineHeight: '22px', fontWeight: 500, letterSpacing: '-0.2px' }}>
                  Фиксированная комиссия 31,5% от цены товара, в которую включены логистика, хранение <br />и упаковка
                </div>
              </div>

              <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
                {/* Spot */}
                <div style={{ position: 'absolute', left: -99, bottom: -267.3, width: 470.302, height: 470.302, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                  <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: 384, height: 384 }}>
                    <img src="/images/conditions-spot-card1.svg" alt="" style={{ width: '100%', height: '100%' }} />
                  </div>
                </div>
                {/* Illustration crop (mobile 375) */}
                <div style={{ position: 'absolute', left: 12, bottom: -81.21, width: 241, height: 241, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                  <img src="/images/conditions-card1-illustration.png" alt="" style={{ position: 'absolute', left: '19.42%', top: '16.01%', width: '80.65%', height: '70.88%', maxWidth: 'none' }} />
                </div>
              </div>
            </motion.div>

            {/* Card 2 (payouts): 335x290 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              style={{
                width: 335,
                height: 290,
                backgroundColor: '#F7F7F7',
                borderRadius: 24,
                padding: 24,
                overflow: 'hidden',
                position: 'relative',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ color: '#848484', fontSize: 14, lineHeight: '22px', letterSpacing: '-0.2px' }}>Выплаты</div>
                <div style={{ marginTop: 8, color: '#242424', fontSize: 18, lineHeight: '22px', fontWeight: 500, letterSpacing: '-0.2px' }}>
                  Выплаты&nbsp;в течение 3 рабочих дней&nbsp;после отчёта о продажах
                </div>
              </div>

              <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
                {/* Spot */}
                <div style={{ position: 'absolute', left: -99, bottom: -267.3, width: 470.302, height: 470.302, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                  <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: 384, height: 384 }}>
                    <img src="/images/conditions-spot-card2.svg" alt="" style={{ width: '100%', height: '100%' }} />
                  </div>
                </div>
                {/* Main illustration */}
                <div style={{ position: 'absolute', left: 12, bottom: -81.21, width: 241, height: 241, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                  <img src="/images/conditions-card2-illustration.png" alt="" style={{ position: 'absolute', left: '7.65%', top: '7.79%', width: '92.18%', height: '92.18%', maxWidth: 'none' }} />
                </div>
                {/* Badge: right 0.21, bottom 65.58, size 110.787 (rot 15deg) */}
                <div style={{ position: 'absolute', right: 0.21, bottom: 65.58, width: 110.787, height: 110.787, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 3 }}>
                  <div style={{ transform: 'rotate(15deg)', width: 90.457, height: 90.457, overflow: 'hidden' }}>
                    <img src="/images/conditions-card2-illustration.png" alt="" style={{ position: 'absolute', left: '3.06%', top: '11.42%', width: '100%', height: '100%', maxWidth: 'none' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 (promotion): 335x290 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                width: 335,
                height: 290,
                backgroundColor: '#F7F7F7',
                borderRadius: 24,
                padding: 24,
                overflow: 'hidden',
                position: 'relative',
                boxSizing: 'border-box',
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
                {/* Spot */}
                <div style={{ position: 'absolute', left: -99, bottom: -267.3, width: 470.302, height: 470.302, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                  <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: 384, height: 384 }}>
                    <img src="/images/conditions-spot-card3.svg" alt="" style={{ width: '100%', height: '100%' }} />
                  </div>
                </div>
              </div>

              {/* Illustration: bottom -48.64, centered */}
              <div style={{ position: 'absolute', left: '50%', bottom: -48.64, width: 241, height: 241, transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 2, overflow: 'hidden' }}>
                <img src="/images/conditions-card3-illustration.png" alt="" style={{ position: 'absolute', left: '12.54%', top: '11.6%', width: '87.39%', height: '76.8%', maxWidth: 'none' }} />
              </div>
            </motion.div>

            {/* Card 4 (logistics): 335x290 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{
                width: 335,
                height: 290,
                backgroundColor: '#F7F7F7',
                borderRadius: 24,
                padding: 24,
                overflow: 'hidden',
                position: 'relative',
                boxSizing: 'border-box',
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
                {/* Spot */}
                <div style={{ position: 'absolute', left: -99, bottom: -267.3, width: 470.302, height: 470.302, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                  <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: 384, height: 384 }}>
                    <img src="/images/conditions-spot-card4.svg" alt="" style={{ width: '100%', height: '100%' }} />
                  </div>
                </div>
                {/* Main illustration */}
                <div style={{ position: 'absolute', left: 12, bottom: -81.21, width: 241, height: 241, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
                  <img src="/images/conditions-card4-illustration.png" alt="" style={{ position: 'absolute', left: '-3.53%', top: '-1.75%', width: '107.06%', height: '107.06%', maxWidth: 'none' }} />
                </div>
                {/* Plane badge */}
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
