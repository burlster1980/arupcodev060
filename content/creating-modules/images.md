---
title: "Creating the image module"
date: 2019-02-17T01:09:03Z
lastmod: 2020-08-19
draft: false
type: Creating modules
weight: "4"
menu:
  main:
    title: "Image module"
    parent: "creating-modules"
    weight: "-300"
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
					<a href="#guide">Image module guide</a>
				</li>
				<li>
					<a href="#what-is">What is the Image module?</a>
				</li>
				<li>
					<a href="#where">Where can you use the module?</a>
				</li>
				<li>
					<a href="#preparation">Image preparation</a>
				</li>
				<li>
					<a href="#creating">Creating the Image module</a>
					<ul class="sub-header-list">
						<li>
							<a href="#adding-content">Adding content</a>
						</li>
					</ul>
				</li>
			</ol>
		</div>
		<div class="menu_section two">
			<ol class="header-list second" start="6">
				<li>
					<a href="#best-practice">Best practice</a>
					<ul class="sub-header-list">
						<li>
							<a href="#half-bleed">Half bleed images</a>
						</li>
						<li>
							<a href="#full-bleed">Full bleed images</a>
						</li>
						<li>
							<a href="#text-box">Full bleed with text overlay</a>
						</li>
					</ul>
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
			<h2>1. Image module guide</h2>
			<p>This guide provides details on how to successfully add and display the Image module to your page.</p>
		</div>
	</div>
</section>
<section class="container" id="what-is">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>2. What is the Image module?</h2>
			<p>The image module is the primary method for adding images to your content. The module provides different options including the ability to:</p>
			<ul>
				<li>Display 'hero' images in your copy</li>
				<li>Add copy overlays onto images</li>
				<li>Add captions to your imagery</li>
			</ul>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h4>Default layout - by default, module will display a fullwidth image covering your page</h4>
		</div>
	</div>
</section>
<section class="fullbleed fullbleed--secondary fullbleed--hero reveal">
	<div class="progressiveMedia"><img alt="Sint Lucas" class="tempImg" height="6" src="https://www.arup.com/-/media/images/projects/e/emirates_terminal_dubai_airport/gallery1_t3-night.jpg?h=1125&w=2000&hash=B7CCE9EF894B25643D2F52EC16CD1506" width="10"> <img alt="Sint Lucas" class="mainImg" height="2530" src="https://www.arup.com/-/media/images/projects/e/emirates_terminal_dubai_airport/gallery1_t3-night.jpg?h=1125&w=2000&hash=B7CCE9EF894B25643D2F52EC16CD1506" width="4498"></div>
	<div class="container fullbleed__container">
		<div class="fullbleed__content"></div>
		<div class="addthis_toolbox addthis_default_style">
		</div>
		<div class="fullbleed__desc">
			<p class="fullbleed__text">This is an image caption</p>
		</div>
	</div>
	<div class="container fullbleed__container fullbleed__container--left">
		<div class="fullbleed__content">
			<h2>This is a title</h2><span class="fullbleed__subheading subheading">This is the header</span>
			<p>Equis’ 11GW portfolio included 139 solar and wind power generation assets in operation, construction and development. The renewable energy assets were spread across seven countries in the Asia Pacific region, with 1GW of operating assets and 1GW under construction. The portfolio across Japan, Philippines, India, Indonesia, Australia, Taiwan and Thailand also included a substantial development pipeline.</p>
			<div class="related-services related-services--light">
				<ul class="list list--links list--links--lightDesktop">
					<li>
						<a href="/"><span class="icon icon-arrow-right--white" data-grunticon-embed=""></span> <span class="link-text">This is a link</span></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h4>''Half bleed' image - in the example below, you'll see an example of a half bleed image. This is essentially a 'half' size image.</h4>
		</div>
	</div>
</section>
<section class="halfbleed reveal" data-full-height="2530" data-full-width="4498">
	<div class="halfbleed__wrap">
		<div class="progressiveMedia"><img alt="Sint Lucas" class="tempImg" height="6" src="https:/www.arup.com/-/media/2000x1125jhml16119430.jpg?h=6&amp;la=en&amp;mw=10&amp;w=10&amp;hash=AED4ADC9E7F3673A5CB5E307F697677E24E86EAA" width="10"> <img alt="Sint Lucas" class="mainImg" height="534" src="https://www.arup.com/-/media/images/projects/e/emirates_terminal_dubai_airport/gallery1_t3-night.jpg?h=1125&w=2000&hash=B7CCE9EF894B25643D2F52EC16CD1506" width="950"></div>
	</div>
	<div class="halfbleed__detail">
		This is an image caption
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h4>'Hero' image with text overlay - In the following example, a 'hero' image (fullwidth) has been displayed with a text box overlaid on top.</h4>
		</div>
	</div>
