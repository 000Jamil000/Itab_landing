import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

interface FeedbackItem {
  position: string;
  avatarSrc: string;
  paragraphs: string[];
}

interface FeedbackCardProps {
  item: FeedbackItem;
  delay: number;
  onReadMore: () => void;
  width?: number;
  height?: number;
  lineClamp?: number;
}

const FeedbackCard = ({ item, delay, onReadMore, width, height, lineClamp }: FeedbackCardProps) => {
  const previewText = useMemo(() => item.paragraphs.join('\n\n'), [item.paragraphs]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      style={{
        backgroundColor: '#F7F7F7',
        borderRadius: '24px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        height: height ? `${height}px` : '462px',
        width: width ? `${width}px` : '389.333px',
      }}
    >
      {/* Reviewer Info */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '204px',
            border: '2px solid #F7F7F7',
            position: 'relative',
            flexShrink: 0,
            overflow: 'hidden',
          }}
        >
          <img
            alt=""
            src={item.avatarSrc}
            style={{
              position: 'absolute',
              inset: '-2px',
              width: 'calc(100% + 4px)',
              height: 'calc(100% + 4px)',
              maxWidth: 'none',
            }}
          />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px', justifyContent: 'center' }}>
          <div style={{ color: '#848484', fontSize: '14px', lineHeight: '20px' }}>{item.position}</div>
        </div>
      </div>

      {/* Review Text */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <div
          style={{
            color: '#242424',
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '-0.2px',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical' as any,
            WebkitLineClamp: lineClamp ?? 9,
            overflow: 'hidden',
            whiteSpace: 'pre-wrap',
          }}
        >
          {previewText}
        </div>
      </div>

      {/* Read More Button */}
      <button
        type="button"
        onClick={onReadMore}
        style={{
          color: '#59AD3B',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '24px',
          textDecoration: 'underline',
          textAlign: 'left',
          background: 'transparent',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          alignSelf: 'flex-start',
        }}
      >
        Читать полностью
      </button>
    </motion.div>
  );
};

