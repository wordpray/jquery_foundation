$(function() {
    // hideボタンを押したとき
  $("#hideButton").on("click", function() {
    $("#title").hide();
  });
   // showボタンを押したとき
  $("#showButton").on("click", function() {
    $("#title").show();
  });

    // fade outボタンを押したとき
  $("#fadeOutButton").on("click", function() {
    $("#title").fadeOut(1000);
  });

  // fade inボタンを押したとき
  $("#fadeInButton").on("click", function() {
    $("#title").fadeIn(3000);
  });

  // appendボタンを押したとき
  $("#appendButton").on("click", function() {
    $("#lists").append('<li class="list">追加されたリスト</li>');
  });

  // removeボタンを押したとき
  $("#removeButton").on("click", function() {
    $(".list").remove();
  });

  // add classボタンを押したとき
  // クラスを追加しよう
  $("#addClassButton").on("click", function() {
    $("p").addClass("red");
  });

  // remove classボタンを押したとき
  //クラスを削除しよう
  $("#removeClassButton").on("click", function() {
    $("p").removeClass("red");
  });

  //属性の値を取得しよう
  $("#getAttrButton").on("click",function(){
    console.log($("img").attr("src"));
  });

  //属性の値を変更してみよう
  $("#changeAttrButton").on("click",function(){
    console.log($("img").attr("src","http://yoso-walk.net/wp-content/uploads/2014/07/enhanced-buzz-wide-6868-1401738537-9_R.jpg"));
  });

  //フォームの値を取得しよう
 $("#valButton").on("click",function(){
    console.log($("input").val());
 });


});