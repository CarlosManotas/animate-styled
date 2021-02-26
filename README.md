# AnimateStyled

[![npm version](https://badge.fury.io/js/animate-styled.svg)](https://badge.fury.io/js/animate-styled)
[![npm](https://img.shields.io/npm/dt/animate-styled.svg)](https://npmcharts.com/compare/animate-styled?minimal=true)
![MIT](https://img.shields.io/dub/l/vibe-d.svg)

*small contribution for those who work with react and styled-components*

`AnimateStyled` is just a library based on the great work done by the people of [animate.css](https://github.com/daneden/animate.css) led to the stack of
 [`react`](https://facebook.github.io/react/) and [`styled-components`](https://www.styled-components.com/).

## Installation

via yarn, just follow these simple commands:

```bash
$ yarn add animate-styled
```
or via npm:

```bash
$ npm install animate-styled --save
```

## Basic use

 import in your file `js`

```javascript
...
import AnimateStyled from "animate-styled"
...
render(){
  return(
    <AnimateStyled name="hinge">
      <h1>Mi contenido</h1>   /* children is required */
    </AnimateStyled>
  )
}
```
## Properties

| Name `props` | Default | Type | Values |
|-----------------|---------|-------|----------|
| name | shake | String | names of animations |
| duration | 2s | String |  1s, 300ms... |
| timingFunction | linear | String | ease, ease-in, ease-out, ease-in-out, linear, step-start, step-end |
| delay | 0s | String | 1s, 300ms... |
| iterationCount | infinite | String, Number | 0 , 1 , 3 , infinite |
| direction | normal | String | normal, reverse, alternate, alternate-reverse |
| fillMode | none | String | none, forwards, backwards, both|
| playState | running | String | running, paused |
| transformOrigin | center | String | center, 50%, top bottom, 10% 80% ...|
| backfaceVisibility | hidden | String | hidden, visible |
| opacity | 0 | Number | 0 -> 1 |
| style | undefined | React.CSSProperties | |
| children | Hello World | ReactNode | 

## Names of animations
For test all animation click [here](https://carlosmanotas.github.io/animate-styled/)

---

| `Attention Seekers`  | `Specials` | `Flippers` | `LightSpeed` |
|--------------------|----------|----------|------------|
  | bounce | hinge | flip | lightSpeedInLeft |
  | flash | jackInTheBox | flipInX | lightSpeedInRight |
  | headShake | rollIn | flipInY | lightSpeedOutLeft |
  | heartBeat | rollOut | flipOutX | lightSpeedOutRight |
  | jello |     | flipOutY | 
  | pulse |      
  | rubberBand |  
  | shake |
  | shakeX |
  | shakeY |
  | swing |
  | tada |
  | wobble |

---

 | `BackEntrances` | `BackExits` | `BouncingEntrances` | `BouncingExits` |
 |---------------|-----------|-------------------|---------------|
 | backInDown | backOutDown | bounceIn | bounceOut |
 | backInLeft | backOutLeft | bounceInDown | bounceOutDown |
 | backInRight | backOutRight | bounceInLeft | bounceOutLeft |
 | backInUp | backOutUp | bounceInRight | bounceOutRight |
 |          |            | bounceInUp | bounceOutUp |

---

| `FadingEntrances` | `FadingExits` | `RotatingEntrances` | `RotatingExits` |
|-------------------|---------------|---------------------|-----------------|
| fadeIn | fadeOut | rotateIn | rotateOut
  | fadeInBottomLeft | fadeOutBottomLeft | rotateInDownLeft | rotateOutDownLeft
  | fadeInBottomRight | fadeOutBottomRight | rotateInDownRight | rotateOutDownRight
  | fadeInDown | fadeOutDown | rotateInUpLeft | rotateOutUpLeft
  | fadeInDownBig | fadeOutDownBig | rotateInUpRight | rotateOutUpRight
  | fadeInLeft | fadeOutLeft
  | fadeInLeftBig | fadeOutLeftBig
  | fadeInRight | fadeOutRight
  | fadeInRightBig | fadeOutRightBig
  | fadeInTopLeft | fadeOutTopLeft
  | fadeInTopRight | fadeOutTopRight
  | fadeInUp | fadeOutUp
  | fadeInUpBig | fadeOutUpBig
  
---

| `SlidingEntrances` | `SlidingExits` | `ZoomingEntrances` | `ZoomingExits` |
|--------------------|----------------|--------------------|----------------|
| slideInDown | slideOutDown | zoomIn | zoomOut
| slideInLeft | slideOutLeft | zoomInDown | zoomOutDown
| slideInRight | slideOutRight | zoomInLeft | zoomOutLeft
| slideInUp | slideOutUp | zoomInRight | zoomOutRight
|       |        | zoomInUp | zoomOutUp
  
---

## Import multiple animations
```javascript
import AnimateStyled from "animate-styled";
...
render(){
  return(
    <div>
      <AnimateStyled name="rollIn">
        <h1>My Content</h1>
      </AnimateStyled>
      <AnimateStyled name="zoomOut">
        <p>My Content</p>
      </AnimateStyled>
      <AnimateStyled name="slideOutUp">
        <img src="image/logo.png"/>
      </AnimateStyled>
    </div>
  )
}
```
## Using All Properties
```javascript

<AnimateStyled
  name="flip"
  duration="600ms"
  timingFunction="ease-in-out"
  delay="200ms"
  iterationCount={3}
  direction="alternate"
  fillMode="forwards"
  playState="running"
  transformOrigin="center top"
  backfaceVisibility="visible"
>
  {children}
</AnimateStyled>

```
## Other uses
Nesting
```javascript
<AnimateStyled name="flip">
  <AnimateStyled
    name="zoomOutUp"  
    iterationCount="infinite"
    timingFunction="ease-in">
    <h1>  Mundo</h1>
  </AnimateStyled>
</AnimateStyled>
```

## License
AnimateStyled is licensed under the MIT license. (http://opensource.org/licenses/MIT)

[npm-badge]: https://img.shields.io/npm/v/animate-styled.png?style=flat-square
[npm]: https://www.npmjs.org/package/animate-styled
