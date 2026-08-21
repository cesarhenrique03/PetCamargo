obetivos {
    1- desenvolver as tela {
        usuário {
            home - OK
            pesquisa - OK
            carrinho - OK
            login - OK
            cadastro - OK
            perfil - {
                meus pedidos
                meus dados
                excluir conta (não se exclui conta pois a partir do momento que foi criada ela é um parâmetro de conta, mas precisa do botão para desativar a conta.)
            }
            meus dados - {
                nome
                rg/cpf
                endereço
                email
                senha
            }
        }
        ADM {
            home - OK
            pedidos - OK
            edição do pedido - OK
            produtos - OK
            destaques - 
        }
    }
}

# Requisitos funcionais
{
    home page com carrosel de novidades sobre as lojas - OK
    lista/carrosel de promoções atuais da loja - OK
    possibilidade de adicionar tudo em um "carrinho" e acumular os produtos que o cliente quer - OK
    cliente finaliza pedido dispara notificação para ADM e ele pode ver o pedido que foi feito por último e entra dentro pa página que tem a lista de produtos daquele pedido e clica num botão que vai direcionar para o whats e continuar a venda por lá (esse já é o processo da loja, meu site vai somente facilitar para o cliente escolher os produtos)
    quando ainda tiver o produto em estoque ele fica com o card claro, mas se estiver esgotado, aparece uma linha com baixa opacidade na foto do produto escrito "esgotado" e o card fica preto e branco
    Sistema de estoque (não é 100% certeiro pois como o pagamento não é online o produto pode ser descontado do estoque, mas se o cliente não quiser mais, ele tem que ser reabastecido devolta no site.)
    ADM {
        pode cadastrar novos produtos ou excluir (não se pode excluir de vez, porém do momento que não quiser mais trabalhar com aquele produto pra frente ele não pode mais aparecer no site disponível para compra)
        pode adicionar, ele mesmo, novas promoções, as novidades da loja, por exemplo: promoções, destaques de novidades.
        botão para continuar atendimento do pedido pelo whats (mensgem pré-pronta com a lista de produtos que o cliente já havia escolhido antes)
    }
}

# resumo/objetivo

Desenvolver um site com o intuito de melhorar a experiência do cliente com a loja, no momento a loja tem um site que envia 