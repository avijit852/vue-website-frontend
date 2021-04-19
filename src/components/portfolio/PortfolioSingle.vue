<template>
    <div>
        <div class="innrbnr">
            <div class="container">
                <h2>Portfolio Details</h2>
            </div>
        </div>

        <div class="blog-details">
            <div class="container">
                <div class="bg-box">
                    <div class="row" v-for="(row,index) in getSinglePortfolio.data" :key="index">
                        <div class="col-md-4">
                            <div class="bimage">
                                <img :src="link+row.portfolio_image" />
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="blgcnt">
                                <h4>{{ row.portfolio_title }}</h4>
                                <p v-html="row.portfolio_description">
                                    
                                </p>
                                <!-- <a href="#0" class="morebtn">Read More <i class="fa fa-long-arrow-right"></i></a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters, mapActions } from "vuex"; 
export default {
    data(){
        return{
            link:this.$store.state.fileFetchLink+'portfolio/',
            id: this.$route.params.id,
        }
    },
    computed:{
        ...mapGetters(["getSinglePortfolio"]),
    },
    methods:{
        ...mapActions(["fetchSinglePortfolio"]),
    },
    created(){
        console.log(this.id)
        this.fetchSinglePortfolio(this.id);
    }

    // created(){
    //     console.log(this.id);      
    //     axios.post("http://localhost/creativewebdesign/v1/service",{
    //         "action":"getSinglePortfolio",
    //         "slug":this.id
    //     })
    //     .then( (responce)=>{
    //         console.log(responce)
    //     })
    //     .catch( function(error){
    //         console.log(error)
    //     });
        
    // }
}
</script>