(function() {

    //  Nav js
    document.getElementById('myMenuFunction').onclick = function(e) {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    // Mobile hides menu on menu item click
    document.querySelectorAll('#myTopnav a').forEach(function(item) {
        item.addEventListener("click", function() {
            if (!item.classList.contains("icon") && document.getElementById("myTopnav").classList.contains("responsive")) {
                document.getElementById("myTopnav").className = "topnav";
            }
        })
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Active Nav reassignment

    var activeItem = document.querySelectorAll("#myTopnav a");

    activeItem.forEach(function(userItem) {
        userItem.addEventListener("click", function() {
            activeItem.forEach(function(userItem) {
                userItem.classList.remove("active");
            })
            userItem.classList.add("active");
        })
    });


    // On Scroll event

    var isInViewport = function(elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };


    // Set initial active state

    var h = document.querySelector('#home h1');
    var a = document.querySelector('#about h1');
    var n = document.querySelector('#need h1');
    var j = document.querySelector('#join h1');
    let f = document.querySelector('#faq h1');
    if (isInViewport(h)) {
        activeItem.forEach(function(userItem){
            userItem.classList.remove("active");
        });
        document.querySelectorAll('#myTopnav div a')[0].classList.add("active");
    } else if (isInViewport(a)) {
        activeItem.forEach(function(userItem){
            userItem.classList.remove("active");
        });
        document.querySelectorAll('#myTopnav div a')[1].classList.add("active");
    } else if (isInViewport(n)) {
        activeItem.forEach(function(userItem){
            userItem.classList.remove("active");
        });
        document.querySelectorAll('#myTopnav div a')[2].classList.add("active");
    } else if (isInViewport(j)) {
        activeItem.forEach(function(userItem){
            userItem.classList.remove("active");
        });
        document.querySelectorAll('#myTopnav div a')[3].classList.add("active");
    } else if (isInViewport(f)) {
        activeItem.forEach(function(userItem){
            userItem.classList.remove("active");
        });
        document.querySelectorAll('#myTopnav div a')[4].classList.add("active");
    }

    // On scroll set Active State
    document.addEventListener('scroll', function(){
        if (isInViewport(h)) {
            activeItem.forEach(function(userItem){
                userItem.classList.remove("active");
            });
            document.querySelectorAll('#myTopnav div a')[0].classList.add("active");
        } else if (isInViewport(a)) {
            activeItem.forEach(function(userItem){
                userItem.classList.remove("active");
            });
            document.querySelectorAll('#myTopnav div a')[1].classList.add("active");
        } else if (isInViewport(n)) {
            activeItem.forEach(function(userItem){
                userItem.classList.remove("active");
            });
            document.querySelectorAll('#myTopnav div a')[2].classList.add("active");
        } else if (isInViewport(j)) {
            activeItem.forEach(function(userItem){
                userItem.classList.remove("active");
            });
            document.querySelectorAll('#myTopnav div a')[3].classList.add("active");
        } else if (isInViewport(f)) {
            activeItem.forEach(function(userItem){
                userItem.classList.remove("active");
            });
            document.querySelectorAll('#myTopnav div a')[4].classList.add("active");
        }
    });

})();