import { useRouter } from 'next/router';

const OrderConfirmationPage = () => {
  const router = useRouter();
  const { orderId } = router.query; // Assuming you have an order ID in the query parameters

  return (
    <div>
      <h1>Order Confirmation</h1>
      <p>Thank you for your order!</p>
      <p>Your order ID is: {orderId}</p>
      {/* Add additional order details here */}
    </div>
  );
};

export default OrderConfirmationPage;
