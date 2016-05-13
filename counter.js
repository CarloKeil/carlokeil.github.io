//Borrowed code from these CodePens:
//http://codepen.io/benske/pen/yJoqz
//http://codepen.io/shivasurya/pen/FatiB
//Make sure to use this: <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
//And this for more easing options: <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
//Place this in your html <span class="revealOnScroll" countto="500" counterduration="3000" countereasing="linear" counterdelay="500">0</span> and edit as you see fit
//Remember to use <!DOCTYPE html>, or it won't work!
//The value in between the tags determines the starting value. Use countto to select end value (integer value), counterduration to select duration (integer value), countereasing to select easing type (text value) and counterdelay to select delay before counter starts (int value)
//Bugs are commonplace, and if found, will be fixed later.

var $window = $(window),
win_height_padded = $window.height() * 1.1

$window.on('scroll', revealOnScroll);

function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;
    $(".revealOnScroll:not(.count)").each(function () {
        var $this = $(this),
            offsetTop = $this.offset().top;
        if (scrolled + win_height_padded > offsetTop) {
             $this.addClass('count');

            if ($this.attr('countto') && $this.attr('counterduration') && $this.attr('countereasing') && $this.attr('counterdelay')) {
                $this.prop('Counter', $this.text()).delay($this.attr('counterdelay')).animate({ Counter: $this.attr("countto") }, { duration: parseInt($(this).attr("counterduration")), easing: $this.attr("countereasing"), step: function (now) { $(this).text(Math.ceil(now)); } });
            }
            else {
                $this.html("You forgot the countto attribute!");
            }
        }
    });
}