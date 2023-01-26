import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { 
	IgxGridModule,
	IgxButtonGroupModule,
	IgxIconModule,
	IgxSliderModule,
	IgxToggleModule,
	IgxButtonModule,
	IgxSwitchModule,
	IgxRippleModule,
	IgxDialogModule,
	IgxToastModule,
 } from "igniteui-angular";
import { IgxCategoryChartModule } from 'igniteui-angular-charts';

import { AppComponent } from './app.component';
import { DockSlotComponent, GridHostDirective } from './dock-slot.component';

import { defineCustomElements } from 'igniteui-dockmanager/loader';
import { SignalRService } from "./services/signal-r.service";
import { FloatingPanesService } from "./services/floating-panes.service";
import { HttpClientModule } from "@angular/common/http";
defineCustomElements();

@NgModule({
  declarations: [
    AppComponent,
    DockSlotComponent,
    GridHostDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxGridModule,
    IgxButtonGroupModule,
    IgxIconModule,
    IgxSliderModule,
    IgxToggleModule,
    IgxButtonModule,
    IgxSwitchModule,
    IgxRippleModule,
    IgxCategoryChartModule,
    IgxDialogModule,
    IgxToastModule,
    HttpClientModule
  ],
  providers: [SignalRService, FloatingPanesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
