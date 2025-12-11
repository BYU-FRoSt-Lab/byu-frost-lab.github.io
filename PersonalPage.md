## Welcome!
Welcome to the lab! This page will walk you through how to create a personal page on our lab website. 

## Tutorial

### Creating your page
Duplicate the template file `template file name`, name it `firstname-lastname.md` and move it to `src/content/people`. 

#### Add your info
Set your group as "faculty", "graduate", or "undergraduate" depending on your role. Which section on the main people page your tile will be displayed in.
Set your title to be "[type] Professor", "Ph. D. Student", "Masters student", or "Undergraduate student", again depending on your role. Your title will show up under your name. 
Add a bio! These tend to be around 2-3 paragraphs. Feel free to look at other people's pages for ideas!

##### Links
There are lots of options for things you can link. The more links you have the better! They will show up as small symbols on your card on the main people page, and they will show up as full links on your bio page. **Delete any links you don't use from the template**, otherwise they will show up as broken links on your page. 

You can add your:
* personal website
* github
* CV/Resume
* linkedin
* and other socials 
You can also add a mailto link that will allow people to contact you directly. 

### Adding your image
Choose a nice photo of yourself and copy it into the project. Place it under `src/assets/images/people` and name it `firstname-lastname.filetype`. 
In your markdown file from the "creating your page" step link to your new photo. Do this by setting `photo: "/src/assets/images/people/firstname-lastname.filetype"`

## Preview your page
<!-- Docker instructions -->
Download Docker
In the main folder for this project run `Docker-compose up`. This will start the page running on http://localhost:8080/. Go to the People tab and find your tile. Check that it renders how you want both on the tile and on your page.  

## What's going on under the hood?
<!-- Explain quickly an overview of how the website/repo works? -->
