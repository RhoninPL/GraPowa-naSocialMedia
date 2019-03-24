import { AdminModule } from './admin/admin.module';
import { QuizModule } from './quiz/quiz.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

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
  }
];

@NgModule({
  imports: [
    QuizModule,
    AdminModule,
    RouterModule.forRoot(appRoutes),
    // PageNotFoundModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
