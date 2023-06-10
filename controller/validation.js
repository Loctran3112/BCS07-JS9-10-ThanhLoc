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
function KiemTraEmail(checkInput, idThongBao) {
    // kiểm tra email bằng regex
    var regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // sử dụng phương thức .test để kiểm tra xem email nhập vào có phù hợp hay không
    // khi sử dụng .test sẽ trả về giá trị true hoặc false
    var hopLe = regexEmail.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng email";
        return false;
    }
}
function kiemTraChucVu(checkInput, idThongBao) {
    // check xem input có được nhập dữ liệu hay không,nếu không thì báo lỗi và trả về 1 kết quả false, có thì trả về true
    if (checkInput) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Chọn chức vụ không được để trống";
        return false;
    }
}
function checkName(checkInput, idThongBao) {
    // check xem input có được nhập dữ liệu hay không,nếu không thì báo lỗi và trả về 1 kết quả false, có thì trả về true
    if (checkInput) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Tên không được để trống";
        return false;
    }
}
function checkNumber(checkInput, idThongBao) {
    // check xem input có được nhập dữ liệu hay không,nếu không thì báo lỗi và trả về 1 kết quả false, có thì trả về true
    if (checkInput) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập số,không để trống";
        return false;
    }
}