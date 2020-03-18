import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  OnAddPlayer,
  OnCancelPool,
  OnCollect,
  OnCreatePool,
  OnRemovePlayer,
  OnWinner
} from "../generated/Contract/Contract"
import { Pool } from "../generated/schema"

export function handleOnAddPlayer(event: OnAddPlayer): void {
  let pool = Pool.load(event.params._poolId.toString());

  let players = pool.players || [];
  let tokens = pool.tokens || [];

  players.push(event.params._owner);
  tokens.push(event.params._tokenId);

  pool.players = players;
  pool.tokens = tokens;

  pool.save();
}

export function handleOnCancelPool(event: OnCancelPool): void {
  let pool = new Pool(event.params._poolId.toString());

  pool.status = 3;

  pool.save();
}

export function handleOnCollect(event: OnCollect): void {
  let pool = new Pool(event.params._poolId.toString());

  pool.hasCollected = true;

  pool.save();
}

export function handleOnCreatePool(event: OnCreatePool): void {
  let pool = new Pool(event.params._poolId.toString());

  pool.hasCollected = false;
  pool.host = event.params._host;
  pool.proto = event.params._proto;
  pool.quality = event.params._quality;
  pool.quorum = event.params._quorum;
  pool.tokenId = event.params._tokenId;
  pool.status = 1;

  pool.save();
}

export function handleOnRemovePlayer(event: OnRemovePlayer): void {
  let pool = Pool.load(event.params._poolId.toString());

  let players = pool.players;
  let tokens = pool.tokens;
  let index = event.params._index.toI32();

  players[index] = players.slice(-1)[0];
  players.pop();

  tokens[index] = tokens.slice(-1)[0];
  tokens.pop();

  pool.players = players;
  pool.tokens = tokens;

  pool.save();
}

export function handleOnWinner(event: OnWinner): void {
  let pool = new Pool(event.params._poolId.toString());

  pool.random = event.params._random;
  pool.status = 2;
  pool.winner = event.params._winner;

  pool.save();
}
