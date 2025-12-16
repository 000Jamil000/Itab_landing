const Footer = () => {
  return (
    <footer className="bg-white pt-[60px] pb-5 rounded-t-2xl px-[40px]">
      <div className="mx-auto w-full max-w-[1360px] flex flex-col gap-10">
        {/* Top: columns + contact/social */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col justify-between self-stretch">
            <div className="flex items-center justify-between w-[779px]">
              {/* Column 1 */}
              <div className="flex flex-col gap-4 items-center w-[168px]">
                <p className="w-full text-text-primary text-[16px] leading-6 tracking-[-0.2px] font-medium">
                  Клиентам
                </p>
                <div className="w-full flex flex-col gap-3 text-[16px] leading-[22px] tracking-[-0.2px]">
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

              {/* Column 2 */}
              <div className="flex flex-col gap-4 items-start w-[169px]">
                <p className="text-text-primary text-[16px] leading-6 tracking-[-0.2px] font-medium">
                  Услуги
                </p>
                <div className="w-[147px] flex flex-col gap-3 text-text-secondary text-[16px] leading-[22px] tracking-[-0.2px]">
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

              {/* Column 3 */}
              <div className="flex flex-col gap-4 items-start w-[168px]">
                <p className="w-full text-text-primary text-[16px] leading-6 tracking-[-0.2px] font-medium">
                  О&nbsp;компании
                </p>
                <div className="w-full flex flex-col gap-3 text-text-secondary text-[16px] leading-[22px] tracking-[-0.2px]">
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

              {/* Column 4 */}
              <div className="flex flex-col gap-4 items-start w-[168px]">
                <p className="text-text-primary text-[16px] leading-6 tracking-[-0.2px] font-medium">
                  Поддержка
                </p>
                <div className="w-[147px] flex flex-col gap-3 text-text-secondary text-[16px] leading-[22px] tracking-[-0.2px]">
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

            {/* Podcasts card */}
            <div className="bg-bg-tertiary rounded-[20px]">
              <div className="flex h-[80px] items-start justify-between w-full">
                <div className="flex items-center gap-5 p-3 rounded-[12px]">
                  <div className="flex items-center gap-3">
                    <img src="/images/footer-podcast-icon.png" alt="" className="w-10 h-10" />
                    <div className="text-text-primary text-[16px] leading-6 tracking-[-0.2px]">
                      Подкасты о&nbsp;здоровье
                    </div>
                  </div>
                  <button
                    type="button"
                    className="bg-white rounded-2xl px-8 py-4 text-accent-green text-[16px] leading-6 tracking-[-0.2px] font-medium"
                  >
                    Слушать
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: contact + socials */}
          <div className="w-[443px] flex flex-col gap-12 items-start">
            <div className="w-full flex flex-col gap-6">
              <div className="w-full flex flex-col gap-4">
                <div className="flex items-center gap-2 text-text-primary text-[16px] tracking-[-0.2px]">
                  <span className="font-medium leading-6">Горячая линия</span>
                  <a href="tel:+74956500000" className="leading-6">
                    +7&nbsp;495&nbsp;650-00-00
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 text-text-secondary text-[16px] leading-[22px] tracking-[-0.2px]">
                  <span>c 10 до 19 (пн-пт)</span>
                  <span className="h-5 w-0 flex items-center justify-center">
                    <span className="rotate-90 block">
                      <img src="/images/footer-divider-vert.svg" alt="" className="w-5 h-px" />
                    </span>
                  </span>
                  <span>c 10 до 16 (сб-вс) по Москве</span>
                </div>
              </div>

              <div className="w-full flex gap-3 items-start">
                <button
                  type="button"
                  className="bg-bg-tertiary border border-bg-tertiary rounded-2xl px-8 py-4 text-accent-green text-[16px] leading-6 tracking-[-0.2px] font-medium"
                >
                  Написать нам
                </button>
                <button
                  type="button"
                  className="flex-1 bg-bg-tertiary border border-bg-tertiary rounded-2xl px-8 py-4 text-accent-blue text-[16px] leading-6 tracking-[-0.2px] font-medium"
                >
                  Не нашли нужный товар?
                </button>
              </div>
            </div>

            <div className="w-full flex flex-col gap-3">
              <div className="text-text-primary text-[16px] leading-6 tracking-[-0.2px] font-medium">
                Мы в социальных сетях
              </div>
              <div className="flex gap-3 items-start">
                <a href="#" className="bg-bg-primary rounded-lg p-[9px] w-[44px] h-[44px] flex items-center justify-center">
                  <img src="/images/footer-social-vk.svg" alt="VK" className="w-6 h-6" />
                </a>
                <a href="#" className="bg-bg-primary rounded-lg p-[9px] w-[44px] h-[44px] flex items-center justify-center">
                  <img src="/images/footer-social-youtube.svg" alt="YouTube" className="w-6 h-6" />
                </a>
                <a href="#" className="bg-bg-primary rounded-lg p-[9px] w-[44px] h-[44px] flex items-center justify-center">
                  <img src="/images/footer-social-tiktok.svg" alt="TikTok" className="w-6 h-6" />
                </a>
                <a href="#" className="bg-bg-primary rounded-lg p-[9px] w-[44px] h-[44px] flex items-center justify-center">
                  <img src="/images/footer-social-huawei.svg" alt="Huawei" className="w-6 h-6" />
                </a>
                <a href="#" className="bg-bg-primary rounded-lg p-[9px] w-[44px] h-[44px] flex items-center justify-center">
                  <img src="/images/footer-social-odnoklassniki.svg" alt="OK" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile app offer + bottom menu */}
        <div className="w-full flex flex-col gap-5 items-start">
          <div className="w-full bg-bg-tertiary rounded-3xl p-8 flex items-center justify-between">
            <div className="w-[368px] text-text-primary text-[16px] leading-[22px] tracking-[-0.2px]">
              <p className="mb-0">У&nbsp;нас&nbsp;есть&nbsp;мобильное приложение.</p>
              <p>Наведите камеру на&nbsp;QR-код, чтобы&nbsp;скачать</p>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-white border border-bg-tertiary rounded-2xl w-[82px] h-[82px] flex items-center justify-center">
                <img src="/images/footer-qr.png" alt="QR" className="w-[61px] h-[61px] rounded-[10px]" />
              </div>

              <div className="w-[495px] flex items-center gap-3">
                <button
                  type="button"
                  className="flex-1 h-[80px] bg-white rounded-[20px] px-[22px] py-7 flex items-center justify-center"
                >
                  <div className="flex items-center gap-2">
                    <span className="bg-bg-primary rounded-lg p-[9px] w-[44px] h-[44px] flex items-center justify-center">
                      <img src="/images/footer-store-google.svg" alt="" className="w-6 h-6" />
                    </span>
                    <span className="text-text-primary text-[16px] leading-6 tracking-[-0.2px]">
                      Google Play
                    </span>
                  </div>
                </button>
                <button
                  type="button"
                  className="flex-1 h-[80px] bg-white rounded-[24px] px-[22px] py-7 flex items-center justify-center"
                >
                  <div className="flex items-center gap-2">
                    <span className="bg-bg-primary rounded-xl p-[9px] w-[44px] h-[44px] flex items-center justify-center">
                      <span className="block scale-y-[-1]">
                        <img src="/images/footer-store-apple.svg" alt="" className="w-6 h-6" />
                      </span>
                    </span>
                    <span className="text-text-primary text-[16px] leading-6 tracking-[-0.2px]">
                      App Store
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-5 items-start">
            <div className="w-full h-px">
              <img src="/images/footer-divider-horz.svg" alt="" className="w-full h-px" />
            </div>

            <div className="w-full flex items-start justify-between">
              <div className="w-[851.5px] text-text-tertiary text-[14px] leading-6">
                ООО&nbsp;«Ай&nbsp;ТАБ», 2020–2024. Все&nbsp;права защищены.
              </div>
              <div className="flex items-center gap-4 text-text-secondary text-[14px] leading-6">
                <a href="#" className="text-text-secondary">
                  Пользовательское соглашение
                </a>
                <a href="#" className="text-text-secondary">
                  Согласие на обработку персональных данных
                </a>
                <a href="#" className="text-text-secondary">
                  Оферта для&nbsp;поставщиков
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
