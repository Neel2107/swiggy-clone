import { View, Text } from 'react-native'
import React from 'react'
import { List } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Accordion = () => {
  return (
    <List.AccordionGroup>
    <List.Accordion
      left={(props) => (
        <MaterialIcons
          {...props}
          name="percent"
          size={20}
          color="black"
        />
      )}
      title="Offers"
      titleStyle={{fontWeight:"600"}}
      id="1"
      right={(props) => (
        <List.Icon
          color="#c3c4c9"
          {...props}
          icon={props.isExpanded ? "chevron-down" : "chevron-right"}
        />
      )}
    >      

    </List.Accordion>
    <View
      style={{
        borderTopWidth: 1,
        borderColor: "#c3c4c9",
        borderStyle: "dotted",
      }}
    />
    <List.Accordion
      left={(props) => (
        <AntDesign {...props} name="mail" size={20} color="black" />
      )}
      title="Send Feedback"
      titleStyle={{fontWeight:"600"}}
      id="2"
      right={(props) => (
        <List.Icon
          color="#c3c4c9"
          {...props}
          icon={props.isExpanded ? "chevron-down" : "chevron-right"}
        />
      )}
    >
    
    </List.Accordion>
  </List.AccordionGroup>
  )
}

export default Accordion