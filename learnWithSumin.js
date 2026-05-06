// Vocabulary Database - The Source of Truth
const vocabData = {
    greetings: [
        { en: "Hello", ar: "مرحبا", ko: "안녕하세요", tr: "Merhaba", pron_ko: "Annyeonghaseyo" },
        { en: "Thank you", ar: "شكراً", ko: "고맙습니다", tr: "Teşekkür ederim", pron_ko: "Gomapseumnida" },
        { en: "Goodbye", ar: "مع السلامة", ko: "안녕히 가세요", tr: "Hoşçakal", pron_ko: "Annyeonghi gaseyo" },
        { en: "Nice to meet you", ar: "تشرفت بمعرفتكم", ko: "반갑습니다", tr: "Tanıştığımıza memnun oldum", pron_ko: "Bangapseumnida" },
        { en: "Yes", ar: "نعم", ko: "네", tr: "Evet", pron_ko: "Ne" },
        { en: "No", ar: "لا", ko: "아니요", tr: "Hayır", pron_ko: "Aniyo" },
        { en: "Good morning", ar: "صباح الخير", ko: "좋은 아침입니다", tr: "Günaydın", pron_ko: "Jo-eun achim-imnida" },
        { en: "Good night", ar: "تصبح على خير", ko: "안녕히 주무세요", tr: "İyi geceler", pron_ko: "Annyeonghi jumuseyo" },
        { en: "Excuse me", ar: "عذراً", ko: "실례합니다", tr: "Affedersiniz", pron_ko: "Silryehamnida" },
        { en: "I am sorry", ar: "أنا آسف", ko: "죄송합니다", tr: "Üzgünüm", pron_ko: "Joesonghamnida" },
        { en: "Please", ar: "من فضلك", ko: "제발", tr: "Lütfen", pron_ko: "Jebal" }, // Or "Butakhamnida" more formal
        { en: "How are you?", ar: "كيف حالك؟", ko: "잘 지내세요?", tr: "Nasılsın?", pron_ko: "Jal jinaeseyo?" },
        { en: "I am fine", ar: "أنا بخير", ko: "저는 잘 지내요", tr: "İyiyim", pron_ko: "Jeoneun jal jinaeyo" },
        { en: "What is your name?", ar: "ما اسمك؟", ko: "이름이 뭐예요?", tr: "Adın ne?", pron_ko: "Ireumi mwoyeyo?" },
        { en: "My name is...", ar: "اسمي...", ko: "제 이름은...", tr: "Benim adım...", pron_ko: "Je ireumeun..." },
        { en: "See you later", ar: "أراك لاحقاً", ko: "나중에 봐요", tr: "Görüşürüz", pron_ko: "Najunge bwayo" },
        { en: "Welcome", ar: "أهلاً بك", ko: "환영합니다", tr: "Hoş geldiniz", pron_ko: "Hwanyeonghamnida" },
        { en: "Help!", ar: "مساعدة!", ko: "도와주세요!", tr: "İmdat!", pron_ko: "Dowajuseyo!" },
        { en: "Stop", ar: "توقف", ko: "멈추세요", tr: "Dur", pron_ko: "Meomchuseyo" },
        { en: "Okay", ar: "حسناً", ko: "알겠습니다", tr: "Tamam", pron_ko: "Algersseumnida" }
    ],
    numbers: [
        { en: "One", ar: "واحد", ko: "하나", tr: "Bir", pron_ko: "Hana" },
        { en: "Two", ar: "إثنان", ko: "둘", tr: "İki", pron_ko: "Dul" },
        { en: "Three", ar: "ثلاثة", ko: "셋", tr: "Üç", pron_ko: "Set" },
        { en: "Four", ar: "أربعة", ko: "넷", tr: "Dört", pron_ko: "Net" },
        { en: "Five", ar: "خمسة", ko: "다섯", tr: "Beş", pron_ko: "Daseot" },
        { en: "Six", ar: "ستة", ko: "여섯", tr: "Altı", pron_ko: "Yeoseot" },
        { en: "Seven", ar: "سبعة", ko: "일곱", tr: "Yedi", pron_ko: "Ilgop" },
        { en: "Eight", ar: "ثمانية", ko: "여덟", tr: "Sekiz", pron_ko: "Yeodeol" },
        { en: "Nine", ar: "تسعة", ko: "아홉", tr: "Dokuz", pron_ko: "Ahop" },
        { en: "Ten", ar: "عشرة", ko: "열", tr: "On", pron_ko: "Yeol" },
        { en: "Eleven", ar: "أحد عشر", ko: "열하나", tr: "On bir", pron_ko: "Yeolhana" },
        { en: "Twelve", ar: "إثنا عشر", ko: "열둘", tr: "On iki", pron_ko: "Yeoldul" },
        { en: "Twenty", ar: "عشرون", ko: "스물", tr: "Yirmi", pron_ko: "Seumul" },
        { en: "Thirty", ar: "ثلاثون", ko: "서른", tr: "Otuz", pron_ko: "Seoreun" },
        { en: "Forty", ar: "أربعون", ko: "마흔", tr: "Kırk", pron_ko: "Maheun" },
        { en: "Fifty", ar: "خمسون", ko: "쉰", tr: "Elli", pron_ko: "Swin" },
        { en: "Hundred", ar: "مئة", ko: "백", tr: "Yüz", pron_ko: "Baek" },
        { en: "Thousand", ar: "ألف", ko: "천", tr: "Bin", pron_ko: "Cheon" },
        { en: "First", ar: "الأول", ko: "첫째", tr: "Birinci", pron_ko: "Cheotjjae" },
        { en: "Second", ar: "الثاني", ko: "둘째", tr: "İkinci", pron_ko: "Duljjae" }
    ],
    colors: [
        { en: "Red", ar: "أحمر", ko: "빨간색", tr: "Kırmızı", pron_ko: "Ppalgan-saek" },
        { en: "Blue", ar: "أزرق", ko: "파란색", tr: "Mavi", pron_ko: "Paran-saek" },
        { en: "Green", ar: "أخضر", ko: "초록색", tr: "Yeşil", pron_ko: "Chorok-saek" },
        { en: "Yellow", ar: "أصفر", ko: "노란색", tr: "Sarı", pron_ko: "Noran-saek" },
        { en: "Black", ar: "أسود", ko: "검은색", tr: "Siyah", pron_ko: "Geomeun-saek" },
        { en: "White", ar: "أبيض", ko: "하얀색", tr: "Beyaz", pron_ko: "Hayan-saek" },
        { en: "Pink", ar: "وردي", ko: "분홍색", tr: "Pembe", pron_ko: "Bunhong-saek" },
        { en: "Purple", ar: "أرجواني", ko: "보라색", tr: "Mor", pron_ko: "Bora-saek" },
        { en: "Orange", ar: "برتقالي", ko: "주황색", tr: "Turuncu", pron_ko: "Juhwang-saek" },
        { en: "Brown", ar: "بني", ko: "갈색", tr: "Kahverengi", pron_ko: "Galsaek" },
        { en: "Grey", ar: "رمادي", ko: "회색", tr: "Gri", pron_ko: "Hoesaek" },
        { en: "Gold", ar: "ذهبي", ko: "금색", tr: "Altın", pron_ko: "Geumsaek" },
        { en: "Silver", ar: "فضي", ko: "은색", tr: "Gümüş", pron_ko: "Eunsaek" },
        { en: "Dark", ar: "داكن", ko: "어두운", tr: "Koyu", pron_ko: "Eoduun" },
        { en: "Light", ar: "فاتح", ko: "밝은", tr: "Açık", pron_ko: "Balgeun" },
        { en: "Rainbow", ar: "قوس قزح", ko: "무지개", tr: "Gökkuşağı", pron_ko: "Mujigae" }
    ],
    family: [
        { en: "Mother", ar: "أم", ko: "어머니", tr: "Anne", pron_ko: "Eomeoni" },
        { en: "Father", ar: "أب", ko: "아버지", tr: "Baba", pron_ko: "Abeoji" },
        { en: "Sister", ar: "أخت", ko: "언니/누나", tr: "Kız kardeş", pron_ko: "Eonni / Nuna" },
        { en: "Brother", ar: "أخ", ko: "오빠/형", tr: "Erkek kardeş", pron_ko: "Oppa / Hyeong" },
        { en: "Baby", ar: "طفل", ko: "아기", tr: "Bebek", pron_ko: "Agi" },
        { en: "Grandmother", ar: "جدة", ko: "할머니", tr: "Büyükanne", pron_ko: "Halmeoni" },
        { en: "Grandfather", ar: "جد", ko: "할아버지", tr: "Büyükbaba", pron_ko: "Harabeoji" },
        { en: "Aunt", ar: "عمة/خالة", ko: "이모/고모", tr: "Teyze/Hala", pron_ko: "Imo / Gomo" },
        { en: "Uncle", ar: "عم/خال", ko: "삼촌/이모부", tr: "Amca/Dayı", pron_ko: "Samchon" },
        { en: "Son", ar: "ابن", ko: "아들", tr: "Oğul", pron_ko: "Adeul" },
        { en: "Daughter", ar: "ابنة", ko: "딸", tr: "Kız", pron_ko: "Ddal" },
        { en: "Friend", ar: "صديق", ko: "친구", tr: "Arkadaş", pron_ko: "Chingu" },
        { en: "Family", ar: "عائلة", ko: "가족", tr: "Aile", pron_ko: "Gajok" },
        { en: "Man", ar: "رجل", ko: "남자", tr: "Adam", pron_ko: "Namja" },
        { en: "Woman", ar: "امرأة", ko: "여자", tr: "Kadın", pron_ko: "Yeoja" },
        { en: "Child", ar: "طفل", ko: "아이", tr: "Çocuk", pron_ko: "Ai" }
    ],
    food: [
        { en: "Water", ar: "ماء", ko: "물", tr: "Su", pron_ko: "Mul" },
        { en: "Bread", ar: "خبز", ko: "빵", tr: "Ekmek", pron_ko: "Ppang" },
        { en: "Rice", ar: "أرز", ko: "밥", tr: "Pilav", pron_ko: "Bap" },
        { en: "Apple", ar: "تفاحة", ko: "사과", tr: "Elma", pron_ko: "Sagwa" },
        { en: "Milk", ar: "حليب", ko: "우유", tr: "Süt", pron_ko: "Uyu" },
        { en: "Coffee", ar: "قهوة", ko: "커피", tr: "Kahve", pron_ko: "Keopi" },
        { en: "Tea", ar: "شاي", ko: "차", tr: "Çay", pron_ko: "Cha" },
        { en: "Beef", ar: "لحم بقر", ko: "소고기", tr: "Sığır eti", pron_ko: "Sogogi" },
        { en: "Chicken", ar: "دجاج", ko: "닭고기", tr: "Tavuk", pron_ko: "Dakgogi" },
        { en: "Fish", ar: "سمك", ko: "생선", tr: "Balık", pron_ko: "Saengseon" },
        { en: "Vegetable", ar: "خضار", ko: "야채", tr: "Sebze", pron_ko: "Yachae" },
        { en: "Fruit", ar: "فاكهة", ko: "과일", tr: "Meyve", pron_ko: "Gwail" },
        { en: "Egg", ar: "بيض", ko: "계란", tr: "Yumurta", pron_ko: "Gyeran" },
        { en: "Cheese", ar: "جبن", ko: "치즈", tr: "Peynir", pron_ko: "Chijeu" },
        { en: "Salt", ar: "ملح", ko: "소금", tr: "Tuz", pron_ko: "Sogeum" },
        { en: "Sugar", ar: "سكر", ko: "설탕", tr: "Şeker", pron_ko: "Seoltang" },
        { en: "Breakfast", ar: "فطور", ko: "아침식사", tr: "Kahvaltı", pron_ko: "Achimsiksa" },
        { en: "Lunch", ar: "غداء", ko: "점심식사", tr: "Öğle yemeği", pron_ko: "Jeomsimsiksa" },
        { en: "Dinner", ar: "عشاء", ko: "저녁식사", tr: "Akşam yemeği", pron_ko: "Jeonyeoksiksa" },
        { en: "Delicious", ar: "لذيذ", ko: "맛있다", tr: "Lezzetli", pron_ko: "Masitda" }
    ],
    travel: [
        { en: "Airport", ar: "مطار", ko: "공항", tr: "Havalimanı", pron_ko: "Gonghang" },
        { en: "Bus", ar: "حافلة", ko: "버스", tr: "Otobüs", pron_ko: "Beoseu" },
        { en: "Taxi", ar: "سيارة أجرة", ko: "택시", tr: "Taksi", pron_ko: "Taeksi" },
        { en: "Hotel", ar: "فندق", ko: "호텔", tr: "Otel", pron_ko: "Hotel" },
        { en: "Passport", ar: "جواز سفر", ko: "여권", tr: "Pasaport", pron_ko: "Yeogwon" },
        { en: "Map", ar: "خريطة", ko: "지도", tr: "Harita", pron_ko: "Jido" },
        { en: "Train", ar: "قطار", ko: "기차", tr: "Tren", pron_ko: "Gicha" },
        { en: "Subway", ar: "مترو", ko: "지하철", tr: "Metro", pron_ko: "Jihacheol" },
        { en: "Ticket", ar: "تذكرة", ko: "표", tr: "Bilet", pron_ko: "Pyo" },
        { en: "Suitcase", ar: "حقيبة سفر", ko: "여행 가방", tr: "Bavul", pron_ko: "Yeohaeng gabang" },
        { en: "Airplane", ar: "طائرة", ko: "비행기", tr: "Uçak", pron_ko: "Bihaenggi" },
        { en: "Station", ar: "محطة", ko: "역", tr: "İstasyon", pron_ko: "Yeok" },
        { en: "Street", ar: "شارع", ko: "거리", tr: "Sokak", pron_ko: "Geori" },
        { en: "Where?", ar: "أين؟", ko: "어디?", tr: "Nerede?", pron_ko: "Eodi?" },
        { en: "Left", ar: "يسار", ko: "왼쪽", tr: "Sol", pron_ko: "Oenjjok" },
        { en: "Right", ar: "يمين", ko: "오른쪽", tr: "Sağ", pron_ko: "Oreunjjok" },
        { en: "Straight", ar: "مستقيم", ko: "직진", tr: "Düz", pron_ko: "Jikjin" },
        { en: "Near", ar: "قريب", ko: "가까운", tr: "Yakın", pron_ko: "Gakkaun" },
        { en: "Far", ar: "بعيد", ko: "먼", tr: "Uzak", pron_ko: "Meon" },
        { en: "Entrance", ar: "مدخل", ko: "입구", tr: "Giriş", pron_ko: "Ipgu" },
        { en: "Exit", ar: "مخرج", ko: "출구", tr: "Çıkış", pron_ko: "Chulgu" }
    ],
    animals: [
        { en: "Cat", ar: "قطة", ko: "고양이", tr: "Kedi", pron_ko: "Goyangi" },
        { en: "Dog", ar: "كلب", ko: "개", tr: "Köpek", pron_ko: "Gae" },
        { en: "Bird", ar: "عصفور", ko: "새", tr: "Kuş", pron_ko: "Sae" },
        { en: "Fish", ar: "سمكة", ko: "물고기", tr: "Balık", pron_ko: "Mulgogi" },
        { en: "Horse", ar: "حصان", ko: "말", tr: "At", pron_ko: "Mal" },
        { en: "Cow", ar: "بقرة", ko: "소", tr: "İnek", pron_ko: "So" },
        { en: "Pig", ar: "خنزير", ko: "돼지", tr: "Domuz", pron_ko: "Dwaeji" },
        { en: "Sheep", ar: "خروف", ko: "양", tr: "Koyun", pron_ko: "Yang" },
        { en: "Rabbit", ar: "أرنب", ko: "토끼", tr: "Tavşan", pron_ko: "Tokki" },
        { en: "Mouse", ar: "فأر", ko: "쥐", tr: "Fare", pron_ko: "Jwi" },
        { en: "Lion", ar: "أسد", ko: "사자", tr: "Aslan", pron_ko: "Saja" },
        { en: "Tiger", ar: "نمر", ko: "호랑이", tr: "Kaplan", pron_ko: "Horangi" },
        { en: "Bear", ar: "دب", ko: "곰", tr: "Ayı", pron_ko: "Gom" },
        { en: "Elephant", ar: "فيل", ko: "코끼리", tr: "Fil", pron_ko: "Kokkiri" },
        { en: "Monkey", ar: "قرد", ko: "원숭이", tr: "Maymun", pron_ko: "Wonsungi" },
        { en: "Snake", ar: "ثعبان", ko: "뱀", tr: "Yılan", pron_ko: "Baem" },
        { en: "Butterfly", ar: "فراشة", ko: "나비", tr: "Kelebek", pron_ko: "Nabi" },
        { en: "Spider", ar: "عنكبوت", ko: "거미", tr: "Örümcek", pron_ko: "Geomi" },
        { en: "Duck", ar: "بطة", ko: "오리", tr: "Ördek", pron_ko: "Ori" },
        { en: "Chicken", ar: "دجاجة", ko: "닭", tr: "Tavuk", pron_ko: "Dak" }
    ],
    verbs: [
        { en: "To Eat", ar: "أكل", ko: "먹다", tr: "Yemek", pron_ko: "Meokda" },
        { en: "To Drink", ar: "شرب", ko: "마시다", tr: "İçmek", pron_ko: "Masida" },
        { en: "To Go", ar: "ذهب", ko: "가다", tr: "Gitmek", pron_ko: "Gada" },
        { en: "To Come", ar: "جاء", ko: "오다", tr: "Gelmek", pron_ko: "Oda" },
        { en: "To Sleep", ar: "نام", ko: "자다", tr: "Uyumak", pron_ko: "Jada" },
        { en: "To Love", ar: "أحب", ko: "사랑하다", tr: "Sevmek", pron_ko: "Saranghada" },
        { en: "To Study", ar: "درس", ko: "공부하다", tr: "Çalışmak", pron_ko: "Gongbuhada" },
        { en: "To Work", ar: "عمل", ko: "일하다", tr: "Çalışmak", pron_ko: "Ilhada" },
        { en: "To Speak", ar: "تكلم", ko: "말하다", tr: "Konuşmak", pron_ko: "Malhada" },
        { en: "To Listen", ar: "استمع", ko: "듣다", tr: "Dinlemek", pron_ko: "Deutda" },
        { en: "To Read", ar: "قرأ", ko: "읽다", tr: "Okumak", pron_ko: "Ikda" },
        { en: "To Write", ar: "كتب", ko: "쓰다", tr: "Yazmak", pron_ko: "Sseuda" },
        { en: "To Buy", ar: "اشترى", ko: "사다", tr: "Satın almak", pron_ko: "Sada" },
        { en: "To Meet", ar: "قابل", ko: "만나다", tr: "Buluşmak", pron_ko: "Mannada" },
        { en: "To Like", ar: "أعجب", ko: "좋아하다", tr: "Beğenmek", pron_ko: "Joahada" },
        { en: "To Hate", ar: "كره", ko: "싫어하다", tr: "Nefret etmek", pron_ko: "Sirohada" },
        { en: "To Walk", ar: "مشى", ko: "걷다", tr: "Yürümek", pron_ko: "Geotda" },
        { en: "To Run", ar: "ركض", ko: "달리다", tr: "Koşmak", pron_ko: "Dallida" },
        { en: "To Laugh", ar: "ضحك", ko: "웃다", tr: "Gülmek", pron_ko: "Utda" },
        { en: "To Cry", ar: "بكى", ko: "울다", tr: "Ağlamak", pron_ko: "Ulda" }
    ],
    adjectives: [
        { en: "Big", ar: "كبير", ko: "크다", tr: "Büyük", pron_ko: "Keuda" },
        { en: "Small", ar: "صغير", ko: "작다", tr: "Küçük", pron_ko: "Jakda" },
        { en: "Good", ar: "جيد", ko: "좋다", tr: "İyi", pron_ko: "Jota" },
        { en: "Bad", ar: "سيء", ko: "나쁘다", tr: "Kötü", pron_ko: "Nappeuda" },
        { en: "Hot", ar: "حار", ko: "덥다", tr: "Sıcak", pron_ko: "Deopda" },
        { en: "Cold", ar: "بارد", ko: "춥다", tr: "Soğuk", pron_ko: "Chupda" },
        { en: "Pretty", ar: "جميل", ko: "예쁘다", tr: "Güzel", pron_ko: "Yeppeuda" },
        { en: "Ugly", ar: "قبيح", ko: "못생겼다", tr: "Çirkin", pron_ko: "Motsaenggyeotda" },
        { en: "Easy", ar: "سهل", ko: "쉽다", tr: "Kolay", pron_ko: "Swipda" },
        { en: "Difficult", ar: "صعب", ko: "어렵다", tr: "Zor", pron_ko: "Eoryeopda" },
        { en: "Expensive", ar: "غالي", ko: "비싸다", tr: "Pahalı", pron_ko: "Bissada" },
        { en: "Cheap", ar: "رخيص", ko: "싸다", tr: "Ucuz", pron_ko: "Ssada" },
        { en: "Fast", ar: "سريع", ko: "빠르다", tr: "Hızlı", pron_ko: "Ppareuda" },
        { en: "Slow", ar: "بطيء", ko: "느리다", tr: "Yavaş", pron_ko: "Neurida" },
        { en: "Happy", ar: "سعيد", ko: "행복하다", tr: "Mutlu", pron_ko: "Haengbokhada" },
        { en: "Sad", ar: "حزين", ko: "슬프다", tr: "Üzgün", pron_ko: "Seulpeuda" },
        { en: "Tall", ar: "طويل", ko: "키가 크다", tr: "Uzun", pron_ko: "Kiga keuda" },
        { en: "Short (Height)", ar: "قصير", ko: "키가 작다", tr: "Kısa", pron_ko: "Kiga jakda" },
        { en: "New", ar: "جديد", ko: "새로운", tr: "Yeni", pron_ko: "Saeroun" },
        { en: "Old", ar: "قديم", ko: "오래된", tr: "Eski", pron_ko: "Oraedoen" }
    ],
    time: [
        { en: "Today", ar: "اليوم", ko: "오늘", tr: "Bugün", pron_ko: "Oneul" },
        { en: "Tomorrow", ar: "غداً", ko: "내일", tr: "Yarın", pron_ko: "Naeil" },
        { en: "Yesterday", ar: "أمس", ko: "어제", tr: "Dün", pron_ko: "Eoje" },
        { en: "Now", ar: "الآن", ko: "지금", tr: "Şimdi", pron_ko: "Jigeum" },
        { en: "Morning", ar: "صباح", ko: "아침", tr: "Sabah", pron_ko: "Achim" },
        { en: "Night", ar: "ليل", ko: "밤", tr: "Gece", pron_ko: "Bam" },
        { en: "Noon", ar: "ظهر", ko: "정오", tr: "Öğle", pron_ko: "Jeongo" },
        { en: "Afternoon", ar: "بعد الظهر", ko: "오후", tr: "Öğleden sonra", pron_ko: "Ohu" },
        { en: "Evening", ar: "مساء", ko: "저녁", tr: "Akşam", pron_ko: "Jeonyeok" },
        { en: "Week", ar: "أسبوع", ko: "주", tr: "Hafta", pron_ko: "Ju" },
        { en: "Month", ar: "شهر", ko: "달", tr: "Ay", pron_ko: "Dal" },
        { en: "Year", ar: "سنة", ko: "년", tr: "Yıl", pron_ko: "Nyeon" },
        { en: "Monday", ar: "الاثنين", ko: "월요일", tr: "Pazartesi", pron_ko: "Woryoil" },
        { en: "Tuesday", ar: "الثلاثاء", ko: "화요일", tr: "Salı", pron_ko: "Hwayoil" },
        { en: "Wednesday", ar: "الأربعاء", ko: "수요일", tr: "Çarşamba", pron_ko: "Suyoil" },
        { en: "Thursday", ar: "الخميس", ko: "목요일", tr: "Perşembe", pron_ko: "Mogyoil" },
        { en: "Friday", ar: "الجمعة", ko: "금요일", tr: "Cuma", pron_ko: "Geumyoil" },
        { en: "Saturday", ar: "السبت", ko: "토요일", tr: "Cumartesi", pron_ko: "Toyoil" },
        { en: "Sunday", ar: "الأحد", ko: "일요일", tr: "Pazar", pron_ko: "Iryoil" },
        { en: "Clock", ar: "ساعة", ko: "시계", tr: "Saat", pron_ko: "Sigye" }
    ]
};

