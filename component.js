
var myComponent = {
    template:'<p>aaaaa</p>'
}
Vue.component('my-co',{
    template:'<p>{{message}}</p>',
    data(){
        return{
            message:'heool'
        }
    },
    methods:{
        
    }    
}),
Vue.component('co',{
    template:'<p>{{val}}</p>',
    props:{
        val:{
            type:String,
            required:'aaa'
        },
    }
}),
Vue.component('comp-child',{
    template:'<p>{{val}}</p>',
    data(){
        return{
            val:'co',
        }
    }
}),
Vue.component('cass',{
    template: '<p id="child" class="child">child</p>'
}),
Vue.component('comp-childs',{
    template:'<li>{{name}}HP.{{hp}}</li>',
    props:['name','hp']
}),
Vue.component('kodomo',{
    template:'<button @click="clicks">クッリク</button>',
    methods:{
        clicks(){
            console.log("ccc")
            this.$emit('a')
        },
        created(){}
    }
}),
Vue.component('custom-input', {
    props: ['value'],
    template: `
      <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    `
  }),
  Vue.component('hoge-form',{
    template:'<input type="text" v-model="data">',
      props: {
        value: {
          type: String,
          default: null,
        },
        computed:{
            
        },
      }
  }),
  Vue.component('re-f',{
      template:'<p>{{val}}</p>',
      data(){
          return{
              val:'fffff'
          }
      }
  }),

new Vue(,{
    el:'#app',
    data:{
        a:'helloaaaa',
        list:[
            {id:1,name:'aa',hp: 100},
            {id:2,name:'ss',hp: 300},
            {id:3,name:'dd',hp: 500}
        ],
        com:"<p>sssss</p>"
    },
    created(){

    },
    methods:{
        parent(){
            let child = this.$refs.child
            console.log(child.$el)
            child=child.$el
            alert('イベント')
        },
        kakuninn(){
            console.log(this.com)
        }

    },
    computed:{
        tag(){
            return this.com
        }
    },
    components:{
    }
})

