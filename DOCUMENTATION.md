# Documentation for MCA EBFM

This is a guide for getting started with the third party libraries used in this website. For details on using the [Gulp](http://gulpjs.com/) task runner, please refer to `readme.md`.

## Table of Contents
+ [Website Structure](#website-stucture)
+ [Panini](#panini)
+ [Ruby Tabs](#ruby-tabs)
+ [Featherlight](#featherlight)
+ [Styles](#styles)

## Website Structure

```
SRC Folder
| -- assets
| -- | -- favicons
| -- | -- img                         # folder for all images
| -- | -- js                          # folder for all js files
| -- | -- map                         # folder for map on landing page
| -- | -- pdf                         # folder for downloadable pdfs
| -- | -- ruby                        # folder for rubytabs files
| -- | -- scss                        # folder for all scss files
| -- data
| -- layouts                        
| -- | -- default.html                # layout for principle pages
| -- | -- landing.html                # layout for landing page
| -- pages                            
| -- | -- index.html                  # page for landing page
| -- | -- principle pages             # pages for principle pages
| -- partials                         
| -- | -- p1-7                        # folders for the tabs partials in each principle page
| -- | -- footer-home.html            # partial for footer on the landing page
| -- | -- footer.html                 # partial for footer on principle pages
| -- | -- image.html                  # partial for image blocks
| -- | -- index-principle-item.html   # partial for principle  
| -- | -- map.html                    # partial for map that appears on
| -- | -- nav-simple.html             # partial for navbar on principle pages
| -- styleguide
```

## Panini

This website is created with Zurb Foundation's Panini templating system. From the docs:
> Panini is a flat file compiler that uses the concepts of templates, pages, and partials—powered by the Handlebars templating language—to streamline the process of creating static prototypes.

### Templating Basics
Panini works by inserting HTML partials into pages which then use a layout/template to create a full HTML document. These HTML documents are placed in the root of the `dist` folder with filenames determined by the page filenames used. The `asset` folder is copied and placed in the root of the `dist` folder as well. All other files and folders within the `src` folder are ignored.

Definitions
- Front matter - anything contained between two sets of `---` that are used in pages to define variables for templates

layout/templates
+ layout for pages
+ contain the `doctype`, `<html>`, `<head>`, and `<body>`
+ should call all external styles and js
+ can use variables defined in the front matter of each `page`
+ can call multiple HTML partials

page
+ contain most of the substance of the HTML body
+ can only use one layout
+ have a front matter for variables to be used in layout
+ can call multiple HTML partials

partials
+ HTML to be injected anywhere in a page or layout
+ can use variables that are defined in each partial call

### Inserting Pages in Templates
Pages are inserted into layouts through the body tags in each layout:
```
{{> body}}
```
This tells Panini to look for a page in the `src/page` folder with a matching layout in the page's front matter:
```
---
layout: default.html
---
```

The front matter can also be used to define variables that could be used in the layout:
```
---
layout: landing.html
title: I am the landing page
description: I am the description
---
```
The are called the layout with the following syntax:
```
<head>
  <title>{{title}}</title>
</head>
<body>
  <p>
    {{description}}
  </p>
  {{> body}}
</body>
```

When Panini encounters this syntax `{{ }}`, it searches through a page's front matter for a matching variable.

### Inserting Partials in Pages
Partials are placed into pages/layouts like this:
```
{{> partial}}
```
and variables could be passed into these partials like this:
```
{{> partial
    var1="I am a variable"
    img="image.jpg"
}}
```

When Panini encounters this syntax `{{> }}`, it searches through all of the folders of the `partial` folder to find the matching html file. Panini uses Handlebars.js under the hood for this system.

### Helpful links
- [Panini Docs](http://foundation.zurb.com/sites/docs/panini.html)
- [Handlebars Docs](http://handlebarsjs.com/)

## Ruby Tabs

Each slideshow is initialized with this div block where
`rt01` is the core CSS of Rubytabs,
`rt01flatbox` is the style of tabs,
`rt01timer-arcTop` is the style of the timer.

```
<div class="rt01 rt01flatbox rt01timer-arcTop" data-tabs='{
  "isAutoInit" : true,                # auto-initializes slideshow
  "fx"         : "line",              # style of transition effect
  "speed"      : 800,                 # duration of effect (in ms)
  "isSlideshow" : true,               # Turns on slideshow
  "slideshow"   : { "delay": 5000 },  # delay to move on to the next slide (in ms)
  "isPlayPause" : true,               # controls "playpause" component in slideshow
  "timer" : "arc",                    # style of timer
  "isTimer" : true                    # controls "timer" component in slideshow

 }'>
```

Each slideshow tab is initialized with the following pattern:
```
<div>                                                   # wrapper div
  <div class="rt01pagitem">Tab Title</div>              # tab initializer and tab title
  {{> p#-# }}                                           # partial for tab page
</div>
```

**Warning:** Putting multiple html comments into the tab partials causes problems with rendering the tabs.

### Helpful links
- [Rubytabs Docs](http://haibach.net/rubytabs/documentation/)

## Featherlight

The lightbox effect as well as the REFERENCE modals are powered by Featherlight.js

Lightboxes are used in the image partial and in the principle jumbotron within the
default.html template. They are defined with the following pattern:
```
<a href="<<link to image>>" data-featherlight="image">
  <img src="<<link to image>>">
</a>
```

The REFERENCE modals follow the following pattern:
```
<p><a data-featherlight="#<<ID>>" class="float-right">REFERENCES</a></p>
<div class="lightbox" id="ID">
  <a href="<<external-link>>" target="_blank">External link title</a>
</div>
```
`data-featherlight` must point to the id of its matching div and these ids must be distinct from other REFERENCE divs on the page. This is maintained with this naming scheme:
`p#` (the number of principle) + `#` (the number of the slide) + `References` (ex. `p11Reference`)

### Helpful links
- [Featherlight Docs](https://github.com/noelboss/featherlight/#installation)

## Styles

This website is styled with SCSS and uses Foundation grids.

### Helpful links
- [SCSS Docs](http://sass-lang.com/guide)
- [Foundation Docs](http://foundation.zurb.com/sites/docs/)
