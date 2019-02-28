---
title: "Adding modules"
date: 2019-02-17T00:51:48Z
draft: false
lastmod: 2019-02-17
type: Creating modules
weight: "1"
menu:
  main:
    title: "Adding modules"
    parent: "creating-modules"
    weight: "-1100"
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
					<a href="#what">What are modules?</a>
				</li>
				<li>
					<a href="#creating">Creating modules in the CMS</a>
				</li>
				<li>
					<a href="#modules-ee">Modules in the Experience Editor</a>
					<ul class="sub-header-list">
						<li>
							<a href="#adding">Adding modules</a>
						</li>
						<li>
							<a href="#editing">Editing modules</a>
						</li>
						<li>
							<a href="#removing">Removing modules</a>
						</li>
					</ul>
				</li>
			</ol>
		</div>
		<div class="menu_section two">
			<ol class="header-list second" start="4">
				<li>
					<a href="#best-practice">Best practice</a>
				</li>
			</ol>
		</div>
	</div>
</section>
<section class="container" id="what">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>1. What are modules?</h2>
			<p>Modules - sometimes referred to as components - are elements of content that you can add to virtually any page on arup.com. They are pre-styled and perform defined tasks. For example, the 'Image' module is used for adding images to your content.</p>
			<p>arup.com has a range of modules (<a href="/">detailed here</a>) that you can utilise to bring your content to life. We have modules to give you the freedom to create unique experiences from your content. By using modules, you are free to layout your content in anyway that you see fit (within some broad parameters), ensuring that no two pages may ever look exactly the same.</p>
			<p>Modules are created using the <a href="/getting-started/content-experience-editor/#cms">Content Editor</a>, and added to your page using the Experience Editor.</p>
		</div>
	</div>
</section>
<section class="container" id="creating">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>2. Creating modules</h2>
			<p>All modules begin life in exactly the same way. The steps below layout how to create a module - using a news item as the example 'host' for the modules.</p>
			<p>The following details the steps to prepare for adding modules and adding a new module. It does not provide details on the individual modules you can use. You should consult the individual module guides for full details on those relevant to your article.</p>
			<ul>
				<li>Right click on your content item (for example News item) in the content tree window and choose '<b>Insert &gt; Local datasource folder</b>'</li>
				<li>You will be prompted to name the item you've created - you should leave the pre-defined label of 'Local content' and click 'OK'</li>
				<li>Once your 'Local content' folder is created, it will appear underneath your content item. You can now add modules to this folder</li>
				<li>To add a module, right click on the local content folder and choose '<b>Insert &gt; module name</b>'</li>
				<li>Give your module a suitable name and click OK</li>
			</ul>
			<p><b>NB - when you name your modules, its worthwhile considering the order you're going to add them in. If you need to come back to your article later on (or something happens to it) using a naming convention that helps you easily identify what's in the module - and the order you're intending to add them - makes it much easier to edit or restore an article in a worst case scenario.</b></p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/news/adding-localcontent.jpg"></div>
			<div class="halfbleed__detail">
				Fig 1: adding a local content folder to your project item. Right click on your project item, and choose 'Insert &gt; Local Datasource Folder'
			</div>
			<p>It is highly recommended that you create all the modules you wish to before you begin adding them in the Experience Editor.</p>
		</div>
	</div>
