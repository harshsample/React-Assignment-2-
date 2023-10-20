$(document).ready(function () {
  $("#usercheck").hide();
  $("#user1check").hide();
  $("#passcheck").hide();
  $("#pass1check").hide();
  $("#emailcheck").hide();
  $("#email1check").hide();

  var user_err = true;
  var pass_err = true;
  var email_err = true;

  $("#username").keyup(function () {
    username_check();
  });

  function username_check() {
    patt = /^[a-zA-z  ]+$/;
    user_val = $("#username").val();

    if (user_val.length == " ") {
      $("#usercheck").show();
      $("#user1check").hide();
      $("#usercheck").html("**Please Fill user name ...");
      user_err = false;
      $("#usercheck").focus();
      return false;
    } else {
      $("#usercheck").hide();
      $("#user1check").show();
    }

    if (user_val.length < 3 || user_val.length > 10) {
      $("#usercheck").show();
      $("#user1check").hide();
      $("#usercheck").html("**User name must be 3 to 10 ...");
      $("#username").focus();
      user_err = false;
      return false;
    } else {
      $("#usercheck").hide();
      $("#user1check").show();
    }

    if (!patt.test(user_val)) {
      $("#usercheck").show();
      $("#user1check").hide();
      $("#usercheck").html("**Please Enter charecter... ");
      user_err = false;
      $("#username").focus();
      return false;
    } else {
      $("#usercheck").hide();
      $("#user1check").show();
    }
  }

  //Password
  $("#password").keyup(function () {
    pass_check();
  });

  function pass_check() {
    var pass_val = $("#password").val();

    if (pass_val.length == "") {
      $("#passcheck").show();
      $("#passcheck").css("color", "red");
      $("#passcheck").focus();
      $("#passcheck").html("**Please Fill Password...");
      pass_err = false;
      return false;
    } else {
      $("#passcheck").hide();
    }

    if ((pass_val.length == "") < 3 || (pass_val.length == "") > 10) {
      $("#passcheck").show();
      $("#pass1check").hide();
      $("#passcheck").css("color", "red");
      $("#passcheck").focus();
      $("#passcheck").html("**Password must be 3 to 10 ...");
      pass_err = false;
      return false;
    } else {
      $("#passcheck").hide();
      $("#pass1check").show();
    }
  }

  function conpass_check() {
    var conpass_val = $("#conpassword").val();
    var pass_val = $("#password").val();

    if (conpass_val != pass_val) {
      $("#conpasscheck").show();
      $("#conpasscheck").css("color", "red");
      $("#conpasscheck").focus();
      $("#conpasscheck").html("**Password not match...");
      conpass_err = false;
      return false;
    } else {
      $("#conpasscheck").hide();
    }
  }

  $("#email").keyup(function () {
    email_check();
  });

  function email_check() {
    var email_val = $("#email").val();

    var epatt = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (email_val.length == " ") {
      $("#emailcheck").show();
      $("#email1check").hide();
      $("#emailcheck").html("**Please Fill email...");
      email_err = false;
      $("#email").focus();
      return false;
    } else if (!epatt.test(email_val)) {
      $("#hEmail").show();
      $("#hEmail").html("Invalid Email");
      EmailError = false;
      return false;
    } else {
      $("#emailcheck").hide();
      $("#email1check").show();
    }
  }

  $(h1).mouseover(function () {
    $("#h1").slideUp();
    $("#h1").slideDown();
  });

  $("#submit").click(function () {
    username_check();
    pass_check();
    conpass_check();
    email_check();

    //user
    if (user_err == true) {
      return true;
    } else {
      return false;
    }

    //Password
    if (pass_err == true) {
      return true;
    } else {
      return false;
    }

    //confrim Password
    if (conpass_err == true) {
      return true;
    } else {
      return false;
    }

    //email
    if (email_err == true) {
      return true;
    } else {
      return false;
    }
  });
});