</section>
<section class="fullbleed fullbleed--secondary fullbleed--hero reveal">
	<div class="progressiveMedia"><img alt="Sint Lucas" class="tempImg" height="6" src="https://www.arup.com/-/media/2000x1125jhml16119430.jpg?h=6&amp;la=en&amp;mw=10&amp;w=10&amp;hash=AED4ADC9E7F3673A5CB5E307F697677E24E86EAA" width="10"> <img alt="Sint Lucas" class="mainImg" height="2530" src="https://www.arup.com/-/media/images/projects/e/emirates_terminal_dubai_airport/gallery1_t3-night.jpg?h=1125&w=2000&hash=B7CCE9EF894B25643D2F52EC16CD1506" width="4498"></div>
	<div class="container fullbleed__container">
		<div class="fullbleed__content fullbleed__content--light">
			<h3 class="intro intro--bold">Assessing multiple assets spanning seven countries</h3>
			<p>Equis’ 11GW portfolio included 139 solar and wind power generation assets in operation, construction and development. The renewable energy assets were spread across seven countries in the Asia Pacific region, with 1GW of operating assets and 1GW under construction. The portfolio across Japan, Philippines, India, Indonesia, Australia, Taiwan and Thailand also included a substantial development pipeline.</p>
		</div>
		<div class="fullbleed__desc">
			<p class="fullbleed__text">This is an image caption</p>
		</div>
	</div>
	<div class="container fullbleed__container fullbleed__container--left">
		<div class="fullbleed__content">
			<h2>This is a title</h2><span class="fullbleed__subheading subheading">This is the header</span>
			<p>Equis’ 11GW portfolio included 139 solar and wind power generation assets in operation, construction and development. The renewable energy assets were spread across seven countries in the Asia Pacific region, with 1GW of operating assets and 1GW under construction. The portfolio across Japan, Philippines, India, Indonesia, Australia, Taiwan and Thailand also included a substantial development pipeline.</p>
			<div class="related-services related-services--light">
				<ul class="list list--links list--links--lightDesktop">
					<li>
						<a href="/"><span class="icon icon-arrow-right--white" data-grunticon-embed=""></span> <span class="link-text">This is a link</span></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h4>'Hero' image with overlay - In the following example, a 'hero' image (fullwidth) has been displayed with a dark overlay and white text</h4>
		</div>
	</div>
</section>
<section class="fullbleed fullbleed--secondary fullbleed--hero reveal overlay-enabled">
        <div class="progressiveMedia overlay-enabled">
            <img src="https://www.arup.com/-/media/arup/images/projects/3/3d-printing-house/2000x1125-11_arup_luca-orlandini.jpg?h=1125&la=en&w=2000&hash=417462F8C04F40DB3F4E3FC2037AA527AED61B57" class="tempImg" alt="Testing the design at sea" width="10" height="6" DisableWebEdit="False" />
            <img src="https://www.arup.com/-/media/arup/images/perspectives/themes/digital/data-centres-shift-to-a-digital-future/digital-data-centres-c-getty_2000x1125.jpg?h=1125&w=2000&hash=F0751BBBBCC7E2A35D299993EF599EFE" class="mainImg" alt="Testing the design at sea" width="4128" height="2322" DisableWebEdit="False" />
        </div>
        <div class="container fullbleed__container fullbleed__container--left">
            <div class="fullbleed__content ">
                    <h2>this is the header</h2>
                        <span class="fullbleed__subheading subheading" style="display: none;">this is the header</span>
<P>this is some text in the image</P>
<P>Lets make this text a bit longer to ensure that we can see what's going on. In addition, we'll need to update the links a little to ensure that they're using the correct style. Finally, the image needs an overlay added so that the white text will stand out effectively.</P>
                    <div class="related-services ">
                            <h3>Links title</h3>
                            <hr />
                        <ul class="list list--links list--links--lightDesktop">
                                <li>
                                    <a href="#" class="cta cta--small cta--reverse" >
                                        <span data-grunticon-embed class="icon icon-oval"></span>
                                        <span>This is a link</span>
                                    </a>
                                </li>
                                                            <li>
                                    <a href="#" class="cta cta--small cta--reverse" >
                                        <span data-grunticon-embed class="icon icon-oval"></span>
                                        <span>Second link</span>
                                    </a>
                                </li>
                                                                                </ul>
                    </div>
            </div>
        </div>
    </section>


<section class="container" id="where">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>3. Where can you use the Image module?</h2>
			<p>The Image module can be placed on the following types of pages:</p>
			<ul>
				<li>Events</li>
				<li>News items</li>
				<li>Perspectives</li>
				<li>Projects</li>
				<li>Services</li>
				<li>Industries</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="preparation">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>4. Preparation of imagery</h2>
			<p>Before you begin creating your module, it's worth considering the image you want to include on your page - and preparing it first.</p>
			<p>The key question to ask yourself is - do you want to show a 'hero' image (full width) or a 'half bleed' (half width) image? The answer to this question will be driven by a number of factors including:</p>
			<ul>
				<li>Is your original image bigger than 2000px wide by 1125px high? If its smaller then you should use the 'half bleed' option as you should never make smaller images bigger</li>
				<li>Is the image worth showing off as a 'hero' image?</li>
				<li>Do you need to overlay text on your image?</li>
			</ul>
			<p>The answers to the above will determine the size of the image that you need to prepare.</p>
			<p>Images need to be resized to the following dimensions:</p>
			<ul>
				<li>'Hero' fullwidth image - 2000px wide by 1125px high</li>
				<li>'Half bleed' image - 950px wide by 534px high</li>
			</ul>
			<p>You can use a 'hero' size image for display as a 'half bleed' image on your page and it will work correctly. However, it is best practice to re-size images to the appropriate display size - this ensures that file sizes do not become too large and that your page will load quicker.</p>
			<p>For more information in preparing imagery, please see the <a href="/getting-started/image-preparation/">image preparation guidance</a>.</p>
		</div>
	</div>
