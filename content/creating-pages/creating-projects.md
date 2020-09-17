---
title: "Creating a project"
date: 2019-02-16T17:42:27Z
lastmod: 2019-04-01
draft: false
type: Creating new pages
weight: "6"
menu:
  main:
    title: "Creating projects"
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
					<a href="#where">Where are projects?</a>
					<ul class="sub-header-list">
						<li>
							<a href="#website">Projects on the website</a>
						</li>
						<li>
							<a href="#cms">Projects in the CMS</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#creating">Creating a project item</a>
					<ul class="sub-header-list">
						<li>
							<a href="#adding">Adding content to your project item</a>
						</li>
						<li>
							<a href="#completing">Completing your project item</a>
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
				</li><!--<li><a href="#faq">FAQ</a></li>-->
			</ol>
		</div>
	</div>
</section>
<section class="container" id="where">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>1. Where are projects?</h2>
			<h3>Projects on the website</h3>
			<p>When viewing the website, projects are found under the URL <a href="https://www.arup.com/projects" target="_blank">www.arup.com/projects</a></p>
			<h3><a id="cms" name="cms"></a>Projects within the CMS</h3>
			<p></p>
			<p>When viewing the CMS, projects are found at <b>Sitecore &gt; Content &gt; Arup &gt; Home &gt; Projects</b></p>
			<p>Project items are 'bucketable' and stored in Sitecore 'Buckets'. Buckets are essentially Sitecore terminology for folders. They allow the CMS to store content in a folder structure, making things easier to find. A bucket's name does not appear in the URL of a page.</p>
			<p></p>
			<p>Project articles are stored in the following way:</p>
			<p><b>Projects &gt; Letter &gt; name of project</b></p>
			<p>This means that when you create a new Project item, it will be stored in 'letter' folder corresponding to the first letter of the project's name. For example, if you created a project item called 'My new project', its location would be:</p>
			<p><b>Projects &gt; M &gt; My new project</b></p>
		</div>
	</div>
