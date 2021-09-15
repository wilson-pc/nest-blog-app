export declare class userPayload {
    email: string;
    sub: string;
}
export declare class JwtPayload {
    access_token: string;
    user: userPayload;
    type: userPayload;
}
