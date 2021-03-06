USE [master]
GO
/****** Object:  Database [Voucherz]    Script Date: 2/8/2019 5:15:09 PM ******/
CREATE DATABASE [Voucherz]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Voucherz', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLSERVER2014\MSSQL\DATA\Voucherz.mdf' , SIZE = 4096KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'Voucherz_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLSERVER2014\MSSQL\DATA\Voucherz_log.ldf' , SIZE = 1280KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [Voucherz] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Voucherz].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Voucherz] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Voucherz] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Voucherz] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Voucherz] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Voucherz] SET ARITHABORT OFF 
GO
ALTER DATABASE [Voucherz] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [Voucherz] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Voucherz] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Voucherz] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Voucherz] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Voucherz] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Voucherz] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Voucherz] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Voucherz] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Voucherz] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Voucherz] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Voucherz] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Voucherz] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Voucherz] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Voucherz] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Voucherz] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Voucherz] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Voucherz] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Voucherz] SET  MULTI_USER 
GO
ALTER DATABASE [Voucherz] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Voucherz] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Voucherz] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Voucherz] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [Voucherz] SET DELAYED_DURABILITY = DISABLED 
GO
USE [Voucherz]
GO
/****** Object:  Table [dbo].[appUser]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[appUser](
	[userId] [bigint] IDENTITY(1,1) NOT NULL,
	[username] [varchar](50) NULL,
	[password] [varchar](20) NULL,
	[firstname] [varchar](50) NOT NULL,
	[lastname] [varchar](50) NOT NULL,
	[email] [varchar](100) NOT NULL,
	[mobileNo] [varchar](15) NULL,
	[isEnabled] [bit] NOT NULL DEFAULT ((0)),
PRIMARY KEY CLUSTERED 
(
	[userId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[ConfirmationToken]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ConfirmationToken](
	[tokenId] [bigint] IDENTITY(1,1) NOT NULL,
	[createdDate] [date] NULL,
	[confirmationToken] [varchar](100) NULL,
	[expiryDate] [date] NOT NULL,
	[Id] [bigint] NULL
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Persistent_Logins]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Persistent_Logins](
	[series] [varchar](100) NOT NULL,
	[email] [varchar](100) NOT NULL,
	[token] [varchar](64) NOT NULL,
	[last_used] [datetime] NOT NULL,
 CONSTRAINT [PK__Persiste__617851A6B2891D1F] PRIMARY KEY CLUSTERED 
(
	[series] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[REDEMPTION]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[REDEMPTION](
	[Id] [int] NOT NULL,
	[Redemption_Qty] [int] NOT NULL,
	[Redemption_Date] [datetime] NOT NULL,
	[Status] [bit] NOT NULL,
	[Voucher_Id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Role]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Role](
	[role_Id] [int] IDENTITY(1,1) NOT NULL,
	[role_name] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[role_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Spring_Session]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Spring_Session](
	[sessionId] [bigint] IDENTITY(1,1) NOT NULL,
	[creationTime] [bigint] NOT NULL,
	[lastAccessTime] [bigint] NOT NULL,
	[maxInactiveInterval] [int] NOT NULL,
	[expiryTime] [bigint] NOT NULL,
	[principalName] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[sessionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[User_Role]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User_Role](
	[user_roleId] [int] IDENTITY(1,1) NOT NULL,
	[role_Id] [int] NOT NULL,
	[userId] [bigint] NULL,
 CONSTRAINT [PK__User_Rol__BE81420E9F309C89] PRIMARY KEY CLUSTERED 
(
	[user_roleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[VerificationToken]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[VerificationToken](
	[tokenId] [bigint] IDENTITY(1,1) NOT NULL,
	[createdDate] [date] NULL,
	[confirmationToken] [varchar](100) NULL,
	[expiryDate] [date] NOT NULL,
	[userId] [bigint] NULL,
 CONSTRAINT [PK_VerificationToken] PRIMARY KEY CLUSTERED 
(
	[tokenId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Voucher]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Voucher](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[code] [varchar](50) NOT NULL,
	[voucherTypeId] [int] NOT NULL,
	[category] [varchar](100) NULL,
	[Start_Date] [date] NOT NULL,
	[Expiry_Date] [date] NOT NULL,
	[prefix] [varchar](3) NULL,
	[suffix] [varchar](3) NULL,
	[length] [int] NOT NULL,
	[charset] [varchar](50) NOT NULL,
	[status] [varchar](50) NOT NULL CONSTRAINT [DF__Voucher__status__00DF2177]  DEFAULT ('Active'),
	[AdditionalInfo] [varchar](max) NULL,
	[codeValue] [decimal](18, 0) NOT NULL,
	[AttributeId] [int] NOT NULL,
	[email] [varchar](50) NULL,
 CONSTRAINT [PK_Voucher] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [UQ__Voucher__357D4CF9DC3E1137] UNIQUE NONCLUSTERED 
(
	[code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Voucher_Attribute]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Voucher_Attribute](
	[AttributeId] [int] IDENTITY(1,1) NOT NULL,
	[attributeDescription] [varchar](50) NOT NULL,
	[created_Date] [date] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[AttributeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[VoucherType]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[VoucherType](
	[voucherTypeId] [int] IDENTITY(1,1) NOT NULL,
	[typeDescription] [varchar](50) NOT NULL,
	[createdDate] [date] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[voucherTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  View [dbo].[UserManagementV]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

  CREATE View [dbo].[UserManagementV]
  AS
  SELECT U.firstName + ' '+ U.lastName AS Username, email, mobileNo, Us.user_role FROM Users U
  JOIN User_Role Us ON U.Id = Us.Id 

GO
ALTER TABLE [dbo].[User_Role]  WITH CHECK ADD  CONSTRAINT [FK__User_Role__role___3864608B] FOREIGN KEY([role_Id])
REFERENCES [dbo].[Role] ([role_Id])
GO
ALTER TABLE [dbo].[User_Role] CHECK CONSTRAINT [FK__User_Role__role___3864608B]
GO
ALTER TABLE [dbo].[User_Role]  WITH CHECK ADD FOREIGN KEY([userId])
REFERENCES [dbo].[appUser] ([userId])
GO
ALTER TABLE [dbo].[VerificationToken]  WITH CHECK ADD FOREIGN KEY([userId])
REFERENCES [dbo].[appUser] ([userId])
GO
ALTER TABLE [dbo].[VerificationToken]  WITH CHECK ADD FOREIGN KEY([userId])
REFERENCES [dbo].[appUser] ([userId])
GO
ALTER TABLE [dbo].[VerificationToken]  WITH CHECK ADD FOREIGN KEY([userId])
REFERENCES [dbo].[appUser] ([userId])
GO
/****** Object:  StoredProcedure [dbo].[usp_appCreateUsers]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE [dbo].[usp_appCreateUsers]
@userId bigint NULL OUTPUT,
@username varchar(50),
@firstname varchar(50),
@lastname varchar(50),
@email varchar(50),
@password varchar(max),
@mobileNo varchar(15),
@isEnabled bit
AS
BEGIN
	INSERT INTO appUser(username, firstname, lastname, email, [Password], mobileNo,isEnabled)
	VALUES(@username,@firstname, @lastname, @email, @password, @mobileNo,@isEnabled)

	SELECT @userId = SCOPE_IDENTITY()
END


GO
/****** Object:  StoredProcedure [dbo].[usp_createConfirmationToken]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[usp_createConfirmationToken]
@tokenId int NULL OUTPUT,
@createdDate Date,
@confirmationToken varchar(50),
@expiryDate Date
AS
DECLARE @Id bigint
BEGIN
	SELECT @Id = max(Id) FROM Users
	INSERT INTO ConfirmationToken(createdDate, confirmationToken, Id, expiryDate)
	VALUES(@createdDate, @confirmationToken, @Id, @expiryDate) 

	UPDATE Users SET [isEnabled] = 1 WHERE Id = @Id


	SELECT @tokenId = SCOPE_IDENTITY()
END


GO
/****** Object:  StoredProcedure [dbo].[usp_createNewVerificationToken]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[usp_createNewVerificationToken]
@tokenId int NULL OUTPUT,
@oldConfirmationToken varchar(50),
@newConfirmationToken varchar(50)
AS
DECLARE @userId bigint
BEGIN
	SELECT @oldConfirmationToken = confirmationToken FROM VerificationToken WHERE UserId = @userId
	 

	UPDATE VerificationToken SET confirmationToken = @newConfirmationToken WHERE userId = @userId

	SELECT @tokenId = SCOPE_IDENTITY()
END


GO
/****** Object:  StoredProcedure [dbo].[usp_createVerificationToken]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[usp_createVerificationToken]
@tokenId int NULL OUTPUT,
@createdDate Date = getDate,
@confirmationToken varchar(50),
@expiryDate Date
AS
DECLARE @userId bigint
BEGIN
	SELECT @userId = max(userId) FROM appUser
	INSERT INTO verificationToken(createdDate, confirmationToken, userId, expiryDate)
	VALUES(@createdDate, @confirmationToken, @userId, @expiryDate) 

	--UPDATE Users SET [isEnabled] = 1 WHERE Id = @Id

	SELECT @tokenId = SCOPE_IDENTITY()
END


GO
/****** Object:  StoredProcedure [dbo].[usp_createVoucher]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




CREATE PROCEDURE [dbo].[usp_createVoucher]
@code varchar(50), 
@voucherType varchar(50),
@category varchar(100),
@startDate Date,
@expiryDate Date,
@prefix varchar(3),
@suffix varchar(3), 
@length int, 
@charset varchar(50),
@codeValue decimal = NULL,
@additionalInfo varchar(max),
@attributeDescription varchar(50),
@email varchar(50)
--@email varchar(50)
AS
DECLARE @Id int = NULL 
DECLARE @AttributeId int = NULL
DECLARE @voucherTypeId int = NULL
DECLARE @status varchar(50) 
--DECLARE @Id int = NULL

BEGIN
	SET @status = 'Active'
	IF(@attributeDescription IS NULL)
	BEGIN
		SET @attributeDescription = 'Default'
	END
	SELECT @AttributeId = AttributeId FROM Voucher_Attribute WHERE attributeDescription = @attributeDescription
	SELECT @voucherTypeId = voucherTypeId FROM VoucherType WHERE typeDescription = @voucherType
	--SELECT @Id = Id FROM Users WHERE email = @email

	INSERT INTO Voucher(code,Category,[Start_Date], [Expiry_Date],prefix,suffix,[length],
	charset,[status], AdditionalInfo,codeValue, AttributeId,voucherTypeId, email)
	VALUES(@code,@category, @startDate, @expiryDate, @prefix,@suffix,@length,@charset,@status,
	@additionalInfo, @codeValue,@AttributeId,@voucherTypeId, @email)

	SELECT @Id = SCOPE_IDENTITY()
END





GO
/****** Object:  StoredProcedure [dbo].[usp_findAllMerchant]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE [dbo].[usp_findAllMerchant]
AS
	SET NOCOUNT ON
BEGIN
	SELECT * FROM Users
	RETURN @@Error
END


GO
/****** Object:  StoredProcedure [dbo].[usp_findByConfirmationToken]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE [dbo].[usp_findByConfirmationToken]
@confirmationToken varchar(100)
AS
	SET NOCOUNT ON
	DECLARE @Id bigint = NULL
BEGIN
	SELECT @confirmationToken = confirmationToken FROM ConfirmationToken WHERE @Id = Id
	--SELECT * FROM ConfirmationToken Where confirmationToken = @confirmationToken
	RETURN @@Error
END


GO
/****** Object:  StoredProcedure [dbo].[usp_findByToken]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE [dbo].[usp_findByToken]
@confirmationToken varchar(100)
AS
	SET NOCOUNT ON
	DECLARE @userId bigint = NULL
BEGIN
	SELECT @confirmationToken = confirmationToken FROM VerificationToken WHERE @userId = userId
	--SELECT * FROM ConfirmationToken Where confirmationToken = @confirmationToken
	RETURN @@Error
END



GO
/****** Object:  StoredProcedure [dbo].[usp_findByUser]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE [dbo].[usp_findByUser]
@userId bigint
AS
	SET NOCOUNT ON
BEGIN
	SELECT * FROM VerificationToken WHERE @userId = userId
	RETURN @@Error
END



GO
/****** Object:  StoredProcedure [dbo].[usp_findMerchant]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[usp_findMerchant]
@Id BIGINT
AS
	SET NOCOUNT ON
BEGIN
	SELECT * FROM Users WHERE Id = @Id
	RETURN @@Error
END

GO
/****** Object:  StoredProcedure [dbo].[usp_findMerchantByEmail]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[usp_findMerchantByEmail]
@email varchar(50)
AS
	SET NOCOUNT ON
BEGIN
	SELECT * FROM Users Where email = @email
	RETURN @@Error
END

GO
/****** Object:  StoredProcedure [dbo].[usp_findPassword]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO





CREATE PROCEDURE [dbo].[usp_findPassword]
@email varchar(50),
@password varchar(max) OUT
AS
	SET NOCOUNT ON
BEGIN
	 SELECT @password = [Password] FROM Users WHERE email = @email
	RETURN @@Error
END




GO
/****** Object:  StoredProcedure [dbo].[usp_getVerificationToken]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE [dbo].[usp_getVerificationToken]
@tokenId int NULL OUTPUT,
@createdDate Date = getDate,
@confirmationToken varchar(50),
@expiryDate Date
AS
DECLARE @userId bigint
BEGIN
	SELECT @userId = max(userId) FROM appUser
	INSERT INTO verificationToken(createdDate, confirmationToken, userId, expiryDate)
	VALUES(@createdDate, @confirmationToken, @userId, @expiryDate) 

	SELECT confirmationToken FROM VerificationToken WHERE userId = @userId

	SELECT @tokenId = SCOPE_IDENTITY()
END




GO
/****** Object:  StoredProcedure [dbo].[usp_retriveAllVoucher]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[usp_retriveAllVoucher]


AS
BEGIN
	SELECT Id, code, VT.typeDescription AS VoucherType, category,[Start_Date],[Expiry_Date],prefix,suffix, [length],
	charset,codeValue,AdditionalInfo, VA.attributeDescription
	 FROM Voucher VC
	 LEFT JOIN VoucherType VT ON VT.voucherTypeId = VC.voucherTypeId
	 LEFT JOIN Voucher_Attribute VA ON VA.AttributeId = VC.AttributeId 
END



GO
/****** Object:  StoredProcedure [dbo].[usp_retriveRedeemedVoucher]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[usp_retriveRedeemedVoucher]


AS
BEGIN
	SELECT * FROM Voucher WHERE Status = 'Redeemed'
END



GO
/****** Object:  StoredProcedure [dbo].[usp_retriveVoucher]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[usp_retriveVoucher]
@Id bigint

AS
BEGIN
	SELECT Id, code,VT.typeDescription AS VoucherType, category,[Start_Date],[Expiry_Date], prefix, suffix, [length], charset, [status], AdditionalInfo,codeValue,VA.attributeDescription 
	FROM Voucher VC 
	LEFT JOIN VoucherType VT ON VC.voucherTypeId = VT.voucherTypeId
	LEFT JOIN Voucher_Attribute VA ON VA.AttributeId = VC.AttributeId 
	WHERE VC.Id = @Id
	
END





	


GO
/****** Object:  StoredProcedure [dbo].[usp_retriveVoucherByCode]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[usp_retriveVoucherByCode]
@code varchar(50)

AS
Begin
	SELECT code,VT.typeDescription AS VoucherType, category,[Start_Date],[Expiry_Date], [status], AdditionalInfo,codeValue,VA.attributeDescription 
	FROM Voucher VC 
	LEFT JOIN VoucherType VT ON VC.voucherTypeId = VT.voucherTypeID
	LEFT JOIN Voucher_Attribute VA ON VA.AttributeId = VC.AttributeId 
	WHERE code = @code
End

GO
/****** Object:  StoredProcedure [dbo].[usp_retriveVoucherByDate]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[usp_retriveVoucherByDate]
@startDate date

AS
BEGIN
	SELECT * FROM Voucher WHERE [Start_Date] = @startDate
END





GO
/****** Object:  StoredProcedure [dbo].[usp_retriveVoucherByMerchant]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[usp_retriveVoucherByMerchant]
@email varchar(50)
AS
BEGIN
	SELECT * FROM Voucher WHERE email = @email 
END



GO
/****** Object:  StoredProcedure [dbo].[usp_retriveVoucherByType]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[usp_retriveVoucherByType]
@voucherTypeId int


AS
BEGIN
	SELECT code,VT.typeDescription AS VoucherType, category,[Start_Date],[Expiry_Date], [status], AdditionalInfo,codeValue,VA.attributeDescription 
	FROM Voucher VC 
	LEFT JOIN VoucherType VT ON VC.voucherTypeId = VT.voucherTypeId
	LEFT JOIN Voucher_Attribute VA ON VA.AttributeId = VC.AttributeId 
	WHERE VT.voucherTypeId = @voucherTypeId

END



GO
/****** Object:  StoredProcedure [dbo].[usp_updateToken]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[usp_updateToken]
@userId bigint,
@confirmationToken varchar(50)
AS
Update VerificationToken
SET confirmationToken =@confirmationToken
WHERE @userId = (SELECT userId FROM VerificationToken WHERE confirmationToken = @confirmationToken)

GO
/****** Object:  StoredProcedure [dbo].[usp_updateUsers]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[usp_updateUsers]
@Id BIGINT,
@firstname varchar(50),
@lastname varchar(50),
@email varchar(50),
@password varchar(15),
@mobileNo varchar(15),
@companySize int
AS
	SET NOCOUNT ON
BEGIN
	UPDATE Users SET
		 firstname = @firstname,
		 lastname = @lastname, 
		 email = @email, 
		 [password] = @password, 
		 mobileNo = @mobileNo, 
		 companySize=@companySize
	WHERE Id = @Id

	SELECT @Id = SCOPE_IDENTITY()
	RETURN @@Error
END

GO
/****** Object:  StoredProcedure [dbo].[usp_updateVoucher]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[usp_updateVoucher]
@Id int,
@AdditionalInfo varchar(max),
@start_Date Date,
@expiry_Date date
AS
Update Voucher
SET 
[AdditionalInfo] =@AdditionalInfo, 
[Expiry_Date] = @expiry_Date,
[Start_Date] = @start_Date
WHERE Id = @Id

GO
/****** Object:  StoredProcedure [dbo].[usp_useLogin]    Script Date: 2/8/2019 5:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[usp_useLogin]
	@email varchar(50), 
	@password varchar(max)
	
	
AS
set xact_abort on 

BEGIN

--DECLARE @isEnabled bit = NULL
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT email, [Password],isEnabled FROM Users 
	WHERE email = @email AND
	[password] = @password AND isEnabled = N'True'
END

GO
USE [master]
GO
ALTER DATABASE [Voucherz] SET  READ_WRITE 
GO
