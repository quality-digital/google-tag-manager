export interface PixelMessage extends MessageEvent {
  data:
    | ProductViewData
    | ProductClickData
    | OrderPlacedData
    | OrderPlacedTrackedData
    | PageViewData
    | ProductImpressionData
    | AddToCartData
    | RemoveToCartData
    | CartChangedData
    | HomePageInfo
    | ProductPageInfoData
    | SearchPageInfoData
    | UserData
    | CartIdData
    | CartData
    | PromoViewData
    | PromotionClickData
}

export interface EventData {
  event: string
  eventName: string
  currency: string
}

export interface PageInfoData extends EventData {
  event: 'pageInfo'
  eventName: 'vtex:pageInfo'
  accountName: string
  pageTitle: string
  pageUrl: string
}

export interface UserData extends PageInfoData {
  eventType: 'userData'
  eventName: 'vtex:userData'
  firstName?: string
  lastName?: string
  document?: string
  id?: string
  email?: string
  phone?: string
  isAuthenticated: boolean
}

export interface CartIdData extends PageInfoData {
  eventType: 'cartId'
  eventName: 'vtex:cartId'
  cartId: string
}

export interface HomePageInfo extends PageInfoData {
  eventType: 'homeView'
}

export interface ProductPageInfoData extends PageInfoData {
  eventType: 'productPageInfo'
}

export interface SearchPageInfoData extends PageInfoData {
  eventType:
    | 'internalSiteSearchView'
    | 'categoryView'
    | 'departmentView'
    | 'emptySearchView'
  category?: CategoryMetaData
  department?: DepartmentMetaData
  search?: SearchMetaData
}

interface CategoryMetaData {
  id: string
  name: string
}

interface DepartmentMetaData {
  id: string
  name: string
}

interface SearchMetaData {
  term: string
  category: CategoryMetaData
  results: number
}

export interface PageViewData extends EventData {
  event: 'pageView'
  eventName: 'vtex:pageView'
  pageTitle: string
  pageUrl: string
  referrer: string
}

export interface AddToCartData extends EventData {
  event: 'addToCart'
  eventName: 'vtex:addToCart'
  items: CartItem[]
}
export interface MuralsAddToCartData extends EventData {
  event: 'addToCart'
  eventName: 'murals:addToCart'
  items: CartItem[]
}

export interface RemoveToCartData extends EventData {
  event: 'removeFromCart'
  eventName: 'vtex:removeFromCart'
  items: CartItem[]
}

export interface CartChangedData extends EventData {
  event: 'cartChanged'
  eventName: 'vtex:cartChanged'
  items: CartItem[]
}

export interface OrderPlacedData extends Order, EventData {
  event: 'orderPlaced'
  eventName: 'vtex:orderPlaced'
}

export interface OrderPlacedTrackedData extends Order, EventData {
  event: 'orderPlacedTracked'
  eventName: 'vtex:orderPlacedTracked'
}

export interface ProductViewData extends EventData {
  event: 'productView'
  eventName: 'vtex:productView'
  product: Product
  list?: string
}

export interface ProductClickData extends EventData {
  event: 'productClick'
  eventName: 'vtex:productClick'
  product: ProductSummary
  position: number
  list?: string
}

export interface ProductImpressionData extends EventData {
  event: 'productImpression'
  eventName: 'vtex:productImpression'
  impressions: Impression[]
  product?: ProductSummary // deprecated, use impressions list!
  position?: number // deprecated, use impressions list!
  list: string
}

export interface CartLoadedData extends EventData {
  event: 'cartLoaded'
  eventName: 'vtex:cartLoaded'
  orderForm: OrderForm
}

export interface PromoViewData extends EventData {
  event: 'promoView'
  eventType: 'vtex:promoView'
  promotions: Promotion[]
}

export interface PromotionClickData extends EventData {
  event: 'promotionClick'
  eventType: 'vtex:promotionClick'
  promotions: Promotion[]
}

interface Promotion {
  id?: string
  name?: string
  creative?: string
  position?: string
}

interface CartItemAdditionalInfo {
  brandName: string
  brandId: string
}

interface CartItem {
  id: string
  productCategories: Record<string, string> | null
  additionalInfo: CartItemAdditionalInfo | null
  brand: string
  ean: string
  category: string
  detailUrl: string
  imageUrl: string
  name: string
  skuName: string
  price: number
  priceIsInt?: boolean
  sellingPrice: number
  productId: string
  productRefId: string
  quantity: number
  skuId: string
  referenceId: string // SKU reference id
  variant: string
}

