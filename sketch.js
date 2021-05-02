var x=196;
var y=255;
var xx=55;
var yy=450;
var a=60;
var b=370;
var c
var e
var f
var g
var h
var i
var j
var m
var opcao=1;
var opcao1=4
var opcao2=4
var opcao3=4
var tela=0
let img;
function preload() {
  img40 = loadImage('foto2.jpeg');
  img41=loadImage('giphy5.gif');
  img=loadImage('1Menu.png')
  img1=loadImage('amazonia.png');
  img2=loadImage('tela4.png');
  img3=loadImage('caatinga.png');
  img4=loadImage('cerrado.png');
  img5=loadImage('mataatlantica.png');
  img6=loadImage('pantanal.png');
  img7=loadImage('pampa.png');
  img8=loadImage('giphy.gif');
  img9=loadImage('gorasol.gif');
  img10=loadImage('AMAZONIA.png');
  img11=loadImage('giphy1.gif');
  img12=loadImage('CAATINGA.png');
  img13=loadImage('CERRADO.png');
  img14=loadImage('MATAA.png');
  img15=loadImage('PAMPA.png');
  img16=loadImage('PANTANAL.png');
  for(let i=0;i<6;i++)
    {img[i]=loadImage('biom ('+(i+1)+').png')}
}
  
