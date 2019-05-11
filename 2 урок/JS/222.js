// var year = 1900;
// var typeOfYear = "";
// if (year % 4 == 0) {
// 	typeOfYear = 366;
// 	if (year % 100 == 0 && year % 400 != 0){
// 		 typeOfYear = 365;
// 	}
// }
// // else{
// // 	year = 366;
// // }
// if (typeOfYear == 365){
// 	console.log("Не высокосный");
// }
// else{
// 	console.log("Высокосный");
// }





// var string1 = "Maмa" , string2 = "мыла" , string3 = "раму";
// var count = 10;
// var string4 = "раз";
// var p = " ";

// console.log(string1 +  p + string2 + p + string3 + p + count + p + string4);

// console.log(`${string1} ${string2} ${string3} ${count} ${string4}`);







// var number = 1000;
// var string = "";
// if (number <= 1 || number >= 999){
// 	console.log(`${number} Не по условию`);
// }
// else{
// if (number % 2 ==0 ){
// 	string = "Четное"
// }
// else{
// 	string = "Нечетное"
// }
// if (number >= 10 && number <= 99){
// 	string = `${string} двузначное`;
// }
// else{
// 	string = `${string} трехзначное`;
// } 

// console.log(`${string} число`);

// }




// for (var i = 0 ; i<=10 ; i++){
// 	console.log(i);
// }


// var i = 0; 
// while(i <= 10){
// 	console.log(i);
// 	i++;
// }


// var i = 0; 
// do{
// 	console.log(i);
// 	i++;
// }while(i<=20)


// for (var i = 0 ; i<=10 ; i++){
// 	console.log(i);
// 	if (i==4){
// 		console.log("Дошли до 5");
// 		// break;
// 		i = 10000;
// 	}
// }
// var a = 3;
// var b = 5;
// var f = 0;
// for (var i = a ; i<=b; i++){
// 	f++;
// 	console.log(i);
// }
// console.log(f);




// var a = 3;
// var b = 7;
// var f = 0;
// for (var i = b-1 ; i>a; i--){
// 	f++;
// 	console.log(i);
// }
// console.log("Kол.чисел=",f);




var a = 5;
var b = 1;
var i = 0 ;
while ( i<=1900){
	i =i+100;
	b = i*a;
	console.log(b ,"ГРН.", i, "ГРАММ.");
}

