function NguoiDungService(){
    // lấy danh sách người dùng
    this.LayDanhSachNguoiDung = function(){
        return $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            type: "GET"
        })
    }

    // them nguoi dung
    this.ThemNguoiDung = function (nguoiDungMoi){
        return $.ajax({
                url: "http://svcy.myclass.vn/api/QuanlyTrungTam/ThemNguoiDung",
                type: "POST",
                data: nguoiDungMoi,
            })
    }

    // xoa nguoi dung
    this.XoaNguoiDung = function(id){
        return $.ajax({
                url: `http://svcy.myclass.vn/api/QuanlyTrungTam/XoaNguoiDung/${id}`,
                type: "DELETE",
            })
    }
}