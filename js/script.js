window.onload = function () {
    function clock() {
        var date = new Date(),
            day = date.getDate(),
            month = date.getMonth(),
            monthArr = ["JUN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
            year = date.getFullYear(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds();

        if (day < 10) day = "0" + day;
        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;
        if (sec < 10) sec = "0" + sec;

        document.getElementById("time-date").innerHTML = day + " " + monthArr[month] + " " + year;
        document.getElementById("time-hour").innerHTML = hour + ":" + min + ":" + sec;
    }

    var timer;

    function clockStart() {
        timer = setInterval(clock, 1000);
        clock()
    }

    clockStart();


    $('.banner-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
    })

    $('.reviews-wrapper').owlCarousel({
        items: 2,
        loop:true,
        margin:40,
        nav:false,
        dots:true,
    })
}
