CREATE TABLE IF NOT EXISTS OrderListing (
  "hash"            TEXT NOT NULL,
  "data"            TEXT NOT NULL,
  "signature"       TEXT NOT NULL,
  "maker"           TEXT NOT NULL,
  "token"           TEXT NOT NULL,
  "tokenId"         TEXT NOT NULL,
  "price"           TEXT NOT NULL,
  "paymentToken"    TEXT NOT NULL,
  PRIMARY KEY ("hash")
);
