// // // Câu 03
// // var input = prompt("Nhập chuỗi: ");
// // var num = parseInt(prompt("Nhập số: "));
// // var str = input.split(" ");
// // console.log(str);

// // function abreviation(input, num){
// //     let result = "";
// //     str.forEach(word => {
// //         if (word.length >= num) {
// //             result += word.charAt(0).toUpperCase();
// //         }
// //     });
// //     return result;
// // }

// // const res = abreviation(input, num);
// // console.log(res);

// // Câu 04

// // var input = prompt("Nhập chuỗi: ");

// // const AlterString = (input) => {
// //     let res = " ";
// //     for(let i = 0; i < input.length; i ++){
// //         if( input.charAt[i] === " "){
// //             return res += " ";
// //         }
// //         else{
// //             if(i % 2 === 0){
// //                 res += input.charAt(i).toUpperCase();
// //             }
// //             else{
// //                 res += input.charAt(i).toLowerCase();
// //             }
// //         }  
// //     }
// //      return res;
// // }

// // const res = AlterString(input);
// // console.log(res);


// // Câu 05

// // var res = (arr) => {
// //     const n = arr.length
// //     const median = Math.floor(n / 2);
// //     if( n % 2 != 0){
// //         return arr[median]; 
// //     }
// //     else{
// //         return (arr[median - 1] + arr[median]) / 2;
// //     }
// // }
// // const test = (res([1, 2, 2, 4, 7, 8, 9, 10]));

// // console.log(test);

// // const myArray = [1, 2, 3, 4, 5];
// // const middleIndex = Math.floor(myArray.length / 2);
// // const middleElement = myArray[middleIndex];

// // console.log(middleElement); 

// // Câu 06

// // var happy = (str, age) => {
// //     const char = age % 2 ? "#" : "*";
// //     const middle = `${char} ${age} Chúc mừng sinh nhật ${str}! ${age} ${char}`;
// //     const up_down = char.repeat(middle.length);
// //     return `
// //     ${up_down}
// //     ${middle}
// //     ${up_down}
// //     `
// // };

// // var person_1 = happy("Triết", 19);
// // console.log(person_1);

// // Câu 07

// // const Blahblah = (string, number) => {
// //     const newstr = string.split(" ");
// //     const blahblah = newstr.map((item, index, originarray) =>{
// //         return number > originarray.length - index - 1 ? "blah" : item;
// // });

// //     const NewText = blahblah.join(" ");
// //     return `${NewText}...`;
// // }

// // const test = Blahblah("Anh học CNTT hả, cài win dùm em nhé!", 3);

// // console.log(test);


// // Câu 08 
// // Đề bài:
// // Tạo một hàm truyền vào một array gồm các phần tử là object
// // (gồm các key: product, quantity, price) để tính toán tổng giá và trả về dưới dạng một số.


// // const getTotalPrice = (array) => {
// //     return array.reduce((acc, total) => {
// //         return  acc + (total.quantity * total.price)
// //     }, 0);
// // }
// // const test = getTotalPrice([ 
// //     { product: "Sữa", quantity: 1, price: 7000 },
// //   { product: "Trứng", quantity: 12, price: 3000 },
// //   { product: "Bánh mỳ", quantity: 2, price: 15000 },
// //   { product: "Phô mai", quantity: 1, price: 5000 },
// // ]);

// // console.log(test);


// // Câu 09
// // Đề bài:
// // Tạo một hàm và truyền vào một chuỗi. Sau đó chuyển đổi ký tự đầu tiên của mỗi từ trong chuỗi đó thành chữ hoa. Trả về chuỗi vừa được định dạng.
// // Ví dụ: 
// // "Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó." —> "Fix Bug Là Chuyện Dễ. Tìm Đoạn Code Gây Ra Bug Để Fix Mới Là Chuyện Khó."
// // "Khi tui biên dịch và code chạy suôn sẻ trong lần đầu. Tui tự hỏi đã làm sai chỗ nào." —> "Khi Tui Biên Dịch Và Code Chạy Suôn Sẻ Trong Lần Đầu. Tui Tự Hỏi Đã Làm Sai Chỗ Nào."



// // const Capitalize = (str) => {   
// //     const newStr = str.split(" ");
// //     const firstChar = newStr.map(item => item.slice(0,1).toUpperCase() + item.slice(1))

// //     return firstChar.join(" ");
// //    }
    
// // const test = Capitalize("Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó");

// // console.log(test);


// // Câu 10

