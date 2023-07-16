import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, FlatList } from 'react-native-web';
import GoalItem from './components/goalItem';
import Goalinput from './components/goalinput';

export default function App() {
  const [modalIsVisible, setModalisVisible] = useState(false)
  const [courseGoal, setCourseGoal] = useState([])

  const startGoalHandler = () => setModalisVisible(true)
  const endGoalHandler = () => setModalisVisible(false )

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoal(currentCourseGoal => [...courseGoal, { text: enteredGoalText, key: Math.random().toString() }])
    endGoalHandler()
  }

  const deleteGoalHandler = (id) => {
    return setCourseGoal(currentCourseGoal => currentCourseGoal.filter(goal => {
      return goal.key !== id
    }))
  }


  return (
    <>
      <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#a065ec' onPress={startGoalHandler} />
      <Goalinput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endGoalHandler}/>
      <View style={styles.goalscontainer}>
        <FlatList data={courseGoal} renderItem={itemData => <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.key}/>} />
      </View>
    </View>
    </>
  );
}  

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
    // width: '100%'
  },
  goalscontainer: {
    flex: 5,
    // backgroundColor: 'red',
    // overflow: 'scroll'
    
  },

});
