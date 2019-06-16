 new Vue({
    el : '#add',
    data: {
        message: 'Hello Vue.js!',
        val:true,
        val2: [],
        val4: 50,
        val3: '',
        preview: '',
    },
    methods: {
        handleChange(event){
            alert(event.target.files[0])
            var file = event.target.files[0]
            if(file && file.type.match(/^image\/(png|jpeg)$/)){
                this.preview = window.URL.createObjectURL(file)
            }

        }
    }
})