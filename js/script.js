/* ============================================================
   L'AMOUR — landing + catálogo + painel do administrador
   Tudo que aparece no site vem de DADOS (editáveis no painel).
   ============================================================ */

const DEFAULT_DATA = {
  marca:{ nome:"L'AMOUR", sub:"Essência moda e variedades", favicon:"🕊️", logo:"" },

  cores:{ bg:"#FAF8F5", bg2:"#F2EAE5", ink:"#211D1D", ink2:"#756A67",
          gold:"#C7A46A", rose:"#D8A7A0", nude:"#E8D5CA", escuroAuto:true },

  fontes:{ titulo:"Cormorant Garamond", texto:"Plus Jakarta Sans" },

  hero:{
    eyebrow:"Beleza • Essência • Estilo",
    l1:"Sua essência.", l2:"Seu estilo.", l3:"Seu momento na", destaque:"L'amour",
    lede:"Perfumes, maquiagem, cosméticos e moda escolhidos para valorizar aquilo que torna você única.",
    cta1:"Ver catálogo", cta2:"Falar pelo WhatsApp",
    badgeT:"Sua fragrância", badgeS:"começa por aqui",
    imagem:"", tags:["Perfumes","Make","Cosméticos","Moda e variedades"]
  },

  manifesto:{ texto:"Mais do que produtos. Uma experiência para realçar quem você é." },
  marquee:{ itens:["Perfumes","Make","Cosméticos","Moda","Essência","Estilo"] },

  cats:{ eyebrow:"Categorias", titulo:"Encontre o seu estilo",
         subtitulo:"Descubra um universo de beleza, fragrâncias e moda pensado para você." },

  bento:{ eyebrow:"Na loja", titulo:"Um universo de possibilidades" },

  destaques:{ eyebrow:"Destaques", titulo:"Selecionados para você",
              subtitulo:"Alguns produtos da loja. O catálogo completo tem tudo o que está disponível hoje.",
              cta:"Ver catálogo completo" },

  make:{ eyebrow:"Maquiagem", titulo:"Sua beleza, suas regras.",
         subtitulo:"Do básico do dia a dia ao look que pede presença.",
         frase1:"Realce. Expresse.", frase2:"Encante.",
         chips:["Batom","Base","Blush","Máscara","Paleta","Gloss"],
         img1:"", img2:"", img3:"" },

  cuidados:{ eyebrow:"Cosméticos", titulo:"Seu momento de cuidado começa aqui.",
    subtitulo:"Skincare, corpo, cabelos e higiene: pequenos rituais que fazem diferença todos os dias.",
    itens:[
      { titulo:"Cuidados com a pele", texto:"Limpeza, hidratação e proteção para a rotina de skincare.", arte:"skincare", imagem:"" },
      { titulo:"Corpo", texto:"Hidratantes, óleos e aromas para o cuidado do dia a dia.", arte:"body", imagem:"" },
      { titulo:"Cabelos", texto:"Produtos para lavar, tratar e finalizar com cuidado.", arte:"hair", imagem:"" },
      { titulo:"Higiene e beleza", texto:"Essenciais de beleza e variedades para completar a nécessaire.", arte:"hygiene", imagem:"" }
    ]},

  moda:{ eyebrow:"Boutique", titulo:"Vista a sua essência.",
    subtitulo:"Moda para acompanhar sua personalidade em todos os momentos.",
    itens:[
      { titulo:"Vestidos", arte:"moda", imagem:"" },
      { titulo:"Blusas", arte:"moda-wide", imagem:"" },
      { titulo:"Conjuntos", arte:"fabric", imagem:"" },
      { titulo:"Saias e calças", arte:"moda2", imagem:"" },
      { titulo:"Acessórios", arte:"acessorios", imagem:"" },
      { titulo:"Variedades", arte:"variedades", imagem:"" }
    ]},

  porque:{ eyebrow:"A loja", titulo:"Por que escolher a L'amour?",
    itens:[
      { titulo:"Variedade", texto:"Um universo de beleza, perfumaria e moda em um só lugar.", icone:"estrela" },
      { titulo:"Estilo", texto:"Produtos escolhidos para diferentes estilos e momentos.", icone:"montanha" },
      { titulo:"Cuidado", texto:"Uma experiência de compra mais próxima e especial.", icone:"coracao" },
      { titulo:"Essência", texto:"Porque beleza não é apenas aparência. É expressão.", icone:"gota" }
    ]},

  sobre:{ eyebrow:"Sobre a loja", titulo1:"Mais que uma loja.", titulo2:"Uma experiência.",
    texto:"A L'amour Essência Moda e Variedades nasceu para reunir em um só lugar aquilo que transforma pequenos detalhes em grandes momentos: uma fragrância marcante, uma maquiagem que eleva a autoestima, um cuidado especial ou aquela peça que completa o look.",
    fecho:"Venha conhecer a L'amour.", imagem:"" },

  local:{ eyebrow:"Localização", titulo:"Venha nos conhecer",
    endereco:"", maps:"https://maps.app.goo.gl/qKcD6AvkANBxoahE9",
    horarios:[
      { dia:"Segunda a sexta", horario:"" },
      { dia:"Sábado", horario:"" },
      { dia:"Domingo", horario:"" }
    ]},

  talk:{ eyebrow:"Atendimento", titulo:"Encontrou o que estava procurando?",
         texto:"Fale com a L'amour e descubra mais sobre nossos produtos.", cta:"Falar pelo WhatsApp" },

  cta:{ eyebrow:"L'amour Essência", titulo:"A sua essência merece ser inesquecível.",
        texto:"Descubra perfumes, make, cosméticos e moda na L'amour.",
        btn1:"Ver catálogo", btn2:"Como chegar", imagem:"" },

  catalogo:{ eyebrow:"Catálogo", titulo:"Tudo o que tem na loja",
    subtitulo:"Navegue pelas categorias, encontre o que combina com você e chame no WhatsApp para garantir o seu.",
    mostrarPreco:true, textoSemPreco:"Sob consulta" },

  contato:{ whatsapp:"", mensagem:"Olá! Vim pelo site da L'amour Essência e gostaria de saber mais sobre os produtos.",
            telefone:"", email:"", instagram:"", facebook:"", tiktok:"" },

  rodape:{ texto:"Perfumes, maquiagem, cosméticos, moda e variedades — reunidos para realçar a sua essência.",
           tags:"Perfumes • Make • Cosméticos • Moda e variedades", ano:2026 },

  institucional:{
    eyebrow:"Institucional", titulo:"Mais que uma loja. Uma experiência.",
    subtitulo:"Perfumaria, maquiagem, cosméticos, moda e variedades reunidos com cuidado, para você encontrar tudo em um lugar só.",
    capa:"",
    historiaEyebrow:"Nossa história", historiaTitulo:"Nascemos para reunir o que faz diferença",
    historiaTexto:"A L'amour Essência Moda e Variedades nasceu para reunir em um só lugar aquilo que transforma pequenos detalhes em grandes momentos: uma fragrância marcante, uma maquiagem que eleva a autoestima, um cuidado especial ou aquela peça que completa o look.\n\nCada item da loja é escolhido pensando em quem vai levar — no dia a dia, no presente para alguém querido, no detalhe que faltava.",
    historiaBtn:"Ver o catálogo", historiaImg:"",
    valoresEyebrow:"O que nos guia", valoresTitulo:"Nossos valores",
    valores:[
      { titulo:"Atendimento próximo", texto:"Conversa de verdade para entender o que você procura, sem pressa e sem pressão.", icone:"coracao" },
      { titulo:"Curadoria", texto:"Produtos escolhidos um a um, para diferentes estilos, momentos e bolsos.", icone:"estrela" },
      { titulo:"Confiança", texto:"O que você vê é o que você leva: informação clara sobre cada produto.", icone:"folha" }
    ],
    galeriaEyebrow:"A loja por dentro", galeriaTitulo:"Um passeio pelos nossos cantos",
    galeria:[
      { arte:"perfume-hero", imagem:"", legenda:"Perfumaria" },
      { arte:"lips",        imagem:"", legenda:"Maquiagem" },
      { arte:"skincare",    imagem:"", legenda:"Cuidados" },
      { arte:"moda-wide",   imagem:"", legenda:"Moda" },
      { arte:"acessorios",  imagem:"", legenda:"Acessórios" }
    ],
    fechoEyebrow:"Venha conhecer", fechoTitulo:"A gente adora receber visita.",
    fechoTexto:"Passe na loja para sentir os aromas, ver as cores de perto e escolher com calma."
  },

  pedido:{
    eyebrow:"Pedido", titulo:"Meu pedido",
    subtitulo:"Monte sua lista e envie para a loja pelo WhatsApp. A confirmação de preço, disponibilidade e entrega é feita na conversa.",
    msgIntro:"Olá! Gostaria de fazer um pedido pelo site:",
    mostrarTotal:true, pedirNome:true, pedirEntrega:true, pedirObs:true,
    opcoesEntrega:["Retirar na loja","Entrega"],
    aviso:"O total é uma estimativa com base nos preços do site. Frete e disponibilidade são confirmados no WhatsApp.",
    vazioTitulo:"Seu pedido está vazio", vazioTexto:"Escolha os produtos no catálogo e eles aparecem aqui.",
    btnEnviar:"Enviar pedido pelo WhatsApp"
  },

  admin:{ senha:"lamour2026" },

  categorias:[
    { id:"perfumes",   nome:"Perfumes",   desc:"Fragrâncias que deixam sua presença marcada.", cta:"Explorar perfumes",   arte:"perfume",    imagem:"", visivel:true },
    { id:"make",       nome:"Make",       desc:"Realce sua beleza, do seu jeito.",              cta:"Explorar make",       arte:"make",       imagem:"", visivel:true },
    { id:"cosmeticos", nome:"Cosméticos", desc:"Cuidados que fazem parte da sua rotina.",       cta:"Explorar cosméticos", arte:"skincare",   imagem:"", visivel:true },
    { id:"moda",       nome:"Moda",       desc:"Peças para transformar seu estilo.",            cta:"Explorar moda",       arte:"moda",       imagem:"", visivel:true },
    { id:"acessorios", nome:"Acessórios", desc:"Detalhes que completam o look.",                cta:"Explorar acessórios", arte:"acessorios", imagem:"", visivel:true },
    { id:"variedades", nome:"Variedades", desc:"Presentes e utilidades para o dia a dia.",      cta:"Explorar variedades", arte:"variedades", imagem:"", visivel:true }
  ]
};

/* Produtos demonstrativos — apague ou edite no painel. */
const DEFAULT_PRODUTOS = [
  { id:"demo1", nome:"Nome do perfume", categoria:"perfumes",   descricao:"Descrição do produto.", preco:"", precoDe:"", arte:"perfume",      imagem:"", destaque:true,  ativo:true, tags:[], ordem:1, criadoEm:0 },
  { id:"demo2", nome:"Nome do perfume", categoria:"perfumes",   descricao:"Descrição do produto.", preco:"", precoDe:"", arte:"perfume-tall", imagem:"", destaque:true,  ativo:true, tags:[], ordem:2, criadoEm:0 },
  { id:"demo3", nome:"Nome do produto", categoria:"make",       descricao:"Descrição do produto.", preco:"", precoDe:"", arte:"lips",         imagem:"", destaque:true,  ativo:true, tags:[], ordem:3, criadoEm:0 },
  { id:"demo4", nome:"Nome do produto", categoria:"cosmeticos", descricao:"Descrição do produto.", preco:"", precoDe:"", arte:"skincare",     imagem:"", destaque:false, ativo:true, tags:[], ordem:4, criadoEm:0 },
  { id:"demo5", nome:"Nome da peça",    categoria:"moda",       descricao:"Descrição do produto.", preco:"", precoDe:"", arte:"moda",         imagem:"", destaque:false, ativo:true, tags:[], ordem:5, criadoEm:0 },
  { id:"demo6", nome:"Nome do produto", categoria:"acessorios", descricao:"Descrição do produto.", preco:"", precoDe:"", arte:"acessorios",   imagem:"", destaque:false, ativo:true, tags:[], ordem:6, criadoEm:0 }
];

/* ============================================================
   UTILIDADES
   ============================================================ */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const mq = q => (typeof window.matchMedia === 'function' ? window.matchMedia(q) : { matches:false });
const reduceMotion  = mq('(prefers-reduced-motion: reduce)').matches;
const isFinePointer = mq('(hover: hover) and (pointer: fine)').matches;
const clone = o => JSON.parse(JSON.stringify(o));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = () => 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

function get(obj, path){
  return String(path).split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
}
function set(obj, path, val){
  const ks = String(path).split('.');
  let o = obj;
  for (let i = 0; i < ks.length - 1; i++){
    const k = ks[i];
    if (o[k] == null || typeof o[k] !== 'object') o[k] = /^\d+$/.test(ks[i + 1]) ? [] : {};
    o = o[k];
  }
  o[ks[ks.length - 1]] = val;
  return obj;
}
function mergeDeep(base, extra){
  if (!extra || typeof extra !== 'object') return base;
  Object.keys(extra).forEach(k => {
    const v = extra[k];
    if (Array.isArray(v)) base[k] = clone(v);
    else if (v && typeof v === 'object') base[k] = mergeDeep((base[k] && typeof base[k] === 'object' && !Array.isArray(base[k])) ? base[k] : {}, v);
    else if (v !== undefined) base[k] = v;
  });
  return base;
}

function toast(msg){
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('is-on');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('is-on'), 4200);
}

const D = () => Store.data;
function waNumber(){ return String(D().contato.whatsapp || '').replace(/\D/g, ''); }
function waLink(msg){
  const n = waNumber();
  if (!n) return '';
  return 'https://wa.me/' + n + '?text=' + encodeURIComponent(msg || D().contato.mensagem || '');
}
function precoNum(p){
  const s = String(p == null ? '' : p).replace(/[^\d,.-]/g, '').replace(/\.(?=\d{3}\b)/g, '').replace(',', '.');
  const n = parseFloat(s);
  return isNaN(n) ? null : n;
}
function precoTxt(p){
  const n = precoNum(p);
  if (n == null) return String(p == null ? '' : p).trim();
  return 'R$ ' + n.toFixed(2).replace('.', ',');
}

/* redimensiona e comprime a imagem antes de guardar */
function prepararImagem(file, maxLado = 1400, q = 0.82){
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onerror = () => reject(new Error('Não consegui ler o arquivo.'));
    fr.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Arquivo de imagem inválido.'));
      img.onload = () => {
        const r = Math.min(1, maxLado / Math.max(img.width, img.height));
        const w = Math.max(1, Math.round(img.width * r)), h = Math.max(1, Math.round(img.height * r));
        const cv = document.createElement('canvas');
        cv.width = w; cv.height = h;
        const ctx = cv.getContext('2d');
        ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);
        const dataUrl = cv.toDataURL('image/jpeg', q);
        cv.toBlob(b => resolve({ blob:b, dataUrl }), 'image/jpeg', q);
      };
      img.src = fr.result;
    };
    fr.readAsDataURL(file);
  });
}

/* ============================================================
   ARTE EDITORIAL (SVG) — usada quando não há foto cadastrada
   ============================================================ */
