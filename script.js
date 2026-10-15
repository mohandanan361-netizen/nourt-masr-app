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
    hero_desc: 'عربية توصلك لباب الفندق، أجمل الأماكن السياحية في الـ 27 محافظة، وحجز فنادق مميزة — كل ده في تطبيق واحد.',
    hero_search_ph: 'ابحث عن محافظة، مكان سياحي، أو فندق…', hero_btn_search: 'ابحث',
    hero_btn_taxi: '🚕 اطلب عربية دلوقتي', hero_btn_hotels: '🏨 شوف الفنادق',
    hero_p1: 'عربيات في كل المحافظات', hero_p2: 'أسعار واضحة بدون مفاجآت', hero_p3: 'دعم على مدار الساعة',
    hero_card_title: 'رحلتك القادمة', trips_today: 'رحلة اليوم', bookings_today: 'حجز فندق',
    chip_rating: '⭐ 4.9 تقييم', chip_support: '🕒 دعم 24/7',
    services_pill: 'خدماتنا', services_title: 'كل حاجة محتاجها في رحلتك',
    services_desc: 'من لحظة وصولك للمطار لحد آخر يوم في رحلتك — إحنا معاك.',
    feat1_t: 'عربية توصلك فين ما كنت', feat1_d: 'اختار نوع العربية، حدّد مكانك ووجهتك، وهي جاية لك في دقائق بأسعار واضحة.', feat1_tag: '6 أنواع عربيات',
    feat2_t: 'أماكن تستاهل الزيارة', feat2_d: 'أكثر من 45 مكان سياحي في كل محافظات مصر، مع التقييمات وسعر الدخول.', feat2_tag: 'مصنّفة وسهلة الفلترة',
    feat3_t: 'احجز أشهر الفنادق', feat3_d: 'استعرض أرقى الفنادق المصرية واجحز إقامتك بكل سهولة.', feat3_tag: 'فنادق مميزة',
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
    hero_desc: 'Book a car to your hotel door, explore the best attractions in all 27 governorates, and reserve wonderful hotels — all in one app.',
    hero_search_ph: 'Search governorates, attractions, hotels…', hero_btn_search: 'Search',
    hero_btn_taxi: '🚕 Request a Car Now', hero_btn_hotels: '🏨 Browse Hotels',
    hero_p1: 'Cars in every governorate', hero_p2: 'Clear prices, no surprises', hero_p3: 'Support 24/7',
    hero_card_title: 'Your Next Trip', trips_today: 'Trips today', bookings_today: 'Hotel bookings',
    chip_rating: '⭐ 4.9 rating', chip_support: '🕒 24/7 support',
    services_pill: 'Our Services', services_title: 'Everything you need for your trip',
    services_desc: 'From airport arrival to your last day — we are with you.',
    feat1_t: 'A car to your door', feat1_d: 'Choose a car type, set pickup and dropoff, and it arrives within minutes with clear prices.', feat1_tag: '6 car types',
    feat2_t: 'Places worth visiting', feat2_d: 'Over 45 attractions across Egypt with ratings and entry prices.', feat2_tag: 'Categorized & filterable',
    feat3_t: 'Book famous hotels', feat3_d: 'Explore top Egyptian hotels and book your stay easily.', feat3_tag: 'Featured hotels',
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
    per_person: 'per person', country: 'Egipt',
    days: 'days', nights: 'nights',
  },
  fr: {
    doc_title: 'Nourt Masr | Votre guide touristique égyptien',
    brand: 'Nourt Masr', brand_sub: 'Visitez l\'Égypte', preloader_sub: 'Préparation de votre voyage…',
    nav_home: 'Accueil', nav_taxi: 'Réserver Voiture', nav_places: 'Attractions', nav_hotels: 'Hôtels',
    nav_govs: 'Gouvernorats', nav_bookings: 'Mes Réservations', nav_order: '🚕 Commander',
    hero_pill: '🇪🇬 Bienvenue en Égypte', hero_title_1: 'Bienvenue en', hero_title_2: 'Égypte',
    hero_sub: 'Votre voyage commence ici',
    hero_desc: 'Réservez une voiture jusqu\'à votre hôtel, explorez les meilleures attractions dans les 27 gouvernorats, et réservez des hôtels.',
    hero_search_ph: 'Rechercher gouvernorats, attractions, hôtels…', hero_btn_search: 'Rechercher',
    hero_btn_taxi: '🚕 Réserver une voiture', hero_btn_hotels: '🏨 Voir les hôtels',
    all_govs: 'Tous les gouvernorats', all_cats: 'Toutes catégories', all_stars: 'Toutes étoiles',
    sort_rating: 'Mieux notés', sort_price_asc: 'Entrée la moins chère', sort_price_desc: 'Plus cher', sort_name: 'Alphabétique',
    reset: '↺ Réinitialiser', no_results: 'Aucun résultat',
    filter_all: 'Tout', filter_taxi: '🚕 Trajets', filter_hotel: '🏨 Hôtels', filter_place: '⭐ Favoris',
    clear_all: '🗑️ Tout effacer',
    book: 'Réserver', details: 'Détails', add_fav: '⭐ Ajouter aux favoris',
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
    hero_desc: 'Buchen Sie ein Auto bis zur Hoteltür, erkunden Sie die besten Attraktionen in allen 27 Gouvernements.',
    hero_search_ph: 'Gouvernements, Attraktionen, Hotels suchen…', hero_btn_search: 'Suchen',
    hero_btn_taxi: '🚕 Auto bestellen', hero_btn_hotels: '🏨 Hotels ansehen',
    all_govs: 'Alle Gouvernements', all_cats: 'Alle Kategorien', all_stars: 'Alle Sterne',
    sort_rating: 'Bestbewertet', sort_price_asc: 'Günstigster Eintritt', sort_price_desc: 'Teuerster', sort_name: 'Alphabetisch',
    reset: '↺ Zurücksetzen', no_results: 'Keine Treffer',
    filter_all: 'Alle', filter_taxi: '🚕 Fahrten', filter_hotel: '🏨 Hotels', filter_place: '⭐ Favoriten',
    clear_all: '🗑️ Alles löschen',
    book: 'Buchen', details: 'Details', add_fav: '⭐ Zu Favoriten',
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
    hero_desc: 'Reserva un coche hasta la puerta de tu hotel y explora las mejores atracciones en las 27 gobernaciones.',
    hero_search_ph: 'Buscar gobernaciones, atracciones, hoteles…', hero_btn_search: 'Buscar',
    hero_btn_taxi: '🚕 Pedir Coche Ahora', hero_btn_hotels: '🏨 Ver Hoteles',
    all_govs: 'Todas las Gobernaciones', all_cats: 'Todas las Categorías', all_stars: 'Todas las Estrellas',
    sort_rating: 'Mejor Valorados', sort_price_asc: 'Entrada más barata', sort_price_desc: 'Más caro', sort_name: 'Alfabético',
    reset: '↺ Restablecer', no_results: 'Sin resultados',
    filter_all: 'Todo', filter_taxi: '🚕 Viajes', filter_hotel: '🏨 Hoteles', filter_place: '⭐ Favoritos',
    clear_all: '🗑️ Borrar Todo',
    book: 'Reservar', details: 'Detalles', add_fav: '⭐ Añadir a Favoritos',
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
    hero_desc: 'Prenota un\'auto fino alla porta del tuo hotel e scopri le migliori attrazioni nei 27 governatorati.',
    hero_search_ph: 'Cerca governatorati, attrazioni, hotel…', hero_btn_search: 'Cerca',
    hero_btn_taxi: '🚕 Prenota un\'auto', hero_btn_hotels: '🏨 Vedi gli hotel',
    all_govs: 'Tutti i Governatorati', all_cats: 'Tutte le Categorie', all_stars: 'Tutte le Stelle',
    sort_rating: 'Più votati', sort_price_asc: 'Ingresso più economico', sort_price_desc: 'Più costoso', sort_name: 'Alfabetico',
    reset: '↺ Reimposta', no_results: 'Nessun risultato',
    filter_all: 'Tutto', filter_taxi: '🚕 Viaggi', filter_hotel: '🏨 Hotel', filter_place: '⭐ Preferiti',
    clear_all: '🗑️ Cancella Tutto',
    book: 'Prenota', details: 'Dettagli', add_fav: '⭐ Aggiungi ai preferiti',
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
    hero_desc: 'Закажите машину до двери отеля и исследуйте лучшие достопримечательности во всех 27 провинциях.',
    hero_search_ph: 'Поиск провинций, достопримечательностей, отелей…', hero_btn_search: 'Поиск',
    hero_btn_taxi: '🚕 Заказать авто', hero_btn_hotels: '🏨 Отели',
    all_govs: 'Все провинции', all_cats: 'Все категории', all_stars: 'Все звёзды',
    sort_rating: 'Лучшие', sort_price_asc: 'Дешёвый вход', sort_price_desc: 'Дорогой', sort_name: 'По алфавиту',
    reset: '↺ Сброс', no_results: 'Нет результатов',
    filter_all: 'Все', filter_taxi: '🚕 Поездки', filter_hotel: '🏨 Отели', filter_place: '⭐ Избранное',
    clear_all: '🗑️ Очистить всё',
    book: 'Забронировать', details: 'Детали', add_fav: '⭐ В избранное',
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
    hero_desc: '预订车辆直达酒店门口，探索全部27个省份的最佳景点。',
    hero_search_ph: '搜索省份、景点、酒店…', hero_btn_search: '搜索',
    hero_btn_taxi: '🚕 立即预订车辆', hero_btn_hotels: '🏨 查看酒店',
    all_govs: '所有省份', all_cats: '所有类别', all_stars: '所有星级',
    sort_rating: '评分最高', sort_price_asc: '门票最便宜', sort_price_desc: '最贵', sort_name: '按字母',
    reset: '↺ 重置', no_results: '无匹配结果',
    filter_all: '全部', filter_taxi: '🚕 行程', filter_hotel: '🏨 酒店', filter_place: '⭐ 收藏',
    clear_all: '🗑️ 清除全部',
    book: '立即预订', details: '详情', add_fav: '⭐ 加入收藏',
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
    hero_desc: 'ホテルのドアまで車を予約し、27県すべての最高の観光スポットを探索。',
    hero_search_ph: '県、観光スポット、ホテルを検索…', hero_btn_search: '検索',
    hero_btn_taxi: '🚕 今すぐ車を予約', hero_btn_hotels: '🏨 ホテルを見る',
    all_govs: 'すべての県', all_cats: 'すべてのカテゴリ', all_stars: 'すべての星',
    sort_rating: '高評価順', sort_price_asc: '入場料安い順', sort_price_desc: '高い順', sort_name: '名前順',
    reset: '↺ リセット', no_results: '結果なし',
    filter_all: 'すべて', filter_taxi: '🚕 乗車', filter_hotel: '🏨 ホテル', filter_place: '⭐ お気に入り',
    clear_all: '🗑️ すべて削除',
    book: '予約する', details: '詳細', add_fav: '⭐ お気に入りに追加',
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
    hero_desc: '호텔 문 앞까지 차량을 예약하고 27개 주의 최고 명소를 탐험하세요.',
    hero_search_ph: '주, 명소, 호텔 검색…', hero_btn_search: '검색',
    hero_btn_taxi: '🚕 지금 차량 예약', hero_btn_hotels: '🏨 호텔 보기',
    all_govs: '모든 주', all_cats: '모든 카테고리', all_stars: '모든 등급',
    sort_rating: '최고 평점', sort_price_asc: '가장 저렴한 입장', sort_price_desc: '가장 비쌈', sort_name: '알파벳순',
    reset: '↺ 초기화', no_results: '결과 없음',
    filter_all: '전체', filter_taxi: '🚕 여행', filter_hotel: '🏨 호텔', filter_place: '⭐ 즐겨찾기',
    clear_all: '🗑️ 모두 삭제',
    book: '예약하기', details: '세부사항', add_fav: '⭐ 즐겨찾기 추가',
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
    hero_desc: 'Reserve um carro até a porta do seu hotel e explore as melhores atrações nas 27 governadorias.',
    hero_search_ph: 'Buscar governadorias, atrações, hotéis…', hero_btn_search: 'Buscar',
    hero_btn_taxi: '🚕 Pedir Carro Agora', hero_btn_hotels: '🏨 Ver Hotéis',
    all_govs: 'Todas as Governadorias', all_cats: 'Todas as Categorias', all_stars: 'Todas as Estrelas',
    sort_rating: 'Melhor Avaliados', sort_price_asc: 'Entrada mais barata', sort_price_desc: 'Mais caro', sort_name: 'Alfabético',
    reset: '↺ Redefinir', no_results: 'Sem resultados',
    filter_all: 'Tudo', filter_taxi: '🚕 Viagens', filter_hotel: '🏨 Hotéis', filter_place: '⭐ Favoritos',
    clear_all: '🗑️ Limpar Tudo',
    book: 'Reservar', details: 'Detalhes', add_fav: '⭐ Adicionar aos Favoritos',
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
    hero_desc: 'Otel kapınıza kadar araba çağırın ve 27 ildeki en iyi yerleri keşfedin.',
    hero_search_ph: 'İl, yer, otel ara…', hero_btn_search: 'Ara',
    hero_btn_taxi: '🚕 Hemen Araç Çağır', hero_btn_hotels: '🏨 Otelleri Gör',
    all_govs: 'Tüm İller', all_cats: 'Tüm Kategoriler', all_stars: 'Tüm Yıldızlar',
    sort_rating: 'En Yüksek Puanlı', sort_price_asc: 'En Ucuz Giriş', sort_price_desc: 'En Pahalı', sort_name: 'Alfabetik',
    reset: '↺ Sıfırla', no_results: 'Sonuç yok',
    filter_all: 'Tümü', filter_taxi: '🚕 Yolculuklar', filter_hotel: '🏨 Oteller', filter_place: '⭐ Favoriler',
    clear_all: '🗑️ Tümünü Sil',
    book: 'Rezervasyon Yap', details: 'Detaylar', add_fav: '⭐ Favorilere Ekle',
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
    hero_desc: 'अपने होटल के दरवाज़े तक कार बुक करें और सभी 27 प्रांतों के सर्वोत्तम आकर्षण खोजें।',
    hero_search_ph: 'प्रांत, आकर्षण, होटल खोजें…', hero_btn_search: 'खोजें',
    hero_btn_taxi: '🚕 अभी कार बुलाएं', hero_btn_hotels: '🏨 होटल देखें',
    all_govs: 'सभी प्रांत', all_cats: 'सभी श्रेणियाँ', all_stars: 'सभी सितारे',
    sort_rating: 'शीर्ष रेटेड', sort_price_asc: 'सबसे सस्ता प्रवेश', sort_price_desc: 'सबसे महंगा', sort_name: 'वर्णानुक्रम',
    reset: '↺ रीसेट', no_results: 'कोई परिणाम नहीं',
    filter_all: 'सभी', filter_taxi: '🚕 यात्राएँ', filter_hotel: '🏨 होटल', filter_place: '⭐ पसंदीदा',
    clear_all: '🗑️ सभी हटाएँ',
    book: 'अभी बुक करें', details: 'विवरण', add_fav: '⭐ पसंदीदा में जोड़ें',
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
    hero_desc: 'Boek een auto tot uw hoteldeur en verken de beste attracties in alle 27 gouvernementen.',
    hero_search_ph: 'Zoek gouvernementen, attracties, hotels…', hero_btn_search: 'Zoeken',
    hero_btn_taxi: '🚕 Nu een auto bestellen', hero_btn_hotels: '🏨 Bekijk hotels',
    all_govs: 'Alle gouvernementen', all_cats: 'Alle categorieën', all_stars: 'Alle sterren',
    sort_rating: 'Best beoordeeld', sort_price_asc: 'Goedkoopste toegang', sort_price_desc: 'Duurste', sort_name: 'Alfabetisch',
    reset: '↺ Resetten', no_results: 'Geen resultaten',
    filter_all: 'Alles', filter_taxi: '🚕 Ritten', filter_hotel: '🏨 Hotels', filter_place: '⭐ Favorieten',
    clear_all: '🗑️ Alles wissen',
    book: 'Boek nu', details: 'Details', add_fav: '⭐ Voeg toe aan favorieten',
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
    hero_desc: 'Καλέστε αυτοκίνητο μέχρι την πόρτα του ξενοδοχείου και εξερευνήστε τα καλύτερα αξιοθέατα.',
    hero_search_ph: 'Αναζήτηση νομών, αξιοθέατων, ξενοδοχείων…', hero_btn_search: 'Αναζήτηση',
    hero_btn_taxi: '🚕 Καλέστε Αυτοκίνητο', hero_btn_hotels: '🏨 Δείτε Ξενοδοχεία',
    all_govs: 'Όλοι οι νομοί', all_cats: 'Όλες οι κατηγορίες', all_stars: 'Όλα τα αστέρια',
    sort_rating: 'Καλύτερα αξιολογημένα', sort_price_asc: 'Φθηνότερη είσοδος', sort_price_desc: 'Ακριβότερο', sort_name: 'Αλφαβητικά',
    reset: '↺ Επαναφορά', no_results: 'Κανένα αποτέλεσμα',
    filter_all: 'Όλα', filter_taxi: '🚕 Διαδρομές', filter_hotel: '🏨 Ξενοδοχεία', filter_place: '⭐ Αγαπημένα',
    clear_all: '🗑️ Διαγραφή όλων',
    book: 'Κράτηση', details: 'Λεπτομέρειες', add_fav: '⭐ Προσθήκη στα αγαπημένα',
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
    hero_desc: 'Zamów auto pod drzwi hotelu i odkryj najlepsze atrakcje w 27 gubernatorstwach.',
    hero_search_ph: 'Szukaj gubernatorstw, atrakcji, hoteli…', hero_btn_search: 'Szukaj',
    hero_btn_taxi: '🚕 Zamów Auto Teraz', hero_btn_hotels: '🏨 Zobacz Hotele',
    all_govs: 'Wszystkie gubernatorstwa', all_cats: 'Wszystkie kategorie', all_stars: 'Wszystkie gwiazdki',
    sort_rating: 'Najwyżej oceniane', sort_price_asc: 'Najtańszy wstęp', sort_price_desc: 'Najdroższy', sort_name: 'Alfabetycznie',
    reset: '↺ Resetuj', no_results: 'Brak wyników',
    filter_all: 'Wszystko', filter_taxi: '🚕 Przejazdy', filter_hotel: '🏨 Hotele', filter_place: '⭐ Ulubione',
    clear_all: '🗑️ Wyczyść wszystko',
    book: 'Zarezerwuj', details: 'Szczegóły', add_fav: '⭐ Dodaj do ulubionych',
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
  { id: 'p9',  name: 'مكتبة الإسكندرية',       name_en: 'Bibliotheca Alexandrina',  gov: 'alex',      cat: 'معلم',   cat_en: 'Landmark', emoji: '📚', rating: 4.8, price: 70, desc: 'صرح ثقافي حديث على ساحل المتوسط.', desc_en: 'Modern cultural landmark on the Mediterranean.' },
  { id: 'p10', name: 'قلعة قايتباي',           name_en: 'Qaitbay Citadel',          gov: 'alex',      cat: 'أثري',   cat_en: 'Historical', emoji: '🏰', rating: 4.7, price: 100, desc: 'قلعة على البحر مكان فنار الإسكندرية.', desc_en: 'A sea fortress on the ancient lighthouse site.' },
  { id: 'p13', name: 'معبد الكرنك',            name_en: 'Karnak Temple',            gov: 'luxor',     cat: 'أثري',   cat_en: 'Historical', emoji: '🏛️', rating: 5.0, price: 300, desc: 'أعظم مجمع معابد في العالم القديم.', desc_en: "The greatest temple complex of the ancient world." },
  { id: 'p14', name: 'وادي الملوك',            name_en: 'Valley of the Kings',      gov: 'luxor',     cat: 'أثري',   cat_en: 'Historical', emoji: '⛰️', rating: 4.9, price: 350, desc: 'مقابر الفراعنة المنحوتة في الصخر.', desc_en: 'Rock-cut tombs of the pharaohs.' },
  { id: 'p17', name: 'معبد أبو سمبل',          name_en: 'Abu Simbel Temples',       gov: 'aswan',     cat: 'أثري',   cat_en: 'Historical', emoji: '🗿', rating: 5.0, price: 400, desc: 'معبد رمسيس الثاني المنحوت في الصخر.', desc_en: "Ramses II's rock-cut temple." },
  { id: 'p23', name: 'شرم الشيخ',              name_en: 'Sharm El Sheikh',          gov: 'ssinai',    cat: 'شاطئ',   cat_en: 'Beach', emoji: '🏖️', rating: 4.9, price: 0, desc: 'مدينة السلام، أجمل شواطئ سيناء.', desc_en: 'City of Peace — Sinai\'s finest beaches.' },
  { id: 'p24', name: 'دهب',                    name_en: 'Dahab',                    gov: 'ssinai',    cat: 'شاطئ',   cat_en: 'Beach', emoji: '🤿', rating: 4.9, price: 0, desc: 'جنة الغواصين ورواد الرياضات المائية.', desc_en: 'Paradise for divers and water sports.' },
  { id: 'p26', name: 'الغردقة',                name_en: 'Hurghada',                 gov: 'redsea',    cat: 'شاطئ',   cat_en: 'Beach', emoji: '🏝️', rating: 4.8, price: 0, desc: 'عاصمة السياحة الشاطئية على البحر الأحمر.', desc_en: 'Red Sea beach tourism capital.' },
  { id: 'p29', name: 'واحة سيوة',              name_en: 'Siwa Oasis',               gov: 'matrouh',   cat: 'طبيعة',  cat_en: 'Nature', emoji: '🌴', rating: 4.9, price: 0, desc: 'واحة ساحرة في قلب الصحراء الغربية.', desc_en: 'Charming oasis in the Western Desert.' },
];

