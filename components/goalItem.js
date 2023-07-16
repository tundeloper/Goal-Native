
import { StyleSheet, View, Text, Pressable } from "react-native"

export default function GoalItem({ text, onDeleteItem, id }) {
  return <View style={styles.goalItem}>
    <Pressable android_ripple={{ color: '#ddddddd' }} onPress={onDeleteItem.bind(null, id)} style={({pressed}) => pressed && styles.pressedItem} >
      <Text style={styles.goalText}>{text}</Text>
    </Pressable>
  </View>
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e08cc",
      },
      goalText: {
        padding: 8,
        color: "white",
      },
      pressedItem: {
        opacity: 0.5
      }
 })