export interface ColegioModel{
    id?: number,
    nombre: string,
    colegio?:{}
}

export interface CursoModel{
    id?:number,
    grado: number,
    salon: string,
    colegio: ColegioModel,
    asignatura?:{}
}