export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: 'kurzy' | 'restaurovani' | 'veterani' | 'historie';
  description?: string;
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
