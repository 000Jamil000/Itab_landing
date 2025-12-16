import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: '#59AD3B',
        borderRadius: '32px',
        padding: '80px 0',
      }}
    >
      {/* Background big spot */}
      <div
        style={{
          position: 'absolute',
          left: '418.37px',
          top: '-275px',
          width: '2080.228px',
          height: '2080.228px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <div style={{ transform: 'rotate(150deg)', width: '1522.833px', height: '1522.833px' }}>
          <img src="/images/cta-spot-light.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none' }} />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-0 relative" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '1200px',
            color: '#FFFFFF',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 className="text-h2" style={{ color: '#FFFFFF' }}>
              Начните продавать на iTAB
            </h2>
            <p style={{ width: '429px', color: '#FFFFFF', fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.2px' }}>
              Размещение вашего продукта на iTAB — это не просто продажа, это признание его соответствия высоким стандартам интегративного здоровья.
            </p>
          </div>

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
      </div>

      {/* Right illustration */}
      <div
        style={{
          position: 'absolute',
          right: '295px',
          top: 'calc(50% + 22.5px)',
          transform: 'translateY(-50%)',
          width: '697px',
          height: '697px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <img src="/images/cta-illustration.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Featured glass icon */}
      <div
        style={{
          position: 'absolute',
          left: '1419px',
          top: '66px',
          width: '140.837px',
          height: '140.837px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      >
        <div style={{ transform: 'rotate(15deg)', width: '114.993px', height: '114.993px' }}>
          <div
            style={{
              width: '108.644px',
              height: '108.644px',
              borderRadius: '36.215px',
              backgroundColor: 'rgba(255,255,255,0.6)',
              border: '1px solid rgba(255,255,255,0.6)',
              backdropFilter: 'blur(18.107px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '27.161px',
              boxSizing: 'border-box',
            }}
          >
            <img src="/images/cta-thumb.svg" alt="" style={{ width: '24px', height: '24px' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