</section>
<section class="container" id="modules-ee">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>3. Modules in the Experience Editor</h2>
			<p>Each page type in the CMS contains a number of so called 'placeholders'. These are areas that have been specifically defined to allow the addition of certain modules.</p>
			<p><a id="adding" name="adding"></a>Adding modules to these placeholders is relatively simple, and is detailed below:</p>
			<ul>
				<li>When viewing the page you wish to edit within the Experience Editor, click the button marked 'Component' in the main navigation bar (circled in the screenshot below)</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/sitecore/adding-module-one.jpg"></div>
			<div class="halfbleed__detail">
				Fig 10: Steps one and two in adding a module via the Experience Editor
			</div>
			<ul>
				<li>After choosing the placeholder you wish to use, click 'Add here' and a popup window will launch. This contains each of the modules that you are able to add to this placeholder. Select the module you wish to add by:
					<ul>
						<li>Click on the appropriate module name</li>
						<li>Click 'Select'</li>
					</ul>
				</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/sitecore/adding-module-two.jpg"></div>
			<div class="halfbleed__detail">
				Fig 11: Selecting a module - in this example the 'Rich text' module is being selected
			</div>
			<ul>
				<li>After clicking 'select', you will be taken to a new screen - here you select the specific module you wish to add. <b>NB - you can ONLY select modules from this list that match your selection in the step above.</b> For example, if you selected 'Rich text', you must choose a 'Rich text' module you've created</li>
				<li>Choose the module you wish to add, and click 'Ok'</li>
				<li>After loading, you should see that your module has now been added to the page</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/sitecore/adding-module-three.jpg"></div>
			<div class="halfbleed__detail">
				Fig 12: Selecting the specific module you wish to add. You must choose the same type of module here as selected from the previous step. If you choose a different type, an error message will display and you will not be able to proceed
			</div>
			<p>You will need to repeat the steps above for each unique module that you want to add to your page.</p>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h5><a id="editing" name="editing"></a>Editing modules</h5>
			<p>It is possible to edit the content of individual modules via the Experience Editor.</p>
			<p>To edit the contents of a module, please follow the steps below:</p>
			<ul>
				<li>When viewing your page in the Experience Editor, browse to the module you wish to edit - as you hover over individual modules you should notice that they become 'active' and are highlighted with a blue edge. Click the module you wish to edit</li>
				<li>After clicking, you should notice a small menu appears (either above or below your module). Click the icon that looks like a post-it pinned to a letter (highlighted below) - this will launch a popup</li>
				<li>Within the new popup window, you will see all the fields related to the module you're editing. Simply update as appropriate and save the changes</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/sitecore/edit-module.jpg"></div>
			<div class="halfbleed__detail">
				Fig 13: Editing a module via the Experience Editor. Click the highlighted icon to edit your chosen module
			</div>
			<p><b>Please note:</b></p>
			<ol>
				<li>Not all modules will update immediately when you edit them via the Experience Editor. To check your change has gone into effect, it's best to save the page first</li>
				<li>Not all modules can be edited perfectly via the Experience Editor. Modules including the 'carousel' can be very difficult to edit via this method and you are advised to do so through the Content Editor instead</li>
				<li>Do not edit a module in BOTH the Experience Editor and CMS at the same time. This will result in changes you make getting overwritten and more than likely lead to frustration!</li>
			</ol>
			<h5><a id="removing" name="removing"></a>Removing modules</h5>
			<p>To remove a module:</p>
			<ul>
				<li>Browse your page and select the module you wish to remove by clicking anywhere on it</li>
				<li>From the menu that appears (either top or bottom of your module) click the red 'X' icon - you module should then disappear</li>
			</ul>
			<p><b>NB - removing a module from your page does NOT delete it. If you change your mind, you can re-add any module you've previously removed via the Experience Editor.</b></p>
		</div>
	</div>
</section>
<section class="container" id="best-practice">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>4. Best practice</h2>
			<p>Each of the module guides contained within this site contains best practice guidance on how to best utilise the module. The below details some general best practice for using modules on your pages.</p>
			<ul>
				<li><b>Think about your layout first</b> - before you add any modules, why not draw out your content on a piece of paper? Doing this will help you plan out your narrative, and identify the best modules for telling your story. Spending a bit of time doing this will save you time later on - as you'll know exactly which modules you want to use.</li>
				<li><b>Think about the order in which you create modules</b> - if you draw out your layout first, you can simply create all your modules in the Content Editor in one go. But if you don't, you might want to think about creating one and then adding it via the Experience Editor, then creating a second and adding this. This way you can visually see how things look. You'll likely save time not having to create or recreate additional modules if your first attempt doesn't work.</li>
				<li><b>Label your modules sensibly</b> - ideally, look to indicate the order you're adding the modules to your page in their name. This way, it helps you understand which modules are being used, and what order there in if you need to edit them - or if something goes wrong later on.</li>
				<li><b>Tell GMC Online if your not using a created module</b> - if you create modules, but then don't use them on your page, try and let GMC Online know so the team can delete them. This keeps the CMS organised and makes future editing easier.</li>
				<li><b>Don't use modules for the sake of it</b> - modules are there to bring your content to life. But, miusing them can harm your content. This online guide provoides advice on how to best use modules, but ultimately it's up to you to decide how you use them. Don't feel under pressure to add modules just to break up your content, and only use modules such as the Image module or Text Image Split if they help tell your story.</li>
			</ul>
		</div>
	</div>
</section>
<style>
li.previous {
	display: none!important;
}
</style>
