import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-white rounded-[32px] py-[80px] mb-[8px]">
      <div className="mx-auto w-[1200px]">
        {/* Heading - 2 columns */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', marginBottom: '40px', alignItems: 'flex-end' }}>
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
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', height: '513px' }}>
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
      </div>
    </section>
  );
};

export default About;
