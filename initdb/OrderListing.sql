CREATE TABLE OrderListing (
  "hash"            TEXT NOT NULL,
  "data"            TEXT NOT NULL,
  "signature"       TEXT NOT NULL,
  "maker"           TEXT NOT NULL,
  "token"           TEXT NOT NULL,
  "tokenId"         TEXT NOT NULL,
  "price"           TEXT NOT NULL,
  "paymentToken"    TEXT,
  PRIMARY KEY ("hash")
);
