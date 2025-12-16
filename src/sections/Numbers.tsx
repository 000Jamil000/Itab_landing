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
      className="flex flex-col items-center gap-2 pb-0 pt-2 px-0 flex-1 min-w-0"
    >
      {/* Icon with glass effect */}
      <div className="relative w-12 h-12">
        <div className="absolute left-[2.61px] top-[-13.39px] w-[58.788px] h-[58.788px] flex items-center justify-center pointer-events-none">
          <div className="rotate-[15deg] w-12 h-12 bg-primary rounded-2xl" />
        </div>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-xs border border-white/60 rounded-2xl flex items-center justify-center p-3">
          <img src={iconSrc} alt="" className="w-6 h-6 block max-w-none" />
        </div>
      </div>
      
      {/* Text */}
      <div className="text-center leading-none w-full">
        <div className="text-h5 text-secondary">{number}</div>
        <div className="text-body-14 text-tertiary leading-5">{label}</div>
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
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-0" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="bg-white rounded-4xl h-[128px] flex items-center justify-center">
          <div className="w-full flex items-center gap-[11px]">
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
      </div>
    </section>
  );
};

export default Numbers;
