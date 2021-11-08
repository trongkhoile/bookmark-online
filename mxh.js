let mang = [];

function bam() {
  var tenmuc = $(".input").val();
  if (tenmuc == "") {
    alert("Bạn chưa nhập thông tin ");
  } else if (mang.length < 5) {
    const html = `
    <div class="congcu"> 
        <div class="khungnho " >
        <h2 class="tm">${tenmuc}</h2>
        <div>
        <button class="nutbam1 w3-hover-yellow" onclick="bam1()">Thêm</button>
        <button class="nutbam5 w3-hover-yellow" onclick="xoa()">Xóa</button>
        </div>

        </div>
        <br><br>
        </div>
        `;
    const muc = {
      tenmuc: tenmuc,
      mucon: [],
    };
    mang.push(muc);
    $(".khung3").append(html);
  }
  console.log(mang);
}
function bam1() {
  var tenmucnho = $(".input1").val();
  var tenmucnho1 = $(".input2").val();
  if (tenmucnho == "" || tenmucnho1 == "") {
    alert("Bạn chưa nhập thông tin ");
  } else {
    const html = `  <br><br> <div class="khungnho1" >
    <a class="mucnho w3-hover-yellow" href ="${tenmucnho}" target="blank"><h3>${tenmucnho1}</h3></a> 
    <div>
    `;
    const html1 = `  <button class="nutbam1 w3-hover-yellow">Thêm</button>
    `;
    $(".khungnho").click(function () {
      $(this).append(html);
    });
    $(".nutbam1").replaceWith(html1);
  }
}
function xoa() {
  $(".congcu").click(function () {
    $(this).remove();
  });
}
