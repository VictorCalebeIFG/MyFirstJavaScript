
document.getElementById('button-calculate').onclick = function(){

    let sideA = document.getElementById('aInput').value
    let sideB = document.getElementById('bInput').value

    document.getElementById('cValue').innerHTML = Number(sideA) + Number(sideB)

}