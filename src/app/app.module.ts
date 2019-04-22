import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Root component
import { AppComponent } from './app.component';

//Contains angular material by default
import { SharedModule } from './shared/shared.module';

//Auth
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

//Interceptors
import { AuthHeaderInterceptor } from './interceptors/header.interceptor';
import { CatchErrorInterceptor } from './interceptors/http-error.interceptor';

//Router
import { AppRoutingModule } from './app-routing/app-routing.module';

//View components
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

//Services & their Components
import { CardService } from './services/card.service';
//import { OrderService } from './services/order.service';

// Home View Components
import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SideFilterComponent } from './home/components/side-filter/side-filter.component';
import { NavigatorComponent } from './home/components/navigator/navigator.component';
//import { FilterPipe} from './home/components/filter.pipe';


//Dependencies
import {SuiModule} from 'ng2-semantic-ui';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    //FilterPipe,
    AboutComponent,
    SideFilterComponent,
    NavigatorComponent,
    FooterComponent,
  ],
  imports: [
    Ng2SearchPipeModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    AuthModule,
    AdminModule,
    AppRoutingModule,
    SuiModule
  ],
  // Intercept HTTP requests
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHeaderInterceptor,
    multi: true,
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: CatchErrorInterceptor,
    multi: true,
  },
  CardService],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
