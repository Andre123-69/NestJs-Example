import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module.js';
import { AuthModule } from './auth/auth.module.js';
import { UsersModule } from './users/users.module.js';
import { TasksModule } from './tasks/tasks.module.js';
import { HelloController } from './hello/hello.controller.js';

@Module({
  imports: [ProjectsModule, AuthModule, UsersModule, TasksModule],
  controllers: [HelloController],
})
export class AppModule {}
