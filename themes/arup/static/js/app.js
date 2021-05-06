(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _events = require("../libs-th-nk/events/events");

var _dom = require("../libs-th-nk/dom/dom");

var _megaMenu = require("../js/modules/mega-menu");

var _megaMenu2 = _interopRequireDefault(_megaMenu);

var _mobileNav = require("../js/modules/mobile-nav");

var _mobileNav2 = _interopRequireDefault(_mobileNav);

var _search = require("../js/modules/search");

var _search2 = _interopRequireDefault(_search);

var _cookie = require("../js/modules/cookie");

var _cookie2 = _interopRequireDefault(_cookie);

var _parallax = require("../js/modules/parallax");

var _parallax2 = _interopRequireDefault(_parallax);

var _tabs = require("../js/modules/tabs");

var _tabs2 = _interopRequireDefault(_tabs);

var _navPanel = require("../js/modules/nav-panel");

var _navPanel2 = _interopRequireDefault(_navPanel);

var _accordion = require("../js/modules/accordion");

var _accordion2 = _interopRequireDefault(_accordion);

var _filterClass = require("../js/modules/filter-class");

var _filterClass2 = _interopRequireDefault(_filterClass);

var _filterSelect = require("../js/modules/filter-select");

var _filterSelect2 = _interopRequireDefault(_filterSelect);

var _filterCareer = require("../js/modules/filter-career");

var _filterCareer2 = _interopRequireDefault(_filterCareer);

var _strainer = require("../js/modules/strainer");

var _strainer2 = _interopRequireDefault(_strainer);

var _loadMore = require("../js/modules/load-more");

var _loadMore2 = _interopRequireDefault(_loadMore);

var _modal = require("../js/modules/modal");

var _modal2 = _interopRequireDefault(_modal);

var _alert = require("../js/modules/alert");

var _alert2 = _interopRequireDefault(_alert);

var _videoCarousel = require("../js/modules/video-carousel");

var _videoCarousel2 = _interopRequireDefault(_videoCarousel);

var _stickyElement = require("../js/modules/sticky-element");

var _stickyElement2 = _interopRequireDefault(_stickyElement);

var _imageZoom = require("../js/modules/image-zoom");

var _imageZoom2 = _interopRequireDefault(_imageZoom);

var _toggle = require("../js/modules/toggle");

var _toggle2 = _interopRequireDefault(_toggle);

var _monogram = require("../js/modules/monogram");

var _monogram2 = _interopRequireDefault(_monogram);

var _mediaHotspot = require("../js/modules/media-hotspot");

var _mediaHotspot2 = _interopRequireDefault(_mediaHotspot);

var _timeline = require("../js/modules/timeline");

var _timeline2 = _interopRequireDefault(_timeline);

var _home = require("../js/pages/home");

var _home2 = _interopRequireDefault(_home);

var _hub = require("../js/pages/hub");

var _hub2 = _interopRequireDefault(_hub);

var _projectDetail = require("../js/pages/project-detail");

var _projectDetail2 = _interopRequireDefault(_projectDetail);

var _perspectives = require("../js/pages/perspectives");

var _perspectives2 = _interopRequireDefault(_perspectives);

var _expertise = require("../js/pages/expertise");

var _expertise2 = _interopRequireDefault(_expertise);

var _offices = require("../js/pages/offices");

var _offices2 = _interopRequireDefault(_offices);

var _news = require("../js/pages/news");

var _news2 = _interopRequireDefault(_news);

var _careers = require("../js/pages/careers");

var _careers2 = _interopRequireDefault(_careers);

var _servicegroup = require("../js/pages/servicegroup");

var _servicegroup2 = _interopRequireDefault(_servicegroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollThrottleAmount = 50;

$.fn.isOnScreen = function () {
  var win = $(window);

  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return !(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom);
};

window.debounce = function (fn, delay) {
  var timer = null;
  return function () {
    var context = this,
        args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
};

window.throttle = function (func, wait, options) {
  window.now = Date.now || function () {
    return new Date().getTime();
  };

  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function later() {
    previous = options.leading === false ? 0 : window.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function () {
    var now = window.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

window.app = {
  support: function support(test) {
    var result = false;

    switch (test) {
      case "flex":
        if ("flex" in document.documentElement.style || "-webkit-flex" in document.documentElement.style) {
          result = true;
        }
        break;
      case "objectFit":
        if ("objectFit" in document.documentElement.style) {
          result = true;
        }
        break;
      default:
        break;
    }

    return result;
  },
  global: {
    wrapper: "global-wrapper",
    desktop: "1280",
    tabletl: "1024",
    mobile: "768",
    filters: false,
    strainers: false,
    ignoreScroll: false,
    hideNav: function hideNav() {
      $(".header").removeClass("header--docked").addClass("header--fixed").removeClass("header--active");
    },
    init: function init() {

      // new
      $('.scroll-panel').nanoScroller({
        preventPageScrolling: true,
        contentClass: 'scroller__content'
      });

      //Init Page Specific JS
      switch (document.body.id) {
        case "home":
          window.app.videoCarousel.init();
          window.app.home.init();
          break;
        case "hub":
          window.app.hub.init();
          break;
        case "project":
          window.app.project.init();
          break;
        case "perspectives":
          window.app.videoCarousel.init();
          window.app.perspectives.init();
          break;
        case "expertise":
          window.app.expertise.init();
          break;
        case "offices":
          window.app.offices.init();
          break;
        case "newshub":
          window.app.news.init();
          break;
        case "careers":
          window.app.careers.init();
          break;
        case "servicegroup":
          window.app.servicegroup.init();
          break;
        case "publications":
          if ("objectFit" in document.documentElement.style === false) {
            $(".publication-category__pub").find(".img-wrap").each(function () {
              var imagePub = $(this).find("img");
              $(this).css({
                "background-image": "url(" + imagePub.attr("src") + ")",
                "background-size": "cover"
              });
              imagePub.addClass("hidden").attr("aria-hidden", "true");
            });
          }

          window.app.ajaxCallback = function () {
            window.app.filters.init();
            window.app.toggle.init();
            grunticon.svgLoadedCallback();
            window.app.shareButtons.assign();
            window.app.loadmoreButton.init();
          };

          break;
        case "industry":
          $(".fullbleed__content").addClass("animated");
          break;
        default:
          break;
      }

      var twoColTabs = $(".two-col-tabs");
      if (twoColTabs && twoColTabs.length) {
        var addTabNav = function addTabNav(links) {
          links.each(function (i) {
            $(this).on("click", function (e) {
              e.preventDefault();

              $(twoColTabs_sidelinks[twoColTabs_active]).parent("li").removeClass("active");

              twoColTabs_active = i;
              twoColTabs_content.slick("slickGoTo", i);

              $(twoColTabs_sidelinks[twoColTabs_active]).parent("li").addClass("active");

              twoColTabs_mobheader.text($(links[twoColTabs_active]).text());
            });
          });
          $(twoColTabs_sidelinks[twoColTabs_active]).parent("li").addClass("active");

          twoColTabs_mobheader.text($(links[twoColTabs_active]).text());
        };

        var twoColTabs_sidelinks = twoColTabs.find(".two-col-tabs__leftnav a");
        var twoColTabs_moblinks = twoColTabs.find(".filter__list a");
        var twoColTabs_content = twoColTabs.find(".two-col-tabs_content");
        var twoColTabs_mobheader = twoColTabs.find(".two-col-tabs__header span.filter");
        var twoColTabs_active = 0;

        twoColTabs_content.slick({
          dots: false,
          infinite: false,
          speed: 500,
          fade: true,
          arrows: false,
          cssEase: "linear",
          swipe: false
        });

        addTabNav(twoColTabs_sidelinks);
        addTabNav(twoColTabs_moblinks);
      }

      //Header
      var header = $(".header"),
          logo = $(".arup-logo"),
          mobNav = $(".mobilenav"),
          hHeight = header.outerHeight(),
          st = $(window).scrollTop(),
          animate = false;

      var headerTransparentClass = "header--transparent";

      function enableHeaderTransparency() {
        header.removeClass("header--transparent");
        logo.removeClass("arup-logo--alt");
      }

      function disableHeaderTransparency() {
        if (mobNav.hasClass("active")) {
          enableHeaderTransparency();
          return;
        }
        header.addClass("header--transparent");
        logo.addClass("arup-logo--alt");
      }

      if (header[0].classList.contains(headerTransparentClass)) {
        header[0].dataset.transparent = true;

        header.on("mouseenter", function () {
          var scroll = $(document).scrollTop();
          if (scroll > 1) {
            return;
          }
          enableHeaderTransparency();
        });
        header.on("mouseleave", function () {
          var scroll = $(document).scrollTop();
          if (scroll > 1) {
            return;
          }
          disableHeaderTransparency();
        });
      }

      function checkScroll() {
        if (window.app.global.ignoreScroll) {
          header.removeClass("header--active");
          return false;
        }

        var scrollt = $(window).scrollTop();

        var mobactive = $("." + window.app.global.wrapper).hasClass("menu--active");

        //no change
        if (scrollt == st || mobactive) {
          return false;
        }

        //Scrolled past nav bar?
        if (scrollt <= hHeight) {
          header.removeClass("header--active").removeClass("header--fixed").removeClass("header--animate").addClass("header--docked");
          animate = false;

          if (header[0].dataset.transparent) {
            disableHeaderTransparency();
          }
        } else if (scrollt > st) {
          //Scroll down
          header.removeClass("header--docked");
          header.addClass("header--fixed").removeClass("header--active");
          animate ? header.addClass("header--animate") : header.removeClass("header--animate");

          if (window.app.utilitybar) {
            window.app.utilitybar.scroll();
          }

          if ($(".has-menu")) {
            $(".has-menu").trigger("mouseleave");
          }

          if (header[0].dataset.transparent) {
            enableHeaderTransparency();
          }
        } else if (scrollt < st) {
          //Scroll Up
          animate = true;
          header.addClass("header--fixed").addClass("header--active").addClass("header--animate");

          if (header[0].dataset.transparent) {
            enableHeaderTransparency();
          }
        }
        st = scrollt;
      }

      $(window).scroll(window.throttle(checkScroll, scrollThrottleAmount));

      checkScroll();

      //Feature detection
      var bodyStyle = document.body.style;

      //animation
      if (bodyStyle) {
        var sAnim = bodyStyle.animation !== undefined || bodyStyle.WebkitAnimation !== undefined || bodyStyle.MsAnimation !== undefined || bodyStyle.OAnimation !== undefined;
        if (!sAnim) {
          $("body").addClass("no-anim");
        }
      }

      //Tabs if needed
      var tabs = document.querySelectorAll(".tabs");
      if (tabs) {
        for (var i = 0; i < tabs.length; i++) {
          _tabs2.default.init(tabs[i]);
        }
      }

      //Accordion if needed
      var accordion = document.querySelectorAll(".accordion");
      if (accordion) {
        for (var i = 0; i < accordion.length; i++) {
          var letters = false;
          if ($(accordion[i]).prevAll(".services_letters").length > 0) {
            letters = true;
          }
          _accordion2.default.init(accordion[i], letters);
        }
      }

      //expertise services on other pages
      if ($(".expertise-services").length > 0) {
        window.app.expertise.serviceCarousel();
      }

      //content sliders used on careers and industry
      $(".content-slider").each(function () {
        var cs = $(this),
            carousel = $(this).find(".content-slider__carousel:first"),
            controls = $(this).find(".tabs:first a"),
            tabs = $(this).find(".tabs:first"),
            allowNext = true,
            slideCount = 0,
            nA = cs.find(".controls:first .next"),
            pA = cs.find(".controls:first .prev"),
            tabsSwiped = false;

        //Click on controls
        controls.each(function (i, e) {
          $(e).on("click", function (ev) {
            if (!tabsSwiped) {
              $(this).addClass("selected").parent().siblings().find("a").removeClass("selected");
              ev.preventDefault();
              carousel.slick("slickGoTo", i);
            }
          });
        });

        var hasAdaptiveHeight = hasAdaptiveHeight;

        if (carousel.parents('.new-tablet').length > 0) {
          hasAdaptiveHeight = false;
        }

        carousel.slick({
          cssEase: "ease-in-out",
          autoplay: false,
          arrows: false,
          swipe: false,
          fade: true,
          adaptiveHeight: false
        });

        carousel.on("afterChange", function (event, slick, currentSlide, nextSlide) {
          // Prevent bubbling of sub carousel events

          if (slick.$slider[0] == carousel[0]) {
            var $ctrlBoxes = carousel.parents(".js-box-car-container").find(".box-car__ctrl");
            var $activeCtrlBox = $ctrlBoxes.filter('[data-outer-index="' + currentSlide + '"]');

            $ctrlBoxes.removeClass("box-car__ctrl--active");
            $activeCtrlBox.addClass("box-car__ctrl--active");
          } else {
            carousel[0].children[0].style.height = "auto";
          }
        });

        function checkTabs() {
          var tabList = tabs.find(".tab");
          var showArrows = true;

          tabList.each(function (i, el) {
            if ($(el).offset().left + $(el).width() > tabs.offset().left + tabs.width()) {
              showArrows = false;
              return;
            }
          });

          if (showArrows) {
            cs.find(".controls").addClass("hidden");
            tabs = $(this).find(".tabs");
            var equalWidth = tabs.width() / tabList.length;
            tabList.css("width", equalWidth);
          } else {
            cs.find(".controls").removeClass("hidden");
            tabList.css("width", "");
          }
        }

        //Can we scroll next on the tabs
        function checkNext(slick) {
          var slidePos = $(slick.$slides.get(slick.slideCount - 1)).offset().left + $(slick.$slides.get(slick.slideCount - 1)).width();
          if (tabs.offset()) {
            var endPos = tabs.offset().left + tabs.width();
            if (slidePos <= endPos) {
              allowNext = false;
              arrowDisable(nA);
              arrowEnable(pA);
            } else {
              allowNext = true;
              arrowEnable(nA);
            }
          }
        }

        //Next
        nA.on("click", function () {
          if (allowNext) {
            tabs.slick("slickNext");
          }
        });

        //Prev
        pA.on("click", function () {
          if (!pA.hasClass("slick-disabled")) {
            tabs.slick("slickPrev");
          }
        });

        //Enable/Disable Arrow
        function arrowEnable(arrow) {
          arrow.removeClass("slick-disabled");
          arrow.attr("aria-disabled", "false");
        }

        function arrowDisable(arrow) {
          arrow.addClass("slick-disabled");
          arrow.attr("aria-disabled", "true");
        }

        tabs.on("init", function (event, slick, currentSlide, nextSlide) {
          slideCount = slick.slideCount - 1;
          arrowDisable(pA);
          checkTabs();
          checkNext(slick);
          _events.events.on(window, "resize", function () {
            checkTabs();
            checkNext(slick);
          });
        });

        tabs.on("swipe", function (event, slick, currentSlide, nextSlide) {
          tabsSwiped = true;
        });

        tabs.on("afterChange", function (event, slick, currentSlide) {
          $(controls[currentSlide]).addClass("selected").parent().siblings().find("a").removeClass("selected");
          carousel.slick("slickGoTo", currentSlide);

          checkNext(slick);
          if (currentSlide == 0) {
            arrowDisable(pA);
          } else {
            arrowEnable(pA);
          }

          tabsSwiped = false;
        });
        tabs.slick({
          slide: ".tab",
          arrows: false,
          infinite: false,
          variableWidth: true
        });
      });

      // NavPanel if needed
      var navPanels = $(".nav-panel");
      if (navPanels.length) {
        navPanels.each(function () {
          _navPanel2.default.init($(this));
        });
      }

      // Utility Bar
      var stickyElements = document.querySelectorAll(".sticky");
      this.stickyElementsArray = [];
      if (stickyElements) {
        for (var i = 0; i < stickyElements.length; i++) {
          if (stickyElements[i].hasAttribute("data-alternativeTrigger")) {
            var sticky = new _stickyElement2.default(stickyElements[i], stickyElements[i].getAttribute("data-alternativeTrigger"));
          } else {
            var sticky = new _stickyElement2.default(stickyElements[i]);
          }

          this.stickyElementsArray.push(sticky);
        }
        for (var i = 0; i < stickyElements.length; i++) {
          if ($(stickyElements[i]).hasClass("utility-bar")) {
            window.app.utilitybar = this.stickyElementsArray[i];
          } else if ($(stickyElements[i]).hasClass("services_letters")) {
            this.stickyElementsArray[i].scroll();
          }
        }
      }

      // todo remove redundant smooth scrolling

      // Anchor Smooth Scrolling 1
      var anchorScrollElem = document.querySelectorAll(".anchor-scroll");
      var anchorScrollDuration = 500;

      if (anchorScrollElem) {
        for (var i = 0; i < anchorScrollElem.length; i++) {
          _events.events.on(anchorScrollElem[i], "click", function (e) {
            e.preventDefault();
            var target = $(e.currentTarget).attr("href");

            $("html, body").animate({
              scrollTop: $(target).offset().top - $(".header").height()
            }, anchorScrollDuration);
          });
        }
      }

      // Anchor Smooth Scrolling 2
      $("a[data-scrollto]").on("click", function (e) {
        e.preventDefault();
        var target = $(this).attr("href");

        if ($(target).length == 0) return false;

        var targetTop = $(target).offset().top;
        var currentScroll = $("body").scrollTop();

        if ($(".stickyEl").length) {
          if ($(window).width() < window.app.global.desktop) {
            //mobile
            var el = $(".stickyEl:not(.services_letters)");
            if (el.length) {
              targetTop -= el.outerHeight();
            }

            var header = $(".header--fixed");
            if (header.length) {
              targetTop -= header.outerHeight();
            }
          } else {
            //desktop
            targetTop -= $(".stickyEl").outerHeight();
          }
          if (currentScroll > targetTop) {
            targetTop -= $(".header").outerHeight();
          }
        }

        var animationDuration = Math.round(Math.abs($(window).scrollTop() - targetTop)) / 2;
        animationDuration < 400 ? animationDuration = 400 : animationDuration = animationDuration;

        $("html, body").animate({ scrollTop: targetTop }, animationDuration, "easeOutQuint");
      });

      var _this = this;
      _events.events.on(window, "resize", function () {
        //reset sticky elements
        for (var i = 0; i < _this.stickyElementsArray.length; i++) {
          _this.stickyElementsArray[i].reset();
        }
      });

      //Assign Parallax
      var heros = document.querySelectorAll(".hero--image, .hero--careers, .fullbleed--expertise");
      var obj = this;

      //temp - disabling parallax
      // if (heros.length > 0) {
      //   $(window).scroll(function() {
      //     for (var i = 0; i < heros.length; i++) {
      //       var center = null;
      //       if ($(heros[i]).hasClass('hero--careers')) {
      //         center = true;
      //       }
      //       window.app.parallax.hero(heros[i], null, center);
      //     }
      //   });
      // }

      $(".hero__content").addClass("animated");

      // Image Expand
      var imagezoom = document.querySelectorAll(".image-expand");
      if (imagezoom) {
        if (window.innerWidth >= window.app.global.tabletl) {
          var imageEl = [];
          for (var i = 0; i < imagezoom.length; i++) {
            imageEl[i] = new _imageZoom2.default(imagezoom[i]);
          }
        }
      }

      //Video Loader
      if ($(".fullbleed--video").length > 0) {
        $(".fullbleed--video video").each(function (i, v) {
          v.addEventListener("canplaythrough", function () {
            $(v).addClass("active");
            v.play();
          });

          if (v.readyState > 3) {
            $(v).addClass("active");
            v.play();
          }
        });
      }

      //Monograms
      var monograms = document.querySelectorAll(".monogram");
      if (monograms) {
        for (var i = 0; i < monograms.length; i++) {
          var g = new _monogram2.default(monograms[i]);
        }
      }

      if (!window.app.support("objectFit")) {
        window.app.objectFitFallback();
      }

      // Hotspots
      window.app.mediaHotspot.init();

      // Timelines
      window.app.timeline.init();
    }
  },
  objectFitFallback: function objectFitFallback() {
    var container = document.querySelectorAll(".fullbleed__inner .progressiveMedia");

    for (var i = 0; i < container.length; i++) {
      var image = container[i].querySelector(".mainImg");
      if (image && image.src) {
        var imageSource = image.src;
        var wrapper = $("<div class='objectFit'></div>");
        $(image).wrap("<div class='objectFit' style='background-size:cover;background-position:center center; background-image:url(" + imageSource + ")'></div>");

        image.style.display = "none";
      }
    }
  },
  reveal: {
    init: function init() {
      //Define animations
      window.pro_sr = ScrollReveal();

      //Apply animations if not in view
      var scrollItems = document.querySelectorAll(".reveal");
      for (var i = 0; i < scrollItems.length; i++) {
        if ($(scrollItems[i]).isOnScreen()) {
          scrollItems[i].setAttribute("data-ignore-anim", true);
        }
      }

      window.pro_sr.reveal('.reveal:not([data-ignore-anim="true"])', {
        duration: 700,
        distance: "50px",
        viewFactor: 0.2,
        opacity: 0,
        scale: 1,
        easing: "cubic-bezier(0.215,  0.610, 0.355, 1.000)",
        origin: "bottom"
      });

      //Specific SR
      var introfacts = document.querySelectorAll(".intro-facts");

      for (var i = 0; i < introfacts.length; i++) {
        if ($(introfacts[i]).isOnScreen()) {
          introfacts[i].setAttribute("data-ignore-anim", true);
        }
      }
      window.pro_sr.reveal('.intro-facts:not([data-ignore-anim="true"]) .fact', {
        duration: 700,
        distance: "50px",
        viewFactor: 0.2,
        opacity: 0,
        scale: 1,
        easing: "cubic-bezier(0.215,  0.610, 0.355, 1.000)",
        origin: "bottom"
      }, 50);

      //Large Containers
      var scrollItemsL = document.querySelectorAll(".reveal-large");
      for (var i = 0; i < scrollItemsL.length; i++) {
        if ($(scrollItemsL[i]).isOnScreen()) {
          scrollItemsL[i].setAttribute("data-ignore-anim", true);
        }
      }

      window.pro_sr.reveal('.reveal-large:not([data-ignore-anim="true"])', {
        duration: 700,
        distance: "50px",
        viewFactor: 0.05,
        opacity: 0,
        scale: 1,
        easing: "cubic-bezier(0.215,  0.610, 0.355, 1.000)",
        origin: "bottom"
      });
    },
    refresh: function refresh() {
      window.pro_sr.sync();
    }
  },
  carousels: {
    init: function init() {
      //Carousels that could be used globally

      //Fullbleed carousel
      var carousel = $(".fullbleed-carousel__slides");
      if (carousel.length > 0) {
        var update = function update(root, index) {
          var desctext = root.find('.slide:eq(' + index + ')').attr('data-description');

          var darktext = root.find('.slide:eq(' + index + ')').attr('data-darktext');
          var isDark = darktext && darktext === 'true' || false;

          if (isDark) {
            root.addClass('dark-text');
          } else {
            root.removeClass('dark-text');
          }

          root.find('.fullbleed-carousel__text').text(desctext);
        };

        carousel.each(function (i, el) {
          var fullCarousel = $(el);
          var fullCarouselParent = fullCarousel.parent();

          fullCarousel.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            var i = (nextSlide ? nextSlide : 0) + 1;

            fullCarouselParent.find('.current').text(i);

            update(fullCarouselParent, nextSlide);
          });
          fullCarousel.on('init reInit', function (event, slick, currentSlide, nextSlide) {
            fullCarouselParent.find('.total').text(slick.slideCount);
            update(fullCarouselParent, currentSlide || 0);
          });
          fullCarousel.slick({
            infinite: true,
            autoplay: false,
            speed: 500,
            fade: true,
            cssEase: "linear",
            prevArrow: $(fullCarouselParent).find(".icon-prev"),
            nextArrow: $(fullCarouselParent).find(".icon-next")
          });
        });
      }

      //Halfbleed carousel
      var carouselHB = $(".halfbleed-carousel__slides");
      if (carouselHB.length > 0) {
        carouselHB.each(function (i, el) {
          var carouselHalf = $(el);
          var halfCarouselParent = carouselHalf.parent();

          carouselHalf.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            var i = (nextSlide ? nextSlide : 0) + 1;
            halfCarouselParent.find(".current").text(i);
            var desctext = carouselHalf.find(".slide:eq(" + nextSlide + ")").attr("data-description");
            halfCarouselParent.find(".carousel__desc").text(desctext);
          });
          carouselHalf.on("init reInit", function (event, slick, currentSlide, nextSlide) {
            halfCarouselParent.find(".total").text(slick.slideCount);
          });
          carouselHalf.slick({
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: "linear",
            prevArrow: halfCarouselParent.find(".carousel-prev"),
            nextArrow: halfCarouselParent.find(".carousel-next"),
            dots: true,
            responsive: [{
              breakpoint: window.app.global.desktop,
              settings: {
                arrows: false
              }
            }]
          });
        });
      }

      //Related Projects
      var carouselProject = $(".related-projects");
      $(".related-projects").last().css("margin-right", 0);
      if (carouselProject && carouselProject.find(".related-project").length > 0) {
        if (!carouselProject.hasClass("slick-initialized")) {
          carouselProject.slick({
            speed: 500,
            cssEase: "linear",
            infinite: false,
            centerMode: true,
            centerPadding: "20px",
            arrows: false,
            mobileFirst: true,
            slide: ".related-project",
            responsive: [{
              breakpoint: window.app.global.mobile - 1,
              settings: "unslick"
            }]
          });
          $(window).on("resize orientationchange", function () {
            carouselProject.slick("resize");
          });
        }
      }

      //Related Perspectives
      var carouselPerspectives = $(".related-perspectives");
      $(".related-perspective").last().css("margin-right", 0);
      if (carouselPerspectives.length > 0) {
        if (!carouselPerspectives.hasClass("slick-initialized")) {
          carouselPerspectives.slick({
            speed: 500,
            cssEase: "linear",
            infinite: false,
            centerMode: true,
            centerPadding: "20px",
            arrows: false,
            mobileFirst: true,
            slide: ".related-perspective",
            responsive: [{
              breakpoint: window.app.global.mobile - 1,
              settings: "unslick"
            }]
          });
          $(window).on("resize orientationchange", function () {
            carouselPerspectives.slick("resize");
          });
        }
      }

      //Publications Carousel
      var publicationsCarousel = $(".publications--multi");
      if (publicationsCarousel.length > 0) {
        $(".publications--multi .publications__items").slick({
          infinite: false,
          arrows: false,
          speed: 500,
          cssEase: "linear",
          slidesToShow: 4,
          responsive: [{
            breakpoint: window.app.global.mobile,
            settings: {
              slidesToShow: 1.2
            }
          }]
        });
      }

      //Up Lists
      var carouselUp = $(".up-list:not(.up-list--basic, .perspectives__feature .up-list)");
      if (carouselUp && carouselUp.find(".up-list__item").length > 0) {
        if (!carouselUp.hasClass("slick-initialized")) {
          carouselUp.slick({
            speed: 500,
            cssEase: "linear",
            infinite: false,
            centerMode: true,
            centerPadding: "18px", //site gutter minus margin on items
            arrows: false,
            mobileFirst: true,
            slide: ".up-list__item",
            responsive: [{
              breakpoint: 768,
              settings: "unslick"
            }]
          });
          $(window).on("resize orientationchange", function () {
            carouselUp.slick("resize");
          });
        }
      }

      //Box Carousels
      var carouselBox = $(".box-car");
      if (carouselBox && carouselBox.find(".box-car__item").length > 0) {
        for (var i = 0, len = carouselBox.length; i < len; i++) {
          var thisCarouselBox = carouselBox[i];

          var carouselBoxList = $(thisCarouselBox).find(".js-box-car-list");

          // Hack to make arrows work outside parent tab container - see also '.content-slider' carousel afterChange event
          var outerIndex = carouselBoxList.parents(".slick-slide").data("slick-index");
          var extraClass = "";
          if (outerIndex == 0) {
            extraClass = "box-car__ctrl--active";
          }
          var $ctrlWrap = carouselBoxList.parents(".js-box-car-container").find(".js-box-car-ctrl");
          var $ctrlBox = $('<div class="box-car__ctrl ' + extraClass + '" data-outer-index="' + outerIndex + '"></div>').appendTo($ctrlWrap);
          var $prevArrow = $('<button class="box-car__ctrl-btn box-car__ctrl-btn--prev js-box-car-prev"><span data-grunticon-embed class="box-car__ctrl-icon icon icon-arrow--thin"></button>').appendTo($ctrlBox);
          var $nextArrow = $('<button class="box-car__ctrl-btn box-car__ctrl-btn--next js-box-car-next"><span data-grunticon-embed class="box-car__ctrl-icon icon icon-arrow--thin"></button>').appendTo($ctrlBox);

          if (!carouselBoxList.hasClass("slick-initialized")) {
            carouselBoxList.slick({
              speed: 500,
              cssEase: "linear",
              infinite: false,
              swipe: true,
              fade: true,
              adaptiveHeight: true,
              arrows: true,
              slide: ".box-car__item",
              prevArrow: $prevArrow, //thisCarouselBox.querySelector('.js-box-car-prev'),
              nextArrow: $nextArrow //thisCarouselBox.querySelector('.js-box-car-next'),
            });
            $(window).on("resize orientationchange", function () {
              carouselBoxList.slick("resize");
            });
            carouselBoxList.on("afterChange", function (event, slick, currentSlide, nextSlide) {
              var $outerCar = carouselBoxList.parents(".content-slider__carousel");
              if ($outerCar.length > 0) {
                $outerCar.find(".slick-slide").height("auto");
                $outerCar.slick("setOption", "", "", true);
              }
            });
          }
        }
      }
    }
  },
  videoCarousel: _videoCarousel2.default,
  mediaHotspot: _mediaHotspot2.default,
  timeline: _timeline2.default,
  home: _home2.default,
  hub: _hub2.default,
  project: _projectDetail2.default,
  perspectives: _perspectives2.default,
  expertise: _expertise2.default,
  offices: _offices2.default,
  news: _news2.default,
  careers: _careers2.default,
  servicegroup: _servicegroup2.default,
  cookieMsg: _cookie2.default,
  mobileNav: _mobileNav2.default,
  search: _search2.default,
  modal: _modal2.default,
  alert: _alert2.default,
  megaNav: _megaMenu2.default,
  parallax: _parallax2.default,
  toggle: _toggle2.default,
  masonry: {
    object: false,
    check: function check() {
      var elem = document.querySelectorAll(".masonry");
      if (elem) {
        for (var i = 0; i < elem.length; i++) {
          window.app.masonry.init(elem[i]);
        }
      }
    },
    init: function init(target) {
      if (window.innerWidth >= window.app.global.tabletl) {
        this.create(target);
      }

      _events.events.on(window, "resize", function () {
        if (window.innerWidth >= window.app.global.tabletl) {
          if (!window.app.masonry.object) {
            window.app.masonry.create(target);
          }
        } else if (window.app.masonry.object) {
          window.app.masonry.remove(window.app.masonry.object);
        }
      });
    },
    create: function create(target) {
      var msnry = new Masonry(target, {
        // options
        itemSelector: ".js-project-item",
        columnWidth: $(document).find(".masonry--width")[0],
        percentPosition: true,
        gutter: $(document).find(".masonry--gutter")[0]
      });
      this.object = msnry;
    },
    remove: function remove(target) {
      this.object.destroy();
      this.object = false;
    }
  },
  fullSearch: {
    container: "#search-page",

    init: function init() {
      if ($(this.container).length > 0) {
        _search2.default.fullsearch();
      }
    }
  },
  filters: {
    init: function init() {
      //Filters
      var filter = document.querySelectorAll(".filter");
      if (filter) {
        window.app.global.filters = new Array();

        for (var i = 0; i < filter.length; i++) {
          var reset = null;
          if (filter[i].getAttribute("data-reset")) {
            reset = filter[i].getAttribute("data-reset");
            window.app.global.filters[i] = new _filterSelect2.default(filter[i], reset);
          } else if (filter[i].getAttribute("data-careers")) {
            window.app.global.filters[i] = new _filterCareer2.default(filter[i]);
          } else if (!$(filter[i]).hasClass("filter--carousel")) {
            //carousel filters created in the page JS
            window.app.global.filters[i] = new _filterClass2.default(filter[i]);
          }
        }
      }

      //Strainers
      var strainerElems = document.querySelectorAll(".js-strain");
      if (strainerElems) {
        window.app.global.strainers = new Array();

        for (var i = 0; i < strainerElems.length; i++) {
          window.app.global.strainers[i] = new _strainer2.default(strainerElems[i]);
        }
      }
    }
  },
  browserTests: {
    userAgent: window.navigator.userAgent,

    isIos: function isIos() {
      if (this.userAgent.match(/iPad/i) || this.userAgent.match(/iPhone/i)) {
        return true;
      }
      return false;
    },
    canTransform: function canTransform() {
      var prefixes = "transform WebkitTransform MozTransform OTransform msTransform".split(" ");
      var div = document.createElement("div");
      for (var i = 0; i < prefixes.length; i++) {
        if (div && div.style[prefixes[i]] !== undefined) {
          return prefixes[i];
        }
      }
      return false;
    }
  },
  loadmoreButton: {
    init: function init() {
      if (document.querySelector(".load-more")) {
        var loads = document.querySelectorAll(".load-more");
        for (var i = 0; i < loads.length; i++) {
          //if(!$(loads[i]).attr('data-loadactive')){
          var temp = new _loadMore2.default(loads[i]);
          //}
        }
      }
    }
  },
  shareButtons: {
    init: function init() {
      // this will be called once all Smart Layers have been rendered
      var callback = function callback(smartlayer) {
        $(".addthis_button_compact").one("click", function () {
          // remove all layers currently on the page
          smartlayer.destroy();
        });
      };

      // on page load, render the Share layer
      addthis.layers({ share: { services: "more" } }, callback);
      window.app.shareButtons.assign();
    },
    assign: function assign() {
      var shareVisible = false;
      var animating = false;
      var animationDuration = 400;
      var _this = this;

      if ($(".share-this").length > 0) {
        $(".share-this").off("click");
        $(".share-this").on("click", function (e) {
          e.preventDefault();

          if (animating) return false;

          if (!shareVisible) {
            shareVisible = true;
            $(this).next(".addthis_toolbox").fadeIn(animationDuration);
            animating = true;
            setTimeout(function () {
              animating = false;
            }, animationDuration);

            setTimeout(function () {
              var ipad = false;

              if ($("#at20mc").hasClass("ipad")) {
                ipad = true;
              }
              if (ipad) {
                $("#at15s").fadeOut(0);
              }

              function hideShare(e) {
                if ($("#at20mc").hasClass("ipad")) {
                  ipad = true;
                }

                if (ipad && ($(e.target).hasClass("addthis_button_compact") || $(e.target).parent().hasClass("addthis_button_compact"))) {
                  return;
                }

                if (!$(e.target).parents(".addthis_toolbox").length > 0) {
                  if (ipad) {
                    $("#at15s").fadeOut();
                  }
                  $(".addthis_toolbox").fadeOut();
                  $(this).parents(".panel").removeClass("ontop");
                  shareVisible = false;
                  $(".global-wrapper").off("click", hideShare);
                }
              }

              $(".global-wrapper").on("click", hideShare);
            }, 100);
          } else {
            shareVisible = false;
            $(this).next(".addthis_toolbox").fadeOut(animationDuration);

            animating = true;
            setTimeout(function () {
              animating = false;
            }, animationDuration);
          }
        });

        $(".addthis_toolbox a").on("click", function (e) {
          e.preventDefault();
        });
      }
    }
  },
  ajaxCallback: false
};

var init = function init() {
  window.app.global.init();
  window.app.cookieMsg.init();
  window.app.mobileNav.init();
  window.app.search.init();
  window.app.megaNav.init();
  window.app.fullSearch.init();
  window.app.carousels.init();
  window.app.reveal.init();
  window.app.modal.init();
  window.app.alert.init();
  window.app.loadmoreButton.init();
  window.app.toggle.init();
  window.app.filters.init();
  window.app.shareButtons.init();
};

// when the page is ready, start everything
_events.events.ready(function () {
  init();
});

jQuery.easing["jswing"] = jQuery.easing["swing"];

jQuery.extend(jQuery.easing, {
  easeOutQuint: function easeOutQuint(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  }
});

},{"../js/modules/accordion":2,"../js/modules/alert":3,"../js/modules/cookie":4,"../js/modules/filter-career":5,"../js/modules/filter-class":6,"../js/modules/filter-select":7,"../js/modules/image-zoom":9,"../js/modules/load-more":10,"../js/modules/media-hotspot":11,"../js/modules/mega-menu":12,"../js/modules/mobile-nav":13,"../js/modules/modal":14,"../js/modules/monogram":15,"../js/modules/nav-panel":16,"../js/modules/parallax":17,"../js/modules/search":18,"../js/modules/sticky-element":19,"../js/modules/strainer":20,"../js/modules/tabs":21,"../js/modules/timeline":22,"../js/modules/toggle":23,"../js/modules/video-carousel":24,"../js/pages/careers":25,"../js/pages/expertise":26,"../js/pages/home":27,"../js/pages/hub":28,"../js/pages/news":29,"../js/pages/offices":30,"../js/pages/perspectives":31,"../js/pages/project-detail":32,"../js/pages/servicegroup":33,"../libs-th-nk/dom/dom":34,"../libs-th-nk/events/events":35}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var _init = function _init(root, letters) {

  var acc = root,
      hasActive = false;

  var options = acc.querySelectorAll('.accordion__section');

  var selectedClass = 'selected';

  //show accordion
  function show(target) {

    var targetContent = target.querySelector('.accordion__content');

    for (var i = 0; i < options.length; i++) {
      if (options[i] !== target) {
        deselect(options[i]);
      }
    }

    if (_dom.dom.containsClass(target, 'selected')) {
      deselect(target);
    } else {
      select(target, letters);
    }
  }

  //deselect option
  function deselect(target) {
    _dom.dom.removeClass(target, 'selected');
    $(target).attr("aria-expanded", "false");
    target.querySelector('.accordion__content').style.maxHeight = 0;
  }

  //select option
  function select(target) {

    var tarTitle = $(target).find('.accordion__title');
    if (!$(target).parent().hasClass('accordion--nostyle')) {
      posAccordion(target, letters);
    }

    _dom.dom.addClass(target, 'selected');
    $(target).attr("aria-expanded", "true");
    target.querySelector('.accordion__content').style.maxHeight = target.querySelector('.accordion__content').scrollHeight + 'px';
  }

  //position accordion
  function posAccordion(target, letters) {

    var t = $(acc).offset().top,
        s = $(target).find('.accordion__title').outerHeight(),
        st = t + s * $(target).attr('data-order');

    if (letters && $(window).width() > window.app.global.desktop) {
      st -= $('.stickyEl').outerHeight();
    }

    window.app.global.ignoreScroll = true;
    setTimeout(function () {
      window.app.global.ignoreScroll = false;
    }, 500);

    $('html, body').stop().animate({ scrollTop: st }, 200);
  }

  //setup accordion
  function setup(target) {

    $(target).attr('data-order', i);

    //Add maxheight so that the animation works on first load
    if (target.classList.contains('selected')) {
      target.querySelector('.accordion__content').style.maxHeight = target.querySelector('.accordion__content').scrollHeight + 'px';
    }

    _events.events.on(target.querySelector('.accordion__title'), 'click', function (e) {
      e.preventDefault();
      show(target);
    });
  }

  for (var i = 0; i < options.length; i++) {
    setup(options[i], i);
  }

  //Enable if not enabled already

  if (!acc.getAttribute('data-closed') == "true") {

    if (!hasActive) {
      _dom.dom.addClass(options[0], 'selected');
      options[0].querySelector('.accordion__content').style.maxHeight = options[0].querySelector('.accordion__content').scrollHeight + 'px';
    }
  }
};

var accordion = {
  init: function init(root, letters) {
    _init(root, letters);
  }
};
exports.default = accordion;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var alert = {
  init: function init() {

    var alerts = document.querySelectorAll('.action-alert');

    if (alerts) {
      for (var i = 0; i < alerts.length; i++) {
        this.setupAlert(alerts[i]);
      }
    }
  },
  setupAlert: function setupAlert(alert) {
    var that = this;
    _events.events.on(alert.querySelector('.action-alert__close'), 'click', function (e) {
      that.closeAlert(alert);
    });

    //Appear once scrolled past a point on the page
    var alertScrollTrigger = alert.dataset.alertScroll;

    if (alertScrollTrigger !== undefined) {

      $(window).on('scroll.alert', function () {
        var currentScrollPercentage = ($(document).scrollTop() + $(window).height() / 2) * 100 / $(document).height();

        if (currentScrollPercentage > alertScrollTrigger) {
          $(window).off('scroll.alert');

          that.showAlert(alert);
        }
      });
    }

    //Appear after a time delay
    var alertDelay = alert.dataset.alertDelay;

    if (alertDelay !== undefined) {
      alertDelay = parseInt(alertDelay);
      if (isNaN(alertDelay)) {
        alertDelay = 0;
      }

      setTimeout(function () {
        that.showAlert(alert);
      }, alertDelay);
    }

    //Otherwise show immediately
    if (alertScrollTrigger == undefined && alertDelay == undefined) {
      that.showAlert(alert);
    }
  },
  showAlert: function showAlert(alert) {
    var that = this;

    var activeAlertClass = 'action-alert--is-active';

    var activeAlert = document.querySelector('.' + activeAlertClass);
    if (activeAlert !== undefined) {
      this.closeAlert(activeAlert);
    }

    _dom.dom.addClass(alert, activeAlertClass);
    $(alert).attr('aria-hidden', 'false');

    //Dissapear after a time delay
    var alertDuration = alert.dataset.alertDuration;
    var minDuration = 2000;

    if (alertDuration !== undefined) {
      alertDuration = parseInt(alertDuration);
      if (isNaN(alertDuration) || alertDuration < minDuration) {
        alertDuration = minDuration;
      }

      setTimeout(function () {
        that.closeAlert(alert);
      }, alertDuration);
    }
  },
  closeAlert: function closeAlert(alert) {

    _dom.dom.removeClass(alert, 'action-alert--is-active');
    $(alert).attr('aria-hidden', 'true');
  }

};

exports.default = alert;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var _init = function _init() {
  var msg = document.querySelector('#cookie_msg');

  if (!msg) {
    return;
  }

  if (!getCookie('cookiePolicyAccepted')) {
    _dom.dom.addClass(msg, "active");
  } else {
    return;
  }

  var closeBtn = msg.querySelector('.cookie_msg__accept');
  var header = document.querySelector('.header');
  var main = document.querySelector('#main');
  var marker = document.querySelector('.marker');
  var menu = document.querySelector('.desktopnav').querySelectorAll('.nav__menu');
  var search = document.querySelector('#search-results');

  _events.events.on(closeBtn, 'click', function (e) {
    e.preventDefault();
    hideMsg();
    return;
  });

  //enable tabindex
  $(msg).find('a').attr('tabindex', '0');

  /* Hide the cookie and reset */
  function hideMsg() {

    _dom.dom.removeClass(msg, "active");

    // dom.removeClass(header, 'cookie-active');
    _dom.dom.removeClass(main, 'cookie-active');

    setCookie();

    msg = null;
    _dom.dom.remove(document.querySelector('#cookie_msg'));
  }

  /* Set margins of everything based on size of cookie which is responsive */
  function setCookie() {
    var exdays = 365;
    var date = new Date();
    date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
    var dateString = date.toGMTString();
    document.cookie = "cookiePolicyAccepted=true" + "; expires=" + dateString + "; path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  }
};

var cookieMsg = {
  init: function init() {
    _init();
  }
};
exports.default = cookieMsg;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _filterClass = require('./filter-class');

var _filterClass2 = _interopRequireDefault(_filterClass);

var _dom = require('../../libs-th-nk/dom/dom');

var _events = require('../../libs-th-nk/events/events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterCareers = function (_Filter) {
  _inherits(FilterCareers, _Filter);

  function FilterCareers(root, reset) {
    _classCallCheck(this, FilterCareers);

    var _this = _possibleConstructorReturn(this, (FilterCareers.__proto__ || Object.getPrototypeOf(FilterCareers)).call(this, root));

    _this.disabled = $(_this.fil).hasClass('disabled');
    _this.careerContainer = $('.career-overlay__filters');
    _this.currentVal = false;

    return _this;
  }

  //Search for item within box


  _createClass(FilterCareers, [{
    key: 'assignFilter',
    value: function assignFilter(e) {

      _get(FilterCareers.prototype.__proto__ || Object.getPrototypeOf(FilterCareers.prototype), 'assignFilter', this).call(this, e);

      var target = e.target;
      var targetVal = target.innerHTML;

      this.disabled = false;
      this.fil.innerHTML = targetVal;
      this.currentVal = $(target).attr('data-val');

      this.checkAjax();

      this.careerContainer.find('p').removeClass('disabled');
      this.careerContainer.find('.filter').removeClass('disabled');
    }

    //Can we do Ajax if both are selected?

  }, {
    key: 'checkAjax',
    value: function checkAjax() {

      var canRequest = true;

      for (var i = 0; i < window.app.global.filters.length; i++) {
        if (window.app.global.filters[i].disabled) {
          canRequest = false;
        }
      }

      if (canRequest) {
        this.requestUrl();
      }
    }
  }, {
    key: 'requestUrl',
    value: function requestUrl() {

      //Create data
      var data = {};

      for (var i = 0; i < window.app.global.filters.length; i++) {
        var listObj = window.app.global.filters[i].listObj.getAttribute('data-property');
        data[listObj] = window.app.global.filters[i].currentVal;
      }

      //Update button
      var jsRequest = $.ajax({ url: '/api/career-link', data: data }).done(function (data) {
        $('#career-overlay .cta-btn').removeClass('disabled').attr('disabled', false).attr('href', data);
      });
    }
  }]);

  return FilterCareers;
}(_filterClass2.default);

exports.default = FilterCareers;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35,"./filter-class":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require("../../libs-th-nk/events/events");

var _dom = require("../../libs-th-nk/dom/dom");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Filter = function () {
  function Filter(root) {
    var _this = this;

    _classCallCheck(this, Filter);

    this.fil = root;
    this.list = this.fil.getAttribute("data-target");
    this.wrapper = document.querySelector("." + window.app.global.wrapper);
    this.listObj = document.querySelector(this.list);

    this.originalVal = this.fil.getAttribute("data-original");
    this.innerContainer = this.listObj.querySelector(".filter__list__inner");

    this.ajax = this.fil.getAttribute("data-ajax") == "true" ? true : false;
    this.ajaxTarget = document.querySelector(this.listObj.getAttribute("data-target"));
    this.ajaxUrl = this.listObj.getAttribute("data-request");

    this.linkList = this.fil.getAttribute("data-link") == "true" ? true : false; //Allow links to be followed normally
    this.setTarget = this.fil.getAttribute("data-set-target") == "true" ? true : false;

    this.ajaxList = this.fil.getAttribute("data-ajaxlink") == "true" ? true : false; //Do links as AJAX request

    this.searchbox = this.listObj.querySelector("input");
    this.close = this.listObj.querySelector(".icon-close");
    this.filclose = this.fil.parentNode.querySelector(".filter--close");

    if (this.filclose == null) {
      this.filclose = $(this.fil.parentNode).siblings(".filter--close")[0];
    }

    if ($(this.fil).parents(".project-filter").length > 0) {
      this.filclose = $(this.fil).parents(".project-filter").find(".filter--close")[0];
    }

    if ($(this.fil).parents(".hero--offices").length > 0) {
      this.filclose = $(this.fil).parents(".hero--offices").find(".filter--close")[0];
    }

    this.items = this.innerContainer.querySelectorAll("li > a, .filter__selected a");

    this.filtered = false;
    this.scrollAdded = false;

    //Carousel Controls
    this.carousel = this.fil.getAttribute("data-carousel");

    //Events
    _events.events.on(this.fil, "click", function (e) {
      if (_dom.dom.containsClass(_this.fil, "disabled")) {
        return false;
      }
      _this.show(e);
    });
    _events.events.on(this.fil, "keydown", function (e) {
      if (e.which != 13) {
        return;
      }
      _this.show(e);
    });

    _events.events.on(this.close, "click", function () {
      return _this.hide();
    });
    _events.events.on(this.filclose, "click", function () {
      return _this.hide();
    });
    _events.events.on(this.searchbox, "keyup", function () {
      return _this.search();
    });

    //arrow nav
    var listObject = $(this.innerContainer).find("ul");
    listObject.on("keydown", function (e) {
      if (e.which == 40) {
        e.preventDefault();
        //down through the list
        if (listObject.find("a").length > 0) {
          var inFocus = listObject.find("a:focus");
          if (inFocus.parent().next().length > 0) {
            inFocus.parent().next().find("a").focus();
          }
        }
      }
      if (e.which == 38) {
        e.preventDefault();
        //up to the list, then to input
        if (listObject.find("a").length > 0) {
          var inFocus = listObject.find("a:focus");
          if (inFocus.parent().prev().length > 0) {
            inFocus.parent().prev().find("a").focus();
          } else {
            if (_this.searchbox) {
              $(_this.searchbox).focus();
            } else {
              $(".filter__selected a").focus();
            }
          }
        }
      }
    });

    $(".filter__selected a").on("keydown", function (e) {
      if (e.which == 38) {
        e.preventDefault();
      }
      if (e.which == 40) {
        e.preventDefault();
        listObject.find("a").first().focus();
      }
    });

    //hide on esc
    _events.events.on(this.listObj, "keydown", function (e) {
      if (e.which != 27) {
        return;
      }
      _this.hide();
    });

    this.scroller();

    //Filtering on click
    for (var i = 0; i < this.items.length; i++) {
      _events.events.on(this.items[i], "click", function (e) {
        return _this.assignFilter(e);
      });
    }

    var that = this;

    //Disable scroll on mob
    this.disableBackgroundScrollBind = function (e) {
      return _this.disableBackgroundScroll(e, that.innerContainer);
    };

    _events.events.on(this.items[this.items.length - 1], "keydown", function (e) {
      if (e.keyCode == 9) {
        e.preventDefault();
        if (that.searchbox) {
          $(that.searchbox).focus();
        }
      }
    });

    _events.events.on(window, "resize", function () {
      return _this.resetPos();
    });
  }

  //Show list Menu


  _createClass(Filter, [{
    key: "show",
    value: function show(e) {
      e.preventDefault();
      if ($(window).width() > window.app.global.desktop) {
        if (!this.carousel) {
          //Position based on either input or start of listObj
          var positem = this.searchbox ? $(this.listObj).find("input") : $(this.listObj).find(".filter__list__items");

          var pos = $(this.fil).position();

          if ($(this.listObj).find("input").length > 0) {
            var inputPos = $(this.listObj).find("input").position();
            var nudgeLeft = inputPos.left + $(this.innerContainer).position().left;
            var nudgeTop = inputPos.top + 10;
          } else {
            var nudgeLeft = $(this.innerContainer).position().left;
            var nudgeTop = 10;
          }

          this.listObj.style.left = pos.left - nudgeLeft + "px";
          this.listObj.style.top = pos.top - nudgeTop + "px";

          if ($(this.fil).hasClass("filter--small")) {
            if ($(this.fil).parents(".publication-single--modal").length > 0) {
              this.listObj.style.left = "0px";
              this.listObj.style.right = "auto";
            } else {
              this.listObj.style.left = "auto";
              this.listObj.style.right = "0px";
            }
          }
        }
      } else {
        _dom.dom.addClass(document.body, "fullscreen");
        $("body").on("touchmove", this.disableBackgroundScrollBind);
      }

      this.innerContainer.scrollTop = 0;

      _dom.dom.addClass(this.listObj, "active");
      _dom.dom.addClass(this.filclose, "active");

      if (this.searchbox && $(window).width() > window.app.global.desktop) {
        $(this.searchbox).focus();
      } else {
        $(this.listObj).find("a").first().focus();
      }
    }

    //reinit list clicks

  }, {
    key: "reinitList",
    value: function reinitList() {
      var _this2 = this;

      this.items = this.listObj.querySelectorAll("li > a");
      this.searchbox = this.listObj.querySelector("input");

      _events.events.on(this.searchbox, "keyup", function () {
        return _this2.search();
      });

      for (var i = 0; i < this.items.length; i++) {
        _events.events.on(this.items[i], "click", function (e) {
          return _this2.assignFilter(e);
        });
      }
    }

    //Stop scrolling behind on iOs

  }, {
    key: "disableBackgroundScroll",
    value: function disableBackgroundScroll(e, cont) {
      var container = $(cont).find(".filter__list__items");
      if (container.height() + $(cont).offset().top < window.innerHeight) {
        e.preventDefault();
        return false;
      }

      var target = $(e.target);
      if ($(cont).find(target).length < 1) {
        e.preventDefault();
      }
    }

    //Hide the Menu

  }, {
    key: "hide",
    value: function hide() {
      _dom.dom.removeClass(this.listObj, "active");
      _dom.dom.removeClass(this.filclose, "active");
      _dom.dom.removeClass(document.body, "fullscreen");
      $("body").off("touchmove", this.disableBackgroundScrollBind);
    }

    //Manually update the Menu

  }, {
    key: "update",
    value: function update(index) {
      //get index of result minus 1 for default value
      var itemsArray = this.listObj.querySelectorAll("li:not(.filter__selected)");
      this.fil.innerHTML = itemsArray[index].querySelector("a").innerHTML;
    }

    //Search for item within box

  }, {
    key: "search",
    value: function search(e) {
      var searchVal = this.searchbox.value;

      if (!searchVal) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].parentNode.style.display = "block";
        }

        this.scroller();

        return false;
      }
      var regEx = new RegExp("^" + searchVal, "i");

      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].innerHTML.match(regEx)) {
          this.items[i].parentNode.style.display = "block";
        } else {
          this.items[i].parentNode.style.display = "none";
        }
      }

      this.scroller();
    }

    //Perform an AJAX Request
    //@param url string - url to request if not set globally on the filter
    //@param selector string - AJAX DOM element to update

  }, {
    key: "ajaxRequest",
    value: function ajaxRequest(url, selector) {
      var ajaxUrl = url;
      var that = this;

      if (!url) {
        ajaxUrl = this.ajaxUrl;
      }

      this.loadingSpinner(false, selector);
      this.hide();

      var jsRequest = $.ajax(ajaxUrl).done(function (data) {
        //Update the DOM and close
        if (selector) {
          $(that.fil).closest(selector).html($(data).find(selector).html());
        } else {
          that.ajaxTarget.innerHTML = data;
        }

        that.loadingSpinner(true, selector);

        //Apply effects
        if (window.app.ajaxCallback) {
          grunticon.svgLoadedCallback();
          window.app.ajaxCallback();
        }
      });
    }

    //Filter by selecting item

  }, {
    key: "assignFilter",
    value: function assignFilter(e) {
      //Just follow a link like normal
      if (this.linkList) {
        return;
      }

      var target, targetIndex;
      e.preventDefault();

      target = e.target;

      // $(target).parent().parent().find('a').removeClass('active');
      // $(target).addClass('active');

      //Do AJAX Requests for each link
      if (this.ajaxList) {
        if ($(target).parent().hasClass("filter__selected")) {
          this.hide();
          return;
        }

        this.ajaxRequest($(target).attr("data-ajax"), $(target).attr("data-selector"));
        return;
      }

      //get index of result minus 1 for default value
      var itemsArray = this.listObj.querySelectorAll("li");
      for (var i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i].querySelector("a") != null) {
          if (itemsArray[i].querySelector("a").innerHTML.toLowerCase() == target.innerHTML.toLowerCase()) {
            targetIndex = i - 1; //-1 for the input
          }
        }
      }

      var targetVal = target.innerHTML,
          that = this;

      if (that.searchbox) {
        this.searchbox.value = "";
      }

      if (this.setTarget) {
        this.fil.innerHTML = targetVal;
      }

      _dom.dom.addClass(this.fil, "filtered");
      this.filtered = true;
      this.hide();

      //Do AJAX
      if (this.ajax) {
        this.ajaxRequest();
      }

      //reset box after it has animated out
      setTimeout(function () {
        target.innerHTML.toLowerCase() == that.originalVal ? _dom.dom.removeClass(that.listObj, "filtered") : _dom.dom.addClass(that.listObj, "filtered");
        if (that.searchbox) {
          that.searchbox.placeholder = target.innerHTML;
        }
      }, 500);
    }

    //If going to moible take away any positioning logic

  }, {
    key: "resetPos",
    value: function resetPos() {
      if ($(window).width() < window.app.global.desktop) {
        this.listObj.style.left = 0;
        this.listObj.style.top = 0;
      }
      this.scroller();
    }
  }, {
    key: "scroller",
    value: function scroller() {
      var _this3 = this;

      if (window.innerWidth >= window.app.global.desktop) {
        this.scrollAdded = true;
        setTimeout(function () {
          $(_this3.listObj).find(".scroller").nanoScroller({
            sliderMaxHeight: 35,
            preventPageScrolling: true,
            contentClass: "scroller__content"
          });
        }, 10);
        $(".scroller__content").attr("tabindex", "");
      } else if (this.scrollAdded) {
        $(this.listObj).find(".scroller").nanoScroller({ destroy: true });
      }
    }

    /* Set up the loading spinner
      string close - remove the spinner
      string el - target that is not set as the global ajaxTarget
    */

  }, {
    key: "loadingSpinner",
    value: function loadingSpinner(close, el) {
      var aTarget = $(el);

      if (!el) {
        aTarget = $(this.ajaxTarget);
      }

      if (close) {
        aTarget.removeClass("loading");
        return;
      }

      aTarget.addClass("loading");
      aTarget.append('<div class="loading-spinner"><div></div></div>');
    }
  }]);

  return Filter;
}();

