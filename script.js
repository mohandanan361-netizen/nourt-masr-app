/* =====================================================
   نوّرت مصر — الملف الرئيسي
   ===================================================== */

'use strict';

/* ====================== اللغات ====================== */
const LANGUAGES = [
  { code: 'ar', flag: '🇪🇬', native: 'العربية',  dir: 'rtl' },
  { code: 'en', flag: '🇬🇧', native: 'English',  dir: 'ltr' },
  { code: 'fr', flag: '🇫🇷', native: 'Français', dir: 'ltr' },
  { code: 'de', flag: '🇩🇪', native: 'Deutsch',  dir: 'ltr' },
  { code: 'es', flag: '🇪🇸', native: 'Español',  dir: 'ltr' },
  { code: 'it', flag: '🇮🇹', native: 'Italiano', dir: 'ltr' },
  { code: 'ru', flag: '🇷🇺', native: 'Русский',  dir: 'ltr' },
  { code: 'zh', flag: '🇨🇳', native: '中文',      dir: 'ltr' },
  { code: 'ja', flag: '🇯🇵', native: '日本語',    dir: 'ltr' },
  { code: 'ko', flag: '🇰🇷', native: '한국어',    dir: 'ltr' },
  { code: 'pt', flag: '🇵🇹', native: 'Português',dir: 'ltr' },
  { code: 'tr', flag: '🇹🇷', native: 'Türkçe',   dir: 'ltr' },
  { code: 'hi', flag: '🇮🇳', native: 'हिन्दी',    dir: 'ltr' },
  { code: 'nl', flag: '🇳🇱', native: 'Nederlands',dir: 'ltr' },
  { code: 'el', flag: '🇬🇷', native: 'Ελληνικά',  dir: 'ltr' },
  { code: 'pl', flag: '🇵🇱', native: 'Polski',   dir: 'ltr' },
];

