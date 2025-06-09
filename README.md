# Portfolio José - Instruções de Uso

Este é um projeto de landing page profissional desenvolvido com Next.js e Tailwind CSS.

## Requisitos

- Node.js 18.0.0 ou superior
- npm ou yarn

## Instalação

1. Descompacte o arquivo ZIP em uma pasta de sua preferência
2. Abra um terminal na pasta do projeto
3. Execute o comando para instalar as dependências:

```bash
npm install
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

## Build para Produção

Para gerar uma versão otimizada para produção:

```bash
npm run build
```

Seguido por:

```bash
npm run start
```

## Hospedagem

Este projeto pode ser facilmente hospedado em plataformas como:

- Vercel (recomendado para projetos Next.js)
- Netlify
- GitHub Pages
- Qualquer outro serviço que suporte aplicações Next.js

### Hospedagem na Vercel

1. Crie uma conta na [Vercel](https://vercel.com)
2. Instale a CLI da Vercel: `npm i -g vercel`
3. Execute `vercel` na pasta do projeto e siga as instruções

## Personalização

### Cores e Estilos

As cores principais podem ser alteradas no arquivo `src/app/globals.css`:

```css
:root {
  --primary: #1E293B;    /* Cor de fundo principal */
  --secondary: #38BDF8;  /* Cor de destaque secundária */
  --accent: #8B5CF6;     /* Cor de destaque para botões e elementos importantes */
  --text-light: #F1F5F9; /* Cor de texto sobre fundos escuros */
  --text-dark: #334155;  /* Cor de texto sobre fundos claros */
}
```

### Conteúdo

O conteúdo pode ser editado nos seguintes arquivos:

- `src/components/Hero.tsx` - Seção inicial
- `src/components/Skills.tsx` - Habilidades e competências
- `src/components/Details.tsx` - Detalhes da trajetória profissional
- `src/components/Projects.tsx` - Projetos realizados
- `src/components/Mechanics.tsx` - Soluções técnicas e mecânicas
- `src/components/Events.tsx` - Eventos e participações
- `src/components/Contact.tsx` - Informações de contato

## Estrutura do Projeto

- `/src/app` - Configuração principal do Next.js
- `/src/components` - Componentes React reutilizáveis
- `/public` - Arquivos estáticos (imagens, fontes, etc.)

## Tecnologias Utilizadas

- Next.js 15
- React 19
- Tailwind CSS
- Framer Motion (animações)
- React Icons
- TypeScript
