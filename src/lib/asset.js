/**
 * Resolve um caminho de arquivo público (ex: "/images/hero.jpg") para a URL
 * correta não importa onde o site esteja hospedado — na raiz do domínio
 * definitivo, num subcaminho, ou numa prévia (como o link de revisão que eu
 * mando aqui na conversa). Sem isso, um caminho começando com "/" é sempre
 * relativo à RAIZ do domínio, então numa prévia hospedada em
 * "algumdominio.com/artifact/xyz/" esse "/" apontaria pra
 * "algumdominio.com/images/..." (que não existe) em vez de
 * "algumdominio.com/artifact/xyz/images/...".
 *
 * `import.meta.env.BASE_URL` vem do `base: './'` no vite.config.js — o Vite
 * já resolve isso certo pros assets que ele processa (imports de JS/CSS),
 * mas caminhos digitados como texto (strings), como em `data/gallery.js`
 * ou no `<video poster="...">` do Hero, precisam passar por aqui.
 */
export function asset(path) {
  if (!path) return path;
  // URL absoluta (http://, https://, data:) ou já relativa — não mexe.
  if (/^([a-z]+:)?\/\//i.test(path) || path.startsWith('data:') || path.startsWith('./') || path.startsWith('../')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
