import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";

@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = dummyTasks;

  constructor() {
    const tasks = sessionStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  public getUserTasks(id: string) {
    return this.tasks.filter(item => item.userId === id)
  }

  public addTask(taskData: {title: string, summary: string, dueDate: string}, id: string) {
    this.tasks.push({
      ...taskData,
      id: new Date().getTime().toString(),
      userId: id,
    });
    this.saveTask();
  }

  public removeTask(id: string) {
    this.tasks = this.tasks.filter(item => item.id !== id);
    this.saveTask();
  }

  private saveTask() {
    sessionStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
