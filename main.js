/*
console.log("Hello");
console.log("Bang Trinh");
*/

var username = "Cybersoft";
username = "Trinh"
console.log("username la: " + username);

// Bài tập 1: Tính lương nvien

/**Phân tích
 * Đầu vào:
 * + soNgayLam: 10
 * + luongNgay: 100
 * 
 * Xử lý:
 * + tongLuong = luongNgay * soNgayLam
 * 
 * Đầu ra:
 * tongLuong = ?
 */

const luongNgay = 100;
const soNgayLam = 10;
var tongLuong = 0;
tongLuong = (luongNgay * soNgayLam);
console.log("Tong luong: " + tongLuong);

// Bài tập 2: Tính giá trị TB

/**Phân tích
 * Đầu vào:
 * + soThuc1: 1
 * + soThuc2: 2
 * + soThuc3: 3
 * + soThuc4: 4
 * + soThuc5: 5
 * 
 * Xử lý:
 * + giaTriTB = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5
 * 
 * Đầu ra:
 * giaTriTB = ?
 */

 var soThuc1 = 1;
 var soThuc2 = 2;
 var soThuc3 = 3;
 var soThuc4 = 4;
 var soThuc5 = 5;
 giaTriTB = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
 console.log("Giá trị trung bình: " + giaTriTB);

 // Bài tập 3: Quy đổi tiền

/**Phân tích
 * Đầu vào:
 * + USD: 23500
 * + soTien: 10
 * Xử lý:
 * + VND = soTien * USD
 * 
 * Đầu ra:
 * VND = ?
 */

const USD = 23500;
var soTien = 10;
var VND = soTien * USD;
console.log("Tổng tiền VND: " + VND);

 // Bài tập 4: Diện tích/ Chu vi HCN

/**Phân tích
 * Đầu vào:
 * + cDai: 10
 * + cRong: 4
 * Xử lý:
 * + chuVi = (cDai + cRong) * 2
 * dienTich = cDai * cRong
 * Đầu ra:
 * Chu vi = ?
 * Diện tích = ?
 */

 var cDai = 10;
 var cRong = 4;
 var chuVi = (cDai + cRong) * 2;
 var dienTich = cDai * cRong;
 console.log("Chu vi: " + chuVi);
 console.log("Diện tích: " + dienTich);


 // Bài tập 5: Tính tổng 2 ký số

/**Phân tích
 * Đầu vào:
 * + soNhap: 23
 * Xử lý:
 * + hangChuc = soNhap / 10
 * + hangDvi = soNhap % 10
 * Đầu ra:
 * Tổng 2 ký số = ?
 */

 var soNhap = 23;
 var hangChuc = soNhap / 10;
 var hangDvi = Math.floor(soNhap % 10);
 var tongGTri = hangChuc + hangDvi;
 console.log("Tổng 2 ký số: " + tongGTri);

