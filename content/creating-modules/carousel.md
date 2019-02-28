---
title: "Creating a carousel module"
date: 2019-02-17T01:00:13Z
lastmod: 2019-02-17
draft: false
type: Creating modules
weight: "2"
menu:
  main:
    title: "Carousel"
    parent: "creating-modules"
    weight: "-1000"
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
            	<li><a href="#guide">Carousel guide</a></li>
                <li><a href="#what-is">What is the carousel module?</a></li>
				<li><a href="#where">Where can you use hte carousel?</a></li>
                <li><a href="#makeup">Makeup of a carousel?</a></li>
                <li><a href="#creating">Creating a carousel module</a>
                	<ul class="sub-header-list">
                    	<lI><a href="#fullwidth">Fullwidth or default?</a></lI>
                        <li><a href="#preparation">Image preparation</a></li>
                        <li><a href="#creating-item">Creating carousel items</a></li>
                    </ul>
                </lI>
            </ol>
        </div>
        <div class="menu_section two">
        	<ol class="header-list second" start="6">
            	<li><A href="#best-practice">Best practice</A></li>
                <li><a href="#faq">FAQ</a>
            </ol>
        </div>
    </div>
</section>
<section class="container" id="guide">
	<div class="rich-text">
    	<div class="reveal rich-text__content">
        	<h2>1. Carousel guide</h2>
        	<P>This guide provides details on how to successfully utilise the Carousel module in Sitecore.</P>
        </div>
    </div>
</section>
<!-- demo carousel -->
<section class="halfbleed halfbleed-carousel reveal">
	<div class="halfbleed-carousel__slides">
    	<div class="slide" data-description="Ove and his team realised that if each shell fit the shape described by a sphere, the same mould could be re-used for multiple shells. ">
            <img src="https://www.arup.com/-/media/Arup/Images/Projects/S/Sydney-Opera-House/Arup_PROJECTS_ARTS_CULTURE_SYDNEY_OPERA_HOUSE_AU_05_2000x1125.jpg?h=1125&amp;la=en&amp;w=2000&amp;hash=FD3B73455CF111CCA60DE98D327B555CAA9685C0" alt="Ove Arup and the Sydney Opera House team" width="2000" height="1125" DisableWebEdit="False" />
        </div>
        <div class="slide" data-description="The complex design work for the shells was achieved through the pioneering use of computers.">
        	<img src="https://www.arup.com/-/media/Arup/Images/Projects/S/Sydney-Opera-House/Arup_PROJECTS_ARTS_CULTURE_SYDNEY_OPERA_HOUSE_AU_06_2000x1125.jpg?h=1125&amp;la=en&amp;w=2000&amp;hash=D14BA174E49EAF3C0764C67BB871551BA7C6D5D9" alt="Sydney Opera House roof model" width="2000" height="1125" DisableWebEdit="False" />
        </div>
        <div class="slide" data-description="The construction of the concrete ribs, which would support the multiple shells of the Sydney Opera House.">
        	<img src="https://www.arup.com/-/media/Arup/Images/Projects/S/Sydney-Opera-House/Arup_PROJECTS_ARTS_CULTURE_SYDNEY_OPERA_HOUSE_AU_07_2000x1125.jpg?h=1125&amp;la=en&amp;w=2000&amp;hash=AEFF2CDDF493DBE63CE1C5D10616BA1DCA317313" alt="Sydney Opera House black and white close up" width="2000" height="1125" DisableWebEdit="False" />
        </div>
        <div class="slide" data-description="Each rib was fitted with a metal structure into which over a million square tiles were fitted in a chevron pattern. ">
        	<img src="https://www.arup.com/-/media/Arup/Images/Projects/S/Sydney-Opera-House/Arup_PROJECTS_ARTS_CULTURE_SYDNEY_OPERA_HOUSE_AU_08_2000x1125.jpg?h=1125&amp;la=en&amp;w=2000&amp;hash=47266C093B6C9866BE0BA60531FD1104F3317E94" alt="Sydney Opera House roof close up" width="2000" height="1125" DisableWebEdit="False" />
        </div>
    </div>
    <div class="halfbleed__detail">
    	<div class="carousel__count">
        	<span class="current">1</span> of <span class="total">2</span>
            <span class="divider"></span>
        </div>
        <span class="carousel__desc">
