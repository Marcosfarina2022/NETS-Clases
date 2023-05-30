import { Controller, Delete, Get, Param } from '@nestjs/common';
import { AutomotorService } from './automotor.service';

@Controller('automotor')
export class AutomotorController {

    constructor(private readonly AutomotorService:AutomotorService){}


 @Get('auto/lista/')
 getMostrarAuto():any{
    return this.AutomotorService.getMostrarAutos();
 }   
@Delete('auto/eliminar/:patente')
getEliminarAuto(@Param('patente') patente:string):any{
    return this.AutomotorService.getEliminarAuto(patente);
}

}
