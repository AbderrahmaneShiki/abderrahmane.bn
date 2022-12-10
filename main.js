function openfunction() {
    document.getElementById('menu').style.width = '200px'
}

function closefunction() {
    document.getElementById('menu').style.width = '0px'

}
window.addEventListener('mouseup', function(event) {
    var box = document.getElementById('menu');
    if (event.target != box) {
        box.style.width = '0px'
    }
})