Ove and his team realised that if each shell fit the shape described by a sphere, the same mould could be re-used for multiple shells.                 </span>
        <div class="halfbleed-carousel__controls">
        	<div class="halfbleed-carousel__control carousel-prev">
        		<span role="button" href="#" data-grunticon-embed class="icon icon-prev" aria-label="Previous"></span>
        	</div>
            <div class="halfbleed-carousel__control carousel-next">
            	<span role="button" href="#" data-grunticon-embed class="icon icon-next" aria-label="Next"></span>
            </div>
        </div>
    </div>
</section>


<!-- end demo carousel -->
<section class="container" id="where">
	<div class="rich-text">
    	<div class="reveal rich-text__content">
        	<h2>2. What is the Carousel module?</h2>
			<P>The Carousel module allows you to add multiple images into a carousel type display that users can browse through.</p>
			<P>The module has two potential layouts:</P>
			<P><b>Default layout</b> – by default, the carousel module will display as shown in the example below:</P>
        </div>
    </div>
</section>        
<section class="halfbleed halfbleed-carousel reveal">
	<div class="halfbleed-carousel__slides">
    	<div class="slide" data-description="Ove and his team realised that if each shell fit the shape described by a sphere, the same mould could be re-used for multiple shells. ">
            <img src="https://www.arup.com/-/media/Arup/Images/Projects/S/Sydney-Opera-House/Arup_PROJECTS_ARTS_CULTURE_SYDNEY_OPERA_HOUSE_AU_05_2000x1125.jpg?h=1125&amp;la=en&amp;w=2000&amp;hash=FD3B73455CF111CCA60DE98D327B555CAA9685C0" alt="Ove Arup and the Sydney Opera House team" width="2000" height="1125" DisableWebEdit="False" />
        </div>
        <div class="slide" data-description="The complex design work for the shells was achieved through the pioneering use of computers.">
        	<img src="https://www.arup.com/-/media/Arup/Images/Projects/S/Sydney-Opera-House/Arup_PROJECTS_ARTS_CULTURE_SYDNEY_OPERA_HOUSE_AU_06_2000x1125.jpg?h=1125&amp;la=en&amp;w=2000&amp;hash=D14BA174E49EAF3C0764C67BB871551BA7C6D5D9" alt="Sydney Opera House roof model" width="2000" height="1125" DisableWebEdit="False" />
        </div>
        <div class="slide" data-description="The construction of the concrete ribs, which would support the multiple shells of the Sydney Opera House.">
        	<img src="https://www.arup.com/-/media/Arup/Images/Projects/S/Sydney-Opera-House/Arup_PROJECTS_ARTS_CULTURE_SYDNEY_OPERA_HOUSE_AU_07_2000x1125.jpg?h=1125&amp;la=en&amp;w=2000&amp;hash=AEFF2CDDF493DBE63CE1C5D10616BA1DCA317313" alt="Sydney Opera House black and white close up" width="2000" height="1125" DisableWebEdit="False" />
        </div>
        <div class="slide" data-description="Each rib was fitted with a metal structure into which over a million square tiles were fitted in a chevron pattern. ">
        	<img src="https://www.arup.com/-/media/Arup/Images/Projects/S/Sydney-Opera-House/Arup_PROJECTS_ARTS_CULTURE_SYDNEY_OPERA_HOUSE_AU_08_2000x1125.jpg?h=1125&amp;la=en&amp;w=2000&amp;hash=47266C093B6C9866BE0BA60531FD1104F3317E94" alt="Sydney Opera House roof close up" width="2000" height="1125" DisableWebEdit="False" />
        </div>
    </div>
    <div class="halfbleed__detail">
    	<div class="carousel__count">
        	<span class="current">1</span> of <span class="total">2</span>
            <span class="divider"></span>
        </div>
        <span class="carousel__desc">
Ove and his team realised that if each shell fit the shape described by a sphere, the same mould could be re-used for multiple shells.                 </span>
        <div class="halfbleed-carousel__controls">
        	<div class="halfbleed-carousel__control carousel-prev">
        		<span role="button" href="#" data-grunticon-embed class="icon icon-prev" aria-label="Previous"></span>
        	</div>
            <div class="halfbleed-carousel__control carousel-next">
            	<span role="button" href="#" data-grunticon-embed class="icon icon-next" aria-label="Next"></span>
            </div>
        </div>
    </div>
