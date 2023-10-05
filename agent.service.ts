import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  constructor(private http: HttpClient) {}

  createAgent(agent: any): Observable<any> {
    // Define the headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // adjust content type as needed
      // Add any other headers you need
    });

    // Make an HTTP POST request with headers and return the Observable
    return this.http.post('https://api.esmacs.com/api/sc/1.0/set_agent', agent, { headers });
  }
}
