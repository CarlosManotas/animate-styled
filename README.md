# AnimateStyled

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
|iterationCount | infinite | String, Number | 0 , 1 , 3 , infinite |
| direction | normal | String | normal, reverse, alternate, alternate-reverse |
| fillMode | none | String | none, forwards, backwards, both|
| playState | running | String | running, paused |
| transformOrigin | center | String | center, 50%, top bottom, 10% 80% ...|
| backfaceVisibility | hidden | String | hidden, visible |
| opacity | 0 | String | 0 -> 1 |

## Names of animations
> For test all animation click [here]("https://carlosmanotas.github.io/animate-styled")

| ﻿Name | Use |
|--------|-------------|
| bounce | `name="bounce"` |
| flash | `name="flash"` |
| pulse |`name="pulse"` |
| rubberBand |`name="rubberBand"` |
| shake |`name="shake"` |
| headShake |`name="headShake"` |
| swing |`name="swing"` |
| tada |`name="tada"` |
| wobble |`name="wobble"` |
| jello |`name="jello"` |
| bounceIn |`name="bounceIn"` |
| bounceInDown |`name="bounceInDown"` |
| bounceInLeft |`name="bounceInLeft"` |
| bounceInRight |`name="bounceInRight"` |
| bounceInUp |`name="bounceInUp"` |
| bounceOut |`name="bounceOut"` |
| bounceOutDown |`name="bounceOutDown"` |
| bounceOutLeft |`name="bounceOutLeft"` |
| bounceOutRight |`name="bounceOutRight"` |
| bounceOutUp |`name="bounceOutUp"` |
| fadeIn |`name="fadeIn"` |
| fadeInDown |`name="fadeInDown"` |
| fadeInDownBig |`name="fadeInDownBig"` |
| fadeInLeft |`name="fadeInLeft"` |
| fadeInLeftBig |`name="fadeInLeftBig"` |
| fadeInRight |`name="fadeInRight"` |
| fadeInRightBig |`name="fadeInRightBig"` |
| fadeInUp |`name="fadeInUp"` |
| fadeInUpBig |`name="fadeInUpBig"` |
| fadeOut |`name="fadeOut"` |
| fadeOutDown |`name="fadeOutDown"` |
| fadeOutDownBig |`name="fadeOutDownBig"` |
| fadeOutLeft |`name="fadeOutLeft"` |
| fadeOutLeftBig |`name="fadeOutLeftBig"` |
| fadeOutRight |`name="fadeOutRight"` |
| fadeOutRightBig |`name="fadeOutRightBig"` |
| fadeOutUp |`name="fadeOutUp"` |
| fadeOutUpBig |`name="fadeOutUpBig"` |
| flip | `name="flip"` |
| flipInX |`name="flipInX"` |
| flipInY |`name="flipInY"` |
| flipOutX |`name="flipOutX"` |
| flipOutY |`name="flipOutY"` |
| lightSpeedIn |`name="lightSpeedIn"` |
| lightSpeedOut |`name="lightSpeedOut"` |
| rotateIn |`name="rotateIn"` |
| rotateInDownLeft |`name="rotateInDownLeft"` |
| rotateInDownRight |`name="rotateInDownRight"` |
| rotateInUpLeft |`name="rotateInUpLeft"` |
| rotateInUpRight |`name="rotateInUpRight"` |
| rotateOut |`name="rotateOut"` |
| rotateOutDownLeft |`name="rotateOutDownLeft"` |
| rotateOutDownRight |`name="rotateOutDownRight"` |
| rotateOutUpLeft |`name="rotateOutUpLeft"` |
| rotateOutUpRight |`name="rotateOutUpRight"` |
| hinge |`name="hinge"` |
| jackInTheBox |`name="jackInTheBox"` |
| rollIn |`name="rollIn"` |
| rollOut |`name="rollOut"` |
| zoomIn |`name="zoomIn"` |
| zoomInDown |`name="zoomInDown"` |
| zoomInLeft |`name="zoomInLeft"` |
| zoomInRight |`name="zoomInRight"` |
| zoomInUp |`name="zoomInUp"` |
| zoomOut |`name="zoomOut"` |
| zoomOutDown |`name="zoomOutDown"` |
| zoomOutLeft |`name="zoomOutLeft"` |
| zoomOutRight |`name="zoomOutRight"` |
| zoomOutUp |`name="zoomOutUp"` |
| slideInDown |`name="slideInDown"` |
| slideInLeft |`name="slideInLeft"` |
| slideInRight |`name="slideInRight"` |
| slideInUp |`name="slideInUp"` |
| slideOutDown |`name="slideOutDown"` |
| slideOutLeft |`name="slideOutLeft"` |
| slideOutRight |`name="slideOutRight"` |
| slideOutUp |`name="slideOutUp"` |

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
