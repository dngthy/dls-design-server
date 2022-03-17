import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerCustomOptions,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder()
    .setTitle('DLS System')
    .setDescription('LMS FPT System API List')
    .setVersion('1.0')
    .addBearerAuth({
      name: 'Authorization',
      bearerFormat: 'Bearer',
      scheme: 'Bearer',
      type: 'http',
      in: 'Header',
    })
    .build();
  const swaggerDocumentOptions: SwaggerDocumentOptions = {
    deepScanRoutes: true,
  };
  const swaggerSetupOptions: SwaggerCustomOptions = {
    explorer: true,
    swaggerOptions: {
      docExpansion: false,
      deepLinking: true,
    },
  };
  const document = SwaggerModule.createDocument(
    app,
    swaggerConfig,
    swaggerDocumentOptions,
  );
  SwaggerModule.setup('api', app, document, swaggerSetupOptions);
  await app.listen(8000);
}
bootstrap();
