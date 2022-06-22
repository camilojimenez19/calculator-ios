import { useRef, useState } from 'react'

enum Operations {
    add, substract, multiply, divide
}

export const useCalculator = () => {

    const [number, setNumber] = useState('0');
    const [previousNumber, setPreviousNumber] = useState('0')

    const lastOperation = useRef<Operations>();

    /** Funcion para limpiar la calculadora */
    const clear = () => {
        setNumber('0');
        setPreviousNumber('0');
    }

    /** Funcion para armar el numero principal */
    const makeNumber = (textNumber: string) => {

        /** Validacion para no aceptar doble punto */
        if (number.includes('.') && textNumber === '.') return;

        /** Validar si el numero comienza con 0 (Para decimales) */
        if (number.startsWith('0') || number.startsWith('-0')) {

            /** Punto decimal */
            if (textNumber === '.') {
                setNumber(number + textNumber);

                /** Evaluar si es otro cero, y hay un punto */
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber);

                /** Evaluar si es diferente de 0 y no tiene un punto */
            } else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber)

                /** Evitar 0000.0 */
            } else if (textNumber === '0' && !number.includes('.')) {
                setNumber(number)
            } else {
                setNumber(number + textNumber);
            }

        } else {
            setNumber(number + textNumber);
        }
    }

    /** Funcion para el boton DEL */
    const btnDelete = () => {

        let negative: string = '';
        let numberTemp: string = number;

        if (number.includes('-')) {
            negative = '-';
            numberTemp = number.substring(1);
        }


        if (numberTemp.length > 1) {
            setNumber(negative + numberTemp.slice(0, -1))
        } else {
            setNumber('0')
        }
    }

    /** Funcion para cambiar el signo del resultado */
    const positiveNegative = () => {

        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber(`-${number}`);
        }
    }

    /** Funcion para cambiar el numero y dejar el historial */
    const changeNumbertoPrevious = () => {

        if (number === '0') return;

        if (number.endsWith('.')) {
            setPreviousNumber(number.slice(0, -1));
        } else {
            setPreviousNumber(number);
        }

        setNumber('0');
    }

    /** Funcion para dividir */
    const btnDivide = () => {
        changeNumbertoPrevious();
        lastOperation.current = Operations.divide;
    }

    /** Funcion para multiplicar */
    const btnMultiply = () => {
        changeNumbertoPrevious();
        lastOperation.current = Operations.multiply;
    }

    /** Funcion para restar */
    const btnSubstract = () => {
        changeNumbertoPrevious();
        lastOperation.current = Operations.substract;
    }

    /** Funcion para sumar */
    const btnAdd = () => {
        changeNumbertoPrevious();
        lastOperation.current = Operations.add;
    }

    const calculate = () => {

        const number1 = Number(number);
        const number2 = Number(previousNumber);

        switch (lastOperation.current) {
            case Operations.add:
                setNumber(`${number1 + number2}`)
                break;
            case Operations.substract:
                setNumber(`${number2 - number1}`)
                break;
            case Operations.multiply:
                setNumber(`${number1 * number2}`)
                break;
            case Operations.divide:
                setNumber(`${number2 / number1}`)
                break;
        }

        setPreviousNumber('0')
    }

    return {
        number,
        previousNumber,
        clear,
        positiveNegative,
        btnAdd,
        btnDelete,
        btnMultiply,
        btnSubstract,
        btnDivide,
        makeNumber,
        calculate,
    }
}
