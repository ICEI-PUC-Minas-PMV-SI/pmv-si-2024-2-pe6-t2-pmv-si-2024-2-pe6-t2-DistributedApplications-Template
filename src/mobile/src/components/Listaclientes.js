import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import api from '../services/api';
import { SvgXml } from 'react-native-svg';


const ListaClientes = ({ navigation }) => {
  const [clientes, setClientes] = useState([]);


  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await api.get('/Clientes');
        setClientes(response.data);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
        Alert.alert('Erro', 'Falha ao carregar a lista de clientes.');
      }
    };
    fetchClientes();
  }, []);

  // Deleta 
  const handleDelete = async (id) => {
    try {
      await api.delete(`/CadastroClientes/${id}`);
      setClientes(clientes.filter(cliente => cliente._id !== id));
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
      Alert.alert('Erro', 'Falha ao excluir cliente.');
    }
  };

  // Edita 
  const handleEdit = (cliente) => {
    navigation.navigate('CadastroClientes', { cliente });
  };

  // Adiciona 
  const handleAdd = () => {
    navigation.navigate('CadastroClientes');
  };

  // Renderiza os itens da lista
  const renderItem = ({ item, index }) => (
    <View style={[styles.row, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}>
      <Text style={styles.cell}>{item.nome}</Text>
      <Text style={styles.cell}>{item.email}</Text>
      <Text style={styles.cell}>{item.telefone}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => handleEdit(item)} style={styles.buttonEdit}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item._id)} style={styles.buttonDelete}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );



  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Clientes</Text>

      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderCell}>Nome</Text>
          <Text style={styles.tableHeaderCell}>Email</Text>
          <Text style={styles.tableHeaderCell}>Telefone</Text>
          <Text style={styles.tableHeaderCell}>Ações</Text>
        </View>
        <FlatList
          data={clientes}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7E5A9B',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  addButton: {
    backgroundColor: '#7E5A9B',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  table: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#7E5A9B',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#7E5A9B',
    paddingVertical: 10,
  },
  tableHeaderCell: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rowEven: {
    backgroundColor: '#f9f9f9',
  },
  rowOdd: {
    backgroundColor: '#fff',
  },
  cell: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
  },
  buttonEdit: {
    backgroundColor: '#7E5A9B',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonDelete: {
    backgroundColor: '#d9534f',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default ListaClientes;
