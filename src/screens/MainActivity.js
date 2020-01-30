import React, { Component } from 'react'; 
import { StyleSheet, View, Alert, TextInput, Text, TouchableOpacity } from 'react-native';

export default class MainActivity extends Component {
  static navigationOptions = {
    title: 'MainActivity',
  };

  constructor(props) {  
    super(props)  
    this.state = {  
      TextInput_Product_Tag: '',
      TextInput_Product_Nome: '',
      TextInput_Product_Tipo: '',
      TextInput_Product_Imagem: '',
      TextInput_Product_Obs: '',  
    }
  }
 
  InsertProductRecordsToServer = () => { 
    fetch('https://servidor.rodrigodacruz.com.br/Crud/InsertProduct', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      tag: this.state.TextInput_Product_Tag,
      nome: this.state.TextInput_Product_Nome,
      tipo: this.state.TextInput_Product_Tipo,
      imagem: this.state.TextInput_Product_Imagem,
      observacao: this.state.TextInput_Product_Obs, 
    })
  
    }).then((response) => response.json())
    .then((responseJson) => {

    // Showing response message coming from server after inserting records.
    Alert.alert(responseJson);

    }).catch((error) => {
      console.error(error);
    });
  
  }
 
  GoTo_Show_ProductList_Activity_Function = () => {
    this.props.navigation.navigate('Second');
  }
 
  render() {
    return (
      <View style={styles.MainContainer}>
 
 
        <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Student Registration Form </Text>

        <TextInput         
          placeholder="Enter Product TAG" 
          onChangeText={ TextInputValue => this.setState({ TextInput_Product_Tag : TextInputValue }) } 
          underlineColorAndroid='transparent' 
          style={styles.TextInputStyleClass}
        />

        <TextInput         
          placeholder="Enter Product Nome" 
          onChangeText={ TextInputValue => this.setState({ TextInput_Product_Nome : TextInputValue }) } 
          underlineColorAndroid='transparent' 
          style={styles.TextInputStyleClass}
        />

        <TextInput         
          placeholder="Enter Product Tipo" 
          onChangeText={ TextInputValue => this.setState({ TextInput_Product_Tipo : TextInputValue }) } 
          underlineColorAndroid='transparent' 
          style={styles.TextInputStyleClass}
        />

        <TextInput         
          placeholder="Enter Product Imagem" 
          onChangeText={ TextInputValue => this.setState({ TextInput_Product_Imagem : TextInputValue }) } 
          underlineColorAndroid='transparent' 
          style={styles.TextInputStyleClass}
        />

        <TextInput         
          placeholder="Enter Product Observation" 
          onChangeText={ TextInputValue => this.setState({ TextInput_Product_Obs : TextInputValue }) } 
          underlineColorAndroid='transparent' 
          style={styles.TextInputStyleClass}
        />
 

      <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.InsertProductRecordsToServer} >
        <Text style={styles.TextStyle}> INSERT PRODUCTS RECORD TO SERVER </Text>
      </TouchableOpacity>
 
      <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.GoTo_Show_ProductList_Activity_Function} >
        <Text style={styles.TextStyle}> SHOW ALL INSERTED PRODUCTS RECORDS IN LISTVIEW </Text>
      </TouchableOpacity>
      </View>     
    );
  }
}

const styles = StyleSheet.create({
  MainContainer :{
    alignItems: 'center',
    flex:1,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  TextInputStyleClass: {
    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5,
  },
  TouchableOpacityStyle: {
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:7,
    width: '90%',
    backgroundColor: '#00BCD4'
  },
  TextStyle:{
    color:'#fff',
    textAlign:'center',
  },
});