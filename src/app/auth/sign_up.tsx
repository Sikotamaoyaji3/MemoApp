import { View, Text, TextInput,
    TouchableOpacity, StyleSheet, Alert } from 'react-native'

import { Link, router } from 'expo-router'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../../config'
import Button from '../../components/button'


const handlePress = (email: string, password: string): void => {
    //会員登録//
    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user.uid)
            router.replace('/memo/list')
        })
        .catch((error) => {
            const { code, message} = error
            console.log( code, message)
            Alert.alert(message)
        })

}
const SignUp = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        <View style={styles.container}>

            <View style= {styles.textContainer}>
                <Text style= {styles.title}>Sign Up</Text>
                <TextInput
                style= {styles.textInput}
                value={email}
                onChangeText={(text) => {setEmail(text)}}
                autoCapitalize='none'
                keyboardType='email-address'
                placeholder='Email Address'
                textContentType='emailAddress'
                />
                <TextInput
                style= {styles.textInput}
                value={password}
                onChangeText={(text) => {setPassword(text)}}//入力をリアルタイムで検知(関数発動)、取得する//
                autoCapitalize='none'//先頭文字を小文字にする//
                secureTextEntry//打ち込んだテキストを非表示にする//
                placeholder='Password'//valueを薄く表示する//
                textContentType='password'
                />
                <Button label='submit' onPress={() => { handlePress(email, password) }}/>
                <View style = {styles.footer}>
                    <Text style = {styles.footerText}>Already registered?</Text>
                    <Link href='/auth/log_in' asChild replace>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Log In.</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8'
    },
    textContainer: {
        paddingVertical: 24,
        paddingHorizontal: 27
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#ffffff',
        height:48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16,
        color: '#DDDDDD'
    },
    footer: {
        flexDirection: 'row',
        lineHeight: 24
    },
    footerText: {
        fontSize: 14,
        marginRight: 8,
        color: '#000000'
    },
    footerLink: {
        fontSize: 14,
        color: '#467FD3'
    }

})

export default SignUp
