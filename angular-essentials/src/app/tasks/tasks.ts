import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { dummyTasks } from '../../dummy-tasks';
import { NewTask } from "./new-task/new-task";

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input() id?: string;
  @Input() name?: string;
  showAddModal = false;
  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter(item => item.userId === this.id)
  }

  handleCompleteTask(id: string) {
    this.tasks = this.tasks.filter(item => item.id !== id);
  }
  onClickAdd() {
    this.showAddModal = true;
  }
  closeDialog() {
    this.showAddModal = false;
  }
}
