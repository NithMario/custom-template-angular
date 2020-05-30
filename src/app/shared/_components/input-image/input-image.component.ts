import { Component, OnInit,Input } from '@angular/core';
import { User } from 'app/shared/_models/model-user';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss']
})
export class InputImageComponent implements OnInit {
 @Input() files = [];
 @Input() multipleUpload:boolean = false;
 @Input() testing:any ={};
 nUser = new User();
  constructor() { }

  ngOnInit() {

  }
onSelect(event) {
  // console.log(this.multipleUpload);
  // console.log(event);
 if(this.multipleUpload == false && this.files.length > 0){
  this.files.splice(this.files.indexOf(this.files[0]), 1);
  this.files.push(...event.addedFiles);
  this.nUser.image =this.files
 }
else{
  this.files.push(...event.addedFiles);
}  
}
onRemove(event) {
  console.log('EVENT',event);
  this.files.splice(this.files.indexOf(event), 1);
}

}
