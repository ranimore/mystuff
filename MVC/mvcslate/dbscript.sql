USE [SlateMaster]
GO
/****** Object:  Table [dbo].[Channel_Slate_details]    Script Date: 16-10-2017 01:16:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Channel_Slate_details](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[SlateID] [nvarchar](50) NULL,
	[ChannelName] [nvarchar](50) NULL,
 CONSTRAINT [PK_Channel_Slate_details] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[City]    Script Date: 16-10-2017 01:16:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[City](
	[City_Code] [nvarchar](10) NOT NULL,
	[City_Name] [nvarchar](50) NULL,
	[State_Code] [nvarchar](2) NULL,
	[Country_Code] [nvarchar](4) NULL,
	[Alias] [nvarchar](10) NULL,
	[CrUId] [nvarchar](10) NULL,
	[CrDate] [datetime] NULL,
	[CrTime] [datetime] NULL,
	[FrzInd] [bit] NOT NULL,
	[UpUId] [nvarchar](10) NULL,
	[UpDate] [datetime] NULL,
	[UpTime] [datetime] NULL,
	[UpPlace] [nvarchar](18) NULL,
	[TextBlock] [nvarchar](8) NULL,
	[PathToText] [nvarchar](8) NULL,
	[STD_Code] [nvarchar](10) NULL,
	[City_Code_No] [int] NULL,
	[TextBlockShort] [nvarchar](20) NULL,
	[TextBlockLong] [nvarchar](20) NULL,
	[PathToImage] [nvarchar](50) NULL,
	[Region_Code] [nvarchar](10) NULL,
	[ClientNotes] [ntext] NULL,
	[OpsNotes] [ntext] NULL,
	[SupplierNotes] [ntext] NULL,
	[Approved] [bit] NULL,
	[Questions] [ntext] NULL,
	[LongNotes] [ntext] NULL,
	[ShortNotes] [ntext] NULL,
	[OurOpinionNotes] [ntext] NULL,
	[SalesTipNotes] [ntext] NULL,
	[FactSheetNotes] [ntext] NULL,
	[AutoInvoiceRemark] [nvarchar](500) NULL,
	[SeqNo] [int] IDENTITY(1,1) NOT NULL,
	[City_Code_Crs] [nvarchar](10) NULL,
	[GMapLat] [float] NULL,
	[GMapLng] [float] NULL,
	[ShowOnWebInd] [bit] NULL,
	[IsHub] [bit] NOT NULL,
	[RegionCode] [nvarchar](10) NULL,
	[DepTaxText] [ntext] NULL,
	[WebPageTitle] [nvarchar](500) NULL,
	[WebsiteImagePathName] [nvarchar](150) NULL,
	[IsCapitalCity] [bit] NOT NULL,
	[CapitalInd] [bit] NOT NULL,
	[City_Code_Linked] [varchar](10) NULL,
	[URLFriendlyName] [nvarchar](500) NULL,
	[IsBoatInd] [bit] NOT NULL,
	[AccommodationLabelOnWeb] [nvarchar](100) NULL,
	[URLFriendlyNameTemp] [varchar](500) NULL,
	[UseGroupNameInd] [bit] NULL,
	[ImagesSourcedInd] [bit] NULL,
	[ImagesSourcedBy] [nvarchar](10) NULL,
	[ImagesSourcedOn] [datetime] NULL,
	[n465x380] [nvarchar](1) NULL,
	[n465x380_ImgCnt] [int] NULL,
	[n1460x640] [nvarchar](1) NULL,
	[n1460x640_ImgCnt] [int] NULL,
	[Email] [nvarchar](150) NULL,
	[Phone] [nvarchar](150) NULL,
	[WebPageLink] [nvarchar](1000) NULL,
	[n620x380] [nvarchar](1) NULL,
	[n620x380_ImgCnt] [int] NULL,
	[GroupName] [nvarchar](50) NULL,
	[SerialNo] [smallint] NULL,
	[City_Code_ISO] [nvarchar](10) NULL,
	[IsCapital] [bit] NOT NULL,
	[Capital] [bit] NOT NULL,
	[WebsiteUrl] [nvarchar](100) NULL,
	[Serial_No] [int] NULL,
	[CityType_Code] [nvarchar](20) NULL,
	[IsBoatCity] [bit] NOT NULL,
	[1460x640] [nvarchar](1) NULL,
	[WebShortText] [nvarchar](1000) NULL,
	[city_name_web] [nvarchar](150) NULL,
	[HotelListHeading] [nvarchar](100) NULL,
	[ThumbnailImagePath] [nvarchar](255) NULL,
	[ThumbnailImageAlt] [nvarchar](100) NULL,
	[MetaDescription] [nvarchar](2000) NULL,
	[MetaKeyword] [nvarchar](2000) NULL,
	[ImageCode] [nvarchar](50) NULL,
	[CMS_ThumbnailImagePath] [nvarchar](250) NULL,
	[TourListHeading] [nvarchar](100) NULL,
	[ApplyToAllRegion] [bit] NULL,
	[IsFeaturedInd] [bit] NULL,
	[RegionListHeader] [nvarchar](100) NULL,
	[SerialNo_Featured] [int] NULL,
	[ShowOnCountryInd] [bit] NULL,
	[ShowOnHotelInd] [bit] NULL,
	[SerialNoOnCountry] [smallint] NULL,
	[SerialNoOnHotel] [smallint] NULL,
	[NameOnWebCountry] [nvarchar](50) NULL,
	[NameOnWebHotel] [nvarchar](50) NULL,
	[NameOnWebItinerary] [nvarchar](50) NULL,
	[InspirationListHeader] [nvarchar](100) NULL,
 CONSTRAINT [PK_City] PRIMARY KEY CLUSTERED 
(
	[City_Code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Country]    Script Date: 16-10-2017 01:16:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Country](
	[Country_Code] [nvarchar](4) NOT NULL,
	[Country_Name] [nvarchar](40) NULL,
	[MinNoOfDays] [smallint] NULL,
	[CrUId] [nvarchar](10) NULL,
	[CrDate] [datetime] NULL,
	[CrTime] [datetime] NULL,
	[FrzInd] [bit] NOT NULL,
	[UpUId] [nvarchar](10) NULL,
	[UpDate] [datetime] NULL,
	[UpTime] [datetime] NULL,
	[UpPlace] [nvarchar](18) NULL,
	[ISD_Code] [nvarchar](10) NULL,
	[Telex_Code] [nvarchar](10) NULL,
	[MinGrpVisaSize] [smallint] NULL,
	[PassValidMonth] [smallint] NULL,
	[Interest_Short_Code] [nvarchar](4) NULL,
	[TextBlockLong] [nvarchar](20) NULL,
	[TextBlockShort] [nvarchar](20) NULL,
	[PathToImage] [nvarchar](50) NULL,
	[ManagerUId] [nvarchar](10) NULL,
	[LongNotes] [ntext] NULL,
	[ShortNotes] [ntext] NULL,
	[OurOpinionNotes] [ntext] NULL,
	[SalesTipNotes] [ntext] NULL,
	[FactSheetNotes] [ntext] NULL,
	[PassportBeforeTime] [nvarchar](10) NULL,
	[AutoInvoiceRemark] [ntext] NULL,
	[SeqNo] [int] IDENTITY(1,1) NOT NULL,
	[VisaNotes] [ntext] NULL,
	[CheckinLetterDocName] [nvarchar](20) NULL,
	[CheckinLetterDocRank] [int] NULL,
	[OccupationMandatoryForVisa] [bit] NOT NULL,
	[TimeDiffToGMT] [nvarchar](6) NULL,
	[ISOCode] [nvarchar](5) NULL,
	[WebsitePageCode] [nvarchar](50) NULL,
	[ShowOnWebInd] [bit] NULL,
	[Interest_Short_Code_Web] [nvarchar](50) NULL,
	[DepTaxText] [ntext] NULL,
	[WebPageTitle] [nvarchar](500) NULL,
	[UseRegionOrCityInFIT] [nvarchar](1) NULL,
	[OnSaleInd] [bit] NOT NULL,
	[CheckInLetterDocName_2010] [nvarchar](20) NULL,
	[WebPageTitle_Tours] [nvarchar](500) NULL,
	[WebsiteImagePathName] [nvarchar](150) NULL,
	[ISOName] [nvarchar](150) NULL,
	[TeamName] [varchar](25) NULL,
	[EUInd] [bit] NULL,
	[SellingType] [varchar](10) NOT NULL,
	[SerialNo] [int] NULL,
	[City_Code_Capital] [nvarchar](10) NULL,
	[country_name_web] [varchar](150) NULL,
	[country_name_menu] [varchar](150) NULL,
	[DetailPDFPathName] [varchar](250) NULL,
	[ShowHolidayIdeas1] [bit] NULL,
	[ShowHolidayIdeas2] [bit] NULL,
	[ShowHolidayIdeas3] [bit] NULL,
	[WebsiteToHotelInd] [bit] NULL,
	[URLFriendlyName] [nvarchar](500) NULL,
	[URLFriendlyNameForCountryHolidays] [nvarchar](500) NULL,
	[ShowOnOnlineAddress] [bit] NULL,
	[UseAllBoatTemplate] [bit] NULL,
	[ShowMapInd] [bit] NULL,
	[ShowOnWebGrpEnquiryInd] [bit] NULL,
	[SerialNoOnlineAddress] [int] NULL,
	[ISO3Code] [varchar](3) NULL,
	[ImagesSourcedInd] [bit] NULL,
	[ImagesSourcedBy] [nvarchar](10) NULL,
	[ImagesSourcedOn] [datetime] NULL,
	[n465x380] [nvarchar](1) NULL,
	[n465x380_ImgCnt] [int] NULL,
	[n1460x640] [nvarchar](1) NULL,
	[n1460x640_ImgCnt] [int] NULL,
	[Email] [nvarchar](150) NULL,
	[Phone] [nvarchar](150) NULL,
	[WebPageLink] [nvarchar](1000) NULL,
	[UseGroupNameInd] [bit] NULL,
	[ShowCountryInfoTabsInd] [bit] NULL,
	[WebPageTitle_Interest] [nvarchar](500) NULL,
	[CountryNameForImgPath] [nvarchar](40) NULL,
	[Country_Code_Domicile] [nvarchar](4) NULL,
	[WebShortText] [nvarchar](max) NULL,
	[ThumbnailImagePath] [nvarchar](255) NULL,
	[ThumbnailImageAlt] [nvarchar](100) NULL,
	[AllowExpert] [bit] NULL,
	[MetaDescription] [nvarchar](2000) NULL,
	[MetaKeyword] [nvarchar](2000) NULL,
	[IsDirectToHotelInd] [bit] NULL,
	[AmazonURL] [nvarchar](400) NULL,
	[WebsiteURL] [nvarchar](400) NULL,
	[ImageCode] [nvarchar](50) NULL,
	[CMS_ThumbnailImagePath] [nvarchar](250) NULL,
	[TourListHeading] [nvarchar](100) NULL,
	[CountryExpListHeading] [nvarchar](400) NULL,
	[ApplyToAllRegion] [bit] NULL,
	[IsForthComingInd] [bit] NULL,
	[ExcursionListHeading] [nvarchar](100) NULL,
	[HotelListHeading] [nvarchar](100) NULL,
	[OfferListHeading] [nvarchar](100) NULL,
	[WebPageTitle_Gallery] [nvarchar](500) NULL,
	[MetaDescription_Gallery] [nvarchar](2000) NULL,
	[Metakeyword_Gallery] [nvarchar](2000) NULL,
	[InspirationListHeader] [nvarchar](100) NULL,
	[IsFeaturedInd] [bit] NULL,
	[SerialNo_Featured] [int] NULL,
	[CityListHeader] [nvarchar](100) NULL,
	[GMapLat] [float] NULL,
	[GMapLng] [float] NULL,
 CONSTRAINT [aaaaaCountry_PK] PRIMARY KEY CLUSTERED 
(
	[Country_Code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Hotel]    Script Date: 16-10-2017 01:16:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Hotel](
	[Hotel_Code] [int] NOT NULL,
	[Hotel_Name] [nvarchar](100) NULL,
	[ShortName] [nvarchar](20) NULL,
	[City_Code] [nvarchar](10) NULL,
	[Notes] [ntext] NULL,
	[TextBlockLong] [nvarchar](20) NULL,
	[PathToTextLong] [nvarchar](50) NULL,
	[CrUId] [nvarchar](10) NULL,
	[CrDate] [datetime] NULL,
	[CrTime] [datetime] NULL,
	[FrzInd] [bit] NOT NULL,
	[UpUId] [nvarchar](10) NULL,
	[UpDate] [datetime] NULL,
	[UpTime] [datetime] NULL,
	[UpPlace] [nvarchar](18) NULL,
	[SerialNo] [smallint] NULL,
	[BClass_Code] [nvarchar](4) NULL,
	[CheckIn] [datetime] NULL,
	[CheckOut] [datetime] NULL,
	[Add1] [nvarchar](60) NULL,
	[Add2] [nvarchar](60) NULL,
	[Add3] [nvarchar](60) NULL,
	[City] [nvarchar](50) NULL,
	[State] [nvarchar](50) NULL,
	[Country] [nvarchar](50) NULL,
	[Zip] [nvarchar](10) NULL,
	[AgentInd] [bit] NOT NULL,
	[GroupName] [nvarchar](50) NULL,
	[Keyword] [nvarchar](4) NULL,
	[HostRating] [nvarchar](4) NULL,
	[HotelRating] [nvarchar](4) NULL,
	[HostPref] [nvarchar](10) NULL,
	[TextBlockShort] [nvarchar](20) NULL,
	[PathToTextShort] [nvarchar](50) NULL,
	[PathToImage] [nvarchar](50) NULL,
	[ClientNotes] [ntext] NULL,
	[OpsNotes] [ntext] NULL,
	[SupplierNotes] [ntext] NULL,
	[Approved] [bit] NULL,
	[Questions] [ntext] NULL,
	[LongNotes] [ntext] NULL,
	[ShortNotes] [ntext] NULL,
	[OurOpinionNotes] [ntext] NULL,
	[SalesTipNotes] [ntext] NULL,
	[FactSheetNotes] [ntext] NULL,
	[LastVisitedDate] [datetime] NULL,
	[GMapLat] [float] NULL,
	[GMapLng] [float] NULL,
	[ShowOnWebInd] [bit] NULL,
	[NoOfRooms] [int] NULL,
	[NotesSeason] [ntext] NULL,
	[WebPageTitle] [nvarchar](500) NULL,
	[IsBoatInd] [bit] NULL,
	[MealBasis_Code_Short] [nvarchar](4) NULL,
	[IsFeaturedInd] [bit] NULL,
	[HotelFormatInItinerary] [varchar](50) NULL,
	[URLFriendlyName] [nvarchar](500) NULL,
	[Hotel_Code_Link] [int] NULL,
	[URLFriendlyNameTemp] [varchar](150) NULL,
	[UseForDummyItinerary] [bit] NULL,
	[WebOfferMemo] [varchar](2000) NULL,
	[ShowOfferOnWebInd] [bit] NULL,
	[ShowOfferOnDate] [datetime] NULL,
	[ShowOfferToDate] [datetime] NULL,
	[WebOfferShortText] [varchar](50) NULL,
	[HotelCode] [int] IDENTITY(1,1) NOT NULL,
	[SerialNo_City] [int] NULL,
	[hotel_name_web] [nvarchar](150) NULL,
	[ThumbnailImagePath] [nvarchar](255) NULL,
	[ThumbnailImageAlt] [nvarchar](100) NULL,
	[Email] [nvarchar](150) NULL,
	[Phone] [nvarchar](150) NULL,
	[WebsiteURL] [nvarchar](150) NULL,
	[AccommodationType] [nvarchar](10) NULL,
	[IsRailInd] [bit] NULL,
	[AccommodationCategoryWeb] [nvarchar](10) NULL,
	[SerialNo_Country] [int] NULL,
	[Country_Code] [nvarchar](4) NULL,
	[State_Code] [nvarchar](4) NULL,
	[WebShortText] [nvarchar](max) NULL,
	[CMS_ThumbnailImagePath] [nvarchar](250) NULL,
	[IntroText] [nvarchar](max) NULL,
	[MetaDescription] [nvarchar](2000) NULL,
	[ImageCode] [nvarchar](50) NULL,
	[TagName] [nvarchar](50) NULL,
	[MetaKeyword] [nvarchar](2000) NULL,
	[GuidelinePriceNotes] [nvarchar](250) NULL,
	[SerialNo_Featured] [int] NULL,
 CONSTRAINT [aaaaaHotel_PK] PRIMARY KEY CLUSTERED 
(
	[Hotel_Code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[SlateDetails]    Script Date: 16-10-2017 01:16:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SlateDetails](
	[SlateID] [nvarchar](50) NULL,
	[State] [nvarchar](max) NULL,
	[ClientID] [nvarchar](50) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[SlateDetailsTable]    Script Date: 16-10-2017 01:16:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SlateDetailsTable](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[SlateID] [nvarchar](50) NULL,
	[ClientID] [nvarchar](50) NULL,
	[State] [nvarchar](max) NULL,
	[ChannelName] [nvarchar](50) NULL,
 CONSTRAINT [PK_SlateDetailsTable] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[City] ADD  DEFAULT ((0)) FOR [FrzInd]
GO
ALTER TABLE [dbo].[City] ADD  DEFAULT ((0)) FOR [IsHub]
GO
ALTER TABLE [dbo].[City] ADD  DEFAULT ((0)) FOR [IsCapitalCity]
GO
ALTER TABLE [dbo].[City] ADD  DEFAULT ((0)) FOR [CapitalInd]
GO
ALTER TABLE [dbo].[City] ADD  DEFAULT ((0)) FOR [IsBoatInd]
GO
ALTER TABLE [dbo].[City] ADD  DEFAULT ((0)) FOR [ImagesSourcedInd]
GO
ALTER TABLE [dbo].[City] ADD  DEFAULT ((0)) FOR [SerialNo]
GO
ALTER TABLE [dbo].[City] ADD  DEFAULT ((0)) FOR [IsCapital]
GO
ALTER TABLE [dbo].[City] ADD  DEFAULT ((0)) FOR [Capital]
GO
ALTER TABLE [dbo].[City] ADD  DEFAULT ((0)) FOR [IsBoatCity]
GO
ALTER TABLE [dbo].[City] ADD  DEFAULT ((0)) FOR [ApplyToAllRegion]
GO
ALTER TABLE [dbo].[Country] ADD  DEFAULT ((0)) FOR [MinNoOfDays]
GO
ALTER TABLE [dbo].[Country] ADD  DEFAULT ((0)) FOR [FrzInd]
GO
ALTER TABLE [dbo].[Country] ADD  DEFAULT ((0)) FOR [MinGrpVisaSize]
GO
ALTER TABLE [dbo].[Country] ADD  DEFAULT ('') FOR [AutoInvoiceRemark]
GO
ALTER TABLE [dbo].[Country] ADD  DEFAULT ((0)) FOR [OccupationMandatoryForVisa]
GO
ALTER TABLE [dbo].[Country] ADD  DEFAULT ((1)) FOR [OnSaleInd]
GO
ALTER TABLE [dbo].[Country] ADD  DEFAULT ('BOTTOM') FOR [SellingType]
GO
ALTER TABLE [dbo].[Country] ADD  DEFAULT ((0)) FOR [SerialNo]
GO
ALTER TABLE [dbo].[Country] ADD  DEFAULT ((0)) FOR [ShowOnOnlineAddress]
GO
ALTER TABLE [dbo].[Country] ADD  DEFAULT ((0)) FOR [UseAllBoatTemplate]
GO
ALTER TABLE [dbo].[Country] ADD  DEFAULT ((1)) FOR [ShowMapInd]
GO
ALTER TABLE [dbo].[Country] ADD  DEFAULT ((1)) FOR [ShowOnWebGrpEnquiryInd]
GO
ALTER TABLE [dbo].[Country] ADD  DEFAULT ((1)) FOR [SerialNoOnlineAddress]
GO
ALTER TABLE [dbo].[Country] ADD  DEFAULT ((0)) FOR [ImagesSourcedInd]
GO
ALTER TABLE [dbo].[Country] ADD  DEFAULT ((0)) FOR [AllowExpert]
GO
ALTER TABLE [dbo].[Country] ADD  DEFAULT ((0)) FOR [IsDirectToHotelInd]
GO
ALTER TABLE [dbo].[Country] ADD  DEFAULT ((0)) FOR [ApplyToAllRegion]
GO
ALTER TABLE [dbo].[Hotel] ADD  DEFAULT ((0)) FOR [Hotel_Code]
GO
ALTER TABLE [dbo].[Hotel] ADD  DEFAULT ((0)) FOR [FrzInd]
GO
ALTER TABLE [dbo].[Hotel] ADD  DEFAULT ((0)) FOR [SerialNo]
GO
ALTER TABLE [dbo].[Hotel] ADD  DEFAULT ((0)) FOR [AgentInd]
GO
ALTER TABLE [dbo].[Hotel] ADD  DEFAULT ((1)) FOR [Approved]
GO
ALTER TABLE [dbo].[Hotel] ADD  DEFAULT ((0)) FOR [IsBoatInd]
GO
