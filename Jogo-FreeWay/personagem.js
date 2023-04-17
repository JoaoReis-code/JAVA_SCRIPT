//Personagem
let yPersonagem=355;
let xPersonagem=400;
let colide=false;

//Pontos
let pontos=0;
let derrotas=0;

function personagem(){
  image(imagemDoPersonagem,xPersonagem,yPersonagem,35,35)
    if(keyIsDown(UP_ARROW)){
      yPersonagem-=2;
    }if(keyIsDown(DOWN_ARROW)){
      if(yPersonagem<350)
        yPersonagem+=2;
    }if(keyIsDown(RIGHT_ARROW)){
      if(xPersonagem<750)
      xPersonagem+=2;
    }if(keyIsDown(LEFT_ARROW)){
      if(xPersonagem>1)
        xPersonagem-=2;
    }
  
}

function colisao(){
  for(let i=0;i<carros.length;i++){
    colide=collideRectCircle(xCarros[i],yCarros[i],35,35,xPersonagem,yPersonagem,0)
    if(colide){
      yPersonagem=350
      derrotas++
      if(pontos>0)
        pontos--
    }
  }
}

function placar(){
  textAlign(CENTER);
  textSize(30);
  fill(color(229,9,20));
  text(pontos,200,30);
  text(derrotas,600,30);
  
  if(yPersonagem<10){
    yPersonagem=350;
    pontos++;
  }
}


  