</section>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>5. Creating an Image module</h2>
			<p>To add the module to your page, you must first create it in the Content Editor.</p>
			<ul>
				<li>Right click on the 'Local content' folder and choose 'Insert &gt; Image' from the popup</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/image/create-image.jpg"></div>
			<div class="halfbleed__detail">
				Fig 1: Adding an Image module to the 'Local content' folder
			</div>
			<ul>
				<li>Give your module a suitably descriptive name and click 'Ok'.</li>
			</ul>
			<h3><a id="adding-content" name="adding-content"></a>Adding content to your module</h3>
			<p><b>Image</b></p>
			<p></p>
			<p>You can add content to the following fields of this section:</p>
			<p><i>Fields marked with * MUST be completed</i></p>
			<ul>
				<li><b>Image*</b> - Add your chosen image here. This should be 2000px wide by 1125px high (hero) or 950px wide by 534px high (half bleed). You can find more information about <a href="/getting-started/image-preparation/">image preparation</a> and <a href="/getting-started/uploading-images/">uploading images</a></li>
				<li><b>Mobile image</b> - If you have used a 'hero' image, it is advisable to provide a mobile alternative of your image. This should be resized to 950px by 534px</li>
				<li><b>Halfbleed</b> - select this option if you want your image to be 'half bleed'. It will occupy half the full width of the screen</li>
				<li><b>Hero</b> - select this option if you want your image to be shown at the fullwidth of the screen</li>
			</ul>
			<p><b>NB: Do not select both 'halfbleed' and 'hero'. You can change your mine, but be sure to select only the appropriate option</b></p>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">	
			<p><b>Text box</b></p>
			<p>If you wish to add a copy overlay to your image (requires that you select 'hero' image) then you need to enter this copy in the following fields:</p>
			<ul>
				<li><b>Header:</b> you can add a header for your copy in this field</li>
				<li><b>Text:</b> enter the body of your copy here. Click 'Show editor' to access the rich text editor and add your copy. Please note you should restrict your copy to an absolute maximum of around 70 words</li>
				<li><b>Cta:</b> you can add a dedicated link and call to action that supports your copy. Click on 'insert link' to add this - see the adding links guide for further information</li>
				<li><b>Display on the right:</b> by default, your copy will be overlaid to the left of your image. Selecting this image will swap this so that the text appears on the right. This is useful if your copy obscures a key part of your image</li>
				<li><b>Apply new style:</b> you should ignore this option</li>
				<li><b>Enabled:</b> you must select this option if you add any information in the above fields. If you don't, your copy won't show on the site</li>
			</ul>
			<p><b>Caption</b></p>
			<p>Use the fields below to provide your image with a caption. Generally speaking, images should always have a caption. The only exception is where you're overlaying text on your image already.</p>
			<p>Captions are an important part of your image - and help to tie it to your content. Creative captions can justify images that whilst attractive, may not immediately relate to your article</p>
			<ul>
				<li><b>CaptionText</b> - enter your caption here</li>
				<li><b>CaptionEnabled</b> - select this to ensure that your caption displays</li>
				<lI><b>Enable GradientBackground</b> - select this option to apply a gradient style overlay to the image (dark to light from bottom to top). This should only be used in conjunction with 'Hero' image - it is intended to ensure that white text appears sufficiently when overlaid on lighter images</lI>
				<li><b>Enable Dart Text</b> - experimental feature. Selecting this will turn the caption text to a shade of grey rather than white. Please consider using the option 'Enable GradientBackground'</li>
			</ul>
			<p>In the example below, you can see what happens when the options 'CaptionEnabled' and 'Enable BackgroundGradient' have been set:</p>
		</div>
	</div>
