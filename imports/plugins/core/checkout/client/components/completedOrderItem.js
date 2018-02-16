import React from "react";
import PropTypes from "prop-types";
import { getPrimaryMediaForOrderItem } from "/lib/api";
import { Components, registerComponent } from "@reactioncommerce/reaction-components";

/**
 * @summary Shows the individual line items for a completed order
 * @param {Object} props - React PropTypes
 * @property {Object} item - An object representing each item on the order
 * @return {Node} React node containing each line item on an order
 */
const CompletedOrderItem = ({ item }) => {
  let image;
  const fileRecord = getPrimaryMediaForOrderItem(item);
  if (fileRecord) {
    image = fileRecord.url({ store: "large" });
  } else {
    image = "/resources/placeholder.gif";
  }
  return (
    <div className="row order-details-line">
      <div className="order-details-media"><img src={image} alt="" /></div>
      <div className="order-details-title">{item.product.title}<p>{item.variants.title}</p></div>
      <div className="order-details-quantity"><span>{item.quantity}</span></div>
      <div className="order-details-price"><Components.Currency amount={item.variants.price} /></div>
    </div>
  );
};

CompletedOrderItem.propTypes = {
  item: PropTypes.object
};

registerComponent("CompletedOrderItem", CompletedOrderItem);

export default CompletedOrderItem;
