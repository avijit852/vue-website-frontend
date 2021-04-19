import axios from 'axios';
import config from '../../Config';

const state = {

}

const getters = {

}

const actions ={

    insertContact(context,qry){
        return new Promise((resolve,reject) => {

            console.log("Is data", qry.action);
                axios.post(config.staticStore.apiLInk,qry)
                .then( (responce)=>{
                    const res = responce.data;
                    resolve(res)
                    console.log(res)
                })
                .catch( function(error){
                    reject(error)
                });

        });
    },
    
}

const mutations = {

}

export default {

    state,
    getters,
    actions,
    mutations,
}
    