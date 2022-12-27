export interface Paciente {
    cpf: string;
    email: string;
    senha: string;
    nomeCompleto: string;
    telefone: string;
    dataDeNascimento: string;
    sexo: string;
    altura?: number;
    peso?: number;
}
