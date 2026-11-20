import { View, Text, StyleSheet } from "react-native";

const Inbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inbox</Text>
      <Text style={styles.message}>Messages from hosts will appear here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 },
  title: { fontSize: 22, fontWeight: "600", marginBottom: 8 },
  message: { color: "#6B6B6B", textAlign: "center" },
});

export default Inbox;
