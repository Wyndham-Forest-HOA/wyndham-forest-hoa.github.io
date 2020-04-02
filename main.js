// When the user scrolls down the page, fix the header bar to the top of the page
function adjustHeaderBarClasses() {
    const headerLinks = document.getElementById('header-links');
    if (window.pageYOffset > 10) {
        headerLinks.classList.add('fixed');
    } else {
        headerLinks.classList.remove('fixed');
    }
}
window.addEventListener('scroll', adjustHeaderBarClasses);
window.addEventListener('resize', adjustHeaderBarClasses);
window.addEventListener('load', adjustHeaderBarClasses);

// Rotate through our subdivision signs for the header image
const HEADER_IMAGES = [
    'images/subdivision-sign-wyndham-forest-2.png',
    'images/subdivision-sign-chappell-ridge.png',
    'images/subdivision-sign-rivers-edge.png',
    'images/subdivision-sign-holloway-2.png',
];
let headerImagePointer = -1;

function changeHeaderImage() {
    headerImagePointer = (headerImagePointer + 1) % HEADER_IMAGES.length;
    console.log(`Changing header image to  ${HEADER_IMAGES[headerImagePointer]} ...`);
    document.getElementById('header-image').style.backgroundImage = `url("${HEADER_IMAGES[headerImagePointer]}")`;
    setTimeout(changeHeaderImage, 5000);
}
changeHeaderImage();

function goto(id) {
    console.log(`Going to ID ${id}`);
    // We use this goto function so that we get smooth scrolling to the element
    const elem = document.getElementById(id);
    if (elem === null) {
        console.log(`Warning! An attempt was made to navigate to a non-existent ID '${id}'.`);
        return;
    }
    // We want to do smoth scrolling to the element. If we set the hash with the ID attr set, the
    // browser will do a quick scroll to the element.
    elem.setAttribute('id', '');
    document.location.hash = id;
    elem.setAttribute('id', id);
    console.log(elem);
    elem.scrollIntoView({
        behavior: 'smooth',
    });
    // elem.scrollTop -= 10;
}