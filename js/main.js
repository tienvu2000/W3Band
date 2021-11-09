  // open/close menu
  var header = document.getElementById('header');
  var mobileBtn = document.getElementById('mobile__more-btn');
  var headerHeight = header.clientHeight;
  mobileBtn.onclick = function(){
      var isClose = header.clientHeight === headerHeight;
      if (isClose) {
          header.style.height = 'auto';
      }
      else {
          header.style.height = null;
      }
  };
    // open search form 
    const btnSearch = document.querySelector('.header__search-btn');
    const formSearch = document.querySelector('.header__search-form');
    btnSearch.onclick = function () {
        formSearch.classList.toggle('show')
    }
    // end search form
  // auto close menu is onclick
  var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
  for ( var i = 0; i<menuItems.length; i++){
      var menuItem = menuItems[i];
      menuItem.onclick = function(){
          var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('header__subnav');
          if(!isParentMenu){
              header.style.height = null;
          }
      }
  };

  // begin modal 
    const buyBtns = document.querySelectorAll('.js__buy-tickets');
    const modal = document.querySelector('.js__modal')
    const modalClose = document.querySelector('.js__modal__close')
    const modalContainer = document.querySelector('.js__modal__container')
    // add class open
    function showBuyTickets(){
        modal.classList.add('modal__open')
    }
    // remove class open
    function hideBuyTickets(){
        modal.classList.remove('modal__open')
    }
    // lặp từng thẻ button và lắng nghe hành vi click
    for (const buyBtn of buyBtns){
        buyBtn.addEventListener('click', showBuyTickets)
    }
    // nghe hành vi click vào button close
    modalClose.addEventListener('click', hideBuyTickets)
    // click ra ngoài vẫn thực hiện hành vi đóng buy tickets
    modal.addEventListener('click', hideBuyTickets)
    modalContainer.addEventListener('click' , function (event){
    event.stopPropagation()
    });
    // end modal
    
