export enum Routes {
  signin = 'signin',
  register = 'register',
  orders = 'orders',
  production = 'production',
  districts = 'districts',
  customers = 'customers',
  products = 'products',
  profile = 'profile',
  users = 'users',
}

export enum UrlParams {
  delivery_date = 'delivery_date',
  order_nr = 'order_nr',
  order_products = 'order_products',
  delivery_method = 'delivery_method',
  customer = 'customer',
  department = 'department',
  from = 'from',
  to = 'to',
}

export enum RouteParams {
  customerId = 'customerId',
  districtId = 'districtId',
  productId = 'productId',
}

export enum Roles {
  user = 'user',
  general_manager = 'general_manager',
  order_manager = 'order_manager',
  logistics_manager = 'logistics_manager',
  production_manager = 'production_manager',
}