const I18N = {
  ar: {
    doc_title: 'نوّرت مصر | دليلك السياحي الذكي',
    brand: 'نوّرت مصر', brand_sub: 'Nourt Masr', preloader_sub: 'جاري تجهيز رحلتك…',
    nav_home: 'الرئيسية', nav_taxi: 'اطلب عربية', nav_places: 'أماكن سياحية',
    nav_hotels: 'الفنادق', nav_govs: 'المحافظات', nav_bookings: 'حجوزاتي', nav_order: '🚕 اطلب الآن',
    hero_pill: '🇪🇬 أهلاً بيك في أم الدنيا', hero_title_1: 'نوّرت', hero_title_2: 'مصر',
    hero_sub: 'رحلتك تبدأ من هنا',
    hero_desc: 'عربية توصلك لباب الفندق، أجمل الأماكن السياحية في الـ 27 محافظة، وحجز فنادق بأسعار مرتّبة من الأرخص للأغلى — كل ده في تطبيق واحد.',
    hero_search_ph: 'ابحث عن محافظة، مكان سياحي، أو فندق…', hero_btn_search: 'ابحث',
    hero_btn_taxi: '🚕 اطلب عربية دلوقتي', hero_btn_hotels: '🏨 شوف الفنادق',
    hero_p1: 'عربيات في كل المحافظات', hero_p2: 'أسعار واضحة بدون مفاجآت', hero_p3: 'دعم على مدار الساعة',
    hero_card_title: 'رحلتك القادمة', trips_today: 'رحلة اليوم', bookings_today: 'حجز فندق',
    chip_rating: '⭐ 4.9 تقييم', chip_support: '🕒 دعم 24/7',
    services_pill: 'خدماتنا', services_title: 'كل حاجة محتاجها في رحلتك',
    services_desc: 'من لحظة وصولك للمطار لحد آخر يوم في رحلتك — إحنا معاك.',
    feat1_t: 'عربية توصلك فين ما كنت', feat1_d: 'اختار نوع العربية، حدّد مكانك ووجهتك، وهي جاية لك في دقائق بأسعار واضحة.', feat1_tag: '6 أنواع عربيات',
    feat2_t: 'أماكن تستاهل الزيارة', feat2_d: 'أكثر من 45 مكان سياحي في كل محافظات مصر، مع التقييمات وسعر الدخول.', feat2_tag: 'مصنّفة وسهلة الفلترة',
    feat3_t: 'احجز فندقك من الأرخص للأغلى', feat3_d: 'فلتر حسب المحافظة وعدد النجوم، ورتّب الأسعار تصاعدي أو تنازلي.', feat3_tag: 'حساب تلقائي للإجمالي',
    feat4_t: 'الـ 27 محافظة كلها', feat4_d: 'من الإسكندرية لأسوان، ومن سيوة للغردقة — استكشف كل محافظة.', feat4_tag: 'تغطية كاملة',
    feat5_t: 'حجوزاتك محفوظة', feat5_d: 'كل رحلة أو حجز فندق بيتسجل تلقائيًا في "حجوزاتي" على جهازك.', feat5_tag: 'يعمل بدون إنترنت',
    feat6_t: 'وضع ليلي مريح للعين', feat6_d: 'بدّل بين الوضع النهاري والليلي بضغطة واحدة والموقع بيفتكر اختيارك.', feat6_tag: 'تصميم مريح',
    taxi_pill: '🚕 خدمة التوصيل', taxi_title: 'اطلب عربية تجيلك لحد عندك',
    taxi_desc: 'حدّد مكان الانطلاق والوجهة، واختار نوع العربية، وإحنا نحسبلك السعر.',
    taxi_name: 'الاسم', taxi_phone: 'رقم الموبايل', taxi_from_gov: 'محافظة الانطلاق',
    taxi_from_spot: 'نقطة الانطلاق', taxi_to_gov: 'محافظة الوصول', taxi_to_spot: 'نقطة الوصول',
    taxi_car: 'نوع العربية', taxi_date: 'تاريخ الرحلة', taxi_time: 'الوقت', taxi_pax: 'عدد الركاب',
    taxi_notes: 'ملاحظات إضافية', taxi_submit: '🚕 احسب السعر واطلب العربية',
    taxi_hint: '🔒 بياناتك محفوظة على جهازك فقط.', taxi_empty_t: 'لسه مطلبش عربية',
    taxi_empty_d: 'املأ البيانات على الشمال واضغط احسب السعر وهتلاقي كل التفاصيل هنا.',
    taxi_ph_name: 'أحمد محمود', taxi_ph_from: 'مثال: مطار القاهرة - صالة 3',
    taxi_ph_to: 'مثال: فندق مينا هاوس - الهرم', taxi_ph_notes: 'أي تفاصيل إضافية…',
    places_pill: '🏛️ اكتشف', places_title: 'أماكن سياحية تستاهل الزيارة',
    places_desc: 'فلتر حسب المحافظة أو التصنيف، واعرف سعر الدخول التقريبي.',
    places_search_ph: 'ابحث باسم المكان…',
    hotels_pill: '🏨 الإقامة', hotels_title: 'احجز فندقك بأفضل سعر',
    hotels_desc: 'الأسعار مرتبة من الأرخص للأغلى افتراضيًا.', hotels_search_ph: 'ابحث باسم الفندق…',
    govs_pill: '🗺️ الخريطة', govs_title: 'محافظات مصر الـ 27',
    govs_desc: 'دوس على أي محافظة تشوف أماكنها السياحية والفنادق المتاحة فيها.',
    bookings_pill: '💾 محفوظاتك', bookings_title: 'حجوزاتي',
    bookings_desc: 'كل رحلاتك وحجوزاتك محفوظة على جهازك.',
    bookings_empty_t: 'لسه مفيش حجوزات', bookings_empty_d: 'ابدأ بطلب عربية أو احجز فندق وهتلاقي كل حاجة هنا.',
    footer_about: 'تطبيق سياحي شامل يوصلك لأي مكان في مصر.',
    footer_links: 'روابط سريعة', footer_services: 'خدمات', footer_contact: 'تواصل معنا',
    footer_s1: 'توصيل من المطار', footer_s2: 'رحلات يومية', footer_s3: 'حجز فنادق',
    footer_loc: '📍 القاهرة، مصر', footer_rights: 'نوّرت مصر — كل الحقوق محفوظة.',
    all_govs: 'كل المحافظات', all_cats: 'كل التصنيفات', all_stars: 'كل التصنيفات',
    sort_rating: 'الأعلى تقييمًا', sort_price_asc: 'الأرخص دخولًا', sort_price_desc: 'الأغلى دخولًا', sort_name: 'أبجديًا',
    hotel_sort_asc: 'السعر: من الأرخص للأغلى', hotel_sort_desc: 'السعر: من الأغلى للأرخص', hotel_sort_stars: 'الأكثر نجومًا',
    stars_5: '5 نجوم', stars_4: '4 نجوم', stars_3: '3 نجوم',
    reset: '↺ إعادة ضبط', no_results: 'مفيش نتائج مطابقة',
    filter_all: 'الكل', filter_taxi: '🚕 رحلات', filter_hotel: '🏨 فنادق', filter_place: '⭐ مفضلة',
    clear_all: '🗑️ مسح الكل',
    book: 'احجز الآن', details: 'التفاصيل', add_fav: '⭐ أضف للمفضلة',
    search_govs: 'المحافظات', search_places: 'أماكن سياحية', search_hotels: 'الفنادق',
    search_none: 'مفيش نتائج مطابقة',
    confirm: 'تأكيد الحجز', call: 'اتصل', free: 'مجاني', per_night: 'ج.م / ليلة', currency: 'ج.م',
    km: 'كم', min: 'دقيقة',
    msg_taxi_ok: 'تم حساب السعر بنجاح ✅', msg_booking_ok: 'تم تأكيد الحجز',
    msg_fav_ok: 'تمت الإضافة للمفضلة ⭐', msg_deleted: 'تم حذف الحجز',
    msg_reset_filters: 'تم إعادة ضبط الفلاتر',
    distance: 'المسافة', duration: 'المدة المتوقعة', car_type: 'نوع العربية',
    total: 'الإجمالي التقديري', driver: 'السواق', trip_from: 'من', trip_to: 'إلى',
    per_person: 'للفرد', country: 'مصر',
    days: 'أيام', nights: 'ليالي',
  },
  en: {
    doc_title: 'Nourt Masr | Your Smart Egyptian Travel Guide',
    brand: 'Nourt Masr', brand_sub: 'Visit Egypt', preloader_sub: 'Preparing your trip…',
    nav_home: 'Home', nav_taxi: 'Request Car', nav_places: 'Attractions', nav_hotels: 'Hotels',
    nav_govs: 'Governorates', nav_bookings: 'My Bookings', nav_order: '🚕 Order Now',
    hero_pill: '🇪🇬 Welcome to the Mother of the World', hero_title_1: 'Welcome to', hero_title_2: 'Egypt',
    hero_sub: 'Your journey starts here',
    hero_desc: 'Book a car to your hotel door, explore the best attractions in all 27 governorates, and reserve hotels sorted from cheapest to most expensive — all in one app.',
    hero_search_ph: 'Search governorates, attractions, hotels…', hero_btn_search: 'Search',
    hero_btn_taxi: '🚕 Request a Car Now', hero_btn_hotels: '🏨 Browse Hotels',
    hero_p1: 'Cars in every governorate', hero_p2: 'Clear prices, no surprises', hero_p3: 'Support 24/7',
    hero_card_title: 'Your Next Trip', trips_today: 'Trips today', bookings_today: 'Hotel bookings',
    chip_rating: '⭐ 4.9 rating', chip_support: '🕒 24/7 support',
    services_pill: 'Our Services', services_title: 'Everything you need for your trip',
    services_desc: 'From airport arrival to your last day — we are with you.',
    feat1_t: 'A car to your door', feat1_d: 'Choose a car type, set pickup and dropoff, and it arrives within minutes with clear prices.', feat1_tag: '6 car types',
    feat2_t: 'Places worth visiting', feat2_d: 'Over 45 attractions across Egypt with ratings and entry prices.', feat2_tag: 'Categorized & filterable',
    feat3_t: 'Book from cheapest to most expensive', feat3_d: 'Filter by governorate and stars, sort prices ascending or descending.', feat3_tag: 'Automatic total',
    feat4_t: 'All 27 governorates', feat4_d: 'From Alexandria to Aswan, from Siwa to Hurghada — explore every governorate.', feat4_tag: 'Full coverage',
    feat5_t: 'Your bookings are saved', feat5_d: 'Every trip or hotel booking is auto-saved to "My Bookings" on your device.', feat5_tag: 'Works offline',
    feat6_t: 'Eye-comfortable dark mode', feat6_d: 'Switch between light and dark with one click. We remember your choice.', feat6_tag: 'Comfortable design',
    taxi_pill: '🚕 Ride Service', taxi_title: 'Request a car to your location',
    taxi_desc: 'Set pickup and dropoff, choose a car type, and we calculate the price.',
    taxi_name: 'Name', taxi_phone: 'Mobile Number', taxi_from_gov: 'Pickup Governorate',
    taxi_from_spot: 'Pickup Point', taxi_to_gov: 'Dropoff Governorate', taxi_to_spot: 'Dropoff Point',
    taxi_car: 'Car Type', taxi_date: 'Trip Date', taxi_time: 'Time', taxi_pax: 'Passengers',
    taxi_notes: 'Additional Notes', taxi_submit: '🚕 Calculate & Request Car',
    taxi_hint: '🔒 Your data is stored only on your device.', taxi_empty_t: 'No car requested yet',
    taxi_empty_d: 'Fill in the form and click calculate — all details will appear here.',
    taxi_ph_name: 'John Smith', taxi_ph_from: 'e.g. Cairo Airport - Terminal 3',
    taxi_ph_to: 'e.g. Mena House Hotel - Giza', taxi_ph_notes: 'Any additional details…',
    places_pill: '🏛️ Discover', places_title: 'Attractions worth visiting',
    places_desc: 'Filter by governorate or category, and see entry prices.',
    places_search_ph: 'Search by name…',
    hotels_pill: '🏨 Accommodation', hotels_title: 'Book your hotel at the best price',
    hotels_desc: 'Prices sorted from cheapest to most expensive by default.', hotels_search_ph: 'Search by hotel name…',
    govs_pill: '🗺️ Map', govs_title: "Egypt's 27 Governorates",
    govs_desc: 'Click any governorate to see its attractions and hotels.',
    bookings_pill: '💾 Saved', bookings_title: 'My Bookings',
    bookings_desc: 'All your trips and bookings saved on your device.',
    bookings_empty_t: 'No bookings yet', bookings_empty_d: 'Request a car or book a hotel — everything shows here.',
    footer_about: 'A comprehensive travel app that takes you anywhere in Egypt.',
    footer_links: 'Quick Links', footer_services: 'Services', footer_contact: 'Contact Us',
    footer_s1: 'Airport pickup', footer_s2: 'Daily tours', footer_s3: 'Hotel booking',
    footer_loc: '📍 Cairo, Egypt', footer_rights: 'Nourt Masr — All rights reserved.',
    all_govs: 'All Governorates', all_cats: 'All Categories', all_stars: 'All Ratings',
    sort_rating: 'Top Rated', sort_price_asc: 'Cheapest Entry', sort_price_desc: 'Most Expensive', sort_name: 'Alphabetical',
    hotel_sort_asc: 'Price: Low to High', hotel_sort_desc: 'Price: High to Low', hotel_sort_stars: 'Most Stars',
    stars_5: '5 Stars', stars_4: '4 Stars', stars_3: '3 Stars',
    reset: '↺ Reset', no_results: 'No matching results',
    filter_all: 'All', filter_taxi: '🚕 Trips', filter_hotel: '🏨 Hotels', filter_place: '⭐ Favorites',
    clear_all: '🗑️ Clear All',
    book: 'Book Now', details: 'Details', add_fav: '⭐ Add to Favorites',
    search_govs: 'Governorates', search_places: 'Attractions', search_hotels: 'Hotels',
    search_none: 'No matching results',
    confirm: 'Confirm Booking', call: 'Call', free: 'Free', per_night: 'EGP / night', currency: 'EGP',
    km: 'km', min: 'min',
    msg_taxi_ok: 'Price calculated successfully ✅', msg_booking_ok: 'Booking confirmed',
    msg_fav_ok: 'Added to favorites ⭐', msg_deleted: 'Booking removed',
    msg_reset_filters: 'Filters reset',
    distance: 'Distance', duration: 'Duration', car_type: 'Car Type',
    total: 'Estimated Total', driver: 'Driver', trip_from: 'From', trip_to: 'To',
    per_person: 'per person', country: 'Egypt',
    days: 'days', nights: 'nights',
  },
  fr: {
    doc_title: 'Nourt Masr | Votre guide touristique égyptien',
    brand: 'Nourt Masr', brand_sub: 'Visitez l\'Égypte', preloader_sub: 'Préparation de votre voyage…',
    nav_home: 'Accueil', nav_taxi: 'Réserver Voiture', nav_places: 'Attractions', nav_hotels: 'Hôtels',
    nav_govs: 'Gouvernorats', nav_bookings: 'Mes Réservations', nav_order: '🚕 Commander',
    hero_pill: '🇪🇬 Bienvenue en Égypte', hero_title_1: 'Bienvenue en', hero_title_2: 'Égypte',
    hero_sub: 'Votre voyage commence ici',
    hero_desc: 'Réservez une voiture jusqu\'à votre hôtel, explorez les meilleures attractions dans les 27 gouvernorats, et réservez des hôtels triés du moins cher au plus cher.',
    hero_search_ph: 'Rechercher gouvernorats, attractions, hôtels…', hero_btn_search: 'Rechercher',
    hero_btn_taxi: '🚕 Réserver une voiture', hero_btn_hotels: '🏨 Voir les hôtels',
    hero_p1: 'Voitures dans chaque gouvernorat', hero_p2: 'Prix clairs, sans surprises', hero_p3: 'Support 24/7',
    hero_card_title: 'Votre prochain voyage', trips_today: 'Trajets aujourd\'hui', bookings_today: 'Réservations',
    chip_rating: '⭐ Note 4.9', chip_support: '🕒 Support 24/7',
    services_pill: 'Nos services', services_title: 'Tout ce dont vous avez besoin',
    services_desc: 'De l\'arrivée à l\'aéroport au dernier jour — nous sommes avec vous.',
    feat1_t: 'Une voiture à votre porte', feat1_d: 'Choisissez un type de voiture, définissez les points, elle arrive en minutes.', feat1_tag: '6 types de voitures',
    feat2_t: 'Des lieux à visiter', feat2_d: 'Plus de 45 attractions en Égypte avec notes et prix d\'entrée.', feat2_tag: 'Catégorisé et filtrable',
    feat3_t: 'Réservez du moins cher au plus cher', feat3_d: 'Filtrez par gouvernorat et étoiles, triez par prix croissant ou décroissant.', feat3_tag: 'Total automatique',
    feat4_t: 'Les 27 gouvernorats', feat4_d: 'D\'Alexandrie à Assouan, de Siwa à Hurghada — explorez chaque région.', feat4_tag: 'Couverture complète',
    feat5_t: 'Vos réservations sauvegardées', feat5_d: 'Chaque trajet ou réservation est sauvegardé automatiquement.', feat5_tag: 'Fonctionne hors ligne',
    feat6_t: 'Mode sombre confortable', feat6_d: 'Basculez entre clair et sombre en un clic. Nous gardons votre choix.', feat6_tag: 'Design confortable',
    taxi_pill: '🚕 Service de transport', taxi_title: 'Commandez une voiture à votre emplacement',
    taxi_desc: 'Définissez les points de départ et d\'arrivée, choisissez un type de voiture.',
    taxi_name: 'Nom', taxi_phone: 'Téléphone', taxi_from_gov: 'Gouvernorat de départ',
    taxi_from_spot: 'Point de départ', taxi_to_gov: 'Gouvernorat d\'arrivée', taxi_to_spot: 'Point d\'arrivée',
    taxi_car: 'Type de voiture', taxi_date: 'Date', taxi_time: 'Heure', taxi_pax: 'Passagers',
    taxi_notes: 'Notes supplémentaires', taxi_submit: '🚕 Calculer et commander',
    taxi_hint: '🔒 Vos données restent sur votre appareil.', taxi_empty_t: 'Aucune voiture commandée',
    taxi_empty_d: 'Remplissez le formulaire et cliquez sur calculer.',
    taxi_ph_name: 'Jean Dupont', taxi_ph_from: 'Ex: Aéroport du Caire - Terminal 3',
    taxi_ph_to: 'Ex: Hôtel Mena House - Gizeh', taxi_ph_notes: 'Détails supplémentaires…',
    places_pill: '🏛️ Découvrir', places_title: 'Lieux à visiter',
    places_desc: 'Filtrez par gouvernorat ou catégorie, et voyez les prix d\'entrée.',
    places_search_ph: 'Rechercher par nom…',
    hotels_pill: '🏨 Hébergement', hotels_title: 'Réservez au meilleur prix',
    hotels_desc: 'Prix triés du moins cher au plus cher par défaut.', hotels_search_ph: 'Rechercher par nom d\'hôtel…',
    govs_pill: '🗺️ Carte', govs_title: 'Les 27 gouvernorats d\'Égypte',
    govs_desc: 'Cliquez sur un gouvernorat pour voir ses attractions et hôtels.',
    bookings_pill: '💾 Enregistré', bookings_title: 'Mes Réservations',
    bookings_desc: 'Tous vos voyages et réservations sur votre appareil.',
    bookings_empty_t: 'Aucune réservation', bookings_empty_d: 'Commandez une voiture ou réservez un hôtel.',
    footer_about: 'Une application de voyage complète pour l\'Égypte.',
    footer_links: 'Liens rapides', footer_services: 'Services', footer_contact: 'Contact',
    footer_s1: 'Transfert aéroport', footer_s2: 'Excursions', footer_s3: 'Réservation d\'hôtel',
    footer_loc: '📍 Le Caire, Égypte', footer_rights: 'Nourt Masr — Tous droits réservés.',
    all_govs: 'Tous les gouvernorats', all_cats: 'Toutes catégories', all_stars: 'Toutes étoiles',
    sort_rating: 'Mieux notés', sort_price_asc: 'Entrée la moins chère', sort_price_desc: 'Plus cher', sort_name: 'Alphabétique',
    hotel_sort_asc: 'Prix : croissant', hotel_sort_desc: 'Prix : décroissant', hotel_sort_stars: 'Plus d\'étoiles',
    stars_5: '5 étoiles', stars_4: '4 étoiles', stars_3: '3 étoiles',
    reset: '↺ Réinitialiser', no_results: 'Aucun résultat',
    filter_all: 'Tout', filter_taxi: '🚕 Trajets', filter_hotel: '🏨 Hôtels', filter_place: '⭐ Favoris',
    clear_all: '🗑️ Tout effacer',
    book: 'Réserver', details: 'Détails', add_fav: '⭐ Ajouter aux favoris',
    search_govs: 'Gouvernorats', search_places: 'Attractions', search_hotels: 'Hôtels',
    search_none: 'Aucun résultat',
    confirm: 'Confirmer', call: 'Appeler', free: 'Gratuit', per_night: 'EGP / nuit', currency: 'EGP',
    km: 'km', min: 'min',
    msg_taxi_ok: 'Prix calculé ✅', msg_booking_ok: 'Réservation confirmée',
    msg_fav_ok: 'Ajouté aux favoris ⭐', msg_deleted: 'Réservation supprimée',
    msg_reset_filters: 'Filtres réinitialisés',
    distance: 'Distance', duration: 'Durée', car_type: 'Type de voiture',
    total: 'Total estimé', driver: 'Chauffeur', trip_from: 'De', trip_to: 'À',
    per_person: 'par personne', country: 'Égypte',
    days: 'jours', nights: 'nuits',
  },
  de: {
    doc_title: 'Nourt Masr | Ihr intelligenter Ägypten-Reiseführer',
    brand: 'Nourt Masr', brand_sub: 'Besuchen Sie Ägypten', preloader_sub: 'Ihre Reise wird vorbereitet…',
    nav_home: 'Startseite', nav_taxi: 'Auto bestellen', nav_places: 'Sehenswürdigkeiten', nav_hotels: 'Hotels',
    nav_govs: 'Gouvernements', nav_bookings: 'Meine Buchungen', nav_order: '🚕 Jetzt bestellen',
    hero_pill: '🇪🇬 Willkommen in Ägypten', hero_title_1: 'Willkommen in', hero_title_2: 'Ägypten',
    hero_sub: 'Ihre Reise beginnt hier',
    hero_desc: 'Buchen Sie ein Auto bis zur Hoteltür, erkunden Sie die besten Attraktionen in allen 27 Gouvernements und buchen Sie Hotels vom günstigsten zum teuersten.',
    hero_search_ph: 'Gouvernements, Attraktionen, Hotels suchen…', hero_btn_search: 'Suchen',
    hero_btn_taxi: '🚕 Auto bestellen', hero_btn_hotels: '🏨 Hotels ansehen',
    hero_p1: 'Autos in jedem Gouvernement', hero_p2: 'Klare Preise, keine Überraschungen', hero_p3: '24/7 Support',
    hero_card_title: 'Ihre nächste Reise', trips_today: 'Fahrten heute', bookings_today: 'Hotelbuchungen',
    chip_rating: '⭐ 4.9 Bewertung', chip_support: '🕒 24/7 Support',
    services_pill: 'Unsere Dienste', services_title: 'Alles was Sie brauchen',
    services_desc: 'Von der Ankunft am Flughafen bis zum letzten Tag — wir sind bei Ihnen.',
    feat1_t: 'Ein Auto bis zu Ihrer Tür', feat1_d: 'Wählen Sie einen Autotyp, legen Sie die Punkte fest.', feat1_tag: '6 Autotypen',
    feat2_t: 'Sehenswerte Orte', feat2_d: 'Über 45 Attraktionen in ganz Ägypten mit Bewertungen und Eintrittspreisen.', feat2_tag: 'Kategorisiert',
    feat3_t: 'Vom günstigsten zum teuersten', feat3_d: 'Filtern Sie nach Gouvernement und Sternen.', feat3_tag: 'Automatische Summe',
    feat4_t: 'Alle 27 Gouvernements', feat4_d: 'Von Alexandria bis Assuan, von Siwa bis Hurghada.', feat4_tag: 'Vollständige Abdeckung',
    feat5_t: 'Ihre Buchungen gespeichert', feat5_d: 'Jede Fahrt oder Buchung wird automatisch gespeichert.', feat5_tag: 'Offline verfügbar',
    feat6_t: 'Augenschonender Dunkelmodus', feat6_d: 'Wechseln Sie mit einem Klick zwischen Hell und Dunkel.', feat6_tag: 'Komfortables Design',
    taxi_pill: '🚕 Fahrdienst', taxi_title: 'Bestellen Sie ein Auto zu Ihrem Standort',
    taxi_desc: 'Legen Sie Abhol- und Zielort fest, wählen Sie einen Autotyp.',
    taxi_name: 'Name', taxi_phone: 'Handynummer', taxi_from_gov: 'Abhol-Gouvernement',
    taxi_from_spot: 'Abholpunkt', taxi_to_gov: 'Ziel-Gouvernement', taxi_to_spot: 'Zielpunkt',
    taxi_car: 'Autotyp', taxi_date: 'Datum', taxi_time: 'Uhrzeit', taxi_pax: 'Passagiere',
    taxi_notes: 'Zusätzliche Notizen', taxi_submit: '🚕 Berechnen & bestellen',
    taxi_hint: '🔒 Ihre Daten bleiben auf Ihrem Gerät.', taxi_empty_t: 'Noch kein Auto bestellt',
    taxi_empty_d: 'Füllen Sie das Formular aus und klicken Sie auf Berechnen.',
    taxi_ph_name: 'Max Mustermann', taxi_ph_from: 'z.B. Flughafen Kairo - Terminal 3',
    taxi_ph_to: 'z.B. Mena House Hotel - Gizeh', taxi_ph_notes: 'Zusätzliche Details…',
    places_pill: '🏛️ Entdecken', places_title: 'Sehenswerte Orte',
    places_desc: 'Filtern Sie nach Gouvernement oder Kategorie, sehen Sie Eintrittspreise.',
    places_search_ph: 'Nach Name suchen…',
    hotels_pill: '🏨 Unterkunft', hotels_title: 'Buchen Sie zum besten Preis',
    hotels_desc: 'Preise standardmäßig vom günstigsten zum teuersten sortiert.', hotels_search_ph: 'Nach Hotelnamen suchen…',
    govs_pill: '🗺️ Karte', govs_title: 'Ägyptens 27 Gouvernements',
    govs_desc: 'Klicken Sie auf ein Gouvernement, um Attraktionen und Hotels zu sehen.',
    bookings_pill: '💾 Gespeichert', bookings_title: 'Meine Buchungen',
    bookings_desc: 'Alle Reisen und Buchungen auf Ihrem Gerät gespeichert.',
    bookings_empty_t: 'Noch keine Buchungen', bookings_empty_d: 'Bestellen Sie ein Auto oder buchen Sie ein Hotel.',
    footer_about: 'Eine umfassende Reise-App für ganz Ägypten.',
    footer_links: 'Schnellzugriff', footer_services: 'Dienste', footer_contact: 'Kontakt',
    footer_s1: 'Flughafentransfer', footer_s2: 'Tägliche Touren', footer_s3: 'Hotelbuchung',
    footer_loc: '📍 Kairo, Ägypten', footer_rights: 'Nourt Masr — Alle Rechte vorbehalten.',
    all_govs: 'Alle Gouvernements', all_cats: 'Alle Kategorien', all_stars: 'Alle Sterne',
    sort_rating: 'Bestbewertet', sort_price_asc: 'Günstigster Eintritt', sort_price_desc: 'Teuerster', sort_name: 'Alphabetisch',
    hotel_sort_asc: 'Preis: aufsteigend', hotel_sort_desc: 'Preis: absteigend', hotel_sort_stars: 'Meiste Sterne',
    stars_5: '5 Sterne', stars_4: '4 Sterne', stars_3: '3 Sterne',
    reset: '↺ Zurücksetzen', no_results: 'Keine Treffer',
    filter_all: 'Alle', filter_taxi: '🚕 Fahrten', filter_hotel: '🏨 Hotels', filter_place: '⭐ Favoriten',
    clear_all: '🗑️ Alles löschen',
    book: 'Buchen', details: 'Details', add_fav: '⭐ Zu Favoriten',
    search_govs: 'Gouvernements', search_places: 'Attraktionen', search_hotels: 'Hotels',
    search_none: 'Keine Treffer',
    confirm: 'Bestätigen', call: 'Anrufen', free: 'Kostenlos', per_night: 'EGP / Nacht', currency: 'EGP',
    km: 'km', min: 'Min',
    msg_taxi_ok: 'Preis berechnet ✅', msg_booking_ok: 'Buchung bestätigt',
    msg_fav_ok: 'Zu Favoriten hinzugefügt ⭐', msg_deleted: 'Buchung gelöscht',
    msg_reset_filters: 'Filter zurückgesetzt',
    distance: 'Entfernung', duration: 'Dauer', car_type: 'Autotyp',
    total: 'Geschätzte Summe', driver: 'Fahrer', trip_from: 'Von', trip_to: 'Nach',
    per_person: 'pro Person', country: 'Ägypten',
    days: 'Tage', nights: 'Nächte',
  },
  es: {
    doc_title: 'Nourt Masr | Tu guía turística inteligente de Egipto',
    brand: 'Nourt Masr', brand_sub: 'Visita Egipto', preloader_sub: 'Preparando tu viaje…',
    nav_home: 'Inicio', nav_taxi: 'Pedir Coche', nav_places: 'Atracciones', nav_hotels: 'Hoteles',
    nav_govs: 'Gobernaciones', nav_bookings: 'Mis Reservas', nav_order: '🚕 Pedir Ahora',
    hero_pill: '🇪🇬 Bienvenido a Egipto', hero_title_1: 'Bienvenido a', hero_title_2: 'Egipto',
    hero_sub: 'Tu viaje comienza aquí',
    hero_desc: 'Reserva un coche hasta la puerta de tu hotel, explora las mejores atracciones en las 27 gobernaciones, y reserva hoteles del más barato al más caro.',
    hero_search_ph: 'Buscar gobernaciones, atracciones, hoteles…', hero_btn_search: 'Buscar',
    hero_btn_taxi: '🚕 Pedir Coche Ahora', hero_btn_hotels: '🏨 Ver Hoteles',
    hero_p1: 'Coches en cada gobernación', hero_p2: 'Precios claros, sin sorpresas', hero_p3: 'Soporte 24/7',
    hero_card_title: 'Tu Próximo Viaje', trips_today: 'Viajes hoy', bookings_today: 'Reservas de hotel',
    chip_rating: '⭐ Valoración 4.9', chip_support: '🕒 Soporte 24/7',
    services_pill: 'Nuestros Servicios', services_title: 'Todo lo que necesitas',
    services_desc: 'Desde tu llegada al aeropuerto hasta el último día.',
    feat1_t: 'Un coche a tu puerta', feat1_d: 'Elige un tipo de coche, define los puntos, llega en minutos.', feat1_tag: '6 tipos de coche',
    feat2_t: 'Lugares que visitar', feat2_d: 'Más de 45 atracciones en Egipto con valoraciones y precios.', feat2_tag: 'Categorizado',
    feat3_t: 'Reserva del más barato al más caro', feat3_d: 'Filtra por gobernación y estrellas.', feat3_tag: 'Total automático',
    feat4_t: 'Las 27 gobernaciones', feat4_d: 'De Alejandría a Asuán, de Siwa a Hurgada.', feat4_tag: 'Cobertura completa',
    feat5_t: 'Tus reservas guardadas', feat5_d: 'Cada viaje o reserva se guarda automáticamente.', feat5_tag: 'Funciona sin conexión',
    feat6_t: 'Modo oscuro cómodo', feat6_d: 'Cambia entre claro y oscuro con un clic.', feat6_tag: 'Diseño cómodo',
    taxi_pill: '🚕 Servicio de Transporte', taxi_title: 'Pide un coche a tu ubicación',
    taxi_desc: 'Define los puntos de origen y destino, elige un tipo de coche.',
    taxi_name: 'Nombre', taxi_phone: 'Teléfono', taxi_from_gov: 'Gobernación de Origen',
    taxi_from_spot: 'Punto de Origen', taxi_to_gov: 'Gobernación de Destino', taxi_to_spot: 'Punto de Destino',
    taxi_car: 'Tipo de Coche', taxi_date: 'Fecha', taxi_time: 'Hora', taxi_pax: 'Pasajeros',
    taxi_notes: 'Notas Adicionales', taxi_submit: '🚕 Calcular y Pedir Coche',
    taxi_hint: '🔒 Tus datos se guardan solo en tu dispositivo.', taxi_empty_t: 'Sin coche pedido',
    taxi_empty_d: 'Completa el formulario y haz clic en calcular.',
    taxi_ph_name: 'Juan Pérez', taxi_ph_from: 'Ej: Aeropuerto de El Cairo - Terminal 3',
    taxi_ph_to: 'Ej: Hotel Mena House - Giza', taxi_ph_notes: 'Detalles adicionales…',
    places_pill: '🏛️ Descubrir', places_title: 'Lugares que visitar',
    places_desc: 'Filtra por gobernación o categoría, y consulta los precios.',
    places_search_ph: 'Buscar por nombre…',
    hotels_pill: '🏨 Alojamiento', hotels_title: 'Reserva al mejor precio',
    hotels_desc: 'Precios ordenados del más barato al más caro por defecto.', hotels_search_ph: 'Buscar por nombre de hotel…',
    govs_pill: '🗺️ Mapa', govs_title: 'Las 27 gobernaciones de Egipto',
    govs_desc: 'Haz clic en cualquier gobernación para ver sus atracciones y hoteles.',
    bookings_pill: '💾 Guardado', bookings_title: 'Mis Reservas',
    bookings_desc: 'Todos tus viajes y reservas en tu dispositivo.',
    bookings_empty_t: 'Sin reservas todavía', bookings_empty_d: 'Pide un coche o reserva un hotel.',
    footer_about: 'Una aplicación completa de viajes para Egipto.',
    footer_links: 'Enlaces Rápidos', footer_services: 'Servicios', footer_contact: 'Contacto',
    footer_s1: 'Traslado desde aeropuerto', footer_s2: 'Tours diarios', footer_s3: 'Reserva de hotel',
    footer_loc: '📍 El Cairo, Egipto', footer_rights: 'Nourt Masr — Todos los derechos reservados.',
    all_govs: 'Todas las Gobernaciones', all_cats: 'Todas las Categorías', all_stars: 'Todas las Estrellas',
    sort_rating: 'Mejor Valorados', sort_price_asc: 'Entrada más barata', sort_price_desc: 'Más caro', sort_name: 'Alfabético',
    hotel_sort_asc: 'Precio: Menor a Mayor', hotel_sort_desc: 'Precio: Mayor a Menor', hotel_sort_stars: 'Más Estrellas',
    stars_5: '5 Estrellas', stars_4: '4 Estrellas', stars_3: '3 Estrellas',
    reset: '↺ Restablecer', no_results: 'Sin resultados',
    filter_all: 'Todo', filter_taxi: '🚕 Viajes', filter_hotel: '🏨 Hoteles', filter_place: '⭐ Favoritos',
    clear_all: '🗑️ Borrar Todo',
    book: 'Reservar', details: 'Detalles', add_fav: '⭐ Añadir a Favoritos',
    search_govs: 'Gobernaciones', search_places: 'Atracciones', search_hotels: 'Hoteles',
    search_none: 'Sin resultados',
    confirm: 'Confirmar Reserva', call: 'Llamar', free: 'Gratis', per_night: 'EGP / noche', currency: 'EGP',
    km: 'km', min: 'min',
    msg_taxi_ok: 'Precio calculado ✅', msg_booking_ok: 'Reserva confirmada',
    msg_fav_ok: 'Añadido a favoritos ⭐', msg_deleted: 'Reserva eliminada',
    msg_reset_filters: 'Filtros restablecidos',
    distance: 'Distancia', duration: 'Duración', car_type: 'Tipo de Coche',
    total: 'Total Estimado', driver: 'Conductor', trip_from: 'De', trip_to: 'A',
    per_person: 'por persona', country: 'Egipto',
    days: 'días', nights: 'noches',
  },
  it: {
    doc_title: 'Nourt Masr | La tua guida turistica intelligente per l\'Egitto',
    brand: 'Nourt Masr', brand_sub: 'Visita l\'Egitto', preloader_sub: 'Preparando il tuo viaggio…',
    nav_home: 'Home', nav_taxi: 'Prenota Auto', nav_places: 'Attrazioni', nav_hotels: 'Hotel',
    nav_govs: 'Governatorati', nav_bookings: 'Le Mie Prenotazioni', nav_order: '🚕 Ordina Ora',
    hero_pill: '🇪🇬 Benvenuto in Egitto', hero_title_1: 'Benvenuto in', hero_title_2: 'Egitto',
    hero_sub: 'Il tuo viaggio inizia qui',
    hero_desc: 'Prenota un\'auto fino alla porta del tuo hotel, esplora le migliori attrazioni in tutti i 27 governatorati e prenota hotel dal più economico al più costoso.',
    hero_search_ph: 'Cerca governatorati, attrazioni, hotel…', hero_btn_search: 'Cerca',
    hero_btn_taxi: '🚕 Prenota un\'auto', hero_btn_hotels: '🏨 Vedi gli hotel',
    hero_p1: 'Auto in ogni governatorato', hero_p2: 'Prezzi chiari, nessuna sorpresa', hero_p3: 'Supporto 24/7',
    hero_card_title: 'Il Tuo Prossimo Viaggio', trips_today: 'Viaggi oggi', bookings_today: 'Prenotazioni',
    chip_rating: '⭐ Valutazione 4.9', chip_support: '🕒 Supporto 24/7',
    services_pill: 'I Nostri Servizi', services_title: 'Tutto ciò che ti serve',
    services_desc: 'Dall\'arrivo in aeroporto all\'ultimo giorno.',
    feat1_t: 'Un\'auto alla tua porta', feat1_d: 'Scegli un tipo di auto, imposta i punti, arriva in pochi minuti.', feat1_tag: '6 tipi di auto',
    feat2_t: 'Luoghi da visitare', feat2_d: 'Oltre 45 attrazioni in Egitto con valutazioni e prezzi.', feat2_tag: 'Categorizzato',
    feat3_t: 'Prenota dal più economico al più costoso', feat3_d: 'Filtra per governatorato e stelle.', feat3_tag: 'Totale automatico',
    feat4_t: 'Tutti i 27 governatorati', feat4_d: 'Da Alessandria ad Assuan, da Siwa a Hurghada.', feat4_tag: 'Copertura completa',
    feat5_t: 'Prenotazioni salvate', feat5_d: 'Ogni viaggio o prenotazione è salvato automaticamente.', feat5_tag: 'Funziona offline',
    feat6_t: 'Modalità scura confortevole', feat6_d: 'Passa da chiaro a scuro con un clic.', feat6_tag: 'Design confortevole',
    taxi_pill: '🚕 Servizio di Trasporto', taxi_title: 'Ordina un\'auto alla tua posizione',
    taxi_desc: 'Imposta i punti di partenza e arrivo, scegli un tipo di auto.',
    taxi_name: 'Nome', taxi_phone: 'Cellulare', taxi_from_gov: 'Governatorato di Partenza',
    taxi_from_spot: 'Punto di Partenza', taxi_to_gov: 'Governatorato di Arrivo', taxi_to_spot: 'Punto di Arrivo',
    taxi_car: 'Tipo di Auto', taxi_date: 'Data', taxi_time: 'Ora', taxi_pax: 'Passeggeri',
    taxi_notes: 'Note Aggiuntive', taxi_submit: '🚕 Calcola e Ordina',
    taxi_hint: '🔒 I tuoi dati restano sul tuo dispositivo.', taxi_empty_t: 'Nessuna auto ordinata',
    taxi_empty_d: 'Compila il modulo e clicca su calcola.',
    taxi_ph_name: 'Mario Rossi', taxi_ph_from: 'Es: Aeroporto del Cairo - Terminal 3',
    taxi_ph_to: 'Es: Hotel Mena House - Giza', taxi_ph_notes: 'Dettagli aggiuntivi…',
    places_pill: '🏛️ Scopri', places_title: 'Luoghi da visitare',
    places_desc: 'Filtra per governatorato o categoria e vedi i prezzi.',
    places_search_ph: 'Cerca per nome…',
    hotels_pill: '🏨 Alloggio', hotels_title: 'Prenota al miglior prezzo',
    hotels_desc: 'Prezzi ordinati dal più economico al più costoso.', hotels_search_ph: 'Cerca per nome hotel…',
    govs_pill: '🗺️ Mappa', govs_title: 'I 27 governatorati dell\'Egitto',
    govs_desc: 'Clicca su un governatorato per vedere attrazioni e hotel.',
    bookings_pill: '💾 Salvato', bookings_title: 'Le Mie Prenotazioni',
    bookings_desc: 'Tutti i tuoi viaggi e prenotazioni sul tuo dispositivo.',
    bookings_empty_t: 'Nessuna prenotazione', bookings_empty_d: 'Ordina un\'auto o prenota un hotel.',
    footer_about: 'Un\'app di viaggio completa per l\'Egitto.',
    footer_links: 'Link Rapidi', footer_services: 'Servizi', footer_contact: 'Contatti',
    footer_s1: 'Transfer aeroporto', footer_s2: 'Tour giornalieri', footer_s3: 'Prenotazione hotel',
    footer_loc: '📍 Il Cairo, Egitto', footer_rights: 'Nourt Masr — Tutti i diritti riservati.',
    all_govs: 'Tutti i Governatorati', all_cats: 'Tutte le Categorie', all_stars: 'Tutte le Stelle',
    sort_rating: 'Più votati', sort_price_asc: 'Ingresso più economico', sort_price_desc: 'Più costoso', sort_name: 'Alfabetico',
    hotel_sort_asc: 'Prezzo: crescente', hotel_sort_desc: 'Prezzo: decrescente', hotel_sort_stars: 'Più stelle',
    stars_5: '5 Stelle', stars_4: '4 Stelle', stars_3: '3 Stelle',
    reset: '↺ Reimposta', no_results: 'Nessun risultato',
    filter_all: 'Tutto', filter_taxi: '🚕 Viaggi', filter_hotel: '🏨 Hotel', filter_place: '⭐ Preferiti',
    clear_all: '🗑️ Cancella Tutto',
    book: 'Prenota', details: 'Dettagli', add_fav: '⭐ Aggiungi ai preferiti',
    search_govs: 'Governatorati', search_places: 'Attrazioni', search_hotels: 'Hotel',
    search_none: 'Nessun risultato',
    confirm: 'Conferma', call: 'Chiama', free: 'Gratis', per_night: 'EGP / notte', currency: 'EGP',
    km: 'km', min: 'min',
    msg_taxi_ok: 'Prezzo calcolato ✅', msg_booking_ok: 'Prenotazione confermata',
    msg_fav_ok: 'Aggiunto ai preferiti ⭐', msg_deleted: 'Prenotazione eliminata',
    msg_reset_filters: 'Filtri reimpostati',
    distance: 'Distanza', duration: 'Durata', car_type: 'Tipo di Auto',
    total: 'Totale Stimato', driver: 'Autista', trip_from: 'Da', trip_to: 'A',
    per_person: 'a persona', country: 'Egitto',
    days: 'giorni', nights: 'notti',
  },
  ru: {
    doc_title: 'Nourt Masr | Умный туристический гид по Египту',
    brand: 'Nourt Masr', brand_sub: 'Посетите Египет', preloader_sub: 'Подготовка вашей поездки…',
    nav_home: 'Главная', nav_taxi: 'Заказать авто', nav_places: 'Достопримечательности', nav_hotels: 'Отели',
    nav_govs: 'Провинции', nav_bookings: 'Мои брони', nav_order: '🚕 Заказать',
    hero_pill: '🇪🇬 Добро пожаловать в Египет', hero_title_1: 'Добро пожаловать в', hero_title_2: 'Египет',
    hero_sub: 'Ваше путешествие начинается здесь',
    hero_desc: 'Закажите машину до двери отеля, исследуйте лучшие достопримечательности во всех 27 провинциях и бронируйте отели от дешёвых к дорогим.',
    hero_search_ph: 'Поиск провинций, достопримечательностей, отелей…', hero_btn_search: 'Поиск',
    hero_btn_taxi: '🚕 Заказать авто', hero_btn_hotels: '🏨 Отели',
    hero_p1: 'Машины в каждой провинции', hero_p2: 'Прозрачные цены', hero_p3: 'Поддержка 24/7',
    hero_card_title: 'Ваша следующая поездка', trips_today: 'Поездок сегодня', bookings_today: 'Бронирований',
    chip_rating: '⭐ Рейтинг 4.9', chip_support: '🕒 Поддержка 24/7',
    services_pill: 'Наши услуги', services_title: 'Всё, что нужно для поездки',
    services_desc: 'От прибытия в аэропорт до последнего дня.',
    feat1_t: 'Машина к вашей двери', feat1_d: 'Выберите тип машины, укажите точки — она прибудет через минуты.', feat1_tag: '6 типов авто',
    feat2_t: 'Места, которые стоит посетить', feat2_d: 'Более 45 достопримечательностей с рейтингами и ценами.', feat2_tag: 'С фильтрами',
    feat3_t: 'Бронируйте от дешёвых к дорогим', feat3_d: 'Фильтр по провинции и звёздам.', feat3_tag: 'Автоматический расчёт',
    feat4_t: 'Все 27 провинций', feat4_d: 'От Александрии до Асуана, от Сивы до Хургады.', feat4_tag: 'Полное покрытие',
    feat5_t: 'Ваши брони сохранены', feat5_d: 'Каждая поездка или бронь сохраняется автоматически.', feat5_tag: 'Работает офлайн',
    feat6_t: 'Удобный тёмный режим', feat6_d: 'Переключение между светлым и тёмным в один клик.', feat6_tag: 'Удобный дизайн',
    taxi_pill: '🚕 Служба такси', taxi_title: 'Закажите машину к вашей локации',
    taxi_desc: 'Укажите точки отправления и назначения, выберите тип авто.',
    taxi_name: 'Имя', taxi_phone: 'Телефон', taxi_from_gov: 'Провинция отправления',
    taxi_from_spot: 'Точка отправления', taxi_to_gov: 'Провинция назначения', taxi_to_spot: 'Точка назначения',
    taxi_car: 'Тип авто', taxi_date: 'Дата', taxi_time: 'Время', taxi_pax: 'Пассажиры',
    taxi_notes: 'Дополнительно', taxi_submit: '🚕 Рассчитать и заказать',
    taxi_hint: '🔒 Данные хранятся только на вашем устройстве.', taxi_empty_t: 'Машина не заказана',
    taxi_empty_d: 'Заполните форму и нажмите рассчитать.',
    taxi_ph_name: 'Иван Иванов', taxi_ph_from: 'Напр.: Аэропорт Каира - Терминал 3',
    taxi_ph_to: 'Напр.: Отель Mena House - Гиза', taxi_ph_notes: 'Дополнительные детали…',
    places_pill: '🏛️ Исследуйте', places_title: 'Места, которые стоит посетить',
    places_desc: 'Фильтр по провинции или категории, цены на вход.',
    places_search_ph: 'Поиск по названию…',
    hotels_pill: '🏨 Проживание', hotels_title: 'Бронируйте по лучшей цене',
    hotels_desc: 'Цены отсортированы от дешёвых к дорогим.', hotels_search_ph: 'Поиск по названию отеля…',
    govs_pill: '🗺️ Карта', govs_title: '27 провинций Египта',
    govs_desc: 'Нажмите на провинцию, чтобы увидеть достопримечательности и отели.',
    bookings_pill: '💾 Сохранено', bookings_title: 'Мои брони',
    bookings_desc: 'Все ваши поездки и брони на устройстве.',
    bookings_empty_t: 'Пока нет броней', bookings_empty_d: 'Закажите машину или забронируйте отель.',
    footer_about: 'Комплексное туристическое приложение для Египта.',
    footer_links: 'Быстрые ссылки', footer_services: 'Услуги', footer_contact: 'Связаться',
    footer_s1: 'Трансфер из аэропорта', footer_s2: 'Ежедневные туры', footer_s3: 'Бронирование отелей',
    footer_loc: '📍 Каир, Египет', footer_rights: 'Nourt Masr — Все права защищены.',
    all_govs: 'Все провинции', all_cats: 'Все категории', all_stars: 'Все звёзды',
    sort_rating: 'Лучшие', sort_price_asc: 'Дешёвый вход', sort_price_desc: 'Дорогой', sort_name: 'По алфавиту',
    hotel_sort_asc: 'Цена: по возрастанию', hotel_sort_desc: 'Цена: по убыванию', hotel_sort_stars: 'Больше звёзд',
    stars_5: '5 звёзд', stars_4: '4 звезды', stars_3: '3 звезды',
    reset: '↺ Сброс', no_results: 'Нет результатов',
    filter_all: 'Все', filter_taxi: '🚕 Поездки', filter_hotel: '🏨 Отели', filter_place: '⭐ Избранное',
    clear_all: '🗑️ Очистить всё',
    book: 'Забронировать', details: 'Детали', add_fav: '⭐ В избранное',
    search_govs: 'Провинции', search_places: 'Достопримечательности', search_hotels: 'Отели',
    search_none: 'Нет результатов',
    confirm: 'Подтвердить', call: 'Позвонить', free: 'Бесплатно', per_night: 'EGP / ночь', currency: 'EGP',
    km: 'км', min: 'мин',
    msg_taxi_ok: 'Цена рассчитана ✅', msg_booking_ok: 'Бронь подтверждена',
    msg_fav_ok: 'Добавлено в избранное ⭐', msg_deleted: 'Бронь удалена',
    msg_reset_filters: 'Фильтры сброшены',
    distance: 'Расстояние', duration: 'Длительность', car_type: 'Тип авто',
    total: 'Итоговая сумма', driver: 'Водитель', trip_from: 'Из', trip_to: 'В',
    per_person: 'с человека', country: 'Египет',
    days: 'дней', nights: 'ночей',
  },
  zh: {
    doc_title: 'Nourt Masr | 智能埃及旅游指南',
    brand: 'Nourt Masr', brand_sub: '游览埃及', preloader_sub: '正在为您准备旅程…',
    nav_home: '首页', nav_taxi: '预订车辆', nav_places: '景点', nav_hotels: '酒店',
    nav_govs: '省份', nav_bookings: '我的预订', nav_order: '🚕 立即预订',
    hero_pill: '🇪🇬 欢迎来到埃及', hero_title_1: '欢迎来到', hero_title_2: '埃及',
    hero_sub: '您的旅程从这里开始',
    hero_desc: '预订车辆直达酒店门口，探索全部27个省份的最佳景点，从最便宜到最贵的酒店任您选择。',
    hero_search_ph: '搜索省份、景点、酒店…', hero_btn_search: '搜索',
    hero_btn_taxi: '🚕 立即预订车辆', hero_btn_hotels: '🏨 查看酒店',
    hero_p1: '全省份都有车辆', hero_p2: '价格透明无惊喜', hero_p3: '24/7 客户支持',
    hero_card_title: '您的下一次旅行', trips_today: '今日行程', bookings_today: '酒店预订',
    chip_rating: '⭐ 4.9 评分', chip_support: '🕒 24/7 支持',
    services_pill: '我们的服务', services_title: '您旅行所需的一切',
    services_desc: '从抵达机场到最后一天，我们一直陪伴。',
    feat1_t: '车辆直达您的门口', feat1_d: '选择车型，设定地点，几分钟内到达。', feat1_tag: '6种车型',
    feat2_t: '值得一游的景点', feat2_d: '埃及超过45个景点，含评分和门票价格。', feat2_tag: '分类可筛选',
    feat3_t: '从最便宜到最贵预订', feat3_d: '按省份和星级筛选，价格升序或降序。', feat3_tag: '自动计算总价',
    feat4_t: '全部27个省份', feat4_d: '从亚历山大到阿斯旺，从锡瓦到赫尔格达。', feat4_tag: '全面覆盖',
    feat5_t: '预订已保存', feat5_d: '每次行程或预订都会自动保存到设备。', feat5_tag: '离线可用',
    feat6_t: '护眼夜间模式', feat6_d: '一键切换亮暗模式，记住您的选择。', feat6_tag: '舒适设计',
    taxi_pill: '🚕 接送服务', taxi_title: '预订车辆到您的位置',
    taxi_desc: '设定出发和到达地点，选择车型。',
    taxi_name: '姓名', taxi_phone: '手机号', taxi_from_gov: '出发省份',
    taxi_from_spot: '出发地点', taxi_to_gov: '到达省份', taxi_to_spot: '到达地点',
    taxi_car: '车型', taxi_date: '日期', taxi_time: '时间', taxi_pax: '乘客数',
    taxi_notes: '附加备注', taxi_submit: '🚕 计算并预订',
    taxi_hint: '🔒 数据仅保存在您的设备上。', taxi_empty_t: '尚未预订车辆',
    taxi_empty_d: '填写表单并点击计算，详情将显示在此处。',
    taxi_ph_name: '张先生', taxi_ph_from: '例如：开罗机场 - 3号航站楼',
    taxi_ph_to: '例如：美娜宫酒店 - 吉萨', taxi_ph_notes: '附加详情…',
    places_pill: '🏛️ 探索', places_title: '值得一游的景点',
    places_desc: '按省份或类别筛选，了解门票价格。',
    places_search_ph: '按名称搜索…',
    hotels_pill: '🏨 住宿', hotels_title: '以最优价格预订',
    hotels_desc: '默认价格从低到高排序。', hotels_search_ph: '按酒店名称搜索…',
    govs_pill: '🗺️ 地图', govs_title: '埃及27个省份',
    govs_desc: '点击任意省份查看景点和酒店。',
    bookings_pill: '💾 已保存', bookings_title: '我的预订',
    bookings_desc: '所有行程和预订保存在您的设备上。',
    bookings_empty_t: '暂无预订', bookings_empty_d: '预订车辆或酒店，一切都会显示在这里。',
    footer_about: '一款全面的埃及旅游应用。',
    footer_links: '快速链接', footer_services: '服务', footer_contact: '联系我们',
    footer_s1: '机场接送', footer_s2: '一日游', footer_s3: '酒店预订',
    footer_loc: '📍 埃及开罗', footer_rights: 'Nourt Masr — 保留所有权利。',
    all_govs: '所有省份', all_cats: '所有类别', all_stars: '所有星级',
    sort_rating: '评分最高', sort_price_asc: '门票最便宜', sort_price_desc: '最贵', sort_name: '按字母',
    hotel_sort_asc: '价格：从低到高', hotel_sort_desc: '价格：从高到低', hotel_sort_stars: '星级最高',
    stars_5: '5星', stars_4: '4星', stars_3: '3星',
    reset: '↺ 重置', no_results: '无匹配结果',
    filter_all: '全部', filter_taxi: '🚕 行程', filter_hotel: '🏨 酒店', filter_place: '⭐ 收藏',
    clear_all: '🗑️ 清除全部',
    book: '立即预订', details: '详情', add_fav: '⭐ 加入收藏',
    search_govs: '省份', search_places: '景点', search_hotels: '酒店',
    search_none: '无匹配结果',
    confirm: '确认预订', call: '呼叫', free: '免费', per_night: 'EGP / 晚', currency: 'EGP',
    km: '公里', min: '分钟',
    msg_taxi_ok: '价格已计算 ✅', msg_booking_ok: '预订已确认',
    msg_fav_ok: '已加入收藏 ⭐', msg_deleted: '预订已删除',
    msg_reset_filters: '筛选已重置',
    distance: '距离', duration: '时长', car_type: '车型',
    total: '预估总额', driver: '司机', trip_from: '从', trip_to: '到',
    per_person: '每人', country: '埃及',
    days: '天', nights: '晚',
  },
  ja: {
    doc_title: 'Nourt Masr | スマートエジプト旅行ガイド',
    brand: 'Nourt Masr', brand_sub: 'エジプトを訪れる', preloader_sub: '旅行を準備中…',
    nav_home: 'ホーム', nav_taxi: '車を予約', nav_places: '観光スポット', nav_hotels: 'ホテル',
    nav_govs: '県', nav_bookings: '予約', nav_order: '🚕 今すぐ予約',
    hero_pill: '🇪🇬 エジプトへようこそ', hero_title_1: 'ようこそ', hero_title_2: 'エジプト',
    hero_sub: 'あなたの旅はここから始まります',
    hero_desc: 'ホテルのドアまで車を予約し、27県すべての最高の観光スポットを探索し、安い順から高い順にホテルを予約。',
    hero_search_ph: '県、観光スポット、ホテルを検索…', hero_btn_search: '検索',
    hero_btn_taxi: '🚕 今すぐ車を予約', hero_btn_hotels: '🏨 ホテルを見る',
    hero_p1: 'すべての県に車あり', hero_p2: '明確な価格', hero_p3: '24時間サポート',
    hero_card_title: '次の旅', trips_today: '本日の乗車', bookings_today: 'ホテル予約',
    chip_rating: '⭐ 4.9 評価', chip_support: '🕒 24時間サポート',
    services_pill: 'サービス', services_title: '旅行に必要なすべて',
    services_desc: '空港到着から最終日まで。',
    feat1_t: 'ドアまで車', feat1_d: '車種を選び、場所を設定すると数分で到着。', feat1_tag: '6車種',
    feat2_t: '訪れる価値のある場所', feat2_d: 'エジプト全土の45以上の観光スポット。', feat2_tag: 'カテゴリ別',
    feat3_t: '安い順から高い順に予約', feat3_d: '県と星でフィルター、価格で並べ替え。', feat3_tag: '自動計算',
    feat4_t: '27県すべて', feat4_d: 'アレクサンドリアからアスワン、シーワからハルガダまで。', feat4_tag: '完全カバー',
    feat5_t: '予約は保存済み', feat5_d: 'すべての旅や予約が自動的に保存されます。', feat5_tag: 'オフライン対応',
    feat6_t: '目に優しいダークモード', feat6_d: 'ワンクリックでライトとダークを切り替え。', feat6_tag: '快適なデザイン',
    taxi_pill: '🚕 送迎サービス', taxi_title: 'あなたの場所まで車を予約',
    taxi_desc: '出発地と目的地を設定し、車種を選択。',
    taxi_name: '名前', taxi_phone: '携帯番号', taxi_from_gov: '出発県',
    taxi_from_spot: '出発地', taxi_to_gov: '到着県', taxi_to_spot: '目的地',
    taxi_car: '車種', taxi_date: '日付', taxi_time: '時間', taxi_pax: '乗客数',
    taxi_notes: '追加メモ', taxi_submit: '🚕 計算して予約',
    taxi_hint: '🔒 データはお使いのデバイスのみに保存されます。', taxi_empty_t: 'まだ予約なし',
    taxi_empty_d: 'フォームに入力して計算をクリック。',
    taxi_ph_name: '山田太郎', taxi_ph_from: '例: カイロ空港 - 第3ターミナル',
    taxi_ph_to: '例: メナハウスホテル - ギザ', taxi_ph_notes: '追加の詳細…',
    places_pill: '🏛️ 発見', places_title: '訪れる価値のある場所',
    places_desc: '県やカテゴリでフィルター、入場料を確認。',
    places_search_ph: '名前で検索…',
    hotels_pill: '🏨 宿泊', hotels_title: '最適な価格で予約',
    hotels_desc: 'デフォルトで安い順に並んでいます。', hotels_search_ph: 'ホテル名で検索…',
    govs_pill: '🗺️ 地図', govs_title: 'エジプト27県',
    govs_desc: '県をクリックして観光スポットとホテルを表示。',
    bookings_pill: '💾 保存済み', bookings_title: '予約一覧',
    bookings_desc: 'すべての旅と予約がデバイスに保存されます。',
    bookings_empty_t: '予約はまだありません', bookings_empty_d: '車を予約するかホテルを予約してください。',
    footer_about: 'エジプト旅行の総合アプリ。',
    footer_links: 'クイックリンク', footer_services: 'サービス', footer_contact: 'お問い合わせ',
    footer_s1: '空港送迎', footer_s2: '日帰りツアー', footer_s3: 'ホテル予約',
    footer_loc: '📍 エジプト・カイロ', footer_rights: 'Nourt Masr — All rights reserved.',
    all_govs: 'すべての県', all_cats: 'すべてのカテゴリ', all_stars: 'すべての星',
    sort_rating: '高評価順', sort_price_asc: '入場料安い順', sort_price_desc: '高い順', sort_name: '名前順',
    hotel_sort_asc: '価格: 安い順', hotel_sort_desc: '価格: 高い順', hotel_sort_stars: '星が多い順',
    stars_5: '5つ星', stars_4: '4つ星', stars_3: '3つ星',
    reset: '↺ リセット', no_results: '結果なし',
    filter_all: 'すべて', filter_taxi: '🚕 乗車', filter_hotel: '🏨 ホテル', filter_place: '⭐ お気に入り',
    clear_all: '🗑️ すべて削除',
    book: '予約する', details: '詳細', add_fav: '⭐ お気に入りに追加',
    search_govs: '県', search_places: '観光スポット', search_hotels: 'ホテル',
    search_none: '結果なし',
    confirm: '予約を確認', call: '電話', free: '無料', per_night: 'EGP / 泊', currency: 'EGP',
    km: 'km', min: '分',
    msg_taxi_ok: '価格を計算しました ✅', msg_booking_ok: '予約が確認されました',
    msg_fav_ok: 'お気に入りに追加 ⭐', msg_deleted: '予約を削除しました',
    msg_reset_filters: 'フィルターをリセット',
    distance: '距離', duration: '所要時間', car_type: '車種',
    total: '推定合計', driver: 'ドライバー', trip_from: 'から', trip_to: 'へ',
    per_person: '1人あたり', country: 'エジプト',
    days: '日', nights: '泊',
  },
  ko: {
    doc_title: 'Nourt Masr | 스마트 이집트 여행 가이드',
    brand: 'Nourt Masr', brand_sub: '이집트 방문', preloader_sub: '여행을 준비 중…',
    nav_home: '홈', nav_taxi: '차량 예약', nav_places: '명소', nav_hotels: '호텔',
    nav_govs: '주', nav_bookings: '내 예약', nav_order: '🚕 지금 예약',
    hero_pill: '🇪🇬 이집트에 오신 것을 환영합니다', hero_title_1: '환영합니다', hero_title_2: '이집트',
    hero_sub: '여행은 여기서 시작됩니다',
    hero_desc: '호텔 문 앞까지 차량을 예약하고, 27개 주의 최고 명소를 탐험하고, 저렴한 순서대로 호텔을 예약하세요.',
    hero_search_ph: '주, 명소, 호텔 검색…', hero_btn_search: '검색',
    hero_btn_taxi: '🚕 지금 차량 예약', hero_btn_hotels: '🏨 호텔 보기',
    hero_p1: '모든 주에 차량', hero_p2: '명확한 가격', hero_p3: '24/7 지원',
    hero_card_title: '다음 여행', trips_today: '오늘의 여행', bookings_today: '호텔 예약',
    chip_rating: '⭐ 4.9 평점', chip_support: '🕒 24/7 지원',
    services_pill: '서비스', services_title: '여행에 필요한 모든 것',
    services_desc: '공항 도착부터 마지막 날까지.',
    feat1_t: '문 앞까지 차량', feat1_d: '차종을 선택하고 위치를 설정하세요.', feat1_tag: '6가지 차종',
    feat2_t: '방문할 가치 있는 곳', feat2_d: '이집트 전역 45개 이상의 명소.', feat2_tag: '카테고리별',
    feat3_t: '저렴한 순서대로 예약', feat3_d: '주와 별점으로 필터링.', feat3_tag: '자동 합계',
    feat4_t: '27개 주 전체', feat4_d: '알렉산드리아에서 아스완까지.', feat4_tag: '전체 커버',
    feat5_t: '예약 저장됨', feat5_d: '모든 여행과 예약이 자동으로 저장됩니다.', feat5_tag: '오프라인 사용 가능',
    feat6_t: '눈이 편한 다크 모드', feat6_d: '클릭 한 번으로 밝게/어둡게 전환.', feat6_tag: '편안한 디자인',
    taxi_pill: '🚕 픽업 서비스', taxi_title: '귀하의 위치로 차량 예약',
    taxi_desc: '출발지와 목적지를 설정하고 차종을 선택하세요.',
    taxi_name: '이름', taxi_phone: '휴대폰 번호', taxi_from_gov: '출발 주',
    taxi_from_spot: '출발지', taxi_to_gov: '도착 주', taxi_to_spot: '도착지',
    taxi_car: '차종', taxi_date: '날짜', taxi_time: '시간', taxi_pax: '승객',
    taxi_notes: '추가 메모', taxi_submit: '🚕 계산 및 예약',
    taxi_hint: '🔒 데이터는 기기에만 저장됩니다.', taxi_empty_t: '아직 예약 없음',
    taxi_empty_d: '양식을 작성하고 계산을 클릭하세요.',
    taxi_ph_name: '김철수', taxi_ph_from: '예: 카이로 공항 - 터미널 3',
    taxi_ph_to: '예: 메나 하우스 호텔 - 기자', taxi_ph_notes: '추가 세부사항…',
    places_pill: '🏛️ 탐험', places_title: '방문할 가치 있는 곳',
    places_desc: '주 또는 카테고리로 필터링하고 입장료를 확인하세요.',
    places_search_ph: '이름으로 검색…',
    hotels_pill: '🏨 숙박', hotels_title: '최적의 가격으로 예약',
    hotels_desc: '기본값으로 저렴한 순서대로 정렬됩니다.', hotels_search_ph: '호텔 이름으로 검색…',
    govs_pill: '🗺️ 지도', govs_title: '이집트 27개 주',
    govs_desc: '주를 클릭하면 명소와 호텔을 볼 수 있습니다.',
    bookings_pill: '💾 저장됨', bookings_title: '내 예약',
    bookings_desc: '모든 여행과 예약이 기기에 저장됩니다.',
    bookings_empty_t: '아직 예약이 없습니다', bookings_empty_d: '차량을 예약하거나 호텔을 예약하세요.',
    footer_about: '이집트 여행을 위한 종합 앱.',
    footer_links: '빠른 링크', footer_services: '서비스', footer_contact: '문의',
    footer_s1: '공항 픽업', footer_s2: '일일 투어', footer_s3: '호텔 예약',
    footer_loc: '📍 이집트 카이로', footer_rights: 'Nourt Masr — All rights reserved.',
    all_govs: '모든 주', all_cats: '모든 카테고리', all_stars: '모든 등급',
    sort_rating: '최고 평점', sort_price_asc: '가장 저렴한 입장', sort_price_desc: '가장 비쌈', sort_name: '알파벳순',
    hotel_sort_asc: '가격: 낮은 순', hotel_sort_desc: '가격: 높은 순', hotel_sort_stars: '별점 높은 순',
    stars_5: '5성급', stars_4: '4성급', stars_3: '3성급',
    reset: '↺ 초기화', no_results: '결과 없음',
    filter_all: '전체', filter_taxi: '🚕 여행', filter_hotel: '🏨 호텔', filter_place: '⭐ 즐겨찾기',
    clear_all: '🗑️ 모두 삭제',
    book: '예약하기', details: '세부사항', add_fav: '⭐ 즐겨찾기 추가',
    search_govs: '주', search_places: '명소', search_hotels: '호텔',
    search_none: '결과 없음',
    confirm: '예약 확인', call: '전화', free: '무료', per_night: 'EGP / 박', currency: 'EGP',
    km: 'km', min: '분',
    msg_taxi_ok: '가격이 계산되었습니다 ✅', msg_booking_ok: '예약이 확인되었습니다',
    msg_fav_ok: '즐겨찾기에 추가됨 ⭐', msg_deleted: '예약이 삭제되었습니다',
    msg_reset_filters: '필터 초기화',
    distance: '거리', duration: '소요 시간', car_type: '차종',
    total: '예상 합계', driver: '기사', trip_from: '출발', trip_to: '도착',
    per_person: '1인당', country: '이집트',
    days: '일', nights: '박',
  },
  pt: {
    doc_title: 'Nourt Masr | Seu guia turístico inteligente do Egito',
    brand: 'Nourt Masr', brand_sub: 'Visite o Egito', preloader_sub: 'Preparando sua viagem…',
    nav_home: 'Início', nav_taxi: 'Pedir Carro', nav_places: 'Atrações', nav_hotels: 'Hotéis',
    nav_govs: 'Governadorias', nav_bookings: 'Minhas Reservas', nav_order: '🚕 Pedir Agora',
    hero_pill: '🇪🇬 Bem-vindo ao Egito', hero_title_1: 'Bem-vindo ao', hero_title_2: 'Egito',
    hero_sub: 'Sua jornada começa aqui',
    hero_desc: 'Reserve um carro até a porta do seu hotel, explore as melhores atrações nas 27 governadorias e reserve hotéis do mais barato ao mais caro.',
    hero_search_ph: 'Buscar governadorias, atrações, hotéis…', hero_btn_search: 'Buscar',
    hero_btn_taxi: '🚕 Pedir Carro Agora', hero_btn_hotels: '🏨 Ver Hotéis',
    hero_p1: 'Carros em cada governadoria', hero_p2: 'Preços claros, sem surpresas', hero_p3: 'Suporte 24/7',
    hero_card_title: 'Sua Próxima Viagem', trips_today: 'Viagens hoje', bookings_today: 'Reservas de hotel',
    chip_rating: '⭐ Avaliação 4.9', chip_support: '🕒 Suporte 24/7',
    services_pill: 'Nossos Serviços', services_title: 'Tudo que você precisa',
    services_desc: 'Da chegada ao aeroporto até o último dia.',
    feat1_t: 'Um carro até sua porta', feat1_d: 'Escolha um tipo de carro, defina os pontos.', feat1_tag: '6 tipos de carro',
    feat2_t: 'Lugares para visitar', feat2_d: 'Mais de 45 atrações no Egito com avaliações.', feat2_tag: 'Categorizado',
    feat3_t: 'Reserve do mais barato ao mais caro', feat3_d: 'Filtre por governadoria e estrelas.', feat3_tag: 'Total automático',
    feat4_t: 'Todas as 27 governadorias', feat4_d: 'De Alexandria a Assuã, de Siwa a Hurghada.', feat4_tag: 'Cobertura completa',
    feat5_t: 'Suas reservas salvas', feat5_d: 'Cada viagem ou reserva é salva automaticamente.', feat5_tag: 'Funciona offline',
    feat6_t: 'Modo escuro confortável', feat6_d: 'Alterne entre claro e escuro com um clique.', feat6_tag: 'Design confortável',
    taxi_pill: '🚕 Serviço de Transporte', taxi_title: 'Peça um carro na sua localização',
    taxi_desc: 'Defina os pontos de partida e destino, escolha um tipo de carro.',
    taxi_name: 'Nome', taxi_phone: 'Celular', taxi_from_gov: 'Governadoria de Partida',
    taxi_from_spot: 'Ponto de Partida', taxi_to_gov: 'Governadoria de Destino', taxi_to_spot: 'Ponto de Destino',
    taxi_car: 'Tipo de Carro', taxi_date: 'Data', taxi_time: 'Hora', taxi_pax: 'Passageiros',
    taxi_notes: 'Notas Adicionais', taxi_submit: '🚕 Calcular e Pedir',
    taxi_hint: '🔒 Seus dados ficam apenas no seu dispositivo.', taxi_empty_t: 'Nenhum carro pedido',
    taxi_empty_d: 'Preencha o formulário e clique em calcular.',
    taxi_ph_name: 'João Silva', taxi_ph_from: 'Ex: Aeroporto do Cairo - Terminal 3',
    taxi_ph_to: 'Ex: Hotel Mena House - Gizé', taxi_ph_notes: 'Detalhes adicionais…',
    places_pill: '🏛️ Descobrir', places_title: 'Lugares para visitar',
    places_desc: 'Filtre por governadoria ou categoria e veja preços.',
    places_search_ph: 'Buscar por nome…',
    hotels_pill: '🏨 Hospedagem', hotels_title: 'Reserve pelo melhor preço',
    hotels_desc: 'Preços ordenados do mais barato ao mais caro.', hotels_search_ph: 'Buscar por nome do hotel…',
    govs_pill: '🗺️ Mapa', govs_title: 'As 27 governadorias do Egito',
    govs_desc: 'Clique em uma governadoria para ver atrações e hotéis.',
    bookings_pill: '💾 Salvo', bookings_title: 'Minhas Reservas',
    bookings_desc: 'Todas as suas viagens e reservas no dispositivo.',
    bookings_empty_t: 'Sem reservas ainda', bookings_empty_d: 'Peça um carro ou reserve um hotel.',
    footer_about: 'Um aplicativo de viagem completo para o Egito.',
    footer_links: 'Links Rápidos', footer_services: 'Serviços', footer_contact: 'Contato',
    footer_s1: 'Transfer do aeroporto', footer_s2: 'Tours diários', footer_s3: 'Reserva de hotel',
    footer_loc: '📍 Cairo, Egito', footer_rights: 'Nourt Masr — Todos os direitos reservados.',
    all_govs: 'Todas as Governadorias', all_cats: 'Todas as Categorias', all_stars: 'Todas as Estrelas',
    sort_rating: 'Melhor Avaliados', sort_price_asc: 'Entrada mais barata', sort_price_desc: 'Mais caro', sort_name: 'Alfabético',
    hotel_sort_asc: 'Preço: Menor para Maior', hotel_sort_desc: 'Preço: Maior para Menor', hotel_sort_stars: 'Mais Estrelas',
    stars_5: '5 Estrelas', stars_4: '4 Estrelas', stars_3: '3 Estrelas',
    reset: '↺ Redefinir', no_results: 'Sem resultados',
    filter_all: 'Tudo', filter_taxi: '🚕 Viagens', filter_hotel: '🏨 Hotéis', filter_place: '⭐ Favoritos',
    clear_all: '🗑️ Limpar Tudo',
    book: 'Reservar', details: 'Detalhes', add_fav: '⭐ Adicionar aos Favoritos',
    search_govs: 'Governadorias', search_places: 'Atrações', search_hotels: 'Hotéis',
    search_none: 'Sem resultados',
    confirm: 'Confirmar Reserva', call: 'Ligar', free: 'Grátis', per_night: 'EGP / noite', currency: 'EGP',
    km: 'km', min: 'min',
    msg_taxi_ok: 'Preço calculado ✅', msg_booking_ok: 'Reserva confirmada',
    msg_fav_ok: 'Adicionado aos favoritos ⭐', msg_deleted: 'Reserva removida',
    msg_reset_filters: 'Filtros redefinidos',
    distance: 'Distância', duration: 'Duração', car_type: 'Tipo de Carro',
    total: 'Total Estimado', driver: 'Motorista', trip_from: 'De', trip_to: 'Para',
    per_person: 'por pessoa', country: 'Egito',
    days: 'dias', nights: 'noites',
  },
  tr: {
    doc_title: 'Nourt Masr | Akıllı Mısır Seyahat Rehberi',
    brand: 'Nourt Masr', brand_sub: 'Mısır\'ı Ziyaret Edin', preloader_sub: 'Seyahatiniz hazırlanıyor…',
    nav_home: 'Ana Sayfa', nav_taxi: 'Araç Çağır', nav_places: 'Gezilecek Yerler', nav_hotels: 'Oteller',
    nav_govs: 'İller', nav_bookings: 'Rezervasyonlarım', nav_order: '🚕 Şimdi Sipariş Ver',
    hero_pill: '🇪🇬 Mısır\'a Hoş Geldiniz', hero_title_1: 'Hoş Geldiniz', hero_title_2: 'Mısır',
    hero_sub: 'Yolculuğunuz burada başlıyor',
    hero_desc: 'Otel kapınıza kadar araba çağırın, 27 ilde en iyi yerleri keşfedin ve otelleri en ucuzdan en pahalıya sıralayın.',
    hero_search_ph: 'İl, yer, otel ara…', hero_btn_search: 'Ara',
    hero_btn_taxi: '🚕 Hemen Araç Çağır', hero_btn_hotels: '🏨 Otelleri Gör',
    hero_p1: 'Her ilde araç', hero_p2: 'Net fiyatlar', hero_p3: '7/24 Destek',
    hero_card_title: 'Sonraki Yolculuğunuz', trips_today: 'Bugünkü yolculuklar', bookings_today: 'Otel rezervasyonları',
    chip_rating: '⭐ 4.9 Puan', chip_support: '🕒 7/24 Destek',
    services_pill: 'Hizmetlerimiz', services_title: 'Yolculuğunuz için her şey',
    services_desc: 'Havalimanına varıştan son güne kadar.',
    feat1_t: 'Kapınıza gelen araç', feat1_d: 'Araç tipini seçin, noktaları belirleyin.', feat1_tag: '6 araç tipi',
    feat2_t: 'Görülmeye değer yerler', feat2_d: 'Mısır genelinde 45\'ten fazla yer.', feat2_tag: 'Kategorize',
    feat3_t: 'En ucuzdan en pahalıya', feat3_d: 'İl ve yıldıza göre filtreleyin.', feat3_tag: 'Otomatik toplam',
    feat4_t: '27 ilin tamamı', feat4_d: 'İskenderiye\'den Asvan\'a, Siwa\'dan Hurgada\'ya.', feat4_tag: 'Tam kapsam',
    feat5_t: 'Rezervasyonlarınız kayıtlı', feat5_d: 'Her yolculuk otomatik kaydedilir.', feat5_tag: 'Çevrimdışı çalışır',
    feat6_t: 'Göz dostu karanlık mod', feat6_d: 'Tek tıkla açık/koyu arasında geçiş yapın.', feat6_tag: 'Konforlu tasarım',
    taxi_pill: '🚕 Ulaşım Servisi', taxi_title: 'Konumunuza araç çağırın',
    taxi_desc: 'Alış ve bırakma noktalarını belirleyin, araç tipi seçin.',
    taxi_name: 'Ad', taxi_phone: 'Cep Telefonu', taxi_from_gov: 'Alış İli',
    taxi_from_spot: 'Alış Noktası', taxi_to_gov: 'Varış İli', taxi_to_spot: 'Varış Noktası',
    taxi_car: 'Araç Tipi', taxi_date: 'Tarih', taxi_time: 'Saat', taxi_pax: 'Yolcular',
    taxi_notes: 'Ek Notlar', taxi_submit: '🚕 Hesapla ve Sipariş Ver',
    taxi_hint: '🔒 Verileriniz yalnızca cihazınızda saklanır.', taxi_empty_t: 'Araç çağrılmadı',
    taxi_empty_d: 'Formu doldurun ve hesapla\'ya tıklayın.',
    taxi_ph_name: 'Ahmet Yılmaz', taxi_ph_from: 'Örn: Kahire Havalimanı - Terminal 3',
    taxi_ph_to: 'Örn: Mena House Otel - Giza', taxi_ph_notes: 'Ek detaylar…',
    places_pill: '🏛️ Keşfet', places_title: 'Görülmeye değer yerler',
    places_desc: 'İl veya kategoriye göre filtreleyin.',
    places_search_ph: 'İsme göre ara…',
    hotels_pill: '🏨 Konaklama', hotels_title: 'En iyi fiyata rezervasyon yapın',
    hotels_desc: 'Fiyatlar varsayılan olarak en ucuzdan en pahalıya sıralanmıştır.', hotels_search_ph: 'Otel adına göre ara…',
    govs_pill: '🗺️ Harita', govs_title: 'Mısır\'ın 27 İli',
    govs_desc: 'Gezilecek yerler ve oteller için bir ile tıklayın.',
    bookings_pill: '💾 Kayıtlı', bookings_title: 'Rezervasyonlarım',
    bookings_desc: 'Tüm yolculuklarınız ve rezervasyonlarınız cihazınızda.',
    bookings_empty_t: 'Henüz rezervasyon yok', bookings_empty_d: 'Araç çağırın veya otel rezervasyonu yapın.',
    footer_about: 'Mısır için kapsamlı bir seyahat uygulaması.',
    footer_links: 'Hızlı Bağlantılar', footer_services: 'Hizmetler', footer_contact: 'İletişim',
    footer_s1: 'Havalimanı transferi', footer_s2: 'Günlük turlar', footer_s3: 'Otel rezervasyonu',
    footer_loc: '📍 Kahire, Mısır', footer_rights: 'Nourt Masr — Tüm hakları saklıdır.',
    all_govs: 'Tüm İller', all_cats: 'Tüm Kategoriler', all_stars: 'Tüm Yıldızlar',
    sort_rating: 'En Yüksek Puanlı', sort_price_asc: 'En Ucuz Giriş', sort_price_desc: 'En Pahalı', sort_name: 'Alfabetik',
    hotel_sort_asc: 'Fiyat: Artan', hotel_sort_desc: 'Fiyat: Azalan', hotel_sort_stars: 'En Çok Yıldız',
    stars_5: '5 Yıldız', stars_4: '4 Yıldız', stars_3: '3 Yıldız',
    reset: '↺ Sıfırla', no_results: 'Sonuç yok',
    filter_all: 'Tümü', filter_taxi: '🚕 Yolculuklar', filter_hotel: '🏨 Oteller', filter_place: '⭐ Favoriler',
    clear_all: '🗑️ Tümünü Sil',
    book: 'Rezervasyon Yap', details: 'Detaylar', add_fav: '⭐ Favorilere Ekle',
    search_govs: 'İller', search_places: 'Gezilecek Yerler', search_hotels: 'Oteller',
    search_none: 'Sonuç yok',
    confirm: 'Rezervasyonu Onayla', call: 'Ara', free: 'Ücretsiz', per_night: 'EGP / gece', currency: 'EGP',
    km: 'km', min: 'dk',
    msg_taxi_ok: 'Fiyat hesaplandı ✅', msg_booking_ok: 'Rezervasyon onaylandı',
    msg_fav_ok: 'Favorilere eklendi ⭐', msg_deleted: 'Rezervasyon silindi',
    msg_reset_filters: 'Filtreler sıfırlandı',
    distance: 'Mesafe', duration: 'Süre', car_type: 'Araç Tipi',
    total: 'Tahmini Toplam', driver: 'Sürücü', trip_from: 'Nereden', trip_to: 'Nereye',
    per_person: 'kişi başı', country: 'Mısır',
    days: 'gün', nights: 'gece',
  },
  hi: {
    doc_title: 'Nourt Masr | स्मार्ट मिस्र यात्रा गाइड',
    brand: 'Nourt Masr', brand_sub: 'मिस्र देखें', preloader_sub: 'आपकी यात्रा तैयार हो रही है…',
    nav_home: 'होम', nav_taxi: 'कार बुलाएं', nav_places: 'आकर्षण', nav_hotels: 'होटल',
    nav_govs: 'प्रांत', nav_bookings: 'मेरी बुकिंग', nav_order: '🚕 अभी ऑर्डर करें',
    hero_pill: '🇪🇬 मिस्र में आपका स्वागत है', hero_title_1: 'स्वागत है', hero_title_2: 'मिस्र',
    hero_sub: 'आपकी यात्रा यहाँ से शुरू होती है',
    hero_desc: 'अपने होटल के दरवाज़े तक कार बुक करें, सभी 27 प्रांतों के सर्वोत्तम आकर्षण खोजें, और सबसे सस्ते से सबसे महंगे तक होटल बुक करें।',
    hero_search_ph: 'प्रांत, आकर्षण, होटल खोजें…', hero_btn_search: 'खोजें',
    hero_btn_taxi: '🚕 अभी कार बुलाएं', hero_btn_hotels: '🏨 होटल देखें',
    hero_p1: 'हर प्रांत में कारें', hero_p2: 'स्पष्ट कीमतें', hero_p3: '24/7 सहायता',
    hero_card_title: 'आपकी अगली यात्रा', trips_today: 'आज की यात्राएँ', bookings_today: 'होटल बुकिंग',
    chip_rating: '⭐ 4.9 रेटिंग', chip_support: '🕒 24/7 सहायता',
    services_pill: 'हमारी सेवाएँ', services_title: 'आपकी यात्रा के लिए सब कुछ',
    services_desc: 'हवाई अड्डे पर आने से आखिरी दिन तक।',
    feat1_t: 'आपके दरवाज़े तक कार', feat1_d: 'कार का प्रकार चुनें, स्थान निर्धारित करें।', feat1_tag: '6 कार प्रकार',
    feat2_t: 'देखने लायक जगहें', feat2_d: 'मिस्र भर में 45+ आकर्षण।', feat2_tag: 'श्रेणीबद्ध',
    feat3_t: 'सबसे सस्ते से महंगे तक', feat3_d: 'प्रांत और सितारों से फ़िल्टर करें।', feat3_tag: 'स्वचालित कुल',
    feat4_t: 'सभी 27 प्रांत', feat4_d: 'अलेक्जेंड्रिया से असवान तक।', feat4_tag: 'पूर्ण कवरेज',
    feat5_t: 'आपकी बुकिंग सहेजी गई', feat5_d: 'हर यात्रा स्वचालित रूप से सहेजी जाती है।', feat5_tag: 'ऑफ़लाइन काम करता है',
    feat6_t: 'आँखों के लिए आरामदायक डार्क मोड', feat6_d: 'एक क्लिक में लाइट और डार्क बदलें।', feat6_tag: 'आरामदायक डिज़ाइन',
    taxi_pill: '🚕 राइड सेवा', taxi_title: 'अपने स्थान पर कार बुलाएं',
    taxi_desc: 'पिकअप और ड्रॉपऑफ सेट करें, कार का प्रकार चुनें।',
    taxi_name: 'नाम', taxi_phone: 'मोबाइल नंबर', taxi_from_gov: 'प्रस्थान प्रांत',
    taxi_from_spot: 'प्रस्थान स्थान', taxi_to_gov: 'गंतव्य प्रांत', taxi_to_spot: 'गंतव्य स्थान',
    taxi_car: 'कार का प्रकार', taxi_date: 'तारीख', taxi_time: 'समय', taxi_pax: 'यात्री',
    taxi_notes: 'अतिरिक्त नोट्स', taxi_submit: '🚕 गणना करें और बुक करें',
    taxi_hint: '🔒 आपका डेटा केवल आपके डिवाइस पर सहेजा जाता है।', taxi_empty_t: 'अभी कोई कार नहीं बुलाई',
    taxi_empty_d: 'फ़ॉर्म भरें और गणना करें पर क्लिक करें।',
    taxi_ph_name: 'राज कुमार', taxi_ph_from: 'उदा: काहिरा हवाई अड्डा - टर्मिनल 3',
    taxi_ph_to: 'उदा: मीना हाउस होटल - गीज़ा', taxi_ph_notes: 'अतिरिक्त विवरण…',
    places_pill: '🏛️ खोजें', places_title: 'देखने लायक जगहें',
    places_desc: 'प्रांत या श्रेणी से फ़िल्टर करें।',
    places_search_ph: 'नाम से खोजें…',
    hotels_pill: '🏨 आवास', hotels_title: 'सर्वोत्तम मूल्य पर बुक करें',
    hotels_desc: 'कीमतें डिफ़ॉल्ट रूप से सबसे सस्ते से सबसे महंगे तक।', hotels_search_ph: 'होटल नाम से खोजें…',
    govs_pill: '🗺️ नक्शा', govs_title: 'मिस्र के 27 प्रांत',
    govs_desc: 'आकर्षण और होटल देखने के लिए किसी प्रांत पर क्लिक करें।',
    bookings_pill: '💾 सहेजा गया', bookings_title: 'मेरी बुकिंग',
    bookings_desc: 'आपकी सभी यात्राएँ और बुकिंग आपके डिवाइस पर।',
    bookings_empty_t: 'अभी कोई बुकिंग नहीं', bookings_empty_d: 'कार बुलाएं या होटल बुक करें।',
    footer_about: 'मिस्र के लिए एक व्यापक यात्रा ऐप।',
    footer_links: 'त्वरित लिंक', footer_services: 'सेवाएँ', footer_contact: 'संपर्क',
    footer_s1: 'हवाई अड्डा पिकअप', footer_s2: 'दैनिक यात्राएँ', footer_s3: 'होटल बुकिंग',
    footer_loc: '📍 काहिरा, मिस्र', footer_rights: 'Nourt Masr — सर्वाधिकार सुरक्षित।',
    all_govs: 'सभी प्रांत', all_cats: 'सभी श्रेणियाँ', all_stars: 'सभी सितारे',
    sort_rating: 'शीर्ष रेटेड', sort_price_asc: 'सबसे सस्ता प्रवेश', sort_price_desc: 'सबसे महंगा', sort_name: 'वर्णानुक्रम',
    hotel_sort_asc: 'कीमत: कम से ज़्यादा', hotel_sort_desc: 'कीमत: ज़्यादा से कम', hotel_sort_stars: 'सबसे ज़्यादा सितारे',
    stars_5: '5 सितारे', stars_4: '4 सितारे', stars_3: '3 सितारे',
    reset: '↺ रीसेट', no_results: 'कोई परिणाम नहीं',
    filter_all: 'सभी', filter_taxi: '🚕 यात्राएँ', filter_hotel: '🏨 होटल', filter_place: '⭐ पसंदीदा',
    clear_all: '🗑️ सभी हटाएँ',
    book: 'अभी बुक करें', details: 'विवरण', add_fav: '⭐ पसंदीदा में जोड़ें',
    search_govs: 'प्रांत', search_places: 'आकर्षण', search_hotels: 'होटल',
    search_none: 'कोई परिणाम नहीं',
    confirm: 'बुकिंग की पुष्टि करें', call: 'कॉल करें', free: 'मुफ़्त', per_night: 'EGP / रात', currency: 'EGP',
    km: 'किमी', min: 'मिनट',
    msg_taxi_ok: 'कीमत की गणना की गई ✅', msg_booking_ok: 'बुकिंग की पुष्टि हुई',
    msg_fav_ok: 'पसंदीदा में जोड़ा गया ⭐', msg_deleted: 'बुकिंग हटाई गई',
    msg_reset_filters: 'फ़िल्टर रीसेट',
    distance: 'दूरी', duration: 'अवधि', car_type: 'कार का प्रकार',
    total: 'अनुमानित कुल', driver: 'चालक', trip_from: 'से', trip_to: 'तक',
    per_person: 'प्रति व्यक्ति', country: 'मिस्र',
    days: 'दिन', nights: 'रातें',
  },
  nl: {
    doc_title: 'Nourt Masr | Uw slimme Egypte-reisgids',
    brand: 'Nourt Masr', brand_sub: 'Bezoek Egypte', preloader_sub: 'Uw reis wordt voorbereid…',
    nav_home: 'Home', nav_taxi: 'Auto Bestellen', nav_places: 'Attracties', nav_hotels: 'Hotels',
    nav_govs: 'Gouvernementen', nav_bookings: 'Mijn Boekingen', nav_order: '🚕 Bestel Nu',
    hero_pill: '🇪🇬 Welkom in Egypte', hero_title_1: 'Welkom in', hero_title_2: 'Egypte',
    hero_sub: 'Uw reis begint hier',
    hero_desc: 'Boek een auto tot uw hoteldeur, verken de beste attracties in alle 27 gouvernementen, en reserveer hotels van goedkoop naar duur.',
    hero_search_ph: 'Zoek gouvernementen, attracties, hotels…', hero_btn_search: 'Zoeken',
    hero_btn_taxi: '🚕 Nu een auto bestellen', hero_btn_hotels: '🏨 Bekijk hotels',
    hero_p1: 'Auto\'s in elk gouvernement', hero_p2: 'Duidelijke prijzen', hero_p3: '24/7 ondersteuning',
    hero_card_title: 'Uw volgende reis', trips_today: 'Ritten vandaag', bookings_today: 'Hotelboekingen',
    chip_rating: '⭐ 4.9 beoordeling', chip_support: '🕒 24/7 ondersteuning',
    services_pill: 'Onze diensten', services_title: 'Alles wat u nodig heeft',
    services_desc: 'Van aankomst op de luchthaven tot de laatste dag.',
    feat1_t: 'Een auto tot uw deur', feat1_d: 'Kies een autotype, stel de punten in.', feat1_tag: '6 autotypes',
    feat2_t: 'Bezienswaardige plaatsen', feat2_d: 'Meer dan 45 attracties in Egypte.', feat2_tag: 'Gecategoriseerd',
    feat3_t: 'Boek van goedkoop naar duur', feat3_d: 'Filter op gouvernement en sterren.', feat3_tag: 'Automatisch totaal',
    feat4_t: 'Alle 27 gouvernementen', feat4_d: 'Van Alexandrië tot Aswan.', feat4_tag: 'Volledige dekking',
    feat5_t: 'Uw boekingen opgeslagen', feat5_d: 'Elke reis of boeking wordt automatisch opgeslagen.', feat5_tag: 'Werkt offline',
    feat6_t: 'Comfortabele donkere modus', feat6_d: 'Schakel met één klik tussen licht en donker.', feat6_tag: 'Comfortabel ontwerp',
    taxi_pill: '🚕 Vervoersdienst', taxi_title: 'Bestel een auto op uw locatie',
    taxi_desc: 'Stel ophaal- en afzetpunten in, kies een autotype.',
    taxi_name: 'Naam', taxi_phone: 'Mobiel', taxi_from_gov: 'Ophaal-gouvernement',
    taxi_from_spot: 'Ophaalpunt', taxi_to_gov: 'Bestemming-gouvernement', taxi_to_spot: 'Afzetpunt',
    taxi_car: 'Autotype', taxi_date: 'Datum', taxi_time: 'Tijd', taxi_pax: 'Passagiers',
    taxi_notes: 'Extra notities', taxi_submit: '🚕 Bereken & Bestel',
    taxi_hint: '🔒 Uw gegevens blijven op uw apparaat.', taxi_empty_t: 'Nog geen auto besteld',
    taxi_empty_d: 'Vul het formulier in en klik op berekenen.',
    taxi_ph_name: 'Jan Jansen', taxi_ph_from: 'Bv. Cairo Airport - Terminal 3',
    taxi_ph_to: 'Bv. Mena House Hotel - Giza', taxi_ph_notes: 'Extra details…',
    places_pill: '🏛️ Ontdek', places_title: 'Bezienswaardige plaatsen',
    places_desc: 'Filter op gouvernement of categorie.',
    places_search_ph: 'Zoek op naam…',
    hotels_pill: '🏨 Verblijf', hotels_title: 'Boek tegen de beste prijs',
    hotels_desc: 'Prijzen standaard van goedkoop naar duur.', hotels_search_ph: 'Zoek op hotelnaam…',
    govs_pill: '🗺️ Kaart', govs_title: 'De 27 gouvernementen van Egypte',
    govs_desc: 'Klik op een gouvernement voor attracties en hotels.',
    bookings_pill: '💾 Opgeslagen', bookings_title: 'Mijn Boekingen',
    bookings_desc: 'Al uw reizen en boekingen op uw apparaat.',
    bookings_empty_t: 'Nog geen boekingen', bookings_empty_d: 'Bestel een auto of boek een hotel.',
    footer_about: 'Een uitgebreide reisapp voor Egypte.',
    footer_links: 'Snelle links', footer_services: 'Diensten', footer_contact: 'Contact',
    footer_s1: 'Luchthavenvervoer', footer_s2: 'Dagtochten', footer_s3: 'Hotelboeking',
    footer_loc: '📍 Caïro, Egypte', footer_rights: 'Nourt Masr — Alle rechten voorbehouden.',
    all_govs: 'Alle gouvernementen', all_cats: 'Alle categorieën', all_stars: 'Alle sterren',
    sort_rating: 'Best beoordeeld', sort_price_asc: 'Goedkoopste toegang', sort_price_desc: 'Duurste', sort_name: 'Alfabetisch',
    hotel_sort_asc: 'Prijs: laag naar hoog', hotel_sort_desc: 'Prijs: hoog naar laag', hotel_sort_stars: 'Meeste sterren',
    stars_5: '5 sterren', stars_4: '4 sterren', stars_3: '3 sterren',
    reset: '↺ Resetten', no_results: 'Geen resultaten',
    filter_all: 'Alles', filter_taxi: '🚕 Ritten', filter_hotel: '🏨 Hotels', filter_place: '⭐ Favorieten',
    clear_all: '🗑️ Alles wissen',
    book: 'Boek nu', details: 'Details', add_fav: '⭐ Voeg toe aan favorieten',
    search_govs: 'Gouvernementen', search_places: 'Attracties', search_hotels: 'Hotels',
    search_none: 'Geen resultaten',
    confirm: 'Bevestig boeking', call: 'Bellen', free: 'Gratis', per_night: 'EGP / nacht', currency: 'EGP',
    km: 'km', min: 'min',
    msg_taxi_ok: 'Prijs berekend ✅', msg_booking_ok: 'Boeking bevestigd',
    msg_fav_ok: 'Toegevoegd aan favorieten ⭐', msg_deleted: 'Boeking verwijderd',
    msg_reset_filters: 'Filters gereset',
    distance: 'Afstand', duration: 'Duur', car_type: 'Autotype',
    total: 'Geschat totaal', driver: 'Chauffeur', trip_from: 'Van', trip_to: 'Naar',
    per_person: 'per persoon', country: 'Egypte',
    days: 'dagen', nights: 'nachten',
  },
  el: {
    doc_title: 'Nourt Masr | Ο έξυπνος οδηγός ταξιδιού στην Αίγυπτο',
    brand: 'Nourt Masr', brand_sub: 'Επισκεφθείτε την Αίγυπτο', preloader_sub: 'Προετοιμασία ταξιδιού…',
    nav_home: 'Αρχική', nav_taxi: 'Καλέστε Αυτοκίνητο', nav_places: 'Αξιοθέατα', nav_hotels: 'Ξενοδοχεία',
    nav_govs: 'Νομοί', nav_bookings: 'Κρατήσεις μου', nav_order: '🚕 Παραγγείλτε Τώρα',
    hero_pill: '🇪🇬 Καλώς ήρθατε στην Αίγυπτο', hero_title_1: 'Καλώς ήρθατε στην', hero_title_2: 'Αίγυπτο',
    hero_sub: 'Το ταξίδι σας ξεκινά εδώ',
    hero_desc: 'Καλέστε αυτοκίνητο μέχρι την πόρτα του ξενοδοχείου, εξερευνήστε τα καλύτερα αξιοθέατα σε 27 νομούς και κάντε κρατήσεις από το φθηνότερο στο ακριβότερο.',
    hero_search_ph: 'Αναζήτηση νομών, αξιοθέατων, ξενοδοχείων…', hero_btn_search: 'Αναζήτηση',
    hero_btn_taxi: '🚕 Καλέστε Αυτοκίνητο', hero_btn_hotels: '🏨 Δείτε Ξενοδοχεία',
    hero_p1: 'Αυτοκίνητα σε κάθε νομό', hero_p2: 'Καθαρές τιμές', hero_p3: 'Υποστήριξη 24/7',
    hero_card_title: 'Το επόμενο ταξίδι σας', trips_today: 'Διαδρομές σήμερα', bookings_today: 'Κρατήσεις',
    chip_rating: '⭐ Βαθμολογία 4.9', chip_support: '🕒 Υποστήριξη 24/7',
    services_pill: 'Υπηρεσίες μας', services_title: 'Ό,τι χρειάζεστε',
    services_desc: 'Από την άφιξη στο αεροδρόμιο μέχρι την τελευταία μέρα.',
    feat1_t: 'Αυτοκίνητο στην πόρτα σας', feat1_d: 'Επιλέξτε τύπο, ορίστε σημεία.', feat1_tag: '6 τύποι',
    feat2_t: 'Μέρη που αξίζει να δείτε', feat2_d: 'Πάνω από 45 αξιοθέατα στην Αίγυπτο.', feat2_tag: 'Κατηγοριοποιημένα',
    feat3_t: 'Από το φθηνότερο στο ακριβότερο', feat3_d: 'Φιλτράρετε κατά νομό και αστέρια.', feat3_tag: 'Αυτόματο σύνολο',
    feat4_t: 'Και οι 27 νομοί', feat4_d: 'Από την Αλεξάνδρεια στο Ασουάν.', feat4_tag: 'Πλήρης κάλυψη',
    feat5_t: 'Οι κρατήσεις σας αποθηκεύονται', feat5_d: 'Κάθε ταξίδι αποθηκεύεται αυτόματα.', feat5_tag: 'Λειτουργεί εκτός σύνδεσης',
    feat6_t: 'Άνετη σκοτεινή λειτουργία', feat6_d: 'Εναλλαγή φωτεινής/σκοτεινής με ένα κλικ.', feat6_tag: 'Άνετος σχεδιασμός',
    taxi_pill: '🚕 Υπηρεσία μεταφοράς', taxi_title: 'Καλέστε αυτοκίνητο στην τοποθεσία σας',
    taxi_desc: 'Ορίστε σημεία παραλαβής και προορισμού, επιλέξτε τύπο.',
    taxi_name: 'Όνομα', taxi_phone: 'Κινητό', taxi_from_gov: 'Νομός αναχώρησης',
    taxi_from_spot: 'Σημείο παραλαβής', taxi_to_gov: 'Νομός προορισμού', taxi_to_spot: 'Σημείο προορισμού',
    taxi_car: 'Τύπος αυτοκινήτου', taxi_date: 'Ημερομηνία', taxi_time: 'Ώρα', taxi_pax: 'Επιβάτες',
    taxi_notes: 'Πρόσθετες σημειώσεις', taxi_submit: '🚕 Υπολογισμός & Παραγγελία',
    taxi_hint: '🔒 Τα δεδομένα σας μένουν στη συσκευή σας.', taxi_empty_t: 'Καμία παραγγελία',
    taxi_empty_d: 'Συμπληρώστε τη φόρμα και πατήστε υπολογισμό.',
    taxi_ph_name: 'Γιώργος Παπαδόπουλος', taxi_ph_from: 'π.χ. Αεροδρόμιο Καΐρου - Τερματικό 3',
    taxi_ph_to: 'π.χ. Ξενοδοχείο Mena House - Γκίζα', taxi_ph_notes: 'Πρόσθετες λεπτομέρειες…',
    places_pill: '🏛️ Ανακαλύψτε', places_title: 'Μέρη που αξίζει να δείτε',
    places_desc: 'Φιλτράρετε κατά νομό ή κατηγορία.',
    places_search_ph: 'Αναζήτηση με όνομα…',
    hotels_pill: '🏨 Διαμονή', hotels_title: 'Κάντε κράτηση στην καλύτερη τιμή',
    hotels_desc: 'Τιμές ταξινομημένες από τη φθηνότερη στην ακριβότερη.', hotels_search_ph: 'Αναζήτηση με όνομα ξενοδοχείου…',
    govs_pill: '🗺️ Χάρτης', govs_title: 'Οι 27 νομοί της Αιγύπτου',
    govs_desc: 'Πατήστε έναν νομό για αξιοθέατα και ξενοδοχεία.',
    bookings_pill: '💾 Αποθηκευμένα', bookings_title: 'Κρατήσεις μου',
    bookings_desc: 'Όλα τα ταξίδια και οι κρατήσεις σας στη συσκευή σας.',
    bookings_empty_t: 'Δεν υπάρχουν κρατήσεις', bookings_empty_d: 'Παραγγείλτε αυτοκίνητο ή κάντε κράτηση ξενοδοχείου.',
    footer_about: 'Μια ολοκληρωμένη ταξιδιωτική εφαρμογή για την Αίγυπτο.',
    footer_links: 'Γρήγοροι σύνδεσμοι', footer_services: 'Υπηρεσίες', footer_contact: 'Επικοινωνία',
    footer_s1: 'Μεταφορά αεροδρομίου', footer_s2: 'Ημερήσιες εκδρομές', footer_s3: 'Κράτηση ξενοδοχείου',
    footer_loc: '📍 Κάιρο, Αίγυπτος', footer_rights: 'Nourt Masr — Όλα τα δικαιώματα διατηρούνται.',
    all_govs: 'Όλοι οι νομοί', all_cats: 'Όλες οι κατηγορίες', all_stars: 'Όλα τα αστέρια',
    sort_rating: 'Καλύτερα αξιολογημένα', sort_price_asc: 'Φθηνότερη είσοδος', sort_price_desc: 'Ακριβότερο', sort_name: 'Αλφαβητικά',
    hotel_sort_asc: 'Τιμή: αύξουσα', hotel_sort_desc: 'Τιμή: φθίνουσα', hotel_sort_stars: 'Περισσότερα αστέρια',
    stars_5: '5 αστέρια', stars_4: '4 αστέρια', stars_3: '3 αστέρια',
    reset: '↺ Επαναφορά', no_results: 'Κανένα αποτέλεσμα',
    filter_all: 'Όλα', filter_taxi: '🚕 Διαδρομές', filter_hotel: '🏨 Ξενοδοχεία', filter_place: '⭐ Αγαπημένα',
    clear_all: '🗑️ Διαγραφή όλων',
    book: 'Κράτηση', details: 'Λεπτομέρειες', add_fav: '⭐ Προσθήκη στα αγαπημένα',
    search_govs: 'Νομοί', search_places: 'Αξιοθέατα', search_hotels: 'Ξενοδοχεία',
    search_none: 'Κανένα αποτέλεσμα',
    confirm: 'Επιβεβαίωση κράτησης', call: 'Κλήση', free: 'Δωρεάν', per_night: 'EGP / νύχτα', currency: 'EGP',
    km: 'χλμ', min: 'λεπ',
    msg_taxi_ok: 'Η τιμή υπολογίστηκε ✅', msg_booking_ok: 'Η κράτηση επιβεβαιώθηκε',
    msg_fav_ok: 'Προστέθηκε στα αγαπημένα ⭐', msg_deleted: 'Η κράτηση διαγράφηκε',
    msg_reset_filters: 'Τα φίλτρα επαναφέρθηκαν',
    distance: 'Απόσταση', duration: 'Διάρκεια', car_type: 'Τύπος αυτοκινήτου',
    total: 'Εκτιμώμενο σύνολο', driver: 'Οδηγός', trip_from: 'Από', trip_to: 'Προς',
    per_person: 'ανά άτομο', country: 'Αίγυπτος',
    days: 'ημέρες', nights: 'νύχτες',
  },
  pl: {
    doc_title: 'Nourt Masr | Inteligentny przewodnik po Egipcie',
    brand: 'Nourt Masr', brand_sub: 'Odwiedź Egipt', preloader_sub: 'Przygotowujemy Twoją podróż…',
    nav_home: 'Strona główna', nav_taxi: 'Zamów Auto', nav_places: 'Atrakcje', nav_hotels: 'Hotele',
    nav_govs: 'Gubernatorstwa', nav_bookings: 'Moje Rezerwacje', nav_order: '🚕 Zamów Teraz',
    hero_pill: '🇪🇬 Witamy w Egipcie', hero_title_1: 'Witamy w', hero_title_2: 'Egipcie',
    hero_sub: 'Twoja podróż zaczyna się tutaj',
    hero_desc: 'Zamów auto pod drzwi hotelu, odkryj najlepsze atrakcje w 27 gubernatorstwach i rezerwuj hotele od najtańszych do najdroższych.',
    hero_search_ph: 'Szukaj gubernatorstw, atrakcji, hoteli…', hero_btn_search: 'Szukaj',
    hero_btn_taxi: '🚕 Zamów Auto Teraz', hero_btn_hotels: '🏨 Zobacz Hotele',
    hero_p1: 'Auta w każdym gubernatorstwie', hero_p2: 'Jasne ceny', hero_p3: 'Wsparcie 24/7',
    hero_card_title: 'Twoja Następna Podróż', trips_today: 'Przejazdy dzisiaj', bookings_today: 'Rezerwacje hoteli',
    chip_rating: '⭐ Ocena 4.9', chip_support: '🕒 Wsparcie 24/7',
    services_pill: 'Nasze Usługi', services_title: 'Wszystko czego potrzebujesz',
    services_desc: 'Od przylotu na lotnisko do ostatniego dnia.',
    feat1_t: 'Auto pod Twoje drzwi', feat1_d: 'Wybierz typ auta, ustaw punkty.', feat1_tag: '6 typów aut',
    feat2_t: 'Miejsca warte zobaczenia', feat2_d: 'Ponad 45 atrakcji w Egipcie.', feat2_tag: 'Kategoryzowane',
    feat3_t: 'Od najtańszych do najdroższych', feat3_d: 'Filtruj według gubernatorstwa i gwiazdek.', feat3_tag: 'Automatyczna suma',
    feat4_t: 'Wszystkie 27 gubernatorstw', feat4_d: 'Od Aleksandrii do Asuanu.', feat4_tag: 'Pełne pokrycie',
    feat5_t: 'Twoje rezerwacje zapisane', feat5_d: 'Każda podróż zapisuje się automatycznie.', feat5_tag: 'Działa offline',
    feat6_t: 'Komfortowy tryb ciemny', feat6_d: 'Przełączaj jasny/ciemny jednym kliknięciem.', feat6_tag: 'Wygodny design',
    taxi_pill: '🚕 Usługa Transportowa', taxi_title: 'Zamów auto na swoją lokalizację',
    taxi_desc: 'Ustaw punkty odbioru i celu, wybierz typ auta.',
    taxi_name: 'Imię', taxi_phone: 'Telefon', taxi_from_gov: 'Gubernatorstwo Odjazdu',
    taxi_from_spot: 'Punkt Odjazdu', taxi_to_gov: 'Gubernatorstwo Przyjazdu', taxi_to_spot: 'Punkt Docelowy',
    taxi_car: 'Typ Auta', taxi_date: 'Data', taxi_time: 'Godzina', taxi_pax: 'Pasażerowie',
    taxi_notes: 'Dodatkowe notatki', taxi_submit: '🚕 Oblicz i Zamów',
    taxi_hint: '🔒 Twoje dane pozostają na urządzeniu.', taxi_empty_t: 'Nie zamówiono auta',
    taxi_empty_d: 'Wypełnij formularz i kliknij oblicz.',
    taxi_ph_name: 'Jan Kowalski', taxi_ph_from: 'Np. Lotnisko w Kairze - Terminal 3',
    taxi_ph_to: 'Np. Hotel Mena House - Giza', taxi_ph_notes: 'Dodatkowe szczegóły…',
    places_pill: '🏛️ Odkryj', places_title: 'Miejsca warte zobaczenia',
    places_desc: 'Filtruj według gubernatorstwa lub kategorii.',
    places_search_ph: 'Szukaj po nazwie…',
    hotels_pill: '🏨 Nocleg', hotels_title: 'Rezerwuj w najlepszej cenie',
    hotels_desc: 'Ceny domyślnie od najtańszych do najdroższych.', hotels_search_ph: 'Szukaj po nazwie hotelu…',
    govs_pill: '🗺️ Mapa', govs_title: '27 gubernatorstw Egiptu',
    govs_desc: 'Kliknij gubernatorstwo, aby zobaczyć atrakcje i hotele.',
    bookings_pill: '💾 Zapisane', bookings_title: 'Moje Rezerwacje',
    bookings_desc: 'Wszystkie podróże i rezerwacje na urządzeniu.',
    bookings_empty_t: 'Brak rezerwacji', bookings_empty_d: 'Zamów auto lub zarezerwuj hotel.',
    footer_about: 'Kompleksowa aplikacja podróżnicza dla Egiptu.',
    footer_links: 'Szybkie linki', footer_services: 'Usługi', footer_contact: 'Kontakt',
    footer_s1: 'Transfer lotniskowy', footer_s2: 'Wycieczki dzienne', footer_s3: 'Rezerwacja hotelu',
    footer_loc: '📍 Kair, Egipt', footer_rights: 'Nourt Masr — Wszelkie prawa zastrzeżone.',
    all_govs: 'Wszystkie gubernatorstwa', all_cats: 'Wszystkie kategorie', all_stars: 'Wszystkie gwiazdki',
    sort_rating: 'Najwyżej oceniane', sort_price_asc: 'Najtańszy wstęp', sort_price_desc: 'Najdroższy', sort_name: 'Alfabetycznie',
    hotel_sort_asc: 'Cena: rosnąco', hotel_sort_desc: 'Cena: malejąco', hotel_sort_stars: 'Najwięcej gwiazdek',
    stars_5: '5 gwiazdek', stars_4: '4 gwiazdki', stars_3: '3 gwiazdki',
    reset: '↺ Resetuj', no_results: 'Brak wyników',
    filter_all: 'Wszystko', filter_taxi: '🚕 Przejazdy', filter_hotel: '🏨 Hotele', filter_place: '⭐ Ulubione',
    clear_all: '🗑️ Wyczyść wszystko',
    book: 'Zarezerwuj', details: 'Szczegóły', add_fav: '⭐ Dodaj do ulubionych',
    search_govs: 'Gubernatorstwa', search_places: 'Atrakcje', search_hotels: 'Hotele',
    search_none: 'Brak wyników',
    confirm: 'Potwierdź rezerwację', call: 'Zadzwoń', free: 'Bezpłatnie', per_night: 'EGP / noc', currency: 'EGP',
    km: 'km', min: 'min',
    msg_taxi_ok: 'Cena obliczona ✅', msg_booking_ok: 'Rezerwacja potwierdzona',
    msg_fav_ok: 'Dodano do ulubionych ⭐', msg_deleted: 'Rezerwacja usunięta',
    msg_reset_filters: 'Filtry zresetowane',
    distance: 'Odległość', duration: 'Czas trwania', car_type: 'Typ Auta',
    total: 'Szacowana suma', driver: 'Kierowca', trip_from: 'Z', trip_to: 'Do',
    per_person: 'za osobę', country: 'Egipt',
    days: 'dni', nights: 'nocy',
  },
};

