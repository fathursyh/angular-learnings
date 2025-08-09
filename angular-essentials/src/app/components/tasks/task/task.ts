import { Component, EventEmitter, Input, Output } from '@angular/core';
type TaskType = {
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string,
}
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})

export class Task {
  @Input({ required: true }) taskData!: TaskType;

  @Output() complete = new EventEmitter<string>();

  onComplete() {
    this.complete.emit(this.taskData.id);
  }
}
