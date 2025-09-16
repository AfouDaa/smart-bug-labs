🐞 Smart Bug Labs

Smart Bug Labs is a monorepo of Angular libraries published under the @smartbug
 npm organization.
It provides environment configuration, data access utilities, and UI components to accelerate enterprise Angular development.

📦 Packages

Each library lives inside projects/ and is published individually to npm.

Package	Description	Docs
@smartbug/environment
	Manage runtime config (host, contexts, production flag)	Docs

@smartbug/data-access-layer
	Standard API data access layer with CRUD methods	Docs

@smartbug/ui (🚧 coming soon)	Reusable Angular UI components	Docs
🚀 Quick Start

Install from npm:

npm install @smartbug/environment @smartbug/data-access-layer


Bootstrap in your Angular app:

import { provideEnvironment } from '@smartbug/environment';
import { provideDataAccess } from '@smartbug/data-access-layer';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideEnvironment({
      host: 'http://localhost',
      production: false,
      contexts: { api: { name: 'api', port: 8000 } }
    }),
    provideDataAccess()
  ]
});

📚 Monorepo Layout
smart-bug-labs/
 ├─ projects/
 │   ├─ environment/        # Environment config lib
 │   ├─ data-access-layer/  # Data access / API repo lib
 │   ├─ ui/                 # UI components lib (coming soon)
 ├─ dist/                   # Built libraries
 ├─ package.json
 └─ angular.json

🛠️ Development

Build a library:

ng build environment


Publish to npm:

cd dist/environment
npm publish --access public --otp=123456

🤝 Contributing

Contributions are welcome! Please:

Fork the repo

Create a feature branch

Submit a pull request 🚀

⚖️ License

MIT © Smart Bug Labs