function setup() {
  createCanvas(650, 650);
 
   draw()
 
}
function draw() {
  background(img,650,650);
  if(tela==0){
    menu();
    X=176
    xx=55
   
  }
  if(tela==1){
    fase1();
    
  }
  
  if(tela==2){
    instrucao();
    
    
  }
  if(tela==3){
    creditos();
    
    
  }
  if(tela==4){       //tela do jogo para identificar o primeiro bioma
    iniciar();
   background(img2,650,650);
    image(img1,5,30,img1.width*1.3,img1.height*1.3);
    image(img3,425,115,img3.width*1.3,             img3.height*1.3);
    image(img4, 215, 158,       img4.width*1.1,             img4.height*1.1);
    image(img5,230,215,img5.width*1.3,             img5.height*1.3);
    image(img6,220,325,img6.width*1.3,             img6.height*1.3);
    image(img7,224,503,img7.width*1.3,             img7.height*1.3);
    image(img8, a, b,       img8.width*0.2,             img8.height*0.1);
    image(img9,55,589,img9.width*0.08,img9.height*0.08);
    if(a==60 && b==370){
      image(img10,100,50)
      
    }
    
    if(keyIsDown(RIGHT_ARROW)){
      a+=2
    }
    if(keyIsDown(LEFT_ARROW)){
      a-=2
    }
    if(keyIsDown(UP_ARROW)){
      b-=2
    }
    if(keyIsDown(DOWN_ARROW)){
      b+=2
    }
    
    if(keyIsDown(ALT) && a>5 && a<350 && b>40 && b<240){
      
      e=7
    }
      if(e==7){
       image(img11,250,150,img11.width*0.5,img11.height*0.5);         // fill(255,0,255)
     text("PARABÉNS!  pressione Esc duas vezes para seguir",20,50 )
      c=1
        image(img[0],30,386,300,200)
      }
    
     if(keyIsDown(ESCAPE) && c==1){
       tela=21
     }
    
      
   
  
  
    
   
  
      
  }
  if(tela==21){ //tela do jogo para identificar o segundo bioma
    
    background(img2,650,650);
    image(img1,5,30,img1.width*1.3,img1.height*1.3);
    image(img3,425,115,img3.width*1.3,             img3.height*1.3);
    image(img4, 215, 158,       img4.width*1.1,             img4.height*1.1);
    image(img5,230,215,img5.width*1.3,             img5.height*1.3);
    image(img6,220,325,img6.width*1.3,             img6.height*1.3);
    image(img7,224,503,img7.width*1.3,             img7.height*1.3);
    image(img8, a, b,       img8.width*0.2,             img8.height*0.1);
    image(img9,55,589,img9.width*0.08,img9.height*0.08);
    
    if(a>5 && a<350 && b>40 && b<240){
      image(img12,100,50)
      
    }
    
    if(keyIsDown(RIGHT_ARROW)){
      a+=2
    }
    if(keyIsDown(LEFT_ARROW)){
      a-=2
    }
    if(keyIsDown(UP_ARROW)){
      b-=2
    }
    if(keyIsDown(DOWN_ARROW)){
      b+=2
    }
    if(keyIsDown(ALT) && a>430 && a<500 && b>125 && b<300){
      f=5
      
    }
    if(f==5){
      image(img11,250,150,img11.width*0.5,img11.height*0.5);          fill(255,0,255)
     text("PARABÉNS!  pressione Esc duas vezes para seguir",20,50 )
      image(img[1],30,386,300,200)
      c=2
      
    }
    if(keyIsDown(ESCAPE) && c==2){
       tela=22
     }
  }
  
  if(tela==22){ //tela do jogo poara identificar o terceiro bioma
    
    background(img2,650,650);
    image(img1,5,30,img1.width*1.3,img1.height*1.3);
    image(img3,425,115,img3.width*1.3,             img3.height*1.3);
    image(img4, 215, 158,       img4.width*1.1,             img4.height*1.1);
    image(img5,230,215,img5.width*1.3,             img5.height*1.3);
    image(img6,220,325,img6.width*1.3,             img6.height*1.3);
    image(img7,224,503,img7.width*1.3,             img7.height*1.3);
    image(img8, a, b,       img8.width*0.2,             img8.height*0.1);
    image(img9,55,589,img9.width*0.08,img9.height*0.08);
    
    if(a>430 && a<500 && b>125 && b<300){
      image(img13,100,100)
      
    }
    
    if(keyIsDown(RIGHT_ARROW)){
      a+=2
    }
    if(keyIsDown(LEFT_ARROW)){
      a-=2
    }
    if(keyIsDown(UP_ARROW)){
      b-=2
    }
    if(keyIsDown(DOWN_ARROW)){
      b+=2
    }
    if(keyIsDown(ALT) && a>250 && a<400 && b>245 && b<350){
      g=6
      
    }
    if(g==6){
      image(img11,250,150,img11.width*0.5,img11.height*0.5);          fill(255,0,255)
    text("PARABÉNS!  pressione Esc duas vezes para seguir",20,50 )
      image(img[2],30,386,300,200)
    c=15
      
    }
    if(keyIsDown(ESCAPE) && c==15){
       tela=23
     }
  }
  
  if(tela==23){  // tela do jogo para identificar o quarto bioma
    
    background(img2,650,650);
    image(img1,5,30,img1.width*1.3,img1.height*1.3);
    image(img3,425,115,img3.width*1.3,             img3.height*1.3);
    image(img4, 215, 158,       img4.width*1.1,             img4.height*1.1);
    image(img5,230,215,img5.width*1.3,             img5.height*1.3);
    image(img6,220,325,img6.width*1.3,             img6.height*1.3);
    image(img7,224,503,img7.width*1.3,             img7.height*1.3);
    image(img8, a, b,       img8.width*0.2,             img8.height*0.1);
    image(img9,55,589,img9.width*0.08,img9.height*0.08);
    
    if(a>250 && a<400 && b>245 && b<350){
      image(img14,100,60)
      
    }
    
    if(keyIsDown(RIGHT_ARROW)){
      a+=2
    }
    if(keyIsDown(LEFT_ARROW)){
      a-=2
    }
    if(keyIsDown(UP_ARROW)){
      b-=2
    }
    if(keyIsDown(DOWN_ARROW)){
      b+=2
    }
    if(keyIsDown(ALT) && a>250 && a<400 && b>400 && b<500){
      h=8
     
    }
    
    if(h==8){
      image(img11,250,150,img11.width*0.5,img11.height*0.5);       fill(255,0,255)
      text("PARABÉNS!  pressione Esc duas vezes para seguir",20,50 )
      image(img[3],30,386,300,200)
    c=30
      
      
    }
    if(keyIsDown(ESCAPE) && c==30){
       tela=24
     }
  }
  
  if(tela==24){   //tela do jogo para identificar o quinto bioma 
    
    background(img2,650,650);
    image(img1,5,30,img1.width*1.3,img1.height*1.3);
    image(img3,425,115,img3.width*1.3,             img3.height*1.3);
    image(img4, 215, 158,       img4.width*1.1,             img4.height*1.1);
    image(img5,230,215,img5.width*1.3,             img5.height*1.3);
    image(img6,220,325,img6.width*1.3,             img6.height*1.3);
    image(img7,224,503,img7.width*1.3,             img7.height*1.3);
    image(img8, a, b,       img8.width*0.2,             img8.height*0.1);
    image(img9,55,589,img9.width*0.08,img9.height*0.08);
    
    if(a>250 && a<400 && b>400 && b<500){
      image(img15,100,60)
      
    }
    
    if(keyIsDown(RIGHT_ARROW)){
      a+=2
    }
    if(keyIsDown(LEFT_ARROW)){
      a-=2
    }
    if(keyIsDown(UP_ARROW)){
      b-=2
    }
    if(keyIsDown(DOWN_ARROW)){
      b+=2
    }
    if(keyIsDown(ALT) && a>200 && a<280 && b>470 && b<550){
      i=8
     
    }
    
    if(i==8){
      image(img11,250,150,img11.width*0.5,img11.height*0.5);       fill(255,0,255)
      text("PARABÉNS!  pressione Esc duas vezes para seguir",20,50 )
      image(img[4],30,386,300,200)
    c=33
      
      
    }
    if(keyIsDown(ESCAPE) && c==33){
       tela=25
      
     }
  }
  
  if(tela==25){   //tela do jogo para identificar o sexto bioma 
    
    background(img2,650,650);
    image(img1,5,30,img1.width*1.3,img1.height*1.3);
    image(img3,425,115,img3.width*1.3,             img3.height*1.3);
    image(img4, 215, 158,       img4.width*1.1,             img4.height*1.1);
    image(img5,230,215,img5.width*1.3,             img5.height*1.3);
    image(img6,220,325,img6.width*1.3,             img6.height*1.3);
    image(img7,224,503,img7.width*1.3,             img7.height*1.3);
    image(img8, a, b,       img8.width*0.2,             img8.height*0.1);
    image(img9,55,589,img9.width*0.08,img9.height*0.08);
    
    if(a>200 && a<280 && b>470 && b<550){
      image(img16,100,60)
      
    }
    
    if(keyIsDown(RIGHT_ARROW)){
      a+=2
    }
    if(keyIsDown(LEFT_ARROW)){
      a-=2
    }
    if(keyIsDown(UP_ARROW)){
      b-=2
    }
    if(keyIsDown(DOWN_ARROW)){
      b+=2
    }
    if(keyIsDown(ALT) && a>185 && a<240 && b>300 && b<380){
      j=8
     
    }
    
    if(j==8){
      image(img11,250,150,img11.width*0.5,img11.height*0.5);       fill(255,0,255)
      
      image(img[5],30,386,300,200)
    c=36
      
      
    }
    if(keyIsDown(ESCAPE) && c==36){
       m=5
      
     }
    if(m==5){
      textSize(30)
      text("PARABÉNS! JOGUE VÁRIAS VEZES \nPARA FIXAR O CONTÉUDO",30,100)
      if(keyIsDown(SHIFT)){
        draw()
      }
    }
  }
  
  
    
    
    
   
  
  
    
    
    
   
  if(tela==5){
    menu()
    x=196
    xx=55
   }
  
  
    
}
function menu() {
  stroke('whith')
  rect(x,y,170,30);
  stroke('green')
  textSize(35);
  textFont('Goudy Stout');
  text('BIOMAS!',195,160);
  stroke('brack')
  textSize(25);
  textFont('MV Boli Black')
  text('JOGAR', 198,280);
  text('INSTRUÇÕES',198,350);
  text('CRÉDITOS',198,420)
  opcao1=4
  opcao2=4
  opcao3=4
  
  
  
}
function fase1(){
    //textSize(35)
    //textFont('MV Boli');
    //text('',230,150);
    rect(x,y,170,30);
    textSize(25);
    textFont('MV Boli Black')
    text('INICIAR', 210,280);
    text('MENU',400,280)
  image(img8,20,350,img8.width*0.8,img8.height*0.5)
  image(img41,280,380,img41.width*0.1,img8.height*0.1)
  rect(360,360,250,200);
    textSize(18);
    textFont('MV Boli Black')
    text('Olá! Me chamo Aduke e \npreciso de sua ajuda para \nidentificar os principais \nbiomas brasileiros. \n \nUse a tecla "Esc" \npara iniciar e "Alt" \npara selecionar o Bioma.', 370,390);
    
}
function fase2(){
     
    
    
}

