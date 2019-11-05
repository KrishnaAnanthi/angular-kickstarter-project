import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PrimeNgModule} from '@shared/modules/prime-ng/prime-ng.module';
import {HeaderComponent} from './components/header/header.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoaderComponent} from './components/loader/loader.component';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [
    FormsModule,
    HeaderComponent,
    NavbarComponent,
    LoaderComponent,
    PrimeNgModule,
  ],
})
export class SharedModule {}
