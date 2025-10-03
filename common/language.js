/**
 * FoodConnect - 多語言系統
 * 支援繁體中文 (zh-HK) 和英文 (en)
 */

// 翻譯數據庫
const translations = {
  'zh-HK': {
    // === 通用 ===
    'app_name': 'FoodConnect',
    'loading': '載入中...',
    'error': '錯誤',
    'success': '成功',
    'confirm': '確認',
    'cancel': '取消',
    'close': '關閉',
    'save': '儲存',
    'edit': '編輯',
    'delete': '刪除',
    'search': '搜尋',
    'filter': '篩選',
    'apply': '套用',
    'clear': '清除',
    'select': '選擇',
    
    // === 語言選擇器 ===
    'select_language': '選擇語言',
    'language': '語言',
    'lang_zh': '繁體中文',
    'lang_en': 'English',
    'language_note': '切換語言後將自動重新載入頁面',
    
    // === 導航 ===
    'nav_home': '首頁',
    'nav_favorites': '我的最愛',
    'nav_claims': '我的領取',
    'nav_profile': '我的',
    'nav_messages': '訊息',
    
    // === 個人資料頁 ===
    'profile_title': '我的資料',
    'individual_recipient': '個人領取者',
    'community_partner': '社區合作夥伴',
    'donor': '捐贈者',
    'volunteer': '義工',
    'joined_months': '已加入 3 個月',
    'logout': '登出',
    'my_stats': '我的統計',
    'total_claims': '總領取',
    'monthly_claims': '本月領取',
    'total_donations': '總捐贈',
    'favorites': '我的最愛',
    'account': '帳號',
    'edit_profile': '編輯個人資料',
    'change_password': '更改密碼',
    'notification_settings': '通知設定',
    'preferences': '偏好設定',
    'dark_mode': '深色模式',
    'default_area': '預設地區',
    'support': '支援',
    'help_center': '幫助中心',
    'terms_of_service': '服務條款',
    'privacy_policy': '私隱政策',
    'about': '關於 FoodConnect',
    'logout_button': '登出',
    'confirm_logout': '確定要登出嗎？',
    'logout_success': '已成功登出',
    'kwun_tong': '觀塘',
    
    // === 首頁（接收者） ===
    'nearby_food': '附近食物',
    'map_view': '地圖',
    'list_view': '列表',
    'filter_title': '篩選條件',
    'food_tags': '食物標籤',
    'distance_range': '距離範圍',
    'pickup_time': '領取時段',
    'min_quantity': '最小剩餘數量',
    'from': '從',
    'to': '到',
    'clear_all': '清除全部',
    'apply_filters': '套用篩選',
    'filters_cleared': '✅ 已清除所有篩選條件',
    'filters_applied': '已套用篩選',
    'tags': '標籤',
    'within': '內',
    
    // === 食物標籤 ===
    'tag_halal': '清真 Halal',
    'tag_vegetarian': '素食',
    'tag_vegan': '純素',
    'tag_no_pork': '不含豬肉',
    'tag_no_beef': '不含牛肉',
    'tag_gluten_free': '無麩質',
    'tag_nut_free': '無堅果',
    'tag_dairy_free': '無乳製品',
    'tag_seafood': '海鮮',
    'tag_spicy': '辣味',
    'tag_ready_to_eat': '即食',
    'tag_requires_cooking': '需烹調',
    'tag_frozen': '冷凍',
    'tag_fresh': '新鮮',
    'tag_long_storage': '長期保存',
    
    // === 食物卡片 ===
    'expires_in': '內到期',
    'expires_today': '今天到期',
    'expires_tomorrow': '明天到期',
    'expires_in_days': '天內到期',
    'expires_in_week': '一週內到期',
    'hours': '小時',
    'pickup_window': '領取時段',
    'today': '今天',
    'tomorrow': '明天',
    'meters': '米',
    'km': '公里',
    
    // === 捐贈詳情 ===
    'donation_details': '捐贈詳情',
    'food_details': '食物詳情',
    'quantity_available': '可領取數量',
    'quantity_remaining': '剩餘數量',
    'portion_size': '每份份量',
    'portions': '份',
    'about': '約',
    'claim_now': '立即領取',
    'claim_one': '領取一份',
    'claimed': '已領取',
    'expired': '已過期',
    'completed': '已完成',
    'cancelled': '已取消',
    'donor': '捐贈者',
    'donor_info': '捐贈者資訊',
    'pickup_location': '領取地點',
    'expiry_date': '到期日期',
    'best_before': '最佳食用期',
    'food_safety_warning': '食物安全提示',
    'food_safety_notice': '請注意有效期限',
    'food_safety_message': '此食物將於 {time} 到期。請確認您能在此時間前領取並食用。如有任何疑慮，請聯絡捐贈者。',
    'report': '舉報',
    'contact_donor': '聯絡捐贈者',
    'open_in_map': '在地圖中打開',
    'map_preview': '地圖預覽',
    'pickup_notice': '領取後請在指定時段前往取餐',
    'successful_donations': '已成功捐贈',
    'times': '次',
    'reviews': '評價',
    'confirm_claim': '確認領取',
    'claim_success': '領取成功！',
    'claim_message': '確認要領取一份{item}嗎？\n\n領取時段: {time}\n地點: {location}',
    'claim_success_message': '請在 {time} 前往領取。\n\n您可以在「我的領取」中查看詳情。',
    'view_my_claims': '查看我的領取',
    
    // === 我的領取 ===
    'my_claims_title': '我的領取',
    'ongoing': '進行中',
    'completed': '已完成',
    'history': '歷史記錄',
    'pending': '待領取',
    'waiting_pickup': '等待領取',
    'confirmed': '已確認',
    'picked_up': '已領取',
    'no_claims': '暫無領取記錄',
    'claim_date': '領取日期',
    'claim_quantity': '領取數量',
    'claimed': '已領取',
    'pickup': '領取',
    'view_location': '查看地點',
    'contact': '聯絡',
    'cancel': '取消',
    'cancel_claim': '取消領取',
    'cancel_claim_confirm': '確定要取消這次領取嗎？\n\n取消後其他人可以領取這份食物。',
    'claim_cancelled': '領取已取消',
    'opening_map': '正在打開地圖...',
    'rate_transaction': '為這次交易評分',
    'your_rating': '您的評分',
    'picked_up_at': '已於',
    'days_ago': '天前',
    'weeks_ago': '週前',
    'week_ago': '1週前',
    
    // === 我的最愛 ===
    'my_favorites': '我的最愛',
    'favorite_donors': '收藏的捐贈者',
    'notification_settings': '通知設定',
    'no_favorites': '暫無最愛',
    'add_to_favorites': '加入最愛',
    'remove_from_favorites': '移除最愛',
    'remove_favorite_confirm': '確定要取消收藏這個捐贈者嗎？',
    'favorite_removed': '已取消收藏',
    'recent_donation': '最近捐贈',
    'receive_notifications': '接收新捐贈通知',
    'view_profile': '查看資料',
    'notification_preferences': '通知偏好設定',
    'favorite_donor_new_post': '收藏捐贈者新發佈',
    'favorite_donor_new_post_desc': '當您收藏的捐贈者發佈新食物時通知您',
    'preferred_food_types': '偏好食物類型',
    'preferred_food_types_desc': '素食、Halal 等標籤食物發佈時通知',
    'nearby_new_donations': '附近新捐贈',
    'nearby_new_donations_desc': '500米內有新捐贈時通知',
    'food_preference_tags': '飲食偏好標籤',
    'food_preference_desc': '選擇您偏好的食物標籤，我們會優先推薦相關捐贈',
    'save_settings': '儲存設定',
    
    // === 登入/註冊 ===
    'welcome': '歡迎',
    'welcome_message': '連結剩食，分享美好',
    'login': '登入',
    'register': '註冊',
    'email': '電子郵件',
    'password': '密碼',
    'forgot_password': '忘記密碼？',
    'no_account': '還沒有帳號？',
    'have_account': '已有帳號？',
    'sign_up': '立即註冊',
    'sign_in': '立即登入',
    'get_started': '開始使用',
    'login_as': '登入為',
    'select_role': '選擇您的身份',
    'role_donor': '捐贈者',
    'role_recipient': '個人領取者',
    'role_partner': '社區合作夥伴',
    'role_volunteer': '義工',
    'role_donor_desc': '餐廳、商店或企業',
    'role_recipient_desc': '尋找食物的個人或家庭',
    'role_partner_desc': 'NGO 或社區中心',
    'role_volunteer_desc': '協助收集與分發食物',
    'full_name': '姓名',
    'organization_name': '機構名稱',
    'phone': '電話號碼',
    'address': '地址',
    'continue': '繼續',
    'agree_terms': '我同意服務條款和私隱政策',
    'registration_success': '註冊成功！',
    'login_success': '登入成功！',
    
    // === 捐贈者專用 ===
    'donor_dashboard': '捐贈者儀表板',
    'my_donations': '我的捐贈',
    'post_new_donation': '發布新捐贈',
    'create_listing': '創建捐贈清單',
    'edit_listing': '編輯捐贈',
    'active_listings': '進行中',
    'completed_listings': '已完成',
    'donation_title': '捐贈標題',
    'description': '描述',
    'upload_photo': '上傳照片',
    'total_quantity': '總數量',
    'pickup_window': '領取時段',
    'start_time': '開始時間',
    'end_time': '結束時間',
    'select_tags': '選擇標籤',
    'publish': '發布',
    'publish_donation': '發布捐贈',
    'specific_items': '具體項目',
    'surprise_bag': '驚喜袋',
    'category': '類別',
    'my_contributions': '我的貢獻',
    'total_donations': '總捐贈數',
    'portions_donated': '已捐贈份數',
    'meals_rescued': '拯救餐數',
    'co2_saved': '減少碳排放',
    'impact_summary': '影響力總結',
    'donation_history': '捐贈歷史',
    'view_details': '查看詳情',
    'mark_completed': '標記完成',
    'view_claims': '查看領取記錄',
    'claimants': '領取者',
    'no_claims_yet': '尚無人領取',
    
    // === 訊息 ===
    'messages': '訊息',
    'type_message': '輸入訊息...',
    'send': '發送',
    'no_messages': '暫無訊息',
    'chat_with': '與...對話',
    
    // === 評分 ===
    'rate_transaction': '為這次交易評分',
    'rate_donor': '評價捐贈者',
    'rate_recipient': '評價領取者',
    'your_rating': '您的評分',
    'leave_comment': '留下評論（可選）',
    'submit_rating': '提交評分',
    'rating_submitted': '評分已提交',
    'thank_you': '謝謝您！',
    
    // === 社區合作夥伴 ===
    'partner_dashboard': '合作夥伴儀表板',
    'bulk_claim': '批量領取',
    'distribution_log': '分發記錄',
    'analytics': '數據分析',
    'total_served': '服務總人數',
    'this_month': '本月',
    'distribution_points': '分發點',
    'beneficiaries': '受益者',
    'add_distribution': '新增分發記錄',
    'date': '日期',
    'location': '地點',
    'recipients_count': '領取人數',
    'notes': '備註',
    
    // === 義工 ===
    'volunteer_dashboard': '義工儀表板',
    'my_activities': '我的活動',
    'volunteer_hours': '義工時數',
    'merchants': '商戶',
    'rescue_history': '救援記錄',
    'create_rescue': '創建救援任務',
    'merchant_name': '商戶名稱',
    'total_hours': '總時數',
    'this_week': '本週',
    
    // === 錯誤訊息 ===
    'error_network': '網絡連接錯誤',
    'error_login': '登入失敗',
    'error_register': '註冊失敗',
    'error_claim': '領取失敗',
    'error_not_available': '此項目已不可用'
  },
  
  'en': {
    // === Common ===
    'app_name': 'FoodConnect',
    'loading': 'Loading...',
    'error': 'Error',
    'success': 'Success',
    'confirm': 'Confirm',
    'cancel': 'Cancel',
    'close': 'Close',
    'save': 'Save',
    'edit': 'Edit',
    'delete': 'Delete',
    'search': 'Search',
    'filter': 'Filter',
    'apply': 'Apply',
    'clear': 'Clear',
    'select': 'Select',
    
    // === Language Selector ===
    'select_language': 'Select Language',
    'language': 'Language',
    'lang_zh': '繁體中文',
    'lang_en': 'English',
    'language_note': 'Page will reload after changing language',
    
    // === Navigation ===
    'nav_home': 'Home',
    'nav_favorites': 'Favorites',
    'nav_claims': 'My Claims',
    'nav_profile': 'Profile',
    'nav_messages': 'Messages',
    
    // === Profile Page ===
    'profile_title': 'My Profile',
    'individual_recipient': 'Individual Recipient',
    'community_partner': 'Community Partner',
    'donor': 'Donor',
    'volunteer': 'Volunteer',
    'joined_months': 'Joined 3 months ago',
    'logout': 'Logout',
    'my_stats': 'My Statistics',
    'total_claims': 'Total Claims',
    'monthly_claims': 'Monthly Claims',
    'total_donations': 'Total Donations',
    'favorites': 'Favorites',
    'account': 'Account',
    'edit_profile': 'Edit Profile',
    'change_password': 'Change Password',
    'notification_settings': 'Notification Settings',
    'preferences': 'Preferences',
    'dark_mode': 'Dark Mode',
    'default_area': 'Default Area',
    'support': 'Support',
    'help_center': 'Help Center',
    'terms_of_service': 'Terms of Service',
    'privacy_policy': 'Privacy Policy',
    'about': 'About FoodConnect',
    'logout_button': 'Logout',
    'confirm_logout': 'Are you sure you want to logout?',
    'logout_success': 'Logged out successfully',
    'kwun_tong': 'Kwun Tong',
    
    // === Home Page (Recipient) ===
    'nearby_food': 'Nearby Food',
    'map_view': 'Map',
    'list_view': 'List',
    'filter_title': 'Filters',
    'food_tags': 'Food Tags',
    'distance_range': 'Distance Range',
    'pickup_time': 'Pickup Time',
    'min_quantity': 'Minimum Quantity',
    'from': 'From',
    'to': 'To',
    'clear_all': 'Clear All',
    'apply_filters': 'Apply Filters',
    'filters_cleared': '✅ All filters cleared',
    'filters_applied': 'Filters applied',
    'tags': 'Tags',
    'within': 'within',
    
    // === Food Tags ===
    'tag_halal': 'Halal',
    'tag_vegetarian': 'Vegetarian',
    'tag_vegan': 'Vegan',
    'tag_no_pork': 'No Pork',
    'tag_no_beef': 'No Beef',
    'tag_gluten_free': 'Gluten-Free',
    'tag_nut_free': 'Nut-Free',
    'tag_dairy_free': 'Dairy-Free',
    'tag_seafood': 'Seafood',
    'tag_spicy': 'Spicy',
    'tag_ready_to_eat': 'Ready to Eat',
    'tag_requires_cooking': 'Requires Cooking',
    'tag_frozen': 'Frozen',
    'tag_fresh': 'Fresh',
    'tag_long_storage': 'Long Storage',
    
    // === Food Card ===
    'expires_in': 'Expires in',
    'expires_today': 'Expires today',
    'expires_tomorrow': 'Expires tomorrow',
    'expires_in_days': 'days',
    'expires_in_week': 'Expires in a week',
    'hours': 'hours',
    'pickup_window': 'Pickup Window',
    'today': 'Today',
    'tomorrow': 'Tomorrow',
    'meters': 'm',
    'km': 'km',
    
    // === Donation Details ===
    'donation_details': 'Donation Details',
    'food_details': 'Food Details',
    'quantity_available': 'Available Quantity',
    'quantity_remaining': 'Remaining Quantity',
    'portion_size': 'Portion Size',
    'portions': 'portions',
    'about': 'About',
    'claim_now': 'Claim Now',
    'claim_one': 'Claim One',
    'claimed': 'Claimed',
    'expired': 'Expired',
    'completed': 'Completed',
    'cancelled': 'Cancelled',
    'donor': 'Donor',
    'donor_info': 'Donor Information',
    'pickup_location': 'Pickup Location',
    'expiry_date': 'Expiry Date',
    'best_before': 'Best Before',
    'food_safety_warning': 'Food Safety Notice',
    'food_safety_notice': 'Please Note Expiry Time',
    'food_safety_message': 'This food will expire at {time}. Please confirm you can pick up and consume before this time. Contact the donor if you have any concerns.',
    'report': 'Report',
    'contact_donor': 'Contact Donor',
    'open_in_map': 'Open in Map',
    'map_preview': 'Map Preview',
    'pickup_notice': 'Please pick up within the specified time window',
    'successful_donations': 'Successful donations',
    'times': 'times',
    'reviews': 'reviews',
    'confirm_claim': 'Confirm Claim',
    'claim_success': 'Claim Successful!',
    'claim_message': 'Confirm to claim one {item}?\n\nPickup Time: {time}\nLocation: {location}',
    'claim_success_message': 'Please pick up at {time}.\n\nYou can view details in "My Claims".',
    'view_my_claims': 'View My Claims',
    
    // === My Claims ===
    'my_claims_title': 'My Claims',
    'ongoing': 'Ongoing',
    'completed': 'Completed',
    'history': 'History',
    'pending': 'Pending',
    'waiting_pickup': 'Awaiting Pickup',
    'confirmed': 'Confirmed',
    'picked_up': 'Picked Up',
    'no_claims': 'No claims yet',
    'claim_date': 'Claim Date',
    'claim_quantity': 'Quantity',
    'claimed': 'Claimed',
    'pickup': 'Pickup',
    'view_location': 'View Location',
    'contact': 'Contact',
    'cancel': 'Cancel',
    'cancel_claim': 'Cancel Claim',
    'cancel_claim_confirm': 'Are you sure you want to cancel this claim?\n\nOthers can claim this food after cancellation.',
    'claim_cancelled': 'Claim cancelled',
    'opening_map': 'Opening map...',
    'rate_transaction': 'Rate this transaction',
    'your_rating': 'Your Rating',
    'picked_up_at': 'Picked up',
    'days_ago': 'days ago',
    'weeks_ago': 'weeks ago',
    'week_ago': '1 week ago',
    
    // === My Favorites ===
    'my_favorites': 'My Favorites',
    'favorite_donors': 'Favorite Donors',
    'notification_settings': 'Notification Settings',
    'no_favorites': 'No favorites yet',
    'add_to_favorites': 'Add to Favorites',
    'remove_from_favorites': 'Remove from Favorites',
    'remove_favorite_confirm': 'Are you sure you want to remove this donor from favorites?',
    'favorite_removed': 'Removed from favorites',
    'recent_donation': 'Recent donation',
    'receive_notifications': 'Receive new donation alerts',
    'view_profile': 'View Profile',
    'notification_preferences': 'Notification Preferences',
    'favorite_donor_new_post': 'Favorite Donor Posts',
    'favorite_donor_new_post_desc': 'Notify when your favorite donors post new food',
    'preferred_food_types': 'Preferred Food Types',
    'preferred_food_types_desc': 'Notify when Vegetarian, Halal, etc. food is posted',
    'nearby_new_donations': 'Nearby New Donations',
    'nearby_new_donations_desc': 'Notify when new donations within 500m',
    'food_preference_tags': 'Food Preference Tags',
    'food_preference_desc': 'Select your preferred food tags for personalized recommendations',
    'save_settings': 'Save Settings',
    
    // === Login/Register ===
    'welcome': 'Welcome',
    'welcome_message': 'Connect Surplus, Share Goodness',
    'login': 'Login',
    'register': 'Register',
    'email': 'Email',
    'password': 'Password',
    'forgot_password': 'Forgot Password?',
    'no_account': "Don't have an account?",
    'have_account': 'Already have an account?',
    'sign_up': 'Sign Up',
    'sign_in': 'Sign In',
    'get_started': 'Get Started',
    'login_as': 'Login as',
    'select_role': 'Select Your Role',
    'role_donor': 'Donor',
    'role_recipient': 'Individual Recipient',
    'role_partner': 'Community Partner',
    'role_volunteer': 'Volunteer',
    'role_donor_desc': 'Restaurant, Shop or Business',
    'role_recipient_desc': 'Individual or Family seeking food',
    'role_partner_desc': 'NGO or Community Center',
    'role_volunteer_desc': 'Help collect and distribute food',
    'full_name': 'Full Name',
    'organization_name': 'Organization Name',
    'phone': 'Phone Number',
    'address': 'Address',
    'continue': 'Continue',
    'agree_terms': 'I agree to the Terms of Service and Privacy Policy',
    'registration_success': 'Registration Successful!',
    'login_success': 'Login Successful!',
    
    // === Donor Specific ===
    'donor_dashboard': 'Donor Dashboard',
    'my_donations': 'My Donations',
    'post_new_donation': 'Post New Donation',
    'create_listing': 'Create Listing',
    'edit_listing': 'Edit Listing',
    'active_listings': 'Active',
    'completed_listings': 'Completed',
    'donation_title': 'Donation Title',
    'description': 'Description',
    'upload_photo': 'Upload Photo',
    'total_quantity': 'Total Quantity',
    'pickup_window': 'Pickup Window',
    'start_time': 'Start Time',
    'end_time': 'End Time',
    'select_tags': 'Select Tags',
    'publish': 'Publish',
    'publish_donation': 'Publish Donation',
    'specific_items': 'Specific Items',
    'surprise_bag': 'Surprise Bag',
    'category': 'Category',
    'my_contributions': 'My Contributions',
    'total_donations': 'Total Donations',
    'portions_donated': 'Portions Donated',
    'meals_rescued': 'Meals Rescued',
    'co2_saved': 'CO2 Saved',
    'impact_summary': 'Impact Summary',
    'donation_history': 'Donation History',
    'view_details': 'View Details',
    'mark_completed': 'Mark as Completed',
    'view_claims': 'View Claims',
    'claimants': 'Claimants',
    'no_claims_yet': 'No claims yet',
    
    // === Messages ===
    'messages': 'Messages',
    'type_message': 'Type a message...',
    'send': 'Send',
    'no_messages': 'No messages yet',
    'chat_with': 'Chat with',
    
    // === Rating ===
    'rate_transaction': 'Rate this Transaction',
    'rate_donor': 'Rate Donor',
    'rate_recipient': 'Rate Recipient',
    'your_rating': 'Your Rating',
    'leave_comment': 'Leave a Comment (Optional)',
    'submit_rating': 'Submit Rating',
    'rating_submitted': 'Rating Submitted',
    'thank_you': 'Thank You!',
    
    // === Community Partner ===
    'partner_dashboard': 'Partner Dashboard',
    'bulk_claim': 'Bulk Claim',
    'distribution_log': 'Distribution Log',
    'analytics': 'Analytics',
    'total_served': 'Total Served',
    'this_month': 'This Month',
    'distribution_points': 'Distribution Points',
    'beneficiaries': 'Beneficiaries',
    'add_distribution': 'Add Distribution Record',
    'date': 'Date',
    'location': 'Location',
    'recipients_count': 'Recipients Count',
    'notes': 'Notes',
    
    // === Volunteer ===
    'volunteer_dashboard': 'Volunteer Dashboard',
    'my_activities': 'My Activities',
    'volunteer_hours': 'Volunteer Hours',
    'merchants': 'Merchants',
    'rescue_history': 'Rescue History',
    'create_rescue': 'Create Rescue Mission',
    'merchant_name': 'Merchant Name',
    'total_hours': 'Total Hours',
    'this_week': 'This Week',
    
    // === Error Messages ===
    'error_network': 'Network connection error',
    'error_login': 'Login failed',
    'error_register': 'Registration failed',
    'error_claim': 'Claim failed',
    'error_not_available': 'This item is no longer available'
  }
};