function instrucao(){
   textSize(35);
  textFont('MV Boli Black')
  text('INSTRUÇÕES',230,150);
  textSize(20);
  textFont('MV Boli');
  text('O jogo é voltado para o 7° ano do Ensino Fundamental \nHabilidades: (EF07GE11) Caracterizar dinâmicas dos \ncomponentes físico-naturais no território nacional, \nbem como sua distribuição e biodiversidade \n(Florestas Tropicais, Cerrados, Caatingas, Campos Sulinos \ne Matas de Araucária\nResumo: O aluno deverá indentificar os principais \ntipos de biomas brasileiros no jogo usando as setas do \nteclado para mover o boneco e "Alt" para selecionar o bioma. \nUse "Esc" para iniciar ou voltar ao Menu.',40,195);
  
  rect(xx,yy,170,30);
  textFont('MV Boli Black')
  text('INICIAR',105,473)
  text('MENU',265,473)
  
}
function creditos(){
  text('CRÉDITOS',250,150);
  textSize(20);
  textFont('MV Boli');
  text('             Desenvolvedora: Denise Maria.               \n          \n             Orientadora: Jane Bragelone ',50,280)
  rect(xx,yy,170,30);
  textFont('MV Boli Black')
  text('INICIAR',105,473)
  text('MENU',265,473)
  image(img40,80,200,img40.width*0.1,img40.height*0.1)

}
function iniciar(){
  
}
function keyPressed() {
  if(key=="ArrowUp" && y>255){
    y=y-70
  opcao=opcao-1
    
}
  if(key=="ArrowDown" && y<370){
    y=y+70;
    opcao=opcao+1
   
}
  if(key=="Enter"){
    tela=opcao
 }
  if(key=="Tab"){
   tela=0

    
  }
  if(tela==1){
    if(key=='ArrowRight' && x<260){
      x=x+175
      opcao1=opcao1+1
    }
    if(key=='ArrowLeft' && x>180){
      x=x-175
      opcao1=opcao1-1
    }
    if(key=="Escape"){
    tela=opcao1
    }
  }
  if(tela==2){
    if(key=='ArrowRight' && xx<200){
      xx=xx+175
      opcao2=opcao2+1
      
      
    }
    if(key=='ArrowLeft' && xx>80){
      xx=xx-175
      opcao2=opcao2-1
     
    }
    if(key=="Escape"){
    tela=opcao2
    }
  }
  if(tela==3){
    if(key=='ArrowRight' && xx<200){
      xx=xx+175
      opcao3=opcao3+1
     
      
    }
    if(key=='ArrowLeft' && xx>80){
      xx=xx-175
      opcao3=opcao3-1
     
    }
    if(key=="Escape"){
    tela=opcao3
    }
  }
  
}