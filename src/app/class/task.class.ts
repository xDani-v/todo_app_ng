export class task {

    descripcion: string;
    fecha: Date;
    tags: string;
    isCompleted: boolean;

    constructor() {
        this.descripcion = '';
        this.fecha = new Date();
        this.tags = '';
        this.isCompleted = false;
    }

}