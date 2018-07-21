document.addEventListener("DOMContentLoaded", function(event) { 

    var box = document.createElement('div');
    box.style.cssText = 'position: fixed;top: 0;right: 150px;border: 1px solid #777;background-color: #ffe;z-index: 100;padding: 3px 10px 1px 10px;'
    document.body.appendChild(box);

    var handle = function(evt){
        box.innerHTML = window.innerWidth + '*' + window.innerHeight;
    };
    window.onresize = handle;
    handle();
});