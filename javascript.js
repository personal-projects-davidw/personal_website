function changeName() {
    var checkBox = document.querySelector("#nameSwitch");
    var nameImage = document.querySelector("#nameHead");

    if (checkBox.checked == true) {
        nameImage.src = "./images/alt_name.png";
    } else {
        nameImage.src = "./images/full_name.png";
    }
}
