# Flag de desconto VTEX
Formatar a porcentagem da loja VTEX
Faz a formatação das flags de desconto na loja VTEX removendo número quebrados de desconto.

# Adicionar o controle na sua prateleira
Adicione o código na prateleira da sua loja para exibição da flag. 

Controle: $product.ListPriceMinusBestPriceInPercent  (Highlight vtex)
(Mostra a diferença (em porcentagem) do preço “De” para o melhor preço do produto.)

Exemplo:
```
  #if ($product.ListPriceMinusBestPriceInPercent)
        <div class="discount">$product.ListPriceMinusBestPriceInPercent</div>
   #end
```

Ex: Desconto de 40.55% OFF ficaria 40% OFF.
```
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
```


# Resultado final da Prateleira

```
#set($id = $product.Id)
#set($idSku = $product.productVariantId)
#set($uri = $product.Uri)
#set($escapedName = $product.HtmlEscapedName)

#if ($product.IsInStock)
<span class="box-item text-center">
#else
<span class="box-item text-center product-off">
#end
    #if ($product.ListPriceMinusBestPriceInPercent)
        <div class="discount">$product.ListPriceMinusBestPriceInPercent</div>
    #end
    
    <a class="product-image" title="$escapedName" href="$uri">
        $product.GetImageTag(2)
    </a>
    
    <b class="product-name">
        <a title="$escapedName" href="$uri">
            $product.Name
        </a>
    </b>
    
    <div class="clusterHighLight">
        $product.HightLight
    </div>
    <div class="discountHighLight">
        $product.DiscountHightLight
    </div>
    
    #if ($product.IsInStock)
    	<span class="price">
    		<a title="$escapedName" href="$uri">
                #if ($product.HasBestPrice)
        			<span class="old-price">
                        $product.ListPrice
                    </span>
                    <span class="best-price">
                        $product.BestPrice
                    </span>
                #else
                    <span class="best-price">
                        $product.BestPrice
                    </span>                    
                #end
                #if ($product.NumbersOfInstallment > 1)
                    <span class="installment">
        				${product.NumbersOfInstallment}x de $product.InstallmentValue
            		</span>
                #end
            </a>
    	</span>
    $product.BottomBuyAsynchronous

	#else
		<span class="out-of-stock">Produto Esgotado</span> 
	#end
</span>
```
