export interface Paciente {
    id: string;
    nombre_completo: string;
    fecha_nacimiento: string;
    genero: string;
    direccion: string;
    telefono: string;
    correo_electronico: string;
    numero_seguro_medico: string;
    
    //cita
    razon_cita: string;
    fecha_registro:string;
    sintomas_quejas: string;
    estado_cita: string;
}