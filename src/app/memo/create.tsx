import {
    View, TextInput, StyleSheet , ScrollView, KeyboardAvoidingView
} from 'react-native'
import { Feather } from "@expo/vector-icons";
import { router } from 'expo-router'
import { collection, addDoc } from 'firebase/firestore'



import CircleButton from '../../components/CircleButton'
import { db } from '../../config'

const handlePress = (): void => {
    addDoc(collection(db, 'memos'), {
        bodyText: 'testtinko'
})
        .then((docRef) => {
            console.log('success', docRef.id)
            router.back()
        })
        .catch((error) => {
            console.log(error)
        })
//  await addDoc(collection(db, 'memos'), {
//     bodyText: 'test wakaranasugiru'
//  })
//     .catch((error) => {
//         console.log(error)
//     })
//  router.back()
}



const Create = ():JSX.Element => {
    return(
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <ScrollView style={styles.inputContainer}>
                <TextInput multiline style={styles.input} value={''} />
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

export default Create
