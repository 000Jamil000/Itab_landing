import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  FOOTER_SUPPLIER_URL,
  VK_URL,
  YOUTUBE_URL,
  TIKTOK_URL,
  TG_URL,
  OK_URL,
  FOOTER_CATALOG_URL,
  FOOTER_SPECIALISTS_URL,
  FOOTER_TESTS_URL,
  FOOTER_COURSES_URL,
  FOOTER_ABOUT_URL,
  FOOTER_CONTACTS_URL,
  FOOTER_DISTRIBUTOR_URL,
  FOOTER_PAYMENT_URL,
  FOOTER_DELIVERY_URL,
  FOOTER_FAQ_URL,
  FOOTER_RETURN_URL,
  FOOTER_PARTNER_URL,
  FOOTER_OFFER_SPECIALISTS_URL,
  FOOTER_REFERRAL_OFFER_URL,
  FOOTER_USER_AGREEMENT_URL,
  FOOTER_DATA_PROTECTION_URL,
} from '../constants/links';
import LayoutContainer from './LayoutContainer';

const Footer = () => {
  const actionBtnClassName =
    'inline-flex items-center justify-center min-h-[44px] max-h-[44px] px-[16px] py-[10px] rounded-[16px] bg-[#F0F7EC] text-[16px] leading-[24px] font-medium text-primary transition-colors hover:bg-[#E6F2DD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 self-start';

  const socialBtnClassName =
    'h-[44px] p-[14px] rounded-[16px] bg-[#F0F7EC] flex items-center justify-center transition-colors hover:bg-[#E6F2DD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 shrink-0';

  // Mobile accordion state
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-white pt-[64px] pb-[20px] max-744:pt-[24px]">
      <LayoutContainer>
        {/* ==================== DESKTOP (>1440) ==================== */}
        <div className="flex flex-col gap-[32px] max-1440:hidden">
          {/* Верхний блок ссылок - 5 колонок */}
          <div className="grid gap-[16px] grid-cols-[260px_260px_260px_178px_178px]">
            {/* Поставщикам */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[16px]">
                <div className="text-[16px] leading-[22px] font-medium text-secondary">Поставщикам</div>
                <div className="flex flex-col gap-[8px]">
                  <a href={FOOTER_SUPPLIER_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>
                    Оферта для&nbsp;поставщиков
                  </a>
                </div>
              </div>
              <a href={FOOTER_SUPPLIER_URL} target="_blank" rel="noopener noreferrer" className={actionBtnClassName} style={{ textDecoration: 'none' }}>
                Стать поставщиком
              </a>
            </div>

            {/* Специалистам */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[16px]">
                <div className="text-[16px] leading-[22px] font-medium text-secondary">Специалистам</div>
                <div className="flex flex-col gap-[8px]">
                  <a href={FOOTER_OFFER_SPECIALISTS_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Оферта для специалистов</a>
                  <a href={FOOTER_REFERRAL_OFFER_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Оферта по реферальной программе</a>
                </div>
              </div>
              <a href={FOOTER_PARTNER_URL} target="_blank" rel="noopener noreferrer" className={actionBtnClassName} style={{ textDecoration: 'none' }}>
                Стать специалистом
              </a>
            </div>

            {/* Поддержка */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[16px]">
                <div className="text-[16px] leading-[22px] font-medium text-secondary">Поддержка</div>
                <div className="flex flex-col gap-[8px]">
                  <a href={FOOTER_FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Частые вопросы</a>
                  <a href={FOOTER_RETURN_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Возврат продукции</a>
                </div>
              </div>
              <a href={FOOTER_CONTACTS_URL} target="_blank" rel="noopener noreferrer" className={actionBtnClassName} style={{ textDecoration: 'none' }}>
                Написать нам
              </a>
            </div>

            {/* Покупателям */}
            <div className="flex flex-col gap-[16px]">
              <div className="text-[16px] leading-[22px] font-medium text-secondary">Покупателям</div>
              <div className="flex flex-col gap-[8px]">
                <a href={FOOTER_CATALOG_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Каталог</a>
                <a href={FOOTER_SPECIALISTS_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Консультации</a>
                <a href={FOOTER_TESTS_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Подбор&nbsp;БАД</a>
                <a href={FOOTER_COURSES_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Онлайн-курсы</a>
              </div>
            </div>

            {/* О компании */}
            <div className="flex flex-col gap-[16px]">
              <div className="text-[16px] leading-[22px] font-medium text-secondary">О компании</div>
              <div className="flex flex-col gap-[8px]">
                <a href={FOOTER_ABOUT_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>О нас</a>
                <a href={FOOTER_CONTACTS_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Контакты</a>
                <a href={FOOTER_DISTRIBUTOR_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Оптовым клиентам</a>
                <a href={FOOTER_PAYMENT_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Оплата заказов</a>
                <a href={FOOTER_DELIVERY_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Способы доставки</a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#F5F5F5]" />

          {/* Нижний блок */}
          <div className="flex items-start justify-between gap-[16px]">
            <div className="flex items-start gap-[16px]">
              <div className="w-[260px] flex flex-col gap-[12px] justify-end">
                <div className="w-[121px] h-[35px]">
                  <img src="/images/logo-green.svg" alt="iTAB" className="w-full h-full block" />
                </div>
                <div className="text-[12px] leading-[16px] text-tertiary w-[175px]">
                  ООО&nbsp;«Ай&nbsp;ТАБ», 2020–2024. Все&nbsp;права защищены.
                </div>
              </div>

              <div className="flex flex-col gap-[12px] justify-end">
                <div className="text-[16px] leading-[22px] font-medium text-secondary">Горячая линия</div>
                <div className="flex flex-col gap-[8px]">
                  <div className="text-[20px] leading-[24px] font-medium text-primary whitespace-nowrap">+7 495 650-00-00</div>
                  <div className="flex items-center gap-[8px] text-[16px] leading-[22px] text-tertiary whitespace-nowrap">
                    <span>c 10 до 19 (пн-пт)</span>
                    <span className="text-[12px] leading-[16px] text-[#C1C1C1]">•</span>
                    <span>c 10 до 16 (сб-вс) по Москве</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[372px] flex flex-col justify-between">
              <div className="text-[16px] leading-[22px] font-medium text-secondary">Мы в социальных сетях</div>
              <div className="mt-[17px] flex gap-[8px]">
                <a href={VK_URL} target="_blank" rel="noopener noreferrer" aria-label="VK" className={`w-[68px] ${socialBtnClassName}`}>
                  <img src="/images/footer-social-vk-green.svg" alt="" className="h-[10px] w-auto" />
                </a>
                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={`w-[68px] ${socialBtnClassName}`}>
                  <img src="/images/footer-social-youtube-green.svg" alt="" className="h-[12px] w-auto" />
                </a>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={`w-[68px] ${socialBtnClassName}`}>
                  <img src="/images/footer-social-tiktok-green.svg" alt="" className="h-[14px] w-auto" />
                </a>
                <a href={TG_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className={`w-[68px] ${socialBtnClassName}`}>
                  <img src="/images/footer-social-telegram-green.svg" alt="" className="h-[16px] w-auto" />
                </a>
                <a href={OK_URL} target="_blank" rel="noopener noreferrer" aria-label="Одноклассники" className={`w-[68px] ${socialBtnClassName}`}>
                  <img src="/images/footer-social-odnoklassniki-green.svg" alt="" className="h-[14px] w-auto" />
                </a>
              </div>
            </div>
          </div>

          {/* Юридические ссылки */}
          <div className="w-full h-[44px] rounded-[16px] bg-[#F7F7F7] px-[16px] py-[12px] flex items-center gap-[8px] text-[12px] leading-[16px]">
            <a href={FOOTER_USER_AGREEMENT_URL} target="_blank" rel="noopener noreferrer" className="text-text-secondary" style={{ textDecoration: 'none' }}>Пользовательское соглашение</a>
            <span className="text-[#C1C1C1]">•</span>
            <a href={FOOTER_DATA_PROTECTION_URL} target="_blank" rel="noopener noreferrer" className="text-text-secondary" style={{ textDecoration: 'none' }}>Согласие на обработку персональных данных</a>
          </div>
        </div>

        {/* ==================== TABLET 744 (744-1440) ==================== */}
        <div className="hidden max-1440:flex max-744:hidden flex-col gap-[32px]">
          {/* Верхний блок - 3 колонки (Поставщикам, Специалистам, Поддержка) */}
          <div className="grid grid-cols-3 gap-[8px]">
            {/* Поставщикам */}
            <div className="flex flex-col gap-[16px] w-[230px]">
              <div className="flex flex-col gap-[16px]">
                <div className="text-[16px] leading-[22px] font-medium text-secondary">Поставщикам</div>
                <div className="flex flex-col gap-[8px]">
                  <a href={FOOTER_SUPPLIER_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>
                    Оферта для&nbsp;поставщиков
                  </a>
                </div>
              </div>
              <a href={FOOTER_SUPPLIER_URL} target="_blank" rel="noopener noreferrer" className={actionBtnClassName} style={{ textDecoration: 'none' }}>
                Стать поставщиком
              </a>
            </div>

            {/* Специалистам */}
            <div className="flex flex-col gap-[16px] w-[230px]">
              <div className="flex flex-col gap-[16px]">
                <div className="text-[16px] leading-[22px] font-medium text-secondary">Специалистам</div>
                <div className="flex flex-col gap-[8px]">
                  <a href={FOOTER_OFFER_SPECIALISTS_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Оферта для специалистов</a>
                  <a href={FOOTER_REFERRAL_OFFER_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Оферта по реферальной программе</a>
                </div>
              </div>
              <a href={FOOTER_PARTNER_URL} target="_blank" rel="noopener noreferrer" className={actionBtnClassName} style={{ textDecoration: 'none' }}>
                Стать специалистом
              </a>
            </div>

            {/* Поддержка */}
            <div className="flex flex-col gap-[16px] w-[230px]">
              <div className="flex flex-col gap-[16px]">
                <div className="text-[16px] leading-[22px] font-medium text-secondary">Поддержка</div>
                <div className="flex flex-col gap-[8px]">
                  <a href={FOOTER_FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Частые вопросы</a>
                  <a href={FOOTER_RETURN_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Возврат продукции</a>
                </div>
              </div>
              <a href={FOOTER_CONTACTS_URL} target="_blank" rel="noopener noreferrer" className={actionBtnClassName} style={{ textDecoration: 'none' }}>
                Написать нам
              </a>
            </div>
          </div>

          {/* Второй ряд - 2 колонки (Покупателям, О компании) */}
          <div className="grid grid-cols-3 gap-[8px]">
            {/* Покупателям */}
            <div className="flex flex-col gap-[16px] w-[230px]">
              <div className="text-[16px] leading-[22px] font-medium text-secondary">Покупателям</div>
              <div className="flex flex-col gap-[8px]">
                <a href={FOOTER_CATALOG_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Каталог</a>
                <a href={FOOTER_SPECIALISTS_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Консультации</a>
                <a href={FOOTER_TESTS_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Подбор&nbsp;БАД</a>
                <a href={FOOTER_COURSES_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Онлайн-курсы</a>
              </div>
            </div>

            {/* О компании */}
            <div className="flex flex-col gap-[16px] w-[230px]">
              <div className="text-[16px] leading-[22px] font-medium text-secondary">О компании</div>
              <div className="flex flex-col gap-[8px]">
                <a href={FOOTER_ABOUT_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>О нас</a>
                <a href={FOOTER_CONTACTS_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Контакты</a>
                <a href={FOOTER_DISTRIBUTOR_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Оптовым клиентам</a>
                <a href={FOOTER_PAYMENT_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Оплата заказов</a>
                <a href={FOOTER_DELIVERY_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Способы доставки</a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#F5F5F5]" />

          {/* Нижний блок */}
          <div className="flex flex-col gap-[24px]">
            <div className="flex items-start gap-[8px]">
              <div className="w-[230px] flex flex-col gap-[12px]">
                <div className="w-[121px] h-[35px]">
                  <img src="/images/logo-green.svg" alt="iTAB" className="w-full h-full block" />
                </div>
                <div className="text-[12px] leading-[16px] text-tertiary">
                  ООО&nbsp;«Ай&nbsp;ТАБ», 2020–2024.<br />Все&nbsp;права защищены.
                </div>
              </div>

              <div className="flex flex-col gap-[12px]">
                <div className="text-[16px] leading-[22px] font-medium text-secondary">Горячая линия</div>
                <div className="flex flex-col gap-[8px]">
                  <div className="text-[20px] leading-[24px] font-medium text-primary whitespace-nowrap">+7 495 650-00-00</div>
                  <div className="flex items-center gap-[8px] text-[16px] leading-[22px] text-tertiary whitespace-nowrap">
                    <span>c 10 до 19 (пн-пт)</span>
                    <span className="text-[12px] leading-[16px] text-[#C1C1C1]">•</span>
                    <span>c 10 до 16 (сб-вс) по Москве</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[17px]">
              <div className="text-[16px] leading-[22px] font-medium text-secondary">Мы в социальных сетях</div>
              <div className="flex gap-[8px]">
                <a href={VK_URL} target="_blank" rel="noopener noreferrer" aria-label="VK" className={`w-[68px] ${socialBtnClassName}`}>
                  <img src="/images/footer-social-vk-green.svg" alt="" className="h-[10px] w-auto" />
                </a>
                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={`w-[68px] ${socialBtnClassName}`}>
                  <img src="/images/footer-social-youtube-green.svg" alt="" className="h-[12px] w-auto" />
                </a>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={`w-[68px] ${socialBtnClassName}`}>
                  <img src="/images/footer-social-tiktok-green.svg" alt="" className="h-[14px] w-auto" />
                </a>
                <a href={TG_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className={`w-[68px] ${socialBtnClassName}`}>
                  <img src="/images/footer-social-telegram-green.svg" alt="" className="h-[16px] w-auto" />
                </a>
                <a href={OK_URL} target="_blank" rel="noopener noreferrer" aria-label="Одноклассники" className={`w-[68px] ${socialBtnClassName}`}>
                  <img src="/images/footer-social-odnoklassniki-green.svg" alt="" className="h-[14px] w-auto" />
                </a>
              </div>
            </div>
          </div>

          {/* Юридические ссылки */}
          <div className="w-full h-[44px] rounded-[16px] bg-[#F7F7F7] px-[16px] py-[12px] flex items-center gap-[8px] text-[12px] leading-[16px]">
            <a href={FOOTER_USER_AGREEMENT_URL} target="_blank" rel="noopener noreferrer" className="text-text-secondary" style={{ textDecoration: 'none' }}>Пользовательское соглашение</a>
            <span className="text-[#C1C1C1]">•</span>
            <a href={FOOTER_DATA_PROTECTION_URL} target="_blank" rel="noopener noreferrer" className="text-text-secondary" style={{ textDecoration: 'none' }}>Согласие на обработку персональных данных</a>
          </div>
        </div>

        {/* ==================== MOBILE 375 (<=744) ==================== */}
        <div className="hidden max-744:flex flex-col gap-[32px]">
          {/* Аккордеон-меню */}
          <div className="flex flex-col gap-[8px]">
            {/* Поставщикам */}
            <button
              type="button"
              onClick={() => toggleSection('suppliers')}
              className="w-full h-[44px] flex items-center justify-between text-left"
            >
              <span className="text-[16px] leading-[22px] font-medium text-secondary">Поставщикам</span>
              <ChevronDown className={`w-[24px] h-[24px] text-tertiary transition-transform ${openSection === 'suppliers' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'suppliers' && (
              <div className="flex flex-col gap-[8px] pb-[8px]">
                <a href={FOOTER_SUPPLIER_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>
                  Оферта для&nbsp;поставщиков
                </a>
                <a href={FOOTER_SUPPLIER_URL} target="_blank" rel="noopener noreferrer" className={actionBtnClassName} style={{ textDecoration: 'none' }}>
                  Стать поставщиком
                </a>
              </div>
            )}

            {/* Специалистам */}
            <button
              type="button"
              onClick={() => toggleSection('specialists')}
              className="w-full h-[44px] flex items-center justify-between text-left"
            >
              <span className="text-[16px] leading-[22px] font-medium text-secondary">Специалистам</span>
              <ChevronDown className={`w-[24px] h-[24px] text-tertiary transition-transform ${openSection === 'specialists' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'specialists' && (
              <div className="flex flex-col gap-[8px] pb-[8px]">
                <a href={FOOTER_OFFER_SPECIALISTS_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Оферта для специалистов</a>
                <a href={FOOTER_REFERRAL_OFFER_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Оферта по реферальной программе</a>
                <a href={FOOTER_PARTNER_URL} target="_blank" rel="noopener noreferrer" className={actionBtnClassName} style={{ textDecoration: 'none' }}>
                  Стать специалистом
                </a>
              </div>
            )}

            {/* Покупателям */}
            <button
              type="button"
              onClick={() => toggleSection('buyers')}
              className="w-full h-[44px] flex items-center justify-between text-left"
            >
              <span className="text-[16px] leading-[22px] font-medium text-secondary">Покупателям</span>
              <ChevronDown className={`w-[24px] h-[24px] text-tertiary transition-transform ${openSection === 'buyers' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'buyers' && (
              <div className="flex flex-col gap-[8px] pb-[8px]">
                <a href={FOOTER_CATALOG_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Каталог</a>
                <a href={FOOTER_SPECIALISTS_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Консультации</a>
                <a href={FOOTER_TESTS_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Подбор&nbsp;БАД</a>
                <a href={FOOTER_COURSES_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Онлайн-курсы</a>
              </div>
            )}

            {/* Поддержка */}
            <button
              type="button"
              onClick={() => toggleSection('support')}
              className="w-full h-[44px] flex items-center justify-between text-left"
            >
              <span className="text-[16px] leading-[22px] font-medium text-secondary">Поддержка</span>
              <ChevronDown className={`w-[24px] h-[24px] text-tertiary transition-transform ${openSection === 'support' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'support' && (
              <div className="flex flex-col gap-[8px] pb-[8px]">
                <a href={FOOTER_FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Частые вопросы</a>
                <a href={FOOTER_RETURN_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] text-tertiary" style={{ textDecoration: 'none' }}>Возврат продукции</a>
                <a href={FOOTER_CONTACTS_URL} target="_blank" rel="noopener noreferrer" className={actionBtnClassName} style={{ textDecoration: 'none' }}>
                  Написать нам
                </a>
              </div>
            )}
          </div>

          <div className="border-t border-[#F5F5F5]" />

          {/* Нижний блок */}
          <div className="flex flex-col gap-[24px]">
            {/* Логотип и копирайт */}
            <div className="flex flex-col gap-[12px]">
              <div className="w-[80px] h-[23px]">
                <img src="/images/logo-green.svg" alt="iTAB" className="w-full h-full block" />
              </div>
              <div className="text-[12px] leading-[16px] text-tertiary">
                ООО «Ай ТАБ», 2020–2024. Все права защищены.
              </div>
            </div>

            {/* Горячая линия */}
            <div className="flex flex-col gap-[12px]">
              <div className="text-[16px] leading-[22px] font-medium text-secondary">Горячая линия</div>
              <div className="flex flex-col gap-[8px]">
                <div className="text-[20px] leading-[24px] font-medium text-primary">+7&nbsp;495&nbsp;650-00-00</div>
                <div className="text-[14px] leading-[20px] text-tertiary">
                  c&nbsp;10&nbsp;до&nbsp;19&nbsp;(пн-пт) <span className="text-[#C1C1C1]">•</span> c&nbsp;10&nbsp;до&nbsp;16&nbsp;(сб-вс) по&nbsp;Москве
                </div>
              </div>
            </div>

            {/* Соцсети */}
            <div className="flex flex-col gap-[17px]">
              <div className="text-[16px] leading-[22px] font-medium text-secondary">Мы в социальных сетях</div>
              <div className="flex gap-[8px]">
                <a href={VK_URL} target="_blank" rel="noopener noreferrer" aria-label="VK" className={`flex-1 ${socialBtnClassName}`}>
                  <img src="/images/footer-social-vk-green.svg" alt="" className="h-[10px] w-auto" />
                </a>
                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={`flex-1 ${socialBtnClassName}`}>
                  <img src="/images/footer-social-youtube-green.svg" alt="" className="h-[12px] w-auto" />
                </a>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={`flex-1 ${socialBtnClassName}`}>
                  <img src="/images/footer-social-tiktok-green.svg" alt="" className="h-[14px] w-auto" />
                </a>
                <a href={TG_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className={`flex-1 ${socialBtnClassName}`}>
                  <img src="/images/footer-social-telegram-green.svg" alt="" className="h-[16px] w-auto" />
                </a>
                <a href={OK_URL} target="_blank" rel="noopener noreferrer" aria-label="Одноклассники" className={`flex-1 ${socialBtnClassName}`}>
                  <img src="/images/footer-social-odnoklassniki-green.svg" alt="" className="h-[14px] w-auto" />
                </a>
              </div>
            </div>
          </div>

          {/* Юридические ссылки - 2 строки */}
          <div className="w-full rounded-[16px] bg-[#F7F7F7] px-[16px] py-[12px] flex flex-col gap-[8px] text-[12px] leading-[16px]">
            <div className="flex items-center gap-[8px]">
              <a href={FOOTER_USER_AGREEMENT_URL} target="_blank" rel="noopener noreferrer" className="text-text-secondary" style={{ textDecoration: 'none' }}>Пользовательское соглашение</a>
              <span className="text-[#C1C1C1]">•</span>
            </div>
            <a href={FOOTER_DATA_PROTECTION_URL} target="_blank" rel="noopener noreferrer" className="text-text-secondary" style={{ textDecoration: 'none' }}>Согласие на обработку персональных данных</a>
          </div>
        </div>
      </LayoutContainer>
    </footer>
  );
};

export default Footer;
