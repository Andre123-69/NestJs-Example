import { Controller, Get, Patch, Post, Put, Delete } from "@nestjs/common";
import { TasksService } from "./tasks.service.js";

@Controller("tasks")
export class TasksController {

    constructor(private readonly tasksService: TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    //POST
    @Post()
    createTask() {
        return this.tasksService.createTask();
    }

    //PUT
    @Put()
    updateTask() {
        return this.tasksService.updateTask();
    }

    //PATCH
    @Patch()
    patchTask() {
        return this.tasksService.patchTask();
    }

    //DELETE
    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask();
    }

}