</section>
<section class="container" id="">
	<div class="rich-text">
    	<div class="reveal rich-text__content">
        	<P><b>Full width</b> – in the example below, you’ll see that the carousel is displayed in a fullwidth format, occupying the full potential width of the screen.</P>
        </div>
    </div>
</section>
<section class="fullbleed fullbleed-carousel reveal">
	<div class="fullbleed-carousel__slides">
    	<div class="slide" data-description="The elliptical tower is orientated to face north towards the clear views to Sydney Harbour.">
        	<img src="https://www.arup.com/-/media/arup/images/projects/1/1-bligh-street-sydney/1_bligh_street_sydney_image_1.jpg?h=600&amp;la=en&amp;w=900&amp;hash=2E143C993761068DAD77C13B5D4166494EAB9C55" alt="The elliptical tower is orientated to face north towards the clear views to Sydney Harbour" width="900" height="600" DisableWebEdit="False" />
        </div>
        <div class="slide" data-description="1 Bligh Street set new standards for sustainability and innovation in high-rise development in Australia.">
        	<img src="http://https://www.arup.com/-/media/arup/images/projects/1/1-bligh-street-sydney/1_bligh_street_sydney_image_2.jpg?h=600&amp;la=en&amp;w=900&amp;hash=AB07AEA34E7F89407855F4210837041670FF9123" alt="" width="900" height="600" DisableWebEdit="False" />
        </div>
        <div class="slide" data-description="The 30-storey atrium with clear glazed skylight is a spectacular space.">
        	<img src="https://www.arup.com/-/media/arup/images/projects/1/1-bligh-street-sydney/1_bligh_street_sydney_image_3.jpg?h=600&amp;la=en&amp;w=900&amp;hash=A36AE6802F062442EB71731070B6E9D3F0C2590E" alt="The 30-storey atrium with clear glazed skylight is a spectacular space" width="900" height="600" DisableWebEdit="False" />
        </div>
        <div class="slide" data-description="Very high levels of indoor air quality are achieved with the ventilation system.">
        	<img src="https://www.arup.com/-/media/arup/images/projects/1/1-bligh-street-sydney/1_bligh_street_sydney_image_4.jpg?h=600&amp;la=en&amp;w=900&amp;hash=6939C7BD3D1F8050E97E817E8756608D4E902801" alt="Very high levels of indoor air quality are achieved with the ventilation system providing a 150% improvement over Australian standards" width="900" height="600" DisableWebEdit="False" />
        </div>
    </div>
    <div class="fullbleed-carousel__detail">
    	<span class="current">1</span> of <span class="total">4</span>
        <span class="divider"></span>
        <span class="fullbleed-carousel__text">The elliptical tower is orientated to face north towards the clear views to Sydney Harbour.</span>
        <div class="fullbleed-carousel__controls">
        	<span href="#" role="button" data-grunticon-embed class="icon icon-prev" aria-label="Previous"></span>
            <span href="#" role="button" data-grunticon-embed class="icon icon-next" aria-label="Next"></span>
        </div>
    </div>
</section>
<section class="container" id="where">
    <div class="rich-text">
    	<div class="reveal rich-text__content">
        	<h2>3. Where can you use the carousel?</h2>
			<P>The carousel module can be placed on the following types of pages:</p>
			<uL>
				<lI>Events</li>
				<li>News items</li>
				<lI>Perspectives</lI>
				<li>Projects</li>
				<li>Services</li>
				<lI>Industries</lI>
			</ul>
		</div>
    </div>
</section>
<section class="container" id="makeup">
	<div class="rich-text">
    	<div class="reveal rich-text__content">
        	<h2>4. Makeup of a carousel</h2>
			<P>The Carousel module is composed of two items</P>
			<ol>
				<lI>‘Carousel’ – this is the container for your individual images. You create this first</lI>
				<li>‘Carousel item’ this is where you attach your images. You can add as many items to a carousel as you require</li>
			</ol>
		</div>
    </div>
