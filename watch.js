new Vue({
    el:'#app',
    data:{
        a:'aaa',
        list:[],
        current:'',
        topics:[
            {value:'vue',name:'vue.js'},
            {value:'jQuery',name:'jQuery'}
        ]
    },
    watch:{
        current(val,val3){
            console.log("変更データ"+val)
            console.log("変更前データ"+val3)
            axios.get('https://api.github.com/search/repositories',{
                params:{q:'topic:' + val}
            }).then(function(response){
                this.list = response.data.item
            }.bind(this))
        }
    },
})