/* ====================== البيانات ====================== */
const GOVERNORATES = [
  { id: 'cairo',     name: 'القاهرة',       name_en: 'Cairo',        emoji: '🏙️', region: 'القاهرة الكبرى', region_en: 'Greater Cairo', lat: 30.0444, lng: 31.2357 },
  { id: 'giza',      name: 'الجيزة',        name_en: 'Giza',         emoji: '🐪', region: 'القاهرة الكبرى', region_en: 'Greater Cairo', lat: 30.0131, lng: 31.2089 },
  { id: 'qalyubia',  name: 'القليوبية',     name_en: 'Qalyubia',     emoji: '🌾', region: 'القاهرة الكبرى', region_en: 'Greater Cairo', lat: 30.4188, lng: 31.2117 },
  { id: 'alex',      name: 'الإسكندرية',    name_en: 'Alexandria',   emoji: '⚓', region: 'الدلتا والساحل', region_en: 'Delta & Coast', lat: 31.2001, lng: 29.9187 },
  { id: 'beheira',   name: 'البحيرة',       name_en: 'Beheira',      emoji: '🌊', region: 'الدلتا والساحل', region_en: 'Delta & Coast', lat: 30.8481, lng: 30.3436 },
  { id: 'matrouh',   name: 'مطروح',         name_en: 'Matrouh',      emoji: '🏖️', region: 'الدلتا والساحل', region_en: 'Delta & Coast', lat: 31.3543, lng: 27.2373 },
  { id: 'damietta',  name: 'دمياط',         name_en: 'Damietta',     emoji: '🐟', region: 'الدلتا والساحل', region_en: 'Delta & Coast', lat: 31.4165, lng: 31.8133 },
  { id: 'kafr',      name: 'كفر الشيخ',     name_en: 'Kafr El Sheikh', emoji: '🐄', region: 'الدلتا والساحل', region_en: 'Delta & Coast', lat: 31.1107, lng: 30.9388 },
  { id: 'dakahlia',  name: 'الدقهلية',      name_en: 'Dakahlia',     emoji: '🌾', region: 'الدلتا والساحل', region_en: 'Delta & Coast', lat: 31.0409, lng: 31.3785 },
  { id: 'gharbia',   name: 'الغربية',       name_en: 'Gharbia',      emoji: '🌻', region: 'الدلتا والساحل', region_en: 'Delta & Coast', lat: 30.8754, lng: 31.0335 },
  { id: 'monufia',   name: 'المنوفية',      name_en: 'Monufia',      emoji: '🌾', region: 'الدلتا والساحل', region_en: 'Delta & Coast', lat: 30.5972, lng: 30.9876 },
  { id: 'sharqia',   name: 'الشرقية',       name_en: 'Sharqia',      emoji: '🌳', region: 'الدلتا والساحل', region_en: 'Delta & Coast', lat: 30.7327, lng: 31.7195 },
  { id: 'portsaid',  name: 'بورسعيد',       name_en: 'Port Said',    emoji: '🚢', region: 'القناة وسيناء', region_en: 'Canal & Sinai', lat: 31.2653, lng: 32.3019 },
  { id: 'ismailia',  name: 'الإسماعيلية',   name_en: 'Ismailia',     emoji: '⛵', region: 'القناة وسيناء', region_en: 'Canal & Sinai', lat: 30.5965, lng: 32.2715 },
  { id: 'suez',      name: 'السويس',        name_en: 'Suez',         emoji: '🚢', region: 'القناة وسيناء', region_en: 'Canal & Sinai', lat: 29.9668, lng: 32.5498 },
  { id: 'nsinai',    name: 'شمال سيناء',    name_en: 'North Sinai',  emoji: '🏜️', region: 'القناة وسيناء', region_en: 'Canal & Sinai', lat: 31.1230, lng: 33.8033 },
  { id: 'ssinai',    name: 'جنوب سيناء',    name_en: 'South Sinai',  emoji: '🏝️', region: 'القناة وسيناء', region_en: 'Canal & Sinai', lat: 28.9213, lng: 34.0621 },
  { id: 'fayoum',    name: 'الفيوم',        name_en: 'Fayoum',       emoji: '🌿', region: 'الصعيد', region_en: 'Upper Egypt', lat: 29.3084, lng: 30.8428 },
  { id: 'benisuef',  name: 'بني سويف',      name_en: 'Beni Suef',    emoji: '🌾', region: 'الصعيد', region_en: 'Upper Egypt', lat: 29.0661, lng: 31.0994 },
  { id: 'minya',     name: 'المنيا',        name_en: 'Minya',        emoji: '🏛️', region: 'الصعيد', region_en: 'Upper Egypt', lat: 28.1099, lng: 30.7503 },
  { id: 'assiut',    name: 'أسيوط',         name_en: 'Assiut',       emoji: '🕌', region: 'الصعيد', region_en: 'Upper Egypt', lat: 27.1809, lng: 31.1837 },
  { id: 'sohag',     name: 'سوهاج',         name_en: 'Sohag',        emoji: '🏛️', region: 'الصعيد', region_en: 'Upper Egypt', lat: 26.5591, lng: 31.6957 },
  { id: 'qena',      name: 'قنا',           name_en: 'Qena',         emoji: '🏺', region: 'الصعيد', region_en: 'Upper Egypt', lat: 26.1551, lng: 32.7160 },
  { id: 'luxor',     name: 'الأقصر',        name_en: 'Luxor',        emoji: '🏺', region: 'الصعيد', region_en: 'Upper Egypt', lat: 25.6872, lng: 32.6396 },
  { id: 'aswan',     name: 'أسوان',         name_en: 'Aswan',        emoji: '🛶', region: 'الصعيد', region_en: 'Upper Egypt', lat: 24.0889, lng: 32.8998 },
  { id: 'redsea',    name: 'البحر الأحمر',  name_en: 'Red Sea',      emoji: '🐠', region: 'الصحراء', region_en: 'Desert', lat: 26.0926, lng: 33.8106 },
  { id: 'newvalley', name: 'الوادي الجديد', name_en: 'New Valley',   emoji: '🏜️', region: 'الصحراء', region_en: 'Desert', lat: 25.4939, lng: 30.5498 },
];

