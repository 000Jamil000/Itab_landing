const Footer = () => {
  return (
    <>
      {/* Tablet 744 (Figma: footer 744x962) */}
      <footer className="bg-white h-[962px] box-border hidden max-744:flex max-375:hidden flex-col gap-[40px] items-center pt-[60px] pb-[20px] px-[40px] rounded-tl-[16px] rounded-tr-[16px]">
        <div className="w-[664px] flex flex-col gap-[40px] items-start">
          {/* Links grid (2 columns) */}
          <div className="w-full grid" style={{ gridTemplateColumns: '1fr 1fr', columnGap: '40px', rowGap: '24px' }}>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[16px] leading-[24px] tracking-[-0.2px] font-medium text-text-primary">Клиентам</p>
              <div className="flex flex-col gap-[12px] text-[16px] leading-[22px] tracking-[-0.2px]">
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

            <div className="flex flex-col gap-[16px]">
              <p className="text-[16px] leading-[24px] tracking-[-0.2px] font-medium text-text-primary">Услуги</p>
              <div className="flex flex-col gap-[12px] text-text-secondary text-[16px] leading-[22px] tracking-[-0.2px]">
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

            <div className="flex flex-col gap-[16px]">
              <p className="text-[16px] leading-[24px] tracking-[-0.2px] font-medium text-text-primary">О&nbsp;компании</p>
              <div className="flex flex-col gap-[12px] text-text-secondary text-[16px] leading-[22px] tracking-[-0.2px]">
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

            <div className="flex flex-col gap-[16px]">
              <p className="text-[16px] leading-[24px] tracking-[-0.2px] font-medium text-text-primary">Поддержка</p>
              <div className="flex flex-col gap-[12px] text-text-secondary text-[16px] leading-[22px] tracking-[-0.2px]">
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
          <div className="w-full bg-bg-tertiary rounded-[20px]">
            <div className="h-[80px] flex items-center justify-between w-full p-[12px] rounded-[12px]">
              <div className="flex items-center gap-[12px]">
                <img src="/images/footer-podcast-icon.svg" alt="" className="w-[40px] h-[40px]" />
                <div className="text-[#202020] text-[16px] leading-[24px] tracking-[-0.2px]">Подкасты о&nbsp;здоровье</div>
              </div>
              <button type="button" className="bg-white rounded-[16px] px-[32px] py-[16px] text-[#59AD3B] text-[16px] leading-[24px] tracking-[-0.2px] font-medium">
                Слушать
              </button>
          </div>
        </div>

          {/* Hotline + socials */}
          <div className="w-full flex flex-col gap-[24px] items-start">
            <div className="w-full flex flex-col gap-[12px] items-start">
              <div className="flex items-center gap-[8px] text-[#202020] text-[16px] tracking-[-0.2px] whitespace-nowrap">
                <span className="font-medium leading-[24px]">Горячая линия</span>
                <span className="font-normal leading-[24px]">+7&nbsp;495&nbsp;650-00-00</span>
              </div>
              <div className="flex items-center gap-[8px] text-[#7B7B7B] text-[16px] leading-[22px] tracking-[-0.2px] flex-wrap">
                <span>c 10 до 19 (пн-пт)</span>
                <span className="w-[1px] h-[20px] bg-[#E6E6E6] inline-block" />
                <span>c 10 до 16 (сб-вс) по Москве</span>
              </div>
            </div>

            {/* Two buttons stack (Figma 744: two full-width buttons 664x80) */}
            <div className="w-full flex flex-col gap-[32px]">
              <button type="button" className="w-full h-[80px] bg-bg-tertiary rounded-[20px] px-[32px] py-[28px] text-[#59AD3B] text-[16px] leading-[24px] tracking-[-0.2px] font-medium">
                Написать нам
              </button>
              <button type="button" className="w-full h-[80px] bg-bg-tertiary rounded-[20px] px-[32px] py-[28px] text-[#398FF5] text-[16px] leading-[24px] tracking-[-0.2px] font-medium">
                Не нашли нужный товар?
              </button>
            </div>

            <div className="w-full flex flex-col gap-[12px] items-start">
              <div className="text-[#202020] text-[16px] leading-[24px] tracking-[-0.2px] font-medium">Мы в социальных сетях</div>
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

          {/* Mobile app (compact 744) */}
          <div className="w-full bg-bg-tertiary rounded-[24px] p-[24px] flex flex-col gap-[20px]">
            <div className="text-[#202020] text-[16px] leading-[22px] tracking-[-0.2px]">
              <p className="mb-0">У&nbsp;нас&nbsp;есть&nbsp;мобильное приложение.</p>
              <p>Наведите камеру на&nbsp;QR-код, чтобы&nbsp;скачать</p>
            </div>
            <div className="w-full flex items-center justify-between gap-[16px]">
              <div className="bg-white border border-bg-tertiary border-solid rounded-[16px] w-[82px] h-[82px] p-[9.07px] box-border shrink-0">
                <img src="/images/footer-qr.svg" alt="" className="w-[61px] h-[61px] rounded-[10px] block" />
              </div>
              <div className="flex-1 flex items-center gap-[12px]">
                <button type="button" className="flex-1 h-[80px] bg-white rounded-[20px] px-[22px] py-[28px] flex items-center justify-center">
                  <div className="flex items-center gap-[8px]">
                    <img src="/images/footer-icon-googleplay-44.svg" alt="" className="w-[44px] h-[44px] block" />
                    <span className="text-[#202020] text-[16px] leading-[24px] tracking-[-0.2px] whitespace-nowrap">Google Play</span>
                  </div>
                </button>
                <button type="button" className="flex-1 h-[80px] bg-white rounded-[24px] px-[22px] py-[28px] flex items-center justify-center">
                  <div className="flex items-center gap-[8px]">
                    <span className="bg-bg-primary rounded-[12px] p-[9px] w-[44px] h-[44px] flex items-center justify-center">
                      <span className="block" style={{ transform: 'scaleY(-1)' }}>
                        <img src="/images/footer-store-apple.svg" alt="" className="w-[24px] h-[24px] block" />
                      </span>
                    </span>
                    <span className="text-[#202020] text-[16px] leading-[24px] tracking-[-0.2px] whitespace-nowrap">App Store</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-px">
            <img src="/images/footer-divider-horz.svg" alt="" className="w-full h-px block" />
          </div>

          <div className="w-full flex flex-col gap-[12px] items-start">
            <div className="w-full text-[#A5A5A5] text-[14px] leading-[24px]">ООО&nbsp;«Ай&nbsp;ТАБ», 2020–2024. Все&nbsp;права защищены.</div>
            <div className="w-full flex flex-col gap-[8px] text-[#7B7B7B] text-[14px] leading-[24px]">
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
      </footer>

      {/* Mobile 375 (Figma: 8389:34726, 375x685) */}
      <footer className="bg-white hidden max-375:block rounded-tl-[12px] rounded-tr-[12px] px-[8px] py-[32px]">
        <div className="w-full flex flex-col gap-[24px] items-start">
          {/* Logo */}
          <div className="w-[102px] h-[33px]">
            <img src="/images/logo.svg" alt="iTAB" className="w-full h-full block" />
          </div>

          {/* Accordion headers */}
          <div className="w-full flex flex-col gap-[8px]">
            {['Клиентам', 'Услуги', 'О компании', 'Поддержка'].map((label) => (
              <button
                key={label}
                type="button"
                className="w-full flex items-center justify-between border-b border-[#EEE] pb-[8px]"
                style={{ background: 'transparent' }}
              >
                <span className="text-[#202020] text-[14px] leading-[22px] tracking-[-0.2px] font-medium">{label}</span>
                <span className="w-[24px] h-[24px] flex items-center justify-center">
                  <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 5L11 1" stroke="#59AD3B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            ))}
          </div>

          {/* Contacts */}
          <div className="w-full flex flex-col gap-[20px] items-start">
            <div className="flex flex-col gap-[16px] items-start">
              <div className="flex items-end gap-[8px] whitespace-nowrap">
                <span className="text-[#202020] text-[17px] leading-[20px] tracking-[-0.034px] font-medium">+7&nbsp;495&nbsp;650-00-00</span>
                <span className="text-[#7B7B7B] text-[14px] leading-[22px] tracking-[-0.2px]">Ежедневно с&nbsp;8 до&nbsp;20</span>
              </div>
              <div className="text-[#202020] text-[14px] leading-[22px] tracking-[-0.2px]">itab@gmail.com</div>
            </div>

            {/* Socials (36x36, bg #F1F1F1) */}
            <div className="flex gap-[12px]">
              <a href="#" className="w-[36px] h-[36px] rounded-[8px] bg-[#F1F1F1] flex items-center justify-center">
                <img src="/images/footer-social-vk.svg" alt="" className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="w-[36px] h-[36px] rounded-[12px] bg-[#F1F1F1] flex items-center justify-center">
                <img src="/images/footer-social-youtube.svg" alt="" className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="w-[36px] h-[36px] rounded-[12px] bg-[#F1F1F1] flex items-center justify-center">
                <img src="/images/footer-social-tiktok.svg" alt="" className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="w-[36px] h-[36px] rounded-[12px] bg-[#F1F1F1] flex items-center justify-center">
                <img src="/images/footer-social-huawei.svg" alt="" className="w-[24px] h-[24px]" />
              </a>
              <a href="#" className="w-[36px] h-[36px] rounded-[12px] bg-[#F1F1F1] flex items-center justify-center">
                <img src="/images/footer-social-odnoklassniki.svg" alt="" className="w-[24px] h-[24px]" />
              </a>
            </div>
          </div>

          {/* Podcasts card */}
          <div className="w-full">
            <div className="w-full bg-[#F1F1F1] rounded-[12px] p-[12px] flex items-center gap-[16px]">
              <div className="flex items-center gap-[8px]">
                <img src="/images/footer-podcast-icon.svg" alt="" className="w-[32px] h-[32px]" />
                <div className="text-[#202020] text-[14px] leading-[22px] tracking-[-0.2px]">Подкасты о&nbsp;здоровье</div>
              </div>
              <button type="button" className="ml-auto bg-white rounded-[12px] px-[20px] py-[12px] h-[44px] text-[#59AD3B] text-[14px] leading-[24px] tracking-[-0.2px] font-medium">
                Подробнее
              </button>
            </div>
          </div>

          {/* Stores */}
          <div className="w-full flex flex-col gap-[8px]">
            <div className="w-full flex gap-[8px]">
              <button type="button" className="w-[176px] h-[40px] bg-[#F1F1F1] rounded-[12px] flex items-center justify-center gap-[8px]">
                <span className="w-[36px] h-[36px] rounded-[8px] bg-[#F1F1F1] flex items-center justify-center">
                  <img src="/images/footer-icon-googleplay-44.svg" alt="" className="w-[24px] h-[24px]" />
                </span>
                <span className="text-[#202020] text-[14px] leading-[22px] tracking-[-0.2px]">Google Play</span>
              </button>
              <button type="button" className="flex-1 h-[39px] bg-[#F1F1F1] rounded-[12px] flex items-center justify-center gap-[8px]">
                <span className="w-[36px] h-[36px] rounded-[12px] bg-[#F1F1F1] flex items-center justify-center">
                  <img src="/images/footer-social-huawei.svg" alt="" className="w-[18px] h-[18px]" />
                </span>
                <span className="text-[#202020] text-[14px] leading-[22px] tracking-[-0.2px]">App Gallery</span>
              </button>
            </div>
            <button type="button" className="w-full h-[40px] bg-[#F1F1F1] rounded-[12px] flex items-center justify-center gap-[8px]">
              <span className="w-[36px] h-[36px] rounded-[12px] bg-[#F1F1F1] flex items-center justify-center">
                <span style={{ transform: 'scaleY(-1)' }} className="block">
                  <img src="/images/footer-store-apple.svg" alt="" className="w-[24px] h-[24px]" />
                </span>
              </span>
              <span className="text-[#202020] text-[14px] leading-[22px] tracking-[-0.2px]">App Store</span>
            </button>
          </div>

          {/* Legal links */}
          <div className="flex flex-col gap-[12px] text-[#202020] text-[12px] leading-[16px]">
            <a href="#" className="text-[#202020]">
              Пользовательское соглашение
            </a>
            <a href="#" className="text-[#202020]">
              Оферта для&nbsp;поставщиков
            </a>
          </div>
        </div>
      </footer>

      {/* Desktop / 1440 */}
      <footer className="bg-white h-[600px] box-border flex flex-col gap-[40px] items-center pt-[60px] pb-[20px] px-[40px] rounded-tl-[16px] rounded-tr-[16px] max-744:hidden">
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
    </>
  );
};

export default Footer;
