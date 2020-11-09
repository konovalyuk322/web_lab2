function func(hypotenuse,leg){
    if(hypotenuse <= 0) return "Error, hypotenuse value \nis incorrect";
    else if(leg <= 0) return "Error, leg value \n is incorrect";
    else if(leg >= hypotenuse) return "Error, leg >= hypotenuse";
    var res = Math.sqrt(hypotenuse*hypotenuse-leg*leg);
    return res;
}
function prog(){
    var hypotenuse = document.getElementById('hypotenuse').value;
    var leg = document.getElementById('leg').value;
    var result = func(hypotenuse,leg);
    document.getElementById('result').textContent = result;
    document.getElementById('answer').style.display = 'block';
}