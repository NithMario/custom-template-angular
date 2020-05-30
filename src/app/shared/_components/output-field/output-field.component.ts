/**
 * Component to display label and value of output page manage header
 * Attributes:
 * @attribute label | String    Label Name
 * @attribute value | String   Value of Output
 * @author Pholla Doll
 * @createdDate 2019-09-03
 * @company REDFOX Web Solutions
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable: component-selector
  selector: 'c:outputField',
  templateUrl: './output-field.component.html',
  styleUrls: ['./output-field.component.scss']
})
export class OutputFieldComponent implements OnInit {

  // tslint:disable: no-inferrable-types
  @Input() label: string;
  @Input() value: string;
  @Input() type: string = 'text';
  @Input() routeUrl:string = '';
  constructor() { }

  ngOnInit() {
  }

}
