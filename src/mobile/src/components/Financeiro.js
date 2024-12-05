import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Modal, Button, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { useAuth } from './AuthContext';

const Financeiro = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [valor, setValor] = useState("");
  const [titulo, setTitulo] = useState("");
  const [retiradas, setRetiradas] = useState([]);
  const [dataInicio, setDataInicio] = useState(new Date());
  const [dataFim, setDataFim] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState({ show: false, mode: 'date', target: null });
  const [retiradaSelecionada, setRetiradaSelecionada] = useState(null);
  const { userId } = useAuth();

  useEffect(() => {
    carregarRetiradas();
  }, []);

  const carregarRetiradas = async () => {
    try {
      const response = await api.get('/caixa', {
        params: {
          dataInicio: dataInicio.toISOString().split('T')[0],
          dataFim: dataFim.toISOString().split('T')[0],
          userId
        },
      });

      setRetiradas(response.data);
    } catch (error) {
      console.error("Erro ao carregar retiradas:", error);
      Alert.alert("Erro", "Falha ao carregar retiradas");
    }
  };

  const handleCadastro = async () => {
    if (!valor || !titulo) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    try {
      const cnpj = await AsyncStorage.getItem('@userCnpj');
      if (!cnpj) {
        Alert.alert("Erro", "CNPJ não encontrado. Por favor, faça login novamente.");
        return;
      }

      const response = await api.post('/caixa', { 
        valor: parseFloat(valor), 
        titulo, 
        idUsuario: userId,
        cnpj 
      });

      if (response.status === 201) {
        Alert.alert("Sucesso", "Retirada salva com sucesso!");
        setValor("");
        setTitulo("");
        setShowModal(false);
        carregarRetiradas();
      }
    } catch (error) {
      console.error("Erro ao salvar retirada:", error);
      Alert.alert("Erro", "Falha ao salvar retirada");
    }
  };

  const handleSaveEdit = async () => {
    try {
      await api.put(`/caixa/${retiradaSelecionada._id}`, { valor, titulo });
      Alert.alert("Sucesso", "Retirada atualizada com sucesso!");
      setShowEditModal(false);
      carregarRetiradas();
    } catch (error) {
      Alert.alert("Erro", "Falha ao atualizar retirada");
    }
  };

  const handleAdd = () => {
    setTitulo("");
    setValor("");
    setShowModal(true);
  };

  const handleEdit = (retirada) => {
    setRetiradaSelecionada(retirada);
    setTitulo(retirada.titulo);
    setValor(retirada.valor.toString());
    setShowEditModal(true);
  };
  
  const formatDate = (date) => {
    if (!date) return ''; // Retorna vazio se a data não existir
  
    // Converte para um objeto Date (caso necessário) e formata
    const parsedDate = new Date(date);
    const day = String(parsedDate.getDate()).padStart(2, '0'); // Dia com 2 dígitos
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0'); // Mês com 2 dígitos (0-indexado)
    const year = parsedDate.getFullYear();
  
    return `${day}/${month}/${year}`;
  };
  
  const onChangeDate = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setShowDatePicker({ show: false, mode: 'date', target: null });
      return;
    }
  
    if (selectedDate) {
      const parsedDate = new Date(selectedDate); // Converte para um objeto Date
      console.log("Data selecionada (Objeto Date):", parsedDate);
  
      if (showDatePicker.target === 'inicio') {
        setDataInicio(parsedDate); // Atualiza o estado com o objeto Date
      } else if (showDatePicker.target === 'fim') {
        setDataFim(parsedDate);
      }
    }
  
    setShowDatePicker({ show: false, mode: 'date', target: null });
  };
  
  
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FINANCEIRO</Text>

      <View style={styles.periodoContainer}>
        <Text style={styles.label}>Período</Text>
        <View style={styles.inputGroup}>
          <TouchableOpacity onPress={() => setShowDatePicker({ show: true, mode: 'date', target: 'inicio' })}>
            <TextInput
              style={styles.input}
              placeholder="Data Início"
              value={formatDate(dataInicio)}
              editable={false}
            />
          </TouchableOpacity>
          <Text>à</Text>
          <TouchableOpacity onPress={() => setShowDatePicker({ show: true, mode: 'date', target: 'fim' })}>
            <TextInput
              style={styles.input}
              placeholder="Data Fim"
              value={formatDate(dataFim)} 
              editable={false}
            />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={carregarRetiradas}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={retiradas}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.retiradaItem}>
            <Text>{item.titulo}</Text>
            <Text>R$ {item.valor}</Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity onPress={() => handleEdit(item)}>
                <Text>Editar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>Adicionar Retirada</Text>
      </TouchableOpacity>

      <Modal visible={showModal} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adicionar Retirada</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Título"
              value={titulo}
              onChangeText={setTitulo}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Valor"
              value={valor}
              onChangeText={setValor}
              keyboardType="numeric"
            />
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={() => setShowModal(false)} />
              <Button title="Salvar" onPress={handleCadastro} />
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={showEditModal} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Retirada</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Título"
              value={titulo}
              onChangeText={setTitulo}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Valor"
              value={valor}
              onChangeText={setValor}
              keyboardType="numeric"
            />
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={() => setShowEditModal(false)} />
              <Button title="Salvar" onPress={handleSaveEdit} />
            </View>
          </View>
        </View>
      </Modal>

      {showDatePicker.show && (
        <DateTimePicker
          value={showDatePicker.target === 'inicio' ? dataInicio : dataFim}
          mode={showDatePicker.mode}
          display="default"
          onChange={onChangeDate}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7E5A9B',
    textAlign: 'center',
    marginBottom: 20,
  },
  periodoContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#7E5A9B',
    marginBottom: 5,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    padding: 10,
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    height: 40,
    borderColor: '#7E5A9B',
    borderRadius: 5,
    padding: 0,
  },
  button: {
    backgroundColor: '#7E5A9B',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  retiradaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#7E5A9B',
    borderRadius: 5,
    marginBottom: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  addButton: {
    backgroundColor: '#F79824',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7E5A9B',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#7E5A9B',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Financeiro;