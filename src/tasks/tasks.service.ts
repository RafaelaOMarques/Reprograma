import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  createTask(titulo: string, descricao: string): Task {
    const newTask = new Task(titulo, descricao);
    this.tasks.push(newTask);
    return newTask;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  deleteTaskById(id: string): void {
    let tasksAtualizadas: Task[] = [];
    tasksAtualizadas = this.tasks.filter((task) => task.id !== id);
    this.tasks = tasksAtualizadas;
  }
}
