<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="font-nordicenergy text-3xl font-bold">{{ $t('headline.vest_in_chain') }}</h1>
    </div>

    <div v-if="userDetails" class="w-full mt-8">
      <span class="uppercase text-sm text-nordicenergy-gray font-medium">Total vesting:</span>
      <span class="uppercase text-sm ml-2">{{ formatTokens(userDetails.vesting) }} NET</span>
    </div>
    <div v-else class="w-full mt-8 flex justify-center h-12">
      <span class="spinner-in-page"></span>
    </div>

    <div class="w-full mt-8">
      <div class="w-3/4">
        <label class="text-xs text-nordicenergy-gray font-medium">Add tokens to vesting</label>
        <div class="relative">
          <NetTextInput v-model="tokens" @action="handleAction" :loading="processing" placeholder="NET 0">Vest
          </NetTextInput>
          <Tooltip v-if="errorMessage" class="absolute top-0 right-0 -mr-48 -mt-6">
            <template slot="headline">MetaMask Error</template>
            <template slot="text">{{ errorMessage }}</template>
          </Tooltip>
        </div>
      </div>
    </div>
    <div class="mt-12 flex justify-between">
      <BackButton @click.native="previous">Back to vesting menu</BackButton>
    </div>
  </div>
</template>

<script>
import NetTextInput from '../../components/NetTextInput'
import BackButton from '../../components/BackButton'
import { fromNetPrecisionToTokens } from '../../utils'
import Tooltip from '../../components/Tooltip'
import WithErrorMessage from '../../components/WithErrorMessage'

export default {
  inject: ['ethereum'],
  mixins: [WithErrorMessage],
  props: {
    chain: {
      type: String
    },
    network: {
      type: String
    }
  },
  components: { NetTextInput, BackButton, Tooltip },
  data () {
    return {
      tokens: null,
      processing: false,
      userDetails: null
    }
  },
  mounted () {
    this.fetchUserDetails()
  },
  methods: {
    formatTokens (tokens) {
      return fromNetPrecisionToTokens(tokens)
    },
    async fetchUserDetails () {
      this.userDetails = await this.ethereum.getUserDetails(this.chain)
    },
    async handleAction () {
      this.processing = true
      try {
        const response = await this.ethereum.addToVestInChain(this.chain, this.tokens)

        console.log(response)

        this.$store.dispatch('setVestInChain', {
          tokens: this.tokens,
          timestamp: new Date(),
          transaction: response
        })
        await this.$router.push({
          name: 'interact.vest_in_chain_completed',
          params: { chain: this.chain, network: this.network }
        })
      } catch (e) {
        this.handleError()
      } finally {
        this.processing = false
      }
    },
    previous () {
      this.$router.push({ name: 'interact.vesting', params: { chain: this.chain, network: this.network } })
    }
  }
}
</script>
