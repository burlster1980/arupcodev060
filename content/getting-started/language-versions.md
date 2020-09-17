---
title: "Adding language versions"
date: 2019-02-17T11:43:22Z
lastmod: 2020-08-18
draft: false
type: Getting started
weight: "6"
menu:
  main:
    title: "Language versions"
    parent: "getting-started"
    weight: "-200"
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
					<a href="#what">What are language versions?</a>
				</li>
				<li>
					<a href="#creating">Creating new language versions</a>
					<ul class="sub-header-list">
						<li>
							<a href="#documents">Adding to documents</a>
						</li>
						<li>
							<a href="#modules">Adding to modules</a>
						</li>
					</ul>
				</li>
			</ol>
		</div>
		<div class="menu_section two">
			<ol class="header-list second" start="3">
				<li>
					<a href="#experience">The Experience Editor</a>
				</li>
				<li>
					<a href="#faq">FAQ</a>
				</li>
			</ol>
		</div>
	</div>
</section>
<section class="container" id="what">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>1. What are language versions?</h2>
			<p>Sitecore supports multiple different language versions for pages. By default, all pages should be created in English - when you add a page it's important that you do so using English. However, where language versions are added to pages, users are able to select that version of the page - and will be presented with an alternative version in the chosen language. </P><P>The screenshot below shows an example of a page that has been translated into both English and Japanese (<a href="https://www.arup.com/projects/singapore-sports-hub" target="_blank">See the example</a>). You can tell a page has a translation available by the presence of the button in the top right hand corner of the banner image. Clicking this will highlight the versions available.</p><P>Notice how after switching to the Japanese version, the URL changes - to include reference to the language in question.</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/languages/english-version.jpg"></div>
			<div class="halfbleed__detail">
				Fig 1: English (default) version of a page
			</div>
			<p>&nbsp;</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/languages/japanese-version.jpg"></div>
			<div class="halfbleed__detail">
				Fig 2: Japanese version of the same page in fig 1 above. Notice that url now contains reference to the language version 'ja-jp'
			</div>
			<p>At present, it is possible to add the following language versions to a page:</p>
			<ul>
				<li>Chinese (simplified and traditional)</li>
				<li>Danish</li>
				<li>Dutch</li>
				<li>French Canadian</li>
				<li>German</li>
				<li>Japanese</li>
				<li>Korean</li>
				<li>Polish</li>
				<li>Portuguese</li>
				<li>Romanian</li>
				<li>Russian</li>
				<li>Spanish</li>
				<li>Turkish</li>
				<li>Vietnamese</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>2. Creating new language versions</h2>
			<p>When you create a page and wish to add an alternative language version you will need to take four key steps:</p>
			<ol>
				<li>Create the document (i.e. a project) in the CMS - entering content in English</li>
				<li>Create and add all necessary modules to your page - entering content in English</li>
				<li>Create the language version of your project</li>
				<li>Create the language version of each of your modules</li>
			</ol>
			<p>This guide outlines how to complete steps 3 and 4 and assumes you've already created your page and modules in English. For advice on this, please <a href="/">browse the online guide</a>.</p>
			<p>This guide uses the example of adding a language to a project already created in English.</p>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h3><a id="documents" name="documents"></a>Adding language versions to a document</h3>
			<p>Once you have created your project (or other content type) in English, please following the following steps:</p>
			<ul>
				<li>Browse to your content item in the CMS - click on your content item so that it is selected and the content is editable</li>
				<li>Towards the top right of the screen you will see an option for languages - by default it will have 'English' highlighted</li>
				<li>Click this - and a drop down menu of available languages will appear - click on the language you wish to add</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/languages/language-selection.jpg"></div>
			<div class="halfbleed__detail">
				Fig 3: Click 'English' and choose your language from the dropdown menu
			</div>
			<ul>
				<li>After selecting your language, the page will re-load. You will then see a warning at the top of the page that 'No version exists in the current language. You need to click 'Add a new version'</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/languages/add-version.jpg"></div>
			<div class="halfbleed__detail">
				Fig 4: Click 'Add a new version' to create your new language version
			</div>
			<ul>
				<li>After clicking 'Add a new version' the page will reload in the CMS, and you will now be able to edit the various fields. The English version will likely be in place - you need to replace each field that contains English with the relevant translation</li>
				<li>You do NOT need to re-add content such as:
					<ul>
						<li>Image</li>
						<li>Related content</li>
						<li>Location</li>
						<li>Contact</li>
					</ul>
				</li>
				<li>You do need to re-add content including:
					<ul>
						<li>Title</li>
						<li>Name</li>
						<li>Summary</li>
						<li>Metadata - it is vital that you add a new 'meta title' to prevent duplication</li>
					</ul>
				</li>
				<li>Save the document once you have edited all the relevant fields</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/languages/selected-language.jpg"></div>
			<div class="halfbleed__detail">
				Fig 5: The new version has been created and the language (Spanish) has replaced the default English
			</div>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h3><a id="modules" name="modules"></a>Adding a language version to a module</h3>
			<p>The process for adding language versions to modules is identical to that used for documents.</p>
			<p>You will need to:</p>
			<ul>
				<li>Select the module you wish to translate</li>
				<li>Click the language menu (as shown above) and choose your language version</li>
				<li>Click 'Add a new version' once the module has reloaded</li>
				<li>Add all relevant content in your new language</li>
				<li>Save the module and repeat for each additional module you wish to translate</li>
			</ul>
		</div>
	</div>
