import axios from 'axios';
import config from '../../Config';

const state = {
    allBlogs:[],
    getBlogsTow:[],
    singleBlogs:[],
};

const getters ={
    getBlogs: state => state.allBlogs,
    getBlogsTow: state => state.getBlogsTow,
    getSingleBlogs: state => state.singleBlogs,
};

const actions ={


    async fetchBlogs({ commit }){
        await axios.post(config.staticStore.apiLInk,{
                "action":"getBlogs"
        })
        .then( (responce)=>{
            const data = responce.data.data.slice(0,2);
            commit('setBlogs', responce.data);
            commit('setBlogsTow', data);
        })
        .catch( function(error){
            commit('setBlogs', error);
        });
        
    },

    async fetchBlogsByLimit({ commit }, start){
        if(start == 0 ){
            state.allBlogs = []
        }
        await axios.post(config.staticStore.apiLInk,{
                "action":"getBlogsByLimit",
                "start":start
        })
        .then( (responce)=>{
            console.log("Blogs data", responce.data.data)
            commit('setBlogs', responce.data);
        })
        .catch( function(error){
            commit('setBlogs', error);
        });
        
    },

    async fetchSingleBlogs({ commit },data){
        console.log(data)
        await axios.post(config.staticStore.apiLInk,{
                "action":"getSingleBlogs",
                "slug":data
        })
        .then( (responce)=>{
            commit('setSingleBlogs', responce.data);
            console.log(responce.data)
        })
        .catch( function(error){
            commit('setSingleBlogs', error);
        });
        
    },

};

const mutations = {
    setBlogs: (state, blogs) => { 
        for(let i=0; i<blogs.data.length ;i++){
            state.allBlogs.push(blogs.data[i])
        } 
    },
    setBlogsTow: (state, data) => (state.getBlogsTow = data),
    setSingleBlogs: (state, setSingleBlogs) =>(state.singleBlogs = setSingleBlogs),
}
export default {
    state,
    getters,
    actions,
    mutations
};
