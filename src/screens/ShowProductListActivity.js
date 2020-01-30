import React,{Component} from 'react';
import { View, ListView, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default class ShowProductListActivity extends Component {
 
  constructor(props) { 
    super(props);
    this.state = {
      isLoading: true
    }
  }
 
  static navigationOptions = {
    title: 'ShowProductListActivity',
  };
 
  componentDidMount() {
    return fetch('https://servidor.rodrigodacruz.com.br/Crud/ShowAllProductsList.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
    
  GetProductIDFunction=(id, tag, nome, tipo, imagem, observacao)=>{
    this.props.navigation.navigate('Third', { 
      ID : id,
      TAG : tag,
      NAME : nome,
      TIPO : tipo,
      IMAGEM : imagem,
      OBSERVACAO : observacao
    });
  }
 
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
 
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer_For_Show_ProductList_Activity}>
        <ListView
          dataSource={this.state.dataSource}
          renderSeparator= {this.ListViewItemSeparator}
          renderRow={ (rowData) => <Text style={styles.rowViewContainer} 
            onPress={this.GetProductIDFunction.bind(
              this, rowData.id,
                rowData.tag, 
                rowData.nome, 
                rowData.tipo, 
                rowData.imagem,
                rowData.observacao
                )}> 
            {rowData.nome} 
            </Text> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer_For_Show_ProductList_Activity :{
    flex:1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    marginLeft: 5,
    marginRight: 5,
  },
  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});