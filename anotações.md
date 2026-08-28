obetivos {
    1- desenvolver as tela {
        usuário {
            home - OK
            pesquisa - OK
            carrinho - OK
            login - OK
            cadastro - OK
            perfil - OK
            meus dados - OK
        }
        ADM {
            home - OK
            pedidos - OK
            edição do pedido - OK
            produtos - OK 
            cadastro produtos - OK
            destaques/promoções - OK
            cadastro de destaques/promoções - OK
        }
    }
}


# Requisitos funcionais
{
    * home page com carrosel de novidades sobre as lojas;
    * lista/carrosel de promoções atuais da loja;
    * possibilidade de adicionar tudo em um "carrinho" e acumular os produtos que o cliente quer;
    * cliente finaliza pedido dispara mensagem automatica pelo whats da loja com uma pergunta de confirmação de pedido e acaba não necessitando que o ADM entre em contato manualmente com todos os cliente, alguns ainda podem não tem um whatsapp e para essas poucas pessoas ainda vai ter uma notificação para ADM e ele pode ver o pedido que foi feito e entra na página que tem a lista de produtos daquele pedido e clica num botão que vai direcionar para o whats e continuar a venda por lá (esse já é o processo da loja, meu site vai somente facilitar para o cliente escolher os produtos);
    * ADM {
        * pode cadastrar novos produtos ou excluir (não se pode excluir de vez, porém do momento que não quiser mais trabalhar com aquele produto pra frente ele não pode mais aparecer no site disponível para compra);
        * pode adicionar, ele mesmo, novas promoções, as novidades da loja, por exemplo: promoções, destaques de novidades;
        * botão para continuar atendimento do pedido pelo whats (mensgem pré-pronta com a lista de produtos que o cliente já havia escolhido antes);
    }
}

# resumo/objetivo

Desenvolver um site com o intuito de melhorar a experiência do cliente com a loja, no momento a loja tem um site que envia o cliente para uma conversa do whats, esse link está na bio do instagram, mas nesse novo site o cliente pode entrar, escolher todos os itens que ele já está em mente, e fazer todo o processo de uma compra online, porém sem a parte do pagamento, ele finaliza a compra no site é disparada uma mensagem automática para o número do cliente e na tela do ADM é gerada uma notificação onde ele pode entrar, ver os produtos, e chamar no whatsapp, eu tinha pensado no cliente finalizar a compra no whats, mas pelo computador, tem gente que pode acabar não sabendo como funciona, pelo celular ele pode redirecionar para o aplicativo do whatsapp, mas no computador tem que conectar e isso implicaria em uma dificuldade a mais para o cliente e poderia acabar espantando o cliente do site, e não é isso que quero.