interface MuralsCartItem {
  id: string
  name: string
  price: number
  sellingPrice: number
  referenceId: string // SKU reference id
}

interface Totalizer {
  id: string
  name: string
  value: number
}

interface Seller {
  id: string
  name: string
  logo: string
}

interface ClientProfileData {
  email: string
  firstName: string
  lastName: string
}

interface Address {
  addressId: string
  postalCode: string
  street: string
  number: string
  neighborhood: string
  complement: string
  city: string
  state: string
}

interface DeliveryOption {
  id: string
  price: number
  estimate: string
  isSelected: boolean
}

interface Shipping {
  selectedAddress: Address
  deliveryOptions?: DeliveryOption[]
}

interface MarketingData {
  coupon: string
  utmCampaign: string
  utmSource: string
  utmMedium: string
  utmiCampaign: string
  utmiPage: string
  utmiPart: string
}

export interface OrderForm {
  id: string
  totalizers: Totalizer[]
  sellers: Seller[]
  salesChannel: string
  items: CartItem[]
  canEditData: boolean
  loggedIn: boolean
  clientProfileData?: ClientProfileData
  shipping?: Shipping
  value: number
  marketingData?: MarketingData
}

export interface Order {
  accountName: string
  corporateName: string
  coupon: string
  currency: string
  openTextField: string
  orderGroup: string
  salesChannel: string
  visitorAddressCity: string
  visitorAddressComplement: string
  visitorAddressCountry: string
  visitorAddressNeighborhood: string
  visitorAddressNumber: string
  visitorAddressPostalCode: string
  visitorAddressState: string
  visitorAddressStreet: string
  visitorContactInfo: string[]
  visitorContactPhone: string
  visitorType: string
  transactionId: string
  transactionDate: string
  transactionAffiliation: string
  transactionTotal: number
  transactionShipping: number
  transactionSubtotal: number
  transactionDiscounts: number
  transactionTax: number
  transactionCurrency: string
  transactionPaymentType: PaymentType[]
  transactionShippingMethod: ShippingMethod[]
  transactionLatestShippingEstimate: Date
  transactionProducts: ProductOrder[]
  transactionPayment: {
    id: string
  }
}

export interface Impression {
  product: ProductSummary
  position: number
}

export interface PaymentType {
  group: string
  paymentSystemName: string
  installments: number
  value: number
}

export interface ShippingMethod {
  itemId: string
  selectedSla: string
}

export interface ProductOrder {
  id: string
  name: string
  sku: string
  skuRefId: string
  skuName: string
  productRefId: string
  ean: string
  slug: string
  brand: string
  brandId: string
  seller: string
  sellerId: string
  category: string
  categoryId: string
  categoryTree: string[]
  categoryIdTree: string[]
  priceTags: PriceTag[]
  originalPrice: number
  price: number
  sellingPrice: number
  tax: number
  quantity: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  components: any[]
  measurementUnit: string
  unitMultiplier: number
}

export interface PriceTag {
  identifier: string
  isPercentual: boolean
  value: number
}

export interface Product {
  brand: string
  brandId: string
  categories: string[]
  categoryId: string
  categoryTree: Array<{ id: string; name: string }>
  detailUrl: string
  items: Item[]
  linkText: string
  productId: string
  productName: string
  productReference: string
  selectedSku: Item
}

export interface Item {
  itemId: string
  name: string
  ean: string
  referenceId: { Key: string; Value: string }
  imageUrl: string
  sellers: Seller[]
}

export interface ProductSummary {
  brand: string
  brandId: string
  categories: string[]
  items: ItemSummary[]
  linkText: string
  productId: string
  productName: string
  productReference: string
  sku: ItemSummary
}

interface ItemSummary {
  itemId: string
  ean: string
  name: string
  referenceId: { Key: string; Value: string }
  seller: Seller
  sellers: Seller[]
}

export interface Seller {
  commertialOffer: CommertialOffer
  sellerId: string
  sellerDefault: boolean
}

export interface CommertialOffer {
  Price: number
  ListPrice: number
  AvailableQuantity: number
}

export type ProductViewReferenceId = Array<Item['referenceId']>