exports.default = Filter;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _filterClass = require("./filter-class");

var _filterClass2 = _interopRequireDefault(_filterClass);

var _dom = require("../../libs-th-nk/dom/dom");

var _events = require("../../libs-th-nk/events/events");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterSelect = function (_Filter) {
  _inherits(FilterSelect, _Filter);

  function FilterSelect(root, reset) {
    _classCallCheck(this, FilterSelect);

    var _this2 = _possibleConstructorReturn(this, (FilterSelect.__proto__ || Object.getPrototypeOf(FilterSelect)).call(this, root));

    _this2.group = _this2.fil.getAttribute("data-filtergroup");
    _this2.request = _this2.fil.getAttribute("data-request");

    _this2.innerList = document.querySelector(".project-filter");
    _this2.defaultList = _this2.innerList.innerHTML;

    //Resetting
    _this2.reset = document.querySelector(reset);
    _events.events.on(_this2.reset, "click", function (e) {
      return _this2.resetSearch(e);
    });
    _this2.resetUrl = _this2.fil.getAttribute("data-reset");

    //If reset, store default data if needed
    if (_this2.resetUrl) {
      if (_this2.reset.getAttribute("data-is-filtered")) {
        _dom.dom.addClass(_this2.reset, "active");
        //this.autoFilter();
        _this2.defaultAjax = null;
        _this2.defaultHeader = null;
      } else {
        _this2.defaultAjax = _this2.ajaxTarget.innerHTML;
        _this2.defaultHeader = document.querySelector(".project-filter");
      }
    }

    //If toggle label is needed
    _this2.toggleLabel = $(_this2.fil).parent(".filter__secondary");

    var currentUrl = window.location.href;

    var hubname = _this2.fil.getAttribute("data-hub") || "projects";
    if (hubname) {
      hubname = hubname.replace(" ", "-");
    }
    _this2.url = currentUrl.match(new RegExp(".*?(?=" + hubname + "|$)", "i"))[0] + hubname;
    _this2.urlPattern = _this2.fil.getAttribute("data-urlpattern");
    return _this2;
  }

  //Search for item within box


  _createClass(FilterSelect, [{
    key: "search",
    value: function search(e) {
      _get(FilterSelect.prototype.__proto__ || Object.getPrototypeOf(FilterSelect.prototype), "search", this).call(this, e);
    }

    //Filter by selecting item

  }, {
    key: "assignFilter",
    value: function assignFilter(e, reset) {
      _get(FilterSelect.prototype.__proto__ || Object.getPrototypeOf(FilterSelect.prototype), "assignFilter", this).call(this, e);

      var target = e.target;

      _dom.dom.removeClass(this.fil, "hidden");
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].parentNode.style.display = "table";
      }

      var targetVal = target.getAttribute("data-val"),
          targetDisplay = target.innerHTML;

      if (this.originalVal !== "worldwide" || this.originalVal == targetDisplay.toLowerCase()) {
        targetDisplay = targetDisplay.toLowerCase();
      } else {
        targetDisplay = targetDisplay.charAt(0).toUpperCase() + targetDisplay.slice(1);
      }

      $(this.fil).attr("data-val", targetVal);
      this.fil.innerHTML = targetDisplay;

      if (targetDisplay == this.originalVal) {
        this.filtered = false;
        _dom.dom.removeClass(this.fil, "filtered");
        this.checkFilter();
        if (this.toggleLabel.length) this.toggleLabel.removeClass("filtered");
      } else {
        _dom.dom.addClass(this.fil, "filtered");
        _dom.dom.addClass(this.reset, "active");
        _dom.dom.addClass(document.querySelector(".filter__container"), "filtered");
        this.filtered = true;
        if (this.toggleLabel.length) this.toggleLabel.addClass("filtered");
      }

      if (!reset) this.filter(targetVal, targetDisplay);
    }
  }, {
    key: "resetSearch",
    value: function resetSearch(e) {
      e.preventDefault();

      if (document.querySelector(".filter__text")) {
        document.querySelector(".filter__text").style.display = "inline";
      }

      this.listObj.querySelector(".default").style.display = "none";
      _dom.dom.removeClass(this.reset, "active");
      _dom.dom.removeClass(this.fil.parentNode, "filtered");
      _dom.dom.removeClass(this.fil, "filtered");
      _dom.dom.removeClass(this.fil, "hidden");
      this.fil.innerHTML = this.originalVal;
      this.searchbox.placeholder = this.originalVal;

      if ($(this.reset).hasClass("resetting")) {
        return;
      }

      _dom.dom.addClass(this.reset, "resetting");

      if (!this.resetUrl) {
        this.ajaxTarget.innerHTML = "";
        return false;
      }

      this.updateURL({});

      //If this filter is being started from a filtered URL deep linked, a request needs to be done
      //Otherwise, we can just use the initial innerHTML

      var _that = this;

      if (!this.defaultAjax) {
        this.loadingSpinner();

        var jsRequest = $.ajax({ url: this.ajaxUrl, data: {} }).done(function (data) {
          _dom.dom.removeClass(_that.reset, "resetting");
          _that.loadingSpinner(true);

          //Now reinit the reset HTML
          _that.updateFilterLists(data);
          _that.defaultList = $(data).find(".project-filter").html();

          _that.ajaxTarget.innerHTML = $(data).find("#projects-list").html();
          _that.defaultAjax = _that.ajaxTarget.innerHTML;

          if (window.app.ajaxCallback) {
            window.app.ajaxCallback();
          }
          $(window).off("scroll.infinite");

          window.app.loadmoreButton.init();
        });
      } else {
        var _this = this;

        var newData = $("<div></div>");

        newData.append($(this.defaultAjax));

        //strip default markup of bad insline styles
        $(newData).find(".reveal").each(function () {
          $(this).attr("style", "");
          $(this).removeAttr("data-sr-id");
        });

        this.ajaxTarget.innerHTML = $(newData).html();
        _that.updateFilterLists(this.defaultList);
        setTimeout(function () {
          _dom.dom.removeClass(_that.reset, "resetting");
          $(window).off("scroll.infinite");
          window.app.loadmoreButton.init();

          var elem = document.querySelectorAll(".masonry");
          if (elem) {
            for (var i = 0; i < elem.length; i++) {
              window.app.masonry.init(elem[i]);
            }
          }

          window.app.reveal.refresh();
        }, 500);
      }

      //Filtering on click reinit
      this.reinitList();

      /**
      removed to stop double request
      */
      // window.app.loadmoreButton.init();
    }

    /*
      Build the request and send it
      term String - what to search for from the filter click
      termDisplay String - What to show in the filter
    */

  }, {
    key: "filter",
    value: function filter(term, termDisplay) {
      var that = this,
          data = {};

      //Get data for filtering
      var groups = document.querySelectorAll(".filter");

      //Get data from current filter
      if (termDisplay != this.originalVal) {
        data[that.request] = term;
      }

      //Get data from other filter not in the same group (eg. industry and services not together)
      var groupCheck;
      for (var i = 0; i < groups.length; i++) {
        //if not current filter - already dealt with above
        if (groups[i] !== that.fil) {
          //if no group - include

          var isGroup = groups[i].getAttribute("data-filtergroup");
          var groupVal = groups[i].innerHTML.toLowerCase();
          groupVal = groupVal.replace(/\s+$/, "");
          groupVal = groupVal.replace(/^\s+/, "");

          if (!isGroup) {
            if (groupVal != groups[i].getAttribute("data-original").toLowerCase()) {
              data[groups[i].getAttribute("data-request")] = $(groups[i]).attr("data-val");
            }
          } else {
            if (isGroup !== that.group) {
              //if its not its default
              if (groupVal != groups[i].getAttribute("data-original").toLowerCase()) {
                data[groups[i].getAttribute("data-request")] = $(groups[i]).attr("data-val");
              }
            }
          }
        }
      }

      this.loadingSpinner();
      this.updateURL(data);

      var jsRequest = $.ajax({ url: this.ajaxUrl, data: data }).done(function (data) {
        //hide the other group
        if (that.group) {
          document.querySelector(".filter__text").style.display = "none";
          that.closeGroup();
        }

        that.hide();

        //Update the DOM and close
        setTimeout(function () {
          // console.log($(data).find('#projects-list').html())
          that.ajaxTarget.innerHTML = $(data).find("#projects-list").html();
          that.loadingSpinner(true);
          //Apply effects
          if (window.app.ajaxCallback) {
            window.app.ajaxCallback();
          }
          that.updateFilterLists(data);
        }, 500);

        $(window).off("scroll.infinite");
        window.app.loadmoreButton.init();
      });
    }
  }, {
    key: "closeGroup",
    value: function closeGroup() {
      var groups = document.querySelectorAll(".filter"),
          that = this;

      for (var i = 0; i < groups.length; i++) {
        if (groups[i] != that.fil && groups[i].getAttribute("data-filtergroup") == that.group) {
          _dom.dom.addClass(groups[i], "hidden");
        }
      }
    }

    //update lists with ajax content

  }, {
    key: "updateFilterLists",
    value: function updateFilterLists(data) {
      var lists = $(data).find(".filter__list");

      $.each(lists, function (i, el) {
        var $el = $(el);

        var content = $el.find("ul");
        var selected = $el.find(".filter__selected");
        var id = $el.attr("id");

        $("#" + id).find("ul").html(content.html());
        $("#" + id).find(".filter__selected").html(selected.html());
      });

      //Filtering on click reinit
      for (var i = 0; i < window.app.global.filters.length; i++) {
        window.app.global.filters[i].reinitList();
      }
    }

    //Hide the reset button if all filters associated are defaults

  }, {
    key: "checkFilter",
    value: function checkFilter() {
      var allFilters = document.querySelectorAll(".filter");
      var that = this;

      if (this.filtered === true) {
        return;
      }
      for (var i = 0; i < allFilters.length; i++) {
        if (allFilters[i].getAttribute("data-reset") == that.fil.getAttribute("data-reset")) {
          if (_dom.dom.containsClass(allFilters[i], "filtered") || _dom.dom.containsClass(allFilters[i], "hidden")) return;
        }
      }

      _dom.dom.removeClass(this.reset, "active");
    }

    /*
      Update the URL on filtering
      val Object - the values to update in URL
    */

  }, {
    key: "updateURL",
    value: function updateURL(data) {
      if (jQuery.isEmptyObject(data)) {
        var stateObj = { foo: "bar" };
        window.history.pushState(stateObj, null, this.url);
        window.pushActive = true;
        return;
      }

      var val = "/",
          country = "",
          service = "all",
          loc = false;

      $.each(data, function (i, el) {
        if (i == "location" || i == "category") {
          loc = true;
          country = el;
        } else {
          service = el;
        }
      });

      val += service;

      if (loc) {
        val += "/" + country;
      }

      if (this.urlPattern) {
        val = this.urlPattern.replace("[c]", "/" + (country ? country : "all")).replace("[e]", "/" + (service ? service : "all")).replace(/(\/all)?\/all$/g, "").toLowerCase();
      }

      val = val.replace(/ /g, "-");
      var stateObj = { foo: "bar" };
      window.history.pushState(stateObj, null, this.url + val);
      window.pushActive = true;
    }
  }]);

  return FilterSelect;
}(_filterClass2.default);

