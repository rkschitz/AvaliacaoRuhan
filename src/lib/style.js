import { StyleSheet } from "react-native";

export const RKSstyle = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc2c2",
    
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    margin: "8px",
    width: "100px",
    height: "40px",
  },

  textinicial: {
    fontSize: 20,
    color: "#000001",
    fontWeight: "bold",
  },
  inputinicial: {
    backgroundColor: "#ffffff",
    borderBottomColor: "#000000",
    height: 30,
    width: 200,
  },
  centerhome: {
    flex: 1,
    flexDirection: "row",
    maxHeight: "50px",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  centered1: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#ffc2c2",
  },
});
