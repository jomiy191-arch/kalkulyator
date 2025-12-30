// uyga vazifa
// 1
// let a = 4;
// let b = 6;
// let c = 8;
// console.log(Math.max(a, b, c));
// =================================
// 2
// let n = +prompt("Son kiriting:");
// let toq = 0;
// let juft = 0;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     juft += i;
//   } else {
//     toq += i;
//   }
// }

// console.log(toq);
// console.log(juft);

// ===============================================
// 3
// let ism = prompt("Ismingizni kiriting:");
// if (ism.length > 5) console.log("Uzun ism");
// else console.log("Qisqa ism");

// =====================================================
// 4
// function sum(a) {
//   if (a >= 90 && a <= 100) console.log("Alo");
//   else if (a >= 70 && a <= 89) console.log("Yaxshi");
//   else if (a >= 50 && a <= 69) console.log("Qoniqarli");
//   else console.log("Yomon");
// }
// sum(70);

// ===============================================================
// 5
// let numbers = [3, 12, 7, 25, 9];
// let max = numbers[0];
// for (const num of numbers) {
//   if (num > max) max = num;
// }
// console.log("Eng katta son:", max);

// ==============================================
// 6
// function kvadrat(n) {
//   return n * n;
// }
// console.log(kvadrat(6));
// ===================================================
// 7
// let fruits = ["Olma", "Banan", "Gilos", "Anor"];
// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }
  
// ===================================================
// 8
// function minTop(a, b) {
//   return a < b ? a : b;
// }
// console.log(minTop(3, 10));

// =========================================================
// 9
// let a = [2, -5, 7, -3, 0, 8];
// let count = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] < 0) count++;
// }
// console.log(count);
// =====================================================
// 10
// function tekshirParol(parol) {
//   if (parol === null) {  
//     console.log("Parol kiritilmadi");
//     return;
//   }
  
//   if (parol.length < 8) {
//     console.log("Parol juda qisqa");
//   } else if (parol === "12345678") {
//     console.log("Parol oddiy, xavfsiz emas");
//   } else {
//     console.log("Parol qabul qilindi");
//   }
// }

// let foydalanuvchiParol = prompt("Parolingizni kiriting:");
// tekshirParol(foydalanuvchiParol);

// =======================================================================
