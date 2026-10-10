import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService {
    private tasks = [
        {
            id: 1,
            title: "Task 1",
            description: "Description 1",
            status: "pending"
        },
        {
            id: 2,
            title: "Task 2",
            description: "Description 2",
            status: "completed"
        }
    ]

    getAllTasks() {
        return this.tasks;
    }

    createTask() {
        const newTask = {
            id: this.tasks.length + 1,
            title: "New Task",
            description: "Description New Task",
            status: "pending"
        }
        this.tasks.push(newTask);
        return newTask;
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