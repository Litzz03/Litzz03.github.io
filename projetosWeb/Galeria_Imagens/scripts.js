$(document).ready(function(){

    const baseImagens = {
        todas:['animal2.jpg', 'cidade.jpg', 'animal.jpg', 'natureza.jpg'],
        animais:['animal.jpg', 'animal1.jpg', 'animal2.jpg', 'animal3.jpg'],
        natureza:['natureza.jpg', 'natureza1.jpg', 'natureza2.jpg', 'natureza3.jpg'],
        cidade:['cidade.jpg', 'cidade1.jpg', 'cidade2.jpg', 'cidade3.jpg'],
    }

    function carregarImagens(categoria){
        const imagens = baseImagens[categoria];
        const boxImagens = $('body').find('.box-imagens');
        boxImagens.empty();
        imagens.forEach(img => {
            console.log(img);
            boxImagens.append('<div class="imagem"><div class="fechar-imagem">X</div><img src="imagens/'+img+'" alt="'+img+'" /></div>');
        });
    }

    $('.botao-categoria').click(function(){
        $('body').find('.botao-categoria').removeClass('active');
        $(this).addClass('active');
        
        const categoria = $(this).data('categoria');
        carregarImagens(categoria);
    });

    function sortImagens(sort){
        const imagens = $('.box-imagens .imagem');
        imagens.sort(function(a, b){    
           
            const imagemA = $(a).find('img').attr('alt');
            const imagemB = $(b).find('img').attr('alt');
            //console.log(imagemB);
            if(sort == 'asc'){
                return imagemA.localeCompare(imagemB);
            }
            else{
                return imagemB.localeCompare(imagemA);
            }
            
        });

        $('body').find('.box-imagens').append(imagens);
        //console.log(imagens)
    }

    $('body').on('click', '.botao-ordenar', function(){
       const sort = $(this).data('sort');
       sortImagens(sort);
    });

    function buscaImagens(busca){
        const imagens = $('.box-imagens .imagem');
        imagens.each(function(){
            const nomeImagem = $(this).find('img').attr('alt');
            const imagemVisivel = nomeImagem.startsWith(busca);
            $(this).toggle(imagemVisivel);
        });
    }

    $('#busca-imagens').on('input', function(){
        const busca = $(this).val();
        buscaImagens(busca); 
    });

    $('body').on('click', 'img', function(){
        $(this).css('max-height', '100vh');
        $(this).parent().find('.fechar-imagem').show();
        $(this).parent().addClass('imagem-selecionada');
        $(this).parent().addClass('bg-img');

        $('html, body').css({'overflow':'hidden','height': '100vh'});
    });

    $('body').on('click', '.fechar-imagem', function(){
        $(this).parent().removeClass('imagem-selecionada');
        $(this).parent().removeClass('bg-img');
        $(this).hide();

        $('html, body').css({'overflow':'auto','height': 'auto'});
    });

    carregarImagens('todas');   
});