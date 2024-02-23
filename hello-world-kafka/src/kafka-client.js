import { Kafka } from "kafkajs";

const CLIENT_ID = "kafka-hello-world";
const BROKERS_URL = ["localhost:29092"];

export const TOPIC_USER = "user-topic";
export const TOPIC_ORDER = "order-topic";
export const TOPIC_DELIVERY = "delivery-topic";

const kafkaClient = new Kafka({ clientId: CLIENT_ID, brokers: BROKERS_URL });

export default kafkaClient;
