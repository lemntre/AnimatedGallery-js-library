/* Animated Gallery library code */
"use strict";

(function(global, document, $) {
    function AnimatedGallery(id) {
        this.id = id
        this.elements = []
        this.style = ''
        this.animation = ''
        this.sorting = ''
        this.hoverAnimation = ''
        this.body = $('body')
    }

    AnimatedGallery.prototype = {
        setAnimation: function(newAnimation) {
            this.animation = newAnimation
        },

        setStyle: function(newStyle) {
            this.style = newStyle
        },

        setSorting: function(newSorting) {
            this.sorting = newSorting
        },

        setElements: function(newElements) {
            this.elements = newElements
        },

        addNewElement: function(newElement) {
            $(this.gallery_container).empty()
            $(this.gallery_container).removeClass()
            this.elements.push(newElement)
            this._createGallery()
        },

        setHoverAnimation: function (hover){
            this.hoverAnimation = hover
        },

        newHoverAnimation: function (newHover){
            $(this.gallery_container).empty()
            $(this.gallery_container).removeClass()
            this.setHoverAnimation(newHover)
            this._createGallery()
        },

        setAnimationDuration: function(newDuration) {
            $(this.gallery_container).empty()
            $(this.gallery_container).removeClass()
            this.animationDuration = newDuration
            this._createGallery()
        },

        newStyle:function(newStyle) {
            $(this.gallery_container).empty()
            $(this.gallery_container).removeClass()
            this.setStyle(newStyle)
            this._createGallery()
        },

        newAnimation:function(newAnimation){
            $(this.gallery_container).empty()
            $(this.gallery_container).removeClass()
            this.setAnimation(newAnimation)
            this._createGallery()
        },

        sortElements: function(newSort) {
            $(this.gallery_container).empty()
            this.setSorting(newSort)
            this._createGallery()
        },

        _addCountAttribute: function () {
            if(this.elements[0].count === undefined){
                for(let i = 0; i < this.elements.length; i++){
                    Object.defineProperty(this.elements[i], 'count', {
                        value: 0,
                        writable: true
                    })
                }
            }
        },

        _addIndexAttribute: function() {
            if(this.elements[0].index === undefined){
                for(let i = 0; i < this.elements.length; i++){
                    Object.defineProperty(this.elements[i], 'index', {
                        value: i,
                        writable: true
                    })
                }
            }
        },

        makeGallery:function() {
            this.body.css({'overflow':'auto'})
            this.animationDuration = '3s'
            this.modal = document.createElement('div')
            this.modal.id = 'modal_display' + this.id
            this.gallery_container = document.createElement('div')
            this.body.append(this.gallery_container)
            this.body.append(this.modal)
            $('#'+this.id).append($(this.gallery_container))
            //set up elements 
            this._addCountAttribute()
            this._addIndexAttribute()
            //make lightbox display 
            this._makeModalDisplay()
            this._createGallery()
        },

        _createGallery: function() {
            //sort elements first
            //alphabetical ordering
            if(this.sorting == 'alphabetical') {
                this.elements.sort((a, b) => a.title.localeCompare(b.title))
            //user index ordering
            } else if (this.sorting == 'asInput') {
                this.elements.sort((a, b) => a.index - b.index)
            //ordering by number of clicks
            } else if (this.sorting == 'clicks') {
                this.elements.sort((a, b) => b.count - a.count )
            }

            //make gallery according to style
            if(this.style == 'grid') {
                return this._makeGridGallery()
            } else if (this.style == 'diamond') {
                return this._makeDiamondGallery()
            } else if (this.style == 'line up') {
                return this._makeLineUpGallery()
            } else if (this.style == 'panel'){
                return this._makePanelGallery()
            } else if (this.style == 'chessboard'){
                return this._makeChessBoardGallery()
            }
           
        },

        _addHoverAnimation(image){
            if(this.hoverAnimation == 'scale down'){
                $(image).hover(function() {
                    $(this).css({'transform':'scale(0.95)', 'filter': 'brightness(105%)'})
                }, 
                function() {
                    $(this).css({'transform':'scale(1)', 'filter':'brightness(100%)'})
                })
            } else if (this.hoverAnimation == 'scale up'){
                $(image).hover(function() {
                    $(this).css({'transform': 'scale(1.1)', 'filter': 'brightness(105%)'})
                }, 
                function() {
                    $(this).css({'transform':'scale(1)', 'filter':'brightness(100%)'})
                })
            } else if (this.hoverAnimation == 'drop shadow'){
                $(image).hover(function() {
                    $(this).css({'filter' : 'drop-shadow(8px 8px 10px gray)'})
                }, 
                function() {
                    $(this).css({'filter':'drop-shadow(0px 0px 0px gray)'})
                })
            }
        },

        _imageClickedHandler: function(event){
            event.data.this.elements[event.data.index].count += 1
            event.data.this._showDetail(event.data.index)
        },

        _showDetail:function (index){
            const currImage = document.getElementById('current_image_display'+ this.id)
            const number = document.getElementById('current_image_number'+ this.id)
            const title = document.getElementById('title' + this.id)
            const description = document.getElementById('description'+ this.id)
            
            this.body.css({"overflow": "hidden"})
            $(currImage).attr('src', this.elements[index].src)
            number.innerHTML = (index+1) + '/' + this.elements.length
            title.innerHTML = this.elements[index].title
            description.innerHTML = this.elements[index].description
        },

        _makeModalDisplay: function() {
            $(this.modal).addClass('modal')
            
            const close_button = document.createElement('span')

            const modal_content = document.createElement('div')
            const slide = document.createElement('div')
            const number = document.createElement('div')
            const currImg = document.createElement('img')
            const description_container = document.createElement('div')
            const title = document.createElement('p')
            const description = document.createElement('p')

            $(close_button).click({this:this}, this._closeModalDisplay)
            $(close_button).addClass('close-button')

            $(currImg).attr('id', 'current_image_display' + this.id)
            $(number).attr('id', 'current_image_number' + this.id)
            $(number).addClass('slide-number')
            $(currImg).addClass('modal-image')
            $(modal_content).addClass('modal-content')
            $(slide).addClass('slide')
            $(description_container).addClass('description-container')
            $(title).attr('id', 'title' + this.id)
            $(title).addClass('title')
            $(description).attr('id', 'description'+ this.id)
            $(description).addClass('description')

            close_button.innerHTML = '&times;'
            
            slide.append(number)
            slide.append(currImg)
            modal_content.append(slide)
            description_container.append(title)
            description_container.append(description)
            modal_content.append(description_container)
            this.modal.append(close_button)
            this.modal.append(modal_content)
        },

        _closeModalDisplay: function(event) {
            event.data.this.modal.style.display = 'none'
            event.data.this.body.css({"overflow": "auto"})
        },

        _openModalDisplay: function(event) {
            event.data.this.modal.style.display = 'block'
        },

        _makeGridGallery: function() {
            const gallery_container = this.gallery_container
            //add gallery type 
            $(gallery_container).addClass('grid-gallery')
            for (let i = 0; i < this.elements.length; i++) {
                const image = document.createElement('img')
                image.src = this.elements[i].src
                $(image).click({index: i, this: this}, this._imageClickedHandler)
                $(image).click({this: this}, this._openModalDisplay)

                //add animation 
                if (this.animation == 'slide cross v'){
                    if (i % 2 == 0){
                        this._animateHelperIndividual(image, 'slide up')
                    } else {
                        this._animateHelperIndividual(image, 'slide down')
                    }
                } else if (this.animation == 'slide cross h'){
                    if (i % 2 == 0){
                        this._animateHelperIndividual(image, 'slide left')
                    } else {
                        this._animateHelperIndividual(image, 'slide right')
                    }
                } else {
                    this._animateHelper(image)
                }

                this._addHoverAnimation(image)
                gallery_container.append(image)
            }
        },

        _makeChessBoardGallery:function(){
            const gallery_container = this.gallery_container
            //add gallery type 
            $(gallery_container).addClass('chessboard-gallery')
            const first_row = document.createElement('div')
            $(first_row).addClass('chessboard-gallery-row')
            const second_row = document.createElement('div')
            $(second_row).addClass('chessboard-gallery-row')

            const temp_elements = this.elements.slice()
            const m = Math.ceil(this.elements.length/2)
            const first_half = temp_elements.splice(0, m)
            const second_half = temp_elements.splice(-m)

            for(let j = 0; j < first_half.length; j++){
                const image = document.createElement('img')
                const filler = document.createElement('div')
                $(filler).addClass('board-filler')
                image.src = first_half[j].src

                //add animation 
                if (this.animation == 'slide cross v'){
                    if (j % 2 == 0){
                        this._animateHelperIndividual(image, 'slide up')
                    } else {
                        this._animateHelperIndividual(image, 'slide down')
                    }
                } else if(this.animation == 'slide cross h'){
                    if (j % 2 == 0){
                        this._animateHelperIndividual(image, 'slide left')
                    } else {
                        this._animateHelperIndividual(image, 'slide right')
                    }
                } else {
                    this._animateHelper(image)
                }
                // link back to the correct image index
                for (let l = 0; l < this.elements.length; l++){
                    if (first_half[j].src === this.elements[l].src){
                        $(image).click({index: l, this: this}, this._imageClickedHandler)
                        $(image).click({this: this}, this._openModalDisplay)
                    } 
                }
                this._addHoverAnimation(image)
                first_row.append(image)
                first_row.append(filler)
            }
            gallery_container.append(first_row)

            for(let k = 0; k < second_half.length; k++){
                const image = document.createElement('img')
                const filler = document.createElement('div')
                $(filler).addClass('board-filler')
                image.src = second_half[k].src

                //add animation 
                if (this.animation == 'slide cross v'){
                    if (k % 2 == 0){
                        this._animateHelperIndividual(image, 'slide up')
                    } else {
                        this._animateHelperIndividual(image, 'slide down')
                    }
                } else if (this.animation == 'slide cross h'){
                    if (k % 2 == 0){
                        this._animateHelperIndividual(image, 'slide left')
                    } else {
                        this._animateHelperIndividual(image, 'slide right')
                    }
                } else {
                    this._animateHelper(image)
                }
                // link back to the correct image index
                for (let i = 0; i < this.elements.length; i++){
                    if (second_half[k].src === this.elements[i].src){
                        $(image).click({index: i, this: this}, this._imageClickedHandler)
                        $(image).click({this: this}, this._openModalDisplay)
                    } 
                }
                this._addHoverAnimation(image)
                second_row.append(filler)
                second_row.append(image)
            }
            gallery_container.append(second_row)
        },

        _makePanelGallery: function(){
            const gallery_container = this.gallery_container
            //add gallery type 
            $(gallery_container).addClass('panel-gallery')
            for (let i = 0; i < this.elements.length; i++) {
                const image = document.createElement('img')
                image.src = this.elements[i].src
                $(image).click({index: i, this: this}, this._imageClickedHandler)
                $(image).click({this: this}, this._openModalDisplay)

                //add animation 
                if (this.animation == 'slide cross v'){
                    if (i % 2 == 0){
                        this._animateHelperIndividual(image, 'slide up')
                    } else {
                        this._animateHelperIndividual(image, 'slide down')
                    }
                } else if (this.animation == 'slide cross h'){
                    if (i % 2 == 0){
                        this._animateHelperIndividual(image, 'slide left')
                    } else {
                        this._animateHelperIndividual(image, 'slide right')
                    }
                } else {
                    this._animateHelper(image)
                }

                this._addHoverAnimation(image)
                gallery_container.append(image)
            }
        },

        _makeDiamondGallery: function() {
            const gallery_container = this.gallery_container
            const diamond_container = document.createElement('div')
            $(gallery_container).addClass('diamond-gallery')
            $(diamond_container).addClass('diamond-wrapper')
            gallery_container.append(diamond_container)

            for (let i = 0; i < this.elements.length; i++) {
                //const imageLink = document.createElement('a')
                const image = document.createElement('img')
                image.src = this.elements[i].src
                $(image).css({'width': '600px', 'height':'250px', 'object-fit':'cover'})

                $(image).click({index: i, this: this}, this._imageClickedHandler)
                $(image).click({this: this}, this._openModalDisplay)

                //animation code 
                if (this.animation == 'slide cross v'){
                    if (i % 2 == 0){
                        this._animateHelperIndividual(image, 'slide up')
                    } else {
                        this._animateHelperIndividual(image, 'slide down')
                    }
                } else if (this.animation == 'slide cross h'){
                    if (i % 2 == 0){
                        this._animateHelperIndividual(image, 'slide left')
                    } else {
                        this._animateHelperIndividual(image, 'slide right')
                    }
                } else {
                    this._animateHelper(image)
                }
                this._addHoverAnimation(image)
                diamond_container.append(image)
            }
            
            gallery_container.append(diamond_container)
        },

        _makeLineUpGallery:function () {
            const gallery_container = this.gallery_container
            $(gallery_container).addClass('line-up-gallery')
            const row = document.createElement('div')
            $(row).addClass('line-up-gallery-row')

            //make a copy so the original doesnt get messed up 
            const temp_elements = this.elements.slice()
            const m = Math.ceil(this.elements.length/4)
            
            for (let i = 0; i < temp_elements.length; i += m) {
                const part = temp_elements.slice(i, i + m);
                this._lineUpGalleryHelper(row, part)
            }
            
            gallery_container.append(row)
        },

        _lineUpGalleryHelper: function(row, elements) {
            const col = document.createElement('div')
            $(col).addClass('line-up-gallery-col')

            for (let i = 0; i < elements.length; i++) {
                const image = document.createElement('img')
                image.src = elements[i].src
                if (this.animation == 'slide cross v'){
                    if (i % 2 == 0){
                        this._animateHelperIndividual(image, 'slide up')
                    } else {
                        this._animateHelperIndividual(image, 'slide down')
                    }
                } else if (this.animation == 'slide cross h'){
                    if (i % 2 == 0){
                        this._animateHelperIndividual(image, 'slide left')
                    } else {
                        this._animateHelperIndividual(image, 'slide right')
                    }
                } else {
                    this._animateHelper(image)
                }
                
                // link back to the correct image index
                for (let j = 0; j < this.elements.length; j++){
                    if (elements[i].src === this.elements[j].src){
                        $(image).click({index: j, this: this}, this._imageClickedHandler)
                        $(image).click({this: this}, this._openModalDisplay)
                    } 
                }
                this._addHoverAnimation(image)
                col.append(image)
            }
            row.append(col)
        },

        _animateHelperIndividual: function (image, style){
            if (style == 'none'){
                $(image).removeClass()
            } else if (style == 'slide up'){
                $(image).addClass('slide-up')
                $(image).css("animation-duration", this.animationDuration)
            } else if (style == 'slide down'){
                $(image).addClass('slide-down')
                $(image).css("animation-duration", this.animationDuration)
            } else if (style == 'slide left'){
                $(image).addClass('slide-left')
                $(image).css("animation-duration", this.animationDuration)
            } else if (style == 'slide right'){
                $(image).addClass('slide-right')
                $(image).css("animation-duration", this.animationDuration)
            }
        },

        _animateHelper: function (image){
            if(this.animation == 'fade in'){
                $(image).addClass('fade-in')
                $(image).css("animation-duration", this.animationDuration)
            } else if (this.animation == 'none'){
                $(image).removeClass()
            } else if (this.animation == 'slide up'){
                $(image).addClass('slide-up')
                $(image).css("animation-duration", this.animationDuration)
            } else if (this.animation == 'slide down'){
                $(image).addClass('slide-down')
                $(image).css("animation-duration", this.animationDuration)
            } else if (this.animation == 'slide left'){
                $(image).addClass('slide-left')
                $(image).css("animation-duration", this.animationDuration)
            } else if (this.animation == 'slide right'){
                $(image).addClass('slide-right')
                $(image).css("animation-duration", this.animationDuration)
            }
        }
}

global.AnimatedGallery = global.AnimatedGallery || AnimatedGallery

})(window, window.document, $);

