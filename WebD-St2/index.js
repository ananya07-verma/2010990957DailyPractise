
function myFunc() {
    var ex = /^[0-9]{5}$/;
    let n1 = document.getElementById("div1").value;
    // n1 = Number(n1);

    if (n1 == 0 || n1 == "" || n1 == " ") {
        alert("Please enter a value");
    }

    else if (ex.test(n1) == false) {
        alert("Value must be atleast 5 digits");
        return;
    } 
    
    else {

        let sum = 0;
        
        while (n1 > 0) {
            sum += n1 % 10;
            n1 = Math.floor(n1 / 10);
        }
        let border = (sum / 5);


        const box = document.getElementById("square");
        box.style.width = sum + "px";
        box.style.height = sum + "px";
        box.style.backgroundColor = "black";
        box.style.borderRadius = border + "px";
        box.style.marginTop = "8%";
        box.style.transition="all 3s";
    }
}