exports.default = FilterSelect;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35,"./filter-class":6}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageLoader = function () {
  function ImageLoader() {
    _classCallCheck(this, ImageLoader);
  }

  _createClass(ImageLoader, [{
    key: 'loadImages',
    value: function loadImages(imageArr, callback) {
      var _this = this;
      var loaded = 0;

      for (var i = 0; i < imageArr.length; i++) {

        var img = imageArr[i];

        img.onload = function () {
          imgDone();
        };

        img.onerror = function () {
          console.log('Error loading ' + img.getAttribute('src'));
          imgDone();
        };
        img.onabort = function () {};
      }

      function imgDone() {
        loaded++;

        if (loaded == imageArr.length) {
          callback();
        }
      }
    }
  }]);

  return ImageLoader;
}();

exports.default = ImageLoader;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var imagezoom = function () {
    function imagezoom(holder) {
        var _this2 = this;

        _classCallCheck(this, imagezoom);

        if ($('.pagemode-edit').length > 0) {
            return;
        }

        var _that = this;
        this.holder = $(holder);
        this.wrap = this.holder.find('.progressiveMedia'), this.img = this.holder.find('img'), this.status = 'inactive';

        this.width = parseInt(this.holder.attr('data-full-width'));
        this.height = parseInt(this.holder.attr('data-full-height'));

        this.wrap.on('click', function () {
            return _this2.toggle();
        });

        this.shrinkBind = function (e) {
            return _this2.shrink(e, _this2);
        };

        this.canTransform = window.app.browserTests.canTransform();

        this.setValues();
        $(window).on('resize', function () {
            _that.setValues();
        });
        $(window).on('orientationchange', function () {
            _that.setValues();
        });
    }

    _createClass(imagezoom, [{
        key: 'toggle',
        value: function toggle() {

            if (this.status == 'inactive') {
                this.expand();
            } else {
                this.shrink();
            }
        }
    }, {
        key: 'setValues',
        value: function setValues() {

            this.margin = 20;

            this.windowWidth = window.innerWidth;
            this.viewportWidth = window.innerWidth - this.margin * 2;
            this.viewportHeight = window.innerHeight - this.margin * 2;
        }

        //Expand image

    }, {
        key: 'expand',
        value: function expand() {

            if (this.status == "active") {
                return;
            }

            this.status = "active";
            this.holder.addClass('expanded is-expanding');

            window.app.global.hideNav();

            //Size up
            var width = this.wrap.width(),
                height = this.wrap.height(),
                offset = this.wrap[0].getBoundingClientRect(),
                top = offset.top,
                left = offset.left;

            //Is this centered or left full width?
            var center = Math.abs(this.windowWidth / 2 - (left + width / 2)) <= 10;

            //Generate CSS
            var scaleX = Math.min(this.width, this.viewportWidth) / width;
            var scaleY = Math.min(this.height, this.viewportHeight) / height;
            var scale = Math.min(scaleX, scaleY) || 1;
            var translateX = center ? 0 : Math.floor((-left + (this.viewportWidth - width) / 2) / scale);
            var translateY = Math.floor((-top + (this.viewportHeight - height) / 2 + this.margin) / scale);

            if (this.canTransform) {

                var scaleCss = 'scale(' + parseFloat(scale.toFixed(2)) + ') translate3d(' + translateX + 'px, ' + translateY + 'px, 0)';
                this.wrap.css({
                    '-moz-transform': scaleCss,
                    '-ms-transform': scaleCss,
                    '-webkit-transform': scaleCss,
                    'transform': scaleCss
                });
            } else {

                var l = this.wrap.offset().left;
                var t = $(window).scrollTop() - this.holder.offset().top;
                var amountW = Math.floor(width * scale);
                var amountH = Math.floor(height * scale);

                l -= Math.floor((this.viewportWidth - amountW) / 2) + this.margin;
                t += Math.floor((this.viewportHeight - amountH) / 2) + this.margin;

                this.wrap.css({
                    'width': amountW,
                    'height': amountH,
                    'left': -l,
                    'top': t,
                    'transform': ""
                });
            }

            this.holder.addClass('expanded is-expanding');

            var _this = this;

            setTimeout(function () {
                $(this.holder).one('click touchstart', _this.shrinkBind);
                $(window).one('scroll', _this.shrinkBind);
            }, 10);
        }

        //shrink image

    }, {
        key: 'shrink',
        value: function shrink() {

            var _this = this;

            $(this.holder).off('click touchstart', this.shrinkBind);
            $(window).off('scroll', this.shrinkBind);

            if (this.status == "inactive") {
                return;
            }

            this.status = "inactive";
            this.holder.removeClass('expanded');
            setTimeout(function () {
                if (!_this.holder.hasClass('expanded')) {
                    _this.holder.removeClass('is-expanding');
                }
            }, 350);

            this.wrap.css({
                'width': '',
                'height': '',
                '-moz-transform': 'scale(1) translate3d(0,0,0)',
                '-ms-transform': 'scale(1) translate3d(0,0,0)',
                '-webkit-transform': 'scale(1) translate3d(0,0,0)',
                'transform': 'scale(1) translate3d(0,0,0)',
                'left': '',
                'top': ''
            });
        }
    }]);

    return imagezoom;
}();

exports.default = imagezoom;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var _imageLoader = require('../modules/image-loader');

