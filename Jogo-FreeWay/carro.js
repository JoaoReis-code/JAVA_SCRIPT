//Carros
let xCarros=[0,0,0,0,0,0];
let yCarros=[40,80,130,190,240,290];
let velCarros=[];
 
for(let i=0;i<6;i++){
  velCarros[i]=Math.floor(Math.random() * 12) + 2;
}

function carro(){
  for(let i=0;i<carros.length;i++){
    image(carros[i],xCarros[i],yCarros[i],60,60)
    xCarros[i]+=velCarros[i];
    if(xCarros[i]>800)
    xCarros[i]=0
  }
}