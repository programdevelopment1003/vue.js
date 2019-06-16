Vue.component('comp-child',{
    template:'<div class="comp-child">ここにスロットを埋め込む-><slot>何もなかった</slot></div>'
}),

Vue.component('aa',{
    template:'<div class="template"><header>デフォルトタイトル-><slot name="header">デフォルトタイトル</slot></header><div class="content">デフォルトコンテンツ-><slot>デフォルトコンテンツ</slot></div><div>出るかな？-><slot name="footer">出るかな？</slot></div></div></div>'
}),

Vue.component('comp',{
    template:'<div class="comp-child"><slot text=Hello!></slot></div>'
}),

new Vue({
    el : '#app',
    data: {
        message: 'Hello Vue.js!',
        list:['りんご','バナナ','いちご'],
        count: 1,
        show: true,
        handleClick: function(event){
            alert(event.target)
        }
    }
  })

