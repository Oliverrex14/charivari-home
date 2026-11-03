import { useState, useEffect } from 'react';
import {
  Calendar,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Hammer,
  Car,
  Gift,
  History,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Menu,
  Coffee,
  Scissors,
  Award,
  Camera,
  Clock,
} from 'lucide-react';
import {
  CONTACT_INFO,
  HISTORICAL_PHOTOS,
  COURSES,
  GALLERY_ITEMS,
  type GalleryItem,
} from './data/siteData';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reservantoOpen, setReservantoOpen] = useState(false);
  const [activeGalleryCategory, setActiveGalleryCategory] = useState<
    'all' | 'kurzy' | 'restaurovani' | 'veterani' | 'historie'
  >('all');
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Gift voucher interactive state
  const [selectedVoucherCourse, setSelectedVoucherCourse] = useState<'3300' | '3900'>('3300');
  const [voucherRecipient, setVoucherRecipient] = useState('');
  const [voucherDedication, setVoucherDedication] = useState('');

  // Filtered gallery items
  const filteredGallery =
    activeGalleryCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeGalleryCategory);

  const displayedGallery = showAllGallery ? filteredGallery : filteredGallery.slice(0, 12);

  // Keyboard navigation for lightbox & modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxItem(null);
        setReservantoOpen(false);
      }
      if (lightboxItem) {
        const currentIndex = filteredGallery.findIndex((i) => i.id === lightboxItem.id);
        if (e.key === 'ArrowRight' && currentIndex !== -1) {
          const nextIndex = (currentIndex + 1) % filteredGallery.length;
          setLightboxItem(filteredGallery[nextIndex]);
        }
        if (e.key === 'ArrowLeft' && currentIndex !== -1) {
          const prevIndex = (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
          setLightboxItem(filteredGallery[prevIndex]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxItem, filteredGallery]);

  const handleVoucherMailto = () => {
    const courseName =
      selectedVoucherCourse === '3300'
        ? 'Kurz Renovace a čalounění nábytku (3 300 Kč)'
        : 'Kurz Výroba čalouněného taburetu (3 900 Kč)';
    const subject = encodeURIComponent(`Objednávka dárkového poukazu – ${courseName}`);
    const body = encodeURIComponent(
      `Dobrý den,\n\nmám zájem o dárkový poukaz na ${courseName}.\n` +
        (voucherRecipient ? `Jméno obdarovaného: ${voucherRecipient}\n` : '') +
        (voucherDedication ? `Text věnování na poukaz: "${voucherDedication}"\n` : '') +
        `\nProsím o informace k platbě a předání.\n\nDěkuji a přeji pěkný den.`
    );
    window.location.href = `mailto:${CONTACT_INFO.emailCourses}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#1F1A17]">
      {/* Top Heritage Bar */}
      <div className="bg-[#181310] text-[#E6DDD3] text-xs sm:text-sm py-2.5 px-4 border-b border-[#C69C49]/25">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#DFB968]">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="font-medium tracking-wide">
              Rodinná čalounická a restaurátorská dílna Ladislava Tobiáška
            </span>
          </div>
          <div className="flex items-center gap-5 text-xs sm:text-sm">
            <a
              href={`tel:${CONTACT_INFO.phoneMain.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-[#DFB968] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C69C49]" />
              <span>{CONTACT_INFO.phoneMainDisplay}</span>
            </a>
            <span className="hidden md:inline text-[#C69C49]/40">|</span>
            <a
              href="#kontakt"
              className="hidden md:flex items-center gap-1.5 hover:text-[#DFB968] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C69C49]" />
              <span>{CONTACT_INFO.address}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#E2D7C5] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-14 h-12 rounded-lg overflow-hidden border border-[#C69C49]/40 bg-[#181310] shadow-sm shrink-0">
              <img
                src="/images/logo-zlate.jpg"
                alt="CHARIVARI HOME logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#1F1A17] leading-none">
                CHARIVARI HOME
              </span>
              <span className="block text-[11px] uppercase tracking-[0.18em] text-[#7A6A58] mt-1">
                Restaurování &amp; Kurzy čalounění
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#3D332C]">
            <a href="#sluzby" className="hover:text-[#9E7425] transition-colors">
              Co nabízíme
            </a>
            <a href="#kurzy" className="hover:text-[#9E7425] transition-colors">
              Kurzy čalounění
            </a>
            <a href="#restaurovani" className="hover:text-[#9E7425] transition-colors">
              Zakázkové restaurování
            </a>
            <a href="#veterani" className="hover:text-[#9E7425] transition-colors">
              Autoveteráni
            </a>
            <a href="#poukazy" className="hover:text-[#9E7425] transition-colors">
              Dárkové poukazy
            </a>
            <a href="#historie" className="hover:text-[#9E7425] transition-colors">
              Rodinná historie
            </a>
            <a href="#galerie" className="hover:text-[#9E7425] transition-colors">
              Galerie
            </a>
            <a href="#kontakt" className="hover:text-[#9E7425] transition-colors">
              Kontakt
            </a>
          </nav>

          {/* Header CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setReservantoOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F1A17] text-[#F5EFE6] hover:bg-[#332922] text-sm font-medium shadow-sm border border-[#C69C49]/50 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#DFB968]" />
              <span>Rezervace kurzů</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Otevřít menu"
            className="lg:hidden p-2.5 rounded-lg border border-[#D8CBB8] text-[#1F1A17] hover:bg-[#EFE7DA]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF6F0] border-b border-[#E2D7C5] px-4 pt-3 pb-6 space-y-2 shadow-xl">
            {[
              { href: '#sluzby', label: 'Co nabízíme' },
              { href: '#kurzy', label: 'Kurzy čalounění a výroba taburetu' },
              { href: '#restaurovani', label: 'Zakázkové restaurování' },
              { href: '#veterani', label: 'Autoveteráni a motocykly' },
              { href: '#poukazy', label: 'Dárkové poukazy' },
              { href: '#historie', label: 'O mně & Rodinná historie' },
              { href: '#galerie', label: 'Galerie realizací' },
              { href: '#kontakt', label: 'Kontakt' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-base font-medium text-[#2A221D] hover:bg-[#EFE7DA]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setReservantoOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1F1A17] text-[#F5EFE6] font-medium border border-[#C69C49]/50"
              >
                <Calendar className="w-4 h-4 text-[#DFB968]" />
                <span>Rezervace termínů kurzů</span>
              </button>
              <a
                href={`tel:${CONTACT_INFO.phoneMain.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#C69C49] text-[#1F1A17] font-medium"
              >
                <Phone className="w-4 h-4 text-[#9E7425]" />
                <span>Zavolat: {CONTACT_INFO.phoneMainDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-linen pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-[#E2D7C5]">
        {/* Decorative warm glow */}
        <div className="pointer-events-none absolute -top-32 right-0 w-[34rem] h-[34rem] rounded-full bg-[#C69C49]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 w-[26rem] h-[26rem] rounded-full bg-[#8C4A27]/8 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Hero Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EFE7DA] border border-[#C69C49]/40 text-[#694E1E] text-xs sm:text-sm font-medium">
                <Award className="w-4 h-4 text-[#9E7425]" />
                <span>Téměř 30 let zkušeností • Tradice 3. generace čalouníků</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.15rem] font-semibold text-[#1F1A17] leading-[1.08] tracking-tight">
                Dáváme věcem{' '}
                <span className="italic font-normal text-[#8C5E1A]">nový život</span> a vašemu
                interiéru duši.
              </h1>

              <p className="text-base sm:text-lg text-[#4B3F36] leading-relaxed max-w-2xl">
                Jmenuji se <strong className="font-semibold text-[#1F1A17]">Ladislav Tobiášek</strong>.
                V čalounické a restaurátorské dílně <strong>Charivari Home</strong> v Nové Vsi u
                Mělníka propojujeme tradiční rukodělné postupy mého pradědy Františka s moderními
                požadavky na funkčnost a estetiku. Přijďte si k nám vlastnoručně zrenovovat kus
                nábytku na kurzu, nebo nám svěřte svůj rodinný poklad či autoveterána.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setReservantoOpen(true)}
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#1F1A17] hover:bg-[#332922] text-[#FAF6F0] font-medium text-base shadow-lg shadow-[#1F1A17]/15 border border-[#C69C49]/60 transition-all cursor-pointer group"
                >
                  <Calendar className="w-5 h-5 text-[#DFB968]" />
                  <span>Rezervace termínů kurzů</span>
                  <ArrowRight className="w-4 h-4 text-[#DFB968] group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#restaurovani"
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-[#FAF6F0] hover:bg-[#EFE7DA] text-[#1F1A17] font-medium text-base border border-[#C69C49]/50 transition-all"
                >
                  <Hammer className="w-4 h-4 text-[#9E7425]" />
                  <span>Zakázkové restaurování</span>
                </a>
              </div>

              {/* Key Trust Metrics */}
              <div className="pt-6 grid grid-cols-3 gap-4 sm:gap-8 border-t border-[#DFD3C0] max-w-xl">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1A17]">
                    ~90 let
                  </div>
                  <div className="text-xs sm:text-sm text-[#635447]">
                    rodinných kořenů v čalounění
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1A17]">
                    1 den
                  </div>
                  <div className="text-xs sm:text-sm text-[#635447]">
                    stačí k výrobě vlastního taburetu
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1A17]">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-[#635447]">
                    poctivá ruční práce a materiály
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Visual Collage (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Main Workshop / Course Image */}
                <div className="col-span-7 relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#FAF6F0] bg-[#231C18] aspect-[4/5]">
                  <img
                    src="/images/service-kurzy.jpg"
                    alt="Kurzy čalounění Charivari Home"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181310]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-[#FAF6F0]">
                    <span className="text-[11px] uppercase tracking-wider text-[#DFB968] font-semibold">
                      Zážitkové kurzy
                    </span>
                    <p className="font-serif text-lg leading-snug">
                      Vlastnoruční renovace a čalounění v naší dílně
                    </p>
                  </div>
                </div>

                {/* Stacked Secondary Images */}
                <div className="col-span-5 space-y-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-[#FAF6F0] aspect-square">
                    <img
                      src="/images/rest-kreslo.jpg"
                      alt="Restaurované křeslo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-[#FAF6F0] aspect-[4/5]">
                    <img
                      src="/images/hist-1-frantisek.jpg"
                      alt="Praděda František a děda Ladislav"
                      className="w-full h-full object-cover archival-photo"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181310]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[#FAF6F0]">
                      <span className="text-[10px] uppercase tracking-wider text-[#DFB968]">
                        Holešovice • 30. léta
                      </span>
                      <p className="font-serif text-xs leading-tight">
                        Praděda František a děda Ladislav
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 PILLARS OVERVIEW (Co v dílně nabízíme) */}
      <section id="sluzby" className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E7425]">
              Řemeslo pod jednou střechou
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#1F1A17] mt-2">
              Čtyři pilíře dílny Charivari Home
            </h2>
            <p className="text-[#5A4C41] mt-3 text-base sm:text-lg">
               *Charivari* je slovo, které v sobě nese pestrost, rozmanitost a radost. Máme úctu k
              barokním křeslům, ikonickému designu 20. století i historickým vozům.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Kurzy renovace a čalounění',
                subtitle: 'Od 3 300 Kč • Celodenní zážitek',
                desc: 'Přineste si vlastní židli či křesílko nebo si za 8 hodin vyrobte zbrusu nový čalouněný taburet.',
                img: '/images/service-kurzy.jpg',
                href: '#kurzy',
                icon: Scissors,
                cta: 'Vybrat kurz',
              },
              {
                title: 'Zakázkové restaurování',
                subtitle: 'Tradiční postupy & materiály',
                desc: 'Kompletní čalounické práce, vyvazování pružin, africká tráva, koňské žíně a šelaková politura dřeva.',
                img: '/images/service-restaurovani.jpg',
                href: '#restaurovani',
                icon: Hammer,
                cta: 'Více o restaurování',
              },
              {
                title: 'Autoveteráni a motocykly',
                subtitle: 'Sedla & interiéry s úctou k historii',
                desc: 'Renovace sedel motocyklů, čalounění sedadel, dveří a stropnic historických vozů s dobovou věrností.',
                img: '/images/service-veterani.jpg',
                href: '#veterani',
                icon: Car,
                cta: 'Prohlédnout veterány',
              },
              {
                title: 'Dárkové poukazy',
                subtitle: 'Originální dárek s věnováním',
                desc: 'Darujte zážitek a vlastnoručně vyrobený kus nábytku. Na voucher napíšeme osobní věnování i fotografii.',
                img: '/images/service-poukazy.jpg',
                href: '#poukazy',
                icon: Gift,
                cta: 'Objednat poukaz',
              },
            ].map((card) => {
              const IconComponent = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.href}
                  className="group bg-[#F4EDE2] rounded-2xl overflow-hidden border border-[#E2D7C5] hover:border-[#C69C49] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden bg-[#231C18]">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[#181310]/85 backdrop-blur-sm border border-[#C69C49]/50 flex items-center justify-center text-[#DFB968]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#9E7425]">
                        {card.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl font-semibold text-[#1F1A17] mt-1 group-hover:text-[#8C5E1A] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-[#5A4C41] mt-2.5 leading-relaxed">{card.desc}</p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-[#E2D7C5] flex items-center justify-between text-sm font-semibold text-[#1F1A17]">
                      <span>{card.cta}</span>
                      <ArrowRight className="w-4 h-4 text-[#9E7425] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* COURSES SECTION (Kurzy čalounění a výroba taburetu) */}
      <section id="kurzy" className="py-24 bg-[#F3ECE0] border-y border-[#E2D7C5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E7425]">
                Zážitkové řemeslné kurzy v Nové Vsi u Mělníka
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#1F1A17] mt-2">
                Naučte se řemeslo, které dává smysl
              </h2>
              <p className="text-[#4B3F36] mt-3 text-base sm:text-lg">
                „V Charivari nevyrábíme jen věci. Měníme způsob, jakým se díváte na svůj interiér. Z
                věcí, které ostatní vyhazují, u nás společně tvoříme poklady.“
              </p>
            </div>
            <div className="shrink-0">
              <button
                onClick={() => setReservantoOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#1F1A17] hover:bg-[#332922] text-[#FAF6F0] font-medium text-sm shadow-md border border-[#C69C49]/50 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#DFB968]" />
                <span>Zobrazit volné termíny v kalendáři</span>
              </button>
            </div>
          </div>

          {/* 2 Detailed Course Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="bg-[#FAF6F0] rounded-3xl overflow-hidden border border-[#DFD2BE] shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Course Header Image */}
                  <div className="relative h-72 overflow-hidden bg-[#231C18]">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181310]/85 via-[#181310]/25 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#181310]/90 text-[#DFB968] border border-[#C69C49]/50">
                        {course.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-4 text-[#FAF6F0]">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-[#DFB968] mb-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{course.duration}</span>
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-tight">
                          {course.title}
                        </h3>
                      </div>
                      <div className="text-right shrink-0 bg-[#181310]/90 px-4 py-2 rounded-2xl border border-[#C69C49]/40">
                        <span className="block text-[10px] uppercase tracking-wider text-[#C69C49]">
                          Cena kurzu
                        </span>
                        <span className="font-serif text-2xl font-bold text-[#FAF6F0]">
                          {course.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Course Body */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <p className="text-[#4B3F36] text-base leading-relaxed">{course.description}</p>

                    <div className="space-y-2.5">
                      <h4 className="font-serif text-xl font-semibold text-[#1F1A17]">
                        Co vás na kurzu čeká:
                      </h4>
                      <ul className="space-y-2">
                        {course.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-[#3D332C]">
                            <CheckCircle2 className="w-4 h-4 text-[#9E7425] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F3ECE0] border border-[#E2D7C5] space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#8C5E1A]">
                        Co si vzít s sebou &amp; jak je to s látkou?
                      </div>
                      <p className="text-sm text-[#3D332C] font-medium">{course.whatToBring}</p>
                      {course.fabricInfo.map((info, i) => (
                        <p key={i} className="text-xs sm:text-sm text-[#5A4C41]">
                          • {info}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Course Footer CTA */}
                <div className="px-6 sm:px-8 pb-8 pt-2 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => setReservantoOpen(true)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#1F1A17] hover:bg-[#332922] text-[#FAF6F0] font-medium text-sm border border-[#C69C49]/50 transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#DFB968]" />
                    <span>Rezervovat termín ({course.price})</span>
                  </button>
                  <a
                    href="#poukazy"
                    className="inline-flex items-center justify-center gap-1.5 py-3.5 px-4 rounded-xl border border-[#C69C49]/60 text-[#1F1A17] hover:bg-[#EFE7DA] text-sm font-medium transition-all"
                  >
                    <Gift className="w-4 h-4 text-[#9E7425]" />
                    <span>Koupit jako poukaz</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Workshop Comfort Banner */}
          <div className="mt-10 bg-[#FAF6F0] rounded-2xl p-6 sm:p-8 border border-[#DFD2BE] grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#EFE7DA] flex items-center justify-center text-[#9E7425] shrink-0">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#1F1A17]">
                  Ochranné pomůcky a nářadí k zapůjčení
                </h4>
                <p className="text-xs sm:text-sm text-[#5A4C41] mt-0.5">
                  U nás se práší a občas i barví – v dílně jsou pro vás k zapůjčení zástěry,
                  pracovní a ochranné rukavice, respirátor nebo ochranné brýle a sluchátka i veškeré
                  profesionální nářadí.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#EFE7DA] flex items-center justify-center text-[#9E7425] shrink-0">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#1F1A17]">
                  Káva, čaj a občerstvení zdarma
                </h4>
                <p className="text-xs sm:text-sm text-[#5A4C41] mt-0.5">
                  Po celý den je pro vás v dílně zdarma k dispozici káva, čaj, drobné občerstvení,
                  dobrá nálada a špetka trpělivosti.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#EFE7DA] flex items-center justify-center text-[#9E7425] shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#1F1A17]">
                  Vzorníky látek přímo na místě
                </h4>
                <p className="text-xs sm:text-sm text-[#5A4C41] mt-0.5">
                  Nechce se vám nic shánět? V dílně máme mnoho vzorníků kvalitních potahových látek,
                  které si můžete osahat a přiložit k nábytku.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZAKÁZKOVÉ RESTAUROVÁNÍ SECTION */}
      <section id="restaurovani" className="py-24 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E7425]">
                Zakázkové restaurování a čalounění
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#1F1A17] leading-tight">
                Zachováváme historickou patinu a duši nábytku
              </h2>
              <p className="text-[#4B3F36] text-base sm:text-lg leading-relaxed">
                Mým cílem není vytvořit nový kus nábytku, ale restaurovat ho tak, aby byla zachována
                jeho historická patina a duše, a přitom byl plně využitelný pro moderní interiér.
                Používám tradiční materiály jako jsou <strong>africká tráva</strong>,{' '}
                <strong>koňské žíně</strong>, <strong>lněné popruhy</strong> a{' '}
                <strong>klasické pružiny</strong>.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    title: 'Kompletní čalounické práce',
                    desc: 'Od drobných oprav potahů až po celkovou rekonstrukci vnitřních výplní včetně ručního vyvazování pružin.',
                  },
                  {
                    title: 'Restaurování dřevěných částí',
                    desc: 'Čištění, doplňování chybějících řezeb, ruční leštění šelakovou politurou a tradiční voskování.',
                  },
                  {
                    title: 'Konzervace a čištění',
                    desc: 'Odborné a citlivé ošetření historických textilií, kůží a cenných solitérů.',
                  },
                  {
                    title: 'Poradenství při výběru látek',
                    desc: 'Široká škála vzorníků od prověřených českých i zahraničních dodavatelů potahových látek.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-[#F4EDE2] border border-[#E2D7C5]"
                  >
                    <h3 className="font-serif text-xl font-semibold text-[#1F1A17]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A4C41] mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Photo Estimate Callout */}
              <div className="p-6 rounded-2xl bg-[#1F1A17] text-[#FAF6F0] border border-[#C69C49]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#DFB968] text-xs font-semibold uppercase tracking-wider">
                    <Camera className="w-4 h-4" />
                    <span>Konzultace a nacenění podle fotek</span>
                  </div>
                  <p className="text-sm text-[#E2D7C5]">
                    Pošlete nám fotografie vašeho nábytku a společně si řekneme, jaký by byl postup,
                    termín i cena.
                  </p>
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.emailMain}?subject=${encodeURIComponent(
                    'Poptávka zakázkového restaurování / čalounění'
                  )}`}
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C69C49] hover:bg-[#d4ab57] text-[#181310] font-semibold text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Poslat fotku e-mailem</span>
                </a>
              </div>
            </div>

            {/* Right Image Mosaic (6 cols) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-[#E2D7C5] aspect-[4/5]">
                  <img
                    src="/images/rest-1.jpg"
                    alt="Tradiční vyvazování pružin"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-[#E2D7C5] aspect-[4/3]">
                  <img
                    src="/images/rest-modre-zidle.jpg"
                    alt="Zrestaurované modré židle"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden shadow-md border border-[#E2D7C5] aspect-[4/3]">
                  <img
                    src="/images/rest-2.jpg"
                    alt="Zakázkové čalounění křesla"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-[#E2D7C5] aspect-[4/5]">
                  <img
                    src="/images/rest-lavice.jpg"
                    alt="Čalouněná lavice na míru"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTOVETERÁNI A MOTOCYKLY SECTION (Dark Heritage Contrast) */}
      <section id="veterani" className="py-24 bg-[#181310] text-[#F5EFE6] relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/3 w-96 h-96 rounded-full bg-[#C69C49]/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#261E19] border border-[#C69C49]/40 text-[#DFB968] text-xs font-medium">
                <Car className="w-3.5 h-3.5" />
                <span>Veteráni a motocykly</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#FAF6F0] leading-tight">
                Sedla a interiéry s úctou k historii
              </h2>

              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#DFB968] border-l-2 border-[#C69C49] pl-4">
                „Vracíme komfort tam, kde se píše historie.“
              </blockquote>

              <p className="text-[#D5C9BA] text-sm sm:text-base leading-relaxed">
                Váš stroj si zaslouží víc než jen nový potah. V <strong>Charivari</strong> rozumíme
                tomu, že sedlo motorky nebo interiér autoveterána jsou klíčovými prvky, které
                definují charakter celého stroje. Kombinujeme tradiční čalounické postupy s citem
                pro dobovou věrnost i moderní nároky na komfort.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#231C18] border border-[#C69C49]/25">
                  <h3 className="font-serif text-xl font-semibold text-[#DFB968]">
                    Interiéry autoveteránů
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D5C9BA] mt-1">
                    Navracíme lesk kabinám historických vozů. Specializujeme se na opravy a výrobu
                    čalounění dveří, stropnic a sedadel s důrazem na zachování původního vzhledu.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#231C18] border border-[#C69C49]/25">
                  <h3 className="font-serif text-xl font-semibold text-[#DFB968]">
                    Renovace sedel motocyklů
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D5C9BA] mt-1">
                    Od opravy prosezených pěn až po kompletní přečalounění. Pracujeme s pravou kůží
                    i vysoce odolnými technickými materiály, které zvládnou slunce i déšť.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`tel:${CONTACT_INFO.phoneMain.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C69C49] hover:bg-[#d4ab57] text-[#181310] font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Konzultovat renovaci: {CONTACT_INFO.phoneMainDisplay}</span>
                </a>
                <button
                  onClick={() => {
                    setActiveGalleryCategory('veterani');
                    document.getElementById('galerie')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-[#C69C49]/50 text-[#FAF6F0] hover:bg-[#261E19] text-sm font-medium transition-colors cursor-pointer"
                >
                  <span>Všechny fotky veteránů</span>
                  <ArrowRight className="w-4 h-4 text-[#DFB968]" />
                </button>
              </div>
            </div>

            {/* Right Photo Grid (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                '/images/service-veterani.jpg',
                '/images/vet-1.jpg',
                '/images/vet-2.jpg',
                '/images/vet-5.jpg',
                '/images/vet-6.jpg',
                '/images/vet-8.jpg',
              ].map((src, index) => (
                <div
                  key={src}
                  onClick={() =>
                    setLightboxItem({
                      id: `vet-preview-${index}`,
                      src,
                      title: 'Renovace autoveteránů a motocyklů',
                      category: 'veterani',
                      description: 'Ukázka čalounické práce z dílny Charivari Home.',
                    })
                  }
                  className={`group relative rounded-2xl overflow-hidden border border-[#C69C49]/30 cursor-pointer ${
                    index === 0 ? 'col-span-2 sm:col-span-2 aspect-[16/10]' : 'aspect-square'
                  }`}
                >
                  <img
                    src={src}
                    alt="Čalounění autoveteránů"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#181310]/0 group-hover:bg-[#181310]/30 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-full bg-[#181310]/90 text-[#DFB968] text-xs font-medium">
                      Zvětšit fotografii
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GIFT VOUCHERS SECTION (Dárkové poukazy s konfigurátorem) */}
      <section id="poukazy" className="py-24 bg-[#F4EDE2] border-b border-[#E2D7C5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Voucher Visual Preview (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF6F0] bg-[#181310]">
                <img
                  src="/images/voucher.jpg"
                  alt="Dárkový voucher Charivari Home"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Live Dedication Preview Card */}
              <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#C69C49]/50 shadow-sm">
                <div className="flex items-center justify-between text-xs uppercase tracking-wider text-[#9E7425] font-semibold mb-2">
                  <span>Náhled vašeho zadání na voucher</span>
                  <span>Platnost: 1 rok</span>
                </div>
                <div className="font-serif text-xl font-semibold text-[#1F1A17]">
                  {selectedVoucherCourse === '3300'
                    ? 'Kurz Renovace a čalounění nábytku (3 300 Kč)'
                    : 'Kurz Výroba čalouněného taburetu (3 900 Kč)'}
                </div>
                {voucherRecipient && (
                  <p className="text-sm text-[#3D332C] mt-1">
                    <strong>Pro koho:</strong> {voucherRecipient}
                  </p>
                )}
                {voucherDedication ? (
                  <p className="font-serif italic text-base text-[#5A4C41] mt-2 border-l-2 border-[#C69C49] pl-3">
                    „{voucherDedication}“
                  </p>
                ) : (
                  <p className="text-xs text-[#7A6A58] mt-1.5">
                    Na voucher vám rádi napíšeme osobní věnování a můžeme přidat i vámi zaslanou
                    fotografii.
                  </p>
                )}
              </div>
            </div>

            {/* Voucher Interactive Order Box (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#C69C49]/40 text-[#8C5E1A] text-xs font-semibold">
                <Gift className="w-3.5 h-3.5" />
                <span>Dárkové poukazy s platností 1 rok</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#1F1A17] leading-tight">
                Darujte zážitek, který zůstane doma napořád
              </h2>

              <p className="text-[#4B3F36] text-base leading-relaxed">
                Nabízíme nákup dárkového voucheru pro vás, vaše blízké či kolegy. Na vouchery píšeme
                osobní věnování a můžeme na ně umístit například i zaslanou fotografii křesla či
                obdarovaného.
              </p>

              {/* Step 1: Select Course */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5A4C41]">
                  1. Vyberte typ kurzu na poukaz:
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedVoucherCourse('3300')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedVoucherCourse === '3300'
                        ? 'bg-[#1F1A17] text-[#FAF6F0] border-[#C69C49] shadow-md'
                        : 'bg-[#FAF6F0] text-[#1F1A17] border-[#DFD2BE] hover:border-[#C69C49]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-[#C69C49] font-semibold">
                        Vlastní kus nábytku
                      </span>
                      <span className="font-serif text-xl font-bold">3 300 Kč</span>
                    </div>
                    <div className="font-serif text-lg font-semibold mt-1">
                      Renovace a čalounění nábytku
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedVoucherCourse('3900')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedVoucherCourse === '3900'
                        ? 'bg-[#1F1A17] text-[#FAF6F0] border-[#C69C49] shadow-md'
                        : 'bg-[#FAF6F0] text-[#1F1A17] border-[#DFD2BE] hover:border-[#C69C49]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-[#C69C49] font-semibold">
                        Materiál v ceně
                      </span>
                      <span className="font-serif text-xl font-bold">3 900 Kč</span>
                    </div>
                    <div className="font-serif text-lg font-semibold mt-1">
                      Výroba čalouněného taburetu
                    </div>
                  </button>
                </div>
              </div>

              {/* Step 2: Optional Personalization */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5A4C41]">
                  2. Osobní věnování (nepovinné – připraví text do objednávky):
                </label>
                <input
                  type="text"
                  value={voucherRecipient}
                  onChange={(e) => setVoucherRecipient(e.target.value)}
                  placeholder="Jméno obdarovaného (např. Pro maminku k narozeninám)"
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#DFD2BE] focus:outline-none focus:border-[#9E7425] text-sm"
                />
                <textarea
                  rows={2}
                  value={voucherDedication}
                  onChange={(e) => setVoucherDedication(e.target.value)}
                  placeholder="Váš text věnování na voucher..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6F0] border border-[#DFD2BE] focus:outline-none focus:border-[#9E7425] text-sm"
                />
              </div>

              {/* Step 3: Order Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleVoucherMailto}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#1F1A17] hover:bg-[#332922] text-[#FAF6F0] font-medium text-sm border border-[#C69C49]/50 shadow-md transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#DFB968]" />
                  <span>Objednat poukaz e-mailem ({CONTACT_INFO.emailCourses})</span>
                </button>
                <a
                  href={`tel:${CONTACT_INFO.phoneCourses.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-[#FAF6F0] hover:bg-[#EFE7DA] text-[#1F1A17] font-medium text-sm border border-[#C69C49]/60 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#9E7425]" />
                  <span>Tel.: {CONTACT_INFO.phoneCoursesDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY HISTORY & ABOUT ME SECTION (Rodinná historie & O mně) */}
      <section id="historie" className="py-24 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE7DA] border border-[#C69C49]/40 text-[#8C5E1A] text-xs font-semibold">
              <History className="w-3.5 h-3.5" />
              <span>Rodinná tradice • Praha 7 Holešovice &rarr; Nová Ves u Mělníka</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#1F1A17] mt-3">
              Příběh psaný třemi generacemi
            </h2>
            <p className="text-[#4B3F36] mt-4 text-base sm:text-lg leading-relaxed">
              Jmenuji se <strong>Ladislav Tobiášek</strong> a restaurování a čalounění se věnuji
              téměř 30 let. Tento obor vnímám nejen jako práci, ale především jako poslání uchovat
              hodnoty vytvořené generacemi před námi. Moje cesta k řemeslu začala u mého pradědy{' '}
              <strong>Františka</strong>, který byl vyhlášeným čalouníkem a dekoratérem. Každý kus
              nábytku, který mi projde rukama, má svůj příběh, který se snažím citlivým zásahem
              znovu oživit.
            </p>
          </div>

          {/* 4 Archival Cards from Holešovice */}
          <div className="grid md:grid-cols-2 gap-8">
            {HISTORICAL_PHOTOS.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() =>
                  setLightboxItem({
                    id: photo.id,
                    src: photo.src,
                    title: photo.title,
                    category: 'historie',
                    description: photo.caption,
                  })
                }
                className="group bg-[#F4EDE2] rounded-3xl overflow-hidden border border-[#DFD2BE] hover:border-[#C69C49] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden bg-[#1D1714] p-3">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-contain rounded-2xl archival-photo"
                  />
                  <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-[#181310]/85 text-[#DFB968] text-xs font-medium border border-[#C69C49]/40">
                    {index + 1}. {photo.era}
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[#1F1A17]">
                      {photo.title}
                    </h3>
                    <p className="text-[#4B3F36] text-sm sm:text-base mt-2 leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#E2D7C5] text-xs font-semibold uppercase tracking-wider text-[#9E7425] flex items-center justify-between">
                    <span>Rodinný archiv Tobiáškových</span>
                    <span>Kliknutím zvětšíte &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE GALLERY SECTION */}
      <section id="galerie" className="py-24 bg-[#F3ECE0] border-t border-[#E2D7C5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E7425]">
                Portfolio &amp; Ukázky prací
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#1F1A17] mt-2">
                Galerie z naší dílny
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'Všechny fotky' },
                { id: 'kurzy', label: 'Kurzy v dílně' },
                { id: 'restaurovani', label: 'Restaurování & Nábytek' },
                { id: 'veterani', label: 'Autoveteráni & Motocykly' },
                { id: 'historie', label: 'Historie' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveGalleryCategory(tab.id as typeof activeGalleryCategory);
                    setShowAllGallery(false);
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    activeGalleryCategory === tab.id
                      ? 'bg-[#1F1A17] text-[#FAF6F0] shadow-sm border border-[#C69C49]'
                      : 'bg-[#FAF6F0] text-[#4B3F36] hover:bg-[#EFE7DA] border border-[#DFD2BE]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {displayedGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className="group relative rounded-2xl overflow-hidden bg-[#1D1714] border border-[#DFD2BE] aspect-square cursor-pointer shadow-sm hover:shadow-xl transition-all"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181310]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-[10px] uppercase tracking-wider text-[#DFB968] font-semibold">
                    {item.category === 'kurzy'
                      ? 'Kurzy čalounění'
                      : item.category === 'restaurovani'
                      ? 'Restaurování'
                      : item.category === 'veterani'
                      ? 'Autoveteráni'
                      : 'Rodinná historie'}
                  </span>
                  <h4 className="font-serif text-base sm:text-lg text-[#FAF6F0] leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Toggle */}
          {filteredGallery.length > 12 && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowAllGallery(!showAllGallery)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FAF6F0] hover:bg-[#EFE7DA] text-[#1F1A17] font-medium text-sm border border-[#C69C49]/60 shadow-sm transition-all cursor-pointer"
              >
                <span>
                  {showAllGallery
                    ? 'Zobrazit méně fotografií'
                    : `Zobrazit všech ${filteredGallery.length} fotografií v kategorii`}
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT & WORKSHOP FOOTER SECTION */}
      <footer id="kontakt" className="bg-[#181310] text-[#EAE0D5] pt-20 pb-12 border-t border-[#C69C49]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-[#332922]">
            {/* Brand & Story Column (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <div className="flex items-center gap-3.5">
                <div className="w-16 h-14 rounded-xl overflow-hidden border border-[#C69C49]/50 bg-[#181310]">
                  <img
                    src="/images/logo-zlate.jpg"
                    alt="CHARIVARI HOME"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#FAF6F0] tracking-wider">
                    CHARIVARI HOME
                  </div>
                  <div className="text-xs text-[#DFB968] uppercase tracking-widest">
                    {CONTACT_INFO.owner}
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#B8A99A] leading-relaxed">
                Čalounická a restaurátorská dílna v Nové Vsi u Mělníka. Dáváme věcem nový život – od
                historických křesel a autoveteránů až po zážitkové kurzy čalounění a výroby
                taburetů.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={CONTACT_INFO.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#261E19] hover:bg-[#332922] text-[#FAF6F0] text-xs font-medium border border-[#C69C49]/30 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#DFB968]" />
                  <span>Sledujte nás na Facebooku</span>
                </a>
              </div>
            </div>

            {/* Direct Contacts Column (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-[#FAF6F0]">
                Spojte se s námi
              </h3>
              <div className="space-y-3 text-sm">
                <div className="p-3.5 rounded-xl bg-[#221B17] border border-[#332922]">
                  <div className="text-xs text-[#DFB968] uppercase tracking-wider font-semibold">
                    Restaurování &amp; Hlavní kontakt (Ladislav Tobiášek)
                  </div>
                  <a
                    href={`tel:${CONTACT_INFO.phoneMain.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-base font-semibold text-[#FAF6F0] hover:text-[#DFB968] mt-1"
                  >
                    <Phone className="w-4 h-4 text-[#C69C49]" />
                    <span>{CONTACT_INFO.phoneMainDisplay}</span>
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.emailMain}`}
                    className="flex items-center gap-2 text-xs text-[#C6B8A8] hover:text-[#DFB968] mt-1"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C69C49]" />
                    <span>{CONTACT_INFO.emailMain}</span>
                  </a>
                </div>

                <div className="p-3.5 rounded-xl bg-[#221B17] border border-[#332922]">
                  <div className="text-xs text-[#DFB968] uppercase tracking-wider font-semibold">
                    Kurzy čalounění &amp; Dárkové poukazy
                  </div>
                  <a
                    href={`tel:${CONTACT_INFO.phoneCourses.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-base font-semibold text-[#FAF6F0] hover:text-[#DFB968] mt-1"
                  >
                    <Phone className="w-4 h-4 text-[#C69C49]" />
                    <span>{CONTACT_INFO.phoneCoursesDisplay}</span>
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.emailCourses}`}
                    className="flex items-center gap-2 text-xs text-[#C6B8A8] hover:text-[#DFB968] mt-1"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C69C49]" />
                    <span>{CONTACT_INFO.emailCourses}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Quick Booking Column (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-[#FAF6F0]">
                Kde najdete naši dílnu
              </h3>
              <div className="p-4 rounded-xl bg-[#221B17] border border-[#332922] space-y-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#DFB968] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#FAF6F0]">CHARIVARI HOME</div>
                    <div className="text-sm text-[#C6B8A8]">Nová Ves 22, 277 52 (okres Mělník)</div>
                    <a
                      href="https://maps.google.com/?q=Nová+Ves+22,+277+52"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#DFB968] hover:underline mt-1"
                    >
                      <span>Otevřít v Google Mapách</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setReservantoOpen(true)}
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#C69C49] hover:bg-[#d4ab57] text-[#181310] font-semibold text-sm shadow-lg transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Rezervace termínů kurzů online</span>
              </button>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7D70]">
            <div>© 2026 CHARIVARI HOME – Ladislav Tobiášek. Vytvořil Oliver Tobiášek.</div>
            <div className="flex flex-wrap gap-5">
              <a href="#kurzy" className="hover:text-[#DFB968]">
                Kurzy
              </a>
              <a href="#restaurovani" className="hover:text-[#DFB968]">
                Restaurování
              </a>
              <a href="#veterani" className="hover:text-[#DFB968]">
                Autoveteráni
              </a>
              <a href="#poukazy" className="hover:text-[#DFB968]">
                Dárkové poukazy
              </a>
              <a href="#historie" className="hover:text-[#DFB968]">
                O mně
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* RESERVANTO BOOKING MODAL */}
      {reservantoOpen && (
        <div className="fixed inset-0 z-50 bg-[#181310]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
          <div className="bg-[#FAF6F0] w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#C69C49]/50 flex flex-col h-[88vh]">
            <div className="px-6 py-4 bg-[#181310] text-[#FAF6F0] flex items-center justify-between gap-4 border-b border-[#C69C49]/30">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-5 h-5 text-[#DFB968]" />
                <div>
                  <h3 className="font-serif text-xl font-semibold leading-none">
                    Rezervace termínů kurzů – CHARIVARI HOME
                  </h3>
                  <p className="text-xs text-[#C6B8A8] mt-1">
                    Vyberte si volný termín v rezervačním systému Reservanto
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={CONTACT_INFO.reservantoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#261E19] hover:bg-[#332922] text-xs text-[#DFB968] border border-[#C69C49]/30"
                >
                  <span>Otevřít v novém okně</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setReservantoOpen(false)}
                  aria-label="Zavřít"
                  className="p-2 rounded-lg bg-[#261E19] hover:bg-[#332922] text-[#FAF6F0] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-white relative">
              <iframe
                src={CONTACT_INFO.reservantoUrl}
                title="Rezervace kurzů Reservanto"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

      {/* PHOTO LIGHTBOX MODAL */}
      {lightboxItem && (
        <div
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 bg-[#120E0C]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full flex flex-col items-center"
          >
            <button
              onClick={() => setLightboxItem(null)}
              aria-label="Zavřít náhled"
              className="absolute -top-12 right-0 p-2.5 rounded-full bg-[#261E19] text-[#FAF6F0] hover:bg-[#3A2E27] border border-[#C69C49]/40 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full flex items-center justify-center">
              <button
                onClick={() => {
                  const idx = filteredGallery.findIndex((i) => i.id === lightboxItem.id);
                  if (idx !== -1) {
                    setLightboxItem(
                      filteredGallery[(idx - 1 + filteredGallery.length) % filteredGallery.length]
                    );
                  }
                }}
                aria-label="Předchozí fotka"
                className="hidden sm:flex absolute left-2 p-3 rounded-full bg-[#181310]/80 hover:bg-[#181310] text-[#DFB968] border border-[#C69C49]/40 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <img
                src={lightboxItem.src}
                alt={lightboxItem.title}
                className="max-h-[75vh] w-auto rounded-2xl shadow-2xl border border-[#C69C49]/30 object-contain"
              />

              <button
                onClick={() => {
                  const idx = filteredGallery.findIndex((i) => i.id === lightboxItem.id);
                  if (idx !== -1) {
                    setLightboxItem(filteredGallery[(idx + 1) % filteredGallery.length]);
                  }
                }}
                aria-label="Další fotka"
                className="hidden sm:flex absolute right-2 p-3 rounded-full bg-[#181310]/80 hover:bg-[#181310] text-[#DFB968] border border-[#C69C49]/40 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-5 text-center max-w-2xl">
              <h3 className="font-serif text-2xl text-[#FAF6F0] font-semibold">
                {lightboxItem.title}
              </h3>
              {lightboxItem.description && (
                <p className="text-sm text-[#D5C9BA] mt-1.5 leading-relaxed">
                  {lightboxItem.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
