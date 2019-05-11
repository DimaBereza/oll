// var arr = ["one","two","three","compot"];
// 	console.log(arr[arr.length-1]);
// var string = "Maмa мыла раму";
// var result = string.indexOf("мыла");
// var result = string.slice(-5,12)








// console.log(result);
// if (result>=0){
// 	console.log("есть");
// }
// else{
// console.log("нет");
// }






// var string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quia, rem animi minus vitae labore quos velit blanditiis reiciendis ratione accusamus, facere veritatis, aliquid, inventore accusantium cum facilis perferendis voluptate. ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vero eligendi quo sed sunt autem laborum hic neque eos? Impedit saepe minima optio eaque veniam sed ea suscipit, id consectetur? ipsum dolor sit amet, consectetur adipisicing elit. Praesentium saepe error, harum, nesciunt fugit inventore minima laudantium molestias veritatis et repellat natus dignissimos sapiente eos illum illo obcaecati maxime magnam. ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatem tenetur molestias labore velit cupiditate voluptas quo pariatur sunt quisquam, ipsum vero adipisci, laboriosam incidunt ab quidem neque officia assumenda.";
// var ipsum = "ipsum";
// var firstChar = string.indexOf(ipsum);
// var array = [];
// for (var i = 0; i < string.length; i++) {
// 	var index = string.indexOf(ipsum,i);
// 	if (index == -1) {break}
// 	array.push(index);
// 	i = index;
// 	}
// console.log(array.length);
// console.log(array);





// function helloWorld(){
// 	alert("Hello, World!");
// }
// helloWorld();
// helloWorld();


//  function helloWorld(){
//  	hello = "hello";
//  	console.log(hello);
// }
// helloWorld();
// console.log(hello);




// var string = "Some string";
// function myFunc(){
// 	var string = "String #2"
// 	console.log(string);
// }
// myFunc();
// console.log(string);


// function myFunc(argument){
// 	//body...
// 	console.log(argument)
// 	}
// 	myFunc(true);
// 	myFunc(false);
// 	myFunc("Some string");





check();
function check(){
	var result = prompt("Ведите число", "");
	if (result.indexOf(",")> -1){
		alert("Ncпользуйте вместо запитой - точку")
		check()
	}
	else{
		kv(result);
	}
}
function kv(number){
	alert(number*number)

}
