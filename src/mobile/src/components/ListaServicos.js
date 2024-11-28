import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import api from '../services/api';

const ListaServicos = ({ navigation }) => {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const response = await api.get('/Servicos');
        setServicos(response.data);
      } catch (error) {
        console.error('Erro ao buscar serviços:', error);
        Alert.alert('Erro', 'Falha ao carregar a lista de serviços.');
      }
    };
    fetchServicos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/servicos/${id}`);
      setServicos(servicos.filter(servico => servico._id !== id));
    } catch (error) {
      console.error('Erro ao excluir serviço:', error);
      Alert.alert('Erro', 'Falha ao excluir serviço.');
    }
  };

  const handleEdit = (servico) => {
    navigation.navigate('CadastroServicos', { servico });
  };

  const renderItem = ({ item, index }) => (
    <View style={[styles.row, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}>
      <Text style={styles.cell}>{item.descricao}</Text>
      <Text style={styles.cell}>{item.preco}</Text>
      <Text style={styles.cell}>{item.duracao}</Text>
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
      <Text style={styles.header}>Lista de Serviços</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderCell}>Descrição</Text>
          <Text style={styles.tableHeaderCell}>Preço</Text>
          <Text style={styles.tableHeaderCell}>Duração</Text>
          <Text style={styles.tableHeaderCell}>Ações</Text>
        </View>
        <FlatList
          data={servicos}
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
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7E5A9B',
    marginBottom: 20,
  },
  table: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '',
    paddingVertical: 10,
    borderBottomWidth: 1, 
  borderBottomColor: 'black'
  },
  tableHeaderCell: {
    flex: 1,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 5,
    borderRightWidth: 1,
    borderRightColor: 'black',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  rowEven: {
    backgroundColor: '#f9f9f9',
  },
  rowOdd: {
    backgroundColor: 'white',
  },
  cell: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 0,
    borderRightWidth: 1,
    borderRightColor: 'black',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  buttonEdit: {
    backgroundColor: '#7E5A9B',
    paddingVertical: 20,
    paddingHorizontal: 2,
    borderRadius: 5,
    marginHorizontal: 2,
  },
  buttonDelete: {
    backgroundColor: '#d9534f',
    paddingVertical: 20,
    paddingHorizontal: 2,
    borderRadius: 5,
    marginHorizontal: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
  },
});

export default ListaServicos;
