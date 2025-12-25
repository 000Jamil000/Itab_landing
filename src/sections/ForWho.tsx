import { motion } from 'framer-motion';
import LayoutContainer from '../components/LayoutContainer';
import ScaledFrame from '../components/ScaledFrame';
import { SUPPLIER_REGISTRATION_URL } from '../constants/links';

const ForWho = () => {
  return (
    <>
      {/* Desktop / 1440 */}
      <section className="bg-white rounded-[32px] py-[80px] mb-[8px] max-1440:hidden">
        <LayoutContainer>
        <motion.h2 
            className="text-h2 text-secondary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
        >
            Для производителей, дистрибьюторов <br />
            и розничных продавцов
        </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
                style={{
                  backgroundColor: '#F7F7F7',
                  borderRadius: '24px',
                  padding: '32px',
                  width: '592px',
                  height: '214px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '72px', height: '72px', overflow: 'hidden' }}>
                    <img src="/images/forwho-card-icon.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
                  <h3 className="text-h4" style={{ color: '#242424' }}>
                    Производителям <br />и дистрибьюторам
              </h3>
            </div>
                <p style={{ color: '#848484', fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.2px' }}>
              Получаете прямой доступ к покупателям, контроль над ценами и рост узнаваемости бренда благодаря знаку доверия iTAB.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  backgroundColor: '#F7F7F7',
                  borderRadius: '24px',
                  padding: '32px',
                  width: '592px',
                  height: '214px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '72px', height: '72px', overflow: 'hidden' }}>
                    <img src="/images/forwho-card-icon.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
                  <h3 className="text-h4" style={{ color: '#242424' }}>
                    Розничным <br />
                    торговцам
              </h3>
            </div>
                <p style={{ color: '#848484', fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.2px' }}>
                  Получаете конкурентное преимущество: товары со знаком iTAB продаются быстрее, потому что подтверждены экспертами и активно поддерживаются
                  нашими медиа-активностями.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                width: '1200px',
                height: '196px',
                backgroundColor: '#59AD3B',
                border: '1px solid #B7DAAA',
                borderRadius: '24px',
                padding: '32px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div style={{ position: 'relative', zIndex: 2, width: '790px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 className="text-h4" style={{ color: '#FFFFFF' }}>
                Обеспечим продвижение и поддержку — чтобы ваши продукты продавались больше, а клиенты возвращались чаще
              </h3>
                <div>
                  <a
                    href={SUPPLIER_REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      height: '56px',
                      padding: '16px 20px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      color: '#59AD3B',
                      fontSize: '16px',
                      fontWeight: 500,
                      lineHeight: '24px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                    }}
                  >
                Зарегистрироваться
                  </a>
                </div>
              </div>
              <div style={{ position: 'absolute', left: '851px', top: '-39px', width: '323px', height: '323px', pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', left: '-17px', top: '9px', width: '340px', height: '340px' }}>
                  <img src="/images/forwho-banner-illustration.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </LayoutContainer>
      </section>

      {/* Tablet 744 (Figma: 8389:34797) */}
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-1440:block max-744:hidden" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="mx-auto w-full max-w-[744px] px-[20px]">
          {/* Content: 704x542 */}
          <ScaledFrame designWidth={704} designHeight={542}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                margin: 0,
                textAlign: 'left',
                fontSize: 36,
                lineHeight: '40px',
                fontWeight: 500,
                letterSpacing: '-1px',
                color: '#242424',
                width: 704,
                height: 80,
              }}
            >
              Для производителей, дистрибьюторов <br />
              и розничных продавцов
            </motion.h2>

            {/* Cards row (744): 2 cards 348x224, gap 8 */}
            <div style={{ marginTop: 40, width: 704, display: 'flex', gap: 8 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  width: 348,
                  height: 224,
                  backgroundColor: '#F7F7F7',
                  borderRadius: 24,
                  padding: 24,
                  overflow: 'hidden',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 54, height: 54, overflow: 'hidden', flexShrink: 0 }}>
                    <img src="/images/forwho-card-icon.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ fontSize: 18, lineHeight: '22px', fontWeight: 500, letterSpacing: '-0.2px', color: '#242424', paddingTop: 5 }}>
                    Производителям <br />и дистрибьюторам
                  </div>
                </div>
                <div style={{ color: '#848484', fontSize: 14, lineHeight: '22px', letterSpacing: '-0.2px' }}>
                  Получаете прямой доступ к покупателям, контроль над ценами и рост узнаваемости бренда благодаря знаку доверия iTAB.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                style={{
                  width: 348,
                  height: 224,
                  backgroundColor: '#F7F7F7',
                  borderRadius: 24,
                  padding: 24,
                  overflow: 'hidden',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 54, height: 54, overflow: 'hidden', flexShrink: 0 }}>
                    <img src="/images/forwho-card-icon.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ fontSize: 18, lineHeight: '22px', fontWeight: 500, letterSpacing: '-0.2px', color: '#242424', paddingTop: 5 }}>
                    Розничным <br />торговцам
                  </div>
                </div>
                <div style={{ color: '#848484', fontSize: 16, lineHeight: '22px', letterSpacing: '-0.2px' }}>
                  Получаете конкурентное преимущество: товары со знаком iTAB продаются быстрее, потому что подтверждены экспертами и активно поддерживаются нашими
                  медиа-активностями.
                </div>
              </motion.div>
            </div>

            {/* Banner: 704x190 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                marginTop: 8,
                width: 704,
                height: 190,
                backgroundColor: '#59AD3B',
                border: '1px solid #B7DAAA',
                borderRadius: 24,
                padding: 24,
                overflow: 'hidden',
                position: 'relative',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {/* Text block (content box inside padding): 373x142 */}
              <div style={{ width: 373, height: 142, zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ width: 373, height: 66, fontSize: 18, lineHeight: '22px', fontWeight: 500, letterSpacing: '-0.2px', color: '#FFFFFF' }}>
                  Обеспечим продвижение и поддержку — <br />
                  чтобы ваши продукты продавались больше, <br />а клиенты возвращались чаще
                </div>
                <a
                  href={SUPPLIER_REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 196,
                    height: 56,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 16,
                    border: 'none',
                    color: '#59AD3B',
                    fontSize: 16,
                    fontWeight: 500,
                    lineHeight: '24px',
                    padding: '16px 20px',
                    cursor: 'pointer',
                    flexShrink: 0,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                  }}
                >
                  Зарегистрироваться
                </a>
              </div>

              {/* Image group: right=27, top=-14, w=247,h=247 */}
              <div style={{ position: 'absolute', right: 27, top: -14, width: 247, height: 247, pointerEvents: 'none', zIndex: 1 }}>
                {/* inner image: rectangle 260x260 at x=-13,y=6.882 */}
                <div style={{ position: 'absolute', left: -13, top: 6.882, width: 260, height: 260 }}>
                  <img src="/images/forwho-banner-illustration.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                {/* Featured icon A: x=197.518,y=54.327,size=44.286, rotate 13.554; glass 36.706, blur 6.118 */}
                <div style={{ position: 'absolute', left: 188.92, top: 54.327, width: 44.286, height: 44.286, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ transform: 'rotate(13.554deg)', width: 36.706, height: 36.706 }}>
                    <div
                      style={{
                        width: 36.706,
                        height: 36.706,
                        borderRadius: 12.235,
                        backgroundColor: 'rgba(255,255,255,0.6)',
                        border: '1px solid rgba(255,255,255,0.6)',
                        backdropFilter: 'blur(6.118px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 9.176,
                        boxSizing: 'border-box',
                      }}
                    >
                      <img src="/images/forwho-icon-pie.svg" alt="" style={{ width: 24, height: 24 }} />
                    </div>
                  </div>
                </div>
                {/* Featured icon B: x=0,y=106.886,size=49.64, rotate 349.949; glass 42.824, blur 6.118 */}
                <div style={{ position: 'absolute', left: 0, top: 99.41, width: 49.64, height: 49.64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ transform: 'rotate(349.949deg)', width: 42.824, height: 42.824 }}>
                    <div
                      style={{
                        width: 42.824,
                        height: 42.824,
                        borderRadius: 12.235,
                        backgroundColor: 'rgba(255,255,255,0.6)',
                        border: '1px solid rgba(255,255,255,0.6)',
                        backdropFilter: 'blur(6.118px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 10.706,
                        boxSizing: 'border-box',
                      }}
                    >
                      <img src="/images/forwho-icon-line.svg" alt="" style={{ width: 28, height: 28 }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Spot: right=-93.55, top=-30, size 541.548, rotate 139.274, nested insets like Figma */}
              <div style={{ position: 'absolute', right: -93.55, top: -30, width: 541.548, height: 541.548, pointerEvents: 'none', zIndex: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ transform: 'rotate(139.274deg)', width: 384, height: 384, position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '16.67%', right: '11.59%', bottom: '14.44%', left: '8.33%' }}>
                    <div style={{ position: 'absolute', top: '-30.24%', right: '-26.02%', bottom: '-30.24%', left: '-26.02%' }}>
                      <img src="/images/forwho-banner-spot-light.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none', display: 'block' }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScaledFrame>
        </div>
      </section>

      {/* Mobile 375 (Figma: 8389:34593) */}
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-744:block" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="mx-auto w-full max-w-[744px] px-[20px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              margin: 0,
              width: '100%',
              fontSize: 24,
              lineHeight: '28px',
              fontWeight: 500,
              letterSpacing: '-1px',
              color: '#242424',
            }}
          >
            Для производителей, дистрибьюторов <br />
            и розничных продавцов
          </motion.h2>

          <div style={{ marginTop: 32, width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* Card 1: 335x180 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                width: '100%',
                aspectRatio: '335 / 180',
                backgroundColor: '#F7F7F7',
                borderRadius: 24,
                padding: 24,
                overflow: 'hidden',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 12,
              }}
            >
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{ width: 'clamp(48px, 16%, 54px)', aspectRatio: '1', overflow: 'hidden', flexShrink: 0 }}>
                  <img src="/images/forwho-card-icon.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontSize: 'clamp(16px, 4vw, 18px)', lineHeight: '22px', fontWeight: 500, color: '#242424', letterSpacing: '-0.2px' }}>
                  Производителям <br />и дистрибьюторам
                </div>
              </div>
              <div style={{ color: '#848484', fontSize: 14, lineHeight: '22px', letterSpacing: '-0.2px' }}>
                Получаете прямой доступ к покупателям, контроль над ценами и рост узнаваемости бренда благодаря знаку доверия iTAB.
              </div>
            </motion.div>

            {/* Card 2: 335x224 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              style={{
                width: '100%',
                aspectRatio: '335 / 224',
                backgroundColor: '#F7F7F7',
                borderRadius: 24,
                padding: 24,
                overflow: 'hidden',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 12,
              }}
            >
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{ width: 'clamp(48px, 16%, 54px)', aspectRatio: '1', overflow: 'hidden', flexShrink: 0 }}>
                  <img src="/images/forwho-card-icon.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontSize: 'clamp(16px, 4vw, 18px)', lineHeight: '22px', fontWeight: 500, color: '#242424', letterSpacing: '-0.2px' }}>
                  Розничным <br />
                  торговцам
                </div>
              </div>
              <div style={{ color: '#848484', fontSize: 14, lineHeight: '22px', letterSpacing: '-0.2px' }}>
                Получаете конкурентное преимущество: товары со знаком iTAB продаются быстрее, потому что подтверждены экспертами <br />
                и активно поддерживаются нашими медиа-активностями.
              </div>
            </motion.div>

            {/* Banner: 335x380 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                width: '100%',
                aspectRatio: '335 / 380',
                backgroundColor: '#59AD3B',
                border: '1px solid #B7DAAA',
                borderRadius: 24,
                padding: 24,
                overflow: 'hidden',
                position: 'relative',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              {/* Spot: icon_m_LoveFill - адаптивное позиционирование */}
              <div style={{ position: 'absolute', left: '131%', top: '102%', width: '162%', aspectRatio: '1', pointerEvents: 'none', zIndex: 0 }}>
                <div style={{ transform: 'rotate(139.274deg)', width: '71%', aspectRatio: '1' }}>
                  <img src="/images/forwho-banner-spot-light.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none', display: 'block' }} />
                </div>
              </div>

              {/* Text + button */}
              <div style={{ position: 'relative', zIndex: 2, width: '86%', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ fontSize: 'clamp(16px, 4vw, 18px)', lineHeight: '22px', fontWeight: 500, color: '#FFFFFF', letterSpacing: '-0.2px' }}>
                  Обеспечим продвижение <br />
                  и поддержку — чтобы ваши продукты продавались больше, <br />а клиенты возвращались чаще
                </div>
                <a
                  href={SUPPLIER_REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 16,
                    border: 'none',
                    color: '#59AD3B',
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '24px',
                    height: '56px',
                    padding: '16px 20px',
                    cursor: 'pointer',
                    alignSelf: 'flex-start',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    boxSizing: 'border-box',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Зарегистрироваться
                </a>
              </div>

              {/* Image group - адаптивное позиционирование */}
              <div style={{ position: 'absolute', left: '8%', top: '42%', width: '84%', aspectRatio: '1', pointerEvents: 'none', zIndex: 1 }}>
                {/* inner base image */}
                <div style={{ position: 'absolute', left: '-5.3%', top: '2.8%', width: '105.3%', aspectRatio: '1' }}>
                  <img src="/images/forwho-banner-illustration.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>

                {/* Featured icon */}
                <div style={{ position: 'absolute', left: '80%', top: '22%', width: '17.9%', aspectRatio: '1' }}>
                  <div
                    style={{
                      width: '82.9%',
                      aspectRatio: '1',
                      borderRadius: 16,
                      backgroundColor: 'rgba(255,255,255,0.6)',
                      border: '1px solid rgba(255,255,255,0.6)',
                      backdropFilter: 'blur(16px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '20.7%',
                      boxSizing: 'border-box',
                    }}
                  >
                    <img src="/images/forwho-icon-pie.svg" alt="" style={{ width: '100%', height: '100%' }} />
                  </div>
                </div>

                {/* Featured icon: left icon */}
                <div style={{ position: 'absolute', left: 0, top: '43.3%', width: '20.1%', aspectRatio: '1' }}>
                  <div
                    style={{
                      width: '86.3%',
                      aspectRatio: '1',
                      borderRadius: 16,
                      backgroundColor: 'rgba(255,255,255,0.6)',
                      border: '1px solid rgba(255,255,255,0.6)',
                      backdropFilter: 'blur(16px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '21.6%',
                      boxSizing: 'border-box',
                    }}
                  >
                    <img src="/images/forwho-icon-line.svg" alt="" style={{ width: '100%', height: '100%' }} />
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

export default ForWho;