const ART = (() => {
  let n = 0;
  const TONES = {
    ivory:['#FBF7F1','#EFE3D5','#E2CFBE'], champagne:['#F6EDDF','#EBDAC2','#DCC29F'],
    nude:['#F4E6DB','#E9D2C2','#DBB9A5'], rose:['#F6E4E0','#EBC8C2','#DCA9A2'],
    mocha:['#EDE0D6','#D8C3B4','#BFA795'], sand:['#F2EBE2','#E0D5C6','#CBBCA8'],
    deep:['#2B2320','#1B1513','#100C0B']
  };
  const INK = 'rgba(33,29,29,.62)', INK_SOFT = 'rgba(33,29,29,.20)', GOLD = '#C7A46A', LIGHT = 'rgba(255,255,255,.55)';

  const M = {
    perfume: c => `
      <g fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round">
        <rect x="140" y="250" width="120" height="160" rx="22"/><path d="M172 250v-22h56v22"/>
        <rect x="178" y="186" width="44" height="30" rx="7"/><path d="M186 186v-14a14 14 0 0128 0v14"/><path d="M148 336h104"/>
      </g>
      <rect x="146" y="338" width="108" height="66" rx="18" fill="${GOLD}" opacity=".26"/>
      <rect x="178" y="186" width="44" height="30" rx="7" fill="${GOLD}" opacity=".3"/>
      <circle cx="200" cy="300" r="15" fill="none" stroke="${GOLD}" stroke-width="1.1" opacity=".8"/>`,
    perfumeTall: c => `
      <g fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round">
        <path d="M162 250h76v146a18 18 0 01-18 18h-40a18 18 0 01-18-18z"/><path d="M182 250v-30h36v30"/>
        <rect x="176" y="168" width="48" height="36" rx="6"/>
      </g>
      <rect x="164" y="330" width="72" height="82" rx="16" fill="${GOLD}" opacity=".24"/>
      <rect x="176" y="168" width="48" height="36" rx="6" fill="${GOLD}" opacity=".28"/><path d="M200 168v-16" stroke="${GOLD}" stroke-width="1.4"/>`,
    perfumeWide: c => `
      <g fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round">
        <rect x="120" y="278" width="160" height="126" rx="28"/><path d="M184 278v-20h32v20"/>
        <rect x="180" y="220" width="40" height="26" rx="6"/><path d="M200 220v-8"/>
      </g>
      <rect x="126" y="340" width="148" height="58" rx="24" fill="${GOLD}" opacity=".22"/>
      <ellipse cx="200" cy="278" rx="80" ry="7" fill="${LIGHT}"/>`,
    lips: c => `
      <g fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round">
        <rect x="158" y="272" width="54" height="150" rx="10"/><path d="M158 300h54"/>
        <path d="M168 272v-36a4 4 0 014-4h26a4 4 0 014 4v36"/>
      </g>
      <path d="M168 236h30v36h-30z" fill="#D8A7A0" opacity=".85"/>
      <path d="M168 238c6-16 24-18 30-4v2h-30z" fill="#C98F88"/>
      <g fill="none" stroke="${c}" stroke-width="1.5"><rect x="228" y="330" width="70" height="92" rx="12"/><path d="M228 356h70"/></g>
      <rect x="236" y="364" width="54" height="50" rx="8" fill="${GOLD}" opacity=".3"/>`,
    palette: c => `
      <g fill="none" stroke="${c}" stroke-width="1.6"><rect x="96" y="246" width="208" height="150" rx="16"/><path d="M96 286h208"/></g>
      <g opacity=".85">
        <circle cx="136" cy="330" r="17" fill="#E0C4AE"/><circle cx="178" cy="330" r="17" fill="#D8A7A0"/>
        <circle cx="220" cy="330" r="17" fill="#C7A46A"/><circle cx="262" cy="330" r="17" fill="#A6837A"/>
        <circle cx="157" cy="368" r="17" fill="#EAD6C6"/><circle cx="199" cy="368" r="17" fill="#B98F72"/><circle cx="241" cy="368" r="17" fill="#8C6A61"/>
      </g>
      <rect x="96" y="246" width="208" height="40" rx="16" fill="${LIGHT}"/>`,
    brush: c => `
      <g fill="none" stroke="${c}" stroke-width="1.6" stroke-linecap="round"><path d="M150 420V318"/><path d="M188 420V304"/><path d="M226 420V326"/></g>
      <path d="M150 318c-9 0-15-10-15-27s6-33 15-33 15 16 15 33-6 27-15 27z" fill="${GOLD}" opacity=".42"/>
      <path d="M188 304c-10 0-17-12-17-31s8-38 17-38 17 19 17 38-7 31-17 31z" fill="#C79F8E" opacity=".5"/>
      <path d="M226 326c-8 0-14-9-14-25s6-30 14-30 14 14 14 30-6 25-14 25z" fill="${GOLD}" opacity=".32"/>
      <g stroke="${GOLD}" stroke-width="1.3" fill="none"><path d="M137 320h26M136 326h28"/><path d="M172 306h32M171 313h34"/><path d="M213 328h26M212 334h28"/></g>`,
    skincare: c => `
      <g fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round">
        <rect x="150" y="272" width="100" height="148" rx="18"/><path d="M188 272v-26h24v26"/>
        <rect x="184" y="196" width="32" height="34" rx="9"/><path d="M200 246v-16"/>
        <rect x="262" y="330" width="78" height="80" rx="14"/><path d="M262 352h78"/>
      </g>
      <rect x="156" y="330" width="88" height="84" rx="14" fill="${GOLD}" opacity=".2"/>
      <rect x="184" y="196" width="32" height="34" rx="9" fill="${GOLD}" opacity=".3"/>
      <rect x="268" y="358" width="66" height="46" rx="10" fill="#E8D5CA" opacity=".8"/>`,
    body: c => `
      <g fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round">
        <path d="M146 288h108v114a20 20 0 01-20 20h-68a20 20 0 01-20-20z"/><path d="M176 288v-24h48v24"/>
        <rect x="180" y="226" width="40" height="24" rx="6"/><path d="M200 264v-14"/>
      </g>
      <rect x="152" y="338" width="96" height="78" rx="16" fill="#E8D5CA" opacity=".75"/>
      <path d="M188 226c-4-14 4-24 12-30 6 10 14 14 12 30z" fill="${GOLD}" opacity=".35"/>`,
    hair: c => `
      <g fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round">
        <path d="M132 276h84v126a18 18 0 01-18 18h-48a18 18 0 01-18-18z"/><path d="M156 276v-22h36v22"/>
        <rect x="162" y="220" width="24" height="26" rx="6"/>
        <path d="M232 296h76v106a18 18 0 01-18 18h-40a18 18 0 01-18-18z"/><path d="M256 296v-18h28v18"/>
      </g>
      <rect x="138" y="330" width="72" height="84" rx="14" fill="${GOLD}" opacity=".22"/>
      <rect x="238" y="344" width="64" height="70" rx="12" fill="#D8A7A0" opacity=".4"/>`,
    hygiene: c => `
      <g fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round">
        <rect x="112" y="296" width="74" height="118" rx="16"/><path d="M136 296v-20h26v20"/>
        <rect x="140" y="258" width="18" height="20" rx="5"/>
        <ellipse cx="252" cy="352" rx="58" ry="46"/><ellipse cx="252" cy="344" rx="42" ry="32"/><path d="M206 406h92"/>
      </g>
      <ellipse cx="252" cy="352" rx="58" ry="46" fill="${GOLD}" opacity=".18"/>
      <rect x="118" y="344" width="62" height="64" rx="12" fill="#E8D5CA" opacity=".8"/>
      <path d="M236 330c6-10 22-10 30 0" stroke="${LIGHT}" stroke-width="2.5" fill="none"/>`,
    dress: c => `
      <g fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round">
        <path d="M168 196l-28 18 16 34 14-8v42l-24 132c34 12 74 12 108 0l-24-132v-42l14 8 16-34-28-18c-12 12-52 12-64 0z"/><path d="M174 282h52"/>
      </g>
      <path d="M156 412l16-90h56l16 90c-28 10-60 10-88 0z" fill="${GOLD}" opacity=".2"/>
      <path d="M168 196c12 12 52 12 64 0" stroke="${GOLD}" stroke-width="1.3" fill="none"/>`,
    hanger: c => `
      <g fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round">
        <path d="M200 196v-14a14 14 0 1114 14"/><path d="M200 196l-76 52c-6 4-4 12 4 12h144c8 0 10-8 4-12z"/>
        <path d="M124 260l28 148h96l28-148"/>
      </g>
      <path d="M152 408l-24-140h144l-24 140z" fill="#C79F8E" opacity=".22"/><path d="M200 268v140" stroke="${GOLD}" stroke-width="1.1"/>`,
    acessorios: c => `
      <g fill="none" stroke="${c}" stroke-width="1.6">
        <circle cx="152" cy="300" r="46"/><circle cx="152" cy="300" r="30"/><circle cx="252" cy="342" r="58"/><path d="M252 284v116"/>
      </g>
      <circle cx="252" cy="284" r="9" fill="${GOLD}"/><circle cx="152" cy="254" r="7" fill="${GOLD}"/>
      <path d="M210 402c18 10 46 10 64 0" stroke="${GOLD}" stroke-width="1.2" fill="none"/>
      <circle cx="252" cy="342" r="58" fill="${GOLD}" opacity=".12"/>`,
    kit: c => `
      <g fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round">
        <rect x="118" y="282" width="164" height="128" rx="14"/><path d="M118 318h164M200 282v128"/>
        <path d="M200 282c-16-30-52-28-46-4 4 16 30 12 46 4zM200 282c16-30 52-28 46-4-4 16-30 12-46 4z"/>
      </g>
      <rect x="124" y="322" width="152" height="84" rx="10" fill="${GOLD}" opacity=".18"/>`,
    variedades: c => `
      <g fill="none" stroke="${c}" stroke-width="1.6" stroke-linejoin="round">
        <rect x="126" y="292" width="88" height="118" rx="12"/><rect x="228" y="250" width="58" height="160" rx="14"/>
        <path d="M126 322h88M228 286h58"/><circle cx="170" cy="368" r="16"/>
      </g>
      <rect x="234" y="292" width="46" height="112" rx="10" fill="#D8A7A0" opacity=".35"/>
      <rect x="132" y="328" width="76" height="76" rx="10" fill="${GOLD}" opacity=".2"/>`,
    boutique: c => {
      const peca = (x, y, k, fill, op) => `
        <g transform="translate(${x} ${y}) scale(${k})">
          <path d="M0-16v-8a8 8 0 018-8" fill="none" stroke="${c}" stroke-width="1.4"/>
          <path d="M-26 20l-12-16 26-18c8 8 16 8 24 0l26 18-12 16-8-6v106h-36V14z" fill="${fill}" fill-opacity="${op}" stroke="${c}" stroke-width="1.5" stroke-linejoin="round"/>
        </g>`;
      return `<path d="M78 250h244" stroke="${c}" stroke-width="1.6" stroke-linecap="round"/>
      <g stroke="${c}" stroke-width="1.2" opacity=".5"><path d="M92 250v-26M308 250v-26"/></g>
      ${peca(138, 268, 1, '#D8A7A0', .3)}${peca(204, 262, 1.14, '#C7A46A', .24)}${peca(272, 272, .92, '#C79F8E', .26)}`;
    },
    fabric: () => `
      <g fill="none" stroke="rgba(33,29,29,.26)" stroke-width="1.3">
        <path d="M-10 150c60 44 120-18 180 26s100 8 240 40"/><path d="M-10 196c60 44 120-18 180 26s100 8 240 40"/>
        <path d="M-10 242c60 44 120-18 180 26s100 8 240 40"/><path d="M-10 288c60 44 120-18 180 26s100 8 240 40"/>
        <path d="M-10 334c60 44 120-18 180 26s100 8 240 40"/>
      </g>
      <g fill="none" stroke="rgba(199,164,106,.5)" stroke-width="1.1">
        <path d="M-10 173c60 44 120-18 180 26s100 8 240 40"/><path d="M-10 311c60 44 120-18 180 26s100 8 240 40"/>
      </g>
      <path d="M0 404c80-30 140 30 220 0s120 20 190-10v112H0z" fill="${GOLD}" opacity=".18"/>`,
    map: () => `
      <g stroke="rgba(33,29,29,.14)" stroke-width="9" fill="none" stroke-linecap="round"><path d="M-20 150h440M-20 330h440M120 -20v540M290 -20v540"/></g>
      <g stroke="rgba(33,29,29,.09)" stroke-width="4" fill="none"><path d="M-20 240h440M-20 420h440M200 -20v540M60 -20v540M360 -20v540"/></g>
      <path d="M-20 60C80 110 160 40 240 96s120 20 200 76" stroke="${GOLD}" stroke-width="5" fill="none" opacity=".5"/>
      <g fill="rgba(33,29,29,.06)"><rect x="140" y="170" width="130" height="140" rx="6"/><rect x="10" y="350" width="90" height="60" rx="6"/><rect x="310" y="170" width="90" height="140" rx="6"/></g>`
  };

  function botanic(x, y, s, rot, color){
    return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" fill="none" stroke="${color}" stroke-width="1.3" stroke-linecap="round">
      <path d="M0 0C0-40 0-70 0-96"/>
      <path d="M0-30c-16-4-24-16-26-30 16 2 24 12 26 30zM0-52c16-4 24-16 26-30-16 2-24 12-26 30z"/>
      <ellipse cx="0" cy="-104" rx="9" ry="14"/>
      <ellipse cx="-11" cy="-96" rx="8" ry="13" transform="rotate(-32 -11 -96)"/>
      <ellipse cx="11" cy="-96" rx="8" ry="13" transform="rotate(32 11 -96)"/></g>`;
  }

  function build(o){
    const id = 'a' + (++n);
    const t = TONES[o.tone] || TONES.ivory;
    const dark = o.tone === 'deep';
    const ink = dark ? 'rgba(246,241,236,.62)' : INK;
    const line = dark ? 'rgba(246,241,236,.22)' : INK_SOFT;
    const motif = o.motif && M[o.motif] ? M[o.motif](ink) : '';
    return `<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(o.alt || '')}">
  <defs>
    <linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${t[0]}"/><stop offset="58%" stop-color="${t[1]}"/><stop offset="100%" stop-color="${t[2]}"/></linearGradient>
    <radialGradient id="${id}h" cx="30%" cy="18%" r="70%"><stop offset="0%" stop-color="#fff" stop-opacity="${dark ? .14 : .72}"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <filter id="${id}b" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="26"/></filter>
  </defs>
  <rect width="400" height="500" fill="url(#${id}g)"/>
  <g filter="url(#${id}b)" opacity="${dark ? .5 : .65}">
    <circle cx="300" cy="120" r="96" fill="${o.blob || '#D8A7A0'}" opacity=".5"/>
    <circle cx="80" cy="410" r="110" fill="#C7A46A" opacity=".32"/>
  </g>
  <rect width="400" height="500" fill="url(#${id}h)"/>
  ${o.arc !== false ? `<circle cx="200" cy="286" r="${o.r || 132}" fill="none" stroke="${line}" stroke-width="1"/>` : ''}
  ${o.botanic !== false ? botanic(318, 470, 1.05, -12, dark ? 'rgba(216,185,132,.6)' : 'rgba(199,164,106,.85)') : ''}
  ${o.botanic2 ? botanic(76, 486, .8, 14, dark ? 'rgba(246,241,236,.28)' : 'rgba(33,29,29,.22)') : ''}
  ${motif}
  ${o.floor !== false ? `<path d="M0 430c70-18 130 16 200 6s130-30 200-14v78H0z" fill="${dark ? 'rgba(0,0,0,.35)' : 'rgba(255,255,255,.35)'}"/>` : ''}
</svg>`;
  }

  const SCENES = {
    'perfume-hero':{tone:'champagne',motif:'perfume',blob:'#D8A7A0',botanic2:true,r:150},
    'perfume':{tone:'nude',motif:'perfume',blob:'#C7A46A'},
    'perfume-tall':{tone:'ivory',motif:'perfumeTall',blob:'#D8A7A0'},
    'perfume-wide':{tone:'sand',motif:'perfumeWide',blob:'#C79F8E'},
    'make':{tone:'rose',motif:'lips',blob:'#C7A46A'},
    'lips':{tone:'rose',motif:'lips',blob:'#D8A7A0'},
    'palette':{tone:'mocha',motif:'palette',blob:'#C7A46A',botanic:false},
    'brush':{tone:'sand',motif:'brush',blob:'#D8A7A0',botanic:false},
    'skincare':{tone:'ivory',motif:'skincare',blob:'#C7A46A'},
    'body':{tone:'nude',motif:'body',blob:'#D8A7A0'},
    'hair':{tone:'sand',motif:'hair',blob:'#C79F8E',botanic:false},
    'hygiene':{tone:'champagne',motif:'hygiene',blob:'#D8A7A0',botanic:false},
    'kit':{tone:'champagne',motif:'kit',blob:'#C7A46A',botanic:false},
    'moda':{tone:'mocha',motif:'dress',blob:'#C79F8E'},
    'moda2':{tone:'sand',motif:'hanger',blob:'#C7A46A'},
    'moda-wide':{tone:'nude',motif:'boutique',blob:'#D8A7A0',arc:false,botanic:false},
    'acessorios':{tone:'champagne',motif:'acessorios',blob:'#C7A46A'},
    'variedades':{tone:'ivory',motif:'variedades',blob:'#D8A7A0',botanic:false},
    'fabric':{tone:'mocha',motif:'fabric',blob:'#C79F8E',arc:false,botanic:false,floor:false},
    'boutique':{tone:'champagne',motif:'boutique',blob:'#D8A7A0',arc:false},
    'finale':{tone:'deep',motif:'perfume',blob:'#C7A46A',botanic2:true,r:170},
    'map':{tone:'sand',motif:'map',arc:false,botanic:false,floor:false}
  };

  return {
    lista: Object.keys(SCENES),
    svg(kind, alt){ return build(Object.assign({}, SCENES[kind] || SCENES['perfume'], { alt })); }
  };
})();

/* desenha as áreas de arte (foto cadastrada ou ilustração) */
function paintArt(root = document){
  $$('.art', root).forEach(el => {
    const src = el.dataset.src || (el.dataset.img ? get(D(), el.dataset.img) : '');
    const kind = el.dataset.art || 'perfume';
    const alt = el.dataset.alt || '';
    const key = (src || '') + '|' + kind;
    if (el.dataset.painted === key) return;
    el.dataset.painted = key;
    el.innerHTML = '';
    if (src){
      const img = new Image();
      img.src = src; img.alt = alt; img.loading = 'lazy'; img.decoding = 'async';
      img.onerror = () => { el.innerHTML = ART.svg(kind, alt) + '<div class="art__grain"></div>'; };
      el.appendChild(img);
    } else {
      el.innerHTML = ART.svg(kind, alt);
    }
    const g = document.createElement('div');
    g.className = 'art__grain';
    el.appendChild(g);
  });
}

/* ============================================================
   PERSISTÊNCIA — banco do artifact quando existir, senão navegador
   ============================================================ */
const Store = {
  modo:'local', db:null, assets:null, user:null, podeEditar:false, pronto:false,
  data:clone(DEFAULT_DATA), produtos:clone(DEFAULT_PRODUTOS), onChange:null,

  carregarLocal(){
    /* conteúdo publicado junto do site (dados/conteudo.js), quando existir */
    const base = (typeof window.LAMOUR_CONTEUDO === 'object' && window.LAMOUR_CONTEUDO) ? window.LAMOUR_CONTEUDO : null;
    if (base && base.config) this.data = mergeDeep(clone(DEFAULT_DATA), base.config);
    if (base && Array.isArray(base.produtos)) this.produtos = clone(base.produtos);
    try{
      const c = localStorage.getItem('lamour.config');
      if (c) this.data = mergeDeep(clone(DEFAULT_DATA), JSON.parse(c));
      const p = localStorage.getItem('lamour.produtos');
      if (p) this.produtos = JSON.parse(p);
    }catch(e){ console.warn('Dados locais ilegíveis', e); }
  },

  async init(){
    this.carregarLocal();
    if (typeof window.claude === 'undefined' || typeof window.claude.use !== 'function') return;
    try{
      const db = await window.claude.use('db');
      if (!db) return;
      this.db = db; this.modo = 'db';
      const user = await window.claude.use('user');
      this.user = user;
      this.podeEditar = user ? await user.canEdit() : false;
      this.assets = this.podeEditar ? await window.claude.use('assets') : null;

      const snap = await db.doc('config/site').get();
      if (snap.exists) this.data = mergeDeep(clone(DEFAULT_DATA), snap.data());
      else this.data = clone(DEFAULT_DATA);

      const ps = await db.collection('produtos').get();
      if (ps.size) this.produtos = ps.docs.map(d => Object.assign({ id:d.id }, d.data()));
      else if (!snap.exists) this.produtos = clone(DEFAULT_PRODUTOS);
      else this.produtos = [];

      db.doc('config/site').onSnapshot(s => {
        if (!s.exists) return;
        this.data = mergeDeep(clone(DEFAULT_DATA), s.data());
        this.onChange && this.onChange('config');
      }, () => {});
      db.collection('produtos').onSnapshot(s => {
        this.produtos = s.docs.map(d => Object.assign({ id:d.id }, d.data()));
        this.onChange && this.onChange('produtos');
      }, () => {});

      this.onChange && this.onChange('tudo');
    }catch(e){
      console.warn('Banco indisponível, usando armazenamento local.', e);
    }
  },

  async salvarConfig(data){
    this.data = data;
    if (this.modo === 'db' && this.db){
      await this.db.doc('config/site').set(clone(data));
    } else {
      localStorage.setItem('lamour.config', JSON.stringify(data));
    }
  },

  async salvarProduto(p){
    const i = this.produtos.findIndex(x => x.id === p.id);
    if (i >= 0) this.produtos[i] = p; else this.produtos.push(p);
    if (this.modo === 'db' && this.db){
      const body = clone(p); delete body.id;
      await this.db.collection('produtos').doc(p.id).set(body);
    } else {
      localStorage.setItem('lamour.produtos', JSON.stringify(this.produtos));
    }
  },

  async removerProduto(id){
    this.produtos = this.produtos.filter(p => p.id !== id);
    if (this.modo === 'db' && this.db) await this.db.collection('produtos').doc(id).delete();
    else localStorage.setItem('lamour.produtos', JSON.stringify(this.produtos));
  },

  async salvarProdutosEmLote(lista){
    for (const p of lista) await this.salvarProduto(p);
  },

  async subirImagem(file){
    const { blob, dataUrl } = await prepararImagem(file);
    if (this.assets){
      const r = await this.assets.upload(blob || file, { type:'image/jpeg' });
      return '/_blob/' + r.id;
    }
    if (dataUrl.length > 900000) throw new Error('Imagem muito pesada para o armazenamento local.');
    return dataUrl;
  }
};

/* ============================================================
   TEMA, TEXTOS E RENDERIZAÇÃO DO SITE
   ============================================================ */
const FONTES = {
  'Cormorant Garamond':'Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400',
  'Playfair Display':'Playfair+Display:ital,wght@0,400;0,500;0,600;1,400',
  'DM Serif Display':'DM+Serif+Display:ital@0;1',
  'Plus Jakarta Sans':'Plus+Jakarta+Sans:wght@300;400;500;600;700',
  'Inter':'Inter:wght@300;400;500;600;700',
  'Manrope':'Manrope:wght@300;400;500;600;700'
};

function aplicarTema(){
  const c = D().cores || {}, r = document.documentElement.style;
  const escuro = mq('(prefers-color-scheme: dark)').matches && c.escuroAuto !== false;
  r.setProperty('--gold', c.gold || '#C7A46A');
  r.setProperty('--rose', c.rose || '#D8A7A0');
  r.setProperty('--nude', c.nude || '#E8D5CA');
  r.setProperty('--gold-soft', hexAlpha(c.gold || '#C7A46A', escuro ? .14 : .16));
  r.setProperty('--line-gold', hexAlpha(c.gold || '#C7A46A', escuro ? .34 : .40));
  ['--bg','--bg-2','--ink','--ink-2'].forEach(v => r.removeProperty(v));
  if (!escuro){
    r.setProperty('--bg', c.bg || '#FAF8F5');
    r.setProperty('--bg-2', c.bg2 || '#F2EAE5');
    r.setProperty('--ink', c.ink || '#211D1D');
    r.setProperty('--ink-2', c.ink2 || '#756A67');
  }

  const f = D().fontes || {};
  const fams = [FONTES[f.titulo], FONTES[f.texto]].filter(Boolean);
  const url = 'https://fonts.googleapis.com/css2?' + fams.map(x => 'family=' + x).join('&') + '&display=swap';
  let link = $('#fonte-link');
  if (!link){ link = document.createElement('link'); link.id = 'fonte-link'; link.rel = 'stylesheet'; document.head.appendChild(link); }
  if (link.href !== url) link.href = url;
  r.setProperty('--serif', '"' + (f.titulo || 'Cormorant Garamond') + '", Georgia, serif');
  r.setProperty('--sans', '"' + (f.texto || 'Plus Jakarta Sans') + '", system-ui, -apple-system, Segoe UI, Roboto, sans-serif');

  const emoji = (D().marca.favicon || '🕊️').trim() || '🕊️';
  const ic = $('link[rel="icon"]');
  if (ic) ic.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='50' font-size='50'%3E" + encodeURIComponent(emoji) + "%3C/text%3E%3C/svg%3E";

  const logo = $('#brand-logo');
  if (D().marca.logo){
    logo.hidden = false;
    logo.innerHTML = '<img src="' + esc(D().marca.logo) + '" alt="">';
  } else { logo.hidden = true; logo.innerHTML = ''; }

  document.title = D().marca.nome + ' | Perfumes, Make, Cosméticos e Moda';
  const md = document.querySelector('meta[name="description"]');
  if (md && D().hero.lede) md.setAttribute('content', D().hero.lede);
}
function hexAlpha(hex, a){
  const h = String(hex).replace('#','');
  const n = parseInt(h.length === 3 ? h.split('').map(x => x + x).join('') : h, 16);
  if (isNaN(n)) return 'rgba(199,164,106,' + a + ')';
  return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')';
}

function aplicarTextos(){
  $$('[data-t]').forEach(el => {
    const v = get(D(), el.dataset.t);
    if (v != null) el.textContent = v;
  });
  $$('[data-maps]').forEach(el => {
    const u = D().local.maps;
    if (el.tagName === 'A'){ el.href = u || '#'; if (u){ el.target = '_blank'; el.rel = 'noopener noreferrer'; } }
  });
}

const SETA = '<svg class="arw" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICONES = {
  estrela:'<path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z" stroke-linejoin="round"/>',
  montanha:'<path d="M4 19l6.5-14 3 8 2.5-4 4 10z" stroke-linejoin="round"/>',
  coracao:'<path d="M12 20s-7-4.4-7-9a4 4 0 017-2.6A4 4 0 0119 11c0 4.6-7 9-7 9z" stroke-linejoin="round"/>',
  gota:'<path d="M12 3c3 3.4 4.5 6 4.5 8.4A4.5 4.5 0 0112 16a4.5 4.5 0 01-4.5-4.6C7.5 9 9 6.4 12 3zM12 16v5" stroke-linejoin="round" stroke-linecap="round"/>',
  presente:'<path d="M4 10h16v10H4zM4 7h16v3H4zM12 7v13M12 7c-2-4-7-3-6 0M12 7c2-4 7-3 6 0" stroke-linejoin="round"/>',
  raio:'<path d="M13 3L5 14h6l-1 7 8-11h-6z" stroke-linejoin="round"/>',
  folha:'<path d="M5 19c0-8 5-13 14-14 1 9-4 14-11 14H5zM8 17c2-4 5-6 8-7" stroke-linejoin="round" stroke-linecap="round"/>',
  caixa:'<path d="M4 8l8-4 8 4-8 4zM4 8v8l8 4 8-4V8" stroke-linejoin="round"/>'
};
const catPorId = id => (D().categorias || []).find(c => c.id === id);
const linkCat = id => '#/catalogo?cat=' + encodeURIComponent(id);

function renderHome(){
  const d = D();

  $('#hero-meta').innerHTML = (d.hero.tags || []).map(t => '<li>' + esc(t) + '</li>').join('');
  $('#manifesto').textContent = d.manifesto.texto || '';

  const grupo = '<div class="marquee__group">' +
    (d.marquee.itens || []).map(i => '<span>' + esc(i) + '</span><i>✦</i>').join('') + '</div>';
  $('#mq').innerHTML = grupo + grupo;

  const cats = (d.categorias || []).filter(c => c.visivel !== false);
  $('#cats-grid').innerHTML = cats.slice(0, 4).map((c, i) => `
    <a class="cat" href="${linkCat(c.id)}" data-rv style="--d:${i * 0.1}s">
      <div class="cat__art"><div class="art" data-art="${esc(c.arte || 'perfume')}" data-src="${esc(c.imagem || '')}" data-alt="${esc(c.nome)}"></div></div>
      <div class="cat__veil"></div>
      <div class="cat__body">
        <span class="cat__k">${String(i + 1).padStart(2, '0')} — ${esc(c.nome)}</span>
        <h3>${esc(c.nome)}</h3>
        <p>${esc(c.desc || '')}</p>
        <span class="cat__cta">${esc(c.cta || 'Explorar')} ${SETA}</span>
      </div>
    </a>`).join('');

  const b = cats.slice(0, 5);
  $('#bento').innerHTML = (b[0] ? `
    <a class="bx bx--lg" href="${linkCat(b[0].id)}" data-rv>
      <div class="bx__art"><div class="art" data-art="${esc(b[0].arte || 'perfume-tall')}" data-src="${esc(b[0].imagem || '')}" data-alt="${esc(b[0].nome)}"></div></div>
      <div class="bx__veil"></div><div class="bx__body"><h3>${esc(b[0].nome)}</h3><p>${esc(b[0].desc || '')}</p></div>
    </a>` : '') +
    b.slice(1, 3).map((c, i) => `
    <a class="bx" href="${linkCat(c.id)}" data-rv style="--d:${.06 + i * .06}s">
      <div class="bx__art"><div class="art" data-art="${esc(c.arte)}" data-src="${esc(c.imagem || '')}" data-alt="${esc(c.nome)}"></div></div>
      <div class="bx__veil"></div><div class="bx__body"><h3>${esc(c.nome)}</h3></div>
    </a>`).join('') +
    `<div class="bx bx--plain" data-rv style="--d:.18s"><div class="bx__body">
       <span class="tag">Novidades</span><h3>${esc(d.bento.titulo || '')}</h3>
       <p>${esc(d.destaques.subtitulo || '')}</p></div></div>` +
    b.slice(3, 4).map(c => `
    <a class="bx" href="${linkCat(c.id)}" data-rv style="--d:.24s">
      <div class="bx__art"><div class="art" data-art="${esc(c.arte)}" data-src="${esc(c.imagem || '')}" data-alt="${esc(c.nome)}"></div></div>
      <div class="bx__veil"></div><div class="bx__body"><h3>${esc(c.nome)}</h3></div>
    </a>`).join('') +
    (b[4] ? `
    <a class="bx bx--full" href="${linkCat(b[4].id)}" data-rv style="--d:.3s">
      <div class="bx__art"><div class="art" data-art="${esc(b[4].arte)}" data-src="${esc(b[4].imagem || '')}" data-alt="${esc(b[4].nome)}"></div></div>
      <div class="bx__veil"></div><div class="bx__body"><h3>${esc(b[4].nome)}</h3><p>${esc(b[4].desc || '')}</p></div>
    </a>` : '');

  const destaques = Store.produtos.filter(p => p.ativo !== false && p.destaque).slice(0, 6);
  const lista = destaques.length ? destaques : Store.produtos.filter(p => p.ativo !== false).slice(0, 6);
  $('#home-prods').innerHTML = lista.length ? lista.map((p, i) => cardProdutoHTML(p, i)).join('')
    : '<p class="empty" style="grid-column:1/-1">Nenhum produto cadastrado ainda. Use o painel do administrador para incluir os itens da loja.</p>';

  $('#make-chips').innerHTML = (d.make.chips || []).map(c => '<span class="chip">' + esc(c) + '</span>').join('');

  $('#care-grid').innerHTML = (d.cuidados.itens || []).map((c, i) => `
    <article class="care__c" data-rv style="--d:${i * .08}s">
      <div class="care__art"><div class="art" data-art="${esc(c.arte || 'skincare')}" data-src="${esc(c.imagem || '')}" data-alt="${esc(c.titulo)}"></div></div>
      <div class="care__b"><h3>${esc(c.titulo)}</h3><p>${esc(c.texto || '')}</p></div>
    </article>`).join('');

  $('#moda-grid').innerHTML = (d.moda.itens || []).map((m, i) => `
    <a class="look" href="${m.categoria ? linkCat(m.categoria) : '#/catalogo'}" data-rv style="--d:${(i % 3) * .08}s">
      <div class="look__art"><div class="art" data-art="${esc(m.arte || 'moda')}" data-src="${esc(m.imagem || '')}" data-alt="${esc(m.titulo)}"></div></div>
      <div class="look__veil"></div>
      <div class="look__lbl"><h3>${esc(m.titulo)}</h3>${SETA}</div>
    </a>`).join('');

  $('#why-grid').innerHTML = (d.porque.itens || []).map((w, i) => `
    <article class="why__i" data-rv style="--d:${i * .08}s">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">${ICONES[w.icone] || ICONES.estrela}</svg>
      <h3>${esc(w.titulo)}</h3><p>${esc(w.texto || '')}</p>
    </article>`).join('');

  $('#endereco').textContent = d.local.endereco
    || 'Abra a localização da loja no Google Maps para ver o endereço completo e traçar a rota.';

  const info = [];
  if (d.contato.telefone) info.push('Telefone: ' + d.contato.telefone);
  if (d.contato.email) info.push('E-mail: ' + d.contato.email);
  $('#contato-info').textContent = info.length ? info.join(' • ')
    : 'Dúvidas sobre produtos, disponibilidade ou reserva: fale direto com a loja pelo WhatsApp.';

  const hs = (d.local.horarios || []).filter(h => h.dia);
  $('#horarios').innerHTML = hs.length
    ? hs.map(h => `<p style="display:flex;justify-content:space-between;gap:1rem;max-width:280px"><span>${esc(h.dia)}</span><b style="font-weight:500;color:var(--ink)">${esc(h.horario || 'a definir')}</b></p>`).join('')
    : '<p>Horário de funcionamento a configurar no painel.</p>';

  $('#wa-hint').textContent = waNumber() ? 'Resposta pelo WhatsApp da loja.' : 'Número do WhatsApp ainda não configurado.';
  $('#ano').textContent = d.rodape.ano || new Date().getFullYear();
  $('#foot-tags').textContent = d.rodape.tags || '';

  const icons = {
    instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>',
    facebook:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6c-.3-.04-1.3-.13-2.45-.13-2.42 0-4.08 1.48-4.08 4.2v2.23H7.5V14h2.67v8z"/></svg>',
    tiktok:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14.3 3h2.5c.2 1.6 1.1 3 2.9 3.4v2.5c-1.1 0-2.2-.3-3.1-.9v5.7c0 2.9-2.2 5.3-5.1 5.3S6.4 16.6 6.4 13.7s2.2-5.3 5.1-5.3c.3 0 .5 0 .8.1v2.6c-.3-.1-.5-.1-.8-.1-1.4 0-2.6 1.2-2.6 2.7s1.2 2.7 2.6 2.7 2.8-1.1 2.8-2.7z"/></svg>'
  };
  const rotulos = { instagram:'Instagram', facebook:'Facebook', tiktok:'TikTok' };
  let faltam = 0;
  $('#soc').innerHTML = ['instagram','facebook','tiktok'].map(k => {
    const u = d.contato[k];
    if (u) return `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer" aria-label="${rotulos[k]}">${icons[k]}</a>`;
    faltam++;
    return `<span role="img" aria-label="${rotulos[k]} — a configurar" title="${rotulos[k]} a configurar">${icons[k]}</span>`;
  }).join('');
  $('#soc-note').textContent = faltam ? 'Links das redes podem ser configurados no painel.' : '';
}

