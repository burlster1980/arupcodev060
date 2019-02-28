---
title: "Creating a news page"
date: 2019-02-16T17:42:27Z
lastmod: 2019-02-17
draft: false
type: Creating new pages
weight: "1"
menu:
  main:
    title: "Creating news"
    parent: "creating-pages"
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
					<a href="#where">Where is news?</a>
				</li>
				<li>
					<a href="#creating">Creating a news item</a>
					<ul class="sub-header-list">
						<li>
							<a href="#adding">Adding content to your news item</a>
						</li>
						<li>
							<a href="#completing">Completing your news item</a>
						</li>
						<li>
							<a href="#links">Adding links</a>
						</li>
						<li>
							<a href="#modules">Adding modules</a>
						</li>
						<li>
							<a href="#language">Adding alternative language versions</a>
						</li>
						<li>
							<a href="#workflow">Workflow</a>
						</li>
					</ul>
				</li>
			</ol>
		</div>
		<div class="menu_section two">
			<ol class="header-list second" start="3">
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
<section class="container" id="where">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>1. Where is news?</h2>
			<h5>News on the website</h5>
			<p>When viewing the website, news is found under the URL <a href="https://www.arup.com/news-and-events" target="_blank">www.arup.com/news-and-events</a></p>
			<h5>News within the CMS</h5>
			<p></p>
			<p>When viewing the CMS, news is found at <b>Sitecore &gt; Content &gt; Arup &gt; Home &gt; News and events</b></p>
			<p>News articles are 'bucketable' and stored in Sitecore 'Buckets'. Buckets are essentially Sitecore terminology for folders. They allow the CMS to store content in a folder structure, making things easier to find. A bucket's name does not appear in the URL of a page.</p>
			<p></p>
			<p>News articles are stored in the following way:</p>
			<p><b>News and events &gt; News &gt; Year &gt; Month &gt; name of article</b></p>
			<p>This means that when you create a new News item, it will be stored in the corresponding year and month bucket. For example, if you created a news item on 1 January 2019, its location would be:</p>
			<p><b>News and events &gt; News &gt; 2019 &gt; 01 &gt; name of your article</b></p>
		</div>
	</div>
