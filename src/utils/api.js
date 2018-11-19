import serverConfig from "./config/server.config.js"

export default {
    methods: {
        get: function(url, success, faild){
            axios.get({
                url: serverConfig.server.url,
                methods: "GET"
            }).then(function(res){
                success(res);
            }).catch(function(error){
                if(faild){
                    faild();
                } else {
                    console.log(error);
                }
            });
        },

        post: function(url, params, success, faild){
            axios.post({
                url: serverConfig.server.url,
                methods: "POST",
                data: params
            }).then(function(res){
                success(res);
            }).catch(function(error){
                if(faild){
                    faild();
                } else {
                    console.log(error);
                }
            });
        }
    }
}