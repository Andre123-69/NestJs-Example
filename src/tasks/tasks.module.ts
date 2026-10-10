import { Module } from "@nestjs/common";
import { TasksController } from "./tasks.controller.js";
import { TasksService } from "./tasks.service.js";

@Module({
    providers: [TasksService],
    controllers: [TasksController]
})
export class TasksModule { }


    