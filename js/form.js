function valid() {


    var nam = document.getElementById("nm");
    var lnam = document.getElementById("lnm");
    var mal = document.getElementById("mail");
    var psw = document.getElementById("pas");

    if (nam.value == "") {
        document.getElementById("tt").innerHTML = "";
        nm.style.border = "1px solid red";
        return false;

    }


    if (lnam.value == "") {
        document.getElementById("tt").innerHTML = "";
        lnm.style.border = "1px solid red";
        return false;

    }



    if (mal.value == "") {
        document.getElementById("tt").innerHTML = "";
        mail.style.border = "1px solid red";
        return false;

    }


    if (psw.value == "") {
        document.getElementById("pp").innerHTML = "dzfgertyerat";
        pass.style.border = "1px solid red";
        return false;

    }
    if (psw.value.length <= 4) {
       document.getElementById("pp").innerHTML = "dzfgertyerat";
        pass.style.border = "1px solid red";
        return false;

    }
}
