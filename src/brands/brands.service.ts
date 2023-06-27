import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'

import { Brand } from './entities/brand.entity';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {

  //Importamos nuestro entities
  //Importamos el uuid.
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createAt: new Date().getTime()
    }
    ];
  
  create(createBrandDto: CreateBrandDto) {

    const { name } = createBrandDto

    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createAt: new Date().getTime()
    }

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    //Solo regresamos brands
    return this.brands
  }

  findOne(id: string) {
    //Verificamos si existe el brands.
    //Cambiamos el number por string
    const brand = this.brands.find(brand => brand.id === id)
    //Logica si no se encuentra al brands
    if (!brand)
      throw new NotFoundException(`Brand id "${id}" not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {

    let brandDB = this.findOne(id);

    this.brands = this.brands.map( brand => {
      if( brand.id === id) {
        brandDB.updateAt = new Date().getTime();
        brandDB = {...brandDB, ...UpdateBrandDto}
        return brandDB
      }
      return brand
    })

    return brandDB;
  }

  remove(id: string) {
    this.brands = this.brands.filter( brand => brand.id !== id);
  }
}
