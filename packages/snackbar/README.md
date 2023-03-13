# `@violetui/snackbar`

## Usage

first import the Snackbar component:

```javascript
const Snackbar = require('@violetui/snackbar');
// or
import Snackbar From '@violetui/snackbar'
```

use it:

```javascript
<Snackbar
startIcon={<Icon/>}
action={{
  name:'Undo',
  onClick()=>{
    // some operation
  }
}}
endIcon={{
  icon:<CloseIcon/>,
  onClick(){
    // close snack?
  }
}}
color="default"
>
  the text inside snackbar
</Snackbar>
```

## Props

1. **color(optional):** _"primary" | "secondary" | "tertiary" | "error" | "warning" | "success" | "default"_

2. **children:** _ReactElement_

3. **startIcon(optional):** _ReactElement_

4. **endIcon(optional):** _Object --> {icon:ReactElement , onClick:function}_

5. **action(optional):** _Object --> {name:string , onClick:function}_
