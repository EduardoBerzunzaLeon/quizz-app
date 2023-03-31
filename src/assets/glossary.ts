 
 interface Glossary {
    english: string;
    spanish: string;
    definition: string;
 }
 

 export interface Answer {
    text: string,
    isCorrect: boolean
}

export interface Question {
    question: string,
    answers: Answer[]
}

const getRandomInt = (max: number, notEqual?: number[]): number => { 

    if(!notEqual) return Math.floor(Math.random() * max);

    const possibleNumber = Math.floor(Math.random() * max);

    if(!notEqual.includes(possibleNumber)) return possibleNumber;
    
    return getRandomInt(max, notEqual);
};

export const generateQuestions = (glos: Glossary[], max: number, totalQuestions: number, questions: Question[]): Question[] => {

    const randomInt: number = getRandomInt(max);

    const correctAnswer = glos[randomInt];

    glos.splice(randomInt, 1);

    const answers: Answer[] = [ {
        text: correctAnswer.spanish,
        isCorrect: true
    }];

    const positions: number[] = [];

    for (let index = 0; index < 3; index++) {
        const newRandomInt = getRandomInt(max - (index + 1), positions);
        const incorrectAnswer = glos[newRandomInt];
        positions.push(newRandomInt);
        answers.push({
            text: incorrectAnswer.spanish,
            isCorrect: false
        });
    }

    const question: Question = {
        question: correctAnswer.english,
        answers
    }

    questions.push(question);

    if(totalQuestions === questions.length) return questions;
    console.log(questions.length);

    return generateQuestions(glos, max - 1, totalQuestions, questions);

}
 
 export const glossary: Glossary[] = [
        {
            english: "Condom",
            spanish: "Preservativo, condon",
            definition: "Thin rubber sheath worn on a man's penis during sexual intercourse as a contraceptive or as protection against infection."
        },
        {
            english: "Oculist",
            spanish: "Oculista",
            definition: "Doctor who examines and treats people’s eyes."
        },
        {
            english: "Pinched Nerve",
            spanish: "Nervio Oprimido",
            definition: "Occurs when too much pressure is applied to a nerve by surrounding tissues, such as bones, cartilage, muscles or tendons."
        },
        {
            english: "Strain",
            spanish: "Distencion Muscular",
            definition: "Injury caused by working the muscles too hard."
        },
        {
            english: "Tenderness",
            spanish: "Sensibilidad",
            definition: "Sensitivity to pain."
        },
        {
            english: "Over the Counter Medication",
            spanish: "Medicamento de venta libre",
            definition: "Medicines sold directly to a consumer without a prescription from a healthcare professional."
        },
        {
            english: "Chemotherapy",
            spanish: "Quimoterapia",
            definition: "Treatment of disease by the use of chemical substances, especially the treatment of cancer and other drugs."
        },
        {
            english: "Urinalysis",
            spanish: "Analisis de orina",
            definition: "Analysis of urine by physical, chemical, and microscopical means to test for the presence of disease, drugs, etc."
        },
        {
            english: "Stent",
            spanish: "Endoprotesis",
            definition: "A tube designed to be inserted into a vessel or passageway to keep it open."
        },
        {
            english: "Sole of the foot",
            spanish: "Planta del Pie",
            definition: "The undersurface of a person's foot."
        },
        {
            english: "Mumps",
            spanish: "Paperas",
            definition: "Contagious and infectious viral disease causing swelling of the parotid salivary glands in the face, and a risk of sterility in adult males."
        },
        {
            english: "Food poisoning",
            spanish: "Envenamiento por comestibles",
            definition: "Illness caused by bacteria or other toxins in food, typically with vomiting and diarrhea."
        },
        {
            english: "Eyelid",
            spanish: "Parpado",
            definition: "Each of the upper and lower folds of skin that cover the eye when closed."
        },
        {
            english: "Gums",
            spanish: "Encias",
            definition: "The firm area of flesh around the roots of the teeth in the upper or lower jaw."
        },
        {
            english: "Pap smear",
            spanish: "Papanicolau",
            definition: "A test carried out on a sample of cells from the cervix to check for abnormalities that may be indicative of cervical cancer."
        },
        {
            english: "Muscle Tear",
            spanish: "Desgarre Muscular",
            definition: "Stretching or tearing of muscle or tendon."
        },
        {
            english: "Stool Sample",
            spanish: "Muestra de Heces Fecales",
            definition: "Collection and analysis of fecal matter to diagnose the presence or absence of a medical condition."
        },
        {
            english: "Blindness",
            spanish: "Ceguera",
            definition: "The condition of being unable to see."
        },
        {
            english: "Thigh",
            spanish: "Muslo",
            definition: "The part of the human leg between the hip and the knee."
        },
        {
            english: "Cast",
            spanish: "Yeso",
            definition: "Protective shell of fiberglass, plastic, or plaster, and bandage that is molded to protect broken or fractured limbs as it heals."
        },
        {
            english: "Gallbladder",
            spanish: "Vesicula",
            definition: "Membranous muscular sac in which bile from the liver is stored."
        },
        {
            english: "Warts",
            spanish: "Verrugas",
            definition: "Small, hard lump on the skin caused by a virus."
        },
        {
            english: "Varicose Veins",
            spanish: "Venas Varicosas, Varices",
            definition: "Condition in which the superficial veins, esp of the legs, become tortuous, knotted, and swollen."
        },
        {
            english: "Booster Shot",
            spanish: "Vacuna de Refuerzo",
            definition: "Extra amount of a substance (called a vaccine) that is injected with a needle into a person or animal to help protect against a particular disease."
        },
        {
            english: "Uterus",
            spanish: "Utero",
            definition: "Organ in the body of a woman or other female mammal in which a baby develops before birth."
        },
        {
            english: "Hydrocortisone Ointment",
            spanish: "Unguento de Hidrocortizona",
            definition: "Used to treat inflammation of the skin caused by a number of conditions such as allergic reactions."
        },
        {
            english: "Antihistaminic Ointment",
            spanish: "Unguento Antihistaminico",
            definition: "May be used to relieve pain and itching due to insect bites, minor cuts and burns, and to resolve rashes due to an allergy."
        },
        {
            english: "Ointment",
            spanish: "Unguento",
            definition: "Thick substance, usually containing medicine, that is put on the skin where it is sore or where there is an injury, in order to cure it."
        },
        {
            english: "Canker Sores",
            spanish: "Ulceras Aftosas, Postemillas",
            definition: "Small painful ulcer especially of the mouth, usually a result of food or irritation."
        },
        {
            english: "Triglycerides",
            spanish: "Trigliceridos",
            definition: "Fats in your blood that the body uses for energy."
        },
        {
            english: "Bleeding Disorder",
            spanish: "Trastorno Hemorragico",
            definition: "Condition that affects the way the blood clots."
        },
        {
            english: "Disorder",
            spanish: "Trastorno",
            definition: "Disturbance in physical or mental health or functions."
        },
        {
            english: "Sprain",
            spanish: "Torcedura, Esguince",
            definition: "Sudden or violent twist or wrench of a joint with stretching or tearing of ligaments."
        },
        {
            english: "CT scan ( Computerized Tomography)",
            spanish: "Tomografia computarizada",
            definition: "This type of sophisticated X-ray device obtains detailed images of internal organs."
        },
        {
            english: "CAT Scan (Computerized Axial Tomography)",
            spanish: "Tomografia Axial Computarizada",
            definition: "Medical test that involves using X-rays to create a three-dimensional image of the inside of the body."
        },
        {
            english: "PET Scan ( Positron Emission Tomography)",
            spanish: "Tomografia por Emision de Positrones",
            definition: "Imaging test that allows your doctor to check for diseases in your body. The scan uses a special dye that has radioactive tracers. These tracers are either swallowed, inhaled, or injected into a vein in your arm depending on what part of the body is being examined."
        },
        {
            english: "Test Strips",
            spanish: "Tiras Reactivas",
            definition: "Strip of material containing chemicals that react to certain substances. Test strips are used to detect pathological changes, especially in urine."
        },
        {
            english: "Child Therapist",
            spanish: "Terapeuta Infantil",
            definition: "Person who helps people deal with mental or emotional problems by talking about those problems."
        },
        {
            english: "House Chores",
            spanish: "Tareas Domesticas",
            definition: "Dusting, sweeping, vacuuming, washing dishes, feeding pets."
        },
        {
            english: "Tampons",
            spanish: "Tampones",
            definition: "Mass of absorbent material, primarily used as a feminine hygiene product."
        },
        {
            english: "Sudden Infant Death Syndrome",
            spanish: "Syndrome de Muerte Subita Infantil",
            definition: "The death of a seemingly healthy baby in its sleep, due to an apparent spontaneous cessation of breathing."
        },
        {
            english: "Drainage",
            spanish: "Supuracion",
            definition: "Pus draining from an infected area."
        },
        {
            english: "Omega Supplements",
            spanish: "Suplementos de Omega",
            definition: "Class of essential fatty acids found in fish oils, especially from salmon and other cold-water fish, which acts to lower the levels of cholesterol and LDL (low-density lipoproteins) in the blood."
        },
        {
            english: "Outgrow",
            spanish: "Superar",
            definition: "To lose interest in an idea or activity as you get older."
        },
        {
            english: "Supplies",
            spanish: "Suministros",
            definition: "Equipment and other essential things that people need, especially when these are provided in large quantities."
        },
        {
            english: "Sip",
            spanish: "Sorbo",
            definition: "Drink (something) by taking small mouthfuls."
        },
        {
            english: "Heart Murmur",
            spanish: "Soplo Cardiaco, Soplo en el corazon",
            definition: "Sounds during your heartbeat cycle, such as whooshing or swishing made by turbulent blood in or near your heart."
        },
        {
            english: "Sonogram",
            spanish: "Sonograma",
            definition: "Graph representing a sound, showing the distribution of energy at different frequencies."
        },
        {
            english: "Vital Signs",
            spanish: "Signos Vitales",
            definition: "Signs that show the condition of someone's health, such as body temperature, rate of breathing, and heartbeat."
        },
        {
            english: "Foul Smelling Discharge",
            spanish: "Secrecion de Mal Olor",
            definition: "Fluids that can be yellow or green, chunky in consistency, or have a foul odor."
        },
        {
            english: "Rash",
            spanish: "Sarpullido, Erupcion",
            definition: "Area of reddening of a person's skin, sometimes with raised spots, appearing especially because of allergy or illness."
        },
        {
            english: "Measles",
            spanish: "Sarampion",
            definition: "Virus is highly contagious virus and spreads through the air through coughing and sneezing. Starts with fever, runny nose, cough, red eyes, and sore throat."
        },
        {
            english: "Hives, Welts",
            spanish: "Ronchas",
            definition: "Allergic disorder marked by raised red patches of skin usually by intense itching and caused by contact with a specific precipitating factor (as a food, drug, or inhalant) either externally or internally called also Urticaria."
        },
        {
            english: "Refill",
            spanish: "Surtir",
            definition: "Fill (a container) again."
        },
        {
            english: "Cold",
            spanish: "Resfrio",
            definition: "Common illness that affects the nose, throat, and eyes and that usually causes coughing, sneezing, etc."
        },
        {
            english: "Referral",
            spanish: "Remission",
            definition: "The process of directing or redirecting (as a medical case or a patient) to an appropriate specialist or agency for definitive treatment."
        },
        {
            english: "Heel Prick Test",
            spanish: "Prueba de Tamizaje",
            definition: "Blood collection procedure done on newborns. It consists of making a pinprick puncture in one heel of the newborn to collect their blood."
        },
        {
            english: "Blood Test",
            spanish: "Prueba de Sangre",
            definition: "Scientific examination of a sample of blood, typically for the diagnosis of illness or for the detection and measurement of drugs or other substances."
        },
        {
            english: "Liver Function Test",
            spanish: "Prueba de function Hepatica",
            definition: "Used to help diagnose and monitor liver disease or damage. The tests measure the levels of certain enzymes and proteins in your blood."
        },
        {
            english: "Stress Test",
            spanish: "Prueba de Esfuerzo",
            definition: "Test of cardiovascular capacity made by monitoring the heart rate during a period of increasingly strenuous exercise."
        },
        {
            english: "Health Care Provider",
            spanish: "Proveedor de atención medica",
            definition: "Doctor of medicine or osteopathy, podiatrist, dentist, chiropractor, clinical psychologist, optometrist, nurse practitioner, nurse-midwife, or a clinical social worker who is authorized to practice by the State."
        },
        {
            english: "Mouth Guard",
            spanish: "Protector Bucal",
            definition: "Plastic shield held in the mouth by an athlete to protect the teeth and gums."
        },
        {
            english: "Prognosis",
            spanish: "Pronostico",
            definition: "Forecast of the likely outcome of a situation."
        },
        {
            english: "Outpatient Procedure",
            spanish: "Procedimiento Ambulatorio",
            definition: "Allows a person to return home on the same day that a surgical procedure is performed."
        },
        {
            english: "Blood Pressure",
            spanish: "Presion Arterial",
            definition: "The pressure of the blood in the circulatory system."
        },
        {
            english: "Foreskin",
            spanish: "Prepucio",
            definition: "The retractable roll of skin covering the end of the penis."
        },
        {
            english: "Latch",
            spanish: "Prender",
            definition: "How a baby attaches to his mother's breast to breastfeed."
        },
        {
            english: "Bed Ridden",
            spanish: "Postrado en cama",
            definition: "Confined to bed by sickness or old age."
        },
        {
            english: "Trim",
            spanish: "Podar",
            definition: "Make (something) neat or of the required size or form by cutting away irregular or unwanted parts."
        },
        {
            english: "Lice",
            spanish: "Piojos",
            definition: "Bugs that live in human hair."
        },
        {
            english: "Itch",
            spanish: "Picazón",
            definition: "Uncomfortable sensation on the skin that causes a desire to scratch."
        },
        {
            english: "Cracked Nipples",
            spanish: "Pezones Agrietados",
            definition: "Condition that can occur in breastfeeding."
        },
        {
            english: "Menstrual Period",
            spanish: "Periodo Menstrual",
            definition: "Can result in soreness, dryness or irritation to, or bleeding of, one or both nipples during breastfeeding."
        },
        {
            english: "Bulb Syringe",
            spanish: "Perilla de Succion, Aspirador Nasal",
            definition: "Syringe with a bulb on one end; compression of the bulb creates a vacuum for gentle suction of smallamounts of bodily drainage, such as oral and nasal secre tions. It is also used for intraoperative irrigation."
        },
        {
            english: "Penicillin",
            spanish: "Penicilina",
            definition: "Antibiotic or group of antibiotics produced naturally by certain blue molds, and now usually prepared synthetically."
        },
        {
            english: "Vaginal Delivery",
            spanish: "Parto Normal, Parto Natural",
            definition: "Occurs when a pregnant female goes into labor without the use of drugs or techniques to induce labor, and delivers her baby in the normal manner, without forceps, vacuum extraction, or a cesarean section."
        },
        {
            english: "Midwife",
            spanish: "Partera",
            definition: "Person, usually a woman, who is trained to help women when they are giving birth, after birth and/or during pregnancy."
        },
        {
            english: "Soiled Diaper",
            spanish: "Pañal Sucio",
            definition: "For a baby to excrete waste into its diaper."
        },
        {
            english: "Ill fitted diaper",
            spanish: "Pañal que no queda bien",
            definition: "Loose-fitting diaper."
        },
        {
            english: "Palate",
            spanish: "Paladar",
            definition: "The roof of the mouth, separating the cavities of the nose and the mouth in vertebrates."
        },
        {
            english: "Outpatient",
            spanish: "Paciente Ambulatorio",
            definition: "Patient who is not hospitalized overnight but who visits a hospital, clinic, or associated facility for diagnosis or treatment."
        },
        {
            english: "Stye",
            spanish: "Orzuelo",
            definition: "Bump that forms on or in the lower or upper eyelid as the result of a blocked gland."
        },
        {
            english: "Surrounding Organs",
            spanish: "Organos Adyecentes, Organos Circumdantes",
            definition: "Organs that are next to a certain part of the body."
        },
        {
            english: "Navel",
            spanish: "Ombligo",
            definition: "Hollowed or sometimes raised area on the abdomen at the attachment site of the umbilical cord."
        },
        {
            english: "Artery Obstruction",
            spanish: "Obstruccion de las arterias",
            definition: "Cholesterol creating a blockage stopping blood flow."
        },
        {
            english: "Obstetrician",
            spanish: "Obstetra, Tocologo",
            definition: "Doctor with special training in how to care for pregnant women and help in the birth of babies."
        },
        {
            english: "Obese",
            spanish: "Obeso",
            definition: "Grossly fat or overweight."
        },
        {
            english: "Nutritionist",
            spanish: "Nutricionista",
            definition: "Person whose job is to give advice on what you should eat to remain healthy."
        },
        {
            english: "Nape",
            spanish: "Nuca",
            definition: "The back of the neck."
        },
        {
            english: "Gagging",
            spanish: "Nauseas, Arcadas",
            definition: "Choke or retch."
        },
        {
            english: "Blood Sample",
            spanish: "Muestra de Sangre",
            definition: "Amount of a person's blood taken from their body for use in medical tests."
        },
        {
            english: "Crib Death",
            spanish: "Muerte de cuna",
            definition: "Medical condition in which a baby dies suddenly while it is sleeping for no obvious reason."
        },
        {
            english: "Bruises",
            spanish: "Moretones",
            definition: "Injury appearing as an area of discolored skin on the body, caused by a blow or impact rupturing underlying blood vessels."
        },
        {
            english: "Blood Glucose Monitor, Glucometer",
            spanish: "Monitor de glucosa, Glucometro",
            definition: "Portable machine that is used to measure how much glucose (a type of sugar) is in the blood."
        },
        {
            english: "Microbes, Germs",
            spanish: "Microbios",
            definition: "Microorganism, especially a bacterium causing disease or fermentation."
        },
        {
            english: "Yeast Infection",
            spanish: "Micosis Vaginal, Infeccion por Hongos",
            definition: "Infection of the vagina caused by a fungus known as Candida."
        },
        {
            english: "The “blues”",
            spanish: "Melancolia, trizteza",
            definition: "Feelings of melancholy, sadness, or depression."
        },
        {
            english: "Compression Stockings",
            spanish: "Medias de compression",
            definition: "Guard against further progression of, venous disorders such as edema, phlebitis and thrombosis."
        },
        {
            english: "Mastitis",
            spanish: "Mastitis",
            definition: "Inflammation of the mammary gland in the breast or udder, typically due to bacterial infection via a damaged nipple."
        },
        {
            english: "Groggy",
            spanish: "Mareado, Aturdido",
            definition: "Dazed, weak, or unsteady, especially from illness, intoxication, sleep, or a blow."
        },
        {
            english: "Pacemaker",
            spanish: "Marca Pasos",
            definition: "System that sends electrical impulses to the heart in order to set the heart rhythm."
        },
        {
            english: "Leggings",
            spanish: "Mallas",
            definition: "Tight-fitting stretch pants, typically worn by women or girls."
        },
        {
            english: "Calamine Lotion",
            spanish: "Locion de Calamina",
            definition: "Soothing lotion-containing calamine, treatment of inflammatory conditions of the skin."
        },
        {
            english: "Mouth Sores",
            spanish: "Llagas orales, Ulceras de boca",
            definition: "Soft tissues of your mouth, including your lips, cheeks, gums, tongue, and floor and roof of your mouth."
        },
        {
            english: "Bed Sores",
            spanish: "Llagas de decubito, Ulceras de Decubito",
            definition: "Sores developed by an invalid because of pressure caused by lying in bed in one position."
        },
        {
            english: "Latex",
            spanish: "Latex",
            definition: "White liquid produced by many plants, especially rubber trees, or a rubber-like substance made from this or from plastic, used in making clothes, paint, glue, etc."
        },
        {
            english: "Lancets",
            spanish: "Lancetas",
            definition: "Surgical knife with a short, wide, pointed double-edged blade, used especially for making punctures and small incisions."
        },
        {
            english: "Chapped Lips",
            spanish: "Labios Partidos",
            definition: "Dry, cracked or sore lips, usually in cold, windy, dry weather and less often in warm weather."
        },
        {
            english: "Syringe",
            spanish: "Jeringas",
            definition: "Hollow, cylinder-shaped piece of equipment used for sucking liquid out of something or pushing liquid into."
        },
        {
            english: "IV (Intravenous)",
            spanish: "Intravenosa",
            definition: "Apparatus used to administer a fluid (as of medication, blood, or nutrients) intravenously."
        },
        {
            english: "Insulin",
            spanish: "Insulina",
            definition: "Hormone produced in the pancreas by the islets of Langerhans that regulates the amount of glucose in the blood."
        },
        {
            english: "Kidney Failure",
            spanish: "Insuficiencia Renal",
            definition: "Means they have stopped working well enough for you to survive without dialysis or a kidney transplant."
        },
        {
            english: "Heart Failure",
            spanish: "Insuficiencia Cardiaca",
            definition: "Chronic, progressive condition in which the heart muscle is unable to pump enough blood through to meet the body's needs for blood and oxygen."
        },
        {
            english: "Epidural Injection",
            spanish: "Injeccion Epidural",
            definition: "Provides temporary or prolonged relief from pain or inflammation in the spine or extremities."
        },
        {
            english: "Groin",
            spanish: "Ingle",
            definition: "The area between the abdomen and the thigh on either side of the body."
        },
        {
            english: "Strep Throat",
            spanish: "Infeccion por Estreptococo",
            definition: "Sore throat with fever caused by streptococcal infection."
        },
        {
            english: "Myocardial Infarction",
            spanish: "Infarto de el Miocardio",
            definition: "A heart attack."
        },
        {
            english: "Urinary Incontinence",
            spanish: "Incontinencia Urinaria",
            definition: "Inability to hold urine in the bladder due to loss of voluntary control over the urinary sphincters resulting in the involuntary passage of urine."
        },
        {
            english: "Shock",
            spanish: "Impacto, Descarga Electrica",
            definition: "Sudden discharge of electricity through a part of the body."
        },
        {
            english: "MRI (Magnetic Resonance Imaging)",
            spanish: "Imagenes por Resonancia Magnetica",
            definition: "Diagnostic technique that uses magnetic fields and radio waves to produce a detailed image of the body's soft tissue and bones."
        },
        {
            english: "Jaundice",
            spanish: "Ictericia",
            definition: "Medical condition with yellowing of the skin or whites of the eyes, arising from excess of the pigment bilirubin and typically caused by obstruction of the bile duct, by liver disease, or by excessive breakdown of red blood cells."
        },
        {
            english: "Hormones",
            spanish: "Hormonas",
            definition: "Chemical substance produced in the body that controls and regulates the activity of certain cells or organs."
        },
        {
            english: "Tingling",
            spanish: "Hormigueo",
            definition: "Experience or cause to experience a slight prickling or stinging sensation."
        },
        {
            english: "Hysterectomy",
            spanish: "histerectomia",
            definition: "Surgical operation to remove all or part of the uterus."
        },
        {
            english: "Cotton Swabs",
            spanish: "Hisopos, Bastoncillos de Algodon",
            definition: "Small wad of absorbent cotton on a short thin stick, used for cosmetic or hygienic purposes."
        },
        {
            english: "Hypothyroidism",
            spanish: "Hipotiroidismo",
            definition: "Abnormally low activity of the thyroid gland, resulting in retardation of growth and mental development in children and adults."
        },
        {
            english: "Hypoglycemia (Low Blood Sugar",
            spanish: "Hipoglucemia",
            definition: "Deficiency of glucose in the bloodstream."
        },
        {
            english: "Hyperthyroidism",
            spanish: "Hipertiroidismo",
            definition: "Over activity of the thyroid gland, resulting in a rapid heartbeat and an increased rate of metabolism."
        },
        {
            english: "Hyperglycemia (High blood Sugar)",
            spanish: "Hiperglucemia",
            definition: "Excess of glucose in the bloodstream, often associated with diabetes mellitus."
        },
        {
            english: "Fatty Liver",
            spanish: "Higado Graso",
            definition: "Buildup of fat in the liver."
        },
        {
            english: "Liver",
            spanish: "Higado",
            definition: "Large organ in the body that cleans the blood and produces bile."
        },
        {
            english: "Weeds",
            spanish: "Hierba Mala",
            definition: "Wild plant that grows in gardens or fields of crops and prevents the plants that you want from growing properly."
        },
        {
            english: "Surgical Wound",
            spanish: "Herida Quirurgica",
            definition: "Cut or incision in the skin that is usually made by a scalpel during surgery."
        },
        {
            english: "Wound",
            spanish: "Herida",
            definition: "Injury to living tissue caused by a cut, blow, or other impact, typically one in which the skin is cut or broken."
        },
        {
            english: "Hemoglobin A1C",
            spanish: "Hemoglobina A1C",
            definition: "Test that measures the average blood sugar concentrations for the preceding two to three months."
        },
        {
            english: "Stool",
            spanish: "Heces Fecales, Excremento",
            definition: "Piece of feces."
        },
        {
            english: "Flu",
            spanish: "Gripe",
            definition: "Common infectious illness that causes fever and headache."
        },
        {
            english: "Mammary Glands",
            spanish: "Glandulas Mammarias",
            definition: "The milk-producing gland of women or other female mammals."
        },
        {
            english: "Thyroid Gland",
            spanish: "Glandula Tiroides",
            definition: "Large ductless gland in the neck that secretes hormones regulating growth and development through the rate of metabolism."
        },
        {
            english: "Braces",
            spanish: "Frenos Dentales",
            definition: "Wire device fitted in the mouth to straighten the teeth."
        },
        {
            english: "Splint",
            spanish: "Ferula",
            definition: "Strip of rigid material used for supporting and immobilizing a broken bone when it has been set."
        },
        {
            english: "Due Date",
            spanish: "Fecha de dar a Luz",
            definition: "Date of giving birth."
        },
        {
            english: "Shortness of Breath",
            spanish: "Falta de Aliento",
            definition: "Difficulty breathing"
        },
        {
            english: "Medical Chart, Medical Record",
            spanish: "Expediente Medico",
            definition: "Record of a patient's medical information such as medical history, care or treatments received, test results, diagnoses, and medications taken."
        },
        {
            english: "Name Tag",
            spanish: "Etiqueta con Nombre",
            definition: "Badge or sticker worn on the outermost clothing as a means of displaying the wearer's name for others to view."
        },
        {
            english: "Estrogen",
            spanish: "Estrogeno",
            definition: "Group of steroid hormones that promote the development and maintenance of female characteristics of the body"
        },
        {
            english: "Spine",
            spanish: "Espina Dorsal, columna",
            definition: "Series of vertebrae extending from the skull to the small of the back, enclosing the spinal cord and providing support for the thorax and abdomen; the backbone."
        },
        {
            english: "Enzymes",
            spanish: "Enzimas",
            definition: "Proteins produced in living cells that accelerate or catalyze the metabolic processes of an organism."
        },
        {
            english: "Numbness",
            spanish: "Entumecimiento",
            definition: "The state of being numb."
        },
        {
            english: "Triage Nurse",
            spanish: "Enfermera de Clasificacion",
            definition: "This nurse will evaluate the patient's condition, as well as any changes, and will determine their priority for admission to the emergency department and for treatment."
        },
        {
            english: "Circulatory Disease",
            spanish: "Enfermedades Circulatorias",
            definition: "Disorders of the circulatory system generally result in diminished flow of blood and oxygen supply to the tissues."
        },
        {
            english: "Stroke",
            spanish: "Embolia, Derrame",
            definition: "Sudden loss of brain function caused by an interruption in the supply of blood to the brain."
        },
        {
            english: "Ectopic Pregnancy",
            spanish: "Embarazo Ectopico",
            definition: "Pregnancy in which the fetus develops outside the uterus, typically in a Fallopian tube."
        },
        {
            english: "Electromyograp hy",
            spanish: "Electromiografia",
            definition: "Recording of the electrical activity of muscle tissue, or its representation as a visual display or audible signal, using electrodes attached to the skin or inserted into the muscle."
        },
        {
            english: "Electrodes",
            spanish: "Electrodos",
            definition: "Conductor used to establish electrical contact with a nonmetallic part of a circuit."
        },
        {
            english: "Electrocardiogra m (EKG)",
            spanish: "Electrocardiogra ma",
            definition: "Electrodes are placed on the skin of the chest and connected in a specific order to a machine that, when turned on, measures electrical activity all over the heart."
        },
        {
            english: "Edema",
            spanish: "Edema",
            definition: "Edema is a swelling, usually of the legs, feet, and/or hands due to the accumulation of excessive fluid in the tissues."
        },
        {
            english: "Douching",
            spanish: "Ducha Vaginal",
            definition: "Practice of washing or flushing the vagina with water or other fluids."
        },
        {
            english: "Drain",
            spanish: "Drenar",
            definition: "To withdraw or draw off (a liquid) gradually."
        },
        {
            english: "Dosage",
            spanish: "Dosis, Dosificacion",
            definition: "The amount of a medicine or drug that someone takes or should take."
        },
        {
            english: "Blood Donor",
            spanish: "Donador de Sangre",
            definition: "Someone who regularly gives some of their blood for people who need it because they are sick."
        },
        {
            english: "Labor Pains",
            spanish: "Dolores de Parto",
            definition: "One of the recurrent pains felt by a woman during childbirth."
        },
        {
            english: "Soreness",
            spanish: "Dolor, Molestias",
            definition: "Pain in a part of one's body."
        },
        {
            english: "Dull Pain",
            spanish: "Dolor Sordo",
            definition: "Discomfort occurs at a low level over a long period."
        },
        {
            english: "Sore Throat",
            spanish: "Dolor de Garganta",
            definition: "Condition marked by pain in the throat, typically caused by inflammation due to a cold or other virus."
        },
        {
            english: "Sharp Pain, Acute Pain",
            spanish: "Dolor Agudo",
            definition: "Rapid onset or pain that results from a specific traumatic incident such as an injury to a specific part of the body, or an illness."
        },
        {
            english: "On duty Physician, On duty Doctor",
            spanish: "Doctor en turno",
            definition: "Usually refers to a doctor's obligation to be on duty at that point in time."
        },
        {
            english: "Hearing Aid",
            spanish: "Dispositivo Auditivo",
            definition: "Small device that fits in or on the ear, worn by a partially deaf person to amplify sound."
        },
        {
            english: "Dilation and Curettage (D&C)",
            spanish: "Dilatacion y Curetaje",
            definition: "Brief surgical procedure in which the cervix is dilated and a special instrument is used to scrape the uterine lining, or to view if there is any abnormal cells."
        },
        {
            english: "Dietician",
            spanish: "Dietista",
            definition: "Expert on diet and nutrition."
        },
        {
            english: "Baby Teeth",
            spanish: "Dientes de Leche",
            definition: "Another term for milk tooth."
        },
        {
            english: "Low Sodium Diet",
            spanish: "Dieta baja en Sodio",
            definition: "Diet restricted to foods naturally low in sodium content and prepared without added salt that is used especially in the management of hypertension, heart failure, and kidney or liver dysfunction."
        },
        {
            english: "Gestational Diabetes",
            spanish: "Diabetes Gestacional",
            definition: "Condition in which a woman without diabetes develops high blood sugar levels during pregnancy."
        },
        {
            english: "Fainting Spells",
            spanish: "Desmayos repetidos",
            definition: "Occur when one's blood pressure or heart rate drops suddenly and frequently."
        },
        {
            english: "Dermatologist",
            spanish: "Dermatologo",
            definition: "Medical practitioner qualified to diagnose and treat skin disorders."
        },
        {
            english: "Diaper Rash",
            spanish: "Dermatitis de Pañal",
            definition: "Inflammation of a baby's skin caused by prolonged contact with a damp diaper."
        },
        {
            english: "Bowel Movement",
            spanish: "Deposicion Fecal",
            definition: "Act of defecation."
        },
        {
            english: "Vitamin Deficiency",
            spanish: "Deficiencia de vitaminas",
            definition: "Lack of a vitamin or vitamins needed for good health."
        },
        {
            english: "(To be) Discharged",
            spanish: "Dar de alta",
            definition: "Point at which the patient leaves the hospital and either returns home or is transferred to another facility such as one for rehabilitation or to a nursing home."
        },
        {
            english: "Nursery",
            spanish: "Cunero",
            definition: "Room in a house for the special use of young children."
        },
        {
            english: "Perineal Care",
            spanish: "Cuidados Periniales",
            definition: "Practiced to remove secretions or dried blood from a wound and to prevent contamination of the urethral and vaginal areas or perineal wounds with fecal matter or urine."
        },
        {
            english: "Home Care",
            spanish: "Cuidados Domiciliarios",
            definition: "Person who provides personal care for the elderly or disabled people such as help with bathing, washing your hair, or getting dressed."
        },
        {
            english: "New Born Care",
            spanish: "Cuidados de Recien Nacido",
            definition: "Activities and precautions recommended for new parents or caregivers."
        },
        {
            english: "Cervix",
            spanish: "Cuello Uterino",
            definition: "The narrow neck like passage forming the lower end of the uterus."
        },
        {
            english: "Joints",
            spanish: "Coyonturas, articulaciones",
            definition: "Place in your body where two bones are connected."
        },
        {
            english: "Scab",
            spanish: "Costra",
            definition: "Dry, rough protective crust that forms over a cut or wound during healing."
        },
        {
            english: "Umbilical Chord",
            spanish: "Cordon Umbilical",
            definition: "Flexible cordlike structure containing blood vessels and attaching a human or other mammalian fetus to the placenta during gestation."
        },
        {
            english: "Contractions",
            spanish: "Contracciones",
            definition: "Shortening of the uterine muscles occurring at intervals before and during childbirth."
        },
        {
            english: "Sharps Container",
            spanish: "Contenedor de objetos Punzocortantes",
            definition: "Container in which one can dispose of medical devices that have a sharp point and that can cut through skin."
        },
        {
            english: "Lactation Consultant",
            spanish: "Consultora de Lactancia",
            definition: "Professional breastfeeding specialists trained to teach mothers how to feed their baby."
        },
        {
            english: "Family Counselor",
            spanish: "Consejero Familiar",
            definition: "Type of psychological counseling that can help family members improve communication and resolve conflicts."
        },
        {
            english: "Pink Eye",
            spanish: "Conjuntivitis",
            definition: "Inflammation or infection of the transparent membrane that lines your eyelid and covers the white part of your eyeball."
        },
        {
            english: "Breast Engorgement",
            spanish: "Congestion Mamaria",
            definition: "Occurs in the mammary glands due to expansion and pressure exerted by the synthesis and storage of breast milk, engorgement usually happens when the breasts switch from colostrum to mature milk."
        },
        {
            english: "Chronic Conditions",
            spanish: "Condiciones Cronicas",
            definition: "Human health condition or disease that is persistent or otherwise long lasting in its effects."
        },
        {
            english: "Underlying Condition",
            spanish: "Condicion Subyacente",
            definition: "Medical condition that is hidden by another, more obvious one."
        },
        {
            english: "Intercourse",
            spanish: "Coito, Relaciones Sexuales",
            definition: "The act of having sex."
        },
        {
            english: "Collar bone, clavicle",
            spanish: "Clavicula,",
            definition: "Long bone that serves as a strut between the shoulder blade and the sternum or breastbone."
        },
        {
            english: "Follow up Appointment",
            spanish: "Cita de Seguimiento",
            definition: "Maintain contact with (a patient) at one or more designated, intervals following diagnosis or treatment especially to examine again"
        },
        {
            english: "Circumcision",
            spanish: "Circumcicion",
            definition: "Removal of the foreskin from the human penis."
        },
        {
            english: "Waist",
            spanish: "Cintura",
            definition: "Part of the human body below the ribs and above the hips."
        },
        {
            english: "Scar",
            spanish: "Cicatriz",
            definition: "Mark left on the skin or within body tissue where a wound, burn, or sore has not healed completely and fibrous connective tissue has developed."
        },
        {
            english: "C-section",
            spanish: "Cesarea",
            definition: "Surgical procedure involving incision of the walls of the abdomen and uterus for delivery of offspring."
        },
        {
            english: "Sinus Headache",
            spanish: "Cefalea sinusal",
            definition: "Headaches that may feel pressure around your eyes, cheeks and forehead."
        },
        {
            english: "Tension Headache",
            spanish: "Cefalea por tension",
            definition: "Generally a diffuse, mild to moderate pain in your head that is often described as feeling like a tight band around your head."
        },
        {
            english: "Immunization Records",
            spanish: "Cartilla de Vacunacion",
            definition: "Provide a history of all the vaccines you or your child received."
        },
        {
            english: "Lean Meats",
            spanish: "Carnes Magras, Carnes baja en grasa",
            definition: "Meats with a relatively low fat content. Skinless chicken, turkey, and red meat, such as pork chops, with the fat trimmed off are examples of lean meat."
        },
        {
            english: "Colostrum",
            spanish: "Calostro",
            definition: "First secretion from the mammary glands after giving birth, rich in antibodies."
        },
        {
            english: "Sedative, Pain Killer",
            spanish: "Calmante",
            definition: "Something (such as a drug) that relieves pain."
        },
        {
            english: "Callus",
            spanish: "Callos",
            definition: "Thickened and hardened part of the skin or soft tissue, especially in an area that has been subjected to friction."
        },
        {
            english: "Kidney Stones",
            spanish: "Calculos Renales",
            definition: "Hard mass formed in the kidneys, typically consisting of insoluble calcium compounds; a renal calculus."
        },
        {
            english: "Gallstones",
            spanish: "Calculos Biliares",
            definition: "Small, hard crystalline mass formed abnormally in the gallbladder or bile ducts from bile pigments, cholesterol, and calcium salts."
        },
        {
            english: "Bump",
            spanish: "Bulto, abultamiento",
            definition: "Bulge on a level surface."
        },
        {
            english: "Bronchitis",
            spanish: "Bronquitis",
            definition: "Illness in which the bronchial tubes become infected and swollen, resulting in coughing and difficulty in breathing."
        },
        {
            english: "Arm Band",
            spanish: "Brazalete",
            definition: "Band worn around a person's upper arm to hold up a shirtsleeve or as a symbol."
        },
        {
            english: "Breast Pump",
            spanish: "Bomba Para Lactancia, Extractor de leche",
            definition: "Device for drawing milk from a woman's breasts by suction."
        },
        {
            english: "Pump",
            spanish: "Bomba",
            definition: "Mechanical device using suction or pressure to raise or move liquids, compress gases, or force air into inflatable objects."
        },
        {
            english: "Hot Flashes",
            spanish: "Bochornos",
            definition: "Sudden feeling of feverish heat, typically as a symptom of menopause."
        },
        {
            english: "Biopsy",
            spanish: "Biopsia",
            definition: "Examination of tissue removed from a living body to discover the presence, cause, or extent of a disease."
        },
        {
            english: "Bile",
            spanish: "Bilis",
            definition: "Bitter greenish-brown alkaline fluid that aids digestion and is secreted by the liver and stored in the gallbladder."
        },
        {
            english: "Baby Bottle",
            spanish: "Biberon",
            definition: "Bottle fitted with a nipple for giving milk and other drinks to babies and very young children."
        },
        {
            english: "Baldness",
            spanish: "Calvicie",
            definition: "The condition of having a scalp wholly or partly lacking hair."
        },
        {
            english: "Health Care",
            spanish: "Atencion Medica",
            definition: "The maintenance and improvement of physical and mental health, especially through the provision of medical services."
        },
        {
            english: "Seizure",
            spanish: "Convulciones",
            definition: "Sudden attack of illness, especially a stroke or an epileptic fit."
        },
        {
            english: "Child Safety Seat",
            spanish: "Asiento de Seguridad",
            definition: "Seat designed specifically to protectchildren from injury or death during vehicle collisions."
        },
        {
            english: "Burning Sensation",
            spanish: "Ardor, Escozor",
            definition: "Burning pain is often related to nerve problems. However, there are many other possible causes. Injuries, infections, and autoimmune disorders have the potential to trigger nerve pain, and in some cases cause nerve damage."
        },
        {
            english: "Bushes",
            spanish: "Arbustos",
            definition: "Large plant, which is smaller than a tree and has many branches."
        },
        {
            english: "Contraceptives, Birth control",
            spanish: "Anticonceptivos",
            definition: "Device or drug serving to prevent pregnancy."
        },
        {
            english: "Blood thinners",
            spanish: "Anticoagulantes",
            definition: "Medications taken orally or intravenously (through a vein) to prevent a blood clot."
        },
        {
            english: "Forearm",
            spanish: "Ante Brazo",
            definition: "The part of a person's arm extending from the elbow to the wrist or the fingertips."
        },
        {
            english: "Anesthesiologist",
            spanish: "Anestesiologo",
            definition: "Doctor who specializes in giving anesthetics to patients."
        },
        {
            english: "General Anesthesia",
            spanish: "Anestecia General",
            definition: "Anesthesia that affects the whole body and usually induces a loss of consciousness."
        },
        {
            english: "Pain Killer",
            spanish: "Analgesicos",
            definition: "Drug or medicine for relieving pain."
        },
        {
            english: "Blisters",
            spanish: "Ampoyas",
            definition: "Small bubble on the skin filled with serum and caused by friction, burning, or other damage."
        },
        {
            english: "Enlarged Tonsils",
            spanish: "Amigdalas Agrandadas",
            definition: "Inflammation of the tonsils, two oval-shaped pads of tissue at the back of the throat."
        },
        {
            english: "To store",
            spanish: "Almacenar",
            definition: "Quantity or supply of something kept for use as needed."
        },
        {
            english: "Seasonal Allergies (Hay fever)",
            spanish: "Alergias Estacionales",
            definition: "Generally refers to grass, pollen and mold, there is a different group of triggers that are closely tied to particular seasons."
        },
        {
            english: "Border Line",
            spanish: "Al limite",
            definition: "Between two different conditions, with the possibility of belonging to either one of them."
        },
        {
            english: "Choke",
            spanish: "Ahogarse, Atragantarse",
            definition: "Have severe difficulty in breathing because of a constricted or obstructed throat or a lack of air."
        },
        {
            english: "Heartburn",
            spanish: "Agruras",
            definition: "Form of indigestion felt as a burning sensation in the chest, caused by acid regurgitation into the esophagus."
        },
        {
            english: "Miscarriage",
            spanish: "Aborto Espontaneo",
            definition: "The expulsion of a fetus from the womb before it is able to survive independently, especially spontaneously or as the result of accident."
        },
        {
            english: "Cramps",
            spanish: "(Muscular) Calambres, (Menstrual) Colicos (Abdominal) retorcijones)",
            definition: "Painful, involuntary contraction of a muscle or muscles, typically caused by fatigue or strain."
        },
        {
            english: "Fasting",
            spanish: "Ayunar",
            definition: "Abstain from all or some kinds of food or drink, especially as a religious observance."
        },
        {
            english: "Brain Stem",
            spanish: "Tronco Encefalico, Tallo cerebral",
            definition: "The posterior part of the brain, adjoining and structurally continuous with the spinal cord."
        },
        {
            english: "Podiatrist",
            spanish: "Podologo, Podiatra",
            definition: "Person qualified to diagnose and treat foot disorders."
        }
    ]
