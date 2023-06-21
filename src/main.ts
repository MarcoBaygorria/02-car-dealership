import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  //La validacion ahora esta a nivel de aplicacion y no de controlador.
  app.useGlobalPipes(
    new ValidationPipe({

      //Si envian una propiedad la cual no esta en la bbdd activara la validacion la cual dira que estas mismas no existe.
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  )


  await app.listen(3000);
}
main();
