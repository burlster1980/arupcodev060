---
title: "Creating profiles"
date: 2019-02-17T15:49:27Z
lastmod: 2019-04-01
draft: false
type: Creating new pages
weight: "4"
menu:
  main:
    title: "Creating profiles"
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
					<a href="#what">What is a profile?</a>
				</li>
				<li>
					<a href="#where">Where are profiles?</a>
					<ul class="sub-header-list">
						<li>
							<a href="#website">Profiles on the website</a>
						</li>
						<li>
							<a href="#previewing">Profiles in the CMS</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#creating">Creating a profile</a>
					<ul class="sub-header-list">
						<li>
							<a href="#adding">Adding content to your profile</a>
						</li>
						<li>
							<a href="#completing">Completing your profile</a>
						</li>
						<li>
							<a href="#related">Adding related content</a>
						</li>
						<li>
							<a href="#links">Adding links</a>
						</li>
						<li>
							<a href="#language">Alternative language versions</a>
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
			<h2>1. What is a profile?</h2>
			<p>Profiles are used for displaying information about individual members of staff at Arup. They include key contact information and details about that person's experience, interests and work they've carried at Arup.</p>
			<p>ANY member of staff at Arup can have a profile on the website - regardless of how junior (or senior!) provided there is a need for this profile to exist. These needs will be discussed throughout this page.</p>
		</div>
	</div>
</section>
<section class="container" id="where">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>2. Where are profiles?</h2>
			<h5>Profiles on the website</h5>
			<p>Profiles are located under the URL <a href="https://www.arup.com/our-firm/paolo-cresci" target="_blank">www.arup.com/our-firm/profile-name</a></p>
			<p>At the time of writing, there is no one page where a user can see all staff members. Profiles will be revealed to users in one of three ways:</p>
			<ol>
				<li>By searching Google / Bing etc for a staff member's name and clicking a specific result</li>
				<li>By searching for a staff member's name on arup.com</li>
				<li>By clicking a link to a profile within content (for example the utility bar)</li>
			</ol>
			<h5>Profiles within the CMS</h5>
			<p>Profiles are 'bucketable' and stored in Sitecore 'Buckets'. Buckets are essentially Sitecore terminology for folders. They allow the CMS to store content in a folder structure, making things easier to find. A bucket's name does not appear in the URL of a page.</p>
			<p>Profiles are stored in the following way:</p>
			<p><b>Our firm &gt; Letter (i.e. 'A') &gt; Name of profile</b></p>
			<p>This means that when you create a new Profile item, it will be stored in letter 'bucket' corresponding to the first letter of the profilee's name. For example, a profile called 'Steve Burleigh' would be stored as follows:</p>
			<p><b>Our firm &gt; S &gt; Steve Burleigh</b></p>
		</div>
	</div>
