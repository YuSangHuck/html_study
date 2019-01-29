circle = document.getElementById('circle');
circle.style.left = 0 + 'px';
// console.log(circle);

var motion = function (interval) {
    increasement = 0;
    setInterval(function () {
        // circle = document.getElementById('circle');
        if(parseInt(circle.style.left) == 0)
            increasement = 1;
        else if(parseInt(circle.style.left) == 250)
            increasement = -1;

        circle.style.left = (increasement + parseInt(circle.style.left)) + 'px';
        // angle = (180/PI)*left/radius
        angle = parseInt((180 / Math.PI) * parseInt(circle.style.left) / 25);
        circle.style.transform = "rotateZ(" + angle + "deg)";
        // console.log("rotateZ(" + angle + "deg)");
        // console.log(angle);
        // console.log(circle);
    }, interval);
};


motion(10);
