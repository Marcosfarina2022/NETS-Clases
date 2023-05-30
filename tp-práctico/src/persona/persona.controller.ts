import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PersonaService } from './persona.service';

@Controller('api')
export class PersonaController {

    constructor( private readonly PersonaService:PersonaService){}


@Get('persona/lista')
getMostrarLista():any{
 return this.PersonaService.getMostrarLista();
}

@Get('persona/:id')
getMostrarId(@Param('id',ParseIntPipe)id:number):any{
    return this.PersonaService.getMostrarId(id);
}    
@Post('persona/agregar')
getAgregarPersona(@Body() body:Body):any{
    return this.PersonaService.getAgregarPersona(body);
}

@Delete('persona/eliminar/:id')
getEliminarPersona(@Param('id',ParseIntPipe) id:number):any{
    return this.PersonaService.getElminarPersona(id);
}

}


