import { Controller, Get } from '@nestjs/common';

@Controller('persona')
export class PersonaController {

@Get()
getPersona():string{

    return "Retorno persona"
}


}
