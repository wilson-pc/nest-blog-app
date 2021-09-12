import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { resolve } from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  app.enableCors();
  app.enableVersioning({ type: VersioningType.URI });
  app.useGlobalPipes(new ValidationPipe());
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb' }));
  app.use('/public', express.static('public'));
  const config = new DocumentBuilder()
    .setTitle('Rest')
    .setDescription('Una API rest para pruebas')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('rest', app, document, {
    swaggerOptions: { persistAuthorization: true },
    customCssUrl: 'https://ik.imagekit.io/ebfrktu6zh/swagger-ui_2GWqXctfDf.css',
  });

  await app.listen(process.env.PORT);
}
bootstrap();
