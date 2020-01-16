# react-native-steps-modal

[![npm version](https://badge.fury.io/js/react-native-steps-modal.svg)](https://badge.fury.io/js/react-native-steps-modal)

An enhanced and customizable react-native steps in a modal.

## Features

- Easily customizable
- Plain simple and flexible APIs
- Customizable color and timing
- Smooth enter/exit animations for the modal
- Resize itself correctly on device rotation
- Swipeable

## Setup

This library is available on npm, install it with: `npm i react-native-steps-modal` or `yarn add react-native-steps-modal`.

## Usage

1.  Import react-native-steps-modal:

```javascript
import StepsModal from "react-native-steps-modal";
```

2.  Create a steps modal and give its content in stepsComponents props:

```javascript
render () {
  const first = <Text>I'm the first</Text>;
  const second = <Text>I'm the second</Text>;
  const third = <Text>I'm the third</Text>;

    return (
      <View style={{ flex: 1}}>
        <StepsModal
          stepsComponents={[firstComponent, secondComponent, thirdComponent]}
        />
      </View>
    )
  }
```

3.  Then simply show it by setting the `isVisible` prop to true:

```javascript
render () {
  const first = <Text>I'm the first</Text>;
  const second = <Text>I'm the second</Text>;
  const third = <Text>I'm the third</Text>;

    return (
      <View style={{ flex: 1}}>
        <StepsModal
          isVisible={true}
          stepsComponents={[firstComponent, secondComponent, thirdComponent]}
        />
      </View>
    )
  }
```

The `isVisible` and `stepsComponents` prop are the only prop you'll really need to make the steps modal work. You should control `isVisible` prop value by saving it in your state and setting it to `true` or `false` when needed.

## A complete example

comming soon...
For an example take a look at the `/example` directory.

## Available props

| Name                           | Type             | Default                                    | Description                                |
| ------------------------------ | ---------------- | ------------------------------------------ | -------------------------------------------|
| animationIn                    | string or object | 'zoomInDown'                               | Modal show animation                       |
| animationInTiming              | number           | 600                                        | Timing for the modal show animation (in ms)|
| animationOut                   | string or object | 'zoomOutUp'                                | Modal hide animation                       |
| animationOutTiming             | number           | 600                                        | Timing for the modal hide animation (in ms)|
| stepsComponents                | array            | **REQUIRED**                               | The steps modal content components         |
| isVisible                      | bool             | **REQUIRED**                               | Show the modal?                            |
| hideSkipButton                 | bool             | false                                      | hide the step skip button                  |
| skipLabel                      | bool             | 'Skip'                                     | skip button label                          |
| doneLabel                      | bool             | 'Done'                                     | done button label                          |
| nextLabel                      | bool             | 'Next'                                     | next button label                          |
| prevLabel                      | bool             | 'Previous'                                 | prev button label                          |
| indicatorStyle                 | object           | { borderRadius: 5, width: 13, height: 13 } | style for indicator                        |
| buttonStyle                    | object           | { fontWeight: "bold", fontSize: 14 }       | style for buttons                          |
| colortheme                     | string           | '#48d0cb'                                  | color for both indicator and button        |


## Available animations

Take a look at [react-native-animatable](https://github.com/oblador/react-native-animatable) to see the dozens of animations available out-of-the-box. You can also pass in custom animation definitions and have them automatically register with react-native-animatable. For more information on creating custom animations, see the react-native-animatable [animation definition schema](https://github.com/oblador/react-native-animatable#animation-definition-schema).

## Acknowledgements

Thanks..
Pull requests, feedbacks and suggestions are welcome!
