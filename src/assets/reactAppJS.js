import $ from "jquery";

$(function () {
  let portfolioCards = $("#portfolioImages .col-4 .card");
  let portfolioModal = document.querySelector(
    "#myModal .modal-dialog .modal-content"
  );
  let emailElement = document.querySelector(".form-control#email");
  let formControlFocus = document.querySelectorAll(".form-control");
  let navbarCollapse = function () {
    // let topScrollValue = $("html").scrollTop;
    let topScrollValue = window.scrollY;
    if (topScrollValue > "200") {
      $("#navbar").removeClass("py-4");
      $("#navbar").addClass("py-2");
    } else {
      $("#navbar").removeClass("py-2");
      $("#navbar").addClass("py-4");
    }
  };
  navbarCollapse();
  $(document).scroll(navbarCollapse, addActiveToNavbarLink);

  // modal
  function showModal() {
    let content = "";
    for (let i = 0; i < portfolioCards.length; i++) {
      let imageTitleAlt = portfolioCards[i].children[0].getAttribute("alt");
      let imageSource = portfolioCards[i].children[0].getAttribute("src");
      $(portfolioCards[i]).click(function (e) {
        // e.preventDefault();
        console.log();
        content += ` 
    
      <div class="row justify-content-center">
      <div class="col-1 offset-11 text-white p-3">
      <button
      type="button"
      id="modalCloseBtn"
      class="fa fa-close pe-5"
      data-bs-dismiss="modal"
    ></button>
      </div>
      
      
      <div class="websiteTitle websiteTitleDark">
      <h2 class="text-uppercase mb-0">${imageTitleAlt}</h2>
    </div>
    <div class="dividerParent  my-3">
      <div class="row justify-content-center ">
        <div class=" divider-line divider-line-dark"></div>
        <div class="divider-icon divider-icon-dark">
          <i class="fa fa-star"></i>
        </div>
        <div class="divider-line divider-line-dark"></div>
      </div>
    </div>
      <div class="w-75 "> 
      
      <img src="${imageSource}" />
      <p class="p-3 text-center"> 
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
      aliquam eius reiciendis, omnis ex est optio exercitationem quam
      quaerat doloremque. Perferendis veritatis ipsum nisi nostrum
      deserunt consequatur repellendus quisquam molestiae! Reiciendis,
      dolorem. </p>
      
      </div>
      
      <div class=" py-4">
    
      <a
      type="button"
      title="The link will open in new tab"
      class="btn  btn-closemodal "
      target="_blank"
      
    ><i class="fa fa-close"></i> Close window</a>
      </div>
      </div>
 
`;
        portfolioModal.innerHTML = content;
      });
    }
  }
  showModal();
  $(emailElement).keyup(function (e) {
    let emailValue = $(e.target).val();
    emailValidation(emailValue);
  });
  for (let x = 0; x < formControlFocus.length; x++) {
    $(formControlFocus[x]).keyup(function (e) {
      e.preventDefault();
      $("label").removeClass("label-form");
      $(formControlFocus[x]).siblings("label").addClass("label-form");
    });
  }
  let allLinks = document.querySelectorAll(".nav-link");

  // window.onscroll = () => {
  //   var current = "";
  //   for (let x = 0; x < $("section").length; x++) {
  //     const sectionTop = $("section")[x].offsetTop;
  //     if (window.scrollY >= sectionTop) {
  //       current = $("section")[x].getAttribute("id");
  //     }
  //   }
  //   for (let i = 0; i < $("#navbar li").length; i++) {
  //     $("#navbar li")[i].classList.remove("active");
  //     if ($("#navbar li")[i].classList.contains(current)) {
  //       $("#navbar li")[i].classList.add("active");
  //     }
  //   }

  // };
  function addActiveToNavbarLink() {
    for (let link = 0; link < allLinks.length; link++) {
      let topScrollValue = window.scrollY;
      let hrefLinks = $(allLinks[link]).attr("href").slice(1);
      let sectionActive = $(hrefLinks).offset().top;

      if (topScrollValue > sectionActive - 50) {
        $(allLinks[link]).addClass("navbar-active-link ");
      }
    }
  }

  // console.log($("#navbar a").attr("href"));
  function emailValidation(emailValue) {
    let pattern = /^\S+@\S+\.\S+$/;
    const regexp = new RegExp(pattern);
    let result = regexp.test(emailValue);
    if (emailValue == "") {
      result = false;
    }

    if (result == true) {
      $(emailElement.nextElementSibling).addClass("email-validate-message");
    } else {
      $(emailElement.nextElementSibling).removeClass("email-validate-message");
    }
  }
});
