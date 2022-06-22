import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculatorContainter:{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10,
    },
    resultSmall: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    button:{
        height: 80,
        width: 80,
        borderRadius: 100,
        backgroundColor: '#2D2D2D',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonText:{
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: '300',
        padding: 10,
    },
});
