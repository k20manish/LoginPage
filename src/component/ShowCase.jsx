import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink,Image } from "@react-pdf/renderer";
import Ku from "../block/Ku";

// Define styles
const styles = StyleSheet.create({
  page: { flexDirection: "column", padding: 20, position: "relative" },
  title: { fontSize: 20, marginBottom: 10, textAlign: "center", fontWeight: "bold" },
  content: { fontSize: 14, marginTop: 10, lineHeight: 1.5 },
  header: { position: "absolute", top: 10, left: 0, right: 0, textAlign: "center", fontSize: 12, fontWeight: "bold" },
  footer: { position: "absolute", bottom: 10, left: 0, right: 0, textAlign: "center", fontSize: 12, fontWeight: "bold" },
});

// Function to generate a random name
const getRandomName = () => {
  const names = ["Alice Johnson", "Bob Smith", "Charlie Brown", "David Wilson", "Emma Davis", "Frank Thomas", "Grace Lee", "Henry White", "Isabella Martin", "Jack Lewis"];
  return names[Math.floor(Math.random() * names.length)];
};

// PDF Component
const MyDocument = () => {
  const randomName = getRandomName();
  return (
    <Document>
      
      <Page size="A4" style={styles.page}>
       
        <Text style={styles.header}> </Text>
        <Text style={styles.title}>Notice Application Letter</Text>
        <View style={styles.content}>
        {/* <Image src={require("./heading.png")} style={styles.image} /> */}
          <Text>To,</Text>
          <Text>{randomName}</Text>
          <Text style={{ marginBottom: 10 }}>Subject: Application Subject</Text>
          <Text>Dear {randomName},</Text>
          <Text style={{ marginTop: 10 }}>  I am writing to bring to your attention the issue of improper
            garbage collection and cleaning in ward number 2. Despite regular visits, the garbage is not being properly cleaned, and waste is often left scattered around, causing an unhygienic and unpleasant environment. Due to this negligence, the
            area is becoming dirty, leading to foul smells, pest infestations,
            and health risks for the residents. We kindly request you to ensure
            that the garbage is collected and disposed of properly, leaving the
            area clean and hygienic. I hope you will take immediate action to
            improve the cleanliness in ward number 2. </Text>
          <Text style={{ marginTop: 10 }}>Sincerely,</Text>
          <Text>Martin</Text>
        </View>

        <Ku/>

        <Text style={styles.footer}>© 2025 Company Name. All Rights Reserved.</Text>
      </Page>
    </Document>
  );
};

// Main Component
const ShowCase = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-gray-100 p-4">
      <PDFDownloadLink document={<MyDocument />} fileName="notice_application.pdf">
        {({ loading }) => (
          <button className="text-black px-4   rounded flex items-center      font-bold">
            {loading ? "Generating PDF..." : <div ><img className="h-10 w-10" src="./download.png" alt="" /></div>}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default ShowCase;
