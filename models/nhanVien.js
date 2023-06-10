function NhanVien(
    _tKhoan,
    _hoTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCB,
    _chucVu,
    _gioLam,
) {
    this.tKhoan = _tKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    // tính tiền lương nhân viên
    this.tinhTongLuong = function () {
        return this.luongCB * this.gioLam;
    }
    this.xepLoai = function () {
        var tongLuong = this.luongCB * this.gioLam;
        if (tongLuong < 10000000) {
            return "lười";
        } else if (tongLuong > 10000000 && tongLuong < 15000000) {
            return "chăm";
        } else if (tongLuong > 15000000) {
            return "siêng";
        }
    }
}