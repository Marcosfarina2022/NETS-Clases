import { Injectable } from '@nestjs/common';

@Injectable()
export class AutomotorService {


    parqueAutos=[
        {
            "patente":"AACCCDD",
            "marca": "audi",
            "modelo": 2020,
            "origen":"alemania"
        },
        {
            "patente":"AACFTJ",
            "marca": "ford",
            "modelo": 2013,
            "origen": "brasil"
        },
        {
            "patente":"AAHYRT",
            "marca": "renault",
            "modelo": 2022,
            "origen":"china"
        },
        {
            "patente":"AABBXZ",
            "marca": "chevrolet",
            "modelo": 2023,
            "origen":"mexico"
        }
    ];
        //Listamos todos los autos del parque
        getMostrarAutos():any{
            return this.parqueAutos;
        }

        //Eliminamos un auto por su patente
        getEliminarAuto(patente:string):any{
            let existe = false;
            let pos = 0;
            for(let i=0; i<this.parqueAutos.length;i++){
                if(patente===this.parqueAutos[i].patente){
                    existe=true;
                    pos=i;
                }
            }
            if(existe){
                this.parqueAutos.splice(pos,1)
                return {"msj" : `Patente ${patente} eliminada`}
            } else{
                return {"msj" : `Patente ${patente}} no encontrada`}
            }
    
        }
    
        }
    
