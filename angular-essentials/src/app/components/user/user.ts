import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  // * new way signal input
  avatar = input.required<string>();

  // * old way decorator input
  @Input({
    required: true,
  }) name!: string;

  // * new way signal computed property
  imagePath = computed(() => 'assets/users/' + this.avatar());

  // * old way computed property
  // get imagePath() {
  //   return 'assets/users/' + this.avatar();
  // }

  onSelectUser() {

  }
}
