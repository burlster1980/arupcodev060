---
title: "Creating a recommended content module"
date: 2019-02-17T07:48:01Z
lastmod: 2019-02-17
draft: false
type: Creating modules
weight: "8"
menu:
  main:
    title: "Recommended content"
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
					<a href="#guide">Recommended content guide</a>
				</li>
				<li>
					<a href="#what-is">What is the recommended content module</a>
				</li>
				<li>
					<a href="#where">Where can you use the module?</a>
				</li>
				<li>
					<a href="#creating">Creating the recommended content module</a>
					<ul class="sub-header-list">
						<li>
							<a href="#adding-content">Adding content</a>
						</li>
						<li>
							<a href="#consider">Things to consider</a>
						</li>
						<li>
							<a href="#introductions">Adding introductions to articles</a>
						</li>
						<li>
							<a href="#completing">Completing the module</a>
						</li>
					</ul>
				</li>
			</ol>
		</div>
		<div class="menu_section two">
			<ol class="header-list second" start="5">
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
			<h2>1. Recommended content module guide</h2>
			<p>This guide provides details on how to successfully utilise the Recommended content module in Sitecore.</p>
		</div>
	</div>
</section><!-- demo module -->
<!-- end demo module -->
<section class="container" id="what-is">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>2. What is the recommended content module?</h2>
			<p>The module allows for the promotion of a number of individual articles and pages within the body of your page. It can show an individual article or multiple articles, each with a bespoke piece of content encouraging users to learn more.</p>
			<p>The module can be used to display the following types of content:</p>
			<ul>
				<li>Industries</li>
				<li>News</li>
				<li>Perspectives (including video perspectives)</li>
				<li>Profiles</li>
				<li>Projects</li>
				<li>Publications</li>
			</ul>
			<p>The module can be laid out in a number of different configurations, each of which is shown below.</p>
			<h5>One article - 'Pinned hero'</h5>
			<p>'Pinned hero' - single article display. Complete the field 'Pinned hero' only to display a single article.</p>
		</div>
	</div>
</section><!-- pinned hero -->
<section class="highlight-section">
	<div class="container dynamic-feat reveal">
		<div class="dynamic-feat__hero">
			<a class="preview-card preview-card--hero" href="#">
			<header class="preview-card__header preview-card__header--pic">
				<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/images/projects/b/1_bligh_street_sydney/gallery/new/projectheader1-bligh-streetc-dexus--1-bligh-is-owned--managed-by-dexusdwpf--cbus-property.jpg?h=1125&amp;w=2000&amp;hash=8B69994EB24C5952E7267E6396CA83E7E3A3BF36');"></div>
			</header>
			<div class="preview-card__content">
				<div class="preview-card__main">
					<div class="preview-copy">
						<h4 class="preview-copy__label label--md">Project</h4>
						<h3 class="preview-copy__title">1 Bligh Street</h3>
						<div class="preview-copy__copy-wrap">
							<p class="preview-copy__copy">This is a dedicated field - found on the selected article - that should encourage the user to read.</p>
						</div>
						<div class="preview-card__cta">
							<span class="cta cta--black cta--small cta--right cta--plain"><span class="icon icon-oval" data-grunticon-embed=""></span> <span>Read more about this project</span></span>
						</div>
					</div>
				</div>
				<footer class="preview-card__footer">
					<div class="preview-foot"></div>
				</footer>
			</div></a>
		</div>
	</div>
</section>
<section class="container" id="what-is">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h5>Two articles</h5>
			<p>'2 articles' - select two articles from the 'Recommended content' field. You will also need to select 'Hide hero'.</p>
		</div>
	</div>
</section>
<section class="highlight-section">
	<div class="container dynamic-feat reveal">
		<div class="dynamic-feat__list">
			<ul class="up-list">
				<li class="up-list__item up-list__item--two">
					<a class="preview-card" href="#">
					<header class="preview-card__header preview-card__header--pic">
						<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/expertise/services/architecture/khaliffa-stadium.jpg?h=1125&amp;w=2000&amp;hash=1B30E4B16381846E8E450E65F63012B7BCB0A4CC');"></div>
					</header>
					<div class="preview-card__content">
						<div class="preview-card__main">
							<div class="preview-copy">
								<h4 class="preview-copy__label label--md">Expertise</h4>
								<h3 class="preview-copy__title">Architecture</h3>
								<div class="preview-copy__copy-wrap"></div>
							</div>
						</div>
						<footer class="preview-card__footer">
							<div class="preview-foot"></div>
						</footer>
					</div></a>
				</li>
				<li class="up-list__item up-list__item--two">
					<a class="preview-card" href="#">
					<header class="preview-card__header preview-card__header--pic">
						<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/expertise/services/central_st_giles_bloomsbury_hufton_crow_l_g-2000x1125.jpg?h=1126&amp;w=2000&amp;hash=8880D228A9306E2EBE6913652B07A09435528555');"></div>
					</header>
					<div class="preview-card__content">
						<div class="preview-card__main">
							<div class="preview-copy">
								<h4 class="preview-copy__label label--md">Expertise</h4>
								<h3 class="preview-copy__title">Accessible environments</h3>
								<div class="preview-copy__copy-wrap"></div>
							</div>
						</div>
						<footer class="preview-card__footer">
							<div class="preview-foot"></div>
						</footer>
					</div></a>
				</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="what-is">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h5>Three articles</h5>
			<p>'3 articles' - select three articles from the 'Recommended content' field. You will also need to select 'Hide hero'.</p>
		</div>
	</div>
