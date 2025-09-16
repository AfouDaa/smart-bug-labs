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