</section>
<section class="fullbleed fullbleed--secondary fullbleed--hero reveal  ">
        <div class="progressiveMedia">
            <img src="https://www.arup.com/-/media/arup/images/expertise/industries/cities-queen_elizabeth_olympic_park_stratford_oda.jpg?h=6&amp;mw=10&amp;w=10&amp;hash=7A8775CE6BEF96F6234E6F0339657ADA" class="tempImg" alt="Stratford Olympic site from the air" width="10" height="6" DisableWebEdit="False" />
            <img src="https://www.arup.com/-/media/arup/images/expertise/industries/cities-queen_elizabeth_olympic_park_stratford_oda.jpg?h=1124&amp;w=2000&amp;hash=5875BE71AC465E6AE0B959C6F830699F" class="mainImg" alt="Stratford Olympic site from the air" width="2000" height="1124" DisableWebEdit="False" />
        </div>
        <span class="image-gradient">
            <div class="container fullbleed__container">
		<div class="fullbleed__content"></div>
		<div class="addthis_toolbox addthis_default_style">
		</div>
		<div class="fullbleed__desc">
			<p class="fullbleed__text">This is an image caption</p>
		</div>
	</div>
        </span>
    </section>
    <style>.fullbleed span.image-gradient {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    background: -webkit-gradient(linear,left bottom,left top,left,right,color-stop(.5,transparent));
    background: -webkit-linear-gradient(bottom,rgba(0,0,0,.5),transparent 100%);
    background: -webkit-gradient(linear,left bottom,left top,color-stop(0,rgba(0,0,0,.5)),to(transparent));
    background: -webkit-linear-gradient(bottom,rgba(0,0,0,.5),transparent);
    background: linear-gradient(0deg,rgba(0,0,0,.5),transparent);
}</style>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Overlay</b></p>
			<p>This option functions in a similar fashion to the 'Text box' but with a key difference. It overlays the entire image with a dark colour, and places white text on top of the image. No box is displayed. You should use this option as an alternative to the 'Text box' option above.</p>
			<ul>
				<lI><b>Title:</b> This shows an H2 header for the module. NB - this may be too large for many uses</lI>
				<li><B>Header:</B> This provides a smaller style header than the 'Title' field, which is also displayed in italics</li>
				<lI><b>Overlay text:</b> You should enter your text here. Click 'Show editor' to access the rich text editor and add your copy. Please note you should restrict your copy to a maximim of around 70 words</lI>
				<li><B>Link section title:</B> If you're adding links to the module, you can create a separating title to sit between the overlay text and your links</li>
				<lI><b>Link one through to link four:</b> You can enter up to four individual links to other pages or websites through this option. Each link will be displayed in the standard CTA fashion, as italicised text followed by an arrow enclosed in a circle</lI>
				<lI><B>OverlayEnabled:</B> If you're using the 'Overlay' option, then you must select this to ensure that it's enabled</lI>
			</ul>
			<p><b>Zooming</b></p>
			<p>This is an option that applies exclusively to 'Half bleed' images. It allows you to give your image a zoom effect - in effect, a user can click on your image and it will fill their screen - i.e. zoom!</p>
			<p>To make use of this functionality you'll need to:</p>
			<ol>
				<li>Select 'half bleed' as your image display type</li>
				<li>Check ' Zoom'</li>
			</ol>
			<p>Before using this option, you should consider whether or not it will aid user experience - what will your users get from clicking it?</p>
			<p>The most appropriate use for this option is for diagrams or images that have text on them which gets either cut off as a hero image, or is too small to read as a half bleed image.</p>
			<p>If you do utilise this functionality, it is advisable to add reference to it in your caption. For example, include a phrase such as 'Click to enlarge the image'</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/image/completed-fullwidth-image-text.jpg"></div>
			<div class="halfbleed__detail">
				Fig 2: example of a completed 'text image split' - in this example, 2 links have been added, as has 'transparent border'
			</div>
		</div>
	</div>
</section>
<section class="container" id="best-practice">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>Best practice</h2>
			<p>In this section, you will find guidance and advice on how to best utilise the image module.</p>
			<p>It includes examples illustrating how to use and display the module.</p>
			<h3>Recommended use</h3>
			<ul class="featureList">
				<li class="tick">To present striking and engaging visuals that bring our work to life</li>
				<li class="tick">To support written content: images of the finished result, work in progress, and featuring people - all help contextualise the work we do</li>
				<li class="cross">Do not just add in images simply to 'break up' text - add them where they can help the flow of a story, or add context for the reader</li>
			</ul>
			<h3><a id="half-bleed" name="half-bleed"></a>Half bleed images</h3>
			<p><b>Recommended use:</b></p>
			<ul class="featureList">
				<li class="tick">Presenting an image that does not take up a large amount of space on page and disrupt the flow of the story - an image that fits nicely with the surrounding content, and doesn't require great prominence or inspection</li>
				<li class="tick">To support a paragraph of text where it relates to the concept/idea explained</li>
				<li class="tick">We can see all of the focal point within the dimensions of the image (nothing is too small to view, our cropped out of the image)</li>
				<li class="tick">It is supported with a caption to explain what the user is seeing in the image, or how it relates to what they have just read</li>
			</ul>
			<p><b>Example one - correctly presented half bleed image</b></p>
			<ul class="featureList">
				<li class="tick">Image helps reader understand more about the project design</li>
				<li class="tick">Image is supported with a caption</li>
			</ul>
		</div>
	</div>
</section>
<section class="halfbleed reveal" data-full-height="1125" data-full-width="2000">
	<div class="halfbleed__wrap">
		<div class="progressiveMedia"><img alt="Aerial view of Rathmorrissy Junction on M17/M18 motorway." class="tempImg" height="6" src="https://www.arup.com/-/media/arup/images/projects/m/m17-m18-motorway/m17m18rathmorrissy-junction-acbarrow-coakley-photography2000x1125.jpg?h=6&amp;la=en&amp;mw=10&amp;w=10&amp;hash=694AB2DBA85837E95294A95CD4D00B240EC14EE9" width="10"> <img alt="Aerial view of Rathmorrissy Junction on M17/M18 motorway." class="mainImg" height="534" src="https://www.arup.com/-/media/arup/images/projects/m/m17-m18-motorway/m17m18rathmorrissy-junction-acbarrow-coakley-photography2000x1125.jpg?h=534&amp;la=en&amp;mw=950&amp;w=950&amp;hash=34B625F23CD06A339F4C009D2BCDA8420FF8FCA7" width="950"></div>
	</div>
	<div class="halfbleed__detail">
		Rathmorrissy Junction is Ireland’s first three-level stacked motorway to motorway interchange.
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Example 2 - correctly presented half bleed image in tandem with another module</b></p>
			<ul class="featureList">
				<li class="tick">Image supports the text and gives context to how cities are implementing activities for children.</li>
				<li class="tick">Image is supported with a caption (and copyright if necessary)</li>
				<li class="tick">The two elements work nicely on page together and complement the flow.</li>
			</ul>
		</div>
	</div>
