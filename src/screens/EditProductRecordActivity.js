import React,{Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class EditProductRecordActivity extends Component {
  
  constructor(props) {
    super(props)  
    this.state = {  
      TextInput_Product_Id: '',
      TextInput_Product_Tag: '',
      TextInput_Product_Nome: '',
      TextInput_Product_Tipo: '',
      TextInput_Product_Imagem: '',
      TextInput_Product_Obs: '',  
    }
  }
 
  componentDidMount(){
  // Received Student Details Sent From Previous Activity and Set Into State.
    this.setState({ 
      TextInput_Product_Id : this.props.navigation.state.params.ID,
      TextInput_Product_Tag: this.props.navigation.state.params.TAG,
      TextInput_Product_Nome: this.props.navigation.state.params.NOME,
      TextInput_Product_Tipo: this.props.navigation.state.params.TIPO,
      TextInput_Product_Imagem: this.props.navigation.state.params.IMAGEM,
      TextInput_Product_Obs: this.props.navigation.state.params.OBSERVACAO,
    })

  }
  
  static navigationOptions = {
    title: 'EditProductRecordActivity',
  };
 
  UpdateProductRecord = () => {
    fetch('https://servidor.rodrigodacruz.com.br/Crud/UpdateProduct.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: this.state.TextInput_Product_id,
      tag: this.state.TextInput_Product_Tag, 
      nome: this.state.TextInput_Product_Nome,
      tipo: this.state.TextInput_Product_Tipo,
      imagem: this.state.TextInput_Product_Imagem,
      observacao: this.state.TextInput_Product_Obs,
    })

    }).then((response) => response.json())
      .then((responseJson) => {

        // Showing response message coming from server updating records.
        Alert.alert(responseJson);

      }).catch((error) => {
        console.error(error);
      });
  }
 
 
  DeleteProductRecord = () => {
    fetch('https://servidor.rodrigodacruz.com.br/Crud/Deleteproduct.php', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: this.state.TextInput_Product_id
    })
  
    }).then((response) => response.json())
    .then((responseJson) => {
  
      // Showing response message coming from server after inserting records.
      Alert.alert(responseJson);
  
    }).catch((error) => {
        console.error(error);
    });

    this.props.navigation.navigate('First');
  }
 
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Edit Product Record Form </Text>
  
        <TextInput            
          placeholder="Product TAG Shows Here"            
          value={this.state.TextInput_Product_Tag}   
          onChangeText={ TextInputValue => this.setState({ TextInput_Product_Tag : TextInputValue }) }   
          underlineColorAndroid='transparent'   
          style={styles.TextInputStyleClass}
        />

        <TextInput            
          placeholder="Product NOME Shows Here"            
          value={this.state.TextInput_Product_Nome}   
          onChangeText={ TextInputValue => this.setState({ TextInput_Product_Nome : TextInputValue }) }   
          underlineColorAndroid='transparent'   
          style={styles.TextInputStyleClass}
        />

        <TextInput            
          placeholder="Product TIPO Shows Here"            
          value={this.state.TextInput_Product_Tipo}   
          onChangeText={ TextInputValue => this.setState({ TextInput_Product_Tipo : TextInputValue }) }   
          underlineColorAndroid='transparent'   
          style={styles.TextInputStyleClass}
        />

        <TextInput            
          placeholder="Product IMAGE Shows Here"            
          value={this.state.TextInput_Product_Image}   
          onChangeText={ TextInputValue => this.setState({ TextInput_Product_Image : TextInputValue }) }   
          underlineColorAndroid='transparent'   
          style={styles.TextInputStyleClass}
        />

        <TextInput            
          placeholder="Product OBSERVACAO Shows Here"            
          value={this.state.TextInput_Product_Obs}   
          onChangeText={ TextInputValue => this.setState({ TextInput_Product_Obs : TextInputValue }) }   
          underlineColorAndroid='transparent'   
          style={styles.TextInputStyleClass}
        />
   
        <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UpdateProductRecord}>
          <Text style={styles.TextStyle}> UPDATE PRODUCT RECORD </Text>
        </TouchableOpacity>
   
        <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.DeleteProductRecord}>
          <Text style={styles.TextStyle}> DELETE CURRENT RECORD </Text>
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
    backgroundColor: '#fff',
  },
  TextInputStyleClass: {
    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5 ,
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