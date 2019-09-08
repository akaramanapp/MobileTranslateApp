import React, { Fragment, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';


const App = () => {

  const [inputText, setText] = useState('');
  const [responseText, setResponse] = useState('');

  function postTranslateService(text) {
    fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190908T175021Z.23e59e5c7eeb7d41.400650556577aaaab85fd3c893c34e4cf200de9a&lang=tr-en&text=' + text)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.text)
        setResponse(res.text)
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">

          <View>
            <Text> En-Tr</Text>
            <TextInput
              numberOfLines={5}
              multiline={true}
              style={{ height: 120, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => setText(text)}
            />
            <Button
              title="Translate"
              color="#ff6600"
              onPress={() => postTranslateService(inputText)}
            />
            <Text>{'Response: ' +responseText}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
