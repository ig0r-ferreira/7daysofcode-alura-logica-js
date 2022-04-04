let n1 = 1
let n2 = '1'
let n3 = 30
let n4 = '30'
let n5 = 10
let n6 = '10'

if(n1 === n2){
  console.log('As variáveis n1 e n2 têm o mesmo valor e o mesmo tipo.')
}
else if (n1 == n2) {
    console.log('As variáveis n1 e n2 têm o mesmo valor, mas tipos diferentes.')
} 
else {
  console.log('As variáveis n1 e n2 não têm o mesmo valor.')
}


if (n3 === n4) {
  console.log('As variáveis n3 e n4 têm o mesmo valor e mesmo tipo.')
}
else if(n3 == n4){
    console.log('As variáveis n3 e n4 têm o mesmo valor, mas tipos diferentes.')
}
else {
  console.log('As variáveis n3 e n4 não têm o mesmo tipo.')
}

if (n5 === n6){
    console.log('As variáveis n5 e n6 têm o mesmo valor e mesmo tipo.')
}
else if (n5 == n6) {
  console.log('As variáveis n5 e n6 têm o mesmo valor, mas tipos diferentes.')
} 
else {
  console.log('As variáveis n5 e n6 não têm o mesmo valor.')
}