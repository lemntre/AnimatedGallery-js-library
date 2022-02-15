# js-library-zhangn73
## Landing page
https://still-falls-50625.herokuapp.com/

## Getting Started 
Include AnimatedGallery.js and AnimatedGallery.css in your current directory, import the package and 
jQuery using the following script: 

<pre>
    &lt;link rel="stylesheet" type="text/css" href="AnimatedGallery.css"> <br>
    <script defer type="text/javascript" src="AnimatedGallery.js">
    <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</pre>

## Create a new Animated Gallery 
<pre>
    &lt;div id="myGallery-container-ID"><div>
</pre>
<pre>
    const myAnimatedGallery = new AnimatedGallery('myGallery-container-ID')
    const myElements = [{src:'image1', title:'image 1', description:'This is the first image.'}]
    myAnimatedGallery.setElements(myElements)
</pre>

## Documentation
https://still-falls-50625.herokuapp.com/documentation.html
