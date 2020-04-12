// ideally play final panel video on active state
 // scene leadership
 $(document).ready(function () {

  $.fn.equalHeights = function () {
    var max_height = 0;
    $(this).each(function () {
      max_height = Math.max($(this).height(), max_height);
    });
    $(this).each(function () {
      $(this).height(max_height);
    });
  };

  //anchorable scenes
  var scenes = [];

  var nav = $("#wec-drop");

  if (nav) {
    $("header.header[role='navigation']").append(nav);

    var headerButton = $(nav).find('.button-wrapper');

    var run = function run(instant) {
      var top = $(document).scrollTop();

      var topDownload = $("#covid-1").offset().top;

      if (top > topDownload) {
        headerButton.stop().fadeIn(200);
      } else {
        if (instant === true) {
          headerButton.hide();
        } else {
          headerButton.stop().fadeOut(200);
        }
      }
    };

    run(true);

    $(window).on("scroll", run);
    $(window).on("resize", run);
  }

  var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({triggerElement: "#wec-drop", triggerHook:0})
          .setClassToggle(".fix-contact", "active") // add class toggle
          .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#covid-1", triggerHook: 0.65})
          .setClassToggle(".panel-one", "active") // add class toggle
          .addIndicators()
          .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#covid-2", triggerHook:0.75})
          .setClassToggle(".panel-two", "active") // add class toggle
          .addIndicators()
          .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#covid-3", triggerHook: 0.75})
          .setClassToggle(".panel-three", "active") // add class toggle
          .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#covid-4",triggerHook: 0.75})
          .setClassToggle(".panel-seven", "active") // add class toggle
          .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#covid-5",triggerHook: 0.75})
          .setClassToggle(".panel-eight", "active") // add class toggle
          .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#covid-6",triggerHook: 0.75})
          .setClassToggle(".panel-nine", "active") // add class toggle
          .addTo(controller);
 
  //anchorable scenes - rapid adaptation
  var scenes = [];
  (function () {
    var scene = new ScrollMagic.Scene({
      triggerElement: "#rapid-adaptation",
      offset: 0,
      duration: $("#rapid-adaptation").outerHeight()
    });

    scenes.push(scene);
    var timeline = new TimelineMax().add([]);

    scene.setClassToggle("#rapid-adaptation", "active").setTween(timeline).addTo(controller);
  })();

  // scene data
  (function () {
    var scene = new ScrollMagic.Scene({
      triggerElement: "#data",
      offset: 0,
      duration: $("#data").outerHeight()
    });

    scenes.push(scene);

    var timeline = new TimelineMax().add([]);

    scene.setClassToggle("#data", "active").setTween(timeline).on("start", function () {
      $("#rapid-adaptation").toggleClass("hide");
    }).addTo(controller);

    //we need to remove the stickyness of the previous panel when this panel covers it - otherwise you can get its scroll position for the top nav scroll anchors
    var sceneHitTop = new ScrollMagic.Scene({
      triggerElement: "#data",
      offset: $(window).innerHeight() / 2 - 34
    });

    sceneHitTop.on("enter leave", function () {
      $("#rapid-adaptation").toggleClass("disable-sticky");
    }).addTo(controller);
  })();

  // scene recovery
  (function () {
    var scene = new ScrollMagic.Scene({
      triggerElement: "#recovery",
      offset: 0,
      duration: $("#recovery").outerHeight()
    });

    scenes.push(scene);

    var timeline = new TimelineMax().add([]);

    scene.setClassToggle("#recovery", "active").setTween(timeline).on("start", function () {
      $("#data").toggleClass("hide");
    }).addTo(controller);

    //we need to remove the stickyness of the previous panelk when trhis panel covers it - otherwise you can get its scroll position for the top nav scroll anchors
    var sceneHitTop = new ScrollMagic.Scene({
      triggerElement: "#recovery",
      offset: $(window).innerHeight() / 2 - 34
    });

    sceneHitTop.on("enter leave", function () {
      $("#data").toggleClass("disable-sticky");
    }).addTo(controller);
  })();

  $(".wec-drop__inner a").on("click", function (e) {
    e.preventDefault();

    var anchor = $(this).attr("href");

    var target = $(anchor);

    $(".header").addClass("disable-active");

    TweenMax.to(window, 1, { scrollTo: { y: target.offset().top } });
  });
    console.log("bam!"); //enjoy it

});
