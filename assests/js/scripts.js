$(document).ready(function(){
    function carregarConteudo(url) {
        $.ajax({
            url: url,
            type: 'GET',
            success: function(data) {
                $('#main-content').html(data);
            },
            error: function(xhr, status, error) {
                console.error('Erro ao carregar conteúdo: ' + error);
            }
        });
    }
    $('#link-inicial').click(function(e){
        e.preventDefault();
        carregarConteudo('assests/classes/home.php');
    });

    $('#link-produtos').click(function(e){
        e.preventDefault();
        carregarConteudo('assests/classes/produtos.php');
    });

    $('#link-carrinho').click(function(e){
        e.preventDefault();
        carregarConteudo('assests/classes/carrinho.php');
    });
    $('#link-client').click(function(e){
        e.preventDefault();
        carregarConteudo('assests/classes/client.php');
    });
    carregarConteudo('assests/classes/home.php');
});