</section>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>2. Creating a project item</h2>
			<p>To create a project article, you will need to:</p>
			<ul>
				<li>Right click on 'Projects' and choose '<b>Insert &gt; Project</b>'</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/projects/create-project.jpg"></div>
			<div class="halfbleed__detail">
				Fig 1: Creating a new Project item. You need to right click on the 'Projects' node, and choose 'Insert &gt; Project'
			</div>
			<ul>
				<li>Enter the name of your project item that suitably describes the content (NB - this name will form the URL of the article for example if you called your item 'My project item' the url would be arup.com/projects/my-project-item) and click OK</li>
				<li>The screen will then reload, and you've successfully created your project item</li>
			</ul>
			<p><b>NB - you should ensure that you use the name of your project when labelling your project item. This is important from a site search and SEO perspective.</b></p>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h3><a id="adding" name="adding"></a>Adding content to a project item</h3>
			<p>Projects contain a mixture of 'form' content and modules. Essentially, the key data about your project item will be added to the Project item you've just created, whilst the bulk of the actual article content will be added via modules. This guide details the former - describing what fields you need to complete and what they do.</p>
			<p>Each of the headings below represents one of the expandable panels of the project document. The fields relevant to each are detailed.</p>
			<p>For the purposes of this example, the text added will relate to a project about the Forth Bridge.</p>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Article Content</b></p>
			<p><strong>&#42;</strong>fields marked with an asterix are required and must be completed</p>
			<ul>
				<li><b>Site search description&#42;</b> - Please add a maximum of one to two sentences that give an overview of your project content. This text will be displayed within the search results for your project. For example 'Discover how Arup's engineers rebuilt the Forth Bridge in record time - whilst trains continued to run on time every day.'</li>
				<li><b>Name&#42;</b> - This is the name of your project - for example 'Forth Crossing redevelopment'. By default, it will contain the text you added during the creation of your project. You can edit this text without fear of changing the URL of your project or changing the physical name of the project within the CMS.</li>
				<li><b>Title&#42;</b> - Enter a title for your project. This will generally be a descriptive heading giving insight into what the project article is about. A handy approach to 'titles' is to ask a question - that your content will answer. For example, 'How do you redesign and rebuild the Forth Crossing without stopping the trains?'</li>
				<li><b>Comma separated search terms</b> - Enter any specific key words, or combination of key words that relate to your project. Words added here will influence the search results provided on arup.com (Note - this does not include suggestive search). You should think carefully about the words you enter, and limit entries to be between 3 and 5 words or key phrases</li>
				<li><b>Video</b> - Please do not use this field without consulting with GMC online first. Video used in this way must conform to various standards including an absence of sound and the ability to 'loop'</li>
				<li><b>Summary shown in listings&#42;</b> - You should enter the introduction for your project in this field. Your introduction should give the user an overview of what your content is about and what they will learn by reading the content. Please consider starting your text with a heading (use 'H2' formatting)</li>
				<li>
					<b>Image&#42;</b> - Please enter a suitable image for your project. The image should be high quality and should be at least 2000px wide by 1125px BEFORE you carry out any resizing of the image. See the <a href="/getting-started/image-preparation/">image guide for more information</a> on this if necessary
				</li>
				<li><b>Version image</b> - This is field allows you to show an alternative image to the main 'Image' (above). You would only ever use this if you wish to show a different image for a translated version of your content. You would only complete this field on the translated version (i.e. you do not touch it on the default English version). This will ensure that your image is shown specifically to your language audience, but no one else</li>
				<li><b>Date&#42;</b> - enter a publication date for your project in this field</li>
			</ul>
			<p>The screenshot below indicates where each of the above fields are shown on a published project item.</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/projects/initial-project-content.jpg"></div>
			<div class="halfbleed__detail">
				Fig 2: details of the project fields contained within 'Article content' section and where they display
			</div>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Campaign</b></p>
			<p>You can ignore this field. It is primarily for categorising and reporting on global campaigns - no data will be revealed on your webpage.</p>
			<p>If you are working on a campaign and wish to make use of this, please contact <a href="mailto:steve.burleigh@arup.com">steve.burleigh@arup.com</a> in the first instance.</p>
			<p><b>Location</b></p>
			<p>You need to indicate the location of your project and the office(s) that worked on it.</p>
			<p><b>&#42;</b>fields marked with an asterix are required and must be completed</p>
			<ul>
				<li>
					<b>Select office&#42;</b> - Please select the relevant Arup offices that worked on your project. You can select as many offices as is required. To do this
					<ul>
						<li>Click 'edit'</li>
						<li>In the popup that appears, browse to the relevant country</li>
						<li>Click the black 'expansion' arrow to reveal the local content folder</li>
						<li>Click the black 'expansion' arrow next to the local content folder to reveal the 'Offices' node - then click the black 'expansion' arrow again to reveal the office names for the country you're looking at</li>
						<li>Double click the office name you wish to select so that it appears in the right hand column</li>
					</ul>
					<p><b>NB - at present details of the office will not be shown on the website. However, this data will be used to power related content in the future, so it's important that you complete this field</b></p>
				</li>
				<li>Location - please enter the location of your project - in this example, you might enter 'Edinburgh' as this is the nearest city / town to the project's location</li>
				<li><b>Country&#42;</b> - please select the country the project is <i>located</i> in.</li>
			</ul>
			<p><b>NB - Country should be used to indicate the project's location - NOT the office location of the team that developed the project. This field powers the project filters where users search by physical project location.</b></p>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">	
			<p><b>Recommend content</b></p>
			<p>You can ignore this field</p>
			<p><b>Related articles</b></p>
			<p>You can select a range of content related to your project. This includes:</p>
			<ul>
				<li>Projects</li>
				<li>Perspectives</li>
				<li>Industries</li>
				<li>Services</li>
			</ul>
			<p>Wherever possible, you should look to associate related content to your project - as this helps to retain users on arup.com.</p>
			<p>Fields marked with <b>&#42;</b> MUST be completed</p>
			<p><b>Related projects&#42;</b></p>
			<p>To select related projects:</p>
			<ul>
				<li>Click the 'Edit' button - this will launch a popup window</li>
				<li>Browse the content tree (in the left hand column) and locate the first article you wish to select</li>
				<li>Double click the article - its name will then appear in the right hand column</li>
				<li>Repeat this step 2 more times</li>
			</ul>
			<p>You should seek to always select 3 projects.</p>
			<p><b>NB - if you do not select related projects, but do select related industries, then projects that match the industries you select will automatically appear once the page is published.</b></p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/projects/select-related-content.jpg"></div>
			<div class="halfbleed__detail">
				Fig 3: selecting related content step 1 - click 'Edit' to select articles
			</div>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/projects/selecting-articles.jpg"></div>
			<div class="halfbleed__detail">
				Fig 4: Selecting related articles. Double click an article in the left-hand column to select it. Double click an article in the righthand column to remove it. Click 'Ok' once you're happy
			</div>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Linking to more similar projects&#42;</b></p>
			<p>After selecting your projects, you can choose to link to a single area of expertise. This will create a link that follows the related projects allowing the user to see more.</p>
			<ul>
				<li>Click 'edit'</li>
				<li>From the resulting popup, choose the most appropriate industry or service to link to - double click your selecting</li>
				<li>It will then appear in the righthand column - click 'Ok'</li>
			</ul>
			<p><b>Related perspectives</b></p>
			<p>To select related perspectives:</p>
			<ul>
				<li>Click the 'Edit' button - this will launch a popup window</li>
				<li>Browse the content tree (in the left-hand column) and locate the first article you wish to select</li>
				<li>Double click the article - its name will then appear in the righthand column</li>
				<li>Repeat this step 2 more times</li>
			</ul>
			<p>If you select related perspectives, please try to always select two.</p>
			<p><b>Related industries and services</b></p>
			<p>Neither 'Related industries' or 'Related services' are required fields. However, you should always select at least one or the other.</p>
			<p><i>Related industries</i></p>
			<p>In a similar fashion to projects or perspectives, please select any industry(s) related to your content.</p>
			<p><b>NB - if you have not selected any related projects, but you do select related industries, then these industries will be used to select related projects on your page once it is published.</b></p>
			<p><i>Related services</i></p>
			<p>In a similar fashion to projects or perspectives, please select any service(s) related to your content.</p>
			<p>Please select at least 3 related services or industries wherever possible.</p>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Related people</b></p>
			<p>This section allows you to enter additional details about the project – such as client information.</p>
			<P><b>NB - you do not add the 'main' project contact here. You will do this in the 'Contacts' section below</b></P>
			<p>Fields marked with <b>&#42;</b> should be completed unless impossible</p>
			<ul>
				<li>
					<b>Client&#42;</b> – Here you can enter the name(s) of the project’s client(s). You should simply enter the name of each client on a separate line within the editor. NB – please follow the steps outlined below to ensure consistent spacing:
					<ul>
						<li>When in the Rich Text Editor, click the ‘HTML’ option (bottom left of editor window) to reveal the content’s HTML</li>
						<li>Delete all and any references to either &lt; p &gt; or &lt; /p &gt;</li>
						<li>Place &lt; br/ &gt; after each client you’ve added into the editor – except the final one (you won’t do this if you’ve only entered one client)</li>
					</ul>
				</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/projects/adding-clients.jpg"></div>
			<div class="halfbleed__detail">
				Fig 5: Adding information about multiple clients - NB if you're only adding a single client you should simply remove any text present other than the name of your client
			</div>
			<ul>
				<li><b>Joint Venture Partners</b> – You can enter the name(s) of any joint venture partners Arup worked with on your project. Again, if you enter multiple partners, follow the steps outlined above to remove reference to &lt; p &gt; and &lt; /p &gt;</li>
				<li><b>Partners and Collaborators</b> – You can enter the name(s) of any partners or collaborators Arup worked with on your project. Again, if you enter multiple partners, follow the steps outlined above to remove reference to &lt; p &gt; and &lt; /p &gt;</li>
				<li><b>Associated people</b> – Please do NOT use this field</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/projects/clients.jpg"></div>
			<div class="halfbleed__detail">
				Fig 6: Example of how 'related people' information displays when complete
			</div>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Contacts</b></p>
			<p>Here you can select the ‘key’ contact to associate with your project. This contact will be displayed within the project’s ‘utility bar’ – the bar that follows the user down the page as they scroll. You should always look to select a contact.</p>
			<p>To select your contact:</p>
			<ul>
				<li>Click the ‘Edit’ button to launch the popup</li>
				<li>Within the popup, browse the content tree in the left-hand column to find your contact (contacts are stored in alphabetical order – based on the contact’s first name. I.e. ‘John Smith’ would be found in the 'J' folder)</li>
				<li>Double click your chosen contact – their name will then appear in the righthand colum</li>
				<li>Click ‘Ok’</li>
			</ul>
			<p>You should only select a single contact.</p>
			<p><b>Contact roles</b></p>
			<p><a href="/creating-pages/creating-profiles/">Profiles</a> can only contain a single job title. Many contacts have multiple titles depending on the context of their work. The 'Contact Role Override' field is designed to deal with this. You can select a contact's specific job title here so that it relates to your project. For example, Fiona Cousins has a job title (on her profile) of Director. If she's the contact for a Digital project, you may want her title too be 'Americas Digital Leader'. Use this field to achieve this.</p>
			<uL>
				<li>Browse the list to find the folder your profile's name begins with (i.e. 'F' for Fiona Cousins)</li>
				<lI>Click the black triangle next to the person's name to expand out their list of job titles</lI>
				<li>Double click the relevant job title - it will then appear in the 'Selected' columm</li>
			</uL>
			<p><b>NB:</b> Most contacts do not have 'roles' created. To use this field, the role will have to have been created previously. See the <a href="/creating-pages/creating-profiles/#job-titles">Profile guide</a> for information on how to do this.</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/profiles/adding-role.jpg"></div>
			<div class="halfbleed__detail">
				Fig 7: Adding a role to a project 
			</div>
			<p><b>Project facts</b></p>
			<p>Project facts are a great way to communicate some key snippets of information about your project. Ideally this should be built around numbers and might include things like:</p>
			<ul>
				<li>The number of metres or feet of a tunnel</li>
				<li>The volume of a material moved or required for the project</li>
				<li>The number of people involved</li>
				<li>Percentage increases or decreases</li>
			</ul>
			<p>Wherever possible, you should try to include 3 project facts. To add a fact:</p>
			<ul>
				<li><b>Fact Value 1</b> – here you should enter the value of your fact for example '10,000'</li>
				<li><b>Fact detail 1</b> – here you can provide a few words of context for your fact value – for example 'Railway track re-laid'</li>
				<li><b>Fact 1 Unit</b> – add in any relevant units of measurement here - for example 'ft' or 'km'. Leave blank if your fact does not have a unit of measurement associated with it</li>
			</ul>
			<p>Repeat the steps above for Fact 2 and Fact 3</p>
			<p><b>NB Please note – if you have large fact values for example '100,000' or your fact detail is a long sentence, you may want to consider using less then 3 facts. This will improve how the information displays on the webpage.</b></p>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">	
			<p><b>Job number</b></p>
			<p>Alongside the Project facts, you will also see a field for 'Job number'. This relates to the internal job number assigned to a project. When adding a new project to arup.com, you should ensure that you include the project's job number here. You can enter multiple job numbers if necessary, with each separated by a semi colon or comma.</p>
			<p>This information is NOT shown on the website, but is captured for use by the internal Projects team. They use this information to effectively link the internal project database to relevant content on the website. Please ensure that you enter this information for any new projects you add.</p>
			<p></p>
			<p><b>Project options</b></p>
			<p>You do not need to touch this section. This relates to the display of ‘Hero’ projects (seen at the top of www.arup.com/projects). If you think your project warrants ‘Hero’ status, please contact <a href="mailto:emma.kennedy@arup.com">GMC Online</a> to discuss.</p>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Facebook Open Graph</b></p>
			<p>These fields are used to display content when your article is shared via social platforms.</p>
			<p><b>&#42;</b>fields marked with an asterix are required and must be completed</p>
			<ul>
				<li><b>Open Graph Title&#42;</b> - Please enter a suitable title. Generally, you can re-use the article title entered above</li>
				<li><b>Open Graph Description&#42;</b> - Please enter a brief description of your content. This should summarise the content of your article in a maximum of two sentences.</li>
				<li>Open Graph Image - Please resize your main article image to a width of 800px and add to this field</li>
			</ul>
			<p><b>Metadata</b></p>
			<p>This information is used to aid the discovery of your article via search engines. Adding it is vital in helping people to find the article and ensuring that it performs to the best of its ability.</p>
			<p><b>&#42;</b>fields marked with an asterix are required and must be completed</p>
			<ul>
				<li><b>Browser title&#42;</b> - Should you re-enter the title of your article to this field. If your title is particularly long, please consider drafting a shorter version for this field.</li>
				<li><b>SEO meta description&#42;</b> - Please enter a two to three sentence summary of your article. You can consider re-using the introduction copy you've used above</li>
				<li>Meta keywords - keywords have been used by search engines in the past to help users locate content. However, keywords are no longer of high relevance for search engines such as Google and you do not need to add these to aid search performance.</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h3><a id="completing" name="completing"></a>Completing your project article</h3>
			<p>Once you have added the data detailed above, you should save your document. If you are intending to add modules to your article, you will need to follow the steps outlined below. If your article is complete without modules, you can now submit it for publication or preview it using the method outlined below.</p>
			<h3><a id="modules" name="modules"></a>Adding modules to your project item</h3>
			<p>The following details the steps to prepare for adding modules and adding a new module. It does not provide details on the individual modules you can use. You should consult the individual module guides for full details on those relevant to your article.</p>
			<ul>
				<li>Right click on your project item in the content tree window and choose '<b>Insert &gt; Local datasource folder</b>'</li>
				<li>You will be prompted to name the item you've created - you should leave the pre-defined label of 'Local content' and click 'OK'</li>
				<li>Once your 'Local content' folder is created, it will appear underneath your project item. You can now add modules to this folder</li>
				<li>To add a module, right click on the local content folder and choose '<b>Insert &gt; module name</b>'</li>
				<li>Give your module a suitable name and click OK</li>
			</ul>
			<p><b>NB - when you name your modules, its worthwhile considering the order you're going to add them in. If you need to come back to your article later on (or something happens to it) using a naming convention that helps you easily identify what's in the module - and the order you're intending to add them - makes it much easier to edit or restore an article in a worst case scenario.</b></p>
			<P><a href=/creating-modules">Find out more about creating modules</a></P>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/news/adding-localcontent.jpg"></div>
			<div class="halfbleed__detail">
				Fig 8: adding a local content folder to your project item. Right click on your project item, and choose 'Insert &gt; Local Datasource Folder'
			</div>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h3><a id="language" name="language"></a>Adding an alternative language version</h3>
			<p>Sitecore gives you the ability to add multiple language versions to your content. A full guide to language versions has been provided, but you should be aware that:</p>
			<ul>
				<li>An article MUST be created in English first</li>
				<li>Any modules that have been added to your project item will also require translated versions be created</li>
			</ul>
			<p><a href="/getting-started/language-versions/">Find out more about languages in Sitecore</a></p>
			<h3><a id="workflow" name="workflow"></a>Workflow</h3>
			<p>Project articles are covered by the CMS' workflow. This means that only certain staff are able to publish content. Generally, this will be a member of the GMC Online team - though some regions including Australasia and the Far East also have a member of staff with publishing rights. You can <a href="/getting-started/workflow/">learn more about the workflow via the online guide</a></p>
		</div>
	</div>
