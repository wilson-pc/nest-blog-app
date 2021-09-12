"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const express = require("express");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.enableVersioning({ type: common_1.VersioningType.URI });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb' }));
    app.use('/public', express.static('public'));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Rest')
        .setDescription('Una API rest para pruebas')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('rest', app, document, {
        swaggerOptions: { persistAuthorization: true },
        customCssUrl: 'https://ik.imagekit.io/ebfrktu6zh/swagger-ui_2GWqXctfDf.css',
    });
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map