function cardProdutoHTML(p, i){
  const d = D();
  const mostrar = d.catalogo.mostrarPreco !== false;
  const preco = precoTxt(p.preco);
  const cat = catPorId(p.categoria);
  return `
    <article class="prod" data-rv style="--d:${(i % 3) * .08}s">
      <div class="prod__art">
        <span class="prod__k">${esc(cat ? cat.nome : (p.categoria || 'Produto'))}</span>
        <div class="art" data-art="${esc(p.arte || 'perfume')}" data-src="${esc(p.imagem || '')}" data-alt="${esc(p.nome)}"></div>
        <button class="padd" data-add-cart="${esc(p.id)}" aria-label="Adicionar ${esc(p.nome)} ao pedido">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg>
        </button>
      </div>
      <div class="prod__body">
        <h3>${esc(p.nome)}</h3>
        <p class="prod__desc">${esc(p.descricao || '')}</p>
        ${mostrar && preco ? `<p class="prod__price">${esc(preco)}</p>` : ''}
        <button class="btn btn--ghost" data-wa="Olá! Vim pelo site da ${esc(D().marca.nome)} e tenho interesse em: ${esc(p.nome)}.">Tenho interesse ${SETA}</button>
      </div>
    </article>`;
}

/* ============================================================
   CATÁLOGO
   ============================================================ */
