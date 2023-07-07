
import { Component, ReactNode, createElement } from "react";
import Toast from 'react-native-toast-message';
import { Modal } from "react-native";

export interface NativeToastMessageProps {
  type: string
  text1: string;
  text2: string;
  position: 'top' | 'bottom';
  visibilityTime?: number;
  autoHide?: boolean;
  topOffset?: number;
  bottomOffset?: number;
  keyboardOffset?: number;
  toastWhenPressed: (whenPressed: boolean) => void;
  toastWhenHidden: (whenHidden: boolean) => void;
  animationType: string;
}
interface InputState {
  isToastVisible?: boolean;

}


export class NativeToastMessageInput extends Component<NativeToastMessageProps, InputState> {

  readonly state: InputState = { isToastVisible: false };

  componentDidMount(): void {
    this.toastOnPress = this.toastOnPress.bind(this);
    this.toastOnHide = this.toastOnHide.bind(this);

    this.setState({ isToastVisible: true });
  }
  render(): ReactNode {

    return (
      <Modal visible={this.state.isToastVisible}
        animationType={this.props.animationType != 'none' ? ((this.props.animationType != 'slide') ? 'fade' : 'slide') : 'none'}
        transparent={true}>
        {this.showToast()}
      </Modal>

    );
  }

  showToast = () => {

    Toast.show({
      type: this.props.type,
      text1: this.props.text1,
      text2: this.props.text2,
      position: this.props.position,
      visibilityTime: this.props.visibilityTime,
      autoHide: this.props.autoHide,
      topOffset: this.props.topOffset,
      bottomOffset: this.props.bottomOffset,
      keyboardOffset: this.props.keyboardOffset,
      onPress: this.toastOnPress,
      onHide: this.toastOnHide,


    });
    return <Toast />
  }

  private toastOnPress(): void {
    this.props.toastWhenPressed(true);
    if (this.props.autoHide == false) {
      Toast.hide();
    }
  }

  private toastOnHide(): void {
    this.setState({ isToastVisible: false });
    this.props.toastWhenHidden(true);
  }

}