// UI Translations
const uiTranslations = {
    en: {
        "app-title": "Language Master",
        "app-subtitle": "Learn vocabulary & test your skills!",
        "label-speak": "I speak:",
        "label-learn": "I want to learn:",
        "btn-next": "Next",
        "btn-prev": "Prev",
        "btn-flip": "Flip Card",
        "btn-quiz": "Take Quiz",
        "cat-greetings": "Greetings",
        "cat-numbers": "Numbers",
        "cat-colors": "Colors",
        "cat-family": "Family",
        "cat-food": "Food & Drink",
        "cat-travel": "Travel",
        "cat-animals": "Animals",
        "cat-verbs": "Verbs",
        "cat-adjectives": "Adjectives",
        "cat-time": "Time",
        "lang-en": "English",
        "lang-ar": "Arabic",
        "lang-ko": "Korean",
        "lang-tr": "Turkish",
        "quiz-title": "Quiz Time!",
        "quiz-score": "Score:",
        "btn-restart": "Restart Quiz",
        "btn-next-cat": "Next Unit",
        "btn-back": "Back to Flashcards",
        "msg-correct": "Correct! 🎉",
        "msg-wrong": "Wrong! 😢",
        "msg-finished": "Quiz Finished! You scored: "
    },
    ar: {
        "app-title": "أستاذ اللغات",
        "app-subtitle": "تعلم المفردات واختبر متهاراتك!",
        "label-speak": "أنا أتحدث:",
        "label-learn": "أريد أن أتعلم:",
        "btn-next": "التالي",
        "btn-prev": "السابق",
        "btn-flip": "اقلب البطاقة",
        "btn-quiz": "ابدأ الاختبار",
        "cat-greetings": "التحيات",
        "cat-numbers": "الأرقام",
        "cat-colors": "الألوان",
        "cat-family": "العائلة",
        "cat-food": "الطعام والشراب",
        "cat-travel": "السفر",
        "cat-animals": "الحيوانات",
        "cat-verbs": "الأفعال",
        "cat-adjectives": "الصفات",
        "cat-time": "الوقت",
        "lang-en": "إنجليزي",
        "lang-ar": "عربي",
        "lang-ko": "كوري",
        "lang-tr": "تركي",
        "quiz-title": "وقت الاختبار!",
        "quiz-score": "النتيجة:",
        "btn-restart": "أعد الاختبار",
        "btn-next-cat": "الوحدة التالية",
        "btn-back": "عودة للبطاقات",
        "msg-correct": "صحيح! 🎉",
        "msg-wrong": "خاطئ! 😢",
        "msg-finished": "انتهى الاختبار! نتيجتك: "
    },
    tr: {
        "app-title": "Dil Ustası",
        "app-subtitle": "Kelime öğren ve kendini sına!",
        "label-speak": "Konuştuğum dil:",
        "label-learn": "Öğrenmek istediğim:",
        "btn-next": "İleri",
        "btn-prev": "Geri",
        "btn-flip": "Çevir",
        "btn-quiz": "Sınav Ol",
        "cat-greetings": "Selamlaşma",
        "cat-numbers": "Sayılar",
        "cat-colors": "Renkler",
        "cat-family": "Aile",
        "cat-food": "Yiyecek & İçecek",
        "cat-travel": "Seyahat",
        "cat-animals": "Hayvanlar",
        "cat-verbs": "Fiiller",
        "cat-adjectives": "Sıfatlar",
        "cat-time": "Zaman",
        "lang-en": "İngilizce",
        "lang-ar": "Arapça",
        "lang-ko": "Korece",
        "lang-tr": "Türkçe",
        "quiz-title": "Sınav Zamanı!",
        "quiz-score": "Puan:",
        "btn-restart": "Tekrar Dene",
        "btn-next-cat": "Sonraki Ünite",
        "btn-back": "Geri Dön",
        "msg-correct": "Doğru! 🎉",
        "msg-wrong": "Yanlış! 😢",
        "msg-finished": "Sınav Bitti! Puanın: "
    },
    ko: {
        "app-title": "언어 마스터",
        "app-subtitle": "단어를 배우고 실력을 테스트하세요!",
        "label-speak": "나는 말합니다:",
        "label-learn": "배우고 싶어요:",
        "btn-next": "다음",
        "btn-prev": "이전",
        "btn-flip": "뒤집기",
        "btn-quiz": "퀴즈 풀기",
        "cat-greetings": "인사",
        "cat-numbers": "숫자",
        "cat-colors": "색깔",
        "cat-family": "가족",
        "cat-food": "음식",
        "cat-travel": "여행",
        "cat-animals": "동물",
        "cat-verbs": "동사",
        "cat-adjectives": "형용사",
        "cat-time": "시간",
        "lang-en": "영어",
        "lang-ar": "아랍어",
        "lang-ko": "한국어",
        "lang-tr": "터키어",
        "quiz-title": "퀴즈 시간!",
        "quiz-score": "점수:",
        "btn-restart": "다시 시작",
        "btn-next-cat": "다음 단원",
        "btn-back": "돌아가기",
        "msg-correct": "정답! 🎉",
        "msg-wrong": "오답! 😢",
        "msg-finished": "퀴즈 종료! 점수: "
    }
};

