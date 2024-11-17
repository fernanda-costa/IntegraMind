# IntegraMind

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Estrutura de pastas

src/
├── app/
│   ├── core/                # Serviços e módulos essenciais que são únicos na aplicação
│   │   ├── guards/          # Guards de rota
│   │   ├── interceptors/    # Interceptadores HTTP
│   │   ├── services/        # Serviços globais (ex: AuthService)
│   │   ├── models/          # Interfaces e tipos globais
│   │   └── core.module.ts   # Módulo Core
│   │
│   ├── shared/              # Componentes, pipes e módulos reutilizáveis
│   │   ├── components/      # Componentes compartilhados
│   │   ├── directives/      # Diretivas compartilhadas
│   │   ├── pipes/           # Pipes compartilhados
│   │   └── shared.module.ts # Módulo Shared
│   │
│   ├── features/            # Módulos específicos das funcionalidades (feature modules)
│   │   ├── home/            # Módulo de Home (exemplo)
│   │   │   ├── components/  # Componentes específicos da funcionalidade
│   │   │   ├── services/    # Serviços específicos da funcionalidade
│   │   │   ├── pages/       # Páginas/containers (ex: HomePage)
│   │   │   └── home.module.ts
│   │   └── auth/            # Módulo de Autenticação (exemplo)
│   │       ├── components/
│   │       ├── services/
│   │       ├── pages/
│   │       └── auth.module.ts
│   │
│   ├── layout/              # Componentes de layout (ex: Navbar, Footer)
│   │   ├── navbar/
│   │   ├── footer/
│   │   └── layout.module.ts
│   │
│   ├── state/               # Gerenciamento de estado (NgRx ou outro)
│   │   ├── actions/
│   │   ├── reducers/
│   │   ├── selectors/
│   │   └── effects/
│   │
│   ├── app-routing.module.ts
│   └── app.module.ts
│
├── assets/                  # Recursos estáticos (imagens, fontes, etc.)
│   ├── images/
│   ├── styles/              # SCSS global
│   └── fonts/
│
├── environments/            # Configurações de ambiente
│   ├── environment.ts
│   └── environment.prod.ts
│
├── index.html
├── main.ts
└── styles.scss
