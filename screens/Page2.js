import { StyleSheet, Text, View,TouchableOpacity,FlatList ,SafeAreaView,TextInput,Image,Modal,ScrollView} from 'react-native'
import React ,{useState}from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/Card'
import { Button ,Dimensions} from 'react-native';
import {globalStyles,images} from '../styles/global'
import {Picker} from '@react-native-picker/picker'
import Carousel from 'react-native-snap-carousel'
import {Call1} from '../shared/Call'
// import {ScrollView} from 'react-native-virtualized-view'
// import { ScrollView as GestureHandlerScrollView } from 'react-native-gesture-handler'


// import { FlatList } from 'react-native-web';


const Page2 = ({navigation}) => {
  const [pickerValues2,setPickerValues2]=useState('Per-Month')
  const [box,setBox]=useState([
    {title:"shirt",key:'1'},
    {title:'pant',key:'2'}
  ]);
  const[circle,setCircle]=useState([
    {title:'glasses',key:'4'},
    {title:'contacts',key:'5'},
    {title:'sunglasses',key:'6'}
  ]);
  const [modalOpen,setModalOpen]=useState(false);
  const [show,setShow]=useState(false);

  return (
    <SafeAreaView>
      <ScrollView>
    <View>
      <Text style={{fontSize:18,fontWeight:'bold',padding:20}}>Choose Deposit Amount</Text>
      <View style={{justifyContent:'center',alignContent:'center'}}>
      <Text style={{paddingLeft:20,paddingRight:15,paddingBottom:20,fontSize:18}}>Chosse an amount which you will be able to pay on a regular basis .It is fuuly based on yours and only yours convience .
      </Text>
      </View>
      <View>
        <TouchableOpacity >
      <TextInput
                            style={globalStyles.input}
                            placeholder="Enter Amount"
                            // onChangeText={props.handleChange('rating')}
                            // value={props.values.rating}
                            keyboardType="numeric"
                            onChangeText = {(text) => setShow(true)}
                        />
                        </TouchableOpacity>
       <Picker style={styles.picker}
        selectedValue={pickerValues2}
        onValueChange={(ItemValue)=>setPickerValues2(ItemValue)}>
        <Picker.Item label='Per-Month' value='INR' />
        <Picker.Item label='Per-Week' value='USD' />
        <Picker.Item label='Bi-Monthly' value='EU' />
        <Picker.Item label='Custom' value='SRD' />

        </Picker>
          </View>
          {/* <View style={{flexDirection:'row'}}>
          <FlatList style={styles.list}
       data={box}
       renderItem={({item})=>(
          <Card style={styles.card}>
          <View>
          <Image 
          source={images.ratings[item.key]}
          style={styles.images2}/>
          </View>  
          <Text style={styles.brandName}>Brand Name</Text>
          <Text>Product Name</Text>
           </Card>
       )}
       
       horizontal={true}
      />
      </View> */}
         
         {/* <View style={{flexDirection:'row',justifyContent:'center'}}>
           <Text style={{padding:8,fontSize:15,flex: 1, flexWrap: 'wrap'}}>
              You can get (product name) by the end of <Text style={{color:'blue'}}>(#) months</Text>
           </Text>
           <Text style={{padding:8,fontSize:15,flex: 1, flexWrap: 'wrap'}}>
             You can get (product name) by the end of <Text style={{color:'blue'}}>(#) months</Text>
           </Text>
         </View> */}

         <>
         {/* <ScrollView horizontal style={{flex:1}}> */}
          {/* <GestureHandlerScrollView horizontal/> */}
         {/* <View style={{flexDirection:'row'}}> */}
         {/* <Carousel */}
        {/* <FlatList style={styles.list}
       data={circle}
       renderItem={({item})=>(
          <Card style={styles.card}>
          <View>
          <Image 
          source={images.ratings[item.key]}
          style={styles.images2}/>
          </View>  
          <Text style={styles.brandName}>Brand Name</Text>
          <Text>Product Name</Text>
           </Card>
       )}
       sliderWidth={Dimensions.get('window').width}
       itemWidth={Dimensions.get('window').width*.3}
       
        horizontal={true}
      /> */}

       

      {/* </View> */}
      
      
      {/* </ScrollView> */}
      </>
      {show==true?<Call1/>:null}
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


      <View style={styles.arrow}>
        <View style={styles.arrowhead1}>
      <TouchableOpacity>
      <MaterialIcons name="arrow-back" size={35} color="blue"  onPress={()=>setModalOpen(true)}/>
      </TouchableOpacity>
      </View>
      <View >
      <TouchableOpacity>
      <MaterialIcons name="arrow-forward" size={35} color="blue"  onPress={()=>navigation.navigate("Page3")}/>
      </TouchableOpacity>
      </View>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Page2

const styles = StyleSheet.create({
  images:{
    flex:1,
    width:Dimensions.get('screen').width*.78,
    height:Dimensions.get('screen').height*.78,
    resizeMode:'cover'
    
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1},
    // Like box shadow
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
},
list :{
      
  flexDirection:'row',
  padding:25,
},
images2:{
  flex:1,
  flexDirection:'row',
  width: Dimensions.get('window').width * 0.3,
  height: Dimensions.get('window').width * 0.3,
  resizeMode:'contain'
},
arrow:{
  flexDirection:'row'
},
arrowhead1 :{
   justifyContent:'flex-start',
   marginRight:340,

},
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


}
})