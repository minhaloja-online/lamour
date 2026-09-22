# L'amour Essência Moda e Variedades — site

Site completo em HTML5, CSS3 e JavaScript puro, sem dependências além das fontes do Google. Cinco telas em um arquivo só, navegadas pelo endereço:

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
├── dados/conteudo.js      ← conteúdo publicado (gerado pelo painel)
├── assets/                ← fotos, se preferir referenciá-las por caminho
└── README.md
```

## 1. Pedido pelo WhatsApp

O cliente clica no **+** sobre a foto do produto (na home ou no catálogo) ou escolhe a quantidade dentro da ficha do produto. O contador aparece no ícone do carrinho, no topo.

Em `#/carrinho` ele ajusta quantidades, remove itens, informa nome, entrega ou retirada e observações. O botão monta a mensagem e abre o WhatsApp da loja já com tudo escrito:

```
Olá! Gostaria de fazer um pedido pelo site:

• 2x Perfume Tal — R$ 179,80
• 1x Batom Tal — R$ 39,90

Total estimado: R$ 219,70

Nome: Maria
Entrega: Retirar na loja
Observações: cor rosé
```

O pedido fica salvo no navegador do cliente — se ele fechar e voltar depois, a lista continua lá. Produtos sem preço entram na lista como "a confirmar na conversa". Não há cobrança nem estoque: a negociação acontece no WhatsApp.

## 2. Painel do administrador

Abra `#/admin`. Senha inicial: **lamour2026** (troque em *Catálogo → Acesso ao painel*). Dez abas:

- **Identidade** — nome, assinatura, emoji do ícone, logotipo, as sete cores, tema escuro automático, fontes de título e texto.
- **Início** — textos da primeira tela, foto principal, frase de impacto, faixa deslizante.
- **Seções** — títulos e textos de cada bloco da home, cartões de cosméticos e de moda, benefícios, sobre, chamadas e rodapé.
- **Categorias** — criar, descrever, escolher foto, mostrar/ocultar.
- **Institucional** — capa, história, valores, galeria de fotos e o convite final da página `#/sobre`.
- **Contato** — WhatsApp e mensagem automática, telefone, e-mail, redes, endereço, Maps e horários linha a linha.
- **Catálogo** — textos, mostrar ou esconder preços, senha do painel.
- **Pedidos** — textos da página do carrinho, primeira linha da mensagem do WhatsApp, aviso do resumo e o que perguntar ao cliente (nome, entrega, observações, total).
- **Produtos** — cadastro completo: nome, categoria, descrição, preço, preço anterior, etiquetas, ordem, foto, ilustração de reserva, destaque na home e visível no catálogo.
- **Dados** — cópia de segurança, importação e o `conteudo.js` de publicação.

Cores e fontes mudam ao vivo; **Salvar alterações** grava o resto. Produtos são salvos no próprio formulário.

## 3. Onde o conteúdo fica salvo

**Publicado no Claude:** usa o banco do próprio artifact. O que o administrador salva vale para todo mundo que abrir o link, e as fotos ficam hospedadas junto. Só quem tem permissão de edição altera — sem senha.

**Hospedado por você (esta pasta):** as alterações ficam no navegador de quem editou. Para valerem para todos:

1. Painel → **Dados → Gerar conteudo.js do site**.
2. Substitua `dados/conteudo.js` pelo arquivo baixado.
3. Suba a pasta para a hospedagem.

Para catálogo grande, coloque as fotos em `assets/produtos/` e cole o caminho no campo de endereço da imagem, em vez de enviá-las pelo painel: o arquivo de conteúdo fica muito mais leve.

## 4. Imagens

Todo campo de foto aceita, nesta ordem: foto enviada pelo painel, endereço colado à mão, ou — se não houver nenhum — uma ilustração vetorial gerada pelo site na paleta da marca. Nenhuma tela quebra por falta de imagem. Fotos enviadas são reduzidas a 1400px e comprimidas.

## 5. Publicação

Site estático: Netlify, Vercel, GitHub Pages, Hostinger, cPanel. Nada para compilar. Antes de publicar, ajuste em `index.html` o `og:url`, o `og:image` e o bloco `application/ld+json` (acrescente `address` e `openingHours` quando estiverem definidos).

## 6. Segurança, com franqueza

A senha do painel na versão hospedada por você é uma trava de conveniência, não de segurança: o site é estático e quem lê o código a encontra. Ela evita mexidas acidentais. Se o catálogo virar algo crítico, o caminho é hospedagem com login de verdade — ou a versão publicada no Claude, onde a permissão é controlada pela plataforma.

## 7. O que continua em branco

Número do WhatsApp, endereço escrito, horários, redes sociais, preços, marcas e fotos reais. Nada foi inventado: cada um tem seu campo no painel.
