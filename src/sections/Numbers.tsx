import { motion } from 'framer-motion';

interface StatCardProps {
  iconSrc: string;
  number: string;
  label: React.ReactNode;
  delay: number;
}

const StatCard = ({ iconSrc, number, label, delay }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-[8px] pb-0 pt-[8px] px-0 w-[291.75px] shrink-0"
    >
      {/* Icon with glass effect */}
      <div className="relative w-[48px] h-[48px]">
        <div className="absolute left-[2.61px] top-[-13.39px] w-[58.788px] h-[58.788px] flex items-center justify-center pointer-events-none">
          <div className="rotate-[15deg] w-[48px] h-[48px] bg-primary rounded-[16px]" />
        </div>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-xs border border-white/60 rounded-[16px] flex items-center justify-center p-[12px]">
          <img src={iconSrc} alt="" className="w-[24px] h-[24px] block max-w-none" />
        </div>
      </div>
      
      {/* Text */}
      <div className="text-center leading-none w-full">
        <div className="text-[20px] leading-[24px] font-medium text-secondary">{number}</div>
        <div className="text-[14px] leading-[20px] font-normal text-tertiary">{label}</div>
      </div>
    </motion.div>
  );
};

const Numbers = () => {
  const stats = [
    {
      iconSrc: '/images/numbers-icon-1.svg',
      number: '300 000+',
      label: (
        <>
          потенциальных покупателей <br />в месяц
        </>
      ),
    },
    {
      iconSrc: '/images/numbers-icon-2.svg',
      number: '100 000+',
      label: (
        <>
          зарегистрированных <br />
          пользователей
        </>
      ),
    },
    {
      iconSrc: '/images/numbers-icon-3.svg',
      number: '5 000+',
      label: (
        <>
          экспертов будут рекомендовать <br />
          ваши продукты
        </>
      ),
    },
    {
      iconSrc: '/images/numbers-icon-4.svg',
      number: 'Более 160',
      label: (
        <>
          поставщиков <br />
          доверяют нам
        </>
      ),
    },
  ];

  return (
    <section className="relative z-10 mt-[-32px] mb-[8px]">
      {/* White block (separate container) */}
      <div className="w-full bg-white rounded-[32px] py-[20px]">
        <div className="mx-auto w-[1200px] h-[128px] flex items-center gap-[11px]">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              iconSrc={stat.iconSrc}
              number={stat.number}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
