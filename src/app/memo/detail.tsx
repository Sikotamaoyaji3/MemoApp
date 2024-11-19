import { View, Text, ScrollView, StyleSheet, } from 'react-native'

import { Feather } from '@expo/vector-icons'
import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

const Detail = (): JSX.Element => {
    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2024年11月10日</Text>
            </View>

            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。本文用なので使い方を待つがえる事もありますので要注意。

                    カタカナ語が苦手な方は、『組見本』と呼ぶと良いでしょう。なお、組見本の『組』とは、文字組のことです。活字印刷時代の用語だったと思います。

                </Text>
            </ScrollView>

            <CircleButton style={{ top: 160 , bottom: 'auto'}}>
                <Feather name='pen-tool' size={20}/>
            </CircleButton>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    memoHeader: {
        height: 96,
        color: '#ffffff',
        backgroundColor: '#467FD3',
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold'
    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }

})



export default Detail
