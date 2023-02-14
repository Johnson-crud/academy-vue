import { createStore } from "vuex";
import {Users,Branch,Batch} from './initialState/index'


export const store = createStore({
    state:{
        Users,
        Batch,
        Branch
    },
    getters:{},
    actions:{},
    mutations:{}
})