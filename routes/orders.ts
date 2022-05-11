import {Router} from "express";
import {OrderListing} from "../model/OrderListing";
import {OrderListingRepository} from "../db/OrderListingRepository";
import {asyncHandler} from "./async";

const router = Router();

router.get("/", asyncHandler(async (req, res) => {
  const listings = await OrderListingRepository.findAll();
  res.status(200).json(listings);
}));

router.get("/:hash", asyncHandler(async (req, res) => {
  const hash = req.params.hash;
  const listing = await OrderListingRepository.findByHash(hash);
  if (!listing) {
    res.status(404).send("Not Found");
  } else {
    res.status(200).json(listing);
  }
}));

router.post("/", asyncHandler(async (req, res) => {
  const listing = req.body as OrderListing;
  const saved = await OrderListingRepository.save(listing);
  res.status(200).json(saved);
}));

router.delete("/:hash", asyncHandler(async (req, res) => {
  const hash = req.params.hash;

  const deleted = await OrderListingRepository.deleteByHash(hash);
  if (deleted) {
    res.status(200).send("OK");
  } else {
    res.status(404).send("Not Found");
  }
}));

export default router;
