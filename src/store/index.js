import Vue from 'vue';
import Vuex from 'vuex';
import service from './module/service';
import portfolio from './module/portfolio';
import blogs from './module/blogs';
import home from './module/home';
import reach from './module/reach';
import page from './module/page';

Vue.use(Vuex);


export default new Vuex.Store({

    state: {
        fileFetchLink :"http://localhost/creativewebdesign/uploads/",
    },

    getters: {

    },

    mutations: {

    },
    actions: {

    },

    modules:{
        service,
        portfolio,
        blogs,
        home,
        reach,
        page
    }
 }) 