</section>
<section class="container" id="create">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>3. Creating a profile</h2>
			<p>To create a news article, you will need to:</p>
			<ul>
				<li>Right click on 'Our firm' and choose 'Insert &gt; Person profile'</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/profiles/create-profile.jpg"></div>
			<div class="halfbleed__detail">
				Fig1: Creating a new Profile item. You need to right click on the 'Our firm' node, and choose 'Insert &gt; Person profile'
			</div>
			<ul>
				<li>Enter the name of the person who's profile you're creating for example 'Steve Burleigh'</li>
				<li>Click 'OK' and your profile will be created and assigned to the 'S' bucket</li>
			</ul>
			<h5><a id="adding" name="adding"></a>Adding content to your profile item</h5>
			<p>Virtually all content you add to a profile will be added via the CMS interface. Profiles make only very limited use of modules and you cannot add multiple modules in the way you would for a News or Project item.</p>
			<p>Only one type of module can be added and full instructions on this are provided below.</p>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Details</b></p>
			<p>*fields marked with an asterix are required and must be completed</p>
			<ul>
				<li><b>Name</b>* - Enter the name of the person who's profile you're creating - for example 'Steve Burleigh'</li>
				<li>Title - Please leave this field blank</li>
				<li>
					<b>Picture</b>* - add the image of the person here. See the <a href="/getting-started/uploading-images/">uploading guide</a> for further advice on adding imagery. The image should be:
					<ul>
						<li>Resized to 400px wide by 400px high. It MUST be square in dimension</li>
						<li>The picture should be 'portrait style' and not contain significant background elements (i.e. not a picture of the person on site)</li>
						<li>It can be black and white or colour. The website will automatically display the image in black and white</li>
					</ul>
				</li>
				<li><b>Summary</b>* - Enter the first one to two sentences of the biography of your profilee here. Content contained in this field is displayed in a slightly larger font size (see image below or details)</li>
				<li><b>Biography</b>* - Enter the remainder of your biography into this field. Click 'Show editor' to enter copy using the Rich Text editor</li>
			</ul>
			<p>After completing the fields above, your content will displayed as shown in the following screenshot:</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/profiles/initial-content.jpg"></div>
			<div class="halfbleed__detail">
				Fig 2: Details of content added under 'Details' section of Profile item
			</div>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Recommend content</b></p>You can ignore this field
			<p></p>
			<p><b>Related</b></p>
			<p>You can select the following areas of related content for your profile. Each of the fields functions in the same manner.</p>
			<ul>
				<li>Browse the left hand 'content tree' and locate the item you're looking for</li>
				<li>Double click your chosen item i.e. a perspective article</li>
				<li>It will then appear in the righthand column</li>
				<li>To remove a selection, double click it in the righthand column</li>
			</ul>
			<p>Perspectives - Select any articles that your profilee has written or is significantly involved with. This content is displayed in pairs. You can select up to 4 articles</p>
			<p><b>Projects</b> - select any projects that your profilee has worked on. This content is displayed in threes. You can select up to 3 projects.</p>
			<p><b>Industries</b> - select any industries in which your profilee has specialism(s). You can select as many as apply</p>
			<p><b>Services</b> - Select any services in which your profilee has specialism(s). You can select as many as apply</p>
			<p>Related content displays in the following manner:</p>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/profiles/related-content.jpg"></div>
			<div class="halfbleed__detail">
				Fig 3: Examples of related content including 'Industry', 'Service', 'Projects' and 'Perspectives'
			</div>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Contacts</b></p>
			<p>*fields marked with an asterix are required and must be completed</p>
			<ul>
				<li><b>Telephone</b>* - please enter an appropriate phone number for your profilee. This should include the international dialling code i.e. '+44 (0)207 665 2212'</li>
				<li><b>Email</b>* - please enter a suitable email address. Where possible it is advisable to use generic emails such as 'milan@arup.com' or 'digital@arup.com' rather than personal emails. This helps negate the impact of staff leaving Arup and no longer responding to emails</li>
			</ul>
			<p><b>Job</b></p>
			<p>*fields marked with an asterix are required and must be completed</p>
			<ul>
				<li>
					<b>Role</b>* - Please enter your profilee's job title. Please bear in mind:
					<ul>
						<li>Wherever possible this should be the external facing title. Titles such as 'Manager' or 'Associate' provide little clue to users about what the person does</li>
						<li>Please do not include reference to the person's country or location unless this part of their formal job title</li>
					</ul>
				</li>
				<li><b>Location</b>* - Please select the person's office location. Expand open the appropriate country until you arrive at the office you want. Double click the office name until it appears in the righthand column.</li>
			</ul>
		</div>
	</div>