</section>
<section class="container" id="creating">
	<div class="rich-text">
    	<div class="reveal rich-text__content">
        <h2>5. Creating a carousel module</h2>
		<P>To add a Carousel to your page, you must first create it in the Content Editor. It is not possible to create it purely within the Experience Editor – though you will still use the Experience Editor to add the completed module to your page.</P>
		<ul>
			<li>Right click on the ‘Local content’ folder and choose ‘<b>Insert > Carousel</b>’ from the popup</li>
		</ul>
		<div class="training-image">
			<img src="/images/carousel/select-carousel.jpg" alt="Image" class="mainImg"/>
		</div>
		<div class="halfbleed__detail">
      		Fig 1: Adding a carousel module to the ‘Local content’ folder
      	</div>
		<ul>
			<li>Give your Carousel a suitably descriptive name and click ‘Ok’</li>
			<li>You have now created your carousel container</li>
		</ul>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
		<h5>Fullwidth or default?</h5>
		<P>Once you’ve created your Carousel, you need to confirm whether you want to make the carousel fill the full width of your page. Some considerations are listed below to help you decide:</p>
		<ul>
			<Li>Are you images big enough? To make use of the fullwidth carousel, your images should be at least 2000px wide and 800px high</li>
			<li>Are your images genuinely engaging and likely to inspire users? </li>
			<li>What type of content are you creating? Fullwidth carousels lend themselves better to Projects (though can be used anywhere if your images are of sufficient quality)</li>
		</uL>
		<p><b>Fullwidth</b></P>
		<P>If you wish to make your carousel full width, please do the following (NB – you can change this later on. However, logically it makes sense to decide from the start so you can resize your images accordingly).</p>
		<ul>
			<li>Select the ‘Carousel’ item and within the ‘Media’ section, check ‘ShowFullWidth’. Once selected, save the ‘Carousel’ </li>
		</ul>
		<div class="training-image">
			<img src="/images/carousel/select-fullwidth.jpg" alt="Image" class="mainImg"/>
		</div>
		<div class="halfbleed__detail">
      		Fig 2: Select ‘ShowFullWidth’ to make your carousel occupy the full width of your page</div>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
    	<div class="reveal rich-text__content">
			<h5>Image preparation</h5>
			<P>Before you begin uploading your images, you need to prepare your images for use. Ideally, you should have access to image editing software such as Photoshop. You need to be able to effectively resize, crop and alter the file size of images you’re uploading to the website. If you regularly edit and create content on Sitecore, you should speak to your manager regarding obtaining Photoshop</p>
			<p><b>Image guide</b></p>
			<P>To help you with the general principles of image preparation, the GMC Online time has produced a standalone <a href="/getting-started/image-preparation/">image preparation guide</a>. Please consult this if you’re not familiar with preparing images for online use.</P>
			<p><b>Resizing images – default size</b></P>
			<P>If you’re using the default carousel, you should resize all the images to;</p>
			<Ul>
				<lI>Width: 900px </li>
				<lI>Height: 520px</lI>
			</ul>
			<p><b>Resizing images – fullwidth</b></p>
			<P>If you’re introducing a fullwidth carousel, you should resize all images to:</P>
			<ul>
				<li>Width: 2000px</li>
				<li>Height: 800px</li>
			</ul>
			<P>Please see the <a href="#faq"><b><em>FAQ</em></b></a> at the end of this guide for further information on resizing images.</p>
			<p><b>Uploading your images</b></p>
			<P>Please see the <a href="/getting-started/uploading-images/">image upload guide</a> for more information if you’re not familiar with the upload process.</p>
			<h5>Creating your Carousel Items</h5>
			<P>Once you’ve uploaded all your imagery, you’re ready to begin adding items to your carousel.</p>
			<Ul>
				<li>Click on the carousel container you created – then right click and choose ‘<b>Insert > Carousel item</b>’</li>
			</Ul>
			<div class="training-image">
				<img src="/images/carousel/create-carousel-item.jpg" alt="Image" class="mainImg"/>
			</div>
			<div class="halfbleed__detail">
      			Fig 3: creating a carousel item
      		</div>
			<ul>
				<li>Name your Carousel item – its good practice to include reference to the number of the item. For example, call the first item ‘Carousel item 1’, second ‘Carousel item 2’ and so on. Click ‘Ok’</li>
				<Li>Once the item has loaded, click on the ‘Browse’ option under ‘Image’ – this will display a popup where you can browse to your image’s folder and select your image</li>
				<li>Once you’ve selected your image you need to add a caption. Enter a brief description in the ‘Caption’ field</li>
				<li>Click save once the above steps are complete</li>
				<lI>Repeat each step for each additional carousel item you wish to add</li>
			</ul>
			<div class="training-image">
				<img src="/images/carousel/completing-carousel-item.jpg" alt="Image" class="mainImg"/>
			</div>
			<div class="halfbleed__detail">
      			Fig 4: Completed 'Carousel item'
      		</div>
        </div>
    </div>