var _imageLoader2 = _interopRequireDefault(_imageLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last, deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date(),
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

var LoadMore = function () {
  function LoadMore(load) {
    _classCallCheck(this, LoadMore);

    this.infiniteApplied = false;
    this.lazyLoad = false;
    this.canRequest = true;
    this.loadicon = false;
    this.target = false;
    this.url = false;
    this.imageLoader = new _imageLoader2.default();
    this.skipload = false;
    this.lastrequest = false;
    this.insertInner = false;
    this.init(load);
  }

  _createClass(LoadMore, [{
    key: 'init',
    value: function init(load) {

      this.loadicon = load;

      if ($(this.loadicon).attr('data-skipload')) {
        this.skipload = true;
      }

      if ($(this.loadicon).attr('data-innercontent')) {
        this.insertInner = true;
      }

      this.spinner = '<div class="loading-spinner loading-spinner--loadmore"><div></div></div>';

      //Reinit if already
      if ($(load).attr('data-loadactive') == "true") {
        this.refresh();
      };

      var obj = this;
      $(this.loadicon).attr('data-loadactive', 'true');

      $(load).on('click', function (e) {
        e.preventDefault();
        obj.target = e.currentTarget.getAttribute('data-target');
        obj.url = e.currentTarget.getAttribute('data-href');
        obj.load($(e.currentTarget));
      });
    }
  }, {
    key: 'refresh',
    value: function refresh() {

      _events.events.off(this.loadicon, 'click');
      if (this.lazyLoad) {
        this.infiniteApplied = false;
        $(window).off('scroll.infinite');
      }
    }
  }, {
    key: 'load',
    value: function load(el) {

      var obj = this;

      if (!this.canRequest) {
        return;
      }

      this.canRequest = false;

      setTimeout(function () {
        obj.canRequest = true;
      }, 500);

      var targetDiv = el.attr('data-target');
      var targetHref = el.attr('data-href');

      if (this.lastrequest == targetHref) return;

      if (el.attr("data-lazy")) {
        obj.lazyLoad = true;
      }

      $(this.loadicon).parent().before(this.spinner);
      $(obj.loadicon).hide();

      this.lastrequest = targetHref;

      var jsRequest = $.ajax(targetHref).done(function (data) {

        if (!obj.skipload) {
          data = $(data).addClass('lm-hidden');
        }

        var imageArray = $(data).find('img');
        if (imageArray.length > 0) {
          obj.imageLoader.loadImages(imageArray, function () {
            obj.updatePage(targetDiv, el, data);
          });
        } else {
          obj.updatePage(targetDiv, el, data);
        }

        window.app.filters.init();
      });
    }
  }, {
    key: 'updatePage',
    value: function updatePage(targetDiv, el, content) {

      var obj = this;

      $('.loading-spinner--loadmore').remove();

      if (obj.insertInner) {
        $(targetDiv).append(content.html());
      } else {
        $(targetDiv).append(content);
      }

      if (el && obj.lazyLoad) {
        $(targetDiv).find('.load-more').addClass('hidden');
        this.infinite();
      }

      //Remove old button
      if ($(obj.loadicon).parent().hasClass('load-more-container')) {
        $(obj.loadicon).parent().remove();
      } else {
        $(obj.loadicon).remove();
      }

      //Reinit
      if ($(content).filter('.load-more').length == 0 && $(content).find('.load-more').length == 0) {
        obj.refresh();
      } else {

        if ($(content).find('.load-more').length > 0) {
          obj.loadicon = $(content).find('.load-more');
        } else {
          obj.loadicon = $(content).filter('.load-more');
        }

        obj.init(obj.loadicon);
        grunticon.svgLoadedCallback();
      }

      //Unhide
      setTimeout(function () {
        if (!obj.skipload) {
          $(targetDiv).find('.lm-hidden').addClass('show');
        }
      }, 50);

      //Apply effects
      if (window.app.ajaxCallback) {
        window.app.ajaxCallback();
      }
      if ($(content).filter('.modal').length > 0) {
        window.app.modal.init();
      }
    }
  }, {
    key: 'infinitescroll',
    value: function infinitescroll(obj) {

      var targetHref = this.url,
          targetDiv = this.target;

      var divBottom = $(targetDiv).offset().top + $(targetDiv).height();
      divBottom = $(document).height() - divBottom;

      //if we have scrolled enough
      if ($(document).scrollTop() > $(document).height() - $(window).height() - divBottom) {
        throttle(obj.load(obj.loadicon), 1000);
      }
    }
  }, {
    key: 'simulateclick',
    value: function simulateclick(obj) {
      $(obj).trigger('click');
    }
  }, {
    key: 'infinite',
    value: function infinite() {

      if (this.infiniteApplied) {
        return;
      }

      this.infiniteApplied = true;
      var obj = this;

      $(window).on('scroll.infinite', function () {
        obj.infinitescroll(obj);
      });
    }
  }]);

  return LoadMore;
}();

exports.default = LoadMore;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35,"../modules/image-loader":8}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var mediaHotspot = {
  init: function init() {

    //create video carousels
    var hotspot = document.querySelectorAll('.js-media-hotspot');
    for (var i = 0; i < hotspot.length; i++) {
      this.hotspot.createHotspot(hotspot[i]);
    }
  },

  hotspot: {

    createHotspot: function createHotspot(hotspot) {
      var videoMediaElem = hotspot.querySelector('.js-hotspot-vid');

      var copyElem = hotspot.querySelector('.js-hostpot-copy');
      var replayButtonElem = hotspot.querySelector('.js-hotspot-replay');
      var spotListElem = hotspot.querySelector('.js-hotspot-spots');
      var endframeElem = hotspot.querySelector('.js-hotspot-endframe');

      var copyActiveClass = 'media-hotspot__copy--is-active';
      var replayButtonActiveClass = 'media-hotspot__replay--is-active';
      var spotListActiveClass = 'media-hotspot__spot-list--is-active';
      var endframeActiveClass = 'media-hotspot__endframe--is-active';

      // var playElem = hotspot.querySelector('.js-hostpot-play');
      // var playActiveClass = 'media-hotspot__play--is-active';

      // playElem.addEventListener('click', function() {
      //     videoMediaElem.play();
      // })


      if (videoMediaElem !== null) {

        var videoSupported = checkVideoSupport();

        if (videoSupported) {
          videoMediaElem.addEventListener('canplaythrough', function (e) {
            // playElem.classList.add(playActiveClass);
            videoMediaElem.play();

            // Double check for the utility bar
            if (window.app.utilitybar) {
              window.app.utilitybar.scroll();
            }
          });
          // videoMediaElem.addEventListener('playing', function(e) {
          //     playElem.classList.remove(playActiveClass);
          // });
          videoMediaElem.load();
        } else {
          showEndedContent(false);
        }

        videoMediaElem.addEventListener('ended', function (e) {
          showEndedContent(true);
        });
      }

      if (replayButtonElem !== null) {
        replayButtonElem.addEventListener('click', function () {
          replayVideo();
        });
      }

      function replayVideo() {
        hideEndedContent();
        videoMediaElem.play();
      }

      function showEndedContent(showReplay) {
        copyElem.classList.add(copyActiveClass);
        if (showReplay) {
          replayButtonElem.classList.add(replayButtonActiveClass);
        }
        spotListElem.classList.add(spotListActiveClass);
        if (endframeElem !== null) {
          endframeElem.classList.add(endframeActiveClass);
        }
      }

      function hideEndedContent() {
        copyElem.classList.remove(copyActiveClass);
        replayButtonElem.classList.remove(replayButtonActiveClass);
        spotListElem.classList.remove(spotListActiveClass);
        if (endframeElem !== null) {
          endframeElem.classList.remove(endframeActiveClass);
        }
      }

      function checkVideoSupport() {
        var canPlay = false;

        if (videoMediaElem.canPlayType) {

          var videoSourceElements = videoMediaElem.querySelectorAll('source');

          for (var i = 0, len = videoSourceElements.length; i < len; i++) {
            var type = videoSourceElements[i].getAttribute('type');
            if (videoMediaElem.canPlayType(type).replace(/no/, '')) {
              canPlay = true;
            }
          }
        }

        return canPlay;
      }
    }

  }
};

exports.default = mediaHotspot;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var megaMenu = {
  menuOpen: false,
  init: function init() {

    var navwrap = document.querySelector('nav.nav-sidebar__main .nav-list-wrap');

    if (navwrap) {
      var submenus = navwrap.querySelectorAll('.nav-core__list .nav-core__item ul li.nav-list-wrap__item');

      for (var i = 0, il = submenus.length; i < il; i++) {
        var submenu = submenus[i];
        $(navwrap).append(submenu);
      }
    }

    if ($('.pagemode-edit').length > 0) {
      return;
    }

    var wrapper = document.querySelector('.' + window.app.global.wrapper);
    var wrapperMaskClass = 'mask';

    var menuItemSelector = '.js-dnav-has-menu';
    var menuItems = document.querySelectorAll(menuItemSelector);
    var menuTriggers = document.querySelectorAll('.js-dnav-menu-trigger');
    var menuItemActiveClass = 'selected';

    var marker = document.querySelector('.js-nav-marker');

    if (marker) {
      var markerleft = marker.querySelector('.js-nav-marker-left');
      var markerright = marker.querySelector('.js-nav-marker-right');
      var markerActiveClass = 'active';

      var markerHeight = marker.clientHeight;
      var menuOpen = false;
    }

    //Slide the marker on hover
    function slideMarker(elemToMark) {
      if (elemToMark) {
        var pos = elemToMark.offsetLeft + elemToMark.offsetWidth / 2 - markerHeight;

        markerleft.style.width = pos + 'px';
        markerright.style.left = pos + 'px';
      }
    }

    if (menuItems) {
      var firstItem;
      var i;
      var i;
      var submenuElems;
      var submenuTargetElems;
      var subnavElemActiveClass;
      var subnavTargetActiveClass;
      var i;
      var i;

      (function () {
        var switchSubnav = function switchSubnav(subnavElem, focus) {
          var subnavTargetSelector = subnavElem.dataset.subnavTrigger;
          var subnavTargetElem = document.querySelector('[data-subnav-content="' + subnavTargetSelector + '"');

          if (!$(subnavElem).hasClass(subnavElemActiveClass)) {
            for (var i = 0; i < submenuTargetElems.length; i++) {
              submenuTargetElems[i].classList.remove(subnavElemActiveClass);
            }
            for (var i = 0; i < submenuElems.length; i++) {
              submenuElems[i].classList.remove(subnavTargetActiveClass);
            }
          }

          subnavElem.classList.add(subnavElemActiveClass);

          if (subnavTargetElem) {
            subnavTargetElem.classList.add(subnavTargetActiveClass);
            if (focus) {
              $(subnavTargetElem).find('a').first().focus();
            }
          }

          var tPane = $(subnavElem).parents('.meganav-pane__inner');
          var menuPadding = parseInt(tPane.css('padding-top'));
          var markerImg = tPane.find('.js-nav-marker-img');
          var markerPos = parseInt(markerImg.attr('data-top'));

          if (subnavTargetSelector === 'blank') {
            markerImg[0].style.top = markerPos - 100 + 'px';
          } else {
            markerImg[0].style.top = markerPos + ($(subnavElem).position().top - menuPadding) - $(subnavElem).height() / 2 + 'px';
          }

          //Subnavigation marker

          //Image Based solution
          //Get middle of image and animate from that


          // Alternate solution
          // var submarkerPos = ((subnavElem.offsetTop + subnavElem.offsetHeight) / 2) - (markerCtrl.offsetTop);
          // markerCtrl.style.height = submarkerPos + 'px';
        };

        var openPane = function openPane(menuItemElem) {
          menuOpen = true;

          //Set classes to animate in
          for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove(menuItemActiveClass);
          }
          menuItemElem.classList.add(menuItemActiveClass);

          marker.classList.add(markerActiveClass);
          wrapper.classList.add(wrapperMaskClass);

          $(menuItemElem).find('.meganav-pane').attr('aria-expanded', 'true');

          slideMarker(menuItemElem);
        };

        var closePane = function closePane() {
          menuOpen = false;

          for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove(menuItemActiveClass);
          }

          marker.classList.remove(markerActiveClass);
          wrapper.classList.remove(wrapperMaskClass);

          $('.meganav-pane').attr('aria-expanded', 'false');

          // setTimeout(function() {
          //   if (!menuOpen) marker.classList.remove(markerActiveClass);
          // }, 0);
        };

        // Set marker position to first item
        firstItem = menuItems[0];

        slideMarker(firstItem);

        // Handle nav search
        $('.js-nav-search').on('click', function (e) {
          closePane();
        });

        //Show menu
        for (i = 0; i < menuTriggers.length; i++) {
          menuTriggers[i].addEventListener('mouseenter', function (e) {

            var menuItem = e.target.parentNode;
            openPane(menuItem);
          });

          menuTriggers[i].addEventListener('keydown', function (e) {
            var menuItem = e.target.parentNode;
            if (e.keyCode == 13 && !menuItem.classList.contains(menuItemActiveClass)) {
              e.preventDefault();
              e.stopPropagation();

              openPane(menuItem);
            }
          });
        };

        //Hide menu
        for (i = 0; i < menuItems.length; i++) {
          menuItems[i].addEventListener('mouseleave', function (e) {
            //If it's on the marker dont hide
            var markerOffset = $(marker).offset().top;
            if (e.pageY >= markerOffset && e.pageY <= markerOffset + $(marker).height()) {
              return false;
            }
            closePane();
          });
        };

        // Subnavigation inside meganav pane
        submenuElems = document.querySelectorAll('.js-nav-submenu');
        submenuTargetElems = document.querySelectorAll('.js-nav-submenu-target');
        subnavElemActiveClass = 'active';
        subnavTargetActiveClass = 'active';

        // var markerCtrl = document.querySelector('.js-submarker-ctrl');

        for (i = 0; i < submenuElems.length; i++) {
          submenuElems[i].addEventListener('mouseenter', function (e) {
            switchSubnav(e.currentTarget);
          });
          submenuElems[i].addEventListener('keydown', function (e) {
            if (e.keyCode == 13) {
              e.preventDefault();
              switchSubnav(e.currentTarget, true);
            }
          });
        }

        for (i = 0; i < submenuTargetElems.length; i++) {
          submenuTargetElems[i].addEventListener('focusin', function (e) {
            if (!e.currentTarget.classList.contains(subnavTargetActiveClass)) {
              switchSubnav(document.querySelector('[data-subnav-trigger="' + e.currentTarget.dataset.subnavContent + '"'));
            };
          });
        }

        //var markerImg = document.querySelector('.js-nav-marker-img');
        //var markerPos = parseInt(getComputedStyle(markerImg)['top']);


        $('.js-nav-marker-img').each(function () {
          $(this).attr('data-top', parseInt($(this).css('top')));
        });
      })();
    }
  },
  close: function close() {}
};
exports.default = megaMenu;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var _accordion = require('../modules/accordion');

var _accordion2 = _interopRequireDefault(_accordion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _init = function _init() {
  if ($('.pagemode-edit').length > 0) {
    return;
  }

  var navActive = false;

  var globalWrapElem = document.querySelector('.' + window.app.global.wrapper);
  var globalWrapMenuActiveClass = 'menu--active';

  var siteHeaderElem = document.querySelector('.js-site-header');
  var siteHeaderMenuActiveClass = 'header--menu-active';

  var navTriggerElems = document.querySelectorAll('.js-mobile-nav-toggle');

  var bodyMenuActiveClass = 'menu-open';

  var navElem = document.querySelector('.js-mobile-nav');
  var navMenuActiveClass = 'nav-sidebar--active';
  var navMenuDarkClass = 'nav-sidebar--dark';

  if (navElem) {
    var navSecTriggerElems;
    var navSections;
    var activeSectionClass;
    var navBackBtn;
    var navBackBtnActiveClass;
    var i, len;
    var i, len;

    (function () {
      var toggleMenu = function toggleMenu() {
        document.body.classList.toggle(bodyMenuActiveClass);
        globalWrapElem.classList.toggle(globalWrapMenuActiveClass);
        siteHeaderElem.classList.toggle(siteHeaderMenuActiveClass);
        navElem.classList.toggle(navMenuActiveClass);
      };

      var changeSec = function changeSec(secName) {
        navElem.querySelector('.' + activeSectionClass).classList.remove(activeSectionClass);
        navElem.querySelector('[data-nav-sec="' + secName + '"]').classList.add(activeSectionClass);

        if (secName === 'core') {
          navBackBtn.classList.remove(navBackBtnActiveClass);
          navElem.classList.remove(navMenuDarkClass);
        } else {
          navBackBtn.classList.add(navBackBtnActiveClass);
          navElem.classList.add(navMenuDarkClass);
        }
      };

      navSecTriggerElems = navElem.querySelectorAll('.js-nav-sec-trigger');
      navSections = navElem.querySelectorAll('.js-nav-sec');
      activeSectionClass = 'nav-list-wrap__item--active';
      navBackBtn = navElem.querySelector('.js-mobile-nav-back');
      navBackBtnActiveClass = 'nav-ctrls__btn--active';


      for (i = 0, len = navTriggerElems.length; i < len; i++) {
        navTriggerElems[i].addEventListener('click', function (event) {
          event.preventDefault();

          toggleMenu();
        });
      }

      for (i = 0, len = navSecTriggerElems.length; i < len; i++) {
        navSecTriggerElems[i].addEventListener('click', function (event) {
          event.preventDefault();

          changeSec(event.currentTarget.dataset.navSecTrigger);
        });
      }
    })();
  }

  // var container = document.querySelector('.' + window.app.global.wrapper),
  //     header = document.querySelector('.js-site-header'),
  //     mobilePanel = document.querySelector('.js-mobile-nav'),
  //     icon = document.querySelector('.js-mobile-nav-toggle'),
  //     mobMenu = document.querySelector('.js-mobile-nav-menu'),
  //     menuActive = false;

  // var bodyMenuActiveClass = 'menu-open';
  // var htmlMenuActiveClass = 'menu-open';
  // var containerMenuActiveClass = 'menu--active';
  // var headerMenuActiveClass = 'header--menu-active';
  // var mobilePanelMenuActiveClass = 'active'
  // var iconMenuActiveClass = 'header__mobmenu--menu-active';
  // var mobileMenuScrollClass = 'scroll';

  // // Part 1  - Opening and closing menu

  // //Hide and Show mobile menu
  // events.on(icon, 'click', (e) => {
  //   e.preventDefault();
  //   toggleMenu();
  //   if (!menuActive) {
  //     menuActive = true;
  //   } else {
  //     menuActive = false;
  //   }
  // });

  // events.on(container, 'click', (e) => {
  //   if (menuActive) {
  //     toggleMenu();
  //     menuActive = false;
  //   }
  // });
  // //toggleMenu();

  // //Stop scrolling when fixed nav visible
  // function disableBackgroundScroll(e) {
  //   if (menuActive) {
  //     e.preventDefault();
  //   }
  // }

  // events.on(container, 'touchmove', disableBackgroundScroll);

  // function toggleMenu() {

  //   //set nav to default state after closing
  //   if (menuActive) {
  //     setTimeout(function() {
  //       dom.toggleClass(document.documentElement, htmlMenuActiveClass);
  //       dom.toggleClass(document.body, bodyMenuActiveClass);
  //       resetNav();
  //       events.off(container, 'touchmove', disableBackgroundScroll);
  //     }, 500);
  //   } else {
  //     events.on(container, 'touchmove', disableBackgroundScroll);
  //     dom.toggleClass(document.documentElement, htmlMenuActiveClass);
  //     dom.toggleClass(document.body, bodyMenuActiveClass);
  //   }

  //   dom.toggleClass(container, containerMenuActiveClass);
  //   dom.toggleClass(icon, iconMenuActiveClass);
  //   dom.toggleClass(mobilePanel, mobilePanelMenuActiveClass);
  //   dom.toggleClass(header, headerMenuActiveClass);

  // }

  // //if the menu cant be centred due to screen height, add scroll class
  // function checkScroll() {
  //   mobMenu.classList.remove(mobileMenuScrollClass);
  //   if (window.innerHeight > mobMenu.clientHeight) {
  //     return
  //   }
  //   mobMenu.classList.add(mobileMenuScrollClass);
  // }
  // checkScroll();

  // // Part 2 - Within menu
  // var mobile_nav = mobilePanel.querySelectorAll('.js-nav-has-menu'),
  //     nav_menus = mobilePanel.querySelectorAll('.js-nav-menu'),
  //     back = mobilePanel.querySelector('.js-nav-back');

  // var navMenuTriggerClass = 'js-nav-menu-trigger';
  // var innerMenuActiveClass = 'active';
  // var mobilePanelInnerActiveClass = 'layer2'

  // for (var i = 0; i < mobile_nav.length; i++) {
  //   events.on(mobile_nav[i].querySelector('.' + navMenuTriggerClass), 'click', function(e) {
  //     e.preventDefault();
  //     showNav(e.target.getAttribute('data-menu'));
  //   });
  // }

  // events.on(back, 'click', function(e) {
  //   resetNav();
  // })

  // events.on(window, 'resize', function(e) {
  //   if (window.innerWidth > window.app.global.desktop) {
  //     if (menuActive) {
  //       toggleMenu();
  //       menuActive = false;
  //     }
  //   } else {
  //     checkScroll();
  //   }
  // })

  // function showNav(activeMenu) {
  //   dom.addClass(mobilePanel.querySelector('.' + activeMenu), innerMenuActiveClass);
  //   dom.addClass(mobilePanel, mobilePanelInnerActiveClass);
  // }

  // function resetNav() {
  //   dom.removeClass(mobilePanel, mobilePanelInnerActiveClass);
  //   for (var i = 0; i < nav_menus.length; i++) {
  //     dom.removeClass(nav_menus[i], innerMenuActiveClass);
  //   }
  // }

  // //temporary fix for styling the menu links
  // // Groups sub-items into accordians (eg. 'Property - Commercial, Property - Retail' --> 'Property > Commercial, Retal')
  // var lists = $(mobilePanel).find('.js-nav-list');
  // var groups = [];
  // var mNavObject = $(mobilePanel);
  // $.each(lists, function(i, el) {

  //   //find relevant items
  //   var items = $(el).find('li a');//todo replace with class selector

  //   if (items.length > 0) {


  //     $.each(items, function(i, itemEl) {

  //       var labelText = false;

  //       var itemText = $(itemEl).text();
  //       if (itemText.indexOf('-') != -1) {
  //         if (!labelText) {
  //           labelText = itemText.slice(0, itemText.indexOf('-'));
  //         }
  //         $(itemEl).text(itemText.slice(itemText.indexOf('-') + 2));

  //         $(itemEl).closest('li').attr('data-grouped', labelText)
  //         groups.push(labelText);

  //       }
  //     });
  //   }

  // });

  // if (groups.length > 0) {
  //   groups = groups.filter(function(item, index, inputArray) {
  //     return inputArray.indexOf(item) == index;
  //   });

  //   for (var i = 0; i < groups.length; i++) {

  //     var html =
  //       ` <li  id="navaccordion${i}" class="accordion accordion--nostyle nav__menu__sublist">
  //           <div class="accordion__section">
  //             <p id="navgroup${i}" class="accordion__title nav__menu__subheading">${groups[i]}<span data-grunticon-embed class="accordion__marker icon icon-expand"></span></p>
  //             <div class="nav__menu__group accordion__content" role="group" aria-labelledby="navgroup${i}">
  //       `;

  //     mNavObject.find('[data-grouped="' + groups[i] + '"]').each(function(i, groupEl) {
  //       html += $(groupEl).html();
  //     });

  //     html += '</div></div></li>';

  //     mNavObject.find('[data-grouped="' + groups[i] + '"]').first().before(html);
  //     mNavObject.find('[data-grouped="' + groups[i] + '"]').remove();
  //     Accordion.init(mobilePanel.querySelector('#navaccordion' + i));

  //   }
  // }

};

var mobileNav = {
  init: function init() {
    _init();
  }
};
exports.default = mobileNav;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35,"../modules/accordion":2}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require("../../libs-th-nk/events/events");

var _dom = require("../../libs-th-nk/dom/dom");

