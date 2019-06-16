import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import { read } from 'fs';
Vue.use(Vuex)

//ストアの作成
const store = new Vuex.Store({
    //ステート（ストで管理している状態vueだったらdata）
    state:{
        count:0,
        list:[{id:1},{id:2},{id:3}]
    },
    //ミューテーション(唯一データを変更できるメソット)
    mutations:{
        //やりたい処理の登録
        increment(state,payload){
        console.log('fff')
        console.log(payload)
        state.coun = payload
         }
    },
    //ゲッター引数渡せるがセッター機能がない
    getters:{
        count(state){
            return state.count
        },
        max(state){
            return state.list.reduce((a,b)=>{
                return a.price > b.price ? a.price : b.price
            })
        },
        //引数あり
        item(state){
            return id => state.list.find(el => el.id === id)
        },
        name(state,getters){
            return id => getters.item(id).name
        }
    },
    //アクションは非同期処理を含めることのできるメソッド
    actions:{
        actionType({commit},payload){
            console.log('aku')
            commit('increment',payload)
        }
    }
})
export default store
console.log(store.state.count)
//コミット
store.commit('increment')
console.log(store.state.count)