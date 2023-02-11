(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Global Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";


    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                    label: "APPL",
                    data: [120, 130, 135, 105, 120, 180, 155],
                    backgroundColor: "rgba(235, 22, 22, 1)"
                },
                {
                    label: "TSLA",
                    data: [128, 135, 140, 174, 230, 215, 195],
                    backgroundColor: "rgba(235, 72, 22, .7)"
                },
                {
                    label: "AT&T",
                    data: [14, 15, 13, 12, 15, 20, 19],
                    backgroundColor: "rgba(235, 22, 122, .3)"
                }
            ]
            },
        options: {
            responsive: true
        }
    });


    // Salse & Revenue Chart
    var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: ["August", "September", "October", "November", "December", "January", "February"],
            datasets: [{
                    label: "Total Expenses",
                    data: [4715, 5530, 4355, 3945, 4170, 4065, 3985],
                    backgroundColor: "rgba(235, 82, 22, .7)",
                    fill: true
                },
                {
                    label: "Total Income",
                    data: [7240, 7524, 8170, 8130, 9190, 10180, 6970],
                    backgroundColor: "rgba(235, 82, 22, .5)",
                    fill: true
                }
            ]
            },
        options: {
            responsive: true
        }
    });
})(jQuery);

