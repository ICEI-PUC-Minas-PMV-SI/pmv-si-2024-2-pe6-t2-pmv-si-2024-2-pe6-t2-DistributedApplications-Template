import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import api from '../services/api';

const CadastroServicos = ({ navigation }) => {
    const [formData, setFormData] = useState({
        descricao: '',
        preco: '',
        duracao: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async () => {
        const { descricao, preco, duracao } = formData;

        if (!descricao || !preco || !duracao) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await api.post('/servicos', formData);
            Alert.alert('Sucesso', 'Serviço cadastrado com sucesso!');
            setFormData({ descricao: '', preco: '', duracao: '' });
        } catch (error) {
            Alert.alert('Erro', 'Falha ao cadastrar serviço. Tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCancel = () => {
        setFormData({ descricao: '', preco: '', duracao: '' });
        Alert.alert('Cancelado', 'O formulário foi limpo.');
    };

    const navigateToListaServicos = () => {
        navigation.navigate('ListaServicos');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Serviços</Text>

            <TouchableOpacity style={styles.iconButton} onPress={navigateToListaServicos}>
                <View style={styles.iconBackground}>
                    <SvgXml xml={`<svg width="79px" height="83px" viewBox="0 0 79 83" xmlns="http://www.w3.org/2000/svg">
                    <rect width="79" height="83" rx="8" fill="#F79824" />
                    <image x="13" y="14" width="53" height="55"/> </svg>`} />
                </View>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Descrição"
                value={formData.descricao}
                onChangeText={(value) => handleInputChange('descricao', value)}
            />

            <TextInput
                style={styles.input}
                placeholder="Preço"
                value={formData.preco}
                onChangeText={(value) => handleInputChange('preco', value)}
                keyboardType="decimal-pad"
            />

            <TextInput
                style={styles.input}
                placeholder="Duração"
                value={formData.duracao}
                onChangeText={(value) => handleInputChange('duracao', value)}
                keyboardType="number-pad"
            />

            <View style={styles.buttonContainer}>
                <Button title="Salvar" onPress={handleSubmit} disabled={isSubmitting} />
                <Button title="Cancelar" onPress={handleCancel} color="red" />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
    },
    
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#7E5A9B',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#BDBDBD',
        borderWidth: 3,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        color: '#000',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },

    buttonSalvar: {
        flex: 1,
        backgroundColor: '#28a745',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        marginRight: 10,
        borderRadius: 8,
    },

    buttonCancelar: {
        flex: 1,
        backgroundColor: '#dc3545',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 8,
    },

    iconButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    },

    iconBackground: {
        width: 53,
        height: 55,
        backgroundColor: '#F79824',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CadastroServicos;