</section>
<section class="container" id="best-practice">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>1. Best practice tips</h2>
			<p>On this page you will find an <a href="/best-practice/exemplar-project/">example of a 'best practice' project</a>. This section provides some guidance on <i>why</i> the project is an example of best practice.</p>
			<h3>Content structure</h3>
			<p>All content on arup.com needs to have a purpose. The ultimate purpose of all projects on the website is to convey Arup's expertise and ability to deliver high quality solutions. To help you achieve this, GMC Online as developed a basic 'template' that all projects should conform to. Any project you add to arup.com should be structed around the basic ideas detailed below.</p>
			<p>You do NOT need to use the specific headings detailed below, but your content should be built around these headings - with the headings created in your own words for each specific project.</p>
		</div>
	</div>
</section>
<section class="container container--sm accordion-container">
	<div class="accordion">
		<div class="accordion__section">
			<p class="accordion__title intro intro--bold">Introduction<span class="accordion__marker icon icon-arrow" data-grunticon-embed=""></span></p>
			<div class="accordion__content">
				<p><b>Introduction</b></p>
				<p>Your project should start with an introduction. This should set the scene at a high level, giving the reader a basic understanding of what they're going to find. The introduction shouldn't include significant technical detail of the project but should instead look to esablish an overview of why it was significant, the skills that Arup brought to the project and also the results that were achieved.</p>
				<p>Your introduction should be no more than two to three paragraphs.</p>
			</div>
		</div>
		<div class="accordion__section">
			<p class="accordion__title intro intro--bold">What was the problem? <span class="accordion__marker icon icon-arrow" data-grunticon-embed=""></span></p>
			<div class="accordion__content">
				<p><b>What was the problem?</b></p>
				<p>The next section of your project should provide more detail on the challenge the project presented. It should seek to cover areas such as:</p>
				<ul>
					<li>What was the challenge the client needed to overcome?</li>
					<li>Were there any significant environmental or engineering challenges involved?</li>
					<li>Would completing the project have a significant impact on lives - either positive (i.e. improving commuting times) or negative (i.e. the risk of negative economic impacts if not completed in a specific way or to certain deadlines etc)</li>
					<li>Was it a challenge that had rarely or never been overcome before?</li>
				</ul>
			</div>
		</div>
		<div class="accordion__section">
			<p class="accordion__title intro intro--bold">What did Arup's expertise bring and why were we hired?<span class="accordion__marker icon icon-arrow" data-grunticon-embed=""></span></p>
			<div class="accordion__content">
				<p><b>What did Arup's expertise bring and why was Arup hired?</b></p>
				<p>After outlining the problem, you should then highlight how Arup's expertise helped overcome the problem. Things you might highlight include:</p>
				<ul>
					<li>Arup's specific skills in an area of engineering</li>
					<li>Previous Arup work - making us the correct partner to work with</li>
					<li>The specific value value that Arup brought to the project</li>
				</ul>
			</div>
		</div>
		<div class="accordion__section">
			<p class="accordion__title intro intro--bold">What was the outcome?<span class="accordion__marker icon icon-arrow" data-grunticon-embed=""></span></p>
			<div class="accordion__content">
				<p><b>What was the outcome?</b></p>
				<p>Next, provide some detail on what the outcome of the project was. You should seek to highlight key things such as:</p>
				<ul>
					<li>Was the project delivered on time and on budget?</li>
					<li>Benefits to the environment or local community</li>
					<li>Were there any 'firsts' in the project i.e. did Arup have to deliver a unique solution to so successfully deliver the project?</li>
					<li>Was the client happy? Including 'success' quotes from the client in this section works well for highlighting this</li>
				</ul>
			</div>
		</div>
		<div class="accordion__section">
			<p class="accordion__title intro intro--bold">Call to action (CTA)<span class="accordion__marker icon icon-arrow" data-grunticon-embed=""></span></p>
			<div class="accordion__content">
				<p><b>Call to action</b></p>
				<p>The final section of your project is to provide your user with a call to action (CTA) that aims to keep them engaged with arup.com. There are three potential options you should consider:</p>
				<ol class="header-list">
					<li>Explore related projects - you could consider adding a '<a href="/creating-modules/recommended-content/">Recommended content</a>' module here to highlight specific related projects
					</li>
					<li>Contact an expert - you could consider adding a '<a href="/creating-modules/contacts/">contact us</a>' module with the aim of highlighting the ability to contact the expert behind the project
					</li>
					<li>Explore our expertise - you could consider pointing the user towards an expertise page(s) where they can learn more about Arup's expertise in the field(s) the project relates to
						<p>When adding a CTA its worth considering the following. Whether you use these options will depend on your approach.</p>
						<ul>
							<li>Use a heading at the end of your content - for example 'Learn more about our expertise' or 'Discover similar projects'</li>
							<li>Add a brief sentence or two before your module - this helps give context and also helps make the CTA 'fit' within your content rather than look like an afterthought</li>
						</ul>
					</li>
				</ol>
			</div>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h3>Content design</h3>
			<p>When building your project content in the CMS, you should bare the following in mind:</p>
			<ul class="featureList">
				<li class="tick">Do use headings - break up your project into clear headings that highlight particular areas - for example 'The challenge' or 'Arup's expertise'. Use the template headings above as minimum headings if necessary - remember to re-word them in the best way for your project</li>
				<li class="tick">Do try and start your project with a heading - adding a heading to your introduction is useful way of starting your project and capturing users' attention</li>
				<li class="cross">Don't use modules for the sake of it - you don't HAVE to add lots of different modules. Only use modules that work with your content - don't add them for the sake of it</li>
				<li class="cross">Don't display key information within '<a href="/creating-modules/images/">Image</a>' modules - if information is vital, it's best to display it clearly and simply in 'Rich text' modules
				</li>
				<li class="cross">Don't hide detailed images behind text overlays - if you want to use text overlaid on an 'Image', only use images that work as 'background' images i.e. where the information conveyed in the image is more decorative than explanatory</li>
			</ul>
		</div>
	</div>
</section>
