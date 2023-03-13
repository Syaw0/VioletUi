# `@violetui/badge`

## Usage

first import the button component:

```javascript
const Badge = require('@violetui/badge');
// or
import Badge From '@violetui/badge'
```

use it:

```javascript
<Badge hideBadge={false} content={33} color="primary" variant="Large">
  <Icon />
</Badge>
```

## Props

1. **variant(optional)**: _"small" | "large"_

2. **content(optional):** _Number_

3. **color(optional):** _"primary" | "secondary" | "tertiary" | "error" | "warning" | "success"_

4. **hideBadge(optional):** _Boolean_
