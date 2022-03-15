const setAddress = (state, userAddress) => {
    state.address = userAddress
    state.status = true
    console.log("commited", userAddress)
}

export default setAddress