</section>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>2. Creating a news item</h2>
			<p>To create a news article, you will need to:</p>
			<ul>
				<li>Expand the item 'News and events' by clicking the black triangle next to it</li>
				<li>Once expanded, right click on 'News' and choose '<b>Insert &gt; News</b>'</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/news/create-news.jpg"></div>
			<div class="halfbleed__detail">
				Fig1: Creating a new News item. You need to right click on the 'News' node, and choose 'Insert &gt; News'
			</div>
			<ul>
				<li>Enter a name for your news item that suitably describes the content (NB - this name will form the URL of the article for example if you called your item 'My news item' the url would be arup.com/news-and-events/my-news-item) and click OK</li>
				<li>The screen will then reload, and you've successfully created your news item</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h5><a id="adding" name="adding"></a>Adding content to a news item</h5>
			<p>News articles contain a mixture of 'form' content and modules. Essentially, your key data about your news item will be added to the News item you've just created, whilst the bulk of the actual article content will be added via modules. This guide details the former - describing what fields you need to complete and what they do.</p>
			<p>Each of the headings below represents one of the expandable panels of the news document. The fields relevant to each are detailed.</p>
			<p><b>Content</b></p>
			<p><b>*</b>fields marked with an asterisk are required and must be completed</p>
			<ul>
				<li><b>Header label*</b> - by default this will be populated with the word 'News'. If you're creating a press release, then you should replace 'News' with the label 'Press release'</li>
				<li><b>Title*</b> - this is the heading of your article.</li>
				<li>
					<b>Intro*</b> - this is the introduction to your article. This should either represent:
					<ul class="sub-header-list">
						<li>the first one to two sentences of your article (never more than two)</li>
						<li style="list-style: none; display: inline">
							<p>OR</p>
						</li>
						<li>a one to two sentence summary of your article - meaning that a user could gain overall insight by reading this content</li>
					</ul><br>
					To add content to this field click 'show editor' and enter your text. Please see the guide to using the Rich Text editor for further information on adding content here
				</li>
				<li><b>Image</b>* - please add a suitable image to your article. This should be resized to 2000px wide by 1125px high. Further details about imagery and news articles is contained below.</li>
				<li><b>Body</b> - theoretically, you add in your article copy to this field. However, please see below before doing this<br>
				<br>
				To add content to this field click 'show editor' and enter your text. Please see the guide to using the Rich Text editor for further information on adding content here.</li>
				<li>
					<b>News date*</b> - this is the date of publication of your article. By default, it will be set to the date upon which you created the item. You can however change it to a past or future date if you wish. To change the date:
					<ul class="sub-header-list">
						<li>Click the downward triangle next to the date</li>
						<li>From the resulting calendar popup, choose the date you want for your publication date</li>
					</ul>
				</li>
				<li><b>News expiry date</b> - if you set this, the date you insert will be the date that your article CEASES to be published.</li>
				<li>
					<b>Author*</b> - you need to select an author for your article. This will be a member of the marketing or press teams (or indeed it maybe you). To choose the contact:
					<ul class="sub-header-list">
						<li>Browse the list of contacts (you can scroll using your mouse)</li>
						<li>Double click the name of the contact you want - you'll see their name move to the righthand column</li>
						<li>To remove an unwanted contact - double click the name that has been moved to the righthand column and they will disappear</li>
						<li>For more information on profiles, and help with creating new profiles, please see the <a href="/creating-pages/creating-profiles/">profiles guidance</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p>The screenshot below indicates where each of the above fields are shown on a published news item.</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/news/key-news-fields-added.jpg"></div>
			<div class="halfbleed__detail">
				Fig 2: example of a completed news article indicating which fields do what
			</div>
			<p><b>NB - Image</b></p>
			<p>You MUST add an image to your News item. At the time of writing, images do not show on individual news articles. However, the image is used for promoting your news story - particularly at <a href="https://www.arup.com/news-and-events" target="_blank">https://www.arup.com/news-and-events</a></p>
			<p><b>NB - Body field</b></p>
			<p>As detailed above, you can add your content to the 'Body' field of a news document. However, if you do this, you won't be able to add any modules to your page. Modules allow you to add elements such as <a href="image.html">images</a>, <a href="/creating-modules/carousel/">carousels</a>, <a href="/creating-modules/quote/">styled quotes</a> and <a href="/creating-modules/contacts/">contact details</a> to your content. If you do NOT want to take advantage of modules then you can safely add all your copy to the 'Body field'. If you want to add any modules then you should do the following:</p>
			<ul>
				<li>In the Body field, add all of your copy - up to the point at which you want to include an image / quote / carousel etc. Don't add any more at this point</li>
				<li>Complete the rest of the relevant fields detailed above (and those below)</li>
				<li>Save your document</li>
				<li>Open the <a href="/getting-started/content-experience-editor/">Experience Editor</a>
				</li>
			</ul>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Recommend content</b></p>
			<p>You can ignore this field</p>
			<p><b>Article content</b></p>
			<p>Please ignore fields under this heading. They are not used for displaying News content.</p>
			<p><b>Location</b></p>
			<p>News displays to users based on their geographic location. So for example, if a user is based in the USA, they will see news stories pre-filtered by their location i.e. stories that have been tagged with the country 'United States of America'.</p>
			<p><b>*</b>fields marked with an asterisk are required and must be completed</p>
			<ul>
				<li>Location - please enter a place name i.e. Sydney or London relevant to your News item</li>
				<li><b>Country*</b> - please select the country(s) that apply to your news item. Double click on each relevant country so that its name appears in the righthand column.</li>
			</ul>
			<p><b>NB - you no longer need to select 'Global' for your story to appear regardless of location</b></p>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Related articles</b></p>
			<p>Before completing this section, please note that the following do NOT display for news articles. You do not therefore need to select these.</p>
			<ul>
				<li>Related projects</li>
				<li>Related perspectives</li>
				<li>Related services</li>
				<li>Related Industries</li>
			</ul>
			<p>You can indicate what industries and services relate to your story in the following way:</p>
			<ul>
				<li>Locate the field whose label begins 'The chosen expertise to be displayed…' and click 'edit'</li>
				<li>From the resulting popup, select the industries / services you want to display by double clicking each option you wish to apply until it appears in the right hand column</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/news/selecting-related-news.jpg"></div>
			<div class="halfbleed__detail">
				Fig 3: Field for selecting related expertise - 'Education' is selected in this example
			</div>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/news/choose-related-options.jpg"></div>
			<div class="halfbleed__detail">
				Fig 4: Selecting your related content from the popup
			</div>
			<p>This information will be displayed in the following way once published:</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/news/where-related-news-shows.jpg"></div>
			<div class="halfbleed__detail">
				Fig 5: Examples of where related expertise displays. These are highlighted in red above
			</div>
			<p><b>Contacts</b></p>
			<p>You do NOT need to select an item from here. News uses the field 'Author' (detailed above) to display the relevant contact.</p>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Facebook Open Graph</b></p>
			<p>These fields are used to display content when your article is shared via social platforms.</p>
			<p><b>*</b>fields marked with an asterisk are required and must be completed</p>
			<ul>
				<li><b>Open Graph Title*</b> - Please enter a suitable title. Generally, you can re-use the article title entered above</li>
				<li><b>Open Graph Description*</b> - Please enter a brief description of your content. This should summarise the content of your article in a maximum of two sentences.</li>
				<li><b>Open Graph Image</b> - Please resize your main article image to a width of 800px and add to this field</li>
			</ul>
			<p><b>Metadata</b></p>
			<p>This information is used to aid the discovery of your article via search engines. Adding it is vital in helping people to find the article and ensuring that it performs to the best of its ability.</p>
			<p><b>*</b>fields marked with an asterisk are required and must be completed</p>
			<ul>
				<li><b>Browser title*</b> - Should you re-enter the title of your article to this field. If your title is particularly long, please consider drafting a shorter version for this field.</li>
				<li><b>SEO meta description*</b> - Please enter a two to three sentence summary of your article. You can consider re-using the introduction copy you've used above</li>
				<li><b>Meta keywords</b> - keywords have been used by search engines in the past to help users locate content. However, keywords are no longer of high relevance for search engines such as Google and you do not need to add these to aid search performance.</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h5><a id="completing" name="completing"></a>Completing your news article</h5>
			<p>Once you have added the data detailed above, you should save your document. If you are intending to add modules to your article, you will need to follow the steps outlined below. If your article is complete without modules, you can now submit it for publication or preview it using the method outlined below.</p>
			<h5><a id="links" name="links"></a>Adding links in Sitecore</h5>
			<p>You can add links to content in certain fields. Fields on a news document you can add links to include:</p>
			<ul>
				<li>Introduction</li>
				<li>Body</li>
			</ul>
			<p>Please see the '<a href="/getting-started/adding-links/">adding links in Sitecore</a>' guide for more information on adding links.</p>
			<h5><a id="modules" name="modules"></a>Adding modules to your news item</h5>
			<p>The following details the steps to prepare for adding modules and adding a new module. It does not provide details on the individual modules you can use. You should consult the individual module guides for full details on those relevant to your article.</p>
			<ul>
				<li>Right click on your news item in the content tree window and choose '<b>Insert &gt; Local datasource folder</b>'</li>
				<li>You will be prompted to name the item you've created - you should leave the pre-defined label of 'Local content' and click 'OK'</li>
				<li>Once your 'Local content' folder is created, it will appear underneath your news item. You can now add modules to this folder</li>
				<li>To add a module, right click on the local content folder and choose '<b>Insert &gt; module name</b>'</li>
				<li>Give your module a suitable name and click OK</li>
			</ul>
			<p><b>NB - when you name your modules, its worthwhile considering the order you're going to add them in. If you need to come back to your article later on (or something happens to it) using a naming convention that helps you easily identify what's in the module - and the order you're intending to add them - makes it much easier to edit or restore an article in a worst case scenario.</b></p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/news/adding-localcontent.jpg"></div>
			<div class="halfbleed__detail">
				Fig 6: adding a local content folder to your news item. Right click on your news item, and choose 'Insert &gt; Local Datasource Folder'
			</div>
			<h5><a id="language" name="language"></a>Adding an alternative language version</h5>
			<p>Sitecore gives you the ability to add multiple language versions to your content. A full guide to language versions has been provided, but you should be aware that:</p>
			<ul>
				<li>An article MUST be created in English first</li>
				<li>Any modules that have been added to your news item will also require translated versions be created</li>
			</ul>
			<p><a href="language-versions.html">Find out more about languages in Sitecore</a></p>
			<h5><a id="workflow" name="workflow"></a>Workflow</h5>
			<p>News articles are covered by the CMS' workflow. This means that only certain staff are able to publish content. Generally, this will be a member of the GMC Online team - though some regions including Australasia and the Far East also have a member of staff with publishing rights. You can learn more about the <a href="/getting-started/workflow/">workflow via the online guide</a>.</p>
		</div>
	</div>
