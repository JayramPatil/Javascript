function binary(decimal) {

	/* Normal Way To Do */

	// let bin
	// if(decimal <= 0)
	// 	{
	// 		return 0;
	// 	}
	// else if(decimal < 1024)
	// 	{
	// 		let arr = [1,2,4,8,16,32,64,128,256,512]
	// 		let i = 0;
	// 		while(decimal > arr[i])
	// 			{
	// 				i++;
	// 			}
	// 		let total = arr[--i];
	// 		bin = 1;
	// 		while(i > 0)
	// 			{
    //                 i--;
	// 				if(decimal >= (total + arr[i]))
	// 					{
	// 						total += arr[i];
	// 						bin = (bin*10)+1
	// 					}
	// 				else{
	// 					bin = (bin*10);
	// 				}
	// 			}
	// 	}
    //     else
    //     {
    //         alert("Number Should Be Less Than 1024");
    //         return "Number Should Be Less Than 1024"
    //     }

	/* JS Way To Do It :) */
	return parseInt(decimal).toString(2);
}
let num = prompt("Enter A Number To Get Binary Conversion (Less Than 1024)");
document.write(binary(num));