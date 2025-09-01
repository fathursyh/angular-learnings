import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  constructor(private taskService: TasksService) {}
  @Input() id?: string;
  @Input() name?: string;
  showAddModal = false;

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.id!);
  }

  onClickAdd() {
    this.showAddModal = true;
  }
  closeDialog() {
    this.showAddModal = false;
  }
}