const Cat = { filtro:'todos', busca:'', ordem:'destaque' };

function renderCatalogo(){
  const d = D();
  const cats = (d.categorias || []).filter(c => c.visivel !== false);
  const cont = {};
  Store.produtos.filter(p => p.ativo !== false).forEach(p => { cont[p.categoria] = (cont[p.categoria] || 0) + 1; });

  $('#filtros').innerHTML = [`<button class="fchip${Cat.filtro === 'todos' ? ' is-on' : ''}" data-f="todos">Todos</button>`]
    .concat(cats.map(c => `<button class="fchip${Cat.filtro === c.id ? ' is-on' : ''}" data-f="${esc(c.id)}">${esc(c.nome)}${cont[c.id] ? ' · ' + cont[c.id] : ''}</button>`)).join('');

  let lista = Store.produtos.filter(p => p.ativo !== false);
  if (Cat.filtro !== 'todos') lista = lista.filter(p => p.categoria === Cat.filtro);
  const q = Cat.busca.trim().toLowerCase();
  if (q) lista = lista.filter(p => (p.nome + ' ' + (p.descricao || '') + ' ' + (p.tags || []).join(' ')).toLowerCase().includes(q));

  const ord = {
    destaque:(a, b) => (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0) || (a.ordem || 0) - (b.ordem || 0),
    recentes:(a, b) => (b.criadoEm || 0) - (a.criadoEm || 0),
    nome:(a, b) => String(a.nome).localeCompare(String(b.nome), 'pt-BR'),
    menor:(a, b) => (precoNum(a.preco) ?? 1e12) - (precoNum(b.preco) ?? 1e12),
    maior:(a, b) => (precoNum(b.preco) ?? -1) - (precoNum(a.preco) ?? -1)
  };
  lista = lista.slice().sort(ord[Cat.ordem] || ord.destaque);

  $('#ccount').textContent = lista.length
    ? lista.length + (lista.length > 1 ? ' produtos' : ' produto')
    : '';

  const mostrar = d.catalogo.mostrarPreco !== false;
  $('#cgrid').innerHTML = lista.length ? lista.map(p => {
    const c = catPorId(p.categoria);
    const preco = precoTxt(p.preco), de = precoTxt(p.precoDe);
    return `
      <article class="pcard" data-p="${esc(p.id)}">
        <div class="pcard__art">
          <span class="tagline">${p.destaque ? '<span class="tg tg--gold">Destaque</span>' : ''}${(p.tags || []).slice(0, 1).map(t => '<span class="tg">' + esc(t) + '</span>').join('')}</span>
          <div class="art" data-art="${esc(p.arte || 'perfume')}" data-src="${esc(p.imagem || '')}" data-alt="${esc(p.nome)}"></div>
          <button class="padd" data-add-cart="${esc(p.id)}" aria-label="Adicionar ${esc(p.nome)} ao pedido">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg>
          </button>
        </div>
        <div class="pcard__b">
          <span class="pcard__k">${esc(c ? c.nome : p.categoria || '')}</span>
          <h3><button class="plink" data-p="${esc(p.id)}">${esc(p.nome)}</button></h3>
          <p>${esc(p.descricao || '')}</p>
          ${mostrar ? `<span class="pcard__p"><b>${esc(preco || d.catalogo.textoSemPreco || 'Sob consulta')}</b>${de ? '<s>' + esc(de) + '</s>' : ''}</span>` : ''}
        </div>
      </article>`;
  }).join('') : `<div class="empty"><h3>Nada por aqui ainda</h3><p>Tente outra categoria ou fale com a loja pelo WhatsApp.</p></div>`;

  paintArt($('#cgrid'));
}

function abrirProduto(id){
  const p = Store.produtos.find(x => x.id === id);
  if (!p) return;
  const d = D(), c = catPorId(p.categoria);
  const preco = precoTxt(p.preco), de = precoTxt(p.precoDe);
  const mostrar = d.catalogo.mostrarPreco !== false;
  $('#pmodal-c').innerHTML = `
    <div class="pmodal__art">
      <button class="pmodal__x" data-fechar aria-label="Fechar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>
      </button>
      <div class="art" data-art="${esc(p.arte || 'perfume')}" data-src="${esc(p.imagem || '')}" data-alt="${esc(p.nome)}"></div>
    </div>
    <div class="pmodal__b">
      <span class="pcard__k">${esc(c ? c.nome : p.categoria || '')}</span>
      <h2>${esc(p.nome)}</h2>
      ${mostrar ? `<span class="pcard__p"><b>${esc(preco || d.catalogo.textoSemPreco || 'Sob consulta')}</b>${de ? '<s>' + esc(de) + '</s>' : ''}</span>` : ''}
      <p class="desc">${esc(p.descricao || '')}</p>
      ${(p.tags || []).length ? `<div class="make__cap" style="margin:0">${p.tags.map(t => '<span class="chip">' + esc(t) + '</span>').join('')}</div>` : ''}
      <div class="specs">
        <div><span>Categoria</span><b>${esc(c ? c.nome : '—')}</b></div>
        <div><span>Disponibilidade</span><b>Confirme pelo WhatsApp</b></div>
      </div>
      <div style="display:flex;gap:.8rem;align-items:center;flex-wrap:wrap;margin-top:.4rem">
        <div class="qty">
          <button data-q="-1" aria-label="Diminuir"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14" stroke-linecap="round"/></svg></button>
          <span id="mqtd">1</span>
          <button data-q="1" aria-label="Aumentar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg></button>
        </div>
        <button class="btn btn--wa" style="flex:1;min-width:200px" data-add-cart="${esc(p.id)}" data-usa-qtd="1">Adicionar ao pedido ${SETA}</button>
      </div>
      <button class="btn btn--ghost" data-wa="Olá! Vim pelo site da ${esc(d.marca.nome)} e tenho interesse em: ${esc(p.nome)}${preco && mostrar ? ' (' + esc(preco) + ')' : ''}.">Tenho interesse ${SETA}</button>
      <a class="ulink" data-maps href="#" style="justify-content:center">Ver a loja no mapa ${SETA}</a>
    </div>`;
  const m = $('#pmodal');
  m.hidden = false;
  paintArt(m);
  aplicarTextos();
  requestAnimationFrame(() => m.classList.add('is-on'));
  document.body.style.overflow = 'hidden';
}
function fecharProduto(){
  const m = $('#pmodal');
  m.classList.remove('is-on');
  document.body.style.overflow = '';
  setTimeout(() => { if (!m.classList.contains('is-on')) m.hidden = true; }, 380);
}

/* ============================================================
   INSTITUCIONAL
   ============================================================ */
function renderInstitucional(){
  const it = D().institucional || {};
  const vg = $('#vals-grid'), gg = $('#gal-grid');
  if (vg) vg.innerHTML = (it.valores || []).map((v, i) => `
    <article class="val" data-rv style="--d:${i * .08}s">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">${ICONES[v.icone] || ICONES.estrela}</svg>
      <h3>${esc(v.titulo)}</h3><p>${esc(v.texto || '')}</p>
    </article>`).join('');
  if (gg) gg.innerHTML = (it.galeria || []).map((g, i) => `
    <figure class="gal__i" data-rv style="--d:${(i % 4) * .06}s">
      <div class="art" data-art="${esc(g.arte || 'boutique')}" data-src="${esc(g.imagem || '')}" data-alt="${esc(g.legenda || '')}"></div>
      ${g.legenda ? `<figcaption>${esc(g.legenda)}</figcaption>` : ''}
    </figure>`).join('');
}

/* ============================================================
   PEDIDO / CARRINHO
   ============================================================ */
