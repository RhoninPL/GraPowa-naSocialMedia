import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
    private readonly userProfileService: ProfileService) {
  }

  ngOnInit() {
    this.userProfileService.getUser().subscribe((user: User) => {
      this.userForm = this.formBuilder.group({
        name: user.name,
        email: user.email,
        age: user.age
      });
    });
  }

  save() {
    this.userProfileService.add({
      name: this.userForm.get('name').value,
      email: this.userForm.get('email').value,
      age: this.userForm.get('age').value,
    });
  }
}
