react-custom-radio-buttons-group is a well designed single react component that helps you create radio-buttons group.

![react-custom-radio-buttons-group](https://user-images.githubusercontent.com/26367467/126909507-c9b89633-cec7-4b60-bbcd-764e5885f8c9.gif)

## Installing / Getting started

This package is available in NPM repository as react-custom-radio-buttons-group. It will work correctly with all popular bundlers.

```bash
npm install react-custom-radio-buttons-group --save
```

Using yarn

```bash
yarn add react-custom-radio-buttons-group
```

## Include the Component

To start using react-custom-radio-buttons-group you just need to import the component RadioButtonGroup from the package.

```jsx
import React from 'react';
import RadioButtonGroup from 'react-custom-radio-buttons-group';
const handleChange = (e)=>{
    doSomething(e.target.value)
}
export default () => (
  <RadioButtonGroup
    onChange={handleChange}
    hide={false}
    values={[...]}
    />
);
```
# Documentation

### RadioButtonGroup
| name     | description    |
|----------|----------------|
|onChange|called when select a value from `values` |
|values|Array of radio-buttons|
|hide|if `true` it hides radio button input |

### Values

- Values can be an array of text:
```jsx
  <RadioButtonGroup
    onChange={handleChange}
    hide={false}
    values={["Apple","Banana","Orange"]}
    />
```
- Or a react component
```jsx
  <RadioButtonGroup
    onChange={handleChange}
    hide={true}
    values={[<Especes/>,<Paypal/>,<Credit/>,<Tpe/>]}
    />
```
![custom](https://user-images.githubusercontent.com/26367467/126910114-a4e6f2dd-dd41-43ef-973d-e002991bf9d3.JPG)

### Custom styles

To edit radio-buttons default change you have to override the css properties of classes bellow:
```css
/* radio-button default style */
  .radio-button {
}
/* radio-button active style */
.radio-button.active {
}
/* radio-button input default style */
.dot{
}
.dot::before{
}
/* radio-button input active style */
.dot.active{
}
.dot.active::before{
}
```

