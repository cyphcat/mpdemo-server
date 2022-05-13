import {OrderListing} from "../model/OrderListing";
import {pool} from "./pool";

async function findByHash(hash: string): Promise<OrderListing | undefined> {
  const res = await pool.query("SELECT * FROM OrderListing WHERE hash = $1", [hash]);
  return res.rowCount ? res.rows[0] : undefined;
}

async function findAll(): Promise<OrderListing[]> {
  const res = await pool.query("SELECT * FROM OrderListing LIMIT 100");
  return res.rows;
}

async function save(e: OrderListing): Promise<OrderListing | undefined> {
  const res = await pool.query(`
    INSERT INTO OrderListing ("hash","data","signature","maker","token","tokenId","price","paymentToken")
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    ON CONFLICT DO NOTHING
    RETURNING *
  `, [e.hash, e.data, e.signature, e.maker, e.token, e.tokenId, e.price, e.paymentToken]);
  return res.rowCount ? res.rows[0] : undefined;
}

async function deleteByHash(hash: string): Promise<boolean> {
  const res = await pool.query("DELETE FROM OrderListing WHERE hash = $1", [hash]);
  return res.rowCount > 0;
}

export const OrderListingRepository = {
  findByHash,
  findAll,
  save,
  deleteByHash,
};
