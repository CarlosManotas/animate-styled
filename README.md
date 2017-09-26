# AnimateStyled

*pequeño aporte para los que trabajamos con react y styled-components*

`AnimateStyled` es tan solo una librería basada en el gran trabajo hecho por la gente de [animate.css](https://github.com/daneden/animate.css) llevado al stack de [`react`](https://facebook.github.io/react/) y [`styled-components`](https://www.styled-components.com/).

## Instalación

via yarn, solo sigue estos simples comandos:

```bash
$ yarn add animate-styled
```
o via npm:

```bash
$ npm install animate-styled --save
```

## Uso basico

 importar en tu archivo `js`

```javascript
...
import AnimateStyled,{hinge} from 'animate-styled'
...
render(){
  return(
    <AnimateStyled name={hinge}>
      <h1>Mi contenido</h1>
    </AnimateStyled>
  )
}
```
## Propiedades

| Nombre `props` | Default | Type | Values |
|-----------------|---------|-------|----------|
| name | flash | Object | nombre de las animaciones |
| duration | 2s | String |  1s, 300ms... |
| timingFunction | linear | String | ease, ease-in, ease-out, ease-in-out, linear, step-start, step-end |
| delay | 0s | String | 1s, 300ms... |
|iterationCount | infinite | String, Number | 0 , 1 , 3 , infinite |
| direction | normal | String | normal, reverse, alternate, alternate-reverse |
| fillMode | none | String | none, forwards, backwards, both|
| playState | running | String | running, paused |
| transformOrigin | center | String | center, 50%, top bottom, 10% 80% ...|
| backfaceVisibility | hidden | String | hidden, visible |

## Nombre de las Animaciones

| ﻿Name | Use |
|---------------------|---------------------------|
| bounce | `name={bounce}` |
| flash | `name={flash}` |
| pulse |`name={pulse}` |
| rubberBand |`name={rubberBand}` |
| shake |`name={shake}` |
| headShake |`name={headShake}` |
| swing |`name={swing}` |
| tada |`name={tada}` |
| wobble |`name={wobble}` |
| jello |`name={jello}` |
| bounceIn |`name={bounceIn}` |
| bounceInDown |`name={bounceInDown}` |
| bounceInLeft |`name={bounceInLeft}` |
| bounceInRight |`name={bounceInRight}` |
| bounceInUp |`name={bounceInUp}` |
| bounceOut |`name={bounceOut}` |
| bounceOutDown |`name={bounceOutDown}` |
| bounceOutLeft |`name={bounceOutLeft}` |
| bounceOutRight |`name={bounceOutRight}` |
| bounceOutUp |`name={bounceOutUp}` |
| fadeIn |`name={fadeIn}` |
| fadeInDown |`name={fadeInDown}` |
| fadeInDownBig |`name={fadeInDownBig}` |
| fadeInLeft |`name={fadeInLeft}` |
| fadeInLeftBig |`name={fadeInLeftBig}` |
| fadeInRight |`name={fadeInRight}` |
| fadeInRightBig |`name={fadeInRightBig}` |
| fadeInUp |`name={fadeInUp}` |
| fadeInUpBig |`name={fadeInUpBig}` |
| fadeOut |`name={fadeOut}` |
| fadeOutDown |`name={fadeOutDown}` |
| fadeOutDownBig |`name={fadeOutDownBig}` |
| fadeOutLeft |`name={fadeOutLeft}` |
| fadeOutLeftBig |`name={fadeOutLeftBig}` |
| fadeOutRight |`name={fadeOutRight}` |
| fadeOutRightBig |`name={fadeOutRightBig}` |
| fadeOutUp |`name={fadeOutUp}` |
| fadeOutUpBig |`name={fadeOutUpBig}` |
| flip | `name={flip}` |
| flipInX |`name={flipInX}` |
| flipInY |`name={flipInY}` |
| flipOutX |`name={flipOutX}` |
| flipOutY |`name={flipOutY}` |
| lightSpeedIn |`name={lightSpeedIn}` |
| lightSpeedOut |`name={lightSpeedOut}` |
| rotateIn |`name={rotateIn}` |
| rotateInDownLeft |`name={rotateInDownLeft}` |
| rotateInDownRight |`name={rotateInDownRight}` |
| rotateInUpLeft |`name={rotateInUpLeft}` |
| rotateInUpRight |`name={rotateInUpRight}` |
| rotateOut |`name={rotateOut}` |
| rotateOutDownLeft |`name={rotateOutDownLeft}` |
| rotateOutDownRight |`name={rotateOutDownRight}` |
| rotateOutUpLeft |`name={rotateOutUpLeft}` |
| rotateOutUpRight |`name={rotateOutUpRight}` |
| hinge |`name={hinge}` |
| jackInTheBox |`name={jackInTheBox}` |
| rollIn |`name={rollIn}` |
| rollOut |`name={rollOut}` |
| zoomIn |`name={zoomIn}` |
| zoomInDown |`name={zoomInDown}` |
| zoomInLeft |`name={zoomInLeft}` |
| zoomInRight |`name={zoomInRight}` |
| zoomInUp |`name={zoomInUp}` |
| zoomOut |`name={zoomOut}` |
| zoomOutDown |`name={zoomOutDown}` |
| zoomOutLeft |`name={zoomOutLeft}` |
| zoomOutRight |`name={zoomOutRight}` |
| zoomOutUp |`name={zoomOutUp}` |
| slideInDown |`name={slideInDown}` |
| slideInLeft |`name={slideInLeft}` |
| slideInRight |`name={slideInRight}` |
| slideInUp |`name={slideInUp}` |
| slideOutDown |`name={slideOutDown}` |
| slideOutLeft |`name={slideOutLeft}` |
| slideOutRight |`name={slideOutRight}` |
| slideOutUp |`name={slideOutUp}` |

## Importar varias animaciones
```javascript
import AnimateStyled,{ rollIn , zoomOut , slideOutUp} from 'animate-styled';
...
render(){
  return(
    <div>
      <AnimateStyled name={rollIn}>
        <h1>Mi contenido</h1>
      </AnimateStyled>
      <AnimateStyled name={zoomOut}>
        <p>Mi contenido</p>
      </AnimateStyled>
      <AnimateStyled name={slideOutUp}>
        <img src='image/logo.png'/>
      </AnimateStyled>
    </div>
  )
}
```
## Usando todas las Propiedades
```javascript

   <AnimateStyled
      name={flip}
      duration="600ms"
      timingFunction="ease-in-out"
      delay="200ms"
      iterationCount={3}
      direction="alternate"
      fillMode="forwards"
      playState="running"
      transformOrigin="center top"
      backfaceVisibility="visible" >

      {children}

  </AnimateStyled>

```
## Otros usos
se puede usar solo la animacion sin el contenedor dentro de tus archivos con `styled-components`
```javascript
import styled from 'styled-components';
import { rotateOutDownRight } from 'animate-styled';

const CustomDiv = styled.div`
  animation:${rotateOutDownRight} 2s linear;
`
export default () => <CustomDiv>soy custom</CustomDiv>

```
Anidaciones
```javascript
<AnimateStyled name={flip}>
  <AnimateStyled
    name={zoomOutUp}  
    iterationCount='infinite'
    timingFunction='ease-in'>
    <h1>  Mundo</h1>
  </AnimateStyled>
</AnimateStyled>
```

## License
AnimateStyled is licensed under the MIT license. (http://opensource.org/licenses/MIT)
