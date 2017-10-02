
function applycontact() {
    let fname = document.getElementById("inputsm1").value;
    let lname = document.getElementById("inputsm2").value;
    if ($("#m").prop("checked")) {
        alert("Thank You for contacting Mr. " + fname.toUpperCase() + " " + lname.toUpperCase() + ". Your Information has been saved Successfully.")
    }
    else if ($("#f").prop("checked")) {
        alert("Thank You for contacting Miss. " + fname.toUpperCase() + " " + lname.toUpperCase() + ". Your Information has been saved Successfully.")
    } else if ($("#oth").prop("checked")) {
        alert("Thank You for contacting " + fname.toUpperCase() + " " + lname.toUpperCase() + ". Your Information has been saved Successfully.")
    }
}




function apply() {
    let answer = document.getElementById("inputsm").value;
    let validate = validateCoupon(answer);
    if (validate) {
        alert('Coupon code Applied Successfully...!!!');
    } else {
        alert('Entered code is invalid');
    }
    document.getElementById("inputsm").value = " ";
}

function validateCoupon(str) {
    if (typeof str != "string") {
        throw Error("Input must be of string type");
    }
    if (str.length > 0) {
        return str.trim().toUpperCase() == "FIRST USER" ? true : false;
    } else {
        throw Error("Input length should be greater than 0");
    }

}
function populate(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";
    if (s1.value == "veg") {
        var optionArray = ["s|Select one", "338|Malai Paneer", "105|Green Vegetables", "104|Cheese", "184|Vegan Food"]
    }
    else if (s1.value == "nveg") {
        var optionArray = ["s|Select one", "335|Chiken", "250|Mutton", "206|Pork", "104|Crab", "104|Cheese"]
    }
    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);

    }
}


$("#myBtn").click(function () {

    let a = document.getElementById("inputsm").value;
  
    let output;
    output = parseInt(document.getElementById("slct23").value);
    if ($("#one").prop("checked")) {
        output += parseInt($("#one").val());
    }
    if ($("#bro").prop("checked")) {
        output += parseInt($("#bro").val());
    }
    if ($("#three").prop("checked")) {
        output += parseInt($("#three").val());
    }
    if ($("#jf").prop("checked")) {
        output += parseInt($("#jf").val());
    }
    if ($("#four").prop("checked")) {
        output += parseInt($("#four").val());
    }
    if ($("#five").prop("checked")) {
        output += parseInt($("#five").val());
    }

    if ($("#rone").prop("checked")) {
        output += parseInt(document.getElementById("rone").value);
    }
    else if ($("#rtwo").prop("checked")) {
        output += parseInt(document.getElementById("rtwo").value);
    } else if ($("#rthree").prop("checked")) {
        output += parseInt(document.getElementById("rthree").value);
    }

    var StringOut = "Total consumed calorie in " + a + " is : " + output;
    $("#output").text(StringOut)
    $("#myModal").modal();
});

