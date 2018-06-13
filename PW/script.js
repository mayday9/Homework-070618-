//todo Задание 1

/*var start, counter, summ=0;

start=parseInt(prompt("Введете целое число:"));
counter=start;

for(counter; counter<=500; counter++){
      // if(start==500){
      //  alert("Сумма равна 500.");
      //  break;
    //} else {
    summ=summ+counter;
    //}
}
alert("Сумма целых чисел от: "+start+" до 500 равна "+summ);*/

/* todo Задание 2

var x, y, summ;

x=parseInt(prompt("Введете целое число Х:"));
y=parseInt(prompt("Введете целое число Y:"));

summ=Math.pow(x, y);

alert(x+" в степени "+y+" равен: "+summ); */

//todo Задание 3

/*var counter, summ=0, average;

for(counter=1; counter<=1000; counter++){

    summ=summ+counter;

}
average=summ/1000;
alert("Среднее арифметическое целых чисел от 1 до 1000 равна: "+average);*/

//todo Задание 4

var start, counter, summ;

start=parseInt(prompt("Введите целое число от 1 до 20:"));
counter=start;
summ=start;

if(start<1 || start>20){
    alert("Введено неверное число");
}

else {
    for(counter; counter<20; counter++){
   summ=summ*(counter+1);
   }
    alert("Произведение целых чисел от: "+start+" до 20 равна "+summ);
}





