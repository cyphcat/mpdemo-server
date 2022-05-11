import {OrderListing} from "../model/OrderListing";

// todo replace with persistence
const _data: Record<string, OrderListing> = {};

async function findByHash(hash: string): Promise<OrderListing | undefined> {
  return _data[hash];
}

async function findAll(): Promise<OrderListing[]> {
  return Object.values(_data);
}

async function save(e: OrderListing): Promise<OrderListing> {
  _data[e.hash] = e;
  return _data[e.hash];
}

async function deleteByHash(hash: string): Promise<boolean> {
  if (_data[hash]) {
    delete _data[hash];
    return true;
  }
  return false;
}

export const OrderListingRepository = {
  findByHash,
  findAll,
  save,
  deleteByHash,
};