</section>
<section class="halfbleed reveal" data-full-height="518" data-full-width="920">
	<div class="halfbleed__wrap">
		<div class="progressiveMedia"><img alt="King’s Cross Central supported diverse activities for more cohesive communities. ©John Sturrock" class="tempImg" height="6" src="https://www.arup.com/-/media/arup/images/perspectives/themes/cities/urban-childhoods/920x518-cities-alive-1-(2).jpg?h=6&amp;la=en&amp;mw=10&amp;w=10&amp;hash=6F0D595B7CB0874D1B3BF229C9EA739AC7C5568C" width="10"> <img alt="King’s Cross Central supported diverse activities for more cohesive communities. ©John Sturrock" class="mainImg" height="518" src="https://www.arup.com/-/media/arup/images/perspectives/themes/cities/urban-childhoods/920x518-cities-alive-1-(2).jpg?h=518&amp;la=en&amp;mw=950&amp;w=920&amp;hash=E611C47179BFD876A3517514931183741A9EACA3" width="920"></div>
	</div>
	<div class="halfbleed__detail">
		King’s Cross Central supported diverse activities for more cohesive communities. &#169;John Sturrock
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Example 3 - Underwhelming use of stunning image</b></p>
			<ul class="featureList">
				<li class="tick">Caption explains what we see in the image and relates to text.</li>
				<li class="cross">Striking image, with lots of detail - could be considered for a full bleed</li>
			</ul>
		</div>
	</div>
</section>
<section class="halfbleed reveal" data-full-height="518" data-full-width="920">
	<div class="halfbleed__wrap">
		<div class="progressiveMedia"><img alt="King’s Cross Central supported diverse activities for more cohesive communities. ©John Sturrock" class="tempImg" height="6" src="https://www.arup.com/-/media/arup/images/projects/v/valley-amsterdam/hr_1.jpg?h=680&la=en&w=720&hash=F045F4F29453597654FCE0B62427DD5D72A889A0" width="10"> <img alt="King’s Cross Central supported diverse activities for more cohesive communities. ©John Sturrock" class="mainImg" height="518" src="https://www.arup.com/-/media/arup/images/projects/v/valley-amsterdam/hr_1.jpg?h=680&la=en&w=720&hash=F045F4F29453597654FCE0B62427DD5D72A889A0" width="920"></div>
	</div>
	<div class="halfbleed__detail">
		King’s Cross Central supported diverse activities for more cohesive communities. &#169;John Sturrock
	</div>
</section>
<section class="container" id="" style="margin-bottom:100px;">
	<div class="content-split reveal">
		<h4>Children are influencing city planning</h4>
		<p>Prioritising children’s perspectives is about looking at what affects young people most and using this as a framework to inform all aspects of planning, designing or managing cities because it benefits all of us.</p>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Example 4 - Insufficient information and incorrect module placement</b></p>
			<ul class="featureList">
				<li class="cross">No caption added</li>
				<li class="cross">Added directly underneath a text/image split module - we would not recommend this, try to keep image modules separated with text to maintain a better flow of content.</li>
				<li class="cross">Striking image, with lots of detail - could be considered for a full bleed.</li>
			</ul>
		</div>
	</div>
</section>
<section class="split-pic">
	<div class="split-pic__pic-wrap split-pic__pic-wrap--frame">
		<div class="split-pic__pic split-pic__pic--desktop" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/g/gip/windturbines.jpg?h=518&amp;w=920&amp;hash=3B6DFFD2185C7B4FE3445FB5AA4522CA34674912')"></div>
		<div class="split-pic__pic split-pic__pic--mobile" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/g/gip/windturbines.jpg?mw=720&amp;hash=3793C0C77A5BED443633A6B07249701EBB831025')"></div>
		<p class="split-pic__caption">The Pililla wind farm in the Philippines was inspected from a helicopter ahead of the deal taking place. Operational since 2013, the development generates 54MW from 27 turbines.</p>
	</div>
	<div class="split-pic__content">
		<div class="split-pic__inner">
			<div class="split-pic__copy">
				<h3 class="h4">A skilled and experienced team</h3>
				<p></p>
				<p>Our primary role was to provide independent technical due diligence advice to GIP throughout the transaction to support their asset evaluation process. Arup’s experienced transaction advice team focused on key deal value drivers including energy yield modelling, capex and opex assumptions and consideration of multijurisdictional development pipeline of projects.</p>
				<p></p>
				<h3></h3>
				<hr>
				<ul class="list list--links"></ul>
			</div>
		</div>
	</div>
