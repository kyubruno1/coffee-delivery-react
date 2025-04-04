import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { BaseInput, CheckoutFormContainer, FormContainer, PaymentLabel, PaymentTypeContainer, PaymentTypeMethod, Info } from "../../styles";
import { UseFormRegister } from "react-hook-form";
import { OrderFormInputs } from "../../../../schemas/orderSchema";

interface OrderFormProps {
    register: UseFormRegister<OrderFormInputs>;
    paymentMethod: string;
}

export function OrderForm({ register, paymentMethod }: OrderFormProps) {
    return (
        <>
            <CheckoutFormContainer>
                <Info>
                    <span>
                        <MapPinLine size={22} />
                    </span>
                    <div>
                        <p>Endereço de entrega</p>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                </Info>

                <FormContainer>
                    <p>
                        <BaseInput width={200} placeholder="CEP" {...register('cep')} />
                    </p>
                    <BaseInput placeholder="Rua" {...register('rua')} />
                    <p>
                        <BaseInput width={200} placeholder="Número" {...register('numero')} />
                        <BaseInput placeholder="Complemento" {...register('complemento')} />
                    </p>
                    <p>
                        <BaseInput width={200} placeholder="Bairro" {...register('bairro')} />
                        <BaseInput width={300} placeholder="Cidade" {...register('cidade')} />
                        <BaseInput placeholder="UF" {...register('uf')} />
                    </p>
                </FormContainer>
            </CheckoutFormContainer>

            <PaymentTypeContainer>
                <Info>
                    <span><CurrencyDollar size={22} /></span>
                    <div>
                        <p>Pagamento</p>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>
                </Info>

                <PaymentTypeMethod>
                    <PaymentLabel selected={paymentMethod === 'credit'}>
                        <input type="radio" value="credit" {...register('paymentMethod')} />
                        <CreditCard />
                        <span>Cartão de crédito</span>
                    </PaymentLabel>
                    <PaymentLabel selected={paymentMethod === 'debit'}>
                        <input type="radio" value="debit" {...register('paymentMethod')} />
                        <Bank />
                        <span>Cartão de débito</span>
                    </PaymentLabel>
                    <PaymentLabel selected={paymentMethod === 'money'}>
                        <input type="radio" value="money" {...register('paymentMethod')} />
                        <Money />
                        <span>Dinheiro</span>
                    </PaymentLabel>
                </PaymentTypeMethod>
            </PaymentTypeContainer>
        </>
    );
}