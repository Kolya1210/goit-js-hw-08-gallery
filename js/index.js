import gallery from './gallery-items.js'



const createSetOfPictures = (data) => {
    const itemRef = document.createElement('li')
    itemRef.classList.add('gallery__item')
    const linkRef = document.createElement('a')
    linkRef.classList.add('gallery__link')
    linkRef.setAttribute('href', data.preview)
    const imgRef = document.createElement('img')
    imgRef.classList.add('gallery__image')
    imgRef.setAttribute('src', data.original)
    imgRef.setAttribute('data-source', data.original)
    imgRef.setAttribute('alt', data.description)
    linkRef.appendChild(imgRef)
    itemRef.appendChild(linkRef)
    return itemRef;
}
const data = gallery.map(item => createSetOfPictures(item))

const closeBtn = document.querySelector('.lightbox__button');
const openOverlay = document.querySelector('.js-lightbox');
const ulRef = document.querySelector('.js-gallery');
ulRef.append(... data)

closeBtn.addEventListener('click', closeModal);
ulRef.addEventListener('click', openPicture);

function openPicture(event){
    event.preventDefault();
    if (event.target.nodeName !== 'IMG'){
        return;
    }
    onOpenModal(event.target)
}

function onOpenModal (clicked){
    if (clicked){
    openOverlay.classList.add('is-open');
    }
    const target = event.target;
    const curentImg = openOverlay.querySelector('.lightbox__image');
    const imgAlt = target.getAttribute('alt');
    curentImg.setAttribute('alt', imgAlt);
    curentImg.setAttribute('src', target.dataset.source);
    
}

function closeModal(event){
    if(event.target){
        openOverlay.classList.remove('is-open')
    }
    clearModal()
}

function clearModal(){
    const clearData = openOverlay.querySelector('.lightbox__image');
    clearData.setAttribute('alt', '');
    clearData.setAttribute('src', '');
};