var modal = {
  modals: [],
  modalId: 0,
  init: function init() {

    $('.modal').each(function () {
      $('a[href="#' + $(this).attr('id') + '"]').addClass('modal-trigger');
    });

    $('a[href*="#modal-content"]').addClass('modal-trigger');

    var modaltriggers = document.querySelectorAll(".modal-trigger");
    var modals = document.querySelectorAll(".modal");

    // get the window location, to see if a modal should be auto triggered
    var hash = window.location.hash;

    if (modaltriggers) {
      for (var i = 0; i < modaltriggers.length; i++) {
        if ($.inArray(modaltriggers[i], this.modals) == -1) {
          this.setupTrigger(modaltriggers[i]);
          this.modals.push(modaltriggers[i]);
        }
      }

      for (var i = 0; i < modals.length; i++) {
        this.setupModal(modals[i]);
      }

      // if there is a hash, loop through the triggers to find a match, and trigger the click...
      if (hash) {
        for (var i = 0; i < modaltriggers.length; i++) {
          if (modaltriggers[i].getAttribute("href") === hash) {
            _events.events.trigger(modaltriggers[i], "click");
          }
        }
      }
    }
  },
  scrollbarCheck: function scrollbarCheck() {
    var scrollDiv = document.createElement("div");
    scrollDiv.className = "modal-scrollbar-measure";
    $("body").append(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    $("body").css("padding-right", scrollbarWidth + "pX");
    $(".header").css("padding-right", scrollbarWidth + "pX");
  },
  openModal: function openModal(target) {
    var obj = this;

    if (!document.querySelector(target)) {
      return;
    }

    _dom.dom.addClass(document.querySelector(target), "active");
    var scroll = $(document).scrollTop();

    $(document).on("keydown.modal", function (e) {
      if (e.keyCode == 27) {
        obj.closeModal(document.querySelector(target));
      }
    });

    var modalTarget = $(document.querySelector(target));
    modalTarget.attr("aria-hidden", "false");

    if (_dom.dom.containsClass(document.querySelector(target), "modal-center")) {
      modalTarget.find(".modal__inner").attr("tabindex", 0).focus();
      _dom.dom.addClass(document.body, "fullscreen");
      obj.scrollbarCheck();
    } else {
      setTimeout(function () {
        modalTarget.find(".modal__inner").attr("tabindex", 0).focus();
      }, 500);
      _dom.dom.addClass(document.body, "menu-open");
      document.body.style.top = -scroll + "px";
    }
  },
  setupTrigger: function setupTrigger(trigger) {
    var obj = this;

    _events.events.on(trigger, "click", function (e) {
      e.preventDefault();

      var target = e.currentTarget.getAttribute("href");

      if (target && target.charAt(0) === "#") {
        obj.openModal(target);
      } else {
        $.ajax(target).done(function (data) {
          // get the modal content from the page
          var content = $(data).find("#modal-content");

          // create a unique modal id
          var id = "modal-" + obj.modalId++;

          // TODO: possibly move this to a template
          var modal = '<div id="' + id + '" class="modal modal--wide" aria-hidden="true" role="dialog"><div class="modal__wrap"></div><div class="modal__inner"><div class="modal__close"><svg viewBox="0 0 14 14" ><path class="st0" d="M13.1,0.9L0.9,13.1 M13.1,13.1L0.9,0.9"/></svg></div>' + content.html() + "</div></div>";

          // create a modal from the template string
          var $modal = $(modal);

          // add the modal to the page
          $("body").append($modal);

          // update the attribute on the clicked anchor, to prevent additional ajax requests to the same content
          trigger.setAttribute("href", "#" + id);

          // setup the modal
          obj.setupModal(document.getElementById(id));

          // call custom events that allow other secions of the site to hook into the functionality
          $.event.trigger({
            type: "setupModal",
            modal: $modal
          });

          // finally open the new modal
          obj.openModal("#" + id);
        });
      }
    });
  },
  setupModal: function setupModal(modal) {
    var that = this;
    _events.events.on(modal.querySelector(".modal__wrap"), "click", function (e) {
      that.closeModal(e.currentTarget.parentNode);
    });
    _events.events.on(modal.querySelector(".modal__close"), "click", function (e) {
      that.closeModal(e.currentTarget.parentNode.parentNode);
    });
  },
  closeModal: function closeModal(modal) {
    _dom.dom.removeClass(modal, "active");
    $(modal).attr("aria-hidden", "true");

    $(document).off("keydown.modal");

    setTimeout(function () {
      var scroll = document.body.style.top;
      _dom.dom.removeClass(document.body, "menu-open");
      _dom.dom.removeClass(document.body, "fullscreen");
      $("body").css("padding-right", "");
      $(".header").css("padding-right", "");

      if (!_dom.dom.containsClass(modal, "modal-center")) {
        $(document).scrollTop(Math.abs(parseInt(scroll)));
      }
    }, 500);
  }
};

exports.default = modal;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Monogram = function () {
    function Monogram(el) {
        _classCallCheck(this, Monogram);

        this.el = el;
        this.initials = $(this.el).attr('data-monogram');
        this.length = this.initials.replace(/[.]/g, "").length;

        //Settings for generated image
        this.size = 217;
        this.font = 90;

        this.render();
    }

    /* Render the monogram */


    _createClass(Monogram, [{
        key: 'render',
        value: function render() {

            //Setup canvas
            var canvas = document.createElement('canvas');
            canvas.width = this.size;
            canvas.height = this.size;
            var context = canvas.getContext("2d");

            context.fillStyle = "#f9f9f9";
            context.fillRect(0, 0, this.size, this.size);

            //Render text
            var ratio = this.font / this.size;
            context.font = "italic " + this.size * ratio + "px Times New Roman";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillStyle = '#dfdfdf';
            context.fillText(this.initials, this.size / 2, this.size / 2);

            //Convert to Image
            var img = new Image();
            img.alt = this.initials;
            img.src = canvas.toDataURL("image/jpg");

            $(this.el).prepend(img);
        }
    }]);

    return Monogram;
}();

exports.default = Monogram;

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
(function ($) {
  $.fn.equalHeights = function () {
    var maxHeight = 0,
        $this = $(this);

    $this.each(function () {
      var height = $(this).innerHeight();

      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    return $this.css("min-height", maxHeight);
  };
})(jQuery);

var _init = function _init(root) {
  var panel = root;

  if (!panel) {
    return;
  }

  $(".new-tablet").each(function () {
    var $this = $(this);

    $this.find(".panel").equalHeights();
  });

  panel.addClass("nav-panel--js");

  var panelTheme = panel.data("theme");
  var anchors = $(panel).find('.nav-panel__nav a[href^="#"]');
  var lastPanel = null;

  var panelMedia = panel.find(".nav-panel__media:eq(0)");
  var mainHTML = panelMedia.html();
  var panelClone = panelMedia.clone().hide().insertAfter(panelMedia);

  var medias = [panelMedia, panelClone];

  var onFaded = function onFaded() {
    var el = $(this);

    var video = el.find("video:eq(0)");

    if (video.length > 0) {
      video = video.get(0);

      video.paused ? video.play() : video.pause();
    }

    // console.log(el);
  };

  var preFade = function preFade(el) {
    var video = el.find("video:eq(0)");

    if (video.length > 0) {
      video = video.get(0);

      video.paused ? video.play() : video.pause();
    }
  };

  var paneheight = 450;

  anchors.on("click", function (e) {
    e.preventDefault();

    if ($(this).hasClass("active")) {
      return;
    }

    anchors.removeClass("active");
    $(this).addClass("active");

    var href = $(this).attr("href");

    var pane = panel.find(href);

    if (pane.length > 0) {
      if (lastPanel) {
        lastPanel.removeClass("active").hide();
      }

      lastPanel = pane;

      pane.addClass("active").show();

      var theme = pane.data("theme");

      // find the media
      var media = pane.find(".panel__media");

      if (media.length > 0) {
        panel.attr("data-theme", theme || "");

        var classes = media.attr("class").replace("panel__media", "nav-panel__media");

        var mediaB = medias.pop();

        mediaB.attr("class", classes);
        mediaB.html(media.html());

        $(medias[0]).fadeOut(onFaded);

        preFade(mediaB);
        mediaB.fadeIn();

        medias.unshift(mediaB);
      } else {
        panel.attr("data-theme", panelTheme || "");

        var mediaB = medias.pop();

        if (mediaB.html() === mainHTML) {
          $(medias[0]).fadeOut(onFaded);

          // preFade(mediaB);
          mediaB.fadeIn();

          medias.push(mediaB);
        } else {
          mediaB.html(mainHTML);

          $(medias[0]).fadeOut(onFaded);

          preFade(mediaB);
          mediaB.fadeIn();

          medias.unshift(mediaB);
        }
      }
    }
  }).each(function (index) {
    var href = $(this).attr("href");
    var pane = panel.find(href);

    if (pane.length) {
      paneheight = Math.max(paneheight, pane.outerHeight());

      pane.hide();
    }
  }).each(function (index) {
    var href = $(this).attr("href");
    var pane = panel.find(href);

    if (pane.length) {
      pane.css({ minHeight: paneheight + 30 + "px" });
    }
  });

  $(anchors[0]).trigger("click");
};

var panels = {
  init: function init(root) {
    _init(root);
  }
};
exports.default = panels;

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var parallax = {
    parallaxMax: 15,
    dist: 0.5,
    hero: function hero(item, distance, center) {

        var $el = $(item),
            $img = $el.find("img"),
            dist = this.dist;

        if (distance && distance > 0) {
            dist = distance;
        }

        //If the image is not big enough, forget about parallaxing it
        //Also, none of this on mobile
        if ($el.height() > $img.height() || $(window).innerWidth() < window.app.global.desktop) {
            $img.css('transform', "");
            return;
        }

        //If this is not in view dont waste time calculating values
        if (!$el.isOnScreen()) {
            return;
        }

        //Height of container and how much to parallax by
        var container_height = $el.height();
        var parallax_dist = container_height * dist;

        //Variables needed to calculate the amount of parallax
        var top = $el.offset().top,
            scrollTop = $(window).scrollTop();

        var windowHeight = window.innerHeight,
            windowBottom = scrollTop + windowHeight,
            percentScrolled = (windowBottom - top) / (container_height + windowHeight);

        //Dont kick in until .5 scrolled
        percentScrolled = percentScrolled - 0.5;

        var parallax = parallax_dist * percentScrolled;

        //Pixels to parallax by
        var parallaxPixels = Math.round(parallax);

        //We are here so do the parallax effect using percetages
        parallax = Math.round(parallax * 0.1);

        //Need to set a limit of how much the parallax can actually go
        if (parallax <= 0 || parallax >= this.parallaxMax) {
            return;
        }

        if (window.requestAnimationFrame) {
            requestAnimationFrame(animateFrame);
        } else {
            animateFrame();
        }

        //Do parallax with requestAnimationFrame if available
        function animateFrame() {
            if (!center) {
                $img.css('transform', "translateY(" + parallaxPixels + "px)");
            } else {
                $img.css('transform', "translate(-50%," + parallaxPixels + "px)");
            }
        }
    }

};

exports.default = parallax;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var updateURLParameter = function updateURLParameter(url, param, paramVal) {
  var newAdditionalURL = "";
  var tempArray = url.split("?");
  var baseURL = tempArray[0];
  var additionalURL = tempArray[1];
  var temp = "";
  if (additionalURL) {
    tempArray = additionalURL.split("&");
    for (var i = 0; i < tempArray.length; i++) {
      if (tempArray[i].split('=')[0] != param) {
        newAdditionalURL += temp + tempArray[i];
        temp = "&";
      }
    }
  }

  var rows_txt = temp + "" + param + "=" + paramVal;
  return baseURL + "?" + newAdditionalURL + rows_txt;
};

var updateUrl = function updateUrl(facetLink) {
  var id = facetLink.attr('data-facet');
  if (id === 'All') id = '';
  history.pushState({ facetId: id }, document.title, updateURLParameter(window.location.href, 'facet', id));
};

var _init = function _init() {

  var initialId = $('.search-page__frame .tabs li.selected a').attr('data-facet');
  history.replaceState({ facetId: initialId !== 'All' ? initialId : '' }, document.title, window.location.href);

  window.onpopstate = function (event) {
    var id = event.state.facetId;
    if (id === '') id = 'All';
    var link = $('.search-page__frame .tabs a[data-facet=\'' + id + '\']');

    link.trigger('click');
  };

  $('.search-page__frame .tabs a').on('click', function (e) {
    var href = $(e.currentTarget).attr('href');
    var more = $(href).find('.load-more--hidden');

    if (typeof e.originalEvent !== 'undefined') {
      updateUrl($(e.currentTarget));
    }

    //need to work out whats going on here
    if (more.length) {
      var target = more.attr('data-target');

      if (target) {
        $(target).children('.search-page__result').remove();
      }

      more.trigger('click');
    }
  });

  var searchOpen = $('.js-nav-search'),
      searchContainer = $('#search-head'),
      reset = searchContainer.find('.search__reset'),
      searchResults = $('#search-results'),
      searchInput = $('.input--search-top'),
      searchInner = searchResults.find('.search-results__content'),
      siteWrap = $('.global-wrapper'),
      searchCta = $('.search__cta'),
      noRes = $('.search-results--noresult'),
      viewAll = $('#search__viewall'),
      wrapper = document.querySelector('.' + window.app.global.wrapper),
      apiUrl = searchContainer.attr('data-api'),
      searchActive = false,
      searchForm = searchContainer.find('form'),
      canRequest = true,
      searchTrigger = $('.js-search-trigger'),
      activeFilters = null,
      activePlaceholder = null,
      activeAmountPerSection = null;

  searchOpen.on('click', showSearch);
  reset.on('click', hideSearch);

  searchTrigger.on('click', function (e) {
    e.preventDefault();

    $("header.header").addClass("header--active");

    var $clickedTrigger = $(e.currentTarget);

    var triggerFilters = $clickedTrigger.attr('data-search-filter');
    if (triggerFilters !== null && triggerFilters !== '') {
      activeFilters = triggerFilters;
    }

    var triggerPlaceholder = $clickedTrigger.attr('data-search-placeholder');
    if (triggerPlaceholder !== null && triggerPlaceholder !== '') {
      activePlaceholder = triggerPlaceholder;
    }

    var triggerAmountPerSection = $clickedTrigger.attr('data-amount-per-section');
    if (triggerAmountPerSection !== null && triggerAmountPerSection !== '') {
      activeAmountPerSection = triggerAmountPerSection;
    }

    showSearch();
  });

  //Key events for search
  searchOpen.on('keydown', function (e) {
    if (e.which == 13) {
      console.log('keydown?');
      showSearch();
    }
  });

  var fakeTab = false;
  searchInput.on('keydown', function (e) {
    // console.log(e.which)
    if (e.which == 27) {
      hideSearch();
      return;
    }
    if (e.which != 40) {
      return;
    }

    fakeTab = true;
    //go to first link and let natural browser order do the rest
    if (searchResults.find('.search-results__content a').length > 0) {
      searchResults.find('.search-results__content a').first().focus();
    }
  });

  $(document).on('keydown', function (e) {
    if (fakeTab) {
      e.preventDefault();
      fakeTab = false;
    }
  });

  //arrow nav
  searchResults.on('keydown', function (e) {
    if (e.which == 40) {
      e.preventDefault();
      //go to first link and let natural browser order do the rest
      if (searchResults.find('a').length > 0) {
        var inFocus = searchResults.find('a:focus');
        if (inFocus.parent().next().length > 0) {
          inFocus.parent().next().find('a').first().focus();
        } else if (inFocus.closest('.search-result').next().find('a').length > 0) {
          inFocus.closest('.search-result').next().find('a').first().focus();
        } else {
          viewAll.focus();
        }
      }
    }
    if (e.which == 38) {
      e.preventDefault();
      //go to first link and let natural browser order do the rest

      if (searchResults.find('a').length > 0) {
        var inFocus = searchResults.find('a:focus');
        if (inFocus.parent().prev().length > 0) {
          inFocus.parent().prev().find('a').last().focus();
        } else if (inFocus.closest('.search-result').prev().find('a').length > 0) {
          inFocus.closest('.search-result').prev().find('a').last().focus();
        } else {
          if ($(':focus').attr('id') == 'search__viewall' && searchResults.find('.search-result').length > 0) {
            searchResults.find('.search-result').last().find('a').focus();
            return;
          }
          searchInput.focus();
        }
      }
    }
  });

  //Key events for close
  reset.on('keydown', function (e) {
    if (e.which == 13) {
      hideSearch();
    }
    if (e.which == 9) {
      e.preventDefault();
      if (searchResults.find('a').length > 0) {
        searchResults.find('a').first().focus();
      }
    }
  });

  //Stop scrolling behind
  function disableScroll(e) {
    e.preventDefault();
  }

  //Add scroll to close
  searchInput.on('focus', function (e) {

    if (window.app.browserTests.isIos() || window.innerWidth < parseInt(window.app.global.desktop)) {
      $('body').addClass('fullscreen');
    } else {
      setTimeout(function () {
        $(window).on('scroll', hideSearch);
      }, 300);
    }

    setTimeout(function () {
      $('.global-wrapper').on('touchmove', disableScroll);
      $('.header').on('touchmove', disableScroll);
    }, 300);
  });

  //show
  function showSearch() {

    searchActive = true;

    //update placeholder
    if ($('.input--search-top').attr('data-defaultplaceholder')) {
      $('.input--search-top').attr('placeholder', $('.input--search-top').attr('data-defaultplaceholder'));
    }

    if (activePlaceholder !== null) {
      var oldplaceholder = $('.input--search-top').attr('placeholder');

      $('.input--search-top').attr('placeholder', activePlaceholder);
      $('.input--search-top').attr('data-defaultplaceholder', oldplaceholder);
    }

    setTimeout(function () {
      searchInput.focus();
    }, 100);

    searchResults.addClass('active');
    searchContainer.addClass('visible');
    $(wrapper).addClass("mask--dark");

    setTimeout(function () {
      siteWrap.on('click', hideSearch);
    }, 10);
  }

  //hide
  function hideSearch() {

    $(window).off('scroll', hideSearch);

    $('.global-wrapper').off('touchmove', disableScroll);
    $('.header').off('touchmove', disableScroll);
    $('.global-wrapper').removeClass('hidden');
    $('body').removeClass('fullscreen');

    if (!searchActive) {
      return;
    }

    searchActive = false;
    activeFilters = null;
    activePlaceholder = null;
    activeAmountPerSection = null;

    siteWrap.off('click', hideSearch);

    if (window.app.browserTests.isIos()) {
      $('html').removeClass('search-active');
    }

    _dom.dom.removeClass(wrapper, "mask--dark");
    searchResults.removeClass('visible');
    searchContainer.removeClass('visible');
    searchOpen.focus();

    setTimeout(function () {
      searchResults.removeClass('active');
      searchInput.val('');
      searchInner.text('');
    }, 500);
  }

  //Ios- Deal with keyboard issues
  if (window.app.browserTests.isIos()) {
    searchInner.on('touchstart', function () {
      document.querySelector('.input--search-top').blur();
    });
  }

  //Search on keypress
  searchInput.on('keyup', window.debounce(doSearch, 250));

  //The search
  function doSearch() {

    if (!canRequest) {
      return false;
    }

    var searchTerm = searchInput.val();

    //If any chars entered
    if (searchTerm.length > 1) {

      searchContainer.find('.formError').removeClass('active');
      searchInput.attr('aria-invalid', 'false');

      if (window.app.browserTests.isIos() || window.innerWidth < parseInt(window.app.global.desktop)) {
        $('.global-wrapper').addClass('hidden');
      }

      if (window.app.browserTests.isIos()) {
        setTimeout(function () {
          if (window.app.browserTests.isIos()) {
            $('html').addClass('search-active');
          }
        }, 500);
      }

      var queryString = "?query=" + encodeURIComponent(searchTerm.toLowerCase());
      if (activeFilters !== null) {
        queryString = queryString + '&filter=' + activeFilters;
      }
      if (activeAmountPerSection !== null) {
        queryString = queryString + '&amountpersection=' + activeAmountPerSection;
      }
      // console.log('activeAmountPerSection '+activeAmountPerSection)
      // console.log('queryString '+queryString)

      var searchText = apiUrl + queryString;

      viewAll.attr('href', '/search' + queryString);

      $.getJSON(searchText).done(function (data) {

        searchResults.addClass('visible');

        data = JSON.parse(data);

        //Empty or not?
        var results = null;
        for (var key in data) {
          if (data[key] != null && data[key] != "Suggestions" && data[key].length > 0) {
            results = true;
          }
        }

        if (!results) {
          searchResults.find('.search-results__warning span').text(searchTerm);
          noRes.show();
          searchInner.hide();
          viewAll.hide();
        } else {
          noRes.hide();
          searchInner.show();
          searchCta.text('"' + searchTerm + '"');
          viewAll.show();
          buildHtml(data, searchTerm);
        }
      }).fail(function () {
        searchResults.addClass('visible');
        searchResults.find('.search-results__warning span').text(searchTerm);
        noRes.show();
        searchInner.hide();
        viewAll.hide();
      });
    } else {
      searchResults.removeClass('visible');
    }
  }

  //Create HTML from JSON object
  function buildHtml(data, searchTerm) {

    var html = '';

    $.each(data, function (i, item) {

      if (!item || !item.length) {
        return;
      }

      html += '<div class="search-result">';
      html += '<span class="search-result__section">' + i + '</span>';
      html += '<ul class="search-result__results">';

      $.each(item, function (i, content) {
        html += '<li><a data-datalayer-action="' + content.Content + '" tabindex="0" href="' + content.Url + '">' + highlight(content.Content, searchTerm);
        html += "</a>";
        html += "</li>";
      });

      html += '</ul>';
      html += '</div>';
    });

    searchInner.html(html);

    var actionLinks = searchInner[0].querySelectorAll('[data-datalayer-action]');
    for (var i = 0, len = actionLinks.length; i < len; i++) {
      actionLinks[i].addEventListener('click', function (event) {
        var action = event.currentTarget.dataset.datalayerAction;
        suggestedSearchGaTracking(action);
      });
    };
  }

  //Highlight results
  function highlight(content, searchTerm) {
    var result = content;
    var regEx = new RegExp('(' + searchTerm.toLowerCase() + ')', "ig");
    if (content.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
      result = content.replace(regEx, '<span class="search-result__highlight">$1</span>');
    }
    return result;
  }

  function suggestedSearchGaTracking(action) {
    if (typeof dataLayer !== 'undefined') {
      dataLayer.push({ 'dataLayer.searchInfo.method': 'Suggested Search' });
      dataLayer.push({ 'dataLayer.findingInfo.cat': 'Suggested Search' });
      dataLayer.push({ 'dataLayer.findingInfo.action': action });
    }
  }

  //submit form on enter
  searchForm.on('submit', function (e) {

    var searchVal = searchForm.find('input').val();

    if (searchVal.length < 2) {
      e.preventDefault();
      searchContainer.find('.formError').addClass('active');
      searchInput.attr('aria-invalid', 'true');
      return false;
    } else {
      if (activeFilters !== null) {
        $('<input />').attr('type', 'hidden').attr('name', 'filter').attr('value', activeFilters).appendTo(searchForm);
      }

      searchInput.attr('aria-invalid', 'false');
      searchContainer.find('.formError').removeClass('active');
    }
  });
};

//Full search results page
var _fullsearch = function _fullsearch() {

  var searchPage = document.querySelector('#search-page'),
      searchFrame = '#search-page__frame',
      clear = searchPage.querySelector('.search__clear'),
      menu = searchPage.querySelector('.search-page__menu'),
      input = searchPage.querySelector('.input--search'),
      windowWidth;

  //Clear and focus search
  _events.events.on(clear, 'click', function (e) {
    input.value = "";
    input.focus();
  });

  //horizontal sliding menu
  var options = {
    horizontal: 1,
    slidee: menu,
    itemNav: 'basic',
    speed: 300,
    mouseDragging: 1,
    touchDragging: 1
  };

  var frame = null;

  function initHorizontal() {

    windowWidth = window.innerWidth;

    if (windowWidth < parseInt(window.app.global.desktop)) {

      //$(searchFrame).css('height', $(searchFrame).outerHeight());


      $(searchFrame).find("ul li").each(function (index, element) {
        $(this).css("width", "");
        var itemWidth = $(this).outerWidth(true);
        $(this).css("width", Math.ceil(itemWidth + 10) + "px");
      });

      if (frame) {
        frame.destroy();
      }

      //$(menu).css('min-width', count + "px")
      $(menu).addClass('active');
      setTimeout(function () {
        frame = new Sly(searchFrame, options).destroy().init();
      }, 750);
    } else if (windowWidth > window.app.global.desktopframe && frame) {
      $(menu).addClass('active');
      frame.destroy();
      frame = null;
    } else {
      $(menu).addClass('active');
    }
  }

  initHorizontal();

  _events.events.on(window, "resize", initHorizontal);
};

var search = {
  init: function init() {
    _init();
  },
  fullsearch: function fullsearch() {
    _fullsearch();
  }
};
exports.default = search;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var stickyElement = function () {
  function stickyElement(el, altTrigger) {
    _classCallCheck(this, stickyElement);

    if (altTrigger) {
      this.altTrigger = $(altTrigger);
    }

    this.el = $(el);
    this.init();
  }

  _createClass(stickyElement, [{
    key: 'init',
    value: function init() {

      this.className = this.el.attr('class').replace("sticky", "").replace(/ /g, "");
      this.header = $('.header');
      this.isLetters = this.el.closest('.contacts-section,.services_index');

      if (this.isLetters.length == 0) {
        this.isLetters = false;
      }

      if ($(window).width() < window.app.global.desktop) {
        if (this.el.attr('data-sticky-mobile') != "false") {

          this.offset = this.el.attr('data-offset-mobile') ? parseInt(this.el.attr('data-offset-mobile')) : 0;

          this.el.addClass('stickyEl');

          this.addSpacer();

          this.addEvents();
        }
      } else {

        this.offset = this.el.attr('data-offset-desktop') ? parseInt(this.el.attr('data-offset-desktop')) : 0;

        this.el.addClass('stickyEl');

        this.addSpacer();

        this.calcWidth();

        this.addEvents();
      }
    }
  }, {
    key: 'addSpacer',
    value: function addSpacer() {

      if (this.altTrigger) return false;

      this.spacer = $('<div>');
      this.spacer.addClass(this.className);
      this.spacer.addClass("sticky");
      this.spacer.addClass("spacer");

      var height = this.el.outerHeight();

      this.spacer.height(height);

      this.el.after(this.spacer);
    }
  }, {
    key: 'calcWidth',
    value: function calcWidth() {

      if (this.altTrigger) return false;

      this.width = this.spacer.outerWidth();
      this.leftPos = this.el.offset().left;
    }
  }, {
    key: 'addEvents',
    value: function addEvents() {
      var _this = this;
      $(window).scroll(function () {
        _this.scroll();
      });
      this.scroll();
    }
  }, {
    key: 'scroll',
    value: function scroll() {

      var windowTop = $(window).scrollTop();

      if (this.altTrigger) {
        var barTop = this.altTrigger.offset().top + this.altTrigger.height();
      } else {
        var barTop = this.spacer.offset().top;
      }

      if (this.isLetters) {

        var itemPos = this.el.height() + this.el.offset().top,
            mainPost = $('#main').height() + $('#main').offset().top,
            diff = mainPost - itemPos;

        //If this is not active
        if (this.el.parents('.tab-content').length > 0 && this.el.parents('.tab-content.active').length == 0) {
          return;
        }

        if (mainPost > $(window).height()) {

          if (this.el.offset().top + diff < this.el.parents('.tab-content').offset().top) {
            return;
          }

          if (diff < 0) {
            this.el.find(">:first-child").css({
              transform: 'translateY(' + diff + 'px)'
            });
          } else {
            this.el.find(">:first-child").css({
              transform: ''
            });
          }
        }
      }

      var windowTopAdjusted = windowTop + this.offset;

      if (windowTopAdjusted >= barTop) {

        var stickyTop = 0;
        if (this.header.hasClass('header--active')) {
          stickyTop = this.header.outerHeight() - 1; // -1 fixes rounding issues making a gap
        }

        // Do not stick if an action alert is visible
        if (document.querySelector('.action-alert--is-active') !== null) {
          var barHeight = this.el.height();
          if (windowTopAdjusted <= barTop + barHeight) {
            stickyTop = -(windowTopAdjusted - barTop);
          } else {
            stickyTop = -barHeight;
          }
        }

        if (this.altTrigger) {
          this.el.addClass('stuck').css({
            transform: 'translateY(0%)',
            top: stickyTop + 'px'
          });
        } else if (this.isLetters) {
          if ($(window).width() < window.app.global.tablet) stickyTop += 20;
          this.el.css({
            top: stickyTop + 'px',
            left: this.leftPos + 'px'
          }).addClass('stuck');
        } else {
          this.el.css({
            top: stickyTop + 'px',
            left: this.leftPos + 'px',
            width: this.width + "px"
          }).addClass('stuck');
        }
      } else {
        if (this.altTrigger) {
          var _this = this;
          this.el.css({
            transform: 'translateY(-100%)',
            top: '0px'
          });
          setTimeout(function () {
            _this.el.removeClass('stuck');
          }, 500);
        } else if (this.isLetters) {
          this.el.css({
            top: 'auto',
            left: "",
            width: ""
          }).removeClass('stuck');
        } else {
          this.el.css({
            top: 'auto',
            left: "auto",
            width: this.width + "px"
          }).removeClass('stuck');
        }
      }
    }
  }, {
    key: 'reset',
    value: function reset() {

      if (this.altTrigger) return false;

      var widthVal = this.el.hasClass('utility-bar') ? "100%" : "auto";

      this.el.css({
        width: widthVal,
        left: ""
      });

      var height = this.el.outerHeight();

      this.spacer.css({
        height: height + "px"
      });

      this.leftPos = this.spacer.offset().left;
      this.width = this.spacer.outerWidth();

      if ($(window).width() < window.app.global.desktop) {
        this.offset = this.el.attr('data-offset-mobile') ? parseInt(this.el.attr('data-offset-mobile')) : 0;
      } else {
        this.offset = this.el.attr('data-offset-desktop') ? parseInt(this.el.attr('data-offset-desktop')) : 0;
      }

      this.scroll();
    }
  }]);

  return stickyElement;
}();

exports.default = stickyElement;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Strainer = function () {
  function Strainer(root) {
    var _this = this;

    _classCallCheck(this, Strainer);

    this.triggerElem = root;
    this.triggerCopyElem = root.querySelector('.js-strain-copy');

    this.dialogElem = document.querySelector('[data-strain-dialog="' + this.triggerElem.dataset.strain + '"]');
    this.dialogActiveClass = 'strain-dialog--active';

    this.searchElem = this.dialogElem.querySelector('.js-strain-input');

    this.strainItemElems = this.dialogElem.querySelectorAll('.js-strain-item');
    this.strainItemActiveClass = 'strain-dialog__item--is-active';
    this.strainItemHiddenClass = 'strain-dialog__item--is-hidden';

    this.overlay = this.dialogElem.querySelector('.js-strain-overlay');
    this.overlayActiveClass = 'strain-dialog__overlay--is-active';

    this.groupElem = $(root).parents('.js-strain-group')[0];
    this.resetElem = this.groupElem.querySelector('.js-strain-reset');

    this.targetElem = document.querySelector('[data-strain-content="' + this.groupElem.dataset.strainTarget + '"]');
    this.targetLoadingClass = this.targetElem.dataset.loadingClass;

    this.exclude = this.groupElem.dataset.strainExclude ? this.groupElem.dataset.strainExclude : null;

    this.closeElems = this.dialogElem.querySelectorAll('.js-strain-close');

    // Events
    // Show on click trigger
    _events.events.on(this.triggerElem, 'click', function (e) {
      e.preventDefault();

      _this.show(e);
    });
    // Show on 'enter' trigger
    _events.events.on(this.triggerElem, 'keydown', function (e) {
      if (e.which === 13) {
        _this.show(e);
      }
    });

    // Hide on click outside of dialog
    for (var i = 0; i < this.closeElems.length; i++) {
      _events.events.on(this.closeElems[i], 'click', function (e) {
        e.preventDefault();

        _this.hide(e);
      });
    }
    // Hide on 'esc'
    _events.events.on(this.dialogElem, 'keydown', function (e) {
      if (e.which === 27) {
        _this.hide();
      }
    });

    // Fetch data on change of strainer
    for (var i = 0; i < this.strainItemElems.length; i++) {
      _events.events.on(this.strainItemElems[i], 'click', function (e) {
        e.preventDefault();

        _this.setStrain(e);
      });
    }

    // Reset on click
    _events.events.on(this.resetElem, 'click', function (e) {
      e.preventDefault();

      _this.resetStrain();
    });

    //Search
    if (this.searchElem !== null) {
      _events.events.on(this.searchElem, 'keyup', function () {
        return _this.search();
      });
    }
  }
  //Show list Menu


  _createClass(Strainer, [{
    key: 'show',
    value: function show(e) {

      // Align Dialog With Trigger
      var triggerPos = $(this.triggerElem).position();

      var nudgeLeft = 10;
      var nudgeTop = 10;

      var alignTarget = this.dialogElem.querySelector('.js-strain-align-target');

      if (alignTarget !== null) {
        var inputPos = $(alignTarget).position();
        nudgeLeft = inputPos.left;
        nudgeTop = inputPos.top + 10;
      }

      this.dialogElem.style.left = triggerPos.left - nudgeLeft + "px";
      this.dialogElem.style.top = triggerPos.top - nudgeTop + "px";

      this.scroller();

      // Show Dialog
      this.dialogElem.classList.add(this.dialogActiveClass);

      //Focus on the first element
      if (this.searchElem !== null) {
        $(this.searchElem).focus();
      } else {
        var firstItem = this.dialogElem.querySelector('.js-strain-item');
        if (firstItem !== null) {
          $(firstItem).focus();
        }
      }
    }

    //Hide the Menu

  }, {
    key: 'hide',
    value: function hide() {
      // Hide Dialog
      this.dialogElem.classList.remove(this.dialogActiveClass);
    }

    //Filter by selecting item
    //Perform an AJAX Request
    //@param newTriggerCopy string - Text for the trigger
    //@param newVal string - Value of the newly active option
    //@param newCount string - Count of the newly active option
    //@param rest bool - If this is a reset or a set

  }, {
    key: 'updateStrain',
    value: function updateStrain(newTriggerCopy, newVal, newCount, reset) {
      var that = this;

      // Trigger 'loading' style of target
      this.targetElem.classList.add(this.targetLoadingClass);

      // Hide dialog
      this.hide();

      // Update value of trigger
      this.triggerElem.dataset.strainVal = newVal;

      //Update copy of trigger
      this.triggerCopyElem.innerHTML = newTriggerCopy;

      // Update placeholder of dialog
      setTimeout(function () {
        if (that.searchElem !== null) {
          that.searchElem.placeholder = newTriggerCopy;
          that.dialogElem.querySelector('.js-strain-active-count').innerHTML = '(' + newCount + ')';
        }

        // Update active item in dialog
        for (var i = 0; i < that.strainItemElems.length; i++) {
          var parentElem = that.strainItemElems[i].parentNode;
          parentElem.classList.remove(that.strainItemActiveClass);

          if (that.strainItemElems[i].dataset.strainVal === newVal) {
            parentElem.classList.add(that.strainItemActiveClass);
          }
        }
      }, 500);

      // Generate Ajax url and parameters
      var makeRequest = true;
      var requestUrl = this.groupElem.dataset.strainUrl;
      var requestParams = '?';
      var groupStrainElems = this.groupElem.querySelectorAll('.js-strain');
      for (var i = 0; i < groupStrainElems.length; i++) {
        requestParams = requestParams + groupStrainElems[i].dataset.strainParam + '=' + groupStrainElems[i].dataset.strainVal + '&';

        // This makes sure the ajax request is only made once per group
        // Todo refactor
        if (groupStrainElems[i] === this.triggerElem && i !== groupStrainElems.length - 1 && reset) {
          makeRequest = false;
        }
      }

      if (this.exclude) {
        requestParams += 'exclude=' + this.exclude;
      } else {
        requestParams = requestParams.substring(0, requestParams.length - 1);
      }

      requestUrl = requestUrl + requestParams;

      // Make Ajax request
      if (makeRequest) {
        this.ajaxRequest(requestUrl);
      }
    }
  }, {
    key: 'setStrain',
    value: function setStrain(e) {
      var chosenOption = e.currentTarget;
      var newTriggerCopy = chosenOption.innerHTML;
      var newVal = chosenOption.dataset.strainVal;
      var newCount = chosenOption.dataset.strainCount;

      this.updateStrain(newTriggerCopy, newVal, newCount, false);
    }
  }, {
    key: 'resetStrain',
    value: function resetStrain() {
      var defaultTriggerCopy = this.triggerElem.dataset.strainDefaultCopy;
      var defaultVal = this.triggerElem.dataset.strainDefaultVal;
      var defaultCount = this.triggerElem.dataset.strainDefaultCount;

      this.updateStrain(defaultTriggerCopy, defaultVal, defaultCount, true);
    }

    //Perform an AJAX Request
    //@param url string - url to request if not set globally on the filter

  }, {
    key: 'ajaxRequest',
    value: function ajaxRequest(url) {
      var that = this;

      var jsRequest = $.ajax({ url: url, data: {} }).done(function (data) {

        // Make sure content nesting is corrected
        var content = data;

        var wrappedData = '<div>' + data + '</div>';
        var nestedContentElem = $(wrappedData).find('[data-strain-content="' + that.groupElem.dataset.strainTarget + '"]');
        if (nestedContentElem.length > 0) {
          content = nestedContentElem[0].innerHTML;
        }

        // Insert content
        that.targetElem.innerHTML = content;
        that.targetElem.classList.remove(that.targetLoadingClass);

        //reinitialize filter panel
        window.app.loadmoreButton.init();
        window.app.filters.init();
        grunticon.svgLoadedCallback();
      });
    }
  }, {
    key: 'scroller',
    value: function scroller() {
      if (window.innerWidth >= window.app.global.desktop) {
        this.scrollAdded = true;
        $(this.dialogElem).find('.scroller').nanoScroller({ sliderMaxHeight: 35, preventPageScrolling: true, contentClass: 'scroller__content' });
        $('.scroller__content').attr('tabindex', '');
      } else if (this.scrollAdded) {
        $(this.dialogElem).find('.scroller').nanoScroller({ destroy: true });
      }
    }
  }, {
    key: 'search',
    value: function search(e) {
      var searchVal = this.searchElem.value;
      var regEx = new RegExp('^' + searchVal, 'i');
      var emptySearch = false;

      if (searchVal === '') {
        emptySearch = true;
      }

      for (var i = 0; i < this.strainItemElems.length; i++) {
        if (this.strainItemElems[i].innerHTML.match(regEx) || emptySearch) {
          this.strainItemElems[i].parentNode.classList.remove(this.strainItemHiddenClass);
        } else {
          this.strainItemElems[i].parentNode.classList.add(this.strainItemHiddenClass);
        }
      }

      this.scroller();
    }
  }]);

  return Strainer;
}();

exports.default = Strainer;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var _init = function _init(root) {

  var tabs = root;

  if (!tabs) {
    return;
  }

  var tabGroup = tabs.querySelectorAll('li');

  var tabTargets = [],
      hasActive = false;

  //Create Tabs
  var setupTab = function setupTab(tab) {

    //show this
    var target = tab.querySelector('a').getAttribute('href');
    tabTargets.push(target);

    var active = false;

    //Open a new tab
    var open = function open() {
      //tabs
      for (var i = 0; i < tabGroup.length; i++) {
        _dom.dom.removeClass(tabGroup[i], "selected");
        $(tabGroup[i]).children().blur();
      }
      _dom.dom.addClass(tab, "selected");

      //content
      for (var i = 0; i < tabTargets.length; i++) {
        var content = document.querySelector(tabTargets[i]);
        if (_dom.dom.containsClass(content, 'active')) {
          _dom.dom.removeClass(content, "active");

          active = true;
          hasActive = true;
        }
      }
      _dom.dom.addClass(document.querySelector(target), "active");
    };

    $(tab).find('a').on('click', function (e) {
      e.preventDefault();
      open();
    });
  };

  for (var i = 0; i < tabGroup.length; i++) {
    setupTab(tabGroup[i]);
  }

  //Enable if not enabled already
  if (!hasActive) {
    //if there is a hash link
    if (window.location.hash && tabTargets.indexOf(window.location.hash) !== -1) {
      _dom.dom.addClass(tabGroup[tabTargets.indexOf(window.location.hash)], "selected");
      _dom.dom.addClass(document.querySelector(window.location.hash), "active");
    } else if ($('.tab-content.active').length == 0) {
      _dom.dom.addClass(tabGroup[0], "selected");
      _dom.dom.addClass(document.querySelector(tabTargets[0]), "active");
    }
  }
};

var tabs = {
  init: function init(root) {
    _init(root);
  }
};
exports.default = tabs;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var timeline = {
  init: function init() {

    //create video carousels
    var timeline = document.querySelectorAll('.js-timeline');
    for (var i = 0; i < timeline.length; i++) {
      this.timeline.createTimeline(timeline[i]);
    }
  },
  timeline: {

    createTimeline: function createTimeline(timelineElem) {

      var carouselElem = timelineElem.querySelector('.js-timeline-carousel');
      var carouselItemSelector = '.tl-content__item';
      var carouselItemElems = timelineElem.querySelectorAll(carouselItemSelector);

      var tlCtrlActiveClass = 'tl-ctrl__item--is-active';

      if (carouselElem && carouselItemElems.length > 0) {
        var intialDate = getInitialDate();

        setupCarousel(intialDate);
        setupControls(intialDate);
      }

      function updateDots(intialDate) {
        var newDate = timelineElem.querySelectorAll('.js-timeline-item')[$(carouselElem).slick('slickCurrentSlide')].dataset.timelineDate;
        var timelineScrollElem = timelineElem.querySelector('.js-timeline-scroller');

        var oldActiveDotElem = timelineElem.querySelector('.' + tlCtrlActiveClass);
        if (oldActiveDotElem !== null) {
          oldActiveDotElem.classList.remove(tlCtrlActiveClass);
        }

        var activeDotElem = timelineElem.querySelector('.js-timeline-ctrl-item[data-timeline-date="' + newDate + '"]');

        if (activeDotElem !== null) {
          activeDotElem.classList.add(tlCtrlActiveClass);

          if (timelineScrollElem.scroll) {
            timelineScrollElem.scroll({
              top: 0,
              left: activeDotElem.offsetLeft - activeDotElem.getBoundingClientRect().width / 2 - timelineScrollElem.clientWidth / 2,
              behavior: 'smooth'
            });
          }
        }
      }

      function setupCarousel(intialDate) {

        var initialSlideIndex = getElementIndex(carouselElem.querySelector('[data-timeline-date="' + intialDate + '"]'));

        if (!carouselElem.classList.contains('slick-initialized')) {
          $(carouselElem).slick({
            speed: 500,
            cssEase: 'ease-in-out',
            infinite: false,
            centerMode: true,
            arrows: true,
            mobileFirst: true,
            slide: carouselItemSelector,
            centerPadding: '18px', //site gutter minus margin on items
            slidesToShow: 1,
            prevArrow: timelineElem.querySelector('.js-timeline-prev'),
            nextArrow: timelineElem.querySelector('.js-timeline-next'),
            initialSlide: initialSlideIndex,
            responsive: [{
              breakpoint: window.app.global.mobile - 1,
              settings: {
                centerPadding: '0px',
                slidesToShow: 3
              }
            }]
          });

          $(carouselElem).slick('slickGoTo', initialSlideIndex, true); //force the intial slide - fixes bug with slick slider initialSlide

          $(window).on('resize orientationchange', function () {
            $(carouselElem).slick('resize');
          });
        }

        // Carousel Events update controls
        $(carouselElem).on('afterChange', function (event, slick, direction) {
          updateDots();
        });

        for (var i = 0, len = carouselItemElems.length; i < len; i++) {
          var carouselItem = carouselItemElems[i];

          carouselItem.addEventListener('click', function (e) {
            var thisCarouselItem = e.currentTarget;

            if (!thisCarouselItem.classList.contains('slick-current')) {
              e.preventDefault();

              var gotoIndex = getElementIndex(thisCarouselItem);

              $(carouselElem).slick('slickGoTo', gotoIndex);
            }
          });
        }
      }

      function setupControls(intialDate) {
        var ctrlDotElems = timelineElem.querySelectorAll('.js-timeline-ctrl-item');
        var initialDotIndex = getElementIndex(timelineElem.querySelector('.js-timeline-ctrl-item[data-timeline-date="' + intialDate + '"]'));

        var timelineStartDate = new Date(timelineElem.dataset.timelineStart);
        var timelineEndDate = new Date(timelineElem.dataset.timelineEnd);

        var totalTime = Math.abs(timelineEndDate.getTime() - timelineStartDate.getTime());

        var timePercentage = 100 / totalTime;

        for (var i = 0, len = ctrlDotElems.length; i < len; i++) {
          var ctrlDotElem = ctrlDotElems[i];

          var dotDate = new Date(ctrlDotElem.dataset.timelineDate);

          var dateDiff = Math.abs(dotDate.getTime() - timelineStartDate.getTime());
          var dotOffset = Math.round(dateDiff * timePercentage * 10) / 10;

          ctrlDotElem.style.left = dotOffset + '%';

          // Clicks to controls update Carousel
          ctrlDotElem.addEventListener('click', function (e) {
            var gotoDate = e.currentTarget.dataset.timelineDate;
            var gotoIndex = getElementIndex(carouselElem.querySelector('[data-timeline-date="' + gotoDate + '"]'));

            $(carouselElem).slick('slickGoTo', gotoIndex);
          });
        }

        updateDots();
      }

      function getElementIndex(node) {
        var index = 0;

        if (node === null || typeof node === 'undefined') return index;

        while (node = node.previousElementSibling) {
          index++;
        }
        return index;
      }

      function getInitialDate() {
        // Find the most recent item in the past
        var todayDate = new Date();
        var lastItem;

        for (var i = 0, len = carouselItemElems.length; i < len; i++) {
          var carouselItem = carouselItemElems[i];

          var itemDate = new Date(carouselItem.dataset.timelineDate);

          if (todayDate > itemDate) {
            lastItem = carouselItem;
          }
        }

        return lastItem.dataset.timelineDate;
      }
    }

  }
};

exports.default = timeline;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('../../libs-th-nk/events/events');

var toggle = {
  init: function init() {

    var toggle = document.querySelectorAll('.toggle-trigger');
    if (toggle) {
      for (var i = 0; i < toggle.length; i++) {
        this.createToggle(toggle[i]);
      }
    }
  },
  createToggle: function createToggle(toggle) {

    var $toggle = $(toggle),
        _that = this;

    if ($toggle.hasClass('toggle-init')) {
      return;
    }

    $toggle.addClass('toggle-init');

    //Set up handler
    _events.events.on(toggle, "click", function (e) {
      e.preventDefault();
      _that.toggle($(e.currentTarget));
    });

    if ($(toggle).hasClass('mob-closed') && window.innerWidth < window.app.global.desktop) {
      var targetContent = $(toggle).next('.toggle-content');
      $(toggle).removeClass("toggled");
      targetContent.addClass('auto-closed').removeClass("active");
      setTimeout(function () {
        targetContent.removeClass("auto-closed");
      }, 600);
    }
  },
  toggle: function toggle(_toggle) {
    //Open or close
    var content = _toggle.next('.toggle-content'),
        originalText = _toggle.attr('data-original'),
        defaultText = _toggle.attr('data-text'),
        _that = this;

    if (content.length == 0) {
      content = _toggle.prev('.toggle-content');
    }

    //close associated filters
    if (_toggle.attr('data-group')) {
      var group = _toggle.attr('data-group');
      $('.toggle-trigger[data-group=' + group + ']').each(function (i, el) {
        var $el = $(el);
        if ($el.hasClass('toggled') && el !== _toggle[0]) {
          _that.toggle($el);
        }
      });
    }

    $(content).toggleClass('active');
    _toggle.toggleClass('toggled');

    if ($(content).hasClass('active')) {
      $(content).attr('aria-expanded', 'true');
    } else {
      $(content).attr('aria-expanded', 'false');
    }

    if (originalText) {
      if ($(content).hasClass('active')) {
        _toggle.find('.toggle-trigger__inner').text(defaultText);
      } else {
        _toggle.find('.toggle-trigger__inner').text(originalText);
      }
    }
  }
};

exports.default = toggle;

},{"../../libs-th-nk/events/events":35}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var videocarousel = {
  init: function init() {

    //create video carousels
    var carousel = document.querySelectorAll('.video-carousel');
    for (var i = 0; i < carousel.length; i++) {
      this.carousel.createCarousel(carousel[i]);
    }
  },
  carousel: {

    createCarousel: function createCarousel(carousel) {

      var init = false,
          autoplay = true,
          paused = true,
          interval;

      //Video menu
      var carouselPMenu = $(carousel);

      var controls = carouselPMenu.find('.carousel__controls li'),
          carouselP = carouselPMenu.find('.slides'),
          carouselContent = carouselPMenu.find('.video-carousel__content'),
          carouselInfo = carouselPMenu.find('.js-vidcar-slide-info'),
          carouselCount = carouselPMenu.find('.js-vidcar-slide-count'),
          carouselTotal = carouselPMenu.find('.js-vidcar-slide-total'),
          dots = false,
          duration = 5000,
          slideCount = 0,
          controls_active = false,
          carouselInfoHiddenClass = 'carousel-nav__info--hidden';

      //Controls Active
      if (controls.length > 0) {
        controls_active = true;
      }

      //Custom Duration option
      if (carouselPMenu.attr('data-duration')) {
        duration = carouselPMenu.attr('data-duration');
      }

      //Actions when changing slides
      carouselP.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var i = (nextSlide ? nextSlide : 0) + 1;
        carouselP.find('.current').text(i);
        changePointers(nextSlide);

        if (carouselCount.length > 0) {
          carouselCount.html(nextSlide + 1);
        }
      }).on('afterChange', function (event, slick, currentSlide) {

        var slide = $(slick.$slides.get(currentSlide)),
            pastSlide = $(slick.$slides.get(currentSlide - 1)),
            pastV = pastSlide.find('video'),
            v = slide.find('video');

        if (v.length > 0) {
          v[0].play();
        }
        if (pastV.length > 0) {
          pastV[0].pause();
          pastV[0].currentTime = 0;
        }
      }).on('init reInit', function (event, slick, currentSlide, nextSlide) {
        slideCount = slick.slideCount;
        // carouselP.find('.total').text(slick.slideCount);
        dots = carouselPMenu.find('.slick-dots li');
        dots.each(function (i, e) {
          $(e).on('click', function (ev) {

            carouselP.slick('slickGoTo', i);
            controls.addClass('no-autoplay');

            paused = true;
            autoplay = false;
          });
        });

        //Counter
        if (carouselCount.length > 0) {
          carouselInfo.removeClass(carouselInfoHiddenClass);
          carouselCount.html('1');
          carouselTotal.html(slideCount);
        }
      });

      //Settings
      carouselP.slick({
        speed: 1200,
        slidesToShow: 1,
        fade: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
        swipe: false,
        arrows: true,
        prevArrow: carouselPMenu.find('.js-vidcar-prev'),
        nextArrow: carouselPMenu.find('.js-vidcar-next'),
        autoplay: false,
        waitForAnimate: false,
        responsive: [{
          breakpoint: window.app.global.tabletl,
          settings: {
            swipe: true,
            dots: false
          }
        }]
      });

      function timer() {
        if (!paused) {
          carouselP.slick('slickNext');
        }
      }

      //Click on controls
      if (controls_active) {
        controls.each(function (i, e) {
          $(e).on('click', function (ev) {

            carouselP.slick('slickGoTo', i);
            controls.addClass('no-autoplay');

            paused = true;
            autoplay = false;
          });
        });
      }

      //Enable it only when in view - Pause when out of view
      function enableSlider() {

        // Pause / Unpause
        if (init) {

          //Pause
          if (!carouselContent.isOnScreen() && !paused) {

            paused = true;
            if (autoplay) {
              clearInterval(interval);
              interval = setInterval(timer, duration);
            }

            var current = $(carouselP).find('.slide').eq(carouselP.slick('slickCurrentSlide'));
            if (current.find('video').length > 0) {
              current.find('video')[0].pause();
            }

            if (controls_active) {
              $('.carousel__controls .active').find('.progress').css('animation-play-state', 'paused');
            }
          }

          //Unpause
          if (carouselContent.isOnScreen() && paused) {

            paused = false;
            if (autoplay) {
              clearInterval(interval);
              interval = setInterval(timer, duration);
            }

            var current = $(carouselP).find('.slide').eq(carouselP.slick('slickCurrentSlide'));
            if (current.find('video').length > 0) {
              current.find('video')[0].play();
            }

            if (controls_active) {
              $('.carousel__controls .active').find('.progress').css('animation-play-state', 'running');
            }
          }
        }

        var firstVid = carouselP.first('.slide').find('video');

        // Init
        if (!init) {
          if (carouselContent.isOnScreen()) {
            if (carouselP.first('.slide').find('video').length > 0) {

              //if only images
              if ($(window).width() <= window.app.global.tabletl) {
                startCarousel();
              }

              //if video already loaded
              if (firstVid[0].readyState > 3) {
                startCarousel();
                return;
              }

              //If not start when its ready
              carouselP.find('.slide').first().find('video').on('canplaythrough', function (e) {
                startCarousel();
              });
            } else {
              //no video found, play through using images
              startCarousel();
            }
          }
        }
      }

      enableSlider();

      //Start carousel
      function startCarousel() {

        if (init) {
          return;
        }

        init = true;
        paused = false;
        clearInterval(interval);

        interval = setInterval(timer, duration);
        changePointers(0);
        if (carouselP.first('.slide').find('video').length > 0) {
          carouselP.first('.slide').find('video')[0].play();
        }
      }

      $(window).on('scroll', enableSlider);

      //Animate pointer to active
      function changePointers(i) {
        if (!controls_active) {
          return;
        }
        controls.removeClass('active');
        controls.eq(i).addClass('active');
      }
    }
  }
};