// Application State
let state = {
    sourceLang: 'en',
    targetLang: 'ko',
    category: 'greetings',
    index: 0,
    flipped: false,
    mode: 'learn', // 'learn' or 'quiz'
    quiz: {
        questions: [],
        currentQuestion: 0,
        score: 0
    }
};

// DOM Elements
const els = {
    card: document.getElementById('flashcard'),
    frontWord: document.getElementById('word-front'),
    backWord: document.getElementById('word-back'),
    frontLabel: document.getElementById('label-front'),
    backLabel: document.getElementById('label-back'),
    pronunciation: document.getElementById('pronunciation'),
    sourceSelect: document.getElementById('source-lang'),
    targetSelect: document.getElementById('target-lang'),
    categorySelect: document.getElementById('category-select'),
    btnNext: document.getElementById('next-btn'),
    btnPrev: document.getElementById('prev-btn'),
    btnFlip: document.getElementById('flip-btn'),
    btnQuiz: document.getElementById('quiz-btn'),
    html: document.documentElement,

    // Quiz Elements
    learnSection: document.querySelector('.card-container'),
    controlsSection: document.querySelector('.controls'),
    quizSection: document.getElementById('quiz-container'),
    quizQuestion: document.getElementById('quiz-question'),
    quizOptions: document.getElementById('quiz-options'),
    quizScore: document.getElementById('quiz-score'),

    // Quiz Result
    quizResult: document.getElementById('quiz-result'),
    finalScore: document.getElementById('final-score'),
    btnRestart: document.getElementById('restart-btn'),
    btnBack: document.getElementById('back-btn'),
    btnNextCat: document.getElementById('next-cat-btn'),

    msgFinished: document.getElementById('msg-finished')
};

