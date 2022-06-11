import { ActionType } from "../action-type"


interface DepositActin {
    type: ActionType.DEPOSIT
    payload: number
}
interface WithdrawAction {
    type: ActionType.WITHDRAW
    payload: number
}
interface BankruptActin {
    type: ActionType.BANKRUPT
}

export type Action = DepositActin | WithdrawAction | BankruptActin;
