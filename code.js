function route1() {
    document.getElementById("route1").style.display = "none";
    document.getElementById("route2").style.display = "none";
    document.getElementById('step2').innerHTML = "<hr class='tu'> Step 2"
    document.getElementById("route1f").style.display = "inline";
}

function route1calc() {
    let gender = document.getElementById("gender").value;
    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let exercise = document.getElementById("exercise").value;
    let calc = 0.0;

    if (gender == "male") {
        calc = 66+(6.23*weight)+(12.7*height)-(6.8*age);
        for (let i = 0; i <= 3; i++) {
            if (exercise == i) {
                calc = calc*(1.2+(.175*i));
            }
        }
    }else if (gender == "female") {
        calc = 655+(4.35*weight)+(4.7*height)-(4.7*age);
        for (let i = 0; i <= 3; i++) {
            if (exercise == i) {
                calc = calc*(1.2+(.175*i));
            }
        }
    }
    
    document.getElementById('gender').disabled = true;
    document.getElementById('age').readOnly = true;
    document.getElementById('height').readOnly = true;
    document.getElementById('weight').readOnly = true;
    document.getElementById('exercise').disabled = true;
    console.log(calc);
    document.getElementById('s3').innerHTML = "<hr class='tu'> <h3 class='step'>Step 3</h3> <p>Now, fix your life. <br> Your basal metobolic rate is about "+calc+" calories a day.</p>"
}