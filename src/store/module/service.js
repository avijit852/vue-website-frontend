import axios from 'axios';
import config from '../../Config';

const state = {
    allService:[],
    serviceFour:[],
    singleService:[],
};

const getters ={
    getService: (state) => state.allService,
    getServiceFour: (state) => state.serviceFour,
    getSingleService : (state) =>state.singleService
};

const actions ={


    async fetchService({ commit }, start){
        if(start == 0 ){
            state.allService = []
        }
        await axios.post(config.staticStore.apiLInk,{
                "action":"getServicebyLimit",
                "start":start
        })
        .then( (responce)=>{
            commit('setService', responce.data);   
        })
        .catch( function(error){
            commit('setService', error);
        });
        
    },
    
    async fetchServiceFour({ commit }){
        await axios.post(config.staticStore.apiLInk,{
            "action":"getServicebyLimit",
            "start":0
        }).then( (responce)=>{
            let data = responce.data.data.slice(0,4);
            commit('setServiceFour', data);
        })
        .catch( function(error){
            commit('setServiceFour', error);
        });
    },

    async fetchSingleService({ commit},data){
        console.log(data)
        await axios.post(config.staticStore.apiLInk,data)
        .then( (responce)=>{
            commit('setSingleService', responce.data);
        })
        .catch( function(error){
            commit('setSingleService', error);
        });
    }

};

const mutations = {
    setService: (state, services) => { 
        for(let i=0; i<services.data.length ;i++){
            state.allService.push(services.data[i])
        }   
    },
    setServiceFour : (state, ServiceFour) => (state.serviceFour = ServiceFour),
    setSingleService : (state, singleService ) => (state.singleService = singleService),
}
export default {
    state,
    getters,
    actions,
    mutations
};
