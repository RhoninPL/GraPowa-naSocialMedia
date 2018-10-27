import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AboutComponent } from '../about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from '../create-post/create-post.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: AboutComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'createPost',
    component: CreatePostComponent
  },
  {
    path: '**',
    component: AboutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
