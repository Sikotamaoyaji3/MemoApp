import {
    View, TextInput, StyleSheet , ScrollView, KeyboardAvoidingView
} from 'react-native'
import { Feather } from "@expo/vector-icons";
import { router } from 'expo-router'


import CircleButton from '../../components/CircleButton'

const handlePress = (): void => {
    router.back()
}
const Edit = ():JSX.Element => {
    return(
        <KeyboardAvoidingView behavior='height' style={styles.container}>

            <ScrollView style={styles.inputContainer}>
                <TextInput multiline style={styles.input} value={'買い物\nリスト'} />
            </ScrollView>
            <CircleButton onPress={handlePress}>
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

export default Edit
