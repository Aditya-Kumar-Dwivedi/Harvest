import { StyleSheet, Text, View,TouchableOpacity ,FlatList,Image,SafeAreaView,Modal,Button,ScrollView} from 'react-native'
import React ,{useState} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/Card'
import CicularCards from '../shared/CircularCards'
import {Dimensions} from 'react-native'
import { globalStyles,images } from '../styles/global'
import {Call,Arrowicon} from '../shared/Call'
import Header from '../shared/Header';
// import {ScrollView} from 'react-native-virtualized-view'


const Page1 = ({navigation}) => {

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
  // const fun1=()=>(
  //   <Call/>
  // )
  const [product,setProduct]=useState(false)
  const fun1=()=>{

    <View>
    {setProduct(true)}
    <Text style={{fontSize:20,paddingLeft:30,fontWeight:'bold'}}>Chosen Products</Text>
    <FlatList style={styles.list} scrollEnabled={false}
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

     </View>
  }
  return (
    <SafeAreaView>
      <ScrollView>
    <View>
      
      <Text style={{fontSize:20,fontWeight:'bold',paddingTop:20,paddingLeft:30}}> Choose Upto 3 Products</Text>
      <TouchableOpacity onPress={()=>{fun1()}}>
      <FlatList style={styles.list} scrollEnabled={false}
       data={box}
       renderItem={({item})=>(
          <Card style={styles.card}>
          <View>
          <Image 
          source={images.ratings[item.key]}
          style={styles.images}/>
          </View>  
          <Text style={styles.brandName}>Brand Name</Text>
          <Text>Product Name</Text>
           </Card>
       )}
      />
      
      </TouchableOpacity>
      <View  style={styles.or}>

      <Text  style={styles.orT}>OR</Text>
      </View>


      <Text style={styles.option}>Go to Browsing Options</Text>
      <View >
         
        <FlatList style={styles.circles} scrollEnabled={false}
       data={circle}
       renderItem={({item})=>(
         <CicularCards >
            {/* <View> */}
          <Image source={images.ratings[item.key]}
          style= {styles.image1}
          resizeMode='cover'
          
          />
          {/* </View>   */}
        </CicularCards>)}
        horizontal={true}
          />
      </View>
      
      { product==true?<Call/>:null}

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
      {/* { product==true?<Arrowicon/>:null} */}
      <View >
      <TouchableOpacity>
      <MaterialIcons name="arrow-forward" size={35} color="blue"  
      onPress={()=>navigation.navigate("Page2")}/>
      </TouchableOpacity>
      </View>
      </View>
      
     
      

    </View>
    </ScrollView>
    </SafeAreaView>
    
    
  )
}

export default Page1

const styles=StyleSheet.create({
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
brandName:{
  fontWeight:'bold',
  color:'#333',
},
images:{
  flex:1,
  width:Dimensions.get('screen').width*.78,
  height:Dimensions.get('screen').height*.78,
  resizeMode:'cover'
  
},
list :{
      
  flexDirection:'column',
  padding:25,
},
arrow:{
  flexDirection:'row'
},
arrowhead1 :{
   justifyContent:'flex-start',
   marginRight:340,

},
or:{
  justifyContent:'center',
  alignItems:'center',
  
},
orT:{
  fontWeight:'bold',
  color:'#333',
  fontSize:28
},
option:{
  padding:30,
  fontSize:16
},
circles :{
  flexDirection:'row',
  padding:10,
  shadowColor: '#333',
    shadowOpacity: 0.9,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
},
image1:{
  // flex: 1,
  // width:'100%',
  // height:'100%',
  //  borderRadius:50,
  //  resizeMode:'cover'
  // borderWidth:2,
  // borderColor:'red',
  alignSelf:'center',
  width: 122,
  height: 122,
  borderRadius: 122/2,
  overflow: "hidden",
  // borderWidth: 3,
  // borderColor: "red"

},
images2:{
  flex:1,
  flexDirection:'row',
  width:Dimensions.get('screen').width*.35,
  height:Dimensions.get('screen').height*.35,
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


}})

//a[key]++;