import { motion } from 'framer-motion';

interface PartnershipCardProps {
  iconSrc: string;
  iconAlt: string;
  iconCrop: { left: string; top: string; width: string; height: string };
  title: React.ReactNode;
  description: React.ReactNode;
  delay: number;
}

const PartnershipCard = ({ iconSrc, iconAlt, iconCrop, title, description, delay }: PartnershipCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-[#F7F7F7] rounded-[24px] p-8 h-[314px] overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <div className="relative w-[100px] h-[100px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt={iconAlt}
              className="absolute max-w-none"
              src={iconSrc}
              style={iconCrop}
            />
          </div>
        </div>
        <h3 className="text-h4 text-secondary">{title}</h3>
      </div>
      <p className="text-body-16 text-tertiary mt-3 leading-[22px]">{description}</p>
    </motion.div>
  );
};

const Partnerships = () => {
  const benefits = [
    {
      iconSrc: '/images/partnerships-icon-1.png',
      iconAlt: '',
      iconCrop: { left: '-13.93%', top: '-13.28%', width: '127.87%', height: '127.87%' },
      title: <>Прозрачные условия сотрудничества</>,
      description: (
        <>
          Никаких скрытых комиссий и внезапных платежей — вы всегда знаете, сколько <br />
          и за что платите
        </>
      ),
    },
    {
      iconSrc: '/images/partnerships-icon-2.png',
      iconAlt: '',
      iconCrop: { left: '-12.79%', top: '-13.44%', width: '126.14%', height: '126.14%' },
      title: (
        <>
          Персональные условия <br />и гибкие скидки&nbsp;
        </>
      ),
      description: (
        <>
          Мы подстраиваемся под ваш бизнес <br />
          и создаём выгодные условия для роста
        </>
      ),
    },
    {
      iconSrc: '/images/partnerships-icon-3.png',
      iconAlt: '',
      iconCrop: { left: '-17.66%', top: '-17.9%', width: '135.32%', height: '135.32%' },
      title: (
        <>
          Возвраты <br />
          без хлопот
        </>
      ),
      description: (
        <>
          Все этапы возврата мы берём на себя — <br />
          вы просто продолжаете продавать
        </>
      ),
    },
    {
      iconSrc: '/images/partnerships-icon-4.png',
      iconAlt: '',
      iconCrop: { left: '-2.56%', top: '-5.11%', width: '105.11%', height: '105.11%' },
      title: (
        <>
          Персональный <br />
          менеджер
        </>
      ),
      description: <>У поставщика есть менеджер, который знает ваш бизнес и всегда на связи, чтобы помочь и ответить на любые вопросы</>,
    },
    {
      iconSrc: '/images/partnerships-icon-5.png',
      iconAlt: '',
      iconCrop: { left: '-18.97%', top: '-18.87%', width: '137.17%', height: '137.17%' },
      title: <>Поддержка и развитие платформы</>,
      description: <>Оперативная техподдержка и регулярные обновления помогают работать без сбоев</>,
    },
    {
      iconSrc: '/images/partnerships-icon-6.png',
      iconAlt: '',
      iconCrop: { left: '-22.51%', top: '-21.87%', width: '144.05%', height: '144.05%' },
      title: (
        <>
          Эксклюзивные акции <br />
          и продвижение
        </>
      ),
      description: (
        <>
          Участие в маркетинговых кампаниях iTAB, увеличение продаж через наши медиа <br />
          и коллаборации
        </>
      ),
    },
  ];

  return (
    <section className="bg-white rounded-[32px] py-[80px] mb-[8px]">
      <div className="mx-auto w-[1200px]">
        <div className="flex flex-row gap-[40px] mb-[40px] items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-h2 text-secondary leading-tight">
              Мы строим долгосрочные партнёрства, где ваш рост — <br />
              наш главный приоритет
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1"
          >
            <p className="text-body-16 text-tertiary leading-relaxed">
              На iTAB вы не просто размещаете товары — вы развиваете бизнес вместе <br />
              с экспертной платформой, которая помогает продавать больше, выстраивать доверие и расти вместе с рынком интегративного здоровья.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-4" style={{ gridTemplateColumns: '389.333px 389.333px 389.333px' }}>
          {benefits.map((benefit, index) => (
            <PartnershipCard
              key={index}
              {...benefit}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
