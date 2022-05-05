import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { UserSignUp } from '../classes/userSignUp';
import { Observable } from 'rxjs';
import { Ticket } from '../classes/ticket';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  allTickets: Ticket[]
  constructor(private http: HttpClient, private authService: AuthService) {}

  registerUser(user: UserSignUp): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post('http://localhost:8080/users/signUp', user, {
      headers: headers,
    });
  }

  createTicket(ticket: Ticket){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post('http://localhost:8080/tickets/', ticket, {
      headers: headers,
    });
  }


  getAllTickets(){
    return this.http.get('http://localhost:8080/tickets/')
  }


  editTicket(id: string, ticket: Ticket){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
 
    return this.http.put(`http://localhost:8080/tickets/${id}`, ticket,{
      headers: headers,
    });
  }

  resolvedTicket(ticket: Ticket) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    return this.http.post(`http://localhost:8080/tickets/resolved`, ticket,{
      headers: headers,
    });
  }

}
