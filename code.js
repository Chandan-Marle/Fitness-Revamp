function route1() {
    document.getElementById("route1").style.display = "none";
    document.getElementById("route2").style.display = "none";
    document.getElementById('step2').innerHTML = "<hr class='tu'> Step 2"
    document.getElementById("route1f").style.display = "inline";
}

function route1calc() {
    let gender = document.getElementById("gender1").value;
    let age = document.getElementById("age1").value;
    let height = document.getElementById("height1").value;
    let weight = document.getElementById("weight1").value;
    let exercise = document.getElementById("exercise1").value;
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
    
    document.getElementById('gender1').disabled = true;
    document.getElementById('age1').readOnly = true;
    document.getElementById('height1').readOnly = true;
    document.getElementById('weight1').readOnly = true;
    document.getElementById('exercise1').disabled = true;
    console.log(age);
    document.getElementById('s3').innerHTML = "<hr class='tu'> <h3 class='step'>Step 3</h3> <p>Now, fix your life. <br> Your basal metobolic rate is about "+calc+" calories a day.</p>"
}

function route2() {
    document.getElementById("route1").style.display = "none";
    document.getElementById("route2").style.display = "none";
    document.getElementById('step2').innerHTML = "<hr class='tu'> Step 2"
    document.getElementById("route2f").style.display = "inline";
}

function route2calc() {
    let gender = document.getElementById("gender").value;
    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let calc = 0.0;
    let amplitude = 0.0;
    let day = [];
    let intensity = [];
    let ampList = [];
    
    for (let i = 0; i <= 6; i++) {
        let hrs = document.getElementById(""+i+"Hrs").value;
        let int = document.getElementById(""+i+"").value;
        day.push(hrs);
        intensity.push(int);
    }


    for (let i = 0; i < day.length; i++) {
        let ampframe  = 0.0;
        if (intensity[i] == 0) {
            ampframe = .03;
        } else if (intensity[i] == 1) {
            ampframe = .0375;
        } else if (intensity[i] == 2) {
            ampframe = .04;
        }
        ampframe = ampframe*day[i];
        ampList.push(ampframe);
    }

    console.log(ampList);

    for (let i = 0; i < ampList.length; i++) {
        amplitude = amplitude + ampList[i];        
    }

    amplitude = amplitude + 1.2;

    if (gender == "male") {
        calc = 66+(6.23*weight)+(12.7*height)-(6.8*age);
        calc = calc * amplitude;
    }else if (gender == "female") {
        calc = 655+(4.35*weight)+(4.7*height)-(4.7*age);
        calc = calc * amplitude;
    }
    
    document.getElementById('s3').innerHTML = "<hr class='tu'> <h3 class='step'>Step 3</h3> <p>Now, fix your life. <br> Your basal metobolic rate is about "+calc+" calories a day.</p>"
}

