//todo Задание 1

/*var userData;

userData=prompt("Enter symbol!");

if(userData>='0' && userData<='9'){
    alert("Number");
} else if (userData>='Z' && userData<='a' || userData>='A' && userData<='z') {
    alert("Letter");
}
else alert("Symbol");*/

//todo Задание 2

/*var ksIn, ksOut, vodaphIn, vodaphOut;

ksIn=parseFloat(prompt("Введите стоимость звонка внутри сети Киевстар"));
ksOut=parseFloat(prompt("Введите стоимость звонка за пределы сети Киевстар"));
vodaphIn=parseFloat(prompt("Введите стоимость звонка внутри сети Водафон"));
vodaphOut=parseFloat(prompt("Введите стоимость звонка за пределы сети Водафон"));

if(confirm("Вы будете звонить с Киевстара на Киевстар?")){
    alert("Стоимость звонка составит: "+ksIn+" грн/мин")
} else if(confirm("Вы будете звонить с Киевстара на Водафон")){
    alert("Стоимость звонка составит: "+ksOut+" грн/мин")
} else if(confirm("Вы будете звонить с Водафона на Киевстар?")){
    alert("Стоимость звонка составит: "+vodaphOut+" грн/мин")
} else (alert("Стоимость звонка c Водафона на Водафон составит: "+vodaphIn+" грн/мин"))*/

//todo Задание 3

const stringPrise=0.5, delayPrice=20;

var delayNumber, stringNumber, income;

/*alert("Сценарий номер 1.");
income=parseInt(prompt("Введите желаемый доход: "));
delayNumber=parseInt(prompt("Введите количество опозданий: "));

stringNumber=(income+(delayPrice*Math.floor(delayNumber/3)))/stringPrise;

alert("Количество строк, которые необходимо написать равно: "+stringNumber);*/

alert("Сценарий номер 2.");
stringNumber=parseInt(prompt("Введите количество написанных строк: "));
income=parseInt(prompt("Введите желаемый доход: "));

if (income>stringNumber*stringPrise){
    alert("Ну ты раскатал губу!")
} else {

    delayNumber=((stringPrise*stringNumber-income)/delayPrice);
    delayNumber=Math.floor(delayNumber/3);
    alert("Возможное количество опозданий равно: "+delayNumber);
}










