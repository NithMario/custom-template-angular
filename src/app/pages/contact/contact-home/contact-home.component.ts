import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Leads } from 'app/shared/_models/model-lead';
import { RestApiService } from 'app/shared/services/rest-api.service';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.scss']
})
export class ContactHomeComponent implements OnInit {
  nContact = new Leads();
  modalRef: BsModalRef;
  searchText;
  dataContacts: any;
  eContact: any = {};
  id:any
  constructor(private route: Router,
    private modalService: BsModalService,
    private http: HttpClient,
    private restApiService: RestApiService
  ) { }
  ngOnInit() {
    this.onGetContact();
  }

  onView() {
    // this.route.navigate(['contact/contactDetail'])
  }
  onNew(news) {
    this.modalRef = this.modalService.show(news, Object.assign({}, { class: 'gray modal-lg' }));
  }
  onSave() {
    this.restApiService.postByPath('/createcontact/', this.nContact).subscribe(res => {
      this.nContact = res;
      this.onGetContact();
      this.modalRef.hide();
      console.log(this.nContact);
    })
  }

  onDelete(id) {
    if (confirm("Are you sure to delete record id : " + id +"?")) {
      this.restApiService.deleteByPath('/deletecontact/'+id).subscribe(res => {
        this.onGetContact();
        console.log(res);
      })
    }
  }
  onCancel() {
    this.route.navigate(['lead']);
  }

  onGetContact() {
    this.restApiService.getByPath('/contact', {}).subscribe(res => {
      this.dataContacts = res;
      this.eContact = res;
    })

  }

  onEdit(edit, id: number) {
    this.id=id;
    this.modalRef = this.modalService.show(edit, Object.assign({}, { class: 'gray modal-lg' }));
    this.restApiService.getByPath('/contact/' + id, {}).subscribe(res => {
      this.eContact = res;
      console.log(id);

    })
  }

  eSave() {
    this.restApiService.postByPath('/updatecontact/' +this.id, this.eContact).subscribe(res => {
      this.eContact = res;
      this.onGetContact();
      this.modalRef.hide();
      console.log(res);
    })
  }

}
