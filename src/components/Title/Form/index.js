import React, {useState}from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import ResultImc from './ResultImc';

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
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder='Ex. 1.98'
                keyboardType='numeric'
                />

                <Text>Peso</Text>
                <TextInput 
                onChangeText={setWeight}
                value={weight}
                placeholder='Ex. 89.230'
                keyboardType='numeric'
                />
                <Button 
                onPress={() => validationImc()}
                title={textButton}
                />
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}