</section>
<section class="container" id="best-practice">
	<div class="rich-text">
    	<div class="reveal rich-text__content">
        	<h2>Carousel module - best practice</h2>
        	<P>In this section, you will find guidance and advice on how to best utilise the 'Carousel' module.</P>
        	<P>It includes examples illustrating how to use and display the module</p>
        	<h5>Recommended use</h5>
        	<ul class="featureList">
        		<li class="tick">Display collections of imagery</li>
        		<li class="tick">Use a set of images to tell a story that supports your content</li>
        	</ul>
        	<p><b>Example 1 - correctly presented 'default' carousel</b></P>
        	<P>In the example below, you'll see what a 'perfect' example of a carousel in default display mode looks like.</P>
        	<P>It has:</p>
			<ul class="featureList">
				<li class="tick">Correctly prepared images (900px wide by 520px high)</li>
				<li class="tick">Each image has a caption which supports the image and gives the user useful information</li>
				<li class="tick">The images are 'useful' - they're not just a collection of stock images but illustrate the project the carousel is used on</li>
			</ul>
        </div>
    </div>
</section>
<section class="halfbleed halfbleed-carousel reveal">
	<div class="halfbleed-carousel__slides">
        <div class="slide" data-description="The elliptical tower is orientated to face north towards the clear views to Sydney Harbour.">
        	<img src="https://www.arup.com/-/media/arup/images/projects/1/1-bligh-street-sydney/1_bligh_street_sydney_image_1.jpg?h=520&amp;la=en&amp;w=900&amp;hash=407D2A257913106D57375DB0C421E1D5074ECE8E" alt="The elliptical tower is orientated to face north towards the clear views to Sydney Harbour" width="900" height="520" DisableWebEdit="False" />
        </div>
        <div class="slide" data-description="1 Bligh Street set new standards for sustainability and innovation in high-rise development in Australia.">
        	<img src="https://www.arup.com/-/media/arup/images/projects/1/1-bligh-street-sydney/1_bligh_street_sydney_image_2.jpg?h=520&amp;la=en&amp;w=900&amp;hash=E516238DB9C3594CDF251713C39F08A6F0464740" alt="" width="900" height="520" DisableWebEdit="False" />
        </div>
        <div class="slide" data-description="The 30-storey atrium with clear glazed skylight is a spectacular space.">
        	<img src="https://www.arup.com/-/media/arup/images/projects/1/1-bligh-street-sydney/1_bligh_street_sydney_image_3.jpg?h=520&amp;la=en&amp;w=900&amp;hash=0A74DCFAE11F5132A03DA599CEBB6128B7DF4CE1" alt="The 30-storey atrium with clear glazed skylight is a spectacular space" width="900" height="520" DisableWebEdit="False" />
        </div>
        <div class="slide" data-description="Very high levels of indoor air quality are achieved with the ventilation system.">
        	<img src="https://www.arup.com/-/media/arup/images/projects/1/1-bligh-street-sydney/1_bligh_street_sydney_image_4.jpg?h=521&amp;la=en&amp;w=900&amp;hash=FBD39EAE5599196403220F984630A61E5ACECA66" alt="Very high levels of indoor air quality are achieved with the ventilation system providing a 150% improvement over Australian standards" width="900" height="521" DisableWebEdit="False" />
        </div>
    </div>
    <div class="halfbleed__detail">
    	<div class="carousel__count">
        	<span class="current">1</span> of <span class="total">2</span>
            <span class="divider"></span>
         </div>
         <span class="carousel__desc">The elliptical tower is orientated to face north towards the clear views to Sydney Harbour.</span>
         <div class="halfbleed-carousel__controls">
         	<div class="halfbleed-carousel__control carousel-prev"><span role="button" href="#" data-grunticon-embed class="icon icon-prev" aria-label="Previous"></span></div>
            <div class="halfbleed-carousel__control carousel-next"><span role="button" href="#" data-grunticon-embed class="icon icon-next" aria-label="Next"></span></div>
        </div>
    </div>
