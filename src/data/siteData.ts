export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: 'kurzy' | 'restaurovani' | 'veterani' | 'historie';
  description?: string;
}

export interface SeoRoute {
  path:
    | '/'
    | '/kurzy/'
    | '/t/'
    | '/zakazkove-restaurovani/'
    | '/autoveterani-renovace/'
    | '/darkove-poukazy/'
    | '/o-me/'
    | '/galerie/'
    | '/kontakt/';
  canonical: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  breadcrumb: string;
  ogImage: string;
  sectionId: 'kurzy' | 'restaurovani' | 'veterani' | 'poukazy' | 'historie' | 'galerie' | 'kontakt' | null;
  priority: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
}

export const SITE_ORIGIN = 'https://www.charivarihome.com';

export const SEO_ROUTES: SeoRoute[] = [
  {
    path: '/',
    canonical: `${SITE_ORIGIN}/`,
    title: 'CHARIVARI HOME | Ladislav Tobiášek – Restaurátor, čalouník a kurzy čalounění',
    description:
      'Čalounická a restaurátorská dílna Ladislava Tobiáška v Nové Vsi u Mělníka. Zážitkové kurzy renovace a čalounění nábytku, výroba čalouněného taburetu, zakázkové restaurování, interiéry autoveteránů a dárkové poukazy.',
    h1: 'Dáváme věcem nový život a vašemu interiéru duši.',
    lead: 'Rodinná čalounická a restaurátorská dílna Ladislava Tobiáška v Nové Vsi u Mělníka.',
    breadcrumb: 'Domů',
    ogImage: `${SITE_ORIGIN}/images/service-kurzy.jpg`,
    sectionId: null,
    priority: '1.0',
    changefreq: 'daily',
  },
  {
    path: '/kurzy/',
    canonical: `${SITE_ORIGIN}/kurzy/`,
    title: 'Kurzy renovace a čalounění nábytku (3 300 Kč) | CHARIVARI HOME',
    description:
      'Celodenní zážitkový kurz renovace a čalounění vlastního kusu nábytku (cca 8 hodin) pod odborným vedením Ladislava Tobiáška v Nové Vsi u Mělníka. Profesionální nářadí, vzorníky látek a občerstvení v ceně.',
    h1: 'Kurzy renovace a čalounění nábytku v naší dílně',
    lead: 'Přineste si vlastní židli, stoličku, křesílko nebo podsedák a vdechněte mu pod odborným vedením nový život během celodenního řemeslného kurzu (cca 8 hodin) v Nové Vsi u Mělníka.',
    breadcrumb: 'Kurzy čalounění',
    ogImage: `${SITE_ORIGIN}/images/service-kurzy.jpg`,
    sectionId: 'kurzy',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/t/',
    canonical: `${SITE_ORIGIN}/t/`,
    title: 'Kurz Výroba čalouněného taburetu za 1 den (3 900 Kč) | CHARIVARI HOME',
    description:
      'Vyrobte si vlastní designový čalouněný taburet od dřevěného korpusu až po potah a zdobení za jediný den (8 hodin) v dílně Charivari Home u Mělníka. Vhodné i pro úplné začátečníky.',
    h1: 'Kurz Výroba čalouněného taburetu za jediný den',
    lead: 'Odejděte po 8 hodinách s vlastnoručně vyrobeným designovým taburetem! Na výběr máte 3 velikosti smrkových korpusů, tuhost výplně, ozdobné knoflíky či paspuli i povrchovou úpravu nožiček.',
    breadcrumb: 'Výroba čalouněného taburetu',
    ogImage: `${SITE_ORIGIN}/images/kurz-7.jpg`,
    sectionId: 'kurzy',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/zakazkove-restaurovani/',
    canonical: `${SITE_ORIGIN}/zakazkove-restaurovani/`,
    title: 'Zakázkové restaurování a čalounění nábytku | CHARIVARI HOME',
    description:
      'Kompletní čalounické práce a restaurování starožitného i moderního sedacího nábytku. Ruční vyvazování pružin, africká tráva, koňské žíně, lněné popruhy a šelaková politura dřeva.',
    h1: 'Zakázkové restaurování a čalounění historického i moderního nábytku',
    lead: 'Zachováváme historickou patinu a duši nábytku při plné funkčnosti pro moderní interiér. Pracujeme s tradičními materiály – africkou trávou, koňskými žíněmi, lněnými popruhy, klasickými pružinami a šelakovou politurou.',
    breadcrumb: 'Zakázkové restaurování',
    ogImage: `${SITE_ORIGIN}/images/service-restaurovani.jpg`,
    sectionId: 'restaurovani',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/autoveterani-renovace/',
    canonical: `${SITE_ORIGIN}/autoveterani-renovace/`,
    title: 'Čalounění autoveteránů a renovace sedel motocyklů | CHARIVARI HOME',
    description:
      'Renovace sedel motocyklů a kompletní čalounění interiérů historických vozů (sedadla, dveřní výplně, stropnice) s důrazem na dobovou věrnost v dílně Charivari Home.',
    h1: 'Čalounění interiérů autoveteránů a renovace sedel motocyklů',
    lead: 'Vracíme komfort a lesk kabinám historických vozů i motocyklovým sedlům. Kombinujeme tradiční čalounické postupy, pravou kůži a odolné materiály s respektem k dobové originalitě každého stroje.',
    breadcrumb: 'Autoveteráni a motocykly',
    ogImage: `${SITE_ORIGIN}/images/service-veterani.jpg`,
    sectionId: 'veterani',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/darkove-poukazy/',
    canonical: `${SITE_ORIGIN}/darkove-poukazy/`,
    title: 'Dárkové poukazy na kurzy čalounění a výroby taburetu | CHARIVARI HOME',
    description:
      'Darujte originální řemeslný zážitek s platností 1 rok – dárkový voucher na kurz renovace a čalounění nábytku (3 300 Kč) nebo výroby čalouněného taburetu (3 900 Kč) s osobním věnováním.',
    h1: 'Dárkové poukazy na kurzy čalounění s osobním věnováním',
    lead: 'Darujte svým blízkým celodenní zážitek v čalounické dílně a vlastnoručně zrenovovaný kus nábytku nebo nový taburet. Na voucher rádi doplníme vaše osobní věnování i fotografii.',
    breadcrumb: 'Dárkové poukazy',
    ogImage: `${SITE_ORIGIN}/images/voucher.jpg`,
    sectionId: 'poukazy',
    priority: '0.8',
    changefreq: 'weekly',
  },
  {
    path: '/o-me/',
    canonical: `${SITE_ORIGIN}/o-me/`,
    title: 'O mně a rodinná historie – Ladislav Tobiášek | CHARIVARI HOME',
    description:
      'Příběh tří generací čalouníků rodiny Tobiáškových od 30. let 20. století v Praze 7 Holešovicích (praděda František a děda Ladislav) až po dnešní dílnu Charivari Home v Nové Vsi u Mělníka.',
    h1: 'O mně – Ladislav Tobiášek a 90 let rodinné tradice čalounění',
    lead: 'Restaurování a čalounění se věnuji téměř 30 let. Naše rodinné řemeslo sahá do 30. let 20. století v pražských Holešovicích, kde čalounickou rukodílnu vedl můj praděda František a děda Ladislav.',
    breadcrumb: 'O mně a historie',
    ogImage: `${SITE_ORIGIN}/images/hist-1-frantisek.jpg`,
    sectionId: 'historie',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/galerie/',
    canonical: `${SITE_ORIGIN}/galerie/`,
    title: 'Galerie realizací – čalounění, restaurování, kurzy a veteráni | CHARIVARI HOME',
    description:
      'Prohlédněte si fotografie z čalounické a restaurátorské dílny Charivari Home: zrestaurovaná křesla, židle, lavice na míru, interiéry autoveteránů a práce účastníků kurzů.',
    h1: 'Galerie realizací a ukázky prací z dílny Charivari Home',
    lead: 'Prohlédněte si dokončené čalounické a restaurátorské zakázky, proměny historických křesel a židlí, renovované interiéry autoveteránů i atmosféru z našich celodenních kurzů.',
    breadcrumb: 'Galerie realizací',
    ogImage: `${SITE_ORIGIN}/images/rest-kreslo.jpg`,
    sectionId: 'galerie',
    priority: '0.8',
    changefreq: 'weekly',
  },
  {
    path: '/kontakt/',
    canonical: `${SITE_ORIGIN}/kontakt/`,
    title: 'Kontakt a čalounická dílna – Nová Ves 22 u Mělníka | CHARIVARI HOME',
    description:
      'Kontaktujte čalounickou a restaurátorskou dílnu CHARIVARI HOME (Ladislav Tobiášek, Nová Ves 22, 277 52 u Mělníka). Tel.: +420 777 687 600, kurzy: +420 606 735 895.',
    h1: 'Kontakt a adresa dílny CHARIVARI HOME – Nová Ves u Mělníka',
    lead: 'Najdete nás v Nové Vsi 22 u Mělníka (277 52). Ozvěte se nám telefonicky nebo e-mailem ohledně zakázkového restaurování, čalounění autoveteránů, dárkových poukazů nebo termínů kurzů.',
    breadcrumb: 'Kontakt',
    ogImage: `${SITE_ORIGIN}/images/logo-zlate.jpg`,
    sectionId: 'kontakt',
    priority: '0.8',
    changefreq: 'monthly',
  },
];

