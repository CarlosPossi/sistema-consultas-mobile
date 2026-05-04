export type Paciente = {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  dataDeNascimento: string;
  idade: Int16Array;
  endereco: string;
  telefone?: string;
  sexo: string;
};