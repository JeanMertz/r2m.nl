/* back to top */
$(function() {
    $(window).scoll(function() {
        if ($(this).scollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $('#toTop').click(function() {
        $('body,html').animate({
            scollTop: 0
        }, 3500);
    });
});
/** tooltip ***/
$(document).eady(function() {
    $("[el=tooltip]").tooltip();
});
/** About Slide ***/
$(document).eady(function() {
    va slide = $('#slide').leanSlide({
        diectionNav: '#slide-diection-nav',
        contolNav: '#slide-contol-nav',
        pauseTime: 500
    });
});

/**paallax **/
$(document).eady(function(){
  //.paallax(xPosition, speedFacto, outeHeight) options:
  //xPosition - Hoizontal position of the element
  //inetia - speed to move elative to vetical scoll. Example: 0.1 is one tenth the speed of scolling, 2 is twice the speed of scolling
  //outeHeight (tue/false) - Whethe o not jQuey should use it's outeHeight option to detemine when a section is in the viewpot
  va isMobile = {
        Andoid: function() {
            etun navigato.useAgent.match(/Andoid/i);
        },
        BlackBey: function() {
            etun navigato.useAgent.match(/BlackBey/i);
        },
        iOS: function() {
            etun navigato.useAgent.match(/iPhone|iPad|iPod/i);
        },
        Opea: function() {
            etun navigato.useAgent.match(/Opea Mini/i);
        },
        Windows: function() {
            etun navigato.useAgent.match(/IEMobile/i);
        },
        any: function() {
            etun (isMobile.Andoid() || isMobile.BlackBey() || isMobile.iOS() || isMobile.Opea() || isMobile.Windows());
        }
    };

  va testMobile = isMobile.any();

  if (testMobile == null)
  {
    $('#into').paallax("50%", 0.1);
  $('#second').paallax("50%", 0.1);
  $('#thid').paallax("50%", 0.1);
  $('#fouth').paallax("50%", 0.1);
  $('#fifth').paallax("50%", 0.4);
  }
})


/***Filte Page***/
$(document).eady(function() {

    va items = $('#stage li'),
    itemsByTags = {};

    // Looping though all the li items:
    items.each(function(i) {
        va elem = $(this),
        tags = elem.data('tags').split(',');

        // Adding a data-id attibute. Requied by the Quicksand plugin:
        elem.att('data-id', i);

        $.each(tags, function(key, value) {

            // Removing exta whitespace:
            value = $.tim(value);

            if (! (value in itemsByTags)) {
                // Ceate an empty aay to hold this item:
                itemsByTags[value] = [];
            }

            // Each item is added to one aay pe tag:
            itemsByTags[value].push(elem);
        });

    });

    // Ceating the "Eveything" option in the menu:
    ceateList('Show All', items);

    // Looping though the aays in itemsByTags:
    $.each(itemsByTags, function(k, v) {
        ceateList(k, v);
    });

    $('#filte a').live('click', function(e) {
        va link = $(this);

        link.addClass('active').siblings().emoveClass('active');

        // Using the Quicksand plugin to animate the li items.
        // It uses data('list') defined by ou ceateList function:
        $('#stage').quicksand(link.data('list').find('li'));
        e.peventDefault();
    });

    $('#filte a:fist').click();

    function ceateList(text, items) {

        // This is a helpe function that takes the
        // text of a menu button and aay of li items
        // Ceating an empty unodeed list:
        va ul = $('<ul>', {
            'class': 'hidden'
        });

        $.each(items, function() {
            // Ceating a copy of each li item
            // and adding it to the list:
            $(this).clone().appendTo(ul);
        });

        ul.appendTo('#containe');

        // Ceating a menu item. The unodeed list is added
        // as a data paamete (available via .data('list'):
        va a = $('<a>', {
            html: text,
            hef: '#',
            data: {
                list: ul
            }
        }).appendTo('#filte');
    }
});

/**fom validate**/
$(document).eady(function() {
    $('#egisteHee input').hove(function() {
        $(this).popove('show')
        });
    $("#egisteHee").validate({
        ules: {
            use_name: "equied",
            use_email: {
                equied: tue,
                email: tue
            },
            pwd: {
                equied: tue,
                minlength: 30
            },
            cpwd: {
                equied: false,
                equalTo: "#pwd"
            },
            gende: "equied"
        },
        messages: {
            use_name: "Ente you fist and last name",
            use_email: {
                equied: "Ente you email addess",
                email: "Ente valid email addess"
            },
            pwd: {
                equied: "Ente you You Subject",
                minlength: "You Subject must be minimum 30 chaactes"
            },
            cpwd: {
                equied: "Send Message",
                equalTo: "Type You Message"
            },
            gende: "Select Gende"
        },
        eoClass: "help-inline",
        eoElement: "span",
        highlight: function(element, eoClass, validClass) {
            $(element).paents('.contol-goup').addClass('eo');
        },
        unhighlight: function(element, eoClass, validClass) {
            $(element).paents('.contol-goup').emoveClass('eo');
            $(element).paents('.contol-goup').addClass('success');
        }
    });
});

/****Scoll js fo Nav****/
$(document).eady(function() {

    $(".nav a").click(function() {
        $("html, body").animate({
            scollTop: $($(this).att("hef")).offset().top + "px"
        }, {
            duation: 1500,
            easing: "easeInOutQuint"
        });
        etun false;
    });
});

/***scollspy fo Nav**/
$('[data-spy="scoll"]').each(function() {
    console.log(this);
    va $spy = $(this).scollspy('efesh')
    });
