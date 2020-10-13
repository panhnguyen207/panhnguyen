// 1. chương trình tạo số X ngẫu nhiên 1-10
// 2. tạo ra prompt để người dùng nhập số
// 3. Nếu người dùng nhập đúng => alert "yeah"
// 4. Nếu người dùng nhập sai => alert "số bạn nhập quá lớn/nhỏ ! số cần tìm là x"

let num = Math.floor(Math.random() *10+ 1) // trả về số từ 1 - 10
let input = prompt("Hãy nhập số của bạn") // lấy input người dùng
// console.log(num + " is program's number") // hiện ra số chtrinh
// console.log(input + "is your input") // hiện ra số người dùng
let n = Number(input)
if(n==num){
    alert("chuc mung")
} else if (n>input) {
    alert("so cua ban qua lon" + num)
} else if (n<num) {
    alert("so cua ban qua nho so can tim la " + num)
} else {
    alert("dau vao khong hop le !")
}
