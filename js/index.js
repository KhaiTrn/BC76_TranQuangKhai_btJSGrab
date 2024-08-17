// 25(1)8000(18)7500(6)7000
// 6p - 3p = 3p 2000
// 12p - 3p = 3p * 2000
const GRAB_CAR = "grabCar";
const GRAB_SUV = "grabSUV";
const GRAB_BLACK = "grabBlack";
//NV 1 : Thực hiện tạo 1 sự kện click cho nút button tính tiền và DOM tới các input để tính dữ liệu
// NV2 : Viết 4 function riêng biệt có nhận tham số để từ các dữ liệu người dùng nhập sẽ xử lí trả về giá KmDauTien giá KmTu1Den19 và giá KmTu19TroLen và giá thoiGianCho
// Nv3 : Sau khi đã tìm được các giá tiền phù hợp, áp dụng tính toán và trả về kết quả phù hợp nhất
// NV4 : Kiểm tra ở phần dưới button tính tiền có một layout dùng để hiển thị tổng tiền, xử lý khi click vô nút tính tiền sẽ xuất hiện layout đó và trả kết quả (đã chuyển đổi kiểu tiền tệ) vào bên trong để hiển thị ng dùng
function giaKmDauTien(loaiXe) {
  switch (loaiXe) {
    case GRAB_CAR: {
      return 8000;
    }
    case GRAB_SUV: {
      return 9000;
    }
    case GRAB_BLACK: {
      return 10000;
    }
  }
}
function giaKmTu1Den19(loaiXe) {
  switch (loaiXe) {
    case GRAB_CAR: {
      return 7500;
    }
    case GRAB_SUV: {
      return 8500;
    }
    case GRAB_BLACK: {
      return 9500;
    }
  }
}
function giaKmTu19TroLen(loaiXe) {
  switch (loaiXe) {
    case GRAB_CAR: {
      return 7000;
    }
    case GRAB_SUV: {
      return 8000;
    }
    case GRAB_BLACK: {
      return 9000;
    }
  }
}
function giaThoiGianCho(loaiXe) {
  switch (loaiXe) {
    case GRAB_CAR: {
      return 2000;
    }
    case GRAB_SUV: {
      return 3000;
    }
    case GRAB_BLACK: {
      return 3500;
    }
  }
}

document.getElementById("tinhTien").onclick = function () {
  let soKM = document.getElementById("txt-km").value * 1;
  console.log(soKM);
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  console.log(thoiGianCho);
  let loaiXeGrabCar = document.querySelector("input[name='selector']:checked");
  if (loaiXeGrabCar == null) {
    alert("Vui lòng chọn loại xe");
  }
  let loaiXe = loaiXeGrabCar.value;
  let tienKmDauTien = giaKmDauTien(loaiXe);
  let tienKmTu1Den19 = giaKmTu1Den19(loaiXe);
  let tienKmTu19TroLen = giaKmTu19TroLen(loaiXe);
  let tienTgCho = giaThoiGianCho(loaiXe);
  let tongTien = 0;
  if (soKM <= 19) {
    tongTien = 1 * tienKmDauTien + (soKM - 1) * tienKmTu1Den19;
  } else {
    tongTien =
      1 * tienKmDauTien + 18 * tienKmTu1Den19 + (soKM - 19) * tienKmTu19TroLen;
  }
  // 8p -3 =5p
  let soLanPhat = Math.floor((thoiGianCho - 3) / 3);
  tongTien += soLanPhat * tienTgCho;
};
// tạo 1 chức năng click cho nút in hóa đơn

document.getElementById("inHoaDon").onclick = function () {
  let soKM = document.getElementById("txt-km").value * 1;

  let loaiXeGrabCar = document.querySelector("input[name='selector']:checked");
  if (loaiXeGrabCar == null) {
    alert("Vui lòng chọn loại xe");
  }
  let loaiXe = loaiXeGrabCar.value;
  let tienKmDauTien = giaKmDauTien(loaiXe);
  let tienKmTu1Den19 = giaKmTu1Den19(loaiXe);
  let tienKmTu19TroLen = giaKmTu19TroLen(loaiXe);
  let tienTgCho = giaThoiGianCho(loaiXe);
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  let thoiGianChoTinhPhi = 0;
  if (thoiGianCho <= 3) {
    thoiGianChoTinhPhi = 0;
  } else {
    thoiGianChoTinhPhi = thoiGianCho - 3;
  }
  let soLanPhat = Math.floor(thoiGianChoTinhPhi / 3);
  let tienPhat = soLanPhat * tienTgCho;
  let soKMDauTien = 0;
  let soKMTu1Den19 = 0;
  let soKMTu19TroDi = 0;
  let tongTienKmDauTien = 0;
  let tongTienKmTu1Den19 = 0;
  let tongTienKMTu19TroDi = 0;
  let tongTien = 0;
  // KM đầu tiên
  if (soKM <= 1) {
    soKMDauTien = soKM;
  } else {
    soKMDauTien = 1;
  }
  tongTienKmDauTien = soKMDauTien * tienKmDauTien;

  // KM từ 1 đến 19
  if (soKM <= 1) {
    soKMTu1Den19 = 0;
  } else if (1 < soKM && soKM <= 19) {
    soKMTu1Den19 = soKM - 1;
  } else {
    soKMTu1Den19 = 18;
  }
  tongTienKmTu1Den19 = soKMTu1Den19 * tienKmTu1Den19;
  // KM từ 19 trở đi
  if (soKM < 19) {
    soKMTu19TroDi = 0;
  } else {
    soKMTu19TroDi = soKM - 19;
  }
  tongTienKMTu19TroDi = soKMTu19TroDi * tienKmTu19TroLen;
  tongTien =
    tongTienKmDauTien + tongTienKmTu1Den19 + tongTienKMTu19TroDi + tienPhat;
  let tienTe = tongTien.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
  $("#exampleModal").modal("show");
  document.querySelector(
    ".modal-body"
  ).innerHTML = `<table class="table table-bordered">
  
    <tr>
      <th colspan="2">Loại Xe</th>
      <th scope="col">${loaiXe}</th>
      <th scope="col">số km : ${soKM}km</th>
    </tr>
  <tbody>
    <tr>
      <th scope="row">Chi tiết</th>
      <td>Sử dụng</td>
      <td>Đơn giá <br/> (1000đ)</td>
      <td>thành tiền <br/>(1000đ)</td>
    </tr>
    <tr>
      <th scope="row">KM đầu tiên</th>
      <td>${soKMDauTien}km</td>
      <td>${tienKmDauTien}</td>
      <td>${tongTienKmDauTien}</td>
    </tr>
    <tr>
      <th scope="row">Từ 1km đến <br/> 19km</th>
      <td>${soKMTu1Den19}km</td>
      <td>${tienKmTu1Den19}</td>
      <td>${tongTienKmTu1Den19}</td>
    </tr>
    <tr>
      <th scope="row">Từ 19km trở đi</th>
      <td>${soKMTu19TroDi}km</td>
      <td>${tienKmTu19TroLen}</td>
      <td>${tongTienKMTu19TroDi}</td>
    </tr>
    <tr>
      <th scope="row" class = "p-3">Thời gian chờ <br/> 3 phút đâu free</th>
      <td>Chờ ${thoiGianCho} phút, tính tiên ${thoiGianChoTinhPhi} phút</td>
      <td>${tienTgCho}</td>
      <td>${tienPhat}</td>
    </tr>
    <tr>
      <td colspan = "4" class = "text-right">Tổng tiền : <span class = "text-danger font-weight-bold">${tienTe}</span></td>
    </tr>
  </tbody>
</table>`;
};
