<template>
    <v-container class="mt-6 mb-6" fluid>
        <v-overlay v-if="loading">
            <v-progress-circular
            :size="70"
            :width="7"
            color="purple"
            indeterminate
            ></v-progress-circular>
        </v-overlay>
        
        <v-card class="pa-5" color="blue-grey" flat>
            <v-row>
                
                <v-col>
                    <v-card elevation="10">
                        <v-img
                        :src="movie.Poster"
                        lazy-src="https://picsum.photos/id/11/10/6"
                        aspect-ratio="1"
                        class="grey lighten-2"
                        
                        ></v-img>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card>
                        <v-card-title v-text="movie.Title+' ('+movie.Year+')'"></v-card-title>
                       
                        <v-card-text>
                            <v-row class="pl-2" v-for="(rating, index) in movie.Ratings" :key="index">
                                <v-rating
                                length="1"
                                value="1"
                                color="amber"
                                half-increments
                                dense
                                size="20"
                                readonly
                                ></v-rating>

                                <div class="black--text ml-4">{{rating.Source}} {{rating.Value}}</div>
                            </v-row>
                        </v-card-text>

                        

                        <v-divider class="mx-4"></v-divider>
                        
                        <v-card-text>
                        <div class="title text--primary">Plot</div>
                        <div v-text="movie.Plot"></div>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-text>
                        <div class="title text--primary">Genre</div>
                        <v-chip
                            class="ma-2"
                            color="primary"
                            label
                            >
                            <v-icon left>mdi-bookmark </v-icon>
                            {{movie.Genre}}
                        </v-chip>
                        </v-card-text>

                        <v-list flat>
                            <v-list-item-group color="indigo">
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-account-star </v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-content>
                                        <v-list-item-title v-text="'Director : '+movie.Director"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-account-supervisor</v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-content>
                                        <v-list-item-title v-text="'Writer : '+movie.Writer"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-account-supervisor</v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-content>
                                        <v-list-item-title v-text="'Actors : '+movie.Actors"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>

                        <v-card-actions>
                        <v-btn
                            color="deep-purple accent-4"
                            text
                            @click.stop="$router.go(-1)">
                            Back
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name: 'detail',
    data() {
      return {
          movie: {},
          loading: true
      }
    },
    computed: {
        ...mapGetters({
            apikey : 'search/apikey',
        })
    },
    created(){
        let { imdb } = this.$route.params 
        this.axios.get('?apikey='+this.apikey+'&i='+imdb).then((response) => {
            let data = response.data   
            this.movie = data
        }).catch((error) => {
            console.log(error.response)
        }).finally(() => {
            this.loading = false
        }) 
  }
};
</script>