</section>
<section class="highlight-section">
	<div class="container dynamic-feat reveal">
		<div class="dynamic-feat__list">
			<ul class="up-list">
				<li class="up-list__item up-list__item--three">
					<a class="preview-card" href="#">
					<header class="preview-card__header preview-card__header--pic">
						<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/expertise/services/central_st_giles_bloomsbury_hufton_crow_l_g-2000x1125.jpg?h=1126&amp;w=2000&amp;hash=8880D228A9306E2EBE6913652B07A09435528555');"></div>
					</header>
					<div class="preview-card__content">
						<div class="preview-card__main">
							<div class="preview-copy">
								<h4 class="preview-copy__label label--md">Expertise</h4>
								<h3 class="preview-copy__title">Accessible environments</h3>
								<div class="preview-copy__copy-wrap"></div>
							</div>
						</div>
						<footer class="preview-card__footer">
							<div class="preview-foot"></div>
						</footer>
					</div></a>
				</li>
				<li class="up-list__item up-list__item--three">
					<a class="preview-card" href="#">
					<header class="preview-card__header preview-card__header--pic">
						<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/expertise/services/architecture/khaliffa-stadium.jpg?h=1125&amp;w=2000&amp;hash=1B30E4B16381846E8E450E65F63012B7BCB0A4CC');"></div>
					</header>
					<div class="preview-card__content">
						<div class="preview-card__main">
							<div class="preview-copy">
								<h4 class="preview-copy__label label--md">Expertise</h4>
								<h3 class="preview-copy__title">Architecture</h3>
								<div class="preview-copy__copy-wrap"></div>
							</div>
						</div>
						<footer class="preview-card__footer">
							<div class="preview-foot"></div>
						</footer>
					</div></a>
				</li>
				<li class="up-list__item up-list__item--three">
					<a class="preview-card" href="#">
					<header class="preview-card__header preview-card__header--pic">
						<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/expertise/services/environmental-consulting/hs2_engineering_support__arup-(9).jpg?h=1125&amp;w=2000&amp;hash=D3341D6F4B7F50A1F5B40CC44CAE89B24AA82D95');"></div>
					</header>
					<div class="preview-card__content">
						<div class="preview-card__main">
							<div class="preview-copy">
								<h4 class="preview-copy__label label--md">Expertise</h4>
								<h3 class="preview-copy__title">Environmental consulting</h3>
								<div class="preview-copy__copy-wrap"></div>
							</div>
						</div>
						<footer class="preview-card__footer">
							<div class="preview-foot"></div>
						</footer>
					</div></a>
				</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="what-is">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h5>Four articles - 'Complete'</h5>
			<p>'Complete' display - select EITHER 4 articles from the 'Recommended content' field OR 3 articles in the 'Recommended content' field AND the 'Pinned hero'.</p>
		</div>
	</div>
