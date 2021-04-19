import axios from 'axios';
import config from '../../Config';


const state = {
    // pageDetails:[],
}

const getters = {
    // getPageData: (state) => state.pageDetails,
}

const actions ={ 
    
    getPageDetails(context,qry){
        return new Promise((resolve,reject) => {

            console.log("Is data", qry.action);
                axios.post(config.staticStore.apiLInk,qry)
                .then( (responce)=>{
                    const res = responce.data;
                    resolve(res);
                    // commit('setPageDetails',res);
                    console.log(res);
                })
                .catch( function(error){
                    reject(error)
                });

        });
    }
}


const mutations = {
    // setPageDetails: (state, data) => (state.pageDetails = data),

}


export default {
    state,
    getters,
    actions,
    mutations,
}