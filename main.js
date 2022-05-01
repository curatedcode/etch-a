document.body.onload = dividers;

function dividers() {
    const mainDiv = document.createElement('div');
    mainDiv.id = 'main1';
    mainDiv.classList.add('container');
    const mDContent = document.createTextNode('');
    mainDiv.appendChild(mDContent);
    const currentDiv = document.getElementById('main1');
    document.body.insertBefore(mainDiv,currentDiv);

    for(let i=0;i<16;++i) {
        let smallDiv,bDContent,currDiv;
        smallDiv = document.createElement('div');
        smallDiv.id = 'babyDiv';
        smallDiv.classList.add('starter');
        bDContent = document.createTextNode('');
        smallDiv.append(bDContent);
        mainDiv.appendChild(smallDiv);
        currDiv = document.getElementById('babyDiv');
    }
};
