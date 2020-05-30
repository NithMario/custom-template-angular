import { Component, OnInit, Input } from '@angular/core';
import 'moment/locale/pt-br';
import { HttpClient } from '@angular/common/http';
import { value } from 'app/shared/data/dropdowns';
import { Leads } from 'app/shared/_models/model-lead';
import { User } from 'app/shared/_models/model-user';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  // myfile = [];
  lead = new Leads();
  @Input() files = [];
  @Input() multipleUpload: boolean = false;
  @Input() testing: any = {};
  constructor(public http: HttpClient) { }
  ngOnInit() { }

  //   parentMessage:any = {} ;
  //   testing:any = '';
  //   Onupoad(){
  //     console.log('myfile',this.myfile[0]);
  //     let formData = new FormData();
  //     formData.append('file',this.myfile[0]);
  //     this.http.post('http://localhost/index.php',formData).subscribe(res=>{
  //       console.log(res);
  //     })
  //   }
  // onClick(){
  //   console.log('img',this.myfile);
  // }
  // val:any
  // onSubmit(email:HTMLInputElement,pass){
  //   let ee = email.value;
  //   let pp = pass.value;
  //   let l=localStorage.setItem(ee,pp)
  //   console.log(l)
  // }

  // onSubmit(email,pass){
  //   this.lead.firstName = email.value;
  //   console.log(this.lead.firstName)
  // }
  nUser = new User();
  onSelect(event) {
    // console.log(this.multipleUpload);
    // console.log(event);
  
      this.files.push(...event.addedFiles);

  
  }
  onRemove(event) {
    console.log('EVENT', event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  onClick(){
    console.log("nImage",this.nUser.image =this.files);
  }


}