export function normalizeRoutePath(rawPath?: string): SeoRoute['path'] {
  if (!rawPath || rawPath === '/') return '/';
  const clean = rawPath.split('?')[0].split('#')[0].replace(/\/+$/, '').toLowerCase();
  switch (clean) {
    case '/kurzy':
    case '/kurzy-calouneni':
      return '/kurzy/';
    case '/t':
    case '/taburet':
    case '/vyroba-taburetu':
      return '/t/';
    case '/zakazkove-restaurovani':
    case '/restaurovani':
      return '/zakazkove-restaurovani/';
    case '/autoveterani-renovace':
    case '/veterani':
    case '/autoveterani':
      return '/autoveterani-renovace/';
    case '/darkove-poukazy':
    case '/poukazy':
    case '/voucher':
      return '/darkove-poukazy/';
    case '/o-me':
    case '/historie':
    case '/o-nas':
      return '/o-me/';
    case '/galerie':
      return '/galerie/';
    case '/kontakt':
    case '/kontakty':
    case '/contact-us':
      return '/kontakt/';
    default:
      return '/';
  }
}

export function getSeoRoute(rawPath?: string): SeoRoute {
  const normalized = normalizeRoutePath(rawPath);
  return SEO_ROUTES.find((r) => r.path === normalized) ?? SEO_ROUTES[0];
}