</section>
<section class="container" id="best-practice">
	<div class="rich-text">
    	<div class="reveal rich-text__content">
        	<p><b>Example 2 - poor image and no caption</b></P>
        	<P>In the example below, a full width carousel has been applied but there are a number of issues:</P>
        	<Ul class="featureList">
        		<li class="cross">The image is not correctly sized for this use</li>
        		<li class="cross">Captions are either missing or very difficult to read</li>
        		<li class="cross">It is very difficult to see the carousel's navigation / pagination</li>
				<li class="cross">The images are doing nothing - they are not telling a story or bringing the content to life</lI>
			</ul>
        </div>
    </div>
</section>
<!-- begin example 2--> 
<section class="fullbleed fullbleed-carousel reveal">
	<div class="fullbleed-carousel__slides">
        <div class="slide" data-description="">
        	<img src="/images/carousel/poor-image1.jpg" alt="" width="900" height="600" DisableWebEdit="False" />
        </div>
        <div class="slide" data-description="1 Bligh Street set new standards for sustainability and innovation in high-rise development in Australia.">
        	<img src="/images/carousel/poor-image2.jpg" alt="" width="900" height="600" DisableWebEdit="False" />
        </div>
    </div>
    <div class="fullbleed-carousel__detail">
    	<span class="current">1</span> of <span class="total">4</span>
        <span class="divider"></span>
        <span class="fullbleed-carousel__text">The elliptical tower is orientated to face north towards the clear views to Sydney Harbour.</span>
        <div class="fullbleed-carousel__controls">
        	<span href="#" role="button" data-grunticon-embed class="icon icon-prev" aria-label="Previous"></span>
            <span href="#" role="button" data-grunticon-embed class="icon icon-next" aria-label="Next"></span>
        </div>
    </div>
</section>

<section class="container" id="faq">
		<div class="rich-text">
			<div class="reveal rich-text__content">
				<h2>FAQ</h2>
				<ol class="header-list">
					<li>
						<a href="#content">What content can I add to the carousel?</a>
					</li>
					<li>
						<a href="#type">What type of images should I use?</a>
					</li>
					<li>
						<a href="#minimum">Is there a minimum or maximum number of items I can add to a carousel?</a>
					</li>
					<li>
						<a href="#one-more">Can I add more than one carousel to a page?</a>
					</li>
					<li>
						<a href="#why-do">Why do I have to resize images to a specific size?</a>
					</li>
				</ol>
				<h5><a id="content" name="content"></a>What content can I add to the carousel?</h5>
				<p>A. It is currently only possible to add images to the carousel.</p>
				<h5><a id="type" name="type"></a>What type of images should I use?</h5>
				<p>A. Images should generally be saved as .jpg files. The carousel however will support .png and .gif format images.</p>
				<h5><a id="minimum" name="minimum"></a>Is there a minimum or maximum number of items I can add to a carousel?</h5>
				<p>A. There is no maximum number of items, though you should use your judgement when considering this. Are users likely to scroll through 10 or 15 items? Would you scroll through this many pictures? You need to ensure that the carousel supports your content and that when combined with a quality caption, the images in your carousel tell a story.</p>
				<p>You should only use a carousel if you have a minimum of two images.</p>
				<h5><a id="one-more" name="one-more"></a>Can I add more than one carousel to a page?</h5>
				<p>A. Theoretically yes. However, practically this is not something you should pursue unless there is a very good reason for it. Ultimately carousels require the user to physically interact with your page. Research suggests that many users do not make extensive use of carousels. Therefore, you should think carefully before adding more than a single carousel to your content. Why do you need more than one? What will the user get from exploring the content?</p>
				<h5><a id="why-do" name="why-do"></a>Why do I have to resize images to a specific size?</h5>
				<p>A. It is vital that you correctly resize your images for use - not just for carousels - but wherever images are uploaded. There are two key reasons for this</p>
				<ol>
					<li>Image file size - if you upload photo quality images to your page, you will slow down the speed of the website - particularly for users on mobile devices. Every image you upload has to be downloaded by the user. The more you have, and the bigger the file size, the longer this takes.</li>
					<li>Image distortion or cut off - if you don't resize your images to the correct proportions or size, you're likely to see the image become distorted or of reduced quality. Alternatively, you may find that elements of your image are removed which can be frustrating - particularly if specific areas such as faces are being cut off!</li>
				</ol>
				<p>You should consult the image guide for more information on this.</p>
			</div>
		</div>
	</section>
<!-- end image -->
