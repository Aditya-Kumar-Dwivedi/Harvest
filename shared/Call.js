import { StyleSheet, Text, View,TouchableOpacity ,FlatList,Image,ScrollView,SafeAreaView,Modal} from 'react-native'
import React ,{useState} from 'react'
import {images} from '../styles/global'
import Card from '../shared/Card'
import {Dimensions} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

 export const Call=()=>{

    const [box,setBox]=useState([
        {title:"shirt",key:'1'},
        {title:'pant',key:'2'}
      ]);
    
    console.log("hiii");
    return(
    <View>
      {console.log("hey")}
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
    )
    
  }
  // export default Call
  export const Call1=()=>{
    const [box,setBox]=useState([
      {title:"shirt",key:'1'},
      {title:'pant',key:'2'}
    ]);
    const[circle,setCircle]=useState([
      {title:'glasses',key:'4'},
      {title:'contacts',key:'5'},
      {title:'sunglasses',key:'6'}
    ]);
    return(
    <View>
     
          <View style={{flexDirection:'row'}}>
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
      <View style={{flexDirection:'row',justifyContent:'center'}}>
           <Text style={{padding:8,fontSize:15,flex: 1, flexWrap: 'wrap'}}>
              You can get (product name) by the end of <Text style={{color:'blue'}}>(#) months</Text>
           </Text>
           <Text style={{padding:8,fontSize:15,flex: 1, flexWrap: 'wrap'}}>
             You can get (product name) by the end of <Text style={{color:'blue'}}>(#) months</Text>
           </Text>
         </View>
         <View style={{flexDirection:'row'}}>
         {/* <Carousel */}
        <FlatList style={styles.list} 
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
      />

       

      </View>
    </View>

  )}

 const styles=StyleSheet.create({

    brandName:{
        fontWeight:'bold',
        color:'#333',
      },
      images2:{
        flex:1,
        flexDirection:'row',
        width:Dimensions.get('screen').width*.35,
        height:Dimensions.get('screen').height*.35,
      },
      list :{
      
        flexDirection:'column',
        padding:25,
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
        // padding:30
    },
    images2:{
      flex:1,
      flexDirection:'row',
      width: Dimensions.get('window').width * 0.3,
      height: Dimensions.get('window').width * 0.3,
      resizeMode:'contain'
    },
  })