<template>
    <div>
        <v-container class="mt-5">
            <v-text-field class="display-1" shaped v-model="search" placeholder="Find title movie" clearable solo :loading="loading" @input="doSearch"></v-text-field>
        </v-container> 
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'search',
    data () {
        return {
            type: 'movie',
            search : '',
            loading: false
        }
    },
    computed: {
        ...mapGetters({
            apikey : 'search/apikey',
        })
    },
    methods: {
        ...mapActions({
            setItem : 'search/setItem',
            setStatus : 'search/setStatus',
        }),
        doSearch(){
            this.loading = true
            this.axios.get('?apikey='+this.apikey+'&type='+this.type+'&s='+this.search).then((response) => {
                let data = response.data 
                this.setItem(data.Search)
                this.setStatus(data.Response)
            }).catch((error) => {
                console.log(error.response)
            }).finally(() => {
                this.loading = false
            })    
        },    
    }
    
}
</script>