export const CONTACT_INFO = {
  owner: 'Ladislav Tobiášek',
  role: 'Restaurátor a čalouník, lektor kurzů',
  phoneMain: '+420 777 687 600',
  phoneMainDisplay: '777 687 600',
  phoneCourses: '+420 606 735 895',
  phoneCoursesDisplay: '606 735 895',
  emailMain: 'tobiasek.ladislav@seznam.cz',
  emailCourses: 'Charivarikurzy@seznam.cz',
  address: 'Nová Ves 22, 277 52 (u Mělníka)',
  facebookUrl: 'https://www.facebook.com/profile.php?id=100064973103133',
  reservantoUrl: 'https://booking.reservanto.cz/Modal/?id=15234&seg=1018',
  // Legal identification of the business (údaje dle ARES / § 435 občanského zákoníku)
  legalName: 'Ladislav Tobiášek',
  ico: '47045086',
  registeredSeat: 'č.p. 194, 277 52 Nová Ves',
  registration: 'Fyzická osoba podnikající dle živnostenského zákona, zapsaná v živnostenském rejstříku',
};

export const HISTORICAL_PHOTOS = [
  {
    id: 'hist-1',
    src: '/images/hist-1-frantisek.jpg',
    era: '30. léta 20. století',
    title: 'Praděda František a děda Ladislav',
    caption:
      'Na této fotografii uprostřed (stylově v klobouku) sedí můj praděda František a po jeho levé ruce děda Ladislav. Po jeho pravé ruce sedí dílenský mistr a v pozadí jsou tovaryši, dnes bychom řekli zaměstnanci.',
  },
  {
    id: 'hist-2',
    src: '/images/hist-2-dilna.jpg',
    era: 'Čalounické rukodílny',
    title: 'Dílna ve zvýšeném suterénu',
    caption:
      'Čalounické rukodílny byly ve zvýšeném suterénu pod obchodem. Ten zasněný pán vpravo je děda Ladislav.',
  },
  {
    id: 'hist-3',
    src: '/images/hist-3-pradelna.jpg',
    era: 'Rodinné zázemí',
    title: 'Prababička, učňové a mistr',
    caption:
      'Dáma vlevo je prababička provozující prádelnu a její pomocnice. Omladina okolo jsou čalouničtí učňové a jejich mistr.',
  },
  {
    id: 'hist-4',
    src: '/images/hist-4-holesovice.jpg',
    era: 'Před cca 90 lety',
    title: 'Praha 7 – Holešovice',
    caption:
      'Praha 7 Holešovice, roh Plynární a Argentinské, před cca 90 lety – místo, kde se psaly první kapitoly našeho rodinného řemesla.',
  },
];