// --- Logic ---

function updateUI() {
    if (state.sourceLang === 'ar') {
        els.html.setAttribute('dir', 'rtl');
        els.html.setAttribute('lang', 'ar');
    } else {
        els.html.setAttribute('dir', 'ltr');
        els.html.setAttribute('lang', state.sourceLang);
    }

    const t = uiTranslations[state.sourceLang];

    // Update all generic translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            // Special handling to preserve icons in buttons
            if (el.tagName === 'BUTTON' && el.querySelector('svg')) {
                const svg = el.querySelector('svg');
                // Temporarily detach svg, update text, reattach
                const svgClone = svg.cloneNode(true);
                el.innerText = t[key];
                // Insert space
                if (el.id === 'next-btn') {
                    el.innerText += " ";
                    el.appendChild(svgClone);
                } else {
                    el.prepend(" ");
                    el.prepend(svgClone);
                }
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Update Category Dropdown
    const categories = Object.keys(vocabData);
    els.categorySelect.innerHTML = '';
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = t[`cat-${cat}`] || cat;
        if (cat === state.category) option.selected = true;
        els.categorySelect.appendChild(option);
    });

    els.frontLabel.textContent = t[`lang-${state.sourceLang}`];
    els.backLabel.textContent = t[`lang-${state.targetLang}`];
}

