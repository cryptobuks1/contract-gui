export const getAbi = () => {
  return [{
    'constant': false,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }],
    'name': 'cancel_vest_in_chain',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'internalType': 'uint256',
      'name': 'batch',
      'type': 'uint256'
    }],
    'name': 'get_active_validators',
    'outputs': [{ 'internalType': 'address[100]', 'name': '', 'type': 'address[100]' }, {
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }, { 'internalType': 'bool', 'name': '', 'type': 'bool' }],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }],
    'name': 'start_mining',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{ 'internalType': 'uint256', 'name': 'notary_block', 'type': 'uint256' }, {
      'internalType': 'address[]',
      'name': 'miners',
      'type': 'address[]'
    }, { 'internalType': 'uint32[]', 'name': 'blocks_mined', 'type': 'uint32[]' }, {
      'internalType': 'address[]',
      'name': 'users',
      'type': 'address[]'
    }, { 'internalType': 'uint32[]', 'name': 'user_gas', 'type': 'uint32[]' }, {
      'internalType': 'uint32',
      'name': 'largest_tx',
      'type': 'uint32'
    }],
    'name': 'get_signature_hash_from_notary',
    'outputs': [{ 'internalType': 'bytes32', 'name': '', 'type': 'bytes32' }],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'internalType': 'uint256',
      'name': 'deposit',
      'type': 'uint256'
    }],
    'name': 'request_deposit_in_chain',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }],
    'name': 'cancel_deposit_in_chain',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }],
    'name': 'confirm_deposit_withdrawal_from_chain',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }],
    'name': 'stop_mining',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'internalType': 'address',
      'name': 'acc',
      'type': 'address'
    }],
    'name': 'get_user_details',
    'outputs': [{ 'internalType': 'bool', 'name': 'exists', 'type': 'bool' }, {
      'internalType': 'uint256',
      'name': 'deposit',
      'type': 'uint256'
    }, { 'internalType': 'bool', 'name': 'whitelisted', 'type': 'bool' }, {
      'internalType': 'uint256',
      'name': 'vesting',
      'type': 'uint256'
    }, { 'internalType': 'bool', 'name': 'mining', 'type': 'bool' }],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'internalType': 'uint256',
      'name': 'notary_start_block',
      'type': 'uint256'
    }, { 'internalType': 'uint256', 'name': 'notary_end_block', 'type': 'uint256' }, {
      'internalType': 'address[]',
      'name': 'miners',
      'type': 'address[]'
    }, { 'internalType': 'uint32[]', 'name': 'blocks_mined', 'type': 'uint32[]' }, {
      'internalType': 'address[]',
      'name': 'users',
      'type': 'address[]'
    }, { 'internalType': 'uint32[]', 'name': 'user_gas', 'type': 'uint32[]' }, {
      'internalType': 'uint32',
      'name': 'largest_tx',
      'type': 'uint32'
    }, { 'internalType': 'uint8[]', 'name': 'v', 'type': 'uint8[]' }, {
      'internalType': 'bytes32[]',
      'name': 'r',
      'type': 'bytes32[]'
    }, { 'internalType': 'bytes32[]', 'name': 's', 'type': 'bytes32[]' }],
    'name': 'notary',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{
      'internalType': 'string',
      'name': 'info',
      'type': 'string'
    }, { 'internalType': 'contract ChainValidator', 'name': 'validator', 'type': 'address' }, {
      'internalType': 'uint96',
      'name': 'vesting',
      'type': 'uint96'
    }, { 'internalType': 'uint96', 'name': 'deposit', 'type': 'uint96' }, {
      'internalType': 'string',
      'name': 'init_endpoint',
      'type': 'string'
    }],
    'name': 'register_chain',
    'outputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'internalType': 'uint256',
      'name': 'notary_block_no',
      'type': 'uint256'
    }],
    'name': 'test_notary',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'internalType': 'uint256',
      'name': 'batch',
      'type': 'uint256'
    }],
    'name': 'get_allowed_to_transact',
    'outputs': [{ 'internalType': 'address[100]', 'name': '', 'type': 'address[100]' }, {
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }, { 'internalType': 'bool', 'name': '', 'type': 'bool' }],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'internalType': 'address',
      'name': 'acc',
      'type': 'address'
    }],
    'name': 'has_deposited',
    'outputs': [{ 'internalType': 'bool', 'name': '', 'type': 'bool' }],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'internalType': 'address',
      'name': 'acc',
      'type': 'address'
    }],
    'name': 'get_user_requests',
    'outputs': [{ 'internalType': 'bool', 'name': 'vesting_req_exists', 'type': 'bool' }, {
      'internalType': 'uint256',
      'name': 'vesting_req_time',
      'type': 'uint256'
    }, { 'internalType': 'uint256', 'name': 'vesting_req_notary', 'type': 'uint256' }, {
      'internalType': 'uint256',
      'name': 'vesting_req_value',
      'type': 'uint256'
    }, { 'internalType': 'uint256', 'name': 'vesting_req_state', 'type': 'uint256' }, {
      'internalType': 'uint256',
      'name': 'vesting_req_control_state',
      'type': 'uint256'
    }, { 'internalType': 'bool', 'name': 'deposit_req_exists', 'type': 'bool' }, {
      'internalType': 'uint256',
      'name': 'deposit_req_time',
      'type': 'uint256'
    }, { 'internalType': 'uint256', 'name': 'deposit_req_notary', 'type': 'uint256' }, {
      'internalType': 'uint256',
      'name': 'deposit_req_value',
      'type': 'uint256'
    }, { 'internalType': 'uint256', 'name': 'deposit_req_state', 'type': 'uint256' }],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'internalType': 'address',
      'name': 'acc',
      'type': 'address'
    }],
    'name': 'has_vested',
    'outputs': [{ 'internalType': 'bool', 'name': '', 'type': 'bool' }],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'internalType': 'uint256',
      'name': 'vesting',
      'type': 'uint256'
    }],
    'name': 'request_vest_in_chain',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }],
    'name': 'get_last_notary',
    'outputs': [{
      'internalType': 'uint256',
      'name': 'last_notary_block',
      'type': 'uint256'
    }, { 'internalType': 'uint256', 'name': 'last_notary_timestamp', 'type': 'uint256' }],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }],
    'name': 'get_chain_details',
    'outputs': [{ 'internalType': 'bool', 'name': 'registered', 'type': 'bool' }, {
      'internalType': 'bool',
      'name': 'active',
      'type': 'bool'
    }, { 'internalType': 'string', 'name': 'endpoint', 'type': 'string' }, {
      'internalType': 'uint256',
      'name': 'total_vesting',
      'type': 'uint256'
    }, { 'internalType': 'uint256', 'name': 'last_notary_block', 'type': 'uint256' }, {
      'internalType': 'uint256',
      'name': 'last_notary_timestamp',
      'type': 'uint256'
    }],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [],
    'name': 'next_id',
    'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': true,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'internalType': 'uint256',
      'name': 'batch',
      'type': 'uint256'
    }],
    'name': 'get_allowed_to_validate',
    'outputs': [{ 'internalType': 'address[100]', 'name': '', 'type': 'address[100]' }, {
      'internalType': 'uint256',
      'name': '',
      'type': 'uint256'
    }, { 'internalType': 'bool', 'name': '', 'type': 'bool' }],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }, {
    'constant': false,
    'inputs': [{ 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }],
    'name': 'confirm_vest_in_chain',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  }, {
    'inputs': [{ 'internalType': 'contract ERC20', 'name': '_token', 'type': 'address' }],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  }, {
    'anonymous': false,
    'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'indexed': false,
      'internalType': 'string',
      'name': 'description',
      'type': 'string'
    }, { 'indexed': false, 'internalType': 'string', 'name': 'endpoint', 'type': 'string' }],
    'name': 'NewChain',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'indexed': true,
      'internalType': 'address',
      'name': 'account',
      'type': 'address'
    }, { 'indexed': false, 'internalType': 'uint256', 'name': 'deposit', 'type': 'uint256' }, {
      'indexed': false,
      'internalType': 'uint256',
      'name': 'req_timestamp',
      'type': 'uint256'
    }],
    'name': 'RequestDepositInChain',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'indexed': true,
      'internalType': 'address',
      'name': 'account',
      'type': 'address'
    }, { 'indexed': false, 'internalType': 'uint256', 'name': 'deposit', 'type': 'uint256' }, {
      'indexed': false,
      'internalType': 'uint256',
      'name': 'req_timestamp',
      'type': 'uint256'
    }],
    'name': 'ConfirmDepositInChain',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'indexed': true,
      'internalType': 'address',
      'name': 'account',
      'type': 'address'
    }, { 'indexed': false, 'internalType': 'uint256', 'name': 'deposit', 'type': 'uint256' }, {
      'indexed': false,
      'internalType': 'uint256',
      'name': 'req_timestamp',
      'type': 'uint256'
    }],
    'name': 'CancelDepositInChain',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'indexed': true,
      'internalType': 'address',
      'name': 'account',
      'type': 'address'
    }, { 'indexed': false, 'internalType': 'uint256', 'name': 'timestamp', 'type': 'uint256' }],
    'name': 'ForceWithdrawDeposit',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'indexed': true,
      'internalType': 'address',
      'name': 'account',
      'type': 'address'
    }, { 'indexed': false, 'internalType': 'uint256', 'name': 'vesting', 'type': 'uint256' }, {
      'indexed': false,
      'internalType': 'uint256',
      'name': 'req_timestamp',
      'type': 'uint256'
    }],
    'name': 'RequestVestInChain',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'indexed': true,
      'internalType': 'address',
      'name': 'account',
      'type': 'address'
    }, { 'indexed': false, 'internalType': 'uint256', 'name': 'vesting', 'type': 'uint256' }, {
      'indexed': false,
      'internalType': 'uint256',
      'name': 'req_timestamp',
      'type': 'uint256'
    }],
    'name': 'ConfirmVestInChain',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'indexed': true,
      'internalType': 'address',
      'name': 'account',
      'type': 'address'
    }, { 'indexed': false, 'internalType': 'uint256', 'name': 'vesting', 'type': 'uint256' }, {
      'indexed': false,
      'internalType': 'uint256',
      'name': 'req_timestamp',
      'type': 'uint256'
    }],
    'name': 'CancelVestInChain',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'indexed': true,
      'internalType': 'address',
      'name': 'account',
      'type': 'address'
    }, { 'indexed': false, 'internalType': 'uint256', 'name': 'vesting', 'type': 'uint256' }, {
      'indexed': false,
      'internalType': 'uint256',
      'name': 'req_timestamp',
      'type': 'uint256'
    }],
    'name': 'AcceptedVestInChain',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'indexed': true,
      'internalType': 'address',
      'name': 'account',
      'type': 'address'
    }, { 'indexed': false, 'internalType': 'uint256', 'name': 'timestamp', 'type': 'uint256' }],
    'name': 'ForceWithdrawVesting',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'indexed': false,
      'internalType': 'address',
      'name': 'miner',
      'type': 'address'
    }, { 'indexed': false, 'internalType': 'bool', 'name': 'whitelist', 'type': 'bool' }],
    'name': 'WhitelistAccount',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'indexed': false,
      'internalType': 'address',
      'name': 'miner',
      'type': 'address'
    }],
    'name': 'StartMining',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{ 'indexed': true, 'internalType': 'uint256', 'name': 'chain_id', 'type': 'uint256' }, {
      'indexed': false,
      'internalType': 'address',
      'name': 'miner',
      'type': 'address'
    }],
    'name': 'StopMining',
    'type': 'event'
  }, {
    'anonymous': false,
    'inputs': [{ 'indexed': false, 'internalType': 'address', 'name': 'new_contract', 'type': 'address' }],
    'name': 'Migrate',
    'type': 'event'
  }]
}
