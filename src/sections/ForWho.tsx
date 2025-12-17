import { motion } from 'framer-motion';
import LayoutContainer from '../components/LayoutContainer';

const ForWho = () => {
  return (
    <>
      {/* Desktop / 1440 */}
      <section className="bg-white rounded-[32px] py-[80px] mb-[8px] max-744:hidden">
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
                  <button
                    style={{
                      height: '56px',
                      padding: '16px 20px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      color: '#59AD3B',
                      fontSize: '16px',
                      fontWeight: 500,
                      lineHeight: '24px',
                    }}
                  >
                    Зарегистрироваться
                  </button>
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
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-744:block max-375:hidden" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="mx-auto w-full max-w-[744px] px-[20px]">
          {/* Content: 704x542 */}
          <div style={{ width: 704 }}>
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
              }}
            >
              Для производителей, дистрибьюторов и розничных продавцов
            </motion.h2>

            {/* Cards row (744): 2 cards 348x224, gap 8 */}
            <div style={{ marginTop: 32, width: 704, display: 'flex', gap: 8 }}>
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
                  <div style={{ fontSize: 20, lineHeight: '22px', fontWeight: 500, color: '#242424', paddingTop: 5 }}>
                    Производителям <br />и дистрибьюторам
                  </div>
                </div>
                <div style={{ color: '#848484', fontSize: 16, lineHeight: '22px', letterSpacing: '-0.2px' }}>
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
                  <div style={{ fontSize: 20, lineHeight: '22px', fontWeight: 500, color: '#242424', paddingTop: 5 }}>
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
                marginTop: 24,
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
                {/* Без фиксированной высоты: переносы могут отличаться на разных рендерах шрифта,
                    но кнопка всегда должна оставаться снизу (как в Figma: content 656x142). */}
                <div style={{ width: 373, fontSize: 20, lineHeight: '22px', fontWeight: 500, color: '#FFFFFF' }}>
                  Обеспечим продвижение и поддержку — чтобы ваши продукты продавались больше, а клиенты возвращались чаще
                </div>
                <button
                  type="button"
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
                  }}
                >
                  Зарегистрироваться
                </button>
              </div>

              {/* Image group: x=429,y=-13,w=247,h=247 */}
              <div style={{ position: 'absolute', left: 429, top: -13, width: 247, height: 247, pointerEvents: 'none', zIndex: 1 }}>
                {/* inner image: rectangle 260x260 at x=-13,y=6.882 */}
                <div style={{ position: 'absolute', left: -13, top: 6.882, width: 260, height: 260 }}>
                  <img src="/images/forwho-banner-illustration.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                {/* Featured icon 44.286 at x=197.518,y=54.327 */}
                <div style={{ position: 'absolute', left: 197.518, top: 54.327, width: 44.286, height: 44.286 }}>
                  <div
                    style={{
                      width: 44.286,
                      height: 44.286,
                      borderRadius: 16,
                      backgroundColor: 'rgba(255,255,255,0.6)',
                      border: '1px solid rgba(255,255,255,0.6)',
                      backdropFilter: 'blur(16px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 10,
                      boxSizing: 'border-box',
                    }}
                  >
                    <img src="/images/forwho-icon-pie.svg" alt="" style={{ width: 24, height: 24 }} />
                  </div>
                </div>
                {/* Featured icon 49.64 at x=0,y=106.886 */}
                <div style={{ position: 'absolute', left: 0, top: 106.886, width: 49.64, height: 49.64 }}>
                  <div
                    style={{
                      width: 49.64,
                      height: 49.64,
                      borderRadius: 16,
                      backgroundColor: 'rgba(255,255,255,0.6)',
                      border: '1px solid rgba(255,255,255,0.6)',
                      backdropFilter: 'blur(16px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 12,
                      boxSizing: 'border-box',
                    }}
                  >
                    <img src="/images/forwho-icon-line.svg" alt="" style={{ width: 28, height: 28 }} />
                  </div>
                </div>
              </div>

              {/* Spot (Figma 744 Banner: icon_m_LoveFill x=796.548, y=262.010 inside banner y=232 => top ~30.01) */}
              <div style={{ position: 'absolute', left: 796.548, top: 30.01, width: 541.548, height: 541.548, pointerEvents: 'none', zIndex: 0 }}>
                <div style={{ transform: 'rotate(139.274deg)', width: 384, height: 384 }}>
                  <img src="/images/forwho-banner-spot-light.svg" alt="" style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile 375 (Figma: 8389:34593) */}
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-375:block" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="mx-auto w-full max-w-[375px] px-[20px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              margin: 0,
              width: 335,
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

          <div style={{ marginTop: 32, width: 335, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* Card 1: 335x180 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                width: 335,
                height: 180,
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
                <div style={{ width: 54, height: 54, overflow: 'hidden', flexShrink: 0 }}>
                  <img src="/images/forwho-card-icon.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontSize: 18, lineHeight: '22px', fontWeight: 500, color: '#242424', letterSpacing: '-0.2px' }}>
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
                width: 335,
                height: 224,
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
                <div style={{ width: 54, height: 54, overflow: 'hidden', flexShrink: 0 }}>
                  <img src="/images/forwho-card-icon.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontSize: 18, lineHeight: '22px', fontWeight: 500, color: '#242424', letterSpacing: '-0.2px' }}>
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
                width: 335,
                height: 380,
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
              {/* Spot: icon_m_LoveFill (x=439,y=386.647,w=541.548,h=541.548) */}
              <div style={{ position: 'absolute', left: 439, top: 386.647, width: 541.548, height: 541.548, pointerEvents: 'none', zIndex: 0 }}>
                <div style={{ transform: 'rotate(139.274deg)', width: 384, height: 384 }}>
                  <img src="/images/forwho-banner-spot-light.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none', display: 'block' }} />
                </div>
              </div>

              {/* Text + button */}
              <div style={{ position: 'relative', zIndex: 2, width: 287, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ fontSize: 18, lineHeight: '22px', fontWeight: 500, color: '#FFFFFF', letterSpacing: '-0.2px' }}>
                  Обеспечим продвижение <br />
                  и поддержку — чтобы ваши продукты продавались больше, <br />а клиенты возвращались чаще
                </div>
                <button
                  type="button"
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
                    alignSelf: 'flex-start',
                  }}
                >
                  Зарегистрироваться
                </button>
              </div>

              {/* Image group (x=27, y=159.638, w=281, h=281) */}
              <div style={{ position: 'absolute', left: 27, top: 159.638, width: 281, height: 281, pointerEvents: 'none', zIndex: 1 }}>
                {/* inner base image: x=-14.79,y=7.83,w=295.789,h=295.789 */}
                <div style={{ position: 'absolute', left: -14.79, top: 7.83, width: 295.789, height: 295.789 }}>
                  <img src="/images/forwho-banner-illustration.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Featured icon: x=224.707,y=61.805,w=50.382 */}
                <div style={{ position: 'absolute', left: 224.707, top: 61.805, width: 50.382, height: 50.382 }}>
                  <div
                    style={{
                      width: 41.759,
                      height: 41.759,
                      borderRadius: 16,
                      backgroundColor: 'rgba(255,255,255,0.6)',
                      border: '1px solid rgba(255,255,255,0.6)',
                      backdropFilter: 'blur(16px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 10.44,
                      boxSizing: 'border-box',
                    }}
                  >
                    <img src="/images/forwho-icon-pie.svg" alt="" style={{ width: 24, height: 24 }} />
                  </div>
                </div>

                {/* Featured icon: x=0,y=121.599,w=56.473 */}
                <div style={{ position: 'absolute', left: 0, top: 121.599, width: 56.473, height: 56.473 }}>
                  <div
                    style={{
                      width: 48.718,
                      height: 48.718,
                      borderRadius: 16,
                      backgroundColor: 'rgba(255,255,255,0.6)',
                      border: '1px solid rgba(255,255,255,0.6)',
                      backdropFilter: 'blur(16px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 12.18,
                      boxSizing: 'border-box',
                    }}
                  >
                    <img src="/images/forwho-icon-line.svg" alt="" style={{ width: 28, height: 28 }} />
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
