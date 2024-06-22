import { TasksService } from './tasks.service';
import {
  Controller,
  Body,
  Post,
  Get,
  HttpStatus,
  Param,
  HttpException,
  Delete,
} from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('criar')
  createTask(@Body() body: { titulo: string; descricao: string }) {
    const task = this.tasksService.createTask(body.titulo, body.descricao);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Task criada com sucesso',
      data: task,
    };
  }

  @Get()
  getAllTasks() {
    const tasks = this.tasksService.getAllTasks();
    return {
      statusCode: HttpStatus.OK,
      message: 'Todas as Tasks retornadas com sucesso!',
      data: tasks,
    };
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    const task = this.tasksService.getTaskById(id);
    if (!task) {
      throw new HttpException(
        `Task ${task.id} nao encontrada`,
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      statusCode: HttpStatus.OK,
      message: `Task ${task.id}`,
      data: task,
    };
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    this.tasksService.deleteTaskById(id);
    return {
      statusCode: HttpStatus.OK,
      message: `Task deletada com sucesso`,
    };
  }
}
