import "../v4.css";

// Teste da seção 2 do artigo: o que a IA sugere e não funciona no v4.
// Cada linha tem a versão que a IA sugere (errada) e a versão do v4 (certa).
// Resultado esperado: a coluna "v4" mostra o efeito; a coluna "IA" não.

function Linha({
  titulo,
  esperado,
  ia,
  v4,
}: {
  titulo: string;
  esperado: string;
  ia: React.ReactNode;
  v4: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr] items-center gap-4 border-b py-4">
      <div>
        <code className="text-sm font-semibold">{titulo}</code>
        <p className="text-xs text-zinc-600">{esperado}</p>
      </div>
      <div>{ia}</div>
      <div>{v4}</div>
    </div>
  );
}

export default function ErrosIaTeste() {
  return (
    <main className="min-h-screen bg-white p-10 text-zinc-900">
      <h1 className="text-2xl font-bold">Teste: o que a IA sugere e não funciona</h1>
      <div className="mt-6 grid grid-cols-[1fr_1fr_1fr] gap-4 border-b pb-2 text-sm font-bold">
        <span>Caso</span>
        <span>IA sugere</span>
        <span>v4</span>
      </div>

      <Linha
        titulo="disabled:(...)"
        esperado="Botão desabilitado: só a coluna v4 fica cinza."
        ia={
          <button disabled className="bg-blue-600 px-3 py-1 text-white disabled:(bg-gray-400 cursor-not-allowed)">
            Desabilitado
          </button>
        }
        v4={
          <button disabled className="bg-blue-600 px-3 py-1 text-white disabled:bg-gray-400 disabled:cursor-not-allowed">
            Desabilitado
          </button>
        }
      />

      <Linha
        titulo="bg-gradient-to-r"
        esperado="Renomeado para bg-linear-to-r. No 4.3.4 a classe antiga AINDA gera CSS (alias obsoleto): confira se as duas barras aparecem."
        ia={<div className="h-8 bg-gradient-to-r from-blue-600 to-red-600" />}
        v4={<div className="h-8 bg-linear-to-r from-blue-600 to-red-600" />}
      />

      <Linha
        titulo="bg-[--minha-cor]"
        esperado="Sintaxe nova: bg-(--minha-cor). A antiga compila para um valor inválido (background-color:--minha-cor), então não pinta nada e não dá erro."
        ia={<div style={{ "--minha-cor": "#16a34a" } as React.CSSProperties} className="h-8 bg-[--minha-cor]" />}
        v4={<div style={{ "--minha-cor": "#16a34a" } as React.CSSProperties} className="h-8 bg-(--minha-cor)" />}
      />

      <Linha
        titulo="shadow-sm / ring"
        esperado="A escala mudou: shadow-xs e ring-3 dão o visual antigo."
        ia={<div className="h-8 rounded shadow-sm ring" />}
        v4={<div className="h-8 rounded shadow-xs ring-3" />}
      />

      <Linha
        titulo="!bg-red-500 / bg-red-500!"
        esperado="Os dois devem ficar vermelhos (a forma antiga ainda funciona, só está obsoleta)."
        ia={<div className="h-8 bg-blue-600 !bg-red-500" />}
        v4={<div className="h-8 bg-blue-600 bg-red-500!" />}
      />

      <Linha
        titulo="first:*:pt-0 vs *:first:pt-0"
        esperado="A ordem inverteu e as duas compilam, com sentidos diferentes. first:*: = 'se a lista é o primeiro filho, afeta os filhos' (aqui zera os dois itens); *:first: = só o primeiro item."
        ia={
          <ul className="first:*:pt-0 *:pt-4 border">
            <li className="border-b">primeiro</li>
            <li>segundo</li>
          </ul>
        }
        v4={
          <ul className="*:first:pt-0 *:pt-4 border">
            <li className="border-b">primeiro</li>
            <li>segundo</li>
          </ul>
        }
      />

      <Linha
        titulo="border sem cor"
        esperado="No v4 a cor padrão é currentColor (texto escuro), não o cinza do v3."
        ia={<div className="border p-2">borda sem cor</div>}
        v4={<div className="border border-zinc-200 p-2">borda com cor explícita</div>}
      />

      <Linha
        titulo="@variant dentro do CSS"
        esperado="Passe o mouse: o cartão inverte as cores (@variant hover)."
        ia={<span className="text-xs text-zinc-600">(ver v4.css)</span>}
        v4={<div className="t6-cartao border p-2">passe o mouse</div>}
      />
    </main>
  );
}