function updateCard() {
    els.card.classList.remove('flipped');
    state.flipped = false;

    const data = vocabData[state.category][state.index];

    setTimeout(() => {
        els.frontWord.textContent = data[state.sourceLang];
        els.backWord.textContent = data[state.targetLang];

        if (state.targetLang === 'ko' && data.pron_ko) {
            els.pronunciation.textContent = `(${data.pron_ko})`;
            els.pronunciation.style.display = 'block';
        } else {
            els.pronunciation.style.display = 'none';
        }
    }, 200);
}

// --- Quiz Logic ---

function startQuiz() {
    state.mode = 'quiz';
    state.quiz.score = 0;
    state.quiz.currentQuestion = 0;

    // Generate Questions Pool
    const fullList = [...vocabData[state.category]];

    // Shuffle full list
    for (let i = fullList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [fullList[i], fullList[j]] = [fullList[j], fullList[i]];
    }

    // Take top 10 (or less if category is small)
    const quizItems = fullList.slice(0, 10);

    state.quiz.questions = quizItems.map(item => {
        // Generate distractors
        const otherItems = vocabData[state.category].filter(x => x !== item);
        const distractors = [];
        // Pick 3 random distractors
        while (distractors.length < 3 && otherItems.length > 0) {
            const index = Math.floor(Math.random() * otherItems.length);
            distractors.push(otherItems.splice(index, 1)[0]);
        }

        const options = [item, ...distractors];
        // Shuffle options
        options.sort(() => Math.random() - 0.5);

        return {
            target: item,
            options: options
        };
    });

    // Show Quiz UI
    els.learnSection.classList.add('hidden');
    els.controlsSection.classList.add('hidden');
    els.quizSection.classList.remove('hidden');
    els.quizResult.classList.add('hidden');

    renderQuestion();
}