const CAR_TYPES = [
  { id: 'economy', name: 'اقتصادي',   name_en: 'Economy',  emoji: '🚗', perKm: 15, base: 25, seats: 4 },
  { id: 'comfort', name: 'مريح',       name_en: 'Comfort',  emoji: '🚙', perKm: 20, base: 35, seats: 4 },
  { id: 'van',     name: 'فان عائلي',  name_en: 'Family Van', emoji: '🚐', perKm: 28, base: 50, seats: 8 },
  { id: 'vip',     name: 'VIP',        name_en: 'VIP',      emoji: '🚘', perKm: 42, base: 80, seats: 4 },
  { id: 'limo',    name: 'ليموزين',    name_en: 'Limousine',emoji: '🚖', perKm: 60, base: 120, seats: 4 },
  { id: 'bus',     name: 'باص سياحي',  name_en: 'Tour Bus', emoji: '🚌', perKm: 85, base: 200, seats: 40 },
];

const PLACES = [
  { id: 'p1',  name: 'أهرامات الجيزة',         name_en: 'Pyramids of Giza',         gov: 'giza',      cat: 'أثري',   cat_en: 'Historical', emoji: '🐪', rating: 4.9, price: 200, desc: 'أعجوبة الدنيا الوحيدة الباقية.', desc_en: 'The only surviving wonder of the ancient world.' },
  { id: 'p2',  name: 'أبو الهول',              name_en: 'Great Sphinx',             gov: 'giza',      cat: 'أثري',   cat_en: 'Historical', emoji: '🦁', rating: 4.8, price: 150, desc: 'التمثال الأسطوري الذي يحرس الأهرامات.', desc_en: 'The legendary statue guarding the Pyramids.' },
  { id: 'p3',  name: 'المتحف المصري',          name_en: 'Egyptian Museum',          gov: 'cairo',     cat: 'متحف',   cat_en: 'Museum', emoji: '🏛️', rating: 4.8, price: 300, desc: 'أكبر مجموعة من الآثار المصرية.', desc_en: 'The largest collection of Egyptian antiquities.' },
  { id: 'p4',  name: 'قلعة صلاح الدين',        name_en: 'Saladin Citadel',          gov: 'cairo',     cat: 'أثري',   cat_en: 'Historical', emoji: '🏰', rating: 4.7, price: 180, desc: 'قلعة تاريخية بمناظر بانورامية.', desc_en: 'Historic citadel with panoramic views.' },
  { id: 'p5',  name: 'خان الخليلي',            name_en: 'Khan El Khalili',          gov: 'cairo',     cat: 'سوق',    cat_en: 'Market', emoji: '🏮', rating: 4.6, price: 0, desc: 'أشهر سوق تقليدي في مصر.', desc_en: "Egypt's most famous traditional market." },
  { id: 'p6',  name: 'الجامع الأزهر',          name_en: 'Al-Azhar Mosque',          gov: 'cairo',     cat: 'ديني',   cat_en: 'Religious', emoji: '🕌', rating: 4.9, price: 0, desc: 'من أعرق المساجد في العالم الإسلامي.', desc_en: 'One of the oldest mosques in the Islamic world.' },
  { id: 'p7',  name: 'برج القاهرة',            name_en: 'Cairo Tower',              gov: 'cairo',     cat: 'معلم',   cat_en: 'Landmark', emoji: '🗼', rating: 4.5, price: 250, desc: 'أعلى نقطة لمشاهدة القاهرة.', desc_en: 'The highest viewpoint over Cairo.' },
  { id: 'p8',  name: 'المتحف القومي للحضارة',  name_en: 'National Museum of Civilization', gov: 'cairo', cat: 'متحف', cat_en: 'Museum', emoji: '🏺', rating: 4.9, price: 400, desc: 'متحف حديث يضم المومياوات الملكية.', desc_en: 'Modern museum housing the royal mummies.' },
  { id: 'p9',  name: 'مكتبة الإسكندرية',       name_en: 'Bibliotheca Alexandrina',  gov: 'alex',      cat: 'معلم',   cat_en: 'Landmark', emoji: '📚', rating: 4.8, price: 70, desc: 'صرح ثقافي حديث على ساحل المتوسط.', desc_en: 'Modern cultural landmark on the Mediterranean.' },
  { id: 'p10', name: 'قلعة قايتباي',           name_en: 'Qaitbay Citadel',          gov: 'alex',      cat: 'أثري',   cat_en: 'Historical', emoji: '🏰', rating: 4.7, price: 100, desc: 'قلعة على البحر مكان فنار الإسكندرية.', desc_en: 'A sea fortress on the ancient lighthouse site.' },
  { id: 'p11', name: 'المسرح الروماني',        name_en: 'Roman Amphitheatre',       gov: 'alex',      cat: 'أثري',   cat_en: 'Historical', emoji: '🏛️', rating: 4.5, price: 80, desc: 'أثر روماني فريد في الإسكندرية.', desc_en: 'Unique Roman ruin in Alexandria.' },
  { id: 'p12', name: 'كورنيش الإسكندرية',      name_en: 'Alexandria Corniche',      gov: 'alex',      cat: 'ترفيه',  cat_en: 'Leisure', emoji: '🌊', rating: 4.8, price: 0, desc: 'أجمل كورنيش في مصر.', desc_en: "Egypt's most beautiful corniche." },
  { id: 'p13', name: 'معبد الكرنك',            name_en: 'Karnak Temple',            gov: 'luxor',     cat: 'أثري',   cat_en: 'Historical', emoji: '🏛️', rating: 5.0, price: 300, desc: 'أعظم مجمع معابد في العالم القديم.', desc_en: "The greatest temple complex of the ancient world." },
  { id: 'p14', name: 'وادي الملوك',            name_en: 'Valley of the Kings',      gov: 'luxor',     cat: 'أثري',   cat_en: 'Historical', emoji: '⛰️', rating: 4.9, price: 350, desc: 'مقابر الفراعنة المنحوتة في الصخر.', desc_en: 'Rock-cut tombs of the pharaohs.' },
  { id: 'p15', name: 'معبد الأقصر',            name_en: 'Luxor Temple',             gov: 'luxor',     cat: 'أثري',   cat_en: 'Historical', emoji: '🏛️', rating: 4.9, price: 260, desc: 'معبد مهيب في قلب مدينة الأقصر.', desc_en: 'Majestic temple in the heart of Luxor.' },
  { id: 'p16', name: 'معبد حتشبسوت',           name_en: 'Hatshepsut Temple',        gov: 'luxor',     cat: 'أثري',   cat_en: 'Historical', emoji: '🏛️', rating: 4.8, price: 220, desc: 'معبد جنائزي بتصميم معماري مذهل.', desc_en: 'Mortuary temple with amazing architecture.' },
  { id: 'p17', name: 'معبد أبو سمبل',          name_en: 'Abu Simbel Temples',       gov: 'aswan',     cat: 'أثري',   cat_en: 'Historical', emoji: '🗿', rating: 5.0, price: 400, desc: 'معبد رمسيس الثاني المنحوت في الصخر.', desc_en: "Ramses II's rock-cut temple." },
  { id: 'p18', name: 'السد العالي',            name_en: 'High Dam',                 gov: 'aswan',     cat: 'معلم',   cat_en: 'Landmark', emoji: '🌊', rating: 4.6, price: 100, desc: 'أعظم مشروع هندسي في مصر الحديثة.', desc_en: "Egypt's greatest modern engineering feat." },
  { id: 'p19', name: 'جزيرة النباتات',         name_en: 'Botanical Island',         gov: 'aswan',     cat: 'طبيعة',  cat_en: 'Nature', emoji: '🌴', rating: 4.7, price: 120, desc: 'حديقة نباتية نادرة في وسط النيل.', desc_en: 'Rare botanical garden in the Nile.' },
  { id: 'p20', name: 'معبد فيلة',              name_en: 'Philae Temple',            gov: 'aswan',     cat: 'أثري',   cat_en: 'Historical', emoji: '🏛️', rating: 4.9, price: 280, desc: 'معبد الإلهة إيزيس على جزيرة خلابة.', desc_en: 'Temple of Isis on a stunning island.' },
  { id: 'p21', name: 'دير سانت كاترين',        name_en: 'St. Catherine Monastery',  gov: 'ssinai',    cat: 'ديني',   cat_en: 'Religious', emoji: '⛪', rating: 4.9, price: 150, desc: 'أقدم دير مسيحي مأهول في العالم.', desc_en: 'The oldest inhabited Christian monastery.' },
  { id: 'p22', name: 'جبل موسى',               name_en: 'Mount Sinai',              gov: 'ssinai',    cat: 'طبيعة',  cat_en: 'Nature', emoji: '⛰️', rating: 4.9, price: 0, desc: 'قمم سيناء الشامخة، رحلة روحانية.', desc_en: 'Sinai peaks — a spiritual journey.' },
  { id: 'p23', name: 'شرم الشيخ',              name_en: 'Sharm El Sheikh',          gov: 'ssinai',    cat: 'شاطئ',   cat_en: 'Beach', emoji: '🏖️', rating: 4.9, price: 0, desc: 'مدينة السلام، أجمل شواطئ سيناء.', desc_en: 'City of Peace — Sinai\'s finest beaches.' },
  { id: 'p24', name: 'دهب',                    name_en: 'Dahab',                    gov: 'ssinai',    cat: 'شاطئ',   cat_en: 'Beach', emoji: '🤿', rating: 4.9, price: 0, desc: 'جنة الغواصين ورواد الرياضات المائية.', desc_en: 'Paradise for divers and water sports.' },
  { id: 'p25', name: 'نويبع',                  name_en: 'Nuweiba',                  gov: 'ssinai',    cat: 'شاطئ',   cat_en: 'Beach', emoji: '⛵', rating: 4.6, price: 0, desc: 'مدينة ساحلية هادئة على خليج العقبة.', desc_en: 'Quiet coastal town on the Gulf of Aqaba.' },
  { id: 'p26', name: 'الغردقة',                name_en: 'Hurghada',                 gov: 'redsea',    cat: 'شاطئ',   cat_en: 'Beach', emoji: '🏝️', rating: 4.8, price: 0, desc: 'عاصمة السياحة الشاطئية على البحر الأحمر.', desc_en: 'Red Sea beach tourism capital.' },
  { id: 'p27', name: 'جزيرة الجفتون',          name_en: 'Giftun Island',            gov: 'redsea',    cat: 'طبيعة',  cat_en: 'Nature', emoji: '🏝️', rating: 4.9, price: 500, desc: 'جزيرة ساحرة برحلات يومية من الغردقة.', desc_en: 'Charming island with daily boat trips.' },
  { id: 'p28', name: 'محمية رأس محمد',         name_en: 'Ras Mohammed Reserve',     gov: 'ssinai',    cat: 'طبيعة',  cat_en: 'Nature', emoji: '🐠', rating: 4.8, price: 300, desc: 'أول محمية طبيعية في مصر.', desc_en: "Egypt's first nature reserve." },
  { id: 'p29', name: 'واحة سيوة',              name_en: 'Siwa Oasis',               gov: 'matrouh',   cat: 'طبيعة',  cat_en: 'Nature', emoji: '🌴', rating: 4.9, price: 0, desc: 'واحة ساحرة في قلب الصحراء الغربية.', desc_en: 'Charming oasis in the Western Desert.' },
  { id: 'p30', name: 'شاطئ عجيبة',             name_en: 'Agiba Beach',              gov: 'matrouh',   cat: 'شاطئ',   cat_en: 'Beach', emoji: '🏖️', rating: 4.7, price: 50, desc: 'تشكيلات صخرية مذهلة على الساحل.', desc_en: 'Stunning rock formations on the coast.' },
  { id: 'p31', name: 'قلعة شالي',              name_en: 'Shali Fortress',           gov: 'matrouh',   cat: 'أثري',   cat_en: 'Historical', emoji: '🏛️', rating: 4.6, price: 30, desc: 'قلعة قديمة من الطين في سيوة.', desc_en: 'Ancient mud-brick fortress in Siwa.' },
  { id: 'p32', name: 'جبل الدكرور',            name_en: 'Dakrour Mountain',         gov: 'matrouh',   cat: 'طبيعة',  cat_en: 'Nature', emoji: '⛰️', rating: 4.5, price: 0, desc: 'مكان للتأمل والاستشفاء في سيوة.', desc_en: 'A place for meditation in Siwa.' },
  { id: 'p33', name: 'وادي الحيتان',           name_en: 'Wadi El Hitan',            gov: 'fayoum',    cat: 'طبيعة',  cat_en: 'Nature', emoji: '🦴', rating: 4.8, price: 200, desc: 'موقع تراث عالمي بحفريات حيتان.', desc_en: 'World Heritage site with whale fossils.' },
  { id: 'p34', name: 'بحيرة قارون',            name_en: 'Lake Qarun',               gov: 'fayoum',    cat: 'طبيعة',  cat_en: 'Nature', emoji: '🌅', rating: 4.6, price: 0, desc: 'بحيرة تاريخية بمناظر خلابة.', desc_en: 'Historic lake with beautiful scenery.' },
  { id: 'p35', name: 'شلالات وادي الريان',     name_en: 'Wadi El Rayan Falls',      gov: 'fayoum',    cat: 'طبيعة',  cat_en: 'Nature', emoji: '💧', rating: 4.7, price: 30, desc: 'شلالات فريدة وسط الصحراء.', desc_en: 'Unique waterfalls in the desert.' },
  { id: 'p36', name: 'قصر قارون',              name_en: 'Qasr Qarun',               gov: 'fayoum',    cat: 'أثري',   cat_en: 'Historical', emoji: '🏛️', rating: 4.5, price: 40, desc: 'أطلال معبد يوناني روماني.', desc_en: 'Ruins of a Greco-Roman temple.' },
  { id: 'p37', name: 'متحف ملوي',              name_en: 'Mallawi Museum',           gov: 'minya',     cat: 'متحف',   cat_en: 'Museum', emoji: '🏺', rating: 4.5, price: 80, desc: 'متحف يضم آثار من المنيا.', desc_en: 'Museum with Minya antiquities.' },
  { id: 'p38', name: 'تل العمارنة',            name_en: 'Tell El Amarna',           gov: 'minya',     cat: 'أثري',   cat_en: 'Historical', emoji: '🏛️', rating: 4.6, price: 60, desc: 'عاصمة إخناتون القديمة.', desc_en: "Akhenaten's ancient capital." },
  { id: 'p39', name: 'دير المحرق',             name_en: 'Al Muharraq Monastery',    gov: 'assiut',    cat: 'ديني',   cat_en: 'Religious', emoji: '⛪', rating: 4.8, price: 0, desc: 'من أقدس الأديرة القبطية.', desc_en: 'One of the holiest Coptic monasteries.' },
  { id: 'p40', name: 'دير العذراء',            name_en: 'Virgin Mary Monastery',    gov: 'sohag',     cat: 'ديني',   cat_en: 'Religious', emoji: '⛪', rating: 4.7, price: 0, desc: 'دير جبلي تاريخي.', desc_en: 'Historic mountain monastery.' },
  { id: 'p41', name: 'معبد دندرة',             name_en: 'Dendera Temple',           gov: 'qena',      cat: 'أثري',   cat_en: 'Historical', emoji: '🏛️', rating: 4.9, price: 180, desc: 'معبد حتحور بنقوشه الفلكية.', desc_en: 'Temple of Hathor with astronomical carvings.' },
  { id: 'p42', name: 'معبد إدفو',              name_en: 'Edfu Temple',              gov: 'qena',      cat: 'أثري',   cat_en: 'Historical', emoji: '🏛️', rating: 4.8, price: 200, desc: 'أفضل معبد محفوظ من العصر البطلمي.', desc_en: 'Best-preserved Ptolemaic temple.' },
  { id: 'p43', name: 'كوم أمبو',               name_en: 'Kom Ombo',                 gov: 'aswan',     cat: 'أثري',   cat_en: 'Historical', emoji: '🏛️', rating: 4.7, price: 160, desc: 'معبد مزدوج للإلهين سوبك وحورس.', desc_en: 'Double temple to Sobek and Horus.' },
  { id: 'p44', name: 'سوق وكالة الغوري',       name_en: 'Wikala El Ghouri',         gov: 'cairo',     cat: 'سوق',    cat_en: 'Market', emoji: '🏮', rating: 4.6, price: 0, desc: 'وكالة تاريخية من العصر المملوكي.', desc_en: 'Historic Mamluk-era market.' },
  { id: 'p45', name: 'حدائق المنتزه',          name_en: 'Montazah Gardens',         gov: 'alex',      cat: 'طبيعة',  cat_en: 'Nature', emoji: '🌳', rating: 4.8, price: 40, desc: 'قصر وحدائق ملكية على الساحل.', desc_en: 'Royal palace and gardens on the coast.' },
  { id: 'p46', name: 'شاطئ الموتيلات',         name_en: 'Motels Beach',             gov: 'beheira',   cat: 'شاطئ',   cat_en: 'Beach', emoji: '🏖️', rating: 4.4, price: 30, desc: 'شاطئ هادئ على البحر المتوسط.', desc_en: 'Quiet Mediterranean beach.' },
];