export const COURSES = [
  {
    id: 'renovace',
    badge: 'Nejoblíbenější kurz',
    title: 'Kurz Renovace a čalounění nábytku',
    subtitle: 'Naučte se řemeslo, které dává smysl – vdechněte nový život vlastnímu kousku',
    price: '3 300 Kč',
    duration: 'Celodenní kurz (cca 8 hodin)',
    image: '/images/service-kurzy.jpg',
    description:
      'Věříme, že nejlepší věci už byly vyrobeny – jen občas potřebují trochu péče, správný nástroj a nový pohled na věc. Naše kurzy v Charivari jsou mostem mezi starým řemeslem a moderním designem.',
    whatToBring:
      'Vlastní menší kus nábytku, kterému chcete vdechnout nový život (ideálně židle, stolička, taburet, podsedák nebo menší křesílko).',
    fabricInfo: [
      'Vlastní poklad: Můžete si přinést vlastní vysněnou látku (ideálně po předchozí konzultaci, abychom ověřili její gramáž).',
      'Výběr u nás: Přímo v dílně máme mnoho vzorníků kvalitních potahových látek – můžete si je na místě osahat, přiložit k nábytku a vybrat tu pravou.',
    ],
    highlights: [
      'Udržitelnost v praxi: Z věcí, které ostatní vyhazují, společně tvoříme poklady.',
      'Poctivé vybavení: Práce v plně vybavené dílně s profesionálním nářadím.',
      'Znalosti, co zůstanou: Odnášíte si nejen hotový kus, ale i know-how pro další projekty.',
      'K zapůjčení jsou zástěry, pracovní a ochranné rukavice, respirátor nebo ochranné brýle a sluchátka (káva, čaj a občerstvení v dílně zdarma).',
    ],
  },
  {
    id: 'taburet',
    badge: 'Pro začátečníky i kreativce',
    title: 'Kurz Výroba čalouněného taburetu',
    subtitle: 'Vyrobte si vlastní designový taburet od korpusu až po potah za jediný den!',
    price: '3 900 Kč',
    duration: 'Celodenní kurz (8 hodin)',
    image: '/images/kurz-7.jpg',
    description:
      'Máte rádi originální kousky a chcete si vyzkoušet tradiční řemeslo? Přijďte na náš speciální kurz a odejděte po 8 hodinách s vlastnoručně vyrobeným taburetem! Vhodné i pro úplné začátečníky, kteří nikdy nedrželi sponkovačku.',
    whatToBring:
      'Stačí si přinést vlastní látku (ideálně 1,5 metru) – klidně zkombinujte dvě různé látky pro jedinečný kontrast! Vše ostatní (korpus, výplně, nožičky, nářadí i odborné vedení) je v ceně.',
    fabricInfo: [
      'Máte větší plány? Pro náročnější nabízíme možnost vyrobit si velkou čalouněnou lavici (práce rozložená na 2 navazující kurzy).',
    ],
    highlights: [
      'Výběr ze 3 velikostí korpusů z kvalitního a lehkého smrkového dřeva.',
      'Volba výplně na míru: vyšší, nižší, měkčí nebo tvrdší na sezení.',
      'Zdobení: naučíme vás přidat ozdobné čalounické knoflíky nebo elegantní paspuli.',
      'Nožičky na výběr z několika typů včetně volby barvy a povrchové úpravy.',
      'K zapůjčení jsou zástěry, pracovní a ochranné rukavice, respirátor nebo ochranné brýle a sluchátka.',
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Kurzy
  {
    id: 'k-1',
    src: '/images/service-kurzy.jpg',
    title: 'Atmosféra v čalounické dílně',
    category: 'kurzy',
    description: 'Radost z dokončené práce na celodenním kurzu čalounění.',
  },
  {
    id: 'k-2',
    src: '/images/kurz-1.jpg',
    title: 'Práce s potahovou látkou',
    category: 'kurzy',
    description: 'Precizní napínání a upevňování vzorované látky na kurzu.',
  },
  {
    id: 'k-3',
    src: '/images/kurz-2.jpg',
    title: 'Renovace křesel a židlí',
    category: 'kurzy',
    description: 'Každý účastník pracuje pod odborným vedením na svém originálním kousku.',
  },
  {
    id: 'k-4',
    src: '/images/kurz-3.jpg',
    title: 'Detailní čalounické postupy',
    category: 'kurzy',
    description: 'Od přípravy kostry a výplní až po finální čalounění.',
  },
  {
    id: 'k-5',
    src: '/images/kurz-4.jpg',
    title: 'Tvoření v plně vybavené dílně',
    category: 'kurzy',
    description: 'Profesionální nářadí a individuální přístup ke každému projektu.',
  },
  {
    id: 'k-6',
    src: '/images/kurz-5.jpg',
    title: 'Krok za krokem k novému kousku',
    category: 'kurzy',
    description: 'Kurzy jsou vhodné pro úplné začátečníky i pokročilé.',
  },
  {
    id: 'k-7',
    src: '/images/kurz-6.jpg',
    title: 'Hotové práce účastníků kurzu',
    category: 'kurzy',
    description: 'Originální nábytek s novým životem a osobitým stylem.',
  },
  {
    id: 'k-8',
    src: '/images/kurz-7.jpg',
    title: 'Designové taburety a křesílka',
    category: 'kurzy',
    description: 'Pestré látky, paspule a poctivé řemeslné zpracování.',
  },

  // Restaurování
  {
    id: 'r-1',
    src: '/images/rest-kreslo.jpg',
    title: 'Restaurované historické křeslo',
    category: 'restaurovani',
    description: 'Spojení citlivě ošetřeného dřeva a výrazného moderního textilu.',
  },
  {
    id: 'r-2',
    src: '/images/rest-modre-zidle.jpg',
    title: 'Sada čalouněných židlí v královské modři',
    category: 'restaurovani',
    description: 'Kompletní obnova čalounění i dřevěné konstrukce.',
  },
  {
    id: 'r-3',
    src: '/images/rest-lavice.jpg',
    title: 'Čalouněná lavice na míru',
    category: 'restaurovani',
    description: 'Autorská tvorba a zakázkové čalounění s důrazem na detail.',
  },
  {
    id: 'r-4',
    src: '/images/rest-1.jpg',
    title: 'Tradiční vyvazování a obnova kostry',
    category: 'restaurovani',
    description: 'Používáme klasické pružiny, africkou trávu, koňské žíně a lněné popruhy.',
  },
  {
    id: 'r-5',
    src: '/images/rest-2.jpg',
    title: 'Zakázkové čalounění starožitného nábytku',
    category: 'restaurovani',
    description: 'Zachování historické patiny a duše nábytku pro moderní interiér.',
  },
  {
    id: 'r-6',
    src: '/images/gal-1.jpg',
    title: 'Solitérní křeslo po kompletní renovaci',
    category: 'restaurovani',
    description: 'Výrazný solitér, který oživí každý interiér.',
  },
  {
    id: 'r-7',
    src: '/images/gal-2.jpg',
    title: 'Klasické čalounění s ozdobnými prvky',
    category: 'restaurovani',
    description: 'Precizní návaznost vzorů a tradiční šelaková politura.',
  },
  {
    id: 'r-8',
    src: '/images/gal-3.jpg',
    title: 'Historický sedací nábytek',
    category: 'restaurovani',
    description: 'Kompletní rekonstrukce vnitřních výplní i dřevěných řezeb.',
  },
  {
    id: 'r-9',
    src: '/images/gal-4.jpg',
    title: 'Detail čalounické práce',
    category: 'restaurovani',
    description: 'Poctivá ruční práce do posledního stehu.',
  },
  {
    id: 'r-10',
    src: '/images/gal-5.jpg',
    title: 'Renovace starožitného sofa',
    category: 'restaurovani',
    description: 'Citlivé restaurování dřeva a dobově věrný potah.',
  },
  {
    id: 'r-11',
    src: '/images/gal-6.jpg',
    title: 'Křeslo po kompletní obnově',
    category: 'restaurovani',
    description: 'Spojení klasických řemeslných technik a nadčasové estetiky.',
  },
  {
    id: 'r-12',
    src: '/images/gal-7.jpg',
    title: 'Designové přečalounění',
    category: 'restaurovani',
    description: 'Odvážné barvy a struktury v kombinaci s tradičním tvarem.',
  },
  {
    id: 'r-13',
    src: '/images/gal-8.jpg',
    title: 'Restaurování v dílně Charivari Home',
    category: 'restaurovani',
    description: 'Každý kus nábytku má svůj příběh, který znovu oživujeme.',
  },
  {
    id: 'r-14',
    src: '/images/gal-9.jpg',
    title: 'Dokončená realizace v interiéru',
    category: 'restaurovani',
    description: 'Když se staré řemeslo potká s moderním domovem.',
  },

  // Autoveteráni
  {
    id: 'v-1',
    src: '/images/service-veterani.jpg',
    title: 'Čalounění sedadel autoveterána',
    category: 'veterani',
    description: 'Vracíme komfort a lesk kabinám historických vozů.',
  },
  {
    id: 'v-2',
    src: '/images/vet-1.jpg',
    title: 'Interiér historického vozu',
    category: 'veterani',
    description: 'Precizní zpracování sedadel a výplní s důrazem na dobovou věrnost.',
  },
  {
    id: 'v-3',
    src: '/images/vet-2.jpg',
    title: 'Renovace sedadel a čalounění kabiny',
    category: 'veterani',
    description: 'Každý steh a záhyb musí přesně sedět.',
  },
  {
    id: 'v-4',
    src: '/images/vet-3.jpg',
    title: 'Detail sedadla veterána',
    category: 'veterani',
    description: 'Kůže a vysoce odolné materiály zpracované tradiční technikou.',
  },
  {
    id: 'v-5',
    src: '/images/vet-4.jpg',
    title: 'Čalounění dveří a interiérových panelů',
    category: 'veterani',
    description: 'Kompletní obnova interiéru na míru historickému vozu.',
  },
  {
    id: 'v-6',
    src: '/images/vet-5.jpg',
    title: 'Renovace motocyklového sedla',
    category: 'veterani',
    description: 'Od opravy prosezených pěn až po kompletní kožené přečalounění.',
  },
  {
    id: 'v-7',
    src: '/images/vet-6.jpg',
    title: 'Dokončené sedlo a čalounění stroje',
    category: 'veterani',
    description: 'Odolné materiály, které zvládnou slunce i déšť se zachováním stylu.',
  },
  {
    id: 'v-8',
    src: '/images/vet-7.jpg',
    title: 'Ruční šití a paspulování sedadel',
    category: 'veterani',
    description: 'Ke každému stroji přistupujeme jako k unikátu.',
  },
  {
    id: 'v-9',
    src: '/images/vet-8.jpg',
    title: 'Kompletní interiér po renovaci',
    category: 'veterani',
    description: '„Vracíme komfort tam, kde se píše historie.“',
  },

  // Historie
  {
    id: 'h-1',
    src: '/images/hist-1-frantisek.jpg',
    title: 'Praděda František a děda Ladislav',
    category: 'historie',
    description: 'Zakladatelé rodinné čalounické tradice s dílenským mistrem a tovaryši.',
  },
  {
    id: 'h-2',
    src: '/images/hist-2-dilna.jpg',
    title: 'Čalounické rukodílny pod obchodem',
    category: 'historie',
    description: 'Zvýšený suterén pod obchodem, vpravo děda Ladislav.',
  },
  {
    id: 'h-3',
    src: '/images/hist-3-pradelna.jpg',
    title: 'Čalouničtí učňové, mistr a prababička',
    category: 'historie',
    description: 'Dobová fotografie z rodinného archivu.',
  },
  {
    id: 'h-4',
    src: '/images/hist-4-holesovice.jpg',
    title: 'Roh Plynární a Argentinské, Praha 7 Holešovice',
    category: 'historie',
    description: 'Pohled na původní sídlo firmy před cca 90 lety.',
  },
];
