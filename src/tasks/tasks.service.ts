import { Injectable, HttpCode, NotFoundException } from "@nestjs/common";
import { createTaskDto } from "./dto/create-task.dto.js";

@Injectable()
export class TasksService {
    private tasks: any[] = []

    getAllTasks() {
        return this.tasks;
    }

    getTask(id: number) {
        const taksFound = this.tasks.find(task => task.id === id);

        if (!taksFound) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }

        return taksFound;
    }

    createTask(task: createTaskDto) {
        console.log("Task service: ", task)
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        });
        return this.tasks;
    }

    updateTask() {
        return "updating task";
    }

    patchTask() {
        return "patching task";
    }

    deleteTask() {
        return "deleting task";
    }
}