import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Card } from "../../shared/card/card";
import { TasksService } from '../tasks.service';
type TaskType = {
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string,
}
@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css'
})

export class Task {
  @Input({ required: true }) taskData!: TaskType;
  private tasksService = inject(TasksService);

  onComplete() {
    this.tasksService.removeTask(this.taskData.id);
  }
}
