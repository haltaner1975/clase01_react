
function probandoEvery() {
    const valoresEntre10y20 = (currentValue) => currentValue <= 20 && currentValue >= 10;
    const array1 = [12, 15, 19, 10, 11, 20];
    console.log(`Every: ${array1.every(valoresEntre10y20)}`);
}

function probandoFindIndex() {
    const arr = ['z', 'y', 'x'];
    console.log(`FindIndex: ${arr.findIndex(x => x === 'x')}`);
}


function probandoSome() {
    const valoresEntre10y20 = (currentValue) => currentValue <= 20 && currentValue >= 10;
    const array1 = [1, 30, 41, 29, 10, 13];
    console.log(`Some: ${array1.some(valoresEntre10y20)}`);
}

function probandoFilter() {
    const nombres = ['Ancud', 'Castro', 'Quellon', 'Quemchi', 'Chacao'];
    const result = nombres.filter(x => x.startsWith('Q'));
    console.log(`Filter: ${result}`);
}

function probandoMap() {
    const cols = ['ciudad', 'codigo', 'fecha_fundacion', 'id'];
    const colsWithPrefix = cols.map(x => `ciudad - ${x}`);
    console.log(`Map: columnas: ${cols} columnas con prefijo (ciudad): ${colsWithPrefix}`);
}


probandoEvery();
probandoFindIndex();
probandoSome();
probandoFilter();
probandoMap();