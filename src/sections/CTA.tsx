import { motion } from 'framer-motion';
import { ITAB_URL } from '../constants/links';

const CTA = () => {
  return (
    <>
      {/* Desktop / 1440 */}
    <section 
        className="relative overflow-hidden mb-[8px] max-1200:hidden"
        style={{
          backgroundColor: '#59AD3B',
          borderRadius: '32px',
          padding: '80px 0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: '-578.598px',
            bottom: '-1447.229px',
            width: '2080.228px',
            height: '2080.228px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <div style={{ transform: 'rotate(150deg)', width: '1522.833px', height: '1522.833px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '16.67%', right: '11.59%', bottom: '14.44%', left: '8.33%' }}>
              <div style={{ position: 'absolute', top: '-9.53%', right: '-8.2%', bottom: '-9.53%', left: '-8.2%' }}>
                <img src="/images/cta-bg-lovefill.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none', display: 'block' }} />
              </div>
            </div>
          </div>
      </div>

        <div className="mx-auto w-[1200px] relative" style={{ zIndex: 2 }}>
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

            <a
              href={ITAB_URL}
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
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              Начать продавать
            </a>
          </motion.div>
        </div>

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

        <div
          style={{
            position: 'absolute',
            right: '360.163px',
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

      {/* Tablet 744 (Figma: content 704x260, illustration 471 at x=319,y=-47, icon 103.229 at x=653.815,y=64) */}
      <section className="relative overflow-hidden mb-[8px] hidden max-1200:block max-375:hidden" style={{ backgroundColor: '#59AD3B', borderRadius: 32, paddingTop: 49, paddingBottom: 49 }}>
        {/* Background big spot (Figma 744: x=-1011.262, y=-1927.401, size 2080.228) */}
        <div style={{ position: 'absolute', left: -1011.262, top: -1927.401, width: 2080.228, height: 2080.228, pointerEvents: 'none' }}>
          <div style={{ transform: 'rotate(150deg)', width: 1522.833, height: 1522.833, position: 'relative' }}>
            <div style={{ position: 'absolute', top: '16.67%', right: '11.59%', bottom: '14.44%', left: '8.33%' }}>
              <div style={{ position: 'absolute', top: '-9.53%', right: '-8.2%', bottom: '-9.53%', left: '-8.2%' }}>
                <img src="/images/cta-bg-lovefill.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[744px] px-[20px]" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ width: 704, height: 260, position: 'relative' }}>
            {/* Title 704x80 */}
            <div style={{ position: 'absolute', left: 0, top: 0, width: 704, height: 80, color: '#FFFFFF', fontSize: 36, lineHeight: '40px', fontWeight: 500, letterSpacing: '-1px' }}>
              Начните продавать <br />
              на iTAB
            </div>

            {/* Description 315x88 at y=100 */}
            <div style={{ position: 'absolute', left: 0, top: 100, width: 315, height: 88, color: '#FFFFFF', fontSize: 16, lineHeight: '22px', letterSpacing: '-0.2px' }}>
              Размещение вашего продукта на iTAB — это не просто продажа, это признание его соответствия высоким стандартам интегративного здоровья.
            </div>

            {/* Button 178x56 at y=204 */}
            <a
              href={ITAB_URL}
              style={{
                position: 'absolute',
                left: 0,
                top: 204,
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
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              Начать продавать
            </a>

            {/* Illustration 471x471 at x=319,y=-47 */}
            <div style={{ position: 'absolute', left: 319, top: -47, width: 471, height: 471, pointerEvents: 'none', zIndex: 1 }}>
              <img src="/images/cta-illustration.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Featured glass icon 103.229 at x=653.815,y=64 */}
            <div style={{ position: 'absolute', left: 653.815, top: 64, width: 103.229, height: 103.229, pointerEvents: 'none', zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ transform: 'rotate(15deg)', width: 84.299, height: 84.299 }}>
                <div
                  style={{
                    width: 79.66,
                    height: 79.66,
                    borderRadius: 26.55,
                    backgroundColor: 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(13.27px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 19.9,
                    boxSizing: 'border-box',
                  }}
                >
                  <img src="/images/cta-thumb.svg" alt="" style={{ width: 24, height: 24 }} />
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>

      {/* Mobile 375 (Figma: 8389:34717) */}
      <section
        className="relative overflow-hidden mb-[8px] hidden max-375:block"
        style={{
          backgroundColor: '#59AD3B',
          borderRadius: 32,
          paddingTop: 64,
          paddingBottom: 64,
          height: 500, // Figma: Cooperation frame 375x500
        }}
      >
        {/* Spot (icon_m_LoveFill): size 665.104, centered, top=165.06 */}
        <div
          style={{
            position: 'absolute',
            left: 'calc(50% - 0.05px)',
            top: 165.062,
            width: 665.104,
            height: 665.104,
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            zIndex: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ transform: 'rotate(139.274deg)', width: 471.611, height: 471.611, position: 'relative' }}>
            <div style={{ position: 'absolute', top: '16.67%', right: '11.59%', bottom: '14.44%', left: '8.33%' }}>
              <div style={{ position: 'absolute', top: '-30.24%', right: '-26.02%', bottom: '-30.24%', left: '-26.02%' }}>
                <img src="/images/cta-spot-light.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Rectangle illustration: x=-62.5, y=170, 500x500 */}
        <div style={{ position: 'absolute', left: -62.5, top: 170, width: 500, height: 500, pointerEvents: 'none', zIndex: 1 }}>
          <img src="/images/cta-rectangle.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>

        {/* Featured icon: x=275.43,y=279.64,w=101.405 (thumbs up in glass) */}
        <div
          style={{
            position: 'absolute',
            left: 'calc(50% + 117.2px)',
            top: 279.638,
            width: 101.405,
            height: 101.405,
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ transform: 'rotate(15deg)', width: 82.797, height: 82.797 }}>
            <div
              style={{
                width: 78.226,
                height: 78.226,
                borderRadius: 26.075,
                backgroundColor: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.6)',
                backdropFilter: 'blur(13.038px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 19.556,
                boxSizing: 'border-box',
              }}
            >
              <img src="/images/cta-thumb.svg" alt="" style={{ width: 24, height: 24 }} />
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[375px] px-[20px]" style={{ position: 'relative', zIndex: 3 }}>
          {/* Content box: x=20,y=64,w=335,h=186 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ width: 335, display: 'flex', flexDirection: 'column', gap: 20, color: '#FFFFFF' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontSize: 24, lineHeight: '28px', fontWeight: 500, letterSpacing: '-1px' }}>Начните продавать на iTAB</div>
              <div style={{ fontSize: 14, lineHeight: '22px', letterSpacing: '-0.2px' }}>
                Размещение вашего продукта на iTAB — это не просто продажа, это признание его соответствия высоким стандартам интегративного здоровья.
              </div>
            </div>

            <a
              href={ITAB_URL}
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
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              Начать продавать
            </a>
          </motion.div>
      </div>
    </section>
    </>
  );
};

export default CTA;
