import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
        user: any;
    }>;
    getProfile(req: any): Promise<import(".prisma/client").User & {
        posts: import(".prisma/client").Post[];
    }>;
}
