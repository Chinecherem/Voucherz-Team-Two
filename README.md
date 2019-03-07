VOUCHERZ 
Technologies Used:
1. MSSQL: For Database Management
2 .Net Core: Used for the development of Audit Trail service, Redemption Service, Session Management Service
3. SpringBoot: Used to develop the User Management Service, Voucher Management Service
4. Eureka Discovery Service: To register our Services
5. Zuul ApiGateway
6. React: Frontend Design
7. MongoDB: For documenting event in the audit trail

About The Project
The project consist of the following microservices
1. User Management
2. Voucher Management
3. Redemption Management
4. Session Management 
5. AuditTrail Service

The user management service is located within the voucheruser project. Technology used for this project is spring boot and MSSQL. The microservice manages the creation of a user based on their roles, activating the users account and ensuring the user can login and logout out of the application successfully.

Voucher Management service is located in the voucherz folder and this service used the spring boot and MSSQL as its technologies, this microservice allows validated users to be able to create voucher based on their account, view a voucher details and view all the list of vouchees geenerated by their account.

Redemption Management service is located in the folder called redemption this service used the .net core and MSSQL technology. The service redeems all the vouchers which is created by the user and this is done by the Redemption service communicating with the voucher management service to get the voucher which has been created by the user.
