import { CurrencyDollarSimple, MapPin, Timer } from "phosphor-react";
import { HeroIcon } from "../../../Home/styles";
import { CheckoutContainer, } from "../../styles";
import { Submitted } from './styles'
import illustrationSubsmitted from '../../../../assets/IllustrationSubmitted.svg'


interface OrderConfirmationProps {
    address: {
        rua: string;
        numero: string;
        bairro: string;
        cidade: string;
        uf: string;
    },
    paymentMethod: 'credit' | 'debit' | 'money'
}

const paymentLabels = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    money: 'Dinheiro',
}

export function OrderConfirmation({ address, paymentMethod }: OrderConfirmationProps) {
    return (
        <CheckoutContainer>
            <Submitted>
                <h1>Pedido confirmado</h1>
                <h3>Agora é só aguardar que logo o café chegará até você</h3>

                <div>
                    <div><HeroIcon color="purple"><MapPin size={16} weight="fill" /></HeroIcon><div><span>Entrega em {`${address.rua}, ${address.numero}`}</span><span>{`${address.bairro} - ${address.cidade}, ${address.uf}`}</span></div></div>
                    <div><HeroIcon color="yellow"><Timer size={16} weight="fill" /></HeroIcon><div><span>Previsão de entrega</span><span>20 min - 30 min</span></div></div>
                    <div><HeroIcon color="yellow-dark"><CurrencyDollarSimple size={16} weight="fill" /></HeroIcon><div><span>Pagamento na entrega</span><span>{paymentLabels[paymentMethod]}</span></div></div>
                </div>
            </Submitted>
            <img src={illustrationSubsmitted} />
        </CheckoutContainer>
    )
}