</section>
<section class="container" id="best-practice">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>3. Best practice</h2>
			<p>You can see an example of a well-presented news item by looking at an exemplar news item (link to item).</p>
			<p>You should bear in mind the following when adding news to arup.com:</p>
			<ul>
				<li>Your introduction / summary content is vital - this content needs to encourage people to read on.</li>
				<li>Try not to link to pages in the first paragraph of your article - this won't always be possible, but ideally you should give users a chance to read your content before linking off to another page.</li>
				<li>Wherever possible, make use of calls to action (CTAs) - if your news item is about a report on arup.com (or any other page) - don't forget to link to it clearly! You can link to the same page more than once if you need to. It's always worth finishing your article with another link to a page. Good calls to action encourage people to find out more. Examples might include:
					<ul class="sub-header-list">
						<li>Learn more about project X</li>
						<li>Download a copy of our report on Y</li>
						<li>Discover more about our expertise in Z</li>
					</ul>
				</li>
				<li>If you're linking to a specific publication, consider making use of the Publication module (link) - this module helps to highlight publications specifically</li>
				<li>If you're promoting a specific project / perspective / service / area of expertise, consider making use of the Recommend Content module (link) - this can help highlight a particular page or set of pages. This won't always work, so you should consider this carefully</li>
				<li>Try and link to relevant pages on the site even if you're not writing about a specific item such as a report or project - news is a great way to get people on to arup.com. Linking to relevant pages will help keep them there and encourage them to learn more</li>
				<li>If you'd adding links to external sites (for example you're linking to a report on the Parliament website) be sure to set this to open in a 'New window'. All links to pages outside of arup.com (even to other Arup websites) should open in a new tab in your browser (see adding Links above for more details)</li>
				<li>Make the most of high quality images - if you've got good images for your story - use them! Images help bring stories to life, particularly when paired with good, descriptive captions that link the image to your story</li>
				<li>Don't use modules simply to 'break up' your news article - modules are designed to bring your content to life, and if used properly they will. However, don't forget that ultimately you want your readers to read your story. Simply adding modules for the sake of it will make this harder and potentially cause users to leave without getting your full story</li>
				<li>Don't overuse the Quote module - the quote module is designed to highlight important text or quotes. Its ok to leave extensive quotes in either the body of your article or in a Rich Text module using simple quotation marks (as you would in a Word document for example). Using the module multiple times - particularly one after the other - can reduce the impact of the module</li>
			</ul>
		</div>
	</div>