exports.default = videocarousel;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require("../../libs-th-nk/events/events");

var _dom = require("../../libs-th-nk/dom/dom");

var careers = {
  initCarousel: function initCarousel(target) {
    target = target || document;

    // currently used in the slideout on wide profile
    var related = $(target).find(".related-projects");

    related.each(function () {
      var self = $(this);

      self.find(".related-projects__items").slick({
        speed: 500,
        cssEase: "ease-in-out",
        arrows: true,
        prevArrow: self.find(".related-projects__prev"),
        nextArrow: self.find(".related-projects__next"),
        mobileFirst: true,
        // infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }]
      });
    });
  },
  init: function init() {
    var self = this;

    $("html").addClass("js");

    $(document).on("setupModal", function (ev) {
      self.initCarousel(ev.modal);
    });

    self.initCarousel();

    var videobanner = $(".cssonly");
    if (videobanner.length) self.video.cssonly(videobanner);

    var howto = $(".country-how-to-apply");
    if (howto.length) self.howToApply(howto);

    // to archive
    this.v1.overlay.init();
  },
  howToApply: function howToApply(elem) {
    var fitler = $(elem).find(".filter");
    var selected = fitler.attr("data-selected-index") || 0;
    var items = $(elem).find("ul[role='listbox'] li a");
    var sections = $(elem).find(".container--options section");

    items.on("click", function (e) {
      var val = $(e.target).attr("data-val");
      if (val !== selected) {
        sections.eq(selected).removeClass("section--active");
        sections.eq(val).addClass("section--active");
        selected = val;
      }
    });

    sections.each(function (sec) {
      $(this).addClass("section--loaded");
    });

    sections.eq(selected).addClass("section--active");
  },
  video: {
    videosloaded: false,
    forms: function forms() {
      var input = $(".abs_search input");
      var placeholder = $(".abs_search .placeholder");

      if (placeholder.length) {
        $(".abs_search .placeholder, .abs_search .icon-search, .abs_search .cta-btn").on("click", function (e) {
          input.focus();
        });

        input.on("blur", function () {
          if ($(this).val() === "") placeholder.show();
        }).on("focus", function () {
          placeholder.hide();
        });
      } else {
        placeholder = $(".abs_search .cta-btn .cta-btn__text");
      }
    },
    startvideo: function startvideo() {},
    stopvideos: function stopvideos(videos) {
      videos.each(function (i) {
        $(this)[0].pause();
      });
    },
    loadvideos: function loadvideos(videos) {
      videos.each(function (i) {
        var src = $(this).attr("data-src");
        $(this).attr("src", src);
      });
      this.videosloaded = true;
    },
    mobilecheck: function mobilecheck(ismobile, videos, current) {
      if (ismobile) {
        if (this.videosloaded) this.stopvideos(videos);
      } else {
        if (!this.videosloaded) {
          this.loadvideos(videos);
        } else {
          videos[current].play();
        }
      }
    },
    setText: function setText(heading, headings, placeholder, searchTerms, current, speed) {
      heading.addClass("fadeout loaded");
      placeholder.addClass("fadeout");

      speed = speed || 500;

      setTimeout(function () {
        heading.html(headings[current].innerHTML);
        placeholder.html(searchTerms[current].innerHTML);
        heading.removeClass("fadeout");
        placeholder.removeClass("fadeout");
      }, speed);
    },
    cssonly: function cssonly(elem) {
      if (!elem) return;

      var prev = 0;
      var current = 0;
      var next = 1;
      var prevnext = 1;
      var BREAK_POINT = 1280;
      var MOBILE_TIME = 5000;
      var that = this;
      var list = $(elem).find("li");
      var videos = list.find("video"); //video only
      var ismobile = $(window).width() < BREAK_POINT;
      var mobileInterval;
      var heading = $("#fch_heading");
      var placeholder = $("#video_search_term");

      if (!placeholder.length) {
        placeholder = $(".abs_search .cta-btn .cta-btn__text");
      }

      var headings = list.find(".video_search_heading");
      var searchTerms = list.find(".video_search_term");

      that.mobilecheck(ismobile, videos, current);

      var mobileloop = function mobileloop() {
        var wrap = list.eq(current).find(".angle_wrap1");
        prev = current;
        current += 1;

        if (current === videos.length) {
          //current = 0;
          clearInterval(mobileInterval);
          return false;
        }

        if (current === videos.length) {
          current = 0;
        }

        prevnext = next;
        next = current + 1;
        if (next === videos.length) {
          next = 0;
        }

        var anim = wrap.attr("data-animation");
        wrap.addClass(anim);

        //set text
        that.setText(heading, headings, placeholder, searchTerms, current);

        setTimeout(function () {
          wrap.removeClass(anim);
          $(list[current]).addClass("active");
          $(list[prev]).removeClass("active");
          $(list[prevnext]).removeClass("up_next");
          $(list[next]).addClass("up_next");
        }, 500);
      };

      $(window).on("resize", function () {
        var s = $(this).width() < BREAK_POINT;
        if (s !== ismobile) {
          ismobile = s;
          that.mobilecheck(ismobile, videos, current);

          if (ismobile) {
            mobileInterval = setInterval(mobileloop, MOBILE_TIME);
          } else if (mobileInterval) {
            clearInterval(mobileInterval);
            videos[current].play();
          }
        }
      });

      that.forms();

      if (ismobile) {
        $("html").addClass("js-banner");

        mobileInterval = setInterval(mobileloop, MOBILE_TIME);
      } else if (mobileInterval) {
        clearInterval(mobileInterval);
      }

      /** video */
      var onload = true;
      var MAX_LOOPS = 0; //video only

      list.each(function (i) {
        var self = $(this);
        var wrap = self.find(".angle_wrap1");
        var video = self.find("video"); //video only
        var changing = false;

        var loops = -1;

        video.on("play", function (event) {
          $("html").addClass("js-banner");
        });

        video.on("ended", function (event) {
          loops++;
          if (MAX_LOOPS && loops === MAX_LOOPS - 1 && i === current || current >= list.length - 1) {
            $(video)[0].play();
          } else {
            loops = -1;
          }
        });

        video.on("timeupdate", function (event) {
          if (this.currentTime >= this.duration - 2 && !changing && loops === MAX_LOOPS - 1 && i === current) {
            changing = true;
            prev = current;
            current += 1;
            if (current === videos.length) {
              // current = 0;
              return false; //loop last video
            }

            prevnext = next;
            next = current + 1;
            if (next === videos.length) {
              next = 0;
            }

            var anim = wrap.attr("data-animation");
            wrap.addClass(anim);

            videos[current].currentTime = 0;
            videos[current].play();

            var useTransition = $(elem).hasClass("animate-desktop") && !ismobile;

            //set text
            that.setText(heading, headings, placeholder, searchTerms, current);

            setTimeout(function () {
              wrap.removeClass(anim);
              $(list[current]).addClass("active");
              $(list[prev]).removeClass("active");
              $(list[prevnext]).removeClass("up_next");
              $(list[next]).addClass("up_next");
              changing = false;
            }, useTransition ? 2000 : 1);
          }
        });

        if (i === 0 && onload) {
          onload = false;
          $(list[current]).addClass("active");
          $(list[next]).addClass("up_next");
          videos[current].play();
          heading.html(headings[current].innerHTML);
          placeholder.html(searchTerms[current].innerHTML);

          elem.parent().addClass("load");
        }
      });
    }
  },

  // old, to be removed at some point
  v1: {
    overlay: {
      init: function init() {
        $("#career-overlay .cta-btn").on("click", function (e) {
          if ($(this).hasClass("disabled")) {
            e.preventDefault();
            return false;
          }
        });
      }
    }
  }
};