function renderQuestion() {
    const q = state.quiz.questions[state.quiz.currentQuestion];
    const total = state.quiz.questions.length;
    const t = uiTranslations[state.sourceLang];

    els.quizScore.textContent = `${t['quiz-score']} ${state.quiz.score}/${total}`;
    els.quizQuestion.textContent = q.target[state.sourceLang];

    els.quizOptions.innerHTML = '';

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt[state.targetLang];

        btn.onclick = () => checkAnswer(opt, q.target, btn);
        els.quizOptions.appendChild(btn);
    });
}

function checkAnswer(selected, correct, btnElement) {
    const isCorrect = selected === correct;

    // Disable all buttons
    const buttons = els.quizOptions.querySelectorAll('button');
    buttons.forEach(b => b.disabled = true);

    if (isCorrect) {
        state.quiz.score++;
        btnElement.classList.add('correct');
    } else {
        btnElement.classList.add('wrong');
        // Highlight correct one
        buttons.forEach(b => {
            if (b.textContent === correct[state.targetLang]) {
                b.classList.add('correct');
            }
        });
    }

    // Next question delay
    setTimeout(() => {
        state.quiz.currentQuestion++;
        if (state.quiz.currentQuestion < state.quiz.questions.length) {
            renderQuestion();
        } else {
            showResult();
        }
    }, 1200);
}