const Feedback = () => {
  const feedbacks: FeedbackItem[] = [
    {
      position: 'Директор Lollipops',
      avatarSrc: '/images/feedback-avatar-1.png',
      paragraphs: [
        'Мы сотрудничаем с данной площадкой более года. Это один из самых профессиональных партнёров на рынке. Хочется отметить четкую и прозрачную работу: менеджеры отвечают быстро, решают вопросы по ассортименту, поставкам и продвижению комплексно; все финансовые вопросы решаются оперативно, отчетность понятна, процесс приемки и хранения товара организован хорошо, брак и потери сведены к минимуму; видим остатки товара.',
        'Площадка не просто «выкладывает» товар, а помогает в продвижение, организует совместные акции, рассказывает о брендах. Личный кабинет поставщика функциональный и удобный. Все необходимые инструменты для загрузки товара, отслеживания количества под рукой. Мы ценим такое ответственное отношение и планируем долгосрочное сотрудничество.',
      ],
    },
    {
      position: 'Директор бренда Biocycle',
      avatarSrc: '/images/feedback-avatar-2.png',
      paragraphs: [
        'В целом все шикарно, самодостаточная платформа, которая не поглощает на 100% клиентскую базу поставщика, а развивает свою. Это ценно. Нет демпинга цен произвольного.',
        'Единственный нюанс возникает с выплатами и идеально если бы склад сообщал поставщику, когда заканчивается товар 🙏🏻',
        'Хочется отметить наличие у данной площадки нутрициологов, специалистов, готовых оказать качественную консультацию в выборе того или иного товара. Удобный интерфейс личного кабинета поставщика, интуитивно понятен, но даже если и возникают затруднения в процессе работы, наш курирующий менеджер всегда оперативно отвечает на возникающие вопросы, возможность дистанционной связи, включая мессенджеры, снимает ряд ограничений, экономя такой важный фактор, как время.',
      ],
    },
    {
      position: 'Менеджер отдела по развитию клиентов ООО НПО «Компас Здоровья»',
      avatarSrc: '/images/feedback-avatar-3.png',
      paragraphs: [
        'Наше сотрудничество с крупнейшим дистрибьютером витаминов, БАДов «ITAB» началось в 2024 году. Данный маркетплейс для нас, как для российского производителя, оказался отличным каналом продвижения среди онлайн-аудитории. Рынок здорового и правильного питания, а также фармацевтическое направление развиваются быстрыми темпами, поскольку продукция пользуется спросом.',
        'Хочется отметить наличие у данной площадки нутрициологов, специалистов, готовых оказать качественную консультацию в выборе того или иного товара. Удобный интерфейс личного кабинета поставщика, интуитивно понятен, но даже если и возникают затруднения в процессе работы, наш курирующий менеджер всегда оперативно отвечает на возникающие вопросы, возможность дистанционной связи, включая мессенджеры, снимает ряд ограничений, экономя такой важный фактор, как время.',
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : feedbacks[activeIndex];
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      {/* Desktop / 1440 */}
      <section id="feedback" className="bg-white rounded-[32px] py-[80px] mb-[8px] max-744:hidden">
        <div className="mx-auto w-[1200px]">
        <motion.h2 
            className="text-h2 text-secondary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          Отзывы наших поставщиков
        </motion.h2>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'stretch' }}>
            {feedbacks.map((item, index) => (
              <FeedbackCard key={index} item={item} delay={index * 0.1} onReadMore={() => setActiveIndex(index)} />
          ))}
        </div>
      </div>
    </section>

      {/* Tablet 744 (Figma: cards strip, card 400x462, gap 8) */}
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-744:block max-375:hidden" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="mx-auto w-full max-w-[744px] px-[20px]">
          <div style={{ width: 704 }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                width: 704,
                height: 40,
                textAlign: 'center',
                fontSize: 36,
                lineHeight: '40px',
                fontWeight: 500,
                letterSpacing: '-1px',
                color: '#242424',
                margin: 0,
              }}
            >
              Отзывы наших поставщиков
            </motion.h2>

            <div
              style={{
                marginTop: 40,
                width: 704,
                height: 462,
                overflowX: 'auto',
                overflowY: 'hidden',
                display: 'flex',
                gap: 8,
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {feedbacks.map((item, index) => (
                <div key={`f-744-${index}`} style={{ scrollSnapAlign: 'start' }}>
                  <FeedbackCard item={item} width={400} delay={index * 0.05} onReadMore={() => setActiveIndex(index)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile 375 (Figma: 8389:34708) */}
      <section className="bg-white rounded-[32px] mb-[8px] hidden max-375:block" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="mx-auto w-full max-w-[375px] px-[20px]">
          <div style={{ width: 335 }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                width: 335,
                height: 28,
                margin: 0,
                fontSize: 24,
                lineHeight: '28px',
                fontWeight: 500,
                letterSpacing: '-1px',
                color: '#242424',
              }}
            >
              Отзывы наших поставщиков
            </motion.h2>

            {/* Card viewport: x=0,y=44,w=335,h=600 */}
            <div
              ref={carouselRef}
              onScroll={(e) => {
                const el = e.currentTarget;
                const step = 335 + 8;
                const idx = Math.round(el.scrollLeft / step);
                if (idx !== carouselIndex) setCarouselIndex(Math.max(0, Math.min(feedbacks.length - 1, idx)));
              }}
              style={{
                marginTop: 16,
                width: 335,
                height: 600,
                overflowX: 'auto',
                overflowY: 'hidden',
                display: 'flex',
                gap: 8,
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {feedbacks.map((item, index) => (
                <div key={`f-375-${index}`} style={{ scrollSnapAlign: 'start' }}>
                  <FeedbackCard item={item} width={335} height={600} lineClamp={18} delay={index * 0.05} onReadMore={() => setActiveIndex(index)} />
                </div>
              ))}
            </div>

            {/* Dots: Frame 2087327762 (w=335,h=8), gap 7, centered */}
            <div style={{ marginTop: 8, width: 335, height: 8, display: 'flex', gap: 7, alignItems: 'center', justifyContent: 'center' }}>
              {feedbacks.map((_, idx) => {
                const activeDot = idx === carouselIndex;
                return (
                  <button
                    key={`dot-${idx}`}
                    type="button"
                    aria-label={`Перейти к отзыву ${idx + 1}`}
                    onClick={() => {
                      const el = carouselRef.current;
                      if (!el) return;
                      const step = 335 + 8;
                      el.scrollTo({ left: idx * step, behavior: 'smooth' });
                      setCarouselIndex(idx);
                    }}
                    style={{
                      width: activeDot ? 12 : 8,
                      height: 8,
                      borderRadius: 9999,
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      backgroundColor: activeDot ? '#59AD3B' : '#EDEDED',
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Modal (общий для desktop + 744) */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-[24px] max-375:p-[20px]"
            style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
            onMouseDown={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.15 }}
              className="w-[800px] max-w-full flex flex-col items-end gap-[8px] max-375:w-[335px]"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Закрыть"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '16px',
                  padding: '14px',
                  backgroundColor: '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src="/images/feedback-close.svg" alt="" style={{ width: '10.667px', height: '10.667px' }} />
              </button>

              <div
                className="w-[800px] max-w-full h-[462px] bg-white rounded-[24px] p-[32px] flex flex-col gap-[16px] max-375:w-[335px] max-375:h-[600px]"
                style={{ maxHeight: 'calc(100vh - 120px)' }}
              >
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '204px',
                      border: '2px solid #F7F7F7',
                      position: 'relative',
                      flexShrink: 0,
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      alt=""
                      src={active.avatarSrc}
                      style={{
                        position: 'absolute',
                        inset: '-2px',
                        width: 'calc(100% + 4px)',
                        height: 'calc(100% + 4px)',
                        maxWidth: 'none',
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: '#848484', fontSize: '14px', lineHeight: '20px' }}>{active.position}</div>
                  </div>
                </div>

                <div style={{ flex: 1, overflow: 'auto' }}>
                  <div style={{ color: '#242424', fontSize: '16px', lineHeight: '24px', letterSpacing: '-0.2px' }}>
                    {active.paragraphs.map((p, i) => (
                      <p key={i} style={{ marginBottom: i === active.paragraphs.length - 1 ? 0 : 12 }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Feedback;