const FAMOUS_HOTELS = [
  { id: 'h1', name: 'فور سيزونز نايل بلازا', name_en: 'Four Seasons Nile Plaza', gov: 'cairo', stars: 5, price: 6500, rating: 4.9, emoji: '🏨' },
  { id: 'h2', name: 'ريتز كارلتون القاهرة', name_en: 'The Ritz-Carlton Cairo', gov: 'cairo', stars: 5, price: 5200, rating: 4.8, emoji: '🏨' },
  { id: 'h9', name: 'فور سيزونز سان ستيفانو', name_en: 'Four Seasons San Stefano', gov: 'alex', stars: 5, price: 4500, rating: 4.9, emoji: '🏨' },
  { id: 'h20', name: 'أولد كاتاراكت أسوان', name_en: 'Old Cataract Hotel', gov: 'aswan', stars: 5, price: 3400, rating: 4.9, emoji: '🏨' },
  { id: 'h22', name: 'ريكسوس شرم الشيخ', name_en: 'Rixos Sharm El Sheikh', gov: 'ssinai', stars: 5, price: 3900, rating: 4.9, emoji: '🏨' },
  { id: 'h28', name: 'موفنبيك الغردقة', name_en: 'Mövenpick Hurghada', gov: 'redsea', stars: 5, price: 3100, rating: 4.8, emoji: '🏨' },
];

