import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import api from "../services/api"; 

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  const handleCadastro = async () => {
    if (password !== confirmpassword) {
      Alert.alert("Erro", "A confirmação de senha não corresponde à senha.");
      return;
    }

    try {
      const response = await api.post("/prestador", {
        nome,
        email,
        cnpj,
        telefone,
        endereco,
        password,
        confirmpassword,
      });

      if (response.status === 201) {
        Alert.alert("Sucesso", response.data.message);
        // Navegação ou limpeza do formulário
      }
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        if (status === 400) {
          Alert.alert("Erro", "A confirmação de senha não corresponde à senha.");
        } else if (status === 409) {
          Alert.alert("Erro", "Email, CNPJ ou Telefone já está cadastrado.");
        } else {
          Alert.alert("Erro", data.message || "Erro ao tentar realizar o cadastro.");
        }
      } else {
        Alert.alert("Erro", "Erro ao se conectar com o servidor.");
        console.error("Erro ao se conectar com o servidor:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF ou CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço Completo"
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        value={confirmpassword}
        onChangeText={setConfirmpassword}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#7E5A9B",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#FFF",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7E5A9B",
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
