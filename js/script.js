
function hitungluas(){
    var luas, sisiLuas = parseInt(document.getElementById("sisi-luas").value);

    luas = sisiLuas * sisiLuas
    console.log(sisiLuas)
    document.getElementById("output-luas").innerHTML = "L = S x S"+"<br>"+ "L = "+sisiLuas+" x "+sisiLuas +"<br>" + "L = "+luas;
}

function resetluas(){
    document.getElementById("output-luas").innerHTML = "<p></p>";
    document.getElementsByClassName("body").reset();

}

function hitungkeliling(){
    var keliling, sisiKeliling = parseInt(document.getElementById("sisi-keliling").value);

    keliling = 4 * sisiKeliling
    console.log(sisiKeliling)
    document.getElementById("output-keliling").innerHTML = "L = S x S"+"<br>"+ "L = "+"4"+" x "+sisiKeliling +"<br>" + "L = "+keliling;
}

function resetkeliling(){
    document.getElementById("output-keliling").innerHTML = "<p></p>";
    document.getElementsByClassName("body").reset();

} 