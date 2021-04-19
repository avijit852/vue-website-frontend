<template>
    <div>
        <div class="innrbnr">
            <div class="container">
                <h2>{{ pageDetailsData.page_heading }}</h2>
            </div>
        </div>
        <div class="about" id="about">
            <div class="container">
                <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="img-box">
                    <img :src="link+pageDetailsData.page_image" alt="">
                    </div>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <div class="txt">
                    <h2 class="top-header">{{ pageDetailsData.page_heading }}</h2>
                    <h3>{{ pageDetailsData.page_tagline }} </h3>
                    <p class="ptxt">{{ pageDetailsData.page_description }} </p>
                    <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus eros, dictum sit amet nisi gravida, mollis rhoncus ligula. Donec eu arcu ipsum. Sed a magna ut lorem faucibus euismod et sed urna. Maecenas lectus purus, porttitor quis diam sollicitudin, laoreet eleifend magna. Vestibulum rutrum eros non velit efficitur laoreet. -->
                    <!-- <p class="ptxt">Vivamus pellentesque tincidunt ante. Donec sollicitudin porttitor massa nec accumsan. Duis nec placerat odio, sodales commodo felis. Proin pharetra tempor vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tincidunt augue est, id volutpat quam consectetur sit amet.</p> -->
                </div>
                </div>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="about-bottom"></div>
        </div>

        <!-- <table border="1px">
                <tr>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>City</th>
                </tr>
                <tr v-for="(row, index) in persons" :key="index">
                    <td>{{ row.email }}</td>
                    <td>{{ row.gender }}</td>
                    <td>{{ row.location.city }}</td>
                </tr>
        </table>
        <button @click="getMoreInfo">Get More Info</button> -->
        <!-- <div v-for="(person,index) in persons" :key="index">
            <h2>HEllo World</h2>
            <div class="left">
                <img :src="person.picture.large">
            </div>
            <div class="right">
                <p>{{ person.name.first }} {{ person.name.last }}</p>
                <ul>
                <li>
                    <strong>Birthday:</strong> {{ formatDate(person.dob) }}
                </li>
                <li class="text-capitalize">
                    <strong>Location:</strong> {{ person.location.city }},
                    {{ person.location.state }}
                </li>
                </ul>
            </div>
        </div> -->

    </div>   
</template>

<script>
// import axios from 'axios';

import { mapActions } from "vuex";

export default {
    data(){
        return{
            link:  this.$store.state.fileFetchLink+'pages/',
            // persons: []
            pageDetails:{
                "action":"getPage",
                "pagename":"about"
            },
            pageDetailsData:[],
        }
    },
    methods:{
        ...mapActions(["getPageDetails"]),
        // async getInitialUsers () {
        //     for (var i = 0; i < 5; i++) {
        //     await axios.get(`https://randomuser.me/api/`)
        //         .then(response => {
        //         console.log(response.data.results[0]);
        //         this.persons.push(response.data.results[0]);
        //         console.log("persons",this.persons);
        //         });
        //     }
        // },
        // scroll () {
        //     window.onscroll = () => {
        //     let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        //     if (bottomOfWindow) {
        //         axios.get(`https://randomuser.me/api/`)
        //         .then(response => {
        //             this.persons.push(response.data.results[0]);
        //         });
        //      }
        //     };
        // }, 

        // getMoreInfo(){
        //     for (var i = 0; i < 5; i++) {
        //     axios.get(`https://randomuser.me/api/`)
        //     .then(response => {
        //         this.persons.push(response.data.results[0]);
        //     });
        //     }
        // }
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
         this.getPageDetails(this.pageDetails)
        .then( (responce)=>{
            console.log(responce.data[0]);
            this.pageDetailsData = responce.data[0];
            // console.log("This is getter Function ",this.getPageData);   
        })
    }

    // created(){
    //      this.getInitialUsers();
    // }, 
    // beforeMount() {
    //     this.getInitialUsers();
    // },

    // mounted() {
    //     this.scroll(this.person);
    // }
}
</script>

<style scoped>
     /* Optional Styles
 .person {
    background: #ccc;
    border-radius: 2px;
    width: 20%;
    margin: 0 auto 15px auto;
    padding: 15px;

    
  }

  img {
      width: 100%;
      height: auto;
      border-radius: 2px;
    }

    p:first-child {
      text-transform: capitalize;
      font-size: 2rem;
      font-weight: 900;
    }

    .text-capitalize {
      text-transform: capitalize;
    } */
</style>