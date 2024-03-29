import nc from "next-connect";
import db from "../../../utils/db";
import { onError } from "../../../utils/error";
import Order from "../../../models/Order";
import { isAuth } from "../../../utils/auth";

const handler = nc({
  onError,
});

handler.use(isAuth);

handler.get(async (req, res) => {
  await db.connect();
 const orders = await Order.find({user: req.user._id})

  res.status(201).send(orders);
});

export default handler;
