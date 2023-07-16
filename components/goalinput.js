import { View, TextInput, Button, StyleSheet, Image } from "react-native"
import { useState } from "react"
import { Modal } from "react-native-web"

export default function Goalinput({ onAddGoal, visible, onCancel }) {
    const [enteredGoalText, setEnteredGoalText] = useState('')
 
    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }
    
    const addGoal = () => {
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }
    return <Modal visible={visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/splash.png')}/>
            <TextInput style={styles.textInput} placeholder="Your course goal" onChangeText={goalInputHandler} value={enteredGoalText} />
            <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title="Add goal" onPress={addGoal} color='#b190f0' /></View>
                <View><Button title="Cancel" onPress={onCancel} color='#f31282' /></View>
            </View>
        </View>
    </Modal>
}
 
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
        marginTop: -230
    },
    image: {
        width: 200,
        height: 200,
        margin: 20,
    },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120428', 
        borderRadius: 6,
        width: "100%",
        marginRight: 8,
        padding: 10 ,
        height: 50,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})