const HOTELS = [
  { id: 'h1',  name: 'فور سيزونز نايل بلازا',   name_en: 'Four Seasons Nile Plaza',  gov: 'cairo',  stars: 5, price: 6500, rating: 4.9, emoji: '🏨' },
  { id: 'h2',  name: 'ريتز كارلتون القاهرة',     name_en: 'The Ritz-Carlton Cairo',   gov: 'cairo',  stars: 5, price: 5200, rating: 4.8, emoji: '🏨' },
  { id: 'h3',  name: 'ماريوت الزمالك',           name_en: 'Marriott Zamalek',         gov: 'cairo',  stars: 5, price: 4200, rating: 4.7, emoji: '🏨' },
  { id: 'h4',  name: 'سوفيتيل الجزيرة',          name_en: 'Sofitel El Gezirah',       gov: 'cairo',  stars: 5, price: 3800, rating: 4.7, emoji: '🏨' },
  { id: 'h5',  name: 'فندق نايل فيو',            name_en: 'Nile View Hotel',          gov: 'cairo',  stars: 4, price: 2400, rating: 4.5, emoji: '🏨' },
  { id: 'h6',  name: 'توليب بلازا',              name_en: 'Tulip Plaza Hotel',        gov: 'cairo',  stars: 4, price: 1800, rating: 4.4, emoji: '🏨' },
  { id: 'h7',  name: 'هورايزون النيل',           name_en: 'Horizon Nile Hotel',       gov: 'cairo',  stars: 3, price: 1200, rating: 4.2, emoji: '🏨' },
  { id: 'h8',  name: 'فندق الزمالك بلازا',       name_en: 'Zamalek Plaza Hotel',      gov: 'cairo',  stars: 3, price: 900,  rating: 4.0, emoji: '🏨' },
  { id: 'h9',  name: 'سان ستيفانو',              name_en: 'San Stefano Hotel',        gov: 'alex',   stars: 5, price: 3200, rating: 4.8, emoji: '🏨' },
  { id: 'h10', name: 'فور سيزونز سان ستيفانو',   name_en: 'Four Seasons San Stefano', gov: 'alex',   stars: 5, price: 4500, rating: 4.9, emoji: '🏨' },
  { id: 'h11', name: 'هيلتون الإسكندرية',        name_en: 'Hilton Alexandria',        gov: 'alex',   stars: 5, price: 2900, rating: 4.7, emoji: '🏨' },
  { id: 'h12', name: 'شيراتون المنتزه',          name_en: 'Sheraton Montazah',        gov: 'alex',   stars: 4, price: 1900, rating: 4.5, emoji: '🏨' },
  { id: 'h13', name: 'سي هيل',                   name_en: 'Sea Hill Hotel',           gov: 'alex',   stars: 4, price: 1400, rating: 4.3, emoji: '🏨' },
  { id: 'h14', name: 'فندق رومانس',              name_en: 'Romance Hotel',            gov: 'alex',   stars: 3, price: 800,  rating: 4.1, emoji: '🏨' },
  { id: 'h15', name: 'هيلتون لوكسور',            name_en: 'Hilton Luxor',             gov: 'luxor',  stars: 5, price: 2200, rating: 4.8, emoji: '🏨' },
  { id: 'h16', name: 'شتايجنبرجر النيل',         name_en: 'Steigenberger Nile',       gov: 'luxor',  stars: 5, price: 1900, rating: 4.6, emoji: '🏨' },
  { id: 'h17', name: 'سوفيتيل وينتر بالاس',      name_en: 'Sofitel Winter Palace',    gov: 'luxor',  stars: 5, price: 2600, rating: 4.7, emoji: '🏨' },
  { id: 'h18', name: 'إيزيس لوكسور',             name_en: 'Isis Luxor Hotel',         gov: 'luxor',  stars: 4, price: 1100, rating: 4.4, emoji: '🏨' },
  { id: 'h19', name: 'موفنبيك أسوان',            name_en: 'Mövenpick Aswan',          gov: 'aswan',  stars: 5, price: 2800, rating: 4.8, emoji: '🏨' },
  { id: 'h20', name: 'أولد كاتاراكت',            name_en: 'Old Cataract Hotel',       gov: 'aswan',  stars: 5, price: 3400, rating: 4.9, emoji: '🏨' },
  { id: 'h21', name: 'بسمة أسوان',               name_en: 'Basma Aswan Hotel',        gov: 'aswan',  stars: 4, price: 1200, rating: 4.3, emoji: '🏨' },
  { id: 'h22', name: 'ريكسوس شرم الشيخ',         name_en: 'Rixos Sharm El Sheikh',    gov: 'ssinai', stars: 5, price: 3900, rating: 4.9, emoji: '🏨' },
  { id: 'h23', name: 'فور سيزونز شرم الشيخ',     name_en: 'Four Seasons Sharm',       gov: 'ssinai', stars: 5, price: 5200, rating: 4.9, emoji: '🏨' },
  { id: 'h24', name: 'هيلتون شاركس باي',         name_en: 'Hilton Sharks Bay',        gov: 'ssinai', stars: 5, price: 3500, rating: 4.7, emoji: '🏨' },
  { id: 'h25', name: 'ستيلا دي ماري',            name_en: 'Stella Di Mare',           gov: 'ssinai', stars: 4, price: 1800, rating: 4.5, emoji: '🏨' },
  { id: 'h26', name: 'سويس بلازا شرم',           name_en: 'Swiss Plaza Sharm',        gov: 'ssinai', stars: 4, price: 1400, rating: 4.2, emoji: '🏨' },
  { id: 'h27', name: 'ستيجينا بيتش',             name_en: 'Steigenberger Beach',      gov: 'redsea', stars: 5, price: 2600, rating: 4.7, emoji: '🏨' },
  { id: 'h28', name: 'موفنبيك الغردقة',          name_en: 'Mövenpick Hurghada',       gov: 'redsea', stars: 5, price: 3100, rating: 4.8, emoji: '🏨' },
  { id: 'h29', name: 'صن رايز هوليداي',          name_en: 'Sunrise Holiday',          gov: 'redsea', stars: 4, price: 1500, rating: 4.4, emoji: '🏨' },
  { id: 'h30', name: 'سيو واحة',                 name_en: 'Siwa Oasis Resort',        gov: 'matrouh',stars: 4, price: 1300, rating: 4.6, emoji: '🏨' },
  { id: 'h31', name: 'أدرير أميلال',             name_en: 'Adrere Amellal',           gov: 'matrouh',stars: 5, price: 2200, rating: 4.8, emoji: '🏨' },
  { id: 'h32', name: 'شالي لودج',                name_en: 'Shali Lodge',              gov: 'matrouh',stars: 3, price: 600,  rating: 4.3, emoji: '🏨' },
  { id: 'h33', name: 'أوبروي فيلا',              name_en: 'Auberge Villa',            gov: 'fayoum', stars: 5, price: 4200, rating: 4.9, emoji: '🏨' },
  { id: 'h34', name: 'لازيبيلا',                 name_en: 'Lazy Bella',               gov: 'fayoum', stars: 4, price: 1600, rating: 4.5, emoji: '🏨' },
  { id: 'h35', name: 'الفنار',                   name_en: 'El Fanar Hotel',           gov: 'fayoum', stars: 3, price: 800,  rating: 4.1, emoji: '🏨' },
  { id: 'h36', name: 'هيلتون طابا',              name_en: 'Hilton Taba',              gov: 'ssinai', stars: 5, price: 3600, rating: 4.8, emoji: '🏨' },
  { id: 'h37', name: 'فندق كليوباترا',           name_en: 'Cleopatra Hotel',          gov: 'luxor',  stars: 3, price: 650,  rating: 4.0, emoji: '🏨' },
  { id: 'h38', name: 'بانوراما النيل',           name_en: 'Panorama Nile Hotel',      gov: 'cairo',  stars: 3, price: 1100, rating: 4.3, emoji: '🏨' },
  { id: 'h39', name: 'أزور ريزورت',              name_en: 'Azur Resort',              gov: 'redsea', stars: 4, price: 2000, rating: 4.6, emoji: '🏨' },
];

