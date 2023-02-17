import {Provider, Account, Contract, ec, json,} from "starknet";

const args = process.argv.slice(2)
const classHash = args[0]

// connect provider
const provider = new Provider({ sequencer: { network: "goerli-alpha" } });

const starkKeyPair = ec.genKeyPair();
const starkKeyPublic = ec.getStarkKey(starkKeyPair);
const account0 = new Account(provider, account0Address, starkKeyPublic);


const response = await account0.deploy({
    classHash: classHash,
    constructorCalldata: []
})

console.log(response.transaction_hash,",",response.contract_address[0])
