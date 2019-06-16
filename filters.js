Vue.filter('localeNum',function(val){
    return val.toLocaleString()
})
new Vue({
    el:"#app",
    data:{
        price :19999
    },
filters:{
    round(val){
        return Math.round(val * 100)/100
    },
    radion(val){
        return val* Math.PI /180
    }
}
})
