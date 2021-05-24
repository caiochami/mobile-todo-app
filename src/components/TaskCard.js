import React, { useState } from "react";
import { Text, View } from "react-native";
import Checkbox from "./Checkbox";

const Card = () => {
  const [completed, setCompleted] = useState(false);
  return (
    <Card>
      <Checkbox
        value={completed}
        style={{}}
        onPress={() => setCompleted(!completed)}
      />
      <Text>Todays task</Text>
    </Card>
  );
};

export default Card;