const Carrinho = {
  itens:[], cliente:{ nome:'', entrega:'', obs:'' },

  carregar(){
    try{
      const j = JSON.parse(localStorage.getItem('lamour.carrinho') || '{}');
      if (Array.isArray(j.itens)) this.itens = j.itens;
      if (j.cliente) this.cliente = Object.assign(this.cliente, j.cliente);
    }catch(e){ /* carrinho vazio */ }
  },
  salvar(){
    try{ localStorage.setItem('lamour.carrinho', JSON.stringify({ itens:this.itens, cliente:this.cliente })); }catch(e){}
  },
  add(id, q){
    const it = this.itens.find(x => x.id === id);
    if (it) it.qtd += (q || 1); else this.itens.push({ id, qtd:q || 1 });
    this.salvar(); this.badge();
  },
  mudar(id, d){
    const it = this.itens.find(x => x.id === id);
    if (!it) return;
    it.qtd += d;
    if (it.qtd < 1) this.itens = this.itens.filter(x => x.id !== id);
    this.salvar(); this.badge();
  },
  remover(id){ this.itens = this.itens.filter(x => x.id !== id); this.salvar(); this.badge(); },
  limpar(){ this.itens = []; this.salvar(); this.badge(); },
  count(){ return this.itens.reduce((s, i) => s + i.qtd, 0); },
  linhas(){
    return this.itens.map(i => ({ qtd:i.qtd, p:Store.produtos.find(p => p.id === i.id) }))
                     .filter(x => x.p && x.p.ativo !== false);
  },
  total(){
    let t = 0, aCombinar = 0;
    this.linhas().forEach(l => {
      const n = precoNum(l.p.preco);
      if (n == null) aCombinar++; else t += n * l.qtd;
    });
    return { valor:t, aCombinar };
  },
  badge(){
    const b = $('#cart-badge');
    if (!b) return;
    const n = this.count();
    b.hidden = !n;
    b.textContent = n > 99 ? '99+' : String(n);
  }
};

function renderCarrinho(){
  const box = $('#cart-box');
  if (!box) return;
  const d = D().pedido || {}, cfg = D().catalogo || {};
  const linhas = Carrinho.linhas();
  const mostrarPreco = cfg.mostrarPreco !== false;

  if (!linhas.length){
    box.innerHTML = `<div class="empty">
      <h3>${esc(d.vazioTitulo || 'Seu pedido está vazio')}</h3>
      <p>${esc(d.vazioTexto || '')}</p>
      <p style="margin-top:1.6rem"><a class="btn" href="#/catalogo">Ver o catálogo ${SETA}</a></p>
    </div>`;
    return;
  }

  const t = Carrinho.total();
  box.innerHTML = `<div class="cart">
    <div>
      <div class="citens">${linhas.map(l => {
        const cat = catPorId(l.p.categoria);
        const n = precoNum(l.p.preco);
        return `<div class="citem">
          <div class="citem__i">${l.p.imagem ? `<img src="${esc(l.p.imagem)}" alt="">` : `<div class="art" data-art="${esc(l.p.arte || 'perfume')}" data-alt="${esc(l.p.nome)}"></div>`}</div>
          <div class="citem__t">
            <span>${esc(cat ? cat.nome : l.p.categoria || '')}</span>
            <b>${esc(l.p.nome)}</b>
            <em>${mostrarPreco ? (n != null ? precoTxt(n) + ' a unidade' : esc(cfg.textoSemPreco || 'Sob consulta')) : ''}</em>
          </div>
          <div class="citem__a">
            <div class="qty">
              <button data-cq="${esc(l.p.id)}|-1" aria-label="Diminuir"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14" stroke-linecap="round"/></svg></button>
              <span>${l.qtd}</span>
              <button data-cq="${esc(l.p.id)}|1" aria-label="Aumentar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg></button>
            </div>
            ${mostrarPreco && n != null ? `<span class="citem__p">${precoTxt(n * l.qtd)}</span>` : ''}
            <button class="btn-s btn-s--danger" data-crm="${esc(l.p.id)}">Remover</button>
          </div>
        </div>`;
      }).join('')}</div>
      <div class="btnrow" style="margin-top:1.2rem">
        <a class="btn-s" href="#/catalogo">Continuar escolhendo</a>
        <button class="btn-s btn-s--danger" data-cart-clear>Limpar pedido</button>
      </div>
    </div>

    <aside class="cresumo">
      <h3>Resumo</h3>
      <div class="linha"><span>Itens</span><span>${Carrinho.count()}</span></div>
      ${t.aCombinar ? `<div class="linha"><span>Sem preço no site</span><span>${t.aCombinar}</span></div>` : ''}
      ${mostrarPreco && d.mostrarTotal !== false && t.valor > 0 ? `<div class="total"><span>Total estimado</span><b>${precoTxt(t.valor)}</b></div>` : ''}
      <div class="cform">
        ${d.pedirNome !== false ? `<div class="fld"><label>Seu nome</label><input class="inp" data-c="nome" value="${esc(Carrinho.cliente.nome)}" placeholder="Como devemos te chamar"></div>` : ''}
        ${d.pedirEntrega !== false ? `<div class="fld"><label>Entrega ou retirada</label><select class="inp" data-c="entrega">
            <option value="">Escolher…</option>
            ${(d.opcoesEntrega || ['Retirar na loja','Entrega']).map(o => `<option value="${esc(o)}"${Carrinho.cliente.entrega === o ? ' selected' : ''}>${esc(o)}</option>`).join('')}
          </select></div>` : ''}
        ${d.pedirObs !== false ? `<div class="fld"><label>Observações</label><textarea class="inp" data-c="obs" rows="3" placeholder="Cor, tamanho, referência de entrega…">${esc(Carrinho.cliente.obs)}</textarea></div>` : ''}
      </div>
      <button class="btn btn--wa" data-cart-send>${esc(d.btnEnviar || 'Enviar pedido pelo WhatsApp')} ${SETA}</button>
      ${d.aviso ? `<p class="aviso">${esc(d.aviso)}</p>` : ''}
    </aside>
  </div>`;
  paintArt(box);
}

function msgPedido(){
  const d = D().pedido || {}, cfg = D().catalogo || {};
  const linhas = Carrinho.linhas();
  const partes = [ d.msgIntro || 'Olá! Gostaria de fazer um pedido pelo site:', '' ];
  linhas.forEach(l => {
    const n = precoNum(l.p.preco);
    partes.push('• ' + l.qtd + 'x ' + l.p.nome + (cfg.mostrarPreco !== false && n != null ? ' — ' + precoTxt(n * l.qtd) : ''));
  });
  const t = Carrinho.total();
  if (cfg.mostrarPreco !== false && d.mostrarTotal !== false && t.valor > 0){
    partes.push('', 'Total estimado: ' + precoTxt(t.valor));
  }
  if (t.aCombinar) partes.push('(' + t.aCombinar + ' item(ns) sem preço no site — confirmar na conversa)');
  const c = Carrinho.cliente;
  if (c.nome) partes.push('', 'Nome: ' + c.nome);
  if (c.entrega) partes.push('Entrega: ' + c.entrega);
  if (c.obs) partes.push('Observações: ' + c.obs);
  return partes.join('\n');
}

/* ============================================================
   PAINEL DO ADMINISTRADOR
   ============================================================ */
const ARTES = ART.lista;
const OPC_ICONES = Object.keys(ICONES);

