---
title: "Creating a video module"
date: 2019-02-17T10:46:57Z
lastmod: 2019-02-17
draft: false
type: Creating modules
weight: "11"
menu:
  main:
    title: "Video module"
    parent: "creating-modules"
---

<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>Table of contents</h2>
		</div>
	</div>
</section>
<section class="container">
	<div class="menu_row">
		<div class="menu_section two">
			<ol class="header-list">
				<li>
					<a href="#guide">Video guide</a>
				</li>
				<li>
					<a href="#what-is">What is the video module?</a>
				</li>
				<li>
					<a href="#type">What types of video can you embed?</a>
				</li>
				<li>
					<a href="#where">Where can you use the module?</a>
				</li>
				<li>
					<a href="#creating">Creating a video module</a>
					<ul class="sub-header-list">
						<li>
							<a href="#adding-data">Adding data</a>
						</li>
						<li>
							<a href="#completing">Completing the module</a>
						</li>
					</ul>
				</li>
			</ol>
		</div>
		<div class="menu_section two">
			<ol class="header-list second" start="6">
				<li>
					<a href="#best-practice">Best practice</a>
				</li>
				<li>
					<a href="#faq">FAQ</a>
				</li>
			</ol>
		</div>
	</div>
</section>
<section class="container" id="guide">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>1. Video module guide</h2>
			<p>This guide provides details on how to successfully utilise video module in Sitecore.</p>
		</div>
	</div>
</section>
<section class="reveal">
	<div class="embed-video">
		<div class="embed-video__vid-wrap">
			<iframe allowfullscreen class="embed-video__vid" frameborder="0" src="https://www.youtube.com/embed/_HnLhmXSpUs?autoplay=0&rel=0&showinfo=1&origin=https://www.arup.com"></iframe>
		</div>
		<div class="embed-video__content">
			This short animation looks at how urban mobility might look in the future.
		</div>
	</div>
</section>
<section class="container" id="what-is">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>2. What is the video module?</h2>
			<p>The video module allows you to embed video content on virtually any page of arup.com.</p>
			<p>The module displays an embedded video - who's style depends on what kind of video you're embedding.</p>
		</div>
	</div>
