import kafkaClient, {
  TOPIC_DELIVERY,
  TOPIC_ORDER,
  TOPIC_USER,
} from "./kafka-client.js";

const producer = kafkaClient.producer();

(async () => {
  try {
    await producer.connect();

    await producer.send({
      topic: TOPIC_USER,
      messages: [
        { value: JSON.stringify({ id: 123, name: "John", lastName: "Doe" }) },
      ],
    });

    await producer.send({
      topic: TOPIC_ORDER,
      messages: [
        { value: JSON.stringify({ id: 333, userId: 123, price: 100 }) },
      ],
    });

    await producer.send({
      topic: TOPIC_DELIVERY,
      messages: [
        { value: JSON.stringify({ id: 432, orderId: 333, dest: "Mars" }) },
      ],
    });
  } catch (err) {
    console.error(err);
  } finally {
    await producer.disconnect();
    process.exit(0);
  }
})();
