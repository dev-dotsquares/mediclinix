import { BookText, HelpCircle, Home, Mail, Users, Stethoscope, HeartPulse, Activity, ShieldCheck, Weight, Droplets, Microscope, LucideIcon, Bone, ShieldPlus, Heart, BrainCircuit, Ear, UserCheck, Syringe, Brain, Leaf, Scale } from 'lucide-react';

export const NAV_LINKS = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: Users },
  { href: '#services', label: 'Services', icon: Stethoscope },
  { href: '#faq', label: 'FAQ', icon: HelpCircle },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export const TEAM_MEMBERS = [
  {
    name: 'Dr. Anurag Srivastava',
    title: 'Jagatpura, Jaipur',
    bio: `MBBS (RNT Medical College, Udaipur ) Reg. 24059
MRCGP, United Kingdom (International Affiliate Reg – 372118
PG Family Medicine (Christian Medical College, Vellore) Reg. D4224
CCEBDM (Diabetes), CCMH (Hypertension), ACUMEN (NHS, UK)
Member American Association of Family Physician ID - 9221350`,
    image: 'https://static.wixstatic.com/media/b2f219_b2e08738a3604597a41654780c98ebb1~mv2.png/v1/fill/w_84,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Doctor%20Anurag%20Photo_edited.png',
    dataAiHint: 'professional man doctor',
  },
];

export interface Service {
  name: string;
  slug: string;
  description: string;
  tagline?: string;
  icon: LucideIcon;
  image: string;
  dataAiHint: string;
  details?: (string | { title: string; content: string })[];
  keyServices?: string[];
  clinicServices?: string[];
}