// === 核心語言管理函數 ===

/**
 * 獲取當前語言
 * @returns {string} 'zh-HK' 或 'en'
 */
function getCurrentLanguage() {
  return localStorage.getItem('appLanguage') || 'zh-HK';
}

/**
 * 設定語言
 * @param {string} lang - 'zh-HK' 或 'en'
 */
function setLanguage(lang) {
  if (lang !== 'zh-HK' && lang !== 'en') {
    console.error('Invalid language:', lang);
    return;
  }
  localStorage.setItem('appLanguage', lang);
}

/**
 * 翻譯文字
 * @param {string} key - 翻譯鍵值
 * @param {string} lang - 語言（可選，預設使用當前語言）
 * @returns {string} 翻譯後的文字
 */
function t(key, lang = null) {
  const currentLang = lang || getCurrentLanguage();
  return translations[currentLang][key] || key;
}

/**
 * 套用翻譯到頁面
 * 自動更新所有帶 data-i18n 屬性的元素
 */
function applyTranslations() {
  const lang = getCurrentLanguage();
  
  // 更新 HTML lang 屬性
  document.documentElement.lang = lang;
  
  // 更新所有帶 data-i18n 屬性的元素
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translatedText = t(key);
    
    // 檢查是否是 input placeholder
    if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
      el.placeholder = translatedText;
    } else {
      el.textContent = translatedText;
    }
  });
  
  // 更新所有帶 data-i18n-placeholder 屬性的元素
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
  
  // 更新所有帶 data-i18n-title 屬性的元素
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    el.title = t(key);
  });
}

