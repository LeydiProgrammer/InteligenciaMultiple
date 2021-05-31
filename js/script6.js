
function Calificar() {
    var le=0;
    var suma;
    var li;
    var siempre = 0;
    var casisiempre=0;
    var aveces=0;
    var casinunca=0;
    var nunca=0;
    for (al=0;al<=9;al++){

    var res=[];
    res[0] = document.getElementById("p1a").checked;
    res[1] = document.getElementById("p1b").checked;
    res[2] = document.getElementById("p1c").checked;
    res[3] = document.getElementById("p1d").checked;
    res[4] = document.getElementById("p1e").checked;

    res[5] = document.getElementById("p2a").checked;
    res[6] = document.getElementById("p2b").checked;
    res[7] = document.getElementById("p2c").checked;
    res[8] = document.getElementById("p2d").checked;
    res[9] = document.getElementById("p2e").checked;

    res[10] = document.getElementById("p3a").checked;
    res[11] = document.getElementById("p3b").checked;
    res[12] = document.getElementById("p3c").checked;
    res[13] = document.getElementById("p3d").checked;
    res[14] = document.getElementById("p3e").checked;

    res[15] = document.getElementById("p4a").checked;
    res[16] = document.getElementById("p4b").checked;
    res[17] = document.getElementById("p4c").checked;
    res[18] = document.getElementById("p4d").checked;
    res[19] = document.getElementById("p4e").checked;

    res[20] = document.getElementById("p5a").checked;
    res[21] = document.getElementById("p5b").checked;
    res[22] = document.getElementById("p5c").checked;
    res[23] = document.getElementById("p5d").checked;
    res[24] = document.getElementById("p5e").checked;

    res[25] = document.getElementById("p6a").checked;
    res[26] = document.getElementById("p6b").checked;
    res[27] = document.getElementById("p6c").checked;
    res[28] = document.getElementById("p6d").checked;
    res[29] = document.getElementById("p6e").checked;

    res[30] = document.getElementById("p7a").checked;
    res[31] = document.getElementById("p7b").checked;
    res[32] = document.getElementById("p7c").checked;
    res[33] = document.getElementById("p7d").checked;
    res[34] = document.getElementById("p7e").checked;

    res[35] = document.getElementById("p8a").checked;
    res[36] = document.getElementById("p8b").checked;
    res[37] = document.getElementById("p8c").checked;
    res[38] = document.getElementById("p8d").checked;
    res[39] = document.getElementById("p8e").checked;

    res[40] = document.getElementById("p9a").checked;
    res[41] = document.getElementById("p9b").checked;
    res[42] = document.getElementById("p9c").checked;
    res[43] = document.getElementById("p9d").checked;
    res[44] = document.getElementById("p9e").checked;

    res[45] = document.getElementById("p10a").checked;
    res[46] = document.getElementById("p10b").checked;
    res[47] = document.getElementById("p10c").checked;
    res[48] = document.getElementById("p10d").checked;
    res[49] = document.getElementById("p10e").checked;
    
    var correcto=0;
    var inc =0;
    

    for(i=0;i<=4;i++){
        
        if (res[le]==true){
         
            correcto = correcto + 1;
            if(correcto==1){
                li=inc;
            } 
            
        }
        else{
           inc = inc + 1;
        }

        le=le+1; 
        
        //alert(res[i]  +  " " + correcto);
    }

    suma=0;
    suma = li + correcto;
    if(suma == 5){
        siempre = siempre + 1 ;
    }

    if(suma == 4){
        casisiempre = casisiempre + 1;
    }

    if(suma == 3){
        aveces = aveces + 1 ;
    }

    if(suma == 2){
        casinunca = casinunca + 1 ;
    }

    if(suma == 1){
        nunca = nunca + 1 ;
    }
}
siempre=siempre*10;
casisiempre= casisiempre*10;
aveces= aveces*10;
casinunca=casinunca*10;
nunca=nunca*10;
var negativo;
var positivo;
negativo=casinunca+nunca;
positivo=siempre+casisiempre+aveces;
alert('SIEMPRE: '+ siempre +' %         '
    +'CASI SIEMPRE: '+ casisiempre +' %         '
    +'A VECES: '+ aveces +' %           '
    +'CASI NUNCA: '+ casinunca +' %       '
    +'NUNCA: '+ nunca +' % ');

alert('POSITIVO: '+positivo+'%'
      +'           NEGATIVO: '+negativo+'%');



}
function Cancelar() {

    document.getElementById("formulario").reset();
}