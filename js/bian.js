window.addEventListener('scroll',function(){
            var tou = document.querySelector('.top');
           if(window.scrollY>720)
            {
                tou.classList.add("bian");
            }else{
                tou.classList.remove("bian");
            }
        })