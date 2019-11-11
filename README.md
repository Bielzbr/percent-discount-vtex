# Flag de desconto VTEX
Formatar a porcentagem da loja VTEX


Faz a formatação das flags de desconto na loja VTEX removendo número quebrados de desconto.

Ex: Desconto de 40.55% OFF ficaria 40% OFF.
```
//<![CDATA[    
  function formatDesconto() {
  
    // Pega as class indicada por você na hora da inserção do controller da VTEX na prateleira
    $(".discount").each(function () {
      
      // Verifica se existe 
      if ($('.discount').length > 0) {
        // Passa o valor para um número inteiro (Ex: 30.3333 => 30)
        var desconto = parseInt($(this).text());
    
        // Adiciona o novo desconto formatado no lugar
        $(this).text(desconto + '% OFF');
      }
    });
  }

  formatDesconto();
//]]>
```