const STATS = [
  { icon: '🏛️', value: '48',  labelKey: 'stat_places' },
  { icon: '🏨', value: '6',   labelKey: 'stat_hotels' },
  { icon: '🚕', value: '6',   labelKey: 'stat_cars' },
  { icon: '🗺️', value: '27',  labelKey: 'stat_govs' },
];
const STAT_LABELS = { ar: ['مكان سياحي','أشهر الفنادق','نوع عربية','محافظة'], en: ['Attractions','Famous Hotels','Car Types','Governorates'] };

const DRIVERS = [
  { name: 'محمد عبد الرحمن', name_en: 'Mohamed Abdelrahman', plate: 'ABC 1234', phone: '01012345678' },
  { name: 'أحمد سعيد',        name_en: 'Ahmed Said',          plate: 'XYZ 5678', phone: '01098765432' },
  { name: 'حسن مصطفى',        name_en: 'Hassan Mostafa',      plate: 'DEF 9012', phone: '01122334455' },
  { name: 'خالد إبراهيم',     name_en: 'Khaled Ibrahim',      plate: 'GHI 3456', phone: '01233445566' },
];

/* ====================== i18n ====================== */
let currentLang = 'ar';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
}

function getLang() { return LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0]; }

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
  const localeMap = { ar: 'ar-EG', en: 'en-GB' };
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

