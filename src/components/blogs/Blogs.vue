<template>
    <div>
            
        <div class="innrbnr">
            <div class="container">
                <h2>Blogs</h2>
            </div>
        </div>
        
        <div class="blog-list">
            <div class="container">
                <div class="row">
                    <div class="col-md-6" v-for="( row,index) in getBlogs" :key="index">
                        <div class="bg-box">
                            <div class="row">
                                <div class="col-md-6">
                                <div class="bimage">
                                    <img :src="link+row.blogs_image" />
                                </div>
                                </div>
                                <div class="col-md-6">
                                <div class="blgcnt">
                                    <h4>{{ row.blogs_title }}</h4>
                                    <div class="date">{{ row.blogs_date | formatDate }}</div>
                                    <p>{{ row.blogs_short_description }}</p>
                                    <router-link class="morebtn" :to="`blogs/`+row.blogs_slug">Read More <i class="fa fa-long-arrow-right"></i></router-link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
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
            link:this.$store.state.fileFetchLink+'blogs/',

            pageDetails:{
                "action":"getPage",
                "pagename":"blogs"
            },
            pageDetailsData:[],
        }
    },
    computed:{
        ...mapGetters(["getBlogs"]),
    },
    methods:{
         ...mapActions(["fetchBlogsByLimit","getPageDetails"]),
         toGetFourValue(){
            this.start = this.start + 4;
            console.log(this.start);
            this.fetchBlogsByLimit(this.start);
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
        this.fetchBlogsByLimit(this.start)

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

</style>