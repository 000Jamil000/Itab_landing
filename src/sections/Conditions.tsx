import { motion } from 'framer-motion';

const Conditions = () => {
  return (
    <section id="conditions" className="bg-white rounded-[32px] mb-[8px] pt-[63px] pb-[63px]">
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
  );
};

export default Conditions;
