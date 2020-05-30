/**
 * Component to display header page title
 * Attributes:
 * @attribute title | String      Page Header Title
 * @attribute subtitle | String   Page description
 * @author Sopha Pum
 * @createdDate 2019-08-30
 * @company REDFOX Web Solutions
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app:sectionHeader',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {

  //setup attributes in this component
  @Input() title:string = "";
  @Input() subtitle:string = "";

  constructor() { }

  ngOnInit() {
  }

}