export const SERVICES: Service[] = [
    {
    name: 'Endocrinology Care',
    slug: 'endocrinology-care',
    description: 'Specialized care for diabetes, thyroid, and metabolic disorders.',
    tagline: 'Diabetes, Thyroid and Metabolic Disorder Services',
    icon: Scale,
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'hormone chart diagram',
    details: [
      'Welcome to the specialized Endocrinology care center led by Dr. Anurag Srivastava, a trusted name in Internal Medicine and Hormonal Health in Jagatpura, Jaipur. With a patient-centric approach and deep expertise in managing diabetes, thyroid conditions, and metabolic disorders, Dr. Srivastava is committed to delivering advanced, evidence-based care tailored to the unique needs of Indian patients.',
      {
        title: 'Why Endocrinology concerns are important to address?',
        content: 'At our clinic, we understand the growing health challenges caused by hormonal imbalances and lifestyle-related conditions. Whether it\'s Type 1 or Type 2 diabetes, hypothyroidism or hyperthyroidism, or complex metabolic syndromes, Dr. Srivastava offers precise diagnosis, personalized treatment plans, and long-term health guidance to help patients lead healthier lives.'
      }
    ],
    keyServices: [
      'Comprehensive Diabetes Management',
      'Thyroid Disorder Diagnosis and Care',
      'Obesity and Metabolic Syndrome Solutions',
      'Hormonal Imbalance Assessments',
      'Preventive Lifestyle and Nutritional Counseling',
    ]
  },
  {
    name: 'Cardiology Care',
    slug: 'cardiology-care',
    description: 'Expert, non-invasive diagnosis and management of heart diseases.',
    tagline: 'Your Heart Deserves Expert Care',
    icon: Heart,
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'heart ekg monitor',
    details: [
      'Welcome to Dr. Anurag Srivastava’s Cardiology Care Clinic in Jagatpura, Jaipur. At the heart of Jaipur, Dr. Anurag Srivastava offers trusted, patient-centric cardiac care that blends clinical expertise with compassion. As one of the region’s leading Internal Medicine Specialist, Dr. Srivastava focuses on non-invasive cardiac care — a modern approach to diagnosing and managing heart diseases without the need for surgical interventions.',
      {
        title: 'Why is Cardiac care important?',
        content: 'In India, where heart disease continues to be a leading health concern due to lifestyle, stress, and genetic predisposition, early detection and preventive cardiology are more critical than ever. Dr. Srivastava is committed to delivering advanced heart care tailored specifically for Indian patients, combining global medical protocols with an understanding of local health trends and challenges.'
      },
    ],
    keyServices: [
      'Hypertension & Cholesterol Management',
      'Cardiac Risk Assessment & Preventive Programs',
      'Lifestyle and Diet Counseling for Heart Health',
      'Post-COVID Cardiac Evaluation',
      'Second Opinions & Treatment Planning'
    ]
  },
  {
    name: 'Rheumatologist Services',
    slug: 'rheumatologist-services',
    description: 'Specialized care for joint, muscle, bone, and autoimmune diseases.',
    tagline: 'Joint Care Services',
    icon: Bone,
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'joint xray',
    details: [
        'Rheumatology is a vital medical specialty focused on diagnosing and treating diseases that affect the joints, muscles, bones, and immune system.',
        {
            title: 'Why Choose a Rheumatologist?',
            content: 'Autoimmune diseases are often complex and require timely diagnosis and lifelong management. Early intervention by a trained rheumatologist can significantly reduce long-term joint damage, disability, and improve quality of life. We treat conditions like Rheumatoid Arthritis, Lupus, Gout, Psoriatic Arthritis, and more.'
        }
    ],
    clinicServices: [
        'Comprehensive Rheumatology Consultations',
        'Joint Injections & Biologic Therapy',
        'Pain Management for Chronic Conditions',
        'Autoimmune Disease Monitoring',
        'Multisystem Disorder Evaluation',
        'Second Opinions & Long-term Care Plans'
    ]
  },
  {
    name: 'Gastrointestinal Care',
    slug: 'gastrointestinal-care',
    description: 'Trusted care for digestive health, from acidity to liver conditions.',
    tagline: 'Gastric, Liver and Digestive Care',
    icon: Leaf, // Using as a placeholder for stomach/intestine
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'digestive system diagram',
    details: [
        'Welcome to the gastroenterology clinic of Dr. Anurag Srivastava, a trusted name in digestive health care in Jagatpura, Jaipur. With a focus on non-invasive and minimally invasive techniques, Dr. Srivastava offers personalized treatment for a wide range of gastrointestinal and liver-related conditions — delivered with clinical precision and compassionate care.',
        {
            title: 'Why is Gastrointestinal health important?',
            content: 'In a country like India, where digestive disorders are on the rise due to changing lifestyles, dietary habits, and stress, timely and accurate evaluation is essential. Dr. Srivastava specializes in diagnosing and managing disorders such as acidity, IBS, fatty liver, hepatitis, constipation, chronic abdominal pain, and more — without unnecessary procedures.'
        }
    ]
  },
  {
    name: 'Migraine Clinic',
    slug: 'migraine-clinic',
    description: 'Compassionate, evidence-based care for chronic migraines.',
    tagline: 'Relief Starts Here: Expert Migraine Care',
    icon: Brain,
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'headache brain scan',
    details: [
        'Welcome to the Migraine Clinic led by Dr. Anurag Srivastava, a trusted and experienced Internal Medicine specialist in Jagatpura, Jaipur, dedicated to providing compassionate and evidence-based care for individuals suffering from frequent and chronic migraines.',
        {
            title: 'Why are Migraine concerns increasing in Jaipur?',
            content: 'Migraines are more than just headaches — they are a complex neurological condition affecting millions across India. Stress, erratic sleep patterns, hormonal changes, poor diet, and rising pollution levels in urban areas like Jaipur are significant contributors to the increasing prevalence of migraines. Left untreated, migraines can severely affect quality of life, work productivity, and mental well-being.'
        }
    ]
  },
  {
    name: 'Mental Health Wellness',
    slug: 'mental-health-wellness',
    description: 'Holistic and compassionate psychiatric care for all age groups.',
    tagline: 'Confidential, Non-judgmental, and Science-Backed Care',
    icon: BrainCircuit,
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'calm mind meditation',
    details: [
        'Welcome to the mental health wellness clinic of Dr. Anurag Srivastava, a trusted name in holistic and compassionate psychiatric care in Jagatpura, Jaipur. With a deep understanding of the unique social, emotional, and cultural challenges faced by Indian patients, Dr. Srivastava offers personalized mental health solutions tailored for all age groups.',
        {
            title: 'Why is Mental Health wellness important?',
            content: 'In today’s fast-paced world, mental well-being is just as important as physical health. With stigma still surrounding mental health in many parts of India, Dr. Anurag Srivastava emphasizes confidential, non-judgmental, and science-backed care to help individuals regain confidence and live a fulfilling life.'
        },
        {
            title: 'Need of a Psychologist',
            content: 'With certain specialized psychotherapies, a psychologist is needed when individuals experience mental health challenges, relationship difficulties, or seek personal growth and self-understanding. They provide support for a wide range of issues, including anxiety, depression, trauma, and behavioral disorders, as well as help with life transitions, stress management, and improving overall well-being.'
        }
    ],
    keyServices: [
      'Anxiety, Depression, OCD, and Stress Management',
      'Bipolar Disorder and Schizophrenia Care',
      'Substance Use and Sleep Disturbance Treatment',
      'Counseling and Evidence-Based Medical Care',
      'In-clinic Psychologist Services for Psychotherapy'
    ]
  },
  {
    name: 'Dermatology - Skin Care',
    slug: 'dermatology-skin-care',
    description: 'Holistic skin care combining medical expertise with advanced treatments.',
    tagline: 'Personalized care for Indian skin types',
    icon: UserCheck,
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'skin care face',
    details: [
        'Welcome to the Dermatology & Skin Care Division led by Dr. Anurag Srivastava, a trusted name in Internal Medicine and skin health in Jagatpura, Jaipur. With extensive experience in treating a wide range of skin disorders, Dr. Srivastava offers a personalized, holistic approach that combines medical expertise with advanced skin care — specifically tailored to the needs of Indian skin types and the climatic challenges of Jaipur.',
        {
            title: 'Why is Skin Care important?',
            content: 'Skin is not just about appearance — it reflects your overall health. Whether you\'re dealing with acne, eczema, psoriasis, fungal infections, pigmentation issues, hair fall, or chronic skin allergies, Dr. Anurag Srivastava provides thorough diagnosis and evidence-based treatment, ensuring both effective care and lasting results.'
        }
    ],
    keyServices: [
        'Acne & Scar Management',
        'Fungal & Bacterial Skin Infections',
        'Hair Loss & Dandruff Treatment',
        'Skin Allergy & Urticaria Care',
        'Psoriasis, Vitiligo, Eczema Management',
        'Anti-aging & Skin Rejuvenation',
        'Treatment for Sun Damage & Pigmentation',
        'Nail Disorders & Rashes',
    ]
  },
  {
    name: 'Ear, Nose & Throat',
    slug: 'ear-nose-throat',
    description: 'Comprehensive care for sinusitis, allergies, and other ENT issues.',
    tagline: 'Specialized ENT Care',
    icon: Ear,
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'ear anatomy diagram',
    details: [
        'Welcome to the official website of Dr. Anurag Srivastava, a trusted name in Internal Medicine and Ear, Nose & Throat (ENT) care in Jagatpura, Jaipur. With a patient-first approach and years of clinical expertise, Dr. Srivastava is dedicated to providing comprehensive, evidence-based care that addresses both common and complex ENT concerns while focusing on holistic internal health.',
        {
            title: 'Why is Ear, Nose & Throat (ENT) health important?',
            content: 'Specially tailored to meet the unique needs of Jaipur and Indian patients, Dr. Srivastava emphasizes the early diagnosis and effective management of ENT conditions such as sinusitis, allergic rhinitis, ear infections, hearing issues, throat discomfort, and voice-related disorders—conditions often aggravated by seasonal changes, pollution, and lifestyle factors prevalent in the region.'
        }
    ]
  },
  {
    name: 'Hypertension Care',
    slug: 'hypertension-care',
    description: 'Expert management of high blood pressure and associated risks.',
    tagline: 'Managing High Blood Pressure for a Healthier Life',
    icon: HeartPulse,
    image: 'https://i.imghippo.com/files/Vnd9639qZY.png',
    dataAiHint: 'blood pressure cuff',
    details: [
        'Welcome to Hypertension Care at Jagatpura, Jaipur’s trusted clinic for high blood pressure management and lifestyle-related heart risk reduction, led by the experienced internal medicine specialist Dr. Anurag Srivastava.',
        'Dr. Srivastava brings over 16 years of expertise in managing lifestyle disorders like hypertension (high BP), diabetes, thyroid, and metabolic syndrome with a unique focus on personalized care, preventive screening, and long-term wellness.',
        'Located in MEDICLINIX Shop-17, Jagatpura, the clinic provides easy access to early diagnosis, medication optimization, diet guidance, and regular monitoring – all designed to keep your blood pressure within a healthy range and prevent complications like stroke, kidney damage, and heart disease.'
    ]
  },
  {
    name: 'Diabetes Care',
    slug: 'diabetes-care',
    description: 'Comprehensive management for all types of diabetes.',
    tagline: 'Personalized Diabetes Management for a Better Life',
    icon: Droplets,
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'glucose meter',
    details: [
        'Welcome to Diabetes Care at Jagatpura, Jaipur’s trusted center for comprehensive diabetes management, led by the renowned physician Dr. Anurag Srivastava. With a focus on personalized care, patient education, and evidence-based treatment, our center is committed to improving the lives of people living with diabetes.',
        'Dr. Anurag Srivastava, an experienced internal medicine specialist, brings years of clinical expertise in managing Type 1, Type 2, and gestational diabetes, as well as diabetic complications such as neuropathy, retinopathy, and kidney issues.',
        'Located in the heart of Jagatpura, Jaipur, our facility combines advanced diagnostic tools, compassionate consultation, and holistic lifestyle guidance — making it a one-stop solution for long-term diabetic care.',
        'Whether you’re newly diagnosed or need help managing long-term complications, Diabetes Care at Jagatpura offers the support, treatment, and hope you need.'
    ]
  }
];


