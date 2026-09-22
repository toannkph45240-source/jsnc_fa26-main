
console.log("-- BÀI 1: KHAI BÁO BIẾN --");

const name = "Nguyễn Khánh Toàn";
const age = 20;
const address = "Hà Nội";
const isStudent = true;

console.log("Họ tên:", name);
console.log("Tuổi:", age);
console.log("Địa chỉ:", address);
console.log("Sinh viên:", isStudent);


console.log("-- BÀI 2: THAY ĐỔI GIÁ TRỊ --");

let oldAge = 20;

console.log(oldAge);

oldAge = 21;

console.log(oldAge);


console.log("-- BÀI 3: TÍNH TOÁN VỚI BIẾN --");

const a = 10;
const b = 5;

console.log("Tổng:", a + b);
console.log("Hiệu:", a - b);
console.log("Tích:", a * b);
console.log("Thương:", a / b);


console.log("--- BÀI 4: HÀM CHÀO HỎI ---");

function sayHello(name) {
    console.log("Xin chào " + name);
}
sayHello("An");
sayHello("Bình");
sayHello("Toàn");


console.log("-- BÀI 5: HÀM TÍNH TỔNG --");

function sum(a, b) {
    return a + b;
}

const result = sum(10, 20);

console.log(result);


console.log("-- BÀI 6: HÀM TÍNH TIỀN ---");

function calculateTotal(price, quantity) {
    return price * quantity;
}

const total = calculateTotal(50000, 3);

console.log(total);


console.log("--- BÀI 7: TÍNH ĐIỂM TRUNG BÌNH ---");

function calculateAverage(math, english, javascript) {
    return (math + english + javascript) / 3;
}

const average = calculateAverage(8, 7, 9);
console.log(average);



console.log("---BÀI TẬP TỔNG HỢP ---");

// Khai báo thông tin sinh viên
const studentName = "Nguyễn Khánh Toàn";
const studentAge = 20;
const className = "WD01";


// Hàm hiển thị thông tin sinh viên
function showStudent(name, age, className) {
    console.log("Họ tên:", name);
    console.log("Tuổi:", age);
    console.log("Lớp:", className);
}

showStudent(studentName, studentAge, className);


// Hàm tính điểm trung bình 2 môn
function calculateAverage2(math, javascript) {
    return (math + javascript) / 2;
}

const diemTB = calculateAverage2(8, 9);

console.log("Điểm trung bình:", diemTB);