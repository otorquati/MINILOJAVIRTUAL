const items = [
  {
    id: 0,
    nome: 'camiseta',
    img: 'image_128.png',
    quantidade: 0
  },
  {
    id: 1,
    nome: 'short',
    img: 'image_128.png',
    quantidade: 0
  },
  {
    id: 2,
    nome: 'sapato',
    img: 'image_128.png',
    quantidade: 0
  }
]

inicializarLoja = () => {
  var containerProdutos = document.getElementById('produtos');
  items.map((val)=>{
    containerProdutos.innerHTML+=`
    <div class="produto-single">
      <img src="`+val.img+`" />
      <p>`+val.nome+`</p>
      <a key="`+val.id+`" href="#">Adicionar ao carrinho</a>
    </div>
    `;
  })
}

inicializarLoja();

atualizarCarrinho = () =>{
  var containerCarrinho = document.getElementById('carrinho');
  containerCarrinho.innerHTML = "";
  items.map((val)=>{
    if(val.quantidade > 0){
    containerCarrinho.innerHTML+=`

      <P>`+val.nome+` | quantidade `+val.quantidade+`</P>
      <hr>
    `;
    }
  })
}
var links = document.getElementsByTagName('a');
for(var i = 0; i < links.length; i++){
  links[i].addEventListener("click",function(){
    let key = this.getAttribute('key');
    items[key].quantidade++;
    atualizarCarrinho();
    return false;
    })
 
  }