</section>
<section class="halfbleed reveal" data-full-height="518" data-full-width="920">
	<div class="halfbleed__wrap">
		<div class="progressiveMedia"><img alt="King’s Cross Central supported diverse activities for more cohesive communities. ©John Sturrock" class="tempImg" height="6" src="https://www.arup.com/-/media/arup/images/perspectives/themes/cities/urban-childhoods/920x518-cities-alive-1-(2).jpg?h=6&amp;la=en&amp;mw=10&amp;w=10&amp;hash=6F0D595B7CB0874D1B3BF229C9EA739AC7C5568C" width="10"> <img alt="King’s Cross Central supported diverse activities for more cohesive communities. ©John Sturrock" class="mainImg" height="518" src="https://www.arup.com/-/media/arup/images/perspectives/themes/cities/urban-childhoods/920x518-cities-alive-1-(2).jpg?h=518&amp;la=en&amp;mw=950&amp;w=920&amp;hash=E611C47179BFD876A3517514931183741A9EACA3" width="920"></div>
	</div>
	<div class="halfbleed__detail"></div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h3><a id="full-bleed" name="full-bleed"></a>Full bleed image</h3>
			<p><b>Recommended use:</b></p>
			<ul class="featureList">
				<li class="tick">A striking image that might have the 'wow factor' or highlights a star concept or feature we want to stand out on a page.</li>
				<li class="tick">Works well when the user can pause their reading, i.e. before a new topic is introduced - as it takes up a large amount of 'real estate' on page.</li>
			</ul>
			<p><b>Example one - correctly presented full bleed</b></p>
			<ul class="featureList">
				<li class="tick">Caption included</li>
				<li class="tick">Visually striking and allows us to feel the experience of the concert hall - this may have been lost as a half bleed image.</li>
			</ul>
		</div>
	</div>
</section>
<section class="fullbleed fullbleed--secondary fullbleed--hero reveal" style="margin-bottom:100px;">
	<div class="progressiveMedia"><img alt="Smakkelaarspark" class="tempImg" height="6" src="https://www.arup.com/-/media/arup/images/projects/s/smakkelaarspark/smakkelaarspark_3_2000x1125_lingotto_arup_studioninedots_zus_vkz.jpg?h=6&amp;la=en&amp;mw=10&amp;w=10&amp;hash=9AC3EA26A7851B7547CE30B007020731EDCAB284" width="10"> <img alt="Smakkelaarspark" class="mainImg" height="1125" src="https://www.arup.com/-/media/arup/images/projects/s/smakkelaarspark/smakkelaarspark_3_2000x1125_lingotto_arup_studioninedots_zus_vkz.jpg?h=1125&amp;la=en&amp;w=2000&amp;hash=84518F94514B52942E1E405D9DCFB1AF8BF2ED12" width="2000"></div>
	<div class="container fullbleed__container">
		<div class="fullbleed__content"></div>
		<div class="fullbleed__desc">
			<p class="fullbleed__text">Our contribution to the design of the residential buildings included noise protection from the tracks. &#169;Lingotto, Arup, Studioninedots, ZUS, VKZ</p>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Example two - incorrectly positioned full bleed image</b></p>
			<ul class="featureList">
				<li class="cross">No caption included - no context for the top full bleed image</li>
				<li class="cross">Image modules placed next to/on top of each other - makes quite difficult to follow the content</li>
				<li class="cross">Full bleed image does not appear to relate to the project's written content</li>
			</ul>
		</div>
	</div>
</section>
<section class="fullbleed fullbleed--secondary fullbleed--hero reveal">
	<div class="progressiveMedia"><img alt="Smakkelaarspark" class="tempImg" height="6" src="https://www.arup.com/-/media/arup/images/projects/s/smakkelaarspark/smakkelaarspark_3_2000x1125_lingotto_arup_studioninedots_zus_vkz.jpg?h=6&amp;la=en&amp;mw=10&amp;w=10&amp;hash=9AC3EA26A7851B7547CE30B007020731EDCAB284" width="10"> <img alt="Smakkelaarspark" class="mainImg" height="1125" src="https://www.arup.com/-/media/arup/images/projects/s/smakkelaarspark/smakkelaarspark_3_2000x1125_lingotto_arup_studioninedots_zus_vkz.jpg?h=1125&amp;la=en&amp;w=2000&amp;hash=84518F94514B52942E1E405D9DCFB1AF8BF2ED12" width="2000"></div>
	<div class="container fullbleed__container">
	</div>
</section>
<section class="split-pic split-pic--flip" style="margin-bottom:100px;">
	<div class="split-pic__pic-wrap">
		<div class="split-pic__pic split-pic__pic--desktop" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/g/gip/windturbines.jpg?h=518&amp;w=920&amp;hash=3B6DFFD2185C7B4FE3445FB5AA4522CA34674912')"></div>
		<div class="split-pic__pic split-pic__pic--mobile" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/g/gip/windturbines.jpg?mw=720&amp;hash=3793C0C77A5BED443633A6B07249701EBB831025')"></div>
		<p class="split-pic__caption">The Pililla wind farm in the Philippines was inspected from a helicopter ahead of the deal taking place. Operational since 2013, the development generates 54MW from 27 turbines.</p>
	</div>
	<div class="split-pic__content">
		<div class="split-pic__inner">
			<div class="split-pic__copy">
				<h3 class="h4">A skilled and experienced team</h3>
				<p>Arup worked on behalf of Global Infrastructure Partners (GIP) on their successful bid to acquire Equis’ portfolio of 11GW of renewable assets, for a record breaking $5bn. Working with restricted timescales, our business investor advisory team led the commission from London with significant support from across our global offices to ensure a successful deal was compiled.</p>
				<hr>
				<ul class="list list--links"></ul>
			</div>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h3><a id="text-box" name="text-box"></a>Image with text box</h3>
			<p><b>Recommended use:</b></p>
			<ul class="featureList">
				<li class="tick">When an image relates to a topic or theory being explained, and works well as a background image (i.e. the text box is not covering any important details in the image)</li>
				<li class="cross">Do not use for long paragraphs of text as this will stretch the length of the image, and make it take up more space on the page</li>
				<li class="tick">Use imagery that is eye catching and complements the flow of the page</li>
			</ul>
			<p><b>Example one - correct use of text overlay</b></p>
			<ul class="featureList">
				<li class="tick">The image relates to the text</li>
				<li class="tick">Text box is not stretched or touching the edges of the image</li>
				<li class="tick">The text is an aside, rather than main argument or theme of the content (Kings Cross station)</li>
			</ul>
			<p><b>NB - use of a caption for images used in this fashion is less important. Generally, the text you're overlaying on the module should bear some relation to the image - OR - the image is merely being used for decorative purposes i.e. its inclusion is not a key part of the story</b></p>
		</div>
	</div>