function normalize(str) {
  if (!str) return '';
  return String(str)
    .toLowerCase()
    .replace(/[\u064B-\u0652]/g, '')
    .replace(/[أإآا]/g, 'ا')
    .replace(/[ىي]/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/\s+/g, ' ')
    .trim();
}

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

const state = {
  selectedCarType: 'comfort',
  places: { search: '', gov: '', cat: '', sort: 'rating' },
  govRegion: 'all',
  bookingsFilter: 'all',
  bookings: [],
};

function hidePreloader() {
  const pre = $('#preloader');
  if (!pre) return;
  setTimeout(() => pre.classList.add('hide'), 700);
}

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

  renderStats();
  fillGovernorateSelects();
  renderCarTypes();
  renderPlacesGrid();
  renderHotelsGrid();
  renderGovernorateRegions();
  renderGovernoratesGrid();
  renderBookings();
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

function fillGovernorateSelects() {
  const options = GOVERNORATES.map(g => `<option value="${g.id}">${g.emoji} ${entityName(g)}</option>`).join('');

  ['#tFromGov', '#tToGov', '#placeGov'].forEach(sel => {
    const el = $(sel);
    if (!el) return;
    const first = el.querySelector('option');
    el.innerHTML = (first && first.value === '') ? first.outerHTML + options : options;
  });

  const placeGov = $('#placeGov');
  if (placeGov && placeGov.options[0]) placeGov.options[0].textContent = t('all_govs');
}

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
}

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
  `;

  const tripData = {
    id: 'trip_' + Date.now(),
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
    $('#confirmTaxi').style.opacity = '.7';
  });
  $('#callDriver')?.addEventListener('click', () => toast(driverName(driver) + ' 📞', 'info'));

  toast(t('msg_taxi_ok'), 'success');
}

/* Places */
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
        id: 'place_' + place.id,
        type: 'place',
        name: entityName(place),
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

/* عرض أشهر الفنادق كمثال */
function renderHotelsGrid() {
  const grid = $('#hotelsGrid');
  if (!grid) return;

  grid.innerHTML = FAMOUS_HOTELS.map(h => {
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

  grid.onclick = e => {
    const card = e.target.closest('.hotel-card');
    if (!card) return;
    const hotel = FAMOUS_HOTELS.find(h => h.id === card.dataset.id);
    if (!hotel) return;
    const action = e.target.closest('[data-action]')?.dataset.action;
    if (action === 'details') openHotelModal(hotel);
    else if (action === 'book') openBookingModal(hotel);
  };
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
    <div class="field"><label>${currentLang === 'ar' ? 'تاريخ الوصول' : 'Check-in'}</label><input type="date" id="bCheckIn" value="${today}" min="${today}" /></div>
    <div class="field"><label>${t('nights')}</label><input type="number" id="bNights" value="2" min="1" max="30" /></div>
    <div class="field"><label>${currentLang === 'ar' ? 'عدد الأفراد' : 'Guests'}</label><input type="number" id="bGuests" value="2" min="1" max="20" /></div>
    <div class="field"><label>${currentLang === 'ar' ? 'عدد الغرف' : 'Rooms'}</label><input type="number" id="bRooms" value="1" min="1" max="10" /></div>
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
  };
  ['#bNights', '#bRooms'].forEach(s => $(s)?.addEventListener('input', recalc));

  $('#confirmBookingBtn')?.addEventListener('click', () => {
    const checkIn = $('#bCheckIn').value;
    const nights = parseInt($('#bNights').value, 10) || 1;
    const guests = parseInt($('#bGuests').value, 10) || 1;
    const rooms = parseInt($('#bRooms').value, 10) || 1;
    const total = hotel.price * nights * rooms;

    Storage.addBooking({
      id: 'hotel_' + Date.now(),
      type: 'hotel',
      hotelName: entityName(hotel),
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

function initGovsToggle() {
  const bar = $('#govsToggleBar');
  const wrapper = $('#govsContentWrapper');
  if (!bar || !wrapper) return;

  bar.addEventListener('click', () => {
    const isOpen = !wrapper.hidden;
    wrapper.hidden = isOpen;
    bar.classList.toggle('active', !isOpen);
  });
}

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
    const hotelsCount = FAMOUS_HOTELS.filter(h => h.gov === g.id).length;
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
  const hotels = FAMOUS_HOTELS.filter(h => h.gov === gov.id);
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

function globalSearch(query) {
  const q = normalize(query);
  if (!q) return { govs: [], places: [], hotels: [] };

  const govs = GOVERNORATES.filter(g => normalize(g.name).includes(q) || normalize(g.name_en).includes(q));
  const places = PLACES.filter(p => normalize(p.name).includes(q) || normalize(p.name_en).includes(q));
  const hotels = FAMOUS_HOTELS.filter(h => normalize(h.name).includes(q) || normalize(h.name_en).includes(q));

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
        </div>
      </button>
    `).join('');
  }
  if (results.places.length) {
    html += `<div class="search-group-label">${t('search_places')}</div>`;
    html += results.places.map(p => `
      <button class="search-item" data-type="place" data-id="${p.id}">
        <div class="search-item-icon">${p.emoji}</div>
        <div class="search-item-body">
          <div class="search-item-title">${escapeHtml(entityName(p))}</div>
        </div>
      </button>
    `).join('');
  }
  if (results.hotels.length) {
    html += `<div class="search-group-label">${t('search_hotels')}</div>`;
    html += results.hotels.map(h => `
      <button class="search-item" data-type="hotel" data-id="${h.id}">
        <div class="search-item-icon">${h.emoji}</div>
        <div class="search-item-body">
          <div class="search-item-title">${escapeHtml(entityName(h))}</div>
        </div>
      </button>
    `).join('');
  }

  dd.innerHTML = html;
  dd.hidden = false;

  dd.querySelectorAll('.search-item').forEach(item => {
    item.addEventListener('click', () => {
      const type = item.dataset.type;
      const id = item.dataset.id;
      dd.hidden = true;
      if (type === 'gov') {
        const gov = GOVERNORATES.find(g => g.id === id);
        if (gov) openGovernorateModal(gov);
      } else if (type === 'place') {
        const place = PLACES.find(p => p.id === id);
        if (place) openPlaceModal(place);
      } else if (type === 'hotel') {
        const hotel = FAMOUS_HOTELS.find(h => h.id === id);
        if (hotel) openHotelModal(hotel);
      }
    });
  });
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

  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    const res = globalSearch(q);
    if (res.places.length) openPlaceModal(res.places[0]);
    else if (res.hotels.length) openHotelModal(res.hotels[0]);
    else if (res.govs.length) openGovernorateModal(res.govs[0]);
    else toast(t('search_none'), 'error');
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.hero-search-wrap')) {
      if (dd) dd.hidden = true;
    }
  });
}

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

  renderHotelsGrid();

  initGovsToggle();
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
