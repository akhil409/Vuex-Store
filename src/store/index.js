import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      { id:1, name: 'glo abredit', age: 27, status: 0, created_at: '2017-09-11', Location:'California', display:false },
      { id:2, name: 'gia fella', age: 29, status: 1, created_at: '2017-09-01', Location:'Washinton DC', display:false },
      { id:3, name: 'ohaneze david', age: 23, status: 0, created_at: '2017-09-09', Location:'Florida', display:false  },
      { id:4, name: 'paul david', age: 21, status: 1, created_at: '2017-09-21', Location:'Texas', display:false  },
      { id:5, name: 'john williams', age: 20, status: 0, created_at: '2017-03-13', Location:'North Carolina', display:false  },
      { id:6, name: 'mary jokers', age: 28, status: 1, created_at: '2017-09-30', Location:'South Carolina', display:false  },
      { id:7, name: 'chris aloha', age: 27, status: 0, created_at: '2017-09-19', Location:'New York', display:false  },
      { id:8, name: 'johnson silva', age: 29, status: 0, created_at: '2017-09-17', Location:'MaryLand', display:false  },
      { id:9, name: 'sens carlos', age: 26, status: 0, created_at: '2017-09-04', Location:'Connecticut', display:false  },
      { id:10, name: 'sophia nkom', age: 25, status: 0, created_at: '2017-09-05', Location:'Ohio', display:false  },
      { id:11, name: 'jo westley', age: 22, status: 1, created_at: '2017-09-16', Location:'Delaware', display:false  },
      { id:12, name: 'sam john', age: 24, status: 0, created_at: '2017-04-01', Location:'Neveda', display:false  },
      { id:13, name: 'dia dia', age: 27, status: 1, created_at: '2017-05-08', Location:'New Mexico', display:false  }
    ]
  },
  getters: {
    userAge: state => {
      let ageIncrease = state.users.map((user)=>{
        return {
            name: '**' + user.name + '**',
            age: user.age+5
        }
    })
    return ageIncrease
    }
  },
  mutations: {
        reduceAge: ( state, payload ) => {
        state.users.forEach(user =>{
        user.age -= payload;
  })
}
  },
  actions: {
       reduceAge: ( context, payload) => {
       setTimeout(()=>{
        context.commit('reduceAge',payload )
       },3000)
    }
  },
  modules: {
  }
})
