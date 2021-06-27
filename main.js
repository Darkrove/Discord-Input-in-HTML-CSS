feather.replace();


const input = document.querySelector('input');

input.addEventListener('input', () => {

    const rxSpaces = /\s+/g;
    const rxDashes = /-+/g;
    const rxDastStart = /^-/;

    input.value = input.value
    .replace(rxSpaces, '-')
    .replace(rxDashes, '-')
    .replace(rxDastStart, '');
})