const SCHEMA = [
  { id:'identidade', nome:'Identidade', icone:'<path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z" stroke-linejoin="round"/>', blocos:[
    { titulo:'Marca', hint:'Nome e assinatura que aparecem no topo, no rodapé e na aba do navegador.', campos:[
      { k:'marca.nome', l:'Nome da marca', t:'text' },
      { k:'marca.sub', l:'Assinatura', t:'text' },
      { k:'marca.favicon', l:'Ícone do site (emoji)', t:'text', tip:'Um emoji só. Ex.: 🕊️ 💄 🌸' },
      { k:'marca.logo', l:'Logotipo', t:'img', tip:'Opcional. Aparece ao lado do nome.' }
    ]},
    { titulo:'Cores', hint:'O dourado e o rosé valem também no tema escuro; os tons claros valem no tema claro.', campos:[
      { k:'cores.bg', l:'Fundo principal', t:'color' },
      { k:'cores.bg2', l:'Fundo secundário', t:'color' },
      { k:'cores.ink', l:'Texto principal', t:'color' },
      { k:'cores.ink2', l:'Texto secundário', t:'color' },
      { k:'cores.gold', l:'Dourado', t:'color' },
      { k:'cores.rose', l:'Rosé', t:'color' },
      { k:'cores.nude', l:'Nude', t:'color' },
      { k:'cores.escuroAuto', l:'Tema escuro automático', t:'sw', tip:'Segue a preferência do celular de quem visita.' }
    ]},
    { titulo:'Tipografia', campos:[
      { k:'fontes.titulo', l:'Fonte dos títulos', t:'select', opts:['Cormorant Garamond','Playfair Display','DM Serif Display'] },
      { k:'fontes.texto', l:'Fonte dos textos', t:'select', opts:['Plus Jakarta Sans','Inter','Manrope'] }
    ]}
  ]},

  { id:'inicio', nome:'Início', icone:'<path d="M4 11l8-7 8 7v9H4z" stroke-linejoin="round"/>', blocos:[
    { titulo:'Primeira tela', campos:[
      { k:'hero.eyebrow', l:'Linha fina', t:'text' },
      { k:'hero.l1', l:'Título — linha 1', t:'text' },
      { k:'hero.l2', l:'Título — linha 2', t:'text' },
      { k:'hero.l3', l:'Título — linha 3', t:'text' },
      { k:'hero.destaque', l:'Palavra em destaque', t:'text' },
      { k:'hero.lede', l:'Subtítulo', t:'textarea', span:true },
      { k:'hero.cta1', l:'Botão 1', t:'text' },
      { k:'hero.cta2', l:'Botão 2 (WhatsApp)', t:'text' },
      { k:'hero.badgeT', l:'Selo — título', t:'text' },
      { k:'hero.badgeS', l:'Selo — texto', t:'text' },
      { k:'hero.imagem', l:'Foto principal', t:'img', span:true },
      { k:'hero.tags', l:'Palavras do rodapé da capa', t:'lista', tip:'Separe por vírgula.' }
    ]},
    { titulo:'Frase de impacto', campos:[
      { k:'manifesto.texto', l:'Frase', t:'textarea', span:true },
      { k:'marquee.itens', l:'Faixa deslizante', t:'lista', span:true, tip:'Separe por vírgula.' }
    ]}
  ]},

  { id:'secoes', nome:'Seções', icone:'<path d="M4 6h16M4 12h16M4 18h10" stroke-linecap="round"/>', blocos:[
    { titulo:'Categorias', campos:[
      { k:'cats.eyebrow', l:'Linha fina', t:'text' }, { k:'cats.titulo', l:'Título', t:'text' },
      { k:'cats.subtitulo', l:'Subtítulo', t:'textarea', span:true }
    ]},
    { titulo:'Um universo de possibilidades', campos:[
      { k:'bento.eyebrow', l:'Linha fina', t:'text' }, { k:'bento.titulo', l:'Título', t:'text' }
    ]},
    { titulo:'Destaques', campos:[
      { k:'destaques.eyebrow', l:'Linha fina', t:'text' }, { k:'destaques.titulo', l:'Título', t:'text' },
      { k:'destaques.subtitulo', l:'Subtítulo', t:'textarea', span:true }, { k:'destaques.cta', l:'Botão', t:'text' }
    ]},
    { titulo:'Maquiagem', campos:[
      { k:'make.eyebrow', l:'Linha fina', t:'text' }, { k:'make.titulo', l:'Título', t:'text' },
      { k:'make.subtitulo', l:'Subtítulo', t:'textarea', span:true },
      { k:'make.frase1', l:'Frase — parte 1', t:'text' }, { k:'make.frase2', l:'Frase — parte 2', t:'text' },
      { k:'make.chips', l:'Etiquetas', t:'lista', span:true },
      { k:'make.img1', l:'Foto 1', t:'img' }, { k:'make.img2', l:'Foto 2', t:'img' }, { k:'make.img3', l:'Foto 3', t:'img' }
    ]},
    { titulo:'Cosméticos', campos:[
      { k:'cuidados.eyebrow', l:'Linha fina', t:'text' }, { k:'cuidados.titulo', l:'Título', t:'text' },
      { k:'cuidados.subtitulo', l:'Subtítulo', t:'textarea', span:true }
    ]},
    { titulo:'Cartões de cuidados', rep:{ k:'cuidados.itens', rotulo:'Cartão',
      novo:{ titulo:'Novo cartão', texto:'', arte:'skincare', imagem:'' },
      campos:[ { k:'titulo', l:'Título', t:'text' }, { k:'texto', l:'Texto', t:'textarea', span:true },
               { k:'arte', l:'Ilustração', t:'select', opts:ARTES }, { k:'imagem', l:'Foto', t:'img' } ] } },
    { titulo:'Moda', campos:[
      { k:'moda.eyebrow', l:'Linha fina', t:'text' }, { k:'moda.titulo', l:'Título', t:'text' },
      { k:'moda.subtitulo', l:'Subtítulo', t:'textarea', span:true }
    ]},
    { titulo:'Cartões de moda', rep:{ k:'moda.itens', rotulo:'Cartão',
      novo:{ titulo:'Nova peça', arte:'moda', imagem:'', categoria:'' },
      campos:[ { k:'titulo', l:'Título', t:'text' }, { k:'categoria', l:'Leva para a categoria', t:'catsel' },
               { k:'arte', l:'Ilustração', t:'select', opts:ARTES }, { k:'imagem', l:'Foto', t:'img' } ] } },
    { titulo:'Por que a loja', campos:[
      { k:'porque.eyebrow', l:'Linha fina', t:'text' }, { k:'porque.titulo', l:'Título', t:'text' }
    ]},
    { titulo:'Benefícios', rep:{ k:'porque.itens', rotulo:'Benefício',
      novo:{ titulo:'Novo benefício', texto:'', icone:'estrela' },
      campos:[ { k:'titulo', l:'Título', t:'text' }, { k:'icone', l:'Ícone', t:'select', opts:OPC_ICONES },
               { k:'texto', l:'Texto', t:'textarea', span:true } ] } },
    { titulo:'Sobre a loja', campos:[
      { k:'sobre.eyebrow', l:'Linha fina', t:'text' },
      { k:'sobre.titulo1', l:'Título — linha 1', t:'text' }, { k:'sobre.titulo2', l:'Título — linha 2', t:'text' },
      { k:'sobre.texto', l:'Texto', t:'textarea', span:true }, { k:'sobre.fecho', l:'Frase final', t:'text' },
      { k:'sobre.imagem', l:'Foto', t:'img' }
    ]},
    { titulo:'Chamada de WhatsApp', campos:[
      { k:'talk.eyebrow', l:'Linha fina', t:'text' }, { k:'talk.titulo', l:'Título', t:'text' },
      { k:'talk.texto', l:'Texto', t:'textarea', span:true }, { k:'talk.cta', l:'Botão', t:'text' }
    ]},
    { titulo:'Chamada final', campos:[
      { k:'cta.eyebrow', l:'Linha fina', t:'text' }, { k:'cta.titulo', l:'Título', t:'text' },
      { k:'cta.texto', l:'Texto', t:'textarea', span:true },
      { k:'cta.btn1', l:'Botão 1', t:'text' }, { k:'cta.btn2', l:'Botão 2', t:'text' },
      { k:'cta.imagem', l:'Foto de fundo', t:'img' }
    ]},
    { titulo:'Rodapé', campos:[
      { k:'rodape.texto', l:'Texto', t:'textarea', span:true },
      { k:'rodape.tags', l:'Linha de categorias', t:'text' }, { k:'rodape.ano', l:'Ano', t:'text' }
    ]}
  ]},

  { id:'categorias', nome:'Categorias', icone:'<path d="M4 5h7v7H4zM13 5h7v7h-7zM4 14h7v5H4zM13 14h7v5h-7z" stroke-linejoin="round"/>', blocos:[
    { titulo:'Categorias da loja', hint:'As quatro primeiras visíveis aparecem na página inicial. Todas aparecem como filtro no catálogo.',
      rep:{ k:'categorias', rotulo:'Categoria',
        novo:{ id:'', nome:'Nova categoria', desc:'', cta:'Explorar', arte:'perfume', imagem:'', visivel:true },
        campos:[ { k:'nome', l:'Nome', t:'text' }, { k:'id', l:'Identificador', t:'text', tip:'Sem espaços nem acentos. Ex.: perfumes' },
                 { k:'desc', l:'Descrição', t:'textarea', span:true }, { k:'cta', l:'Texto do botão', t:'text' },
                 { k:'arte', l:'Ilustração', t:'select', opts:ARTES }, { k:'imagem', l:'Foto', t:'img' },
                 { k:'visivel', l:'Visível no site', t:'sw' } ] } }
  ]},

  { id:'institucional', nome:'Institucional', icone:'<path d="M4 20V9l8-5 8 5v11" stroke-linejoin="round"/><path d="M9 20v-6h6v6" stroke-linejoin="round"/>', blocos:[
    { titulo:'Capa da página', hint:'Aparece no topo de #/sobre.', campos:[
      { k:'institucional.eyebrow', l:'Linha fina', t:'text' }, { k:'institucional.titulo', l:'Título', t:'text' },
      { k:'institucional.subtitulo', l:'Subtítulo', t:'textarea', span:true },
      { k:'institucional.capa', l:'Foto de capa', t:'img' }
    ]},
    { titulo:'História', hint:'Use uma linha em branco para separar parágrafos.', campos:[
      { k:'institucional.historiaEyebrow', l:'Linha fina', t:'text' },
      { k:'institucional.historiaTitulo', l:'Título', t:'text' },
      { k:'institucional.historiaTexto', l:'Texto', t:'textarea', span:true },
      { k:'institucional.historiaBtn', l:'Botão', t:'text' },
      { k:'institucional.historiaImg', l:'Foto', t:'img' }
    ]},
    { titulo:'Valores', campos:[
      { k:'institucional.valoresEyebrow', l:'Linha fina', t:'text' },
      { k:'institucional.valoresTitulo', l:'Título', t:'text' }
    ]},
    { titulo:'Lista de valores', rep:{ k:'institucional.valores', rotulo:'Valor',
      novo:{ titulo:'Novo valor', texto:'', icone:'estrela' },
      campos:[ { k:'titulo', l:'Título', t:'text' }, { k:'icone', l:'Ícone', t:'select', opts:OPC_ICONES },
               { k:'texto', l:'Texto', t:'textarea', span:true } ] } },
    { titulo:'Galeria', campos:[
      { k:'institucional.galeriaEyebrow', l:'Linha fina', t:'text' },
      { k:'institucional.galeriaTitulo', l:'Título', t:'text' }
    ]},
    { titulo:'Fotos da galeria', hint:'A primeira de cada quatro aparece maior.',
      rep:{ k:'institucional.galeria', rotulo:'Foto',
        novo:{ arte:'boutique', imagem:'', legenda:'' },
        campos:[ { k:'legenda', l:'Legenda', t:'text' }, { k:'arte', l:'Ilustração', t:'select', opts:ARTES },
                 { k:'imagem', l:'Foto', t:'img' } ] } },
    { titulo:'Convite final', campos:[
      { k:'institucional.fechoEyebrow', l:'Linha fina', t:'text' },
      { k:'institucional.fechoTitulo', l:'Título', t:'text' },
      { k:'institucional.fechoTexto', l:'Texto', t:'textarea', span:true }
    ]}
  ]},

  { id:'contato', nome:'Contato', icone:'<path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.4"/>', blocos:[
    { titulo:'WhatsApp', hint:'Só números, com DDI e DDD. Ex.: 5593999999999', campos:[
      { k:'contato.whatsapp', l:'Número', t:'text' },
      { k:'contato.mensagem', l:'Mensagem automática', t:'textarea', span:true }
    ]},
    { titulo:'Outros contatos', campos:[
      { k:'contato.telefone', l:'Telefone', t:'text' }, { k:'contato.email', l:'E-mail', t:'text' },
      { k:'contato.instagram', l:'Instagram (link)', t:'text' }, { k:'contato.facebook', l:'Facebook (link)', t:'text' },
      { k:'contato.tiktok', l:'TikTok (link)', t:'text' }
    ]},
    { titulo:'Endereço', campos:[
      { k:'local.eyebrow', l:'Linha fina', t:'text' }, { k:'local.titulo', l:'Título', t:'text' },
      { k:'local.endereco', l:'Endereço escrito', t:'textarea', span:true },
      { k:'local.maps', l:'Link do Google Maps', t:'text', span:true }
    ]},
    { titulo:'Horário de funcionamento', rep:{ k:'local.horarios', rotulo:'Faixa',
      novo:{ dia:'Novo dia', horario:'' },
      campos:[ { k:'dia', l:'Dia', t:'text' }, { k:'horario', l:'Horário', t:'text', tip:'Ex.: 9h às 18h — ou "Fechado"' } ] } }
  ]},

  { id:'catalogo', nome:'Catálogo', icone:'<path d="M4 5h16v14H4zM4 9h16M9 9v10" stroke-linejoin="round"/>', blocos:[
    { titulo:'Textos da página', campos:[
      { k:'catalogo.eyebrow', l:'Linha fina', t:'text' }, { k:'catalogo.titulo', l:'Título', t:'text' },
      { k:'catalogo.subtitulo', l:'Subtítulo', t:'textarea', span:true }
    ]},
    { titulo:'Preços', campos:[
      { k:'catalogo.mostrarPreco', l:'Mostrar preços no site', t:'sw' },
      { k:'catalogo.textoSemPreco', l:'Texto quando não há preço', t:'text' }
    ]},
    { titulo:'Acesso ao painel', hint:'Usado quando o site está hospedado fora do Claude.', campos:[
      { k:'admin.senha', l:'Senha do administrador', t:'text' }
    ]}
  ]},

  { id:'pedido', nome:'Pedidos', icone:'<path d="M5 8h14l-1.2 12H6.2z" stroke-linejoin="round"/><path d="M9 8V6.2a3 3 0 016 0V8" stroke-linecap="round"/>', blocos:[
    { titulo:'Textos da página', campos:[
      { k:'pedido.eyebrow', l:'Linha fina', t:'text' }, { k:'pedido.titulo', l:'Título', t:'text' },
      { k:'pedido.subtitulo', l:'Subtítulo', t:'textarea', span:true },
      { k:'pedido.btnEnviar', l:'Texto do botão de envio', t:'text' },
      { k:'pedido.vazioTitulo', l:'Título quando está vazio', t:'text' },
      { k:'pedido.vazioTexto', l:'Texto quando está vazio', t:'text' }
    ]},
    { titulo:'Mensagem enviada no WhatsApp', hint:'A lista de produtos e o total entram automaticamente depois desta frase.', campos:[
      { k:'pedido.msgIntro', l:'Primeira linha da mensagem', t:'textarea', span:true },
      { k:'pedido.aviso', l:'Aviso no resumo', t:'textarea', span:true }
    ]},
    { titulo:'O que pedir ao cliente', campos:[
      { k:'pedido.mostrarTotal', l:'Mostrar total estimado', t:'sw' },
      { k:'pedido.pedirNome', l:'Pedir o nome', t:'sw' },
      { k:'pedido.pedirEntrega', l:'Perguntar entrega ou retirada', t:'sw' },
      { k:'pedido.pedirObs', l:'Campo de observações', t:'sw' },
      { k:'pedido.opcoesEntrega', l:'Opções de entrega', t:'lista', span:true, tip:'Separe por vírgula.' }
    ]}
  ]}
];

