# `@violetui/toggle_button`

## Usage

first import the ToggleButton component:

```javascript
const ToggleButton = require('@violetui/toggle_button');
// or
import ToggleButton From '@violetui/toggle_button'
```

use it:

```javascript
const Component = () => {
  const [items,setItems] = useState([
    {text:'Button',icon:<Icon/>,selected:true,disable:false},
    {text:'Button2',icon:<Icon2/>,selected:false,disable:false},
    ])

  const handleChange =(newItems)=>{
    setItems(newItems)
  }

  return (<ToggleButton items={items} onChange={handleChange} />;)
};
```

## Props

1. **multiple(optional)**: _boolean_

2. **corner(optional):** _"circle" | "rounded" | "square"_

3. **color(optional):** _"primary" | "secondary" | "tertiary" | "error" | "warning" | "success"_

4. **items:** _arrayOfItems --> {text?:string, icon?:string, selected:boolean, disable?:boolean}_
