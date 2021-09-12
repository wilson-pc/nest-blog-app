export interface paths {
    "/": {
        get: operations["AppController_getHello"];
    };
    "/v1/user": {
        get: operations["UserController_findAll"];
        post: operations["UserController_create"];
    };
    "/v1/user/{id}": {
        get: operations["UserController_findOne"];
        put: operations["UserController_update"];
        delete: operations["UserController_remove"];
    };
    "/blog": {
        get: operations["BlogController_findAll"];
        post: operations["BlogController_create"];
    };
    "/blog/{id}": {
        get: operations["BlogController_findOne"];
        put: operations["BlogController_update"];
        delete: operations["BlogController_remove"];
    };
    "/auth/login": {
        post: operations["AuthController_login"];
    };
    "/auth/profile": {
        get: operations["AuthController_getProfile"];
    };
}
export interface components {
    schemas: {
        CreateUserDto: {
            email: string;
            password: string;
            name: string;
            image?: string;
        };
    };
}
export interface operations {
    AppController_getHello: {
        parameters: {};
        responses: {
            200: unknown;
        };
    };
    UserController_findAll: {
        parameters: {};
        responses: {
            200: unknown;
        };
    };
    UserController_create: {
        parameters: {};
        responses: {
            201: unknown;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateUserDto"];
            };
        };
    };
    UserController_findOne: {
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: unknown;
        };
    };
    UserController_update: {
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: unknown;
        };
    };
    UserController_remove: {
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: unknown;
        };
    };
    BlogController_findAll: {
        parameters: {
            query: {
                userId: string;
            };
        };
        responses: {
            200: unknown;
        };
    };
    BlogController_create: {
        parameters: {};
        responses: {
            201: unknown;
        };
    };
    BlogController_findOne: {
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: unknown;
        };
    };
    BlogController_update: {
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: unknown;
        };
    };
    BlogController_remove: {
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: unknown;
        };
    };
    AuthController_login: {
        parameters: {};
        responses: {
            201: unknown;
        };
    };
    AuthController_getProfile: {
        parameters: {};
        responses: {
            200: unknown;
        };
    };
}
export interface external {
}
