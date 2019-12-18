//Loop
setInterval(() =>
{
    b();ativ15();ativ16();
}, 1000);
var iI = 0;
var indice=0;
//Ativdade 1 ao 4
const startUP = () =>
{
    let nome1 = window.prompt("Qual é o seu nome?");
    if(nome1!= null && nome1 != "")
    {
        document.getElementById("NP").innerHTML = ("Olá, "+nome1+"!");
    }
    else
    {
        document.getElementById("NP").innerHTML = "Olá visitante!";
    }
},
validar = () =>
{
    if (document.cadastro.nome.value == "")
    {
        window.alert("Você deve preencher o campo Nome.");
        document.cadastro.nome.focus();
        return false;
    }
    if (document.cadastro.email.value == "")
    {
        window.alert("Você deve preencher o campo email.");
        document.cadastro.email.focus();
        return false;
    }
    if (document.cadastro.observacoes.value == "")
    {
        window.alert("Você deve colocar alguma observação...");
        document.cadastro.observacoes.focus();
        return false;
    }
},
//Atividade 5
ativ5 = () =>
{
    let frase = document.ATV5.Frase.value;
    if(frase == "" || frase == null)
    {
        frase="Ola, tudo bem?"
    }
    let tamanho=frase.length;
    let bKP;
    bKP = ("<br>"+frase+"<br>");
    for (let i=0; i< tamanho;i++)
    {
        bKP = bKP + ("<br>Caractere na posição "+(i+1)+" : "+frase.charAt(i));
    }
    bKP = bKP + ("<br><br>O primeiro caractere: " + frase.charAt(0) + "<br>");
    bKP = bKP + ("O caractere do meio: " + frase.charAt(parseInt(frase.length/2)) + "<br>");
    bKP = bKP + ("O último caractere: " + frase.charAt(frase.length-1));
    document.getElementById("ATV5").innerHTML = (bKP);
},
//Atividade 6
ativ6 = () =>
{
    let hoje = new Date();
    let texto = ("Data e hora completa: "+hoje)+("<br>Apenas o dia: "+hoje.getDate())+("<br>Apenas o mês: "+(hoje.getMonth()+1))+("<br>Apenas o ano: "+hoje.getFullYear())+("<br>Apenas o dia da semana: "+(hoje.getDay()+1))+("<br>Apenas a hora e minutos: "+hoje.getHours()+":"+hoje.getMinutes());;
    document.getElementById("ATV6").innerHTML = (texto);
},
//Atividade 7
abre1 = () =>
{
    window.open("http://www.google.com");
},
abre2 = () =>
{
    window.open("http://www.google.com","simples","width=350,height=400");
},
abre3 = () =>
{
    window.open("http://www.google.com","simples","menubar,scrollbars,width=300, height=200");
},
//Atividade 8
ativ8 = () =>
{
    alert("Esta caixa de dialogo foi construida em JS.");
    document.getElementById("ATV8").innerHTML = ("Esta linha tb foi escrita em JS.<br>");
},
//Atividade 9
cubo = (x) =>
{
    return x*x*x;
},
quadrado = (x) =>
{
    return x*x;
},
ativ9 = (y) =>
{
    document.getElementById("ATV9").innerHTML = ("O quadrado de "+ y +" é igual a "+quadrado(y));
    document.getElementById("ATV92").innerHTML = ("O cubo de "+y+" é "+cubo(y));
},
//Atividade 10
ativ10 = () =>
{
    document.getElementById("ATV10").innerHTML = ("<br>Título da janela aberta: "+document.title+"<br>")
},
//Atividade 11
ativ11 = (x) =>
{
    switch(x)
    {
        case "a": document.getElementById("ATV11").innerHTML = "Volte para 1°A série!";
            document.getElementById("ATV11").className = "err";
            break;
        case "b": document.getElementById("ATV11").innerHTML = "Correto!";
            document.getElementById("ATV11").className = "suc";
            break;
        case "c": document.getElementById("ATV11").innerHTML = "MEU DEUS!!!";
            document.getElementById("ATV11").className = "err";
            break;
        case "d": document.getElementById("ATV11").innerHTML = "Não dá para arriscar nada?!?!";
            document.getElementById("ATV11").className = "per";
            break;
    }
},
//Atividade 12
somar = () =>
{
    let H = document.ATV12.c1.value || 0;
    let J = document.ATV12.c2.value || 0;
    let K = document.ATV12.c3.value || 0;
    let x = eval(H) + eval(J) + eval(K) || 0;
    document.ATV12.c4.value = x;
},
multiplicar = () =>
{
    let zH = document.ATV12.c1.value;
    let zJ = document.ATV12.c2.value;
    let zK = document.ATV12.c3.value;
    let H = document.ATV12.c1.value || 1;
    let J = document.ATV12.c2.value || 1;
    let K = document.ATV12.c3.value || 1;
    let x = eval(H) * eval(J) * eval(K) || 0;
    if(zH == "" && zJ == "" && zK == "")
    {
        document.ATV12.c4.value = 0;
    }
    else
    {
        document.ATV12.c4.value = x;
    }
},
//Atividade 13
campo_obrigatorio = (x) =>
{
    if(x.value=="")
    {
        document.getElementById("ATV13").innerHTML = ("O campo " + x.name + " não pode ficar em branco.")
    }
},
//Atividade 14
ativ14 = () =>
{
    if(iI%2 == 0)
    {
        document.getElementById("IMG-14").src = "img/Triforce.png";
    }
    if(iI%2 == 1)
    {
        document.getElementById("IMG-14").src = "img/PokeBall.png";
    }
    iI++;
},
//Atividade 15
ativ15 = () =>
{
    let dia = new Date();
    let hora = dia.getHours();
    let minuto = dia.getMinutes();
    
    if ((hora==1) || (hora==2) || (hora==3) || (hora==4) || (hora==5))
    {
         document.getElementById("ATV15").innerHTML = ("Você não devia estar dormindo?");
    }
    if ((hora==6) || (hora==7) || (hora==8) || (hora==9) || (hora==10)|| (hora==11))
    {
         document.getElementById("ATV15").innerHTML = ("Bom dia!");
    }
    if (hora==12)
    {
        document.getElementById("ATV15").innerHTML = ("Vamos almoçar?");
    }
    if ((hora==13) || (hora==14) || (hora==15) || (hora==16) || (hora==17))
    {
         document.getElementById("ATV15").innerHTML = ("Boa Tarde!");
    }
    if ((hora==18) || (hora==19))
    {
         document.getElementById("ATV15").innerHTML = ("Bom final de tarde!");
    }
    if(hora == 19 && minuto == 30)
    {
        document.getElementById("ATV15").innerHTML = ("Vamos para aula!");
    }
    if(hora == 20 && minuto == 50)
    {
        document.getElementById("ATV15").innerHTML = ("Hora do RECREIO!");
    }
    if ((hora==20) || (hora==21) || (hora==22))
    {
         document.getElementById("ATV15").innerHTML = ("Boa noite!");
    }
    if (hora==23)
    {
        document.getElementById("ATV15").innerHTML = ("Ó Meu! Já é quase meia-noite!");
    }
    if(hora == 23 && minuto == 30)
    {
        document.getElementById("ATV15").innerHTML = ("Vamos embora, a aula terminou!");
    }
    if (hora==0)
    {
        document.getElementById("ATV15").innerHTML = ("Meia-noite! Já é amanhã!");
    }
},
//Atividade 16
ativ16 = () =>
{
    let dia = new Date();
    let hora = dia.getHours()

    if (hora < 18) {
    document.getElementById("ATV16").innerHTML = ("<span><i class='fas icone fa-smile-wink'></i></span>");
    }
    else {
    document.getElementById("ATV16").innerHTML = ("<span><i class='far icone fa-dizzy'></i></span>");
    }
},
//Atividade 17
ativ17 = () =>
{
    let b;
    let texto;
    let classe;
    b = document.getElementById("ATV171").value;
    if(isNaN(b) || b < 1 || b > 31)
    {
        texto = "Número Invalido";
        classe = "err";
    }
    else
    {
        texto = "Número Valido";
        classe = "suc";
    }
    document.getElementById("ATV17").innerHTML = texto;
    document.getElementById("ATV17").className = classe;
},
//Atividade 18
ativ18 = () =>
{
    let sal = parseFloat(document.Reajuste.Reajustar.value) || 0;
    let frase = "O Seu reajuste é de: ";let frase2 = " ,totalizando: "
    let aum = 0;
    if(sal > 0)
    {
        if(sal <= 1000.00)
        {
            aum = .2;
        }
        else if(sal >= 1001.01 &&  sal <= 2000.00)
        {
            aum = .15;
        }
        else if(sal >= 2000.01 && sal <= 3000.00)
        {
            aum = .1;
        }
        else
        {
            aum = .5;
        }
        sal = sal + (sal*aum);
        document.getElementById("ATV18").innerHTML = frase+("<span class='suc'>"+(aum*100+"%")+"</span>")+frase2+("<span class='suc'>"+"R$"+sal+"</span>");
    }
    else
    {
        document.Reajuste.Reajustar.value = "";
        document.getElementById("ATV18").innerHTML = "<BR>";
    }
}
//Atividade 19
$(document).ready(function()
{
  $("#btn19").click(function()
    {
    	switch(indice)
        {
          case 0:$("#cuBão").animate({left: '126.5vh',top:"0vh",right:"0vh",bottom:"50vh"},375);indice++;document.getElementById("cuBão").innerHTML = indice;break;
          case 1:$("#cuBão").animate({top: '50vh',left:"126.5vh",right:"0vh",bottom:"0vh"},375);indice++;document.getElementById("cuBão").innerHTML = indice;break;
          case 2:$("#cuBão").animate({right: '50vh',top:"50vh",left:"0vh",bottom:"0vh"},375);indice++;document.getElementById("cuBão").innerHTML = indice;break;
          case 3:$("#cuBão").animate({bottom: '50vh',top:"0vh",right:"50vh",left:"0vh"},375);indice++;document.getElementById("cuBão").innerHTML = indice;indice=0;break;
          case 4:$("#cuBão").animate({left: '126.5vh',top:"0vh",right:"0vh",bottom:"50vh"},375);indice = 1;document.getElementById("#btn19").innerHTML = indice;break;
          default: indice=0;
        }
    });
});
//Atividade 20
/*
const ListaComprasController = ($scope) =>
{
    $scope.itens =
    [
        {produto: 'Leite', quantidade: 2, comprado: false},
        {produto: 'Cerveja', quantidade: 12, comprado: false}
    ];
    $scope.adicionaItem = () => 
    {
        $scope.itens.push(
            {
                produto: $scope.item.produto,quantidade: $scope.item.quantidade,comprado: false
            });
        $scope.item.produto = $scope.item.quantidade = '';
    };
}
describe('Lista Compras Unitário', () => 
{
    describe('ListaComprasController', () => 
    {
        beforeEach(() => 
        {
            this.$scope = {};
            this.controller = new ListaComprasController(this.$scope);
        });
        it('deve criar "itens" com 2 ítens', () => 
        {
            expect(this.$scope.itens.length).toBe(2);
        });
        describe('adicionaItem', () => 
        {
            it('deve adicionar um novo ítem à lista com dados do escopo', () => 
            {
                this.$scope.item = {};
                this.$scope.item.produto = 'Carne';
                this.$scope.item.quantidade = 5;
                this.$scope.adicionaItem();
                expect(this.$scope.itens.length).toBe(3);
                expect(this.$scope.itens[2].produto).toBe('Carne');
                expect(this.$scope.itens[2].quantidade).toBe(5);
                expect(this.$scope.itens[2].comprado).toBeFalse;
            });
        });
    });
});*/
//S.A. Programação cliente side
//Atividade 1
var Yx1 = 0;
var Yx2 = 0;
var Yx3 = 0;
var Yx4 = 0;
var Yx5 = 0;
var vb1 = false;
var vb2 = false;
var vb3 = false;
var vb4 = false;
var vb5 = false;

