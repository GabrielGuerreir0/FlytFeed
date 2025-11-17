// ...existing code...

# Flyfeed

Flyfeed é um projeto de exemplo que demonstra conceitos fundamentais de React com Vite e TypeScript. Ele contém uma interface simples de feed com posts, comentários e componentes reutilizáveis, ideal para estudar estruturas de componentes, estado local e tipagem em TypeScript.

## Tecnologias

- React + TypeScript
- Vite (dev server e build)
- date-fns (formatação de datas)
- CSS Modules (estilos por componente)
- ESLint (sugestão de lint)
- Node.js (ambiente de execução)

## Recursos implementados

- Renderização de lista de posts com conteúdo tipado.
- Criação e exclusão de comentários (estado local).
- Validação de formulário e textarea controlado.
- Formatação de datas com locale pt-BR.
- Componentes: Header, Sidebar, Post, Comment, Avatar.

## Pré-requisitos

- Node.js (recomenda-se v18+ ou conforme seu package.json)
- pnpm, npm ou yarn

## Instalação e execução (exemplos)

Com pnpm:

```sh
pnpm install
pnpm dev
```

Com npm:

```sh
npm install
npm run dev
```

Build de produção:

```sh
npm run build
npm run preview
```

## Scripts úteis (consultar package.json)

- dev: inicia o servidor de desenvolvimento (Vite)
- build: gera a versão de produção
- preview: serve o build localmente
- lint: executa verificações de lint (se configurado)

## Estrutura do projeto (resumo)

- src/
  - main.tsx — ponto de entrada do app
  - App.tsx — composição principal e dados de exemplo
  - components/
    - Header.tsx
    - Sidebar.tsx
    - Post.tsx
    - Comment.tsx
    - Avatar.tsx
    - \*.module.css — estilos por componente
  - global.css — estilos globais

## Tipos e cuidados com TypeScript

- Os posts usam um tipo `Content` com union literal para `type` ("paragraph" | "link"). Garanta que os objetos passem exatamente essas strings para evitar erros de tipagem.
- Quando passar dados literais para props tipadas, prefira definir os tipos explicitamente (ex.: `const posts: PostType[] = [...]`) para preservar os literal types.

## Boas práticas e recomendações

- Use keys estáveis (id) em listas ao invés do index para evitar problemas no re-render.
- Evite mutações diretas do estado — use funções imutáveis (spread, filter, map).
- Adicione testes unitários para lógica de gerenciamento de comentários e componentes críticos.
- Configure regras TypeScript-aware no ESLint para melhor segurança de tipo.

## Contribuição

1. Fork do repositório.
2. Criar branch com feature/bugfix.
3. Rodar localmente e garantir que lint/build passam.
4. Abrir PR com descrição clara das alterações.

## Dicas de debugging

- Se o TypeScript reclamar de literais (ex.: `type` ser `string` e não `"paragraph" | "link"`), tipar a constante (`const posts: PostType[] = [...]`) ou usar `as const` quando apropriado.
- Reinicie o servidor TypeScript no VS Code se mudanças de tipos não refletirem (Command Palette → "TypeScript: Restart TS Server").
- Verifique se `date-fns` está instalado (`npm ls date-fns`) antes de importar locales.
