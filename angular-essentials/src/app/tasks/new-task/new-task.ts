import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({ required: true }) id!: string
  @Output() closeDialog = new EventEmitter<void>();
  // * using signal two way binding
  title = signal('');
  // * using normal property
  summary = '';
  date = '';

  private tasksService = inject(TasksService);

  onClose() {
    this.closeDialog.emit();
  }

  handleSubmitTask() {
    this.tasksService.addTask({
      title: this.title(),
      summary: this.summary,
      dueDate: this.date
    }, this.id);
    this.closeDialog.emit();
  }
}