</section>
<section class="fullbleed fullbleed--secondary fullbleed--hero reveal" style="margin-bottom:100px;">
	<div class="progressiveMedia"><img alt="" class="tempImg" height="6" src="https://www.arup.com/-/media/images/projects/k/kings_cross_station/gallery1kings-cross-stationc-huftoncrow1.jpg?h=6&amp;la=en&amp;mw=10&amp;w=10&amp;hash=1829C16A4BCDE22CD95F2705994A109861146B50" width="10"> <img alt="" class="mainImg" height="1125" src="https://www.arup.com/-/media/images/projects/k/kings_cross_station/gallery1kings-cross-stationc-huftoncrow1.jpg?h=1125&amp;la=en&amp;w=2000&amp;hash=40A4DBEA082A03FFD77AB31FC9A1D58BF935998D" width="2000"></div>
	<div class="container fullbleed__container">
		<div class="fullbleed__content fullbleed__content--light">
			<h3 class="intro intro--bold">The diagrid shell</h3>
			<p>The diagrid shell structure of the new concourse roof spans to and is supported by perimeter tree columns and a central funnel structure &ndash; making it structurally independent of the sensitive Grade I-listed Western Range building.</p>
			<p>The envelope and structure of the roof are fully integrated. This gives it both an elegant, natural form and also a modular, repetitive construction that helps fabrication and erection.</p>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Example two - text is too long</b></p>
			<ul class="featureList">
				<li class="cross">No caption added</li>
				<li class="tick">Visually striking image that you can still enjoy with the addition of the text box.</li>
				<li class="cross">Would consider reducing the amount of text as the text box is squashed on the image.</li>
			</ul>
		</div>
	</div>
</section>
<section class="fullbleed fullbleed--secondary fullbleed--hero reveal" style="margin-bottom:100px;">
	<div class="progressiveMedia"><img alt="Night view of the bridge. Credit: Arup" class="tempImg" height="6" src="https://www.arup.com/-/media/arup/images/projects/a/albert-cotter-walkway/new-ones/galleryimage3albert-tibby-cotter-walkway-moore-parkc-arup1.jpg?h=6&amp;la=en&amp;mw=10&amp;w=10&amp;hash=F67228F07BB585E9517AC2432708E840671FD263" width="10"> <img alt="Night view of the bridge. Credit: Arup" class="mainImg" height="1125" src="https://www.arup.com/-/media/arup/images/projects/a/albert-cotter-walkway/new-ones/galleryimage3albert-tibby-cotter-walkway-moore-parkc-arup1.jpg?h=1125&amp;la=en&amp;w=2000&amp;hash=516FBD91D45EFCF007B70852060C47242193B664" width="2000"></div>
	<div class="container fullbleed__container">
		<div class="fullbleed__content fullbleed__content--light">
			<h3 class="intro intro--bold"></h3>
			<h3>Complex form, complex engineering</h3>
			<p>The 6 metre wide, 440 metre long&nbsp;<a href="#">bridge</a>&nbsp;features concrete helical approach ramps and a superstructure formed using two slender curved steel box beams. The design accommodates training facilities, utilities, historic view corridors, and existing infrastructure; a sympathetic addition to the local area and its heritage.&nbsp;</p>
			<p>The bridge&rsquo;s complex geometrical form is derived from this integration with its surroundings. The helical approaches curve significantly, and the box beams are designed to minimise visual bulk, featuring a 20&deg; splay and a vertical curvature to suit the topography of the site. This complexity required construction documentation to be delivered completely in 3D to the fabricator.&nbsp;</p>
		</div>
		</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Example three - image and subject don't match</b></p>
			<ul class="featureList">
				<li class="cross">Image and subject matter are not linked - does not provide context</li>
			</ul>
		</div>
	</div>
