import { motion } from 'framer-motion';

const ForWho = () => {
  return (
    <section className="bg-white" style={{ padding: '80px 0' }}>
      <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-0">
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
          {/* Cards row */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                backgroundColor: '#F7F7F7',
                borderRadius: '24px',
                padding: '32px',
                width: '100%',
                height: '214px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '12px',
              }}
              className="lg:w-[592px]"
            >
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: '72px', height: '72px', overflow: 'hidden' }}>
                  <img
                    src="/images/forwho-card-icon.png"
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h3 className="text-h4" style={{ color: '#242424' }}>
                  Производителям <br />и дистрибьюторам
                </h3>
              </div>
              <p
                style={{
                  color: '#848484',
                  fontSize: '16px',
                  lineHeight: '22px',
                  letterSpacing: '-0.2px',
                }}
              >
                Получаете прямой доступ к покупателям, контроль над ценами и рост узнаваемости бренда благодаря знаку доверия iTAB.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                backgroundColor: '#F7F7F7',
                borderRadius: '24px',
                padding: '32px',
                width: '100%',
                height: '214px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '12px',
              }}
              className="lg:w-[592px]"
            >
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: '72px', height: '72px', overflow: 'hidden' }}>
                  <img
                    src="/images/forwho-card-icon.png"
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h3 className="text-h4" style={{ color: '#242424' }}>
                  Розничным <br />
                  торговцам
                </h3>
              </div>
              <p
                style={{
                  color: '#848484',
                  fontSize: '16px',
                  lineHeight: '22px',
                  letterSpacing: '-0.2px',
                }}
              >
                Получаете конкурентное преимущество: товары со знаком iTAB продаются быстрее, потому что подтверждены экспертами и активно поддерживаются нашими медиа-активностями.
              </p>
            </motion.div>
          </div>

          {/* Banner */}
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
            {/* Spot */}
            <div
              style={{
                position: 'absolute',
                left: '823px',
                top: '-1px',
                width: '541.548px',
                height: '541.548px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
              }}
            >
              <div style={{ transform: 'rotate(139.274deg)', width: '384px', height: '384px' }}>
                <img
                  src="/images/forwho-banner-spot-light.svg"
                  alt=""
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>

            {/* Text + button */}
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

            {/* Right illustration group */}
            <div
              style={{
                position: 'absolute',
                left: '851px',
                top: '-39px',
                width: '323px',
                height: '323px',
                pointerEvents: 'none',
              }}
            >
              <div style={{ position: 'absolute', left: '-17px', top: '9px', width: '340px', height: '340px' }}>
                <img
                  src="/images/forwho-banner-illustration.png"
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Glass icon 48 */}
              <div
                style={{
                  position: 'absolute',
                  left: '247.04px',
                  top: '71.04px',
                  width: '57.913px',
                  height: '57.913px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ transform: 'rotate(13.554deg)', width: '48px', height: '48px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(255,255,255,0.6)',
                      border: '1px solid rgba(255,255,255,0.6)',
                      backdropFilter: 'blur(16px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px',
                    }}
                  >
                    <img src="/images/forwho-icon-pie.svg" alt="" style={{ width: '24px', height: '24px' }} />
                  </div>
                </div>
              </div>

              {/* Glass icon 56 */}
              <div
                style={{
                  position: 'absolute',
                  left: '0px',
                  top: '130px',
                  width: '64.914px',
                  height: '64.914px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ transform: 'rotate(349.949deg)', width: '56px', height: '56px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(255,255,255,0.6)',
                      border: '1px solid rgba(255,255,255,0.6)',
                      backdropFilter: 'blur(16px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '14px',
                    }}
                  >
                    <img src="/images/forwho-icon-line.svg" alt="" style={{ width: '28px', height: '28px' }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
