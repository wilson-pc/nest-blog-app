import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        user: import("../payload").Payload;
        access_token: string;
    }>;
    getProfile(req: any): Promise<{
        email: string;
        id: string;
        name: string;
        image: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
