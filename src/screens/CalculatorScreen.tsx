import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { ButtonCalculator } from '../components/ButtonCalculator';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';


export const CalculatorScreen = () => {

    const { 
        previousNumber,
        number,
        clear,
        positiveNegative,
        btnAdd,
        btnDelete,
        btnDivide,
        btnMultiply,
        btnSubstract,
        calculate,
        makeNumber,
    } = useCalculator();

    return (
        <View style={styles.calculatorContainter}>
            {
                (previousNumber !== '0') && (
                    <Text style={styles.resultSmall}>{previousNumber}</Text>
                )
            }
            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {number}
            </Text>

            {/* Row buttons */}
            <View style={styles.row}>
                <ButtonCalculator text="C" color="#9B9B9B" action={clear} />
                <ButtonCalculator text="+/-" color="#9B9B9B" action={positiveNegative} />
                <ButtonCalculator text="del" color="#9B9B9B" action={btnDelete} />
                <ButtonCalculator text="/" color="#FF9427" action={btnDivide} />
            </View>
            {/* Row buttons */}
            <View style={styles.row}>
                <ButtonCalculator text="7" action={makeNumber} />
                <ButtonCalculator text="8" action={makeNumber} />
                <ButtonCalculator text="9" action={makeNumber} />
                <ButtonCalculator text="X" color="#FF9427" action={btnMultiply} />
            </View>
            {/* Row buttons */}
            <View style={styles.row}>
                <ButtonCalculator text="4" action={makeNumber} />
                <ButtonCalculator text="5" action={makeNumber} />
                <ButtonCalculator text="6" action={makeNumber} />
                <ButtonCalculator text="-" color="#FF9427" action={btnSubstract} />
            </View>
            {/* Row buttons */}
            <View style={styles.row}>
                <ButtonCalculator text="1" action={makeNumber} />
                <ButtonCalculator text="2" action={makeNumber} />
                <ButtonCalculator text="3" action={makeNumber} />
                <ButtonCalculator text="+" color="#FF9427" action={btnAdd} />
            </View>
            {/* Row buttons */}
            <View style={styles.row}>
                <ButtonCalculator text="0" isWidth action={makeNumber} />
                <ButtonCalculator text="." action={makeNumber} />
                <ButtonCalculator text="=" color="#FF9427" action={calculate} />
            </View>
        </View>
    );
}
