import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from "../header/header.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { PoButtonModule, PoModule } from '@po-ui/ng-components';
import { HomeComponent } from './home.component';
import { FooterComponent } from '../footer/footer.component';
import { MatEspancionComponent } from '../mat-espancion/mat-espancion.component';


@NgModule({
    declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MatEspancionComponent,
  
    
  ],

    providers: [],
    bootstrap: [HomeComponent],
    imports: [
       
        PoModule,
        HttpClientModule,
        PoButtonModule,

        MatExpansionModule,
        MatIconModule,
        FormsModule,
        HttpClientModule,
        HomeRoutingModule,
     
    ]
})
export class HomeModule { }