</section>
<section class="container">
	<div class="dynamic-feat">
		<header class="dynamic-feat__header">
			<div class="dynamic-feat__title-wrap">
				<h4 class="dynamic-feat__title">Featured content</h4>
			</div>
		</header>
		<div class="dynamic-feat__hero">
			<div class="preview-card preview-card--hero">
				<a class="preview-card__header preview-card__header--pic" href="#">
				<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/perspectives/themes/cities/urban-childhoods/2000x1125-cc-bync-20-phil-rogersgranary-square.jpg?h=1125&amp;w=2000&amp;hash=0C46EA7C217CC794BE77845D94A7AA8439A519EB');"></div></a>
				<div class="preview-card__content">
					<div class="preview-card__main">
						<div class="preview-copy">
							<a class="preview-copy__toplink" href="#">
							<h4 class="preview-copy__label label--md">Article</h4>
							<h3 class="preview-copy__title">Cities Alive: Designing for urban childhoods</h3>
							<div class="preview-copy__copy-wrap">
								<p class="preview-copy__copy">Find out how a child-friendly approach to urban planning is vital for the creation of cities that work better for everyone. We explain how we can create healthier and more inclusive, resilient and competitive cities for all of us to live, work and grow up in.</p>
							</div></a>
						</div>
					</div>
					<footer class="preview-card__footer">
						<div class="preview-foot">
							<div class="mini-profile mini-profile--small">
								<div class="mini-profile__pic-wrap">
									<a class="mini-profile__link" href="#"><img alt="Jerome Frost" class="mini-profile__pic" src="https://www.arup.com/-/media/arup/images/people/j/jerome-frost--consulting-centralc-thomas-grahamarup.jpg?h=450&amp;w=450&amp;hash=F248320B27CB808EA7D260933E51DEC753846425"></a>
								</div>
								<div class="mini-profile__main">
									<ul class="mini-profile__info-list">
										<li class="mini-profile__info-item mini-profile__info-item--core">
											<a class="mini-profile__info-link" href="#"><span class="mini-profile__info-content"></span>
											<h4 class="mini-profile__name"><span class="mini-profile__info-content">Jerome Frost</span></h4>
											<h5 class="mini-profile__job"><span class="mini-profile__info-content">Global Cities Leader</span></h5></a>
										</li>
									</ul>
									<hr class="mini-profile__divide">
									<p class="mini-profile__underline">7 February 2018</p>
								</div>
							</div>
							<div class="preview-card__cta preview-card__cta--foot">
								<a href="#"><span class="cta cta--black cta--small cta--right cta--plain"><span class="icon icon-oval" data-grunticon-embed=""></span> <span>Read the full perspective</span></span></a>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</div>
		<div class="dynamic-feat__list">
			<ul class="up-list">
				<li class="up-list__item up-list__item--three">
					<div class="preview-card">
						<a class="preview-card__header preview-card__header--pic" href="#">
						<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/t/taoyuan-international--airport-terminal-3/new-ones/headertaoyuan-airport-terminal-3-taiwanc-ceci--rshp--arup--fca-jv.jpg?h=1125&amp;w=2000&amp;hash=58DC78700C9BF8CE85D0155D861D0C280B6AAB33');"></div></a>
						<div class="preview-card__content preview-card__content--alt-style">
							<div class="preview-card__main">
								<div class="preview-copy">
									<a class="preview-copy__toplink" href="#">
									<h4 class="preview-copy__label label--md">Article</h4>
									<h3 class="preview-copy__title">Tomorrow&#39;s terminal: design for the digital passenger</h3>
									<div class="preview-copy__copy-wrap">
										<p class="preview-copy__copy">While airports already use digital technology to power various aspects of their operation, most have yet to create a complete digital passenger experience – and reap the benefits.</p>
									</div></a>
								</div>
							</div>
							<footer class="preview-card__footer">
								<div class="preview-foot">
									<div class="mini-profile mini-profile--small">
										<div class="mini-profile__pic-wrap">
											<a class="mini-profile__link" href="#"><img alt="Ian Taylor" class="mini-profile__pic" src="https://www.arup.com/-/media/arup/images/people/i/hong-kong-office-staff--ian-taylorc-arup.jpg?h=450&amp;w=450&amp;hash=A2C8CE10A68A782ED77AF3C6CAF9FA2469169A43"></a>
										</div>
										<div class="mini-profile__main">
											<ul class="mini-profile__info-list">
												<li class="mini-profile__info-item mini-profile__info-item--core">
													<a class="mini-profile__info-link" href="#"><span class="mini-profile__info-content"></span>
													<h4 class="mini-profile__name"><span class="mini-profile__info-content">Ian Taylor</span></h4>
													<h5 class="mini-profile__job"><span class="mini-profile__info-content">Global and East Asia Aviation Leader</span></h5></a>
												</li>
											</ul>
											<hr class="mini-profile__divide">
											<p class="mini-profile__underline">19 March 2018</p>
										</div>
									</div>
								</div>
							</footer>
						</div>
					</div>
				</li>
				<li class="up-list__item up-list__item--three">
					<div class="preview-card">
						<a class="preview-card__header preview-card__header--pic" href="#">
						<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/perspectives/torrid-urbanism/singaporeexternal2000x1125.jpg?h=1125&amp;w=2000&amp;hash=8D13CF7E24876F39A0702B5C582A64307F8B4F67');"></div></a>
						<div class="preview-card__content preview-card__content--alt-style">
							<div class="preview-card__main">
								<div class="preview-copy">
									<a class="preview-copy__toplink" href="#">
									<h4 class="preview-copy__label label--md">Article</h4>
									<h3 class="preview-copy__title">Torrid urbanism: city-making in the tropics</h3>
									<div class="preview-copy__copy-wrap">
										<p class="preview-copy__copy">40% of the world’s population live in a tropical climate and this is expected to increase to over 50% by 2050. What can we learn from today’s tropical cities to ensure that urban areas are liveable, vibrant and bio-diverse in the future?</p>
									</div></a>
								</div>
							</div>
							<footer class="preview-card__footer">
								<div class="preview-foot">
									<div class="mini-profile mini-profile--small">
										<div class="mini-profile__pic-wrap">
											<a class="mini-profile__link" href="#"><img alt="Caroline Stalker" class="mini-profile__pic" src="https://www.arup.com/-/media/arup/images/people/c/caroline-stalker/caroline-stalker_450x450.jpg?h=450&amp;w=450&amp;hash=E7CDB302716492B084B3B08D5BF12196826B9B01"></a>
										</div>
										<div class="mini-profile__main">
											<ul class="mini-profile__info-list">
												<li class="mini-profile__info-item mini-profile__info-item--core">
													<a class="mini-profile__info-link" href="#"><span class="mini-profile__info-content"></span>
													<h4 class="mini-profile__name"><span class="mini-profile__info-content">Caroline Stalker</span></h4>
													<h5 class="mini-profile__job"><span class="mini-profile__info-content">Urban Design Director</span></h5></a>
												</li>
											</ul>
											<hr class="mini-profile__divide">
											<p class="mini-profile__underline">19 March 2018</p>
										</div>
									</div>
								</div>
							</footer>
						</div>
					</div>
				</li>
				<li class="up-list__item up-list__item--three">
					<div class="preview-card">
						<a class="preview-card__header preview-card__header--pic" href="#">
						<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/perspectives/themes/energy/offshore-opportunity/2000x1125headerimageoption1.jpg?h=1125&amp;w=2000&amp;hash=CE0196AD2B37A883E8529538EA9BBAF81121B35E');"></div></a>
						<div class="preview-card__content preview-card__content--alt-style">
							<div class="preview-card__main">
								<div class="preview-copy">
									<a class="preview-copy__toplink" href="#">
									<h4 class="preview-copy__label label--md">Article</h4>
									<h3 class="preview-copy__title">The offshore opportunity: Five factors that make wind power investment work</h3>
									<div class="preview-copy__copy-wrap">
										<p class="preview-copy__copy">The need for sustainable, reliable and affordable energy has never been greater. Offshore wind power is an exciting prospect, but what are the factors that make an investment a success?</p>
									</div></a>
								</div>
							</div>
							<footer class="preview-card__footer">
								<div class="preview-foot">
									<div class="mini-profile mini-profile--small">
										<div class="mini-profile__pic-wrap">
											<a class="mini-profile__link" href="#"><img alt="Cameron Dunn" class="mini-profile__pic" src="https://www.arup.com/-/media/arup/images/people/c/cameron-dunn.jpg?h=450&amp;w=450&amp;hash=3870D107DE389DADFCBBD528AC9A4A99AA70EEB2"></a>
										</div>
										<div class="mini-profile__main">
											<ul class="mini-profile__info-list">
												<li class="mini-profile__info-item mini-profile__info-item--core">
													<a class="mini-profile__info-link" href="#"><span class="mini-profile__info-content"></span>
													<h4 class="mini-profile__name"><span class="mini-profile__info-content">Cameron Dunn</span></h4>
													<h5 class="mini-profile__job"><span class="mini-profile__info-content">US Offshore Wind Leader</span></h5></a>
												</li>
											</ul>
											<hr class="mini-profile__divide">
											<p class="mini-profile__underline">7 June 2018</p>
										</div>
									</div>
								</div>
							</footer>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="where">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>3. Where can you use the recommended content module?</h2>
			<p>The recommended content module can be placed on the following types of pages:</p>
			<ul>
				<li>Perspectives</li>
				<li>Projects</li>
				<li>Services</li>
				<li>Industries</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>4. Creating a recommended content module</h2>
			<p>To add a recommended content module to your page, you must first create it in the Content Editor. You will use the Experience Editor to add the completed module to your page.</p>
			<ul>
				<li>Right click on the 'Local content' folder and choose '<b>Insert &gt; Recommended content</b>' from the popup</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/recommended-content/create-recommended.jpg"></div>
			<div class="halfbleed__detail">
				Fig 1: Creating and inserting a Recommended content module. Right click the 'Local content' folder under your page and choose '<b>Insert &gt; Recommended content</b>'
			</div>
			<ul>
				<li>Give your module a suitably descriptive name and click 'Ok'. NB - if you're adding multiple quotes, its useful to number these in the order you're going to add them</li>
			</ul>
			<h5><a id="adding-content" name="adding-content"></a>Adding content</h5>
			<p>You can add content to the following fields:</p>
			<ul>
				<li><b>Recommended content header</b> - You can add a title to the module. This will appear to the top left of the module</li>
				<li><b>Recommended content</b> - select the articles that you want to promote within the module. Click the 'Edit' option - this will launch a popup window from which you select the articles. Browse the content tree and double click your chosen articles. Selected articles will appear in the right column. To unselect an article, simply double click it in the righthand column</li>
				<li><b>Pinned hero</b> - select a single article (displayed in hero format) by clicking on the field and browsing the content tree that appears. All articles can be found under 'Sitecore &gt; Content &gt; Home' - click the black triangle next to each item to expand it and explore what sits beneath</li>
				<li><b>Hide hero</b> - select this option if you DO NOT want to display a 'hero' style item. You will choose this if you're only displaying two or three articles</li>
				<li><b>Only show hero</b> - selecting this option will ensure that only the 'Pinned hero' article selection appears</li>
				<li><b>Use white background</b> - by default, the module displays on a grey background - with each article having a white background. Select this option to 'flip' this choice. The background for the entire module will become white and each article will have a grey background</li>
			</ul>
			<h5><a id="consider" name="consider"></a>Things to consider</h5>
			<p>When adding your articles you should consider the following:</p>
			<ol>
				<li>Display a specific article in the 'Pinned hero' slot<br>
				<br>
				If you're displaying 4 articles, you can select 4 in the 'recommended content' field. However, you will have no control over the article that appears in the 'Pinned hero' slot.<br>
				To control this, choose 3 articles in the 'Recommended content' field and an article in the 'Pinned hero' field</li>
				<li>Display a single article<br>
				<br>
				To display a single article you can either select a single article in the 'Recommended content' field or select the article in the 'Pinned hero' field</li>
				<li>Display two or three articles<br>
				<br>
				To display two or three articles, select the articles within the 'Recommended content' field and ensure you select 'Hide pinned hero'</li>
			</ol>
			<h5><a id="introductions" name="introductions"></a>Adding introductions to your articles</h5>
			<p>You can choose whether introductions for your articles are added - however, the 'Pinned hero' MUST have an introduction added.. Ideally, you should include an introduction. This content offers the opportunity to briefly summarise your article and encourage users to explore further.</p>
			<p>To add this content:</p>
			<ul>
				<li>Ensure you've saved your module</li>
				<li>Browse to one of the articles you've selected in the main content tree and select it</li>
				<li>You should see a field called 'Recommended content' - add your content here</li>
				<li>Save the article / page and either republish it - or ensure that your content publisher knows that they will need to publish this page as well as the page you're creating</li>
				<li>Repeat for each article you've selected in your recommended content module</li>
			</ul>
			<p><b>NB - if content already exists in this field for an article you've selected DO NOT remove it or replace it. This indicates that the article is being used in another version of the module somewhere else on arup.com.</b></p>
		</div>
	</div>
