window.onload = function() {
    var imgs = document.getElementsByTagName('img');
    for(var i = 0; i < imgs.length; i++) {
        var img = imgs[i];
        img.onclick = function() {
            newSrc = this.src; //this = reference to image that fired onclick
            focus = document.getElementById('focus');
            focus.src = newSrc; //no quotes for variable references!
        }
    }
}