</section>
<section class="container" id="experience">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>3. The Experience Editor</h2>
			<p>Once you have created language versions of your page and relevant modules, please note that you will then have to rebuild the page via the Experience Editor - this is the point at which you add the modules to your page and select their ordering.</p>
			<p>Please note - it is very important that you launch the Experience Editor from your new language version - for example, above we have created a Spanish version of the project. To edit this version in the Experience Editor, it must be selected - then click 'Experience Editor' as shown below.</p>
			<p>When in either the CMS or the Experience Editor you can swap between the language versions i.e. English and your new version at any time.</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/languages/selected-language.jpg"></div>
			<div class="halfbleed__detail">
				Fig 6: You must re-add the modules to your new language version. Ensure it's selected (in this example 'Spanish') and then launch the Experience Editor
			</div>
		</div>
	</div>
</section>
<section class="container" id="faq">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>FAQ</h2>
			<ol class="header-list">
				<li>
					<a href="#faq-multiple">Can I add multiple languages to a single document or module?</a>
				</li>
				<li>
					<a href="#faq-why">Why do I have to rebuild the page in the Experience Editor?</a>
				</li>
				<li>
					<a href="#faq-modules">Do I have to translate and re-add all the modules from my English version?</a>
				</li>
				<li>
					<a href="#faq-english">Why do I have to create an English version - my audience isnt located in the UK?</a>
				</li>
			</ol>
			<h3><a id="faq-multiple" name="faq-multiple"></a>1. Can I add multiple languages to a single document or module?</h3>
			<p>A. Yes. Any page can have multiple different language versions available. You must simply repeat the steps above for each individual language that you wish to add.</p>
			<h3><a id="faq-why" name="faq-why"></a>2. Why do I have to rebuild the page in the Experience Editor?</h3>
			<p>A. Each individual language represents a version of the page. Versions allow you to completely recreate a page in a different way. Because of this, it is necessary to completely rebuild the new language version.</p>
			<h3><a id="faq-modules" name="faq-modules"></a>3. Do I have to translate and re-add all the modules from my English version?</h3>
			<p>No. You can add as many or as few modules as you wish to your new language version. You can also create modules just for your language version - just remember that you need to <i>create</i> them in English first. NB - this doesnt mean that you have to add English content, if the module will <i>only</i> be used on the foreign language version.</p>
			<h3><a id="faq-english" name="faq-english"></a>4. Why do I have to create an English version - my audience isn't located in the UK?</h3>
			<p>By default, arup.com is designed to serve content in English. This means that the first page a user sees will be in English. At present, the site is not able to serve content in a local language by default. It is therefore necessary to ensure that every page is first served in English to ensure consistency.</p>
		</div>
	</div>
</section>