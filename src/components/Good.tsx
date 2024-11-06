import { View, Text, StyleSheet, type TextStyle} from 'react-native'

interface Props {
    children: string
    style?: TextStyle
}


const Good = (props:Props): JSX.Element => {
    const { children, style} = props
    return (
        <View style={[styles.text, style]}>
            <Text>{children}いいね</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    text:{
        color: '#fff',
        backgroundColor: 'blue',
        padding: 10
    }
})


export default Good