exports.default = careers;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var _filterClass = require('../modules/filter-class');

var _filterClass2 = _interopRequireDefault(_filterClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expertise = {
  init: function init() {
    this.industryCarousel();
    //this.serviceCarousel();
  },

  industryCarousel: function industryCarousel() {

    var carouselProject = $('.industries-carousel').find('.slides'),
        carouselTabs = $('.industries-carousel').find('.tabs'),
        paused = false,
        nav = $('.industries-carousel__nav');

    var slideCount = carouselProject.find('.industry-item').length;
    nav.find('.nav__counter__total').html(slideCount);

    var filter = document.querySelectorAll('.filter--carousel'),
        filterObj;

    if (window.innerWidth >= window.app.global.desktop) {
      $('.filter--carousel').attr('data-target', '#industryFilterList');
    }

    if (filter) {
      var firstInstance = $(filter[0]);
      for (var i = 0; i < filter.length; i++) {
        if (i == 0) {
          filterObj = new _filterClass2.default(filter[i]);
        } else {
          $(filter[i]).on('click', function () {
            firstInstance.trigger('click');
          });
          $(filter[i]).on('keydown', function (e) {
            if (e.which == 13) {
              firstInstance.trigger('click');
            }
          });
        }
      }
    }

    //Create discover carousel
    function createCarousel(carousel, index) {

      carousel.slick({
        speed: 500,
        slide: '.industry-item',
        cssEase: 'ease-in-out',
        infinite: true,
        slidesToShow: 1,
        centerPadding: '20px',
        fade: true,
        arrows: false,
        // prevArrow: carousel.find('.js-ind-car-prev'),
        // nextArrow: carousel.find('.js-ind-car-next'),
        mobileFirst: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        adaptiveHeight: true
        // responsive: [{
        //   breakpoint: window.app.global.desktop,
        //   settings: {
        //     arrows: true,
        //   }
        // }]
      });

      var navP = nav.find('.prev');
      var navN = nav.find('.next');
      var controls = $('#industryFilterList,#industryFilterListM').find('a');

      //Actions when changing slides
      carousel.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        nav.find('.nav__counter__index').html(nextSlide + 1);
        filterObj.update(nextSlide);
      });

      nav.find('.icon').on('click', function (ev) {
        carousel.slick('slickPause');
        paused = true;
      });

      controls.each(function (i, e) {
        $(e).on('click', function (ev) {
          carousel.slick('slickGoTo', i);
          carousel.slick('slickPause');
          paused = true;
        });
      });

      $(window).on('scroll', function () {
        if (!paused) {
          //Slider 2 - Pause Slider 1
          if (carousel.isOnScreen()) {
            carousel.slick('slickPlay');
          } else {
            carousel.slick('slickPause');
          }
        }
      });
    }

    createCarousel($(carouselProject));
  },
  serviceCarousel: function serviceCarousel() {

    var carousel = $('.js-es-carousel'),
        controls = $('.js-es-carousel-control');

    carousel.slick({
      slide: '.js-es-carousel-item',
      cssEase: 'ease-in-out',
      autoplay: false,
      arrows: false,
      swipe: false,
      fade: true
    });

    controls.each(function (i, e) {
      //Click on controls
      $(e).on('click', function (ev) {
        carousel.slick('slickGoTo', i);
        history.pushState(null, null, ev.target.closest('a').href);
      });

      //Load slide if hash set
      var currentLink = e.firstElementChild.href;
      if (window.location.hash && currentLink.includes(window.location.hash)) {
        carousel.slick('slickGoTo', i);
      }
    });

    carousel.each(function () {
      $(this).find('.js-es-scroller').nanoScroller({
        preventPageScrolling: true,
        contentClass: 'js-es-scroller-content'
      });
    });
  }

};

exports.default = expertise;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35,"../modules/filter-class":6}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var home = {
  init: function init() {

    //Panel 1 Video Slider and Scrollbar
    var header = $('.header'),
        logo = $('.arup-logo'),
        homeAnim = $('.ha02'),
        mobNav = $('.mobilenav '),
        desktopnav = $('.desktopnav ul, .header__nav ul'),
        that = this;

    //Panel 2 Carousel
    var p2Carousel = $('.full-carousel');
    if (p2Carousel) {
      this.carousel.init();
    }

    $(window).on('scroll', function () {

      //Slider 2 - Pause Slider 1
      if (!that.carousel.p2Active && that.carousel.trigger.isOnScreen()) {
        that.carousel.activate();
      } else if (that.carousel.p2Active && !that.carousel.trigger.isOnScreen()) {
        that.carousel.deactivate();
      }

      //Slider 3 - Activate anim
      if (!that.animActive && homeAnim.isOnScreen()) {
        that.animPanel.init();
      }
    });

    //Slider 3 - Activate anim
    if (!that.animActive && homeAnim.isOnScreen()) {
      that.animPanel.init();
    }

    this.statsPanel.init();

    this.newsTicker();

    window.app.ajaxCallback = this.ajaxRefesh;
  },
  nav: {
    logo: $('.arup-logo'),
    header: $('.header'),
    mobNav: $('.mobilenav'),
    enable: function enable() {
      // this.header.removeClass('header--transparent hover');
      // this.logo.removeClass('arup-logo--alt');
    },
    disable: function disable() {
      // if(this.mobNav.hasClass('active')){
      //   this.enable();
      //   return;
      // }
      // this.header.addClass('header--transparent');
      // this.logo.addClass('arup-logo--alt');
    },
    check: function check() {

      // if (this.mobNav.hasClass('active')) {
      //   this.enable();
      //   return;
      // }

      // var scroll = $(document).scrollTop();
      // if (scroll >= this.header.height()) {
      //   this.enable();
      // } else {
      //   this.disable();
      // }

    }
  },
  carousel: {

    p2Carousel: $('.full-carousel'),
    p2Active: false,
    trigger: false,
    init: function init() {

      this.trigger = this.p2Carousel.find('.full-carousel__content').first();
      var that = this;

      this.p2Carousel.on('afterChange init', function (event, slick, currentSlide) {
        var slide = $(slick.$slides.get(currentSlide)),
            content = slide.find('.full-carousel__content');
      });

      this.p2Carousel.slick({
        infinite: true,
        speed: 500,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autplay: true,
        prevArrow: that.p2Carousel.find('.carousel-prev'),
        nextArrow: that.p2Carousel.find('.carousel-next'),
        slide: ".slide"
      });

      this.deactivate();
    },
    deactivate: function deactivate() {
      this.p2Active = false;
      this.p2Carousel.slick('slickPause');
    },
    activate: function activate() {
      this.p2Active = true;
      this.p2Carousel.slick('slickPlay');
    }
  },
  newsTicker: function newsTicker() {
    $('.news-ticker__articles').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      var slide = $(slick.$slides.get(currentSlide - 1));
      var next = $(slick.$slides.get(currentSlide));
      $('.news-ticker__articles').find('.slick-prev').removeClass('slick-prev');
      next.addClass('slick-prev');
    });

    $('.news-ticker__articles').slick({
      infinite: true,
      speed: 500,
      autoplaySpeed: 3000,
      fade: true,
      cssEase: 'linear',
      pauseOnHover: true,
      arrows: false,
      pauseOnFocus: false,
      autoplay: true,
      slide: ".article"
    });
  },
  statsPanel: {
    preload: function preload() {

      var preloaders = $('.home-statistics__stat');
      var images = new Array();

      $.each(preloaders, function (key, value) {
        images[key] = new Image();
        images[key].src = $(value).attr('data-background');
      });
    },
    init: function init() {

      var container = $('#home-statistics');

      var current = 1;

      container.find('.home-statistics__stat').on('mouseenter', debounce(function (e) {
        var bg = $(e.currentTarget).attr('data-background');

        if (bg) {
          if (current == 1) {
            container.find('.home-statistics__background2').css('background-image', 'url("' + bg + '")');
            $('.home-statistics__background1').removeClass('active');
            $('.home-statistics__background2').addClass('active');
            current = 2;
          } else {
            container.find('.home-statistics__background1').css('background-image', 'url("' + bg + '")');
            $('.home-statistics__background1').addClass('active');
            $('.home-statistics__background2').removeClass('active');
            current = 1;
          }
        }
      }, 200));

      container.on('mouseleave', function (e) {
        $('.home-statistics__background1').removeClass('active');
        $('.home-statistics__background2').removeClass('active');
        current = 1;
      });

      this.preload();
    }
  },
  animActive: false,
  animPanel: {

    duration: 100,
    active: false,
    space: 38,
    container: $('.home-animation'),
    init: function init() {

      if (this.active) {
        return false;
      }

      var that = this,
          finalPara = $('.ha03'),
          skillsPara = $('.ha06'),
          jobs = $('.home-animation__jobs'),
          step = 1;

      this.active = true;

      // if ($(window).width() >= window.app.global.tabletl) {
      //   this.duration = 300;
      // }

      // Animation Sequence
      // -------------------------------------//

      //Allow dynamic height for the main text paragraph
      function calcAnimation() {
        if (step != 3 || $(window).width() < window.app.global.tabletl) {
          //return 0
        }
        var pos = finalPara.height() + parseInt(finalPara.css('margin-top'));
        pos += that.space;

        return pos;
      }

      $(window).on('resize', function () {
        skillsPara.css('margin-top', calcAnimation());
      });

      //1
      //Change request to remove step 1
      /*this.container.addClass('step2');
      step = 2;*/

      //2
      /*setTimeout(function(){
        step = 2;*/
      that.container.addClass('step2');
      /*}, that.duration);*/

      //3
      setTimeout(function () {
        step = 3;
        that.container.addClass('step3');
        skillsPara.css('margin-top', calcAnimation());
      }, that.duration * 2);

      //4 - Animate in the skills based on intervals
      function enterAnimation(item) {
        item.addClass('on');
      }

      function exitAnimation(item) {
        item.addClass('off');
        setTimeout(function () {
          item.removeClass('off').removeClass('on');
        }, 500);
      }
      setTimeout(function () {

        that.container.addClass('step4');

        var skills = jobs.find('span'),
            count = 0;

        enterAnimation(skills.first());

        if ($(window).width() > window.app.global.tabletl) {

          var switchSkills = setInterval(function () {

            if (count == -1) {
              enterAnimation(skills.first());
              count++;
              return;
            }

            var exit = skills.eq(count);
            exitAnimation(exit);

            count++;

            var enter = skills.eq(count);
            enterAnimation(enter);

            //Last one
            if (count == skills.length - 1) {
              setTimeout(function () {
                exitAnimation(enter);
              }, 2000);
              count = -1;
            }
          }, 2000);
        }
      }, that.duration * 3);
    }

  },
  ajaxRefesh: function ajaxRefesh() {
    grunticon.svgLoadedCallback();
  }

};

exports.default = home;

},{}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filterSelect = require('../modules/filter-select');

var _filterSelect2 = _interopRequireDefault(_filterSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hub = {
  init: function init() {

    //masonry
    var elem = document.querySelector('.masonry');
    if (elem) {
      window.app.masonry.init(elem);
    }

    //Any page updates - reassign everything
    window.app.ajaxCallback = this.ajaxRefesh;

    // this.assignParallax();

    $('.project-filter__actions .searchtrigger').on('click', function (e) {

      e.preventDefault();

      $('#search-head .js-nav-search').trigger('click');

      if ($(this).attr('data-search-placeholder')) {
        var oldplaceholder = $('.input--search-top').attr('placeholder');
        var newplaceholder = $(this).attr('data-search-placeholder');
        $('.input--search-top').attr('placeholder', newplaceholder);
        $('.input--search-top').attr('data-defaultplaceholder', oldplaceholder);
      }
    });

    var initialUrl = location.href;

    window.onpopstate = function (e) {
      //Some browsers fire this on load, this would cause a page load loop without this check.
      var hasPopped = !window.pushActive && location.href == initialUrl;
      if (hasPopped) {
        return;
      }
      window.location.reload();
    };
  },
  ajaxRefesh: function ajaxRefesh() {

    //Apply effects
    window.app.hub.assignParallax();
    window.app.masonry.check();
    window.app.reveal.refresh();
    window.app.loadmoreButton.init();
    grunticon.svgLoadedCallback();
  },
  assignParallax: function assignParallax() {
    //Assign Parallax
    var heros = document.querySelectorAll('.project--hero');
    var obj = this;

    $(window).scroll(function () {
      for (var i = 0; i < heros.length; i++) {
        window.app.parallax.hero(heros[i], 0.2);
      }
    });
  }
};

exports.default = hub;

},{"../modules/filter-select":7}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var _loadMore = require('../modules/load-more');

var _loadMore2 = _interopRequireDefault(_loadMore);

var _imageLoader = require('../modules/image-loader');

