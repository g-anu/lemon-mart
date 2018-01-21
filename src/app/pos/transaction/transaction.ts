import { TransactionType } from './transactionType.enum'

export interface ITransaction {
  paymentType: TransactionType
  paymentAmount: number
  transactionId?: string
}
