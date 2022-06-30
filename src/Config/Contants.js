import Toast from 'react-native-toast-message';
export const showToaster = (msg,flag) => {
    Toast.show({
        type:  flag? flag : 'error',
        text1: msg,
      });
    return;
   }