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