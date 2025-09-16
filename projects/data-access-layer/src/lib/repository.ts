import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse, EntityID } from './types';
import { EnvironmentService } from '@smartbug/environment';

export type Segment = number | string;

@Injectable()
export abstract class APIRepository<T> {

  protected readonly envService = inject(EnvironmentService);
  protected readonly http = inject(HttpClient);

  /**
   * Each repository must define its resource name,
   * e.g. "users", "orders", "employees"
   */
  protected abstract readonly name: string;

  /**
   * Subclasses must implement how API responses are parsed into entities.
   */
  abstract parse(response: ApiResponse<T>): T[];

  /**
   * Which context to use? Defaults to "api".
   * Subclasses can override this if needed.
   */
  protected contextKey = 'api';

  protected get context() {
    return this.envService.getContext(this.contextKey) ?? { name: '', port: 80 };
  }

  protected get host() {
    return this.envService.getHost();
  }

  /**
   * Build full API endpoint dynamically from environment config.
   */
  protected buildEndpoint(segments: Segment[] = []): string {
    const portPart = this.context.port ? `:${this.context.port}` : '';
    const base = `${this.host}${portPart}/${this.context.name}/${this.name}`;
    return segments.length ? `${base}/${segments.join('/')}` : base;
  }

  findAll(): Observable<T[]> {
    return this.http
      .get<ApiResponse<T>>(this.buildEndpoint())
      .pipe(map((res) => this.parse(res)));
  }

  save<S extends T>(entity: T): Observable<S> {
    return this.http.post<S>(this.buildEndpoint(), entity);
  }

  update<S extends T>(id: EntityID, entity: T): Observable<S> {
    return this.http.put<S>(this.buildEndpoint([id]), entity);
  }

  findById(id: EntityID): Observable<T> {
    return this.http.get<T>(this.buildEndpoint([id]));
  }

  deleteById(id: EntityID): Observable<unknown> {
    return this.http.delete<unknown>(this.buildEndpoint([id]));
  }
}
