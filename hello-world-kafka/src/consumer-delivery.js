import kafkaClient, { TOPIC_DELIVERY } from "./kafka-client.js";

const consumer = kafkaClient.consumer({ groupId: "delivery-group" });

(async () => {
  await consumer.connect();
  await consumer.subscribe({
    topics: [TOPIC_DELIVERY],
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      const msgData = JSON.parse(message.value);

      // Logic goes here

      console.log(`\nTopic: ${topic}\nMessage: ${JSON.stringify(msgData)}`);
    },
  });
})();
