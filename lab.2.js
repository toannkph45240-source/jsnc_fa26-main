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
// Bài 3: Tạo Object
const student = {
    name : "Nguyễn Khánh Toàn",
    age : 22,
    email : "toan.nguyenkhanh@example.com",
    major : "CNTT"
};

// In ra Object 
console.log(student);

// In ra tên sinh viên
console.log("Tên sinh viên:", student.name);

// In tuổi 
console.log("Tuổi:", student.age);

// In email
console.log("Email:", student.email);

// thay đổi tuổi 
student.age = 23;
console.log("Tuổi mới:", student.age);

// Thêm thuộc tính iphone
student.iphone = "0123456789";
console.log("Sau khi in ra iphone:", student);

// Bài 4 : Array of Object
const students = [
    {
        name : "Nguyễn Văn A",
        age : 20,
        email : "a@gmail.com"
    },
    {
        name : "Nguyễn Văn B",
        age : 21,
        email : "b@gmail.com"
    },
    {
        name : "Nguyễn Văn C",
        age : 22,
        email : "c@gmail.com"
    }
];

// In danh sách ra Console 
console.log(students);

//In tên sinh viên đầu tiên
console.log("Tên sinh viên đầu tiên:", students[0].name);

//In tuổi sinh viên thứ hai
console.log("Tuổi sinh viên thứ hai:", students[1].age);

// duyệt danh sách sinh viên bằng vòng lặp for
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// In tên của tất cả sinh viên
for (let i = 0; i < students.length; i++) {
    console.log("Tên sinh viên:", students[i].name);
}




