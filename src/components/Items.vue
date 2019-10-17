<template>
    <v-container>
        <v-row v-if="status">
            <v-col sm="2" v-for="(item, index) in items" :key="index">
                <v-card
                    class="mx-auto mb-5"
                    elevation="10" >
                    <v-img :src="item.Poster"  aspect-ratio="1"></v-img>

                    <div class="pa-2">
                        <v-card-title>
                            <div>{{item.Title}}</div>
                        </v-card-title>
                        <v-card-text>
                            <span class="grey--text subtitle-1">{{item.Year}}</span>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn class="secondary" :to="'/detail/'+ item.imdbID">Detail</v-btn>

                            <v-btn class="primary" @click="link(item.imdbID)">
                                Imdb
                            </v-btn>

                            <div class="flex-grow-1"></div>

                            <v-btn icon><v-icon>mdi-chevron-down</v-icon></v-btn>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-else>
            <v-col>
                <v-alert
                prominent
                type="error" >
                    <v-row align="center">
                        <v-col class="grow">To much movie, try more spesific....</v-col>
                    </v-row>
                </v-alert>
            </v-col>

        </v-row>
        
        
        
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'items',
    computed: {
        ...mapGetters({
            items : 'search/items',
            status : 'search/status',
        })
    },
    methods: {
        link(imdb){
            window.open('https://www.imdb.com/title/'+imdb, '_blank') 
        }
    },
}
</script>