</section>
<section class="container" id="best-practice">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>Best practice</h2>
			<p>In this section, you will find guidance and advice on how to best utilise the 'recommended content' module.</p>
			<p>It includes examples illustrating how to use and display the module and guidance on considering when and where to add it.</p>
			<h5>Recommended use</h5>
			<ul class="featureList">
				<li class="tick">Display similar related articles from arup.com</li>
				<li class="tick">Retain users attention and encourage them to remain on arup.com</li>
			</ul>
			<h5>Placement</h5>
			<p>The module can be added to multiple page types including projects, perspectives, industries and services. You need to think about where you're going to add it to make best use of it. Generally speaking, there will be three scenarios:</p>
			<ol>
				<li><b>Highlight interesting examples of Arup's work</b> - in this scenario, you'll be demonstrating the range of expertise we have through examples such as projects or perspectives. In this scenario, you can add the module anywhere with in your content. For example, you may add it after a passage introducing a particular area of expertise where the user could see it in action.</li>
				<li><b>Show similar examples or related articles</b> - in this scenario, you're likely looking to show the user other interesting examples of work or knowledge that are similar to the page you're creating. You should therefore consider adding this towards the end of your article. You don't want to lead users off your page until they've learnt everything about the article you're adding!</li>
				<li><b>Navigation</b> - the module can be utilised as a form of on page navigation. For example, if you're adding subpages to an expertise page, you could use the module to link to each of these. Again, in this scenario you have more freedom as to where you add the module. The placement will essentially be governed by the flow of your content.</li>
			</ol>
			<p><b>Example 1 - correctly presented 'complete' module</b></p>
			<p>In the example below, you'll see what a 'perfect' example of a recommended content module.</p>
			<p>It has:</p>
			<ul class="featureList">
				<li class="tick">All profile is displaying</li>
				<li class="tick">Pinned hero present</li>
				<li class="tick">Layout is correct</li>
				<li class="tick">Introductions added to each article</li>
			</ul>
		</div>
	</div>