const Admin = {
  draft:null, aba:'identidade', dirty:false, liberado:false, alvoImg:null, editando:null,

  entrar(){
    const modoDb = Store.modo === 'db';
    if (modoDb && Store.podeEditar) { this.liberado = true; }
    else if (modoDb && !Store.podeEditar){
      $('#adm-lock').hidden = false; $('#adm-app').hidden = true;
      $('#lock-msg').textContent = 'Este site está publicado no Claude e só quem tem permissão de edição pode alterar o conteúdo.';
      $('#lock-pin').hidden = true; $('#lock-go').hidden = true;
      return;
    } else if (sessionStorage.getItem('lamour.admin') === '1') this.liberado = true;

    if (!this.liberado){
      $('#adm-lock').hidden = false; $('#adm-app').hidden = true;
      $('#lock-pin').hidden = false; $('#lock-go').hidden = false;
      setTimeout(() => $('#lock-pin').focus(), 200);
      return;
    }
    $('#adm-lock').hidden = true; $('#adm-app').hidden = false;
    if (!this.draft) this.draft = clone(Store.data);
    this.render();
  },

  banner(){
    const db = Store.modo === 'db';
    $('#adm-banner').innerHTML = `<div class="banner">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.6v.6" stroke-linecap="round"/></svg>
      <span>${db
        ? '<b>Modo compartilhado.</b> As alterações ficam salvas no banco deste site e todo mundo que abrir o link vê a mesma coisa.'
        : '<b>Modo local.</b> As alterações ficam salvas apenas neste navegador. Use <b>Dados → Exportar</b> para gerar o arquivo com o conteúdo e enviá-lo junto ao site publicado.'}</span>
    </div>`;
  },

  render(){
    this.banner();
    const abas = SCHEMA.map(s => ({ id:s.id, nome:s.nome, icone:s.icone }))
      .concat([{ id:'produtos', nome:'Produtos', icone:'<path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 016 0v2" stroke-linejoin="round"/>' },
               { id:'dados', nome:'Dados', icone:'<path d="M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7" stroke-linejoin="round"/>' }]);

    $('#adm-tabs').innerHTML = abas.map(a => `<button class="atab${this.aba === a.id ? ' is-on' : ''}" data-aba="${a.id}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">${a.icone}</svg>${a.nome}</button>`).join('');

    let html = SCHEMA.map(s => `<section class="apanel${this.aba === s.id ? ' is-on' : ''}" data-painel="${s.id}">
        <h2>${s.nome}</h2><p class="sub">Tudo o que você mudar aqui aparece no site depois de salvar.</p>
        ${s.blocos.map(b => this.bloco(b)).join('')}
      </section>`).join('');
    html += `<section class="apanel${this.aba === 'produtos' ? ' is-on' : ''}" data-painel="produtos"><div id="adm-produtos"></div></section>`;
    html += `<section class="apanel${this.aba === 'dados' ? ' is-on' : ''}" data-painel="dados">${this.painelDados()}</section>`;
    $('#adm-panels').innerHTML = html;

    if (this.aba === 'produtos') this.renderProdutos();
    paintArt($('#adm-panels'));
    this.status();
  },

  bloco(b){
    const corpo = b.rep ? this.repeater(b.rep)
      : `<div class="grid2">${b.campos.map(f => this.campo(f)).join('')}</div>`;
    return `<div class="card"><h3>${b.titulo}</h3>${b.hint ? `<p class="hint">${b.hint}</p>` : ''}${corpo}</div>`;
  },

  repeater(r){
    const itens = get(this.draft, r.k) || [];
    return `<div class="rep" data-rep="${r.k}">
      ${itens.map((it, i) => `<div class="repitem">
        <div class="rephead"><b>${r.rotulo} ${i + 1}</b>
          <span class="repctl">
            <button class="ic" data-mv="${r.k}|${i}|-1" title="Subir" aria-label="Subir"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 19V6M6 12l6-6 6 6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            <button class="ic" data-mv="${r.k}|${i}|1" title="Descer" aria-label="Descer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 5v13M6 12l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            <button class="ic" data-del="${r.k}|${i}" title="Remover" aria-label="Remover"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg></button>
          </span>
        </div>
        <div class="grid2">${r.campos.map(f => this.campo(f, r.k + '.' + i)).join('')}</div>
      </div>`).join('')}
      <button class="btn-s" data-add="${r.k}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg>
        Adicionar ${r.rotulo.toLowerCase()}
      </button>
    </div>`;
  },

  campo(f, base){
    const k = base ? base + '.' + f.k : f.k;
    const v = get(this.draft, k);
    const tip = f.tip ? `<span class="tip">${f.tip}</span>` : '';
    const cls = 'fld' + (f.span || f.t === 'img' ? ' span2' : '');
    let inner = '';
    if (f.t === 'textarea') inner = `<textarea class="inp" data-k="${k}" rows="3">${esc(v || '')}</textarea>`;
    else if (f.t === 'select') inner = `<select class="inp" data-k="${k}">${f.opts.map(o => `<option value="${esc(o)}"${o === v ? ' selected' : ''}>${esc(o)}</option>`).join('')}</select>`;
    else if (f.t === 'catsel') inner = `<select class="inp" data-k="${k}"><option value="">— nenhuma —</option>${(this.draft.categorias || []).map(c => `<option value="${esc(c.id)}"${c.id === v ? ' selected' : ''}>${esc(c.nome)}</option>`).join('')}</select>`;
    else if (f.t === 'color') inner = `<div class="colorfld"><input type="color" data-k="${k}" value="${esc(v || '#000000')}" aria-label="${esc(f.l)}"><input class="inp" data-k="${k}" value="${esc(v || '')}"></div>`;
    else if (f.t === 'sw') return `<label class="fld sw" style="flex-direction:row"><input type="checkbox" data-k="${k}"${v ? ' checked' : ''}><i></i><span>${esc(f.l)}</span>${tip}</label>`;
    else if (f.t === 'lista') inner = `<input class="inp" data-k="${k}" data-lista="1" value="${esc((v || []).join(', '))}">`;
    else if (f.t === 'img') return `<div class="${cls}"><label>${esc(f.l)}</label>${tip}
        <div class="imgfld">
          <div class="imgprev">${v ? `<img src="${esc(v)}" alt="">` : '<em>Sem foto<br>(ilustração)</em>'}</div>
          <div class="imgctl">
            <div class="btnrow">
              <button class="btn-s" data-up="${k}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 16V4M7 9l5-5 5 5M5 20h14" stroke-linecap="round" stroke-linejoin="round"/></svg>Enviar foto</button>
              ${v ? `<button class="btn-s btn-s--danger" data-clear="${k}">Remover</button>` : ''}
            </div>
            <input class="inp" data-k="${k}" placeholder="ou cole o endereço da imagem" value="${esc(v && v.startsWith('data:') ? '' : (v || ''))}">
          </div>
        </div></div>`;
    else inner = `<input class="inp" data-k="${k}" value="${esc(v == null ? '' : v)}">`;
    return `<div class="${cls}"><label>${esc(f.l)}</label>${inner}${tip}</div>`;
  },

  painelDados(){
    return `<h2>Dados</h2><p class="sub">Faça uma cópia de segurança do conteúdo, restaure um arquivo salvo ou volte ao conteúdo original.</p>
      <div class="card"><h3>Cópia de segurança</h3>
        <p class="hint">O <b>.json</b> é a cópia de segurança. O <b>conteudo.js</b> é o arquivo que você coloca na pasta <b>dados/</b> do site hospedado para que todo mundo veja o conteúdo atual.</p>
        <div class="btnrow">
          <button class="btn-s btn-s--ink" id="dd-exp">Exportar conteúdo (.json)</button>
          <button class="btn-s" id="dd-imp">Importar arquivo</button>
          <button class="btn-s" id="dd-pub">Gerar conteudo.js do site</button>
        </div>
      </div>
      <div class="card"><h3>Recomeçar</h3>
        <p class="hint">Volta todos os textos, cores e categorias ao conteúdo original. Os produtos não são apagados.</p>
        <button class="btn-s btn-s--danger" id="dd-reset">Restaurar conteúdo original</button>
      </div>`;
  },

  /* ---------- produtos ---------- */
  fProd:{ q:'', cat:'todos' },
  renderProdutos(){
    const box = $('#adm-produtos');
    if (!box) return;
    const cats = this.draft.categorias || [];
    let lista = Store.produtos.slice();
    if (this.fProd.cat !== 'todos') lista = lista.filter(p => p.categoria === this.fProd.cat);
    const q = this.fProd.q.trim().toLowerCase();
    if (q) lista = lista.filter(p => (p.nome + ' ' + (p.descricao || '')).toLowerCase().includes(q));
    lista.sort((a, b) => (a.ordem || 0) - (b.ordem || 0) || String(a.nome).localeCompare(String(b.nome), 'pt-BR'));

    box.innerHTML = `<h2>Produtos</h2>
      <p class="sub">Cada produto cadastrado aparece no catálogo. Marque como destaque para aparecer também na página inicial.</p>
      ${this.editando ? this.formProduto() : ''}
      <div class="pfilters">
        <button class="btn-s btn-s--ink" id="pd-novo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg>Novo produto</button>
        <select class="csel" id="pd-cat"><option value="todos">Todas as categorias</option>${cats.map(c => `<option value="${esc(c.id)}"${this.fProd.cat === c.id ? ' selected' : ''}>${esc(c.nome)}</option>`).join('')}</select>
        <label class="cfield" style="flex:1;min-width:180px"><span class="vh">Buscar produto</span>
          <input type="search" id="pd-q" placeholder="Buscar…" value="${esc(this.fProd.q)}"></label>
      </div>
      <div class="plist">${lista.length ? lista.map(p => {
        const c = cats.find(x => x.id === p.categoria);
        return `<div class="prow">
          <div class="prow__i">${p.imagem ? `<img src="${esc(p.imagem)}" alt="">` : `<div class="art" data-art="${esc(p.arte || 'perfume')}" data-alt=""></div>`}</div>
          <div class="prow__t">
            <b>${esc(p.nome)}</b>
            <span>${esc(c ? c.nome : p.categoria || '—')}${p.preco ? ' · ' + esc(precoTxt(p.preco)) : ''}${p.destaque ? ' · destaque' : ''}${p.ativo === false ? ' · oculto' : ''}</span>
          </div>
          <div class="prow__a">
            <button class="btn-s" data-edit="${esc(p.id)}">Editar</button>
            <button class="ic" data-rm="${esc(p.id)}" aria-label="Excluir ${esc(p.nome)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          </div>
        </div>`; }).join('')
        : '<p class="hint">Nenhum produto ainda. Clique em “Novo produto” para começar.</p>'}</div>`;
    paintArt(box);
  },

  formProduto(){
    const p = this.editando;
    const cats = this.draft.categorias || [];
    return `<div class="card" id="pd-form">
      <h3>${p._novo ? 'Novo produto' : 'Editar produto'}</h3>
      <div class="grid2">
        <div class="fld"><label>Nome</label><input class="inp" data-p="nome" value="${esc(p.nome || '')}"></div>
        <div class="fld"><label>Categoria</label><select class="inp" data-p="categoria">${cats.map(c => `<option value="${esc(c.id)}"${c.id === p.categoria ? ' selected' : ''}>${esc(c.nome)}</option>`).join('')}</select></div>
        <div class="fld span2"><label>Descrição</label><textarea class="inp" data-p="descricao" rows="3">${esc(p.descricao || '')}</textarea></div>
        <div class="fld"><label>Preço</label><input class="inp" data-p="preco" placeholder="ex.: 89,90" value="${esc(p.preco || '')}"></div>
        <div class="fld"><label>Preço anterior</label><input class="inp" data-p="precoDe" placeholder="opcional" value="${esc(p.precoDe || '')}"></div>
        <div class="fld"><label>Etiquetas</label><input class="inp" data-p="tags" data-lista="1" placeholder="novidade, promoção" value="${esc((p.tags || []).join(', '))}"></div>
        <div class="fld"><label>Ordem</label><input class="inp" data-p="ordem" type="number" value="${esc(p.ordem || 0)}"></div>
        <div class="fld"><label>Ilustração (quando não há foto)</label><select class="inp" data-p="arte">${ARTES.map(a => `<option value="${a}"${a === p.arte ? ' selected' : ''}>${a}</option>`).join('')}</select></div>
        <div class="fld span2"><label>Foto do produto</label>
          <div class="imgfld">
            <div class="imgprev">${p.imagem ? `<img src="${esc(p.imagem)}" alt="">` : `<div class="art" data-art="${esc(p.arte || 'perfume')}" data-alt=""></div>`}</div>
            <div class="imgctl">
              <div class="btnrow">
                <button class="btn-s" data-upp="1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 16V4M7 9l5-5 5 5M5 20h14" stroke-linecap="round" stroke-linejoin="round"/></svg>Enviar foto</button>
                ${p.imagem ? '<button class="btn-s btn-s--danger" data-clearp="1">Remover</button>' : ''}
              </div>
              <input class="inp" data-p="imagem" placeholder="ou cole o endereço da imagem" value="${esc(p.imagem && p.imagem.startsWith('data:') ? '' : (p.imagem || ''))}">
            </div>
          </div>
        </div>
        <label class="fld sw" style="flex-direction:row"><input type="checkbox" data-p="destaque"${p.destaque ? ' checked' : ''}><i></i><span>Destaque na página inicial</span></label>
        <label class="fld sw" style="flex-direction:row"><input type="checkbox" data-p="ativo"${p.ativo !== false ? ' checked' : ''}><i></i><span>Visível no catálogo</span></label>
      </div>
      <div class="btnrow" style="margin-top:1.2rem">
        <button class="btn-s btn-s--ink" id="pd-salvar">Salvar produto</button>
        <button class="btn-s" id="pd-cancelar">Cancelar</button>
      </div>
    </div>`;
  },

  status(txt){
    const el = $('#adm-status');
    if (!el) return;
    el.innerHTML = txt || (this.dirty
      ? '<b>Alterações não salvas.</b> Clique em salvar para publicar no site.'
      : 'Tudo salvo. ' + (Store.modo === 'db' ? 'Visível para todo mundo.' : 'Salvo neste navegador.'));
  },

  async salvar(){
    try{
      (this.draft.categorias || []).forEach(c => {
        if (!c.id) c.id = String(c.nome || 'cat').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || uid();
      });
      await Store.salvarConfig(clone(this.draft));
      this.dirty = false;
      renderTudo();
      this.status();
      toast('Alterações salvas.');
    }catch(e){
      console.error(e);
      toast('Não consegui salvar: ' + (e.message || 'erro desconhecido'));
    }
  }
};

/* ============================================================
   RENDER GERAL
   ============================================================ */
function renderTudo(){
  aplicarTema();
  aplicarTextos();
  renderHome();
  renderInstitucional();
  renderCatalogo();
  renderCarrinho();
  Carrinho.badge();
  paintArt();
  reveals();
  words();
}

/* ============================================================
   INTERAÇÕES
   ============================================================ */
const hasIO = typeof IntersectionObserver === 'function';

function reveals(){
  if (!hasIO || reduceMotion){ $$('[data-rv], .reveal-img').forEach(el => el.classList.add('in')); return; }
  if (!reveals.io){
    reveals.io = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); reveals.io.unobserve(e.target); } });
    }, { rootMargin:'0px 0px -12% 0px', threshold:0.06 });
  }
  $$('[data-rv], .reveal-img').forEach(el => {
    if (el.dataset.obs) return;
    el.dataset.obs = '1';
    reveals.io.observe(el);
  });
}

function words(){
  const p = $('#manifesto');
  if (!p) return;
  if (p.querySelector('.w') && p.dataset.done === p.textContent) return;
  const txt = p.textContent.trim();
  p.dataset.done = txt;
  p.innerHTML = txt.split(/\s+/).map((w, i) => `<span class="w" style="--d:${(i * .06).toFixed(2)}s">${esc(w)}</span>`).join(' ');
  if (!hasIO || reduceMotion){ $$('.w', p).forEach(w => w.classList.add('in')); return; }
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting){ $$('.w', p).forEach(w => w.classList.add('in')); io.disconnect(); } });
  }, { threshold:.35 });
  io.observe(p);
}

function header(){
  const h = $('#header');
  const onScroll = () => h.classList.toggle('is-stuck', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });
  if (!hasIO) return;
  const links = $$('.nav a[data-nav="home"]');
  const map = new Map();
  links.forEach(a => { const s = document.querySelector(a.getAttribute('href')); if (s) map.set(s, a); });
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      const a = map.get(e.target);
      if (a && e.isIntersecting){ $$('.nav a').forEach(l => l.classList.remove('is-active')); a.classList.add('is-active'); }
    });
  }, { rootMargin:'-45% 0px -50% 0px' });
  map.forEach((a, s) => io.observe(s));
}

function mobileMenu(){
  const btn = $('#btn-burger'), menu = $('#mmenu');
  $$('.mmenu__nav a', menu).forEach((a, i) => a.style.setProperty('--d', (.08 + i * .05) + 's'));
  const setOpen = open => {
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.toggle('is-open', open));
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    btn.innerHTML = open
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 8h16M4 16h16" stroke-linecap="round"/></svg>';
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true; }, 700);
  };
  mobileMenu.close = () => setOpen(false);
  btn.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));
  $$('a, button', menu).forEach(el => el.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('is-open')) setOpen(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 1100 && menu.classList.contains('is-open')) setOpen(false); });
}

function buscaSite(){
  const box = $('#search'), btn = $('#btn-search'), input = $('#search-input'), out = $('#search-results');
  const indice = () => {
    const base = (D().categorias || []).filter(c => c.visivel !== false)
      .map(c => ({ t:c.nome, s:'Categoria', h:linkCat(c.id), k:(c.desc || '') }));
    const prods = Store.produtos.filter(p => p.ativo !== false)
      .map(p => ({ t:p.nome, s:'Produto', h:'#/catalogo?p=' + encodeURIComponent(p.id), k:(p.descricao || '') + ' ' + (p.tags || []).join(' ') }));
    return base.concat(prods).concat([
      { t:'Catálogo completo', s:'Página', h:'#/catalogo', k:'produtos loja' },
      { t:'Sobre a loja', s:'Institucional', h:'#sobre', k:'historia experiencia' },
      { t:'Localização e horários', s:'Contato', h:'#contato', k:'endereco mapa como chegar horario' }
    ]);
  };
  const render = q => {
    const term = q.trim().toLowerCase();
    const all = indice();
    const list = !term ? all.slice(0, 6) : all.filter(i => (i.t + ' ' + i.k + ' ' + i.s).toLowerCase().includes(term)).slice(0, 12);
    out.innerHTML = list.length ? list.map(i => `<a href="${i.h}"><strong>${esc(i.t)}</strong><em>${esc(i.s)}</em></a>`).join('')
      : '<a href="#contato"><strong>Nada encontrado</strong><em>Fale com a loja</em></a>';
    $$('a', out).forEach(a => a.addEventListener('click', () => setOpen(false)));
  };
  const setOpen = open => {
    box.hidden = false;
    requestAnimationFrame(() => box.classList.toggle('is-open', open));
    btn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open){ render(input.value); setTimeout(() => input.focus(), 120); }
    else setTimeout(() => { if (!box.classList.contains('is-open')) box.hidden = true; }, 420);
  };
  btn.addEventListener('click', () => setOpen(!box.classList.contains('is-open')));
  input.addEventListener('input', () => render(input.value));
  input.addEventListener('keydown', e => { if (e.key === 'Enter'){ const f = $('a', out); if (f) f.click(); } });
  box.addEventListener('click', e => { if (e.target === box) setOpen(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && box.classList.contains('is-open')) setOpen(false); });
}

function spotlight(){
  const hero = $('#inicio'), spot = $('#spot');
  if (!hero || !spot) return;
  if (isFinePointer && !reduceMotion){
    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect();
      spot.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      spot.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    }, { passive:true });
  } else if (!reduceMotion){
    let t = 0, vis = true;
    if (hasIO) new IntersectionObserver(es => { vis = es[0].isIntersecting; }, { threshold:0 }).observe(hero);
    const loop = () => {
      if (vis && !document.hidden){
        t += .006;
        spot.style.setProperty('--mx', (50 + Math.sin(t) * 26) + '%');
        spot.style.setProperty('--my', (38 + Math.cos(t * .8) * 16) + '%');
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
}

function parallax(){
  if (reduceMotion || window.innerWidth < 900) return;
  const els = $$('[data-parallax]');
  if (!els.length) return;
  let tick = false;
  const run = () => {
    const vh = window.innerHeight;
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const p = (r.top + r.height / 2 - vh / 2) / vh;
      el.style.transform = 'translate3d(0,' + (p * parseFloat(el.dataset.parallax) * 100).toFixed(2) + 'px,0)';
    });
    tick = false;
  };
  window.addEventListener('scroll', () => { if (!tick){ tick = true; requestAnimationFrame(run); } }, { passive:true });
  run();
}

function cursor(){
  if (!isFinePointer || reduceMotion) return;
  const c = $('#cursor');
  let x = 0, y = 0, cx = 0, cy = 0;
  document.addEventListener('pointermove', e => { x = e.clientX; y = e.clientY; }, { passive:true });
  (function loop(){
    cx += (x - cx) * .18; cy += (y - cy) * .18;
    c.style.transform = 'translate3d(' + (cx - 13) + 'px,' + (cy - 13) + 'px,0)';
    requestAnimationFrame(loop);
  })();
  document.addEventListener('pointerover', e => {
    c.classList.toggle('is-hot', !!(e.target.closest && e.target.closest('a, button, input, .cat, .look, .bx, .pcard')));
  });
}

function fab(){
  const f = $('#fab');
  $('#totop').addEventListener('click', () => window.scrollTo({ top:0, behavior: reduceMotion ? 'auto' : 'smooth' }));
  const onScroll = () => f.classList.toggle('is-on', window.scrollY > window.innerHeight * .6);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });
}

/* ============================================================
   ROTEADOR
   ============================================================ */
