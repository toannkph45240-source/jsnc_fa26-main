// Tạo Array 
const names = ["An, Bình, Toàn, Long, Vũ"];

// In ra Array ra Cosole
console.log(names);

// In phần tử đầu tiên 
console.log("Phần tử đầu tiên:", names[0]);

// In phần tử cuối 
console.log("Phần tử cuối:", names[names.length - 1]);

// In số lượng phần tử 
console.log("Số lượng phần tử:", names.length);

// Thêm phần tử vào cuối Array
names.push("Mai");
console.log("Sau khi thêm:" , names);

// Xóa phần tử cuối Array
names.pop();
console.log("Sau khi xóa:", names); 


// Bài 2: Duyệt Array bằng vòng lặp for
// Tạo Array 
const namess = ["An", "Bình", "Toàn", "Long", "Vũ"];

// Duyệt Array bằng for
for (let i = 0; i < namess.length; i++) {
    console.log (namess[i]); 
}

