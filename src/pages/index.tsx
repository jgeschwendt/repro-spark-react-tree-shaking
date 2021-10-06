import { SprkText as Text } from "@sparkdesignsystem/spark-react";

export default function Home() {
  return (
    <main>
      <div style={{ minHeight: "50vh" }}>
        <Text>Client</Text>
        <iframe
          src="/report-client.html"
          frameBorder="0"
          style={{ minHeight: 400, width: "100%" }}
        ></iframe>
      </div>

      <div style={{ minHeight: "50vh" }}>
        <Text>Server</Text>
        <iframe
          src="/report-server.html"
          frameBorder="0"
          style={{ minHeight: 400, width: "100%" }}
        ></iframe>
      </div>
    </main>
  );
}