</section>
<section class="container">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<p><b>Facebook Open Graph</b></p>
			<p>These fields are used to display content when your article is shared via social platforms.</p>
			<p>*fields marked with an asterix are required and must be completed</p>
			<ul>
				<li><b>Open Graph Title</b>* - Please enter the name of your the person in your profile</li>
				<li><b>Open Graph Description</b> - Please enter a brief description / summary of your profile</li>
				<li><b>Open Graph Image</b> - N/A</li>
			</ul>
			<p><b>Metadata</b></p>
			<p>This information is used to aid the discovery of your article via search engines. Adding it is vital in helping people to find the article and ensuring that it performs to the best of its ability.</p>
			<p>*fields marked with an asterix are required and must be completed</p>
			<ul>
				<li><b>Browser title</b>* - Please enter the name of your profilee</li>
				<li><b>SEO meta description</b>* - Please enter a brief description / summary of your profilee</li>
				<li><b>Meta keywords</b> - keywords have been used by search engines in the past to help users locate content. However, keywords are no longer of high relevance for search engines such as Google and you do not need to add these to aid search performance.</li>
			</ul>
			<h5><a id="completing" name="completing"></a>Completing your profile</h5>
			<p>Once you've added all the necessary information to your profile, click the 'save' button to ensure your work is saved.</p>
			<p><b>NB - it's advisable to continuously save your work as you add content to prevent losing work if something should go wrong.</b></p>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h5><a id="related" name="related"></a>Adding related content modules to your profile item</h5>
			<p>If you have added related projects or perspectives to your profile, you must follow the steps below to ensure these display:</p>
			<ul>
				<li>Open the Experience Editor (select 'Publish' in the ribbon menu and choose 'Experience Editor' from the options</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/profiles/access-ee.jpg"></div>
			<div class="halfbleed__detail">
				Fig 4: Selecting the Experience Editor
			</div>
			<ul>
				<li>Once the Experience Editor has loaded, select the 'Home' item from the ribbon menu (should be selected by default) and then choose 'Component' from the options.</li>
				<li>Scroll to the bottom of the profile page - you should see options to 'Add here' - click one of these. This will launch a popup window from which you can choose either 'Related Perspectives' or 'Related Projects'</li>
				<li>Select the appropriate option and click 'Ok'</li>
				<li>Repeat these steps if you're adding both projects and Perspectives</li>
				<li>Save the page once you've added the modules you want</li>
			</ul>
			<div class="training-image"><img alt="Image" class="mainImg" src="/images/profiles/select-component.jpg"></div>
			<div class="halfbleed__detail">
				Fig 5: choosing the related content components
			</div>
			<h5><a id="links" name="links"></a>Adding links in Sitecore</h5>
			<p>You can add links to content in certain fields. Fields on a profile document you can add links to include:</p>
			<ul>
				<li>Biography</li>
			</ul>
			<p>Please see the '<a href="/getting-started/adding-links/">Adding links in Sitecore</a>' guide for more information on adding links.</p>
		</div>
	</div>
</section>
<section class="container" id="">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h5><a id="language" name="language"></a>Adding an alternative language version</h5>
			<p>Sitecore gives you the ability to add multiple language versions to your content. A <a href="/getting-started/language-versions/">full guide to language versions</a> has been provided, but you should be aware that:</p>
			<ul>
				<li>A profile MUST be created in English first</li>
				<li>Any modules that have been added to your profile item will also require translated versions be created</li>
			</ul>
			<p><a href="/getting-started/language-versions/">Find out more about languages in Sitecore</a></p>
			<h5><a id="workflow" name="workflow"></a>Workflow</h5>
			<p>Profiles are covered by the CMS' workflow. This means that only certain staff are able to publish content. Generally, this will be a member of the GMC Online team - though some regions including Australasia and the Far East also have a member of staff with publishing rights.</p>
			<p><a href="/getting-started/workflow/">Learn more about the Sitecore workflow</a></p>
		</div>
	</div>
</section>
<section class="container" id="best-practice">
	<div class="rich-text">
		<div class="reveal rich-text__content">
			<h2>4. Best practice</h2>
			<p>You can see an example of a well-presented profile item by looking at an <a href="/best-practive/examplar-profile/">exemplar profile</a>. (link to item).</p>
			<p>You should bear in mind the following when adding profiles to arup.com:</p>
			<ul>
				<li>Profiles are key content items on arup.com. Ultimately staff represent Arup's key resource and profiles are how we bring this to life online</li>
				<li>Profiles should only ever be created for Arup staff. You must not create profiles for non-staff members</li>
				<li>Profiles should always have as much information as possible. At a minimum, a profile should have:
					<ul>
						<li>Name</li>
						<li>Picture</li>
						<li>Job title</li>
						<li>Contact details</li>
						<li>A brief biography</li>
						<li>Details of industry and service experience</li>
					</ul>
				</li>
				<li>Wherever possible, you should use a person's external facing job title in the 'Role' field. For example, 'Sustainability and Building Services Team Leader' is far better than 'Associate' or 'Director'. It helps give the reader greater understanding of the person's role</li>
				<li>Use the biography to bring the person's story to life and highlight their experience</li>
				<li>Don't forget to add related content - particularly projects - wherever possible. Highlighting projects in this way helps to bring a user's skills and experience to life</li>
			</ul>
		</div>
	</div>
</section>