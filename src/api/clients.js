import axios from 'axios'


export default {
    get() {
        axios.post('/findClient', {
            token: 'abc'
        }).then(function (response) {
            return response;
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    create(client) {
      console.log("Client created: "+client);
    },
    update(id, params) {
      console.log("Client update test");
    },
    delete(id){
      console.log("Client update test");
    }

}
