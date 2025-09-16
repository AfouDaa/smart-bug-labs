📦 @smartbug/environment

The Environment Library provides a centralized way to manage runtime configuration in Angular applications.
It helps you define API contexts, hosts, and production flags, making it easy to switch between environments (dev, staging, prod).

✨ Features

✅ Define environment configuration in one place

✅ Typed with Environment, Context, and Contexts interfaces

✅ Injectable EnvironmentService for runtime access

✅ Works seamlessly with @smartbug/data-access-layer



📦 Installation

    npm install @smartbug/environment

🔧 Setup

   Provide the environment configuration at app bootstrap:


    import { provideEnvironment } from '@smartbug/environment';
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
        })
      ]
    });

🏗️ Usage

Inject the Service

    import { Component, inject } from '@angular/core';
    import { EnvironmentService } from '@smartbug/environment';
    
    @Component({
      selector: 'app-root',
      template: `
        <h1>Environment Info</h1>
        <p>Host: {{ host }}</p>
        <p>Production: {{ isProd }}</p>
      `
    })
    export class AppComponent {
      private readonly env = inject(EnvironmentService);
    
      host = this.env.getHost();
      isProd = this.env.isProduction();
    }


EnvironmentService

Method	Description

    getContext(name)	Returns a specific context by name
    getContexts()	Returns all defined contexts
    getHost()	Returns the host string (e.g. http://api)
    isProduction()	Returns true if running in production mode

⚖️ License

MIT © SmartBug Labs
