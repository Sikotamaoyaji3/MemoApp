import { Feather } from '@expo/vector-icons'
import { View, StyleSheet, Text } from 'react-native'



const Footer = ():JSX.Element => {
    return (
        <View style={styles.footContainer}>
            <View >
                <Text style={styles.footerInner}>作成：せきやっちょ<Feather name='award' size={10} color={'#ffffff'}/></Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    footContainer: {
        height: 100,
        width: '100%',
        backgroundColor: '#467Fd3',
        position: 'absolute',
        bottom: 0
    },
    footerInner: {
        fontSize: 9,
        color: '#ffffff',
        paddingVertical: 5,
        paddingHorizontal: 8
    }
})

export default Footer
