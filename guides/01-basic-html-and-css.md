---
title: Basic HTML and CSS
layout: default
nav_order: 10
permalink: basic-html-and-css
parent: Guides
---

# Basic HTML and CSS

{: .no_toc }

<details closed markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## HTML

HTML stands for HyperText Markup Language. While not a traditional programming language, it is the language that is used to create web pages. Typically a markup language is used to define the structure and display of content, HTML is no different.

## Text Editor

To write HTML, one of the first things you will need is a plain text editor. Most operating systems come with this capability built-in (TextEdit on the Mac and Notepad on Windows). While these applications work fine, there are some benefits to using a programmer’s text editor such as [VS Code](https://code.visualstudio.com/).

In particular, they have line numbering, syntax coloring and other features that will make it easier to work with.

## Tags

[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) is a tag based language. This means that you define the structure of the content of a document using tags.

An example of a tag would be: `<b>some text</b>` which when rendered in a browser looks like this: **some text**.

Here are some tags that we’ll start with:

-   `<html>...</html>` Start and end HTML
-   `<head>...</head>` Head of page, not actual content
-   `<title>...</title>` Title of page
-   `<body>...</body>` Body of page, where the content goes
-   `<div>...</div>` Content section – [Block level](http://www.w3schools.com/html/html_blocks.asp)
-   `<span>...</span>` Grouping – [Inline](http://www.w3schools.com/html/html_blocks.asp)
-   `<p>...</p>` Paragraph
-   `<b>...</b>` Bold
-   `<br />` Line break (you’ll notice that this tag doesn’t have any content and therefore is both an begin and end tag, with the slash)
-   `<H1></H1>` (Also H2, H3, H4, etc..)
-   `<!-- ... -->` Comments
-   `<a href="http://...">...</a>` Link to another page. The “`href=""`” portion is an attribute. Many tags have optional attributes.

Here is the source of an HTML example page:

```html
<html>
    <!-- Start the HTML -->
    <head>
        <!-- Start the Head -->

        <!-- The Title of the page, start and end tag with text in-between -->
        <title>This is a Web Page</title>
    </head>
    <!-- End the Head, always with a "/" -->
    <body>
        <!-- Start the body -->
        <!-- This is a comment and won't display -->
        This is where you would put the content of the page. This will be on the
        same line as the above. To specify a line break, you use: <br />
        <br />
        <!-- The above text displays both a <br /> and has this funny code: <br />   That funny code allows us to display the special characters that are typically used to define a tag so that we can display them without the browser actually thinking they are the start and end of a tag.  This symbol:  < is written as < meaning "less than".  This symbol: > is written as > -->
        This text will be a line down
        <br /><br />
        <!-- Two line breaks -->
        <!-- Line break tags include the closing "/" as part of them, there isn't a </br> tag. -->
    </body>
    <!-- End the body -->
</html>
<!-- End the HTML -->
```

[See the page rendered in a browser](./examples/firstpage.html){:target="\_blank"}

To try this out, copy the above into a new text file and save it as *something.html* then open it in a web browser to see it.

## Comments

Comments in HTML start with `<!--` and end with `-->`

## Nesting

As you see in the above example, HTML tags are nested within each-other. For instance all of the content you want inside the body of the page is nested within the body start and end tags.

## Indenting

Indenting isn’t strictly required but it really helps YOU to see the nesting structure of the document. What is inside what and gives you the ability to quickly recognize when you missed closing a tag.

## Attributes

Tags, such as the `<a>` shown above can have “attributes”. In the case of the `<a>` it is `href` which indicates the URL that the link should be to. Other common attributes are `id` and `class`. `id` allows a specific tag/element on the page to be referenced through JavaScript or CSS (which we’ll cover later). `class` is useful when using CSS to define the design of the page.

## View Source

View Source one of the very fundamental things that made web publishing very successful in the beginning was the inclusion of “View Source” in most web browsers. This allows people to look at the HTML of a page they are viewing so as to understand how it was constructed and learn how to do similar things themselves.

## Images

To place an image in a page, you use a URL in the “src” attribute of the img tag:

<div class="code-example">
<img src="./assets/image-2009630118.jpg" />
</div>
```html
<img src="path/to/your/image.jpg" />
```
![](./Basic HTML and CSS – IMA Live Web Fall 2023_files/animage.jpg)

## Style

You can use some basic CSS (cascading style sheets) in the “style” attribute of tags.

<div class="code-example">
<div style="background: #ff0000; color: #0000ff;">This will be funky</div>
</div>
```html
    <div style="background: #ff0000; color: #0000ff;">This will be funky</div>
```

We’ll get deeper into CSS later in the semester.

-   [HTML Basics Video](https://stream.nyu.edu/media/HTML+Basics/1_8ts8q7gu)
-   [CSS Basics Video](https://stream.nyu.edu/media/CSS+Basics/1_7yydov1h)
-   [Better CSS Organization](https://stream.nyu.edu/media/CSS+Basics+-+Better+Organization+with+HTML/1_rp8pd8ip)

## More Information:

-   [HTML Tag Reference](https://www.w3schools.com/tags/default.asp)
-   [HTML Special Characters](https://www.w3schools.com/html/html_entities.asp)
-   [w3schools.com HTML Tutorial](https://www.w3schools.com/htmL/)
-   Some people like [MDN’s HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) better
-   [CSS Reference](https://www.w3schools.com/cssref/default.asp)