var _imageLoader2 = _interopRequireDefault(_imageLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var news = {
  init: function init() {

    var _this = this;
    var newsStage = 0;
    var eventsStage = 0;

    //Any page updates - reassign everything
    window.app.ajaxCallback = this.ajaxRefesh;
    this.filters.init();
  },
  isReset: false,
  ajaxRefesh: function ajaxRefesh() {

    //Apply effects
    window.app.reveal.refresh();
    grunticon.svgLoadedCallback();
    window.app.loadmoreButton.init();
  },
  filters: {
    defaultNews: false,
    defaultEvents: false,
    newsError: false,
    eventsError: false,
    init: function init() {
      this.initevents();

      this.newsError = $('#newsFilter').attr('data-message');
      this.eventsError = $('#eventsFilter').attr('data-message');
    },
    // Bind click events for filter
    initevents: function initevents() {
      var _this = this;

      $('.newsfilter__filter--date a.cta').on('click', function (e) {

        e.preventDefault();
        var url = $(this).attr('href');
        var parent = $(this).parent('.newsfilter__filter');

        var error = false;

        parent.find('select').each(function () {
          if ($(this).val() == null) {
            error = true;
            _this.errorShow($(this));
          } else {
            _this.errorRemove($(this));
          }
        });

        if (error) {
          _this.errorShow(null, parent);
          return;
        }

        _this.errorRemove(null, parent);

        _this.filterClicked(parent);
      });

      $('.newsfilter__filter--location a').on('click', function (e) {
        e.preventDefault();
        var data = $(this).text();
        var parent = $(this).closest('.newsfilter__filter');
        parent.attr('data-loc', data);
        _this.filterClicked(parent);
      });

      $('.menuitem__reset').on('click', function (e) {
        e.preventDefault();
        _this.reset($(this));
      });
    },
    /*
      Build and send filter requesrt
      parent Object - The filter to get information from (null to reset filter)
      reset Boolean - to reset the filter no information needs to be gathered from the page
    */
    filterClicked: function filterClicked(parent, reset) {

      var _this = this;
      var ajaxData = {};
      var apiurl, wrapper, container;

      if (reset) {

        apiurl = parent.attr('data-api');
        wrapper = parent;
        container = wrapper.closest('.newshub__articles');
      } else {

        //Convert to UTC
        var convertDate = function convertDate(date) {

          var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

          var d = new Date(date.year, monthNames.indexOf(date.month));
          return d.getTime();
        };

        apiurl = $(parent).closest('.filter__list').attr('data-api');

        wrapper = parent.closest('.filter__list');
        container = parent.closest('.newshub__articles');

        var locfilter = wrapper.find('.newsfilter__filter--location');

        wrapper.find('.menuitem__reset').addClass('active');

        var formData = {
          from: {
            month: wrapper.find('.date__row--from select.month').val(),
            year: wrapper.find('.date__row--from select.year').val()
          },
          to: {
            month: wrapper.find('.date__row--to select.month').val(),
            year: wrapper.find('.date__row--to select.year').val()
          },
          location: locfilter.attr('data-loc')
        };

        var type = "news";
        if (wrapper.closest('#eventsFilter').length) type = "events";

        // If filtering on date
        if (formData["from"]) {
          ajaxData["start"] = convertDate(formData["from"]);
          ajaxData["end"] = convertDate(formData["to"]);

          if (ajaxData["start"] > ajaxData["end"]) {
            wrapper.find('select').each(function () {
              _this.errorShow($(this));
            });
            _this.errorShow(null, wrapper);
            return;
          } else {
            wrapper.find('select').each(function () {
              _this.errorRemove($(this));
            });
            _this.errorRemove(null, wrapper);
          }
        }

        //If filtering on loc
        if (formData["location"]) {
          ajaxData["location"] = formData["location"];
        }
      }

      $('.filter--close').trigger('click');

      //do ajax here
      var jsRequest = $.ajax({ url: apiurl, data: ajaxData }).done(function (data) {

        var $data = $(data);

        //Reset toggle
        setTimeout(function () {
          if ($('.newsfilter__menu').find('.toggle-trigger.toggled').length > 0) {
            $('.newsfilter__menu').find('.toggle-trigger.toggled')[0].click();
          }
        }, 500);

        //Update the DOM and close
        container.find('.filter__desc').text($data.find('.filter__desc').text()).addClass('active'); //Update Decription

        var country = '';
        if ($data.find('.news-country').length > 0) {
          country = $data.find('.news-country').text();
        }
        container.find('.news-country').text(country); //Update Country

        if ($data.filter('.newshub__articles__list').children().length == 0) {
          if (wrapper.attr('id') == 'eventsFilter') {
            $(wrapper.attr('data-filterajax')).html('<p>' + _this.eventsError + '</p>');
          } else {
            $(wrapper.attr('data-filterajax')).html('<p>' + _this.newsError + '</p>');
          }
          return;
        }

        var articleHtml = $data.filter('.newshub__articles__list').html();
        $(wrapper.attr('data-filterajax')).html(articleHtml); //Update Articles

        //cache reset results so we dont have to request it again
        if (reset) {
          if (wrapper.attr('id') == 'newsFilter') {
            _this.defaultNews = document.querySelector('#newsarticles').innerHTML;
          }
          if (wrapper.attr('id') == 'eventsFilter') {
            _this.defaultEvents = document.querySelector('#eventssarticles').innerHTML;
          }
          container.find('.filter__desc').text('').removeClass('active');
        }

        //Apply effects
        window.app.loadmoreButton.init();
        grunticon.svgLoadedCallback();
      });
    },
    /**
     * Show form errors
     * @param Element el - show error on element
     * @param Element message - show error text
     */
    errorRemove: function errorRemove(el, message) {
      if (el) {
        el.removeClass("error");
      }
      if (message) {
        message.find('.date_error').removeClass('visible').attr('aria-hidden', 'true');
      }
    },
    errorShow: function errorShow(el, message) {
      if (el) {
        el.addClass("error");
      }
      if (message) {
        message.find('.date_error').addClass('visible').attr('aria-hidden', 'false');
      }
    },

    /*
      Reset filter to default state
      res Object - the button clicked
    */
    reset: function reset(res) {

      res.removeClass('active');

      //do request if first time, otherwise use cached
      if (!this.isReset) {
        this.isReset = true;
        var parent = res.closest('.filter__list');
        this.filterClicked(parent, true);
        return;
      }

      var container = res.closest('.newshub__articles');

      document.querySelector('#newsarticles').innerHTML = this.defaultNews;
      document.querySelector('#eventssarticles').innerHTML = this.defaultEvents;
      container.find('.filter__desc').text('').removeClass('active');
      container.find('.news-country').text('');
      grunticon.svgLoadedCallback();
      window.app.loadmoreButton.init();
      $('.filter--close').trigger('click');
    }
  }

};

exports.default = news;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35,"../modules/image-loader":8,"../modules/load-more":10}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var _filterClass = require('../modules/filter-class');

var _filterClass2 = _interopRequireDefault(_filterClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var offices = {
  init: function init() {

    var filter = document.querySelector('.filter--city'),
        filterObj;

    var fadeDuration = 400;

    var ajaxContainer = document.querySelector('.offices-region__ajaxContainer');
    var defaultContainer = document.querySelector('.offices-region__related--general');

    var ajaxContainerHiddenClass = 'offices-region__ajaxContainer--hidden';
    var defaultContainerHiddenClass = 'offices-region__related--hidden';

    if (filter) {
      filterObj = new _filterClass2.default(filter);
    }

    //Read more functionality
    $('.content-featured__content .showmore').on('click', function (e) {
      e.preventDefault();
      $('.offices-article__country--extra').show();
    });

    // Update based on browser history changes
    window.onpopstate = function (event) {

      if (event.state === null) {
        clearCity($('.offices-region__leftnav li.active a'), true);
      } else {
        getCity($('[data-href="' + event.state.region + '"]'), true);
      }
    };

    function getCity(trigger, noHistory) {
      var url = trigger.attr('data-href');

      trigger.parent().addClass("active").siblings().removeClass("active");

      $.ajax(url).done(function (data) {

        defaultContainer.classList.add(defaultContainerHiddenClass);
        ajaxContainer.classList.add(ajaxContainerHiddenClass);

        ajaxContainer.addEventListener('transitionend', function (event) {
          ajaxContainer.innerHTML = data;
          ajaxContainer.classList.remove(ajaxContainerHiddenClass);
          grunticon.svgLoadedCallback();
          window.app.carousels.init();
        }, { once: true });

        if (window.history && !noHistory) {
          window.history.pushState({ region: url }, null, trigger.attr('href'));
        }
      });
    }

    function clearCity(trigger, noHistory) {
      trigger.parent().removeClass("active");

      ajaxContainer.classList.add(ajaxContainerHiddenClass);

      ajaxContainer.addEventListener('transitionend', function (event) {
        ajaxContainer.innerHTML = '';
        ajaxContainer.classList.remove(ajaxContainerHiddenClass);
        defaultContainer.classList.remove(defaultContainerHiddenClass);
      }, { once: true });

      if (window.history && !noHistory) {
        window.history.pushState(null, null, './');
      }
    }

    $('#cityList li a').on('click', function (e) {
      filterObj.update($('#cityList li').index($(this).parent()));
      getCity($(this));
    });

    $('.offices-region__leftnav li a').on('click', function (e) {
      e.preventDefault();

      if ($(e.currentTarget).parent().hasClass("active")) {
        clearCity($(this));
      } else {
        getCity($(this));
      }
    });

    //Animate to offices-region
    function scrollToOffice() {
      var targetTop = $('.offices-region').offset().top;
      setTimeout(function () {
        $("html, body").animate({ scrollTop: targetTop }, 0);
        setTimeout(function () {
          window.app.global.hideNav();
        }, 10);
      }, 1000);
    }

    if ($('.offices-region__leftnav li').hasClass('active')) {
      scrollToOffice();
    }
  }

};

exports.default = offices;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35,"../modules/filter-class":6}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var perspectives = {
  init: function init() {
    //this.discoverCarousel();

    this.regionCarousel();

    this.browserFallback();

    this.regionUpdate();

    window.app.ajaxCallback = this.ajaxRefesh;
  },
  ajaxRefesh: function ajaxRefesh() {
    grunticon.svgLoadedCallback();
  },
  discoverCarousel: function discoverCarousel() {

    var carouselProject = $('.discover-perspectives').find('.slides'),
        carouselTabs = $('.discover-perspectives').find('.tabs'),
        nav = $('.slick-controls');

    //Create discover carousel
    function createCarousel(carousel, index) {

      carousel.slick({
        speed: 500,
        slide: '.discover-perspectives-item',
        cssEase: 'ease-in-out',
        infinite: false,
        slidesToShow: 1,
        centerPadding: '20px',
        arrows: true,
        prevArrow: nav.find('.perspectives-prev'),
        nextArrow: nav.find('.perspectives-next'),
        mobileFirst: true,
        responsive: [{
          breakpoint: window.app.global.desktop,
          settings: {
            arrows: true,
            slidesToShow: 2
          }
        }]
      });

      var navP = nav.find('.perspectives-prev');
      var navN = nav.find('.perspectives-next');

      //Actions when changing slides
      carousel.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if (nextSlide == slick.slideCount - 2) {
          navN.addClass('inactive');
        } else if (nextSlide == 0) {
          navP.addClass('inactive');
        } else {
          navP.removeClass('inactive');
          navN.removeClass('inactive');
        }
      });
    }
  },
  regionCarousel: function regionCarousel() {

    var carousel = $('#region'),
        controls = $('.discover__tabs li');

    //Click on controls
    controls.each(function (i, e) {
      $(e).on('click', function (ev) {
        carousel.slick('slickGoTo', i);
      });
    });

    carousel.slick({
      slide: '.discover-region',
      cssEase: 'ease-in-out',
      autoplay: false,
      arrows: false,
      swipe: false,
      fade: true
    });
  },
  browserFallback: function browserFallback() {
    //Fallback for the flex layout
    if (!window.app.support('flex') && window.width() >= window.app.global.tabletl) {

      $('.discover-perspectives-item:odd').each(function () {

        var currentHeight = $(this).outerHeight();
        var prevHeight = $(this).prev('.discover-perspectives-item').outerHeight();

        if (currentHeight >= prevHeight) return;
        $(this).css({
          'height': prevHeight + "px"
        });
      });

      $('.all-perspectives-content').find('.related-perspective:odd').each(function () {

        var currentHeight = $(this).outerHeight();
        var prevHeight = $(this).prev('.related-perspective').outerHeight();

        if (currentHeight >= prevHeight) return;
        $(this).css({
          'height': prevHeight + "px"
        });
      });
    }
  },
  regionUpdate: function regionUpdate() {

    var regionLink = $('.discover-perspectives__menu').find('.featured-geo');
    if (regionLink.length > 0) {

      var originalFeatured = $('.discover-perspectives__featured').clone(),
          target = $('.discover-perspectives__featured'),
          reset = $('.featured-reset');

      regionLink.on('click', function (e) {
        e.preventDefault();

        var url = regionLink.attr('href');
        var spinner = '<div class="loading-spinner loading-spinner--loadmore"><div></div></div>';
        target.append(spinner).addClass('loading');

        var jsRequest = $.ajax({ url: url }).done(function (data) {
          var newHtml = $(data).find('.discover-perspectives__featured').html();
          target.html(newHtml);
          target.removeClass('loading').find('.loading-spinner').remove();
          reset.attr('aria-hidden', 'false').removeClass('hidden');
          regionLink.attr('aria-hidden', 'true').addClass('hidden');

          window.app.reveal.refresh();
          grunticon.svgLoadedCallback();
        });
      });

      reset.on('click', function (e) {
        e.preventDefault();
        regionLink.attr('aria-hidden', 'false').removeClass('hidden');
        reset.attr('aria-hidden', 'true').addClass('hidden');
        target.html(originalFeatured.html());
        window.app.reveal.refresh();
        grunticon.svgLoadedCallback();
      });
    }
  }
};

exports.default = perspectives;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var project = {
  init: function init() {

    // this.assignParallax();

    $('.related-perspective').on('mouseover', function (e) {
      $(this).find('.cta').addClass('hover');
    }).on('mouseleave', function (e) {
      $(this).find('.cta').removeClass('hover');
    });

    $('.related-project').on('mouseover', function (e) {
      $(this).find('.cta').addClass('hover');
    }).on('mouseleave', function (e) {
      $(this).find('.cta').removeClass('hover');
    });

    $('.fullbleed__content--hero').addClass('animated');
  },
  assignParallax: function assignParallax() {

    //Assign Parallax
    var heros = document.querySelectorAll('.fullbleed');
    var obj = this;
    $(window).scroll(function () {
      for (var i = 0; i < heros.length; i++) {
        if (!$(heros[i]).hasClass('fullbleed-carousel')) {
          window.app.parallax.hero(heros[i]);
        }
      }
    });
  }
};

exports.default = project;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('../../libs-th-nk/events/events');

var _dom = require('../../libs-th-nk/dom/dom');

var _imageLoader = require('../modules/image-loader');

var _imageLoader2 = _interopRequireDefault(_imageLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var servicegroup = {
  init: function init() {
    //scroller
    $('.service-selector__list .scroller').nanoScroller({
      preventPageScrolling: true,
      contentClass: 'scroller__content'
    });

    //service-selector
    var imageLoader = new _imageLoader2.default();
    $('.service-selector__list a').on('click', function (e) {

      if (window.innerWidth >= window.app.global.tabletl) {
        e.preventDefault();

        var url = $(this).attr('data-href');

        $('.service-selector__content').addClass("fadeOut");

        setTimeout(function () {
          $.ajax(url).done(function (data) {

            var wrapperDiv = $("<div>");
            wrapperDiv.html(data);

            var imageArray = $(wrapperDiv).find('img');

            imageLoader.loadImages(imageArray, function () {
              $('.service-selector__content').html(data).removeClass("fadeOut");
              grunticon.svgLoadedCallback();
            });
          });
        }, 500);
      }
    });
  }

};

exports.default = servicegroup;

},{"../../libs-th-nk/dom/dom":34,"../../libs-th-nk/events/events":35,"../modules/image-loader":8}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var closest = function () {
  var el = HTMLElement.prototype;
  var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  return function closest(el, selector) {
    try {
      return matches.call(el, selector) ? el : closest(el.parentElement, selector);
    } catch (e) {
      return false;
    }
  };
}();

var dom = {
  getPageScroll: function getPageScroll() {
    if (window.pageYOffset) {
      return window.pageYOffset;
    }

    if (document.documentElement && document.documentElement.scrollTop) {
      return document.documentElement.scrollTop;
    }

    if (document.body) {
      return document.body.scrollTop;
    }

    return false;
  },

  position: function position(elm) {
    var box = elm.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return {
      top: Math.round(top),
      left: Math.round(left)
    };
  },

  height: function height(elm) {
    return elm.clientHeight;
  },

  /**
  * Remove an element from the DOM
  * @param  {Element} elm [description]
  */
  remove: function remove(elm) {
    elm.parentNode.removeChild(elm);
  },

  /**
  * [after description]
  * @param  {Element} elm   [description]
  * @param  {[type]} htmlString [description]
  */
  after: function after(elm, htmlString) {
    elm.insertAdjacentHTML('afterend', htmlString);
  },

  /**
  * [insertAfter description]
  * @param  {Element} elm  [description]
  * @param  {[type]} newNode [description]
  */
  insertAfter: function insertAfter(elm, newNode) {
    elm.parentNode.insertBefore(newNode, elm.nextSibling);
  },

  /**
  * [append description]
  * @param  {Element} elm  [description]
  * @param  {[type]} newNode [description]
  */
  append: function append(elm, newNode) {
    elm.appendChild(newNode);
  },

  /**
  * [prepend description]
  * @param  {Element} elm  [description]
  * @param  {[type]} newNode [description]
  */
  prepend: function prepend(elm, newNode) {
    elm.insertBefore(newNode, elm.firstChild);
  },

  /**
  * [before description]
  * @param  {Element} elm   [description]
  * @param  {[type]} htmlString [description]
  */
  before: function before(elm, htmlString) {
    elm.insertAdjacentHTML('beforebegin', htmlString);
  },

  /**
  * [clone description]
  * @param  {Element} elm [description]
  * @return {[type]}   [description]
  */
  clone: function clone(elm) {
    return elm.cloneNode(true);
  },

  /**
  * [next description]
  * @param  {[type]}   elm [description]
  * @return {Function}   [description]
  */
  next: function next(elm) {
    return elm.nextElementSibling;
  },

  /**
  * [find description]
  * @param  {Element} elm   [description]
  * @param  {[type]} selector [description]
  * @return {[type]}      [description]
  */
  find: function find(elm, selector) {
    return elm.querySelectorAll(selector);
  },

  /**
  * [prev description]
  * @param  {Element} elm [description]
  * @return {[type]}   [description]
  */
  prev: function prev(elm) {
    return elm.previousElementSibling;
  },

  /**
  * [selectAll description]
  * @param  {[type]} query [description]
  * @return {[type]}     [description]
  */
  selectAll: function selectAll(query) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    return base.querySelectorAll(query);
  },

  /**
  * [scrollPosition description]
  * @return {[type]} [description]
  */
  scrollPosition: function scrollPosition() {
    var doc = document.documentElement;

    return {
      top: (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
      left: (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0)
    };
  },

  /**
  * [create description]
  * @param  {[type]} str    [description]
  * @param  {[type]} location [description]
  * @return {[type]}      [description]
  */
  create: function create(str, location) {
    var temp = document.createElement('div');
    temp.innerHTML = str;

    var children;

    if (!location) {
      children = temp;
    } else {
      children = temp.children;

      arr.each(location, function (str, i, name) {
        children = i == location.length - 1 ? children[str] : children[str].children;
      });
    }

    return children;
  },

  containsClass: function () {
    if (!!document.documentElement.classList) {
      /**
    * [description]
    * @param  {Element} elm    [description]
    * @param  {[type]} className [description]
    */
      return function (elm, className) {
        if (!elm) {
          return false;
        }

        return elm.classList.contains(className);
      };
    }

    /**
   * [description]
   * @param  {Element} elm     [description]
   * @param  {[type]} className [description]
   */
    return function (elm, className) {
      if (!elm || !elm.className) {
        return false;
      }

      var re = new RegExp('(^|\\s)' + className + '(\\s|$)');

      return elm.className.match(re);
    };
  }(),

  addClass: function () {
    if (!!document.documentElement.classList) {
      /**
    * [description]
    * @param  {Element} elm    [description]
    * @param  {[type]} className [description]
    */
      return function (elm, className) {
        if (!elm) {
          return false;
        }

        if (className.indexOf(' ') > 0) {
          var names = className.split(' ');

          for (var i = 0, il = names.length; i < il; i++) {
            elm.classList.add(names[i]);
          }
        } else {
          elm.classList.add(className);
        }
      };
    }

    /**
   * [description]
   * @param  {Element} elm     [description]
   * @param  {[type]} className [description]
   */
    return function (elm, className) {
      if (!elm) {
        return false;
      }

      if (!this.containsClass(elm, className)) {
        elm.className += (elm.className ? ' ' : '') + className;
      }
    };
  }(),

  removeClass: function () {
    if (!!document.documentElement.classList) {
      /**
    * [description]
    * @param  {Element} elm    [description]
    * @param  {[type]} className [description]
    */
      return function (elm, className) {
        if (!elm) {
          return false;
        }

        elm.classList.remove(className);
      };
    }

    /**
   * [description]
   * @param  {Element} elm     [description]
   * @param  {[type]} className [description]
   */
    return function (elm, className) {
      if (!elm || !elm.className) {
        return false;
      }

      var regexp = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g');

      elm.className = elm.className.replace(regexp, '$2');
    };
  }(),

  toggleClass: function () {
    if (!!document.documentElement.classList) {
      /**
    * [description]
    * @param  {Element} elm    [description]
    * @param  {[type]} className [description]
    */
      return function (elm, className) {
        if (!elm) {
          return false;
        }

        return elm.classList.toggle(className);
      };
    }

    /**
   * [description]
   * @param  {Element} elm     [description]
   * @param  {[type]} className [description]
   */
    return function (elm, className) {
      if (!elm) {
        return false;
      }

      if (this.containsClass(elm, className)) {
        this.removeClass(elm, className);
        return false;
      } else {
        this.addClass(elm, className);
        return true;
      }
    };
  }(),

  /**
  * Get the closest matching element up the DOM tree.
  * @private
  * @param  {Element} elem   Starting element
  * @param  {String}  selector Selector to match against (class, ID, data attribute, or tag)
  * @return {Boolean|Element}  Returns null if not match found
  */
  getClosest: function getClosest(elm, selector) {
    // Variables
    var firstChar = selector.charAt(0);
    var supports = 'classList' in document.documentElement;

    var attribute, value;

    // If selector is a data attribute, split attribute from value
    if (firstChar === '[') {
      selector = selector.substr(1, selector.length - 2);
      attribute = selector.split('=');

      if (attribute.length > 1) {
        value = true;
        attribute[1] = attribute[1].replace(/"/g, '').replace(/'/g, '');
      }
    }

    // Get closest match
    for (; elm && elm !== document; elm = elm.parentNode) {

      // If selector is a class
      if (firstChar === '.') {
        if (supports) {
          if (elm.classList.contains(selector.substr(1))) {
            return elm;
          }
        } else {
          if (new RegExp('(^|\\s)' + selector.substr(1) + '(\\s|$)').test(elm.className)) {
            return elm;
          }
        }
      }

      // If selector is an ID
      if (firstChar === '#') {
        if (elm.id === selector.substr(1)) {
          return elm;
        }
      }

      // If selector is a data attribute
      if (firstChar === '[') {
        if (elm.hasAttribute(attribute[0])) {
          if (value) {
            if (elm.getAttribute(attribute[0]) === attribute[1]) {
              return elm;
            }
          } else {
            return elm;
          }
        }
      }

      // If selector is a tag
      if (elm.tagName.toLowerCase() === selector) {
        return elm;
      }
    }

    return null;
  },

  closest: closest
};

exports.dom = dom;

},{}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.events = undefined;

var _dom = require('../dom/dom');

/**
 * Events module
 * @module events
 * @global
 */
var events = {

  /**
  * Trigger a function when the document is ready
  * @param  {Function} fn   Function to call when ready
  */
  ready: function ready(fn) {
    // if the document is already ready... caall the function
    if (document.readyState != 'loading') {
      fn();
    }
    // add the loaded event listener
    else {
        this.on(document, 'DOMContentLoaded', fn);
      }
  },

  /**
  * [live description]
  * @param  {[type]} selector [description]
  * @param  {[type]}  evt   [description]
  * @param  {Function} fn   [description]
  * @param  {[type]}  scope   description]
  * @return {[type]}        [description]
  */
  live: function live(selector, evt, fn, elementScope) {
    return this.on(elementScope || document, evt, function (ev) {
      var listeningTarget = _dom.dom.closest(ev.target, selector);

      if (listeningTarget) {
        fn.call(listeningTarget, ev);
      }
    });
  },

  /**
 * Bind event to element
 * @memberOf module:events#
 * @param {object} el DOM element
 * @param {string} evt Event type
 * @param {function} fn Callback
 */
  on: function on(el, evt, fn) {
    if (!el) {
      return false;
    }

    if (el.addEventListener) {
      this.addEvent = function (el, evt, fn) {
        el.addEventListener(evt, fn, false);
        return el;
      };
    } else if (el.attachEvent) {
      this.addEvent = function (el, evt, fn) {
        el.attachEvent('on' + evt, fn);
        return el;
      };
    } else {
      this.addEvent = function (el, evt, fn) {
        el['on' + evt] = fn;
        return el;
      };
    }

    return this.addEvent(el, evt, fn);
  },

  /**
 * Remove event to element
 * @memberOf module:events#
 * @param {object} el DOM element
 * @param {string} evt Event type
 * @param {function} fn Callback
 */
  off: function off(el, evt, fn) {
    if (!el) {
      return false;
    }

    if (el.removeEventListener) {
      this.removeEvent = function (el, evt, fn) {
        el.removeEventListener(evt, fn, false);
        return el;
      };
    } else if (el.detachEvent) {
      this.removeEvent = function (el, evt, fn) {
        el.removeEvent('on' + evt, fn);
        return el;
      };
    } else {
      this.removeEvent = function (el, evt, fn) {
        el['on' + evt] = fn;
        return el;
      };
    }
    return this.removeEvent(el, evt, fn);
  },

  /**
 * Trigger event on element
 * @memberOf module:events#
 * @param {object} el DOM element
 * @param {string} evt Event type
 * @param {function} fn Callback
 */
  trigger: function trigger(el, evt) {
    if (!el) {
      return false;
    }

    var _evt;

    if (document.createEvent) {
      _evt = document.createEvent('HTMLEvents');
      _evt.initEvent(evt, true, true);
    } else {
      _evt = document.createEventObject();
      _evt.eventType = evt;
    }

    _evt.eventName = evt;

    if (document.createEvent) {
      el.dispatchEvent(_evt);
    } else {
      el.fireEvent('on' + _evt.eventType, _evt);
    }
  },

  /**
 * Cross browser e.preventDefault()
 * @memberOf module:events#
 * @param {string} evt Event type
 */
  cancel: function cancel(evt) {
    if (!evt) {
      return false;
    }

    if (evt.stopPropagation) {
      evt.stopPropagation();
    }

    if (evt.preventDefault) {
      evt.preventDefault();
    } else {
      evt.returnValue = false;
    }
  }
};

exports.events = events;

},{"../dom/dom":34}]},{},[1]);