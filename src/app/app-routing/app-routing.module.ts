import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';

// Home 
import { HomeComponent } from '../home/home.component';
import { NavigatorComponent } from '../home/components/navigator/navigator.component';

import { AboutComponent } from '../about/about.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'auth',
  loadChildren: 'app/auth/auth.module#AuthModule'
}, {
  path: 'admin',
  loadChildren: 'app/admin/admin.module#AdminModule'
}, {
  path: 'about',
  component: AboutComponent
},
{
  path: 'card',
  component: NavigatorComponent,
  data: { title: 'Card List' }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: []
})

export class AppRoutingModule {}
