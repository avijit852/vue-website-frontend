import axios from 'axios';
import config from '../../Config';

const state = {
    allPortfolio:[],
    singlePortfolio:[],
};

const getters ={
    getPortfolio: state => state.allPortfolio,
    getSinglePortfolio: state => state.singlePortfolio,
};

const actions ={


    // async fetchPortfolio({ commit }){
    //     await axios.post(config.staticStore.apiLInk,{
    //             "action":"getPortfolio"
    //     })
    //     .then( (responce)=>{
    //         commit('setPortfolio', responce.data);
    //     })
    //     .catch( function(error){
    //         commit('setPortfolio', error);
    //     });
        
    // },


    async fetchPortfolioByLimit({ commit }, start){
        if(start == 0 ){
            state.allPortfolio = [];
        }
        await axios.post(config.staticStore.apiLInk,{
                "action":"getPortfolioByLimit",
                "start":start
        })
        .then( (responce)=>{
            console.log("This is porfolio", responce.data)
            commit('setPortfolio', responce.data);
        })
        .catch( function(error){
            commit('setPortfolio', error);
        });
        
    },

    async fetchSinglePortfolio({ commit },data){
        console.log(data)
        await axios.post(config.staticStore.apiLInk,{
                "action":"getSinglePortfolio",
                "slug":data
        })
        .then( (responce)=>{
            commit('setSinglePortfolio', responce.data);
        })
        .catch( function(error){
            commit('setSinglePortfolio', error);
        });
        
    },

};

const mutations = {
    setPortfolio: (state, portfolio) => {
        for(let i=0; i< portfolio.data.length; i++){
            state.allPortfolio.push(portfolio.data[i]);
        }
    },
    setSinglePortfolio: (state, singleProtfolio) =>(state.singlePortfolio = singleProtfolio),
}
export default {
    state,
    getters,
    actions,
    mutations
};
