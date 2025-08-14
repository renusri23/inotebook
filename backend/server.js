// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const patients = [
  { id: 1, name: "Muthappa", lastVisit: "2025-07-18", comments: "Recovering well from knee surgery. Needs follow-up in 3 weeks." },
  { id: 2, name: "Muthanna", lastVisit: "2025-07-25", comments: "Reported mild headaches. MRI scan recommended." },
  { id: 3, name: "Neha", lastVisit: "2025-08-05", comments: "Seasonal allergies under control." },
  { id: 4, name: "Neharika", lastVisit: "2025-07-30", comments: "Underwent physiotherapy for shoulder pain." },
  { id: 5, name: "Swasti", lastVisit: "2025-06-22", comments: "Blood test results pending. Advised rest." },
  { id: 6, name: "swetha", lastVisit: "2025-08-01", comments: "Stable after minor chest pain episode." },
  { id: 7, name: "Muthu Kumar", lastVisit: "2025-07-15", comments: "Diabetes check-up. Blood sugar improved." },
  { id: 8, name: "Mutthu", lastVisit: "2025-07-28", comments: "Recovering from ankle sprain." },
  { id: 9, name: "Nehal", lastVisit: "2025-07-19", comments: "High BP, medication adjusted." },
  { id: 10, name: "Niharika", lastVisit: "2025-08-07", comments: "Post-pregnancy recovery progressing well." },
{ id: 11, name: "Rajesh", lastVisit: "2025-07-20", comments: "Follow-up for chronic back pain. Showing improvement." },
  { id: 12, name: "Rajeev", lastVisit: "2025-08-02", comments: "Regular heart check-up. ECG normal." },
  { id: 13, name: "Rajiv", lastVisit: "2025-08-08", comments: "Recovering from mild dehydration." },
  { id: 14, name: "Raghav", lastVisit: "2025-07-29", comments: "Dental cleaning completed." },
  { id: 15, name: "Raghava", lastVisit: "2025-07-27", comments: "Complained of frequent migraines." },
  { id: 16, name: "Ananya Devi", lastVisit: "2025-08-04", comments: "Routine health check-up. All vitals normal." },
  { id: 17, name: "Anandita", lastVisit: "2025-07-23", comments: "Recovering from viral fever." },
  { id: 18, name: "Pooja", lastVisit: "2025-07-21", comments: "Orthopedic consultation for wrist pain." },
  { id: 19, name: "Poojah", lastVisit: "2025-07-22", comments: "Eye check-up. Prescribed new glasses." },
  { id: 20, name: "Vishal", lastVisit: "2025-07-31", comments: "Weight management program started." },
  { id: 21, name: "Vishaal", lastVisit: "2025-08-06", comments: "Follow-up for asthma treatment." },
  { id: 22, name: "Vishwanath", lastVisit: "2025-07-17", comments: "Recovering from mild COVID infection." },
  { id: 23, name: "Harish", lastVisit: "2025-08-03", comments: "Skin allergy treatment showing results." },
  { id: 24, name: "Harshini", lastVisit: "2025-07-24", comments: "Post-surgery review. Healing well." },
  { id: 25, name: "Meenakshi", lastVisit: "2025-07-26", comments: "Thyroid function test within normal range." },
  { id: 26, name: "Aarav", lastVisit: "2025-08-02", comments: "Recovering from dengue fever." },
  { id: 27, name: "Aaravendra", lastVisit: "2025-08-03", comments: "Follow-up for chronic sinusitis." },
  { id: 28, name: "Zoya Fatima", lastVisit: "2025-07-25", comments: "Post-appendectomy recovery." },
  { id: 29, name: "Zoha", lastVisit: "2025-07-18", comments: "Allergy test results awaited." },
  { id: 30, name: "Hariharan", lastVisit: "2025-08-01", comments: "Blood pressure under observation." },
  { id: 31, name: "Hari-Hara", lastVisit: "2025-08-04", comments: "Liver function monitoring ongoing." },
  { id: 32, name: "Lakshmi Narayan", lastVisit: "2025-07-19", comments: "Cardiac health check-up completed." },
  { id: 33, name: "Laxmi", lastVisit: "2025-07-22", comments: "Recovering from gallbladder surgery." },
  { id: 34, name: "Md. Aarif", lastVisit: "2025-07-27", comments: "Diabetic foot treatment ongoing." },
  { id: 35, name: "Arifullah", lastVisit: "2025-07-30", comments: "Post-stroke physiotherapy sessions." },
  { id: 36, name: "Sharada", lastVisit: "2025-08-06", comments: "Severe anemia treatment ongoing." },
  { id: 37, name: "Sharadha", lastVisit: "2025-08-07", comments: "Eye cataract surgery scheduled." },
  { id: 38, name: "Noor Jahan", lastVisit: "2025-08-05", comments: "Joint pain under Ayurvedic treatment." },
  { id: 39, name: "Noorjehan", lastVisit: "2025-08-08", comments: "Vision improvement therapy ongoing." },
  { id: 40, name: "Om Prakash", lastVisit: "2025-07-26", comments: "Regular diabetes monitoring." }
];

// API to get all patients
app.get('/patients', (req, res) => {
  res.json(patients);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
