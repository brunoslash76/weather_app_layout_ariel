const searchButton = document.querySelector('#search-button');
const inputCity = document.querySelector('#city');
const closeInputButton = document.querySelector('#close-input');
const btnSearchValue = document.querySelector('#search-value');

const toggleInputCity = () => {
	inputCity.classList.contains('hide')
		? showElements()
		: hideElements();
};

const clearInputCity = () => {
    inputCity.value = '';
}

const toggleButtonSearchCity = () => {
    btnSearchValue.classList.contains('hide')
    ? (btnSearchValue.classList.remove('hide'), btnSearchValue.classList.add('show'))
    : (btnSearchValue.classList.remove('show'), btnSearchValue.classList.add('hide'));
}

const showElements = () => {
    inputCity.classList.remove('hide');
    closeInputButton.classList.remove('hide');
}

const hideElements = () => {
    inputCity.classList.add('hide');
    closeInputButton.classList.add('hide');
}

const handleInputCity = event => {

    if (event.target.value !== '') {
        closeInputButton.classList.add('hide');
        btnSearchValue.classList.remove('hide');
        btnSearchValue.classList.add('show');
    } else if (event.target.value === '') {
        closeInputButton.classList.remove('hide');
        btnSearchValue.classList.add('hide');
        btnSearchValue.classList.remove('show');
    }

    if (event.key !== 'Enter') return;
    
    toggleInputCity();
    searchCity();
    clearInputCity();
};

const searchCity = () => {
    console.log(inputCity.value);
    toggleButtonSearchCity();
    hideElements();
    clearInputCity();
}

searchButton.addEventListener('click', toggleInputCity);
inputCity.addEventListener('keyup', handleInputCity);
closeInputButton.addEventListener('click', toggleInputCity);
btnSearchValue.addEventListener('click', searchCity)