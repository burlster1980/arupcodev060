---
title: "Home Test"
date: 2019-06-20T11:10:44+01:00
draft: false
type: perspective
---
<!--
<section class="video-carousel" data-duration="7500">
    <div class="slides">
            <div class="slide">
                <div class="progressiveMedia">
                    <img src="/-/media/arup/images/home/stillsingerstock.jpg?h=6&amp;la=en&amp;mw=10&amp;w=10&amp;hash=C584CBDCE89DE319AC903039C0C0BC08790DDA78" class="vidImg tempImg" alt="Arup-Bjork-Cornucopia" width="10" height="6" DisableWebEdit="False" />
                    <img src="/-/media/arup/images/home/stillsingerstock.jpg?h=480&amp;la=en&amp;w=852&amp;hash=5F2F8831124A52145779E9DDF43468FD90A1CE08" class="vidImg mainImg" alt="Arup-Bjork-Cornucopia" width="852" height="480" DisableWebEdit="False" />
                    <img src="/-/media/arup/images/home/mobilesingerstock.jpg?h=1134&amp;la=en&amp;w=640&amp;hash=CB52FDFB933782CC5A15884CF9F58E9292B418EE" class="vidImg mobImg" alt="Bjork Arup acoustic reverb chamber" width="640" height="1134" DisableWebEdit="False" />
                </div>
                    <video preload="auto" loop="true" muted="muted" class="desktop-only">
                        <source src="/video/inwed.mp4" type="video/mp4">Your browser does not support the video tag. I suggest you upgrade your browser.
                    </video>
                <div class="video-carousel__overlay"></div>
                <div class="container video-carousel__container">
                    <div class="video-carousel__content ">
                            <h5>Bj&#246;rks Cornucopia Tour</h5>
                            <h2 class="h1">A collaboration in sound with Bj&#246;rk</h2>
                            <a href="https://www.arup.com/projects/bjork-reverberation-chamber?itc_source=arup.com&amp;itc_medium=top-carousel&amp;itc_campaign=bjork-slide" class="cta cta--lg" onclick="carouselGaTracking('Video Carousel - Engagement video carousel', 'Video Bjork');">
                                <span data-grunticon-embed class="cta__icon icon icon-oval"></span>
                                <span class="cta__text">Read how we worked with the Icelandic singer-songwriter on a reverberation chamber for her new concert</span>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
<div class="fullscreen-bg">
    <video loop muted autoplay poster="img/videoframe.jpg" class="fullscreen-bg__video">
        <source src="/video/inwed.mp4" type="video/mp4">
    </video>
</div>
-->
<div class="video-container">
	<div class="overlay"></div>
  <video autoplay="autoplay" preload="auto" loop="true" muted="muted" class="desktop-only">
    <source src="/video/inwed4.webm" type="">
    	<source src="/video/inwed2.mp4" type="video/mp4">
  </video>
  <div class="container video-carousel__container">
    <div class="video-carousel__content">
        <!--<h5>Celebrating women in engineering</h5>-->
        <h2 class="h1">Celebrating women in engineering</h2>
        <a href="https://www.arup.com/projects/bjork-reverberation-chamber?itc_source=arup.com&amp;itc_medium=top-carousel&amp;itc_campaign=bjork-slide" class="cta cta--lg" onclick="carouselGaTracking('Video Carousel - Engagement video carousel', 'Video Bjork');">
                                <span data-grunticon-embed class="cta__icon icon icon-oval"></span>
                                <span class="cta__text">Read how we worked with the Icelandic singer-songwriter on a reverberation chamber for her new concert</span>
                            </a>
      </div>
    </div>
  </div>
</div>
<style>
.video-container {
  position: relative;
  background-color: black;
  height: 85vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
  background-image:url(/images/arup-pages/rail/rail-banner.jpg);
}
.video-container video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
.video-container .container2 {
  position: relative;
  z-index: 2;
}
.video-container .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.4;
  z-index: 1;
}
.video-carousel__container {
	position: relative;
	z-index: 3;
}
@media (max-width: 1023px) {
  .video-container {
    background: url(/-/media/arup/images/newsandevents/events/i/inwed/inwedmobile10074012524k.jpg?h=1135&la=en&w=640&hash=5746DFDACF0C299BE3CD9E97FE348C200EDFB71A) black no-repeat center center scroll;
  }
  .video-container video {
    display: none;
  }
}
</style>