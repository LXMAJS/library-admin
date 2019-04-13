import serverConfig from "../config/server.config.js"
import axios from 'axios'

export default {
    methods: {
        get: (url, success, faild) => {
            axios.get({
                url: serverConfig.server.url,
                methods: "GET"
            }).then(res => {
                success(res);
            }).catch(error => {
                if (faild) {
                    faild();
                } else {
                    console.log(error);
                }
            });
        },

        post: (url, params, success, faild) => {
            axios.post({
                url: serverConfig.server.url,
                methods: "POST",
                data: params
            }).then(res => {
                success(res);
            }).catch(error => {
                if (faild) {
                    faild();
                } else {
                    console.log(error);
                }
            });
        }
    }
}