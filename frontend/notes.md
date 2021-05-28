## Create Routes:
npm install react-router-dom
import { BrowserRouter, Link, Route } from "react-router-dom";
wrapp App.js between <BrouserRouter>
<Route path="/products/:id" component = {ProductScreen} />
<Route path="/" exact={true} component = {HomeScreen} />

## Create Array of element:
**var foo = new Array(3)**//create new array with 3 element
convert int to array : ** [...Array(int).keys()]

## Redirect User to onother Url:
props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);


