import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default class imgCall extends React.Component{

    apiHandler=()=>{
        const url="http://18.190.154.188:9000/products/getAllPrdctOnCond"
        fetch(url).then((res)=>res.json())
        .then((resJson)=>{
            this.setState({data:resJson})
        })
    }
    render(){
        return(
            <View>
                {
                    data.map((item,index)=>{
                        return(
                            <View style={{height:80,width:200,justifyContent:'center'}}>
                            <Image source={{url:item.url}} style={{height:50,width:200}}/>

                            </View>
                        )
                    })
                }
            </View>
        )
    }

}
// export default imgCall

const styles = StyleSheet.create({})