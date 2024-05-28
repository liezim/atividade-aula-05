let pergunta1 = prompt('Telefonou para a vítima? S/N')
let pergunta2 = prompt('Esteve no local do crime? S/N')
let pergunta3 = prompt('Mora perto da vítima? S/N')
let pergunta4 = prompt('Devia para a Vítima? S/N')
let pergunta5 = prompt('Já trabalhou com a vítima? S/N')

let array = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5]

let contador = 0


for (item of array){
  if item == "s"{contador+=1}
}

if contador == 2{
  console.log('Suspeito')
}

if contador == 3 or 4{
  console.log('Cumplice')
}

if contador > 4{
  console.log('Assassino')
}

console.log(array)
