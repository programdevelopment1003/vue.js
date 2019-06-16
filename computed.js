new Vue({
    el:'#app',
    data:{
        width:800,
        heiget:600,
        val : 200,
        budget :300,
        limit:2,
        list:[
            {id: 1, name: 'りんご1' , price: 100},
            {id: 2, name: 'りんご2' , price: 200},
            {id: 3, name: 'りんご3' , price: 300},
            {id: 4, name: 'りんご4' , price: 400}
        ]
    },
    computed: {
        halfWidth(){
        return this.width/2
    },
    halfHeight(){
       return this.heiget/2 
    },
    halfPoint(){
        return{
            x:this.halfWidth,
            y:this.halfHeight
        }
    },
    halfval:{
        get() {
            return this.val/2
        },
        et(val){
            return this.val*2
        }
    },
    matched(){
        //リストを返す filter（一致した値を返す）
        console.log(this.list.price)
        return this.list.filter(function(list) {
            return list.price <= this.budget
        },this)
    },
    limites(){
        //条件にあったリスト分の件数を返す slice（何要素取り出すのかの指定）
        return this.matched.slice(0,this.limit)
    }

}
})