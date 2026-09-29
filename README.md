# L'amour Essência Moda e Variedades — site

Site completo em HTML5, CSS3 e JavaScript puro, sem bibliotecas nem build. Cinco telas em um arquivo só:

| Tela | Endereço |
|---|---|
| Página inicial | `index.html` |
| Catálogo | `#/catalogo` (e `#/catalogo?cat=perfumes`) |
| Institucional | `#/sobre` |
| Meu pedido (carrinho) | `#/carrinho` |
| Painel do administrador | `#/admin` |

```
/
├── index.html
├── css/style.css
├── js/script.js
├── dados/
│   ├── nuvem.js          ← conexão com o banco (Firebase ou Supabase)
│   ├── firestore.rules   ← regras do Firestore
│   ├── storage.rules     ← regras do Storage do Firebase (opcional)
│   ├── supabase.sql      ← script do Supabase (alternativa)
│   └── conteudo.js       ← alternativa sem banco nenhum
├── assets/
└── README.md
```

---

# ⭐ 1. Fazer as alterações valerem para todos

Sem banco, o painel salva no navegador de quem editou e mais ninguém vê. Para o conteúdo valer para todos os visitantes, conecte o site a um banco. O site fala com **Firebase (Firestore)** ou **Supabase** — escolha um.

## Opção A — Firebase / Firestore

### Passo 1 — Criar o projeto
Em `console.firebase.google.com`, crie um projeto. Pode desativar o Google Analytics.

### Passo 2 — Criar o banco
**Build → Firestore Database → Criar banco de dados.** Escolha a região mais perto (ex.: `southamerica-east1`) e inicie em **modo de produção** — as regras certas vêm no passo 4.

### Passo 3 — Criar o login da administradora
**Build → Authentication → Começar → E-mail/senha → Ativar.** Depois **Users → Add user**: informe o e-mail e a senha que ela vai usar no painel. Copie o **User UID** que aparece na lista — ele é usado no passo seguinte.

### Passo 4 — Publicar as regras
**Firestore Database → Regras.** Apague o que estiver lá, cole o conteúdo de `dados/firestore.rules`, troque `COLE_O_UID_AQUI` pelo UID copiado e clique em **Publicar**.

Essa troca é importante: a chave da API do Firebase fica visível no site (ela é pública por natureza) e, sem essa checagem, qualquer pessoa poderia criar uma conta no projeto e gravar no seu site. Com o UID fixo, só a conta da administradora escreve. Todo mundo lê.

### Passo 5 — Pegar as duas informações
**Configurações do projeto (⚙️) → Seus apps.** Se ainda não houver um app Web, crie um (ícone `</>`, sem hospedagem). Na **Configuração do SDK** aparecem:

- `projectId` — algo como `lamour-loja-1234`
- `apiKey` — algo como `AIzaSy...`

### Passo 6 — Ligar o site ao banco
Abra `dados/nuvem.js`, descomente o bloco do Firebase e preencha:

```js
window.LAMOUR_NUVEM = {
  provedor: "firebase",
  projectId: "lamour-loja-1234",
  apiKey: "AIzaSy..."
};
```

Suba a pasta para a hospedagem. Pronto.

### Sobre as fotos no Firebase
O Cloud Storage do Firebase passou a exigir o plano Blaze (com cartão cadastrado). Dois caminhos:

- **Sem Blaze** (recomendado para começar): não preencha `storageBucket`. Hospede as fotos onde já for conveniente — a própria pasta `assets/produtos/` do site serve — e cole o caminho no campo *"ou cole o endereço da imagem"* de cada produto.
- **Com Blaze**: ative o Storage, publique `dados/storage.rules` (trocando o UID) e preencha `storageBucket` no `nuvem.js`. Aí o botão *Enviar foto* do painel passa a funcionar.

## Opção B — Supabase

