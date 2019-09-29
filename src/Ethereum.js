import LitionERC20Abi from './abi/ERC20'
import LitionRegistryAbi from './abi/LitionRegistry'
import config from './config'
import { tokensToHex, tokensToLit } from './utils'
import Web3 from 'web3'

export default (ethereum, web3) => {
  if (typeof ethereum === 'undefined' || typeof web3 === 'undefined' || !Object.prototype.hasOwnProperty.call(web3, 'currentProvider')) {
    throw Error('No ethereum compatible client installed')
  }

  const _ethereum = ethereum
  const _currentProvider = web3.currentProvider
  let _erc20Contract
  let _litionRegistryContract
  let _web3
  let _account

  function initialize () {
    _web3 = new Web3(_currentProvider)
    _erc20Contract = new _web3.eth.Contract(LitionERC20Abi, config.litionErc20TokenContractAddress)
    _litionRegistryContract = new _web3.eth.Contract(LitionRegistryAbi, config.litionRegistryContractAddress)
  }

  initialize()

  return {
    hasMetaMask () {
      return _ethereum.isMetaMask
    },
    async login () {
      let accounts = await _ethereum.enable()

      if (accounts.length === 0) {
        throw Error('User has no MetaMask accounts')
      }

      _account = accounts[0]
    },
    async getNetworkType () {
      return _web3.eth.net.getNetworkType()
    },
    async transactions () {
      // if (typeof _account === 'undefined') {
      //   await this.login()
      // }
      //
      // const count = await _web3.eth.getTransactionCount(_account)
      // let transactions = []
      // for (let i = 0; i < count; i++) {
      //   const block = await _web3.eth.getBlock(count - i)
      //   // transactions.push(block)
      //   // console.log(_web3.eth.getTransactionFromBlock(block.hash))
      //   transactions.push(_web3.eth.getTransactionFromBlock(block.hash))
      // }
      //
      // return Promise.all(transactions)
    },
    async getLastNotary (chainId) {
      return _litionRegistryContract
        .methods
        .getLastNotary(chainId)
        .call()
    },
    async mint (tokens) {
      if (typeof _account === 'undefined') {
        await this.login()
      }

      return _erc20Contract
        .methods
        .mint(_account, tokensToHex(tokens))
        .send({
          from: _account
        })
    },
    async approve (tokens) {
      if (typeof _account === 'undefined') {
        await this.login()
      }

      return _erc20Contract
        .methods
        .approve(config.litionRegistryContractAddress, tokensToHex(tokens))
        .send({
          from: _account
        })
    },
    async registerChain (
      description,
      initEndpoint,
      validatorAddress,
      vesting,
      maxNumberOfValidators,
      maxNumberOfTransactors,
      notaryVesting,
      notaryParticipation
    ) {
      if (typeof _account === 'undefined') {
        await this.login()
      }

      return _litionRegistryContract
        .methods
        .registerChain(
          description,
          initEndpoint,
          validatorAddress,
          tokensToHex(vesting),
          maxNumberOfValidators,
          maxNumberOfTransactors,
          notaryVesting,
          notaryParticipation
        )
        .send({
          from: _account
        })
    },
    async getChainStaticDetails (chainId) {
      if (typeof _account === 'undefined') {
        await this.login()
      }

      return _litionRegistryContract
        .methods
        .getChainStaticDetails(chainId)
        .call()
    },
    async requestVestInChain (chainId, tokens) {
      if (typeof _account === 'undefined') {
        await this.login()
      }

      return _litionRegistryContract
        .methods
        .requestVestInChain(chainId, tokensToHex(tokens))
        .send({
          from: _account
        })
    },
    async confirmVestIncreaseInChain (chainId) {
      if (typeof _account === 'undefined') {
        await this.login()
      }

      return _litionRegistryContract
        .methods
        .confirmVestIncreaseInChain(chainId)
        .send({
          from: _account
        })
    },
    async requestDepositInChain (chainId, tokens) {
      if (typeof _account === 'undefined') {
        await this.login()
      }

      return _litionRegistryContract
        .methods
        .requestDepositInChain(chainId, tokensToHex(tokens))
        .send({
          from: _account
        })
    },
    async getUserDetails (chainId) {
      if (typeof _account === 'undefined') {
        await this.login()
      }

      return _litionRegistryContract
        .methods
        .getUserDetails(chainId, _account)
        .call()
    },
    async withdrawVestInChain (chainId, tokens) {
      if (typeof _account === 'undefined') {
        await this.login()
      }

      const userDetails = await this.getUserDetails(chainId)
      const totalVesting = parseInt(tokensToLit(userDetails.vesting))

      if (tokens > totalVesting) {
        throw new Error(`You can withdraw maximum of ${totalVesting} tokens from vesting`)
      }

      return this.requestVestInChain(chainId, totalVesting - tokens)
    }
  }
}