$(document).keypress(function(e)
{
    let botão = (e.botão ? e.botão : e.which);
    if(botão == 13)
    {
        Ca(Xi=3);
        Cb(Xi=3);
        Cc(Xi=3);
        Cd(Xi=3);
        Ce(Xi=3);
        ATVSDA();
    }
});
const SDAReset = () =>
{
    Ca(Xi=3);
    Cb(Xi=3);
    Cc(Xi=3);
    Cd(Xi=3);
    Ce(Xi=3);
},
Ca = (Xi) =>
{
    let j = parseInt(document.getElementById("C1").value) || 0;
    if(j<=0)
    {
        j=1;
        vb1=true;
    }
    else if(j===1&&vb1===true&&Xi==1)
    {
        vb1=false;
    }
    if(Xi==0)
    {
        j = j-1;
    }
    else if(Xi==1&&vb1==false)
    {
        j = j+1;
    }
    if(j===1&&vb1===true&&Xi===3)
    {
        j=0
        vb1=false;
    }
    document.getElementById("C1").value = j;
    Yx1 = j * 329;
    document.getElementById("R1").innerHTML = "R$"+(parseInt(document.getElementById("C1").value) * 329)+",00"; 
},
Cb = (Xi) =>
{
    let j = parseInt(document.getElementById("C2").value) || 0;
    if(j<=0)
    {
        j=1;
        vb2=true;
    }
    else if(j===1&&vb2===true&&Xi==1)
    {
        vb2=false;
    }
    if(Xi==0)
    {
        j = j-1;
    }
    else if(Xi==1&&vb2==false)
    {
        j = j+1;
    }
    if(j===1&&vb2===true&&Xi===3)
    {
        j=0
        vb2=false;
    }
    document.getElementById("C2").value = j;
    Yx2 = j * 250;
    document.getElementById("R2").innerHTML = "R$"+(parseInt(document.getElementById("C2").value) * 250)+",00";
},
Cc = (Xi) =>
{
    let j = parseInt(document.getElementById("C3").value) || 0;
    if(j<=0)
    {
        j=1;
        vb3=true;
    }
    else if(j===1&&vb3===true&&Xi==1)
    {
        vb3=false;
    }
    if(Xi==0)
    {
        j = j-1;
    }
    else if(Xi==1&&vb3==false)
    {
        j = j+1;
    }
    if(j===1&&vb3===true&&Xi===3)
    {
        j=0
        vb3=false;
    }
    document.getElementById("C3").value = j;
    Yx3 = j * 245;
    document.getElementById("R3").innerHTML = "R$"+(parseInt(document.getElementById("C3").value) * 245)+",00"
},
Cd = (Xi) =>
{
    let j = parseInt(document.getElementById("C4").value) || 0;
    if(j<=0)
    {
        j=1;
        vb4=true;
    }
    else if(j===1&&vb4===true&&Xi==1)
    {
        vb4=false;
    }
    if(Xi==0)
    {
        j = j-1;
    }
    else if(Xi==1&&vb4==false)
    {
        j = j+1;
    }
    if(j===1&&vb4===true&&Xi===3)
    {
        j=0
        vb4=false;
    }
    document.getElementById("C4").value = j;
    Yx4 = j * 1235;
    document.getElementById("R4").innerHTML = "R$"+(parseInt(document.getElementById("C4").value) * 1235)+",00"
},
Ce = (Xi) =>
{
    let j = parseInt(document.getElementById("C5").value) || 0;
    if(j<=0)
    {
        j=1;
        vb5=true;
    }
    else if(j===1&&vb5===true&&Xi==1)
    {
        vb5=false;
    }
    if(Xi==0)
    {
        j = j-1;
    }
    else if(Xi==1&&vb5==false)
    {
        j = j+1;
    }
    if(j===1&&vb5===true&&Xi===3)
    {
        j=0
        vb5=false;
    }
    document.getElementById("C5").value = j;
    Yx4 = j * 549;
    document.getElementById("R5").innerHTML = "R$"+(parseInt(document.getElementById("C5").value) * 549)+",00"
},
ATVSDA = () =>
{
    SDAReset();
    let x1 = parseInt(document.getElementById("C1").value) || 0;
    let x2 = parseInt(document.getElementById("C2").value) || 0;
    let x3 = parseInt(document.getElementById("C3").value) || 0;
    let x4 = parseInt(document.getElementById("C4").value) || 0;
    let x5 = parseInt(document.getElementById("C5").value) || 0;
    document.getElementById("C6").innerHTML = x1+x2+x3+x4+x5;
    let y1 = Yx1 || 0;
    let y2 = Yx2 || 0;
    let y3 = Yx3 || 0;
    let y4 = Yx4 || 0;
    let y5 = Yx5 || 0;
    document.getElementById("R6").innerHTML = "R$"+(y1+y2+y3+y4+y5)+",00";
},
ATVSDAPag = () =>
{
    let Az = document.getElementById("Cxz1").checked;
    let Bz = document.getElementById("Cxz2").checked;
    let Cz = document.getElementById("Cxz3").checked;
    let resul = "";

    if(Az == true){resul = "Cartão de Credito";}
    if(Bz == true){resul = "Cartão de Debito";}
    if(Cz == true){resul = "Boleto";}
    document.getElementById("idPAG").innerHTML = "Pagamento selecionado : <span class='suc'>"+resul+"</span>";
}