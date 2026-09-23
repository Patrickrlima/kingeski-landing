/**
 * Fotos da galeria — reais, enviadas pelo Bruno. Legendas descrevem só o que
 * dá pra ver na foto (sem inventar serviço, promoção ou identidade de quem
 * aparece). `size` controla o tamanho do bloco no grid: 'lg' | 'md' | 'sm' —
 * escolhido pra combinar com a proporção de cada foto. `position` (opcional)
 * é o CSS `object-position` do recorte, pra manter o detalhe importante da
 * foto visível quando o recorte automático (centralizado) cortaria ele.
 *
 * Layout atual (desktop): um bloco grande à esquerda (01) com dois blocos
 * pequenos embaixo dele (16, 17) — três blocos no total à esquerda — e o
 * vídeo de destaque à direita (ver `Gallery.jsx`, ele não vem daqui, é fixo
 * no componente), ocupando a mesma altura total da coluna esquerda (grande +
 * os dois pequenos). É por isso que a ordem dos itens aqui importa: o
 * primeiro ('lg') é o grande da esquerda, e os dois últimos ('sm') vêm
 * depois pra cair embaixo dele.
 *
 * `16.jpg` e `17.jpg` tiveram uma marca d'água de app de terceiro removida
 * do canto da foto antes de entrar no site.
 *
 * Há mais 12 fotos reais salvas em `public/images/gallery/` (`02.jpg` a
 * `15.jpg`, exceto a `04.jpg`/`05.jpg` que saíram do grid) que não estão
 * entrando neste grid por enquanto — é só adicionar um item aqui (com
 * `size`) pra colocar qualquer uma delas na página.
 */
const gallery = [
  {
    src: '/images/gallery/01.jpg',
    alt: 'Corte com desenho navalhado (risco em raio) na lateral, feito na Kingeski Barbearia',
    label: 'Foto: corte com desenho na navalha',
    size: 'lg',
    // Foto vertical — desce um pouco o foco pra manter a orelha e o
    // desenho navalhado (que ficam na metade de baixo) dentro do recorte.
    position: '55% 58%',
  },
  {
    src: '/images/gallery/16.jpg',
    alt: 'Criança brincando com dinossauros de brinquedo dentro de um carrinho, em frente à parede da Kingeski Barbearia',
    label: 'Foto: cliente mirim se divertindo na espera',
    size: 'sm',
  },
  {
    src: '/images/gallery/17.jpg',
    alt: 'Duas crianças sentadas nas poltronas pretas sob o letreiro da Kingeski Barbearia',
    label: 'Foto: clientes mirins nas poltronas da barbearia',
    size: 'sm',
  },
];

export default gallery;