</section>
<section class="container">
	<div class="dynamic-feat">
		<header class="dynamic-feat__header">
			<div class="dynamic-feat__title-wrap">
				<h4 class="dynamic-feat__title">Featured content</h4>
			</div>
		</header>
		<div class="dynamic-feat__hero">
			<div class="preview-card preview-card--hero">
				<a class="preview-card__header preview-card__header--pic" href="#">
				<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/perspectives/themes/cities/urban-childhoods/2000x1125-cc-bync-20-phil-rogersgranary-square.jpg?h=1125&amp;w=2000&amp;hash=0C46EA7C217CC794BE77845D94A7AA8439A519EB');"></div></a>
				<div class="preview-card__content">
					<div class="preview-card__main">
						<div class="preview-copy">
							<a class="preview-copy__toplink" href="#">
							<h4 class="preview-copy__label label--md">Article</h4>
							<h3 class="preview-copy__title">Cities Alive: Designing for urban childhoods</h3>
							<div class="preview-copy__copy-wrap">
								<p class="preview-copy__copy">Find out how a child-friendly approach to urban planning is vital for the creation of cities that work better for everyone. We explain how we can create healthier and more inclusive, resilient and competitive cities for all of us to live, work and grow up in.</p>
							</div></a>
						</div>
					</div>
					<footer class="preview-card__footer">
						<div class="preview-foot">
							<div class="mini-profile mini-profile--small">
								<div class="mini-profile__pic-wrap">
									<a class="mini-profile__link" href="#"><img alt="Jerome Frost" class="mini-profile__pic" src="https://www.arup.com/-/media/arup/images/people/j/jerome-frost--consulting-centralc-thomas-grahamarup.jpg?h=450&amp;w=450&amp;hash=F248320B27CB808EA7D260933E51DEC753846425"></a>
								</div>
								<div class="mini-profile__main">
									<ul class="mini-profile__info-list">
										<li class="mini-profile__info-item mini-profile__info-item--core">
											<a class="mini-profile__info-link" href="#"><span class="mini-profile__info-content"></span>
											<h4 class="mini-profile__name"><span class="mini-profile__info-content">Jerome Frost</span></h4>
											<h5 class="mini-profile__job"><span class="mini-profile__info-content">Global Cities Leader</span></h5></a>
										</li>
									</ul>
									<hr class="mini-profile__divide">
									<p class="mini-profile__underline">7 February 2018</p>
								</div>
							</div>
							<div class="preview-card__cta preview-card__cta--foot">
								<a href="#"><span class="cta cta--black cta--small cta--right cta--plain"><span class="icon icon-oval" data-grunticon-embed=""></span> <span>Read the full perspective</span></span></a>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</div>
		<div class="dynamic-feat__list">
			<ul class="up-list">
				<li class="up-list__item up-list__item--three">
					<div class="preview-card">
						<a class="preview-card__header preview-card__header--pic" href="#">
						<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/t/taoyuan-international--airport-terminal-3/new-ones/headertaoyuan-airport-terminal-3-taiwanc-ceci--rshp--arup--fca-jv.jpg?h=1125&amp;w=2000&amp;hash=58DC78700C9BF8CE85D0155D861D0C280B6AAB33');"></div></a>
						<div class="preview-card__content preview-card__content--alt-style">
							<div class="preview-card__main">
								<div class="preview-copy">
									<a class="preview-copy__toplink" href="#">
									<h4 class="preview-copy__label label--md">Article</h4>
									<h3 class="preview-copy__title">Tomorrow&#39;s terminal: design for the digital passenger</h3>
									<div class="preview-copy__copy-wrap">
										<p class="preview-copy__copy">While airports already use digital technology to power various aspects of their operation, most have yet to create a complete digital passenger experience – and reap the benefits.</p>
									</div></a>
								</div>
							</div>
							<footer class="preview-card__footer">
								<div class="preview-foot">
									<div class="mini-profile mini-profile--small">
										<div class="mini-profile__pic-wrap">
											<a class="mini-profile__link" href="#"><img alt="Ian Taylor" class="mini-profile__pic" src="https://www.arup.com/-/media/arup/images/people/i/hong-kong-office-staff--ian-taylorc-arup.jpg?h=450&amp;w=450&amp;hash=A2C8CE10A68A782ED77AF3C6CAF9FA2469169A43"></a>
										</div>
										<div class="mini-profile__main">
											<ul class="mini-profile__info-list">
												<li class="mini-profile__info-item mini-profile__info-item--core">
													<a class="mini-profile__info-link" href="#"><span class="mini-profile__info-content"></span>
													<h4 class="mini-profile__name"><span class="mini-profile__info-content">Ian Taylor</span></h4>
													<h5 class="mini-profile__job"><span class="mini-profile__info-content">Global and East Asia Aviation Leader</span></h5></a>
												</li>
											</ul>
											<hr class="mini-profile__divide">
											<p class="mini-profile__underline">19 March 2018</p>
										</div>
									</div>
								</div>
							</footer>
						</div>
					</div>
				</li>
				<li class="up-list__item up-list__item--three">
					<div class="preview-card">
						<a class="preview-card__header preview-card__header--pic" href="#">
						<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/perspectives/torrid-urbanism/singaporeexternal2000x1125.jpg?h=1125&amp;w=2000&amp;hash=8D13CF7E24876F39A0702B5C582A64307F8B4F67');"></div></a>
						<div class="preview-card__content preview-card__content--alt-style">
							<div class="preview-card__main">
								<div class="preview-copy">
									<a class="preview-copy__toplink" href="#">
									<h4 class="preview-copy__label label--md">Article</h4>
									<h3 class="preview-copy__title">Torrid urbanism: city-making in the tropics</h3>
									<div class="preview-copy__copy-wrap">
										<p class="preview-copy__copy">40% of the world’s population live in a tropical climate and this is expected to increase to over 50% by 2050. What can we learn from today’s tropical cities to ensure that urban areas are liveable, vibrant and bio-diverse in the future?</p>
									</div></a>
								</div>
							</div>
							<footer class="preview-card__footer">
								<div class="preview-foot">
									<div class="mini-profile mini-profile--small">
										<div class="mini-profile__pic-wrap">
											<a class="mini-profile__link" href="#"><img alt="Caroline Stalker" class="mini-profile__pic" src="https://www.arup.com/-/media/arup/images/people/c/caroline-stalker/caroline-stalker_450x450.jpg?h=450&amp;w=450&amp;hash=E7CDB302716492B084B3B08D5BF12196826B9B01"></a>
										</div>
										<div class="mini-profile__main">
											<ul class="mini-profile__info-list">
												<li class="mini-profile__info-item mini-profile__info-item--core">
													<a class="mini-profile__info-link" href="#"><span class="mini-profile__info-content"></span>
													<h4 class="mini-profile__name"><span class="mini-profile__info-content">Caroline Stalker</span></h4>
													<h5 class="mini-profile__job"><span class="mini-profile__info-content">Urban Design Director</span></h5></a>
												</li>
											</ul>
											<hr class="mini-profile__divide">
											<p class="mini-profile__underline">19 March 2018</p>
										</div>
									</div>
								</div>
							</footer>
						</div>
					</div>
				</li>
				<li class="up-list__item up-list__item--three">
					<div class="preview-card">
						<a class="preview-card__header preview-card__header--pic" href="#">
						<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/perspectives/themes/energy/offshore-opportunity/2000x1125headerimageoption1.jpg?h=1125&amp;w=2000&amp;hash=CE0196AD2B37A883E8529538EA9BBAF81121B35E');"></div></a>
						<div class="preview-card__content preview-card__content--alt-style">
							<div class="preview-card__main">
								<div class="preview-copy">
									<a class="preview-copy__toplink" href="#">
									<h4 class="preview-copy__label label--md">Article</h4>
									<h3 class="preview-copy__title">The offshore opportunity: Five factors that make wind power investment work</h3>
									<div class="preview-copy__copy-wrap">
										<p class="preview-copy__copy">The need for sustainable, reliable and affordable energy has never been greater. Offshore wind power is an exciting prospect, but what are the factors that make an investment a success?</p>
									</div></a>
								</div>
							</div>
							<footer class="preview-card__footer">
								<div class="preview-foot">
									<div class="mini-profile mini-profile--small">
										<div class="mini-profile__pic-wrap">
											<a class="mini-profile__link" href="#"><img alt="Cameron Dunn" class="mini-profile__pic" src="https://www.arup.com/-/media/arup/images/people/c/cameron-dunn.jpg?h=450&amp;w=450&amp;hash=3870D107DE389DADFCBBD528AC9A4A99AA70EEB2"></a>
										</div>
										<div class="mini-profile__main">
											<ul class="mini-profile__info-list">
												<li class="mini-profile__info-item mini-profile__info-item--core">
													<a class="mini-profile__info-link" href="#"><span class="mini-profile__info-content"></span>
													<h4 class="mini-profile__name"><span class="mini-profile__info-content">Cameron Dunn</span></h4>
													<h5 class="mini-profile__job"><span class="mini-profile__info-content">US Offshore Wind Leader</span></h5></a>
												</li>
											</ul>
											<hr class="mini-profile__divide">
											<p class="mini-profile__underline">7 June 2018</p>
										</div>
									</div>
								</div>
							</footer>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Example 2 - broken layout</b></p>
			<p>In the example below, the layout of the module is incorrect and looks strange. In addition, the content is incomplete in places</p>
			<ul class="featureList">
				<li class="cross">Pinned hero should not be present</li>
				<li class="cross">Not all articles have introductions</li>
			</ul>
		</div>
	</div>
