- it uses inheritance to delegate the implementation responsibility for different parts of an algorithm to subclasses

- it is done without the help of interfaces

Take SaaS apps. They can have multiple paid plans to offer different features to users.

- let's suppose this such app has aP rofile Configuration step that differs depending on the user's plan
- the configuration process consist of 4 parts:
    - (a) Account Security
    - (b) Email Integration
    - (c) Support Method
    - (d) Payments Method

In the BASIC plan:
- (a)
    - additional Security Question
- (b)
    - custom mail server
- (c)
    - custom "Contact Us" page
- (d)
    - PayPal

In the PREMIUM plan:
- (a)
    - Security Question of 2FA
- (b)
    - MailChimp integration
- (c)
    - cover by InterCom service
- (d)
    - PayPal or Stripe


There is a standard backbone with the Profile Configuration process, in the sense that it has to deal with the 4 parts. The individual implementations for these differ based on the plan the user has. This might be implemented using conditionals, but this solution could get easily out of control and the code can become difficult to maintain