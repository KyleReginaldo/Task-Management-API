import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
  @Post()
  createTask(@Body('title') title, @Body('description') description): Task {
    return this.tasksService.createTask(title, description);
  }
}
