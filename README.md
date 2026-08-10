<div align="center">

  <h1>Portfolio - Kelvin Lemos</h1>

  <p>
    <strong>Portfólio pessoal</strong> — one-page desenvolvida com <strong>React</strong>, <strong>Vite</strong> e
    <strong>Tailwind CSS</strong>, totalmente bilíngue (PT-BR / EN), com animações suaves, seção de projetos,
    blog e formulário de contato funcional.
  </p>

  <br/>

  <a href="https://kelvinlemosportfolio.vercel.app/">
    <img alt="Deploy" src="https://img.shields.io/badge/vercel-deployed-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
  </a>
  <a href="https://github.com/kelvinlemos7/portfolio">
    <img alt="GitHub repo" src="https://img.shields.io/badge/GitHub-repo-181717?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  <img alt="React 19" src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img alt="Vite 6" src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img alt="Tailwind CSS 3" src="https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer%20Motion-11-0055FF?style=for-the-badge&logo=framer&logoColor=white"/>
  <img alt="PT-BR / EN" src="https://img.shields.io/badge/i18n-PT%20BR%20%2F%20EN-8B5CF6?style=for-the-badge"/>

  <br/><br/>

  <p align="center">
    <a href="#sobre">Sobre</a> ·
    <a href="#funcionalidades">Funcionalidades</a> ·
    <a href="#tech-stack">Tech Stack</a> ·
    <a href="#i18n">i18n</a> ·
    <a href="#estrutura-do-projeto">Estrutura</a> ·
    <a href="#secoes">Seções</a> ·
    <a href="#como-rodar">Como rodar</a> ·
    <a href="#deploy">Deploy</a> ·
    <a href="#roadmap">Roadmap</a> ·
    <a href="#autor">Autor</a>
  </p>

</div>

---

# Portfolio - Kelvin Lemos

## Sobre

Uma one-page **escura e moderna** para apresentar o trabalho do **Kelvin Lemos** (aka Kelvin Kauan),
**Engenheiro de Software** focado em **back-end**, arquitetura de sistemas e boas práticas de desenvolvimento.

O site reúne em um único lugar:

- Apresentação pessoal e disponibilidade para novos projetos;
- Habilidades técnicas (marquee animado no desktop, grid no mobile);
- Dois projetos em destaque com tecnologias e links (GitHub / live);
- Blog com artigos técnicos publicados no LinkedIn;
- Formulário de contato funcional via **Formspree**;
- Troca de idioma **PT-BR / EN** sem recarregar a página.

> Acesse: <a href="https://kelvinlemosportfolio.vercel.app/">https://kelvinlemosportfolio.vercel.app/</a>

---

## Funcionalidades

- **Bilíngue (PT-BR / EN)** — toggle no canto superior direito que troca todo o conteúdo instantaneamente, com persistência via `localStorage`;
- **Hero interativo** — gradiente radial que acompanha o mouse (com `requestAnimationFrame`), partículas flutuantes e grade de fundo;
- **Scroll reveal** — animações de entrada das seções via `whileInView` do Framer Motion;
- **Marquee de skills** — carrossel infinito de tecnologias no desktop e grid animado no mobile;
- **Cards de projetos** — hover com zoom na imagem, overlay com atalhos para GitHub e demo ao vivo;
- **Blog integrado** — cards com imagem, categoria, data, tempo de leitura e link para o artigo completo no LinkedIn;
- **Formulário de contato** — envio real de mensagens via Formspree, com estados de loading, sucesso e erro;
- **Design responsivo** — mobile, tablet e desktop;
- **Footer completo** — redes sociais, voltar ao topo e navegação por âncoras;
- **Performance** — React 19, chunks otimizados pelo Vite, fontes e ícones otimizados.

---

## Tech Stack

| Tecnologia           | Finalidade                                        |
| -------------------- | ------------------------------------------------- |
| **React 19**         | Componentes, hooks e estado                       |
| **Vite 6**           | Bundler e dev server ultra rápido                 |
| **Tailwind CSS 3**   | Estilização utilitária responsiva                 |
| **Framer Motion**    | Animações e transições suaves                     |
| **Radix UI**         | Primitivas acessíveis (Dialog, Slot, Toggle, ...) |
| **lucide-react**     | Ícones SVG leve e consistente                     |
| **clsx / cva / tailwind-merge** | Composição de classes utilitárias      |
| **Formspree**        | Envio de mensagens do formulário de contato       |
| **Vercel**           | Hospedagem e deploy contínuo                      |
| **Git / GitHub**     | Versionamento e CI/CD                             |

**Habilidades exibidas no site:** Java, Spring Boot, Python, FastAPI, JavaScript, MySQL, Docker e Git.

---

## i18n

O projeto tem um sistema de internacionalização próprio e leve (sem dependências externas):

- `src/lib/i18n.js` — dicionário com todas as traduções em `pt` e `en`, organizadas por seção;
- `src/context/LanguageContext.jsx` — `LanguageProvider` + hook `useLanguage()`;
- Persistência da preferência em `localStorage` sob a chave `lang`;
- `document.documentElement.lang` é atualizado junto com o idioma;
- Helper `t('chave.de.acesso')` com fallback automático para o português.