</section>
<section class="container">
	<div class="dynamic-feat">
		<header class="dynamic-feat__header">
			<div class="dynamic-feat__title-wrap">
				<h4 class="dynamic-feat__title">Featured content</h4>
			</div>
		</header>
		<div class="dynamic-feat__hero">
			<div class="preview-card preview-card--hero">
				<a class="preview-card__header preview-card__header--pic" href="#">
				<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/perspectives/themes/cities/urban-childhoods/2000x1125-cc-bync-20-phil-rogersgranary-square.jpg?h=1125&amp;w=2000&amp;hash=0C46EA7C217CC794BE77845D94A7AA8439A519EB');"></div></a>
				<div class="preview-card__content">
					<div class="preview-card__main">
						<div class="preview-copy">
							<a class="preview-copy__toplink" href="#">
							<h4 class="preview-copy__label label--md">Article</h4>
							<h3 class="preview-copy__title">Cities Alive: Designing for urban childhoods</h3>
							<div class="preview-copy__copy-wrap">
								<p class="preview-copy__copy">Find out how a child-friendly approach to urban planning is vital for the creation of cities that work better for everyone. We explain how we can create healthier and more inclusive, resilient and competitive cities for all of us to live, work and grow up in.</p>
							</div></a>
						</div>
					</div>
					<footer class="preview-card__footer">
						<div class="preview-foot">
							<div class="mini-profile mini-profile--small">
								<div class="mini-profile__pic-wrap">
									<a class="mini-profile__link" href="#"><img alt="Jerome Frost" class="mini-profile__pic" src="https://www.arup.com/-/media/arup/images/people/j/jerome-frost--consulting-centralc-thomas-grahamarup.jpg?h=450&amp;w=450&amp;hash=F248320B27CB808EA7D260933E51DEC753846425"></a>
								</div>
								<div class="mini-profile__main">
									<ul class="mini-profile__info-list">
										<li class="mini-profile__info-item mini-profile__info-item--core">
											<a class="mini-profile__info-link" href="#"><span class="mini-profile__info-content"></span>
											<h4 class="mini-profile__name"><span class="mini-profile__info-content">Jerome Frost</span></h4>
											<h5 class="mini-profile__job"><span class="mini-profile__info-content">Global Cities Leader</span></h5></a>
										</li>
									</ul>
									<hr class="mini-profile__divide">
									<p class="mini-profile__underline">7 February 2018</p>
								</div>
							</div>
							<div class="preview-card__cta preview-card__cta--foot">
								<a href="#"><span class="cta cta--black cta--small cta--right cta--plain"><span class="icon icon-oval" data-grunticon-embed=""></span> <span>Read the full perspective</span></span></a>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</div>
		<div class="dynamic-feat__list">
			<ul class="up-list">
				<li class="up-list__item up-list__item--three">
					<div class="preview-card">
						<a class="preview-card__header preview-card__header--pic" href="#">
						<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/projects/t/taoyuan-international--airport-terminal-3/new-ones/headertaoyuan-airport-terminal-3-taiwanc-ceci--rshp--arup--fca-jv.jpg?h=1125&amp;w=2000&amp;hash=58DC78700C9BF8CE85D0155D861D0C280B6AAB33');"></div></a>
						<div class="preview-card__content preview-card__content--alt-style">
							<div class="preview-card__main">
								<div class="preview-copy">
									<a class="preview-copy__toplink" href="#">
									<h4 class="preview-copy__label label--md">Article</h4>
									<h3 class="preview-copy__title">Tomorrow&#39;s terminal: design for the digital passenger</h3>
									<div class="preview-copy__copy-wrap">
										<p class="preview-copy__copy">While airports already use digital technology to power various aspects of their operation, most have yet to create a complete digital passenger experience – and reap the benefits.</p>
									</div></a>
								</div>
							</div>
							<footer class="preview-card__footer">
								<div class="preview-foot">
									<div class="mini-profile mini-profile--small">
										<div class="mini-profile__pic-wrap">
											<a class="mini-profile__link" href="#"><img alt="Ian Taylor" class="mini-profile__pic" src="https://www.arup.com/-/media/arup/images/people/i/hong-kong-office-staff--ian-taylorc-arup.jpg?h=450&amp;w=450&amp;hash=A2C8CE10A68A782ED77AF3C6CAF9FA2469169A43"></a>
										</div>
										<div class="mini-profile__main">
											<ul class="mini-profile__info-list">
												<li class="mini-profile__info-item mini-profile__info-item--core">
													<a class="mini-profile__info-link" href="#"><span class="mini-profile__info-content"></span>
													<h4 class="mini-profile__name"><span class="mini-profile__info-content">Ian Taylor</span></h4>
													<h5 class="mini-profile__job"><span class="mini-profile__info-content">Global and East Asia Aviation Leader</span></h5></a>
												</li>
											</ul>
											<hr class="mini-profile__divide">
											<p class="mini-profile__underline">19 March 2018</p>
										</div>
									</div>
								</div>
							</footer>
						</div>
					</div>
				</li>
				<li class="up-list__item up-list__item--three">
					<div class="preview-card">
						<a class="preview-card__header preview-card__header--pic" href="#">
						<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/perspectives/torrid-urbanism/singaporeexternal2000x1125.jpg?h=1125&amp;w=2000&amp;hash=8D13CF7E24876F39A0702B5C582A64307F8B4F67');"></div></a>
						<div class="preview-card__content preview-card__content--alt-style">
							<div class="preview-card__main">
								<div class="preview-copy">
									<a class="preview-copy__toplink" href="#">
									<h4 class="preview-copy__label label--md">Article</h4>
									<h3 class="preview-copy__title">Torrid urbanism: city-making in the tropics</h3>
									<div class="preview-copy__copy-wrap"></div></a>
								</div>
							</div>
							<footer class="preview-card__footer">
								<div class="preview-foot">
									<div class="mini-profile mini-profile--small">
										<div class="mini-profile__pic-wrap">
											<a class="mini-profile__link" href="#"><img alt="Caroline Stalker" class="mini-profile__pic" src="https://www.arup.com/-/media/arup/images/people/c/caroline-stalker/caroline-stalker_450x450.jpg?h=450&amp;w=450&amp;hash=E7CDB302716492B084B3B08D5BF12196826B9B01"></a>
										</div>
										<div class="mini-profile__main">
											<ul class="mini-profile__info-list">
												<li class="mini-profile__info-item mini-profile__info-item--core">
													<a class="mini-profile__info-link" href="#"><span class="mini-profile__info-content"></span>
													<h4 class="mini-profile__name"><span class="mini-profile__info-content">Caroline Stalker</span></h4>
													<h5 class="mini-profile__job"><span class="mini-profile__info-content">Urban Design Director</span></h5></a>
												</li>
											</ul>
											<hr class="mini-profile__divide">
											<p class="mini-profile__underline">19 March 2018</p>
										</div>
									</div>
								</div>
							</footer>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Example 3 - no introduction for 'pinned hero' article</b></p>
			<p>In the example below, the 'pinned hero' lacks an introduction. No only does this leave to much empty space, but it also makes it harder for the user to learn about the article</p>
			<p>It lacks:</p>
			<ul class="featureList">
				<li class="cross">A introduction for the 'pinned hero' article</li>
			</ul>
		</div>
	</div>
