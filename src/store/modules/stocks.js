import stocks from '../../data/stocks'

const state ={
    stocks: []
};

const mutations = {
    'SET_STOCKS'(state, stocks){
                        //把新的stocks作为参数传入，覆盖原有的stocks变量，这样就改变了原有的state
        state.stocks = stocks;
    },
    'RONDAM_STOCKS'(state){
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
            
        });
    }

};
const actions = {
    buyStock: ({commit}, order) => {
              //因为这里只需要commit函数，所以用参数解构直接从context对象中提取出来
        commit('BUY_STOCK', order);
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);//import进来的stocks
    },
    randomizeStocks: ({commit}) => {
        commit('RONDAM_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};
export default{
    state,
    mutations,
    actions,
    getters
}