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
        // console.log(circle);
    }, interval);
};


motion(10);
