/** input field​  
 *  @createdDate: 23-10-2019 *
 *  @author: Phanith *
 *  @company: redfox web solutions (www.redfox-ws.com) 
 *  @changelog: * 
 *    - mm-dd-yyyy: what you have add to this class
*/
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';
import 'moment/locale/pt-br';
import * as moment from 'moment';

import { debounceTime,  distinctUntilChanged} from 'rxjs/operators';
import { CompileShallowModuleMetadata } from '@angular/compiler';
@Component({
  selector: 'rds:inputField',
  templateUrl: './rds-input-field.component.html',
  styleUrls: ['./rds-input-field.component.scss']
})
export class RdsInputFieldComponent implements OnInit {

  isReadOnly = false;
  form: FormGroup;
  bindingValue: any;
  
  @Input() label: string;
  @Input() fieldType: string;
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();
  @Input() fieldRequired = false;
  @Input() fieledName: string = "name";
  @Input() fieldCheckBoxLabel: any = '';
  @Input() fieldCheckBoxid: any = '';
  @Input() appendButton: any = '';
  @Input() fieldSwitch: any = '';
  @Input() dateInFormat: any ;

  

  @Input() optionValues: any = [
    { name: 'hello world' },
    { name: 'hello Java' },
    { name: 'Hello Angular Developer' }
  ];


  ngOnInit() {
    this.form
    .controls
    .editor
    .valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
    .subscribe(data => {
      console.log('native fromControl value changes with debounce', data)
    });

  // this.editor
  //   .onContentChanged
  //   .pipe(
  //     debounceTime(400),
  //     distinctUntilChanged()
  //   )
  //   .subscribe(data => {
  //     console.log('view child + directly subscription', data)
  //   });
  }
  @ViewChild('editor') editor: QuillEditorComponent
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
    this.form = fb.group({
      editor: ['test']
    });
  }
  /**  check Validation
   *  @param ………. * @createdDate: dd-mm-yyyy *
   *  @author: phanith */
  createForm() {
    this.angForm = this.fb.group({
      fieledName: ['', Validators.required]
    });
  }

    //events starts
    setFocus($event) {
      $event.focus();
    }
  
    patchValue() {
    console.log( this.form.controls['editor'].patchValue(`${this.form.controls['editor'].value} patched!`));
   
    }
  
    toggleReadOnly() {
      this.isReadOnly = !this.isReadOnly;
    }

    test() {
      const date = moment();
      this.dateInFormat = date.format('YYYY.M.D, h:mm:ss a');
     this.dateInFormat += ','+ (moment().format()).toString();
      console.log(this.dateInFormat);
  }
}
