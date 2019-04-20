import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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

// Home View Components
import { HomeComponent } from './home/home.component';
import { SideFilterComponent } from './home/components/side-filter/side-filter.component';
import { NavigatorComponent } from './home/components/navigator/navigator.component';
import { CardComponent } from './home/components/card/card.component';

//Dependencies
import {SuiModule} from 'ng2-semantic-ui';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    NavigatorComponent,
    SideFilterComponent,
    FooterComponent,
    CardComponent,
  ],
  imports: [
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
  }],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
