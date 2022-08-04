import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Status } from '../model/status';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.sass']
})
export class StatusComponent implements OnInit {

  status: Observable<Status[]>;

  constructor(private statuService: StatusService) {
    this.status = this.statuService.findAll();
  }

  ngOnInit(): void {
  }

}
