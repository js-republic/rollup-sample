//import {ajax} from "jquery";
import {map} from "lodash-es";

(function(){
    const newArray = map([1,2,3], i => i +1);
    console.log(newArray);
    //ajax('http://api.themoviedb.org/3/discover/movie?api_key=231d98867891ed95fd0556943ec70ff2')
    //    .then((json)=>{
    //        const res = json.results;
    //        console.log(res.length);
    //    });
})();