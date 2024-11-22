import { View, Text, TextInput,
    TouchableOpacity, StyleSheet } from 'react-native'

import { Link, router } from 'expo-router'


import Button from '../../components/button'


const handlePress = (): void => {
    //会員登録//
    router.push('/memo/list')
}
const SignUp = (): JSX.Element => {
    return(
        <View style={styles.container}>

            <View style= {styles.textContainer}>
                <Text style= {styles.title}>Sign Up</Text>
                <TextInput style= {styles.textInput} value='Email Address'/>
                <TextInput style= {styles.textInput} value='Password' />
                <Button label='submit' onPress={handlePress}/>
                <View style = {styles.footer}>
                    <Text style = {styles.footerText}>Already registered?</Text>
                    <Link href='/auth/log_in' asChild>
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
