export interface ICompany {
    id: number
    title: string
    public_title: string
    short_descr: string
    logo: string
    country_id: number
    country: string
    city_id: number
    city: string
    active: number
    phone: string
    phones: string[]
    email: string
    timezone: number
    timezone_name: string
    schedule: string
    address: string
    coordinate_lat: number
    coordinate_lon: number
    app_ios: string
    app_android: string
    phone_confirmation: boolean
    currency_short_title: string
    reminds_sms_disabled: boolean
    reminds_sms_default: number
    group_priority: number
    bookform_group_priority: number
    description: string
    photos: string[]
    company_photos: string[]
    seance_delay_step: number
    show_any_master: boolean
    allow_delete_record: boolean
    allow_change_record: boolean
    allow_change_record_delay_step: number
    allow_delete_record_delay_step: number
    timetable_off: boolean
    site: string
    zip: number
    business_group_id: number
    business_type_id: number
    is_charge_active: boolean
    is_charge_optional: boolean
    is_abonement_restriction_enabled: boolean
    print_bill_on: number
    print_bill_type: string
    record_type_id: number
    split_records_by_resources: number
    auto_pay_account_id: number
    auto_pay_bank_account_id: number
    is_admin_app: number
    push_notification_phone_confirm: number
    switched_to_tariff: boolean
    sms_enabled: boolean
    activity_record_clients_count_max: number
    activity_online_record_clients_count_max: number
    is_individual: boolean
    is_tips_enabled: boolean
    email_hours_default: number
    is_show_privacy_policy: boolean
    is_surname_field_enabled: boolean
    is_patronymic_field_enabled: boolean
    is_show_timetable_record_master_resources: boolean
    social: Social
    main_group_id: number
    main_group: MainGroup
    booking_comment_required: boolean
    booking_email_required: boolean
    booking_comment_hidden: boolean
    booking_email_hidden: boolean
    booking_widget_promo: BookingWidgetPromo
  }
  
  export interface Social {
    facebook: string
    vk: string
    instagram: string
    telegram: string
    whatsapp: string
    viber: string
  }
  
  export interface MainGroup {
    id: number
    title: string
  }
  
  export interface BookingWidgetPromo {
    flocktory_url: string
  }
  