// // Đề bài:
// // Cầu chì bị đứt mạch điện khi dòng điện đi qua vượt quá định mức của cầu chì, để ngăn không cho nhiệt tích tụ quá nhiều (có thể gây cháy). Cầu chì lý tưởng để chọn cao hơn đầu ra hiện tại của thiết bị, nhưng cũng càng gần với nó càng tốt.
// // Đưa ra một danh sách các loại cầu chì và đầu ra hiện tại của thiết bị, hãy trả về cầu chì nào là tốt nhất cho thiết bị.
// // Ví dụ: 
// // Danh sách cầu chì "3V", "5V", "12V" và thiết bị "4.5V" —> "5V"
// // Danh sách cầu chì "5V", "14V", "2V" và thiết bị "5.5V" —> "14V"
// // Danh sách cầu chì "17V", "15V", "12V" và thiết bị "9V" —> "12V"

// // const chooseFuse = (fuse, device) => {
// //     const num = parseFloat(device);
// //     const possibleFuse = fuse.map(parseFloat).filter(index => index > num);
// //     return possibleFuse;
// // }

// // const test1 = chooseFuse(["3V", "5V", "12V"], "4.5V");
// // console.log(test1); // 5V


// // Câu 11 

// // const Counting = (arr) => {
// //     const res = arr.reduce((acc, index) => {
// //         return acc + index.filter(num => num === 1).length;
// //     }, 0);
// //     return res;
// // }

// // const test1 = Counting([
// //     [1, 1, 0, 1],
// // ]);
// // console.log(test1); // 1
  

// // Câu 12

// // const swappingCases = (string) => {
// //     var newStr = string.split("").map((index) => index === index.toUpperCase() ? index.toLowerCase() : index.toUpperCase()).join("");
// //     return newStr;\
// // }
// // const swappingCases = (string) => {
// //     let swapString = string
// //       .split("")
// //       .map((char) =>
// //         char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
// //       )
// //       .join("");
  
  
// //     return swapString;
// //   };
  

// // const test2 = "Đặng PhưƠnG NAm";
// // console.log(swappingCases(test2));
// // // Trả về: đẶNG pHƯơNg naM

// // Câu 13

// // const invertedNumbers = (array) => {
// //     const newarr = array.map(index => index = -index);
// //     return newarr;
// // }

// // console.log(invertedNumbers([1, -10, -20, 15, 100, -30]));



// // Câu 14

// // const ignoreNumbers = (string) => {
// //     const newStr = string.split("").map(index => (isNaN([parseInt(index)])) ? index : "").join("");
// //     return newStr;
// // }

// // const test1 = "Test4Ag54SF";
// // console.log(ignoreNumbers(test1));
// // // Trả về: TestAgSF


// // Câu 15
// // const smallWords = (string, number) => {
// //     const newStr = string.split(" ").filter(index => index.length <= number).join(" ");
// //     return newStr;
// // }

// // const test1 = "I Love Foood Code Too Playing Much";
// // console.log(smallWords(test1, 4));
// // // Trả về: I Love Code Too Much

// // Câu 16

// // const multiplyNumberInString = (string) => {
// //     var newStr = string.split("").map(index => (isNaN(parseInt(index))) ? "" : parseInt(index) * parseInt(index)).join("");
// //     return parseInt(newStr);
// // }

// // const test = multiplyNumberInString("JG23BGH5BA");
// // console.log(test);

// // Câu 17

// // const cart = [
// //     { name: "iPhone", price: 1000, quantity: 5 },
// //     { name: "iPad", price: 500, quantity: 2 },
// //     { name: "MacBook", price: 2000, quantity: 1 },
// //   ];
  

// // const TotalPrice = (cart) => {
// //     const Total = cart.reduce((sum, index) => {
// //         return sum + (index.price * index.quantity)
// //     }, 0)
// //     return Total;
// // }

// // console.log(TotalPrice([
// //     { name: "iPhone", price: 1000, quantity: 5 },
// //     { name: "iPad", price: 500, quantity: 2 },
// //     { name: "MacBook", price: 2000, quantity: 1 },
// //   ]));

// // Câu 18

// const SortStudentGender = (students) => {
//     const Groups = students.reduce((groups, item) => {
//         if(groups(item.gioiTinh))
//     })
// }


// const test = SortStudentGender( [
//     { hoTen: "Le Van A", gioiTinh: "Nam" },
//     { hoTen: "Do Van B", gioiTinh: "Nam" },
//     { hoTen: "Nguyen Thi C", gioiTinh: "Nu" },
//     { hoTen: "Dao Van D", gioiTinh: "Nam" },
//     { hoTen: "Hoang Thi E", gioiTinh: "Nu" },
//     { hoTen: "Vu Van F", gioiTinh: "Nam" },
//   ]);
  
//   console.log(test);