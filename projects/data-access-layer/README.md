📦 @smartbug/data-access-layer

The Data Access Layer (DAL) library provides a standard way to connect Angular applications to REST APIs.
It abstracts common CRUD operations (findAll, findById, save, update, deleteById) into a reusable APIRepository class.

✨ Features

✅ Standardized API access layer for Angular apps

✅ Built on Angular HttpClient

✅ Uses environment configs from @smartbug/environment

✅ Extendable with custom repositories

✅ Fully typed with generics

📦 Installation

    npm install @smartbug/data-access-layer @smartbug/environment

🔧 Setup

Import the provider in your app.config.ts or module:

    import { provideDataAccess } from '@smartbug/data-access-layer';

    export const appConfig: ApplicationConfig = {
      providers: [
        provideDataAccess()
      ]
    };

Configure environment via @smartbug/environment:

    import { provideEnvironment } from '@smartbug/environment';

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
1. Create a Repository

Extend APIRepository<T> to define your domain model:

    import { Injectable } from '@angular/core';
    import { APIRepository } from '@smartbug/data-access-layer';
    
    export interface User {
      id: string;
      name: string;
      email: string;
    }
    
    @Injectable({ providedIn: 'root' })
    export class UserRepository extends APIRepository<User> {
      protected readonly name = 'users';
    
      override parse(response: ApiResponse<User>): User[] {
        return response.data ?? [];
      }
    }

2. Use in Components or Services

        import { Component, inject, OnInit } from '@angular/core';
        import { UserRepository } from './user.repository';
      
        @Component({
          selector: 'app-users',
          template: `
            <ul>
              <li *ngFor="let user of users">{{ user.name }} ({{ user.email }})</li>
            </ul>
          `
        })

        export class UsersComponent implements OnInit {
        private readonly repo = inject(UserRepository);
        users: any[] = [];
      
        ngOnInit() {
          this.repo.findAll().subscribe(data => {
            this.users = data;
          });
        }
      }
  
