import { from} from "rxjs";
import 'rxjs/add/operator/pluck'

from([
    {first: 'Sahil', last: 'Mobaidin', age: '34'},
    {first: 'Ahmad', last: 'Mobaidin', age: '37'},
    {first: 'Seri', last: 'Mobaidin', age: '35'}
])
.pluck('first').subscribe((x:any)=>addItem(x));


function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}