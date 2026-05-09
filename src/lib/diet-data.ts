export type Lang = "en" | "hi";

export const TIMINGS = [
  { en: "5:00 am", hi: "सुबह 5:00" },
  { en: "6:00 am", hi: "सुबह 6:00" },
  { en: "8:30–9:00 am", hi: "सुबह 8:30–9:00" },
  { en: "11:30 am–12:00 pm", hi: "सुबह 11:30–दोपहर 12:00" },
  { en: "2:30 pm", hi: "दोपहर 2:30" },
  { en: "5:30 pm", hi: "शाम 5:30" },
  { en: "8:00 pm", hi: "रात 8:00" },
  { en: "9:15 pm", hi: "रात 9:15" },
];

// Index 0 (5:00 am) is the global wake-up entry, same every day.
export const WAKE_UP = {
  en: "Wake up, TB medicines with water if prescribed fasting",
  hi: "उठें, यदि खाली पेट लेने को कहा गया हो तो पानी के साथ TB की दवाइयाँ लें",
};

type Meal = { en: string; hi: string };

// Each day has 7 meals, mapped to TIMINGS index 1..7
export const DAYS: { dayEn: string; dayHi: string; meals: Meal[] }[] = [
  {
    dayEn: "Monday",
    dayHi: "सोमवार",
    meals: [
      { en: "Vegetable poha with peanuts + plain curd", hi: "सब्ज़ी वाला पोहा मूँगफली के साथ + सादा दही" },
      { en: "Papaya + sattu drink", hi: "पपीता + सत्तू का शरबत" },
      { en: "Rice + rajma + lauki sabzi + little curd", hi: "चावल + राजमा + लौकी की सब्ज़ी + थोड़ा दही" },
      { en: "Buttermilk (chaas) + 1 besan chilla", hi: "छाछ + 1 बेसन चीला" },
      { en: "Roasted makhana or roasted peanuts + chana", hi: "भुने मखाने या भुनी मूँगफली + चना" },
      { en: "Moong-masoor khichdi with 1 tsp ghee + paneer bhurji", hi: "मूँग-मसूर खिचड़ी 1 चम्मच घी के साथ + पनीर भुर्जी" },
      { en: "Milk", hi: "दूध" },
    ],
  },
  {
    dayEn: "Tuesday",
    dayHi: "मंगलवार",
    meals: [
      { en: "2 besan-paneer chilla + curd", hi: "2 बेसन-पनीर चीला + दही" },
      { en: "Watermelon / muskmelon", hi: "तरबूज़ / खरबूज़ा" },
      { en: "Kadhi-chawal + soft cooked pumpkin or lauki", hi: "कढ़ी-चावल + अच्छे से पका हुआ कद्दू या लौकी" },
      { en: "Curd + soaked raisins", hi: "दही + भीगी हुई किशमिश" },
      { en: "Sattu milk drink", hi: "सत्तू वाला दूध" },
      { en: "2 soft phulka + chana dal + spinach/lauki sabzi", hi: "2 नरम फुल्के + चना दाल + पालक/लौकी की सब्ज़ी" },
      { en: "Milk", hi: "दूध" },
    ],
  },
  {
    dayEn: "Wednesday",
    dayHi: "बुधवार",
    meals: [
      { en: "Milk dalia with raisins + chopped dates + peanut powder", hi: "दूध वाला दलिया किशमिश + कटे हुए खजूर + मूँगफली पाउडर के साथ" },
      { en: "Chaas + 1 fruit", hi: "छाछ + 1 फल" },
      { en: "Peas-paneer pulao + raita", hi: "मटर-पनीर पुलाव + रायता" },
      { en: "Papaya bowl", hi: "पपीते का बाउल" },
      { en: "1 small handful peanuts + 1 small banana only if it does not worsen constipation", hi: "1 छोटी मुट्ठी मूँगफली + 1 छोटा केला (केवल तब जब कब्ज़ न बढ़ाए)" },
      { en: "Rice + soft chole + pumpkin sabzi", hi: "चावल + नरम छोले + कद्दू की सब्ज़ी" },
      { en: "Milk", hi: "दूध" },
    ],
  },
  {
    dayEn: "Thursday",
    dayHi: "गुरुवार",
    meals: [
      { en: "3 idli + sambar", hi: "3 इडली + सांभर" },
      { en: "Papaya or pear/apple if available", hi: "पपीता या नाशपाती/सेब (यदि उपलब्ध हो)" },
      { en: "Rice + moong dal tadka + mixed veg + 1 tsp ghee", hi: "चावल + मूँग दाल तड़का + मिक्स सब्ज़ी + 1 चम्मच घी" },
      { en: "Lassi / thin curd drink", hi: "लस्सी / पतली दही" },
      { en: "Roasted chana + 2 dates", hi: "भुना चना + 2 खजूर" },
      { en: "Vegetable daliya khichdi + paneer cubes / paneer bhurji", hi: "सब्ज़ी वाली दलिया खिचड़ी + पनीर के टुकड़े / पनीर भुर्जी" },
      { en: "Milk", hi: "दूध" },
    ],
  },
  {
    dayEn: "Friday",
    dayHi: "शुक्रवार",
    meals: [
      { en: "2 small paneer paratha + curd", hi: "2 छोटे पनीर पराठे + दही" },
      { en: "Watermelon / muskmelon", hi: "तरबूज़ / खरबूज़ा" },
      { en: "Rice + mixed dal + soy or paneer curry", hi: "चावल + मिक्स दाल + सोया या पनीर की सब्ज़ी" },
      { en: "Buttermilk + papaya", hi: "छाछ + पपीता" },
      { en: "Homemade milk shake: milk + 1 date + peanut powder", hi: "घर का मिल्क शेक: दूध + 1 खजूर + मूँगफली पाउडर" },
      { en: "Kadhi + rice + soft cooked veg", hi: "कढ़ी + चावल + अच्छे से पकी सब्ज़ी" },
      { en: "Milk", hi: "दूध" },
    ],
  },
  {
    dayEn: "Saturday",
    dayHi: "शनिवार",
    meals: [
      { en: "Suji upma with peanuts and vegetables + curd", hi: "सूजी का उपमा मूँगफली और सब्ज़ियों के साथ + दही" },
      { en: "1 small mango or ½ large mango", hi: "1 छोटा आम या ½ बड़ा आम" },
      { en: "Rice + cholar dal / arhar dal + beet/lauki sabzi", hi: "चावल + चोलार दाल / अरहर दाल + चुकंदर/लौकी की सब्ज़ी" },
      { en: "Chaas + 1 besan chilla", hi: "छाछ + 1 बेसन चीला" },
      { en: "Roasted makhana", hi: "भुने मखाने" },
      { en: "Rice + masoor dal + paneer bhurji", hi: "चावल + मसूर दाल + पनीर भुर्जी" },
      { en: "Milk", hi: "दूध" },
    ],
  },
  {
    dayEn: "Sunday",
    dayHi: "रविवार",
    meals: [
      { en: "2 moong dal chilla + curd", hi: "2 मूँग दाल चीला + दही" },
      { en: "Muskmelon / watermelon", hi: "खरबूज़ा / तरबूज़" },
      { en: "Vegetable pulao + plain curd + small bowl chana/paneer gravy", hi: "सब्ज़ी वाला पुलाव + सादा दही + छोटा बाउल चना/पनीर की ग्रेवी" },
      { en: "Papaya + soaked raisins", hi: "पपीता + भीगी हुई किशमिश" },
      { en: "Sattu drink", hi: "सत्तू का शरबत" },
      { en: "Soft rice + moong dal + 1 tsp ghee + cooked vegetables", hi: "नरम चावल + मूँग दाल + 1 चम्मच घी + पकी हुई सब्ज़ियाँ" },
      { en: "Milk", hi: "दूध" },
    ],
  },
];

export const T = {
  title: { en: "Angira Diet Routine", hi: "अंगीरा डाइट रूटीन" },
  subtitle: {
    en: "A 7-day repeating diet routine, beautifully laid out for every hour of your day.",
    hi: "7 दिन का दोहराव वाला डाइट रूटीन, दिन के हर समय के लिए सुंदर ढंग से सजाया गया।",
  },
  today: { en: "Today", hi: "आज" },
  day: { en: "Day", hi: "दिन" },
  tapToView: { en: "Tap to view today's plan", hi: "आज की योजना देखने के लिए टैप करें" },
  weekPlan: { en: "Weekly Plan", hi: "साप्ताहिक योजना" },
  footer: {
    en: "Stay consistent. Stay nourished.",
    hi: "नियमित रहें। पोषित रहें।",
  },
};