function mostrar(v){
  ['home','catalogo','sobre','carrinho','admin'].forEach(n => { $('#view-' + n).hidden = (n !== v); });
  $('#fab').style.display = v === 'admin' ? 'none' : '';
  if (v !== 'home') window.scrollTo({ top:0, behavior:'auto' });
  if (v === 'admin') Admin.entrar();
  if (v === 'catalogo') renderCatalogo();
  if (v === 'carrinho') renderCarrinho();
  if (v === 'sobre') renderInstitucional();
  paintArt();
  reveals();
}

function rota(){
  const h = location.hash || '';
  if (h.startsWith('#/catalogo')){
    const qs = new URLSearchParams(h.split('?')[1] || '');
    const cat = qs.get('cat');
    if (cat) Cat.filtro = cat;
    mostrar('catalogo');
    const pid = qs.get('p');
    if (pid) setTimeout(() => abrirProduto(pid), 120);
  } else if (h.startsWith('#/sobre')){
    mostrar('sobre');
  } else if (h.startsWith('#/carrinho') || h.startsWith('#/pedido')){
    mostrar('carrinho');
  } else if (h.startsWith('#/admin')){
    mostrar('admin');
  } else {
    mostrar('home');
    if (h && h.length > 1){
      const el = document.querySelector(h);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block:'start' }), 40);
    }
  }
}

/* ============================================================
   EVENTOS GLOBAIS (delegação)
   ============================================================ */
function eventos(){
  document.addEventListener('click', async e => {
    const t = e.target;

    const wa = t.closest && t.closest('[data-wa]');
    if (wa){
      e.preventDefault();
      const link = waLink(wa.dataset.wa || D().contato.mensagem);
      if (!link){ toast('WhatsApp ainda não configurado. O administrador pode incluir o número no painel.'); return; }
      window.open(link, '_blank', 'noopener');
      return;
    }
    const mp = t.closest && t.closest('button[data-maps]');
    if (mp){ const u = D().local.maps; if (u) window.open(u, '_blank', 'noopener'); return; }

    const ac = t.closest && t.closest('[data-add-cart]');
    if (ac){
      e.preventDefault(); e.stopPropagation();
      let q = 1;
      if (ac.dataset.usaQtd){ const el = $('#mqtd'); q = Math.max(1, parseInt(el ? el.textContent : '1', 10) || 1); }
      Carrinho.add(ac.dataset.addCart, q);
      const p = Store.produtos.find(x => x.id === ac.dataset.addCart);
      toast((p ? p.nome : 'Produto') + ' adicionado ao pedido.');
      if (ac.dataset.usaQtd) fecharProduto();
      if (!$('#view-carrinho').hidden) renderCarrinho();
      return;
    }
    const qb = t.closest && t.closest('[data-q]');
    if (qb){
      const el = $('#mqtd');
      if (el) el.textContent = String(Math.max(1, (parseInt(el.textContent, 10) || 1) + Number(qb.dataset.q)));
      return;
    }
    const cq = t.closest && t.closest('[data-cq]');
    if (cq){ const [id, dd] = cq.dataset.cq.split('|'); Carrinho.mudar(id, Number(dd)); renderCarrinho(); return; }
    const crm = t.closest && t.closest('[data-crm]');
    if (crm){ Carrinho.remover(crm.dataset.crm); renderCarrinho(); return; }
    if (t.closest && t.closest('[data-cart-clear]')){
      if (confirm('Remover todos os itens do pedido?')){ Carrinho.limpar(); renderCarrinho(); }
      return;
    }
    if (t.closest && t.closest('[data-cart-send]')){
      const link = waLink(msgPedido());
      if (!link){ toast('WhatsApp ainda não configurado. O administrador pode incluir o número no painel.'); return; }
      window.open(link, '_blank', 'noopener');
      return;
    }

    const pl = t.closest && t.closest('.plink');
    if (pl){ abrirProduto(pl.dataset.p); return; }
    const pc = t.closest && t.closest('.pcard');
    if (pc){ abrirProduto(pc.dataset.p); return; }
    if (t.closest && (t.closest('[data-fechar]') || t === $('#pmodal'))){ fecharProduto(); return; }

    const fc = t.closest && t.closest('.fchip');
    if (fc){
      Cat.filtro = fc.dataset.f;
      const base = '#/catalogo' + (Cat.filtro !== 'todos' ? '?cat=' + encodeURIComponent(Cat.filtro) : '');
      history.replaceState(null, '', base);
      renderCatalogo();
      return;
    }

    /* ---- admin ---- */
    const aba = t.closest && t.closest('.atab');
    if (aba){ Admin.aba = aba.dataset.aba; Admin.render(); return; }

    if (t.closest && t.closest('#lock-go')){
      const pin = $('#lock-pin').value;
      if (pin && pin === (D().admin.senha || 'lamour2026')){
        sessionStorage.setItem('lamour.admin', '1');
        Admin.liberado = true;
        Admin.entrar();
      } else toast('Senha incorreta.');
      return;
    }

    const add = t.closest && t.closest('[data-add]');
    if (add){
      const k = add.dataset.add;
      const bloco = SCHEMA.flatMap(s => s.blocos).find(b => b.rep && b.rep.k === k);
      const arr = get(Admin.draft, k) || [];
      arr.push(clone(bloco.rep.novo));
      set(Admin.draft, k, arr);
      Admin.dirty = true; Admin.render();
      return;
    }
    const del = t.closest && t.closest('[data-del]');
    if (del){
      const [k, i] = del.dataset.del.split('|');
      const arr = get(Admin.draft, k) || [];
      arr.splice(Number(i), 1);
      Admin.dirty = true; Admin.render();
      return;
    }
    const mv = t.closest && t.closest('[data-mv]');
    if (mv){
      const [k, i, d] = mv.dataset.mv.split('|');
      const arr = get(Admin.draft, k) || [], a = Number(i), b = a + Number(d);
      if (b >= 0 && b < arr.length){ const x = arr[a]; arr[a] = arr[b]; arr[b] = x; Admin.dirty = true; Admin.render(); }
      return;
    }
    const up = t.closest && t.closest('[data-up]');
    if (up){ Admin.alvoImg = { tipo:'config', k:up.dataset.up }; $('#file-input').click(); return; }
    const cl = t.closest && t.closest('[data-clear]');
    if (cl){ set(Admin.draft, cl.dataset.clear, ''); Admin.dirty = true; Admin.render(); return; }
    const upp = t.closest && t.closest('[data-upp]');
    if (upp){ Admin.alvoImg = { tipo:'produto' }; $('#file-input').click(); return; }
    const clp = t.closest && t.closest('[data-clearp]');
    if (clp){ Admin.editando.imagem = ''; Admin.renderProdutos(); return; }

    if (t.closest && t.closest('#adm-save')){ Admin.salvar(); return; }
    if (t.closest && t.closest('#adm-preview')){
      if (Admin.dirty && !confirm('Você tem alterações não salvas. Sair mesmo assim?')) return;
      location.hash = '#inicio'; return;
    }

    if (t.closest && t.closest('#pd-novo')){
      Admin.editando = { id:uid(), nome:'', categoria:(D().categorias[0] || {}).id || '', descricao:'', preco:'', precoDe:'',
                         arte:'perfume', imagem:'', destaque:false, ativo:true, tags:[], ordem:(Store.produtos.length + 1), criadoEm:Date.now(), _novo:true };
      Admin.renderProdutos();
      setTimeout(() => { const f = $('#pd-form'); if (f) f.scrollIntoView({ block:'center', behavior:'smooth' }); }, 60);
      return;
    }
    const ed = t.closest && t.closest('[data-edit]');
    if (ed){
      const p = Store.produtos.find(x => x.id === ed.dataset.edit);
      if (p){ Admin.editando = clone(p); Admin.renderProdutos();
        setTimeout(() => { const f = $('#pd-form'); if (f) f.scrollIntoView({ block:'center', behavior:'smooth' }); }, 60); }
      return;
    }
    const rm = t.closest && t.closest('[data-rm]');
    if (rm){
      const p = Store.produtos.find(x => x.id === rm.dataset.rm);
      if (p && confirm('Excluir "' + p.nome + '"? Essa ação não pode ser desfeita.')){
        await Store.removerProduto(p.id);
        Admin.renderProdutos(); renderTudo(); toast('Produto excluído.');
      }
      return;
    }
    if (t.closest && t.closest('#pd-cancelar')){ Admin.editando = null; Admin.renderProdutos(); return; }
    if (t.closest && t.closest('#pd-salvar')){
      const p = Admin.editando;
      if (!p.nome.trim()){ toast('Dê um nome ao produto.'); return; }
      delete p._novo;
      p.ordem = Number(p.ordem) || 0;
      if (!p.criadoEm) p.criadoEm = Date.now();
      try{
        await Store.salvarProduto(clone(p));
        Admin.editando = null;
        Admin.renderProdutos(); renderTudo(); toast('Produto salvo.');
      }catch(err){ toast('Não consegui salvar: ' + (err.message || 'erro')); }
      return;
    }

    if (t.closest && t.closest('#dd-exp')){ exportarDados(); return; }
    if (t.closest && t.closest('#dd-pub')){ exportarDados(true); return; }
    if (t.closest && t.closest('#dd-imp')){ importarDados(); return; }
    if (t.closest && t.closest('#dd-reset')){
      if (confirm('Restaurar todos os textos, cores e categorias originais?')){
        Admin.draft = clone(DEFAULT_DATA);
        Admin.dirty = true; Admin.render(); toast('Conteúdo original carregado. Clique em salvar para aplicar.');
      }
      return;
    }
  });

  /* inputs do admin */
  document.addEventListener('input', e => {
    const el = e.target;
    if (el.dataset && el.dataset.k && Admin.draft){
      let v = el.type === 'checkbox' ? el.checked : el.value;
      if (el.dataset.lista) v = String(v).split(',').map(s => s.trim()).filter(Boolean);
      set(Admin.draft, el.dataset.k, v);
      Admin.dirty = true; Admin.status();
      if (el.type === 'color'){
        const par = el.parentElement.querySelector('.inp');
        if (par) par.value = el.value;
      } else if (el.parentElement && el.parentElement.classList.contains('colorfld') && /^#[0-9a-f]{6}$/i.test(el.value)){
        const sw = el.parentElement.querySelector('input[type=color]');
        if (sw) sw.value = el.value;
      }
      if (el.dataset.k.startsWith('cores.') || el.dataset.k.startsWith('fontes.') || el.dataset.k === 'marca.favicon'){
        const bk = Store.data; Store.data = Admin.draft; aplicarTema(); Store.data = bk;
      }
      return;
    }
    if (el.dataset && el.dataset.p && Admin.editando){
      let v = el.type === 'checkbox' ? el.checked : el.value;
      if (el.dataset.lista) v = String(v).split(',').map(s => s.trim()).filter(Boolean);
      Admin.editando[el.dataset.p] = v;
      return;
    }
    if (el.dataset && el.dataset.c){ Carrinho.cliente[el.dataset.c] = el.value; Carrinho.salvar(); return; }
    if (el.id === 'cbusca'){ Cat.busca = el.value; renderCatalogo(); }
    if (el.id === 'pd-q'){ Admin.fProd.q = el.value; const a = document.activeElement; Admin.renderProdutos(); const n = $('#pd-q'); if (n){ n.focus(); n.setSelectionRange(n.value.length, n.value.length); } }
  });

  document.addEventListener('change', async e => {
    const el = e.target;
    if (el.dataset && el.dataset.c){ Carrinho.cliente[el.dataset.c] = el.value; Carrinho.salvar(); return; }
    if (el.id === 'cordem'){ Cat.ordem = el.value; renderCatalogo(); return; }
    if (el.id === 'pd-cat'){ Admin.fProd.cat = el.value; Admin.renderProdutos(); return; }
    if (el.id === 'file-input' && el.files && el.files[0]){
      const file = el.files[0];
      el.value = '';
      toast('Enviando imagem…');
      try{
        const url = await Store.subirImagem(file);
        if (Admin.alvoImg && Admin.alvoImg.tipo === 'produto' && Admin.editando){
          Admin.editando.imagem = url; Admin.renderProdutos();
        } else if (Admin.alvoImg){
          set(Admin.draft, Admin.alvoImg.k, url); Admin.dirty = true; Admin.render();
        }
        toast('Imagem pronta. Não esqueça de salvar.');
      }catch(err){ toast('Não consegui usar essa imagem: ' + (err.message || 'erro')); }
      return;
    }
  });

  window.addEventListener('hashchange', rota);
  mq('(prefers-color-scheme: dark)').addEventListener && mq('(prefers-color-scheme: dark)').addEventListener('change', () => aplicarTema());
}

/* ---------- dados ---------- */
async function exportarDados(comoJs){
  const pacote = { versao:1, exportadoEm:new Date().toISOString(), config:Admin.draft || Store.data, produtos:Store.produtos };
  const txt = comoJs
    ? '/* Conteúdo publicado do site — gerado pelo painel. */\nwindow.LAMOUR_CONTEUDO = ' + JSON.stringify(pacote, null, 2) + ';\n'
    : JSON.stringify(pacote, null, 2);
  const nome = comoJs ? 'conteudo.js' : 'lamour-conteudo.json';
  try{
    const dl = (typeof window.claude !== 'undefined' && window.claude.use) ? await window.claude.use('downloads') : null;
    if (dl){ await dl.save({ filename:nome, data:txt }); toast('Arquivo gerado.'); return; }
  }catch(e){ /* segue para o método comum */ }
  const a = document.createElement('a');
  const url = URL.createObjectURL(new Blob([txt], { type:'application/json' }));
  a.href = url; a.download = nome; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  toast('Arquivo gerado.');
}

function importarDados(){
  const inp = document.createElement('input');
  inp.type = 'file'; inp.accept = 'application/json,.json';
  inp.onchange = () => {
    const f = inp.files && inp.files[0];
    if (!f) return;
    const fr = new FileReader();
    fr.onload = async () => {
      try{
        const j = JSON.parse(fr.result);
        if (j.config){ Admin.draft = mergeDeep(clone(DEFAULT_DATA), j.config); Admin.dirty = true; }
        if (Array.isArray(j.produtos)){
          await Store.salvarProdutosEmLote(j.produtos.map(p => Object.assign({ id:p.id || uid() }, p)));
        }
        Admin.render(); renderTudo();
        toast('Conteúdo importado. Clique em salvar para aplicar os textos.');
      }catch(err){ toast('Arquivo inválido.'); }
    };
    fr.readAsText(f);
  };
  inp.click();
}

/* ============================================================
   BOOT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  Store.carregarLocal();
  Carrinho.carregar();
  renderTudo();
  eventos();
  header();
  mobileMenu();
  buscaSite();
  spotlight();
  parallax();
  cursor();
  fab();
  rota();
  requestAnimationFrame(() => document.documentElement.classList.add('is-ready'));

  Store.onChange = () => {
    renderTudo();
    if (!$('#view-admin').hidden && Admin.liberado && !Admin.dirty){
      Admin.draft = clone(Store.data);
      Admin.render();
    }
  };
  Store.init().then(() => {
    renderTudo();
    if (!$('#view-admin').hidden) Admin.entrar();
  });
});
