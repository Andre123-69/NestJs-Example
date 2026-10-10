import { Controller, Get } from '@nestjs/common';

@Controller()
export class HelloController {
    @Get("/")
    sayHello() {
        return "Hello World";
    }

    @Get("/hello")
    sayHelloHello() {
        return "Hello World";
    }
}
