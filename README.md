# Kingeski Barbearia — Landing Page

Landing page premium da Kingeski Barbearia (Osório/RS), feita em **React + Vite + Tailwind CSS**.

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Para gerar a versão de produção (pasta `dist/`, pronta pra publicar):

```bash
npm run build
npm run preview   # opcional, testa o build localmente
```

`dist/` pode ser publicada em qualquer host de site estático (Netlify, Vercel, Cloudflare Pages, etc.) — é só arrastar a pasta ou conectar o repositório.

## O que editar antes de publicar

Tudo que muda com frequência está centralizado em `src/data/`. **Não precisa mexer nos componentes** pra atualizar essas informações:

- **`src/data/business.js`** — WhatsApp, telefone, endereço, horário de funcionamento, link do Google (avaliações). Tem alguns campos marcados `// TODO` que ainda usam valor de exemplo (o número de WhatsApp é o mais importante — ele aparece em botões pela página inteira).
- **`src/data/services.js`** — catálogo de serviços (nome, descrição, preço), ainda não usado em nenhuma seção da página (a seção "Serviços" foi removida). Fica aqui pronto caso queira reativar uma seção de serviços/preços mais adiante.
- **`src/data/reviews.js`** — depoimentos de clientes. Também começa vazio — a seção "Avaliações" mostra a nota do Google até você preencher aqui com trechos reais.
- **`src/data/gallery.js`** — legenda e ordem das fotos da galeria.

### Fotos e vídeo

Veja `public/images/README.md` — lista exatamente qual arquivo salvar e onde ele aparece (hero, sobre, galeria, etc.), incluindo o vídeo do topo. Enquanto a foto/vídeo não existir, a página mostra um painel de espera elegante no lugar (não é uma foto de banco de imagens genérica).

## Por que várias informações estão como placeholder

Não tive acesso ao conteúdo do Instagram (@kingeskibarbearia) nem ao painel do Google Business da Kingeski — o Instagram bloqueia esse tipo de acesso automatizado, e o Google Maps não ficou disponível pra consulta neste momento. Por isso a página **não inventa** serviços, preços, fotos ou depoimentos: ela foi montada com a identidade e o conteúdo que você me passou (nome, endereço, horário) e deixada pronta pra você completar o resto em poucos minutos, editando só os arquivos de `src/data/` e adicionando as fotos.

Itens que precisam da sua confirmação antes de publicar:

- [ ] Número de WhatsApp real (`business.js`)
- [ ] Telefone comercial, se houver (`business.js`)
- [ ] Paleta de cores definitiva — a atual (preto + off-white + bronze/dourado) é uma proposta premium coerente com barbearias do segmento; ajuste em `tailwind.config.js` se a identidade oficial da Kingeski usar outras cores
- [ ] Logo oficial (veja `public/images/README.md`) — a coroa dourada ao lado do texto é só um toque baseado no letreiro real, não substitui o arquivo oficial
- [x] Vídeo/foto do Hero — já são reais, montados a partir do vídeo do interior da barbearia que você mandou
- [x] Fotos da seção "Sobre" e da galeria — já são reais (fotos que você mandou: letreiro/ambiente, música ao vivo, entrada em dia de evento, clientes mirins)
- [x] Foto real pra `destaque.jpg` — já é o letreiro Kingeski com a coroa na parede de mármore
- [ ] Depoimentos reais de clientes (`reviews.js`)
- [ ] Domínio definitivo do site — atualize as tags `canonical`/Open Graph/Schema.org em `index.html` (hoje usam `https://www.kingeskibarbearia.com.br/` como placeholder)

## Estrutura do projeto

```
src/
  data/        → business.js, services.js, gallery.js, reviews.js (edite aqui)
  components/  → Navbar, Hero, Experience, VisualBreak, Gallery, About,
                 Reviews, Location, Footer,
                 WhatsAppButton, ScrollTop, SmartImage, Reveal, SectionHeading, Logo
  hooks/       → useReveal (animação de entrada)
  lib/         → asset.js (resolve caminhos de imagem/vídeo em qualquer hospedagem)
public/
  images/      → fotos (veja o README dentro da pasta)
  videos/      → vídeo do Hero
  favicon.svg, site.webmanifest, robots.txt
```

## Tecnologia

React 18 + Vite 5 + Tailwind CSS — sem bibliotecas de animação ou UI pesadas; as
animações de entrada usam `IntersectionObserver` nativo e respeitam
`prefers-reduced-motion`. O efeito do título no Hero ("letras chegando") é
feito com CSS puro (keyframes + stagger via JS), também sem biblioteca. SEO
técnico (title, description, Open Graph, Twitter Card, canonical, Schema.org
`BarberShop`) já configurado em `index.html`.
