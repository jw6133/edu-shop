import { makeVar, ReactiveVar } from "@apollo/client";
import { CartItems } from "./models/CartItem";

export const cartItemsVar : ReactiveVar<CartItems> = makeVar<CartItems>([]);
