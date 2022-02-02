   // beverages
   $('.click-bev').click(function () {
    $('.changing-menu').html(`<div class="changing-menu text-capitalize">
              <div class="row" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-12 d-flex justify-content-center">
                  <ul id="menu-flters">
                    <li  class="coffee-filter">coffee</li>
                    <li class="smoothy-filter">smoothy</li>
                    <li class="shake-filter">shake</li>
                    <li class="freak-shake-filter">freak-shake</li>
                    <li class="shots-filter">Shots</li>
                    <li class="mocktail-filter">mocktail</li>
                  </ul>
                </div>
              </div>
            </div>`)
    // coffee menu
    $('.coffee-filter').click(function () {
      $('.show_menu').html(` <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
              <div class="col-lg-6 menu-item filter-coffee">
                <div class="menu-content filter-coffee">
                  <a href="#">cold coffee</a><span>&#8377; 119</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-coffee">
                <div class="menu-content">
                  <a href="#">chocalate cold coffee</a><span>&#8377; 129</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-coffee">
                <div class="menu-content">
                  <a href="#">cold coco</a><span>&#8377; 119</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-coffee">
                <div class="menu-content">
                  <a href="#">strawberry cold coffee</a><span>&#8377; 129</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-coffee">
                <div class="menu-content">
                  <a href="#">hazelnut cold coffee</a><span>&#8377; 149</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-coffee">
                <div class="menu-content">
                  <a href="#">caramal cold coffee</a><span>&#8377; 149</span>
                </div>
              </div>
              </div>`)

    });
    // smoothy menu
    $('.smoothy-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
              <div class="col-lg-6 menu-item filter-smoothy ">  
                <div class="menu-content">
                  <a href="#">fruit nutle</a><span>&#8377; 149</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-smoothy">
                <div class="menu-content">
                  <a href="#">chocalate</a><span>&#8377; 149</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-smoothy">
                <div class="menu-content">
                  <a href="#">nirmana</a><span>&#8377; 149</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-smoothy">
                <div class="menu-content">
                  <a href="#">strawberry</a><span>&#8377; 169</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-smoothy">
                <div class="menu-content">
                  <a href="#">lover king</a><span>&#8377; 179</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-smoothy">
                <div class="menu-content">
                  <a href="#">T.C.C Specials</a><span>&#8377; 199</span>
                </div>
              </div>`)
    });

    // shake menu
    $('.shake-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
              <div class="col-lg-6 menu-item filter-shake">
                <div class="menu-content">
                  <a href="#">chocalate hazelnut</a><span>&#8377; 129</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-shake"> 
                <div class="menu-content">
                  <a href="#">chocalate cookies</a><span>&#8377; 149</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-shake"> 
                <div class="menu-content">
                  <a href="#">oreo</a><span>&#8377; 149</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-shake">  
                <div class="menu-content">
                  <a href="#">kit kat</a><span>&#8377; 169</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-shake">  
                <div class="menu-content">
                  <a href="#">oreo blue berry</a><span>&#8377; 169</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-shake">  
                <div class="menu-content">
                  <a href="#">bubble gum</a><span>&#8377; 179</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-shake">
                <div class="menu-content">
                  <a href="#">kit kat currant berry</a><span>&#8377; 179</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-shake">  
                <div class="menu-content">
                  <a href="#">brownle shake</a><span>&#8377; 189</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-shake">  
                <div class="menu-content">
                  <a href="#">dark chocalate</a><span>&#8377; 189</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-shake">  
                <div class="menu-content">
                  <a href="#">ferrero rocher</a><span>&#8377; 189</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-shake">
                <div class="menu-content">
                  <a href="#">lover</a><span>&#8377; 199</span>
              </div>`)
    });
    // freek shake
    $('.freak-shake-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
              <div class="col-lg-6 menu-item filter-freak-shake">
                <div class="menu-content">
                  <a href="#">chocalate</a><span>&#8377; 199</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-freak-shake">  
                <div class="menu-content">
                  <a href="#">oreo </a><span>&#8377; 219</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-freak-shake">  
                <div class="menu-content">
                  <a href="#">red welvet</a><span>&#8377; 249</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-freak-shake">
                <div class="menu-content">
                  <a href="#">monster</a><span>&#8377; 269</span>
                </div>
              </div>`)
    });
    // shots
    $('.shots-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
              <div class="col-lg-6 menu-item filter-shots">
                <div class="menu-content">
                  <a href="#">lichi currant berry</a><span>&#8377; 99</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-shots">  
                <div class="menu-content">
                  <a href="#">orange</a><span>&#8377; 99</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-shots">  
                <div class="menu-content">
                  <a href="#">kiwi</a><span>&#8377; 99</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-shots">  
                <div class="menu-content">
                  <a href="#">lichi kama kaji</a><span>&#8377; 99</span>
                </div>
              </div>`)
    });
    // mocktail
    $('.mocktail-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">king fisher</a><span>&#8377; 99</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">classic mint</a><span>&#8377; 109</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">pineapple </a><span>&#8377; 109</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">coolberg</a><span>&#8377; 109</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">strawberry mint</a><span>&#8377; 119</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">black currant</a><span>&#8377; 119</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">blue berry</a><span>&#8377; 119</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">lemon mint</a><span>&#8377; 119</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">monster</a><span>&#8377; 119</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">blue curacao</a><span>&#8377; 149</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">red bull</a><span>&#8377; 129</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">strawberry margarita</a><span>&#8377; 139</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">kiwi margarita</a><span>&#8377; 149</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">lichi margarita</a><span>&#8377; 149</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">lichi freak</a><span>&#8377; 149</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">one more time</a><span>&#8377; 169</span>
                </div>
              </div>`)
    });

  });
  /// snakes
  $('.click-snak').click(function () {
    $('.changing-menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200" >
    <div class="row" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-12 d-flex justify-content-center text-capitalize">
                  <ul id="menu-flters">
                    <li class="Sandwich-filter">Sandwich</li>
                    <li class="Burger-filter">Burger</li>
                    <li class="Meggi-filter">Meggi</li>
                    <li class="french-filter">French-Fries</li>
                    <li class="Nachos-filter">Nachos</li>
                    <li class="tacos-filter">Tacos</li>
                    <li class="momos-filter">momo's</li>
                  </ul>
                </div>
              </div>`)

    // french-fries
    $('.french-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
              <div class="col-lg-6 menu-item filter-french-fries">
                <div class="menu-content">
                  <a href="#">classic</a><span>&#8377; 99</span>
                </div>
              </div>
              
                <div class="col-lg-6 menu-item filter-french-fries">
                  <div class="menu-content">
                    <a href="#">barbecue</a><span>&#8377; 129</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-french-fries">  
                <div class="menu-content">
                  <a href="#">peri peri</a><span>&#8377; 129</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-french-fries">  
                <div class="menu-content">
                  <a href="#">butter garlic</a><span>&#8377; 139</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-french-fries">  
                <div class="menu-content">
                  <a href="#">tanduri</a><span>&#8377; 139</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-french-fries">  
                <div class="menu-content">
                  <a href="#">cheese</a><span>&#8377; 149</span>
                </div>
              </div>`)
    });
    // Sandwich
    $('.Sandwich-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
              <div class="col-lg-6 menu-item filter-sandwich">
                <div class="menu-content">
                  <a href="#">veg sandwich</a><span>&#8377; 89</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">  
                <div class="menu-content">
                  <a href="#">collslow</a><span>&#8377; 99</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">  
                <div class="menu-content">
                  <a href="#">masala</a><span>&#8377; 109</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">  
                <div class="menu-content">
                  <a href="#">cheese chatani</a><span>&#8377; 109</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">
                <div class="menu-content">
                  <a href="#">veg cheese grill</a><span>&#8377; 129</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">  
                <div class="menu-content">
                  <a href="#">pesto caprese</a><span>&#8377; 149</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">  
                <div class="menu-content">
                  <a href="#">masala cheese grill</a><span>&#8377; 129</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">
                <div class="menu-content">
                  <a href="#">tandoori paneer</a><span>&#8377; 139</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">  
                <div class="menu-content">
                  <a href="#">mexican</a><span>&#8377; 159</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">
                <div class="menu-content">
                  <a href="#">bombay veg cheese grill</a><span>&#8377; 149</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">  
                <div class="menu-content">
                  <a href="#">all american</a><span>&#8377; 169</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">  
                <div class="menu-content">
                  <a href="#">clube</a><span>&#8377; 199</span>
                </div>
              </div>`)
    });
    // Nachos
    $('.Nachos-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">spenish corn</a><span>&#8377; 149</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">
                <div class="menu-content">
                  <a href="#">cheese Nachos</a><span>&#8377; 149</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">
                <div class="menu-content">
                  <a href="#">italian Nachoss</a><span>&#8377; 149</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">
                <div class="menu-content">
                  <a href="#">supreme Nachos</a><span>&#8377; 149</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">
                <div class="menu-content">
                  <a href="#">creamy Nachos</a><span>&#8377; 159</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">
                <div class="menu-content">
                  <a href="#">T.C.C specials</a><span>&#8377; 199</span>
                </div>
              </div>`)
    });
    // Burger
    $('.Burger-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">aloo tiki</a><span>&#8377; 79</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">veg Burger</a><span>&#8377; 89</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">veg cheese</a><span>&#8377; 109</span>
                </div>
              </div>
              
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">tanduri paneer</a><span>&#8377; 119</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">crispee paneer</a><span>&#8377; 139</span>
                </div>
              </div>`)
    });
    // tacos
    $('.tacos-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">mexican </a><span>&#8377; 189</span>
                </div>
              </div>
              
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">spinich corn</a><span>&#8377; 169</span>
                </div>
              </div>
              
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">italian </a><span>&#8377; 149</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">veg exotic </a><span>&#8377; 199</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">T.C.C specials </a><span>&#8377; 219</span>
                </div>
              </div>`)
    });
// Meggi
    $('.Meggi-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">masala </a><span>&#8377; 70</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">veg Meggi</a><span>&#8377; 89</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">tadka meggi</a><span>&#8377; 99</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">cheese meggi</a><span>&#8377; 109</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">mexican meggi</a><span>&#8377; 109</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">T.C.C specials</a><span>&#8377; 129</span>
                </div>
              </div>`)
    });
    // momos
    $('.momos-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">veg momo's</a><span>&#8377; 159</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">paneer momo's</a><span>&#8377; 189</span>
                </div>
              </div>
              
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">veg cheese</a><span>&#8377; 199</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">T.C.C specials</a><span>&#8377; 219</span>
                </div>
              </div>`)
    });

  });

  // starter
  $('.click-starter').click(function () {
    $('.changing-menu').html(`<div class="changing-menu text-capitalize">
            <div class="row" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-12 d-flex justify-content-center">
                <ul id="menu-flters">
                  <li  class="sp-starter">sp.starter</li>
                  <li  class="soup-filter">soup</li>
                  <li class="chinise-filter">chinise</li>
                  <li class="risoto-filter">risoto</li>
                  <li class="wrape-roll-filter">wrape & roll</li>
                  <li class="tandoor-starter-filter">tandoor starter</li>
                </ul>
              </div>
            </div>
          </div>`)

    $('.soup-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">hot & sour</a><span>&#8377; 119</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">manchow</a><span>&#8377; 119</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">tomato</a><span>&#8377; 109</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">broccoli almond</a><span>&#8377; 149</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">mexican tex-mex</a><span>&#8377; 169</span>
                </div>
              </div>`)
    });
    // chinise
    $('.chinise-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200" >
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">veg fried rice</a><span>&#8377; 149</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">manchurian </a><span>&#8377; 169</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">hakka noodles</a><span>&#8377; 179</span>
                </div>
              </div>
              
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">schezwan fried rice</a><span>&#8377; 189</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">schezwan noodles</a><span>&#8377; 199</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">machurian noodles</a><span>&#8377; 199</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">paneer machurian</a><span>&#8377; 199</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">singapuri rice</a><span>&#8377; 199</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">chineess bhel</a><span>&#8377; 199</span>
                </div>
              </div>`)
    });
    // risoto
    $('.risoto-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">corn broccoli</a><span>&#8377; 199</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">broccoli mashroom</a><span>&#8377; 199</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">saffron</a><span>&#8377; 249</span>
                </div>
              </div>`)
    });
    // wrape-roll
    $('.wrape-roll-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">mexican paneer salsa roll</a><span>&#8377; 159</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">dragan roll</a><span>&#8377; 169</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">mexican roll</a><span>&#8377; 179</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">tanduri aloo cheese tika roll</a><span>&#8377; 189</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">T.C.C specials platter</a><span>&#8377; 249</span>
                </div>
              </div>`)
    });
    // sp-starter
    $('.sp-starter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">garlic braed</a><span>&#8377; 99</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">cheese chili toast</a><span>&#8377; 129</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">italian bruschetta</a><span>&#8377; 149</span>
                </div>
              </div>
             <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">totamo mozzarella</a><span>&#8377; 149</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">exotic bruschetta</a><span>&#8377; 159</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">cheese quket</a><span>&#8377; 179</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">corn cheese cottage bruschetta</a><span>&#8377; 179</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">corn cheese balls</a><span>&#8377; 189</span>
                </div>
              </div>
              
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">paneer scalight</a><span>&#8377; 209</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">paneer titbits</a><span>&#8377; 219</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">cheese fondue</a><span>&#8377; 249</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#"> cottage cheese babay stick</a><span>&#8377; 275</span>
                </div>
              </div>`)
    });
    // tandoor-starter
    $('.tandoor-starter-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">cheese chili seek kabab</a><span>&#8377; 199</span>
                </div>
              </div>
             <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">paneer tikka dry</a><span>&#8377; 229</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">peri peri paneer tikka dry</a><span>&#8377; 239</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">paneer gulraja tikka</a><span>&#8377; 249</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">tandoor platter</a><span>&#8377; 329</span>
                </div>
              </div>`)
    });
  });
  // meals
  $('.click-meals').click(function () {
    $('.changing-menu').html(`<div class="changing-menu text-capitalize">
                    <div class="row" data-aos="fade-up" data-aos-delay="100">
                      <div class="col-lg-12 d-flex justify-content-center">
                        <ul id="menu-flters">
                          <li  class="rice-dal-filter">rice & dal</li>
                          <li  class="baked-dish-filter">baked dish</li>
                          <li  class="sizzler-filter">sizzler</li>
                          <li  class="pizza-filter">pizza</li>
                          <li  class="pasta-filter">pasta</li>
                          <li  class="indina-filter">indina</li>
                        </ul>
                      </div>
                    </div>
                  </div>`)

                  // rice-dal
    $('.rice-dal-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">jeera rice</a><span>&#8377; 100</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">veg pulav</a><span>&#8377; 120</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">dal fry</a><span>&#8377; 120</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">dal tadka</a><span>&#8377; 120</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">hydrabadi biriyani</a><span>&#8377; 130</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">dum biriyani</a><span>&#8377; 150</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">veg biriyani</a><span>&#8377; 160</span>
                </div>
              </div>`)
    });
    // baked-dish
    $('.baked-dish-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">mexican enchiladas</a><span>&#8377; 219*</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">veg AU gratin</a><span>&#8377; 219</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">bake macroni with pineapple</a><span>&#8377; 229</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">spanish cannelloni </a><span>&#8377; 239</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">lasagna</a><span>&#8377; 249</span>
                </div>
              </div>`)
    });
// sizzler-filter
    $('.sizzler-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">fifty-fifty</a><span>&#8377; 279</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">chinise expo</a><span>&#8377; 289</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">veg exotic</a><span>&#8377; 299</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">corn cheese cutlet</a><span>&#8377; 299</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">paneer shashlik sizzler</a><span>&#8377; 309</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">T.C.C specials</a><span>&#8377; 359</span>
                </div>
              </div>`)
    });
    // indina
    $('.indina-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">veg mix</a><span>&#8377; 159</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">veg makhan</a><span>&#8377; 169</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">veg kadai</a><span>&#8377; 169</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">veg handi</a><span>&#8377; 179</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">panner pyaza</a><span>&#8377; 189</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">paneer hariyali</a><span>&#8377; 189</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">veg chili milli</a><span>&#8377; 189</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">paneer makhani</a><span>&#8377; 199</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">paneer butter masala</a><span>&#8377; 199</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">paneer lavabdar</a><span>&#8377; 199</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">paneer khurchan</a><span>&#8377; 199</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">mashroom masala</a><span>&#8377; 199</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">paneer tikka masala</a><span>&#8377; 209</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">kofta shaam-savera</a><span>&#8377; 209</span>
                </div>
              </div>
              
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">nargisi kofta</a><span>&#8377; 209</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">paneer cheese butter masala</a><span>&#8377; 219</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">paneer peshwari</a><span>&#8377; 229</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">cheese angoori</a><span>&#8377; 239</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">kaju masala</a><span>&#8377; 249</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">kaju curry</a><span>&#8377; 249</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">kaju curry</a><span>&#8377; 149</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">roti(butter,plain)</a><span>&#8377; 19</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">lachha paratha</a><span>&#8377; 29</span>
                </div>
              </div>
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">naan</a><span>&#8377; 35</span>
                </div>
              </div>`)

    });
    $('.pizza-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">margherita</a><span>&#8377; 149</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">italiano</a><span>&#8377; 169</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">maxican green wave  </a><span>&#8377; 189</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">peppy paneer</a><span>&#8377; 209</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">tadoori paneer</a><span>&#8377; 209</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">nepoli pizza</a><span>&#8377; 279</span>
                </div>
              </div>
              
              <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">mushroom cheesy</a><span>&#8377; 279</span>
                </div>
              </div>
              
              <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">T.C.C special</a><span>&#8377; 299</span>
                </div>
              </div>`)
            });

            $('.pasta-filter').click(function () {
      $('.show_menu').html(`<div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">arrabiata pasta</a><span>&#8377; 199</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">alfredo pasta</a><span>&#8377; 199</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">pomodoro pasta</a><span>&#8377; 199</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">four cheese sauce pasta</a><span>&#8377; 199</span>
                </div>
              </div>
              <div class="col-lg-6 menu-item filter-sandwich">
              <div class="menu-content">
                  <a href="#">fusilli pasta</a><span>&#8377; 199</span>
                </div>
              </div>`)
            });
  });