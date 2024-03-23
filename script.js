const button = document.querySelector('.button');
const image = document.querySelector('.image');

const showLoader = () => {
    const loader = document.querySelector('.loader');
    button.disabled = true;
    loader.classList.remove('hidden');
    image.style.display = 'none';
    // loader.style.display = 'block';
}

const hideLoader = () => {
    const loader = document.querySelector('.loader');
    button.disabled = false;
    loader.classList.add('hidden');
    image.style.display = 'block';
    // loader.style.display = 'none';
}

const getApi = () => {
    showLoader();
    return fetch('https://dog.ceo/api/breeds/image/random').then((response) => {
        return response.json();
    })
        .then((responseData) => {
            image.src = responseData.message;
            hideLoader();
        })
        .catch((error) => {
            alert(error.message);
            document.querySelector('.loader').textContent = 'Не удалось загрузить картинку';
        })
}

getApi();

button.addEventListener('click', getApi);