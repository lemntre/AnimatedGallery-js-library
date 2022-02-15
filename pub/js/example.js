/* Animated Gallery usage example */
"use strict"
console.log('SCRIPT: Example of using the Animated Gallery library')

const ag1 = new AnimatedGallery('gallery1')
const ag2 = new AnimatedGallery('gallery2')
const ag3 = new AnimatedGallery('gallery3')
const ag4 = new AnimatedGallery('gallery4')
const ag5 = new AnimatedGallery('gallery5')

function examples() {
    ag1.setStyle('grid')
    ag1.setAnimation('none')
    ag1.setSorting('asInput')
    ag1.setElements([{src: './js/images/img1.jpg', title: 'D', description: 'This is a picture of doggo.'},
                    {src: './js/images/img2.jpg', title: 'C', description: 'This is another picture of doggo.'},
                    {src: './js/images/img3.jpg', title: 'B', description: 'This is a third picture of doggo.'},
                    {src: './js/images/img4.jpg', title: 'A', description: 'This is a fourth picture of doggo.'},
                    {src: './js/images/img5.jpg', title: 'E', description: 'Picture of doggos.'},
                    {src: './js/images/img6.jpg', title: 'F', description: 'Picture of cute doggo.'},
                    {src: './js/images/img7.jpg', title: 'G', description: 'Picture of cute doge.'},
                    {src: './js/images/img8.jpg', title: 'B', description: 'Picture of cute doge :).'},
                    {src: './js/images/img9.jpg', title: 'H', description: 'Picture of smort doge.'},
                    {src: './js/images/img10.jpg', title: 'M', description: 'Picture of smol doggo.'}])
    
    ag2.setStyle('line up')
    ag2.setAnimation('none')
    ag2.setSorting('asInput')
    ag2.setElements([{src: './js/images/img1.jpg', title: 'D', description: 'This is a picture of doggo.'},
                     {src: './js/images/img2.jpg', title: 'C', description: 'This is another picture of doggo.'},
                     {src: './js/images/img3.jpg', title: 'B', description: 'This is a third picture of doggo.'},
                     {src: './js/images/img4.jpg', title: 'A', description: 'This is a fourth picture of doggo.'},
                     {src: './js/images/img5.jpg', title: 'E', description: 'Picture of doggos.'},
                     {src: './js/images/img6.jpg', title: 'F', description: 'Picture of cute doggo.'},
                     {src: './js/images/img7.jpg', title: 'G', description: 'Picture of cute doge.'},
                     {src: './js/images/img8.jpg', title: 'B', description: 'Picture of cute doge :).'},
                     {src: './js/images/img9.jpg', title: 'H', description: 'Picture of smort doge.'}])

    ag3.setStyle('diamond')
    ag3.setAnimation('none')
    ag3.setSorting('asInput')
    ag3.setElements([{src: './js/images/img1.jpg', title: 'D', description: 'This is a picture of doggo.'},
                    {src: './js/images/img2.jpg', title: 'C', description: 'This is another picture of doggo.'},
                    {src: './js/images/img3.jpg', title: 'B', description: 'This is a third picture of doggo.'},
                    {src: './js/images/img4.jpg', title: 'A', description: 'This is a fourth picture of doggo.'},
                    {src: './js/images/img5.jpg', title: 'E', description: 'Picture of doggos.'},
                    {src: './js/images/img6.jpg', title: 'F', description: 'Picture of cute doggo.'},
                    {src: './js/images/img7.jpg', title: 'G', description: 'Picture of cute doge.'},
                    {src: './js/images/img8.jpg', title: 'B', description: 'Picture of cute doge :).'},
                    {src: './js/images/img9.jpg', title: 'H', description: 'Picture of smort doge.'},
                    {src: './js/images/img10.jpg', title: 'M', description: 'Picture of smol doggo.'}])
    
    ag4.setStyle('panel')
    ag4.setAnimation('none')
    ag4.setSorting('asInput')
    ag4.setElements([{src: './js/images/img1.jpg', title: 'D', description: 'This is a picture of doggo.'},
                    {src: './js/images/img2.jpg', title: 'C', description: 'This is another picture of doggo.'},
                    {src: './js/images/img3.jpg', title: 'B', description: 'This is a third picture of doggo.'},
                    {src: './js/images/img4.jpg', title: 'A', description: 'This is a fourth picture of doggo.'},
                    {src: './js/images/img5.jpg', title: 'E', description: 'Picture of doggos.'},
                    {src: './js/images/img6.jpg', title: 'F', description: 'Picture of cute doggo.'},
                    {src: './js/images/img7.jpg', title: 'G', description: 'Picture of cute doge.'},
                    {src: './js/images/img8.jpg', title: 'B', description: 'Picture of cute doge :).'},
                    {src: './js/images/img9.jpg', title: 'H', description: 'Picture of smort doge.'},
                    {src: './js/images/img10.jpg', title: 'M', description: 'Picture of smol doggo.'}])
    
    ag5.setStyle('chessboard')
    ag5.setAnimation('none')
    ag5.setSorting('asInput')
    ag5.setElements([{src: './js/images/img1.jpg', title: 'D', description: 'This is a picture of doggo.'},
                    {src: './js/images/img2.jpg', title: 'C', description: 'This is another picture of doggo.'},
                    {src: './js/images/img3.jpg', title: 'B', description: 'This is a third picture of doggo.'},
                    {src: './js/images/img4.jpg', title: 'A', description: 'This is a fourth picture of doggo.'},
                    {src: './js/images/img5.jpg', title: 'E', description: 'Picture of doggos.'},
                    {src: './js/images/img6.jpg', title: 'F', description: 'Picture of cute doggo.'},
                    {src: './js/images/img7.jpg', title: 'G', description: 'Picture of cute doge.'},
                    {src: './js/images/img8.jpg', title: 'B', description: 'Picture of cute doge :).'}])

    ag1.makeGallery()
    ag2.makeGallery()
    ag3.makeGallery()
    ag4.makeGallery()
    ag5.makeGallery()
}
examples();