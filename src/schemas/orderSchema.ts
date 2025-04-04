import * as zod from "zod";

export const newOrderValidationSchema = zod.object({
    cep: zod.string().min(1, 'Informe o CEP'),
    rua: zod.string().min(1, 'Informe a rua'),
    numero: zod.string().min(1, 'Informe o numero'),
    complemento: zod.string().min(1, 'Informe o complemento'),
    bairro: zod.string().min(1, 'Informe o bairro'),
    cidade: zod.string().min(1, 'Informe a cidade'),
    uf: zod.string().min(1, 'Informe o UF de no maximo 2 digitos'),
    paymentMethod: zod.enum(["credit", "debit", "money"],)
})


export type OrderFormInputs = zod.infer<typeof newOrderValidationSchema>
