const form = document.getElementById('generate-qrcode');
const qr = document.getElementById('qrcode');



const generateONSubmit = (e) => {
    e.preventDefault();

    clearInterface();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    console.log(url,size);

    if(url === ''){
        alert('URL necessary to generate QR-Code');
    } else {
        showLoader()

        setTimeout(() => {
            hideLoader()

            generateQRcode(url,size)

            setTimeout(() => {
                const saveURL = qr.querySelector('img').src;
                createSaveButton(saveURL);
            },50)
            

        } , 1000)
    }
}

const generateQRcode = (url,size) => {
    const qrcode = new QRCode(qr,{
        text: url,
        height:size,
        width:size
    })
}

const showLoader = () => {
    document.getElementById('loader').style.display = 'block';
}

const hideLoader = () => {
    document.getElementById('loader').style.display = 'none';
}

const clearInterface = () => {
    qr.innerHTML = '';
    const saveBtn = document.getElementById('savelink');
    if(saveBtn){
        saveBtn.remove();
    }
}

const createSaveButton = (saveURL) => {
    const link = document.createElement('a');
    link.id = 'savelink';
    link.classList = 'bg-red-500 hover-bg-red-700 text-white text-2xl font-bold py-1 rounded w-1/2 md:w-1/4 m-auto my-5';
    link.href = saveURL;
    link.download = 'qr';
    link.innerHTML = 'Save  Image'
    document.getElementById('generated').appendChild(link);

}

hideLoader();
clearInterface();


form.addEventListener('submit',generateONSubmit)