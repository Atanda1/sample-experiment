import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = () => ({
  metamaskSigner: "",
  walletConnectSigner: ""

})


export default {
	namespaced: true,
	state,
	actions,
	getters,
	mutations
}