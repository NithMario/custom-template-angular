import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Leads } from 'app/shared/_models/model-lead';
import { RestApiService } from 'app/shared/services/rest-api.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit {
  lead = new Leads();
  cancel: any;
  constructor(
    private route: Router,
    private restApiService: RestApiService
  ) { }
  ngOnInit() {

  }
  onSave() {
      this.restApiService.postByPath('/createlead', this.lead).subscribe();
      this.route.navigate(['/lead']);
  }
  onCancel() {
    this.route.navigate(['/lead']);
  }
}
