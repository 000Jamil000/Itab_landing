import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden"
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
        <div style={{ transform: 'rotate(336.274deg) scaleY(-1)', width: '1459.118px', height: '1459.118px' }}>
          <img src="/images/hero-spot.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none' }} />
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
  );
};

export default Hero;
