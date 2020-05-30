import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'app/shared/_models/model-user';
import { RestApiService } from 'app/shared/services/rest-api.service';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {
  users: any = [];
  nUser: any = {};

  modalRef: BsModalRef;
  myfile = [];
  dataUser: any;
  @Input() files = [];
  @Input() multipleUpload: boolean = false;
  @Input() testing: any = {};
  constructor(
    private modalService: BsModalService,
    public http: HttpClient,
    private route: Router,
    private restApiService: RestApiService
  ) { }

  ngOnInit() {
    this.getUsers();
    console.log('nUser OBJ', this.nUser.name);
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
  onDelete(id) {
    let user_info = JSON.parse(localStorage.getItem('user_info'));
    console.log('user info', user_info.user);
    if (confirm("Are you sure to delete " + id)) {
      if (id && user_info.user === 'admin') {
        this.restApiService.deleteByPath('/deleteuser/' + id).subscribe(res => {
          console.log(res);
        });
      }
      else {
        alert('you might be not a admin');
      }
    }

  }
  onCancel() {
    this.route.navigate(['/lead']);
  }




  // image 
  onSelect(event) {
    // console.log(this.multipleUpload);
    // console.log(event);
    if (this.multipleUpload == false && this.files.length > 0) {
      this.files.splice(this.files.indexOf(this.files[0]), 1);
      this.files.push(...event.addedFiles);
      // this.nUser.image =this.files
    }
    else {
      this.files.push(...event.addedFiles);
    }
  }
  onRemove(event) {
    console.log('EVENT', event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  getUsers() {
    this.restApiService.getByPath('/users', {}).subscribe(res => {
      console.log(res);
      this.users = res;

    })
  }

  // onDeleteUser(){
  //   this.http.delete('http://127.0.0.1:8000/api/users')
  // }
  onCreateUser() {

    this.restApiService.postByPath('/register', this.nUser).subscribe(res => {
      console.log(res);
    })


  }

  onDeleteUser(id) {
    this.http.delete('http://127.0.0.1:8000/api/delete').subscribe(res => {
      console.log(res);
    })
  }





}