</section>
<section class="container" id="type">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>3. What types of video can I embed?</h2>
			<p>Sitecore currently supports the following video sources:</p>
			<ul>
				<li>YouTube</li>
				<li>Vimeo</li>
				<li>Kaltura (Arup's inhouse video platform)</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="where">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>4. Where can you use the video module?</h2>
			<p>The video module can be placed on the following types of pages:</p>
			<ul>
				<li>Events</li>
				<li>News items</li>
				<li>Perspectives</li>
				<li>Projects</li>
				<li>Services</li>
				<li>Industries</li>
			</ul>
			<p><b>* Please note - if you're creating a dedicated Video Perspective, you do NOT use this module. Video perspectives have a dedicated template for adding video content.</b></p>
		</div>
	</div>
</section>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>5. Creating a video module</h2>
			<p>To add a video module, you must first create it within the Content Editor. Once this has been created, you can add the module to your page using the Experience Editor.</p>
			<ul>
				<li>" Right click on the 'Local content' folder and choose '<b>Insert &gt; Video</b>' from the popup</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/video/create-video.jpg"></div>
			<div class="halfbleed__detail">
				Fig 2: Creating and inserting a video module. Right click the 'Local content' folder under your page and choose 'Insert &gt; Video'
			</div>
			<ul>
				<li>Give your module a suitably descriptive name and click 'Ok'</li>
				<li>You have now created your video module</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h5><a id="adding-data" name="adding-data"></a>Adding data</h5>
			<p>This guide is broken up into the individual sections of the Video item. The headings below match the headings you'll find when building the module.</p>
			<p><b>Video</b></p>
			<p>*fields marked in this way must be completed</p>
			<ul>
				<li><b>Caption</b>* - Please provide a suitable caption for your video. This should help entice the user to view the video</li>
				<li><b>Video Type</b>* - You need to choose the type of video you're going to be adding. Click anywhere on the field and select the appropriate option from the dropdown</li>
			</ul>
			<p><b>YouTube</b></p>
			<p>If you have selected 'YouTube' as your video type then you will complete this section.</p>
			<ul>
				<li><b>YouTube Video Id</b> - you need to paste in the ID of the video you want to embed (see below for details on getting the ID)</li>
				<li><b>YouTube Autoplay</b> - do NOT select this option. Videos should NEVER autoplay on a page unless they are used for background purposes.</li>
				<li><b>YouTube Show Related videos</b> - select this option if you want related videos to appear at the end of your video</li>
				<li><b>YouTube Show Title</b> - this will add overlay information to your video once it's displayed on the page</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/video/selecting-youtube-id.jpg"></div>
			<div class="halfbleed__detail">
				Fig 3: Locating the YouTube video ID. Select the string of characters that follow '?v=' in the URL. Do not include the '?v=' - only include the characters AFTER this part of the URL
			</div>
			<p><b>Vimeo</b></p>
			<p>If your video type is 'Vimeo' then you'll need to complete this section</p>
			<ul>
				<li><b>Vimeo Video ID</b> - you need to paste in the ID of the video you want to embed (see below for details on getting the ID)</li>
				<li><b>Vimeo Autoplay</b> - do NOT select this option.</li>
				<li><b>Vimeo Loop</b> - if you select this option, the video will continue to play on loop once it's completed</li>
				<li><b>Vimeo show title</b> - this will result in data added to the Vimeo platform being overlaid on the video</li>
				<li><b>Vimeo show byline</b> - this will result in data added to the Vimeo platform being overlaid on the video</li>
			</ul>
			<p><b>Vimeo video ID</b></p>
			<p>You can obtain the video ID in the following way:</p>
			<ul>
				<li>Locate the video you want to embed on Vimeo</li>
				<li>Copy the string of numbers in the URL and paste this into the field 'Vimeo Video ID'</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/video/vimeo-id.jpg"></div>
			<div class="halfbleed__detail">
				Fig 4: Obtaining the Vimeo Video ID. Select the numbers in the URL
			</div>
			<p><b>Kaltura</b></p>
			<p>If your video is hosted via Kaltura, you will need to complete the following:</p>
			<ul>
				<li><b>Video ID</b> - paste in the Kaltura Video ID. Details on obtaining this are below</li>
			</ul>
			<p><b>Kaltura Video ID</b></p>
			<p>You can obtain the Kaltura ID by contacting the GMC Online team (<a href="mailto:emma.kennedy@arup.com">emma.kennedy@arup.com</a> or <a href="mailto:steve.burleigh@arup.com">steve.burleigh@arup.com</a>)</p>
			<h5><a id="completing" name="completing"></a>Completing the module</h5>
			<p>Once you have entered the relevant information, save the module. If you're ready to add the module to your page, you'll need to access the Experience Editor (link).</p>
		</div>
	</div>
</section>
<section class="container" id="best-practice">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>Best practice</h2>
			<p>In this section, you will find guidance and advice on how to best utilise the 'video' module.</p>
			<p>It includes examples illustrating how to use and display the module.</p>
			<h5>Recommended use</h5>
			<ul class="featureList">
				<li class="tick">Display videos that help bring your content to life</li>
			</ul>
			<p><b>Example 1 - correctly presented video module</b></p>
			<p>In the example below, a YouTube video has been correctly presented.</p>
			<p>It has:</p>
			<ul class="featureList">
				<li class="tick">A caption that helps explain what the video is about</li>
				<li class="tick">A video title overlaid when the page first loads</li>
			</ul>
		</div>
	</div>
</section>
<section class="reveal">
	<div class="embed-video">
		<div class="embed-video__vid-wrap">
			<iframe allowfullscreen class="embed-video__vid" frameborder="0" src="https://www.youtube.com/embed/_HnLhmXSpUs?autoplay=0&rel=0&showinfo=1&origin=https://www.arup.com"></iframe>
		</div>
		<div class="embed-video__content">
			This short animation looks at how urban mobility might look in the future.
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Example 2 - poorly presented video</b></p>
			<p>In the example below, the YouTube video has little to no context provided and could confuse users.</p>
			<p>It does not have:</p>
			<ul class="featureList">
				<li class="cross">Any form of title helping to indicate what the video is about and why you'd potentially want to watch it</li>
				<li class="cross">A caption explaining what the video is about</li>
			</ul>
		</div>
	</div>
</section>
<section class="reveal">
	<div class="embed-video">
		<div class="embed-video__vid-wrap">
			<iframe allowfullscreen class="embed-video__vid" frameborder="0" src="https://www.youtube.com/embed/_HnLhmXSpUs?autoplay=0&rel=0&showinfo=0&origin=https://www.arup.com"></iframe>
		</div>
		<div class="embed-video__content"></div>
	</div>
</section><!-- faq -->
<section class="container" id="faq">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>FAQ</h2>
			<ol class="header-list">
				<li>
					<a href="#faq-appearing">My video is not appearing after I add the module in the Experience Editor. Why?</a>
				</li>
				<li>
					<a href="#faq-autoplay">Why can't I autoplay a video?</a>
				</li>
				<li>
					<a href="#faq-video">Can I use any video on arup.com?</a>
				</li>
				<li>
					<a href="#faq-produced">Can I only use Arup produced videos?</a>
				</li>
				<li>
					<a href="#faq-perspective">I want to add a video to a Perspective. What should I do?</a>
				</li>
			</ol>
			<h5><a id="faq-appearing" name="faq-appearing"></a>1. My video is not appearing after I add the module in the Experience Editor. Why?</h5>
			<p>A. There are a number of potential reasons why this might be. Please double check the following:</p>
			<ul>
				<li>Have you selected the correct 'video type' from the Video Type field?</li>
				<li>Have you added the ID to the correct field - for example have you added a YouTube ID to a the Vimeo section by mistake?</li>
				<li>Is the ID you've used correct? Double check you've got the correct ID. If you're not sure - contact the GMC Online team</li>
			</ul>
			<h5><a id="faq-autoplay" name="faq-autoplay"></a>2. Why can't I autoplay a video?</h5>
			<p>A. Autoplaying is a feature that should rarely - if ever - be used for videos, particularly those with sound. Videos that autoplay cause annoyance and frustration for users - particularly if a loud video starts playing in their office! In addition, users are unlikely to know that a video has started playing until they see it on their screen (if they have no sound). This means they're likely to miss major parts of your film</p>
			<h5><a id="faq-video" name="faq-video"></a>3. Can I use any video on arup.com?</h5>
			<p>A. If the video is hosted on any of the three platforms that this module supports - then theoretically yes. If a video helps to bring your content to life, then use it. You need to be the judge of whether the video will be of interest to your users.</p>
			<h5><a id="faq-produced" name="faq-produced"></a>4. Can I only use Arup produced videos?</h5>
			<p>A. No. You can embed any video on arup.com that supports your content. You should always prioritise Arup produced content - but if someone else has produced a great video on your topic, you can use it. You do not need to seek permission to embed videos. On YouTube or Vimeo, if you see the option to 'share' a video, you can assume that the author is happy for you to use their content.</p>
			<h5><a id="faq-perspective" name="faq-perspective"></a>5. I want to add a video to a Perspective. What should I do?</h5>
			<p>A. You have two choices for video and perspectives. The choice you make depends on your content.</p>
			<ul>
				<li>If your content is a written article which has a supporting video, then you should add this video via the video module</li>
				<li>If your perspective is made up entirely of a video - for example an interview - then you should create a Video Perspective (link). In this scenario you will <b>NOT</b> use the video module</li>
			</ul>
		</div>
	</div>
</section><!-- end image -->
