## Easy bind a context to an arrow function:)

```
const { bindArrow } = require('arrow-bind');
// OR
import { bindArrow } from 'arrow-bind';

const arrowFunc = () => console.log(this);
arrowFunc() // window

const newContext = { event: "changed context" };

const arrowChCx = bindArrow(arrowFunc, newContext);
arrowChCx() // { event: "changed context" }
```


