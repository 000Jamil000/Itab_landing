import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      {/* Desktop / 1440 */}
      <section
        className="relative overflow-hidden max-744:hidden"
        style={{
          backgroundColor: '#59AD3B',
          height: '760px',
        }}
      >
      {/* Background spot (icon_m_LoveFill) */}
      <div
        style={{
          position: 'absolute',
          right: '-147.89px',
          bottom: '-996.89px',
          width: '1922.894px',
          height: '1922.894px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <div style={{ transform: 'rotate(336.274deg) scaleY(-1)', width: '1459.118px', height: '1459.118px', position: 'relative' }}>
          {/* Match Figma nesting/insets for icon_m_LoveFill (8423:31267) */}
          <div
            style={{
              position: 'absolute',
              top: '16.67%',
              right: '11.59%',
              bottom: '14.44%',
              left: '8.33%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-43.77%',
                right: '-37.66%',
                bottom: '-43.77%',
                left: '-37.66%',
              }}
            >
              <img src="/images/hero-lovefill.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none', display: 'block' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Content container */}
      <div
        className="mx-auto w-full max-w-[1200px]"
        style={{
          paddingTop: '42px',
          height: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            width: '1200px',
            height: '676px',
          }}
        >
          {/* Offer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              width: '520px',
              height: '336px',
              marginTop: '170px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              alignItems: 'flex-start',
            }}
          >
            <h1
              className="text-h1"
              style={{
                width: '520px',
                color: '#FFFFFF',
                lineHeight: '48px',
                margin: 0,
              }}
            >
              Продавайте с iTAB — платформой для ответственных брендов здоровья и красоты
            </h1>
            <p
              style={{
                width: '520px',
                margin: 0,
                color: 'rgba(255,255,255,0.6)',
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-0.2px',
              }}
            >
              Простое подключение, прозрачные условия и поддержка
              <br />
              на каждом этапе
            </p>
            <button
              type="button"
              style={{
                width: '178px',
                height: '56px',
                padding: '16px 20px',
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: 'none',
                color: '#59AD3B',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
                cursor: 'pointer',
              }}
            >
              Начать продавать
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              width: '676px',
              height: '676px',
              position: 'relative',
              marginLeft: '4px',
            }}
          >
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
              <img
                src="/images/hero-image.png"
                alt=""
                style={{
                  position: 'absolute',
                  left: '-5.17%',
                  top: '-10.41%',
                  width: '110.47%',
                  height: '110.47%',
                  maxWidth: 'none',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      </section>

      {/* Tablet 744 (Figma: 8389:34730) */}
      <section
        className="relative overflow-hidden hidden max-744:block"
        style={{
          backgroundColor: '#59AD3B',
          height: '600px',
        }}
      >
        {/* Background spot (icon_m_LoveFill) — позиция/размер как в Inspect, форма/свечение через Figma insets */}
        <div
          style={{
            position: 'absolute',
            right: '-589.893px',
            bottom: '-1200.894px',
            width: '1459.118px',
            height: '1459.118px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          <div style={{ transform: 'rotate(336.274deg) scaleY(-1)', width: '1459.118px', height: '1459.118px', position: 'relative' }}>
            {/* Match Figma nesting/insets for icon_m_LoveFill (744) */}
            <div
              style={{
                position: 'absolute',
                top: '16.67%',
                right: '11.59%',
                bottom: '14.44%',
                left: '8.33%',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-43.77%',
                  right: '-37.66%',
                  bottom: '-43.77%',
                  left: '-37.66%',
                }}
              >
                <img src="/images/hero-lovefill.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>

        {/* 744 wrapper (exact макетная ширина). Внутри — абсолютные координаты как в Figma. */}
        <div className="mx-auto w-full max-w-[744px] h-full relative" style={{ zIndex: 1 }}>
          {/* Frame 2087327877: x=0, y=130, w=375, h=340 */}
          <div style={{ position: 'absolute', left: 0, top: 130, width: 375, height: 340 }}>
            {/* Offer: x=20, y=0, w=335, h=340 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                left: 20,
                top: 0,
                width: 335,
                height: 340,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                alignItems: 'flex-start',
              }}
            >
              <h1
                style={{
                  width: 335,
                  color: '#FFFFFF',
                  margin: 0,
                  fontSize: 36,
                  lineHeight: '40px',
                  fontWeight: 500,
                  letterSpacing: '-1px',
                }}
              >
                Продавайте с iTAB — платформой для ответственных брендов здоровья <br />
                и красоты
              </h1>
              <p
                style={{
                  width: 335,
                  margin: 0,
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: 16,
                  lineHeight: '22px',
                  letterSpacing: '-0.2px',
                }}
              >
                Простое подключение, прозрачные условия <br />
                и поддержка на каждом этапе
              </p>
              <button
                type="button"
                style={{
                  width: 178,
                  height: 56,
                  padding: '16px 20px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 16,
                  border: 'none',
                  color: '#59AD3B',
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: '24px',
                  cursor: 'pointer',
                }}
              >
                Начать продавать
              </button>
            </motion.div>

            {/* Image: x=324, y=-45, w=431, h=431 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{
                position: 'absolute',
                left: 324,
                top: -45,
                width: 431,
                height: 431,
                pointerEvents: 'none',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <img
                  src="/images/hero-image.png"
                  alt=""
                  style={{
                    position: 'absolute',
                    left: '-5.17%',
                    top: '-10.41%',
                    width: '110.47%',
                    height: '110.47%',
                    maxWidth: 'none',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
