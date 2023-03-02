import {
  useMutation,
  useQuery,
  type UseMutationOptions,
  type UseQueryOptions,
} from '@tanstack/react-query';
import {fetcher} from './graphql-fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JsonScalar: any;
  Upload: any;
};

export type AboutUsInput = {
  /** Id restaurant */
  restId: Scalars['ID'];
};

export type AboutUstRes = {
  __typename?: 'AboutUstRes';
  /** Id ab out us */
  _id: Scalars['ID'];
  /** content */
  content: Scalars['String'];
  /** Created At */
  createdAt: Scalars['DateTime'];
  /** ID restaurant */
  resid: Scalars['ID'];
  /** Time close */
  type: SettingType;
};

export enum AlternateCollation {
  NonIgnorable = 'NON_IGNORABLE',
  Shifted = 'SHIFTED',
}

export type AmountPayment = {
  __typename?: 'AmountPayment';
  amount?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
};

export type ApplyPromotionInput = {
  code: Scalars['String'];
  resId: Scalars['ID'];
};

export enum ArticleGroup {
  Food = 'FOOD',
  Liquor = 'LIQUOR',
  Other = 'OTHER',
  SoftDrink = 'SOFT_DRINK',
  TeaCoffee = 'TEA_COFFEE',
}

export type AssignUserInput = {
  _id: Scalars['ID'];
  type: UserType;
  /** List user's id for assign  */
  userAssigns: Array<Scalars['ID']>;
};

export type AutoReceiptLayoutSetting = {
  __typename?: 'AutoReceiptLayoutSetting';
  autoReceiptLayout?: Maybe<SettingAutoPrintReceiptLayout>;
};

export type BasicSetting = {
  __typename?: 'BasicSetting';
  _id: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  type: SettingType;
  /** Value of basic settings. */
  value?: Maybe<Scalars['String']>;
};

export type BookingOnlineSubInput = {
  resId: Scalars['String'];
};

export type CalculatePriceInput = {
  /** Remain payment in cash for this order */
  cashAmount?: InputMaybe<Scalars['Float']>;
  isSplitOrder?: InputMaybe<Scalars['Boolean']>;
  orderId: Scalars['ID'];
};

export type CancelNetsTerminalPaymentInput = {
  orderId: Scalars['ID'];
  terminalId: Scalars['String'];
};

export enum CancelPrintReason {
  PrintError = 'PRINT_ERROR',
  Timeout = 'TIMEOUT',
  UserCancelled = 'USER_CANCELLED',
}

export type CancelVippsPaymentInput = {
  orderId: Scalars['ID'];
};

export type CardCancelInfor = {
  __typename?: 'CardCancelInfor';
  message?: Maybe<Scalars['String']>;
};

export type CardSetting = {
  __typename?: 'CardSetting';
  accountId?: Maybe<Scalars['String']>;
  clientAudience?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
  enable?: Maybe<Scalars['Boolean']>;
  type?: Maybe<ServiceGateway>;
};

export type CardSettingInput = {
  accountId?: InputMaybe<Scalars['String']>;
  clientAudience?: InputMaybe<Scalars['String']>;
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  enable?: InputMaybe<Scalars['Boolean']>;
};

export type CashPaymentInfor = {
  __typename?: 'CashPaymentInfor';
  amount?: Maybe<Scalars['Float']>;
};

export type CashPaymentInforInput = {
  amount?: InputMaybe<Scalars['Float']>;
};

export enum CashRegisterEventType {
  Coprec = 'COPREC',
  Drawopen = 'DRAWOPEN',
  Drawopenman = 'DRAWOPENMAN',
  Drawopenpayin = 'DRAWOPENPAYIN',
  Drawopenpayout = 'DRAWOPENPAYOUT',
  Emplin = 'EMPLIN',
  Emplout = 'EMPLOUT',
  Newposid = 'NEWPOSID',
  Posend = 'POSEND',
  Posstart = 'POSSTART',
  Prorec = 'PROREC',
  Retrec = 'RETREC',
  Salcmpl = 'SALCMPL',
  Salrec = 'SALREC',
  Xrep = 'XREP',
  Zrep = 'ZREP',
}

export type CashTransactionVat = {
  __typename?: 'CashTransactionVat';
  vatAmnt: Scalars['String'];
  vatPerc: Scalars['String'];
};

export type CatClientInput = {
  _id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type CatFoodRange = {
  __typename?: 'CatFoodRange';
  first?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['String']>;
};

export type CatPositionInput = {
  positions: Array<PositionInput>;
};

export type CategoriesDataInput = {
  orderMethods?: InputMaybe<Array<OrderMethod>>;
  q?: InputMaybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  enabled?: Maybe<Scalars['Boolean']>;
  foodRange: CatFoodRange;
  foods?: Maybe<Array<FoodDto>>;
  icon?: Maybe<Media>;
  iconId?: Maybe<Scalars['ID']>;
  isSpecial?: Maybe<Scalars['Boolean']>;
  isTag?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  nameNor: Scalars['String'];
  nameVi?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  resId: Scalars['ID'];
  slug?: Maybe<Scalars['String']>;
  tax: CategoryTax;
  type: ArticleGroup;
};

export type CategoryFoodRangeArgs = {
  orderMethods?: InputMaybe<Array<OrderMethod>>;
  q?: InputMaybe<Scalars['String']>;
  todayIs?: InputMaybe<MomentDaysOfWeek>;
};

export type CategoryFoodsArgs = {
  orderMethods?: InputMaybe<Array<OrderMethod>>;
  q?: InputMaybe<Scalars['String']>;
  todayIs?: InputMaybe<MomentDaysOfWeek>;
};

export type CategoryDailyReport = {
  __typename?: 'CategoryDailyReport';
  categoryName: Scalars['String'];
  foodsData: Array<FoodsDailyReportData>;
  taxType?: Maybe<Scalars['String']>;
};

export type CategoryExportStateDataSub = {
  __typename?: 'CategoryExportStateDataSub';
  fileUrl: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  resId: Scalars['String'];
  success?: Maybe<Scalars['Boolean']>;
};

export type CategoryImportStateDataSub = {
  __typename?: 'CategoryImportStateDataSub';
  data?: Maybe<Array<Category>>;
  message?: Maybe<Scalars['String']>;
  resId: Scalars['String'];
  success?: Maybe<Scalars['Boolean']>;
};

export type CategoryInput = {
  clientSystem?: InputMaybe<ClientSystem>;
  iconId?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  nameNor: Scalars['String'];
  nameVi?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  taxSetting?: InputMaybe<TaxSettingsInput>;
};

export type CategoryTax = {
  __typename?: 'CategoryTax';
  kasse: TaxSettings;
  kiosk: TaxSettings;
  web: TaxSettings;
};

export type CategoryTaxInput = {
  kasse: TaxSettingsInput;
  kiosk: TaxSettingsInput;
  web: TaxSettingsInput;
};

export type CategoryZReport = {
  __typename?: 'CategoryZReport';
  foods: Array<FoodZReport>;
  name: Scalars['String'];
  total: Scalars['Float'];
};

export type ChangePasswordInput = {
  confirmPassword: Scalars['String'];
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type CheckDomainInput = {
  _id?: InputMaybe<Scalars['ID']>;
  domain: Scalars['String'];
};

export type CheckManager = {
  __typename?: 'CheckManager';
  isManager: Scalars['Boolean'];
  userId: Scalars['String'];
};

/** Language in web client */
export enum ClientLangCode {
  En = 'En',
  No = 'No',
}

export type ClientOrdersInput = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  resId: Scalars['String'];
  /** Date to show list order in TV */
  showAtDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  statuses: Array<OrderStatus>;
};

export type ClientPromotionFilter = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<PromotionType>;
};

export enum ClientSystem {
  App = 'App',
  Cms = 'CMS',
  CloudPos = 'CloudPos',
  Kiosk = 'Kiosk',
  Web = 'Web',
}

