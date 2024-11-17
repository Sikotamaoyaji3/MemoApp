import {
    View, TextInput, StyleSheet , ScrollView, KeyboardAvoidingView
} from 'react-native'
import { Feather } from "@expo/vector-icons";


import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

const Create = ():JSX.Element => {
    return(
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <Header/>
            <ScrollView style={styles.inputContainer}>
                <TextInput multiline style={styles.input} value={''} />
            </ScrollView>
            <CircleButton>
                <Feather name='check' size={40} color='#ffffff' />
            </CircleButton>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    inputContainer: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        backgroundColor: '#ffffff',
        flex: 1
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
        backgroundColor: '#ffffff'
    }
})

export default Create
