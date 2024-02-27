export interface Celular {
    id: number;
    nome: string;
    descricao?: string; // "?" torna o campo opcional
    esgotado: boolean;
}