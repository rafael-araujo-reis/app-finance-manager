interface ITransaction {
  id_transaction: string;
  amount: number;
  category: string;
  date: string;
  description: string;
  payment: string;
  processed: boolean;
  type: string;
}

interface ITransactionRequest {
  data: ITransaction[];
}

interface ITransactionResponse {
  data: ITransaction[];
}

export { ITransaction, ITransactionRequest, ITransactionResponse };
