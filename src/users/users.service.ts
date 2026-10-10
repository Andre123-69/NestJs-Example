import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: "User 1",
            email: "[EMAIL_ADDRESS]"
        },
        {
            id: 2,
            name: "User 2",
            email: "[EMAIL_ADDRESS]"
        }
    ]

    getAllUsers() {
        return this.users;
    }
}