export type CloudConfirmInput = {
  /** Remain payment in cash for this order */
  cashAmount?: InputMaybe<Scalars['Float']>;
  deviceId?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<DiscountInput>;
  fullName?: InputMaybe<Scalars['String']>;
  orderId: Scalars['ID'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type CloudPosCancelPrintReceiptInput = {
  orderId: Scalars['String'];
  reason: CancelPrintReason;
};

export type CloudPosDto = {
  __typename?: 'CloudPosDto';
  data: Array<Order>;
  total: Scalars['Float'];
};

export type CloudPosPrintReceiptInput = {
  deviceId?: InputMaybe<Scalars['String']>;
  orderId: Scalars['String'];
  receiptDuplication: ReceiptDuplication;
  workSessionId?: InputMaybe<Scalars['String']>;
};

export type CloudPosRefundOrderInput = {
  deviceId?: InputMaybe<Scalars['String']>;
  orderId: Scalars['String'];
  workSessionId?: InputMaybe<Scalars['String']>;
};

export type CloudPosSubInput = {
  resId: Scalars['String'];
};

export enum CloudPosSyncStatus {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Delayed = 'DELAYED',
  Failed = 'FAILED',
  Paused = 'PAUSED',
  Stuck = 'STUCK',
  Waiting = 'WAITING',
}

export type CloudPosSyncStatusInput = {
  syncId: Scalars['String'];
};

export type CloudPosSyncStatusRes = {
  __typename?: 'CloudPosSyncStatusRes';
  status: CloudPosSyncStatus;
};

export type CollationInput = {
  /** Set "shifted" to ignore whitespace and punctuation. Use it when streng > 3 */
  alternate?: InputMaybe<AlternateCollation>;
  /** ICU locale */
  locale?: InputMaybe<Scalars['String']>;
  /** If true: "10">"2". If false (default): "10"<"2" */
  numericOrdering?: InputMaybe<Scalars['Boolean']>;
  /** The level of comparison to perform. Set 1 to ignore case and diacritics */
  strength?: InputMaybe<Scalars['Int']>;
};

export enum CommentType {
  Order = 'ORDER',
}

export type Comments = {
  __typename?: 'Comments';
  _id: Scalars['ID'];
  commentType: CommentType;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  refId: Scalars['ID'];
};

export type CommonSubInput = {
  resId: Scalars['ID'];
};

export type CountByIdsOrdersInput = {
  orderId: Scalars['ID'];
};

export type CountBySearchFilterOrdersInput = {
  end?: InputMaybe<Scalars['DateTime']>;
  excludeOrderIds?: InputMaybe<Array<Scalars['ID']>>;
  paymentStatus?: InputMaybe<Array<PaymentStatus>>;
  paymentTypeFilter?: InputMaybe<PaymentTypeFilter>;
  q?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Array<OrderStatus>>;
};

export type CountOrdersStatistics = {
  __typename?: 'CountOrdersStatistics';
  confirmed: Scalars['Int'];
  cooking: Scalars['Int'];
  finish: Scalars['Int'];
  postpaid: Scalars['Int'];
  ready: Scalars['Int'];
  total: Scalars['Int'];
};

export type CountOrdersStatisticsInput = {
  dataByIds?: InputMaybe<Array<CountByIdsOrdersInput>>;
  dataBySearchFilter?: InputMaybe<CountBySearchFilterOrdersInput>;
  limit?: InputMaybe<Scalars['Int']>;
  mode: Array<UpdateStatusOrdersMode>;
  page?: InputMaybe<Scalars['Int']>;
  resId?: InputMaybe<Scalars['ID']>;
};

export type CreateCommentInput = {
  commentType: CommentType;
  content: Scalars['String'];
  refId: Scalars['String'];
};

export type CreateCustomerInput = {
  address?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fullName: Scalars['String'];
  gender?: InputMaybe<Gender>;
  membershipId?: InputMaybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  postcode?: InputMaybe<Scalars['String']>;
};

export type CreateDeliveryHourInput = {
  /** Day */
  day: DayType;
  /** End delivery hour */
  endDate: Scalars['DateTime'];
  isOpen: Scalars['Boolean'];
  /** Start delivery hour */
  startDate: Scalars['DateTime'];
};

export type CreateFranchiseInput = {
  domain?: InputMaybe<Scalars['String']>;
  logoId?: InputMaybe<Scalars['ID']>;
  managerId?: InputMaybe<Scalars['String']>;
  /** Franchise name */
  name: Scalars['String'];
  restaurantIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type CreateIngredientInput = {
  /** Title Ingredient */
  createIngredientInput: Array<IngredientInput>;
};

export type CreateMembershipInput = {
  name: Scalars['String'];
  /** % discount khi đạt target */
  rewardPercent: Scalars['Float'];
  status?: InputMaybe<MembershipStatus>;
  /** Số tiền khách hàng đã sử dụng để thanh toán */
  targetPrice: Scalars['Float'];
};

export type CreateNotificationsInput = {
  /** Created at */
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** OrderId */
  orderId: Scalars['ID'];
  /** OrderNumber */
  orderNumber: Scalars['String'];
  /** Status notification */
  status: Scalars['Boolean'];
  /** type */
  type: NotificationType;
  /** userOrderNumber */
  userOrderNumber?: InputMaybe<Scalars['String']>;
};

export type CreateOrderInput = {
  appRedirectSumupUrl?: InputMaybe<Scalars['String']>;
  clientSystem?: InputMaybe<ClientSystem>;
  clientTime?: InputMaybe<Scalars['DateTime']>;
  code?: InputMaybe<Scalars['String']>;
  customFoods?: InputMaybe<Array<OrderCustomFoodInput>>;
  customerId?: InputMaybe<Scalars['ID']>;
  deviceId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fallBack: Scalars['String'];
  foods: Array<OrderFoodDataInput>;
  fullName?: InputMaybe<Scalars['String']>;
  isDelivery?: InputMaybe<Scalars['Boolean']>;
  /** Sumup saved card flow */
  isSumupSavedCardFlow?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<ClientLangCode>;
  location?: InputMaybe<LocationInput>;
  note?: InputMaybe<Scalars['String']>;
  paymentMethod: PaymentMethod;
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** Date for order, which is pickup later */
  pickupAt?: InputMaybe<Scalars['DateTime']>;
  printerId?: InputMaybe<Scalars['String']>;
  resId: Scalars['ID'];
  tableId?: InputMaybe<Scalars['ID']>;
  taxType: TaxType;
  terminalId?: InputMaybe<Scalars['String']>;
  totalPrice: Scalars['Float'];
  type: OrderType;
};

export type CreateOrderInputCustom = {
  clientSystem?: InputMaybe<ClientSystem>;
  createdAt: Scalars['DateTime'];
  customFoods?: InputMaybe<Array<OrderCustomFoodInput>>;
  customerId?: InputMaybe<Scalars['ID']>;
  fallBack: Scalars['String'];
  foods: Array<OrderFoodDataInput>;
  fullName: Scalars['String'];
  language?: InputMaybe<ClientLangCode>;
  note?: InputMaybe<Scalars['String']>;
  paymentMethod: PaymentMethod;
  phoneNumber: Scalars['String'];
  resId: Scalars['ID'];
  tableId?: InputMaybe<Scalars['String']>;
  taxType: TaxType;
  totalPrice: Scalars['Float'];
  type?: InputMaybe<OrderType>;
};

export type CreatePrinterInput = {
  assignedToDeviceType: ReceiptType;
  mac: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  printOption?: InputMaybe<PrintOptionInput>;
};

export type CreatePromotionInput = {
  applyWith: PromotionApplyWith;
  discountPercent?: InputMaybe<Scalars['Float']>;
  discountType: PromotionDiscountType;
  /** EndDate */
  endDate: Scalars['DateTime'];
  foods?: InputMaybe<Array<FoodDiscountInput>>;
  name: Scalars['String'];
  /** StartDate */
  startDate: Scalars['DateTime'];
  status?: InputMaybe<Scalars['Boolean']>;
  type: PromotionType;
};

export type CreateRestaurantInput = {
  /** address restaurant */
  address?: InputMaybe<Scalars['String']>;
  /** Restaurant background */
  backgroundId?: InputMaybe<Scalars['ID']>;
  /** Restaurant background on mobile */
  backgroundMobileId?: InputMaybe<Scalars['ID']>;
  /** domain client restaurant */
  clientDomain?: InputMaybe<Scalars['String']>;
  /** Company name */
  companyName?: InputMaybe<Scalars['String']>;
  /** Person name to contact */
  contactPerson?: InputMaybe<Scalars['String']>;
  /** domain restaurant */
  description?: InputMaybe<Scalars['String']>;
  /** domain restaurant */
  descriptionNor?: InputMaybe<Scalars['String']>;
  /** domain restaurant */
  domain: Scalars['String'];
  /** Email of restaurant */
  email?: InputMaybe<Scalars['String']>;
  /** link facebook restaurant */
  facebook?: InputMaybe<Scalars['String']>;
  /** link instagram restaurant */
  instagram?: InputMaybe<Scalars['String']>;
  isTest?: InputMaybe<Scalars['Boolean']>;
  languages?: InputMaybe<Array<Languages>>;
  /** Manager */
  managedBy?: InputMaybe<Scalars['String']>;
  /** Restaurant logo */
  mediaId?: InputMaybe<Scalars['ID']>;
  /** name restaurant */
  name: Scalars['String'];
  /** Organization number */
  organizationNumber?: InputMaybe<Scalars['String']>;
  /** phone number restaurant */
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** Restaurant privacy policy */
  privacyPolicy?: InputMaybe<Scalars['String']>;
  /** Restaurant privacy policy */
  privacyPolicyNor?: InputMaybe<Scalars['String']>;
  /** Tax registration */
  taxRegistration?: InputMaybe<Scalars['String']>;
  /** Restaurant terms and conditions */
  termsAndConditions?: InputMaybe<Scalars['String']>;
  /** Restaurant terms and conditions */
  termsAndConditionsNor?: InputMaybe<Scalars['String']>;
  /** link tiktok restaurant */
  tiktok?: InputMaybe<Scalars['String']>;
  /** link youtube restaurant */
  youtube?: InputMaybe<Scalars['String']>;
};

export type CreateScheduleInput = {
  /** Memorable name */
  name?: InputMaybe<Scalars['String']>;
  /** List of recipients */
  recipients: Array<Scalars['String']>;
  /** Select reports to send */
  reportSelections: Array<ReportSelectionInput>;
  /** Enable or disable */
  status: Scalars['Boolean'];
};

export type CreateSettingCloseTimeInput = {
  /** Description English */
  description?: InputMaybe<Scalars['String']>;
  /** Description Nor */
  descriptionNor?: InputMaybe<Scalars['String']>;
  /** Description Vietnamese */
  descriptionVi?: InputMaybe<Scalars['String']>;
  /** EndDate close */
  endDate: Scalars['DateTime'];
  /** StartDate close */
  startDate: Scalars['DateTime'];
  /** title English */
  title?: InputMaybe<Scalars['String']>;
  /** Title Nor */
  titleNor?: InputMaybe<Scalars['String']>;
  /** title vietnamese */
  titleVi?: InputMaybe<Scalars['String']>;
};

export type CreateSettingDistanceTimeInput = {
  settingDistanceTimeInput: Array<SettingDistanceInput>;
};

export type CreateTableInput = {
  name: Scalars['String'];
  numberOfSeats: Scalars['Int'];
};

export type CreateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  avatarId?: InputMaybe<Scalars['String']>;
  birthDay?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  fullName: Scalars['String'];
  idNumber?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  /** Permission on winpos */
  permissionId?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<UserType>;
  username: Scalars['String'];
};

export type CustomOrderFoodData = {
  __typename?: 'CustomOrderFoodData';
  code?: Maybe<Scalars['String']>;
  discount?: Maybe<Discount>;
  isReady?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  priceAfterDiscount?: Maybe<Scalars['Float']>;
  promotion?: Maybe<Discount>;
  qty: Scalars['Float'];
  tax?: Maybe<TaxOrder>;
};

export type Customer = {
  __typename?: 'Customer';
  _id: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdById: Scalars['ID'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedById?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  firstVisitDate: Scalars['DateTime'];
  fullName: Scalars['String'];
  gender?: Maybe<Gender>;
  /** Nếu true, tổng chi tiêu = totalSpend + membership.targetPrice. Ngược lại, tổng chi tiêu = totalSpend */
  isMembershipBoosted?: Maybe<Scalars['Boolean']>;
  lastVisitDate?: Maybe<Scalars['DateTime']>;
  membership?: Maybe<Membership>;
  membershipId?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  postcode?: Maybe<Scalars['String']>;
  resId: Scalars['ID'];
  /** Tổng số đơn hàng đã đặt */
  totalOrder?: Maybe<Scalars['Int']>;
  /** Số tiền khách hàng đã sử dụng để thanh toán */
  totalSpend?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedById?: Maybe<Scalars['ID']>;
};

export type CustomerArrivedInput = {
  orderId: Scalars['String'];
  restId: Scalars['ID'];
};

export type CustomerResponse = {
  __typename?: 'CustomerResponse';
  data: Array<Customer>;
  total: Scalars['Int'];
};

export type Dashboard = {
  __typename?: 'Dashboard';
  /** revenueLastMonth */
  revenueLastMonth?: Maybe<Scalars['Float']>;
  /** totalOrder */
  totalOrder?: Maybe<Scalars['Float']>;
  /** totalRevenue */
  totalRevenue?: Maybe<Scalars['Float']>;
};

export type DataCartPayment = {
  __typename?: 'DataCartPayment';
  order?: Maybe<OrderPayment>;
  orderItems?: Maybe<Array<OrderItem>>;
  paymentId?: Maybe<Scalars['String']>;
};

export type DataFilterInput = {
  /** Page option: ID */
  after?: InputMaybe<Scalars['ID']>;
  /** Page option */
  limit?: InputMaybe<Scalars['Int']>;
  /** Page option: No pagination */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  /** Page option */
  page?: InputMaybe<Scalars['Int']>;
  /** Page option: query to searching */
  q?: InputMaybe<Scalars['String']>;
};

export type DataInput = {
  dataInput: Array<CreatePeakHourInput>;
};

export type DataPaymentBookingOnline = {
  __typename?: 'DataPaymentBookingOnline';
  order: Order;
  paidStatus?: Maybe<Scalars['Boolean']>;
  paymentStatus?: Maybe<PaymentStatus>;
};

export type DataPaymentCloudPos = {
  __typename?: 'DataPaymentCloudPos';
  order: Order;
  paidStatus?: Maybe<Scalars['Boolean']>;
};

export type DataRegisterPosDeviceInput = {
  /** Device id */
  deviceId: Scalars['String'];
  registerId: Scalars['String'];
  registerNo: Scalars['String'];
};

export enum DateType {
  Custom = 'CUSTOM',
  Last_7Days = 'LAST_7_DAYS',
  LastYear = 'LAST_YEAR',
  Month = 'MONTH',
  Quarter = 'QUARTER',
  Today = 'TODAY',
}

export type DayOfWeekReport = {
  __typename?: 'DayOfWeekReport';
  dataTax: Array<TaxReportData>;
  date: Scalars['DateTime'];
  dayOfWeek: Scalars['String'];
  totalCost: Scalars['Float'];
  totalOrigin: Scalars['Float'];
  totalTransaction: Scalars['Float'];
};

export enum DayType {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY',
}

export type DeleteTableInput = {
  _id: Scalars['ID'];
};

export type DeliveryCost = {
  __typename?: 'DeliveryCost';
  costTotal?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
  taxCost?: Maybe<Scalars['Float']>;
};

export type DeliveryHourInput = {
  dataInput: Array<CreateDeliveryHourInput>;
};

export type DeviceCheckResInput = {
  deviceId: Scalars['String'];
  deviceSystem: DeviceSystem;
};

export enum DeviceSystem {
  Kiosk = 'Kiosk',
  Kitchen = 'Kitchen',
  WinPos = 'WinPos',
}

export enum DinteroCardCallbackStatus {
  AuthorizationVoided = 'AUTHORIZATION_VOIDED',
  Authorized = 'AUTHORIZED',
  Captured = 'CAPTURED',
  Declined = 'DECLINED',
  Failed = 'FAILED',
  Initiated = 'INITIATED',
  OnHold = 'ON_HOLD',
  PartiallyCaptured = 'PARTIALLY_CAPTURED',
  PartiallyCapturedRefunded = 'PARTIALLY_CAPTURED_REFUNDED',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  Refunded = 'REFUNDED',
  Unknown = 'UNKNOWN',
}

export type DinteroCartItem = {
  __typename?: 'DinteroCartItem';
  amount?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  line_id?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['String']>;
};

export type DinteroPaymentInfor = {
  __typename?: 'DinteroPaymentInfor';
  amount?: Maybe<Scalars['Float']>;
  card?: Maybe<Scalars['JsonScalar']>;
  id?: Maybe<Scalars['String']>;
  items?: Maybe<Array<DinteroCartItem>>;
  merchant_reference?: Maybe<Scalars['String']>;
  status?: Maybe<DinteroCardCallbackStatus>;
};

export enum Direction {
  Asc = 'Asc',
  Desc = 'Desc',
}

export enum DirectionInput {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type Discount = {
  __typename?: 'Discount';
  /** the amount is discounted */
  amount: Scalars['Float'];
  /** Discount type */
  type: DiscountType;
  /** the value will be discounted, depend on type */
  value: Scalars['Float'];
};

export type DiscountInput = {
  amount?: InputMaybe<Scalars['Float']>;
  type: DiscountType;
  value: Scalars['Float'];
};

export enum DiscountType {
  Amount = 'AMOUNT',
  Percent = 'PERCENT',
}

export type Distance = {
  __typename?: 'Distance';
  distance: Scalars['Float'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type DistanceInput = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  restId: Scalars['ID'];
};

export type DownloadFoodTemplateQuery = {
  /** This food belongs to a special category, it only appears on specific days of the week */
  activeDays?: InputMaybe<Array<MomentDaysOfWeek>>;
  /** Page option: ID */
  after?: InputMaybe<Scalars['ID']>;
  catId?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<FilterFood>;
  isAllActiveDays?: InputMaybe<Scalars['Boolean']>;
  /** Page option */
  limit?: InputMaybe<Scalars['Int']>;
  /** Page option: No pagination */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  orderMethods?: InputMaybe<Array<OrderMethod>>;
  /** Page option */
  page?: InputMaybe<Scalars['Int']>;
  /** Page option: query to searching */
  q?: InputMaybe<Scalars['String']>;
  /** Specify the type of recommended list  food want get  */
  recommended?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

export type ErrorInfor = {
  __typename?: 'ErrorInfor';
  contextId?: Maybe<Scalars['String']>;
  errorCode?: Maybe<Scalars['String']>;
  errorGroup?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
};

export type ErrorInforInput = {
  contextId?: InputMaybe<Scalars['String']>;
  errorCode?: InputMaybe<Scalars['String']>;
  errorGroup?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
};

export type EventReportStructure = {
  __typename?: 'EventReportStructure';
  companyIdent: Scalars['String'];
  companyName: Scalars['String'];
  registerID: Scalars['String'];
  reportArtGroups: ReportArtGroups;
  reportCashSalesVat: ReportCashSalesVat;
  reportCorrLines: ReportCorrLines;
  reportDate: Scalars['String'];
  reportDiscountAmnt: Scalars['Float'];
  reportDiscountNum: Scalars['Float'];
  reportEmpOpeningChangeFloats?: Maybe<ReportEmpOpeningChangeFloats>;
  reportGrandTotalReturn: Scalars['String'];
  reportGrandTotalSales: Scalars['String'];
  reportGrandTotalSalesNet: Scalars['String'];
  reportID: Scalars['String'];
  reportOpenCashBoxNum: Scalars['Float'];
  reportOpeningChangeFloat: Scalars['Float'];
  reportOtherCorrs: ReportOtherCorrs;
  reportPayIns?: Maybe<ReportPayIns>;
  reportPayOuts?: Maybe<ReportPayOuts>;
  reportPayments: ReportPayments;
  reportPriceInquiries: ReportPriceInquiries;
  reportReceiptCopyAmnt: Scalars['Float'];
  reportReceiptCopyNum: Scalars['Float'];
  reportReceiptDeliveryAmnt: Scalars['Float'];
  reportReceiptDeliveryNum: Scalars['Float'];
  reportReceiptNum: Scalars['Float'];
  reportReceiptProformaAmnt: Scalars['Float'];
  reportReceiptProformaNum: Scalars['Float'];
  reportReturnAmnt: Scalars['Float'];
  reportReturnNum: Scalars['Float'];
  reportTime: Scalars['String'];
  reportTotalCashSales: ReportTotalCashSales;
  reportTrainingAmnt: Scalars['Float'];
  reportTrainingNum: Scalars['Float'];
  reportType: Scalars['String'];
  reportVoidTransAmnt: Scalars['Float'];
  reportVoidTransNum: Scalars['Float'];
};

export type ExcelUpload = {
  file: Scalars['Upload'];
};

export type ExportOrderListDataSub = {
  __typename?: 'ExportOrderListDataSub';
  exportId: Scalars['String'];
  fileUrl: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  resId: Scalars['String'];
  success?: Maybe<Scalars['Boolean']>;
};

export type ExportOrderListInput = {
  clientSystem?: InputMaybe<Array<ClientSystem>>;
  orderBy?: InputMaybe<OrderSortBy>;
  orderEndDate?: InputMaybe<Scalars['DateTime']>;
  orderPaymentStatus?: InputMaybe<PaymentStatus>;
  orderStartDate?: InputMaybe<Scalars['DateTime']>;
  orderStatus?: InputMaybe<OrderStatus>;
  paymentForm?: InputMaybe<PaymentForm>;
  paymentTypeFilter?: InputMaybe<PaymentTypeFilter>;
  pickupType?: InputMaybe<PickupType>;
  q?: InputMaybe<Scalars['String']>;
  resId?: InputMaybe<Scalars['ID']>;
  statuses?: InputMaybe<Array<OrderStatus>>;
  tableId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<OrderType>;
};

export type ExportOrderListRes = {
  __typename?: 'ExportOrderListRes';
  exportId: Scalars['String'];
};

export enum ExportSaleTable {
  Category = 'category',
  Product = 'product',
}

export type ExportSalesDataSub = {
  __typename?: 'ExportSalesDataSub';
  exportId: Scalars['String'];
  fileUrl: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  resId: Scalars['String'];
  success?: Maybe<Scalars['Boolean']>;
};

export type ExportTimesheetInput = {
  /** Page option: ID */
  after?: InputMaybe<Scalars['ID']>;
  deviceId?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  /** Page option: No pagination */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  /** Page option: query to searching */
  q?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
  userType?: InputMaybe<UserType>;
};

export type ExportTimesheetRes = {
  __typename?: 'ExportTimesheetRes';
  exportId: Scalars['String'];
};

export type ExportTimesheetSub = {
  __typename?: 'ExportTimesheetSub';
  fileUrl: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  resId: Scalars['String'];
  success?: Maybe<Scalars['Boolean']>;
};

export type ExtraOption = {
  __typename?: 'ExtraOption';
  IDRef?: Maybe<Scalars['ID']>;
  available: Scalars['Boolean'];
  /** This option is obligated or optional */
  isRequired?: Maybe<Scalars['Boolean']>;
  properties: Array<OptionProperty>;
  title: Scalars['String'];
  titleNor: Scalars['String'];
  type: PropertyType;
};

export type ExtraOptionInput = {
  IDRef?: InputMaybe<Scalars['ID']>;
  available: Scalars['Boolean'];
  /** This option is obligated or optional */
  isRequired?: InputMaybe<Scalars['Boolean']>;
  properties: Array<OptionPropertyInput>;
  title: Scalars['String'];
  titleNor: Scalars['String'];
  type: PropertyType;
};

export type FaqInput = {
  /** Id restaurant */
  restId: Scalars['ID'];
};

export type FaqRes = {
  __typename?: 'FaqRes';
  /** Id ab out us */
  _id: Scalars['ID'];
  /** content */
  content: Scalars['String'];
  /** Created At */
  createdAt: Scalars['DateTime'];
  /** ID restaurant */
  resid: Scalars['ID'];
  /** Time close */
  type: SettingType;
};

export enum FieldSort {
  ConfirmedAt = 'confirmedAt',
  UpdatedAt = 'updatedAt',
}

export enum FilterField {
  CategoryPosition = 'categoryPosition',
  Number = 'number',
  Position = 'position',
}

export type FilterFood = {
  direction: DirectionInput;
  field: FilterField;
};

export type FindOneTableByCondDto = {
  _id?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  numberOfSeats?: InputMaybe<Scalars['Int']>;
  qrCodeBody?: InputMaybe<Scalars['String']>;
  resId?: InputMaybe<Scalars['ID']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['ID']>;
};

export type FindOneTableClientDto = {
  _id: Scalars['ID'];
  resId: Scalars['ID'];
};

export type FindTableByCondDto = {
  _id?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  numberOfSeats?: InputMaybe<Scalars['Int']>;
  pageOptions?: InputMaybe<PaginationBaseDto>;
  qrCodeBody?: InputMaybe<Scalars['String']>;
  resId?: InputMaybe<Scalars['ID']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['ID']>;
};

export type FindTableClientByCondDto = {
  _id?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  numberOfSeats?: InputMaybe<Scalars['Int']>;
  pageOptions?: InputMaybe<PaginationBaseDto>;
  qrCodeBody?: InputMaybe<Scalars['String']>;
  resId: Scalars['ID'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedBy?: InputMaybe<Scalars['ID']>;
};

export type Food = {
  __typename?: 'Food';
  /** Ingredient template Ids */
  IDRefs?: Maybe<Array<Scalars['String']>>;
  _id: Scalars['ID'];
  /** This food belongs to a special category, it only appears on specific days of the week */
  activeDays?: Maybe<Array<MomentDaysOfWeek>>;
  catId?: Maybe<Scalars['ID']>;
  catIdReplacedByTag?: Maybe<Scalars['ID']>;
  category?: Maybe<Category>;
  categoryByCatId?: Maybe<Category>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** Food's department service */
  foodDepart?: Maybe<ShopDepart>;
  inPeakHours?: Maybe<Scalars['Boolean']>;
  ingredients?: Maybe<Scalars['String']>;
  ingredientsNor?: Maybe<Scalars['String']>;
  ingredientsNorWFO?: Maybe<Array<IngredientsWfo>>;
  ingredientsWFO?: Maybe<Array<IngredientsWfo>>;
  media?: Maybe<Media>;
  mediaId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  nameNor: Scalars['String'];
  nameVi?: Maybe<Scalars['String']>;
  number: Scalars['String'];
  options?: Maybe<Array<ExtraOption>>;
  orderMethods?: Maybe<Array<OrderMethod>>;
  position?: Maybe<Scalars['Float']>;
  /** Price is used for order at home( included tax) */
  price?: Maybe<Scalars['Float']>;
  /** Price is used for order takeaway ( included tax ) */
  priceSecond?: Maybe<Scalars['Float']>;
  printName?: Maybe<Scalars['String']>;
  printNameNor?: Maybe<Scalars['String']>;
  promotionPrice?: Maybe<FoodPromotion>;
  /** The food is offered when user is in checkout screen. */
  recommended?: Maybe<Scalars['Boolean']>;
  resId?: Maybe<Scalars['ID']>;
  scheduleStatus?: Maybe<ScheduleStatus>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
  statusType?: Maybe<StatusType>;
  tags?: Maybe<Array<FoodTag>>;
};

export type FoodByNumberInput = {
  number: Scalars['String'];
  resId?: InputMaybe<Scalars['ID']>;
};

export type FoodBySkuInput = {
  resId?: InputMaybe<Scalars['ID']>;
  sku: Scalars['String'];
};

export type FoodClientInput = {
  _id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type FoodDiscount = {
  __typename?: 'FoodDiscount';
  discountPriceDineIn?: Maybe<Scalars['Float']>;
  discountPriceTakeAway?: Maybe<Scalars['Float']>;
  food?: Maybe<FoodDto>;
  foodId: Scalars['ID'];
};

export type FoodDiscountInput = {
  discountPriceDineIn?: InputMaybe<Scalars['Float']>;
  discountPriceTakeAway?: InputMaybe<Scalars['Float']>;
  foodId: Scalars['ID'];
};

export type FoodDto = {
  __typename?: 'FoodDto';
  /** Ingredient template Ids */
  IDRefs?: Maybe<Array<Scalars['String']>>;
  _id: Scalars['ID'];
  /** This food belongs to a special category, it only appears on specific days of the week */
  activeDays?: Maybe<Array<MomentDaysOfWeek>>;
  catId?: Maybe<Scalars['ID']>;
  catIdReplacedByTag?: Maybe<Scalars['ID']>;
  category?: Maybe<Category>;
  categoryByCatId: Category;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** Food's department service */
  foodDepart?: Maybe<ShopDepart>;
  inPeakHours: Scalars['Boolean'];
  ingredients?: Maybe<Scalars['String']>;
  ingredientsNor?: Maybe<Scalars['String']>;
  ingredientsNorWFO?: Maybe<Array<IngredientsWfo>>;
  ingredientsWFO?: Maybe<Array<IngredientsWfo>>;
  media?: Maybe<Media>;
  mediaId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  nameNor: Scalars['String'];
  nameVi?: Maybe<Scalars['String']>;
  number: Scalars['String'];
  options?: Maybe<Array<ExtraOption>>;
  orderMethods?: Maybe<Array<OrderMethod>>;
  position?: Maybe<Scalars['Float']>;
  /** Price is used for order takeaway( included tax ) */
  price?: Maybe<Scalars['Float']>;
  /** Price is used for order at restaurant  ( included tax ) */
  priceSecond?: Maybe<Scalars['Float']>;
  printName?: Maybe<Scalars['String']>;
  printNameNor?: Maybe<Scalars['String']>;
  promotionPrice?: Maybe<FoodPromotion>;
  /** The food is offered when user is in checkout screen. */
  recommended?: Maybe<Scalars['Boolean']>;
  resId?: Maybe<Scalars['ID']>;
  scheduleStatus?: Maybe<ScheduleStatus>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
  statusType?: Maybe<StatusType>;
  tags?: Maybe<Array<FoodTag>>;
};

export type FoodExportStateDataSub = {
  __typename?: 'FoodExportStateDataSub';
  fileUrl: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  resId: Scalars['String'];
  success?: Maybe<Scalars['Boolean']>;
};

export type FoodInput = {
  IDRefs?: InputMaybe<Array<Scalars['ID']>>;
  /** This food belongs to a special category, it only appears on specific days of the week */
  activeDays?: InputMaybe<Array<MomentDaysOfWeek>>;
  catId: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  descriptionNor?: InputMaybe<Scalars['String']>;
  descriptionVi?: InputMaybe<Scalars['String']>;
  /** Food's department service */
  foodDepart?: InputMaybe<ShopDepart>;
  inPeakHours?: InputMaybe<Scalars['Boolean']>;
  ingredients?: InputMaybe<Scalars['String']>;
  ingredientsNor?: InputMaybe<Scalars['String']>;
  mediaId?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  nameNor: Scalars['String'];
  nameVi?: InputMaybe<Scalars['String']>;
  number: Scalars['String'];
  options?: InputMaybe<Array<ExtraOptionInput>>;
  orderMethods?: InputMaybe<Array<OrderMethod>>;
  /** The food's price for takeaway, if it's not provided, please contact to admin */
  price?: InputMaybe<Scalars['Float']>;
  /** The food's price at restaurant, if it's not provided, please contact to admin */
  priceSecond?: InputMaybe<Scalars['Float']>;
  printName?: InputMaybe<Scalars['String']>;
  printNameNor?: InputMaybe<Scalars['String']>;
  scheduleStatus?: InputMaybe<ScheduleStatusInput>;
  sku?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
  statusType?: InputMaybe<StatusType>;
  tags?: InputMaybe<Array<FoodTag>>;
};

export type FoodPositionInput = {
  positionFoods?: InputMaybe<Array<PositionFood>>;
};

export type FoodPromotion = {
  __typename?: 'FoodPromotion';
  dineInPrice?: Maybe<Scalars['Float']>;
  isSpecial?: Maybe<Scalars['Boolean']>;
  percent?: Maybe<Scalars['Float']>;
  promotions?: Maybe<Array<Scalars['ID']>>;
  takeAwayPrice?: Maybe<Scalars['Float']>;
};

export enum FoodTag {
  BargainPuchase = 'BARGAIN_PUCHASE',
  BestSeller = 'BEST_SELLER',
  New = 'NEW',
}

export type FoodTax = {
  __typename?: 'FoodTax';
  taxPercent: Scalars['Float'];
  taxPrice: Scalars['Float'];
  taxPriceAfterDiscount: Scalars['Float'];
  type: TaxType;
};

export type FoodZReport = {
  __typename?: 'FoodZReport';
  name: Scalars['String'];
  number?: Maybe<Scalars['String']>;
  qty: Scalars['Int'];
  taxes: Array<FoodTax>;
  total: Scalars['Float'];
};

export type FoodsClientInput = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};

export type FoodsDailyReportData = {
  __typename?: 'FoodsDailyReportData';
  _id: Scalars['String'];
  catId: Scalars['String'];
  cost: Scalars['Float'];
  qty: Scalars['Float'];
  qtyPercent: Scalars['Float'];
  taxPercent: Scalars['Float'];
  taxValue: Scalars['Float'];
  title: Scalars['String'];
};

export type FoodsImportStateDataSub = {
  __typename?: 'FoodsImportStateDataSub';
  data?: Maybe<Array<Food>>;
  message?: Maybe<Scalars['String']>;
  resId: Scalars['String'];
  success?: Maybe<Scalars['Boolean']>;
};

export type FoodsInputClient = {
  /** Page option: ID */
  after?: InputMaybe<Scalars['ID']>;
  catId?: InputMaybe<Scalars['ID']>;
  /** Page option */
  limit: Scalars['Int'];
  /** Page option: No pagination */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  /** Page option */
  page: Scalars['Int'];
  /** Page option: query to searching */
  q?: InputMaybe<Scalars['String']>;
  resId: Scalars['ID'];
};

export type ForeignTransactionInfoInput = {
  foreignTransactionId: Scalars['String'];
  orderId: Scalars['ID'];
};

export type Franchise = {
  __typename?: 'Franchise';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  domain?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['ID']>;
  logoMedia?: Maybe<Media>;
  managerId?: Maybe<Scalars['String']>;
  /** Franchise name */
  name: Scalars['String'];
  restaurantIds: Array<Scalars['ID']>;
  restaurants: Array<Restaurant>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FranchiseInput = {
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Float']>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Unknown = 'UNKNOWN',
}

export type GenerateSaleByInput = {
  fromDate?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<SaleByProductSortBy>;
  table: ExportSaleTable;
  toDate?: InputMaybe<Scalars['DateTime']>;
};

export type GetBasicGeneralSettingInput = {
  types: Array<SettingType>;
};

export type GetCategoriesClientInput = {
  q?: InputMaybe<Scalars['String']>;
  resId: Scalars['ID'];
};

export type GetCommentsInput = {
  commentType: CommentType;
  limit: Scalars['Int'];
  page: Scalars['Int'];
  refId: Scalars['ID'];
};

export type GetCommentsRes = {
  __typename?: 'GetCommentsRes';
  data: Array<Comments>;
  total: Scalars['Int'];
};

export type GetCurrentWorkSessionInput = {
  deviceId: Scalars['String'];
};

export type GetCustomersInput = {
  address?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  country?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdById?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  firstVisitDate?: InputMaybe<Scalars['DateTime']>;
  fullName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  /** Nếu true, tổng chi tiêu = totalSpend + membership.targetPrice. Ngược lại, tổng chi tiêu = totalSpend */
  isMembershipBoosted?: InputMaybe<Scalars['Boolean']>;
  lastVisitDate?: InputMaybe<Scalars['DateTime']>;
  membershipId?: InputMaybe<Scalars['String']>;
  pageOptions?: InputMaybe<PaginationBaseDto>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postcode?: InputMaybe<Scalars['String']>;
  resId?: InputMaybe<Scalars['ID']>;
  sortByMembership?: InputMaybe<Scalars['Boolean']>;
  /** Tổng số đơn hàng đã đặt */
  totalOrder?: InputMaybe<Scalars['Int']>;
  /** Số tiền khách hàng đã sử dụng để thanh toán */
  totalSpend?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedById?: InputMaybe<Scalars['ID']>;
};

export type GetFoodsInput = {
  /** This food belongs to a special category, it only appears on specific days of the week */
  activeDays?: InputMaybe<Array<MomentDaysOfWeek>>;
  /** Page option: ID */
  after?: InputMaybe<Scalars['ID']>;
  catId?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<FilterFood>;
  isAllActiveDays?: InputMaybe<Scalars['Boolean']>;
  /** Page option */
  limit: Scalars['Int'];
  /** Page option: No pagination */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  orderMethods?: InputMaybe<Array<OrderMethod>>;
  /** Page option */
  page: Scalars['Int'];
  /** Page option: query to searching */
  q?: InputMaybe<Scalars['String']>;
  /** Specify the type of recommended list  food want get  */
  recommended?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

export type GetFoodsRes = {
  __typename?: 'GetFoodsRes';
  data: Array<FoodDto>;
  total: Scalars['Int'];
};

export type GetIngredientTempInput = {
  /** Page option: ID */
  after?: InputMaybe<Scalars['ID']>;
  catId?: InputMaybe<Scalars['ID']>;
  /** Page option */
  limit: Scalars['Int'];
  /** Page option: No pagination */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  /** Page option */
  page: Scalars['Int'];
  /** Page option: query to searching */
  q?: InputMaybe<Scalars['String']>;
};

export type GetIngredientTemplatesRes = {
  __typename?: 'GetIngredientTemplatesRes';
  data: Array<IngredientTemplate>;
  total: Scalars['Int'];
};

export type GetMembershipsInput = {
  pageOptions?: InputMaybe<PaginationBaseDto>;
  status?: InputMaybe<MembershipStatus>;
};

export type GetOrderInput = {
  _id?: InputMaybe<Scalars['ID']>;
  orderNumber?: InputMaybe<Scalars['String']>;
};

export type GetOrderListInput = {
  clientSystem?: InputMaybe<Array<ClientSystem>>;
  limit?: InputMaybe<Scalars['Int']>;
  newOrdersAfterId?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<OrderSortBy>;
  orderEndDate?: InputMaybe<Scalars['DateTime']>;
  orderPaymentStatus?: InputMaybe<PaymentStatus>;
  orderStartDate?: InputMaybe<Scalars['DateTime']>;
  orderStatus?: InputMaybe<OrderStatus>;
  page: Scalars['Int'];
  paymentForm?: InputMaybe<PaymentForm>;
  paymentTypeFilter?: InputMaybe<PaymentTypeFilter>;
  pickupType?: InputMaybe<PickupType>;
  q?: InputMaybe<Scalars['String']>;
  resId?: InputMaybe<Scalars['ID']>;
  statuses?: InputMaybe<Array<OrderStatus>>;
  tableId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<OrderType>;
  viewListOrder?: InputMaybe<Scalars['Boolean']>;
};

export type GetOrdersRes = {
  __typename?: 'GetOrdersRes';
  data: Array<Order>;
  statistic?: Maybe<StatisticPaymentAmount>;
  total: Scalars['Int'];
};

export type GetPreviousWorkSessionInput = {
  deviceId: Scalars['String'];
};

export type GetPrinterListInput = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<ReceiptType>;
};

export type GetPrintersRes = {
  __typename?: 'GetPrintersRes';
  data: Array<Printer>;
  total: Scalars['Int'];
};

export type GetSaftGenerationProgressInput = {
  jobIds: Array<Scalars['String']>;
};

export type GetScheduleListInput = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type GetSumUpTerminalInput = {
  resId: Scalars['ID'];
};

export type GetSumUpTokenByCodeInput = {
  clientId: Scalars['ID'];
  /** code from query of callback url */
  code: Scalars['String'];
  resId: Scalars['ID'];
  secretId: Scalars['ID'];
  type: SumupTokenType;
};

export type GetSumUpTokenInput = {
  resId: Scalars['ID'];
};

export type GetUsersInput = {
  after?: InputMaybe<Scalars['ID']>;
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  resId?: InputMaybe<Scalars['String']>;
  uids?: InputMaybe<Array<Scalars['ID']>>;
};

export type GetUsersRestaurantInput = {
  /** Page option: ID */
  after?: InputMaybe<Scalars['ID']>;
  /** Page option: Field name to apply after */
  afterBy?: InputMaybe<Scalars['String']>;
  /** Collate option: Usually used to sort result */
  collation?: InputMaybe<CollationInput>;
  /** Page option */
  limit?: InputMaybe<Scalars['Int']>;
  /** Page option: No pagination */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  /** Page option */
  page?: InputMaybe<Scalars['Int']>;
  permissionId?: InputMaybe<Scalars['String']>;
  /** Page option: query to searching */
  q?: InputMaybe<Scalars['String']>;
  /** Page option */
  sortBy?: InputMaybe<Scalars['String']>;
  /** Page option */
  sortMode?: InputMaybe<DirectionInput>;
  /** UserType */
  type?: InputMaybe<UserType>;
};

export type GetUsersRestaurantRes = {
  __typename?: 'GetUsersRestaurantRes';
  data: Array<RestaurantRole>;
  total: Scalars['Int'];
};

export type GetWorkSessionInput = {
  _id: Scalars['ID'];
  deviceId: Scalars['String'];
};

export type GetWorkSessionsInput = {
  after?: InputMaybe<Scalars['ID']>;
  deviceId: Scalars['String'];
  fromDate?: InputMaybe<Scalars['DateTime']>;
  limit: Scalars['Int'];
  page: Scalars['Int'];
  toDate?: InputMaybe<Scalars['DateTime']>;
};

export type GetXReportInput = {
  deviceId: Scalars['String'];
  fromDate?: InputMaybe<Scalars['DateTime']>;
  toDate?: InputMaybe<Scalars['DateTime']>;
};

export type IngredientInput = {
  /** ID Ingredient */
  _id?: InputMaybe<Scalars['String']>;
  /** Title Ingredient */
  titleIngredient: Scalars['String'];
  /** Title Ingredient VI */
  titleIngredientNor: Scalars['String'];
};

export type IngredientTemplate = {
  __typename?: 'IngredientTemplate';
  _id: Scalars['ID'];
  catIds: Array<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  nameNor: Scalars['String'];
  options?: Maybe<Array<ExtraOption>>;
  resId: Scalars['ID'];
};

export type IngredientTemplateInput = {
  catIds: Array<Scalars['ID']>;
  name: Scalars['String'];
  nameNor: Scalars['String'];
  options?: InputMaybe<Array<ExtraOptionInput>>;
};

export type IngredientsWfo = {
  __typename?: 'IngredientsWFO';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type InputGetNotifications = {
  /** Id last array notification */
  after?: InputMaybe<Scalars['String']>;
  /** Limit 1 page */
  limit: Scalars['Float'];
};

export type InputUpdateFranchise = {
  domain?: InputMaybe<Scalars['String']>;
  logoId?: InputMaybe<Scalars['ID']>;
  managerId?: InputMaybe<Scalars['String']>;
  /** Franchise name */
  name?: InputMaybe<Scalars['String']>;
  restaurantIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type InputUpdateRestaurant = {
  /** address restaurant */
  address?: InputMaybe<Scalars['String']>;
  /** Restaurant background */
  backgroundId?: InputMaybe<Scalars['ID']>;
  /** Restaurant background on mobile */
  backgroundMobileId?: InputMaybe<Scalars['ID']>;
  /** domain client restaurant */
  clientDomain?: InputMaybe<Scalars['String']>;
  /** Company name */
  companyName?: InputMaybe<Scalars['String']>;
  /** Person name to contact */
  contactPerson?: InputMaybe<Scalars['String']>;
  /** domain restaurant */
  description?: InputMaybe<Scalars['String']>;
  /** domain restaurant */
  descriptionNor?: InputMaybe<Scalars['String']>;
  /** domain restaurant */
  domain?: InputMaybe<Scalars['String']>;
  /** Email of restaurant */
  email?: InputMaybe<Scalars['String']>;
  /** link facebook restaurant */
  facebook?: InputMaybe<Scalars['String']>;
  /** link instagram restaurant */
  instagram?: InputMaybe<Scalars['String']>;
  isTest?: InputMaybe<Scalars['Boolean']>;
  languages?: InputMaybe<Array<Languages>>;
  /** Manager */
  managedBy?: InputMaybe<Scalars['String']>;
  /** Restaurant logo */
  mediaId?: InputMaybe<Scalars['ID']>;
  /** name restaurant */
  name?: InputMaybe<Scalars['String']>;
  /** Organization number */
  organizationNumber?: InputMaybe<Scalars['String']>;
  /** phone number restaurant */
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** Restaurant privacy policy */
  privacyPolicy?: InputMaybe<Scalars['String']>;
  /** Restaurant privacy policy */
  privacyPolicyNor?: InputMaybe<Scalars['String']>;
  /** Tax registration */
  taxRegistration?: InputMaybe<Scalars['String']>;
  /** Restaurant terms and conditions */
  termsAndConditions?: InputMaybe<Scalars['String']>;
  /** Restaurant terms and conditions */
  termsAndConditionsNor?: InputMaybe<Scalars['String']>;
  /** link tiktok restaurant */
  tiktok?: InputMaybe<Scalars['String']>;
  /** link youtube restaurant */
  youtube?: InputMaybe<Scalars['String']>;
};

export type IsManagerInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type IsSuperAdminInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Jwt = {
  __typename?: 'JWT';
  expiresAt: Scalars['String'];
  jwtPayload: JwtTokenPayload;
  refreshToken: Scalars['String'];
  refreshTokenExpiresAt: Scalars['String'];
  token: Scalars['String'];
  tokenType: Scalars['String'];
};

export type JwtTokenPayload = {
  __typename?: 'JwtTokenPayload';
  _id: Scalars['String'];
  user: User;
};

export type KioskConfig = {
  printerConfig?: InputMaybe<PrinterConfig>;
  terminalId?: InputMaybe<Scalars['String']>;
};

export enum Languages {
  /** English */
  En = 'en',
  /** Norwegian Bokmål */
  Nb = 'nb',
}

export type LimitedOpeningSetting = {
  __typename?: 'LimitedOpeningSetting';
  _id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  limitedOpeningEndAt?: Maybe<Scalars['DateTime']>;
  limitedOpeningStartAt?: Maybe<Scalars['DateTime']>;
  resid?: Maybe<Scalars['ID']>;
  type?: Maybe<SettingType>;
};

export type LimitedOpeningTimeRes = {
  __typename?: 'LimitedOpeningTimeRes';
  data: Array<LimitedOpeningSetting>;
  total: Scalars['Int'];
};

export type ListClientPromotionsInput = {
  /** Page option: ID */
  after?: InputMaybe<Scalars['ID']>;
  filters?: InputMaybe<ClientPromotionFilter>;
  /** Page option */
  limit: Scalars['Int'];
  /** Page option: No pagination */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  /** Page option */
  page: Scalars['Int'];
  /** Page option: query to searching */
  q?: InputMaybe<Scalars['String']>;
  resId: Scalars['String'];
  sorts?: InputMaybe<Array<PromotionSort>>;
};

export type ListPaymentInfo = {
  __typename?: 'ListPaymentInfo';
  _id: Scalars['ID'];
  bankaxept: Scalars['Float'];
  bankaxeptCount: Scalars['Int'];
  cash: Scalars['Float'];
  cashCount: Scalars['Int'];
  customers: Array<Customer>;
  mastercard: Scalars['Float'];
  mastercardCount: Scalars['Int'];
  other: Scalars['Float'];
  otherCount: Scalars['Int'];
  total: Scalars['Float'];
  user: StaffInfo;
  vipps: Scalars['Float'];
  vippsCount: Scalars['Int'];
  visa: Scalars['Float'];
  visaCount: Scalars['Int'];
};

export type ListPromotionInput = {
  /** Page option: ID */
  after?: InputMaybe<Scalars['ID']>;
  filters?: InputMaybe<ClientPromotionFilter>;
  /** Page option */
  limit: Scalars['Int'];
  /** Page option: No pagination */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  /** Page option */
  page: Scalars['Int'];
  /** Page option: query to searching */
  q?: InputMaybe<Scalars['String']>;
  sorts?: InputMaybe<Array<PromotionSort>>;
};

export type ListPromotionsRes = {
  __typename?: 'ListPromotionsRes';
  data?: Maybe<Array<Promotion>>;
  total?: Maybe<Scalars['Float']>;
};

export type ListReportInput = {
  /** Page option: ID */
  after?: InputMaybe<Scalars['ID']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  /** Page option */
  limit?: InputMaybe<Scalars['Int']>;
  /** Page option: No pagination */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  /** Page option */
  page?: InputMaybe<Scalars['Int']>;
  /** Page option: query to searching */
  q?: InputMaybe<Scalars['String']>;
  reportType: ReportType;
  startDate?: InputMaybe<Scalars['DateTime']>;
};

export type ListReportRes = {
  __typename?: 'ListReportRes';
  data: Array<Report>;
  total: Scalars['Float'];
};

export type ListReportSchedulesRes = {
  __typename?: 'ListReportSchedulesRes';
  data: Array<Settings>;
  total: Scalars['Int'];
};

export type Location = {
  __typename?: 'Location';
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
};

export type LocationInput = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
};

export type LogCashRegisterEventInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  deviceId: Scalars['String'];
  empID?: InputMaybe<Scalars['String']>;
  eventType: CashRegisterEventType;
  orderId?: InputMaybe<Scalars['String']>;
  resId?: InputMaybe<Scalars['String']>;
  transID?: InputMaybe<Scalars['String']>;
  workSessionId?: InputMaybe<Scalars['String']>;
};

export type LoginUserInput = {
  clientSystem?: InputMaybe<ClientSystem>;
  domain?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  prefixDomain?: InputMaybe<Scalars['String']>;
  resId?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type MailSetting = {
  __typename?: 'MailSetting';
  driver?: Maybe<Scalars['String']>;
  encryption?: Maybe<Scalars['String']>;
  fromAddress?: Maybe<Scalars['String']>;
  fromName?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['Float']>;
  username: Scalars['String'];
};

export type MailSettingsInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MailTemplate = {
  __typename?: 'MailTemplate';
  content?: Maybe<Scalars['String']>;
};

export type MailTemplateInput = {
  content?: InputMaybe<Scalars['String']>;
};

export type ManualSendEmailReportInput = {
  /** Lis of recipients */
  recipients: Array<Scalars['String']>;
  /** Report format will send to recipient */
  reportFormat: ReportFormat;
  /** List of report Id */
  reportIds: Array<Scalars['String']>;
};

export type MappingDeviceDto = {
  __typename?: 'MappingDeviceDto';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  /** The ID for specific device as deviceID or MAC */
  deviceId: Scalars['String'];
  deviceSystem: DeviceSystem;
  netsTerminalId?: Maybe<Scalars['String']>;
  printerId?: Maybe<Scalars['String']>;
  resId: Scalars['String'];
  restaurant: Restaurant;
};

export type MappingDeviceInput = {
  /** The ID for specific device as deviceID or MAC */
  deviceId: Scalars['String'];
  deviceSystem: DeviceSystem;
  netsTerminalId?: InputMaybe<Scalars['String']>;
  printerId?: InputMaybe<Scalars['String']>;
  resId: Scalars['ID'];
};

export type Media = {
  __typename?: 'Media';
  _id?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['ID']>;
  thumbnail: Scalars['String'];
  thumbnail2x?: Maybe<Scalars['String']>;
  type: UploadType;
  url: Scalars['String'];
  user?: Maybe<User>;
};

export type MediaDimension = {
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export type MediaDto = {
  __typename?: 'MediaDto';
  _id?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['String']>;
  thumbnail: Scalars['String'];
  thumbnail2x?: Maybe<Scalars['String']>;
  type: UploadType;
  url: Scalars['String'];
  user?: Maybe<User>;
};

export type MediaUpload = {
  dimensions?: InputMaybe<MediaDimension>;
  file: Scalars['Upload'];
};

export type Membership = {
  __typename?: 'Membership';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  createdById: Scalars['ID'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedById?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  resId: Scalars['ID'];
  rewardPercent: Scalars['Float'];
  status: MembershipStatus;
  targetPrice: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  updatedById: Scalars['ID'];
};

export type MembershipResponse = {
  __typename?: 'MembershipResponse';
  data: Array<Membership>;
  total: Scalars['Int'];
};

export enum MembershipStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export enum MomentDaysOfWeek {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY',
}

export type Mutation = {
  __typename?: 'Mutation';
  CheckDistance: Distance;
  CreateAboutUs: AboutUstRes;
  CreateComment: Comments;
  CreateFAQ: FaqRes;
  CreateInvoiceHeader: FaqRes;
  CustomerArrived: Scalars['Boolean'];
  UpdateFoodReady: Scalars['Boolean'];
  applyPromotion?: Maybe<Promotion>;
  assignPrinter: Printer;
  assignUserRestaurant: Scalars['Boolean'];
  authorizeTerminalConfig: Scalars['Boolean'];
  cancelNetsTerminalPayment: Scalars['Boolean'];
  cancelPrintReceipt: Scalars['Boolean'];
  cancelVippsPayment: Scalars['Boolean'];
  changeCategoryPositions: Scalars['Boolean'];
  changeFoodPositionOnCategory: Scalars['Boolean'];
  changePassword: Jwt;
  checkIsDomainExist: Scalars['Boolean'];
  cloudPosCalculateCashAmount: Scalars['Boolean'];
  cloudPosCancelOder: Scalars['Boolean'];
  cloudPosConfirmOrder: Scalars['Boolean'];
  cloudPosDelOrders: Scalars['Boolean'];
  cloudPosPrintReceipt: Order;
  cloudPosRefundOrder: Scalars['Boolean'];
  cloudPosUpdateOrder: Order;
  configureKiosk: Scalars['Boolean'];
  createAndUpdateSettingsOpenTime: Array<SettingsOpenTime>;
  createBasicGeneralSetting: BasicSetting;
  createCategory: Category;
  createCustomer?: Maybe<Customer>;
  createDistance: Array<SettingsDistance>;
  createFood: Food;
  createFranchise: Franchise;
  createIngredient: Array<SettingIngredient>;
  createIngredientTemplate: IngredientTemplate;
  createMembership?: Maybe<Membership>;
  createNotification: Notifications;
  createOrUpdatePermission: Scalars['Boolean'];
  createOrUpdateReceiptSetting: Settings;
  createOrUpdateTax: Settings;
  createOrUpdateWinPosTax: Settings;
  createOrder: Order;
  createOrderCloudPos: Order;
  createOrderCustom: Order;
  createPrinter: Printer;
  createPromotion: Promotion;
  createRestaurant: Restaurant;
  createRestaurantStaff: User;
  createSettingDeliveryHours: Scalars['Boolean'];
  createSettingPeakHours: Scalars['Boolean'];
  createSettingsCloseTime: SettingsCloseTime;
  createTable?: Maybe<Table>;
  deletePresetSetting: Scalars['Boolean'];
  deleteTable: Scalars['Boolean'];
  exportOrderList: ExportOrderListRes;
  exportTimesheet: ExportTimesheetRes;
  finishPaymentTerminalSumUp: Scalars['Boolean'];
  foodsInPeakHours: Scalars['Boolean'];
  genCategoriesFoods: Scalars['Boolean'];
  generateRegularReport: Scalars['Boolean'];
  generateSAFTReport: SaftReportGenerationJobs;
  generateSalesBy: Scalars['Boolean'];
  importCategories: Scalars['Boolean'];
  importFoods: Scalars['Boolean'];
  isManager: CheckManager;
  isSuperAmin: Scalars['Boolean'];
  logCashRegisterEvent: Scalars['Boolean'];
  login: Jwt;
  loginRestaurantAdmin: Jwt;
  manualSendEmailReport?: Maybe<Scalars['Boolean']>;
  manualSendXReportEmail?: Maybe<Scalars['Boolean']>;
  manualSendZReportEmail?: Maybe<Scalars['Boolean']>;
  parkBill: Scalars['Boolean'];
  paymentCloudPos: PaymentRes;
  paymentSumUpCallback: Scalars['Boolean'];
  readOrder: Scalars['Boolean'];
  refreshToken: Jwt;
  register: Jwt;
  registerDevice: MappingDeviceDto;
  registerPosDevice: Settings;
  removeCategory: Scalars['Boolean'];
  removeCloseTime: Scalars['Boolean'];
  removeCustomer?: Maybe<Scalars['Boolean']>;
  removeDevice: MappingDeviceDto;
  removeDistance: Scalars['Boolean'];
  removeFood: Scalars['Boolean'];
  removeFranchise: Franchise;
  removeIngredientTemplate: Scalars['Boolean'];
  removeLimitedOpeningTimeSetting: Scalars['Boolean'];
  removeNotification: Notifications;
  removePeakHour: Scalars['Boolean'];
  removePrinter: Scalars['Boolean'];
  removePromotion: Scalars['Boolean'];
  removeRestaurant: Restaurant;
  removeUser: Scalars['Boolean'];
  reprintReceipt: Scalars['Boolean'];
  sendBillToEmail: SendBillToEmailRes;
  sendSalesBy: Scalars['Boolean'];
  setAutoReceiptLayout?: Maybe<AutoReceiptLayoutSetting>;
  setFoodsAsRecommended: Scalars['Boolean'];
  setOnOffRatingRestaurant: Scalars['Boolean'];
  setOnOffTableRestaurant: Scalars['Boolean'];
  setReportAutoSendSchedule: Array<Settings>;
  setSumUpTokenByCode: SumupToken;
  startWorkSession?: Maybe<WorkSession>;
  stopWorkSession?: Maybe<WorkSession>;
  switchRestaurant: Jwt;
  syncCloudPos: SyncCloudPos;
  syncOrdersData: Array<Order>;
  transferTableOrders: Scalars['Boolean'];
  unAssignsUser: Scalars['Boolean'];
  updateCategory: Scalars['Boolean'];
  updateCloseTime?: Maybe<SettingsCloseTime>;
  updateCustomer?: Maybe<Customer>;
  updateFood: Scalars['Boolean'];
  updateFranchise: Scalars['Boolean'];
  updateIngredientTemplate: Scalars['Boolean'];
  updateMailSettings?: Maybe<MailSetting>;
  updateMembership?: Maybe<Membership>;
  updateMemberships: Scalars['Boolean'];
  updateNotification: Scalars['Boolean'];
  updateOrder: Scalars['Boolean'];
  updateOrdersTable: Scalars['Boolean'];
  updatePaymentSetting: Scalars['Boolean'];
  updatePrinter: Printer;
  updatePromotion: Scalars['Boolean'];
  updateRestaurant: Scalars['Boolean'];
  updateStatusOrders: Scalars['Boolean'];
  updateSumupForeignTransactionId: Scalars['Boolean'];
  updateTable?: Maybe<Table>;
  updateTaxes: Scalars['Boolean'];
  updateUser: Scalars['Boolean'];
  updateWkMailTemplate?: Maybe<MailTemplate>;
  updateWorkSession?: Maybe<WorkSession>;
  updateWorkSessionPrice?: Maybe<WorkSession>;
  uploadMedia: MediaDto;
  upsertBasicGeneralSettings: Scalars['Boolean'];
  upsertLimitedOpeningTimeSetting: LimitedOpeningSetting;
  upsertPresetSetting: Settings;
  upsertRestaurantCloseMessageSetting: Settings;
};

export type MutationCheckDistanceArgs = {
  distanceInput: DistanceInput;
};

export type MutationCreateAboutUsArgs = {
  content: Scalars['String'];
};

export type MutationCreateCommentArgs = {
  createCommentInput: CreateCommentInput;
};

export type MutationCreateFaqArgs = {
  content: Scalars['String'];
};

export type MutationCreateInvoiceHeaderArgs = {
  content: Scalars['String'];
};

export type MutationCustomerArrivedArgs = {
  customerArrivedInput: CustomerArrivedInput;
};

export type MutationUpdateFoodReadyArgs = {
  updateInput: UpdateFoodReadyInput;
};

export type MutationApplyPromotionArgs = {
  applyPromotionInput: ApplyPromotionInput;
};

export type MutationAssignPrinterArgs = {
  assignPrinterInput: PrinterConfig;
};

export type MutationAssignUserRestaurantArgs = {
  assignUserInput: AssignUserInput;
};

export type MutationAuthorizeTerminalConfigArgs = {
  terminalConfigInput: TerminalConfigInput;
};

export type MutationCancelNetsTerminalPaymentArgs = {
  cancelNetsTerminalPaymentInput: CancelNetsTerminalPaymentInput;
};

export type MutationCancelPrintReceiptArgs = {
  cloudPosCancelPrintReceiptInput: CloudPosCancelPrintReceiptInput;
};

export type MutationCancelVippsPaymentArgs = {
  cancelVippsPaymentInput: CancelVippsPaymentInput;
};

export type MutationChangeCategoryPositionsArgs = {
  data: CatPositionInput;
};

export type MutationChangeFoodPositionOnCategoryArgs = {
  data: FoodPositionInput;
};

export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};

export type MutationCheckIsDomainExistArgs = {
  CheckDomainInput: CheckDomainInput;
};

export type MutationCloudPosCalculateCashAmountArgs = {
  calculatePriceInput: CalculatePriceInput;
};

export type MutationCloudPosCancelOderArgs = {
  orderId: Scalars['String'];
};

export type MutationCloudPosConfirmOrderArgs = {
  cloudConfirmInput: CloudConfirmInput;
};

export type MutationCloudPosDelOrdersArgs = {
  posDelOrdersInput: PosDelOrdersInput;
};

export type MutationCloudPosPrintReceiptArgs = {
  cloudPosPrintReceiptInput: CloudPosPrintReceiptInput;
};

export type MutationCloudPosRefundOrderArgs = {
  cloudPosRefundOrderInput: CloudPosRefundOrderInput;
};

export type MutationCloudPosUpdateOrderArgs = {
  updateOrderPos: UpdateOrderPos;
};

export type MutationConfigureKioskArgs = {
  kioskConfig: KioskConfig;
};

export type MutationCreateAndUpdateSettingsOpenTimeArgs = {
  createSettingsInput: OpenTimeInput;
};

export type MutationCreateBasicGeneralSettingArgs = {
  createBasicGeneralSetting: CreateBasicGeneralSettingInput;
};

export type MutationCreateCategoryArgs = {
  createCategoryInput: CategoryInput;
};

export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};

export type MutationCreateDistanceArgs = {
  settingDistanceInput: CreateSettingDistanceTimeInput;
};

export type MutationCreateFoodArgs = {
  createFoodInput: FoodInput;
};

export type MutationCreateFranchiseArgs = {
  createFranchiseInput: CreateFranchiseInput;
};

export type MutationCreateIngredientArgs = {
  settingDistanceInput: CreateIngredientInput;
};

export type MutationCreateIngredientTemplateArgs = {
  createIngredientInput: IngredientTemplateInput;
};

export type MutationCreateMembershipArgs = {
  input: CreateMembershipInput;
};

export type MutationCreateNotificationArgs = {
  createNotificationInput: CreateNotificationsInput;
};

export type MutationCreateOrUpdatePermissionArgs = {
  input: CreateOrUpdatePermissionInput;
};

export type MutationCreateOrUpdateReceiptSettingArgs = {
  createOrUpdateReceiptSetting: CreateOrUpdateReceiptSettingInput;
};

export type MutationCreateOrUpdateTaxArgs = {
  taxInput: TaxInput;
};

export type MutationCreateOrUpdateWinPosTaxArgs = {
  winPosTaxInput: SettingWinPosTaxInput;
};

export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
};

export type MutationCreateOrderCloudPosArgs = {
  createOrderPosInput: CreateOrderPos;
};

export type MutationCreateOrderCustomArgs = {
  createOrderCustom: CreateOrderInputCustom;
};

export type MutationCreatePrinterArgs = {
  createPrinterInput: CreatePrinterInput;
};

export type MutationCreatePromotionArgs = {
  createPromotionInput: CreatePromotionInput;
};

export type MutationCreateRestaurantArgs = {
  createRestaurantInput: CreateRestaurantInput;
};

export type MutationCreateRestaurantStaffArgs = {
  createUserInput: CreateUserInput;
};

export type MutationCreateSettingDeliveryHoursArgs = {
  dataInput: DeliveryHourInput;
};

export type MutationCreateSettingPeakHoursArgs = {
  dataInput: DataInput;
};

export type MutationCreateSettingsCloseTimeArgs = {
  createSettingsCloseTime: CreateSettingCloseTimeInput;
};

export type MutationCreateTableArgs = {
  createTableInput: CreateTableInput;
};

export type MutationDeletePresetSettingArgs = {
  presetId: Scalars['String'];
};

export type MutationDeleteTableArgs = {
  deleteTableInput: DeleteTableInput;
};

export type MutationExportOrderListArgs = {
  exportOrderListInput: ExportOrderListInput;
};

export type MutationExportTimesheetArgs = {
  exportTimesheetInput: ExportTimesheetInput;
};

export type MutationFinishPaymentTerminalSumUpArgs = {
  sumUpTerminalInput: SumUpTerminalInput;
};

export type MutationFoodsInPeakHoursArgs = {
  dataInput: UserOnPeakHoursInput;
};

export type MutationGenCategoriesFoodsArgs = {
  round: Scalars['Int'];
};

export type MutationGenerateRegularReportArgs = {
  reportInput: RegularReportInput;
};

export type MutationGenerateSaftReportArgs = {
  saftInput: SaftReportInput;
};

export type MutationGenerateSalesByArgs = {
  generateSaleByInput: GenerateSaleByInput;
};

export type MutationImportCategoriesArgs = {
  excelUpload: ExcelUpload;
};

export type MutationImportFoodsArgs = {
  excelUpload: ExcelUpload;
};

export type MutationIsManagerArgs = {
  isManagerInput: IsManagerInput;
};

export type MutationIsSuperAminArgs = {
  isSuperAdminInput: IsSuperAdminInput;
};

export type MutationLogCashRegisterEventArgs = {
  logCashRegisterEventInput: LogCashRegisterEventInput;
};

export type MutationLoginArgs = {
  loginInput: LoginUserInput;
};

export type MutationLoginRestaurantAdminArgs = {
  loginInput: LoginUserInput;
};

export type MutationManualSendEmailReportArgs = {
  dataInput: ManualSendEmailReportInput;
};

export type MutationManualSendXReportEmailArgs = {
  input: XReportSendEmailInput;
};

export type MutationManualSendZReportEmailArgs = {
  input: ZReportSendEmailInput;
};

export type MutationParkBillArgs = {
  isParked: Scalars['Boolean'];
  orderId: Scalars['ID'];
};

export type MutationPaymentCloudPosArgs = {
  paymentCloudInput: PaymentCloudInput;
};

export type MutationPaymentSumUpCallbackArgs = {
  sumUpPaymentInput: SumUpPaymentInput;
};

export type MutationReadOrderArgs = {
  readOrderInput: ReadOrderInput;
};

export type MutationRefreshTokenArgs = {
  refreshTokenInput: RefreshTokenInput;
};

export type MutationRegisterArgs = {
  createUserInput: CreateUserInput;
};

export type MutationRegisterDeviceArgs = {
  mappingDeviceInput: MappingDeviceInput;
};

export type MutationRegisterPosDeviceArgs = {
  dataRegister: DataRegisterPosDeviceInput;
};

export type MutationRemoveCategoryArgs = {
  _id: Scalars['ID'];
};

export type MutationRemoveCloseTimeArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveCustomerArgs = {
  input: QueryCustomerInput;
};

export type MutationRemoveDeviceArgs = {
  dataInput: DeviceCheckResInput;
};

export type MutationRemoveDistanceArgs = {
  _id: Scalars['String'];
};

export type MutationRemoveFoodArgs = {
  _id: Scalars['ID'];
};

export type MutationRemoveFranchiseArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveIngredientTemplateArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveLimitedOpeningTimeSettingArgs = {
  _id: Scalars['ID'];
};

export type MutationRemoveNotificationArgs = {
  id: Scalars['Int'];
};

export type MutationRemovePeakHourArgs = {
  id: Scalars['ID'];
};

export type MutationRemovePrinterArgs = {
  id: Scalars['String'];
};

export type MutationRemovePromotionArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveRestaurantArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveUserArgs = {
  _id: Scalars['ID'];
};

export type MutationReprintReceiptArgs = {
  orderId: Scalars['String'];
};

export type MutationSendBillToEmailArgs = {
  input: SendBillToEmailInput;
};

export type MutationSendSalesByArgs = {
  sendSalesByStatisticInput: SendSalesByInput;
};

export type MutationSetAutoReceiptLayoutArgs = {
  layoutInput: SetAutoReceiptLayoutInput;
};

export type MutationSetFoodsAsRecommendedArgs = {
  dataInput: SaveOfferFoodsInput;
};

export type MutationSetOnOffRatingRestaurantArgs = {
  input: OnOffRatingRestaurant;
};

export type MutationSetOnOffTableRestaurantArgs = {
  input: OnOffTableRestaurantInput;
};

export type MutationSetReportAutoSendScheduleArgs = {
  setReportAutoSendSchedule: SetScheduleInput;
};

export type MutationSetSumUpTokenByCodeArgs = {
  input: GetSumUpTokenByCodeInput;
};

export type MutationStartWorkSessionArgs = {
  input: StartWorkSessionInput;
};

export type MutationStopWorkSessionArgs = {
  input: StopWorkSessionInput;
};

export type MutationSwitchRestaurantArgs = {
  forwardResId: Scalars['String'];
};

export type MutationSyncCloudPosArgs = {
  syncCloudPosInput: SyncCloudPosInput;
};

export type MutationSyncOrdersDataArgs = {
  syncDataInput: SyncOrdersDataInput;
};

export type MutationTransferTableOrdersArgs = {
  transferTableInput: TransferTableOrdersInput;
};

export type MutationUnAssignsUserArgs = {
  assignUserInput: UnAssignUserInput;
};

export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};

export type MutationUpdateCloseTimeArgs = {
  input: UpdateSettingCloseTimeInput;
};

export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};

export type MutationUpdateFoodArgs = {
  updateFoodInput: UpdateFoodInput;
};

export type MutationUpdateFranchiseArgs = {
  updateFranchiseInput: UpdateFranchiseInput;
};

export type MutationUpdateIngredientTemplateArgs = {
  updateIngredientInput: UpdateIngredientTemplateInput;
};

export type MutationUpdateMailSettingsArgs = {
  input: MailSettingsInput;
};

export type MutationUpdateMembershipArgs = {
  input: UpdateMembershipInput;
};

export type MutationUpdateMembershipsArgs = {
  updateMembershipsInput: UpdateMembershipsInput;
};

export type MutationUpdateNotificationArgs = {
  updateNotificationInput: UpdateNotificationsInput;
};

export type MutationUpdateOrderArgs = {
  updateOrderInput: UpdateOrderInput;
};

export type MutationUpdateOrdersTableArgs = {
  updateOrdersTableInput: UpdateOrdersTableInput;
};

export type MutationUpdatePaymentSettingArgs = {
  updatePaymentSettingInput: SettingShopPaymentInput;
};

export type MutationUpdatePrinterArgs = {
  updatePrinterInput: UpdatePrinterInput;
};

export type MutationUpdatePromotionArgs = {
  updatePromotionInput: UpdatePromotionInput;
};

export type MutationUpdateRestaurantArgs = {
  updateRestaurantInput: UpdateRestaurantInput;
};

export type MutationUpdateStatusOrdersArgs = {
  input: UpdateStatusOrdersInput;
};

export type MutationUpdateSumupForeignTransactionIdArgs = {
  foreignTransactionInfoInput: ForeignTransactionInfoInput;
};

export type MutationUpdateTableArgs = {
  updateTableInput: UpdateTableInput;
};

export type MutationUpdateTaxesArgs = {
  taxInput: UpdateTaxInput;
};

export type MutationUpdateUserArgs = {
  _id: Scalars['ID'];
  updateUserInput: UpdateUserInput;
};

export type MutationUpdateWkMailTemplateArgs = {
  input: MailTemplateInput;
};

export type MutationUpdateWorkSessionArgs = {
  input: UpdateWorkSessionInput;
};

export type MutationUpdateWorkSessionPriceArgs = {
  input: UpdateWorkSessionPriceInput;
};

export type MutationUploadMediaArgs = {
  mediaUpload: MediaUpload;
};

export type MutationUpsertBasicGeneralSettingsArgs = {
  dataInput: UpsertBasicGeneralSettingsInput;
};

export type MutationUpsertLimitedOpeningTimeSettingArgs = {
  input: UpsertLimitedOpeningTimeSetting;
};

export type MutationUpsertPresetSettingArgs = {
  dataSettingInput: PresetSettingInput;
};

export type MutationUpsertRestaurantCloseMessageSettingArgs = {
  upsertRestaurantCloseMessageSetting: RestaurantCloseMessageSetting;
};

export type NewStatisticsInput = {
  cloudPosOnly?: InputMaybe<Scalars['Boolean']>;
  endDate: Scalars['DateTime'];
  startDate: Scalars['DateTime'];
};

export type NotificationSubInput = {
  orderId?: InputMaybe<Scalars['ID']>;
  orderOfDay?: InputMaybe<Scalars['Boolean']>;
  restId: Scalars['ID'];
};

export enum NotificationType {
  Arrived = 'ARRIVED',
  Order = 'ORDER',
}

export type Notifications = {
  __typename?: 'Notifications';
  _id: Scalars['ID'];
  /** Created at */
  createdAt?: Maybe<Scalars['DateTime']>;
  order?: Maybe<Order>;
  /** OrderId */
  orderId?: Maybe<Scalars['ID']>;
  /** OrderNumber */
  orderNumber?: Maybe<Scalars['String']>;
  /** restaurant ID */
  restId?: Maybe<Scalars['ID']>;
  /** Status notification */
  status?: Maybe<Scalars['Boolean']>;
  /** Time Arrived */
  timeArrived?: Maybe<Scalars['DateTime']>;
  /** notificationTYpe */
  type?: Maybe<NotificationType>;
  /** userOrderNumber */
  userOrderNumber?: Maybe<Scalars['String']>;
};

export type NotificationsList = {
  __typename?: 'NotificationsList';
  data: Array<Notifications>;
  total: Scalars['Int'];
};

export type OnOffRatingRestaurant = {
  _id: Scalars['ID'];
  showRating: Scalars['Boolean'];
};

export type OnOffTableRestaurantInput = {
  _id: Scalars['ID'];
  useTableToOrderInApp: Scalars['Boolean'];
};

export type OpenTimeInput = {
  /** Day */
  createSettingOpenTime: Array<SettingOpenTimeInput>;
};

export type OptionProperty = {
  __typename?: 'OptionProperty';
  available: Scalars['Boolean'];
  /** Price for takeaway */
  extraPrice?: Maybe<Scalars['Float']>;
  /** Price for at shop */
  extraPriceSecond?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  titleNor: Scalars['String'];
};

export type OptionPropertyInput = {
  available: Scalars['Boolean'];
  /** Price for takeaway */
  extraPrice?: InputMaybe<Scalars['Float']>;
  /** Price for restaurant */
  extraPriceSecond?: InputMaybe<Scalars['Float']>;
  title: Scalars['String'];
  titleNor: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  _id: Scalars['ID'];
  adminAndStaffView?: Maybe<Scalars['Float']>;
  clientSystem: Scalars['String'];
  confirmedAt?: Maybe<Scalars['DateTime']>;
  cookingAt?: Maybe<Scalars['DateTime']>;
  /** Cờ đánh dấu hoá đơn copy đã được in hay chưa */
  copyReceiptRemaining?: Maybe<Scalars['Float']>;
  corrections?: Maybe<OrderCorrection>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['String']>;
  createdByStaff?: Maybe<User>;
  createdByUser?: Maybe<User>;
  customFoods?: Maybe<Array<CustomOrderFoodData>>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  customerReceiptPrinted?: Maybe<Scalars['Boolean']>;
  dateTimeCompleted?: Maybe<Scalars['DateTime']>;
  dateTimeConfirm?: Maybe<Scalars['DateTime']>;
  deliveryCost?: Maybe<DeliveryCost>;
  deviceId?: Maybe<Scalars['String']>;
  discount?: Maybe<Discount>;
  discountMembership?: Maybe<Discount>;
  email?: Maybe<Scalars['String']>;
  failedToPrint?: Maybe<Scalars['Boolean']>;
  fallBack?: Maybe<Scalars['String']>;
  finishedAt?: Maybe<Scalars['DateTime']>;
  foods: Array<OrderFoodData>;
  foodsDetail?: Maybe<Array<FoodDto>>;
  fullName?: Maybe<Scalars['String']>;
  isDelevery?: Maybe<Scalars['Boolean']>;
  isParked?: Maybe<Scalars['Boolean']>;
  isPushNotifyPickup?: Maybe<Scalars['Boolean']>;
  isSplitPayment?: Maybe<Scalars['Boolean']>;
  isTraining?: Maybe<Scalars['Boolean']>;
  language?: Maybe<ClientLangCode>;
  location?: Maybe<Location>;
  media: Media;
  note?: Maybe<Scalars['String']>;
  numberOfPrint?: Maybe<Scalars['Float']>;
  numberOfReprint?: Maybe<Scalars['Float']>;
  orderNumber: Scalars['String'];
  /** Cờ đánh dấu hoá đơn gốc đã được in hay chưa */
  originalReceiptRemaining?: Maybe<Scalars['Float']>;
  payment?: Maybe<PaymentInit>;
  paymentInfor?: Maybe<PaymentInfor>;
  paymentMethod?: Maybe<Array<PaymentMethod>>;
  paymentStatus: PaymentStatus;
  phoneNumber?: Maybe<Scalars['String']>;
  /** Date for order, which is pickup later */
  pickupAt?: Maybe<Scalars['DateTime']>;
  postpaidComment?: Maybe<Scalars['String']>;
  preparationTime?: Maybe<Scalars['String']>;
  printerId?: Maybe<Scalars['ID']>;
  promotion?: Maybe<Discount>;
  readyAt?: Maybe<Scalars['DateTime']>;
  receipt?: Maybe<Scalars['String']>;
  receiptCopyNum?: Maybe<Scalars['Float']>;
  receiptNum?: Maybe<Scalars['Float']>;
  receiptPrintedCounter?: Maybe<Scalars['Float']>;
  receiptProformaNum?: Maybe<Scalars['Float']>;
  refundedAt?: Maybe<Scalars['DateTime']>;
  remainingPrice?: Maybe<Scalars['Float']>;
  resId: Scalars['ID'];
  resolvedPaymentMethods?: Maybe<Scalars['String']>;
  restaurant?: Maybe<Restaurant>;
  /** Cờ đánh dấu hoá đơn return đã được in hay chưa */
  returnReceiptRemaining?: Maybe<Scalars['Float']>;
  simpleOrderNumber?: Maybe<Scalars['String']>;
  status: OrderStatus;
  superAdminView?: Maybe<Scalars['Float']>;
  table?: Maybe<Table>;
  tableId?: Maybe<Scalars['ID']>;
  taxType?: Maybe<TaxType>;
  timeArrived?: Maybe<Scalars['DateTime']>;
  totalPrice: Scalars['Float'];
  /** Type of order */
  type: OrderType;
  unRead?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userOrderNumber?: Maybe<Scalars['String']>;
  webviewUrl?: Maybe<Scalars['String']>;
  wfoUserId?: Maybe<Scalars['ID']>;
  workSessionId?: Maybe<Scalars['ID']>;
};

export type OrderCorrection = {
  __typename?: 'OrderCorrection';
  customFoodLine?: Maybe<Array<CustomOrderFoodData>>;
  foodLine?: Maybe<Array<OrderFoodData>>;
};

export type OrderCustomFoodInput = {
  code?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<DiscountInput>;
  isReady?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  price: Scalars['Float'];
  promotion?: InputMaybe<DiscountInput>;
  qty: Scalars['Float'];
  tax: Scalars['Float'];
};

export type OrderFoodData = {
  __typename?: 'OrderFoodData';
  _id: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  discount?: Maybe<Discount>;
  extraOptions?: Maybe<Array<ExtraOption>>;
  isReady?: Maybe<Scalars['Boolean']>;
  note?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  priceAfterDiscount?: Maybe<Scalars['Float']>;
  promotion?: Maybe<Discount>;
  qty: Scalars['Float'];
  tax?: Maybe<TaxOrder>;
  taxType?: Maybe<TaxType>;
};

export type OrderFoodDataInput = {
  _id: Scalars['ID'];
  code?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<DiscountInput>;
  extraOptions?: InputMaybe<Array<ExtraOptionInput>>;
  isReady?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  promotion?: InputMaybe<DiscountInput>;
  qty: Scalars['Float'];
  /** This field only needs to be entered for sync data */
  tax?: InputMaybe<TaxOrderSync>;
  taxType?: InputMaybe<TaxType>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  grossTotalAmount?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  netTotalAmount?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  reference?: Maybe<Scalars['String']>;
  taxAmount?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
  unitNetPrice?: Maybe<Scalars['String']>;
};

/** Order methods of product */
export enum OrderMethod {
  DineIn = 'DINE_IN',
  TakeAway = 'TAKE_AWAY',
}

export type OrderPayment = {
  __typename?: 'OrderPayment';
  amount?: Maybe<AmountPayment>;
  orderItems?: Maybe<Array<OrderItem>>;
  reference?: Maybe<Scalars['String']>;
};

export type OrderSortBy = {
  direction: Direction;
  field: FieldSort;
};

export type OrderStatistic = {
  __typename?: 'OrderStatistic';
  data?: Maybe<Array<Order>>;
  total: Scalars['Float'];
  totalRevenue: Scalars['Float'];
};

export enum OrderStatus {
  Cancelled = 'CANCELLED',
  Confirmed = 'CONFIRMED',
  Cooking = 'COOKING',
  Draft = 'DRAFT',
  Finish = 'FINISH',
  Pending = 'PENDING',
  Ready = 'READY',
  Refunded = 'REFUNDED',
}

export type OrderSubInput = {
  resId?: InputMaybe<Scalars['ID']>;
};

export enum OrderType {
  PostpaidOrder = 'POSTPAID_ORDER',
  PrepaidOrder = 'PREPAID_ORDER',
}

export type OrdersHistoryClientInput = {
  orderNumbers?: InputMaybe<Array<Scalars['ID']>>;
  restId: Scalars['ID'];
};

export type PaginationBaseDto = {
  /** Page option: ID */
  after?: InputMaybe<Scalars['ID']>;
  /** Page option: Field name to apply after */
  afterBy?: InputMaybe<Scalars['String']>;
  /** Collate option: Usually used to sort result */
  collation?: InputMaybe<CollationInput>;
  /** Page option */
  limit?: InputMaybe<Scalars['Int']>;
  /** Page option: No pagination */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  /** Page option */
  page?: InputMaybe<Scalars['Int']>;
  /** Page option: query to searching */
  q?: InputMaybe<Scalars['String']>;
  /** Page option */
  sortBy?: InputMaybe<Scalars['String']>;
  /** Page option */
  sortMode?: InputMaybe<DirectionInput>;
};

export type PaymentCloudInput = {
  amount: Scalars['Float'];
  fallBack: Scalars['String'];
  isSplitPayment?: InputMaybe<Scalars['Boolean']>;
  orderId: Scalars['ID'];
  paymentMethod: PaymentMethod;
  terminalId?: InputMaybe<Scalars['String']>;
};

export enum PaymentForm {
  Bankaxept = 'BANKAXEPT',
  Cash = 'CASH',
  Mastercard = 'MASTERCARD',
  Other = 'OTHER',
  Vipps = 'VIPPS',
  Visa = 'VISA',
}

export type PaymentInfor = {
  __typename?: 'PaymentInfor';
  card?: Maybe<DinteroPaymentInfor>;
  cash?: Maybe<CashPaymentInfor>;
  sumup?: Maybe<SumUpPaymentInfor>;
  terminal?: Maybe<TerminalPaymentInfor>;
  terminalSumUp?: Maybe<TerminalSumUpPaymentInfo>;
  vipps?: Maybe<VippsPaymentInfor>;
};

export type PaymentInforInput = {
  cash?: InputMaybe<CashPaymentInforInput>;
  terminal?: InputMaybe<TerminalPaymentInforInput>;
  vipps?: InputMaybe<VippsPaymentInforInput>;
};

export type PaymentInit = {
  __typename?: 'PaymentInit';
  /** Payment id */
  paymentId?: Maybe<Scalars['String']>;
  /** Payment infor */
  paymentInfor?: Maybe<PaymentInfor>;
  /** Url response */
  qrUrl?: Maybe<Scalars['String']>;
  /** Use for sumUp payment gate way */
  sumUpToken?: Maybe<SumUpTerminalToken>;
  /** Payment id */
  type?: Maybe<ServiceGateway>;
  /** Url response */
  url: Scalars['String'];
};

export enum PaymentMethod {
  AtCounter = 'AT_COUNTER',
  Card = 'CARD',
  Postpaid = 'POSTPAID',
  Terminal = 'TERMINAL',
  TerminalSumup = 'TERMINAL_SUMUP',
  Vipps = 'VIPPS',
}

export type PaymentRes = {
  __typename?: 'PaymentRes';
  paymentId?: Maybe<Scalars['String']>;
  paymentInfor?: Maybe<PaymentInfor>;
  qrUrl?: Maybe<Scalars['String']>;
  sumUpToken?: Maybe<SumUpTerminalToken>;
  url: Scalars['String'];
};

export type PaymentSetting = {
  __typename?: 'PaymentSetting';
  card?: Maybe<CardSetting>;
  sumUp?: Maybe<SumUpSetting>;
  sumUpOAuth?: Maybe<SumUpOAuthSetting>;
  terminal?: Maybe<TerminalSetting>;
  terminalSumUp?: Maybe<TerminalSumUpSetting>;
  vipps?: Maybe<VippsSetting>;
};

export type PaymentStatistics = {
  __typename?: 'PaymentStatistics';
  bankaxept: Scalars['Float'];
  bankaxeptPercentage: Scalars['Float'];
  cash: Scalars['Float'];
  cashPercentage: Scalars['Float'];
  mastercard: Scalars['Float'];
  mastercardPercentage: Scalars['Float'];
  other: Scalars['Float'];
  otherPercentage: Scalars['Float'];
  vipps: Scalars['Float'];
  vippsPercentage: Scalars['Float'];
  visa: Scalars['Float'];
  visaPercentage: Scalars['Float'];
};

export enum PaymentStatus {
  Cancelled = 'CANCELLED',
  Confirmed = 'CONFIRMED',
  PaidApart = 'PAID_APART',
  Pending = 'PENDING',
  Success = 'SUCCESS',
}

export enum PaymentTypeFilter {
  Paid = 'PAID',
  Postpaid = 'POSTPAID',
}

export type Permission = {
  __typename?: 'Permission';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  feature?: Maybe<Array<PermissionFeature>>;
  resid: Scalars['ID'];
  type?: Maybe<PermissionType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum PermissionFeature {
  Category = 'CATEGORY',
  CreateStaffAccount = 'CREATE_STAFF_ACCOUNT',
  OtherReport = 'OTHER_REPORT',
  PaymentSetting = 'PAYMENT_SETTING',
  PermissionSetting = 'PERMISSION_SETTING',
  PreSet = 'PRE_SET',
  PrinterSetting = 'PRINTER_SETTING',
  Product = 'PRODUCT',
  ReceiptSetting = 'RECEIPT_SETTING',
  ScheduleSetting = 'SCHEDULE_SETTING',
  StaffT = 'STAFF_T',
  Statistics = 'STATISTICS',
  TaxSetting = 'TAX_SETTING',
  XReport = 'X_REPORT',
  ZReport = 'Z_REPORT',
}

export enum PermissionType {
  Admin = 'Admin',
  Level_1 = 'Level_1',
  Level_2 = 'Level_2',
  Level_3 = 'Level_3',
}

export enum PickupType {
  AsSoonAs = 'AS_SOON_AS',
  Later = 'LATER',
}

export type PopularFoodsInput = {
  /** List of category id */
  catIds?: InputMaybe<Array<Scalars['ID']>>;
  /** List of current foods id */
  foodIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Restaurant ID */
  resId: Scalars['ID'];
};

export type PosDelOrdersInput = {
  orderIds: Array<Scalars['String']>;
};

export type PosDeviceRegisteredData = {
  __typename?: 'PosDeviceRegisteredData';
  registerId: Scalars['String'];
  registerNo: Scalars['String'];
};

export type PosRegisteredInput = {
  deviceId: Scalars['String'];
};

export type PositionFood = {
  foodId: Scalars['ID'];
  position: Scalars['Float'];
};

export type PositionInput = {
  catId: Scalars['ID'];
  position: Scalars['Float'];
};

export enum PreparationTime {
  Hour_1 = 'HOUR_1',
  Hour_1_15 = 'HOUR_1_15',
  Hour_1_30 = 'HOUR_1_30',
  Hour_1_45 = 'HOUR_1_45',
  Hour_2 = 'HOUR_2',
  Minutes_15 = 'MINUTES_15',
  Minutes_30 = 'MINUTES_30',
  Minutes_45 = 'MINUTES_45',
}

export enum PresetDiscountType {
  Amount = 'AMOUNT',
  Percent = 'PERCENT',
}

export type PresetSetting = {
  __typename?: 'PresetSetting';
  /** Id of preset item */
  _id: Scalars['ID'];
  /** Discount type */
  discountType: PresetDiscountType;
  /** Name of pre-set */
  name: Scalars['String'];
  /** Value of setting */
  value: Scalars['Float'];
};

export type PresetSettingInput = {
  /** _id of setting in case modify */
  _id?: InputMaybe<Scalars['ID']>;
  /** Discount type */
  discountType: PresetDiscountType;
  /** Name of pre-set */
  name: Scalars['String'];
  /** Value of setting */
  value: Scalars['Float'];
};

export type PrintOption = {
  __typename?: 'PrintOption';
  customFood?: Maybe<Scalars['Boolean']>;
  receiptOption1?: Maybe<Scalars['Boolean']>;
  receiptOption2?: Maybe<Scalars['Boolean']>;
  receiptOption3?: Maybe<Scalars['Boolean']>;
  saleReceipt?: Maybe<Scalars['Boolean']>;
};

export type PrintOptionInput = {
  customFood?: InputMaybe<Scalars['Boolean']>;
  receiptOption1?: InputMaybe<Scalars['Boolean']>;
  receiptOption2?: InputMaybe<Scalars['Boolean']>;
  receiptOption3?: InputMaybe<Scalars['Boolean']>;
  saleReceipt?: InputMaybe<Scalars['Boolean']>;
};

export type Printer = {
  __typename?: 'Printer';
  _id: Scalars['ID'];
  assignedToDeviceId?: Maybe<Scalars['String']>;
  assignedToDeviceType: ReceiptType;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  historyOrderPrinted?: Maybe<Array<PrinterOrderHistory>>;
  historyStatus?: Maybe<Array<PrinterStatusHistory>>;
  mac: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  printOption?: Maybe<PrintOption>;
  resId: Scalars['ID'];
  restaurant?: Maybe<Restaurant>;
  statusCode?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum PrinterAction {
  Deleting = 'Deleting',
  Getting = 'Getting',
  Polling = 'Polling',
}

export type PrinterConfig = {
  _id?: InputMaybe<Scalars['ID']>;
  assignedToDeviceType: ReceiptType;
  deviceId?: InputMaybe<Scalars['String']>;
};

export type PrinterOrderHistory = {
  __typename?: 'PrinterOrderHistory';
  action: PrinterAction;
  orderId: Scalars['String'];
  printedAt: Scalars['String'];
  printedState?: Maybe<Scalars['Boolean']>;
};

export type PrinterOrderHistoryInput = {
  /** Page option: ID */
  after?: InputMaybe<Scalars['ID']>;
  /** Page option */
  limit: Scalars['Int'];
  /** Page option: No pagination */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  /** Page option */
  page: Scalars['Int'];
  printerId: Scalars['String'];
  /** Page option: query to searching */
  q?: InputMaybe<Scalars['String']>;
};

export type PrinterOrderStatusHistories = {
  __typename?: 'PrinterOrderStatusHistories';
  data: Array<PrinterOrderHistory>;
  total: Scalars['Float'];
};

export type PrinterStatusHistories = {
  __typename?: 'PrinterStatusHistories';
  data: Array<PrinterStatusHistory>;
  total: Scalars['Float'];
};

export type PrinterStatusHistory = {
  __typename?: 'PrinterStatusHistory';
  createdAt?: Maybe<Scalars['String']>;
  statusCode: Scalars['String'];
};

export type PrinterStatusInput = {
  /** Page option: ID */
  after?: InputMaybe<Scalars['ID']>;
  /** Page option */
  limit: Scalars['Int'];
  /** Page option: No pagination */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  /** Page option */
  page: Scalars['Int'];
  printerId: Scalars['String'];
  /** Page option: query to searching */
  q?: InputMaybe<Scalars['String']>;
};

export type Promotion = {
  __typename?: 'Promotion';
  _id: Scalars['ID'];
  applyWith: PromotionApplyWith;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  discountPercent?: Maybe<Scalars['Float']>;
  discountType: PromotionDiscountType;
  /** EndDate */
  endDate: Scalars['DateTime'];
  foods?: Maybe<Array<FoodDiscount>>;
  name: Scalars['String'];
  /** StartDate */
  startDate: Scalars['DateTime'];
  status?: Maybe<Scalars['Boolean']>;
  type: PromotionType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export enum PromotionApplyWith {
  All = 'ALL',
  Configure = 'CONFIGURE',
}

export enum PromotionDiscountType {
  Configure = 'CONFIGURE',
  Percent = 'PERCENT',
}

export enum PromotionFilterField {
  CreatedAt = 'createdAt',
  Name = 'name',
}

export type PromotionSort = {
  direction: DirectionInput;
  field: PromotionFilterField;
};

export enum PromotionType {
  Checkout = 'CHECKOUT',
  FrontPage = 'FRONT_PAGE',
}

export enum PropertyType {
  AtLeast = 'AT_LEAST',
  Many = 'MANY',
}

export type Query = {
  __typename?: 'Query';
  Comments: GetCommentsRes;
  DashboardTotal: Dashboard;
  GetListReport: ListReportRes;
  SettingDeliveryHours: Array<SettingDeliveryHour>;
  SettingOpenTime: Array<SettingsOpenTime>;
  SettingPeakHours: Array<SettingPeakHour>;
  /** @deprecated Being replaced by "getTaxes" */
  SettingTax: TaxRestaurantRes;
  SettingTimeClose: Array<SettingsCloseTime>;
  SettingTimeCloseById?: Maybe<SettingsCloseTime>;
  categories: Array<Category>;
  categoriesClient: Array<Category>;
  category: Category;
  categoryClient: Category;
  clientOrders: Array<Order>;
  cloudOrdersPending: CloudPosDto;
  cloudPosAllCategories: Array<Category>;
  cloudPosAllFoods: Array<FoodDto>;
  cloudPosAllUsers: Array<UserPosDto>;
  cloudPosFoods: GetFoodsRes;
  cloudPosSyncStatus: CloudPosSyncStatusRes;
  countOrdersStatistics: CountOrdersStatistics;
  deviceRestaurantInfo?: Maybe<MappingDeviceDto>;
  exportCategories: Scalars['Boolean'];
  exportFoods: Scalars['Boolean'];
  findTable?: Maybe<Table>;
  findTableClient?: Maybe<Table>;
  food: FoodDto;
  foodByNumber: FoodDto;
  foodBySku: FoodDto;
  foodClient: FoodDto;
  foods: GetFoodsRes;
  foodsCategoryClient: FoodsCategoryRes;
  foodsClient: Array<FoodDto>;
  foodsListClient: GetFoodsRes;
  franchise: Franchise;
  franchiseList: ResFranchise;
  getAboutUs?: Maybe<AboutUstRes>;
  getAboutUsClient?: Maybe<AboutUstRes>;
  getAutoReceiptLayout?: Maybe<AutoReceiptLayoutSetting>;
  getBasicSetting: Array<BasicSetting>;
  getCurrentWorkSession?: Maybe<WorkSession>;
  getCustomer?: Maybe<Customer>;
  getCustomers?: Maybe<CustomerResponse>;
  getFAQ?: Maybe<FaqRes>;
  getFAQClient?: Maybe<FaqRes>;
  getFoodsInPeakHours: Array<FoodDto>;
  getFranchiseByDomain?: Maybe<Franchise>;
  getLimitedOpeningTime: LimitedOpeningTimeRes;
  getListSettingIngredient: Array<SettingIngredient>;
  getMailSettings?: Maybe<MailSetting>;
  getMailTemplate?: Maybe<MailTemplate>;
  getManagers: Array<User>;
  getMembership?: Maybe<Membership>;
  getMemberships?: Maybe<MembershipResponse>;
  getMissingCategoryTaxStatus: Scalars['Boolean'];
  getPermissionsRes: Array<Permission>;
  getPermissionsResWithoutCheck: Array<Permission>;
  getPosDeviceRegistered?: Maybe<Settings>;
  getPresetsSetting?: Maybe<Settings>;
  getRestaurantCloseMessage?: Maybe<RestaurantCloseMessageRes>;
  getRestaurantPaymentSetting: SettingRestaurantPaymentInfo;
  getRestaurantPosDevices?: Maybe<Array<Settings>>;
  getSAFTGenerationProgress: Array<SaftGenerationProgressSub>;
  getSettingDistance: Array<SettingsDistance>;
  getSettingReceipt?: Maybe<Settings>;
  getSumUpPaymentToken: SumupToken;
  getSumUpTerminalToken: SumUpTerminalToken;
  getTaxes: TaxRes;
  getUserDetail: User;
  getUsers: UsersRes;
  iAmSuperAdmin: Scalars['Boolean'];
  ingredientTemplate: IngredientTemplate;
  ingredientTemplates: GetIngredientTemplatesRes;
  me: UserDto;
  notification: Notifications;
  notifications: NotificationsList;
  order: Order;
  orderHistoryClient: Array<Order>;
  orders: GetOrdersRes;
  /** Get list popular food by category */
  popularFoods: Array<FoodDto>;
  previousWorkSession?: Maybe<WorkSession>;
  printXReport?: Maybe<Scalars['Boolean']>;
  printer: Printer;
  printerOrderHistories: PrinterOrderStatusHistories;
  printerStatuses: PrinterStatusHistories;
  printers: GetPrintersRes;
  promotion: Promotion;
  promotions: ListPromotionsRes;
  promotionsClient: ListPromotionsRes;
  reportAutoSendSchedules: ListReportSchedulesRes;
  reportDetail: Report;
  restaurant: Restaurant;
  restaurantList: ResRestaurant;
  restaurantsClient: Array<Restaurant>;
  salesByCategory: SaleByCategoryResponse;
  salesByProduct: SaleByProductResponse;
  searchRestaurants: Array<Restaurant>;
  setting?: Maybe<Settings>;
  staffTimesheet: Timesheets;
  statisticDefault: Scalars['Boolean'];
  statisticOrder: Array<StatisticData>;
  statisticOrders: OrderStatistic;
  statisticRevenue: Array<StatisticData>;
  statistics: Statistics;
  tableOrders: TableOrdersResult;
  tables: TablesDto;
  tablesClient: TablesDto;
  unReadOrders: WkUnReadOrders;
  usersRestaurant: GetUsersRestaurantRes;
  validateTerminal: Scalars['Boolean'];
  wkCountOrders: WkCountOrders;
  wkIngredientTemplates: WkIngredientTemplate;
  workSession?: Maybe<WorkSession>;
  workSessions: WorkSessionResponse;
  xReportDetail?: Maybe<XReport>;
};

export type QueryCommentsArgs = {
  commentInput: GetCommentsInput;
};

export type QueryGetListReportArgs = {
  listReportInput: ListReportInput;
};

export type QuerySettingTimeCloseByIdArgs = {
  _id: Scalars['String'];
};

export type QueryCategoriesArgs = {
  dataInput?: InputMaybe<CategoriesDataInput>;
};

export type QueryCategoriesClientArgs = {
  dataInput: GetCategoriesClientInput;
};

export type QueryCategoryArgs = {
  _id: Scalars['ID'];
};

export type QueryCategoryClientArgs = {
  catClientInput: CatClientInput;
};

export type QueryClientOrdersArgs = {
  clientOrdersInput: ClientOrdersInput;
};

export type QueryCloudOrdersPendingArgs = {
  cloudPosListOrderInput: CloudPosListOrderInput;
};

export type QueryCloudPosAllCategoriesArgs = {
  cloudPosSubInput: CloudPosSubInput;
};

export type QueryCloudPosAllFoodsArgs = {
  cloudPosSubInput: CloudPosSubInput;
};

export type QueryCloudPosAllUsersArgs = {
  cloudPosSubInput: CloudPosSubInput;
};

export type QueryCloudPosFoodsArgs = {
  dataFilterInput: DataFilterInput;
};

export type QueryCloudPosSyncStatusArgs = {
  cloudPosSyncStatusInput: CloudPosSyncStatusInput;
};

export type QueryCountOrdersStatisticsArgs = {
  input: CountOrdersStatisticsInput;
};

export type QueryDeviceRestaurantInfoArgs = {
  dataInput: DeviceCheckResInput;
};

export type QueryExportCategoriesArgs = {
  dataInput: CategoriesDataInput;
};

export type QueryExportFoodsArgs = {
  dataInput: DownloadFoodTemplateQuery;
};

export type QueryFindTableArgs = {
  findByCondDto: FindOneTableByCondDto;
};

export type QueryFindTableClientArgs = {
  findByCondDto: FindOneTableClientDto;
};

export type QueryFoodArgs = {
  _id: Scalars['ID'];
};

export type QueryFoodByNumberArgs = {
  foodByNumberInput: FoodByNumberInput;
};

export type QueryFoodBySkuArgs = {
  foodBySkuInput: FoodBySkuInput;
};

export type QueryFoodClientArgs = {
  foodClientInput: FoodClientInput;
};

export type QueryFoodsArgs = {
  getFoodsInput: GetFoodsInput;
};

export type QueryFoodsCategoryClientArgs = {
  dataInput: FoodsCatInput;
};

export type QueryFoodsClientArgs = {
  foodsClientInput: FoodsClientInput;
};

export type QueryFoodsListClientArgs = {
  foodsInputClient: FoodsInputClient;
};

export type QueryFranchiseArgs = {
  id: Scalars['ID'];
};

export type QueryFranchiseListArgs = {
  FranchiseInput: FranchiseInput;
};

export type QueryGetAboutUsClientArgs = {
  aboutUsInput: AboutUsInput;
};

export type QueryGetBasicSettingArgs = {
  dataInput: GetBasicGeneralSettingInput;
};

export type QueryGetCurrentWorkSessionArgs = {
  input: GetCurrentWorkSessionInput;
};

export type QueryGetCustomerArgs = {
  input: QueryCustomerInput;
};

export type QueryGetCustomersArgs = {
  input: GetCustomersInput;
};

export type QueryGetFaqClientArgs = {
  faqInput: FaqInput;
};

export type QueryGetFranchiseByDomainArgs = {
  domain: Scalars['String'];
};

export type QueryGetLimitedOpeningTimeArgs = {
  pageOptions?: InputMaybe<PaginationBaseDto>;
};

export type QueryGetMembershipArgs = {
  input: QueryMembershipInput;
};

export type QueryGetMembershipsArgs = {
  input: GetMembershipsInput;
};

export type QueryGetPosDeviceRegisteredArgs = {
  dataInput: PosRegisteredInput;
};

export type QueryGetSaftGenerationProgressArgs = {
  data: GetSaftGenerationProgressInput;
};

export type QueryGetSumUpPaymentTokenArgs = {
  input: GetSumUpTokenInput;
};

export type QueryGetSumUpTerminalTokenArgs = {
  getSumUpTerminalInput: GetSumUpTerminalInput;
};

export type QueryGetUserDetailArgs = {
  id: Scalars['ID'];
};

export type QueryGetUsersArgs = {
  data: GetUsersInput;
};

export type QueryIngredientTemplateArgs = {
  id: Scalars['ID'];
};

export type QueryIngredientTemplatesArgs = {
  dataInput: GetIngredientTempInput;
};

export type QueryNotificationArgs = {
  id: Scalars['Int'];
};

export type QueryNotificationsArgs = {
  InputGetNotifications: InputGetNotifications;
};

export type QueryOrderArgs = {
  dataInput: GetOrderInput;
};

export type QueryOrderHistoryClientArgs = {
  dataInput: OrdersHistoryClientInput;
};

export type QueryOrdersArgs = {
  ordersInput: GetOrderListInput;
};

export type QueryPopularFoodsArgs = {
  popularFoodsInput: PopularFoodsInput;
};

export type QueryPreviousWorkSessionArgs = {
  input: GetPreviousWorkSessionInput;
};

export type QueryPrintXReportArgs = {
  input: GetXReportInput;
};

export type QueryPrinterArgs = {
  _id: Scalars['ID'];
};

export type QueryPrinterOrderHistoriesArgs = {
  printerOrderHistoryInput: PrinterOrderHistoryInput;
};

export type QueryPrinterStatusesArgs = {
  printerStatusInput: PrinterStatusInput;
};

export type QueryPrintersArgs = {
  printersInput: GetPrinterListInput;
};

export type QueryPromotionArgs = {
  _id: Scalars['ID'];
};

export type QueryPromotionsArgs = {
  promotionsInput: ListPromotionInput;
};

export type QueryPromotionsClientArgs = {
  promotionClientInput: ListClientPromotionsInput;
};

export type QueryReportAutoSendSchedulesArgs = {
  getScheduleListInput: GetScheduleListInput;
};

export type QueryReportDetailArgs = {
  reportId: Scalars['String'];
};

export type QueryRestaurantArgs = {
  id: Scalars['ID'];
};

export type QueryRestaurantListArgs = {
  RestaurantInput: RestaurantInput;
};

export type QueryRestaurantsClientArgs = {
  clientDomain?: InputMaybe<Scalars['String']>;
};

export type QuerySalesByCategoryArgs = {
  dataInput: SaleByCategoryInput;
};

export type QuerySalesByProductArgs = {
  dataInput: SaleByProductInput;
};

export type QuerySearchRestaurantsArgs = {
  keyword: Scalars['String'];
  limit?: InputMaybe<Scalars['Float']>;
};

export type QuerySettingArgs = {
  settingId: Scalars['ID'];
};

export type QueryStaffTimesheetArgs = {
  staffTimesheetInput: TimeSheetInput;
};

export type QueryStatisticOrderArgs = {
  statisticInput: StatisticInput;
};

export type QueryStatisticOrdersArgs = {
  statisticOrdersInput: StatisticOrdersInput;
};

export type QueryStatisticRevenueArgs = {
  statisticInput: StatisticInput;
};

export type QueryStatisticsArgs = {
  statisticsInput: NewStatisticsInput;
};

export type QueryTableOrdersArgs = {
  tableId: Scalars['String'];
};

export type QueryTablesArgs = {
  findByCondDto: FindTableByCondDto;
};

export type QueryTablesClientArgs = {
  findByCondDto: FindTableClientByCondDto;
};

export type QueryUnReadOrdersArgs = {
  unReadOrdersInput: UnReadOrdersInput;
};

export type QueryUsersRestaurantArgs = {
  dataInput: GetUsersRestaurantInput;
  resId: Scalars['ID'];
};

export type QueryValidateTerminalArgs = {
  terminalInput: TerminalInput;
};

export type QueryWkCountOrdersArgs = {
  ordersInput: GetOrderListInput;
};

export type QueryWorkSessionArgs = {
  input: GetWorkSessionInput;
};

export type QueryWorkSessionsArgs = {
  input: GetWorkSessionsInput;
};

export type QueryXReportDetailArgs = {
  input: GetXReportInput;
};

export type QueryCustomerInput = {
  _id: Scalars['ID'];
};

export type QueryMembershipInput = {
  _id: Scalars['ID'];
  status?: InputMaybe<MembershipStatus>;
};

export type ReadOrderInput = {
  orderId: Scalars['String'];
  read: Scalars['Boolean'];
};

export enum ReceiptDuplication {
  Copy = 'COPY',
  Original = 'ORIGINAL',
  Return = 'RETURN',
  Temporary = 'TEMPORARY',
}

export type ReceiptLayout = {
  __typename?: 'ReceiptLayout';
  content?: Maybe<Scalars['String']>;
  /** If true, you cant change it */
  readonly?: Maybe<Scalars['Boolean']>;
  /** If set, you cant delete it */
  required?: Maybe<RequiredFieldName>;
  /** 1 Bật, 0 Tắt */
  status: Scalars['String'];
};

export type ReceiptLayoutInput = {
  content?: InputMaybe<Scalars['String']>;
  /** If true, you cant change it */
  readonly?: InputMaybe<Scalars['Boolean']>;
  /** If set, you cant delete it */
  required?: InputMaybe<RequiredFieldName>;
  /** 1 ON, 0 OFF */
  status: Scalars['String'];
};

export type ReceiptLayoutSetting = {
  __typename?: 'ReceiptLayoutSetting';
  footer?: Maybe<Array<ReceiptLayout>>;
  header?: Maybe<Array<ReceiptLayout>>;
};

export type ReceiptLayoutSettingInput = {
  footer?: InputMaybe<Array<ReceiptLayoutInput>>;
  header?: InputMaybe<Array<ReceiptLayoutInput>>;
};

export enum ReceiptType {
  Kiosk = 'KIOSK',
  Kitchen = 'KITCHEN',
  Unassigned = 'UNASSIGNED',
}

export type RefreshTokenInput = {
  clientSystem?: InputMaybe<ClientSystem>;
  refreshToken: Scalars['String'];
  resId?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
};

export type RegularReportInput = {
  reportType: ReportType;
};

export enum RepeatInterval {
  Every_2Weeks = 'EVERY_2_WEEKS',
  EveryDay = 'EVERY_DAY',
  EveryMonth = 'EVERY_MONTH',
  EveryWeek = 'EVERY_WEEK',
  EveryYear = 'EVERY_YEAR',
  NoRepeat = 'NO_REPEAT',
}

export type Report = {
  __typename?: 'Report';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  /** Field used for daily report */
  date?: Maybe<Scalars['DateTime']>;
  /** The date of first order in period */
  firstDate?: Maybe<Scalars['DateTime']>;
  imageLink?: Maybe<Scalars['String']>;
  /** The date of last order in period */
  lastDate?: Maybe<Scalars['DateTime']>;
  /** Field used for monthly report */
  month?: Maybe<Scalars['Float']>;
  pathExcel?: Maybe<Scalars['String']>;
  pathImage?: Maybe<Scalars['String']>;
  pathPdf: Scalars['String'];
  pdfLink: Scalars['String'];
  resId: Scalars['String'];
  totalPrice?: Maybe<Scalars['Float']>;
  type: ReportType;
  /** Field used for weekly report */
  week?: Maybe<Scalars['Float']>;
  workSessionId?: Maybe<Scalars['ID']>;
  workSessionNo?: Maybe<Scalars['Float']>;
  /** Field used for yearly report */
  year?: Maybe<Scalars['Float']>;
  zReportData?: Maybe<ZReportInfor>;
};

export type ReportArtGroup = {
  __typename?: 'ReportArtGroup';
  artGroupAmnt: Scalars['Float'];
  artGroupID: Scalars['String'];
  artGroupNum: Scalars['Float'];
};

export type ReportArtGroups = {
  __typename?: 'ReportArtGroups';
  reportArtGroup: Array<ReportArtGroup>;
};

export type ReportCashSaleVat = {
  __typename?: 'ReportCashSaleVat';
  cashSaleAmnt: Scalars['Float'];
  vatAmnt: Scalars['Float'];
  vatAmntTp: Scalars['String'];
  vatPerc: Scalars['Float'];
};

export type ReportCashSalesVat = {
  __typename?: 'ReportCashSalesVat';
  reportCashSaleVat: Array<ReportCashSaleVat>;
};

export type ReportCorrLine = {
  __typename?: 'ReportCorrLine';
  corrLineAmnt: Scalars['String'];
  corrLineNum: Scalars['Float'];
  corrLineType: Scalars['String'];
};

export type ReportCorrLines = {
  __typename?: 'ReportCorrLines';
  reportCorrLine: Array<ReportCorrLine>;
};

export type ReportEmpOpeningChangeFloat = {
  __typename?: 'ReportEmpOpeningChangeFloat';
  empID: Scalars['String'];
  openingChangeFloatAmnt: Scalars['String'];
};

export type ReportEmpOpeningChangeFloats = {
  __typename?: 'ReportEmpOpeningChangeFloats';
  reportEmpOpeningChangeFloat: Array<ReportEmpOpeningChangeFloat>;
};

export enum ReportFormat {
  Excel = 'Excel',
  Pdf = 'PDF',
}

export type ReportOtherCorr = {
  __typename?: 'ReportOtherCorr';
  otherCorrAmnt: Scalars['String'];
  otherCorrNum: Scalars['Float'];
  otherCorrType: Scalars['String'];
};

export type ReportOtherCorrs = {
  __typename?: 'ReportOtherCorrs';
  reportOtherCorr: Array<ReportOtherCorr>;
};

export type ReportPayIn = {
  __typename?: 'ReportPayIn';
  payInAmnt: Scalars['Float'];
  payInNum: Scalars['Float'];
  payInType: Scalars['String'];
};

export type ReportPayIns = {
  __typename?: 'ReportPayIns';
  reportPayIn: Array<ReportPayIn>;
};

export type ReportPayOut = {
  __typename?: 'ReportPayOut';
  payOutAmnt: Scalars['Float'];
  payOutNum: Scalars['Float'];
  payOutType: Scalars['String'];
};

export type ReportPayOuts = {
  __typename?: 'ReportPayOuts';
  reportPayOut: Array<ReportPayOut>;
};

export type ReportPayment = {
  __typename?: 'ReportPayment';
  paymentAmnt: Scalars['Float'];
  paymentNum: Scalars['Float'];
  paymentType: Scalars['String'];
};

export type ReportPayments = {
  __typename?: 'ReportPayments';
  reportPayment: Array<ReportPayment>;
};

export type ReportPriceInquiries = {
  __typename?: 'ReportPriceInquiries';
  reportPriceInquiry: Array<ReportPriceInquiry>;
};

export type ReportPriceInquiry = {
  __typename?: 'ReportPriceInquiry';
  priceInquiryAmnt: Scalars['Float'];
  priceInquiryGroup: Scalars['String'];
  priceInquiryNum: Scalars['Float'];
};

export type ReportProgress = {
  __typename?: 'ReportProgress';
  fileName: Scalars['String'];
  progress: Scalars['Float'];
  status: SaftGenerationStatus;
  url?: Maybe<Scalars['String']>;
};

export type ReportSelection = {
  __typename?: 'ReportSelection';
  /** Send once or repeat */
  repeat?: Maybe<RepeatInterval>;
  /** Type of report to send */
  reportType?: Maybe<ReportType>;
  /** Time to send the report */
  time: Scalars['DateTime'];
};

export type ReportSelectionInput = {
  /** Send once or repeat */
  repeat?: InputMaybe<RepeatInterval>;
  /** Type of report to send */
  reportType?: InputMaybe<ReportType>;
  /** Time to send the report */
  time: Scalars['DateTime'];
};

export type ReportTotalCashSales = {
  __typename?: 'ReportTotalCashSales';
  totalCashSaleAmnt: Scalars['Float'];
};

export enum ReportType {
  DailyReport = 'DAILY_REPORT',
  MonthlyReport = 'MONTHLY_REPORT',
  WeeklyReport = 'WEEKLY_REPORT',
  XReport = 'X_REPORT',
  YearlyReport = 'YEARLY_REPORT',
  ZReport = 'Z_REPORT',
}

export enum RequiredFieldName {
  OrganizationNum = 'ORGANIZATION_NUM',
  RestaurantName = 'RESTAURANT_NAME',
}

export type ResFranchise = {
  __typename?: 'ResFranchise';
  data: Array<Franchise>;
  total: Scalars['Float'];
};

export type ResRestaurant = {
  __typename?: 'ResRestaurant';
  data: Array<Restaurant>;
  total: Scalars['Float'];
};

export type Restaurant = {
  __typename?: 'Restaurant';
  _id: Scalars['ID'];
  /** Address restaurant */
  address?: Maybe<Scalars['String']>;
  admins?: Maybe<Array<User>>;
  avgRating?: Maybe<Scalars['Float']>;
  background?: Maybe<Media>;
  backgroundId?: Maybe<Scalars['ID']>;
  backgroundMobile?: Maybe<Media>;
  backgroundMobileId?: Maybe<Scalars['ID']>;
  /** domain client restaurant */
  clientDomain?: Maybe<Scalars['String']>;
  /** Company name */
  companyName?: Maybe<Scalars['String']>;
  /** Company's contact person */
  contactPerson?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** Description restaurant */
  description?: Maybe<Scalars['String']>;
  /** Description restaurant */
  descriptionNor?: Maybe<Scalars['String']>;
  /** Domain restaurant */
  domain: Scalars['String'];
  /** Company's email */
  email?: Maybe<Scalars['String']>;
  /** link facebook restaurant */
  facebook?: Maybe<Scalars['String']>;
  /** Franchise that the restaurant belongs to */
  franchise?: Maybe<Franchise>;
  /** link instagram restaurant */
  instagram?: Maybe<Scalars['String']>;
  isTest?: Maybe<Scalars['Boolean']>;
  languages?: Maybe<Array<Languages>>;
  location?: Maybe<Scalars['JsonScalar']>;
  managedBy?: Maybe<Scalars['String']>;
  media?: Maybe<Media>;
  mediaId?: Maybe<Scalars['ID']>;
  /** name restaurant */
  name: Scalars['String'];
  /** Organization number */
  organizationNumber?: Maybe<Scalars['String']>;
  /** phone number restaurant */
  phoneNumber?: Maybe<Scalars['String']>;
  /** Privacy policy restaurant */
  privacyPolicy?: Maybe<Scalars['String']>;
  /** Privacy policy restaurant */
  privacyPolicyNor?: Maybe<Scalars['String']>;
  settings?: Maybe<Array<Settings>>;
  /** Show in WinFlash Order app */
  showInWFO?: Maybe<Scalars['Boolean']>;
  showRating?: Maybe<Scalars['Boolean']>;
  /** Tax registration country */
  taxCountry?: Maybe<Scalars['String']>;
  /** Tax registration ID */
  taxRegistration?: Maybe<Scalars['String']>;
  /** Terms and conditions restaurant */
  termsAndConditions?: Maybe<Scalars['String']>;
  /** Terms and conditions restaurant */
  termsAndConditionsNor?: Maybe<Scalars['String']>;
  /** link tiktok restaurant */
  tiktok?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  useTableToOrderInApp?: Maybe<Scalars['Boolean']>;
  /** link youtube restaurant */
  youtube?: Maybe<Scalars['String']>;
};

export type RestaurantCloseMessageRes = {
  __typename?: 'RestaurantCloseMessageRes';
  _id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Description English */
  description?: Maybe<Scalars['String']>;
  /** Description Nor */
  descriptionNor?: Maybe<Scalars['String']>;
  /** Description Vietnamese */
  descriptionVi?: Maybe<Scalars['String']>;
  resid?: Maybe<Scalars['ID']>;
  /** title English */
  title?: Maybe<Scalars['String']>;
  /** Title Nor */
  titleNor?: Maybe<Scalars['String']>;
  type?: Maybe<SettingType>;
};

export type RestaurantCloseMessageSetting = {
  _id?: InputMaybe<Scalars['ID']>;
  /** Description English */
  description?: InputMaybe<Scalars['String']>;
  /** Description Nor */
  descriptionNor?: InputMaybe<Scalars['String']>;
  /** Description Vietnamese */
  descriptionVi?: InputMaybe<Scalars['String']>;
  /** title English */
  title?: InputMaybe<Scalars['String']>;
  /** Title Nor */
  titleNor?: InputMaybe<Scalars['String']>;
};

export type RestaurantInput = {
  /** Search keyword */
  keyword?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
  page?: InputMaybe<Scalars['Float']>;
};

export type RestaurantRole = {
  __typename?: 'RestaurantRole';
  _id?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  permissionId?: Maybe<Scalars['String']>;
  resid: Scalars['ID'];
  type: UserType;
  uid: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserDto>;
  userResNum: Scalars['Int'];
};

export type RestaurantRoleDto = {
  __typename?: 'RestaurantRoleDto';
  _id: Scalars['ID'];
  avatarId?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  permission?: Maybe<Permission>;
  permissionId?: Maybe<Scalars['String']>;
  resid: Scalars['ID'];
  type: UserType;
  uid: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserDto>;
  userResNum: Scalars['Int'];
};

export type SaftCashRegisterGenerationProgressSub = {
  __typename?: 'SAFTCashRegisterGenerationProgressSub';
  jobId: Scalars['String'];
  reportProgress?: Maybe<ReportProgress>;
};

export type SaftFinancialGenerationProgressSub = {
  __typename?: 'SAFTFinancialGenerationProgressSub';
  jobId: Scalars['String'];
  reportProgress?: Maybe<ReportProgress>;
};

export type SaftGenerationProgressSub = {
  __typename?: 'SAFTGenerationProgressSub';
  jobId: Scalars['String'];
  reportProgress?: Maybe<ReportProgress>;
};

export type SaftGenerationProgressSubInput = {
  jobId: Scalars['String'];
};

export enum SaftGenerationStatus {
  Completed = 'COMPLETED',
  EmailFailed = 'EMAIL_FAILED',
  GenerationFailed = 'GENERATION_FAILED',
  Inprogress = 'INPROGRESS',
}

export type SaftReportGenerationJobs = {
  __typename?: 'SAFTReportGenerationJobs';
  cashRegister: Scalars['String'];
  financial: Scalars['String'];
};

export type SaftReportInput = {
  endDate: Scalars['DateTime'];
  recipients: Array<Scalars['String']>;
  startDate: Scalars['DateTime'];
};

export enum SaleByCategoryFieldSort {
  Category = 'category',
  Name = 'name',
  Quantity = 'quantity',
  TotalSale = 'totalSale',
}

export type SaleByCategoryInput = {
  fromDate?: InputMaybe<Scalars['DateTime']>;
  limit?: InputMaybe<Scalars['Int']>;
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<SaleByCategorySortBy>;
  page?: InputMaybe<Scalars['Int']>;
  toDate?: InputMaybe<Scalars['DateTime']>;
};

export type SaleByCategoryItem = {
  __typename?: 'SaleByCategoryItem';
  _id?: Maybe<Scalars['String']>;
  catId?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  qty: Scalars['Float'];
  total: Scalars['Float'];
};

export type SaleByCategoryResponse = {
  __typename?: 'SaleByCategoryResponse';
  data: Array<SaleByCategoryItem>;
  total: Scalars['Int'];
};

export type SaleByCategorySortBy = {
  direction: Direction;
  field: SaleByCategoryFieldSort;
};

export type SaleByCategoryStatistics = {
  __typename?: 'SaleByCategoryStatistics';
  category: Scalars['String'];
  sales: Scalars['Float'];
};

export enum SaleByProductFieldSort {
  Category = 'category',
  Name = 'name',
  Quantity = 'quantity',
  TotalSale = 'totalSale',
}

export type SaleByProductInput = {
  fromDate?: InputMaybe<Scalars['DateTime']>;
  limit?: InputMaybe<Scalars['Int']>;
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<SaleByProductSortBy>;
  page?: InputMaybe<Scalars['Int']>;
  toDate?: InputMaybe<Scalars['DateTime']>;
};

export type SaleByProductItem = {
  __typename?: 'SaleByProductItem';
  catId?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  food: Food;
  qty: Scalars['Float'];
  total: Scalars['Float'];
};

export type SaleByProductResponse = {
  __typename?: 'SaleByProductResponse';
  data: Array<SaleByProductItem>;
  total: Scalars['Int'];
};

export type SaleByProductSortBy = {
  direction: Direction;
  field: SaleByProductFieldSort;
};

export type SaleStatistics = {
  __typename?: 'SaleStatistics';
  label: Scalars['String'];
  orders: Scalars['Float'];
  sales: Scalars['Float'];
};

export type SaveOfferFoodsInput = {
  /** List foods are added to the recommended list */
  ids: Array<Scalars['ID']>;
  isAssign: Scalars['Boolean'];
};

export type ScheduleStatus = {
  __typename?: 'ScheduleStatus';
  endTime?: Maybe<Scalars['DateTime']>;
  startTime?: Maybe<Scalars['DateTime']>;
};

export type ScheduleStatusInput = {
  endTime?: InputMaybe<Scalars['DateTime']>;
  startTime?: InputMaybe<Scalars['DateTime']>;
};

export type SendBillToEmailInput = {
  orderId: Scalars['ID'];
  recipients: Array<Scalars['String']>;
};

export type SendBillToEmailRes = {
  __typename?: 'SendBillToEmailRes';
  orderId: Scalars['String'];
  requestId: Scalars['String'];
  resId: Scalars['String'];
};

export type SendBillToEmailSub = {
  __typename?: 'SendBillToEmailSub';
  message?: Maybe<Scalars['String']>;
  orderId: Scalars['String'];
  recipients: Array<Scalars['String']>;
  requestId: Scalars['String'];
  resId: Scalars['String'];
  success?: Maybe<Scalars['Boolean']>;
};

export type SendSalesByDataSub = {
  __typename?: 'SendSalesByDataSub';
  exportId: Scalars['String'];
  fileUrl: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  resId: Scalars['String'];
  success?: Maybe<Scalars['Boolean']>;
};

export type SendSalesByInput = {
  fromDate?: InputMaybe<Scalars['DateTime']>;
  orderBy?: InputMaybe<SaleByProductSortBy>;
  recipients: Array<Scalars['String']>;
  table: ExportSaleTable;
  toDate?: InputMaybe<Scalars['DateTime']>;
};

export enum ServiceGateway {
  Dintero = 'Dintero',
  SumUp = 'SumUp',
  Vipps = 'Vipps',
}

/** Session period */
export enum SessionPeriodType {
  Start = 'start',
  Stop = 'stop',
}

export type SetAutoReceiptLayoutInput = {
  layout?: InputMaybe<SettingAutoPrintReceiptLayout>;
};

export type SetScheduleInput = {
  /** New schedule */
  create?: InputMaybe<Array<CreateScheduleInput>>;
  /** Deleted schedule */
  remove?: InputMaybe<Array<Scalars['String']>>;
  /** Updated schedule */
  update?: InputMaybe<Array<UpdateScheduleInput>>;
};

export enum SettingAutoPrintReceiptLayout {
  Alternative_1 = 'ALTERNATIVE_1',
  Alternative_2 = 'ALTERNATIVE_2',
  Default = 'DEFAULT',
}

export type SettingDeliveryHour = {
  __typename?: 'SettingDeliveryHour';
  _id: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Day of week */
  day: DayType;
  /** End delivery hour */
  endDate: Scalars['DateTime'];
  isOpen: Scalars['Boolean'];
  /** Start delivery hour */
  startDate: Scalars['DateTime'];
  type: SettingType;
};

export type SettingDistanceInput = {
  /** distance End */
  distanceEnd: Scalars['Float'];
  /** distance Start */
  distanceStart: Scalars['Float'];
  /** minimum total price */
  minTotalPrice: Scalars['Float'];
  /** delivery cost */
  priceDistance: Scalars['Float'];
};

export type SettingIngredient = {
  __typename?: 'SettingIngredient';
  _id: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Title Ingredient */
  titleIngredient?: Maybe<Scalars['String']>;
  /** Title Ingredient VI */
  titleIngredientNor?: Maybe<Scalars['String']>;
  type: SettingType;
};

export type SettingOpenTimeInput = {
  /** Day */
  day: DayType;
  /** is open time */
  isOpen: Scalars['Boolean'];
  /** Kitchen close time */
  kitchenClose: Scalars['String'];
  /** Preparation time for setting business hour ( normal hour/ peak hour) */
  preparing_time?: InputMaybe<Scalars['String']>;
  /** is open time */
  reserving?: InputMaybe<Scalars['Boolean']>;
  /** Time close */
  timeClose: Scalars['String'];
  /** Time open */
  timeOpen: Scalars['String'];
};

export type SettingPeakHour = {
  __typename?: 'SettingPeakHour';
  _id: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Day of week */
  day?: Maybe<DayType>;
  /** EndDate close */
  endDate: Scalars['DateTime'];
  /** Preparation time for setting business hour ( normal hour/ peak hour) */
  preparing_time?: Maybe<Scalars['String']>;
  /** StartDate close */
  startDate: Scalars['DateTime'];
  type: SettingType;
};

export type SettingReportAutoSendSchedule = {
  __typename?: 'SettingReportAutoSendSchedule';
  /** Schedule job id */
  jobOptions?: Maybe<Array<Scalars['String']>>;
  /** Memorable name */
  name?: Maybe<Scalars['String']>;
  /** List of recipients */
  recipients: Array<Scalars['String']>;
  /** Select reports to send */
  reportSelections: Array<ReportSelection>;
  /** Enable or disable */
  status: Scalars['Boolean'];
};

export type SettingReportAutoSendScheduleInput = {
  /** Memorable name */
  name?: InputMaybe<Scalars['String']>;
  /** List of recipients */
  recipients: Array<Scalars['String']>;
  reportSelections: Array<ReportSelectionInput>;
  /** Enable or disable */
  status: Scalars['Boolean'];
};

export type SettingRestaurantPaymentInfo = {
  __typename?: 'SettingRestaurantPaymentInfo';
  _id?: Maybe<Scalars['ID']>;
  card?: Maybe<CardSetting>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sumUp?: Maybe<SumUpSetting>;
  sumUpOAuth?: Maybe<SumUpOAuthSetting>;
  terminal?: Maybe<TerminalSetting>;
  terminalSumUp?: Maybe<TerminalSumUpSetting>;
  type?: Maybe<SettingType>;
  vipps?: Maybe<VippsSetting>;
};

export type SettingShopPaymentInput = {
  card?: InputMaybe<CardSettingInput>;
  sumUp?: InputMaybe<SumUpSettingInput>;
  sumUpOAuth?: InputMaybe<SumUpOAuthSettingInput>;
  terminal?: InputMaybe<TerminalSettingInput>;
  terminalSumUp?: InputMaybe<SumUpTerminalSettingInput>;
  vipps?: InputMaybe<VippsSettingInput>;
};

export enum SettingType {
  MailSettings = 'MAIL_SETTINGS',
  PrintByReceiptOption = 'PRINT_BY_RECEIPT_OPTION',
  SettingAboutUs = 'SETTING_ABOUT_US',
  SettingAutoReceiptLayout = 'SETTING_AUTO_RECEIPT_LAYOUT',
  SettingBackHomeDuration = 'SETTING_BACK_HOME_DURATION',
  SettingClose = 'SETTING_CLOSE',
  SettingClrCartPopUpCountDown = 'SETTING_CLR_CART_POP_UP_COUNT_DOWN',
  SettingClrCartPopUpTime = 'SETTING_CLR_CART_POP_UP_TIME',
  SettingContactInfoKioskDineinRequireName = 'SETTING_CONTACT_INFO_KIOSK_DINEIN_REQUIRE_NAME',
  SettingContactInfoKioskDineinRequirePhone = 'SETTING_CONTACT_INFO_KIOSK_DINEIN_REQUIRE_PHONE',
  SettingContactInfoKioskDineinShowName = 'SETTING_CONTACT_INFO_KIOSK_DINEIN_SHOW_NAME',
  SettingContactInfoKioskDineinShowNote = 'SETTING_CONTACT_INFO_KIOSK_DINEIN_SHOW_NOTE',
  SettingContactInfoKioskDineinShowPhone = 'SETTING_CONTACT_INFO_KIOSK_DINEIN_SHOW_PHONE',
  SettingContactInfoKioskTakeawayRequireName = 'SETTING_CONTACT_INFO_KIOSK_TAKEAWAY_REQUIRE_NAME',
  SettingContactInfoKioskTakeawayRequirePhone = 'SETTING_CONTACT_INFO_KIOSK_TAKEAWAY_REQUIRE_PHONE',
  SettingContactInfoKioskTakeawayShowName = 'SETTING_CONTACT_INFO_KIOSK_TAKEAWAY_SHOW_NAME',
  SettingContactInfoKioskTakeawayShowNote = 'SETTING_CONTACT_INFO_KIOSK_TAKEAWAY_SHOW_NOTE',
  SettingContactInfoKioskTakeawayShowPhone = 'SETTING_CONTACT_INFO_KIOSK_TAKEAWAY_SHOW_PHONE',
  SettingContactInfoWebDineinRequireName = 'SETTING_CONTACT_INFO_WEB_DINEIN_REQUIRE_NAME',
  SettingContactInfoWebDineinRequirePhone = 'SETTING_CONTACT_INFO_WEB_DINEIN_REQUIRE_PHONE',
  SettingContactInfoWebDineinShowName = 'SETTING_CONTACT_INFO_WEB_DINEIN_SHOW_NAME',
  SettingContactInfoWebDineinShowNote = 'SETTING_CONTACT_INFO_WEB_DINEIN_SHOW_NOTE',
  SettingContactInfoWebDineinShowPhone = 'SETTING_CONTACT_INFO_WEB_DINEIN_SHOW_PHONE',
  SettingContactInfoWebTakeawayRequireName = 'SETTING_CONTACT_INFO_WEB_TAKEAWAY_REQUIRE_NAME',
  SettingContactInfoWebTakeawayRequirePhone = 'SETTING_CONTACT_INFO_WEB_TAKEAWAY_REQUIRE_PHONE',
  SettingContactInfoWebTakeawayShowName = 'SETTING_CONTACT_INFO_WEB_TAKEAWAY_SHOW_NAME',
  SettingContactInfoWebTakeawayShowNote = 'SETTING_CONTACT_INFO_WEB_TAKEAWAY_SHOW_NOTE',
  SettingContactInfoWebTakeawayShowPhone = 'SETTING_CONTACT_INFO_WEB_TAKEAWAY_SHOW_PHONE',
  SettingContractInfoDineinRequireName = 'SETTING_CONTRACT_INFO_DINEIN_REQUIRE_NAME',
  SettingContractInfoDineinRequirePhone = 'SETTING_CONTRACT_INFO_DINEIN_REQUIRE_PHONE',
  SettingContractInfoDineinShowName = 'SETTING_CONTRACT_INFO_DINEIN_SHOW_NAME',
  SettingContractInfoDineinShowPhone = 'SETTING_CONTRACT_INFO_DINEIN_SHOW_PHONE',
  SettingContractInfoTakeawayRequireName = 'SETTING_CONTRACT_INFO_TAKEAWAY_REQUIRE_NAME',
  SettingContractInfoTakeawayRequirePhone = 'SETTING_CONTRACT_INFO_TAKEAWAY_REQUIRE_PHONE',
  SettingContractInfoTakeawayShowName = 'SETTING_CONTRACT_INFO_TAKEAWAY_SHOW_NAME',
  SettingContractInfoTakeawayShowPhone = 'SETTING_CONTRACT_INFO_TAKEAWAY_SHOW_PHONE',
  SettingDefaultCookingTime = 'SETTING_DEFAULT_COOKING_TIME',
  SettingDeliveryHour = 'SETTING_DELIVERY_HOUR',
  SettingDeliveryTax = 'SETTING_DELIVERY_TAX',
  SettingDistance = 'SETTING_DISTANCE',
  SettingEnableTerminalNetsPaymentGateway = 'SETTING_ENABLE_TERMINAL_NETS_PAYMENT_GATEWAY',
  SettingEnableTerminalSumUpPaymentGateway = 'SETTING_ENABLE_TERMINAL_SUM_UP_PAYMENT_GATEWAY',
  SettingFaq = 'SETTING_FAQ',
  SettingIngredient = 'SETTING_INGREDIENT',
  SettingInvoiceHeader = 'SETTING_INVOICE_HEADER',
  SettingKioskSwitchCardMethod = 'SETTING_KIOSK_SWITCH_CARD_METHOD',
  SettingKioskSwitchDeliveryMethod = 'SETTING_KIOSK_SWITCH_DELIVERY_METHOD',
  SettingKioskSwitchDineinMethod = 'SETTING_KIOSK_SWITCH_DINEIN_METHOD',
  SettingKioskSwitchPostpaidMethod = 'SETTING_KIOSK_SWITCH_POSTPAID_METHOD',
  SettingKioskSwitchTakeawayMethod = 'SETTING_KIOSK_SWITCH_TAKEAWAY_METHOD',
  SettingKioskSwitchTerminalMethod = 'SETTING_KIOSK_SWITCH_TERMINAL_METHOD',
  SettingKioskSwitchVippsMethod = 'SETTING_KIOSK_SWITCH_VIPPS_METHOD',
  SettingOnlinePaymentGateway = 'SETTING_ONLINE_PAYMENT_GATEWAY',
  SettingPaymentCardService = 'SETTING_PAYMENT_CARD_SERVICE',
  SettingPeakHour = 'SETTING_PEAK_HOUR',
  SettingPopularFoods = 'SETTING_POPULAR_FOODS',
  SettingPostpaidOrderMinAmount = 'SETTING_POSTPAID_ORDER_MIN_AMOUNT',
  SettingPostpaidOrderPingTime = 'SETTING_POSTPAID_ORDER_PING_TIME',
  SettingPosAppVersion = 'SETTING_POS_APP_VERSION',
  SettingPosDeviceRegister = 'SETTING_POS_DEVICE_REGISTER',
  SettingPosKitchenPrinter = 'SETTING_POS_KITCHEN_PRINTER',
  SettingPosLoyalty = 'SETTING_POS_LOYALTY',
  SettingPosReceiptLayout = 'SETTING_POS_RECEIPT_LAYOUT',
  SettingPosServiceFoodDefault = 'SETTING_POS_SERVICE_FOOD_DEFAULT',
  SettingPosSettingPreset = 'SETTING_POS_SETTING_PRESET',
  SettingPosSwitchCardMethod = 'SETTING_POS_SWITCH_CARD_METHOD',
  SettingPosSwitchDeliveryMethod = 'SETTING_POS_SWITCH_DELIVERY_METHOD',
  SettingPosSwitchDineinMethod = 'SETTING_POS_SWITCH_DINEIN_METHOD',
  SettingPosSwitchPostpaidMethod = 'SETTING_POS_SWITCH_POSTPAID_METHOD',
  SettingPosSwitchTakeawayMethod = 'SETTING_POS_SWITCH_TAKEAWAY_METHOD',
  SettingPosSwitchTerminalMethod = 'SETTING_POS_SWITCH_TERMINAL_METHOD',
  SettingPosSwitchVippsMethod = 'SETTING_POS_SWITCH_VIPPS_METHOD',
  SettingPosTableService = 'SETTING_POS_TABLE_SERVICE',
  SettingPosTax = 'SETTING_POS_TAX',
  SettingPrinterIp = 'SETTING_PRINTER_IP',
  SettingReportSendSchedule = 'SETTING_REPORT_SEND_SCHEDULE',
  SettingRequiredContactInformation = 'SETTING_REQUIRED_CONTACT_INFORMATION',
  SettingRestaurantCloseMessage = 'SETTING_RESTAURANT_CLOSE_MESSAGE',
  SettingRestaurantMap = 'SETTING_RESTAURANT_MAP',
  SettingRestaurantPaymentInfo = 'SETTING_RESTAURANT_PAYMENT_INFO',
  SettingSwitchCardMethod = 'SETTING_SWITCH_CARD_METHOD',
  SettingSwitchDeliveryMethod = 'SETTING_SWITCH_DELIVERY_METHOD',
  SettingSwitchDineinMethod = 'SETTING_SWITCH_DINEIN_METHOD',
  SettingSwitchHolidayClose = 'SETTING_SWITCH_HOLIDAY_CLOSE',
  SettingSwitchPostpaidMethod = 'SETTING_SWITCH_POSTPAID_METHOD',
  SettingSwitchRestaurantName = 'SETTING_SWITCH_RESTAURANT_NAME',
  SettingSwitchTakeawayMethod = 'SETTING_SWITCH_TAKEAWAY_METHOD',
  SettingSwitchTemporaryClose = 'SETTING_SWITCH_TEMPORARY_CLOSE',
  SettingSwitchTerminalMethod = 'SETTING_SWITCH_TERMINAL_METHOD',
  SettingSwitchVippsMethod = 'SETTING_SWITCH_VIPPS_METHOD',
  SettingTax = 'SETTING_TAX',
  SettingTemporaryCloseMessage = 'SETTING_TEMPORARY_CLOSE_MESSAGE',
  SettingTerminalAffiliateKey = 'SETTING_TERMINAL_AFFILIATE_KEY',
  SettingTerminalPaymentGateway = 'SETTING_TERMINAL_PAYMENT_GATEWAY',
  SettingTimeOpen = 'SETTING_TIME_OPEN',
  SettingVacationCloseMessage = 'SETTING_VACATION_CLOSE_MESSAGE',
  SettingWebBottomNav = 'SETTING_WEB_BOTTOM_NAV',
  SettingWebFoodsContainerLayout = 'SETTING_WEB_FOODS_CONTAINER_LAYOUT',
  SettingWebLayout = 'SETTING_WEB_LAYOUT',
  SettingWebMenuActiveColor = 'SETTING_WEB_MENU_ACTIVE_COLOR',
  SettingWebMenuBackgroundColor = 'SETTING_WEB_MENU_BACKGROUND_COLOR',
  SettingWebMenuContentColor = 'SETTING_WEB_MENU_CONTENT_COLOR',
  SettingWebMenuSpecialCategoryColor = 'SETTING_WEB_MENU_SPECIAL_CATEGORY_COLOR',
  SettingWkEmailTemplate = 'SETTING_WK_EMAIL_TEMPLATE',
  SettingWkEnableLimitedOpeningTime = 'SETTING_WK_ENABLE_LIMITED_OPENING_TIME',
  SettingWkLimitedOpeningTime = 'SETTING_WK_LIMITED_OPENING_TIME',
  SettingWkTimelineConfig_1 = 'SETTING_WK_TIMELINE_CONFIG_1',
  SettingWkTimelineConfig_2 = 'SETTING_WK_TIMELINE_CONFIG_2',
}

export type SettingWinPosTaxInput = {
  dineIn?: InputMaybe<Scalars['Float']>;
  takeaway?: InputMaybe<Scalars['Float']>;
};

export type Settings = {
  __typename?: 'Settings';
  _id: Scalars['ID'];
  /** Setting for auto-print receipt layout */
  autoReceiptLayout?: Maybe<SettingAutoPrintReceiptLayout>;
  /** content */
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Day of week */
  day?: Maybe<DayType>;
  /** Restaurant's delivery tax */
  deliveryTax?: Maybe<Scalars['Float']>;
  /** Description English */
  description?: Maybe<Scalars['String']>;
  /** Description Nor */
  descriptionNor?: Maybe<Scalars['String']>;
  /** Description Vietnamese */
  descriptionVi?: Maybe<Scalars['String']>;
  /** Ipad device id  */
  deviceId?: Maybe<Scalars['String']>;
  /** Distance End */
  distanceEnd?: Maybe<Scalars['Float']>;
  /** Distance Start */
  distanceStart?: Maybe<Scalars['Float']>;
  /** EndDate close */
  endDate?: Maybe<Scalars['DateTime']>;
  /** IsOpen edit CMS */
  isOpen?: Maybe<Scalars['Boolean']>;
  /** Kitchen close time */
  kitchenClose?: Maybe<Scalars['String']>;
  limitedOpeningEndAt?: Maybe<Scalars['DateTime']>;
  limitedOpeningStartAt?: Maybe<Scalars['DateTime']>;
  mailSettings?: Maybe<MailSetting>;
  /** Win kds report mail content */
  mailTemplate?: Maybe<Scalars['String']>;
  /** Minimum total price for delivery */
  minTotalPrice?: Maybe<Scalars['Float']>;
  /** Shop payment setting */
  paymentSetting?: Maybe<PaymentSetting>;
  posDeviceRegisteredData?: Maybe<PosDeviceRegisteredData>;
  /** Preparation time for setting business hour ( normal hour/ peak hour) */
  preparing_time?: Maybe<Scalars['String']>;
  /** WinPos preset setting */
  presets?: Maybe<Array<PresetSetting>>;
  /** Delivery cost */
  priceDistance?: Maybe<Scalars['Float']>;
  /** Setting for receipt layout */
  receipt?: Maybe<ReceiptLayoutSetting>;
  /** Report auto send schedule setting */
  reportAutoSendSchedule?: Maybe<SettingReportAutoSendSchedule>;
  /** order when close restaurant & take order when open and complete order  */
  reserving?: Maybe<Scalars['Boolean']>;
  resid: Scalars['ID'];
  /** StartDate close */
  startDate?: Maybe<Scalars['DateTime']>;
  /** Restaurant's tax */
  tax?: Maybe<TaxRestaurantRes>;
  /** Time close */
  timeClose?: Maybe<Scalars['String']>;
  /** Time open */
  timeOpen?: Maybe<Scalars['String']>;
  /** title English */
  title?: Maybe<Scalars['String']>;
  /** Title Ingredient */
  titleIngredient?: Maybe<Scalars['String']>;
  /** Title Ingredient VI */
  titleIngredientNor?: Maybe<Scalars['String']>;
  /** Title Nor */
  titleNor?: Maybe<Scalars['String']>;
  /** title vietnamese */
  titleVi?: Maybe<Scalars['String']>;
  type: SettingType;
  /** content */
  value?: Maybe<Scalars['String']>;
  /** Win pos setting tax */
  winPosTax?: Maybe<WinPosSettingTax>;
};

export type SettingsCloseTime = {
  __typename?: 'SettingsCloseTime';
  _id: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Description English */
  description?: Maybe<Scalars['String']>;
  /** Description Nor */
  descriptionNor?: Maybe<Scalars['String']>;
  /** Description Vietnamese */
  descriptionVi?: Maybe<Scalars['String']>;
  /** EndDate close */
  endDate: Scalars['DateTime'];
  resid: Scalars['ID'];
  /** StartDate close */
  startDate: Scalars['DateTime'];
  /** title English */
  title?: Maybe<Scalars['String']>;
  /** Title Nor */
  titleNor?: Maybe<Scalars['String']>;
  /** title vietnamese */
  titleVi?: Maybe<Scalars['String']>;
  type: SettingType;
};

export type SettingsDistance = {
  __typename?: 'SettingsDistance';
  _id: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Distance End */
  distanceEnd?: Maybe<Scalars['Float']>;
  /** Distance Start */
  distanceStart?: Maybe<Scalars['Float']>;
  /** Minimum total price for delivery */
  minTotalPrice?: Maybe<Scalars['Float']>;
  /** Delivery cost */
  priceDistance?: Maybe<Scalars['Float']>;
  resid: Scalars['ID'];
  type: SettingType;
};

export type SettingsOpenTime = {
  __typename?: 'SettingsOpenTime';
  _id: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  day: DayType;
  isOpen: Scalars['Boolean'];
  /** Kitchen close time */
  kitchenClose: Scalars['String'];
  /** Preparation time for setting business hour ( normal hour/ peak hour) */
  preparing_time?: Maybe<Scalars['String']>;
  reserving?: Maybe<Scalars['Boolean']>;
  resid: Scalars['ID'];
  /** Time close */
  timeClose: Scalars['String'];
  /** Time open */
  timeOpen: Scalars['String'];
  type: SettingType;
};

/** Depart services */
export enum ShopDepart {
  BeverageDepart = 'BEVERAGE_DEPART',
  HotFoodDepart = 'HOT_FOOD_DEPART',
  SushiDepart = 'SUSHI_DEPART',
}

export type StaffInfo = {
  __typename?: 'StaffInfo';
  _id: Scalars['ID'];
  fullName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  type?: Maybe<UserType>;
};

export type StartWorkSessionInput = {
  deviceId: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  startPrice: Scalars['Float'];
};

export type StatisticData = {
  __typename?: 'StatisticData';
  time: Scalars['String'];
  total: Scalars['Float'];
};

export type StatisticInput = {
  date?: InputMaybe<Scalars['DateTime']>;
  dateType: DateType;
  resId?: InputMaybe<Scalars['String']>;
};

export type StatisticItem = {
  __typename?: 'StatisticItem';
  amount: Scalars['Float'];
  percent: Scalars['Float'];
};

export type StatisticOrdersInput = {
  /** Page option: ID */
  after?: InputMaybe<Scalars['ID']>;
  endDate: Scalars['DateTime'];
  /** Page option */
  limit?: InputMaybe<Scalars['Int']>;
  /** Page option: No pagination */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  /** Page option */
  page?: InputMaybe<Scalars['Int']>;
  /** Page option: query to searching */
  q?: InputMaybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
};

export type StatisticPaymentAmount = {
  __typename?: 'StatisticPaymentAmount';
  bankaxept: StatisticItem;
  cash: StatisticItem;
  mastercard: StatisticItem;
  other: StatisticItem;
  total: Scalars['Float'];
  vipps: StatisticItem;
  visa: StatisticItem;
};

export type Statistics = {
  __typename?: 'Statistics';
  newCustomers: Scalars['Float'];
  payment: PaymentStatistics;
  salesByCategory: Array<SaleByCategoryStatistics>;
  salesComparison: Array<SaleStatistics>;
  salesOverTime: Array<SaleStatistics>;
  totalIncome: Scalars['Float'];
  totalOrders: Scalars['Float'];
  totalTax: Scalars['Float'];
};

/** Status type of product */
export enum StatusType {
  Manual = 'MANUAL',
  Schedule = 'SCHEDULE',
}

export type StopWorkSessionInput = {
  _id: Scalars['ID'];
  deviceId: Scalars['String'];
  stopPrice: Scalars['Float'];
};

export type StopWorkSessionSub = {
  __typename?: 'StopWorkSessionSub';
  data?: Maybe<ZReportInfor>;
  deviceId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  report?: Maybe<Report>;
  sessionId?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type StopWorkSessionSubInput = {
  deviceId: Scalars['String'];
  sessionId: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  BookingOlinePaymentSubscription: DataPaymentBookingOnline;
  CloudPaymentSubscription: DataPaymentCloudPos;
  CloudPosOrderSuccessSub: Order;
  ExportCategorySub: CategoryExportStateDataSub;
  ExportFoodsSub: FoodExportStateDataSub;
  ExportOrderListSub: ExportOrderListDataSub;
  ExportTimesheetSub: ExportTimesheetSub;
  GenerateSalesBySub: ExportSalesDataSub;
  ImportCategorySub: CategoryImportStateDataSub;
  ImportFoodsSub: FoodsImportStateDataSub;
  NotificationSub: Notifications;
  OrderSub: Order;
  ReadOrderSub: Order;
  SAFTCashRegisterGenerationProgressSub: SaftCashRegisterGenerationProgressSub;
  SAFTFinancialGenerationProgressSub: SaftFinancialGenerationProgressSub;
  SendBillToEmailSub: SendBillToEmailSub;
  SendSalesBySub: SendSalesByDataSub;
  StopWorkSessionSub: StopWorkSessionSub;
  SyncCloudPosSubscription: SyncCloudPosSub;
  TransferTableOrdersSub: TransferTableOrderSub;
  TriggerPrinterStateSub: Printer;
  UpdateOrderStatusSub: Order;
};

export type SubscriptionBookingOlinePaymentSubscriptionArgs = {
  dataInput: BookingOnlineSubInput;
};

export type SubscriptionCloudPaymentSubscriptionArgs = {
  dataInput: CloudPosSubInput;
};

export type SubscriptionExportOrderListSubArgs = {
  dataInput: CommonSubInput;
};

export type SubscriptionGenerateSalesBySubArgs = {
  dataInput: CommonSubInput;
};

export type SubscriptionNotificationSubArgs = {
  subNotificationInput: NotificationSubInput;
};

export type SubscriptionOrderSubArgs = {
  orderSubInput: OrderSubInput;
};

export type SubscriptionSaftCashRegisterGenerationProgressSubArgs = {
  dataInput: SaftGenerationProgressSubInput;
};

export type SubscriptionSaftFinancialGenerationProgressSubArgs = {
  dataInput: SaftGenerationProgressSubInput;
};

export type SubscriptionSendBillToEmailSubArgs = {
  dataInput: CommonSubInput;
};

export type SubscriptionSendSalesBySubArgs = {
  dataInput: CommonSubInput;
};

export type SubscriptionStopWorkSessionSubArgs = {
  dataInput: StopWorkSessionSubInput;
};

export type SubscriptionSyncCloudPosSubscriptionArgs = {
  dataInput: SyncCloudPosSubInput;
};

export type SubscriptionUpdateOrderStatusSubArgs = {
  dataInput: UpdateOrderSubInput;
};

export enum SumUpCallbackStatus {
  Failed = 'FAILED',
  Paid = 'PAID',
  Pending = 'PENDING',
}

export type SumUpCardObject = {
  __typename?: 'SumUpCardObject';
  last_4_digits?: Maybe<Scalars['String']>;
  type?: Maybe<SumupCardType>;
};

export type SumUpOAuthSetting = {
  __typename?: 'SumUpOAuthSetting';
  affiliateKey?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
  historySetupStatus?: Maybe<SumUpOAuthSetupStatus>;
  merchantCode?: Maybe<Scalars['String']>;
  paymentSetupStatus?: Maybe<SumUpOAuthSetupStatus>;
};

export type SumUpOAuthSettingInput = {
  affiliateKey?: InputMaybe<Scalars['String']>;
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  merchantCode?: InputMaybe<Scalars['String']>;
};

export enum SumUpOAuthSetupStatus {
  Expired = 'EXPIRED',
  None = 'NONE',
  Ok = 'OK',
}

export type SumUpPaymentInfor = {
  __typename?: 'SumUpPaymentInfor';
  amount?: Maybe<Scalars['Float']>;
  checkoutId?: Maybe<Scalars['String']>;
  checkoutReference?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  purpose?: Maybe<Scalars['String']>;
  status?: Maybe<SumUpCallbackStatus>;
  transactionCode?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
  transactions?: Maybe<SumUpTransaction>;
};

export type SumUpPaymentInput = {
  amount?: InputMaybe<Scalars['Float']>;
  checkoutId?: InputMaybe<Scalars['String']>;
  checkoutReference?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  isCloudPayment?: InputMaybe<Scalars['Boolean']>;
  purpose?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<SumUpCallbackStatus>;
  transactionCode?: InputMaybe<Scalars['String']>;
  transactionId?: InputMaybe<Scalars['String']>;
  transactions?: InputMaybe<Array<SumUpTransactionInput>>;
};

export type SumUpSetting = {
  __typename?: 'SumUpSetting';
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
  enable?: Maybe<Scalars['Boolean']>;
  merchant_code?: Maybe<Scalars['String']>;
  pay_to_email?: Maybe<Scalars['String']>;
  type?: Maybe<ServiceGateway>;
};

export type SumUpSettingInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  enable?: InputMaybe<Scalars['Boolean']>;
  merchant_code?: InputMaybe<Scalars['String']>;
  pay_to_email?: InputMaybe<Scalars['String']>;
};

export type SumUpTerminalInput = {
  amount: Scalars['Float'];
  orderId: Scalars['ID'];
  resId: Scalars['ID'];
  transactionCode?: InputMaybe<Scalars['String']>;
};

export type SumUpTerminalSettingInput = {
  affiliate_key?: InputMaybe<Scalars['String']>;
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  enable?: InputMaybe<Scalars['Boolean']>;
  merchant_code?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  pay_to_email?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type SumUpTransaction = {
  __typename?: 'SumUpTransaction';
  amount?: Maybe<Scalars['String']>;
  auth_code?: Maybe<Scalars['Boolean']>;
  card?: Maybe<SumUpCardObject>;
  currency?: Maybe<Scalars['String']>;
  entry_mode?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  installments_count?: Maybe<Scalars['String']>;
  internal_id?: Maybe<Scalars['String']>;
  merchant_code?: Maybe<Scalars['String']>;
  payment_type?: Maybe<Scalars['String']>;
  payout_plan?: Maybe<Scalars['String']>;
  payout_type?: Maybe<Scalars['String']>;
  product_summary?: Maybe<Scalars['String']>;
  status?: Maybe<SumupStatus>;
  tax_enabled?: Maybe<Scalars['Boolean']>;
  timestamp?: Maybe<Scalars['String']>;
  tip_amount?: Maybe<Scalars['String']>;
  transaction_code?: Maybe<Scalars['String']>;
  vat_amount?: Maybe<Scalars['String']>;
  verification_method?: Maybe<Scalars['String']>;
};

export type SumUpTransactionInput = {
  amount?: InputMaybe<Scalars['String']>;
  entry_mode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  installments_count?: InputMaybe<Scalars['String']>;
  internal_id?: InputMaybe<Scalars['String']>;
  payment_type?: InputMaybe<Scalars['String']>;
  payout_plan?: InputMaybe<Scalars['String']>;
  payout_type?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<SumupStatus>;
  timestamp?: InputMaybe<Scalars['String']>;
  tip_amount?: InputMaybe<Scalars['String']>;
  transaction_code?: InputMaybe<Scalars['String']>;
  vat_amount?: InputMaybe<Scalars['String']>;
};

export enum SumupCardType {
  Amex = 'AMEX',
  Cup = 'CUP',
  Diners = 'DINERS',
  Discover = 'DISCOVER',
  Elo = 'ELO',
  Elv = 'ELV',
  Hipercard = 'HIPERCARD',
  Jcb = 'JCB',
  Maestro = 'MAESTRO',
  Mastercard = 'MASTERCARD',
  Unknown = 'UNKNOWN',
  Visa = 'VISA',
  VisaElectron = 'VISA_ELECTRON',
  VisaVpay = 'VISA_VPAY',
}

export enum SumupStatus {
  Cancelled = 'CANCELLED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Successful = 'SUCCESSFUL',
}

export type SumupToken = {
  __typename?: 'SumupToken';
  accessToken: Scalars['String'];
  affiliateKey?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['Float']>;
};

export enum SumupTokenType {
  History = 'HISTORY',
  Payment = 'PAYMENT',
}

export type SyncCashPaymentInfor = {
  amount?: InputMaybe<Scalars['Float']>;
};

export type SyncCloudPos = {
  __typename?: 'SyncCloudPos';
  syncId: Scalars['String'];
};

export type SyncCloudPosInput = {
  events?: InputMaybe<Array<LogCashRegisterEventInput>>;
  orders: Array<SyncOrderInput>;
  workSessions: Array<SyncWorkSessionInput>;
};

export type SyncCloudPosSub = {
  __typename?: 'SyncCloudPosSub';
  message: Scalars['String'];
  processId: Scalars['String'];
  success: Scalars['Boolean'];
};

export type SyncCloudPosSubInput = {
  syncId: Scalars['String'];
};

export type SyncOrder = {
  appRedirectSumupUrl?: InputMaybe<Scalars['String']>;
  clientSystem?: InputMaybe<ClientSystem>;
  clientTime?: InputMaybe<Scalars['DateTime']>;
  code?: InputMaybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  customFoods?: InputMaybe<Array<OrderCustomFoodInput>>;
  customerId?: InputMaybe<Scalars['ID']>;
  deviceId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  foods: Array<OrderFoodDataInput>;
  fullName?: InputMaybe<Scalars['String']>;
  isDelivery?: InputMaybe<Scalars['Boolean']>;
  /** Sumup saved card flow */
  isSumupSavedCardFlow?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<ClientLangCode>;
  location?: InputMaybe<LocationInput>;
  note?: InputMaybe<Scalars['String']>;
  paymentInfor?: InputMaybe<SyncPaymentInfo>;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** Date for order, which is pickup later */
  pickupAt?: InputMaybe<Scalars['DateTime']>;
  printerId?: InputMaybe<Scalars['String']>;
  remainingPrice?: InputMaybe<Scalars['Float']>;
  resId: Scalars['ID'];
  status: OrderStatus;
  tableId?: InputMaybe<Scalars['ID']>;
  taxType: TaxType;
  terminalId?: InputMaybe<Scalars['String']>;
  totalPrice: Scalars['Float'];
  type: OrderType;
};

export type SyncOrderInput = {
  amount: Scalars['Float'];
  clientSystem?: InputMaybe<ClientSystem>;
  copyReceiptRemaining?: InputMaybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['String'];
  customFoods?: InputMaybe<Array<OrderCustomFoodInput>>;
  customerId?: InputMaybe<Scalars['ID']>;
  deviceId: Scalars['String'];
  discount?: InputMaybe<DiscountInput>;
  foods: Array<OrderFoodDataInput>;
  fullName?: InputMaybe<Scalars['String']>;
  isParked?: InputMaybe<Scalars['Boolean']>;
  isTraining?: InputMaybe<Scalars['Boolean']>;
  /** User-generated session code */
  offlineSessionId?: InputMaybe<Scalars['String']>;
  originalReceiptRemaining?: InputMaybe<Scalars['Float']>;
  paymentInfor?: InputMaybe<PaymentInforInput>;
  paymentStatus?: InputMaybe<PaymentStatus>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  receiptCopyNum?: InputMaybe<Scalars['Float']>;
  receiptNum?: InputMaybe<Scalars['Float']>;
  receiptProformaNum?: InputMaybe<Scalars['Float']>;
  refundedAt?: InputMaybe<Scalars['DateTime']>;
  simpleOrderNumber: Scalars['String'];
  status?: InputMaybe<OrderStatus>;
  tableId?: InputMaybe<Scalars['String']>;
  taxType?: InputMaybe<TaxType>;
  userOrderNumber: Scalars['String'];
  /** Work session ID */
  workSessionId?: InputMaybe<Scalars['String']>;
};

export type SyncOrdersDataInput = {
  orders?: InputMaybe<Array<SyncOrder>>;
};

export type SyncPaymentInfo = {
  cash?: InputMaybe<SyncCashPaymentInfor>;
};

export type SyncWorkSessionInput = {
  cashAmount?: InputMaybe<Scalars['Float']>;
  deviceId: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  /** User-generated session code */
  offlineSessionId?: InputMaybe<Scalars['String']>;
  payIn?: InputMaybe<Scalars['Float']>;
  payOut?: InputMaybe<Scalars['Float']>;
  refund?: InputMaybe<Scalars['Float']>;
  resId: Scalars['ID'];
  startById: Scalars['ID'];
  startDate: Scalars['DateTime'];
  /** Số tiền cho vào khay khi bắt đầu phiên */
  startPrice: Scalars['Float'];
  stopById?: InputMaybe<Scalars['ID']>;
  stopDate?: InputMaybe<Scalars['DateTime']>;
  /** Số tiền trong khay sau khi kết thúc phiên */
  stopPrice?: InputMaybe<Scalars['Float']>;
  workSessionId?: InputMaybe<Scalars['String']>;
};

export type Table = {
  __typename?: 'Table';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  createdBy: User;
  createdByUser: User;
  name: Scalars['String'];
  numberOfSeats: Scalars['Int'];
  orders: Array<Order>;
  qrCodeBody: Scalars['String'];
  resId: Scalars['ID'];
  restaurant: Restaurant;
  updatedAt: Scalars['DateTime'];
  updatedBy: User;
  updatedByUser: User;
};

export type TableOrdersResult = {
  __typename?: 'TableOrdersResult';
  availableOrders: Array<Order>;
  table: Table;
};

export type TablesDto = {
  __typename?: 'TablesDto';
  data: Array<Table>;
  total: Scalars['Int'];
};

export type TaxInput = {
  taxDelivery?: InputMaybe<Scalars['Float']>;
  taxIn?: InputMaybe<Scalars['Float']>;
  taxOut?: InputMaybe<Scalars['Float']>;
};

export type TaxOrder = {
  __typename?: 'TaxOrder';
  taxPercent: Scalars['Float'];
  taxPrice: Scalars['Float'];
  taxPriceAfterDiscount?: Maybe<Scalars['Float']>;
  type?: Maybe<TaxType>;
};

export type TaxOrderSync = {
  taxPercent: Scalars['Float'];
  taxPrice: Scalars['Float'];
  taxPriceAfterDiscount?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<TaxType>;
};

export type TaxReportData = {
  __typename?: 'TaxReportData';
  percent: Scalars['Float'];
  value: Scalars['Float'];
};

export type TaxRes = {
  __typename?: 'TaxRes';
  taxByCategory: Array<Category>;
  taxDelivery?: Maybe<Scalars['Float']>;
};

export type TaxRestaurantRes = {
  __typename?: 'TaxRestaurantRes';
  taxDelivery?: Maybe<Scalars['Float']>;
  taxIn?: Maybe<Scalars['Float']>;
  taxOut?: Maybe<Scalars['Float']>;
};

export type TaxSettings = {
  __typename?: 'TaxSettings';
  dineIn: Scalars['Float'];
  takeaway: Scalars['Float'];
};

export type TaxSettingsInput = {
  dineIn: Scalars['Float'];
  takeaway: Scalars['Float'];
};

export enum TaxType {
  TaxDelivery = 'taxDelivery',
  TaxIn = 'taxIn',
  TaxOut = 'taxOut',
}

export type TerminalConfigInput = {
  password?: InputMaybe<Scalars['String']>;
  resId: Scalars['ID'];
  terminalId?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type TerminalInput = {
  resId: Scalars['ID'];
  terminalId: Scalars['String'];
};

export type TerminalPaymentInfor = {
  __typename?: 'TerminalPaymentInfor';
  amount?: Maybe<Scalars['Float']>;
  failure?: Maybe<TerminalTracsaction>;
  result?: Maybe<Array<TerminalTracsaction>>;
};

export type TerminalPaymentInforInput = {
  amount?: InputMaybe<Scalars['Float']>;
  failure?: InputMaybe<TerminalTracsactionInput>;
  result?: InputMaybe<Array<TerminalTracsactionInput>>;
};

export type TerminalSetting = {
  __typename?: 'TerminalSetting';
  enable?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type TerminalSettingInput = {
  enable?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type TerminalSumUpPaymentInfo = {
  __typename?: 'TerminalSumUpPaymentInfo';
  amount?: Maybe<Scalars['Float']>;
  dataPayment?: Maybe<SumUpTransaction>;
  foreignTransactionId?: Maybe<Scalars['String']>;
  transactionCode?: Maybe<Scalars['String']>;
  transactions?: Maybe<SumUpTransaction>;
};

export type TerminalSumUpSetting = {
  __typename?: 'TerminalSumUpSetting';
  affiliate_key?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
  merchant_code?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  pay_to_email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type TerminalTracsaction = {
  __typename?: 'TerminalTracsaction';
  cardNumber: Scalars['String'];
  cardType: Scalars['String'];
  error?: Maybe<Scalars['String']>;
  localModeEventArgs: Array<DinteroCartItem>;
  timeStamp: Scalars['String'];
  transactionId: Scalars['String'];
};

export type TerminalTracsactionInput = {
  cardNumber: Scalars['String'];
  cardType: Scalars['String'];
  error?: InputMaybe<Scalars['String']>;
  timeStamp: Scalars['String'];
  transactionId: Scalars['String'];
};

export type TimeSheetInput = {
  /** Page option: ID */
  after?: InputMaybe<Scalars['ID']>;
  deviceId?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  /** Page option */
  limit?: InputMaybe<Scalars['Int']>;
  /** Page option: No pagination */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  /** Page option */
  page?: InputMaybe<Scalars['Int']>;
  /** Page option: query to searching */
  q?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
  userType?: InputMaybe<UserType>;
};

export type Timesheet = {
  __typename?: 'Timesheet';
  _id: Scalars['ID'];
  device?: Maybe<PosDeviceRegisteredData>;
  deviceId: Scalars['String'];
  login?: Maybe<Scalars['DateTime']>;
  logout?: Maybe<Scalars['DateTime']>;
  resId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type Timesheets = {
  __typename?: 'Timesheets';
  data: Array<Timesheet>;
  total: Scalars['Float'];
};

export type TotalCashInfo = {
  __typename?: 'TotalCashInfo';
  count: Scalars['Float'];
  price: Scalars['Float'];
};

export type TransactionInfor = {
  __typename?: 'TransactionInfor';
  amount?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  timeStamp?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['Float']>;
};

export type TransactionInforInput = {
  amount?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  timeStamp?: InputMaybe<Scalars['String']>;
  transactionId?: InputMaybe<Scalars['Float']>;
};

export type TransferTableOrderSub = {
  __typename?: 'TransferTableOrderSub';
  ordersTransferred: Array<Order>;
  tableSource: Table;
  tableTarget: Table;
};

export type TransferTableOrdersInput = {
  orderTransIds?: InputMaybe<Array<Scalars['String']>>;
  tableSourceId: Scalars['String'];
  tableTargetId: Scalars['String'];
};

export type UnAssignUserInput = {
  _id: Scalars['ID'];
  /** List user's id for assign  */
  userAssigns: Array<Scalars['ID']>;
};

export type UnReadOrdersInput = {
  limit?: InputMaybe<Scalars['Float']>;
  page?: InputMaybe<Scalars['Float']>;
};

export type UpdateByIdsOrdersInput = {
  orderId: Scalars['ID'];
  status: OrderStatus;
};

export type UpdateBySearchFilterOrdersInput = {
  dataStatus: OrderStatus;
  end?: InputMaybe<Scalars['DateTime']>;
  excludeOrderIds?: InputMaybe<Array<Scalars['ID']>>;
  paymentStatus?: InputMaybe<Array<PaymentStatus>>;
  paymentTypeFilter?: InputMaybe<PaymentTypeFilter>;
  q?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Array<OrderStatus>>;
};

export type UpdateCategoryInput = {
  _id: Scalars['ID'];
  clientSystem?: InputMaybe<ClientSystem>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  iconId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  nameNor?: InputMaybe<Scalars['String']>;
  nameVi?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  taxSetting?: InputMaybe<TaxSettingsInput>;
};

export type UpdateCustomerInput = {
  _id: Scalars['ID'];
  address?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  membershipId?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postcode?: InputMaybe<Scalars['String']>;
};

export type UpdateFoodInput = {
  IDRefs?: InputMaybe<Array<Scalars['ID']>>;
  _id: Scalars['ID'];
  /** This food belongs to a special category, it only appears on specific days of the week */
  activeDays?: InputMaybe<Array<MomentDaysOfWeek>>;
  catId?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  descriptionNor?: InputMaybe<Scalars['String']>;
  descriptionVi?: InputMaybe<Scalars['String']>;
  /** Food's department service */
  foodDepart?: InputMaybe<ShopDepart>;
  inPeakHours?: InputMaybe<Scalars['Boolean']>;
  ingredients?: InputMaybe<Scalars['String']>;
  ingredientsNor?: InputMaybe<Scalars['String']>;
  mediaId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  nameNor?: InputMaybe<Scalars['String']>;
  nameVi?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Array<ExtraOptionInput>>;
  orderMethods?: InputMaybe<Array<OrderMethod>>;
  /** The food's price for takeaway, if it's not provided, please contact to admin */
  price?: InputMaybe<Scalars['Float']>;
  /** The food's price at restaurant, if it's not provided, please contact to admin */
  priceSecond?: InputMaybe<Scalars['Float']>;
  printName?: InputMaybe<Scalars['String']>;
  printNameNor?: InputMaybe<Scalars['String']>;
  scheduleStatus?: InputMaybe<ScheduleStatusInput>;
  sku?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
  statusType?: InputMaybe<StatusType>;
  tags?: InputMaybe<Array<FoodTag>>;
};

export type UpdateFoodReadyInput = {
  codes: Array<Scalars['String']>;
  isReady: Scalars['Boolean'];
  orderId: Scalars['String'];
};

export type UpdateFranchiseInput = {
  _id: Scalars['ID'];
  updateFranchiseInput: InputUpdateFranchise;
};

export type UpdateIngredientTemplateInput = {
  _id: Scalars['ID'];
  catIds?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  nameNor?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Array<ExtraOptionInput>>;
};

export type UpdateMembershipInput = {
  _id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  /** % discount khi đạt target */
  rewardPercent?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<MembershipStatus>;
  /** Số tiền khách hàng đã sử dụng để thanh toán */
  targetPrice?: InputMaybe<Scalars['Float']>;
};

export type UpdateMembershipsInput = {
  data?: InputMaybe<Array<UpdateMembershipInput>>;
};

export type UpdateNotificationsInput = {
  _id: Scalars['ID'];
  status: Scalars['Boolean'];
};

export type UpdateOrderPos = {
  amount?: InputMaybe<Scalars['Float']>;
  clearFoods?: InputMaybe<Scalars['Boolean']>;
  clientSystem?: InputMaybe<ClientSystem>;
  code?: InputMaybe<Scalars['String']>;
  customFoods?: InputMaybe<Array<OrderCustomFoodInput>>;
  customerId?: InputMaybe<Scalars['ID']>;
  /** Bắt buộc gửi deviceId lên để sau này check report, tạm thời để nullable */
  deviceId?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<DiscountInput>;
  foods?: InputMaybe<Array<OrderFoodDataInput>>;
  fullName?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  orderId: Scalars['ID'];
  paymentStatus?: InputMaybe<PaymentStatus>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<OrderStatus>;
  tableId?: InputMaybe<Scalars['String']>;
  taxType?: InputMaybe<TaxType>;
  /** Bắt buộc gửi workSessionId lên để sau này check report, tạm thời để nullable */
  workSessionId?: InputMaybe<Scalars['ID']>;
};

export type UpdateOrderSubInput = {
  resId: Scalars['ID'];
};

export type UpdateOrdersTableInput = {
  /** All orders must be in table */
  orderIds: Array<Scalars['String']>;
  tableId?: InputMaybe<Scalars['String']>;
};

export type UpdatePrinterInput = {
  _id: Scalars['ID'];
  assignedToDeviceId?: InputMaybe<Scalars['String']>;
  assignedToDeviceType?: InputMaybe<ReceiptType>;
  mac?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  printOption?: InputMaybe<PrintOptionInput>;
};

export type UpdatePromotionInput = {
  _id: Scalars['ID'];
  applyWith?: InputMaybe<PromotionApplyWith>;
  discountPercent?: InputMaybe<Scalars['Float']>;
  discountType?: InputMaybe<PromotionDiscountType>;
  /** EndDate */
  endDate?: InputMaybe<Scalars['DateTime']>;
  foods?: InputMaybe<Array<FoodDiscountInput>>;
  name?: InputMaybe<Scalars['String']>;
  /** StartDate */
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<PromotionType>;
};

export type UpdateRestaurantInput = {
  _id: Scalars['ID'];
  updateRestaurantInput: InputUpdateRestaurant;
};

export type UpdateScheduleInput = {
  _id: Scalars['ID'];
  /** Report auto send schedule setting */
  reportAutoSendSchedule: SettingReportAutoSendScheduleInput;
  resid: Scalars['ID'];
};

export type UpdateSettingCloseTimeInput = {
  _id: Scalars['ID'];
  /** Description English */
  description?: InputMaybe<Scalars['String']>;
  /** Description Nor */
  descriptionNor?: InputMaybe<Scalars['String']>;
  /** Description Vietnamese */
  descriptionVi?: InputMaybe<Scalars['String']>;
  /** EndDate close */
  endDate?: InputMaybe<Scalars['DateTime']>;
  /** StartDate close */
  startDate?: InputMaybe<Scalars['DateTime']>;
  /** title English */
  title?: InputMaybe<Scalars['String']>;
  /** Title Nor */
  titleNor?: InputMaybe<Scalars['String']>;
  /** title vietnamese */
  titleVi?: InputMaybe<Scalars['String']>;
};

export type UpdateStatusOrdersInput = {
  dataByIds?: InputMaybe<Array<UpdateByIdsOrdersInput>>;
  dataBySearchFilter?: InputMaybe<UpdateBySearchFilterOrdersInput>;
  mode: Array<UpdateStatusOrdersMode>;
};

export enum UpdateStatusOrdersMode {
  ByIds = 'BY_IDS',
  BySearchFilter = 'BY_SEARCH_FILTER',
}

export type UpdateTableInput = {
  _id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  numberOfSeats?: InputMaybe<Scalars['Int']>;
};

export type UpdateTaxByCategory = {
  /** ID of category */
  categoryId: Scalars['ID'];
  tax: CategoryTaxInput;
};

export type UpdateTaxInput = {
  taxByCategory: Array<UpdateTaxByCategory>;
  taxDelivery?: InputMaybe<Scalars['Float']>;
};

export type UpdateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  avatarId?: InputMaybe<Scalars['String']>;
  birthDay?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  idNumber?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  /** Permission on winpos */
  permissionId?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<Scalars['String']>>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<UserType>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateWorkSessionInput = {
  _id: Scalars['ID'];
  /** Số tiền thanh toán bằng cash */
  cashAmount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** Tạm thời để nullable */
  deviceId?: InputMaybe<Scalars['String']>;
  lineCorrection?: InputMaybe<Scalars['Float']>;
  note?: InputMaybe<Scalars['String']>;
  payIn?: InputMaybe<Scalars['Float']>;
  payOut?: InputMaybe<Scalars['Float']>;
  /** Số tiền hoàn */
  refund?: InputMaybe<Scalars['Float']>;
  reportOpenCashBoxNum?: InputMaybe<Scalars['Int']>;
  reportReceiptCopyAmnt?: InputMaybe<Scalars['Int']>;
  reportReceiptCopyNum?: InputMaybe<Scalars['Int']>;
  reportReceiptNum?: InputMaybe<Scalars['Int']>;
  reportReceiptProformaAmnt?: InputMaybe<Scalars['Float']>;
  reportReceiptProformaNum?: InputMaybe<Scalars['Int']>;
  reportTrainingAmnt?: InputMaybe<Scalars['Float']>;
  reportTrainingNum?: InputMaybe<Scalars['Int']>;
  reportVoidTransAmnt?: InputMaybe<Scalars['Float']>;
  reportVoidTransNum?: InputMaybe<Scalars['Int']>;
  resId?: InputMaybe<Scalars['ID']>;
  sessionNo?: InputMaybe<Scalars['Int']>;
  startById?: InputMaybe<Scalars['ID']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  /** Số tiền cho vào khay khi bắt đầu phiên */
  startPrice?: InputMaybe<Scalars['Float']>;
  stopById?: InputMaybe<Scalars['ID']>;
  stopDate?: InputMaybe<Scalars['DateTime']>;
  /** Số tiền trong khay sau khi kết thúc phiên */
  stopPrice?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateWorkSessionPriceInput = {
  deviceId: Scalars['String'];
  sessionId: Scalars['ID'];
  /** Update for start session or stop session */
  sessionPeriod: SessionPeriodType;
  totalPrice: Scalars['Float'];
};

export enum UploadType {
  Photo = 'PHOTO',
}

export type UpsertLimitedOpeningTimeSetting = {
  _id?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  limitedOpeningEndAt?: InputMaybe<Scalars['DateTime']>;
  limitedOpeningStartAt?: InputMaybe<Scalars['DateTime']>;
  resid?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<SettingType>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Media>;
  avatarId?: Maybe<Scalars['String']>;
  birthDay?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  fullName: Scalars['String'];
  idNumber?: Maybe<Scalars['String']>;
  isManager?: Maybe<Scalars['Boolean']>;
  isSuperAdmin?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  permission?: Maybe<Permission>;
  /** List user permissionId */
  permissions?: Maybe<Array<Scalars['String']>>;
  phoneNumber?: Maybe<Scalars['String']>;
  resRole?: Maybe<RestaurantRole>;
  /** restaurant id */
  resid?: Maybe<Scalars['ID']>;
  restaurants?: Maybe<Array<Restaurant>>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserDto = {
  __typename?: 'UserDto';
  _id: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Media>;
  avatarId?: Maybe<Scalars['String']>;
  birthDay?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  fullName: Scalars['String'];
  idNumber?: Maybe<Scalars['String']>;
  isManager: Scalars['Boolean'];
  isSuperAdmin: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  permission?: Maybe<Permission>;
  /** List user permissionId */
  permissions?: Maybe<Array<Scalars['String']>>;
  phoneNumber?: Maybe<Scalars['String']>;
  resRole?: Maybe<RestaurantRole>;
  /** restaurant id */
  resid?: Maybe<Scalars['ID']>;
  restaurant?: Maybe<Restaurant>;
  restaurants?: Maybe<Array<Restaurant>>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserOnPeakHoursInput = {
  ids: Array<Scalars['ID']>;
  status: Scalars['Boolean'];
};

export type UserPosDto = {
  __typename?: 'UserPosDto';
  _id: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  fullName: Scalars['String'];
  password: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  /** restaurant id */
  resid?: Maybe<Scalars['ID']>;
  restaurant?: Maybe<Restaurant>;
  type?: Maybe<UserType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export enum UserType {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  Staff = 'STAFF',
  SuperAdmin = 'SUPER_ADMIN',
}

export type UsersRes = {
  __typename?: 'UsersRes';
  data: Array<User>;
  total: Scalars['Int'];
};

export type VippsCancelInfor = {
  __typename?: 'VippsCancelInfor';
  message?: Maybe<Scalars['String']>;
};

export type VippsCancelInforInput = {
  message?: InputMaybe<Scalars['String']>;
};

export type VippsPaymentInfor = {
  __typename?: 'VippsPaymentInfor';
  cancelInfor?: Maybe<VippsCancelInfor>;
  errorInfor?: Maybe<ErrorInfor>;
  merchantSerialNumber?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  transactionInfo?: Maybe<TransactionInfor>;
};

export type VippsPaymentInforInput = {
  cancelInfor?: InputMaybe<VippsCancelInforInput>;
  errorInfor?: InputMaybe<ErrorInforInput>;
  merchantSerialNumber?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['String']>;
  transactionInfo?: InputMaybe<TransactionInforInput>;
};

export type VippsSetting = {
  __typename?: 'VippsSetting';
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
  clientSubscriptionKey?: Maybe<Scalars['String']>;
  enable?: Maybe<Scalars['Boolean']>;
  merchantNo?: Maybe<Scalars['String']>;
};

export type VippsSettingInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  clientSubscriptionKey?: InputMaybe<Scalars['String']>;
  enable?: InputMaybe<Scalars['Boolean']>;
  merchantNo?: InputMaybe<Scalars['String']>;
};

export type WkCountOrders = {
  __typename?: 'WKCountOrders';
  confirmed: Scalars['Float'];
  cooking: Scalars['Float'];
  finish: Scalars['Float'];
  postpaid: Scalars['Float'];
  ready: Scalars['Float'];
  total: Scalars['Float'];
};

export type WkIngredientTemplate = {
  __typename?: 'WKIngredientTemplate';
  ingredientTemplates?: Maybe<Array<IngredientTemplate>>;
};

export type WkUnReadOrders = {
  __typename?: 'WKUnReadOrders';
  data: Array<Order>;
  total: Scalars['Float'];
};

export type WinPosSettingTax = {
  __typename?: 'WinPosSettingTax';
  dineIn?: Maybe<Scalars['Float']>;
  takeaway?: Maybe<Scalars['Float']>;
};

export type WorkSession = {
  __typename?: 'WorkSession';
  _id: Scalars['ID'];
  /** Số tiền thanh toán bằng cash */
  cashAmount?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  /** Tạm thời để nullable */
  deviceId?: Maybe<Scalars['String']>;
  lineCorrection?: Maybe<Scalars['Float']>;
  note?: Maybe<Scalars['String']>;
  payIn?: Maybe<Scalars['Float']>;
  payOut?: Maybe<Scalars['Float']>;
  /** Số tiền hoàn */
  refund?: Maybe<Scalars['Float']>;
  report?: Maybe<Report>;
  reportOpenCashBoxNum?: Maybe<Scalars['Int']>;
  reportReceiptCopyAmnt?: Maybe<Scalars['Int']>;
  reportReceiptCopyNum?: Maybe<Scalars['Int']>;
  reportReceiptNum?: Maybe<Scalars['Int']>;
  reportReceiptProformaAmnt?: Maybe<Scalars['Float']>;
  reportReceiptProformaNum?: Maybe<Scalars['Int']>;
  reportTrainingAmnt?: Maybe<Scalars['Float']>;
  reportTrainingNum?: Maybe<Scalars['Int']>;
  reportVoidTransAmnt?: Maybe<Scalars['Float']>;
  reportVoidTransNum?: Maybe<Scalars['Int']>;
  resId: Scalars['ID'];
  restaurant?: Maybe<Restaurant>;
  sessionNo: Scalars['Int'];
  startBy?: Maybe<User>;
  startById: Scalars['ID'];
  startDate: Scalars['DateTime'];
  /** Số tiền cho vào khay khi bắt đầu phiên */
  startPrice: Scalars['Float'];
  stopBy?: Maybe<User>;
  stopById?: Maybe<Scalars['ID']>;
  stopDate?: Maybe<Scalars['DateTime']>;
  /** Số tiền trong khay sau khi kết thúc phiên */
  stopPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WorkSessionInfo = {
  __typename?: 'WorkSessionInfo';
  cashAmount: Scalars['Float'];
  payIn: Scalars['Float'];
  payOut: Scalars['Float'];
  refund: Scalars['Float'];
};

export type WorkSessionResponse = {
  __typename?: 'WorkSessionResponse';
  data: Array<WorkSession>;
  total: Scalars['Int'];
};

export type XReport = {
  __typename?: 'XReport';
  categories: Array<CategoryZReport>;
  deviceId: Scalars['String'];
  imageLink: Scalars['String'];
  pathImage: Scalars['String'];
  pathPdf: Scalars['String'];
  paymentInfo: Array<ListPaymentInfo>;
  pdfLink: Scalars['String'];
  totalBankAxept: TotalCashInfo;
  totalCash: TotalCashInfo;
  totalDiscount: TotalCashInfo;
  totalMasterCard: TotalCashInfo;
  totalOther: TotalCashInfo;
  /** Tổng tiền của tất cả giao dịch */
  totalPrice: Scalars['Float'];
  totalReceiptCopies: Scalars['Float'];
  totalRefund: TotalCashInfo;
  totalTax: Scalars['Float'];
  /** Tổng giao dịch */
  totalTransaction: Scalars['Float'];
  totalVipps: TotalCashInfo;
  totalVisa: TotalCashInfo;
  workSessionId: Scalars['ID'];
  workSessionNo: Scalars['Float'];
};

export type XReportSendEmailInput = {
  deviceId: Scalars['String'];
  fromDate?: InputMaybe<Scalars['DateTime']>;
  /** Lis of recipients */
  recipients: Array<Scalars['String']>;
  toDate?: InputMaybe<Scalars['DateTime']>;
};

export type ZReportInfor = {
  __typename?: 'ZReportInfor';
  appVersion?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<CategoryZReport>>;
  deviceId?: Maybe<Scalars['String']>;
  /** Tổng giá trị đơn không thanh toán thành công */
  lineCorrectionAmnt?: Maybe<Scalars['Float']>;
  /** Số lượng đơn không thanh toán thành công */
  lineCorrectionNum?: Maybe<Scalars['Float']>;
  /** Tổng giá trị đơn không thanh toán thành công */
  nonCompletedSaleAmnt?: Maybe<Scalars['Float']>;
  /** Số lượng đơn không thanh toán thành công */
  nonCompletedSaleNum?: Maybe<Scalars['Float']>;
  ordersParkedInfo?: Maybe<TotalCashInfo>;
  ordersPendingInfo?: Maybe<TotalCashInfo>;
  pathImage: Scalars['String'];
  pathPdf: Scalars['String'];
  paymentInfo?: Maybe<Array<ListPaymentInfo>>;
  posDeviceRegisteredData?: Maybe<PosDeviceRegisteredData>;
  reportGrandTotalReturn?: Maybe<Scalars['Float']>;
  reportGrandTotalSales?: Maybe<Scalars['Float']>;
  reportGrandTotalSalesNet?: Maybe<Scalars['Float']>;
  reportPayIns?: Maybe<ReportPayIns>;
  reportPayOuts?: Maybe<ReportPayOuts>;
  sessionNo?: Maybe<Scalars['Int']>;
  totalBankAxept?: Maybe<TotalCashInfo>;
  totalCash?: Maybe<TotalCashInfo>;
  totalDiscount?: Maybe<TotalCashInfo>;
  totalMasterCard?: Maybe<TotalCashInfo>;
  totalOther?: Maybe<TotalCashInfo>;
  /** Tổng tiền của tất cả giao dịch */
  totalPrice?: Maybe<Scalars['Float']>;
  /** Số lượng hoá đơn được in */
  totalReceiptCopies?: Maybe<Scalars['Float']>;
  totalRefund?: Maybe<TotalCashInfo>;
  /** Tổng thuế của tất cả giao dịch */
  totalTax?: Maybe<Scalars['Float']>;
  /** Tổng giao dịch */
  totalTransaction?: Maybe<Scalars['Float']>;
  totalVipps?: Maybe<TotalCashInfo>;
  totalVisa?: Maybe<TotalCashInfo>;
  workSession?: Maybe<WorkSession>;
  workSessionInfo?: Maybe<WorkSessionInfo>;
};

export type ZReportSendEmailInput = {
  deviceId: Scalars['String'];
  /** Lis of recipients */
  recipients: Array<Scalars['String']>;
  workSessionId: Scalars['String'];
};

export type CloudPosListOrderInput = {
  deviceId?: InputMaybe<Scalars['String']>;
};

export type CreateBasicGeneralSettingInput = {
  type: SettingType;
  value: Scalars['String'];
};

export type CreateOrUpdatePermission = {
  feature?: InputMaybe<Array<PermissionFeature>>;
  type: PermissionType;
};

export type CreateOrUpdatePermissionInput = {
  permissions: Array<CreateOrUpdatePermission>;
};

export type CreateOrUpdateReceiptSettingInput = {
  receipt: ReceiptLayoutSettingInput;
  type: SettingType;
};

export type CreateOrderPos = {
  amount?: InputMaybe<Scalars['Float']>;
  clientSystem?: InputMaybe<ClientSystem>;
  code?: InputMaybe<Scalars['String']>;
  customFoods?: InputMaybe<Array<OrderCustomFoodInput>>;
  customerId?: InputMaybe<Scalars['ID']>;
  /** Bắt buộc gửi deviceId lên để sau này check report, tạm thời để nullable */
  deviceId?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<DiscountInput>;
  foods?: InputMaybe<Array<OrderFoodDataInput>>;
  fullName?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  paymentStatus?: InputMaybe<PaymentStatus>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<OrderStatus>;
  tableId?: InputMaybe<Scalars['String']>;
  taxType?: InputMaybe<TaxType>;
  /** Bắt buộc gửi workSessionId lên để sau này check report, tạm thời để nullable */
  workSessionId?: InputMaybe<Scalars['ID']>;
};

export type CreatePeakHourInput = {
  /** Day */
  day?: InputMaybe<DayType>;
  /** EndDate close */
  endDate: Scalars['DateTime'];
  /** disable/enable this setting */
  isOpen?: InputMaybe<Scalars['Boolean']>;
  /** Preparation time for setting business hour ( normal hour/ peak hour) */
  preparing_time?: InputMaybe<Scalars['String']>;
  /** StartDate close */
  startDate: Scalars['DateTime'];
};

export type FoodsCatInput = {
  catId?: InputMaybe<Scalars['String']>;
  catSlug?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
  resId: Scalars['ID'];
};

export type FoodsCategoryRes = {
  __typename?: 'foodsCategoryRes';
  category: Category;
  foods: Array<FoodDto>;
};

export type SumUpTerminalToken = {
  __typename?: 'sumUpTerminalToken';
  access_token: Scalars['String'];
  expires_in: Scalars['Float'];
  scope: Scalars['String'];
  token_type: Scalars['String'];
};

export type UpdateOrderInput = {
  customPreparationTime?: InputMaybe<Scalars['Float']>;
  /** Set null to remove it from this order */
  customerId?: InputMaybe<Scalars['String']>;
  dateTimeCompleted?: InputMaybe<Scalars['DateTime']>;
  note?: InputMaybe<Scalars['String']>;
  orderId: Scalars['String'];
  postpaidComment?: InputMaybe<Scalars['String']>;
  preparationTime?: InputMaybe<PreparationTime>;
  status?: InputMaybe<OrderStatus>;
  /** Set null to remove it from this order */
  tableId?: InputMaybe<Scalars['String']>;
};

export type UpsertBasicGeneralSettingsInput = {
  settingsData: Array<CreateBasicGeneralSettingInput>;
};

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'JWT';
    token: string;
    expiresAt: string;
    refreshToken: string;
    refreshTokenExpiresAt: string;
    jwtPayload: {
      __typename?: 'JwtTokenPayload';
      _id: string;
      user: {
        __typename?: 'User';
        _id: string;
        fullName: string;
        isSuperAdmin?: boolean | null;
        isManager?: boolean | null;
        username: string;
        permission?: {
          __typename?: 'Permission';
          _id: string;
          feature?: Array<PermissionFeature> | null;
          type?: PermissionType | null;
        } | null;
        avatar?: {
          __typename?: 'Media';
          _id?: string | null;
          thumbnail: string;
        } | null;
      };
    };
  };
};

export type RefreshTokenMutationVariables = Exact<{
  refreshTokenInput: RefreshTokenInput;
}>;

export type RefreshTokenMutation = {
  __typename?: 'Mutation';
  refreshToken: {
    __typename?: 'JWT';
    token: string;
    expiresAt: string;
    refreshToken: string;
    refreshTokenExpiresAt: string;
    jwtPayload: {
      __typename?: 'JwtTokenPayload';
      _id: string;
      user: {
        __typename?: 'User';
        _id: string;
        fullName: string;
        isSuperAdmin?: boolean | null;
        isManager?: boolean | null;
        username: string;
        permission?: {
          __typename?: 'Permission';
          _id: string;
          feature?: Array<PermissionFeature> | null;
          type?: PermissionType | null;
        } | null;
        avatar?: {
          __typename?: 'Media';
          _id?: string | null;
          thumbnail: string;
        } | null;
      };
    };
  };
};

export type CheckSuperAdminMutationVariables = Exact<{
  isSuperAdminInput: IsSuperAdminInput;
}>;

export type CheckSuperAdminMutation = {
  __typename?: 'Mutation';
  isSuperAmin: boolean;
};

export type LoginRestaurantAdminMutationVariables = Exact<{
  loginInput: LoginUserInput;
}>;

export type LoginRestaurantAdminMutation = {
  __typename?: 'Mutation';
  loginRestaurantAdmin: {
    __typename?: 'JWT';
    token: string;
    expiresAt: string;
    refreshToken: string;
    refreshTokenExpiresAt: string;
    jwtPayload: {
      __typename?: 'JwtTokenPayload';
      _id: string;
      user: {
        __typename?: 'User';
        _id: string;
        fullName: string;
        isSuperAdmin?: boolean | null;
        isManager?: boolean | null;
        username: string;
        permission?: {
          __typename?: 'Permission';
          _id: string;
          feature?: Array<PermissionFeature> | null;
          type?: PermissionType | null;
        } | null;
        avatar?: {
          __typename?: 'Media';
          _id?: string | null;
          thumbnail: string;
        } | null;
      };
    };
  };
};

export type MeQueryVariables = Exact<{[key: string]: never}>;

export type MeQuery = {
  __typename?: 'Query';
  me: {
    __typename?: 'UserDto';
    _id: string;
    username: string;
    address?: string | null;
    createdAt: any;
    deletedAt?: any | null;
    fullName: string;
    phoneNumber?: string | null;
    avatarId?: string | null;
    resid?: string | null;
    type?: UserType | null;
    avatar?: {
      __typename?: 'Media';
      _id?: string | null;
      thumbnail: string;
    } | null;
    permission?: {
      __typename?: 'Permission';
      _id: string;
      createdAt: any;
      feature?: Array<PermissionFeature> | null;
      resid: string;
      type?: PermissionType | null;
      updatedAt?: any | null;
    } | null;
  };
};

export type GetRestaurantQueryVariables = Exact<{[key: string]: never}>;

export type GetRestaurantQuery = {
  __typename?: 'Query';
  restaurantsClient: Array<{
    __typename?: 'Restaurant';
    _id: string;
    name: string;
    domain: string;
    isTest?: boolean | null;
    address?: string | null;
    media?: {__typename?: 'Media'; url: string; thumbnail: string} | null;
    settings?: Array<{
      __typename?: 'Settings';
      _id: string;
      value?: string | null;
      resid: string;
      type: SettingType;
      startDate?: any | null;
      endDate?: any | null;
      distanceStart?: number | null;
      distanceEnd?: number | null;
      priceDistance?: number | null;
      title?: string | null;
      titleVi?: string | null;
      titleNor?: string | null;
      day?: DayType | null;
      isOpen?: boolean | null;
      timeClose?: string | null;
      timeOpen?: string | null;
      tax?: {
        __typename?: 'TaxRestaurantRes';
        taxIn?: number | null;
        taxOut?: number | null;
        taxDelivery?: number | null;
      } | null;
    }> | null;
  }>;
};

export type ValidateTerminalQueryVariables = Exact<{
  terminalInput: TerminalInput;
}>;

export type ValidateTerminalQuery = {
  __typename?: 'Query';
  validateTerminal: boolean;
};

export type JwtModelFragment = {
  __typename?: 'JWT';
  token: string;
  expiresAt: string;
  refreshToken: string;
  refreshTokenExpiresAt: string;
  jwtPayload: {
    __typename?: 'JwtTokenPayload';
    _id: string;
    user: {
      __typename?: 'User';
      _id: string;
      fullName: string;
      isSuperAdmin?: boolean | null;
      isManager?: boolean | null;
      username: string;
      permission?: {
        __typename?: 'Permission';
        _id: string;
        feature?: Array<PermissionFeature> | null;
        type?: PermissionType | null;
      } | null;
      avatar?: {
        __typename?: 'Media';
        _id?: string | null;
        thumbnail: string;
      } | null;
    };
  };
};

export type UserModelFragment = {
  __typename?: 'User';
  _id: string;
  username: string;
  fullName: string;
  address?: string | null;
  type?: UserType | null;
  phoneNumber?: string | null;
  createdAt: any;
  updatedAt?: any | null;
};

export type UserDtoModelFragment = {
  __typename?: 'UserDto';
  _id: string;
  username: string;
  address?: string | null;
  createdAt: any;
  deletedAt?: any | null;
  fullName: string;
  phoneNumber?: string | null;
  avatarId?: string | null;
  resid?: string | null;
  type?: UserType | null;
  avatar?: {
    __typename?: 'Media';
    _id?: string | null;
    thumbnail: string;
  } | null;
  permission?: {
    __typename?: 'Permission';
    _id: string;
    createdAt: any;
    feature?: Array<PermissionFeature> | null;
    resid: string;
    type?: PermissionType | null;
    updatedAt?: any | null;
  } | null;
};

export const JwtModelFragmentDoc = `
    fragment JWTModel on JWT {
  token
  expiresAt
  refreshToken
  refreshTokenExpiresAt
  jwtPayload {
    _id
    user {
      _id
      fullName
      isSuperAdmin
      isManager
      permission {
        _id
        feature
        type
      }
      username
      avatar {
        _id
        thumbnail
      }
    }
  }
}
    `;
export const UserModelFragmentDoc = `
    fragment UserModel on User {
  _id
  username
  fullName
  address
  type
  phoneNumber
  createdAt
  updatedAt
}
    `;
export const UserDtoModelFragmentDoc = `
    fragment UserDtoModel on UserDto {
  _id
  username
  address
  createdAt
  deletedAt
  fullName
  phoneNumber
  avatar {
    _id
    thumbnail
  }
  avatarId
  resid
  type
  avatar {
    _id
    thumbnail
  }
  permission {
    _id
    createdAt
    feature
    resid
    type
    updatedAt
  }
}
    `;
export const LoginDocument = `
    mutation login($input: LoginUserInput!) {
  login(loginInput: $input) {
    ...JWTModel
  }
}
    ${JwtModelFragmentDoc}`;
export const useLoginMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    LoginMutation,
    TError,
    LoginMutationVariables,
    TContext
  >,
) =>
  useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
    ['login'],
    (variables?: LoginMutationVariables) =>
      fetcher<LoginMutation, LoginMutationVariables>(
        LoginDocument,
        variables,
      )(),
    options,
  );
useLoginMutation.getKey = () => ['login'];

useLoginMutation.fetcher = (
  variables: LoginMutationVariables,
  options?: RequestInit['headers'],
) =>
  fetcher<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    variables,
    options,
  );
export const RefreshTokenDocument = `
    mutation refreshToken($refreshTokenInput: RefreshTokenInput!) {
  refreshToken(refreshTokenInput: $refreshTokenInput) {
    ...JWTModel
  }
}
    ${JwtModelFragmentDoc}`;
export const useRefreshTokenMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    RefreshTokenMutation,
    TError,
    RefreshTokenMutationVariables,
    TContext
  >,
) =>
  useMutation<
    RefreshTokenMutation,
    TError,
    RefreshTokenMutationVariables,
    TContext
  >(
    ['refreshToken'],
    (variables?: RefreshTokenMutationVariables) =>
      fetcher<RefreshTokenMutation, RefreshTokenMutationVariables>(
        RefreshTokenDocument,
        variables,
      )(),
    options,
  );
useRefreshTokenMutation.getKey = () => ['refreshToken'];

useRefreshTokenMutation.fetcher = (
  variables: RefreshTokenMutationVariables,
  options?: RequestInit['headers'],
) =>
  fetcher<RefreshTokenMutation, RefreshTokenMutationVariables>(
    RefreshTokenDocument,
    variables,
    options,
  );
export const CheckSuperAdminDocument = `
    mutation checkSuperAdmin($isSuperAdminInput: IsSuperAdminInput!) {
  isSuperAmin(isSuperAdminInput: $isSuperAdminInput)
}
    `;
export const useCheckSuperAdminMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    CheckSuperAdminMutation,
    TError,
    CheckSuperAdminMutationVariables,
    TContext
  >,
) =>
  useMutation<
    CheckSuperAdminMutation,
    TError,
    CheckSuperAdminMutationVariables,
    TContext
  >(
    ['checkSuperAdmin'],
    (variables?: CheckSuperAdminMutationVariables) =>
      fetcher<CheckSuperAdminMutation, CheckSuperAdminMutationVariables>(
        CheckSuperAdminDocument,
        variables,
      )(),
    options,
  );
useCheckSuperAdminMutation.getKey = () => ['checkSuperAdmin'];

useCheckSuperAdminMutation.fetcher = (
  variables: CheckSuperAdminMutationVariables,
  options?: RequestInit['headers'],
) =>
  fetcher<CheckSuperAdminMutation, CheckSuperAdminMutationVariables>(
    CheckSuperAdminDocument,
    variables,
    options,
  );
export const LoginRestaurantAdminDocument = `
    mutation loginRestaurantAdmin($loginInput: LoginUserInput!) {
  loginRestaurantAdmin(loginInput: $loginInput) {
    ...JWTModel
  }
}
    ${JwtModelFragmentDoc}`;
export const useLoginRestaurantAdminMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    LoginRestaurantAdminMutation,
    TError,
    LoginRestaurantAdminMutationVariables,
    TContext
  >,
) =>
  useMutation<
    LoginRestaurantAdminMutation,
    TError,
    LoginRestaurantAdminMutationVariables,
    TContext
  >(
    ['loginRestaurantAdmin'],
    (variables?: LoginRestaurantAdminMutationVariables) =>
      fetcher<
        LoginRestaurantAdminMutation,
        LoginRestaurantAdminMutationVariables
      >(LoginRestaurantAdminDocument, variables)(),
    options,
  );
useLoginRestaurantAdminMutation.getKey = () => ['loginRestaurantAdmin'];

useLoginRestaurantAdminMutation.fetcher = (
  variables: LoginRestaurantAdminMutationVariables,
  options?: RequestInit['headers'],
) =>
  fetcher<LoginRestaurantAdminMutation, LoginRestaurantAdminMutationVariables>(
    LoginRestaurantAdminDocument,
    variables,
    options,
  );
export const MeDocument = `
    query me {
  me {
    ...UserDtoModel
  }
}
    ${UserDtoModelFragmentDoc}`;
export const useMeQuery = <TData = MeQuery, TError = unknown>(
  variables?: MeQueryVariables,
  options?: UseQueryOptions<MeQuery, TError, TData>,
) =>
  useQuery<MeQuery, TError, TData>(
    variables === undefined ? ['me'] : ['me', variables],
    fetcher<MeQuery, MeQueryVariables>(MeDocument, variables),
    options,
  );

useMeQuery.getKey = (variables?: MeQueryVariables) =>
  variables === undefined ? ['me'] : ['me', variables];
useMeQuery.fetcher = (
  variables?: MeQueryVariables,
  options?: RequestInit['headers'],
) => fetcher<MeQuery, MeQueryVariables>(MeDocument, variables, options);
export const GetRestaurantDocument = `
    query GetRestaurant {
  restaurantsClient {
    _id
    name
    domain
    isTest
    address
    media {
      url
      thumbnail
    }
    settings {
      _id
      value
      resid
      type
      startDate
      endDate
      distanceStart
      distanceEnd
      priceDistance
      title
      tax {
        taxIn
        taxOut
        taxDelivery
      }
      titleVi
      titleNor
      day
      isOpen
      timeClose
      timeOpen
    }
  }
}
    `;
export const useGetRestaurantQuery = <
  TData = GetRestaurantQuery,
  TError = unknown,
>(
  variables?: GetRestaurantQueryVariables,
  options?: UseQueryOptions<GetRestaurantQuery, TError, TData>,
) =>
  useQuery<GetRestaurantQuery, TError, TData>(
    variables === undefined ? ['GetRestaurant'] : ['GetRestaurant', variables],
    fetcher<GetRestaurantQuery, GetRestaurantQueryVariables>(
      GetRestaurantDocument,
      variables,
    ),
    options,
  );

useGetRestaurantQuery.getKey = (variables?: GetRestaurantQueryVariables) =>
  variables === undefined ? ['GetRestaurant'] : ['GetRestaurant', variables];
useGetRestaurantQuery.fetcher = (
  variables?: GetRestaurantQueryVariables,
  options?: RequestInit['headers'],
) =>
  fetcher<GetRestaurantQuery, GetRestaurantQueryVariables>(
    GetRestaurantDocument,
    variables,
    options,
  );
export const ValidateTerminalDocument = `
    query ValidateTerminal($terminalInput: TerminalInput!) {
  validateTerminal(terminalInput: $terminalInput)
}
    `;
export const useValidateTerminalQuery = <
  TData = ValidateTerminalQuery,
  TError = unknown,
>(
  variables: ValidateTerminalQueryVariables,
  options?: UseQueryOptions<ValidateTerminalQuery, TError, TData>,
) =>
  useQuery<ValidateTerminalQuery, TError, TData>(
    ['ValidateTerminal', variables],
    fetcher<ValidateTerminalQuery, ValidateTerminalQueryVariables>(
      ValidateTerminalDocument,
      variables,
    ),
    options,
  );

useValidateTerminalQuery.getKey = (
  variables: ValidateTerminalQueryVariables,
) => ['ValidateTerminal', variables];
useValidateTerminalQuery.fetcher = (
  variables: ValidateTerminalQueryVariables,
  options?: RequestInit['headers'],
) =>
  fetcher<ValidateTerminalQuery, ValidateTerminalQueryVariables>(
    ValidateTerminalDocument,
    variables,
    options,
  );