</section>
<section class="fullbleed fullbleed--secondary fullbleed--hero reveal">
	<div class="progressiveMedia"><img alt="Sint Lucas" class="tempImg" height="6" src="https://www.arup.com/-/media/images/projects/e/emirates_terminal_dubai_airport/gallery1_t3-night.jpg?h=1125&w=2000&hash=B7CCE9EF894B25643D2F52EC16CD1506" width="10"> <img alt="Sint Lucas" class="mainImg" height="2530" src="https://www.arup.com/-/media/images/projects/e/emirates_terminal_dubai_airport/gallery1_t3-night.jpg?h=1125&w=2000&hash=B7CCE9EF894B25643D2F52EC16CD1506" width="4498"></div>
	<div class="container fullbleed__container">
		<div class="fullbleed__content fullbleed__content--light">
			<h3 class="intro intro--bold">Assessing multiple assets spanning seven countries</h3>
			<p>Equis’ 11GW portfolio included 139 solar and wind power generation assets in operation, construction and development. The renewable energy assets were spread across seven countries in the Asia Pacific region, with 1GW of operating assets and 1GW under construction. The portfolio across Japan, Philippines, India, Indonesia, Australia, Taiwan and Thailand also included a substantial development pipeline.</p>
		</div>
	</div>
	<div class="container fullbleed__container fullbleed__container--left">
		<div class="fullbleed__content">
			<h2>THis is a title</h2><span class="fullbleed__subheading subheading">This is the header</span>
			<p>Equis’ 11GW portfolio included 139 solar and wind power generation assets in operation, construction and development. The renewable energy assets were spread across seven countries in the Asia Pacific region, with 1GW of operating assets and 1GW under construction. The portfolio across Japan, Philippines, India, Indonesia, Australia, Taiwan and Thailand also included a substantial development pipeline.</p>
			<div class="related-services related-services--light">
				<ul class="list list--links list--links--lightDesktop">
					<li>
						<a href="/"><span class="icon icon-arrow-right--white" data-grunticon-embed=""></span> <span class="link-text">This is a link</span></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section><!-- faq -->
<section class="container" id="faq">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>FAQ</h2>
			<ol class="header-list">
				<li>
					<a href="#faq-multiple">Can I use multiple images on a page?</a>
				</li>
				<li>
					<a href="#faq-hero">When should I use 'half bleed' or 'hero' style images?</a>
				</li>
				<li>
					<a href="#faq-trimming">I'm displaying a hero image, but parts of the image appear to be missing. Why is this?</a>
				</li>
				<li>
					<a href="#faq-resize">Why do we resize images to dimensions we know won't be fully shown?</a>
				</li>
				<li>
					<a href="#faq-overlay">I want to add text overlaid on my image. What's the maximum length of this text?</a>
				</li>
				<li>
					<a href="#faq-overlay-not">Why is my text overlay not showing?</a>
				</li>
			</ol>
			<h3><a id="faq-multiple" name="faq-multiple"></a>1. Can I use multiple images on a page?</h3>
			<p>A. Yes. You can add as many images to your page as you require. You should however consider the impact of lots of images. It will likely slow load times, but importantly, it will make your page longer. Before adding lots of images, think about the following:</p>
			<ol>
				<li>Do you already have a lot of copy and other media you want to show off?</li>
				<li>Are your images of a high standard and do they help bring your content to life?</li>
				<li>Could you consider putting some images within a carousel to reduce the number on the page at any one time?</li>
			</ol>
			<h3><a id="faq-hero" name="faq-hero"></a>2. When should I use 'half bleed' or 'hero' style images?</h3>
			<p>A. Ultimately this decision rests with you and relates to the other content you're adding to the page. However, you should bear in mind the following:</p>
			<ul>
				<li>Is your image of sufficient quality to display fullwidth? If your image was small to begin with, it won't work as a fullwidth image</li>
				<li>Do you want to overlay text on your image? If so you'll have to use the 'hero' style image</li>
				<li>Is your image going next to another full width module such as 'text image split? If it is, then you shouldn't set it to be 'hero' putting fullwidth modules next to one another does not look visually pleasing</li>
			</ul>
			<h3><a id="faq-trimming" name="faq-trimming"></a>3. I'm displaying a hero image, but parts of the image appear to be missing. Why is this?</h3>
			<p>A. This is due to the design of the module. Ultimately your image is displaying at a maximum height of 800px - unless any text you add as an overlay makes the image 'taller'. The reason for this is to try and ensure that the image doesn't completely fill a screen and block out text above or below.</p>
			<p>To mitigate this, you should try to ensure that your image's key focus is not at the immediate top or bottom (for example a key face at the top of the image will likely be trimmed in an inappropriate way)</p>
			<h3><a id="faq-trimming" name="faq-trimming"></a>4. Why do we resize images to dimensions we know won't be fully shown?</h3>
			<p>A. When designing the site, the designers choose a consistent image ratio for imagery. Essentially this means that any image resized to 2000px wide by 1125px high will display correctly in any module without becoming distorted.</p>
			<p>It also means that producing and resizing imagery is essentially easier for content editors. However, a reduction in size to the image module means that the result is removal of a small portion of the image.</p>
			<h3><a id="faq-overlay" name="faq-overlay"></a>5. I want to add text overlaid on my image. What's the maximum length of this text?</h3>
			<p>A. It is not possible to provide a maximum number of words or characters - but general guidance and experience suggests that you should not use more than around 60 - 70 words on an overlay.</p>
			<p>Your overlay should never touch the top or bottom of your image (if it does, you need to remove some words).</p>
			<h3><a id="faq-overlay-not" name="faq-overlay-not"></a>6. Why is my text overlay not showing?</h3>
			<p>If you've added a text overlay and it's not showing, check the following:</p>
			<ul>
				<li>Have you selected 'enabled' under 'Text box' section of the module?</li>
				<li>Have you entered your content into the 'Overlay' section of the module? If so it will not work - you must utilise the 'Text box' section fields instead</li>
			</ul>
		</div>
	</div>
</section><!-- end image -->
