import { StyleSheet, View, ScrollView} from "react-native";
import { Feather } from "@expo/vector-icons";

import Header from "../../components/Header";
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/icon";
const List = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <Header />

      <ScrollView>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </ScrollView>

      <CircleButton>
        <Feather color='red' />
      </CircleButton>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff'
  },
})

export default List
