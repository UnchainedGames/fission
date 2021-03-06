// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class OnAddPlayer extends EthereumEvent {
  get params(): OnAddPlayer__Params {
    return new OnAddPlayer__Params(this);
  }
}

export class OnAddPlayer__Params {
  _event: OnAddPlayer;

  constructor(event: OnAddPlayer) {
    this._event = event;
  }

  get _poolId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OnCancelPool extends EthereumEvent {
  get params(): OnCancelPool__Params {
    return new OnCancelPool__Params(this);
  }
}

export class OnCancelPool__Params {
  _event: OnCancelPool;

  constructor(event: OnCancelPool) {
    this._event = event;
  }

  get _poolId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OnCollect extends EthereumEvent {
  get params(): OnCollect__Params {
    return new OnCollect__Params(this);
  }
}

export class OnCollect__Params {
  _event: OnCollect;

  constructor(event: OnCollect) {
    this._event = event;
  }

  get _poolId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OnCreatePool extends EthereumEvent {
  get params(): OnCreatePool__Params {
    return new OnCreatePool__Params(this);
  }
}

export class OnCreatePool__Params {
  _event: OnCreatePool;

  constructor(event: OnCreatePool) {
    this._event = event;
  }

  get _poolId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _host(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _proto(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get _quality(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get _quorum(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class OnRemovePlayer extends EthereumEvent {
  get params(): OnRemovePlayer__Params {
    return new OnRemovePlayer__Params(this);
  }
}

export class OnRemovePlayer__Params {
  _event: OnRemovePlayer;

  constructor(event: OnRemovePlayer) {
    this._event = event;
  }

  get _poolId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _index(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OnWinner extends EthereumEvent {
  get params(): OnWinner__Params {
    return new OnWinner__Params(this);
  }
}

export class OnWinner__Params {
  _event: OnWinner;

  constructor(event: OnWinner) {
    this._event = event;
  }

  get _poolId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _winner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _random(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Contract__getPoolResult {
  value0: BigInt;
  value1: Address;
  value2: i32;
  value3: i32;
  value4: BigInt;
  value5: Array<Address>;
  value6: Array<BigInt>;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: i32,
    value3: i32,
    value4: BigInt,
    value5: Array<Address>,
    value6: Array<BigInt>
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromAddress(this.value1));
    map.set("value2", EthereumValue.fromI32(this.value2));
    map.set("value3", EthereumValue.fromI32(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromAddressArray(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigIntArray(this.value6));
    return map;
  }
}

export class Contract__poolsResult {
  value0: Address;
  value1: i32;
  value2: i32;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: Address,
    value1: i32,
    value2: i32,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromI32(this.value1));
    map.set("value2", EthereumValue.fromI32(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  getPool(poolId: BigInt): Contract__getPoolResult {
    let result = super.call("getPool", [
      EthereumValue.fromUnsignedBigInt(poolId)
    ]);

    return new Contract__getPoolResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toI32(),
      result[3].toI32(),
      result[4].toBigInt(),
      result[5].toAddressArray(),
      result[6].toBigIntArray()
    );
  }

  try_getPool(poolId: BigInt): CallResult<Contract__getPoolResult> {
    let result = super.tryCall("getPool", [
      EthereumValue.fromUnsignedBigInt(poolId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Contract__getPoolResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toI32(),
        value[3].toI32(),
        value[4].toBigInt(),
        value[5].toAddressArray(),
        value[6].toBigIntArray()
      )
    );
  }

  onERC721Received(
    param0: Address,
    _from: Address,
    _tokenId: BigInt,
    _data: Bytes
  ): Bytes {
    let result = super.call("onERC721Received", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(_from),
      EthereumValue.fromUnsignedBigInt(_tokenId),
      EthereumValue.fromBytes(_data)
    ]);

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    _from: Address,
    _tokenId: BigInt,
    _data: Bytes
  ): CallResult<Bytes> {
    let result = super.tryCall("onERC721Received", [
      EthereumValue.fromAddress(param0),
      EthereumValue.fromAddress(_from),
      EthereumValue.fromUnsignedBigInt(_tokenId),
      EthereumValue.fromBytes(_data)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  tokenAddress(): Address {
    let result = super.call("tokenAddress", []);

    return result[0].toAddress();
  }

  try_tokenAddress(): CallResult<Address> {
    let result = super.tryCall("tokenAddress", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  totalPools(): BigInt {
    let result = super.call("totalPools", []);

    return result[0].toBigInt();
  }

  try_totalPools(): CallResult<BigInt> {
    let result = super.tryCall("totalPools", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  pools(param0: BigInt): Contract__poolsResult {
    let result = super.call("pools", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return new Contract__poolsResult(
      result[0].toAddress(),
      result[1].toI32(),
      result[2].toI32(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_pools(param0: BigInt): CallResult<Contract__poolsResult> {
    let result = super.tryCall("pools", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Contract__poolsResult(
        value[0].toAddress(),
        value[1].toI32(),
        value[2].toI32(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  tokenInterface(): Address {
    let result = super.call("tokenInterface", []);

    return result[0].toAddress();
  }

  try_tokenInterface(): CallResult<Address> {
    let result = super.tryCall("tokenInterface", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }
}

export class ActivatePoolCall extends EthereumCall {
  get inputs(): ActivatePoolCall__Inputs {
    return new ActivatePoolCall__Inputs(this);
  }

  get outputs(): ActivatePoolCall__Outputs {
    return new ActivatePoolCall__Outputs(this);
  }
}

export class ActivatePoolCall__Inputs {
  _call: ActivatePoolCall;

  constructor(call: ActivatePoolCall) {
    this._call = call;
  }

  get poolId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ActivatePoolCall__Outputs {
  _call: ActivatePoolCall;

  constructor(call: ActivatePoolCall) {
    this._call = call;
  }
}

export class OnERC721ReceivedCall extends EthereumCall {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class CollectCardsCall extends EthereumCall {
  get inputs(): CollectCardsCall__Inputs {
    return new CollectCardsCall__Inputs(this);
  }

  get outputs(): CollectCardsCall__Outputs {
    return new CollectCardsCall__Outputs(this);
  }
}

export class CollectCardsCall__Inputs {
  _call: CollectCardsCall;

  constructor(call: CollectCardsCall) {
    this._call = call;
  }

  get poolId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CollectCardsCall__Outputs {
  _call: CollectCardsCall;

  constructor(call: CollectCardsCall) {
    this._call = call;
  }
}

export class CancelPoolCall extends EthereumCall {
  get inputs(): CancelPoolCall__Inputs {
    return new CancelPoolCall__Inputs(this);
  }

  get outputs(): CancelPoolCall__Outputs {
    return new CancelPoolCall__Outputs(this);
  }
}

export class CancelPoolCall__Inputs {
  _call: CancelPoolCall;

  constructor(call: CancelPoolCall) {
    this._call = call;
  }

  get poolId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelPoolCall__Outputs {
  _call: CancelPoolCall;

  constructor(call: CancelPoolCall) {
    this._call = call;
  }
}

export class ExitPoolCall extends EthereumCall {
  get inputs(): ExitPoolCall__Inputs {
    return new ExitPoolCall__Inputs(this);
  }

  get outputs(): ExitPoolCall__Outputs {
    return new ExitPoolCall__Outputs(this);
  }
}

export class ExitPoolCall__Inputs {
  _call: ExitPoolCall;

  constructor(call: ExitPoolCall) {
    this._call = call;
  }

  get poolId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get index(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ExitPoolCall__Outputs {
  _call: ExitPoolCall;

  constructor(call: ExitPoolCall) {
    this._call = call;
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
