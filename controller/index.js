/*  Dự án Quản lý nhân viên
*   input: dữ liệu người dùng nhập vào tài khoản,họ tên,email,mật khẩu, ngày làm,lương,chức vụ,giờ làm
*   các bước xử lý:
*   output: xuất ra kết quả là thông tin nhân viên
*/
var arrNhanVien = [];

getStorage();

renderGiaoDien();
function renderGiaoDien() {
    var content = "";
    // khi chúng ta gọi dữ liệu từ localStorage lên và sử dụng,các object bên trong mảng arrNhanVien đã bị mất đi các phương thức 
    // idea là sẽ tạo ra 1 đối tượng mới từ lớp đối tượng NhanVien đang có và gán cho đối tượng đó tất cả thuộc tính đang có của từng object bên trong arrNhanVien sau khi gọi getStorage

    for (var i = 0; i < arrNhanVien.length; i++) {
        var nhanVien = new NhanVien();
        // console.log(nhanVien);
        var nhanVienItem = arrNhanVien[i];
        // console.log(nhanVienItem);
        // Object.assign giúp clone ra 1 object mới vs các thuộc tính
        Object.assign(nhanVien, nhanVienItem);
        // var nhanVien = arrNhanVien[i];
        var tongTienLuong = nhanVien.tinhTongLuong();
        var xepLoai = nhanVien.xepLoai();
        content += `
    <tr>
    	<td>${nhanVien.tKhoan}</td>
    	<td>${nhanVien.hoTen}</td>
    	<td>${nhanVien.email}</td>
        <td>${nhanVien.ngayLam}</td>
    	<td>${nhanVien.chucVu}</td>
        <td>${tongTienLuong.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
    	<td>${xepLoai}</td>
        <td>
        <button onclick="xoaNhanVien('${nhanVien.tKhoan}')" class="btn btn-danger me-3"><i class="fa-solid fa-trash"></i></button>
        <button onclick="editNhanVien('${nhanVien.tKhoan}')" class="btn btn-warning"><i class="fa-solid fa-wrench"></i></button>
        </td>
    </tr>
    `;
    }
    // console.log(nhanVien);
    document.getElementById("tableDanhSach").innerHTML = content;
}
function themNhanVien() {
    var nhanVien = layGiaTriInput();
    // var valid = true;
    valid =
        kiemTraRong(_tKhoan, 'tbTkhoan') &
        kiemTraRong(_hoTen, 'tbTenNV') &
        kiemTraRong(_email, 'tbEmail') &
        kiemTraRong(_matKhau, 'tbPass') &
        kiemTraRong(_ngayLam, 'tbNgayLam') &
        kiemTraRong(_luongCB, 'tbLuongCB') &
        kiemTraRong(_chucVu, 'tbChucVu') &
        kiemTraRong(_gioLam, 'tbGioLam');
    console.log(valid);
    // sẽ check nếu như nhanVien bị undifined sẽ chặn hết các hành động bên dưới
    if (valid == true) {
        arrNhanVien.push(nhanVien);
        // lưu trữ xuống localStorage
        saveStorage(arrNhanVien);
        // render lên giao diện bằng mảng vừa thêm vào
        renderGiaoDien();
        // reset input khi người dùng thêm nhân viên thành công sẽ clear hết thông tin cũ
        ganGiaTriChoInput("", "", "", "", "", "", "", "");
    };
}
document.getElementById("btnThemNV").onclick = themNhanVien;

// yêu cầu tạo ra 1 phương thức ở lớp đối tượng dùng để xếp loại nhân viên
// nếu nhân viên trên lương trên 15tr là cần cù, trên 10 là chăm chỉ,dưới 8 là lười biến

// xóa nhân viên khỏi mảng
/** đầu tiên tạo ra 1 function chạy chức năng xóa
 * bên trong function chạy 1 vòng lặp để duyệt mảng
 * bên trong vòng lặp sẽ check điều kiện là check tKhoan đăng nhập của nhân viên ngay tại lúc bấm trùng vs bất kì 1 tKhoan nào trong mảng thì sẽ trả về index của nhanVien ngay tại vị trí đó trong mảng, còn nếu không thì trả về -1
 * dùng hàm từ JS để xóa nhanVien, sẽ dùng hàm splice nhận vào 2 giá trị, giá trị đầu là vị trí index,giá trị t2 là số phần tử cần xóa
 * sau khi xóa, phải chạy lại hàm renderGiaoDien 1 lần nữa để upload lại dữ liệu mới lên giao diện
 */


function xoaNhanVien(tKhoan) {
    // console.log(tKhoan);
    var index = timVitriNhanVien(tKhoan);
    if (index != -1) {
        arrNhanVien.splice(index, 1);
        saveStorage(arrNhanVien);
        renderGiaoDien();
    }
}

// cập nhật (edit) lại thông tin nhân viên, cụ thể là sửa lại thông tin
/** tìm vị trí của nhanVien đó trong mảng
 * cho nút cập nhật thông tin nhân viên hiển thị khi bấm edit
 * lấy phần tử tìm được trong mảng hiển thị lên cho người dùng chỉnh sửa thông qua input
 */

function editNhanVien(tKhoan) {

    document.getElementById("btnCapNhat").style.display = "block";
    var index = timVitriNhanVien(tKhoan);
    var nhanVien = arrNhanVien[index];
    ganGiaTriChoInput(
        nhanVien.tKhoan,
        nhanVien.hoTen,
        nhanVien.email,
        nhanVien.matKhau,
        nhanVien.ngayLam,
        nhanVien.luongCB,
        nhanVien.chucVu,
        nhanVien.gioLam
    );
    document.getElementById("tknv").readOnly = true;
}
// cập nhật lại thông tin
function capNhatThongTinNhanVien() {
    var nhanVienDaChinhSua = layGiaTriInput();
    console.log(nhanVienDaChinhSua);
    var index = timVitriNhanVien(nhanVienDaChinhSua.tKhoan);
    // sau khi tìm được vị trí index của phần tử đang chỉnh sửa trong mảng, chúng ta sẽ làm 1 việc là thay thế phần tử đó trong mảng bằng giá trị mới
    arrNhanVien[index] = nhanVienDaChinhSua;
    saveStorage(arrNhanVien);
    renderGiaoDien();
}

document.getElementById("btnCapNhat").onclick = capNhatThongTinNhanVien;

/** thêm mảng vào localStorage
 *  localStorage được lưu trữ theo dạng key:value
 *  Phương thức set: gọi ra phương thức setItem,bên trong truyền vào 2 giá trị bao gồm key và value là string cần lưu trữ
 *  khi lưu trữ các loại dữ liệu khác kiểu dữ liệu string,gọi ra 1 phương thức JSON.stringify(giá trị cần chuyển đổi) để đổi kiểu dữ liệu về dạng Json string và lưu trữ được,nếu không value khi lưu sẽ có dạng [object]
 *  localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien));
 */

// Phương thức get: gọi ra phương thức getItem từ localStorage giúp lấy dữ liệu được lưu dưới local bằng các key
// khi muốn chuyển đổi 1 bject đã được stringify để lưu trữ,ta dùng phương thức JSON.parse(giá trị cần chuyển đổi)
// var tkhoanNhanVien = localStorage.getItem("arrNhanVien");
// console.log(JSON.parse(tkhoanNhanVien));

// Phương thức remove: xóa đi 1 giá trị bên trong localStorage
// localStorage.removeItem("")