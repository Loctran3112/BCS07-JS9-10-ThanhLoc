// hàm gán giá trị mới cho input
function ganGiaTriChoInput(tKhoan, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam) {

    document.getElementById("tknv").value = tKhoan;
    document.getElementById("name").value = hoTen;
    document.getElementById("email").value = email;
    document.getElementById("password").value = matKhau;
    document.getElementById("datepicker").value = ngayLam;
    document.getElementById("luongCB").value = luongCB;
    document.getElementById("chucvu").value = chucVu;
    document.getElementById("gioLam").value = gioLam;

}
// hàm tìm vị trí nhân viên dựa vào tài khoản nhân viên đó
function timVitriNhanVien(tKhoan) {
    var viTri = -1;
    arrNhanVien.forEach(function (item, index) {
        // item ở đây là tài khoản nhân viên nằm trong mảng arrNhanVien nên mới chấm tới thuộc tính tKhoan
        if (item.tKhoan == tKhoan) {
            viTri = index;
        }
    });
    return viTri;
}
// khi lấy được dữ liệu, gọi tới lớp đối tượng nhân viên và tạo ra đối tượng nhân viên
function layGiaTriInput() {
    var _tKhoan = document.getElementById("tknv").value;
    // kiemTraRong(_tKhoan, 'tbTkhoan');
    var _hoTen = document.getElementById("name").value;
    var _email = document.getElementById("email").value;
    var _matKhau = document.getElementById("password").value;
    var _ngayLam = document.getElementById("datepicker").value;
    var _luongCB = document.getElementById("luongCB").value * 1;
    var _chucVu = document.getElementById("chucvu").value;
    var _gioLam = document.getElementById("gioLam").value * 1;

    var valid = true;
    valid =
        kiemTraRong(_tKhoan, 'tbTkhoan') &
        kiemTraRong(_hoTen, 'tbTenNV') &
        kiemTraRong(_email, 'tbEmail') &
        kiemTraRong(_matKhau, 'tbPass') &
        kiemTraRong(_ngayLam, 'tbNgayLam') &
        kiemTraRong(_luongCB, 'tbLuongCB') &
        kiemTraRong(_chucVu, 'tbChucVu') &
        kiemTraRong(_gioLam, 'tbGioLam');
    // ở đây chúng ta kiểm tra biến valid,nếu valid là false sẽ return không chạy những đoạn lệnh bên dưới
    if (!valid) {
        return;
    }

    var nhanVien = new NhanVien(
        _tKhoan,
        _hoTen,
        _email,
        _matKhau,
        _ngayLam,
        _luongCB,
        _chucVu,
        _gioLam,
    );
    return nhanVien;
}

// lưu dữ liệu xuống localStorage
function saveStorage(arrNhanVien) {
    localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien));
}
// hàm gọi dữ liệu từ localStorage lên 
function getStorage() {
    // check điều kiện nếu như gọi tới không có dưới local
    var arrNhanVienLocal = localStorage.getItem("arrNhanVien");
    if (arrNhanVienLocal != null) {
        // nếu như arrNhanVienLocal có giá trị sẽ lấy giá trị đó gán mới vào cho mảng arrNhanVien đang có
        arrNhanVien = JSON.parse(arrNhanVienLocal);
    }
}