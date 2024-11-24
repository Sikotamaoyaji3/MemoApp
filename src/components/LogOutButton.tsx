import { router } from "expo-router";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


const handlePress = (): void => {
    router.push('/auth/sign_up')
}
const LogOutButton = (): JSX.Element => {
    return (
        <TouchableOpacity>
            <Text style={styles.text} >ログアウト</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        lineHeight: 24,
        color: 'rgba(255,255,255,0.7)'
    }
})

export default LogOutButton
