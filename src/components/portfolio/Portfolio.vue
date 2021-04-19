<template>
    <div>
        <div class="innrbnr">
            <div class="container">
                <h2>Portfolio</h2>
            </div>
        </div>


        <div class="service">
            <div class="container">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12" v-for="(row,index) in getPortfolio" :key="index">
                    <div class="box">
                        <div class="img-box">
                            <div class="hovereffect">
                            <img :src="link+row.portfolio_image" alt="">
                            <div class="overlay">
                            </div>
                            </div>
                        </div>
                        <div class="text">
                        <h2>{{ row.portfolio_title }}</h2>
                        <p>{{ row.portfolio_short_description }}</p>
                        <router-link :to="`portfolio/`+row.portfolio_slug">Read More</router-link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="viewMore">
                <button class="btn btn-success" @click="toGetFourValue">view more</button>
            </div>

        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; 
export default {
    data(){
        return{
            start:0,
            link:this.$store.state.fileFetchLink+'portfolio/',
            pageDetails:{
                "action":"getPage",
                "pagename":"portfolio"
            },
            pageDetailsData:[],
        }
    },
    computed:{
        ...mapGetters(["getPortfolio"]),
    },
    methods:{
        ...mapActions(["fetchPortfolioByLimit","getPageDetails"]),
        toGetFourValue(){
            this.start = this.start + 4;
            console.log(this.start);
            this.fetchPortfolioByLimit(this.start);
        }
    },

    metaInfo() {
        return { 
            title: "Creative Web Design - "+ this.pageDetailsData.meta_title ,
            meta: [
                { name: this.pageDetailsData.meta_keyword, content: this.pageDetailsData.meta_description },
            ]
        }
    },

    created(){
        this.fetchPortfolioByLimit(this.start);


         this.getPageDetails(this.pageDetails)
        .then( (responce)=>{
            console.log(responce.data[0]);
            this.pageDetailsData = responce.data[0];
            console.log("This is pagedetails Function ",this.getPageData);   
        });
    }

}
</script>

<style scoped>
.viewMore{
    margin-top: 70px ;
}
</style>