```js
const { t, language, setLanguage } = useLanguage();
return <h1>{t('hero.name')}</h1>;
```

---

## Estrutura do Projeto

```
portfolio/
├── public/                        # Assets públicos (favicons)
├── src/
│   ├── assets/                    # Imagens (kelvin.jpg, agillis.jpeg)
│   ├── components/
│   │   ├── LanguageToggle.jsx     # Toggle PT/EN
│   │   ├── portfolio-app/         # Seções da página
│   │   │   ├── HeroSection.jsx    # Home + hero interativo
│   │   │   ├── AboutSection.jsx   # Sobre mim
│   │   │   ├── SkillsSection.jsx  # Habilidades (marquee)
│   │   │   ├── ProjectsSection.jsx# Projetos em destaque
│   │   │   ├── BlogSection.jsx    # Artigos recentes
│   │   │   ├── ContactSection.jsx # Formulário + redes
│   │   │   └── Footer.jsx         # Rodapé
│   │   └── ui/                    # Primitivas estilo shadcn/ui
│   │       ├── button.jsx
│   │       ├── input.jsx
│   │       ├── textarea.jsx
│   │       └── ...                # Radix UI + Tailwind
│   ├── context/
│   │   └── LanguageContext.jsx    # Provider + hook de idioma
│   ├── hooks/
│   │   └── use-mobile.jsx         # Detecção de dispositivo móvel
│   ├── lib/
│   │   ├── i18n.js                # Dicionário de traduções
│   │   └── utils.js               # cn() (clsx + tailwind-merge)
│   ├── utils/
│   │   └── index.ts
│   ├── App.jsx                    # Componente raiz
│   ├── main.jsx                   # Entrada da aplicação
│   ├── index.css                  # Estilos globais
│   └── App.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js                 # Alias @ -> ./src + base por modo
└── eslint.config.js
```

---

## Seções

### Hero
- Badge "Disponível para novos projetos";
- Nome com gradiente e papel (Software Engineer);
- CTAs: "Ver meus projetos" e "Entre em contato";
- Background com gradiente que segue o mouse, partículas e grid;
- Indicador de scroll animado.

### Sobre mim
- Texto pessoal sobre back-end, arquitetura e evolução contínua;
- Highlights: Front-end, Back-end, Database, Git & Docker;
- Badges "Back-end focused" e "APIs & systems".

### Habilidades
- Marquee infinito com ícones das tecnologias (desktop);
- Grid animado de cards (mobile).

### Projetos

| Projeto            | Tecnologias                     | Links                            |
| ------------------ | ------------------------------- | -------------------------------- |
| **Bank System API**| Python, FastAPI, MySQL          | [GitHub](https://github.com/kelvinlemos7/bank-system) |
| **Agillis**        | Java, Spring Boot, MySQL, Docker, VPS Oracle | [Live](https://www.agillis.app/login) |

- Botão "Ver todos os projetos" aponta para os repositórios do GitHub.

### Blog
Artigos técnicos reais publicados no LinkedIn, com data, tempo de leitura e categoria:

- **Saí de Python pra Java, e foi mais fácil do que eu imaginava** — Linguagens;
- **Vale a pena estudar Java em 2026?** — Mercado;
- **Git na prática: erros que quase todo iniciante comete** — Versionamento.

### Contato
- Formulário funcional (Formspree) com validação e feedback visual;
- Localização: São Paulo, Brasil — disponível para trabalho remoto;
- Links para GitHub, LinkedIn e e-mail;
- Badge de disponibilidade animado.

---

## Como Rodar

Pré-requisitos: **Node.js 18+** e **npm**.

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento (http://localhost:5173)
npm run dev

# 3. Build de produção
npm run build

# 4. Pré-visualizar o build
npm run preview

# 5. Lint
npm run lint
```

---

## Deploy

### Vercel (atual)
O projeto está hospedado na Vercel, com deploy automático a partir da branch `main`.

```
https://kelvinlemosportfolio.vercel.app/
```

### GitHub Pages (alternativa)
Há scripts prontos para publicar também no GitHub Pages:

```bash
npm run predeploy   # vite build --mode github  (base /portfolio/)
npm run deploy      # gh-pages -d dist
```

---

## Roadmap

- [x] Site bilíngue (PT-BR / EN)
- [x] Formulário de contato funcional
- [x] Marquee de habilidades
- [x] Deploy na Vercel
- [ ] Navbar fixa com menu de navegação
- [ ] Dark/light mode
- [ ] Página de detalhe por projeto
- [ ] SEO + Open Graph
- [ ] Mais projetos e artigos

---

## Autor

**Kelvin Lemos (Kelvin Kauan)** — Engenheiro de Software em formação, focado em back-end, desenvolvimento web moderno e boas práticas de código.

[![GitHub](https://img.shields.io/badge/GitHub-kelvinlemos7-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kelvinlemos7)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-kelvinkauan-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kelvinkauan/)
[![E-mail](https://img.shields.io/badge/E--mail-kelvinkauan17%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kelvinkauan17@gmail.com)

---

<div align="center">

Feito com React, Vite, Tailwind CSS e muita dedicação.

</div>