Mesma ideia, cinco passos: criar o projeto em `supabase.com`; rodar `dados/supabase.sql` no **SQL Editor**; criar a administradora em **Authentication → Users** (e desligar *Allow new users to sign up* em **Providers → Email**); copiar **Project URL** e a chave **anon public** em **Project Settings → API**; preencher o bloco do Supabase em `dados/nuvem.js`.

O envio de fotos pelo painel já funciona no plano gratuito. Em compensação, projetos gratuitos do Supabase são pausados após 7 dias sem nenhum acesso — qualquer visita ao site conta como acesso, e o projeto volta com um clique.

> Atalho para as duas opções: cole as informações direto no painel, em **Conexão**, clique em *Salvar e conectar*, teste, e depois em **Gerar nuvem.js do site** — é só substituir o arquivo na hospedagem.

### Como fica o acesso ao painel

| Situação | Como entra | O que acontece ao salvar |
|---|---|---|
| Com banco conectado | e-mail + senha criados no Firebase/Supabase | vale para todos os visitantes |
| Sem banco | senha local (padrão `lamour2026`) | vale só naquele navegador |

---

## 2. Painel do administrador

`#/admin`. Onze abas: **Identidade** (nome, assinatura, emoji do ícone, logo, as sete cores, tema escuro automático, fontes), **Início**, **Seções**, **Categorias**, **Institucional**, **Contato**, **Catálogo**, **Pedidos**, **Produtos**, **Conexão** e **Dados**.

Cores e fontes mudam ao vivo; **Salvar alterações** grava o resto. Produtos são salvos no próprio formulário.

## 3. Pedido pelo WhatsApp

O cliente clica no **+** sobre a foto (home ou catálogo) ou escolhe a quantidade na ficha do produto. Em `#/carrinho` ajusta quantidades, informa nome, entrega ou retirada e observações, e o botão abre o WhatsApp da loja com a lista pronta:

```
Olá! Gostaria de fazer um pedido pelo site:

• 2x Perfume Tal — R$ 179,80
• 1x Batom Tal — R$ 39,90

Total estimado: R$ 219,70

Nome: Maria
Entrega: Retirar na loja
```

O carrinho fica no navegador do cliente (é dele, não precisa ir para o banco). Produtos sem preço entram como "a confirmar na conversa". Não há pagamento nem controle de estoque: a negociação acontece no WhatsApp.

## 4. Como os dados ficam guardados

No Firestore são duas coleções: `site_config` (um documento chamado `site`) e `produtos` (um documento por produto). O conteúdo vai num campo `dados` em JSON — no caso dos produtos, `nome` e `categoria` também ficam soltos, só para o documento ser legível no console. No Supabase são duas tabelas com uma coluna `jsonb`. Em qualquer um dos dois, **Dados → Exportar** baixa tudo num arquivo.

## 5. Imagens

Todo campo de foto aceita, nesta ordem: foto enviada pelo painel, endereço colado à mão, ou uma ilustração vetorial gerada pelo próprio site na paleta da marca. Nenhuma tela quebra por falta de imagem. Fotos enviadas são reduzidas a 1400px e comprimidas antes de subir.

## 6. Publicação

Site estático: Netlify, Vercel, GitHub Pages, Hostinger, cPanel — ou o próprio Firebase Hosting, se já estiver usando Firebase. Nada para compilar. Antes de publicar, ajuste em `index.html` o `og:url`, o `og:image` e o bloco `application/ld+json` (acrescente `address` e `openingHours` quando estiverem definidos).

## 7. Sem banco nenhum (alternativa)

Edite tudo no painel, vá em **Dados → Gerar conteudo.js do site** e substitua `dados/conteudo.js` na hospedagem. O conteúdo passa a valer para todos — mas cada alteração exige subir o arquivo de novo.

## 8. O que continua em branco

Número do WhatsApp, endereço escrito, horários, redes sociais, preços, marcas e fotos reais. Nada foi inventado: cada um tem seu campo no painel.
