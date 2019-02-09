Technologies Used:
MSSQL: For Database Management
.Net Core: Used for the development of Audit Trail service, Redemption Service, Session Management Service
SpringBoot: Used to develop the User Management Service, Voucher Management Service
Eureka Discovery Service: To register our Services
Zuul ApiGateway
React: Frontend Design
MongoDB: For documenting event in the audit trail

About The Project
The project consis of the following microservices
1. User Management
2. Voucher Management
3. Redemption Management
4. Session Management 
5. AuditTrail Service

The user management service is located within the voucheruser project technology used for this project is spring boot and MSSQL. thia microservice manages the creation of a user based on their roles, activating the users account and ensuring the usee can login and logout out of the application successfully.

Voucher Management service is located in the voucherz folder and this service used the spring boot and MSSQL as its technologies, this microservice allows validated usees to be able to create voucher baswd on their account view a voucher details and view all the list of vouchees geenerated by their account.

Redemption Management service is located in the folder called redemption this service used .net core and MSSQL technology this service redeems all the vouchers which is creayed by the user and this is done by the service communicating with the voucher management service to get the voucher which has been created by the user.
