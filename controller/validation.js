// Hàm kiểm tra xem người dùng có nhập dữ liệu hay không
function kiemTraRong(checkInput, idThongBao) {
    // check xem input có được nhập dữ liệu hay không,nếu không thì báo lỗi và trả về 1 kết quả false, có thì trả về true
    if (checkInput) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Tài khoản tối đa 4 - 6 ký số, không để trống";
        return false;
    }
}