/**
 * 切換語言並重新載入頁面
 * @param {string} lang - 'zh-HK' 或 'en'
 */
function changeLanguage(lang) {
  setLanguage(lang);
  location.reload();
}

// === 語言選擇器 UI 函數 ===

/**
 * 打開語言選擇器
 */
function openLanguageSelector() {
  const overlay = document.getElementById('language-overlay');
  const panel = document.getElementById('language-panel');
  if (overlay && panel) {
    overlay.classList.remove('hidden');
    setTimeout(() => {
      panel.classList.remove('translate-y-full');
    }, 10);
  }
}

/**
 * 關閉語言選擇器
 */
function closeLanguageSelector() {
  const overlay = document.getElementById('language-overlay');
  const panel = document.getElementById('language-panel');
  if (overlay && panel) {
    panel.classList.add('translate-y-full');
    setTimeout(() => {
      overlay.classList.add('hidden');
    }, 300);
  }
}

/**
 * 更新語言選擇器的勾選狀態
 */
function updateLanguageSelector() {
  const lang = getCurrentLanguage();
  const checkZH = document.getElementById('check-zh-HK');
  const checkEN = document.getElementById('check-en');
  
  if (checkZH) checkZH.classList.toggle('hidden', lang !== 'zh-HK');
  if (checkEN) checkEN.classList.toggle('hidden', lang !== 'en');
}

// === 頁面載入時自動初始化 ===
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    updateLanguageSelector();
  });
}