export const TESTIMONIALS = [
    {
        name: 'Monita Rathore',
        quote: 'Dr.Anurag Srivastava is an exceptional physician whose proficiency and dedication stand out. He approaches every patient with genuine care and compassion, ensuring thorough examinations and tailored treatment plans. His selfless commitment to healthcare is evident in the time that he takes to listen and educate, making patients feel valued and understood. Highly recommended for anyone seeking a knowledgeable, proficient, compassionate and a generous doctor. Thank you Dr Anurag for all your help related to my Diabetes Care.🙏🏻'
    },
    {
        name: 'M Bhard',
        quote: 'Excellent , experienced, professional and caring ! Few weeks back, my son was traveling for first time in India and was in remote rural location when he got sick with high fever and flu like symptom...'
    },
    {
        name: 'AMIT ANAND',
        quote: 'Dr. Anurag Srivastava has been incredible with me. Extremely helpful and quick in supporting me with the help I needed. He is so patient, understanding, and very quick with communication. I recommend him. He shows genuine care and...'
    },
    {
        name: 'Ramesh Verma, Jaipur',
        quote: "I had been struggling with severe fungal infection for months, trying every cream out there. Dr. Anurag's diagnosis was spot-on, and within weeks, my skin started clearing up. Highly recommended!"
    },
    {
        name: 'Pooja Sharma, Jagatpura',
        quote: "Acne had shattered my confidence, but thanks to Dr. Srivastava's scientific approach and his dietary advice, my skin is now healthier than ever. The treatment was simple, and the results were amazing!"
    },
    {
        name: 'Nitin Bansal, Pratap Nagar',
        quote: "My eczema was misdiagnosed for years until I met Dr. Anurag Srivastava. His approach was detailed, and he explained everything clearly. My skin is finally under control."
    },
    {
        name: 'Meena Jain, Malviya Nagar',
        quote: "After trying multiple dermatologists, I finally found lasting relief from pigmentation and dark spots through Dr. Srivastava's customized treatment. The results speak for themselves!"
    }
];

export const FAQS = [
  {
    question: 'What are the clinic timings?',
    answer: 'The clinic is open from 6 PM to 8 PM, Monday to Saturday, and from 10 AM to 12 PM on Saturdays and Sundays.'
  },
  {
    question: 'How can I book an appointment?',
    answer: 'You can book an appointment by calling 8505000755. You can also use the "Book an Appointment" button on our website.'
  },
  {
    question: 'What services do you offer?',
    answer: 'We offer a wide range of services including Endocrinology, Cardiology, Rheumatology, Gastroenterology, Migraine treatment, Mental Health, Dermatology, and ENT care. Please see our services section for more details.'
  },
  {
    question: 'Where is the clinic located?',
    answer: 'Our clinic is located at MEDICLINIX, Shop No. 17, Jagatpura, Jaipur.'
  }
];