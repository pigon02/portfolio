$(document).ready(function() {

  // loading
  const Load = $('.Load');  
  Load.delay(3000).fadeOut();
  // Load.fadeOut();

  // 1
  const wrapper = document.getElementsByClassName('text-animation')[0];
  const spans = wrapper.getElementsByTagName('span');

  // 2

  // li.On event
  const currentItem = $('.currentItem li');
  const currentPCmockup = $('.pc_mockup li');

  // btn_list
  let sec2_btn_list = $('.sec2_btn_list li');
  const view = $('#section2 .view>a');

  // color_change
  const sec2_title = document.querySelector('#section2 #section_title h2');
  const view_shadow = document.querySelector('#section2 .view .shadow');
  
  // 3
  const sec3_img = $('#section3 .currentItem img');
  const sec3_slider = $('.sec3_slider');
  const sec3_presentation = $('.sec3_presentation');
  const sec3_present = $('.present');
  const sec3_view = $('#section3 .view');
  const close = $('.close span');


  // 4
  const cross = $('.cross>span');      
  const graphic_menu = $('.graphic_menu li');
  const graphic_cont = $('.graphic_cont');


  //5
  const graph_list = $('.graph span');


  
// sec3 presentation, slider

  sec3_view.click(function(){
    sec3_presentation.fadeIn();
    sec3_presentation.css('visibility','visible');
    $.fn.fullpage.setAllowScrolling(false);
  });

  close.click(function(){
    sec3_presentation.fadeOut();
    $.fn.fullpage.setAllowScrolling(true);
  })
  
  sec3_present.slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ] 
  });

  sec3_slider.slick({
    centerMode: true,
    arrows: false,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1
        }
      }
    ]
  });




  $('#fullpage').fullpage({
      easingcss3: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      navigation: true,
      autoScrolling: true,
      anchors: ['Home', 'Web', 'App', 'Graphic','About'],
      responsiveWidth: 320,
      // slidesToSections: true,
        licenseKey:'1C803096-FF9049FC-A4123F52-D747BA3D',
      // css3: true,
      scrollingSpeed: 1000,
              afterLoad: function(anchorLink, index){
              var loadedSection = $(this);
              if(index == 1){
                  anime({
                    targets: ".scroll_Down",
                    translateY: "0%",
                    duration: 300,
                    easing: "easeInOutCubic"
                  });
                  setTimeout(function(){
                    anime({
                      targets: "#TITLE p",
                      translateY: "0%",
                      duration: 300,
                      easing: "easeInOutCubic"
                    })
                  },5500);
              }

              if(index != 1){
                anime({
                  targets: ".scroll_Down",
                  translateY: "180%",
                  duration: 300,
                  easing: "easeInOutCubic"
                });
                
              }
                
              if(index == 2){
                setTimeout(wrap02,500);
                anime({
                  targets: "#section2 #section_title h2",
                  translateY: "0%",
                  duration: 1000,
                  easing: "easeInOutCubic"
                });
              }

              if(index != 2){
                anime({
                  targets: "#section2 #section_title h2",
                  translateY: "180%",
                  duration: 1000,
                  easing: "easeInOutCubic"
                });
                setTimeout(escapewrap02,500);
              }

              if(index == 3){
                setTimeout(wrap03,500);

                anime({
                  targets: ".sec3_logo img",
                  translateY: "0%",
                  duration: 1000,
                  easing: "easeInOutCubic"
                });
                anime({
                  targets: "#section3 #section_title h2",
                  translateY: "0%",
                  duration: 2000,
                  easing: "easeInOutCubic"
                });
                anime({
                  targets: ".panda",
                  opacity: "1",
                  duration: 2000,
                  easing: "easeInOutCubic"
                })
              }

              if(index != 3){
                anime({
                  targets: "#section3 #section_title h2",
                  translateY: "180%",
                  duration: 300,
                  easing: "easeInOutCubic"
                });
                anime({
                  targets: ".sec3_logo img",
                  translateY: "180%",
                  duration: 200,
                  easing: "easeInOutCubic"
                });
                anime({
                  targets: ".panda",
                  opacity: "0",
                  duration: 2000,
                  easing: "easeInOutCubic"
                })
              }

              if(index == 4){
                setTimeout(wrap04,500);
                anime({
                  targets: "#section4 #section_title h2",
                  translateY: "0%",
                  duration: 300,
                  easing: "easeInOutCubic"
                });
              }

              if(index != 4){
                anime({
                  targets: "#section4 #section_title h2",
                  translateY: "180%",
                  duration: 300,
                  easing: "easeInOutCubic"
                });
                setTimeout(escapewrap04,500);
              }

              if(index == 5){
                setTimeout(wrap05,500);
                anime({
                  targets: ".skillset",
                  opacity: "1",
                  duration: 1000,
                  easing: "easeInOutCubic"
                })
                anime({
                  targets: "#section5 #section_title h2",
                  translateY: "0%",
                  duration: 1000,
                  easing: "easeInOutCubic"
                });
                anime({
                  targets: ".infor_list h3",
                  translateY: "0%",
                  duration: 500,
                  easing: "easeInOutCubic"
                })
              }

              if(index != 5){
                anime({
                  targets: "#section5 #section_title h2",
                  translateY: "180%",
                  duration: 1000,
                  easing: "easeInOutCubic"
                });
                anime({
                  targets: ".infor_list h3",
                  translateY: "180%",
                  duration: 300,
                  easing: "easeInOutCubic"
                })
                setTimeout(escapewrap05,300);
              }
              
                

      }
  });

      setTimeout(wrap01_tit,3500);

     

    

    function wrap01_tit(){
      // title 스크립트
      wrapper.style.opacity='1';
      wrapper.innerHTML = wrapper.textContent.replace(/./g,'<span>$&</span>');

      for(var i = 0; i < spans.length; i++){
        spans[i].style.animationDelay = i*80+'ms';
      }  
    }

    
    
    function wrap02() {

     


      sec2_btn_list.each(function(){

        let idx = $(this).index();

        // let Color = [['#6dc78b'],['#93a9d4'],['#d49393'],['#aeaeae'],['#c7b67c']];

        // console.log("Color : ", Color);
        currentItem.eq(0).addClass('On');
        currentPCmockup.eq(0).addClass('On');
        
        
        sec2_btn_list.eq(idx).click(function(){

          currentItem.removeClass('On');
          currentPCmockup.removeClass('On');


          if(idx == 0){
            sec2_title.style.color = '#6dc78b';
            view_shadow.style.backgroundColor = '#6dc78b';
            currentItem.eq(0).addClass('On');
            currentPCmockup.eq(0).addClass('On');

            view.attr('href','http://dwitt.dothome.co.kr/multi_01/micro/15');

          }
    
          if(idx == 1){
            sec2_title.style.color = '#93a9d4';
            view_shadow.style.backgroundColor = '#93a9d4';
            currentItem.eq(1).addClass('On');
            currentPCmockup.eq(1).addClass('On');

            view.attr('href','http://dwitt.dothome.co.kr/multi_01/micro02/15');
          }
    
          if(idx == 2){
            sec2_title.style.color = '#d49393';
            view_shadow.style.backgroundColor = '#d49393';
            currentItem.eq(2).addClass('On');
            currentPCmockup.eq(2).addClass('On');

            view.attr('href','http://#');
          }
    
          if(idx == 3){
            sec2_title.style.color = '#aeaeae';
            view_shadow.style.backgroundColor = '#aeaeae';
            currentItem.eq(3).addClass('On');
            currentPCmockup.eq(3).addClass('On');

            view.attr('href','http://dwitt.dothome.co.kr/multi_01/rwd/15');
          }
    
          if(idx == 4){
            sec2_title.style.color = '#c7b67c';
            view_shadow.style.backgroundColor = '#c7b67c';
            currentItem.eq(4).addClass('On');
            currentPCmockup.eq(4).addClass('On');

            view.attr('href','http://pigon021.godomall.com');
          }
          
        });
      });
    }



    function escapewrap02()  {
      currentItem.removeClass('On');
      currentPCmockup.removeClass('On');
    }

    function wrap03() {

      sec3_img.transition({
        'opacity':'1'
      },5000);
    }
    

   

    function wrap04() {
      cross.eq(0).transition({
        'rotate':'360deg'
      },2000)
  
      cross.eq(1).transition({
        'rotate':'450deg'
      },2000)

      

      setTimeout(function(){
        graphic_cont.eq(0).addClass('On');
        graphic_menu.eq(0).addClass('On');
      },2300);

      graphic_menu.click(function(){
        const idx = $(this).index();

        graphic_cont.removeClass('On');
        graphic_menu.removeClass('On');

        graphic_cont.eq(idx).addClass('On');
        graphic_menu.eq(idx).addClass('On');
        
      })

    }

    function escapewrap04()  {

      cross.eq(0).transition({
        'rotate':'0deg'
      },100)
  
      cross.eq(1).transition({
        'rotate':'0deg'
      },100)

      graphic_cont.removeClass('On');
      graphic_menu.removeClass('On');
    }

   
    function wrap05() {
      graph_list.eq(0).transition({
        'width':'55%'
      },1000)
      graph_list.eq(1).transition({
        'width':'80%'
      },1000)
      graph_list.eq(2).transition({
        'width':'90%'
      },1000)
      graph_list.eq(3).transition({
        'width':'86%'
      },1000)
      graph_list.eq(4).transition({
        'width':'65%'
      },1000)
    }

    function escapewrap05()  {
      graph_list.transition({
        'width':'5%'
      },1000)
    }


// hamburger
 $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $(".sidenav").toggleClass('full');
    $(".itemMenu").toggleClass('appear');
  });
   $('.itemMenu').click(function(){
    $('#nav-icon').toggleClass('open');
    $(".sidenav").toggleClass('full');
    $(".itemMenu").toggleClass('full');
    $(".itemMenu").toggleClass('appear');
  });

});
