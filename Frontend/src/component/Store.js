
var redux=require('redux');
const datastate={
    product=this.state.data,

}

const allreducer=(state=datastate,action)=>{
    switch (action.type) {
        case "value":
    
        default:
            break;
    }
}
var store=redux.createStore(allreducer);

store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})
export default store;