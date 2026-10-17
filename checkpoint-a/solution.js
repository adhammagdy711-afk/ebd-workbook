
import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. Load all orders from the database
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Find cancelled orders from Cairo
export function myOrders(orders) {
  return orders.filter(order =>
    order.city === "Cairo" &&
    order.status === "cancelled"
  );
}

// 3. Find the highest single item price
export function summarize(orders) {
  if (orders.length === 0) {
    return 0;
  }

  return Math.max(...orders.map(order => order.price));
}

// 4. Describe an order or handle a missing ID
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student}: ${order.item} x${order.quantity}`;
  } catch (error) {
    return `Order ${id} not found`;
  }
}

// 5. Convert student and city data into JSON text
export function toJsonLines(orders) {
  const result = orders.map(order => ({
    student: order.student,
    city: order.city
  }));

  return JSON.stringify(result);
}