</section><!-- faq -->
<section class="container" id="faq">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>FAQ</h2>
			<ol class="header-list">
				<li>
					<a href="#faq-creating">I'm creating a news item, but the relevant month doesn't yet exist in the CMS. What should I do?</a>
				</li>
				<li>
					<a href="#faq-image">I haven't got an image for my news item. Does it matter?</a>
				</li>
				<li>
					<a href="#faq-intro">Why shouldn't I add links to the Introduction field?</a>
				</li>
				<li>
					<a href="#faq-multiple">What's the point of linking to content multiple times?</a>
				</li>
				<li>
					<a href="#faq-cta">What kind of calls to action can I add?</a>
				</li>
				<li>
					<a href="#faq-edit">Can I go back and edit an article after it's been published?</a>
				</li>
				<li>
					<a href="#faq-publish">I want my news item to be published in the future. Is this possible?</a>
				</li>
				<li>
					<a href="#faq-body">I'm not sure about the Body field and adding modules. What should I do?</a>
				</li>
				<li>
					<a href="#faq-location">When I look at news on the website, I don't see all the articles. Why is this?</a>
				</li>
			</ol>
			<h5><a id="faq-creating" name="faq-creating"></a>1. I'm creating a news item, but the relevant month doesn't yet exist in the CMS. What should I do?</h5>
			<p>A. You don't need to do anything - but you're likely trying to create your item in the wrong place. Whenever you create a new news item, you should always create it by right clicking on the 'News' node in the content tree. The CMS will automatically create new 'buckets' for months or years if they don't exist and are required.</p>
			<h5><a id="faq-image" name="faq-image"></a>2. I haven't got an image for my news item. Does it matter?</h5>
			<p>A. You don't need to do anything - but you're likely trying to create your item in the wrong place. Whenever you create a new news item, you should always create it by right clicking on the 'News' node in the content tree. The CMS will automatically create new 'buckets' for months or years if they don't exist and are required.</p>
			<h5><a id="faq-intro" name="faq-intro"></a>3. Why shouldn't I add links to the Introduction field?</h5>
			<p>A. You can add links to this field if necessary. However, links naturally encourage users to follow them. If you have a link in your first two sentences, you increase the chances that users won't read your news item. Wherever possible, try and give users an opportunity to read your content and then explore relevant links.</p>
			<h5><a id="faq-multiple" name="faq-multiple"></a>4. What's the point of linking to content multiple times?</h5>
			<p>A. Its good practice to try and end a piece of content with a strong call to action. This way you encourage your users to continue browsing arup.com. By linking to a publication (for example) towards the start of your article, and again at the end, you're increasing the chances that someone will look at it. Try and use active CTAs such as 'Discover more' or 'Learn more' about. Also considering adding these links to a separate line at the end of your article.</p>
			<h5><a id="faq-cta" name="faq-cta"></a>5. What kind of calls to action can I add?</h5>
			<p>A. Not all news articles will have an obvious CTA, but most likely will. You can link to anything on arup.com, be it projects, perspective articles, publications or videos, or industry and service pages. The content you link to is that which is most relevant to your story and that will help your users continue to learn more about Arup.</p>
			<h5><a id="faq-edit" name="faq-edit"></a>6. Can I go back and edit an article after it's been published?</h5>
			<p>A. Yes. You can edit an article multiple times even after its been published. Each time you edit an article after publication, a new version will created. This means that if necessary an Administrator can revert back to a previous version if necessary.</p>
			<h5><a id="faq-cta" name="faq-cta"></a>7. I want my news item to be published in the future. Is this possible?</h5>
			<p>A. Yes. An article can be published at any point in time. You need to consider the following if you do want this:</p>
			<ul>
				<li>Ensure that you set field 'News date' to an appropriate value. You can set this to any appropriate date</li>
				<li>Ensure that you either don't submit your article for publication until you're ready, or you contact the person responsible for publishing your content to discuss this</li>
			</ul>
			<h5><a id="faq-body" name="faq-body"></a>8. I'm not sure about the Body field and adding modules. What should I do?</h5>
			<p>A. You do NOT have to add any content into the 'Body' field if you don't want. You can use modules to add all your copy if you prefer. However, using the 'Body' field is quicker. If you're not going to add any modules (i.e. images / carousels / quotes etc) its easiest to add content in this way.</p>
			<p>Alternatively, if you're only going to add a module half way through your article, it will be quicker to add all the content up to this point into the Body field.</p>
			<h5><a id="faq-location" name="faq-location"></a>9. When I look at news on the website, I don't see all the articles. Why is this?</h5>
			<p>A. arup.com uses 'GEOIP' to serve relevant content to users based on their location. By default, users will initially only see news articles relevant to their location. So for example, a user in the USA would only see news from America. You control this by defining what county(s) are assigned to your news item.</p>
			<p>You can use the filters to view any news item on the website, either by country or by selecting 'All countries' from the dropdown list.</p>
		</div>
	</div>
</section>