function showResult() {
    const t = uiTranslations[state.sourceLang];
    els.quizSection.classList.add('hidden');
    els.quizResult.classList.remove('hidden');

    els.msgFinished.textContent = t['msg-finished'];
    els.finalScore.textContent = `${state.quiz.score} / ${state.quiz.questions.length}`;
}

function closeQuiz() {
    state.mode = 'learn';
    els.quizResult.classList.add('hidden');
    els.quizSection.classList.add('hidden');
    els.learnSection.classList.remove('hidden');
    els.controlsSection.classList.remove('hidden');
}

function nextCategory() {
    const categories = Object.keys(vocabData);
    const currentIndex = categories.indexOf(state.category);
    const nextIndex = (currentIndex + 1) % categories.length;
    state.category = categories[nextIndex];
    state.index = 0;

    closeQuiz();
    updateUI(); // Updates dropdown selection
    updateCard();
}

// --- Event Handlers ---

function onLanguageChange() {
    state.sourceLang = els.sourceSelect.value;
    state.targetLang = els.targetSelect.value;

    if (state.sourceLang === state.targetLang) {
        if (state.sourceLang === 'en') state.targetLang = 'ko';
        else state.targetLang = 'en';
        els.targetSelect.value = state.targetLang;
    }

    updateUI();
    updateCard();
}

