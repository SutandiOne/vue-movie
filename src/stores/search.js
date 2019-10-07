export default {   
    namespaced: true,   
    state: {
        apikey: process.env.VUE_APP_SECRET,          
        items : [],
        status : true,
    },   
    mutations: {     
        setItem: (state, items) => {
            state.items = items     
        },
        setStatus: (state, status) => {
            state.status = status     
        },          
    },   
    actions: {     
        setItem: ({commit}, items) => {       
            commit('setItem', items)     
        }, 
        setStatus: ({commit}, status) => {       
            commit('setStatus', status)     
        },        
    },   
    getters: {            
        items  : state => state.items,       
        apikey  : state => state.apikey,       
        status  : state => state.status,       
    } 
} 