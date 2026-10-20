import { Controller, Get, Patch, Post, Put, Delete, Body, Query, Param } from "@nestjs/common";
import { TasksService } from "./tasks.service.js";
import * as createTaskDto from "./dto/create-task.dto.js";

@Controller("tasks")
export class TasksController {

    constructor(private readonly tasksService: TasksService) {}

    @Get()
    getAllTasks(@Query() query: any) {
        console.log(query);
        return this.tasksService.getAllTasks();
    }

    @Get("/:id")
    getTask(@Param('id') id: string) {
        console.log("ID: ", id);
        return this.tasksService.getTask(parseInt(id));
    }

    //POST  
    @Post()
    createTask(@Body() task: createTaskDto.createTaskDto) {
        console.log(task.title); 
        console.log(task.description);
        return this.tasksService.createTask(task);
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

