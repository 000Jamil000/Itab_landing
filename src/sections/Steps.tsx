import { motion } from 'framer-motion';

interface StepCardProps {
  number: string;
  title: string;
  description: React.ReactNode;
  time: string;
  delay: number;
}

const StepCard = ({ number, title, description, time, delay }: StepCardProps) => {
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
        justifyContent: 'space-between',
        height: '300px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '32px',
            backgroundColor: '#59AD3B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            padding: '12px',
          }}
        >
          <span style={{ color: '#FFFFFF', fontWeight: 400, fontSize: '16px', lineHeight: '22px', letterSpacing: '-0.2px' }}>
            {number}
          </span>
        </div>

        <h3 className="text-h4" style={{ color: '#242424' }}>
          {title}
        </h3>

        <div style={{ color: '#848484', fontSize: '16px', lineHeight: '24px', letterSpacing: '-0.2px' }}>
          {description}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '24px' }}>
        <img src="/images/steps-clock.svg" alt="" style={{ width: '24px', height: '24px' }} />
        <span style={{ color: '#C1C1C1', fontSize: '16px', lineHeight: '22px', fontWeight: 500 }}>
          {time}
        </span>
      </div>
    </motion.div>
  );
};

const Steps = () => {
  const steps = [
    {
      number: '1',
      title: 'Зарегистрируйтесь',
      description: (
        <>
          Укажите контакты и реквизиты — <br />
          мы свяжемся с вами и пришлём условия сотрудничества.
        </>
      ),
      time: 'до 3х рабочих дней',
    },
    {
      number: '2',
      title: 'Загрузите товары',
      description: (
        <>
          Заполните форму, а наша медицинская комиссия проверит товары <br />
          на соответствие требованиям.
        </>
      ),
      time: '5–10 рабочих дня',
    },
    {
      number: '3',
      title: 'Пройдите модерацию',
      description: (
        <>
          В течении 7 дней мы проверим товары <br />
          на качество, и откроем полный доступ <br />
          к кабинету поставщика.
        </>
      ),
      time: 'до 7 рабочих дней',
    },
    {
      number: '4',
      title: 'Запланируйте поставку',
      description: <>Настройте первую поставку и начинайте работать на платформе.</>,
      time: '1 день',
    },
  ];

  return (
    <section id="steps" className="bg-white" style={{ padding: '80px 0' }}>
      <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-0">
        <motion.h2 
          className="text-h2"
          style={{ color: '#242424', marginBottom: '40px', textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Всего 4 шага, чтобы начать продавать
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left side - 4 step cards in 2x2 grid */}
          <div
            className="grid gap-4"
            style={{
              width: '100%',
              maxWidth: '792px',
              gridTemplateColumns: '1fr 1fr',
            }}
          >
            <div style={{ width: '388px' }}><StepCard {...steps[0]} delay={0} /></div>
            <div style={{ width: '388px' }}><StepCard {...steps[1]} delay={0.1} /></div>
            <div style={{ width: '388px' }}><StepCard {...steps[2]} delay={0.2} /></div>
            <div style={{ width: '388px' }}><StepCard {...steps[3]} delay={0.3} /></div>
          </div>

          {/* Right side - Green banner with phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              backgroundColor: '#59AD3B',
              borderRadius: '24px',
              border: '1px solid #B7DAAA',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              width: '392px',
              height: '616px',
            }}
            className="w-full lg:w-[392px]"
          >
            {/* Green spot (bottom) */}
            <div
              style={{
                position: 'absolute',
                right: '-163px',
                bottom: '-113px',
                width: '692px',
                height: '404px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
              }}
            >
              <div style={{ transform: 'rotate(90deg) scaleY(-1)', width: '404px', height: '692px' }}>
                <img src="/images/steps-spot-green.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none' }} />
              </div>
            </div>

            {/* Phone image */}
            <div
              style={{
                position: 'absolute',
                left: '40px',
                top: '8px',
                width: '308.152px',
                height: '630px',
                pointerEvents: 'none',
              }}
            >
              <img src="/images/steps-phone.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Light spot big */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                bottom: '-666.48px',
                width: '1150.475px',
                height: '1150.475px',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
              }}
            >
              <div style={{ transform: 'rotate(225deg)', width: '813.509px', height: '813.509px' }}>
                <img src="/images/steps-spot-light.svg" alt="" style={{ width: '100%', height: '100%', maxWidth: 'none' }} />
              </div>
            </div>

            {/* CTA Button */}
            <button
              style={{
                width: '196px',
                height: '56px',
                padding: '16px 20px',
                backgroundColor: '#59AD3B',
                color: '#FFFFFF',
                borderRadius: '16px',
                border: 'none',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 2,
              }}
            >
              Зарегистрироваться
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
