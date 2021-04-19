import axios from 'axios';
import config from '../../Config';

const state = {
    allSlider:[],
    sliderTwo:[],
}

const getters ={
  getSlider: state => state.allSlider,
  getSliderTwo: state => state.sliderTwo,
}

const actions ={ 

    insertQuery(context,qry){
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

    async fetchSlider({ commit }){
        await axios.post(config.staticStore.apiLInk,{
                "action":"getSlider"
        })
        .then( (responce)=>{
            const data = responce.data.data.slice(0,1);
            const datatwo = responce.data.data.slice(1,3);
            commit('setSlider', data);
            commit('setSliderTwo', datatwo);
        })
        .catch( function(error){
            commit('setSlider', error);
        });
        
    },

}

const mutations = { 
    setSlider: (state, data) => (state.allSlider = data),
    setSliderTwo: (state, datatwo) => (state.sliderTwo = datatwo),
}


export default {
    state,
    getters,
    actions,
    mutations
};
