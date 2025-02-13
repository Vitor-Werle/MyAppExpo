import React, {useState}from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import ResultImc from './ResultImc';
import styles from './style';

export default function Form() {
    
const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessage] = useState("Preencha o peso e altura")
const [textButton, setTextButton] = useState("Calcular")
const [imc, setImc] = useState(null)

function ImcCalculator() {
    return setImc((weight / (height*height)).toFixed(2))
}

function validationImc() {
    if(weight != null && height != null) {
        ImcCalculator()
        setHeight(null)
        setWeight(null)
        setMessage("Seu imc é:")
        setTextButton("Calcular novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessage("Preencha peso e altura")
}

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder='Ex. 1.98'
                keyboardType='numeric'
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder='Ex. 89.230'
                keyboardType='numeric'
                />
                <TouchableOpacity
                style={styles.ButtonCalculator}
                onPress={() => {
                    validationImc()
                }}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}