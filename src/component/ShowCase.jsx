import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
  page: { flexDirection: "column", padding: 70, position: "absolute" },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  content: { fontSize: 14, marginTop: 10, lineHeight: 1.5 },
  header: {
    // position: "absolute",
    // left: 0,
    // right: 0,
    // textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  footer: {
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
});

// Function to generate a random name
const getRandomName = () => {
  const names = [
    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "David Wilson",
    "Emma Davis",
    "Frank Thomas",
    "Grace Lee",
    "Henry White",
    "Isabella Martin",
    "Jack Lewis",
  ];
  return names[Math.floor(Math.random() * names.length)];
};

// PDF Component
const MyDocument = () => {
  const randomName = getRandomName();
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{width: "100%", top: 0, position:"absolute",left: 0}}>
          <Image src="./footer1.jpg" style={{ width: 595, height: 100 }} />
        </View>
        {/* <Text style={styles.title}>Notice Application Letter</Text> */}
        <View style={styles.content}>
          <Text style={{marginTop: 100}}>To,</Text>
          <Text >{randomName}</Text>
          <Text>Subject: Application Subject</Text>
          <Text style={{ marginTop: 5, marginBottom: 5 }}>
            Dear {randomName},
          </Text>

          <Text style={{ marginTop: 10, textAlign: "justify" }}>
            I am writing to bring to your attention the issue of improper
            garbage collection and cleaning in ward number 2. Despite regular
            visits, the garbage is not being properly cleaned, and waste is
            often left scattered around, causing an unhygienic and unpleasant
            environment.
          </Text>

          <Text style={{ marginTop: 10, textAlign: "justify" }}>
            Due to this negligence, the area is becoming dirty, leading to foul
            smells, pest infestations, and health risks for the residents. We
            kindly request you to ensure that the garbage is collected and
            disposed of properly, leaving the area clean and hygienic.
          </Text>

          <Text style={{ marginTop: 10, textAlign: "justify" }}>
            I hope you will take immediate action to improve the cleanliness in
            ward number 2.
          </Text>

          <Text style={{ marginTop: 10 }}>Sincerely,</Text>
          <Text>Martin</Text>
        </View>

        <View style={{width: "100%", alignItems: "center",position:"absolute",bottom: 0,left: 0}}>
          <Image src="./header1.jpg" style={{width: 595, height: 100 }} />
        </View>
      </Page>
    </Document>
  );
};

// Main Component
const ShowCase = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-gray-100 p-4">
      <PDFDownloadLink
        document={<MyDocument />}
        fileName="notice_application.pdf"
      >
        {({ loading }) => (
          <button className="text-black px-4   rounded flex items-center      font-bold">
            {loading ? (
              "Generating PDF..."
            ) : (
              <div>
                <img className="h-10 w-10" src="./download.png" alt="" />
              </div>
            )}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default ShowCase;
