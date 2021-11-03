window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__listaGam'), {
            slidesToShow: 1,
            slidesToScroll: 1,
            
            /* draggable: true, */
            dots: '.carousel__indicadores',
            arrows: {
              prev: '.carousel__anterior',
              next: '.carousel__siguiente'
            },
            responsive: [
                {
                    // screens greater than >= 775px
                    breakpoint: 450,
                    settings: {
                      // Set to `auto` and provide item width to adjust to viewport
                      slidesToShow: '2',
                      slidesToScroll: '1',
                      duration: 0.25
                    }
                  },{
                    // screens greater than >= 775px
                    breakpoint: 750,
                    settings: {
                      // Set to `auto` and provide item width to adjust to viewport
                      slidesToShow: '3',
                      slidesToScroll: '2',
                      duration: 0.25
                    }
                  },{
                  // screens greater than >= 775px
                  breakpoint: 940,
                  settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: '4',
                    slidesToScroll: '2',
                    duration: 0.25
                  }
                },{
                  // screens greater than >= 1024px
                  breakpoint: 1176,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    duration: 0.25
                  }
                }
            ]
    });
});

window.addEventListener('load', function(){
  new Glider(document.querySelector('.carousel__listaCel'), {
          slidesToShow: 1,
          slidesToScroll: 1,
          /* draggable: true, */
          dots: '.carousel__indicadoresCel',
          arrows: {
            prev: '.carousel__anteriorCel',
            next: '.carousel__siguienteCel'
          },
          responsive: [
              {
                  // screens greater than >= 775px
                  breakpoint: 450,
                  settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: '2',
                    slidesToScroll: '1',
                    duration: 0.25
                  }
                },{
                  // screens greater than >= 775px
                  breakpoint: 750,
                  settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: '3',
                    slidesToScroll: '2',
                    duration: 0.25
                  }
                },{
                // screens greater than >= 775px
                breakpoint: 940,
                settings: {
                  // Set to `auto` and provide item width to adjust to viewport
                  slidesToShow: '4',
                  slidesToScroll: '2',
                  duration: 0.25
                }
              },{
                // screens greater than >= 1024px
                breakpoint: 1176,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 3,
                  duration: 0.25
                }
              }
          ]
  });
});

window.addEventListener('load', function(){
  new Glider(document.querySelector('.carousel__listaNot'), {
          slidesToShow: 1,
          slidesToScroll: 1,
          /* draggable: true, */
          dots: '.carousel__indicadoresNot',
          arrows: {
            prev: '.carousel__anteriorNot',
            next: '.carousel__siguienteNot'
          },
          responsive: [
              {
                  // screens greater than >= 775px
                  breakpoint: 450,
                  settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: '2',
                    slidesToScroll: '1',
                    duration: 0.25
                  }
                },{
                  // screens greater than >= 775px
                  breakpoint: 750,
                  settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: '3',
                    slidesToScroll: '2',
                    duration: 0.25
                  }
                },{
                // screens greater than >= 775px
                breakpoint: 940,
                settings: {
                  // Set to `auto` and provide item width to adjust to viewport
                  slidesToShow: '4',
                  slidesToScroll: '2',
                  duration: 0.25
                }
              },{
                // screens greater than >= 1024px
                breakpoint: 1176,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 3,
                  duration: 0.25
                }
              }
          ]
  });
});