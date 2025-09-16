# 🐞 Smart Bug Labs

Smart Bug Labs is a **monorepo of Angular libraries** published under the [`@smartbug`](https://www.npmjs.com/org/smartbug) npm organization.  
It provides **environment configuration**, **data access utilities**, and **UI components** to accelerate enterprise Angular development.

---

## 📦 Packages

### 1. [`@smartbug/environment`](https://www.npmjs.com/package/@smartbug/environment)
Manage runtime configuration (host, contexts, production flag) in Angular apps.  
- Centralized environment setup  
- Injectable `EnvironmentService`  
- Works seamlessly with other `@smartbug` libs  

➡️ [View Documentation](projects/environment/README.md)

---

### 2. [`@smartbug/data-access-layer`](https://www.npmjs.com/package/@smartbug/data-access-layer)
A standard data access layer built on Angular `HttpClient`.  
- Abstracted CRUD methods (`findAll`, `findById`, `save`, `update`, `deleteById`)  
- Extensible `APIRepository<T>` base class  
- Integrates with `@smartbug/environment`  

➡️ [View Documentation](projects/data-access-layer/README.md)

---

### 3. `@smartbug/ui` (coming soon 🚧)
A set of reusable Angular UI components (buttons, sidebars, modals, etc.).  
- Built with Angular standalone APIs  
- Compatible with Angular signals  
- Designed for consistency across projects  

---

## 🚀 Getting Started

Clone the repo:
```bash
git clone https://github.com/AfouDaa/smart-bug-labs.git
cd smart-bug-labs





🧑‍💻 Usage in a Project

Install from npm:

npm install @smartbug/environment @smartbug/data-access-layer


Example setup in main.ts:

import { provideEnvironment } from '@smartbug/environment';
import { provideDataAccess } from '@smartbug/data-access-layer';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideEnvironment({
      host: 'http://localhost',
      production: false,
      contexts: {
        api: { name: 'api', port: 8000 }
      }
    }),
    provideDataAccess()
  ]
});

📚 Monorepo Structure
smart-bug-labs/
 ├─ projects/
 │   ├─ environment/        # Environment config lib
 │   ├─ data-access-layer/  # Data access / API repo lib
 │   ├─ ui/                 # UI components lib (coming soon)
 ├─ dist/                   # Built libraries
 ├─ package.json
 └─ angular.json

🛠️ Development Workflow

Create a new library:

ng generate library <lib-name>


Build the library:

ng build <lib-name>


Publish to npm:

cd dist/<lib-name>
npm publish --access public --otp=123456

🤝 Contributing

Contributions are welcome! Please:

Fork the repo

Create a feature branch

Submit a pull request 🚀

⚖️ License

MIT © Smart Bug Labs
