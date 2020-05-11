<script type="text/javascript">
/*
* 	DESCONTO FLAG
* 	SOMENTE APARECE SE EXISTIR
* 	APLICADO ASSIM QUE A PAGINA CARREGAR
*   @author Gabriel Araujo
*/

//<![CDATA[    
  function formatDesconto() {
    
    // Verifica se existe 
      if ($('.discount').length > 0) {
        
        // Pega as class indicada por você na hora da inserção do controller da VTEX na prateleira
        $(".discount").each(function () {

          // Passa o valor para um número inteiro (Ex: 30.3333 => 30)
          var desconto = parseInt($(this).text());
    
         if(desconto == 0){ 
              $(this).hide();
          }else{
               // Adiciona o novo desconto formatado no lugar
              $(this).text(desconto + '% OFF');
          }
      }
    });
  }

  formatDesconto();
//]]>
</script>