const STATS = [
  { icon: '🏛️', value: '48',  labelKey: 'stat_places' },
  { icon: '🏨', value: '39',  labelKey: 'stat_hotels' },
  { icon: '🚕', value: '6',   labelKey: 'stat_cars' },
  { icon: '🗺️', value: '27',  labelKey: 'stat_govs' },
];
STATS[0].labelKey = 'feat2_t'; // fallback
const STAT_LABELS = { ar: ['مكان سياحي','فندق','نوع عربية','محافظة'], en: ['Attractions','Hotels','Car Types','Governorates'], fr: ['Attractions','Hôtels','Types de voiture','Gouvernorats'], de: ['Attraktionen','Hotels','Autotypen','Gouvernements'], es: ['Atracciones','Hoteles','Tipos de coche','Gobernaciones'], it: ['Attrazioni','Hotel','Tipi di auto','Governatorati'], ru: ['Достопримечательности','Отели','Типы авто','Провинции'], zh: ['景点','酒店','车型','省份'], ja: ['観光スポット','ホテル','車種','県'], ko: ['명소','호텔','차종','주'], pt: ['Atrações','Hotéis','Tipos de carro','Governadorias'], tr: ['Yerler','Oteller','Araç Tipleri','İller'], hi: ['आकर्षण','होटल','कार प्रकार','प्रांत'], nl: ['Attracties','Hotels','Autotypes','Gouvernementen'], el: ['Αξιοθέατα','Ξενοδοχεία','Τύποι αυτοκινήτων','Νομοί'], pl: ['Atrakcje','Hotele','Typy aut','Gubernatorstwa'] };

