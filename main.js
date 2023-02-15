// --------------------------------------------------- Gallery --------------------------------------
// get the slider element 
var slider = document.getElementsByClassName("slider")[0];
// get the images as slides array
var slides = slider.children;
// get the selection bar & the Circles
var bar = document.getElementsByClassName("bar")[0];
var circle = bar.children;
// get the left & right arrow
var left = document.getElementById("left");
var right = document.getElementById("right");

// select one image to view
function select() {
    // remove active class from all images and circle
    for (var i = 0; i < l; i++) {
        slides[i].classList.remove("active");
        circle[i].classList.remove("active");
    }
    // choose one slide &circle from slides&circle array
    slides[view].classList.add("active");
    circle[view].classList.add("active");
    // disable the left&right arrow if the current image is the first or the last
    if (view == 0) {
        left.classList.add("disable");
    }
    else {
        left.classList.remove("disable");
    }
    if (view == (l - 1)) {
        right.classList.add("disable");
    }
    else {
        right.classList.remove("disable");
    }
}


var view = 2;
select();
// choose the image by using the circles in the bar 
var l = slides.length;
for (var i = 0; i < l; i++) {
    circle[i].onclick = function () {
        console.log(this.getAttribute("id"));
        view = this.getAttribute("id");
        select();
    };

}

// choose the image by using left and right arrow
left.onclick = function () {
    if (view !== 0) {
        view--;
        select();
    }
};

right.onclick = function () {
    if (view !== (l - 1)) {
        view++;
        select();
    }
};

// ------------------------------------- Registration & Validation ------------------------------------


// get the input elements
var form = document.getElementById("Form");
var fname = document.getElementById("Fname");
var lname = document.getElementById("Lname");
var username = document.getElementById("username");
var pass = document.getElementById("pass");
var age = document.getElementById("age");

// get the error element
var fnameError = document.getElementById("e1");
var lnameError = document.getElementById("e2");
var usernameError = document.getElementById("e3");
var passError = document.getElementById("e4");
var ageError = document.getElementById("e5");



// get the Thank You page
var thakyou = document.getElementById("ThankYou");

var Fsignup = false;
var Lsignup = false;
var Usignup = false;
var Psignup = false;
var Asignup = false;

// check the firts name (validation)
function checkfname(fn) {
    var l = fn.length;

    if (l <= 3 || l > 15) {
        //the found class means there is an error then view the error message
        fnameError.classList.add("found");
        // the nvalid class to red border 
        fname.classList.add("nvalid")
        Fsignup = false;
    }
    else {
        var errorFound = false;
        // check the first name by usig [ASCII CODE] 
        for (var i = 0; i < l; i++) {
            if ((fn.charCodeAt(i) >= 31 && fn.charCodeAt(i) <= 64) || (fn.charCodeAt(i) >= 91 && fn.charCodeAt(i) <= 96)) {
                errorFound = true;
            }
        }
        if (!errorFound) {
            fnameError.classList.remove("found");
            fname.classList.remove("nvalid");
            // the nvalid class to green border
            fname.classList.add("valid");
            Fsignup = true;
        }
        else {
            fnameError.classList.add("found");
            fname.classList.add("nvalid");
            Fsignup = false;
        }
    }
}
// check the last name (validation)
function checklname(ln) {

    var l = ln.length;
    if (l <= 3 || l > 15) {
        lnameError.classList.add("found");
        lname.classList.add("nvalid")
        Lsignup = false;
    }
    else {
        var errorFound = false;
        for (var i = 0; i < l; i++) {
            if ((ln.charCodeAt(i) >= 31 && ln.charCodeAt(i) <= 64) || (ln.charCodeAt(i) >= 91 && ln.charCodeAt(i) <= 96)) {
                errorFound = true;
            }
        }
        if (!errorFound) {
            lnameError.classList.remove("found");
            lname.classList.remove("nvalid");
            lname.classList.add("valid");
            Lsignup = true;
        }
        else {
            lnameError.classList.add("found");
            lname.classList.add("nvalid");
            Lsignup = false;
        }
    }
}
// check the username (validation)
function checkusername(user) {

    var l = user.length;
    if ((l <= 6) || (l >= 20) || user.includes(" ")) {
        usernameError.classList.add("found");
        username.classList.add("nvalid");
        Usignup = false;
    }
    else {
        usernameError.classList.remove("found");
        username.classList.remove("nvalid");
        username.classList.add("valid");
        Usignup = true;
    }
}
// check the password (validation)
function checkpass(pas) {

    var l = pas.length;
    if (l < 8) {
        passError.classList.add("found");
        pass.classList.add("nvalid");
        Psignup = false;
    }
    else {
        var symbol = false;
        var nums = false;
        // check the password by usig [ASCII CODE] 
        for (var i = 0; i < l; i++) {
            if ((pas.charCodeAt(i) >= 31 && pas.charCodeAt(i) <= 47) || (pas.charCodeAt(i) >= 58 && pas.charCodeAt(i) <= 64)
                || (pas.charCodeAt(i) >= 91 && pas.charCodeAt(i) <= 96)
                || (pas.charCodeAt(i) >= 123 && pas.charCodeAt(i) <= 127)) {
                symbol = true;
            }
            if ((pas.charCodeAt(i) >= 48 && pas.charCodeAt(i) <= 57)) {
                nums = true;
            }
        }
        if ((symbol === true) && (nums === true)) {
            passError.classList.remove("found");
            pass.classList.remove("nvalid");
            pass.classList.add("valid");
            Psignup = true;
        }
        else {
            passError.classList.add("found");
            pass.classList.add("nvalid");
            Psignup = false;
        }
    }
}
// check the age (validation)
function checkage(ag) {

    if (ag >= 16 && ag <= 45) {
        ageError.classList.remove("found");
        age.classList.remove("nvalid");
        age.classList.add("valid");
        Asignup = true;
    } else {
        ageError.classList.add("found");
        age.classList.add("nvalid");
        Asignup = false;
    }
}

// check all fields when the form is clicked
function check(e) {
    checkfname(fname.value);
    checklname(lname.value);
    checkusername(username.value);
    checkpass(pass.value);
    checkage(age.value);
    // go to thank you page or not
    if ((Fsignup === true) && (Lsignup === true) && (Usignup === true) && (Psignup === true) && (Asignup === true)) {
        thakyou.classList.remove("displaynone");
    }
    else {
        e.preventDefault();
        thakyou.classList.add("displaynone");
    }

}

form.onsubmit = check;
