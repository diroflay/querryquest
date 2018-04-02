jQuery(function($){
    $('.game').hide()
    $('.submenu').not('#menu-choix').hide()

    var menu = $('#menu-choix a')
    menu.prepend('<span class="menu-hover">&#129170; </span>')
    menu.append('<span class="menu-hover"> &#129168;</span>')
    $('.menu-hover').css('color', '#fff')

    menu.hover(function(){
        $(this).find('.menu-hover').css('color', '#1F618D')
    }, function(){
        $(this).find('.menu-hover').css('color', '#fff')
    }
    )

    menu.click(function(){
        var choix = $(this).text()
        choix = choix.replace(new RegExp('🢒 | 🢐', 'g'), '').replace(new RegExp(' ', 'g'), '-').toLowerCase()
        console.log(choix)
        if(choix == 'charger-partie' | choix =='en-savoir-plus' | choix =='crédits' | choix == "nouvelle-partie")
        {
            $('#' + choix).fadeToggle(400)
            $('#menu-choix').hide()
        }
        else if (choix == 'se-déconnecter')
        {
            //quitter
        }
        else if(choix == 'training-mode')
        {
            $('.menu').hide()
            $('.bg').hide()
            $('.game').fadeToggle(400)
        }
    })

    $('.menu-back').click(function(){
        $('.submenu').not('#menu-choix').hide()
        $('#menu-choix').fadeToggle(400)
    })

    $('.submenu-content p').each(function () {
        var delay = ($(this).index() / 3) + 's';
        $(this).css({
          webkitAnimationDelay: delay,
          mozAnimationDelay: delay,
          animationDelay: delay
        });
    });

    $('#game-back').click(function() {
        $('.game').hide()
        $('.bg').show()
        $('.menu').fadeToggle(400)
        $('.submenu').not('#menu-choix').hide()
    })
})