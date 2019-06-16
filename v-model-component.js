Vue.component('my-model',{
    template:"<div class='my-model'>{{value}}</div>",
    props:{
        value:String,
        },
    data(){
        return{
            message:'heool'
        }
    },
    model:{
        event:'change'
    },
    created(){
         this.$emit('change',this.message)
    }
    
})

new Vue({
    el:'#app',
   data:{
       a:'',
       dd:'dss@gv'
   },
   methods:{
       a(){
        console.log("a")
       }
   }
})