import { Component, ReactNode, createElement } from "react";

import { NativeToastMessageProps } from "../typings/NativeToastMessageProps";
import { NativeToastMessageInput } from "./components/NativeToastMessageInput";
import { BadgeStyle } from "./ui/styles";

export class NativeToastMessage extends Component<NativeToastMessageProps<BadgeStyle>> {
    private toastOnPressHandle = this.toastOnPress.bind(this);
    private toastOnHideHandle = this.toastOnHide.bind(this);
   
    private toastOnPress(whenPressed: boolean): void {
       
        if (whenPressed && this.props.whenPress && this.props.whenPress.canExecute) {
            this.props.whenPress.execute();
            }
    }

    private toastOnHide(whenHidden: boolean): void {
      
        if (whenHidden && this.props.whenHide && this.props.whenHide.canExecute) {
            this.props.whenHide.execute();
            }
    }
   
    render(): ReactNode {
        
        const type = this.props.typeKey?.value || 'success';
        const text1 = this.props.text1Key.value || 'This is text1';
        const text2 = this.props.text2Key.value || 'This is text2';
        const positionValue = this.props.positionKey?.value || 'top';
        const visibilityTime = Number(this.props.visibilityTimeKey?.value) || 4000;
        let autohide =  true;
        if(this.props.autoHideKey?.value == false){
            autohide=false
        }
        const topOffset = Number(this.props.topOffsetKey?.value) || 40;
        const bottomOffset = Number(this.props.bottomOffsetKey?.value) || 40;
        const keyboardOffset = Number(this.props.keyboardOffsetKey?.value) || 10;
        const animationType=this.props.animationTypeKey;
        
        return (
            <NativeToastMessageInput
                type={type}
                text1={text1}
                text2={text2}
                position={positionValue != 'top' ? 'bottom' : 'top'}
                visibilityTime={visibilityTime}
                autoHide={autohide}
                topOffset={topOffset}
                bottomOffset={bottomOffset}
                keyboardOffset={keyboardOffset}
                toastWhenPressed={this.toastOnPressHandle}
                toastWhenHidden={this.toastOnHideHandle}
                animationType={animationType}
               
            />
        );
    }


}