const DRIVERS = [
  { name: 'محمد عبد الرحمن', name_en: 'Mohamed Abdelrahman', plate: 'ABC 1234', phone: '01012345678' },
  { name: 'أحمد سعيد',        name_en: 'Ahmed Said',          plate: 'XYZ 5678', phone: '01098765432' },
  { name: 'حسن مصطفى',        name_en: 'Hassan Mostafa',      plate: 'DEF 9012', phone: '01122334455' },
  { name: 'خالد إبراهيم',     name_en: 'Khaled Ibrahim',      plate: 'GHI 3456', phone: '01233445566' },
  { name: 'يوسف علي',         name_en: 'Youssef Ali',         plate: 'JKL 7890', phone: '01066778899' },
  { name: 'عمرو حسين',        name_en: 'Amr Hussein',         plate: 'MNO 2345', phone: '01144556677' },
  { name: 'كريم فؤاد',        name_en: 'Karim Fouad',         plate: 'PQR 6789', phone: '01255667788' },
  { name: 'طارق منصور',       name_en: 'Tarek Mansour',       plate: 'STU 0123', phone: '01099887766' },
];

/* ====================== i18n ====================== */
let currentLang = 'ar';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
}

function getLang() { return LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0]; }

/* اسم الكيان حسب اللغة الحالية */
function entityName(obj) {
  if (currentLang === 'ar') return obj.name || '';
  return obj.name_en || obj.name || '';
}
function entityRegion(obj) {
  if (currentLang === 'ar') return obj.region || '';
  return obj.region_en || obj.region || '';
}
function entityDesc(obj) {
  if (currentLang === 'ar') return obj.desc || '';
  return obj.desc_en || obj.desc || '';
}
function entityCat(obj) {
  if (currentLang === 'ar') return obj.cat || '';
  return obj.cat_en || obj.cat || '';
}
function driverName(d) {
  if (currentLang === 'ar') return d.name;
  return d.name_en || d.name;
}

/* ====================== أدوات مساعدة ====================== */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const escapeHtml = (str = '') =>
  String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const formatNum = n => {
  try { return Number(n).toLocaleString(currentLang === 'ar' ? 'ar-EG' : currentLang); }
  catch { return String(n); }
};

const formatDate = iso => {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  const localeMap = { ar: 'ar-EG', en: 'en-GB', fr: 'fr-FR', de: 'de-DE', es: 'es-ES', it: 'it-IT', ru: 'ru-RU', zh: 'zh-CN', ja: 'ja-JP', ko: 'ko-KR', pt: 'pt-PT', tr: 'tr-TR', hi: 'hi-IN', nl: 'nl-NL', el: 'el-GR', pl: 'pl-PL' };
  try { return d.toLocaleDateString(localeMap[currentLang] || 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); }
  catch { return iso; }
};

const formatTime = t2 => {
  if (!t2) return '';
  const [h, m] = t2.split(':');
  const hh = parseInt(h, 10);
  if (currentLang === 'ar') {
    const suffix = hh >= 12 ? 'م' : 'ص';
    const h12 = hh % 12 || 12;
    return `${h12}:${m} ${suffix}`;
  }
  return `${String(hh).padStart(2, '0')}:${m}`;
};

const stars = n => '★'.repeat(n) + '☆'.repeat(5 - n);

/* تطبيع النص العربي والإنجليزي للبحث */
function normalize(str) {
  if (!str) return '';
  return String(str)
    .toLowerCase()
    .replace(/[\u064B-\u0652]/g, '')  // diacritics
    .replace(/[أإآا]/g, 'ا')
    .replace(/[ىي]/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/\s+/g, ' ')
    .trim();
}

/* ====================== المسافة ====================== */
function distanceBetween(govA, govB) {
  const a = GOVERNORATES.find(g => g.id === govA);
  const b = GOVERNORATES.find(g => g.id === govB);
  if (!a || !b) return 0;
  if (a.id === b.id) return 35;
  const R = 6371;
  const dLat = (b.lat - a.lat) * Math.PI / 180;
  const dLng = (b.lng - a.lng) * Math.PI / 180;
  const φ1 = a.lat * Math.PI / 180;
  const φ2 = b.lat * Math.PI / 180;
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  return Math.round(R * c * 1.25);
}

/* ====================== Storage ====================== */
const STORAGE = { THEME: 'nourtmasr_theme', BOOKINGS: 'nourtmasr_bookings', LANG: 'nourtmasr_lang' };

const Storage = {
  getTheme() { try { return localStorage.getItem(STORAGE.THEME) || 'light'; } catch { return 'light'; } },
  setTheme(t2) { try { localStorage.setItem(STORAGE.THEME, t2); } catch {} },
  getLang() { try { return localStorage.getItem(STORAGE.LANG) || null; } catch { return null; } },
  setLang(l) { try { localStorage.setItem(STORAGE.LANG, l); } catch {} },
  getBookings() { try { return JSON.parse(localStorage.getItem(STORAGE.BOOKINGS) || '[]'); } catch { return []; } },
  setBookings(list) { try { localStorage.setItem(STORAGE.BOOKINGS, JSON.stringify(list)); } catch {} },
  addBooking(b) { const list = this.getBookings(); list.unshift(b); this.setBookings(list); return list; },
  removeBooking(id) { const list = this.getBookings().filter(b => b.id !== id); this.setBookings(list); return list; },
  clearBookings() { this.setBookings([]); return []; },
};

