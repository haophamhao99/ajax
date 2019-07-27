/*
lấy danh sách người dúng từ backend về
*/

$(document).ready(function () {
    //code
    var mangNguoiDung = [];

    $(document).ready(function(){
        console.log("thêm người dùng");
    })
    
    var nguoiDungService = new NguoiDungService();
    var ajaxNguoiDung = nguoiDungService.LayDanhSachNguoiDung();
    ajaxNguoiDung
        .done(function (result) {
            mangNguoiDung = result;
            console.log(mangNguoiDung);
            HienThi(mangNguoiDung);
        })
        .fail(function (err) {
            console.log(err);
        })
    console.log(mangNguoiDung);





    function HienThi(mangHienThi) {
        var tableDanhSach = $("#tblDanhSachNguoiDung");
        var content = "";
        mangHienThi.map(function (nguoiDung, index) {
            content += `
    <tr>
      <td>${index + 1}</td>
      <td>${nguoiDung.TaiKhoan}</td>
      <td>${nguoiDung.MatKhau}</td>
      <td>${nguoiDung.HoTen}</td>
      <td>${nguoiDung.Email}</td>
      <td>${nguoiDung.SoDT}</td>
      <td>
            <button class = "btn btn-danger" data-id = "${nguoiDung.TaiKhoan}"> Xóa </button>
      </td>
      
    </tr>
  `
        })
        tableDanhSach.html(content);
    }

    $("#btnThemNguoiDung").click(function () {

        $("#modal-title").html("thêm người dùng");
        var btn = `
        <button class ="btn btn-success btnThem"> Thêm người dùng </button>
        `;
        $("#modal-footer").html(btn);
    });


    $("body").delegate("#btnThem", "click", function () {
        // lay thong tin

        var taiKhoan = $("#TaiKhoan").val();
        var hoTen = $("#HoTen").val();
        var matKhau = $("#MatKhau").val();
        var email = $("#Email").val();
        var soDT = $("#SoDienThoai").val();
        var maLoai = $("#maLoaiNguoiDung").val();
        // tao doi tương
        var nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, email, soDT, maLoai);
        console.log(nguoiDung);

        // them vao database (api)
        nguoiDungService.ThemNguoiDung(nguoiDung)
            .done(function (result) {
                console.log(result);
            })
            .fail(function (err) {
                console.log(err);
            })
    })

    $("body").delegate(".btnXoa", "click", function() {
        var taiKhoan = $(this).data("id");
        console.log(taiKhoan);

        nguoiDungService.XoaNguoiDung(taiKhoan)
        .done (function() {
            location.reload;
        })
        .fail(function(err){
            console.log(err);
        })
    })
})