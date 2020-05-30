import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { QuillModule } from 'ngx-quill'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {HttpClientModule}  from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgSelectModule } from '@ng-select/ng-select';
import { ChartistModule } from 'ng-chartist';
//COMPONENTS
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CustomizerComponent } from './customizer/customizer.component';
import { NotificationSidebarComponent } from './notification-sidebar/notification-sidebar.component';


//DIRECTIVES
import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";
import { SidebarDirective } from './directives/sidebar.directive';
import { SidebarLinkDirective } from './directives/sidebarlink.directive';
import { SidebarListDirective } from './directives/sidebarlist.directive';
import { SidebarAnchorToggleDirective } from './directives/sidebaranchortoggle.directive';
import { SidebarToggleDirective } from './directives/sidebartoggle.directive';
import { MiniSidebarComponent } from './sidebar/mini-sidebar/mini-sidebar.component';


import { SectionHeaderComponent } from './_components/section-header/section-header.component';
import { OutputFieldComponent } from './_components/output-field/output-field.component';
import { RdsInputFieldComponent } from './_components/rds-input-field/rds-input-field.component';
import { TotalHeaderComponent } from './_components/total-header/total-header.component';
import { InputImageComponent } from './_components/input-image/input-image.component';
import { RdsDatatableComponent } from './_components/rds-datatable/rds-datatable.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AgGridModule } from 'ag-grid-angular';
import { BtnRenderTableComponent } from './_components/btn-render-table/btn-render-table.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        SectionHeaderComponent,
        CustomizerComponent,
        NotificationSidebarComponent,
        ToggleFullscreenDirective,
        SidebarDirective,
        NgbModule,
        TranslateModule,
        OutputFieldComponent,

        MiniSidebarComponent,
        RdsInputFieldComponent,
        QuillModule,
        ReactiveFormsModule,
        TotalHeaderComponent,
        ChartistModule,
        BsDatepickerModule,
        InputImageComponent,
        NgxDropzoneModule,
        HttpClientModule,
        RdsDatatableComponent,
        BtnRenderTableComponent
    ],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule,
        NgbModule,
        TranslateModule,
        PerfectScrollbarModule,
        QuillModule,
        ReactiveFormsModule,
        UiSwitchModule,
        NgSelectModule,
        ChartistModule,
        BsDatepickerModule.forRoot(),
        NgxDropzoneModule,
        HttpClientModule,
        Ng2SmartTableModule, 
        AgGridModule.withComponents([
            BtnRenderTableComponent
        ])
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        CustomizerComponent,
        NotificationSidebarComponent,
        ToggleFullscreenDirective,
        SidebarDirective,
        SidebarLinkDirective,
        SidebarListDirective,
        SidebarAnchorToggleDirective,
        SidebarToggleDirective,
        MiniSidebarComponent,
        SectionHeaderComponent,
        OutputFieldComponent,
        RdsInputFieldComponent,
        TotalHeaderComponent,
        InputImageComponent,

        RdsDatatableComponent,
        BtnRenderTableComponent
    ]
})
export class SharedModule { }