/* ====================== Toast ====================== */
function toast(message, type = 'info') {
  const container = $('#toastContainer');
  if (!container) return;
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span class="toast-icon">${icons[type] || 'ℹ️'}</span><span class="toast-msg">${escapeHtml(message)}</span>`;
  container.appendChild(el);
  setTimeout(() => { el.classList.add('hide'); setTimeout(() => el.remove(), 400); }, 3200);
}

/* ====================== Modal ====================== */
const Modal = {
  overlay: null, content: null,
  close() { if (!this.overlay) return; this.overlay.hidden = true; document.body.style.overflow = ''; },
  open(html) { if (!this.overlay) return; this.content.innerHTML = html; this.overlay.hidden = false; document.body.style.overflow = 'hidden'; },
  init() {
    this.overlay = $('#modalOverlay');
    this.content = $('#modalContent');
    if (!this.overlay) return;
    $('#modalClose')?.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', e => { if (e.target === this.overlay) this.close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !this.overlay.hidden) this.close(); });
  },
};

/* ====================== State ====================== */
const state = {
  selectedCarType: 'comfort',
  places: { search: '', gov: '', cat: '', sort: 'rating' },
  hotels: { search: '', gov: '', stars: '', sort: 'price-asc' },
  govRegion: 'all',
  bookingsFilter: 'all',
  bookings: [],
};

/* ====================== Preloader ====================== */
function hidePreloader() {
  const pre = $('#preloader');
  if (!pre) return;
  setTimeout(() => pre.classList.add('hide'), 700);
}

/* ====================== Theme ====================== */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = $('#themeIcon');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  Storage.setTheme(theme);
}
function initTheme() {
  applyTheme(Storage.getTheme());
  $('#themeToggle')?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

/* ====================== Language Selector ====================== */
function renderLangMenu() {
  const menu = $('#langMenu');
  if (!menu) return;
  menu.innerHTML = LANGUAGES.map(l => `
    <button class="lang-item ${l.code === currentLang ? 'active' : ''}" data-lang="${l.code}">
      <span class="lang-flag">${l.flag}</span>
      <span class="lang-native">${l.native}</span>
    </button>
  `).join('');

  menu.querySelectorAll('.lang-item').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
      menu.hidden = true;
      $('#langToggle')?.setAttribute('aria-expanded', 'false');
    });
  });
}

function updateLangUI() {
  const lang = getLang();
  const flag = $('#langFlag');
  const code = $('#langCode');
  if (flag) flag.textContent = lang.flag;
  if (code) code.textContent = lang.code.toUpperCase();
}

function setLanguage(code) {
  const lang = LANGUAGES.find(l => l.code === code);
  if (!lang) return;
  currentLang = code;
  document.documentElement.setAttribute('lang', code);
  document.documentElement.setAttribute('dir', lang.dir);
  Storage.setLang(code);

  applyTranslations();
  updateLangUI();
  renderLangMenu();

  // إعادة رسم المحتوى الديناميكي
  renderStats();
  fillGovernorateSelects();
  renderCarTypes();
  renderPlacesGrid();
  renderHotelsGrid();
  renderGovernorateRegions();
  renderGovernoratesGrid();
  renderBookings();

  // إعادة تعيين أي نتائج سابقة
  const rb = $('#resultBody');
  const re = $('#resultEmpty');
  if (rb && re && !rb.hidden) {
    // اترك النتيجة كما هي، لكن ليس لها ترجمة مباشرة
  }
}

function applyTranslations() {
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val) el.textContent = val;
  });
  $$('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    const val = t(key);
    if (val) el.placeholder = val;
  });
  // تحديث عنوان الصفحة
  const tt = t('doc_title');
  if (tt) document.title = tt;
}

function initLanguageSelector() {
  const toggle = $('#langToggle');
  const menu = $('#langMenu');
  if (!toggle || !menu) return;

  renderLangMenu();
  updateLangUI();

  toggle.addEventListener('click', e => {
    e.stopPropagation();
    const willOpen = menu.hidden;
    menu.hidden = !willOpen;
    toggle.setAttribute('aria-expanded', String(willOpen));
  });

  document.addEventListener('click', e => {
    if (!menu.hidden && !e.target.closest('#langDropdown')) {
      menu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ====================== Navbar ====================== */
function initNavbar() {
  const navbar = $('#navbar');
  const burger = $('#burger');
  const navLinks = $('#navLinks');

  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 12);
  }, { passive: true });

  burger?.addEventListener('click', () => {
    const open = navLinks?.classList.toggle('open');
    burger.classList.toggle('active', !!open);
    burger.setAttribute('aria-expanded', String(!!open));
  });

  $$('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('open');
      burger?.classList.remove('active');
      burger?.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = $$('section[id]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      $$('.nav-link').forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => observer.observe(s));
}

function initScrollTop() {
  const btn = $('#scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => { btn.classList.toggle('show', window.scrollY > 500); }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initReveal() {
  const els = $$('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('visible')); return; }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

function initYear() { const el = $('#year'); if (el) el.textContent = new Date().getFullYear(); }

/* ====================== الإحصائيات ====================== */
function renderStats() {
  const grid = $('#statsGrid');
  if (!grid) return;
  const labels = STAT_LABELS[currentLang] || STAT_LABELS.en;
  grid.innerHTML = STATS.map((s, i) => `
    <div class="stat-item">
      <div class="stat-icon">${s.icon}</div>
      <div class="stat-value">${s.value}<span>+</span></div>
      <div class="stat-label">${labels[i] || s.labelKey}</div>
    </div>
  `).join('');
}

/* ====================== تعبئة المحافظات ====================== */
function fillGovernorateSelects() {
  const options = GOVERNORATES.map(g => `<option value="${g.id}">${g.emoji} ${entityName(g)}</option>`).join('');

  ['#tFromGov', '#tToGov', '#placeGov', '#hotelGov'].forEach(sel => {
    const el = $(sel);
    if (!el) return;
    const first = el.querySelector('option');
    el.innerHTML = (first && first.value === '') ? first.outerHTML + options : options;
  });

  // الفلاتر
  const placeGov = $('#placeGov');
  if (placeGov && placeGov.options[0]) placeGov.options[0].textContent = t('all_govs');
  const hotelGov = $('#hotelGov');
  if (hotelGov && hotelGov.options[0]) hotelGov.options[0].textContent = t('all_govs');
}

/* ====================== أنواع العربيات ====================== */
function renderCarTypes() {
  const wrap = $('#carTypes');
  if (!wrap) return;
  const kmLabel = t('km');
  wrap.innerHTML = CAR_TYPES.map(car => `
    <div class="car-type ${car.id === state.selectedCarType ? 'active' : ''}" data-car="${car.id}" role="button" tabindex="0">
      <div class="car-type-emoji">${car.emoji}</div>
      <div class="car-type-name">${currentLang === 'ar' ? car.name : car.name_en}</div>
      <div class="car-type-price">${car.perKm} ${currentLang === 'ar' ? 'ج' : 'EGP'}/${kmLabel}</div>
    </div>
  `).join('');
}

function initCarTypeClicks() {
  const wrap = $('#carTypes');
  if (!wrap) return;
  wrap.addEventListener('click', e => {
    const el = e.target.closest('.car-type');
    if (!el) return;
    state.selectedCarType = el.dataset.car;
    $$('.car-type').forEach(c => c.classList.toggle('active', c === el));
  });
  wrap.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const el = e.target.closest('.car-type');
      if (!el) return;
      e.preventDefault(); el.click();
    }
  });
}

/* ====================== Taxi Form ====================== */
function initTaxiForm() {
  const form = $('#taxiForm');
  if (!form) return;

  const today = new Date().toISOString().split('T')[0];
  const dateInput = $('#tDate');
  if (dateInput) { dateInput.value = today; dateInput.min = today; }

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateTaxiForm()) return;
    handleTaxiRequest();
  });
}

function validateTaxiForm() {
  const required = ['#tName', '#tPhone', '#tFromSpot', '#tToSpot', '#tDate', '#tTime', '#tPassengers'];
  let valid = true, firstErr = null;
  required.forEach(sel => {
    const el = $(sel);
    if (!el) return;
    const ok = el.value.trim() !== '';
    el.classList.toggle('error', !ok);
    if (!ok && !firstErr) firstErr = el;
    if (!ok) valid = false;
  });
  const phone = $('#tPhone');
  if (phone && phone.value.trim() && !/^01[0-9]{9}$/.test(phone.value.trim())) {
    phone.classList.add('error'); valid = false;
    if (!firstErr) firstErr = phone;
  }
  if (!valid && firstErr) firstErr.focus();
  return valid;
}

function handleTaxiRequest() {
  const name = $('#tName').value.trim();
  const phone = $('#tPhone').value.trim();
  const fromGov = $('#tFromGov').value;
  const fromSpot = $('#tFromSpot').value.trim();
  const toGov = $('#tToGov').value;
  const toSpot = $('#tToSpot').value.trim();
  const date = $('#tDate').value;
  const time = $('#tTime').value;
  const passengers = parseInt($('#tPassengers').value, 10) || 1;
  const notes = $('#tNotes').value.trim();

  const car = CAR_TYPES.find(c => c.id === state.selectedCarType) || CAR_TYPES[1];
  const fromGovObj = GOVERNORATES.find(g => g.id === fromGov);
  const toGovObj = GOVERNORATES.find(g => g.id === toGov);

  const distance = distanceBetween(fromGov, toGov);
  const durationMin = Math.round(distance * 1.4 + 10);
  let total = Math.round((distance * car.perKm + car.base) / 5) * 5;
  if (passengers > 4) total = Math.round(total * 1.1 / 5) * 5;

  const hour = parseInt(time.split(':')[0], 10);
  const isNight = hour >= 22 || hour < 6;
  if (isNight) total = Math.round(total * 1.15 / 5) * 5;

  const driver = DRIVERS[Math.floor(Math.random() * DRIVERS.length)];

  const resultEmpty = $('#resultEmpty');
  const resultBody = $('#resultBody');
  if (!resultBody || !resultEmpty) return;

  resultEmpty.hidden = true;
  resultBody.hidden = false;

  const eta = 5 + Math.floor(Math.random() * 10);
  const currency = t('currency');

  resultBody.innerHTML = `
    <div class="result-header">
      <h3>${currentLang === 'ar' ? '✅ تم تجهيز طلبك' : '✅ Request ready'}</h3>
      <p>${currentLang === 'ar' ? `هتلاقي العربية عندك في خلال <strong>${eta} دقيقة</strong>` : `Your car arrives in <strong>${eta} min</strong>`}</p>
    </div>
    <div class="result-route">
      <div class="route-point">
        <div class="route-icon">📍</div>
        <div class="route-text">
          <strong>${fromGovObj?.emoji || ''} ${escapeHtml(entityName(fromGovObj || {}))}</strong>
          <small>${escapeHtml(fromSpot)}</small>
        </div>
      </div>
      <div class="route-line"></div>
      <div class="route-point">
        <div class="route-icon end">🏁</div>
        <div class="route-text">
          <strong>${toGovObj?.emoji || ''} ${escapeHtml(entityName(toGovObj || {}))}</strong>
          <small>${escapeHtml(toSpot)}</small>
        </div>
      </div>
    </div>
    <div class="result-stats">
      <div class="result-stat"><span>📏</span><strong>${formatNum(distance)} ${t('km')}</strong><small>${t('distance')}</small></div>
      <div class="result-stat"><span>⏱️</span><strong>${durationMin} ${t('min')}</strong><small>${t('duration')}</small></div>
      <div class="result-stat"><span>${car.emoji}</span><strong>${currentLang === 'ar' ? car.name : car.name_en}</strong><small>${t('car_type')}</small></div>
    </div>
    <div class="result-price">
      <div>
        <small>${t('total')}</small>
        <strong>${formatNum(total)} <span>${currency}</span></strong>
      </div>
      <div style="text-align:end">
        <small>${currentLang === 'ar' ? car.name : car.name_en}</small>
        <small>${isNight ? '🌙' : '☀️'}</small>
      </div>
    </div>
    <div class="result-driver">
      <div class="driver-avatar">🧑‍✈️</div>
      <div class="driver-info">
        <strong>${escapeHtml(driverName(driver))}</strong>
        <small>${currentLang === 'ar' ? 'سواق معتمد • تقييم 4.9 ⭐' : 'Certified driver • 4.9 ⭐'}</small>
      </div>
      <div class="driver-plate" dir="ltr">${escapeHtml(driver.plate)}</div>
    </div>
    <div class="result-actions">
      <button class="btn btn-primary" id="confirmTaxi">✅ ${t('confirm')}</button>
      <button class="btn btn-ghost" id="callDriver">📞 ${t('call')}</button>
    </div>
    <p style="font-size:.78rem;color:var(--c-text-mute);text-align:center;margin-top:8px">
      <span dir="ltr">${escapeHtml(driver.phone)}</span>
    </p>
  `;

  const tripData = {
    id: 'trip_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
    type: 'taxi', name, phone,
    fromGov, fromGovName: entityName(fromGovObj || {}), fromGovEmoji: fromGovObj?.emoji || '',
    fromSpot, toGov, toGovName: entityName(toGovObj || {}), toGovEmoji: toGovObj?.emoji || '',
    toSpot, date, time, passengers, notes,
    car: currentLang === 'ar' ? car.name : car.name_en,
    carEmoji: car.emoji, distance, duration: durationMin, price: total,
    driver: driverName(driver), driverPlate: driver.plate, driverPhone: driver.phone,
    createdAt: Date.now(),
  };

  $('#confirmTaxi')?.addEventListener('click', () => {
    Storage.addBooking(tripData);
    state.bookings = Storage.getBookings();
    renderBookings();
    toast(t('msg_booking_ok'), 'success');
    $('#confirmTaxi').disabled = true;
    $('#confirmTaxi').textContent = '✅';
    $('#confirmTaxi').style.opacity = '.7';
  });
  $('#callDriver')?.addEventListener('click', () => toast(driverName(driver) + ' 📞', 'info'));

  toast(t('msg_taxi_ok'), 'success');
}

/* ====================== Places ====================== */
function renderPlacesGrid() {
  const grid = $('#placesGrid');
  const countEl = $('#placesCount');
  const emptyEl = $('#placesEmpty');
  if (!grid) return;

  let list = [...PLACES];
  const q = normalize(state.places.search);
  if (q) list = list.filter(p => normalize(p.name).includes(q) || normalize(p.name_en).includes(q) || normalize(p.desc).includes(q) || normalize(p.desc_en).includes(q));
  if (state.places.gov) list = list.filter(p => p.gov === state.places.gov);
  if (state.places.cat) list = list.filter(p => p.cat === state.places.cat);

  const sorters = {
    'rating': (a,b) => b.rating - a.rating,
    'price-asc': (a,b) => a.price - b.price,
    'price-desc': (a,b) => b.price - a.price,
    'name': (a,b) => entityName(a).localeCompare(entityName(b), currentLang === 'ar' ? 'ar' : 'en'),
  };
  list.sort(sorters[state.places.sort] || sorters.rating);

  if (countEl) countEl.innerHTML = `${currentLang === 'ar' ? 'العدد' : 'Results'}: <strong>${formatNum(list.length)}</strong>`;

  if (list.length === 0) {
    grid.innerHTML = '';
    if (emptyEl) emptyEl.hidden = false;
    return;
  }
  if (emptyEl) emptyEl.hidden = true;

  grid.innerHTML = list.map(p => {
    const gov = GOVERNORATES.find(g => g.id === p.gov);
    const priceHtml = p.price === 0
      ? `<span class="meta-tag free">${t('free')}</span>`
      : `<span class="meta-tag price">${formatNum(p.price)} ${t('currency')}</span>`;
    return `
      <article class="place-card" data-id="${p.id}">
        <div class="card-visual">
          <span class="card-emoji">${p.emoji}</span>
          <span class="card-badge rating-badge">⭐ ${p.rating}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${escapeHtml(entityName(p))}</h3>
          <div class="card-gov">📍 ${escapeHtml(entityName(gov || {}))}</div>
          <p class="card-desc">${escapeHtml(entityDesc(p))}</p>
          <div class="card-meta">
            <span class="meta-tag">${escapeHtml(entityCat(p))}</span>
            ${priceHtml}
          </div>
          <div class="card-footer">
            <button class="btn btn-ghost" data-action="fav">${t('add_fav')}</button>
            <button class="btn btn-primary" data-action="details">${t('details')}</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function initPlacesFilters() {
  const catSelect = $('#placeCat');
  if (catSelect) {
    const cats = currentLang === 'ar'
      ? [...new Set(PLACES.map(p => p.cat))]
      : [...new Set(PLACES.map(p => p.cat_en))];
    catSelect.innerHTML = `<option value="">${t('all_cats')}</option>` +
      cats.map(c => `<option value="${c}">${c}</option>`).join('');
  }

  $('#placeSearch')?.addEventListener('input', e => { state.places.search = e.target.value; renderPlacesGrid(); });
  $('#placeGov')?.addEventListener('change', e => { state.places.gov = e.target.value; renderPlacesGrid(); });
  $('#placeCat')?.addEventListener('change', e => { state.places.cat = e.target.value; renderPlacesGrid(); });
  $('#placeSort')?.addEventListener('change', e => { state.places.sort = e.target.value; renderPlacesGrid(); });
  $('#placesReset')?.addEventListener('click', () => {
    state.places = { search: '', gov: '', cat: '', sort: 'rating' };
    if ($('#placeSearch')) $('#placeSearch').value = '';
    if ($('#placeGov')) $('#placeGov').value = '';
    if ($('#placeCat')) $('#placeCat').value = '';
    if ($('#placeSort')) $('#placeSort').value = 'rating';
    renderPlacesGrid();
    toast(t('msg_reset_filters'), 'info');
  });
}

function initPlacesActions() {
  const grid = $('#placesGrid');
  if (!grid) return;
  grid.addEventListener('click', e => {
    const card = e.target.closest('.place-card');
    if (!card) return;
    const place = PLACES.find(p => p.id === card.dataset.id);
    if (!place) return;
    const action = e.target.closest('[data-action]')?.dataset.action;

    if (action === 'fav') {
      const gov = GOVERNORATES.find(g => g.id === place.gov);
      Storage.addBooking({
        id: 'place_' + place.id + '_' + Date.now(),
        type: 'place',
        name: entityName(place), name_ar: place.name,
        emoji: place.emoji, govName: entityName(gov || {}),
        rating: place.rating, price: place.price,
        createdAt: Date.now(),
      });
      state.bookings = Storage.getBookings();
      renderBookings();
      toast(t('msg_fav_ok'), 'success');
      return;
    }
    if (action === 'details') openPlaceModal(place);
  });
}

function openPlaceModal(place) {
  const gov = GOVERNORATES.find(g => g.id === place.gov);
  Modal.open(`
    <div class="modal-visual">${place.emoji}</div>
    <h2>${escapeHtml(entityName(place))}</h2>
    <p class="modal-sub">📍 ${escapeHtml(entityName(gov || {}))} • ${escapeHtml(entityCat(place))}</p>
    <p class="modal-desc">${escapeHtml(entityDesc(place))}</p>
    <div class="modal-info-grid">
      <div><small>⭐</small><strong>${place.rating} / 5</strong></div>
      <div><small>${t('currency')}</small><strong>${place.price === 0 ? t('free') : formatNum(place.price) + ' ' + t('currency')}</strong></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-primary" id="modalGoTaxi">${t('nav_taxi')}</button>
    </div>
  `);
  $('#modalGoTaxi')?.addEventListener('click', () => {
    Modal.close();
    document.getElementById('taxi')?.scrollIntoView({ behavior: 'smooth' });
  });
}

/* ====================== Hotels ====================== */
function renderHotelsGrid() {
  const grid = $('#hotelsGrid');
  const countEl = $('#hotelsCount');
  const emptyEl = $('#hotelsEmpty');
  if (!grid) return;

  let list = [...HOTELS];
  const q = normalize(state.hotels.search);
  if (q) list = list.filter(h => normalize(h.name).includes(q) || normalize(h.name_en).includes(q));
  if (state.hotels.gov) list = list.filter(h => h.gov === state.hotels.gov);
  if (state.hotels.stars) list = list.filter(h => String(h.stars) === state.hotels.stars);

  const sorters = {
    'price-asc': (a,b) => a.price - b.price,
    'price-desc': (a,b) => b.price - a.price,
    'rating': (a,b) => b.rating - a.rating,
    'stars': (a,b) => b.stars - a.stars || b.rating - a.rating,
  };
  list.sort(sorters[state.hotels.sort] || sorters['price-asc']);

  if (countEl) countEl.innerHTML = `${currentLang === 'ar' ? 'العدد' : 'Results'}: <strong>${formatNum(list.length)}</strong>`;

  if (list.length === 0) {
    grid.innerHTML = '';
    if (emptyEl) emptyEl.hidden = false;
    return;
  }
  if (emptyEl) emptyEl.hidden = true;

  grid.innerHTML = list.map(h => {
    const gov = GOVERNORATES.find(g => g.id === h.gov);
    return `
      <article class="hotel-card" data-id="${h.id}">
        <div class="card-visual hotel-visual">
          <span class="card-emoji">${h.emoji}</span>
          <span class="card-badge">${stars(h.stars)}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${escapeHtml(entityName(h))}</h3>
          <div class="card-gov">📍 ${escapeHtml(entityName(gov || {}))}</div>
          <div class="card-meta">
            <span class="meta-tag">⭐ ${h.rating}</span>
            <span class="meta-tag price">${formatNum(h.price)} ${t('per_night')}</span>
          </div>
          <div class="card-footer">
            <button class="btn btn-ghost" data-action="details">${t('details')}</button>
            <button class="btn btn-primary" data-action="book">${t('book')}</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function initHotelsFilters() {
  $('#hotelSearch')?.addEventListener('input', e => { state.hotels.search = e.target.value; renderHotelsGrid(); });
  $('#hotelGov')?.addEventListener('change', e => { state.hotels.gov = e.target.value; renderHotelsGrid(); });
  $('#hotelStars')?.addEventListener('change', e => { state.hotels.stars = e.target.value; renderHotelsGrid(); });
  $('#hotelSort')?.addEventListener('change', e => { state.hotels.sort = e.target.value; renderHotelsGrid(); });
  $('#hotelsReset')?.addEventListener('click', () => {
    state.hotels = { search: '', gov: '', stars: '', sort: 'price-asc' };
    if ($('#hotelSearch')) $('#hotelSearch').value = '';
    if ($('#hotelGov')) $('#hotelGov').value = '';
    if ($('#hotelStars')) $('#hotelStars').value = '';
    if ($('#hotelSort')) $('#hotelSort').value = 'price-asc';
    renderHotelsGrid();
    toast(t('msg_reset_filters'), 'info');
  });
}

function initHotelsActions() {
  const grid = $('#hotelsGrid');
  if (!grid) return;
  grid.addEventListener('click', e => {
    const card = e.target.closest('.hotel-card');
    if (!card) return;
    const hotel = HOTELS.find(h => h.id === card.dataset.id);
    if (!hotel) return;
    const action = e.target.closest('[data-action]')?.dataset.action;
    if (action === 'details') openHotelModal(hotel);
    else if (action === 'book') openBookingModal(hotel);
  });
}

function openHotelModal(hotel) {
  const gov = GOVERNORATES.find(g => g.id === hotel.gov);
  Modal.open(`
    <div class="modal-visual hotel-visual">${hotel.emoji}</div>
    <h2>${escapeHtml(entityName(hotel))}</h2>
    <p class="modal-sub">📍 ${escapeHtml(entityName(gov || {}))} • ${stars(hotel.stars)}</p>
    <div class="modal-info-grid">
      <div><small>⭐</small><strong>${hotel.rating} / 5</strong></div>
      <div><small>${t('per_night')}</small><strong>${formatNum(hotel.price)} ${t('currency')}</strong></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-primary" id="modalBookBtn">${t('book')}</button>
    </div>
  `);
  $('#modalBookBtn')?.addEventListener('click', () => openBookingModal(hotel));
}

function openBookingModal(hotel) {
  const gov = GOVERNORATES.find(g => g.id === hotel.gov);
  const today = new Date().toISOString().split('T')[0];
  Modal.open(`
    <h2>${escapeHtml(entityName(hotel))}</h2>
    <p class="modal-sub">📍 ${escapeHtml(entityName(gov || {}))} • ${formatNum(hotel.price)} ${t('per_night')}</p>
    <div class="field"><label for="bCheckIn">${currentLang === 'ar' ? 'تاريخ الوصول' : 'Check-in'}</label><input type="date" id="bCheckIn" value="${today}" min="${today}" /></div>
    <div class="field"><label for="bNights">${t('nights')}</label><input type="number" id="bNights" value="2" min="1" max="30" /></div>
    <div class="field"><label for="bGuests">${currentLang === 'ar' ? 'عدد الأفراد' : 'Guests'}</label><input type="number" id="bGuests" value="2" min="1" max="20" /></div>
    <div class="field"><label for="bRooms">${currentLang === 'ar' ? 'عدد الغرف' : 'Rooms'}</label><input type="number" id="bRooms" value="1" min="1" max="10" /></div>
    <div class="result-price" style="margin:14px 0">
      <div>
        <small>${t('total')}</small>
        <strong id="bookingTotal">${formatNum(hotel.price * 2)} <span>${t('currency')}</span></strong>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-primary" id="confirmBookingBtn">✅ ${t('confirm')}</button>
    </div>
  `);

  const recalc = () => {
    const nights = parseInt($('#bNights')?.value, 10) || 1;
    const rooms = parseInt($('#bRooms')?.value, 10) || 1;
    const total = hotel.price * nights * rooms;
    const el = $('#bookingTotal');
    if (el) el.innerHTML = `${formatNum(total)} <span>${t('currency')}</span>`;
    return total;
  };
  ['#bNights', '#bRooms'].forEach(s => $(s)?.addEventListener('input', recalc));

  $('#confirmBookingBtn')?.addEventListener('click', () => {
    const checkIn = $('#bCheckIn').value;
    const nights = parseInt($('#bNights').value, 10) || 1;
    const guests = parseInt($('#bGuests').value, 10) || 1;
    const rooms = parseInt($('#bRooms').value, 10) || 1;
    const total = hotel.price * nights * rooms;

    Storage.addBooking({
      id: 'hotel_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
      type: 'hotel',
      hotelName: entityName(hotel), hotelName_ar: hotel.name,
      hotelEmoji: hotel.emoji, govName: entityName(gov || {}),
      stars: hotel.stars, checkIn, nights, guests, rooms,
      pricePerNight: hotel.price, total, createdAt: Date.now(),
    });
    state.bookings = Storage.getBookings();
    renderBookings();
    toast(t('msg_booking_ok'), 'success');
    Modal.close();
  });
}

/* ====================== Governorates ====================== */
function renderGovernorateRegions() {
  const wrap = $('#govRegionFilter');
  if (!wrap) return;
  const regions = currentLang === 'ar'
    ? ['الكل', ...new Set(GOVERNORATES.map(g => g.region))]
    : ['All', ...new Set(GOVERNORATES.map(g => g.region_en))];
  const isAll = state.govRegion === 'all' || state.govRegion === 'الكل' || state.govRegion === 'All';

  wrap.innerHTML = regions.map(r => {
    const isActive = (isAll && (r === 'الكل' || r === 'All')) || state.govRegion === r;
    return `<button class="chip ${isActive ? 'active' : ''}" data-region="${r}">${r}</button>`;
  }).join('');

  wrap.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const r = chip.dataset.region;
      state.govRegion = (r === 'الكل' || r === 'All') ? 'all' : r;
      wrap.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === chip));
      renderGovernoratesGrid();
    });
  });
}

function renderGovernoratesGrid() {
  const grid = $('#governoratesGrid');
  if (!grid) return;

  const isAll = state.govRegion === 'all' || state.govRegion === 'الكل' || state.govRegion === 'All';
  const list = isAll
    ? GOVERNORATES
    : GOVERNORATES.filter(g => (currentLang === 'ar' ? g.region : g.region_en) === state.govRegion);

  grid.innerHTML = list.map(g => {
    const placesCount = PLACES.filter(p => p.gov === g.id).length;
    const hotelsCount = HOTELS.filter(h => h.gov === g.id).length;
    return `
      <div class="gov-card" data-id="${g.id}">
        <div class="gov-emoji">${g.emoji}</div>
        <div class="gov-name">${escapeHtml(entityName(g))}</div>
        <div class="gov-region">${escapeHtml(entityRegion(g))}</div>
        <div class="gov-counts"><span>🏛️ ${formatNum(placesCount)}</span><span>🏨 ${formatNum(hotelsCount)}</span></div>
      </div>
    `;
  }).join('');

  grid.onclick = e => {
    const card = e.target.closest('.gov-card');
    if (!card) return;
    const gov = GOVERNORATES.find(g => g.id === card.dataset.id);
    if (gov) openGovernorateModal(gov);
  };
}

function openGovernorateModal(gov) {
  const places = PLACES.filter(p => p.gov === gov.id);
  const hotels = HOTELS.filter(h => h.gov === gov.id);
  Modal.open(`
    <div class="modal-visual">${gov.emoji}</div>
    <h2>${escapeHtml(entityName(gov))}</h2>
    <p class="modal-sub">🗺️ ${escapeHtml(entityRegion(gov))}</p>
    <div class="modal-info-grid">
      <div><small>🏛️</small><strong>${formatNum(places.length)}</strong></div>
      <div><small>🏨</small><strong>${formatNum(hotels.length)}</strong></div>
    </div>
    ${places.length ? `<ul style="font-size:.9rem;color:var(--c-text-soft);display:flex;flex-direction:column;gap:6px;margin-top:10px">${places.slice(0,5).map(p => `<li>${p.emoji} ${escapeHtml(entityName(p))}</li>`).join('')}</ul>` : ''}
  `);
}

/* ====================== Bookings ====================== */
function renderBookings() {
  const list = $('#bookingsList');
  const empty = $('#bookingsEmpty');
  if (!list) return;

  const filtered = state.bookingsFilter === 'all'
    ? state.bookings
    : state.bookings.filter(b => b.type === state.bookingsFilter);

  if (filtered.length === 0) {
    list.innerHTML = '';
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;

  list.innerHTML = filtered.map(b => renderBookingItem(b)).join('');
  list.querySelectorAll('.booking-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      state.bookings = Storage.removeBooking(btn.dataset.id);
      renderBookings();
      toast(t('msg_deleted'), 'info');
    });
  });
}

function renderBookingItem(b) {
  if (b.type === 'taxi') {
    return `
      <div class="booking-item">
        <div class="booking-icon taxi-icon">🚕</div>
        <div class="booking-info">
          <h4>${escapeHtml(b.fromGovName)} → ${escapeHtml(b.toGovName)}</h4>
          <p>${escapeHtml(b.fromSpot)} → ${escapeHtml(b.toSpot)}</p>
          <div class="booking-meta">
            <span>📅 ${formatDate(b.date)}</span>
            <span>🕒 ${formatTime(b.time)}</span>
            <span>👥 ${b.passengers}</span>
            <span>${b.carEmoji} ${escapeHtml(b.car)}</span>
          </div>
        </div>
        <div class="booking-price">${formatNum(b.price)} ${t('currency')}<small>${formatNum(b.distance)} ${t('km')}</small></div>
        <button class="booking-delete" data-id="${b.id}">🗑️</button>
      </div>`;
  }
  if (b.type === 'hotel') {
    return `
      <div class="booking-item">
        <div class="booking-icon hotel-icon">🏨</div>
        <div class="booking-info">
          <h4>${escapeHtml(b.hotelName)}</h4>
          <p>${stars(b.stars)} • ${escapeHtml(b.govName)}</p>
          <div class="booking-meta">
            <span>📅 ${formatDate(b.checkIn)}</span>
            <span>🌙 ${b.nights} ${t('nights')}</span>
            <span>👥 ${b.guests}</span>
            <span>🛏️ ${b.rooms}</span>
          </div>
        </div>
        <div class="booking-price">${formatNum(b.total)} ${t('currency')}<small>${t('total')}</small></div>
        <button class="booking-delete" data-id="${b.id}">🗑️</button>
      </div>`;
  }
  return `
    <div class="booking-item">
      <div class="booking-icon place-icon">⭐</div>
      <div class="booking-info">
        <h4>${escapeHtml(b.name)}</h4>
        <p>${escapeHtml(b.govName)}</p>
        <div class="booking-meta">
          <span>⭐ ${b.rating}</span>
          <span>💵 ${b.price === 0 ? t('free') : formatNum(b.price) + ' ' + t('currency')}</span>
        </div>
      </div>
      <button class="booking-delete" data-id="${b.id}">🗑️</button>
    </div>`;
}

function initBookingFilters() {
  const wrap = $('#bookingFilters');
  if (!wrap) return;
  wrap.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    state.bookingsFilter = chip.dataset.filter;
    wrap.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === chip));
    renderBookings();
  });

  $('#clearBookings')?.addEventListener('click', () => {
    if (state.bookings.length === 0) { toast('—', 'info'); return; }
    if (confirm(currentLang === 'ar' ? 'متأكد من مسح كل الحجوزات؟' : 'Delete all bookings?')) {
      state.bookings = Storage.clearBookings();
      renderBookings();
      toast(t('msg_deleted'), 'success');
    }
  });
}

/* ====================== البحث الشامل ====================== */
function globalSearch(query) {
  const q = normalize(query);
  if (!q) return { govs: [], places: [], hotels: [] };

  const govs = GOVERNORATES.filter(g => normalize(g.name).includes(q) || normalize(g.name_en).includes(q) || normalize(g.region).includes(q) || normalize(g.region_en).includes(q));
  const places = PLACES.filter(p => normalize(p.name).includes(q) || normalize(p.name_en).includes(q) || normalize(p.desc).includes(q) || normalize(p.desc_en).includes(q) || normalize(p.cat).includes(q) || normalize(p.cat_en).includes(q));
  const hotels = HOTELS.filter(h => normalize(h.name).includes(q) || normalize(h.name_en).includes(q));

  return { govs: govs.slice(0, 6), places: places.slice(0, 6), hotels: hotels.slice(0, 6) };
}

function renderSearchDropdown(query) {
  const dd = $('#searchDropdown');
  if (!dd) return;

  const q = query.trim();
  if (!q) { dd.hidden = true; dd.innerHTML = ''; return; }

  const results = globalSearch(q);
  const total = results.govs.length + results.places.length + results.hotels.length;

  if (total === 0) {
    dd.innerHTML = `<div class="search-empty"><span>🔎</span>${t('search_none')}</div>`;
    dd.hidden = false;
    return;
  }

  let html = '';

  if (results.govs.length) {
    html += `<div class="search-group-label">${t('search_govs')}</div>`;
    html += results.govs.map(g => `
      <button class="search-item" data-type="gov" data-id="${g.id}">
        <div class="search-item-icon">${g.emoji}</div>
        <div class="search-item-body">
          <div class="search-item-title">${escapeHtml(entityName(g))}</div>
          <div class="search-item-sub">${escapeHtml(entityRegion(g))}</div>
        </div>
      </button>
    `).join('');
  }
  if (results.places.length) {
    html += `<div class="search-group-label">${t('search_places')}</div>`;
    html += results.places.map(p => {
      const gov = GOVERNORATES.find(g => g.id === p.gov);
      return `
        <button class="search-item" data-type="place" data-id="${p.id}">
          <div class="search-item-icon">${p.emoji}</div>
          <div class="search-item-body">
            <div class="search-item-title">${escapeHtml(entityName(p))}</div>
            <div class="search-item-sub">📍 ${escapeHtml(entityName(gov || {}))} • ${escapeHtml(entityCat(p))}</div>
          </div>
        </button>`;
    }).join('');
  }
  if (results.hotels.length) {
    html += `<div class="search-group-label">${t('search_hotels')}</div>`;
    html += results.hotels.map(h => {
      const gov = GOVERNORATES.find(g => g.id === h.gov);
      return `
        <button class="search-item" data-type="hotel" data-id="${h.id}">
          <div class="search-item-icon">${h.emoji}</div>
          <div class="search-item-body">
            <div class="search-item-title">${escapeHtml(entityName(h))}</div>
            <div class="search-item-sub">📍 ${escapeHtml(entityName(gov || {}))} • ⭐ ${h.rating} • ${formatNum(h.price)} ${t('currency')}</div>
          </div>
        </button>`;
    }).join('');
  }

  dd.innerHTML = html;
  dd.hidden = false;

  dd.querySelectorAll('.search-item').forEach(item => {
    item.addEventListener('click', () => handleSearchSelect(item.dataset.type, item.dataset.id));
  });
}

function handleSearchSelect(type, id) {
  const dd = $('#searchDropdown');
  const input = $('#heroSearchInput');
  if (dd) dd.hidden = true;

  if (type === 'gov') {
    const gov = GOVERNORATES.find(g => g.id === id);
    if (!gov) return;
    if (input) input.value = entityName(gov);
    openGovernorateModal(gov);
  } else if (type === 'place') {
    const place = PLACES.find(p => p.id === id);
    if (!place) return;
    if (input) input.value = entityName(place);
    openPlaceModal(place);
  } else if (type === 'hotel') {
    const hotel = HOTELS.find(h => h.id === id);
    if (!hotel) return;
    if (input) input.value = entityName(hotel);
    openHotelModal(hotel);
  }
}

function initHeroSearch() {
  const form = $('#heroSearchForm');
  const input = $('#heroSearchInput');
  const dd = $('#searchDropdown');
  if (!form || !input) return;

  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => renderSearchDropdown(input.value), 150);
  });

  input.addEventListener('focus', () => {
    if (input.value.trim()) renderSearchDropdown(input.value);
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    const results = globalSearch(q);
    if (results.govs.length) {
      handleSearchSelect('gov', results.govs[0].id);
    } else if (results.places.length) {
      handleSearchSelect('place', results.places[0].id);
    } else if (results.hotels.length) {
      handleSearchSelect('hotel', results.hotels[0].id);
    } else {
      toast(t('search_none'), 'error');
    }
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.hero-search-wrap')) {
      if (dd) dd.hidden = true;
    }
  });
}

/* ====================== التهيئة ====================== */
function init() {
  state.bookings = Storage.getBookings();

  const savedLang = Storage.getLang();
  currentLang = savedLang && LANGUAGES.find(l => l.code === savedLang) ? savedLang : 'ar';
  const lang = getLang();
  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('dir', lang.dir);

  initTheme();
  initLanguageSelector();
  initNavbar();
  initScrollTop();
  initYear();
  initReveal();
  Modal.init();

  applyTranslations();

  renderStats();
  fillGovernorateSelects();
  renderCarTypes();
  initCarTypeClicks();
  initTaxiForm();

  initPlacesFilters();
  renderPlacesGrid();
  initPlacesActions();

  initHotelsFilters();
  renderHotelsGrid();
  initHotelsActions();

  renderGovernorateRegions();
  renderGovernoratesGrid();

  initBookingFilters();
  renderBookings();

  initHeroSearch();

  hidePreloader();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}