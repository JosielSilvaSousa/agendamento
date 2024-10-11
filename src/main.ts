import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerModule.setup('api', app, createDocument(app));
  
  await app.listen(process.env.PORT || 3000);
  console.log(`Api listening on http://localhost:${process.env.PORT || 3000}`)
}
bootstrap();
