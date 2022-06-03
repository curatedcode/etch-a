document.body.onload = allDivs;

function allDivs() {
    const mainDiv = document.createElement('div');
    mainDiv.id = 'main1';
    mainDiv.classList.add('container');
    const mDContent = document.createTextNode('');
    mainDiv.appendChild(mDContent);
    const currentDiv = document.getElementById('main1');
    document.body.insertBefore(mainDiv,currentDiv);
    let i=0;
    while(i<256) {
        let smallDiv,bDContent;
        smallDiv = document.createElement('div');
        smallDiv.id = 'babyDiv1';
        smallDiv.classList.add('starter');
        bDContent = document.createTextNode('');
        smallDiv.append(bDContent);
        mainDiv.appendChild(smallDiv);
        
        ++i;
    };
};

const container = document.querySelector('.container');
container.addEventListener('mouseenter', e => {
    let target = e.target;
    if (target !== container) {
        target.classList.add('babyStyle');
    }
});