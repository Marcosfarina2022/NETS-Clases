import { Injectable, Param, ParseIntPipe } from '@nestjs/common';

@Injectable()

export class PersonaService {

listaPersona=[
    {
        "id":1,
        "nombre": "Marcos",
        "apellido": "Farina",
        "dni": 28605873,
        "Nacionalidad":"Argentina"
    },
    {
        "id":2,
        "nombre": "Esteban",
        "apellido": "Fernandez",
        "dni": 32334563,
        "Nacionalidad": "Uruguaya"
    },
    {
        "id":3,
        "nombre": "Marcela",
        "apellido": "Pozzo",
        "dni": 22456738,
        "Nacionalidad": "Colombiana"
    }
];
    // Listar todas las personas del arreglo
    getMostrarLista():any{
        return this.listaPersona;
    }
    //Buscar por ID a la persona
    getMostrarId(id:number):any{
        let persona= this.listaPersona.find(p => p.id === id);
        return persona;
    }

    //Agregamos personas nuevas al arreglo
    getAgregarPersona(body:any):string{
        let persona = {
            "id":parseInt(body.id),
            "nombre": body.nombre,
            "apellido": body.apellido,
            "dni": parseInt(body.dni),
            "Nacionalidad":body.Nacionalidad
        }
        this.listaPersona.push(persona);
        return "persona agregada"
    }
    //Eliminamos una persona
    getElminarPersona(id:number):any{
        let existe = false;
        let pos = 0;
        for(let i=0; i<this.listaPersona.length;i++){
            if(id===this.listaPersona[i].id){
                existe=true;
                pos=i;
            }
        }
        if(existe){
            this.listaPersona.splice(pos,1)
            return {"msj" : `Persona ${id} eliminada`}
        } else{
            return {"msj" : `Persona ${id} no encontrada`}
        }

    }

    }




