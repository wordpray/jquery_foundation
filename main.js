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
  $("#addClassButton").on("click", function() {
    $("p").addClass("red");
  });

  // remove classボタンを押したとき
  $("#removeClassButton").on("click", function() {
    $("p").removeClass("red");
  });


});