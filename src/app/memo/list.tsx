import { StyleSheet, View, ScrollView} from "react-native";
import { Feather } from "@expo/vector-icons";
import { router, useNavigation } from 'expo-router'
import { useEffect } from "react";


import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import LogOutButton from "../../components/LogOutButton";
import Icon from "../../components/icon";

const handlePress = (): void => {
  router.push('/memo/create')
}
const List = (): JSX.Element => {
  const navgation = useNavigation()
  useEffect(() => {//これはreactコンポーネントだからuseEffectはこの中では使えない//
    navgation.setOptions({
      headerRight: () => {return <LogOutButton/>}
    })
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </ScrollView>

      <CircleButton onPress={handlePress}>
        <Feather name="plus" size={40}/>
      </CircleButton>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff'
  },
  button: {
    position:'absolute',
    right: 40,
    bottom: 80
  }
})

export default List
