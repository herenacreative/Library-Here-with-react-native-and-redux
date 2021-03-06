import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Modal, Text} from '@ui-kitten/components';
import FormAuthor from '../form/author.component';

const ModalAuthor = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <Button onPress={() => setVisible(true)}>Add Author</Button>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <FormAuthor/>
          {/* <Button onPress={() => setVisible(false)}>DISMISS</Button> */}
        </Card>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default ModalAuthor;
