import { StyleSheet, Text, View,FlatList,Image,ScrollView,SafeAreaView,TextInput } from 'react-native'
import React,{useState} from 'react'
import { Button ,Dimensions} from 'react-native'
import Card from '../shared/Card'
import {Picker} from '@react-native-picker/picker'
import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker'
import { globalStyles,images } from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons';
const Home = ({navigation}) => {
    const [box,setBox]=useState([
      {title:"shirt",key:'1'},
      {title:'pant',key:'2'}
    ]);
    const [box1,setBox1]=useState([
      {title:"shirt",key:'3'},
    ]);
const [pickerValues1,setPickerValues1]=useState('INR')
const [pickerValues2,setPickerValues2]=useState('Per-Month')
React.useLayoutEffect(() => {
  navigation.setOptions({
      headerRight: () =>       <MaterialIcons name="shopping-cart" size={35} color="black"  onPress={()=>setModalOpen(true)}/>
      ,
  });
}, [navigation]);
  return (
    <SafeAreaView>
    <ScrollView>
    <View>
      <View>
      <Text style={styles.works}>How it Works</Text>
      
      </View>
      <View>
        <Text style={styles.works}>Chosse What you want to buy</Text>
        
      </View>
    <FlatList style={styles.list} scrollEnabled={false} listMode="SCROLLVIEW"
       data={box}
       renderItem={({item})=>(
          <Card style={styles.card}>
          <View>
          <Image source={images.ratings[item.key]}
          style={styles.images}/>
          </View>  
          <Text style={styles.brandName}>Brand Name</Text>
          <Text>Product Name</Text>
           </Card>
       )}
      />
        <Text style={styles.works}>Deposit Frequency</Text>
      <View style={{marginEnd:20}}>
        
        <TextInput
                            style={globalStyles.input}
                            placeholder="Enter Amount"
                            // onChangeText={props.handleChange('rating')}
                            // value={props.values.rating}
                            keyboardType="numeric"
                        />
        
        <Picker style={styles.picker}
        selectedValue={pickerValues1}
        onValueChange={(ItemValue)=>setPickerValues1(ItemValue)}>
        <Picker.Item label='INR' value='INR' />
        <Picker.Item label='USD' value='USD' />
        <Picker.Item label='EU' value='EU' />
        <Picker.Item label='SRD' value='SRD' />

        </Picker>
        <Picker style={styles.picker}
        selectedValue={pickerValues2}
        onValueChange={(ItemValue)=>setPickerValues2(ItemValue)}>
        <Picker.Item label='Per-Month' value='INR' />
        <Picker.Item label='Per-Week' value='USD' />
        <Picker.Item label='Bi-Monthly' value='EU' />
        <Picker.Item label='Custom' value='SRD' />

        </Picker>
        <View>
        <FlatList style={styles.list} scrollEnabled={false} listMode="SCROLLVIEW"
       data={box1}
       renderItem={({item})=>(
          <Card style={styles.card}>
          <View>
          <Image source={images.ratings[item.key]}
          style={styles.images}/>
          </View>  
          <Text style={styles.brandName}>Brand Name</Text>
          <Text>Product Name</Text>
           </Card>
       )}
      />
      <Text style={styles.info}>You can get the Product Detail by the End of the Next Month</Text>
      <Text style={styles.info}>
      <Text style={styles.cancel}>Cancel anytime!</Text>
      <Text><Text style={styles.cancel}>Get </Text>your standard money back into your Bank account with<Text style={styles.cancel}> standard intreset(5%) </Text>just like your bank provides</Text>
      </Text>
        </View>
      </View>
    
            <Button title ="sign up for harvest" onPress={()=>navigation.navigate("Page1")}/>
    </View>
    <View style={styles.icons}>
    <MaterialIcons name="home" size={35} color="blue" />
    <MaterialIcons name="search" size={35} color="blue" />
    <MaterialIcons name="stacked-line-chart" size={35} color="blue" />
    <MaterialIcons name="shopping-bag" size={35} color="blue" />
    <MaterialIcons name="contact-phone" size={35} color="blue" />
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles=StyleSheet.create({
  
  works :{
    fontSize:18,
    fontWeight:'bold',
    color:'blue',
    paddingTop:18,
    paddingLeft:12,
    paddingBottom:19
  },
  picker :{

  },
  list :{
      
    flexDirection:'column',
    padding:25,
  },
  images:{
    flex:1,
    width:Dimensions.get('screen').width*.78,
    height:Dimensions.get('screen').height*.78,
    
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
images2:{
  padding:25,
  height:200,
  width:200,
  marginLeft:100,
},
brandName:{
  fontWeight:'bold',
  color:'#333',
},
info:{
  alignItems:'center',
  justifyContent:'center',
  padding:18,
  fontSize:18,
},
icons:{
   flexDirection:'row',
   letterSpacing:1,
   justifyContent:'space-evenly',
   padding:20,
  
},
cancel:{
  color:'red',
}
  

})