</section>
<section class="container">
	<div class="dynamic-feat">
		<header class="dynamic-feat__header">
			<div class="dynamic-feat__title-wrap">
				<h4 class="dynamic-feat__title">Featured content</h4>
			</div>
		</header>
		<div class="dynamic-feat__hero">
			<div class="preview-card preview-card--hero">
				<a class="preview-card__header preview-card__header--pic" href="#">
				<div class="preview-card__pic" style="background-image: url('https://www.arup.com/-/media/arup/images/perspectives/themes/cities/urban-childhoods/2000x1125-cc-bync-20-phil-rogersgranary-square.jpg?h=1125&amp;w=2000&amp;hash=0C46EA7C217CC794BE77845D94A7AA8439A519EB');"></div></a>
				<div class="preview-card__content">
					<div class="preview-card__main">
						<div class="preview-copy">
							<a class="preview-copy__toplink" href="#">
							<h4 class="preview-copy__label label--md">Article</h4>
							<h3 class="preview-copy__title">Cities Alive: Designing for urban childhoods</h3>
							<div class="preview-copy__copy-wrap"></div></a>
						</div>
					</div>
					<footer class="preview-card__footer">
						<div class="preview-foot">
							<div class="mini-profile mini-profile--small">
								<div class="mini-profile__pic-wrap">
									<a class="mini-profile__link" href="#"><img alt="Jerome Frost" class="mini-profile__pic" src="https://www.arup.com/-/media/arup/images/people/j/jerome-frost--consulting-centralc-thomas-grahamarup.jpg?h=450&amp;w=450&amp;hash=F248320B27CB808EA7D260933E51DEC753846425"></a>
								</div>
								<div class="mini-profile__main">
									<ul class="mini-profile__info-list">
										<li class="mini-profile__info-item mini-profile__info-item--core">
											<a class="mini-profile__info-link" href="#"><span class="mini-profile__info-content"></span>
											<h4 class="mini-profile__name"><span class="mini-profile__info-content">Jerome Frost</span></h4>
											<h5 class="mini-profile__job"><span class="mini-profile__info-content">Global Cities Leader</span></h5></a>
										</li>
									</ul>
									<hr class="mini-profile__divide">
									<p class="mini-profile__underline">7 February 2018</p>
								</div>
							</div>
							<div class="preview-card__cta preview-card__cta--foot">
								<a href="#"><span class="cta cta--black cta--small cta--right cta--plain"><span class="icon icon-oval" data-grunticon-embed=""></span> <span>Read the full perspective</span></span></a>
							</div>
						</div>
					</footer>
				</div>
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
					<a href="#faq-when">Why should I use this module when pages already have 'related content'?</a>
				</li>
				<li>
					<a href="#faq-recommended">I've selected an article, but the intro doesn't suit my needs. What should I do?</a>
				</li>
				<li>
					<a href="#faq-different">Can i use different types of content in the same module?</a>
				</li>
			</ol>
			<h5><a id="faq-when" name="faq-when"></a>1. Why should I use this module when pages already have 'related content'?</h5>
			<p>A. The module is more flexible - as it can be placed anywhere on a page. Related content only appears at the end / bottom of a page. Furthermore, by building useful related content in to your content, users are more likely to recognise it as part of your article, rather than an afterthought</p>
			<p>Ultimately the style of quote you use is decision you need to make when building your page.</p>
			<h5><a id="faq-recommended" name="faq-recommended"></a>2. I've selected an article, but the intro doesn't suit my needs. What should I do?</h5>
			<p>A. If an article already has the 'recommended content' introduction added to it when you select it, this strongly implies that is being used in a module else where. It is therefore important that you don't edit it. Please contact <a href="mailto:steve.burleigh@arup.com">steve.burleigh@arup.com</a> if this scenario arises.</p>
			<h5><a id="faq-different" name="faq-different"></a>3. Can i use different types of content in the same module?</h5>
			<p>A. Yes. You can use any of the content types indicated in section 2 of this guide in anyway that you require. For example, you could have one project, two profiles and a perspective.</p>
		</div>
	</div>
</section><!-- end image -->
