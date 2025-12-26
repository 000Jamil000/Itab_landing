import { motion } from 'framer-motion';

type LogoItem = {
  src: string;
  alt?: string;
  rounded?: number;
  crop?: {
    left: string;
    top: string;
    width: string;
    height: string;
  };
  objectFit?: 'contain' | 'cover';
};

type BrandLogoSize = number | 'fluid';

const BrandLogo = ({ item, size = 'fluid' }: { item: LogoItem; size?: BrandLogoSize }) => {
  const radius = item.rounded ?? 0;
  const isFluid = size === 'fluid';
  const px = typeof size === 'number' ? `${size}px` : undefined;

  return (
    <div
      style={{
        width: isFluid ? '100%' : px,
        height: isFluid ? undefined : px,
        aspectRatio: isFluid ? '1' : undefined,
        position: 'relative',
        flexShrink: 0,
        borderRadius: radius ? `${radius}px` : undefined,
        overflow: item.crop ? 'hidden' : 'visible',
      }}
    >
      {item.crop ? (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            borderRadius: radius ? `${radius}px` : undefined,
          }}
        >
          <img
            alt={item.alt ?? ''}
            src={item.src}
            style={{
              position: 'absolute',
              left: item.crop.left,
              top: item.crop.top,
              width: item.crop.width,
              height: item.crop.height,
              maxWidth: 'none',
            }}
          />
        </div>
      ) : (
        <img
          alt={item.alt ?? ''}
          src={item.src}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: item.objectFit ?? 'contain',
            objectPosition: '50% 50%',
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
};

const Brands = () => {
  const row1: LogoItem[] = [
    // 31353 (special crop + rounded 6)
    { src: '/images/brands/b01.png', rounded: 6, crop: { left: '16.53%', top: '16.88%', width: '66.93%', height: '66.93%' } },
    { src: '/images/brands/b02.png' },
    { src: '/images/brands/b03.png' },
    { src: '/images/brands/b04.png' },
    { src: '/images/brands/b05.png' },
    { src: '/images/brands/b06.png' },
    { src: '/images/brands/b07.png' },
    { src: '/images/brands/b08.png' },
    // 31361 custom crop
    { src: '/images/brands/b09.png', crop: { left: '17.18%', top: '18.11%', width: '62.86%', height: '60.25%' } },
    { src: '/images/brands/b10.png' },
    // 31363 custom crop
    { src: '/images/brands/b11.png', crop: { left: '21.15%', top: '20.56%', width: '59.98%', height: '60.03%' } },
    { src: '/images/brands/b12.png' },
    { src: '/images/brands/b13.png' },
    { src: '/images/brands/b14.png' },
  ];

  const row2: LogoItem[] = [
    { src: '/images/brands/b15.png' },
    { src: '/images/brands/b16.png' },
    // 31372 custom crop
    { src: '/images/brands/b17.png', crop: { left: '-17.8%', top: '7.96%', width: '134.61%', height: '82.91%' } },
    { src: '/images/brands/b18.png' },
    // 31374 custom crop
    { src: '/images/brands/b19.png', crop: { left: '14.72%', top: '18.49%', width: '73.66%', height: '67.69%' } },
    { src: '/images/brands/b20.png' },
    { src: '/images/brands/b21.png' },
    // 31377 custom crop
    { src: '/images/brands/b22.png', crop: { left: '16.63%', top: '19.23%', width: '63.27%', height: '63.27%' } },
    { src: '/images/brands/b23.png' },
    // 31379 custom crop
    { src: '/images/brands/b24.png', crop: { left: '13.33%', top: '12.76%', width: '74.47%', height: '74.47%' } },
    // 31380 custom crop
    { src: '/images/brands/b25.png', crop: { left: '12.61%', top: '29.85%', width: '74.78%', height: '35%' } },
    { src: '/images/brands/b26.png' },
    { src: '/images/brands/b27.png' },
    { src: '/images/brands/b28.png' },
    // 31384 repeats icon (uses same as 31376 in figma export, use b21 to match)
    { src: '/images/brands/b21.png' },
  ];

  const ITEM_SIZE = 80;
  const GAP = 16;
  const row1Travel = row1.length * (ITEM_SIZE + GAP);
  const row2Travel = row2.length * (ITEM_SIZE + GAP);
  const row1StartX = -64;
  const row2StartX = -112;
  const row1StartX744 = -312;
  const row2StartX744 = -360;

  return (
    <>
      {/* Desktop / 1440 */}
      <section className="bg-white rounded-[32px] py-[80px] mb-[8px] max-1024:hidden">
        <div className="mx-auto w-[1200px]">
          <motion.h2
            className="text-h2 text-secondary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            Бренды, которые уже сотрудничают с нами
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'relative', height: '80px', overflow: 'hidden' }}>
              <motion.div
                style={{ display: 'flex', gap: `${GAP}px`, width: 'max-content', willChange: 'transform' }}
                animate={{ x: [row1StartX, row1StartX - row1Travel] }}
                transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' } }}
              >
                {[...row1, ...row1].map((item, idx) => (
                  <BrandLogo key={`r1-${idx}`} item={item} size={ITEM_SIZE} />
                ))}
              </motion.div>
              <div style={{ position: 'absolute', right: 0, top: 0, width: 120, height: 80, background: 'linear-gradient(to right, rgba(255,255,255,0), #fff)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', left: 0, top: 0, width: 120, height: 80, background: 'linear-gradient(to right, rgba(255,255,255,0), #fff)', transform: 'rotate(180deg) scaleY(-1)', pointerEvents: 'none' }} />
            </div>

            <div style={{ position: 'relative', height: '80px', overflow: 'hidden' }}>
              <motion.div
                style={{ display: 'flex', gap: `${GAP}px`, width: 'max-content', willChange: 'transform' }}
                animate={{ x: [row2StartX - row2Travel, row2StartX] }}
                transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' } }}
              >
                {[...row2, ...row2].map((item, idx) => (
                  <BrandLogo key={`r2-${idx}`} item={item} size={ITEM_SIZE} />
                ))}
              </motion.div>
              <div style={{ position: 'absolute', right: 0, top: 0, width: 120, height: 80, background: 'linear-gradient(to right, rgba(255,255,255,0), #fff)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', left: 0, top: 0, width: 120, height: 80, background: 'linear-gradient(to right, rgba(255,255,255,0), #fff)', transform: 'rotate(180deg) scaleY(-1)', pointerEvents: 'none' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Tablet 744 (Figma: title 2 lines, rows offsets -312/-360) */}
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-1024:block max-744:hidden" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="mx-auto w-full max-w-[744px] px-[20px]">
          <div style={{ width: 704 }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                width: 704,
                height: 80,
                textAlign: 'center',
                fontSize: 36,
                lineHeight: '40px',
                fontWeight: 500,
                letterSpacing: '-1px',
                color: '#242424',
                margin: 0,
              }}
            >
              Бренды, которые уже <br />
              сотрудничают с нами
            </motion.h2>

            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16, overflow: 'hidden', position: 'relative' }}>
              <div style={{ position: 'relative', height: 80, overflow: 'hidden' }}>
                <motion.div
                  style={{ display: 'flex', gap: `${GAP}px`, width: 'max-content', willChange: 'transform' }}
                  animate={{ x: [row1StartX744, row1StartX744 - row1Travel] }}
                  transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' } }}
                >
                  {[...row1, ...row1].map((item, idx) => (
                    <BrandLogo key={`r1-744-${idx}`} item={item} size={ITEM_SIZE} />
                  ))}
                </motion.div>
                <div style={{ position: 'absolute', right: 0, top: 0, width: 120, height: 80, background: 'linear-gradient(to right, rgba(255,255,255,0), #fff)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', left: 0, top: 0, width: 120, height: 80, background: 'linear-gradient(to right, rgba(255,255,255,0), #fff)', transform: 'rotate(180deg) scaleY(-1)', pointerEvents: 'none' }} />
              </div>

              <div style={{ position: 'relative', height: 80, overflow: 'hidden' }}>
                <motion.div
                  style={{ display: 'flex', gap: `${GAP}px`, width: 'max-content', willChange: 'transform' }}
                  animate={{ x: [row2StartX744 - row2Travel, row2StartX744] }}
                  transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' } }}
                >
                  {[...row2, ...row2].map((item, idx) => (
                    <BrandLogo key={`r2-744-${idx}`} item={item} size={ITEM_SIZE} />
                  ))}
                </motion.div>
                <div style={{ position: 'absolute', right: 0, top: 0, width: 120, height: 80, background: 'linear-gradient(to right, rgba(255,255,255,0), #fff)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', left: 0, top: 0, width: 120, height: 80, background: 'linear-gradient(to right, rgba(255,255,255,0), #fff)', transform: 'rotate(180deg) scaleY(-1)', pointerEvents: 'none' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile 375 (Figma: 8389:34683) - 5 cols x 3 rows, icons 54x54, horizontal animation */}
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-744:block" style={{ paddingTop: '56px', paddingBottom: '56px' }}>
        <div className="mx-auto w-full px-[20px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              margin: 0,
              fontSize: 24,
              lineHeight: '28px',
              fontWeight: 500,
              letterSpacing: '-1px',
              color: '#242424',
              textAlign: 'center',
            }}
          >
            Бренды, которые уже <br />
            сотрудничают с нами
          </motion.h2>

          {/* Figma: 5 cols × 3 rows, icons 54x54, gap ~14px, horizontal scroll animation */}
          {(() => {
            const MOBILE_SIZE = 54;
            const MOBILE_GAP = 14;
            // 15 logos for mobile (5 per row × 3 rows)
            const mobileRow1 = row1.slice(0, 5);
            const mobileRow2 = row1.slice(5, 10);
            const mobileRow3 = [...row1.slice(10, 12), ...row2.slice(0, 3)];

            const mobileRowTravel = 5 * (MOBILE_SIZE + MOBILE_GAP);
            const mobileStartX = -20;

            return (
              <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: `${MOBILE_GAP}px`, overflow: 'hidden', position: 'relative' }}>
                {/* Row 1 */}
                <div style={{ position: 'relative', height: `${MOBILE_SIZE}px`, overflow: 'hidden' }}>
                  <motion.div
                    style={{ display: 'flex', gap: `${MOBILE_GAP}px`, width: 'max-content', willChange: 'transform' }}
                    animate={{ x: [mobileStartX, mobileStartX - mobileRowTravel] }}
                    transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 15, ease: 'linear' } }}
                  >
                    {[...mobileRow1, ...mobileRow1].map((item, idx) => (
                      <BrandLogo key={`m-r1-${idx}`} item={item} size={MOBILE_SIZE} />
                    ))}
                  </motion.div>
                  <div style={{ position: 'absolute', right: 0, top: 0, width: 60, height: MOBILE_SIZE, background: 'linear-gradient(to right, rgba(255,255,255,0), #fff)', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', left: 0, top: 0, width: 60, height: MOBILE_SIZE, background: 'linear-gradient(to left, rgba(255,255,255,0), #fff)', pointerEvents: 'none' }} />
                </div>

                {/* Row 2 - opposite direction */}
                <div style={{ position: 'relative', height: `${MOBILE_SIZE}px`, overflow: 'hidden' }}>
                  <motion.div
                    style={{ display: 'flex', gap: `${MOBILE_GAP}px`, width: 'max-content', willChange: 'transform' }}
                    animate={{ x: [mobileStartX - mobileRowTravel, mobileStartX] }}
                    transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 15, ease: 'linear' } }}
                  >
                    {[...mobileRow2, ...mobileRow2].map((item, idx) => (
                      <BrandLogo key={`m-r2-${idx}`} item={item} size={MOBILE_SIZE} />
                    ))}
                  </motion.div>
                  <div style={{ position: 'absolute', right: 0, top: 0, width: 60, height: MOBILE_SIZE, background: 'linear-gradient(to right, rgba(255,255,255,0), #fff)', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', left: 0, top: 0, width: 60, height: MOBILE_SIZE, background: 'linear-gradient(to left, rgba(255,255,255,0), #fff)', pointerEvents: 'none' }} />
                </div>

                {/* Row 3 */}
                <div style={{ position: 'relative', height: `${MOBILE_SIZE}px`, overflow: 'hidden' }}>
                  <motion.div
                    style={{ display: 'flex', gap: `${MOBILE_GAP}px`, width: 'max-content', willChange: 'transform' }}
                    animate={{ x: [mobileStartX, mobileStartX - mobileRowTravel] }}
                    transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 15, ease: 'linear' } }}
                  >
                    {[...mobileRow3, ...mobileRow3].map((item, idx) => (
                      <BrandLogo key={`m-r3-${idx}`} item={item} size={MOBILE_SIZE} />
                    ))}
                  </motion.div>
                  <div style={{ position: 'absolute', right: 0, top: 0, width: 60, height: MOBILE_SIZE, background: 'linear-gradient(to right, rgba(255,255,255,0), #fff)', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', left: 0, top: 0, width: 60, height: MOBILE_SIZE, background: 'linear-gradient(to left, rgba(255,255,255,0), #fff)', pointerEvents: 'none' }} />
                </div>
              </div>
            );
          })()}
        </div>
      </section>
    </>
  );
};

export default Brands;
