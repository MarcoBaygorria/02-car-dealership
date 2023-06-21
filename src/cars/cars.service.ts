import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/cars.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Coroya',
    },
    {
      id: uuid(),
      brand: 'Chevrolet',
      model: 'AFGHJ',
    },
    {
      id: uuid(),
      brand: 'Lamborgini',
      model: 'QWERTY',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOnById(id: string) {
    //Logica para seleccionar por id un carro de la lista cars
    const car = this.cars.find((car) => car.id === id);
    //Throw Error para enviar un 404 al cliente cuando no se encontro el carro por id.
    //En este caso !car represente el SI NO SE ENCONTRO.
    if (!car)
      throw new NotFoundException(`No se encontro el carro con el id '${id}'`);
    return car;
  }

  create(CreateCarDto: CreateCarDto) {
    
    //creamos un objeto
    const car: Car = {
      id: uuid(),
      ...CreateCarDto
    }

    //Codigo del push
    this.cars.push( car );
    return car
  }

  //! SI O SI TIENE QUE VENIR EL ID
  update(id: string, updateCarDto: UpdateCarDto) {

    let carDB = this.findOnById(id);

    this.cars = this.cars.map( car => {

      if ( car.id === id ) {
        carDB = { ...carDB,...updateCarDto, id }
        return carDB;
      }

      return car;
    })

    return carDB;
  }
}
