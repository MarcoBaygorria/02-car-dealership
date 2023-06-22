import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')

export class CarsController {
  // Injeccion de Dependencias.
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  // Agregamos un segmento en el Get en este caso id,se puede poner tantos como se desee eje ':id:/precio'
  // Agregamos un decorador para hacer la relacion enttre el id del Get y el id de getCardById = @Param('id')
  // Por ultimo hacemos referencia a la variable cars en un return seleccionando la id.

  //Ingresamos un pipe en @Param('id')
  //El pipe tiene por nombre ParseIntPipe
  //Este Pipe lo que hace es cambiar el tipo de dato, en este caso de un id=string a un id=number

  //Agregamos el Pie ParseIntPipe para la verificacion de los tipos de datos.
  //! CRUD
  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    //throw new Error('Auxilio');
    return this.carsService.findOnById(id);
  }

  //Creamos DATA
  @Post()
  //Para obtener el body de la peticion hecha usamos el decorador. @Body()
  //Al apretar el SEND del thunder client obtenemos la data anteriormente ingresada.
  createCar(@Body() createCarDto: CreateCarDto) {
    //LLamamos el servicio
    return this.carsService.create(createCarDto);
  }

  //Actualizamos Data
  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto) {
    //LLamamos nuestro servicio
    return this.carsService.update(id, updateCarDto);
  }

  //Borramos Data
  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
