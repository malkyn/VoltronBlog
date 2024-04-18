export class ServiceResponse<T> {
  dados?: T;
  mensagem!: string;
  sucesso!: boolean;
}
