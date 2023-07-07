## Native Toast Message
The Toast component provides a way to display temporary messages or notifications to the user.

### Features:
## type (string, default: 'success')
    • Specifies the type of the toast. Available values: success, error, info.
    • To extend or overwrite toast types, refer to the documentation for details.
## text1 (string)
    • Sets the first line of text for the toast message.
## text2 (string)
    • Sets the second line of text for the toast message.
## position (string, default: 'top')
    • Determines the position of the toast on the screen. Available values: top, bottom.
## visibilityTime (number, default: 4000)
    • Specifies the number of milliseconds after which the toast automatically hides.
    • This prop takes effect only when autoHide is set to true.
## autoHide (boolean, default: true)
    • When set to true, the toast will automatically hide after the specified visibilityTime milliseconds.
## topOffset (number, default: 40)
    • Sets the offset from the top of the screen (in pixels).
    • This prop has an effect only when the position is set to top.
## bottomOffset (number, default: 40)
    • Sets the offset from the bottom of the screen (in pixels).
    • This prop has an effect only when the position is set to bottom.
## keyboardOffset (number, default: 10)
    • Sets the offset from the keyboard (in pixels). This prop is only applicable when the position is set to bottom, and the keyboard is visible (iOS only).
## onHide (() => void)
    • A callback function that is called when the toast hides.
## onPress (() => void)
    • A callback function that is called when the toast is pressed.

#### Issues, suggestions and feature requests
https://github.com/bharathidas/NativeToastMessage/issues

#### Screenshots
![Screenshot_1](https://github.com/bharathidas/NativeToastMessage/assets/23263603/0199124f-8f99-463b-8565-64417ec23a60)
![Screenshot_2](https://github.com/bharathidas/NativeToastMessage/assets/23263603/572e4001-5f48-4ad0-9761-7fcaa3faa9b4)
![Screenshot_3](https://github.com/bharathidas/NativeToastMessage/assets/23263603/2d86ab98-0095-4297-bb6d-20339967cae7)
![Screenshot_4](https://github.com/bharathidas/NativeToastMessage/assets/23263603/631a3833-9679-4a5f-a1be-89c54a61ff28)
![Screenshot_5](https://github.com/bharathidas/NativeToastMessage/assets/23263603/7d8d9f8d-0c84-4d7f-b5d2-bdc2f0b29eca)
![Screenshot_6](https://github.com/bharathidas/NativeToastMessage/assets/23263603/49842bd7-7e1b-4547-8a3f-5c70c0f13015)

