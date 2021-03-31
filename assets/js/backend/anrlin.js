new Vue({
    el: '#info',
    data () {
        return {
          info: {
              profile_name : '',
              profile_repo : 0,
              profile_subscriber : 0,
              profile_photo: null
          }
        }
    },
    mounted () {
        axios
            .get('https://api.jsonbin.io/b/6064331f418f307e2585e5a9/1')
            .then(response => {
                this.info.profile_name = response.data.nama;
                this.info.profile_repo = (response.data.repo+this.info.profile_repo);
                this.info.profile_subscriber = (response.data.subscriber+this.info.profile_subscriber);
                this.info.profile_photo = response.data.profile_photo;
            })
    }
})

new Vue({
    el: '#activity',
    data () {
        return {
          datas : null
        }
    },
    mounted () {
        axios
            .get('https://api.jsonbin.io/b/6064422b418f307e2585ecde/1')
            .then(response => (this.datas = response.data))
    }
})