function flipCard() {
    els.card.classList.toggle('flipped');
    state.flipped = !state.flipped;
}

function next() {
    state.index = (state.index + 1) % vocabData[state.category].length;
    updateCard();
}

function prev() {
    state.index = (state.index - 1 + vocabData[state.category].length) % vocabData[state.category].length;
    updateCard();
}

// --- Listeners ---
els.sourceSelect.addEventListener('change', onLanguageChange);
els.targetSelect.addEventListener('change', onLanguageChange);
els.categorySelect.addEventListener('change', (e) => {
    state.category = e.target.value;
    state.index = 0;
    updateCard();
});

els.card.addEventListener('click', flipCard);
els.btnFlip.addEventListener('click', flipCard);
els.btnNext.addEventListener('click', next);
els.btnPrev.addEventListener('click', prev);

els.btnQuiz.addEventListener('click', startQuiz);
els.btnRestart.addEventListener('click', startQuiz);
els.btnBack.addEventListener('click', closeQuiz);
if (els.btnNextCat) els.btnNextCat.addEventListener('click', nextCategory);

// Keyboard
document.addEventListener('keydown', (e) => {
    if (state.mode === 'learn') {
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
        if (e.key === ' ' || e.key === 'Enter') flipCard();
    }
});

// Init
updateUI();
updateCard();
