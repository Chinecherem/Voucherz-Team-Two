Technologies Used:
MSSQL: For Database Management
.Net Core: Used for the development of Audit Trail service, Redemption Service, Session Management Service
SpringBoot: Used to develop the User Management Service, Voucher Management Service
Eureka Discovery Service: To register our Services
Zuul ApiGateway
React: Frontend Design
MongoDB: For documenting event in the audit trail


About the project 
The Project consist of the following microservice
1. User Management 
2. Voucher Management Service
3. Redemption Service
4. Audit Trail Service 
5. Session Management Service

User Management Service: It manages the creation of account for users of the application. Technology used to develop this service include spring boot and MSSQL.

Voucher Management Service : It manages the creation of vouchers based on the account of the user. This service creates vouchers for users of the application and gives details about the voucher created. Technology used by this service are spring boot and MSSQL

Redemption Service: It redeems vouchers thats created by the voucher management service. Technology used is .net and MSSQL

Audit Trail Service: It keeps a track of all events that has taken place in each of the services. Technology used for this service .net core and MongoDB

Session Management Service: It keep a track on the session of the user. The session management service was created using .net core and MSSQL. 
