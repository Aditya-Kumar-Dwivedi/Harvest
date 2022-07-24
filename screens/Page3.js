import { StyleSheet, Text, View ,Button,TouchableOpacity,ScrollView,SafeAreaView,Modal} from 'react-native'
import React,{useState} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import api from '../shared/api'
const Page3 = ({navigation}) => {
  const [modalOpen,setModalOpen]=useState(false);

  return (
    <View>
    <View style={{padding:30,}}>
      <Text style={{fontSize:18,fontWeight:'bold',paddingBottom:30}}>Proceed With Payment</Text>
      <Text style={{fontSize:16}}>Installment                                     Rs 100000</Text>
      <Text style={{fontSize:16}}>Other Charges and Tax                 Rs 100</Text>
      <Text style={{fontSize:20,fontWeight:'bold',color:'blue',paddingTop:30}}>Total Deposit                       Rs 100000</Text>
    </View>

    <View >
      <Modal  transparent visible={modalOpen} animationType='slide' style={styles.modalContainer} >
        <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
        <View style={{justifyContent:'center',alignContent:'center',padding:20}}>
          <Text style={{fontSize:18,color:'blue'}}>
            Are You Sure you want to Quit
          </Text>
          </View>
          <Text>The information you entered will not be saved</Text>
          <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            <View style={{ flex: 1 ,padding:30}}>
          <Button title='Yes,Quit' onPress={()=>navigation.navigate('Home')} style={{alignSelf:'stretch'}}/>
          </View >
          <View  style={{ flex: 1 ,padding:30}}>

          <Button title ='cancel' onPress={()=>setModalOpen(false)} style={{alignSelf:'stretch',padding:30}}/>
          </View>
          </View>
        </View>
        </View>
      </Modal>
      </View>

    <View style={styles.container}>
    <View style={{flexDirection:'row',flexWrap:'wrap',padding:30}}>
     <TouchableOpacity style={{paddingRight:120}}>
     <MaterialIcons name="arrow-back" size={35} color="blue"  onPress={()=>setModalOpen(true)}/>
     </TouchableOpacity>
    <Button title='Proceed to Payment' onPress={api()} />

    </View>
    </View>
    </View>
  )
}

export default Page3

const styles = StyleSheet.create({
modalBackground:{
  flex:1,
  backgroundColor:'rgba(0,0,0,0.5)',
  justifyContent:'center',
  alignItems:'center'

},
modalContainer: {
  width:'80%',
  backgroundColor:'white',
  paddingHorizontal:20,
  paddingVertical:20,
  borderRadius:20,
  elevation:20,


},
container:{
 
  position: 'absolute', //Here is the trick
    bottom: -350,
}
})