# L'amour Essência Moda e Variedades — site

Site completo em HTML5, CSS3 e JavaScript puro, sem bibliotecas. Cinco telas em um arquivo só:

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
│   ├── nuvem.js        ← conexão com o banco compartilhado
│   ├── conteudo.js     ← alternativa sem banco (opcional)
│   └── supabase.sql    ← script que cria o banco
├── assets/
└── README.md
```

---

# ⭐ 1. Fazer as alterações valerem para todos

Sem banco, o painel salva no navegador de quem editou — ninguém mais vê. Para o conteúdo valer para todos os visitantes, conecte o site a um banco na internet. Usamos o **Supabase**, que tem plano gratuito suficiente para uma loja.

São cinco passos, uma vez só:

### Passo 1 — Criar o projeto
Entre em `supabase.com`, crie uma conta e um projeto novo. Anote a senha do banco que ele pedir (não é a mesma do painel).

### Passo 2 — Criar as tabelas
No menu lateral, abra **SQL Editor → New query**, cole todo o conteúdo de `dados/supabase.sql` e clique em **Run**. Isso cria as tabelas, as permissões e a pasta de fotos.

### Passo 3 — Criar o login da administradora
Ainda no Supabase:
- **Authentication → Users → Add user**: informe o e-mail e a senha que ela vai usar para entrar no painel. Marque *Auto Confirm User*.
- **Authentication → Providers → Email**: desligue **"Allow new users to sign up"**, para que ninguém crie conta sozinho.

### Passo 4 — Pegar as duas chaves
Em **Project Settings → API**, copie:
- **Project URL** (algo como `https://abcdefgh.supabase.co`)
- **anon public** (uma chave longa começando com `eyJ...`)

A chave anon é pública de propósito: com ela só dá para **ler**. Gravar exige o login do passo 3.

### Passo 5 — Ligar o site ao banco
Abra `dados/nuvem.js`, descomente o bloco e cole as duas informações:

```js
window.LAMOUR_NUVEM = {
  url: "https://abcdefgh.supabase.co",
  anonKey: "eyJhbGciOi...",
  bucket: "fotos"
};
```

Suba a pasta para a hospedagem. Pronto: qualquer alteração feita no painel aparece para todo mundo, em qualquer aparelho, na hora que a pessoa abrir ou recarregar o site.

> Atalho: você também pode colar essas duas informações direto no painel, em **Conexão**, clicar em *Salvar e conectar* e depois em **Gerar nuvem.js do site** — aí é só substituir o arquivo na hospedagem.

### Como fica o acesso ao painel

| Situação | Como entra | O que acontece ao salvar |
|---|---|---|
| Nuvem conectada | e-mail + senha do Supabase | vale para todos os visitantes |
| Sem nuvem | senha local (padrão `lamour2026`) | vale só naquele navegador |

As fotos enviadas pelo painel também vão para a nuvem e ficam com endereço próprio — nada de imagem pesada guardada no navegador.

---

## 2. Painel do administrador

`#/admin`. Onze abas:

- **Identidade** — nome, assinatura, emoji do ícone, logotipo, as sete cores, tema escuro automático, fontes.
- **Início** — textos da primeira tela, foto principal, frase de impacto, faixa deslizante.
- **Seções** — títulos e textos de cada bloco da home, cartões de cosméticos e moda, benefícios, sobre, chamadas, rodapé.
- **Categorias** — criar, descrever, foto, mostrar/ocultar.
- **Institucional** — capa, história, valores, galeria e convite final da página `#/sobre`.
- **Contato** — WhatsApp e mensagem automática, telefone, e-mail, redes, endereço, Maps, horários linha a linha.
- **Catálogo** — textos, mostrar ou esconder preços, senha local do painel.
- **Pedidos** — textos do carrinho, primeira linha da mensagem do WhatsApp, aviso e o que perguntar ao cliente.
- **Produtos** — nome, categoria, descrição, preço, preço anterior, etiquetas, ordem, foto, destaque na home, visível no catálogo.
- **Conexão** — situação atual, conectar/testar a nuvem, gerar o `nuvem.js`, recarregar, sair da conta.
- **Dados** — cópia de segurança, importação e o `conteudo.js`.

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

O carrinho fica salvo no navegador do cliente (é dele, não precisa ir para o banco). Produtos sem preço entram como "a confirmar na conversa". Não há pagamento nem estoque: a negociação acontece no WhatsApp.

## 4. Imagens

Todo campo de foto aceita, nesta ordem: foto enviada pelo painel, endereço colado à mão, ou uma ilustração vetorial gerada pelo próprio site na paleta da marca. Nenhuma tela quebra por falta de imagem. Fotos enviadas são reduzidas a 1400px e comprimidas antes de subir.

## 5. Publicação

Site estático: Netlify, Vercel, GitHub Pages, Hostinger, cPanel. Nada para compilar. Antes de publicar, ajuste em `index.html` o `og:url`, o `og:image` e o bloco `application/ld+json` (acrescente `address` e `openingHours` quando estiverem definidos).

## 6. Sem nuvem (alternativa simples)

Se preferir não criar banco nenhum: edite tudo no painel, vá em **Dados → Gerar conteudo.js do site** e substitua `dados/conteudo.js` na hospedagem. O conteúdo passa a valer para todos os visitantes — mas cada alteração exige subir o arquivo de novo. A nuvem existe justamente para evitar esse passo.

## 7. O que continua em branco

Número do WhatsApp, endereço escrito, horários, redes sociais, preços, marcas e fotos reais. Nada foi inventado: cada um tem seu campo no painel.
