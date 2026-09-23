# Onde colocar as fotos reais

O código já está pronto pra usar essas fotos — basta salvar os arquivos com
exatamente estes nomes nesta pasta (`public/images/`). Assim que o arquivo
existir, ele substitui o placeholder automaticamente, sem precisar mexer em
nenhum componente.

| Arquivo | Onde aparece | Sugestão de foto | Proporção recomendada |
|---|---|---|---|
| `hero.jpg` ✅ já preenchida | Topo da página — usada como "poster" (aparece antes/depois do vídeo carregar) | Já é um frame real tirado do vídeo que você enviou (cadeiras + letreiro). Pode trocar por outra foto se preferir. | Retrato ou paisagem, bem larga (mín. 1600px de largura) |
| `sobre.jpg` ✅ já preenchida | Seção "A barbearia" | Foto real: fachada da Kingeski Barbearia à noite, letreiro iluminado com a coroa dourada | 4:3, mín. 1200px de largura |
| `destaque.jpg` ✅ já preenchida | Seção "Marque seu horário na Kingeski" (o intervalo de destaque entre "Sobre" e "Avaliações") | Foto real: o letreiro "Kingeski Barbearia" com a coroa dourada, na parede de mármore | Larga, mín. 1600px de largura |
| `gallery/01.jpg`, `16.jpg`, `17.jpg` ✅ já preenchidas | Galeria (fotos ativas no grid) | Fotos reais: corte com desenho navalhado, cliente mirim brincando com dinossauros de brinquedo, dois clientes mirins nas poltronas sob o letreiro (ver `src/data/gallery.js` para a legenda de cada uma). `16.jpg` teve uma marca d'água de app removida do canto antes de entrar no site. | Quadrada ou 4:5, mín. 900px |
| `../og-image.jpg` (em `public/`, não em `images/`) | Prévia ao compartilhar o link (WhatsApp, Instagram, etc.) | Uma foto forte + a logo, formato horizontal | Exatamente 1200x630px |

Há também 12 fotos reais salvas em `gallery/02.jpg`, `03.jpg` e `04.jpg` a
`15.jpg` (barbeiro com clientes na cadeira, mais clientes mirins) que não
estão entrando na galeria por enquanto — ficaram só guardadas na pasta. É só
adicionar um item novo em `src/data/gallery.js` (com `size: 'lg' | 'md' |
'sm'`) pra colocar qualquer uma delas na página.

Formatos: prefira **.jpg** (fotos) otimizado — ideal abaixo de 300KB por
imagem para manter o site rápido. Se quiser o ganho extra de performance,
pode usar `.webp` no lugar do `.jpg` — só ajuste a extensão em
`src/data/gallery.js` e nos componentes `Hero.jsx`, `About.jsx` e
`VisualBreak.jsx` (campo `src`).

## Logo oficial

Quando tiver o arquivo vetorial (.svg) ou em alta resolução (.png) da logo
oficial da Kingeski, é só:

1. Salvar como `public/images/logo.svg` (ou `.png`).
2. Abrir `src/components/Logo.jsx` e trocar o texto pelo `<img src="/images/logo.svg" ... />`.

Até lá, a página usa um wordmark tipográfico ("Kingeski Barbearia" em texto,
com uma coroinha dourada — o mesmo detalhe do letreiro real) no lugar da logo.

## Vídeo do topo (Hero)

`public/videos/hero.mp4` está com a versão em qualidade melhor que você
mandou (a que passou por um app de upscaling). Dois ajustes que precisei
fazer nela antes de usar:

- O primeiro arquivo que você mandou tinha uma parte faltando de verdade —
  o próprio índice interno do vídeo dizia que deveria ter 22MB de imagem
  gravada, mas só tinham chegado 12,5MB (faltavam uns 9,5MB, quase metade).
  Confirmei isso com 4 métodos/ferramentas diferentes antes de concluir. Você
  mandou o arquivo de novo depois e esse veio completo — 22MB batendo
  certinho com o que o índice interno esperava, decodificando os ~20s
  inteiros sem nenhum erro. É esse arquivo completo que está sendo usado
  agora.
- Tinha uma marca d'água "Pippit AI" (do app usado pra melhorar a
  qualidade) no canto superior esquerdo o vídeo inteiro — cortei essa faixa
  fora (não dá pra deixar isso visível no site do cliente). Fora esse corte
  de faixa, a resolução original foi mantida (sem reduzir/comprimir o
  tamanho da imagem).

O resultado é um loop de ~19,9s (os 20s originais), H.264, ~15MB, com
`faststart`. Toca mudo em loop como fundo da primeira dobra — `hero.jpg` é
o quadro que aparece antes do vídeo carregar (e pra quem prefere menos
movimento na tela). No desktop (telas largas) ele ocupa a faixa direita da
tela; no celular ele cobre a tela inteira. Não tem nenhum escurecimento por
cima do vídeo — a legibilidade do texto vem de um painel/cartão sólido só
atrás do próprio texto, nunca de um filtro escuro sobre a imagem.

Pra trocar por outro vídeo, é só substituir o arquivo mantendo o nome
`hero.mp4` (sem marca d'água de app nenhum, de preferência já sem cortes
manuais que eu precise refazer).

## Ícones (favicon / PWA)

`favicon-32.png`, `apple-touch-icon.png`, `icon-192.png` e `icon-512.png`
também precisam ser regerados a partir do monograma ou da logo oficial —
por ora o site usa só o `favicon.svg` (funciona na grande maioria dos
navegadores modernos).
