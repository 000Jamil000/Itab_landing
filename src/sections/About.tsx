import { motion } from 'framer-motion';
import LayoutContainer from '../components/LayoutContainer';

const About = () => {
  return (
    <>
      {/* Desktop / 1440 */}
      <section className="bg-white rounded-[32px] py-[80px] mb-[8px] max-744:hidden">
        <LayoutContainer>
        {/* Heading - 2 columns */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '40px',
            marginBottom: '40px',
            alignItems: 'flex-end',
          }}
          className="max-744:flex-col max-744:gap-[16px] max-744:items-start"
        >
          <motion.div 
            style={{ flex: 1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-h2" style={{ color: '#242424', lineHeight: '40px', fontSize: '36px', fontWeight: 500, letterSpacing: '-1px' }}>
              iTAB — это знак качества.{' '}
              <br />
              Ваш пропуск к аудитории,{' '}
              <br />
              которая доверяет экспертам
            </h2>
          </motion.div>
          <motion.div 
            style={{ flex: 1, display: 'flex', alignItems: 'center' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-body-16" style={{ color: '#848484', fontSize: '16px', lineHeight: '24px', letterSpacing: '-0.2px' }}>
              Ваш продукт получает знак доверия от реальных врачей и нутрициологов — это сразу повышает его ценность в глазах покупателей.
            </p>
          </motion.div>
        </div>

        {/* Cards - flex row with 3 items */}
        <div
          style={{ display: 'flex', flexDirection: 'row', gap: '16px', height: '513px' }}
          className="max-744:h-[430px] max-744:gap-[8px]"
        >
          {/* Big card with shield - takes 1/3 space */}
          <motion.div 
            style={{ 
              flex: 1,
              backgroundColor: '#F7F7F7',
              borderRadius: '24px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '513px',
              position: 'relative',
              overflow: 'hidden'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative', zIndex: 10 }}>
              <h3 className="text-h4" style={{ color: '#242424', fontSize: '26px', lineHeight: '28px', fontWeight: 500 }}>
                Подтверждаем,{' '}
                <br />
                что вам можно доверять
              </h3>
              <p style={{ color: '#848484', fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.2px', fontWeight: 400 }}>
                После проверки вы получаете статус безопасного бренда — покупатели чувствуют уверенность в качестве продукта и возвращаются снова.
              </p>
            </div>
            
            {/* Decorative elements */}
            <div style={{ position: 'relative', flex: 1 }}>
              {/* Light green spot - иконка сердца */}
              <div 
                style={{ 
                  position: 'absolute',
                  width: '470.302px',
                  height: '470.302px',
                  left: '-23px',
                  top: '61.38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: '384px', height: '384px' }}>
                  <img 
                    src="/images/about-spot-light.svg" 
                    alt="" 
                    style={{ 
                      width: '100%',
                      height: '100%',
                      opacity: 1
                    }}
                  />
                </div>
              </div>
              
              {/* Main shield image */}
              <div 
                style={{
                  position: 'absolute',
                  width: '304.214px',
                  height: '304.214px',
                  left: '11px',
                  bottom: '-81.21px',
                  overflow: 'hidden',
                  zIndex: 2
                }}
              >
                <img 
                  src="/images/about-shield-card.png" 
                  alt="Shield" 
                  style={{ 
                    position: 'absolute',
                    left: '-11.56%',
                    top: '-10.61%',
                    width: '123.11%',
                    height: '123.11%',
                    maxWidth: 'none'
                  }}
                />
              </div>
              
              {/* Small decorative badge */}
              <div 
                style={{
                  position: 'absolute',
                  width: '139.96px',
                  height: '139.96px',
                  right: '-26.04px',
                  bottom: '153.04px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1
                }}
              >
                <div style={{ transform: 'rotate(15deg)', width: '114.277px', height: '114.277px' }}>
                  <img 
                    src="/images/about-badge.png" 
                    alt="" 
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: '50% 50%'
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Anna card */}
          <motion.div 
            style={{ 
              flex: 1,
              borderRadius: '16px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              height: '513px'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background image */}
            <img 
              src="/images/expert-anna.jpg" 
              alt="Анна Государева" 
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '16px'
              }}
            />
            
            {/* Green heart overlay icon */}
            <div 
              style={{
                position: 'absolute',
                width: '692px',
                height: '404px',
                right: '-165.33px',
                bottom: '-215px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none'
              }}
            >
              <div style={{ transform: 'rotate(90deg) scaleY(-1)', width: '404px', height: '692px' }}>
                <img 
                  src="/images/about-spot-green.svg" 
                  alt="" 
                  style={{ 
                    width: '100%',
                    height: '100%',
                    maxWidth: 'none'
                  }}
                />
              </div>
            </div>
              
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h4 className="text-h5" style={{ color: '#FFFFFF', fontSize: '20px', lineHeight: '24px', fontWeight: 500 }}>
                Анна Государева
              </h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', lineHeight: '20px', fontWeight: 400 }}>
                Руководитель экспернто-медицинской комиссии iTAB, Нутрициолог
              </p>
            </div>
          </motion.div>

          {/* Vladimir card */}
          <motion.div 
            style={{ 
              flex: 1,
              borderRadius: '16px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              height: '513px'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Background image */}
            <img 
              src="/images/expert-vladimir.jpg" 
              alt="Владимир Попов" 
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '16px'
              }}
            />
            
            {/* Green heart overlay icon */}
            <div 
              style={{
                position: 'absolute',
                width: '692px',
                height: '404px',
                right: '-165px',
                bottom: '-215px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none'
              }}
            >
              <div style={{ transform: 'rotate(90deg) scaleY(-1)', width: '404px', height: '692px' }}>
                <img 
                  src="/images/about-spot-green.svg" 
                  alt="" 
                  style={{ 
                    width: '100%',
                    height: '100%',
                    maxWidth: 'none'
                  }}
                />
              </div>
            </div>
              
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h4 className="text-h5" style={{ color: '#FFFFFF', fontSize: '20px', lineHeight: '24px', fontWeight: 500 }}>
                Владимир Попов
              </h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', lineHeight: '20px', fontWeight: 400 }}>
                Сооснователь и медицинский директор iTAB, Нутрициолог, Невролог
              </p>
            </div>
          </motion.div>
        </div>
        </LayoutContainer>
      </section>

      {/* Tablet 744 (Figma: 8389:34770) */}
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-744:block max-375:hidden" style={{ paddingTop: '64px', paddingBottom: '94px' }}>
        <div className="mx-auto w-full max-w-[744px] px-[20px]">
          {/* Content: 704x606 */}
          <div style={{ width: '704px' }}>
            {/* Heading: 704x144 */}
            <div style={{ width: '704px', height: '144px' }}>
              <h2 style={{ margin: 0, fontSize: '36px', lineHeight: '40px', fontWeight: 500, letterSpacing: '-1px', color: '#242424' }}>
                iTAB — это знак качества. Ваш пропуск <br />
                к аудитории, которая доверяет экспертам
              </h2>
              <p style={{ margin: 0, marginTop: '16px', fontSize: '16px', lineHeight: '24px', letterSpacing: '-0.2px', color: '#848484' }}>
                Ваш продукт получает знак доверия от реальных врачей и нутрициологов — это сразу повышает его ценность в глазах покупателей.
              </p>
            </div>

            {/* Cards row: 704x430, gap 8 */}
            <div style={{ marginTop: '32px', display: 'flex', gap: '8px', width: '704px', height: '430px' }}>
              {/* Card 1: 229.333x430 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  width: '229.333px',
                  height: '430px',
                  backgroundColor: '#F7F7F7',
                  borderRadius: '24px',
                  padding: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3 style={{ margin: 0, fontSize: '20px', lineHeight: '24px', fontWeight: 500, color: '#242424' }}>
                    Подтверждаем,
                    <br />
                    что вам можно доверять
                  </h3>
                  <p style={{ margin: 0, marginTop: '12px', fontSize: '14px', lineHeight: '20px', color: '#848484' }}>
                    После проверки вы получаете статус безопасного бренда — покупатели чувствуют уверенность в качестве продукта и возвращаются снова.
                  </p>
                </div>

                {/* Art block (744 metadata): Frame 2087327982 is 181.333x150 within inner content */}
                <div style={{ position: 'relative', width: '181.333px', height: '150px' }}>
                  {/* Green spot: icon_m_LoveFill (470.302). Positioning matches the visual from desktop, but constrained to 744 card. */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-23px',
                      bottom: '-267.3px',
                      width: '470.302px',
                      height: '470.302px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      pointerEvents: 'none',
                      zIndex: 1,
                    }}
                  >
                    <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: '384px', height: '384px' }}>
                      <img src="/images/about-spot-light.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none', display: 'block' }} />
                    </div>
                  </div>

                  {/* Main rectangle (197x197) at x=-7.2448, y=22 */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-7.245px',
                      top: '22px',
                      width: '197px',
                      height: '197px',
                      overflow: 'hidden',
                      pointerEvents: 'none',
                      zIndex: 2,
                      borderRadius: '24px',
                    }}
                  >
                    <img src="/images/about-shield-card.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>

                  {/* Small badge (90.670x90.670) at x=121.1566, y=-30 */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '121.157px',
                      top: '-30px',
                      width: '90.67px',
                      height: '90.67px',
                      pointerEvents: 'none',
                      zIndex: 3,
                      overflow: 'hidden',
                      borderRadius: '24px',
                    }}
                  >
                    <img src="/images/about-badge.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                </div>
              </motion.div>

              {/* Card 2: 229.333x430 (Anna) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                style={{
                  width: '229.333px',
                  height: '430px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px',
                }}
              >
                <img
                  src="/images/expert-anna.jpg"
                  alt="Анна Государева"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
                />
                {/* Green spot overlay (tablet 744): must be visible inside the cropped photo */}
                <div
                  style={{
                    position: 'absolute',
                    right: '-110px',
                    bottom: '-140px',
                    width: '560px',
                    height: '327px',
                    pointerEvents: 'none',
                    zIndex: 1,
                    opacity: 1,
                  }}
                >
                  <div style={{ transform: 'rotate(90deg) scaleY(-1)', width: '327px', height: '560px' }}>
                    <img src="/images/about-spot-green.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none', display: 'block' }} />
                  </div>
                </div>
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ fontSize: '16px', lineHeight: '20px', fontWeight: 500, color: '#FFFFFF' }}>Анна Государева</div>
                  <div style={{ fontSize: '12px', lineHeight: '16px', color: 'rgba(255,255,255,0.6)' }}>
                    Руководитель экспернто-медицинской комиссии iTAB, Нутрициолог
                  </div>
                </div>
              </motion.div>

              {/* Card 3: 229.333x430 (Vladimir) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  width: '229.333px',
                  height: '430px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px',
                }}
              >
                <img
                  src="/images/expert-vladimir.jpg"
                  alt="Владимир Попов"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
                />
                {/* Green spot overlay (tablet 744): must be visible inside the cropped photo */}
                <div
                  style={{
                    position: 'absolute',
                    right: '-110px',
                    bottom: '-140px',
                    width: '560px',
                    height: '327px',
                    pointerEvents: 'none',
                    zIndex: 1,
                    opacity: 1,
                  }}
                >
                  <div style={{ transform: 'rotate(90deg) scaleY(-1)', width: '327px', height: '560px' }}>
                    <img src="/images/about-spot-green.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none', display: 'block' }} />
                  </div>
                </div>
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ fontSize: '16px', lineHeight: '20px', fontWeight: 500, color: '#FFFFFF' }}>Владимир Попов</div>
                  <div style={{ fontSize: '12px', lineHeight: '16px', color: 'rgba(255,255,255,0.6)' }}>
                    Сооснователь и медицинский директор iTAB, Нутрициолог, Невролог
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile 375 (Figma: 8389:34566) */}
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-375:block" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="mx-auto w-full max-w-[375px] px-[20px]">
          {/* Heading (x=20,y=64,w=335,h=166) */}
          <div style={{ width: 335 }}>
            <h2 style={{ margin: 0, fontSize: 24, lineHeight: '28px', fontWeight: 500, letterSpacing: '-1px', color: '#242424' }}>
              iTAB — это знак качества. <br />
              Ваш пропуск к аудитории, <br />
              которая доверяет экспертам
            </h2>
            <p style={{ margin: 0, marginTop: 16, fontSize: 14, lineHeight: '22px', letterSpacing: '-0.2px', color: '#848484' }}>
              Ваш продукт получает знак доверия от реальных врачей и нутрициологов — это сразу повышает <br />
              его ценность в глазах покупателей.
            </p>
          </div>

          {/* Cards container (x=20,y=262,w=335,h=714.362, gap 8) */}
          <div style={{ marginTop: 32, width: 335, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* Card 1: 335x380 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                width: 335,
                height: 380,
                backgroundColor: '#F7F7F7',
                borderRadius: 24,
                padding: 24,
                overflow: 'hidden',
                position: 'relative',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ fontSize: 18, lineHeight: '22px', fontWeight: 500, letterSpacing: '-0.2px', color: '#242424' }}>
                  Подтверждаем, <br />
                  что вам можно доверять
                </div>
                <div style={{ fontSize: 14, lineHeight: '22px', letterSpacing: '-0.2px', color: '#848484' }}>
                  После проверки вы получаете статус безопасного бренда — покупатели чувствуют уверенность в качестве продукта и возвращаются снова.
                </div>
              </div>

              {/* Art block (fills remaining space) */}
              <div style={{ position: 'relative', flex: '1 0 0', width: '100%' }}>
                {/* Spot: icon_m_LoveFill (x=-23,y=61.38,w=470.302,h=470.302) */}
                <div style={{ position: 'absolute', left: -23, top: 61.38, width: 470.302, height: 470.302, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
                  <div style={{ transform: 'rotate(15deg) scaleY(-1)', width: 384, height: 384 }}>
                    <img src="/images/about-spot-light.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none', display: 'block' }} />
                  </div>
                </div>

                {/* Main rectangle: x=27, bottom=-69, w=234, h=233, crop */}
                <div style={{ position: 'absolute', left: 27, bottom: -69, width: 234, height: 233, overflow: 'hidden', pointerEvents: 'none', zIndex: 2, borderRadius: 24 }}>
                  <img
                    src="/images/about-shield-card.png"
                    alt=""
                    style={{
                      position: 'absolute',
                      left: '-11.56%',
                      top: '-10.61%',
                      width: '123.11%',
                      height: '123.11%',
                      maxWidth: 'none',
                    }}
                  />
                </div>

                {/* Badge: right=4.99, bottom=110.58, size=107.421, inner=87.709 rotated 15deg */}
                <div style={{ position: 'absolute', right: 4.99, bottom: 110.58, width: 107.421, height: 107.421, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 3 }}>
                  <div style={{ transform: 'rotate(15deg)', width: 87.709, height: 87.709, position: 'relative' }}>
                    <img src="/images/about-badge.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experts row: two cards 163.5 wide, gap 8 */}
            <div style={{ width: 335, display: 'flex', gap: 8 }}>
              {/* Anna: w=163.5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                style={{ width: 163.5, display: 'flex', flexDirection: 'column', gap: 8 }}
              >
                <div style={{ width: 163.5, height: 230, borderRadius: 16, overflow: 'hidden', position: 'relative' }}>
                  <img src="/images/expert-anna.jpg" alt="Анна Государева" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ paddingLeft: 4, paddingRight: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <div style={{ fontSize: 17, lineHeight: '20px', fontWeight: 500, letterSpacing: '-0.2px', color: '#242424' }}>Анна Государева</div>
                  <div style={{ fontSize: 12, lineHeight: '16px', color: '#848484' }}>Руководитель экспернто-медицинской комиссии iTAB, Нутрициолог</div>
                </div>
              </motion.div>

              {/* Vladimir: w=163.5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ width: 163.5, display: 'flex', flexDirection: 'column', gap: 8 }}
              >
                <div style={{ width: 163.5, height: 230, borderRadius: 16, overflow: 'hidden', position: 'relative' }}>
                  <img src="/images/expert-vladimir.jpg" alt="Владимир Попов" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ paddingLeft: 4, paddingRight: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <div style={{ fontSize: 17, lineHeight: '20px', fontWeight: 500, letterSpacing: '-0.2px', color: '#242424' }}>Владимир Попов</div>
                  <div style={{ fontSize: 12, lineHeight: '16px', color: '#848484' }}>
                    Сооснователь и медицинский директор iTAB, Нутрициолог, Невролог
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
