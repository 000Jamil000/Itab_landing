const Footer = () => {
  return (
    <footer className="bg-white h-[600px] box-border flex flex-col gap-[40px] items-center pt-[60px] pb-[20px] px-[40px] rounded-tl-[16px] rounded-tr-[16px]">
      {/* Top block is 1360px wide (per Figma) */}
      <div className="w-[1360px] flex items-start justify-between">
          {/* Left */}
          <div className="flex flex-col items-start justify-between self-stretch">
            {/* Columns */}
            <div className="w-[779px] flex items-center justify-between">
              <div className="w-[168px] flex flex-col gap-[16px] items-center">
                <p className="w-full text-[16px] leading-[24px] tracking-[-0.2px] font-medium text-text-primary">
                  Клиентам
                </p>
                <div className="w-full flex flex-col gap-[12px] text-[16px] leading-[22px] tracking-[-0.2px]">
                  <a href="#" className="text-accent-green">
                    Каталог
                  </a>
                  <a href="#" className="text-text-secondary">
                    Оплата заказов
                  </a>
                  <a href="#" className="text-text-secondary">
                    Способы доставки
                  </a>
                </div>
              </div>

              <div className="w-[169px] flex flex-col gap-[16px] items-start">
                <p className="text-[16px] leading-[24px] tracking-[-0.2px] font-medium text-text-primary">
                  Услуги
                </p>
                <div className="w-[147px] flex flex-col gap-[12px] text-text-secondary text-[16px] leading-[22px] tracking-[-0.2px]">
                  <a href="#" className="text-text-secondary">
                    Подбор&nbsp;БАД
                  </a>
                  <a href="#" className="text-text-secondary">
                    Консультации
                  </a>
                  <a href="#" className="text-text-secondary">
                    Онлайн-курсы
                  </a>
                </div>
              </div>

              <div className="w-[168px] flex flex-col gap-[16px] items-start">
                <p className="w-full text-[16px] leading-[24px] tracking-[-0.2px] font-medium text-text-primary">
                  О&nbsp;компании
                </p>
                <div className="w-full flex flex-col gap-[12px] text-text-secondary text-[16px] leading-[22px] tracking-[-0.2px]">
                  <a href="#" className="text-text-secondary">
                    О&nbsp;нас
                  </a>
                  <a href="#" className="text-text-secondary">
                    Поставщикам
                  </a>
                  <a href="#" className="text-text-secondary">
                    Оптовым клиентам
                  </a>
                </div>
              </div>

              <div className="w-[168px] flex flex-col gap-[16px] items-start">
                <p className="text-[16px] leading-[24px] tracking-[-0.2px] font-medium text-text-primary">
                  Поддержка
                </p>
                <div className="w-[147px] flex flex-col gap-[12px] text-text-secondary text-[16px] leading-[22px] tracking-[-0.2px]">
                  <a href="#" className="text-text-secondary">
                    Контакты
                  </a>
                  <a href="#" className="text-text-secondary">
                    Частые вопросы
                  </a>
                  <a href="#" className="text-text-secondary">
                    Возврат продукции
                  </a>
                </div>
              </div>
            </div>

            {/* Podcasts */}
            <div className="bg-bg-tertiary rounded-[20px]">
              <div className="h-[80px] flex flex-col items-start justify-between w-full">
                <div className="p-[12px] rounded-[12px] flex items-center gap-[20px]">
                  <div className="flex items-center gap-[12px]">
                    <img src="/images/footer-podcast-icon.svg" alt="" className="w-[40px] h-[40px]" />
                    <div className="text-[#202020] text-[16px] leading-[24px] tracking-[-0.2px]">
                      Подкасты о&nbsp;здоровье
                    </div>
                  </div>
                  <button
                    type="button"
                    className="bg-white rounded-[16px] px-[32px] py-[16px] text-[#59AD3B] text-[16px] leading-[24px] tracking-[-0.2px] font-medium"
                  >
                    Слушать
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-[443px] flex flex-col gap-[48px] items-start">
            <div className="w-full flex flex-col gap-[24px] items-start">
              <div className="w-full flex flex-col gap-[16px] items-start">
                <div className="flex items-center gap-[8px] text-[#202020] text-[16px] tracking-[-0.2px] whitespace-nowrap">
                  <span className="font-medium leading-[24px]">Горячая линия</span>
                  <span className="font-normal leading-[24px]">+7&nbsp;495&nbsp;650-00-00</span>
                </div>

                <div className="flex items-center justify-center gap-[8px] text-[#7B7B7B] text-[16px] leading-[22px] tracking-[-0.2px] whitespace-nowrap">
                  <span>c 10 до 19 (пн-пт)</span>
                  <span className="w-0 h-[20px] flex items-center justify-center">
                    <span className="rotate-90 block">
                      <img src="/images/footer-divider-vert.svg" alt="" className="w-[20px] h-px block" />
                    </span>
                  </span>
                  <span>c 10 до 16 (сб-вс) по Москве</span>
                </div>
              </div>

              <div className="w-full flex gap-[12px] items-start">
                <button
                  type="button"
                  className="bg-bg-tertiary border border-bg-tertiary rounded-[16px] px-[32px] py-[16px] text-[#59AD3B] text-[16px] leading-[24px] tracking-[-0.2px] font-medium"
                >
                  Написать нам
                </button>
                <button
                  type="button"
                  className="flex-1 bg-bg-tertiary border border-bg-tertiary rounded-[16px] px-[32px] py-[16px] text-[#398FF5] text-[16px] leading-[24px] tracking-[-0.2px] font-medium"
                >
                  Не нашли нужный товар?
                </button>
              </div>
            </div>

            <div className="w-full flex flex-col gap-[12px] items-start">
              <div className="text-[#202020] text-[16px] leading-[24px] tracking-[-0.2px] font-medium whitespace-nowrap">
                Мы в социальных сетях
              </div>
              <div className="w-full flex gap-[12px] items-start">
                <a href="#" className="w-[44px] h-[44px] block">
                  <img src="/images/footer-icon-vk-44.svg" alt="" className="w-[44px] h-[44px] block" />
                </a>
                <a href="#" className="bg-bg-primary rounded-[8px] p-[9px] w-[44px] h-[44px] flex items-center justify-center">
                  <img src="/images/footer-social-youtube.svg" alt="" className="w-[24px] h-[24px]" />
                </a>
                <a href="#" className="bg-bg-primary rounded-[8px] p-[9px] w-[44px] h-[44px] flex items-center justify-center">
                  <img src="/images/footer-social-tiktok.svg" alt="" className="w-[24px] h-[24px]" />
                </a>
                <a href="#" className="bg-bg-primary rounded-[8px] p-[9px] w-[44px] h-[44px] flex items-center justify-center">
                  <img src="/images/footer-social-huawei.svg" alt="" className="w-[24px] h-[24px]" />
                </a>
                <a href="#" className="bg-bg-primary rounded-[8px] p-[9px] w-[44px] h-[44px] flex items-center justify-center">
                  <img src="/images/footer-social-odnoklassniki.svg" alt="" className="w-[24px] h-[24px]" />
                </a>
              </div>
            </div>
          </div>
      </div>

      {/* Bottom block is full width inside footer (1840px because of px-[40px]) */}
      <div className="w-full flex flex-col gap-[20px] items-start">
        <div className="w-full bg-bg-tertiary rounded-[24px] p-[32px] flex items-center justify-between">
          <div className="w-[368px] text-[#202020] text-[16px] leading-[22px] tracking-[-0.2px]">
            <p className="mb-0">У&nbsp;нас&nbsp;есть&nbsp;мобильное приложение.</p>
            <p>Наведите камеру на&nbsp;QR-код, чтобы&nbsp;скачать</p>
          </div>

          <div className="flex items-center gap-[20px]">
            <div className="bg-white border border-bg-tertiary border-solid rounded-[16px] w-[82px] h-[82px] p-[9.07px] box-border">
              <img src="/images/footer-qr.svg" alt="" className="w-[61px] h-[61px] rounded-[10px] block" />
            </div>

            <div className="w-[495px] flex items-center gap-[12px]">
              <button
                type="button"
                className="flex-1 h-[80px] bg-white rounded-[20px] px-[22px] py-[28px] flex items-center justify-center"
              >
                <div className="flex items-center gap-[8px]">
                  <img src="/images/footer-icon-googleplay-44.svg" alt="" className="w-[44px] h-[44px] block" />
                  <span className="text-[#202020] text-[16px] leading-[24px] tracking-[-0.2px] whitespace-nowrap">
                    Google Play
                  </span>
                </div>
              </button>

              <button
                type="button"
                className="flex-1 h-[80px] bg-white rounded-[24px] px-[22px] py-[28px] flex items-center justify-center"
              >
                <div className="flex items-center gap-[8px]">
                  <span className="bg-bg-primary rounded-[12px] p-[9px] w-[44px] h-[44px] flex items-center justify-center">
                    <span className="block" style={{ transform: 'scaleY(-1)' }}>
                      <img src="/images/footer-store-apple.svg" alt="" className="w-[24px] h-[24px] block" />
                    </span>
                  </span>
                  <span className="text-[#202020] text-[16px] leading-[24px] tracking-[-0.2px] whitespace-nowrap">
                    App Store
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-[20px] items-start">
          <div className="w-full h-px">
            <img src="/images/footer-divider-horz.svg" alt="" className="w-full h-px block" />
          </div>

          <div className="w-full flex items-start justify-between">
            <div className="w-[851.5px] text-[#A5A5A5] text-[14px] leading-[24px] whitespace-nowrap">
              ООО&nbsp;«Ай&nbsp;ТАБ», 2020–2024. Все&nbsp;права защищены.
            </div>
            <div className="flex items-center gap-[16px] text-[#7B7B7B] text-[14px] leading-[24px]">
              <a href="#" className="text-[#7B7B7B]">
                Пользовательское соглашение
              </a>
              <a href="#" className="text-[#7B7B7B]">
                Согласие на обработку персональных данных
              </a>
              <a href="#" className="text-[#7B7B7B]">
                Оферта для&nbsp;поставщиков
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
