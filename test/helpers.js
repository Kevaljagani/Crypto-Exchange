// export const EVM_REVERT = "VM Exception while processing transcation: revert"
// export const ETHER_ADDDRESS = "0x000000000000000000000000" //incorrect value
// export const ether = (n) => {
//     return new web3.utils.BN(
//     web3.utils.toWei(n.toString(), 'ether')
//     )
// }

// export const tokens = (n) => ether(n)

export const ETHER_ADDRESS = '0x0000000000000000000000000000000000000000'

export const EVM_REVERT = 'VM Exception while processing transaction: revert'

export const ether = (n) => {
  return new web3.utils.BN(
    web3.utils.toWei(n.toString(), 'ether')
  )
}

// Same as ether
export const tokens = (n) => ether(n)