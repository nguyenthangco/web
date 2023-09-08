$(document).ready(function(){
    var i = 1;
    $("#btn2").click(function(){
        $("#myModal").modal();
    })
function kiemTraTen(){
    var i = 1;
    let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
    if($("#Name").val() == ""){
        $("#tbName").html("Không để trống");
        return false;
    }
    if(!mauKT.test($("#Name").val())) {
        $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
        return true;
    }
    $("#tbName").html("*");
    return true;
}
$("#Name").blur(kiemTraTen);
function kiemTraChungMinh(){
    var mauKT = /^\d*$/;
    if ($("#Cmnd").val() == ""){
        $("tbCmnd").html("Không để trống");
        return false;
    }
    if (!mauKT.test($("#Cmnd").val())){
        $("#tbCmnd").html("Dùng số từ 1 đến 9");
        return true;
    }
    else{
    var soCmnd =$("#Cmnd").val();
        
        if(soCmnd < 1 || soCmnd > 9){
            $("#tbCmnd").html("Từ 1 đến 100");
        }
        else{
            $("#tbName").html("*");
            return true;
        }
    }
}

$("Cmnd").blur(kiemTraChungMinh);
function KiemTraDiaChi(){
    var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-z0-9][a-z0-9]*)*$/;
    if($("#Qq").val() == ""){
        $("#tbQq").html("Không để trống");
        return false
    }
    if(!mauKT.test($("#Qq").val())){
        $("#tbQq").html("Mỗi ký tự đầu viết hoa không sử dụng số");
        return true;
    }
    $("#tbQq").html("*");
    return true;
}
$("#Qq").blur(KiemTraDiaChi);
function kiemTraMail(){
    if($("#Mail").val()== ""){
        $("#tbMail").html("Không để trống");
        return false;
    }
    if(!mauKT.test($("#Mail").val())){
        $("#tbMail").html("Theo mẫu xxxxxx@iuh.edu.vn");
        return true;
    }
    $("#tbMail").html("*");
    return true;
}
$("#Mail").blur(kiemTraMail);
function kiemTraSDT(){
    var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
    if($("#SDT").val() == ""){
        $("#tbSDT").html("Không để trống");
        return false;
    }
    if(!mauKT.test($("#SDT").val())){
        $("#tbSDT").html("Theo dạng 0xxx-xxx-xxx trong đó x là số");
        return true;
    }
    $("#tbSDT").html("*");
    return true;
}
$("#SDT").blur(kiemTraSDT);
$("#Save").click(function(){
    if(kiemTraTen() == true && kiemTraChungMinh() == true && kiemTraSDT() == true && kiemTraMail() == true && KiemTraDiaChi() == true){
        row ="<tr>";
        row += "<th>" + (i++) + "</th>";
        row += "<th>" + $("#Name").val()+"</th>";
        row += "<th>" + $("#Cmnd").val()+"</th>";
        row += "<th>" + $("#Qq").val()+"</th>";
        row += "<th>" + $("#Mail").val()+"</th>";
        row += "<th>" + $("#SDT").val()+"</th>";
        row += "<th>" + $("#ADD").val()+"</th>";
        $("#danhSach").append(row);
        $("#myModal").modal("hide");
    }
    })
})

