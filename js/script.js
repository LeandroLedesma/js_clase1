//key 'c'==> charcode 99
//key 'p'==> charcode 112

document.addEventListener("keypress", function(e) {
	console.log(e) 
    var ryu = document.querySelector("img");
    if (e.charCode == 99) {
        ryu.src = "./css/images/1.png";
    }else if (e.charCode == 112) {
        ryu.src = "./css/images/2.png"
    }
})
