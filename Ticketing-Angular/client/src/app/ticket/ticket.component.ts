import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Ticket } from '../classes/ticket';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  model = new Ticket(
    '',
    '',
    '',
    '',
    '',
    this.authService.user.fullname,
    '',
    '',
    false,
    ''
  );

  displayedColumns: string[] = [
    'empname',
    'ticket_desc',
    'create_at',
    'updated_at',
    'deleted_at',
    'Edit',
    'Resolved',
  ];
  dataSource = new MatTableDataSource<Ticket>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getAllTickets();
  }

  getAllTickets() {
    this.userService.getAllTickets().subscribe((res) => {
      this.userService.allTickets = res as Ticket[];
      this.dataSource = new MatTableDataSource<Ticket>(
        this.userService.allTickets
      );
      this.dataSource.paginator = this.paginator;
    });
  }

  onTicketSubmit() {
    if (this.model._id === '') {
      this.userService.createTicket(this.model).subscribe((res) => {
        if (res) {
          this.emptyForm();
          this.getAllTickets();
        }
      });
    } else {
      this.userService
        .editTicket(this.model._id, this.model)
        .subscribe((res) => {
          if (res) {
            this.emptyForm();
            this.getAllTickets();
          }
        });
    }
  }

  onEditClick(element: any) {
    this.model = element;
  }

  emptyForm() {
    this.model.empid = '';
    this.model.ticket_desc = '';
  }

  onResolvedTicket(ticket: Ticket) {
    this.userService.resolvedTicket(ticket).subscribe((res) => {
      if (res) {
        this.getAllTickets();
      }
    });
  }
}
