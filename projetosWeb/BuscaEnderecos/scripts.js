$(document).ready(function(){
  
    $('body').on('click', '#consultar', function(){
        consultaCep();
    });

    function consultaCep(){
        const cep = $('#cep').val();
        if(cep.length !== 8){
            $('#resultados').html('<h2 class="mensagemErro"> Digite o CEP corretamente!!!</h2>')
            return false;
        }

        loading();
        setTimeout(function(){
            $.ajax({
                url: 'https://viacep.com.br/ws/'+ cep +'/json/',
                type: 'GET',
                dataJson: 'json',
                success: function(data){
                    $('body').find('#resultados').html('<h2>Resultado da consulta</h2>'
                                                        + '<p>CEP: '+data.cep+'</p>'
                                                        +'<p>Logradouro: '+data.logradouro+'</p>'
                                                        +'<p>Bairro: '+data.bairro+'</p>'
                                                        +'<p>Cidade: '+data.localidade+'</p>'
                                                        +'<p>Estado: '+data.uf+'</p>'
                                                        +'<p>IBGE: '+data.ibge+'</p>'
                                                        );
                }
            });
        }, 4000);
        
    };

    function loading(){
        $('#resultados').html('<img src="imagens/loading.gif" />')
    };

    $('body').on('click', '#modo-noturno', function(){
        $('body').toggleClass('dark-mode');
        $('body').find('.container').toggleClass('dark-container');
        $(this).toggleClass('apagada');

        if (Cookies.get('modo-noturno') == 'on'){
            Cookies.set('modo-noturno', 'off');
        }else{
            Cookies.set('modo-noturno', 'on');
        }
    });

    $('body').on('input', '#cep', function(){
        $(this).val($(this).val().replace(/\D/g, ''));
    });

    if (Cookies.get('modo-noturno') == 'on'){
        $('body').toggleClass('dark-mode');
        $('body').find('container').toggleClass('dark-container');
        $('body').find('lampada').toggleClass('apagada');
    }
})